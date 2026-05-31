const PMT_ARCHIVE_URL = "https://www.physicsandmathstutor.com/past-papers/";

function summarizeArchive(html) {
  const links = [...html.matchAll(/href=["']([^"']+)["']/gi)].map(match => match[1]);
  const relevantLinks = links.filter(link => /past-papers|gcse|igcse|physics|chemistry|maths/i.test(link));
  return {
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
  };
}

exports.handler = async () => {
  try {
    const response = await fetch(PMT_ARCHIVE_URL, {
      headers: { "User-Agent": "PaperwiseReferenceChecker/1.0" }
    });
    if (!response.ok) throw new Error(`PMT returned ${response.status}`);
    return {
      statusCode: 200,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
      body: JSON.stringify(summarizeArchive(await response.text()))
    };
  } catch (error) {
    return {
      statusCode: 502,
      headers: { "content-type": "application/json", "cache-control": "no-store" },
      body: JSON.stringify({
        source: PMT_ARCHIVE_URL,
        checkedAt: new Date().toISOString(),
        archiveReachable: false,
        error: "The PMT archive could not be refreshed. Please try again."
      })
    };
  }
};
