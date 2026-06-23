# IGCSE Paper Generator

An Express app that builds **Cambridge IGCSE** exam papers **live from past-paper PDFs** for:

- **Physics 0625**
- **Chemistry 0620**
- **Mathematics 0580**

## What it does

- Pick a **subject** and any **combination of chapters**.
- Set a **total mark** count.
- For **Physics & Chemistry**, split the marks into **Theory** and **Sums** (numerical).
  Some chapters have no sums — those simply contribute theory, and the Sums section
  draws numerical questions from whichever selected chapters provide them.
- Choose a **difficulty**: **Easy / Medium / Hard**.
- The server reads the supplied past-paper **PDFs**, extracts question parts with their
  marks, matches them to the selected chapters, classifies theory vs sums and difficulty,
  removes duplicates, and assembles a paper to the requested marks.

### No duplicates
Two questions with the **same wording that differ only in their numbers** are treated as
duplicates — every number is normalised to a placeholder before comparison, so only one
copy can appear in a paper.

## Source PDFs

The reference base is <https://pastpapers.co/caie/igcse>. That site is **Cloudflare-protected**,
so a server cannot crawl it directly. The reliable ways to provide source material are:

1. **Upload** question-paper PDFs (download them from pastpapers.co), or
2. **Paste direct PDF links** (one per line) to any reachable PDF, or
3. (Optional) provide an **index URL** to crawl for `_qp_` PDF links — works only if that
   page isn't behind a bot challenge.

Mark schemes (`_ms`), examiner reports (`_er`) and grade thresholds (`_gt`) are ignored.

## Run

```bash
npm install
npm start
# open http://localhost:4173
```

## Deploy (Netlify)

The frontend is served from `public/` and the Express API runs as a Netlify
Function (`netlify/functions/api.js`) via `serverless-http`; `netlify.toml`
routes `/api/*` and `/health` to it. Connect the repo in Netlify and deploy —
no build settings needed beyond what's in `netlify.toml`.

> Note: Netlify Functions cap request payloads at ~6 MB and free execution at
> ~10 s, so very large PDF uploads may need to be split.

## Project structure

```
server.js            Express server + /api routes
src/chapters.js      Subjects, chapters, keyword maps, sums hints
src/sources.js       Fetch PDF/HTML, harvest PDF links (Cloudflare-aware)
src/extract.js       PDF text -> question parts with marks
src/classify.js      Chapter / Theory-vs-Sums / difficulty classification
src/dedupe.js        Remove number-only duplicate questions
src/generate.js      Assemble paper to total marks + split + difficulty
public/              Frontend (form + preview, print to PDF)
```
