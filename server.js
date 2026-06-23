// server.js — IGCSE paper generator (Express)
// Builds Physics / Chemistry / Mathematics papers live from past-paper PDFs.

const path = require("path");
const express = require("express");
const multer = require("multer");

const { SUBJECTS, CHAPTERS } = require("./src/chapters");
const { pdfToText, extractQuestions } = require("./src/extract");
const { fetchBytes, extractPdfLinks } = require("./src/sources");
const { classifyAll } = require("./src/classify");
const { dedupe } = require("./src/dedupe");
const { generate } = require("./src/generate");

const PORT = Number(process.env.PORT || 4173);
const REFERENCE_BASE = "https://pastpapers.co/caie/igcse";
const MAX_PDFS = 8;

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (_req, res) => res.json({ ok: true }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 12 * 1024 * 1024, files: MAX_PDFS }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/api/subjects", (_req, res) => {
  const subjects = Object.entries(SUBJECTS).map(([name, meta]) => ({
    name,
    code: meta.code,
    split: meta.split,
    chapters: CHAPTERS[name].map(c => ({ name: c.name, sums: c.sums }))
  }));
  res.json({ subjects, referenceBase: REFERENCE_BASE });
});

function parseChapters(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map(String);
  } catch { /* fall through */ }
  return String(value).split("|").map(s => s.trim()).filter(Boolean);
}

// Collect PDF buffers from uploaded files and/or pasted URLs (and an optional
// HTML index URL whose PDF links we follow). Returns buffers + per-source log.
async function collectPdfs({ files, urls, referenceUrl }) {
  const buffers = [];
  const log = [];

  for (const f of files || []) {
    buffers.push({ name: f.originalname, buffer: f.buffer });
    log.push({ source: f.originalname, kind: "upload", ok: true });
  }

  const urlList = [...(urls || [])];

  // If a reference/index URL is given, try to harvest question-paper PDF links.
  if (referenceUrl) {
    try {
      const res = await fetchBytes(referenceUrl);
      if (res.looksPdf) {
        urlList.push(res.url);
      } else {
        const links = extractPdfLinks(res.buffer.toString("utf8"), res.url).slice(0, MAX_PDFS);
        urlList.push(...links);
        log.push({ source: referenceUrl, kind: "index", ok: true, foundPdfLinks: links.length });
      }
    } catch (err) {
      log.push({ source: referenceUrl, kind: "index", ok: false, error: err.message, code: err.code || null });
    }
  }

  for (const url of [...new Set(urlList)].slice(0, MAX_PDFS - buffers.length)) {
    try {
      const res = await fetchBytes(url);
      if (!res.looksPdf) {
        log.push({ source: url, kind: "url", ok: false, error: "Not a PDF (or blocked)." });
        continue;
      }
      buffers.push({ name: url, buffer: res.buffer });
      log.push({ source: url, kind: "url", ok: true });
    } catch (err) {
      log.push({ source: url, kind: "url", ok: false, error: err.message, code: err.code || null });
    }
  }

  return { buffers, log };
}

app.post("/api/generate", upload.array("pdfs", MAX_PDFS), async (req, res) => {
  try {
    const subject = String(req.body.subject || "");
    if (!SUBJECTS[subject]) return res.status(400).json({ error: "Unknown subject." });

    const chapters = parseChapters(req.body.chapters);
    if (!chapters.length) return res.status(400).json({ error: "Select at least one chapter." });

    const totalMarks = Math.max(1, Number(req.body.totalMarks) || 0);
    const difficulty = ["Easy", "Medium", "Hard"].includes(req.body.difficulty) ? req.body.difficulty : "Medium";

    let split = null;
    if (SUBJECTS[subject].split) {
      const theory = Math.max(0, Number(req.body.theory) || 0);
      const sums = Math.max(0, Number(req.body.sums) || 0);
      if (theory + sums !== totalMarks) {
        return res.status(400).json({ error: `Theory + Sums (${theory + sums}) must equal total marks (${totalMarks}).` });
      }
      split = { theory, sums };
    }

    const urls = String(req.body.pdfUrls || "")
      .split(/[\n,]+/).map(s => s.trim()).filter(Boolean);
    const referenceUrl = String(req.body.referenceUrl || "").trim();

    const { buffers, log } = await collectPdfs({ files: req.files, urls, referenceUrl });

    if (!buffers.length) {
      return res.status(422).json({
        error: "No readable PDFs. Upload past-paper PDFs or paste direct PDF links — the reference index could not be crawled (likely Cloudflare-protected).",
        sources: log,
        referenceBase: REFERENCE_BASE
      });
    }

    // Parse every PDF -> questions.
    let raw = [];
    for (const { name, buffer } of buffers) {
      try {
        const text = await pdfToText(buffer);
        const qs = extractQuestions(text);
        raw.push(...qs);
        const entry = log.find(l => l.source === name);
        if (entry) entry.extracted = qs.length;
      } catch (err) {
        const entry = log.find(l => l.source === name);
        if (entry) { entry.ok = false; entry.error = `Parse failed: ${err.message}`; }
      }
    }

    const classified = classifyAll(subject, raw, chapters);
    const pool = dedupe(classified);
    const paper = generate(pool, { subject, totalMarks, split, difficulty });

    res.json({
      paper,
      diagnostics: {
        sources: log,
        rawQuestions: raw.length,
        matchedChapters: classified.length,
        uniqueQuestions: pool.length
      },
      referenceBase: REFERENCE_BASE
    });
  } catch (err) {
    res.status(500).json({ error: `Generation failed: ${err.message}` });
  }
});

// Run a standalone server only when executed directly (e.g. `npm start`).
// When imported (Netlify Function), just export the app.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`IGCSE paper generator running at http://localhost:${PORT}`);
  });
}

module.exports = app;
