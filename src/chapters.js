// src/chapters.js
// Curriculum per subject. Each chapter has keywords (used to match parsed
// past-paper questions to the chapter) and `sums` = whether the chapter
// normally contains numerical/calculation questions ("sums").
// Mathematics is treated as all-numerical (no theory/sums split).

const SUBJECTS = {
  Physics: { code: "0625", split: true },
  Chemistry: { code: "0620", split: true },
  Mathematics: { code: "0580", split: false }
};

const CHAPTERS = {
  Physics: [
    { name: "1. Making measurements", sums: true, keywords: ["measure", "measurement", "micrometer", "ruler", "vernier", "volume", "density", "pendulum", "scale", "precision"] },
    { name: "2. Describing motion", sums: true, keywords: ["speed", "velocity", "distance", "displacement", "acceleration", "motion", "distance-time", "speed-time", "graph"] },
    { name: "3. Forces and motion", sums: true, keywords: ["force", "newton", "mass", "weight", "friction", "resultant", "momentum", "inertia", "acceleration", "f = ma"] },
    { name: "4. Turning effects", sums: true, keywords: ["moment", "pivot", "turning", "torque", "lever", "centre of gravity", "centre of mass", "equilibrium", "balance"] },
    { name: "5. Forces and matter", sums: true, keywords: ["pressure", "hooke", "spring", "extension", "deformation", "elastic", "stress", "strain", "load"] },
    { name: "6. Energy stores and transfers", sums: true, keywords: ["energy", "kinetic", "potential", "conservation", "efficiency", "transfer", "joule", "gpe", "ke"] },
    { name: "7. Energy resources", sums: false, keywords: ["renewable", "non-renewable", "fossil", "solar", "wind", "nuclear", "hydroelectric", "biofuel", "geothermal", "resource"] },
    { name: "8. Work and power", sums: true, keywords: ["work", "power", "watt", "work done", "energy transferred"] },
    { name: "9. The kinetic particle model of matter", sums: true, keywords: ["particle", "kinetic", "brownian", "diffusion", "gas pressure", "states of matter", "molecule"] },
    { name: "10. Thermal properties of matter", sums: true, keywords: ["thermal", "specific heat", "latent heat", "expansion", "temperature", "boiling", "melting", "evaporation"] },
    { name: "11. Thermal energy transfers", sums: false, keywords: ["conduction", "convection", "radiation", "insulation", "heat loss", "emitter", "absorber"] },
    { name: "12. Sound", sums: true, keywords: ["sound", "ultrasound", "echo", "pitch", "frequency", "amplitude", "longitudinal", "vibration"] },
    { name: "13. Light", sums: true, keywords: ["light", "reflection", "refraction", "lens", "ray", "image", "refractive index", "critical angle", "mirror", "focal"] },
    { name: "14. Properties of waves", sums: true, keywords: ["wave", "wavelength", "frequency", "amplitude", "transverse", "longitudinal", "wave speed", "period", "diffraction"] },
    { name: "15. The electromagnetic spectrum", sums: false, keywords: ["electromagnetic", "spectrum", "infrared", "ultraviolet", "x-ray", "gamma", "microwave", "radio wave"] },
    { name: "16. Magnetism", sums: false, keywords: ["magnet", "magnetic", "field", "pole", "induced magnetism", "soft iron", "permanent magnet", "plotting compass"] },
    { name: "17. Static electricity", sums: true, keywords: ["static", "charge", "charging", "friction", "electrostatic", "induction", "electron transfer", "earthing"] },
    { name: "18. Electrical quantities", sums: true, keywords: ["current", "voltage", "potential difference", "resistance", "ohm", "charge", "ampere", "coulomb", "v = ir"] },
    { name: "19. Electrical circuits", sums: true, keywords: ["circuit", "series", "parallel", "resistor", "fuse", "current", "potential divider", "lamp", "ammeter", "voltmeter"] },
    { name: "20. Electromagnetic forces", sums: true, keywords: ["motor", "electromagnet", "magnetic force", "current-carrying", "commutator", "motor effect", "field"] },
    { name: "21. Electromagnetic induction", sums: true, keywords: ["induction", "induced", "generator", "transformer", "dynamo", "emf", "turns ratio", "alternating"] },
    { name: "22. The nuclear atom", sums: true, keywords: ["atom", "nucleus", "proton", "neutron", "electron", "nucleon", "isotope", "proton number", "nucleon number"] },
    { name: "23. Radioactivity", sums: true, keywords: ["radioactive", "radioactivity", "alpha", "beta", "gamma", "half-life", "decay", "count rate", "nuclide", "ionising"] },
    { name: "24. Earth and the Solar System", sums: true, keywords: ["orbit", "planet", "moon", "solar system", "satellite", "sun", "gravitational", "orbital"] },
    { name: "25. Stars and the Universe", sums: false, keywords: ["star", "galaxy", "universe", "redshift", "milky way", "nebula", "supernova", "big bang", "light-year"] }
  ],
  Chemistry: [
    { name: "1. States of matter", sums: false, keywords: ["solid", "liquid", "gas", "states of matter", "particle", "diffusion", "melting", "boiling", "evaporation", "kinetic"] },
    { name: "2. Atomic structure", sums: true, keywords: ["atom", "proton", "neutron", "electron", "nucleus", "isotope", "proton number", "nucleon number", "electronic configuration", "shell"] },
    { name: "3. Chemical bonding", sums: false, keywords: ["bond", "bonding", "ionic", "covalent", "metallic", "lattice", "molecule", "giant structure", "delocalised", "electron"] },
    { name: "4. Chemical formulae and equations", sums: true, keywords: ["formula", "equation", "balance", "balanced", "state symbol", "reactant", "product", "ionic equation"] },
    { name: "5. Chemical calculations", sums: true, keywords: ["mole", "moles", "relative formula mass", "relative atomic mass", "concentration", "percentage yield", "empirical", "stoichiometry", "mass", "molar"] },
    { name: "6. Electrochemistry", sums: true, keywords: ["electrolysis", "electrode", "anode", "cathode", "electrolyte", "electroplating", "ion", "half equation"] },
    { name: "7. Chemical energetics", sums: true, keywords: ["exothermic", "endothermic", "energy change", "enthalpy", "bond energy", "activation energy", "energy level"] },
    { name: "8. Rates of reaction", sums: true, keywords: ["rate", "reaction rate", "catalyst", "concentration", "surface area", "collision", "temperature", "gas produced"] },
    { name: "9. Reversible reactions and equilibrium", sums: false, keywords: ["reversible", "equilibrium", "dynamic", "le chatelier", "forward reaction", "backward reaction", "haber", "contact process"] },
    { name: "10. Redox reactions", sums: false, keywords: ["redox", "oxidation", "reduction", "oxidising", "reducing", "electron transfer", "oxidation number", "oxidising agent"] },
    { name: "11. Acids and bases", sums: true, keywords: ["acid", "base", "alkali", "ph", "neutralisation", "indicator", "hydrogen ion", "hydroxide", "salt", "titration"] },
    { name: "12. Preparation of salts", sums: false, keywords: ["salt", "preparation", "crystallisation", "filtration", "soluble", "insoluble", "precipitate", "evaporate", "excess"] },
    { name: "13. The Periodic Table", sums: false, keywords: ["periodic table", "group", "period", "alkali metal", "halogen", "noble gas", "transition", "trend", "reactivity"] },
    { name: "14. Metallic elements and alloys", sums: false, keywords: ["metal", "alloy", "metallic", "malleable", "ductile", "conductor", "aluminium", "copper", "brass", "steel"] },
    { name: "15. Reactivity of metals", sums: false, keywords: ["reactivity series", "displacement", "reactive metal", "native", "rusting", "react with acid", "react with water"] },
    { name: "16. Extraction and corrosion of metals", sums: true, keywords: ["extraction", "blast furnace", "ore", "reduction", "corrosion", "rust", "galvanising", "sacrificial", "iron", "electrolysis"] },
    { name: "17. Chemistry of our environment", sums: false, keywords: ["pollution", "greenhouse", "carbon dioxide", "acid rain", "sulfur dioxide", "carbon monoxide", "climate", "water treatment", "fertiliser"] },
    { name: "18. Introduction to organic chemistry", sums: false, keywords: ["hydrocarbon", "alkane", "alkene", "homologous", "functional group", "general formula", "saturated", "unsaturated", "isomer"] },
    { name: "19. Reactions of organic compounds", sums: true, keywords: ["combustion", "fermentation", "cracking", "addition reaction", "ethanol", "carboxylic", "ester", "bromine water", "polymer"] },
    { name: "20. Petrochemicals and polymers", sums: false, keywords: ["polymer", "polymerisation", "monomer", "plastic", "crude oil", "fraction", "petrochemical", "poly(ethene)", "recycling"] },
    { name: "21. Experimental design and separation techniques", sums: false, keywords: ["filtration", "distillation", "chromatography", "separation", "evaporation", "crystallisation", "apparatus", "purity", "rf value"] },
    { name: "22. Chemical analysis", sums: false, keywords: ["test for", "flame test", "precipitate", "gas test", "identify", "cation", "anion", "limewater", "litmus", "analysis"] }
  ],
  Mathematics: [
    { name: "1. Review of number concepts", sums: true, keywords: ["prime", "factor", "multiple", "hcf", "lcm", "integer", "rounding", "significant figures", "bidmas", "order of operations"] },
    { name: "2. Making sense of algebra", sums: true, keywords: ["simplify", "expand", "substitute", "index", "indices", "algebraic", "term", "expression"] },
    { name: "3. Lines, angles and shapes", sums: true, keywords: ["angle", "parallel", "polygon", "triangle", "interior", "exterior", "transversal", "bearing", "quadrilateral"] },
    { name: "4. Collecting, organising and displaying data", sums: true, keywords: ["data", "frequency", "bar chart", "pie chart", "histogram", "tally", "survey", "pictogram", "table"] },
    { name: "5. Fractions, percentages and standard form", sums: true, keywords: ["fraction", "percentage", "standard form", "decimal", "ratio", "increase", "decrease", "percent"] },
    { name: "6. Equations, factors and formulae", sums: true, keywords: ["solve", "equation", "factorise", "rearrange", "subject", "formula", "quadratic", "linear"] },
    { name: "7. Perimeter, area and volume", sums: true, keywords: ["perimeter", "area", "volume", "circle", "circumference", "cuboid", "cylinder", "prism", "surface area", "radius"] },
    { name: "8. Introduction to probability", sums: true, keywords: ["probability", "chance", "event", "outcome", "likely", "dice", "spinner", "counter", "random"] },
    { name: "9. Sequences, surds and sets", sums: true, keywords: ["sequence", "nth term", "surd", "set", "venn", "term", "union", "intersection", "subset"] },
    { name: "10. Straight lines and quadratic equations", sums: true, keywords: ["gradient", "straight line", "y-intercept", "quadratic", "parabola", "y = mx", "equation of line", "roots"] },
    { name: "11. Pythagoras' theorem and similar shapes", sums: true, keywords: ["pythagoras", "hypotenuse", "right-angled", "similar", "scale factor", "congruent", "enlargement"] },
    { name: "12. Averages and measures of spread", sums: true, keywords: ["mean", "median", "mode", "range", "average", "spread", "quartile", "interquartile"] },
    { name: "14. Further solving of equations and inequalities", sums: true, keywords: ["inequality", "simultaneous", "solve", "factorise", "quadratic", "rearrange", "graphically"] },
    { name: "16. Scatter diagrams and correlation", sums: true, keywords: ["scatter", "correlation", "line of best fit", "positive correlation", "negative correlation", "bivariate"] }
  ]
};

module.exports = { SUBJECTS, CHAPTERS };
