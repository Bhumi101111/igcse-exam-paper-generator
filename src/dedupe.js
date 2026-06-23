// src/dedupe.js
// Remove duplicate questions. The key rule (from the requirements): two
// questions that are the SAME wording but differ only in their numeric values
// are duplicates and only one may appear. We normalise every number to a
// placeholder so "calculate the speed of a 12 kg ..." and "... 18 kg ..."
// collapse to the same template.

function templateKey(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[−–—]/g, "-")
    .replace(/\d+(?:\.\d+)?/g, "#") // every number -> #
    .replace(/[^a-z#?]+/g, " ")     // keep letters, placeholders, question marks
    .replace(/\s+/g, " ")
    .trim();
}

// Keep the first occurrence of each template (per chapter, so genuinely
// different chapters can each contribute their own questions).
function dedupe(questions) {
  const seen = new Set();
  const out = [];
  for (const q of questions) {
    const key = `${q.chapter || "general"}::${templateKey(q.text)}`;
    if (key.length < 16) continue; // too short to be a real question template
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({ ...q, _key: key });
  }
  return out;
}

module.exports = { dedupe, templateKey };
