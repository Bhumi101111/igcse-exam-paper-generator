// public/app.js — frontend for the IGCSE paper generator.

const state = {
  subjects: [],
  referenceBase: "",
  subject: null,
  split: false,
  chapters: [],          // all chapters for current subject [{name, sums}]
  selected: new Set()
};

const $ = id => document.getElementById(id);

async function init() {
  const res = await fetch("/api/subjects");
  const data = await res.json();
  state.subjects = data.subjects;
  state.referenceBase = data.referenceBase;
  $("reference-link").href = state.referenceBase;
  $("reference-link").textContent = state.referenceBase.replace(/^https?:\/\//, "");
  renderSubjects();
  selectSubject(state.subjects[0]);
  wireEvents();
}

function renderSubjects() {
  $("subjects").innerHTML = state.subjects.map(s =>
    `<button type="button" class="subject-card${state.subject && state.subject.name === s.name ? " active" : ""}" data-subject="${s.name}">
       ${s.name}<span>${s.code}${s.split ? " · theory + sums" : " · single section"}</span>
     </button>`
  ).join("");
  document.querySelectorAll("[data-subject]").forEach(btn => {
    btn.onclick = () => selectSubject(state.subjects.find(s => s.name === btn.dataset.subject));
  });
}

function selectSubject(subject) {
  state.subject = subject;
  state.split = subject.split;
  state.chapters = subject.chapters;
  state.selected = new Set();
  $("split-row").classList.toggle("hidden", !subject.split);
  renderSubjects();
  renderChapters();
  renderSelected();
  validateSplit();
}

function renderChapters() {
  const filter = $("chapter-search").value.toLowerCase();
  $("chapters").innerHTML = state.chapters
    .filter(c => c.name.toLowerCase().includes(filter))
    .map(c => `<button type="button" class="chapter-option${state.selected.has(c.name) ? " selected" : ""}" data-chapter="${encodeURIComponent(c.name)}">
        ${c.name}${state.split ? `<span class="tag">${c.sums ? "theory + sums" : "theory only"}</span>` : ""}
      </button>`)
    .join("");
  document.querySelectorAll("[data-chapter]").forEach(btn => {
    btn.onclick = () => {
      const name = decodeURIComponent(btn.dataset.chapter);
      if (state.selected.has(name)) state.selected.delete(name);
      else state.selected.add(name);
      renderChapters();
      renderSelected();
    };
  });
}

function renderSelected() {
  const names = [...state.selected];
  $("selected-chapters").innerHTML = names.length
    ? names.map(n => `<span class="chip">${n}<button type="button" data-remove="${encodeURIComponent(n)}">×</button></span>`).join("")
    : `<span class="hint">No chapters selected yet.</span>`;
  document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.onclick = () => { state.selected.delete(decodeURIComponent(btn.dataset.remove)); renderChapters(); renderSelected(); };
  });
}

function validateSplit() {
  if (!state.split) { $("split-error").textContent = ""; return true; }
  const total = Number($("total-marks").value) || 0;
  const sum = (Number($("theory-marks").value) || 0) + (Number($("sums-marks").value) || 0);
  const ok = sum === total;
  $("split-error").textContent = ok ? "" : `Theory + Sums (${sum}) must equal total marks (${total}).`;
  return ok;
}

function wireEvents() {
  $("chapter-search").oninput = renderChapters;
  $("total-marks").oninput = validateSplit;
  $("theory-marks").oninput = validateSplit;
  $("sums-marks").oninput = validateSplit;
  $("builder").onsubmit = onGenerate;
  $("print").onclick = () => window.print();
}

async function onGenerate(e) {
  e.preventDefault();
  if (!state.selected.size) { setStatus("Select at least one chapter.", true); return; }
  if (!validateSplit()) { setStatus("Fix the theory/sums split.", true); return; }

  const fd = new FormData();
  fd.append("subject", state.subject.name);
  fd.append("chapters", JSON.stringify([...state.selected]));
  fd.append("totalMarks", $("total-marks").value);
  fd.append("difficulty", $("difficulty").value);
  if (state.split) {
    fd.append("theory", $("theory-marks").value);
    fd.append("sums", $("sums-marks").value);
  }
  fd.append("pdfUrls", $("pdf-urls").value);
  fd.append("referenceUrl", $("reference-url").value);
  for (const file of $("pdf-files").files) fd.append("pdfs", file);

  setStatus("Reading past papers and building your paper…");
  $("generate").disabled = true;
  try {
    const res = await fetch("/api/generate", { method: "POST", body: fd });
    const data = await res.json();
    if (!res.ok) {
      setStatus(data.error || "Generation failed.", true);
      renderDiagnostics(data.sources ? { sources: data.sources } : null, null);
      return;
    }
    renderDiagnostics(data.diagnostics, data.paper);
    renderPaper(data.paper);
    setStatus(`Done — built ${data.paper.builtMarks} of ${data.paper.totalMarks} marks.`);
    $("print").disabled = false;
  } catch (err) {
    setStatus(`Network error: ${err.message}`, true);
  } finally {
    $("generate").disabled = false;
  }
}

function setStatus(msg, isError) {
  const el = $("status");
  el.textContent = msg;
  el.style.color = isError ? "var(--error)" : "var(--muted)";
}

function renderDiagnostics(diag, paper) {
  if (!diag) { $("diagnostics").innerHTML = ""; return; }
  const parts = [];
  if (diag.sources) {
    parts.push(diag.sources.map(s =>
      `<div class="${s.ok ? "src-ok" : "src-bad"}">${s.ok ? "✓" : "✗"} ${s.kind}: ${escapeHtml(shorten(s.source))}${s.extracted != null ? ` — ${s.extracted} questions` : ""}${s.error ? ` — ${escapeHtml(s.error)}` : ""}</div>`
    ).join(""));
  }
  if (diag.uniqueQuestions != null) {
    parts.push(`<div>Pool: ${diag.rawQuestions} parsed → ${diag.matchedChapters} matched → ${diag.uniqueQuestions} unique.</div>`);
  }
  if (paper && paper.notes && paper.notes.length) {
    parts.push(paper.notes.map(n => `<div class="note">⚠ ${escapeHtml(n)}</div>`).join(""));
  }
  $("diagnostics").innerHTML = parts.join("");
}

function renderPaper(paper) {
  const chapters = [...state.selected].join(" · ");
  let html = `<h2>${state.subject.name} — Chapter Assessment</h2>
    <div class="paper-meta">
      <span>Cambridge IGCSE ${state.subject.name} · ${state.subject.code}</span>
      <span>Total: ${paper.totalMarks} marks</span>
      <span>Difficulty: ${paper.difficulty}</span>
    </div>
    <div class="paper-meta"><span>${escapeHtml(chapters)}</span></div>`;

  for (const section of paper.sections) {
    if (!section.questions.length) continue;
    html += `<div class="section-head"><span>${section.type}</span><span>${section.marks} marks</span></div>`;
    for (const q of section.questions) {
      html += `<div class="q">
        <div class="qn">${q.n}.</div>
        <div class="qbody">${escapeHtml(q.text)}</div>
        <div class="qmarks">[${q.marks}]</div>
      </div>`;
    }
  }
  if (!paper.sections.some(s => s.questions.length)) {
    html += `<p class="placeholder">No questions matched the selected chapters in the provided PDFs. Try more chapters or different past papers.</p>`;
  }
  $("paper").innerHTML = html;
}

function shorten(s) { return s.length > 70 ? s.slice(0, 67) + "…" : s; }
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

init();
