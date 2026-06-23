// src/classify.js
// Assign each extracted question a chapter, a type (Theory / Sums) and a
// difficulty (Easy / Medium / Hard).

const { CHAPTERS, SUBJECTS } = require("./chapters");

const NUMERIC_COMMANDS = /\b(calculate|find|determine|work out|how (many|much|far|long|fast)|evaluate|solve|estimate|compute)\b/i;
const UNIT = /\b\d+(\.\d+)?\s*(kg|g|mg|cm|mm|m|km|nm|s|ms|min|hz|khz|mhz|j|kj|mj|w|kw|mw|v|kv|mv|n|kn|pa|kpa|a|ma|ω|ohm|mol|dm|cm3|cm³|m3|m²|cm²|°c|°|k|%|μ)\b/i;
const EASY_COMMANDS = /^\s*(state|define|name|give|list|write down|identify|label|suggest one)\b/i;
const HARD_COMMANDS = /\b(explain why|describe and explain|deduce|justify|derive|compare|evaluate|discuss)\b/i;

function isSum(text) {
  return NUMERIC_COMMANDS.test(text) && (UNIT.test(text) || /\d/.test(text));
}

function classifyType(subject, text) {
  if (!SUBJECTS[subject] || !SUBJECTS[subject].split) return "Questions";
  return isSum(text) ? "Sums" : "Theory";
}

function classifyDifficulty(text, marks) {
  let score = 0;
  if (marks <= 2) score += 0;
  else if (marks <= 4) score += 1;
  else score += 2;
  if (EASY_COMMANDS.test(text)) score -= 1;
  if (HARD_COMMANDS.test(text)) score += 1;
  // Multi-step calculations (two or more numeric quantities) lean harder.
  const numbers = (text.match(/\d+(\.\d+)?/g) || []).length;
  if (isSum(text) && numbers >= 3) score += 1;
  if (text.length > 220) score += 1;
  if (score <= 0) return "Easy";
  if (score === 1 || score === 2) return "Medium";
  return "Hard";
}

// Pick the best-matching chapter among the chapters the user selected.
function classifyChapter(subject, text, selectedChapterNames) {
  const all = CHAPTERS[subject] || [];
  const pool = all.filter(c => selectedChapterNames.includes(c.name));
  const lower = text.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const chapter of pool) {
    let score = 0;
    for (const kw of chapter.keywords) {
      if (lower.includes(kw)) score += kw.includes(" ") ? 2 : 1; // phrases weigh more
    }
    if (score > bestScore) {
      bestScore = score;
      best = chapter.name;
    }
  }
  return bestScore > 0 ? best : null;
}

function classifyAll(subject, questions, selectedChapterNames) {
  const out = [];
  for (const q of questions) {
    const chapter = classifyChapter(subject, q.text, selectedChapterNames);
    if (!chapter) continue; // not relevant to the requested chapters
    out.push({
      text: q.text,
      marks: q.marks,
      chapter,
      type: classifyType(subject, q.text),
      difficulty: classifyDifficulty(q.text, q.marks)
    });
  }
  return out;
}

module.exports = { classifyAll, classifyType, classifyDifficulty, classifyChapter, isSum };
