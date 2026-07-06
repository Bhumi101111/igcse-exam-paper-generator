// src/bank/diagrams.js
// Reusable inline SVG figures for exam questions. IGCSE papers are heavily
// diagram-based, so bank questions can reference a named figure here (or embed
// their own raw SVG string). Each figure is a self-contained <svg> string with
// no external assets, so it renders in the browser preview and when printed.
//
// Keep figures simple, black-on-white and print-friendly (thin strokes, no
// fills that waste toner). Reference a figure from a bank entry with
// `diagram: "figureName"`; the loader resolves the name to the SVG below.

const S = (inner, w = 320, h = 160) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ` +
  `role="img" font-family="Arial, sans-serif" font-size="12">` +
  `<rect x="0" y="0" width="${w}" height="${h}" fill="#ffffff"/>${inner}</svg>`;

const stroke = 'fill="none" stroke="#111" stroke-width="1.6"';

const DIAGRAMS = {
  // A ruler measuring a rod — measurement chapter.
  rulerMeasurement: S(`
    <line x1="20" y1="60" x2="300" y2="60" ${stroke}/>
    ${Array.from({ length: 29 }, (_, i) => {
      const x = 20 + i * 10;
      const tall = i % 5 === 0;
      return `<line x1="${x}" y1="60" x2="${x}" y2="${tall ? 46 : 52}" stroke="#111" stroke-width="1"/>` +
        (tall ? `<text x="${x}" y="42" text-anchor="middle">${i / 5}</text>` : "");
    }).join("")}
    <rect x="60" y="70" width="150" height="18" ${stroke}/>
    <text x="135" y="108" text-anchor="middle">metal rod</text>
    <text x="160" y="130" text-anchor="middle">scale in cm</text>
  `),

  // Distance–time graph (constant then stationary).
  distanceTimeGraph: S(`
    <line x1="40" y1="20" x2="40" y2="130" ${stroke}/>
    <line x1="40" y1="130" x2="300" y2="130" ${stroke}/>
    <polyline points="40,130 140,60 260,60" ${stroke}/>
    <text x="20" y="80" transform="rotate(-90 20 80)" text-anchor="middle">distance</text>
    <text x="170" y="150" text-anchor="middle">time</text>
  `),

  // Speed–time graph (uniform acceleration).
  speedTimeGraph: S(`
    <line x1="40" y1="20" x2="40" y2="130" ${stroke}/>
    <line x1="40" y1="130" x2="300" y2="130" ${stroke}/>
    <line x1="40" y1="130" x2="260" y2="45" ${stroke}/>
    <text x="20" y="80" transform="rotate(-90 20 80)" text-anchor="middle">speed</text>
    <text x="170" y="150" text-anchor="middle">time</text>
  `),

  // Beam balanced on a pivot with two loads — moments.
  seesawMoments: S(`
    <line x1="30" y1="80" x2="290" y2="80" ${stroke}/>
    <polygon points="160,80 150,110 170,110" ${stroke}/>
    <rect x="45" y="60" width="26" height="20" ${stroke}/>
    <rect x="250" y="60" width="26" height="20" ${stroke}/>
    <line x1="58" y1="80" x2="58" y2="120" stroke="#111" stroke-width="1"/>
    <line x1="263" y1="80" x2="263" y2="120" stroke="#111" stroke-width="1"/>
    <text x="58" y="135" text-anchor="middle">W1</text>
    <text x="263" y="135" text-anchor="middle">W2</text>
    <text x="110" y="55" text-anchor="middle">d1</text>
    <text x="215" y="55" text-anchor="middle">d2</text>
  `),

  // Spring with load — Hooke's law.
  springLoad: S(`
    <line x1="60" y1="20" x2="120" y2="20" ${stroke}/>
    <path d="M90 20 q -12 8 0 16 q 12 8 0 16 q -12 8 0 16 q 12 8 0 16 q -12 8 0 16" ${stroke}/>
    <rect x="72" y="105" width="36" height="24" ${stroke}/>
    <text x="90" y="122" text-anchor="middle">load</text>
    <text x="150" y="70" >extension</text>
    <line x1="140" y1="30" x2="140" y2="105" stroke="#111" stroke-width="1" stroke-dasharray="3 3"/>
  `),

  // Light ray refracting through a glass block.
  refractionBlock: S(`
    <rect x="110" y="45" width="120" height="70" ${stroke}/>
    <line x1="40" y1="20" x2="140" y2="60" ${stroke}/>
    <line x1="140" y1="60" x2="200" y2="100" ${stroke}/>
    <line x1="200" y1="100" x2="290" y2="140" ${stroke}/>
    <line x1="140" y1="30" x2="140" y2="90" stroke="#111" stroke-width="1" stroke-dasharray="3 3"/>
    <text x="120" y="45" text-anchor="middle">i</text>
    <text x="160" y="80" text-anchor="middle">r</text>
    <text x="170" y="135" text-anchor="middle">glass block</text>
  `),

  // Transverse wave with wavelength & amplitude marked.
  transverseWave: S(`
    <line x1="30" y1="80" x2="300" y2="80" stroke="#111" stroke-width="1" stroke-dasharray="3 3"/>
    <path d="M30 80 q 22 -45 44 0 q 22 45 44 0 q 22 -45 44 0 q 22 45 44 0" ${stroke}/>
    <line x1="74" y1="35" x2="74" y2="80" stroke="#111" stroke-width="1"/>
    <text x="86" y="60">amplitude</text>
    <line x1="30" y1="120" x2="118" y2="120" stroke="#111" stroke-width="1"/>
    <text x="74" y="138" text-anchor="middle">wavelength</text>
  `),

  // Bar magnet with field lines.
  magnetField: S(`
    <rect x="120" y="66" width="80" height="28" ${stroke}/>
    <text x="135" y="85" text-anchor="middle">N</text>
    <text x="185" y="85" text-anchor="middle">S</text>
    <path d="M120 80 C 90 30 230 30 200 80" ${stroke}/>
    <path d="M120 80 C 90 130 230 130 200 80" ${stroke}/>
    <path d="M120 80 C 70 20 250 20 200 80" ${stroke}/>
    <path d="M120 80 C 70 140 250 140 200 80" ${stroke}/>
  `),

  // Simple circuit: cell, switch, lamp.
  simpleCircuit: S(`
    <rect x="40" y="40" width="240" height="80" ${stroke}/>
    <line x1="150" y1="40" x2="150" y2="30" ${stroke}/>
    <line x1="140" y1="30" x2="160" y2="30" stroke="#111" stroke-width="3"/>
    <line x1="146" y1="24" x2="154" y2="24" stroke="#111" stroke-width="1.4"/>
    <circle cx="160" cy="120" r="12" ${stroke}/>
    <line x1="152" y1="112" x2="168" y2="128" stroke="#111" stroke-width="1"/>
    <line x1="168" y1="112" x2="152" y2="128" stroke="#111" stroke-width="1"/>
    <line x1="40" y1="80" x2="40" y2="80" ${stroke}/>
    <line x1="252" y1="40" x2="268" y2="30" ${stroke}/>
    <text x="160" y="150" text-anchor="middle">lamp</text>
  `),

  // Atom shell diagram (2,8,1 — sodium-like).
  atomShells: S(`
    <circle cx="160" cy="80" r="10" ${stroke}/>
    <circle cx="160" cy="80" r="30" ${stroke}/>
    <circle cx="160" cy="80" r="55" ${stroke}/>
    <text x="160" y="84" text-anchor="middle">+</text>
    <circle cx="160" cy="50" r="3" fill="#111"/><circle cx="160" cy="110" r="3" fill="#111"/>
    <circle cx="130" cy="65" r="3" fill="#111"/><circle cx="190" cy="65" r="3" fill="#111"/>
    <circle cx="130" cy="95" r="3" fill="#111"/><circle cx="190" cy="95" r="3" fill="#111"/>
    <circle cx="120" cy="80" r="3" fill="#111"/><circle cx="200" cy="80" r="3" fill="#111"/>
    <circle cx="160" cy="25" r="3" fill="#111"/>
    <text x="245" y="84" text-anchor="middle">2,8,1</text>
  `),

  // Fractional distillation column of crude oil.
  distillationColumn: S(`
    <polygon points="120,140 120,30 200,20 200,140" ${stroke}/>
    ${[45, 68, 91, 114].map(y => `<line x1="120" y1="${y}" x2="200" y2="${y - 3}" stroke="#111" stroke-width="1"/>`).join("")}
    <line x1="120" y1="140" x2="90" y2="140" ${stroke}/>
    <text x="70" y="144" text-anchor="middle">heat</text>
    <text x="230" y="35">gases</text>
    <text x="230" y="90">kerosene</text>
    <text x="230" y="135">bitumen</text>
  `),

  // Right-angled triangle for Pythagoras.
  rightTriangle: S(`
    <polygon points="60,130 240,130 60,30" ${stroke}/>
    <rect x="60" y="115" width="15" height="15" ${stroke}/>
    <text x="45" y="85" text-anchor="middle">a</text>
    <text x="150" y="148" text-anchor="middle">b</text>
    <text x="160" y="70" text-anchor="middle">c</text>
  `),

  // Angles on parallel lines cut by a transversal.
  parallelLines: S(`
    <line x1="30" y1="55" x2="290" y2="55" ${stroke}/>
    <line x1="30" y1="110" x2="290" y2="110" ${stroke}/>
    <line x1="90" y1="25" x2="230" y2="140" ${stroke}/>
    <text x="150" y="48">a</text>
    <text x="170" y="128">b</text>
    <text x="20" y="52">L1</text>
    <text x="20" y="108">L2</text>
  `),

  // Pie chart (data handling).
  pieChart: S(`
    <circle cx="120" cy="80" r="55" ${stroke}/>
    <line x1="120" y1="80" x2="120" y2="25" ${stroke}/>
    <line x1="120" y1="80" x2="172" y2="98" ${stroke}/>
    <line x1="120" y1="80" x2="80" y2="125" ${stroke}/>
    <text x="145" y="55">A</text>
    <text x="140" y="105">B</text>
    <text x="95" y="95">C</text>
  `)
};

// Resolve a diagram reference to raw SVG. Accepts either a named figure or a
// raw SVG string (returned unchanged). Returns null if unknown/empty.
function resolveDiagram(ref) {
  if (!ref) return null;
  if (typeof ref === "string" && ref.trim().startsWith("<svg")) return ref;
  return DIAGRAMS[ref] || null;
}

module.exports = { DIAGRAMS, resolveDiagram };
