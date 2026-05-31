const curriculum = {
  Physics: [
    "1. Making measurements",
    "2. Describing motion",
    "3. Forces and motion",
    "4. Turning effects",
    "5. Forces and matter",
    "6. Energy stores and transfers",
    "7. Energy resources",
    "8. Work and power",
    "9. The kinetic particle model of matter",
    "10. Thermal properties of matter",
    "11. Thermal energy transfers",
    "12. Sound",
    "13. Light",
    "14. Properties of waves",
    "15. The electromagnetic spectrum",
    "16. Magnetism",
    "17. Static electricity",
    "18. Electrical quantities",
    "19. Electrical circuits",
    "20. Electromagnetic forces",
    "21. Electromagnetic induction",
    "22. The nuclear atom",
    "23. Radioactivity",
    "24. Earth and the Solar System",
    "25. Stars and the Universe"
  ],
  Chemistry: [
    "1. States of matter",
    "2. Atomic structure",
    "3. Chemical bonding",
    "4. Chemical formulae and equations",
    "5. Chemical calculations",
    "11. Acids and bases",
    "12. Preparation of salts",
    "13. The Periodic Table",
    "14. Metallic elements and alloys",
    "15. Reactivity of metals",
    "16. Extraction and corrosion of metals",
    "17. Chemistry of our environment",
    "18. Introduction to organic chemistry",
    "19. Reactions of organic compounds",
    "20. Petrochemicals and polymers",
    "21. Experimental design and separation techniques",
    "22. Chemical analysis"
  ],
  Mathematics: [
    "1. Review of number concepts",
    "2. Making sense of algebra",
    "3. Lines, angles and shapes",
    "4. Collecting, organising and displaying data",
    "5. Fractions, percentages and standard form",
    "6. Equations, factors and formulae",
    "7. Perimeter, area and volume",
    "8. Introduction to probability",
    "9. Sequences, surds and sets",
    "10. Straight lines and quadratic equations",
    "11. Pythagoras' theorem and similar shapes",
    "12. Averages and measures of spread",
    "14. Further solving of equations and inequalities",
    "16. Scatter diagrams and correlation"
  ]
};
const subjectMeta = {Physics:"0625 · 2026–2028",Chemistry:"0620 · 2026–2028",Mathematics:"0580 · 2025–2027"};
const banks = {
  Physics:[
    ["State one difference between speed and velocity.",2,"Speed has magnitude only; velocity has magnitude and direction."],
    ["A cyclist travels 180 m in 15 s. Calculate the average speed.",2,"12 m/s"],
    ["Explain why the temperature of a liquid remains constant while it boils.",3,"Energy supplied is used to overcome intermolecular forces rather than increase kinetic energy."],
    ["A wave has frequency 8.0 Hz and wavelength 2.5 m. Calculate its speed.",2,"v = fλ = 20 m/s"],
    ["Describe two ways to increase the strength of an electromagnet.",2,"Any two: increase current, add turns to coil, use a soft-iron core."],
    ["A lamp transfers 360 J in 30 s. Calculate its power.",2,"P = E/t = 12 W"],
    ["Describe the change in the nucleus when beta radiation is emitted.",2,"A neutron changes to a proton and an electron is emitted."],
    ["State the force that keeps a planet in orbit around a star.",1,"Gravitational force."],
    ["Draw a labelled diagram to show the reflection of a ray of light at a plane mirror.",3,"Diagram with normal; angle of incidence equals angle of reflection."],
    ["Explain why a seat belt reduces injury in a collision.",3,"It increases stopping time, reducing deceleration and hence resultant force."],
    ["A 6.0 Ω resistor carries a current of 0.50 A. Calculate the potential difference.",2,"V = IR = 3.0 V"]
  ],
  Chemistry:[
    ["Describe the arrangement and movement of particles in a gas.",3,"Particles are far apart, randomly arranged and move rapidly in random directions."],
    ["State the relative charge and relative mass of a proton.",2,"Charge +1; relative mass 1."],
    ["Calculate the relative formula mass of CaCO₃. [Ar: Ca=40, C=12, O=16]",2,"40 + 12 + (3 × 16) = 100."],
    ["Explain why graphite conducts electricity.",2,"It has delocalised electrons that can move through the structure."],
    ["State the products formed when hydrochloric acid reacts with sodium hydroxide.",2,"Sodium chloride and water."],
    ["Name the gas produced when a metal reacts with dilute acid and state its test.",2,"Hydrogen; a lighted splint gives a squeaky pop."],
    ["Explain why increasing temperature usually increases the rate of a reaction.",3,"Particles have more kinetic energy, collide more frequently and more collisions exceed activation energy."],
    ["State two properties of transition elements.",2,"Any two: high density, high melting point, coloured compounds, catalytic activity, variable oxidation states."],
    ["Write a word equation for complete combustion of methane.",2,"methane + oxygen → carbon dioxide + water"],
    ["Suggest one method used to reduce acid rain.",1,"Any one: low-sulfur fuels, flue gas desulfurisation, catalytic converters."],
    ["Describe how to separate a soluble salt from its aqueous solution.",3,"Heat to concentrate, allow to cool to crystallise, filter and dry crystals."]
  ],
  Mathematics:[
    ["Evaluate 3⁴ × 3² ÷ 3³.",2,"3³ = 27."],
    ["Solve 5x − 7 = 3x + 9.",2,"2x = 16, so x = 8."],
    ["Factorise fully: 6x² − 15x.",2,"3x(2x − 5)."],
    ["The points A(2, 5) and B(8, 17) lie on a straight line. Find its gradient.",2,"(17 − 5)/(8 − 2) = 2."],
    ["Calculate the area of a circle of radius 7 cm. Give your answer in terms of π.",2,"49π cm²."],
    ["A right-angled triangle has hypotenuse 13 cm and one shorter side 5 cm. Find the third side.",3,"Using Pythagoras: √(13² − 5²) = 12 cm."],
    ["A bag contains 5 red, 3 blue and 2 green counters. Find the probability of choosing a blue counter.",2,"3/10."],
    ["Find the median of: 4, 8, 3, 11, 7, 9, 5.",2,"Ordered: 3,4,5,7,8,9,11. Median = 7."],
    ["Describe fully the single transformation that maps a shape to its image after every point moves 4 units right and 3 units down.",2,"Translation by vector (4, −3)."],
    ["Solve the simultaneous equations: x + y = 11 and x − y = 3.",3,"Adding gives 2x = 14, x = 7 and y = 4."],
    ["Expand and simplify: (x + 4)(x − 3).",2,"x² + x − 12."]
  ]
};
let state={subject:"Physics",chapters:["2. Describing motion","3. Forces and motion"],questions:[],seed:0};
const $=id=>document.getElementById(id);
function renderSubjects(){ $("subject-grid").innerHTML=Object.keys(curriculum).map(s=>`<button type="button" class="subject-card ${s===state.subject?"active":""}" data-subject="${s}">${s}<span>${subjectMeta[s]}</span></button>`).join(""); document.querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>{state.subject=b.dataset.subject;state.chapters=[];render();});}
function renderChapters(){const search=$("chapter-input").value.toLowerCase();$("chapter-options").innerHTML=curriculum[state.subject].filter(c=>c.toLowerCase().includes(search)).map(c=>`<button class="chapter-option ${state.chapters.includes(c)?"selected":""}" type="button" data-chapter="${c}">${c}</button>`).join("");document.querySelectorAll("[data-chapter]").forEach(b=>b.onclick=()=>{if(!state.chapters.includes(b.dataset.chapter))state.chapters.push(b.dataset.chapter);render();});$("selected-chapters").innerHTML=state.chapters.length?state.chapters.map(c=>`<span class="chapter-chip">${c}<button type="button" data-remove="${c}">×</button></span>`).join(""):`<span class="chapter-chip">Choose at least one chapter</span>`;document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{state.chapters=state.chapters.filter(c=>c!==b.dataset.remove);render();});}
function updateSummary(){const marks=+$("marks").value||40;$("sum-subject").textContent=state.subject;$("sum-chapters").textContent=`${state.chapters.length} selected`;$("sum-marks").textContent=`${marks} marks`;$("sum-questions").textContent=`~${Math.max(4,Math.ceil(marks/3))} questions`;}
function render(){renderSubjects();renderChapters();updateSummary();}
function addCustom(){const val=$("chapter-input").value.trim();if(val&&!state.chapters.includes(val)){state.chapters.push(val);$("chapter-input").value="";render();}}
function buildQuestions(){const target=+$("marks").value;const source=banks[state.subject];let result=[],total=0,i=state.seed%source.length;while(total<target){let q=source[i%source.length];let available=target-total;let marks=Math.min(q[1],available);result.push({text:q[0],marks,answer:q[2],chapter:state.chapters[result.length%state.chapters.length]});total+=marks;i++;}state.questions=result;state.seed++;}
function renderPaper(){const title=$("paper-title").value||"Chapter Assessment",marks=+$("marks").value,duration=$("duration").value,chapters=state.chapters.join(" · ");$("preview-subtitle").textContent=`${state.subject} · ${marks} marks`;$("paper-output").innerHTML=`<header class="paper-head"><h2>${title}</h2><p>Cambridge IGCSE ${state.subject} · ${subjectMeta[state.subject]}</p><p>${chapters}</p></header><div class="paper-meta"><span>Name: __________________________</span><span>Time: ${duration}</span><span>Total: ${marks} marks</span></div><div class="instructions"><b>Instructions:</b> Answer all questions. Show your working clearly where appropriate. Write your answers in the spaces provided.</div>${state.questions.map((q,i)=>`<div class="question"><b>${i+1}.</b><div>${q.text}<div class="work-lines">${"<i></i>".repeat(Math.max(1,q.marks-1))}</div></div><span class="marks">[${q.marks}]</span></div>`).join("")}`;$("answer-output").innerHTML=`<h2>${title} · Answer key</h2><p>${state.subject} · ${marks} marks</p>${state.questions.map((q,i)=>`<div class="answer-item"><b>${i+1}. [${q.marks}]</b> ${q.answer}</div>`).join("")}`;}
function openPreview(){if(!state.chapters.length){alert("Please choose at least one chapter.");return;}buildQuestions();renderPaper();$("preview").classList.add("open");$("preview").setAttribute("aria-hidden","false");}
$("paper-form").onsubmit=e=>{e.preventDefault();openPreview();};$("chapter-input").oninput=renderChapters;$("chapter-input").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();addCustom();}};$("add-custom").onclick=addCustom;$("marks").oninput=updateSummary;$("close-preview").onclick=()=>$("preview").classList.remove("open");$("print-paper").onclick=()=>window.print();$("regenerate").onclick=()=>{buildQuestions();renderPaper();};$("answer-toggle").onclick=()=>{const p=$("answer-output");p.classList.toggle("hidden");$("answer-toggle").textContent=p.classList.contains("hidden")?"Show answer key":"Hide answer key";};render();
