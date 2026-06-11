const PMT_ARCHIVE_URL = "https://www.physicsandmathstutor.com/past-papers/";

function summarizeArchive(html, sourceUrl) {
  const links = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(match => match[1]);
  const relevantLinks = links.filter(link => /past-papers|gcse|igcse|physics|chemistry|maths/i.test(link));
  return {
    source: sourceUrl,
    checkedAt: new Date().toISOString(),
    archiveReachable: true,
    relevantArchiveLinks: new Set(relevantLinks).size,
    guidance: [
      "Use concise exam-style prompts.",
      "Include calculation working space and mark allocations.",
      "Use diagrams only when they carry information needed to answer the question.",
      "Generate original chapter-matched questions; do not reproduce source wording."
    ]
  };
}

function pickSource(event) {
  const raw = (event && event.queryStringParameters && event.queryStringParameters.url) || "";
  if (!raw) return { url: PMT_ARCHIVE_URL, custom: false };
  try {
    const u = new URL(raw);
    if (u.protocol !== "http:" && u.protocol !== "https:") return { error: "Only http and https URLs are allowed." };
    return { url: u.toString(), custom: true };
  } catch (e) {
    return { error: "The provided reference link is not a valid URL." };
  }
}

exports.handler = async (event) => {
  const picked = pickSource(event);
  if (picked.error) {
    return {
      statusCode: 400,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
      body: JSON.stringify({ archiveReachable: false, error: picked.error, checkedAt: new Date().toISOString() })
    };
  }
  const targetUrl = picked.url;
  try {
    const response = await fetch(targetUrl, {
      headers: { "User-Agent": "PaperwiseReferenceChecker/1.0" }
    });
    if (!response.ok) throw new Error(`Source returned ${response.status}`);
    const contentType = response.headers.get("content-type") || "";
    let summary;
    if (contentType.includes("text/html")) {
      summary = summarizeArchive(await response.text(), targetUrl);
    } else {
      summary = {
        source: targetUrl,
        checkedAt: new Date().toISOString(),
        archiveReachable: true,
        relevantArchiveLinks: 0,
        contentType,
        guidance: [
          "Use the provided reference for the style and difficulty of questions only.",
          "Do not reproduce source wording; generate original chapter-matched questions."
        ]
      };
    }
    return {
      statusCode: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
      body: JSON.stringify(summary)
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
      body: JSON.stringify({
        source: targetUrl,
        checkedAt: new Date().toISOString(),
        archiveReachable: false,
        error: picked.custom
          ? "The provided reference link could not be reached. Please verify the URL and try again."
          : "The PMT archive could not be refreshed. Please try again."
      })
    };
  }
};
