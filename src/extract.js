// src/extract.js
// Turn raw PDF text from a CAIE past paper into discrete sub-questions, each
// with a mark value. CAIE papers mark every answerable part with "[n]", so we
// slice the text on those mark tokens and clean exam boilerplate away.

const pdfParse = require("pdf-parse/lib/pdf-parse.js");

async function pdfToText(buffer) {
  const data = await pdfParse(buffer);
  return (data && data.text) ? data.text : "";
}

const BOILERPLATE = [
  /©\s*UCLES[^\n]*/gi,
  /\b\d{4}\/\d{2}\/[A-Z]{1,2}\/[A-Z]\/\d{2}\b/g, // paper codes like 0625/22/M/J/23
  /\b\d{4}\/\d{2}\b/g,
  /\[?\s*Turn over\s*\]?/gi,
  /BLANK PAGE/gi,
  /DO NOT WRITE[^\n]*/gi,
  /Permission to reproduce[^\n]*/gi,
  /Cambridge (Assessment )?International[^\n]*/gi,
  /www\.[^\s]+/gi,
  /https?:\/\/[^\s]+/gi
];

function cleanSegment(raw) {
  let s = raw;
  for (const re of BOILERPLATE) s = s.replace(re, " ");
  s = s
    .replace(/\.{2,}/g, " ")   // dotted answer lines
    .replace(/_{2,}/g, " ")    // underscore answer lines
    .replace(/\s+/g, " ")
    .trim();
  // Drop leading question/part numbering such as "1", "(a)", "(ii)", "3 (b)"
  s = s.replace(/^(?:\d{1,2}\s*)?(?:\([a-z0-9ivx]{1,4}\)\s*){0,3}/i, "").trim();
  // If a long run captured several parts, keep the final readable sentence span.
  if (s.length > 480) {
    const tail = s.slice(-480);
    const idx = tail.search(/[A-Z]/);
    s = (idx >= 0 ? tail.slice(idx) : tail).trim();
  }
  return s;
}

// Extract [{ text, marks }] from one paper's text.
function extractQuestions(text) {
  const clean = String(text || "").replace(/\r/g, "\n");
  const out = [];
  const re = /\[(\d{1,2})\]/g;
  let last = 0;
  let m;
  while ((m = re.exec(clean)) !== null) {
    const marks = Number(m[1]);
    const segment = clean.slice(last, m.index);
    last = re.lastIndex;
    if (marks < 1 || marks > 15) continue;
    const cleaned = cleanSegment(segment);
    if (cleaned.length < 25 || cleaned.length > 480) continue;
    if (!/[a-zA-Z]/.test(cleaned)) continue;
    // Must look like a prompt: contain a command word or end with a question mark.
    if (!/[?]|\b(state|describe|explain|calculate|find|determine|work out|define|give|name|suggest|complete|draw|show|write|identify|measure|deduce|estimate)\b/i.test(cleaned)) continue;
    out.push({ text: cleaned, marks });
  }
  return out;
}

module.exports = { pdfToText, extractQuestions, cleanSegment };
