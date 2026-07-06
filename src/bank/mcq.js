// src/bank/mcq.js — Cambridge IGCSE multiple-choice questions (Paper 1/2 style).
// Structure: { Subject: { "Chapter name": [ entry, ... ] } } where chapter
// names match src/chapters.js exactly so the loader can filter by selection.
//
// Each entry is an object:
//   { text, options: [A, B, C, D], answer: 0..3, d: "E"|"M"|"H", diagram? }
// Every MCQ is worth 1 mark (IGCSE convention). `answer` is the 0-based index
// of the correct option; `diagram` (optional) names a figure in diagrams.js.

module.exports = {
  Physics: {
    "1. Making measurements": [
      { text: "Which instrument is most suitable for measuring the diameter of a thin wire?", options: ["A metre rule", "A measuring cylinder", "A micrometer screw gauge", "A stopwatch"], answer: 2, d: "E" },
      { text: "A stone is lowered into a measuring cylinder. The reading rises from 25 cm³ to 41 cm³. What is the volume of the stone?", options: ["16 cm³", "25 cm³", "41 cm³", "66 cm³"], answer: 0, d: "E" },
      { text: "The rod shown is measured against the scale. What is its length?", options: ["3.0 cm", "5.0 cm", "6.0 cm", "15 cm"], answer: 1, d: "M", diagram: "rulerMeasurement" },
      { text: "Which of the following is the SI unit of mass?", options: ["newton", "gram", "kilogram", "litre"], answer: 2, d: "E" }
    ],
    "2. Describing motion": [
      { text: "The distance–time graph shows the motion of an object. During the flat section the object is:", options: ["accelerating", "stationary", "moving at constant speed", "decelerating"], answer: 1, d: "M", diagram: "distanceTimeGraph" },
      { text: "A car travels 150 m in 10 s. What is its average speed?", options: ["1.5 m/s", "15 m/s", "150 m/s", "1500 m/s"], answer: 1, d: "E" },
      { text: "Which quantity is a vector?", options: ["speed", "distance", "velocity", "time"], answer: 2, d: "M" },
      { text: "The gradient of a speed–time graph represents:", options: ["distance", "speed", "acceleration", "force"], answer: 2, d: "M", diagram: "speedTimeGraph" }
    ],
    "3. Forces and motion": [
      { text: "A resultant force of 20 N acts on a 4 kg mass. What is the acceleration?", options: ["0.2 m/s²", "5 m/s²", "16 m/s²", "80 m/s²"], answer: 1, d: "M" },
      { text: "What is the weight of a 2 kg object? (g = 10 N/kg)", options: ["0.2 N", "2 N", "12 N", "20 N"], answer: 3, d: "E" },
      { text: "An object moves at constant velocity. The resultant force on it is:", options: ["zero", "equal to its weight", "increasing", "in the direction of motion"], answer: 0, d: "M" }
    ],
    "4. Turning effects": [
      { text: "The beam is balanced on the pivot. This shows that the:", options: ["weights are equal", "clockwise and anticlockwise moments are equal", "distances are equal", "beam has no weight"], answer: 1, d: "M", diagram: "seesawMoments" },
      { text: "A force of 10 N acts 0.5 m from a pivot. The moment is:", options: ["0.05 N m", "5 N m", "10.5 N m", "20 N m"], answer: 1, d: "E" }
    ],
    "5. Forces and matter": [
      { text: "The extension of the spring is directly proportional to the load. This is:", options: ["Newton's law", "Hooke's law", "Ohm's law", "Boyle's law"], answer: 1, d: "E", diagram: "springLoad" },
      { text: "Pressure is calculated using:", options: ["force × area", "force ÷ area", "area ÷ force", "force + area"], answer: 1, d: "E" }
    ],
    "6. Energy stores and transfers": [
      { text: "A device is supplied with 300 J and usefully transfers 240 J. Its efficiency is:", options: ["60%", "80%", "125%", "540%"], answer: 1, d: "M" },
      { text: "Which energy store increases as a car is driven up a hill?", options: ["chemical", "gravitational potential", "nuclear", "elastic"], answer: 1, d: "E" }
    ],
    "13. Light": [
      { text: "The ray passes into the glass block as shown. At the surface the ray bends because the light:", options: ["speeds up", "changes speed", "stops", "reflects only"], answer: 1, d: "M", diagram: "refractionBlock" },
      { text: "The angle between an incident ray and the normal is the angle of:", options: ["reflection", "refraction", "incidence", "deviation"], answer: 2, d: "E" }
    ],
    "14. Properties of waves": [
      { text: "On the wave shown, the marked vertical distance from the middle to a crest is the:", options: ["wavelength", "frequency", "amplitude", "period"], answer: 2, d: "M", diagram: "transverseWave" },
      { text: "The number of waves passing a point per second is the:", options: ["wavelength", "amplitude", "frequency", "speed"], answer: 2, d: "E" }
    ],
    "16. Magnetism": [
      { text: "The field lines around the bar magnet point:", options: ["from S to N outside the magnet", "from N to S outside the magnet", "into the magnet", "in circles only"], answer: 1, d: "M", diagram: "magnetField" },
      { text: "Which metal is magnetically soft and used for electromagnet cores?", options: ["steel", "copper", "iron", "aluminium"], answer: 2, d: "M" }
    ]
  },

  Chemistry: {
    "1. States of matter": [
      { text: "In which state are particles arranged in a regular fixed pattern?", options: ["solid", "liquid", "gas", "plasma"], answer: 0, d: "E" },
      { text: "The change of state from gas directly to solid is called:", options: ["melting", "condensation", "sublimation (deposition)", "evaporation"], answer: 2, d: "M" }
    ],
    "2. Atomic structure": [
      { text: "The atom shown has the electronic configuration 2,8,1. Which element is it?", options: ["neon", "sodium", "chlorine", "helium"], answer: 1, d: "M", diagram: "atomShells" },
      { text: "The number of protons in an atom is called its:", options: ["nucleon number", "proton number", "mass number", "valency"], answer: 1, d: "E" },
      { text: "Isotopes of an element have the same number of protons but different numbers of:", options: ["electrons", "neutrons", "protons", "shells"], answer: 1, d: "M" }
    ],
    "3. Chemical bonding": [
      { text: "The bond formed by the transfer of electrons between a metal and a non-metal is:", options: ["covalent", "ionic", "metallic", "hydrogen"], answer: 1, d: "M" },
      { text: "A shared pair of electrons between two non-metal atoms forms a:", options: ["ionic bond", "metallic bond", "covalent bond", "dative bond"], answer: 2, d: "E" }
    ],
    "5. Chemical calculations": [
      { text: "The relative formula mass of CO₂ is (C = 12, O = 16):", options: ["28", "44", "48", "60"], answer: 1, d: "M" },
      { text: "One mole of any gas at r.t.p. occupies approximately:", options: ["1 dm³", "12 dm³", "24 dm³", "100 dm³"], answer: 2, d: "M" }
    ],
    "11. Acids and bases": [
      { text: "A solution with pH 2 is:", options: ["strongly alkaline", "neutral", "weakly acidic", "strongly acidic"], answer: 3, d: "E" },
      { text: "Which gas is produced when an acid reacts with a reactive metal?", options: ["oxygen", "carbon dioxide", "hydrogen", "chlorine"], answer: 2, d: "M" }
    ],
    "13. The Periodic Table": [
      { text: "Elements in the same group of the Periodic Table have the same number of:", options: ["protons", "neutrons", "outer-shell electrons", "shells"], answer: 2, d: "M" },
      { text: "Group VIII elements are called the:", options: ["alkali metals", "halogens", "noble gases", "transition metals"], answer: 2, d: "E" }
    ],
    "20. Petrochemicals and polymers": [
      { text: "Crude oil is separated into fractions in the column shown by:", options: ["filtration", "fractional distillation", "chromatography", "crystallisation"], answer: 1, d: "M", diagram: "distillationColumn" },
      { text: "Poly(ethene) is made from ethene by:", options: ["cracking", "combustion", "addition polymerisation", "fermentation"], answer: 2, d: "M" }
    ],
    "22. Chemical analysis": [
      { text: "The gas that turns limewater milky is:", options: ["hydrogen", "oxygen", "carbon dioxide", "ammonia"], answer: 2, d: "E" },
      { text: "A lilac flame colour in a flame test indicates the presence of:", options: ["sodium ions", "potassium ions", "copper ions", "calcium ions"], answer: 1, d: "M" }
    ]
  },

  Mathematics: {
    "1. Review of number concepts": [
      { text: "What is 84 written as a product of prime factors?", options: ["2² × 3 × 7", "2 × 3² × 7", "2³ × 3 × 7", "2² × 21"], answer: 0, d: "M" },
      { text: "The value of 3⁴ ÷ 3² is:", options: ["3", "6", "9", "81"], answer: 2, d: "M" },
      { text: "Round 4.0763 to two decimal places.", options: ["4.07", "4.08", "4.10", "4.076"], answer: 1, d: "E" }
    ],
    "3. Lines, angles and shapes": [
      { text: "In the diagram the two lines are parallel. Angles a and b are:", options: ["complementary", "equal (alternate angles)", "supplementary co-interior angles", "vertically opposite"], answer: 1, d: "M", diagram: "parallelLines" },
      { text: "The sum of the interior angles of a triangle is:", options: ["90°", "180°", "270°", "360°"], answer: 1, d: "E" }
    ],
    "4. Collecting, organising and displaying data": [
      { text: "In the pie chart, a sector represents 90° of the circle. What fraction of the data is this?", options: ["1/2", "1/3", "1/4", "1/8"], answer: 2, d: "M", diagram: "pieChart" }
    ],
    "5. Fractions, percentages and standard form": [
      { text: "Write 0.00056 in standard form.", options: ["5.6 × 10⁻³", "5.6 × 10⁻⁴", "56 × 10⁻⁵", "5.6 × 10⁴"], answer: 1, d: "M" },
      { text: "Increase 80 by 25%.", options: ["85", "90", "100", "105"], answer: 2, d: "E" }
    ],
    "7. Perimeter, area and volume": [
      { text: "The area of a circle of radius 7 cm is (use π ≈ 22/7):", options: ["44 cm²", "154 cm²", "22 cm²", "308 cm²"], answer: 1, d: "M" },
      { text: "The volume of a cube of side 3 cm is:", options: ["9 cm³", "18 cm³", "27 cm³", "81 cm³"], answer: 2, d: "E" }
    ],
    "8. Introduction to probability": [
      { text: "A fair six-sided dice is rolled. The probability of getting an even number is:", options: ["1/6", "1/3", "1/2", "2/3"], answer: 2, d: "E" }
    ],
    "11. Pythagoras' theorem and similar shapes": [
      { text: "In the right-angled triangle, sides a and b are 3 and 4. The hypotenuse c is:", options: ["5", "6", "7", "12"], answer: 0, d: "M", diagram: "rightTriangle" }
    ],
    "12. Averages and measures of spread": [
      { text: "The median of 3, 7, 8, 5, 12 is:", options: ["5", "7", "8", "12"], answer: 1, d: "M" },
      { text: "The range of 4, 9, 2, 7 is:", options: ["2", "5", "7", "9"], answer: 2, d: "E" }
    ]
  }
};
