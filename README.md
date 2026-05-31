# Paperwise

Static Paperwise UI with a small backend reference check.

## Local preview

Run:

```powershell
& "C:\Users\bhumim\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" server.js
```

Then open `http://localhost:4173`.

Before each paper is generated, the UI calls the backend. The backend refreshes the PMT past-paper archive status and returns exam-style guidance. Generated questions remain original and chapter-matched.

## Netlify

The included `netlify.toml` deploys the static UI and `netlify/functions/reference-refresh.js`.
