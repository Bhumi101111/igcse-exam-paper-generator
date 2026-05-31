const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 4173);
const ROOT = __dirname;
const PMT_ARCHIVE_URL = "https://www.physicsandmathstutor.com/past-papers/";
const TYPES = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json" };

function send(res, status, body, contentType = "application/json") {
  res.writeHead(status, { "content-type": contentType, "cache-control": "no-store" });
  res.end(body);
}

async function refreshReference(res) {
  try {
    const response = await fetch(PMT_ARCHIVE_URL, { headers: { "User-Agent": "PaperwiseReferenceChecker/1.0" } });
    if (!response.ok) throw new Error(`PMT returned ${response.status}`);
    const html = await response.text();
    const links = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(match => match[1]);
    const relevantLinks = links.filter(link => /past-papers|gcse|igcse|physics|chemistry|maths/i.test(link));
    send(res, 200, JSON.stringify({
      source: PMT_ARCHIVE_URL,
      checkedAt: new Date().toISOString(),
      archiveReachable: true,
      relevantArchiveLinks: new Set(relevantLinks).size,
      guidance: [
        "Use concise exam-style prompts.",
        "Include calculation working space and mark allocations.",
        "Use diagrams only when they carry information needed to answer the question.",
        "Generate original chapter-matched questions; do not reproduce source wording."
      ]
    }));
  } catch (error) {
    send(res, 502, JSON.stringify({
      source: PMT_ARCHIVE_URL,
      checkedAt: new Date().toISOString(),
      archiveReachable: false,
      error: "The PMT archive could not be refreshed. Please try again."
    }));
  }
}

http.createServer(async (req, res) => {
  if (req.url === "/.netlify/functions/reference-refresh") return refreshReference(res);
  const urlPath = req.url === "/" ? "/index.html" : decodeURIComponent(req.url.split("?")[0]);
  const filePath = path.resolve(ROOT, `.${urlPath}`);
  if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    return send(res, 404, "Not found", "text/plain");
  }
  send(res, 200, fs.readFileSync(filePath), TYPES[path.extname(filePath)] || "application/octet-stream");
}).listen(PORT, () => console.log(`Paperwise local server running at http://localhost:${PORT}`));
