// src/generate.js
// Assemble a paper from a deduped, classified question pool.
// Rules:
//  - Hit the requested total marks (Physics/Chemistry also honour a Theory/Sums split).
//  - Never repeat a question (no duplicates at all, including number-only variants,
//    which dedupe already removed). If the pool is too small, report a shortfall
//    rather than padding with duplicates.
//  - Prefer the chosen difficulty, falling back to other levels only to fill gaps.
//  - Some chapters have no sums: the Sums section simply draws from whichever
//    selected chapters do provide numerical questions.

const { SUBJECTS } = require("./chapters");

const DIFF_ORDER = ["Easy", "Medium", "Hard"];

// Order items to (1) prefer the requested difficulty, then (2) spread across
// chapters round-robin so one chapter doesn't dominate.
function orderItems(items, preferredDifficulty) {
  const byChapter = new Map();
  for (const it of items) {
    if (!byChapter.has(it.chapter)) byChapter.set(it.chapter, []);
    byChapter.get(it.chapter).push(it);
  }
  for (const list of byChapter.values()) {
    list.sort((a, b) => {
      const am = a.difficulty === preferredDifficulty ? 0 : 1;
      const bm = b.difficulty === preferredDifficulty ? 0 : 1;
      if (am !== bm) return am - bm;
      return DIFF_ORDER.indexOf(a.difficulty) - DIFF_ORDER.indexOf(b.difficulty);
    });
  }
  const queues = [...byChapter.values()];
  const ordered = [];
  let added = true;
  while (added) {
    added = false;
    for (const q of queues) {
      if (q.length) {
        ordered.push(q.shift());
        added = true;
      }
    }
  }
  // Push preferred-difficulty items to the front across the whole list too.
  return ordered.sort((a, b) => {
    const am = a.difficulty === preferredDifficulty ? 0 : 1;
    const bm = b.difficulty === preferredDifficulty ? 0 : 1;
    return am - bm;
  });
}

function fillSection(items, target, used, preferredDifficulty) {
  if (target <= 0) return { questions: [], marks: 0 };
  const ordered = orderItems(items.filter(it => !used.has(it._key)), preferredDifficulty);
  // Reserve low-mark questions (1-mark) as end-fillers so the target is hit
  // exactly instead of leaving a small remainder.
  const sequence = [...ordered.filter(it => it.marks >= 2), ...ordered.filter(it => it.marks < 2)];
  const questions = [];
  let marks = 0;
  for (const it of sequence) {
    if (marks >= target) break;
    if (used.has(it._key)) continue;
    if (it.marks > target - marks) continue; // keep within target
    used.add(it._key);
    questions.push(it);
    marks += it.marks;
  }
  return { questions, marks };
}

function generate(pool, options) {
  const { subject, totalMarks, split, difficulty } = options;
  // paperType: "mixed" (default) | "mcq" (multiple choice only) | "theory" (theory only)
  const paperType = options.paperType || "mixed";
  const meta = SUBJECTS[subject];
  const used = new Set();
  const sections = [];

  if (paperType === "mcq") {
    // IGCSE multiple-choice paper: every question is 1 mark, so the target
    // mark count equals the number of questions.
    const mcqPool = pool.filter(q => q.type === "MCQ");
    const mcq = fillSection(mcqPool, totalMarks, used, difficulty);
    sections.push({ type: "Multiple Choice", target: totalMarks, marks: mcq.marks, questions: mcq.questions });
  } else if (paperType === "theory") {
    // Theory-only paper: structured written questions, no numerical "sums"
    // section and no multiple choice.
    const theoryPool = pool.filter(q => q.type === "Theory" || q.type === "Questions");
    const theory = fillSection(theoryPool, totalMarks, used, difficulty);
    sections.push({ type: "Theory", target: totalMarks, marks: theory.marks, questions: theory.questions });
  } else if (meta && meta.split) {
    const theoryWant = Math.max(0, (split && split.theory) || 0);
    const sumsWant = Math.max(0, (split && split.sums) || 0);
    const theoryPool = pool.filter(q => q.type === "Theory");
    const sumsPool = pool.filter(q => q.type === "Sums");

    const theory = fillSection(theoryPool, theoryWant, used, difficulty);
    const sums = fillSection(sumsPool, sumsWant, used, difficulty);

    sections.push({ type: "Theory", target: theoryWant, marks: theory.marks, questions: theory.questions });
    sections.push({ type: "Sums", target: sumsWant, marks: sums.marks, questions: sums.questions });
  } else {
    const single = fillSection(pool, totalMarks, used, difficulty);
    sections.push({ type: "Questions", target: totalMarks, marks: single.marks, questions: single.questions });
  }

  // Number the questions sequentially across sections.
  let n = 0;
  for (const s of sections) {
    s.questions = s.questions.map(q => ({
      n: ++n,
      text: q.text,
      marks: q.marks,
      chapter: q.chapter,
      difficulty: q.difficulty,
      type: q.type,
      ...(q.diagram ? { diagram: q.diagram } : {}),
      ...(Array.isArray(q.options) ? { options: q.options } : {}),
      ...(typeof q.answer === "number" ? { answer: q.answer } : {})
    }));
  }

  const builtMarks = sections.reduce((sum, s) => sum + s.marks, 0);
  const shortfall = Math.max(0, totalMarks - builtMarks);
  const notes = [];
  for (const s of sections) {
    if (s.target > 0 && s.marks < s.target) {
      notes.push(`${s.type} section: only ${s.marks} of ${s.target} marks could be filled with unique, non-duplicate questions for the selected chapter(s). Select more chapters, lower the marks, or upload a past-paper PDF to extend the pool.`);
    }
  }

  return { subject, totalMarks, difficulty, paperType, sections, builtMarks, shortfall, notes, poolSize: pool.length };
}

module.exports = { generate };
