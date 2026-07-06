// src/bank/index.js — combine subject banks and expose loaders that return
// questions in the pipeline shape:
//   { text, marks, chapter, type, difficulty, options?, answer?, diagram? }

const physics = require("./physics");
const chemistry = require("./chemistry");
const maths = require("./maths");
const mcq = require("./mcq");
const { resolveDiagram } = require("./diagrams");

const BANK = { Physics: physics, Chemistry: chemistry, Mathematics: maths };
const MCQ_BANK = mcq;

const DIFF = { E: "Easy", M: "Medium", H: "Hard" };
const TYPE = { T: "Theory", S: "Sums", Q: "Questions", M: "MCQ" };

// Normalise a bank entry, which may be either the legacy array form
// [text, marks, difficulty, type] or an object form
// { text, marks, difficulty|d, type|t, options, answer, diagram }.
function normalizeEntry(entry, chapter) {
  let text, marks, d, t, options, answer, diagram;
  if (Array.isArray(entry)) {
    [text, marks, d, t] = entry;
  } else {
    text = entry.text;
    marks = entry.marks != null ? entry.marks : 1;
    d = entry.difficulty || entry.d;
    t = entry.type || entry.t;
    options = entry.options;
    answer = entry.answer;
    diagram = entry.diagram;
  }
  const out = {
    text,
    marks,
    chapter,
    type: TYPE[t] || t || "Questions",
    difficulty: DIFF[d] || d || "Medium",
    source: "bank"
  };
  const svg = resolveDiagram(diagram);
  if (svg) out.diagram = svg;
  if (Array.isArray(options)) {
    out.options = options;
    if (typeof answer === "number") out.answer = answer;
  }
  return out;
}

// Return all built-in (theory/sums) questions for a subject restricted to the
// selected chapters.
function loadBankQuestions(subject, selectedChapterNames) {
  const subjectBank = BANK[subject];
  if (!subjectBank) return [];
  const wanted = new Set(selectedChapterNames);
  const out = [];
  for (const [chapter, entries] of Object.entries(subjectBank)) {
    if (!wanted.has(chapter)) continue;
    for (const entry of entries) out.push(normalizeEntry(entry, chapter));
  }
  return out;
}

// Return multiple-choice questions (type "MCQ", 1 mark each) for a subject
// restricted to the selected chapters.
function loadMcqQuestions(subject, selectedChapterNames) {
  const subjectBank = MCQ_BANK[subject];
  if (!subjectBank) return [];
  const wanted = new Set(selectedChapterNames);
  const out = [];
  for (const [chapter, entries] of Object.entries(subjectBank)) {
    if (!wanted.has(chapter)) continue;
    for (const entry of entries) {
      const q = normalizeEntry(entry, chapter);
      q.type = "MCQ";
      q.marks = 1; // IGCSE MCQs are always 1 mark
      out.push(q);
    }
  }
  return out;
}

module.exports = { BANK, MCQ_BANK, loadBankQuestions, loadMcqQuestions };
