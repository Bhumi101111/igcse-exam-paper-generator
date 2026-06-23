// src/sources.js
// Fetch PDF (or HTML index) bytes from a URL. Server-side fetching of
// Cloudflare-protected sites (e.g. pastpapers.co) will be challenged; callers
// must handle the thrown error and fall back to uploads.

const MAX_BYTES = 12 * 1024 * 1024; // 12 MB per PDF

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  "Accept": "application/pdf,text/html,*/*",
  "Accept-Language": "en-GB,en;q=0.9"
};

function sanitizeUrl(raw) {
  const u = new URL(raw);
  if (u.protocol !== "http:" && u.protocol !== "https:") {
    throw new Error("Only http and https URLs are allowed.");
  }
  return u.toString();
}

async function fetchBytes(rawUrl) {
  const url = sanitizeUrl(rawUrl);
  const response = await fetch(url, { headers: BROWSER_HEADERS, redirect: "follow" });
  const contentType = (response.headers.get("content-type") || "").toLowerCase();
  if (!response.ok) {
    const err = new Error(`Source returned HTTP ${response.status}`);
    err.status = response.status;
    throw err;
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  // Detect Cloudflare / interstitial HTML where a PDF was expected.
  const looksPdf = contentType.includes("pdf") || url.toLowerCase().endsWith(".pdf") || buffer.slice(0, 5).toString("latin1") === "%PDF-";
  if (!looksPdf && contentType.includes("html")) {
    const head = buffer.toString("utf8", 0, 600).toLowerCase();
    if (head.includes("just a moment") || head.includes("cf-chl") || head.includes("enable javascript")) {
      const err = new Error("The source is protected by a Cloudflare challenge and cannot be fetched by the server. Download the PDF and upload it instead.");
      err.code = "CLOUDFLARE";
      throw err;
    }
  }
  return { url, contentType, buffer: buffer.subarray(0, MAX_BYTES), looksPdf };
}

// Given an HTML index page, return absolute links that look like question-paper PDFs.
function extractPdfLinks(html, baseUrl) {
  const links = new Set();
  const re = /href\s*=\s*["']([^"']+\.pdf)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    let href = m[1];
    try {
      href = new URL(href, baseUrl).toString();
    } catch {
      continue;
    }
    const lower = href.toLowerCase();
    // Question papers only: skip mark schemes (_ms), examiner reports (_er),
    // grade thresholds (_gt), syllabus (_sy) and confidential instructions (_ci).
    if (/_qp_|_qp\b|question.?paper/.test(lower) && !/_ms_|_er_|_gt_|_sy_|_ci_/.test(lower)) {
      links.add(href);
    }
  }
  return [...links];
}

module.exports = { fetchBytes, extractPdfLinks, sanitizeUrl };
