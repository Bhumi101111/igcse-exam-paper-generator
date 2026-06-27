// src/bank/index.js — combine subject banks and expose a loader that returns
// questions in the pipeline shape: { text, marks, chapter, type, difficulty }.

const physics = require("./physics");
const chemistry = require("./chemistry");
const maths = require("./maths");

const BANK = { Physics: physics, Chemistry: chemistry, Mathematics: maths };

const DIFF = { E: "Easy", M: "Medium", H: "Hard" };
const TYPE = { T: "Theory", S: "Sums", Q: "Questions" };

// Return all built-in questions for a subject restricted to the selected chapters.
function loadBankQuestions(subject, selectedChapterNames) {
  const subjectBank = BANK[subject];
  if (!subjectBank) return [];
  const wanted = new Set(selectedChapterNames);
  const out = [];
  for (const [chapter, entries] of Object.entries(subjectBank)) {
    if (!wanted.has(chapter)) continue;
    for (const [text, marks, d, t] of entries) {
      out.push({
        text,
        marks,
        chapter,
        type: TYPE[t] || "Questions",
        difficulty: DIFF[d] || "Medium",
        source: "bank"
      });
    }
  }
  return out;
}

module.exports = { BANK, loadBankQuestions };
