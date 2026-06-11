// netlify/functions/reference-refresh.js
// Fetches a reference URL (HTML or PDF), extracts question-shaped segments,
// and returns those that mention keywords from the user's selected chapters.

const PMT_ARCHIVE_URL = "https://www.physicsandmathstutor.com/past-papers/";
const MAX_BYTES = 4 * 1024 * 1024; // 4 MB hard cap
const MAX_RETURN = 40;

// Use deep import to avoid pdf-parse's test-file probe on require().
let pdfParse = null;
function loadPdfParser() {
  if (pdfParse) return pdfParse;
  try {
    pdfParse = require("pdf-parse/lib/pdf-parse.js");
  } catch (e) {
    try { pdfParse = require("pdf-parse"); } catch (_) { pdfParse = null; }
  }
  return pdfParse;
}

function sanitizeUrl(raw) {
  if (!raw) return { url: PMT_ARCHIVE_URL, custom: false };
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") {
      return { error: "Only http and https URLs are allowed." };
    }
    return { url: u.toString(), custom: true };
  } catch (_) {
    return { error: "The provided reference link is not a valid URL." };
  }
}

function parseChaptersParam(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map(String);
  } catch (_) { /* not JSON, fall through */ }
  return String(value).split("|").map(s => s.trim()).filter(Boolean);
}

const STOP_WORDS = new Set([
  "the","of","and","to","in","a","an","for","from","with","at","by","its",
  "their","my","our","your","on","or","is","be","are","as","that","this",
  "into","using","when","over","not","more","other","than"
]);

function chapterKeywords(chapter) {
  const cleaned = chapter.replace(/^\d+\s*[\.\)]\s*/, "").toLowerCase();
  return cleaned.split(/[^a-z]+/).filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

async function fetchWithLimit(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "PaperwiseReferenceChecker/1.0",
      "Accept": "*/*"
    },
    redirect: "follow"
  });
  if (!response.ok) {
    const err = new Error(`Source returned ${response.status}`);
    err.status = response.status;
    throw err;
  }
  const contentType = response.headers.get("content-type") || "";
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.length > MAX_BYTES) {
    return { contentType, buffer: buffer.subarray(0, MAX_BYTES), truncated: true };
  }
  return { contentType, buffer, truncated: false };
}

function htmlToText(buffer) {
  return buffer.toString("utf-8")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/[ \t]+/g, " ");
}

async function extractText(url, contentType, buffer) {
  const lower = url.toLowerCase();
  const looksPdf = contentType.includes("pdf") || lower.endsWith(".pdf");
  if (looksPdf) {
    const parser = loadPdfParser();
    if (!parser) throw new Error("PDF parser not available in this environment.");
    const data = await parser(buffer);
    return data && data.text ? data.text : "";
  }
  return htmlToText(buffer);
}

function splitIntoCandidates(text) {
  const normalised = text.replace(/\r/g, "\n");
  const out = [];

  // Split on numbered question starts like "1.", "1)", "(1)" at the start of a line
  const numbered = normalised.split(/\n(?=\s*\(?\d{1,2}[\.\)]\s+[A-Z(])/g);
  for (const raw of numbered) {
    const segment = raw.trim();
    if (!segment) continue;
    const truncated = segment.length > 800 ? segment.slice(0, 800) : segment;
    if (truncated.length < 40 || truncated.length > 800) continue;
    if (!/[a-zA-Z]/.test(truncated)) continue;
    out.push(truncated);
  }

  // Also pull explicit question sentences ending with "?"
  const questionSentences = normalised.match(/[^.!?\n]{30,400}\?/g) || [];
  for (const q of questionSentences) {
    const trimmed = q.trim();
    if (trimmed.length >= 30 && trimmed.length <= 400) out.push(trimmed);
  }
  return out;
}

function extractMarks(segment) {
  const m = segment.match(/\[\s*(\d{1,2})\s*\]/) || segment.match(/\((\d{1,2})\s*marks?\)/i);
  if (m) {
    const n = Number(m[1]);
    if (n >= 1 && n <= 10) return n;
  }
  return null;
}

function cleanQuestion(segment) {
  return segment
    .replace(/\[\s*\d{1,2}\s*\]/g, "")
    .replace(/\(\s*\d{1,2}\s*marks?\s*\)/gi, "")
    .replace(/^\s*\(?\d{1,2}[\.\)]\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

const NUMERICAL_HINTS = /\b(calculate|find the|determine|work out|how much|how many|evaluate|solve)\b|\b\d+(\.\d+)?\s*(kg|g|cm|mm|m|km|s|ms|hz|j|kj|w|kw|v|n|pa|a|ma|mol|dm|°c|k)\b/i;

function inferType(subject, text) {
  if (subject === "Mathematics") return "Questions";
  return NUMERICAL_HINTS.test(text) ? "Numerical" : "Theory";
}

function matchToChapters(candidates, chapters, subject) {
  if (!chapters.length) return [];
  const chapterKw = chapters.map(c => ({ chapter: c, kw: chapterKeywords(c) }));
  const seen = new Set();
  const matched = [];

  for (const segment of candidates) {
    const cleaned = cleanQuestion(segment);
    if (cleaned.length < 25 || cleaned.length > 500) continue;
    const lower = cleaned.toLowerCase();

    let best = null, bestScore = 0;
    for (const { chapter, kw } of chapterKw) {
      if (!kw.length) continue;
      let score = 0;
      for (const w of kw) if (lower.includes(w)) score += 1;
      if (score > bestScore) { bestScore = score; best = chapter; }
    }
    if (!best || bestScore === 0) continue;

    const dedupeKey = lower.replace(/[^a-z0-9 ]/g, "").slice(0, 80);
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);

    matched.push({
      text: cleaned,
      marks: extractMarks(segment) || 2,
      chapter: best,
      type: inferType(subject, cleaned),
      score: bestScore,
      answer: "Refer to the original source for the marking scheme."
    });
  }

  matched.sort((a, b) => b.score - a.score);
  return matched.slice(0, MAX_RETURN);
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
    body: JSON.stringify(body)
  };
}

exports.handler = async (event) => {
  const params = (event && event.queryStringParameters) || {};
  const picked = sanitizeUrl(params.url);
  if (picked.error) {
    return jsonResponse(400, {
      archiveReachable: false,
      error: picked.error,
      checkedAt: new Date().toISOString()
    });
  }
  const subject = (params.subject || "").trim();
  const chapters = parseChaptersParam(params.chapters);
  const targetUrl = picked.url;

  try {
    const { contentType, buffer, truncated } = await fetchWithLimit(targetUrl);
    let text = "";
    let parseError = null;
    try {
      text = await extractText(targetUrl, contentType, buffer);
    } catch (e) {
      parseError = e && e.message ? e.message : String(e);
    }
    const candidates = text ? splitIntoCandidates(text) : [];
    const referenceQuestions = matchToChapters(candidates, chapters, subject);

    return jsonResponse(200, {
      source: targetUrl,
      checkedAt: new Date().toISOString(),
      archiveReachable: true,
      contentType,
      truncated,
      candidatesScanned: candidates.length,
      referenceQuestions,
      parseError
    });
  } catch (error) {
    return jsonResponse(502, {
      source: targetUrl,
      checkedAt: new Date().toISOString(),
      archiveReachable: false,
      error: picked.custom
        ? "The provided reference link could not be reached. Please verify the URL and try again."
        : "The PMT archive could not be refreshed. Please try again."
    });
  }
};
