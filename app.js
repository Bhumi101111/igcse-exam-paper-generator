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
    "6. Electrochemistry",
    "7. Chemical energetics",
    "8. Rates of reaction",
    "9. Reversible reactions and equilibrium",
    "10. Redox reactions",
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
const diagrams = {
  circuit:`<svg viewBox="0 0 360 135" aria-label="Series circuit with a cell and two resistors"><path d="M45 68h55m25 0h55m45 0h90v45H45V68" fill="none" stroke="currentColor" stroke-width="2"/><path d="M100 48v40m14-30v20" stroke="currentColor" stroke-width="3"/><rect x="180" y="55" width="45" height="26" fill="white" stroke="currentColor" stroke-width="2"/><text x="202" y="72" text-anchor="middle">4 Ω</text><rect x="275" y="100" width="45" height="26" fill="white" stroke="currentColor" stroke-width="2"/><text x="297" y="117" text-anchor="middle">8 Ω</text><text x="104" y="35" text-anchor="middle">12 V</text></svg>`,
  speedGraph:`<svg viewBox="0 0 360 170" aria-label="Speed time graph"><path d="M48 135V22m0 113h285" fill="none" stroke="currentColor" stroke-width="2"/><path d="M48 135L145 55h95v80" fill="none" stroke="#df693c" stroke-width="3"/><path d="M145 135v-80m95 80V55" stroke="#9eb2cb" stroke-dasharray="4 4"/><text x="185" y="162" text-anchor="middle">time / s</text><text x="20" y="85" transform="rotate(-90 20 85)" text-anchor="middle">speed / m/s</text><text x="145" y="151" text-anchor="middle">8</text><text x="240" y="151" text-anchor="middle">14</text><text x="38" y="59" text-anchor="end">12</text></svg>`,
  measuringCylinder:`<svg viewBox="0 0 360 150" aria-label="Measuring cylinder showing liquid volume"><path d="M145 18v110q0 12 35 12t35-12V18" fill="none" stroke="currentColor" stroke-width="2"/><path d="M147 78h66v50q0 10-33 10t-33-10z" fill="#c9def7"/><path d="M215 38h22m-22 20h22m-22 20h22m-22 20h22m-22 20h22" stroke="currentColor"/><text x="244" y="42">50</text><text x="244" y="62">40</text><text x="244" y="82">30</text><text x="244" y="102">20</text><text x="244" y="122">10 cm³</text></svg>`,
  triangle:`<svg viewBox="0 0 360 150" aria-label="Right angled triangle"><path d="M72 122h210L72 32z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M72 106h16v16" fill="none" stroke="currentColor"/><text x="165" y="142">12 cm</text><text x="43" y="82">5 cm</text><text x="190" y="67">x cm</text></svg>`,
  rectangle:`<svg viewBox="0 0 360 150" aria-label="Rectangle with dimensions"><rect x="70" y="35" width="220" height="82" fill="none" stroke="currentColor" stroke-width="2"/><text x="180" y="137" text-anchor="middle">14 cm</text><text x="46" y="80" text-anchor="middle">8 cm</text><path d="M70 124v16m220-16v16M62 35H45m17 82H45" stroke="currentColor"/></svg>`
  ,forceDiagram:`<svg viewBox="0 0 360 145" aria-label="Box with horizontal forces"><rect x="135" y="52" width="90" height="55" fill="#edf3fb" stroke="currentColor" stroke-width="2"/><path d="M135 80H55m170 0h90" stroke="#df693c" stroke-width="3"/><path d="M55 80l14-8m-14 8 14 8m246-8-14-8m14 8-14 8" stroke="#df693c" stroke-width="3"/><text x="75" y="62">18 N</text><text x="270" y="62">42 N</text><text x="180" y="84" text-anchor="middle">6.0 kg</text></svg>`
};
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
    ,["The circuit diagram shows two resistors connected in series to a 12 V cell. Calculate the total resistance and the current in the circuit.",4,"Total resistance = 4 + 8 = 12 Ω. Current = V/R = 12/12 = 1.0 A.",diagrams.circuit]
    ,["The graph shows the motion of a cyclist. Calculate the distance travelled during the first 14 seconds.",4,"Area under graph = triangle + rectangle = (0.5 × 8 × 12) + (6 × 12) = 120 m.",diagrams.speedGraph]
    ,["The diagram shows the horizontal forces acting on a 6.0 kg box. Calculate the resultant force and the acceleration of the box.",4,"Resultant force = 42 − 18 = 24 N to the right. Acceleration = F/m = 24/6.0 = 4.0 m/s².",diagrams.forceDiagram]
    ,["State what is meant by the resultant force acting on an object.",2,"The resultant force is the single force with the same effect as all the forces acting together."]
    ,["Explain why a moving car slows down when the driving force is smaller than the resistive forces.",3,"There is a resultant force opposite to the direction of motion, so the car decelerates."]
    ,["A car of mass 900 kg accelerates at 2.5 m/s². Calculate the resultant force acting on the car.",2,"F = ma = 900 × 2.5 = 2250 N."]
    ,["A student pushes a box with a force of 75 N. Friction acts with a force of 27 N in the opposite direction. The box has a mass of 12 kg. Calculate its acceleration.",3,"Resultant force = 75 − 27 = 48 N. Acceleration = F/m = 48/12 = 4.0 m/s²."]
    ,["State two factors that increase the stopping distance of a car.",2,"Any two: higher speed, greater mass, wet or icy road, worn tyres, worn brakes, increased driver reaction time."]
    ,["Explain why seat belts reduce the force on passengers during a collision.",3,"Seat belts increase the time taken for momentum to change. The rate of change of momentum is smaller, so the force is smaller."]
    ,["A trolley of mass 0.80 kg moves at 3.5 m/s. Calculate its momentum.",2,"Momentum = mass × velocity = 0.80 × 3.5 = 2.8 kg m/s."]
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
    ,["The measuring cylinder contains a solution with a concentration of 0.50 mol/dm³. Use the diagram to read the volume and calculate the amount of solute in moles.",3,"Volume = 30 cm³ = 0.030 dm³. Amount = concentration × volume = 0.50 × 0.030 = 0.015 mol.",diagrams.measuringCylinder]
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
    ,["The diagram shows a right-angled triangle. Calculate the value of x.",3,"Using Pythagoras: x = √(5² + 12²) = 13 cm.",diagrams.triangle]
    ,["The diagram shows a rectangle. Calculate its perimeter and area.",3,"Perimeter = 2(14 + 8) = 44 cm. Area = 14 × 8 = 112 cm².",diagrams.rectangle]
  ]
};
const chapterMap = {
  Physics:["2. Describing motion","2. Describing motion","10. Thermal properties of matter","14. Properties of waves","16. Magnetism","8. Work and power","23. Radioactivity","25. Stars and the Universe","13. Light","3. Forces and motion","18. Electrical quantities","19. Electrical circuits","2. Describing motion","3. Forces and motion","3. Forces and motion","3. Forces and motion","3. Forces and motion","3. Forces and motion","3. Forces and motion","3. Forces and motion","3. Forces and motion"],
  Chemistry:["1. States of matter","2. Atomic structure","5. Chemical calculations","3. Chemical bonding","11. Acids and bases","11. Acids and bases","8. Rates of reaction","13. The Periodic Table","18. Introduction to organic chemistry","17. Chemistry of our environment","12. Preparation of salts","5. Chemical calculations"],
  Mathematics:["1. Review of number concepts","6. Equations, factors and formulae","6. Equations, factors and formulae","10. Straight lines and quadratic equations","7. Perimeter, area and volume","11. Pythagoras' theorem and similar shapes","8. Introduction to probability","12. Averages and measures of spread","3. Lines, angles and shapes","6. Equations, factors and formulae","2. Making sense of algebra","11. Pythagoras' theorem and similar shapes","7. Perimeter, area and volume"]
};
const physicsSupplements = {
  "3. Forces and motion":{
    Theory:[
      ["Distinguish between mass and weight. Include one unit for each quantity.",3,"Mass is the amount of matter and is measured in kg. Weight is the gravitational force on an object and is measured in N."],
      ["Describe how balanced forces affect an object that is already moving.",2,"Its velocity remains constant because the resultant force is zero."],
      ["Explain why the acceleration of an object increases when the same mass is acted on by a larger resultant force.",2,"From F = ma, acceleration is directly proportional to resultant force for a constant mass."]
    ],
    Numerical:[
      ["Calculate the weight of a 7.5 kg object on Earth. Use g = 10 N/kg.",2,"W = mg = 7.5 × 10 = 75 N."],
      ["A 1500 kg car increases its speed from 8.0 m/s to 20 m/s in 6.0 s. Calculate its acceleration and resultant force.",4,"a = (20 − 8)/6 = 2.0 m/s². F = ma = 1500 × 2.0 = 3000 N."],
      ["A 0.40 kg ball moving at 12 m/s is brought to rest. Calculate the change in momentum.",2,"Change in momentum = 0.40 × 12 = 4.8 kg m/s."]
    ]
  },
  "4. Turning effects":{
    Theory:[
      ["State the equation used to calculate the moment of a force.",2,"moment = force × perpendicular distance from the pivot."],
      ["Explain what is meant by the centre of gravity of an object.",2,"It is the point through which the entire weight of the object may be considered to act."],
      ["State the condition needed for an object to be in rotational equilibrium.",2,"The sum of clockwise moments equals the sum of anticlockwise moments about the pivot."]
    ],
    Numerical:[
      ["A force of 18 N acts 0.40 m from a pivot. Calculate the moment of the force.",2,"Moment = 18 × 0.40 = 7.2 N m."],
      ["A child of weight 240 N sits 1.5 m from the pivot of a balanced seesaw. Calculate the force needed 2.0 m from the pivot on the other side.",3,"240 × 1.5 = F × 2.0, so F = 180 N."],
      ["A uniform metre rule is balanced at its centre. A 3.0 N force acts 0.20 m to the left of the pivot. Calculate the moment and the force needed 0.30 m to the right.",3,"Moment = 3.0 × 0.20 = 0.60 N m. Force = 0.60/0.30 = 2.0 N."]
    ]
  },
  "5. Forces and matter":{
    Theory:[
      ["Describe the difference between elastic deformation and plastic deformation.",2,"Elastic deformation is reversed when the force is removed. Plastic deformation is permanent."],
      ["State Hooke's law.",2,"Extension is proportional to force provided the limit of proportionality is not exceeded."],
      ["Explain how pressure changes when the same force acts over a smaller area.",2,"Pressure increases because pressure = force/area."]
    ],
    Numerical:[
      ["A force of 60 N acts on an area of 0.020 m². Calculate the pressure.",2,"Pressure = 60/0.020 = 3000 Pa."],
      ["A spring extends by 4.0 cm when a force of 6.0 N is applied. Calculate its spring constant in N/m.",3,"k = F/x = 6.0/0.040 = 150 N/m."],
      ["A block exerts a pressure of 2500 Pa on an area of 0.030 m². Calculate the force.",2,"Force = pressure × area = 2500 × 0.030 = 75 N."]
    ]
  },
  "8. Work and power":{
    Theory:[
      ["State the equation used to calculate work done.",2,"work done = force × distance moved in the direction of the force."],
      ["State the equation used to calculate power.",2,"power = work done/time or energy transferred/time."],
      ["Explain why a more powerful motor can lift the same load in less time.",2,"Power is the rate of energy transfer, so a more powerful motor transfers the required energy more quickly."]
    ],
    Numerical:[
      ["A force of 45 N moves a box through 6.0 m. Calculate the work done.",2,"Work done = 45 × 6.0 = 270 J."],
      ["A motor transfers 3600 J of energy in 30 s. Calculate its power.",2,"Power = 3600/30 = 120 W."],
      ["A crane lifts a 500 N load vertically through 8.0 m in 20 s. Calculate the work done and the power.",4,"Work done = 500 × 8.0 = 4000 J. Power = 4000/20 = 200 W."]
    ]
  },
  "10. Thermal properties of matter":{
    Theory:[
      ["Explain why a liquid expands when it is heated.",2,"Its particles gain kinetic energy and their average separation increases."],
      ["State what is meant by specific heat capacity.",2,"The energy required to raise the temperature of 1 kg of a substance by 1 °C."],
      ["Explain why temperature remains constant while a pure substance changes state.",2,"Energy is used to overcome intermolecular forces rather than increase particle kinetic energy."]
    ],
    Numerical:[
      ["Calculate the energy needed to heat 2.0 kg of water by 15 °C. Use c = 4200 J/(kg °C).",3,"E = mcΔT = 2.0 × 4200 × 15 = 126000 J."],
      ["A 0.50 kg metal block receives 9000 J and its temperature rises by 40 °C. Calculate its specific heat capacity.",3,"c = E/(mΔT) = 9000/(0.50 × 40) = 450 J/(kg °C)."],
      ["A heater transfers 24000 J to a liquid in 120 s. Calculate its power.",2,"Power = 24000/120 = 200 W."]
    ]
  },
  "14. Properties of waves":{
    Theory:[
      ["State the difference between transverse and longitudinal waves.",2,"Transverse oscillations are perpendicular to the direction of travel; longitudinal oscillations are parallel."],
      ["Define the frequency of a wave.",2,"Frequency is the number of complete waves passing a point each second."],
      ["State the wave equation.",2,"wave speed = frequency × wavelength."]
    ],
    Numerical:[
      ["A wave has frequency 12 Hz and wavelength 0.80 m. Calculate its speed.",2,"v = fλ = 12 × 0.80 = 9.6 m/s."],
      ["A wave travels at 340 m/s and has frequency 170 Hz. Calculate its wavelength.",2,"λ = v/f = 340/170 = 2.0 m."],
      ["A wave has a period of 0.025 s. Calculate its frequency.",2,"f = 1/T = 1/0.025 = 40 Hz."]
    ]
  }
};
const physicsTheoryPrompts = {
  "1. Making measurements":["Describe how to measure the volume of an irregular solid using a measuring cylinder.","Explain why repeated measurements improve the reliability of an experiment.","State how to avoid a parallax error when reading a scale.","Describe how a stopwatch can be used to find the period of a pendulum accurately.","Explain why measuring several oscillations gives a more accurate value for the period."],
  "2. Describing motion":["Define speed and state its SI unit.","State the difference between speed and velocity.","Explain what the gradient of a distance-time graph represents.","Describe the shape of a distance-time graph for an object moving at constant speed.","Explain what a horizontal section on a distance-time graph means."],
  "3. Forces and motion":["State Newton's first law of motion.","Explain what happens when balanced forces act on a moving object.","Define acceleration and state its SI unit.","Explain how a resultant force changes the motion of an object.","State two factors that affect stopping distance."],
  "4. Turning effects":["Define the moment of a force.","State the principle of moments.","Explain why a door handle is placed far from the hinges.","Define the centre of gravity of an object.","Explain how a wider base improves stability."],
  "5. Forces and matter":["State Hooke's law.","Distinguish between elastic and plastic deformation.","Define pressure and state its SI unit.","Explain why sharp knives exert a greater pressure.","Describe what happens when the limit of proportionality of a spring is exceeded."],
  "6. Energy stores and transfers":["State the principle of conservation of energy.","Define efficiency.","Describe the energy transfers when an object falls.","Explain why no machine can be 100% efficient.","Describe the energy transfers in a battery-powered lamp."],
  "7. Energy resources":["State one renewable and one non-renewable energy resource.","Explain one disadvantage of using fossil fuels.","Explain why solar power output is not constant.","State one advantage of hydroelectric power.","Explain why energy resources must be compared using more than cost alone."],
  "8. Work and power":["Define work done.","Define power.","State the SI unit of energy.","Explain why a more powerful motor can lift the same object faster.","Describe when a force does no work on an object."],
  "9. The kinetic particle model of matter":["Describe the arrangement and motion of particles in a solid.","Explain diffusion using the kinetic particle model.","Describe the differences between particles in a liquid and a gas.","Explain why gas pressure increases when temperature rises at constant volume.","Describe Brownian motion."],
  "10. Thermal properties of matter":["Define specific heat capacity.","Explain why temperature remains constant during melting.","Describe thermal expansion using particles.","State the difference between boiling and evaporation.","Explain why evaporation causes cooling."],
  "11. Thermal energy transfers":["Describe conduction in a metal.","Explain convection in a liquid.","State how a dull black surface affects thermal radiation.","Explain why trapped air reduces energy transfer.","Describe one way to reduce heat loss from a house."],
  "12. Sound":["State how sound waves are produced.","Explain why sound cannot travel through a vacuum.","Define frequency.","State the relationship between pitch and frequency.","Describe how an echo is formed."],
  "13. Light":["State the law of reflection.","Define refraction.","Explain why light changes direction when entering glass from air.","Describe how a converging lens affects parallel rays.","State the difference between a real image and a virtual image."],
  "14. Properties of waves":["Define wavelength.","State the wave equation.","Distinguish between transverse and longitudinal waves.","Define amplitude.","Explain what happens to wave speed, frequency and wavelength when refraction occurs."],
  "15. The electromagnetic spectrum":["List the electromagnetic spectrum in order of increasing frequency.","State one use of infrared radiation.","State one danger of ultraviolet radiation.","Explain why all electromagnetic waves can travel through a vacuum.","State one medical use of X-rays."],
  "16. Magnetism":["State the difference between a permanent magnet and an electromagnet.","Describe the magnetic field around a bar magnet.","Explain why soft iron is used as the core of an electromagnet.","State how to increase the strength of an electromagnet.","Describe the force between like magnetic poles."],
  "17. Static electricity":["Describe how an insulating material can become charged by friction.","State the force between two objects with opposite charges.","Explain why metals discharge more easily than insulators.","Describe one hazard caused by static electricity.","Explain how earthing reduces a static charge."],
  "18. Electrical quantities":["Define electric current.","Define potential difference.","State Ohm's law.","Explain the difference between current and charge.","State the SI unit of resistance."],
  "19. Electrical circuits":["State how current behaves in a series circuit.","State how potential difference behaves across components in parallel.","Explain why household circuits use parallel connections.","Describe the effect of adding a resistor in series.","State the purpose of a fuse."],
  "20. Electromagnetic forces":["Describe the motor effect.","State how to reverse the direction of the force on a current-carrying wire.","Explain why a current-carrying wire in a magnetic field experiences a force.","State two factors that increase the motor-effect force.","Describe the role of a split-ring commutator in a motor."],
  "21. Electromagnetic induction":["Describe electromagnetic induction.","State two ways to increase the induced voltage in a coil.","Explain why a stationary magnet inside a coil produces no induced voltage.","Describe the energy transfer in a generator.","State the function of a transformer."],
  "22. The nuclear atom":["Describe the structure of an atom.","State the relative charge of a proton, neutron and electron.","Define proton number.","Define nucleon number.","Explain why an atom is electrically neutral."],
  "23. Radioactivity":["State the nature of alpha radiation.","Compare the penetrating abilities of alpha, beta and gamma radiation.","Define half-life.","Explain why radioactive decay is described as random.","State one safety precaution when handling radioactive sources."],
  "24. Earth and the Solar System":["State the force that keeps planets in orbit.","Describe the difference between a planet and a moon.","Explain why the orbital speed of a planet changes with distance from the Sun.","State the approximate shape of planetary orbits.","Describe one feature of the Solar System."],
  "25. Stars and the Universe":["State how a star produces energy.","Describe the life cycle of a star similar to the Sun.","Explain what is meant by a galaxy.","State what redshift shows about distant galaxies.","Describe the evidence for an expanding Universe."]
};
function physicsVariants(chapter){
  const theory=[],numerical=[];
  for(let i=1;i<=5;i++){
    const a=2+i,b=3+(i%6),c=1+(i%4);
    const prompt=physicsTheoryPrompts[chapter][i%physicsTheoryPrompts[chapter].length];
    theory.push([prompt,2,`Award marks for a correct syllabus-aligned response for ${chapter}.`]);
    if(chapter==="1. Making measurements")numerical.push([`A student measures a length as ${a*10} mm. Convert this measurement to cm.`,2,`${a*10} mm = ${a} cm.`]);
    else if(chapter==="2. Describing motion")numerical.push([`An object travels ${a*b*5} m in ${b*5} s. Calculate its average speed.`,2,`speed = distance/time = ${a*b*5}/${b*5} = ${a} m/s.`]);
    else if(chapter==="3. Forces and motion")numerical.push([`A ${a*100} kg object accelerates at ${c} m/s². Calculate the resultant force.`,2,`F = ma = ${a*100} × ${c} = ${a*100*c} N.`]);
    else if(chapter==="4. Turning effects")numerical.push([`A force of ${a*b} N acts ${c/10} m from a pivot. Calculate its moment.`,2,`moment = force × distance = ${a*b} × ${c/10} = ${a*b*c/10} N m.`]);
    else if(chapter==="5. Forces and matter")numerical.push([`A force of ${a*20} N acts on an area of ${b/100} m². Calculate the pressure.`,2,`pressure = force/area = ${a*20}/${b/100} = ${Math.round(a*2000/b)} Pa.`]);
    else if(chapter==="6. Energy stores and transfers")numerical.push([`A device transfers ${a*b*100} J of energy usefully from ${a*b*125} J supplied. Calculate its efficiency.`,2,`efficiency = ${a*b*100}/${a*b*125} × 100 = 80%.`]);
    else if(chapter==="7. Energy resources")numerical.push([`A power station transfers ${a*b*1000} J in ${b*10} s. Calculate its power output.`,2,`power = energy/time = ${a*b*1000}/${b*10} = ${a*100} W.`]);
    else if(chapter==="8. Work and power")numerical.push([`A force of ${a*10} N moves an object through ${b} m. Calculate the work done.`,2,`work done = force × distance = ${a*10} × ${b} = ${a*b*10} J.`]);
    else if(chapter==="9. The kinetic particle model of matter")numerical.push([`A gas occupies ${a} cm³ at constant pressure and expands to ${a*b} cm³. Calculate the increase in volume.`,1,`increase = ${a*b} − ${a} = ${a*(b-1)} cm³.`]);
    else if(chapter==="10. Thermal properties of matter")numerical.push([`Calculate the energy needed to heat ${a} kg of water by ${b} °C. Use c = 4200 J/(kg °C).`,3,`E = mcΔT = ${a} × 4200 × ${b} = ${a*4200*b} J.`]);
    else if(chapter==="11. Thermal energy transfers")numerical.push([`A heater transfers ${a*b*100} J in ${b*5} s. Calculate its power.`,2,`power = energy/time = ${a*b*100}/${b*5} = ${a*20} W.`]);
    else if(chapter==="12. Sound")numerical.push([`A sound wave has frequency ${a*50} Hz and wavelength ${b/10} m. Calculate its speed.`,2,`v = fλ = ${a*50} × ${b/10} = ${a*b*5} m/s.`]);
    else if(chapter==="13. Light")numerical.push([`A ray of light strikes a plane mirror at an angle of incidence of ${a*5}°. State the angle of reflection.`,1,`${a*5}° because angle of reflection equals angle of incidence.`]);
    else if(chapter==="14. Properties of waves")numerical.push([`A wave has frequency ${a*3} Hz and wavelength ${b/2} m. Calculate its speed.`,2,`v = fλ = ${a*3} × ${b/2} = ${a*3*b/2} m/s.`]);
    else if(chapter==="15. The electromagnetic spectrum")numerical.push([`Electromagnetic radiation travels ${a*300000} km in ${a} s. Calculate its speed.`,2,`speed = distance/time = ${a*300000}/${a} = 300000 km/s.`]);
    else if(chapter==="16. Magnetism")numerical.push([`An electromagnet has ${a*20} turns. A second electromagnet has ${b} times as many turns. Calculate the number of turns in the second coil.`,1,`${a*20} × ${b} = ${a*20*b} turns.`]);
    else if(chapter==="17. Static electricity")numerical.push([`A charge of ${a*b} C flows in ${b} s. Calculate the current.`,2,`I = Q/t = ${a*b}/${b} = ${a} A.`]);
    else if(chapter==="18. Electrical quantities")numerical.push([`A current of ${a} A flows through a ${b} Ω resistor. Calculate the potential difference.`,2,`V = IR = ${a} × ${b} = ${a*b} V.`]);
    else if(chapter==="19. Electrical circuits")numerical.push([`Two resistors of ${a} Ω and ${b} Ω are connected in series. Calculate the total resistance.`,1,`${a} + ${b} = ${a+b} Ω.`]);
    else if(chapter==="20. Electromagnetic forces")numerical.push([`A force of ${a*b} N acts on a wire carrying current for ${b} s. Calculate the impulse.`,2,`impulse = force × time = ${a*b} × ${b} = ${a*b*b} N s.`]);
    else if(chapter==="21. Electromagnetic induction")numerical.push([`A transformer has ${a*100} primary turns and ${b*100} secondary turns. Calculate the turns ratio Ns/Np.`,2,`${b*100}/${a*100} = ${(b/a).toFixed(2)}.`]);
    else if(chapter==="22. The nuclear atom")numerical.push([`An atom has proton number ${a*2} and nucleon number ${a*2+b}. Calculate its number of neutrons.`,1,`neutrons = ${a*2+b} − ${a*2} = ${b}.`]);
    else if(chapter==="23. Radioactivity")numerical.push([`A radioactive sample has a count rate of ${a*80} counts/min. After one half-life, calculate its count rate.`,1,`${a*80}/2 = ${a*40} counts/min.`]);
    else if(chapter==="24. Earth and the Solar System")numerical.push([`A satellite completes ${a} orbits in ${a*b} hours. Calculate the time for one orbit.`,1,`${a*b}/${a} = ${b} hours.`]);
    else if(chapter==="25. Stars and the Universe")numerical.push([`Light travels ${a*3} × 10⁸ m in ${a} s. Calculate its speed.`,2,`speed = distance/time = ${a*3} × 10⁸/${a} = 3 × 10⁸ m/s.`]);
  }
  return {Theory:theory,Numerical:numerical};
}
const chemistryTheoryPrompts = {
  "1. States of matter":["Describe the arrangement and movement of particles in a gas.","Explain diffusion using the particle model.","Describe what happens to particles during melting.","State the difference between boiling and evaporation.","Explain why increasing temperature increases the rate of diffusion."],
  "2. Atomic structure":["State the relative charge and mass of a proton.","Define proton number.","Define nucleon number.","Explain why isotopes of an element have similar chemical properties.","Describe the electronic structure of an atom."],
  "3. Chemical bonding":["Describe ionic bonding.","Describe covalent bonding.","Explain why graphite conducts electricity.","Explain why ionic compounds conduct when molten but not when solid.","Describe metallic bonding."],
  "4. Chemical formulae and equations":["State what a chemical equation represents.","Explain why equations must be balanced.","Define the term relative molecular mass.","State the meaning of the state symbol (aq).","Describe how to construct a word equation from a reaction description."],
  "5. Chemical calculations":["Define one mole of a substance.","State the equation linking moles, mass and relative formula mass.","Explain why balanced equations are needed for reacting-mass calculations.","Define concentration in mol/dm³.","Describe how to convert a volume from cm³ to dm³."],
  "6. Electrochemistry":["Define electrolysis.","State what is meant by an electrolyte.","Explain why ionic compounds only conduct electricity when molten or dissolved.","State the products of electrolysis of molten lead(II) bromide.","Describe what happens at the cathode during electrolysis."],
  "7. Chemical energetics":["Define an exothermic reaction.","Define an endothermic reaction.","State what happens to the temperature of the surroundings during an exothermic reaction.","Describe how bond breaking and bond making relate to energy change.","Explain what is meant by activation energy."],
  "8. Rates of reaction":["State four factors that affect the rate of a reaction.","Explain how an increase in temperature changes the rate of a reaction.","Explain how an increase in surface area changes the rate of a reaction.","Define a catalyst.","Describe one method for measuring the rate of a reaction that produces a gas."],
  "9. Reversible reactions and equilibrium":["State what is meant by a reversible reaction.","Describe what is meant by dynamic equilibrium.","Explain the effect of increasing pressure on a gaseous equilibrium with fewer moles of gas on the product side.","State the effect of increasing temperature on an endothermic equilibrium.","Describe the test for water using anhydrous copper(II) sulfate."],
  "10. Redox reactions":["Define oxidation in terms of oxygen.","Define reduction in terms of oxygen.","Define oxidation in terms of electron transfer.","Define reduction in terms of electron transfer.","Identify the oxidising and reducing agents in a given redox reaction."],
  "11. Acids and bases":["Define an acid in terms of hydrogen ions.","Define a base.","State the colour of universal indicator in a neutral solution.","Describe a neutralisation reaction.","Explain the difference between a strong acid and a weak acid."],
  "12. Preparation of salts":["Describe how to prepare a soluble salt from an acid and an excess insoluble base.","Explain why excess solid is added during salt preparation.","Describe how crystals are obtained from a salt solution.","State how to prepare an insoluble salt.","Explain why crystals are dried after filtration."],
  "13. The Periodic Table":["State how elements are arranged in the Periodic Table.","Describe the trend in reactivity down Group I.","Describe the properties of noble gases.","Explain why elements in the same group have similar chemical properties.","State one property of transition elements."],
  "14. Metallic elements and alloys":["State two typical physical properties of metals.","Explain why alloys are often harder than pure metals.","Describe metallic bonding.","State one use of aluminium linked to its properties.","Explain why copper is used for electrical wiring."],
  "15. Reactivity of metals":["Describe the reaction of a metal with dilute acid.","Explain how displacement reactions compare metal reactivity.","State the products when magnesium reacts with hydrochloric acid.","Describe the trend in Group I metal reactivity.","Explain why gold is found native in the Earth's crust."],
  "16. Extraction and corrosion of metals":["Explain why some metals are extracted by electrolysis.","Describe rusting.","State the conditions needed for iron to rust.","Explain how galvanising prevents rusting.","Describe how carbon is used to extract iron from its ore."],
  "17. Chemistry of our environment":["State two gases that contribute to acid rain.","Explain the greenhouse effect.","State one source of carbon monoxide.","Describe one method for reducing air pollution.","Explain why clean water treatment is important."],
  "18. Introduction to organic chemistry":["Define a hydrocarbon.","State the general formula of alkanes.","State the general formula of alkenes.","Explain the term homologous series.","Describe the test for an unsaturated hydrocarbon."],
  "19. Reactions of organic compounds":["Describe the complete combustion of a hydrocarbon.","State the products of fermentation of glucose.","Describe the reaction between an alkene and bromine water.","Explain oxidation of ethanol.","State one condition needed for cracking."],
  "20. Petrochemicals and polymers":["Define polymerisation.","Describe addition polymerisation.","State one use of plastics.","Explain one environmental issue caused by plastic waste.","Describe the relationship between a monomer and a polymer."],
  "21. Experimental design and separation techniques":["Describe filtration.","Explain how simple distillation separates a solvent from a solution.","State the purpose of chromatography.","Explain how to improve the reliability of an experiment.","Describe how fractional distillation separates liquids."],
  "22. Chemical analysis":["Describe the test for hydrogen gas.","Describe the test for oxygen gas.","State the flame-test colour for sodium ions.","Describe how to test for carbon dioxide.","Explain the meaning of an Rf value in chromatography."]
};
const chemistrySupplements = {
  "1. States of matter":{
    Theory:[
      ["Describe what happens to the arrangement and movement of particles when a solid melts.",3,"Particles gain energy, vibrate more, the regular lattice breaks down and particles can slide past one another."],
      ["Explain, using the kinetic particle model, why a gas exerts pressure on the walls of its container.",3,"Gas particles move rapidly in random directions and collide with the walls; each collision exerts a force, producing pressure."],
      ["Explain why the temperature of pure water remains constant while it boils.",2,"Energy supplied is used to overcome intermolecular forces between particles, not to increase their kinetic energy."],
      ["State two differences between the particles in a liquid and the particles in a gas.",2,"Liquid particles are close together with weak forces; gas particles are far apart with negligible forces. Liquid particles move slower than gas particles."]
    ],
    Numerical:[
      ["A sample of ice at −10 °C is heated to 105 °C. Calculate the total temperature change.",2,"Total change = 105 − (−10) = 115 °C."],
      ["A gas occupies 250 cm³ at constant temperature. The pressure is doubled. Calculate the new volume using p₁V₁ = p₂V₂.",3,"V₂ = p₁V₁/p₂ = (1 × 250)/2 = 125 cm³."],
      ["A liquid of mass 80 g cools from 75 °C to 25 °C. Calculate the temperature change.",1,"Temperature change = 75 − 25 = 50 °C."]
    ]
  },
  "2. Atomic structure":{
    Theory:[
      ["Describe the structure of an atom in terms of its sub-atomic particles and their location.",3,"Protons and neutrons are in the nucleus at the centre; electrons orbit the nucleus in shells. Most of the atom is empty space."],
      ["State what is meant by isotopes of an element.",2,"Atoms of the same element with the same proton number but different numbers of neutrons."],
      ["Explain why isotopes of the same element have identical chemical properties.",2,"They have the same number of electrons in the outer shell, which determines chemical behaviour."],
      ["State the electronic configuration of a chlorine atom (proton number 17).",2,"2,8,7."]
    ],
    Numerical:[
      ["An atom has proton number 19 and nucleon number 39. Calculate the number of neutrons.",2,"Neutrons = 39 − 19 = 20."],
      ["An ion of magnesium is Mg²⁺. Magnesium has proton number 12. Calculate the number of electrons in the ion.",2,"Electrons = 12 − 2 = 10."],
      ["A sample of chlorine contains 75% ³⁵Cl and 25% ³⁷Cl. Calculate the relative atomic mass.",3,"Ar = (75 × 35 + 25 × 37)/100 = 35.5."]
    ]
  },
  "3. Chemical bonding":{
    Theory:[
      ["Describe how an ionic bond is formed between sodium and chlorine.",3,"Sodium transfers one electron to chlorine. Sodium becomes Na⁺ and chlorine becomes Cl⁻. The oppositely charged ions are attracted by electrostatic forces."],
      ["Explain why ionic compounds have high melting points.",2,"There are strong electrostatic forces of attraction between oppositely charged ions, requiring a large amount of energy to overcome."],
      ["Explain why graphite can conduct electricity but diamond cannot.",3,"In graphite each carbon atom forms three covalent bonds, leaving one delocalised electron that can move along the layers. In diamond all four outer electrons are used in covalent bonds, so there are no free electrons."],
      ["Describe metallic bonding in a metal.",3,"A lattice of positive metal ions surrounded by a 'sea' of delocalised electrons; the electrostatic attraction between the ions and the electrons holds the structure together."]
    ],
    Numerical:[
      ["A molecule of ethanol is C₂H₅OH. Calculate the total number of atoms in one molecule.",2,"2 + 5 + 1 + 1 = 9 atoms."],
      ["An ionic compound has the formula Al₂O₃. State the ratio of aluminium ions to oxide ions.",1,"2 : 3."],
      ["Calculate the number of electrons shared in the double bond of an oxygen molecule, O₂.",1,"4 electrons (2 pairs)."]
    ]
  },
  "4. Chemical formulae and equations":{
    Theory:[
      ["Explain why a chemical equation must be balanced.",2,"Atoms are neither created nor destroyed during a reaction, so the number of atoms of each element must be the same on both sides."],
      ["State the meaning of the state symbols (s), (l), (g) and (aq).",2,"(s) solid, (l) liquid, (g) gas, (aq) aqueous (dissolved in water)."],
      ["Write a balanced symbol equation for the reaction of magnesium with oxygen.",2,"2Mg + O₂ → 2MgO."],
      ["Write a balanced symbol equation for the complete combustion of methane.",2,"CH₄ + 2O₂ → CO₂ + 2H₂O."]
    ],
    Numerical:[
      ["Calculate the relative formula mass of Mg(NO₃)₂. [Ar: Mg=24, N=14, O=16]",3,"24 + 2(14 + 3×16) = 24 + 2(62) = 148."],
      ["Calculate the relative formula mass of H₂SO₄. [Ar: H=1, S=32, O=16]",2,"2 + 32 + 64 = 98."],
      ["In the equation 2H₂ + O₂ → 2H₂O, state the ratio of moles of hydrogen to moles of water formed.",1,"1 : 1."]
    ]
  },
  "5. Chemical calculations":{
    Theory:[
      ["Define the term mole.",2,"The amount of substance containing the same number of particles as the number of atoms in 12 g of carbon-12 (6.02 × 10²³)."],
      ["State the equation linking concentration, amount in moles and volume in dm³.",2,"concentration (mol/dm³) = amount (mol) / volume (dm³)."],
      ["Describe how to convert a volume in cm³ to dm³.",1,"Divide by 1000."],
      ["State the volume occupied by one mole of any gas at room temperature and pressure.",1,"24 dm³ (24 000 cm³)."]
    ],
    Numerical:[
      ["Calculate the number of moles in 24 g of magnesium. [Ar: Mg=24]",2,"moles = mass/Ar = 24/24 = 1 mol."],
      ["Calculate the mass of 0.25 mol of CaCO₃. [Mr=100]",2,"mass = moles × Mr = 0.25 × 100 = 25 g."],
      ["Calculate the concentration when 0.10 mol of NaOH is dissolved in 250 cm³ of water.",3,"Volume = 0.250 dm³. Concentration = 0.10/0.250 = 0.40 mol/dm³."],
      ["Calculate the volume of 0.50 mol of a gas at r.t.p.",2,"Volume = 0.50 × 24 = 12 dm³."]
    ]
  },
  "6. Electrochemistry":{
    Theory:[
      ["Define electrolysis.",2,"The decomposition of an ionic compound, when molten or in aqueous solution, by the passage of an electric current."],
      ["Explain why ionic compounds only conduct electricity when molten or dissolved in water.",2,"The ions must be free to move to carry the charge; in the solid state the ions are held in a lattice and cannot move."],
      ["State the product formed at the cathode during the electrolysis of molten lead(II) bromide.",1,"Lead."],
      ["State the product formed at the anode during the electrolysis of molten lead(II) bromide.",1,"Bromine."]
    ],
    Numerical:[
      ["A current of 0.50 A flows through an electrolytic cell for 200 s. Calculate the charge that passes.",2,"Q = It = 0.50 × 200 = 100 C."],
      ["A charge of 480 C passes in 120 s. Calculate the current.",2,"I = Q/t = 480/120 = 4.0 A."],
      ["A current of 2.0 A flows for 5.0 minutes. Calculate the charge transferred.",3,"t = 5.0 × 60 = 300 s. Q = It = 2.0 × 300 = 600 C."]
    ]
  },
  "7. Chemical energetics":{
    Theory:[
      ["State whether bond breaking is endothermic or exothermic.",1,"Endothermic."],
      ["State whether bond making is endothermic or exothermic.",1,"Exothermic."],
      ["Define activation energy.",2,"The minimum energy that colliding particles must have for a reaction to occur."],
      ["Explain why a reaction is exothermic if the energy released in bond making is greater than the energy absorbed in bond breaking.",2,"More energy is released to the surroundings than is taken in, so the overall enthalpy change is negative and the surroundings warm up."]
    ],
    Numerical:[
      ["A reaction absorbs 30 kJ of energy to break bonds and releases 80 kJ when new bonds form. Calculate the overall energy change.",3,"ΔH = 30 − 80 = −50 kJ (exothermic)."],
      ["The combustion of 1 mol of fuel releases 400 kJ. Calculate the energy released by 2.5 mol.",2,"Energy = 400 × 2.5 = 1000 kJ."],
      ["A reaction releases 24 kJ from 0.20 mol of reactant. Calculate the energy released per mole.",2,"24/0.20 = 120 kJ/mol."]
    ]
  },
  "8. Rates of reaction":{
    Theory:[
      ["State four factors that affect the rate of a chemical reaction.",2,"Temperature, concentration (or pressure for gases), surface area, presence of a catalyst."],
      ["Explain, using collision theory, why increasing the concentration of a reactant increases the rate of reaction.",3,"There are more reactant particles in a given volume, so there are more frequent collisions and more successful collisions per second."],
      ["Explain why increasing the surface area of a solid reactant increases the rate of reaction.",2,"More particles of the solid are exposed at the surface, so there are more collisions per second between the reactants."],
      ["Define a catalyst.",2,"A substance that increases the rate of a reaction without being chemically changed at the end of the reaction; it provides an alternative pathway with lower activation energy."]
    ],
    Numerical:[
      ["A reaction produces 48 cm³ of gas in 24 s. Calculate the average rate of reaction in cm³/s.",2,"rate = 48/24 = 2.0 cm³/s."],
      ["A reaction loses 1.2 g of mass in 60 s. Calculate the average rate of mass loss in g/s.",2,"rate = 1.2/60 = 0.020 g/s."],
      ["100 cm³ of gas is collected over 5 minutes. Calculate the average rate in cm³/min.",2,"rate = 100/5 = 20 cm³/min."]
    ]
  },
  "9. Reversible reactions and equilibrium":{
    Theory:[
      ["State what is meant by a reversible reaction.",2,"A reaction in which products can react together to re-form the original reactants under the right conditions."],
      ["Describe what is meant by dynamic equilibrium.",3,"The forward and reverse reactions occur at the same rate, so the concentrations of reactants and products remain constant."],
      ["State the effect of increasing temperature on an exothermic equilibrium position.",2,"The position of equilibrium shifts in the endothermic (reverse) direction, decreasing the yield of products."],
      ["Describe the test using anhydrous copper(II) sulfate to show that a liquid contains water.",2,"Add the liquid to white anhydrous copper(II) sulfate; if water is present the solid turns blue."]
    ],
    Numerical:[
      ["At equilibrium a mixture contains 0.40 mol of reactant A and 0.10 mol of product B. Calculate the total amount of substance in the mixture.",1,"Total = 0.40 + 0.10 = 0.50 mol."],
      ["The forward rate at equilibrium is 0.05 mol/s. State the reverse rate.",1,"0.05 mol/s (equal at equilibrium)."],
      ["At equilibrium 30% of the original 2.0 mol of reactant has been converted to product. Calculate the amount of reactant remaining.",2,"Reactant remaining = 2.0 × 0.70 = 1.4 mol."]
    ]
  },
  "10. Redox reactions":{
    Theory:[
      ["Define oxidation in terms of electron transfer.",1,"Loss of electrons."],
      ["Define reduction in terms of electron transfer.",1,"Gain of electrons."],
      ["State what is meant by an oxidising agent.",2,"A substance that accepts electrons from another substance, causing that substance to be oxidised."],
      ["In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, identify the species that has been oxidised and the species that has been reduced.",2,"Zinc has been oxidised (loses electrons to form Zn²⁺); copper(II) ions have been reduced (gain electrons to form Cu)."]
    ],
    Numerical:[
      ["An iron ion changes from Fe³⁺ to Fe²⁺. State the number of electrons gained per ion.",1,"1 electron."],
      ["A magnesium atom forms a Mg²⁺ ion. State the number of electrons lost per atom.",1,"2 electrons."],
      ["In the half-equation Al³⁺ + 3e⁻ → Al, calculate the number of moles of electrons needed to produce 0.50 mol of aluminium.",2,"Moles of electrons = 3 × 0.50 = 1.5 mol."]
    ]
  },
  "11. Acids and bases":{
    Theory:[
      ["Define an acid in terms of the hydrogen ion (H⁺).",2,"A substance that produces H⁺ ions in aqueous solution."],
      ["Define an alkali.",2,"A soluble base that produces hydroxide ions (OH⁻) in aqueous solution."],
      ["State the colour of methyl orange in acidic and alkaline solution.",2,"Red in acid; yellow in alkali."],
      ["Explain the difference between a strong acid and a weak acid.",3,"A strong acid is fully ionised in water; a weak acid is only partially ionised in water."]
    ],
    Numerical:[
      ["A solution has [H⁺] = 1 × 10⁻³ mol/dm³. State its pH.",1,"pH = 3."],
      ["Calculate the volume of 0.20 mol/dm³ NaOH needed to neutralise 25.0 cm³ of 0.10 mol/dm³ HCl.",3,"Moles HCl = 0.10 × 0.025 = 0.0025. Volume NaOH = 0.0025/0.20 = 0.0125 dm³ = 12.5 cm³."],
      ["A solution of pH 2 is diluted ten times. State the new pH.",1,"pH = 3."]
    ]
  },
  "12. Preparation of salts":{
    Theory:[
      ["Describe how to prepare dry crystals of copper(II) sulfate from copper(II) oxide and dilute sulfuric acid.",4,"Warm the acid, add excess copper(II) oxide, filter off unreacted solid, heat the filtrate to concentrate, leave to crystallise, filter and dry the crystals."],
      ["Explain why excess insoluble base is added during salt preparation.",2,"To ensure that all the acid reacts, giving a pure solution of the salt."],
      ["Describe how to prepare an insoluble salt such as barium sulfate.",3,"Mix solutions of two soluble salts (e.g. barium chloride and sodium sulfate); filter to collect the precipitate; wash with distilled water and dry."],
      ["Suggest why crystals must be dried gently rather than strongly heated.",2,"Strong heating may cause the crystals to decompose or lose water of crystallisation."]
    ],
    Numerical:[
      ["A student evaporates 200 g of salt solution and recovers 15 g of dry salt. Calculate the mass of water removed.",2,"Water removed = 200 − 15 = 185 g."],
      ["25 cm³ of 0.10 mol/dm³ HCl reacts with NaOH. Calculate the moles of HCl used.",2,"Moles = 0.10 × 0.025 = 0.0025 mol."],
      ["A precipitation reaction yields 4.66 g of BaSO₄ from a theoretical mass of 5.83 g. Calculate the percentage yield.",2,"Yield = 4.66/5.83 × 100 = 80%."]
    ]
  },
  "13. The Periodic Table":{
    Theory:[
      ["Describe how elements are arranged in the modern Periodic Table.",2,"In order of increasing proton number, in groups (vertical columns) and periods (horizontal rows)."],
      ["Describe the trend in reactivity down Group I.",3,"Reactivity increases down the group because the outer electron is further from the nucleus and is more easily lost."],
      ["State three physical properties of transition elements.",3,"High density; high melting point; form coloured compounds; act as catalysts; show variable oxidation states (any three)."],
      ["Explain why noble gases are unreactive.",2,"They have a full outer shell of electrons and so do not need to gain, lose or share electrons."]
    ],
    Numerical:[
      ["An element is in Group V, Period 3. Calculate the number of outer electrons it has.",1,"5 outer electrons."],
      ["An atom of an element has electronic configuration 2,8,7. State its group and period.",2,"Group VII, Period 3."],
      ["A halogen with proton number 17 reacts with sodium. Write the formula of the salt formed.",1,"NaCl."]
    ]
  },
  "14. Metallic elements and alloys":{
    Theory:[
      ["State three typical physical properties of metals.",3,"High melting and boiling points; good conductors of heat and electricity; malleable; ductile; shiny when polished (any three)."],
      ["Explain why alloys are usually harder than the pure metals from which they are made.",3,"The added atoms are a different size and disrupt the regular lattice, so layers cannot slide over each other as easily."],
      ["Explain why metals are good conductors of electricity.",2,"They contain delocalised electrons that are free to move through the metal lattice and carry charge."],
      ["State one use of aluminium that depends on its low density.",1,"Making aircraft bodies or overhead power cables."]
    ],
    Numerical:[
      ["An alloy contains 70% copper and 30% zinc by mass. Calculate the mass of copper in 250 g of the alloy.",2,"Mass = 0.70 × 250 = 175 g."],
      ["A piece of brass of mass 80 g contains 60 g of copper. Calculate the percentage of zinc.",2,"Zinc = 80 − 60 = 20 g. Percentage = 20/80 × 100 = 25%."],
      ["Calculate the mass of tin in 500 g of solder that is 40% tin by mass.",2,"Mass = 0.40 × 500 = 200 g."]
    ]
  },
  "15. Reactivity of metals":{
    Theory:[
      ["Describe the observations when sodium is added to cold water.",3,"Sodium floats, melts into a ball, fizzes and moves rapidly across the surface; a colourless gas is produced and the solution becomes alkaline."],
      ["Explain how a displacement reaction can be used to compare the reactivity of two metals.",3,"A more reactive metal will displace a less reactive metal from a solution of its salt; the observation (colour change, deposit) confirms the order."],
      ["Place the following metals in order of decreasing reactivity: copper, magnesium, zinc, iron.",2,"Magnesium > zinc > iron > copper."],
      ["Explain why gold is found in its native state in the Earth's crust.",2,"Gold is very unreactive and does not readily form compounds, so it occurs as the uncombined element."]
    ],
    Numerical:[
      ["A 2.4 g sample of magnesium reacts completely with excess dilute hydrochloric acid. Calculate the moles of magnesium used. [Ar Mg = 24]",2,"Moles = 2.4/24 = 0.10 mol."],
      ["0.10 mol of magnesium reacts with HCl. Use Mg + 2HCl → MgCl₂ + H₂ to calculate the moles of hydrogen produced.",2,"Moles H₂ = 0.10 mol."],
      ["Calculate the volume at r.t.p. of 0.10 mol of hydrogen gas.",2,"Volume = 0.10 × 24 = 2.4 dm³."]
    ]
  },
  "16. Extraction and corrosion of metals":{
    Theory:[
      ["Explain why aluminium is extracted by electrolysis rather than by reduction with carbon.",3,"Aluminium is more reactive than carbon, so carbon cannot reduce its ore; electrolysis of molten aluminium oxide is used instead."],
      ["State the two conditions required for iron to rust.",2,"Water (or moisture) and oxygen (air)."],
      ["Describe how galvanising prevents rusting of iron.",3,"A coating of zinc is applied; the zinc forms a physical barrier and also provides sacrificial protection because zinc is more reactive than iron."],
      ["Describe the role of carbon in the extraction of iron in the blast furnace.",3,"Carbon (coke) burns in air to form carbon monoxide, which reduces iron(III) oxide to iron."]
    ],
    Numerical:[
      ["A 200 g sample of iron ore contains 70% iron(III) oxide. Calculate the mass of iron(III) oxide.",2,"Mass = 0.70 × 200 = 140 g."],
      ["Calculate the maximum mass of iron that can be obtained from 160 g of Fe₂O₃. [Mr Fe₂O₃ = 160, Ar Fe = 56]",3,"Moles Fe₂O₃ = 1; moles Fe = 2; mass Fe = 2 × 56 = 112 g."],
      ["An iron bar of mass 50 g loses 0.50 g due to rusting. Calculate the percentage mass loss.",2,"% loss = 0.50/50 × 100 = 1.0%."]
    ]
  },
  "17. Chemistry of our environment":{
    Theory:[
      ["State two greenhouse gases and one human activity that increases their concentration.",3,"Carbon dioxide (from burning fossil fuels) and methane (from livestock or landfill)."],
      ["Describe how sulfur dioxide is produced and how it contributes to acid rain.",3,"Sulfur dioxide is produced when fossil fuels containing sulfur are burned; it dissolves in water in clouds to form sulfurous and sulfuric acid, which falls as acid rain."],
      ["State one harmful effect of carbon monoxide on the human body.",2,"Carbon monoxide binds to haemoglobin and reduces the oxygen-carrying capacity of the blood."],
      ["Describe one method used to reduce emissions of sulfur dioxide from power stations.",2,"Flue gas desulfurisation: the gases are passed through calcium oxide or calcium carbonate which reacts with the sulfur dioxide."]
    ],
    Numerical:[
      ["The concentration of CO₂ in the atmosphere rises from 280 ppm to 420 ppm. Calculate the increase.",1,"420 − 280 = 140 ppm."],
      ["A power station releases 5000 tonnes of CO₂ per day. Calculate the mass released in one week.",2,"5000 × 7 = 35 000 tonnes."],
      ["A sample of fuel contains 2.0% sulfur by mass. Calculate the mass of sulfur in 500 kg of fuel.",2,"Mass = 0.020 × 500 = 10 kg."]
    ]
  },
  "18. Introduction to organic chemistry":{
    Theory:[
      ["Define a hydrocarbon.",2,"A compound containing only hydrogen and carbon atoms."],
      ["State the general formula of the alkane homologous series.",1,"CₙH₂ₙ₊₂."],
      ["State the general formula of the alkene homologous series.",1,"CₙH₂ₙ."],
      ["Describe the test that distinguishes between an alkane and an alkene.",3,"Add bromine water: an alkane gives no colour change (stays orange); an alkene decolourises the bromine water (turns colourless)."]
    ],
    Numerical:[
      ["Calculate the number of hydrogen atoms in an alkane with 5 carbon atoms.",2,"H atoms = 2(5) + 2 = 12."],
      ["Calculate the number of hydrogen atoms in an alkene with 4 carbon atoms.",2,"H atoms = 2(4) = 8."],
      ["Calculate the relative formula mass of ethane (C₂H₆). [Ar: C=12, H=1]",2,"Mr = 2(12) + 6(1) = 30."]
    ]
  },
  "19. Reactions of organic compounds":{
    Theory:[
      ["Write a balanced equation for the complete combustion of ethanol.",2,"C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O."],
      ["State the products of fermentation of glucose and the conditions required.",3,"Glucose is converted to ethanol and carbon dioxide using yeast at about 25–35 °C in the absence of oxygen."],
      ["Describe the reaction between ethene and bromine water, including the colour change observed.",2,"Ethene decolourises bromine water (orange to colourless) as 1,2-dibromoethane is formed."],
      ["State the conditions required for the catalytic cracking of long-chain hydrocarbons.",2,"High temperature (~600 °C) and a catalyst (e.g. silica/alumina or zeolite)."]
    ],
    Numerical:[
      ["Calculate the mass of carbon dioxide produced when 4.6 g of ethanol (Mr=46) is completely combusted. [Mr CO₂ = 44]",3,"Moles ethanol = 4.6/46 = 0.10. Moles CO₂ = 0.20. Mass = 0.20 × 44 = 8.8 g."],
      ["A fermentation produces 23 g of ethanol from 60 g of glucose. Calculate the percentage yield given a theoretical mass of 30.7 g.",2,"Yield = 23/30.7 × 100 = 75%."],
      ["State the volume at r.t.p. of 0.50 mol of CO₂.",2,"Volume = 0.50 × 24 = 12 dm³."]
    ]
  },
  "20. Petrochemicals and polymers":{
    Theory:[
      ["Define addition polymerisation.",2,"A reaction in which many small unsaturated molecules (monomers) join together to form a long-chain molecule (polymer) with no other product."],
      ["Draw the repeat unit of poly(ethene).",2,"–(CH₂–CH₂)– repeating unit."],
      ["State two environmental problems caused by disposing of plastics in landfill.",2,"They are non-biodegradable and remain for many years; they may release toxic chemicals or take up large amounts of space."],
      ["State one advantage of recycling plastics.",1,"Reduces use of finite crude oil resources and reduces waste in landfill."]
    ],
    Numerical:[
      ["A polymer is made from 2500 monomer units. State the number of repeating units in the polymer chain.",1,"2500 repeating units."],
      ["Calculate the relative molecular mass of poly(ethene) made from 1000 ethene monomers (Mr ethene = 28).",2,"Mr = 1000 × 28 = 28 000."],
      ["A polymer sample of mass 56 g is formed from ethene (Mr = 28). Calculate the number of monomer units used.",2,"Moles = 56/28 = 2; number of monomers = 2 × 6.02 × 10²³ ≈ 1.2 × 10²⁴."]
    ]
  },
  "21. Experimental design and separation techniques":{
    Theory:[
      ["Describe how filtration is used to separate sand from a sand and water mixture.",3,"Pour the mixture through filter paper in a funnel; the water passes through as filtrate while the sand is trapped as the residue."],
      ["Describe how simple distillation can be used to obtain pure water from salt water.",3,"Heat the salt solution; the water boils and the vapour is cooled in a condenser; pure water is collected as the distillate while salt remains in the flask."],
      ["Describe how fractional distillation separates ethanol from a mixture of ethanol and water.",4,"Heat the mixture in a flask with a fractionating column; ethanol vapour (lower boiling point) rises through the column while water condenses and returns; ethanol vapour passes into the condenser and is collected."],
      ["Explain why paper chromatography can separate a mixture of dyes.",3,"Different dyes have different solubilities in the solvent and different attractions to the paper, so they travel different distances up the paper."]
    ],
    Numerical:[
      ["In chromatography a solvent travels 8.0 cm and a spot travels 6.0 cm. Calculate the Rf value.",2,"Rf = 6.0/8.0 = 0.75."],
      ["A spot has Rf = 0.40 and the solvent front travels 10.0 cm. Calculate how far the spot travels.",2,"Distance = 0.40 × 10.0 = 4.0 cm."],
      ["A liquid mixture boils at 78 °C and 100 °C. State the temperature at which ethanol will be collected during fractional distillation.",1,"78 °C."]
    ]
  },
  "22. Chemical analysis":{
    Theory:[
      ["Describe the test for hydrogen gas.",2,"Place a lighted splint at the mouth of the test tube; a squeaky 'pop' indicates hydrogen."],
      ["Describe the test for oxygen gas.",2,"Place a glowing splint into the test tube; if the splint relights, oxygen is present."],
      ["Describe the test for carbon dioxide.",2,"Bubble the gas through limewater; if it turns milky/cloudy, carbon dioxide is present."],
      ["Describe the test for ammonia gas.",2,"Hold damp red litmus paper at the mouth of the test tube; ammonia turns it blue."]
    ],
    Numerical:[
      ["A flame test gives a lilac colour. State the metal ion present.",1,"Potassium (K⁺)."],
      ["A solution gives a white precipitate with silver nitrate (in nitric acid) that dissolves in dilute ammonia. State the halide ion present.",1,"Chloride (Cl⁻)."],
      ["A sample produces 24 cm³ of gas. Calculate this volume in dm³.",1,"24/1000 = 0.024 dm³."]
    ]
  }
};
function chemistryVariants(chapter){
  const theory=[],numerical=[];
  for(let i=1;i<=10;i++){
    const a=2+i,b=3+(i%6),c=1+(i%4);
    const prompts=chemistryTheoryPrompts[chapter]||[];
    if(prompts.length){const prompt=prompts[i%prompts.length];theory.push([prompt,2,`Award marks for a correct syllabus-aligned response for ${chapter}.`]);}
    if(chapter==="1. States of matter")numerical.push([`A sample is heated from ${a*5} °C to ${a*5+b*10} °C. Calculate the temperature increase.`,1,`Temperature increase = ${a*5+b*10} − ${a*5} = ${b*10} °C.`]);
    else if(chapter==="2. Atomic structure")numerical.push([`An atom has proton number ${a} and nucleon number ${a+b}. Calculate the number of neutrons.`,1,`Neutrons = ${a+b} − ${a} = ${b}.`]);
    else if(chapter==="3. Chemical bonding")numerical.push([`A molecule contains ${a} atoms of hydrogen and ${b} atoms of oxygen. Calculate the total number of atoms in one molecule.`,1,`${a} + ${b} = ${a+b} atoms.`]);
    else if(chapter==="4. Chemical formulae and equations")numerical.push([`The equation is ${a}A + B → ${a}C. Calculate the number of moles of C formed from ${a*b} moles of A.`,2,`The ratio A:C is 1:1, so ${a*b} moles of C form.`]);
    else if(chapter==="5. Chemical calculations")numerical.push([`Calculate the amount in moles in ${a*b} g of a substance with Mr = ${b}.`,2,`moles = mass/Mr = ${a*b}/${b} = ${a} mol.`]);
    else if(chapter==="11. Acids and bases")numerical.push([`A solution has pH ${c}. State how many pH units lower this is than a neutral solution.`,1,`7 − ${c} = ${7-c} pH units.`]);
    else if(chapter==="12. Preparation of salts")numerical.push([`A student evaporates ${a*b} g of solution and obtains ${a} g of salt. Calculate the mass of water removed.`,1,`${a*b} − ${a} = ${a*(b-1)} g.`]);
    else if(chapter==="13. The Periodic Table")numerical.push([`An element has proton number ${a+b}. Calculate the number of electrons in one neutral atom.`,1,`${a+b} electrons.`]);
    else if(chapter==="14. Metallic elements and alloys")numerical.push([`An alloy contains ${a*10} g of copper and ${b*10} g of zinc. Calculate the total mass of alloy.`,1,`${a*10} + ${b*10} = ${(a+b)*10} g.`]);
    else if(chapter==="15. Reactivity of metals")numerical.push([`A metal sample loses ${a} g of mass from an initial mass of ${a*b} g. Calculate its final mass.`,1,`${a*b} − ${a} = ${a*(b-1)} g.`]);
    else if(chapter==="16. Extraction and corrosion of metals")numerical.push([`A metal ore contains ${a*10}% metal. Calculate the mass of metal in ${b*100} g of ore.`,2,`${a*10}/100 × ${b*100} = ${a*b*10} g.`]);
    else if(chapter==="17. Chemistry of our environment")numerical.push([`A gas concentration decreases from ${a*b*10} ppm to ${a*b} ppm. Calculate the decrease.`,1,`${a*b*10} − ${a*b} = ${a*b*9} ppm.`]);
    else if(chapter==="18. Introduction to organic chemistry")numerical.push([`An alkane has ${a} carbon atoms. Use the general formula CnH2n+2 to calculate its number of hydrogen atoms.`,2,`Hydrogen atoms = 2(${a}) + 2 = ${2*a+2}.`]);
    else if(chapter==="19. Reactions of organic compounds")numerical.push([`A reaction produces ${a*b} g of product from ${a} g and ${b} g of reactants. Calculate the difference between total reactant mass and product mass.`,2,`Difference = (${a} + ${b}) − ${a*b} = ${a+b-a*b} g.`]);
    else if(chapter==="20. Petrochemicals and polymers")numerical.push([`${a*b} monomer molecules join to form a polymer chain. Calculate the number of repeating units.`,1,`${a*b} repeating units.`]);
    else if(chapter==="21. Experimental design and separation techniques")numerical.push([`A chromatography solvent front moves ${a*b} cm and a spot moves ${a} cm. Calculate the Rf value.`,2,`Rf = ${a}/${a*b} = ${(1/b).toFixed(2)}.`]);
    else if(chapter==="22. Chemical analysis")numerical.push([`A titration uses ${a*b} cm³ of solution. Convert this volume to dm³.`,1,`${a*b}/1000 = ${(a*b/1000).toFixed(3)} dm³.`]);
    else if(chapter==="6. Electrochemistry")numerical.push([`A charge of ${a*b} C flows for ${b} s. Calculate the current.`,2,`I = Q/t = ${a*b}/${b} = ${a} A.`]);
    else if(chapter==="7. Chemical energetics")numerical.push([`A reaction releases ${a*b*10} kJ from ${b} moles of reactant. Calculate the energy released per mole.`,2,`${a*b*10}/${b} = ${a*10} kJ/mol.`]);
    else if(chapter==="8. Rates of reaction")numerical.push([`${a*b} cm³ of gas is produced in ${b} s. Calculate the average rate.`,2,`rate = ${a*b}/${b} = ${a} cm³/s.`]);
    else if(chapter==="9. Reversible reactions and equilibrium")numerical.push([`At equilibrium a mixture contains ${a} mol of reactant and ${b} mol of product. Calculate the total amount.`,1,`${a} + ${b} = ${a+b} mol.`]);
    else if(chapter==="10. Redox reactions")numerical.push([`An ion changes oxidation state from +${c} to +${c+2}. Calculate the increase in oxidation number.`,1,`Increase = ${c+2} − ${c} = 2.`]);
  }
  return {Theory:theory,Numerical:numerical};
}
const mathsSupplements = {
  "1. Review of number concepts":[
    ["Write 84 as a product of its prime factors.",2,"84 = 2² × 3 × 7."],
    ["Evaluate 18 − 3 × 4 + 8 ÷ 2.",2,"18 − 12 + 4 = 10."],
    ["Estimate the value of 19.8 × 0.51 by rounding each number to one significant figure.",2,"20 × 0.5 = 10."],
    ["Find the highest common factor of 72 and 108.",2,"HCF = 36."]
  ],
  "2. Making sense of algebra":[
    ["Simplify 7a − 3b + 4a + 5b.",2,"11a + 2b."],
    ["Expand and simplify 5(2x − 3) − 2(x + 4).",3,"10x − 15 − 2x − 8 = 8x − 23."],
    ["Substitute x = −2 and y = 5 into 3x² − 2y.",2,"3(−2)² − 2(5) = 12 − 10 = 2."],
    ["Simplify (m³ × m⁵) ÷ m².",2,"m⁶."]
  ],
  "3. Lines, angles and shapes":[
    ["The angles in a triangle are 2x, 3x and 4x degrees. Find x.",2,"2x + 3x + 4x = 180, so x = 20°."],
    ["Find the interior angle of a regular hexagon.",2,"(6 − 2) × 180 ÷ 6 = 120°."],
    ["Two parallel lines are crossed by a transversal. One corresponding angle is 68°. State the size of the other corresponding angle.",1,"68°."],
    ["The exterior angle of a regular polygon is 30°. Find the number of sides.",2,"360 ÷ 30 = 12 sides."]
  ],
  "4. Collecting, organising and displaying data":[
    ["A class records the values 3, 4, 4, 5, 6, 6, 6, 8. State the mode.",1,"6."],
    ["A survey asks students to choose their favourite sport. State a suitable chart for displaying the results.",1,"A bar chart or pie chart."],
    ["Explain why a sample of 10 students from one class may not represent an entire school.",2,"The sample is too small and may be biased because it only includes one class."],
    ["The frequencies for four groups are 5, 8, 11 and 6. Calculate the total frequency.",1,"5 + 8 + 11 + 6 = 30."]
  ],
  "5. Fractions, percentages and standard form":[
    ["Calculate 3/4 + 5/8. Give your answer in its simplest form.",2,"6/8 + 5/8 = 11/8 = 1 3/8."],
    ["Increase 640 by 12%.",2,"640 × 1.12 = 716.8."],
    ["Write 0.0000725 in standard form.",1,"7.25 × 10⁻⁵."],
    ["Calculate (3.0 × 10⁴) × (2.0 × 10⁻³). Give your answer in standard form.",2,"6.0 × 10¹ = 6.0 × 10."]
  ],
  "6. Equations, factors and formulae":[
    ["Solve 4(2x − 3) = 20.",2,"8x − 12 = 20, so x = 4."],
    ["Factorise x² + 7x + 12.",2,"(x + 3)(x + 4)."],
    ["Make r the subject of A = πr².",2,"r = √(A/π)."],
    ["Solve x² − 9 = 0.",2,"x = 3 or x = −3."]
  ],
  "7. Perimeter, area and volume":[
    ["Calculate the circumference of a circle with radius 6 cm. Give your answer in terms of π.",2,"Circumference = 2πr = 12π cm."],
    ["A cuboid measures 8 cm by 5 cm by 3 cm. Calculate its volume.",2,"Volume = 8 × 5 × 3 = 120 cm³."],
    ["A triangle has base 14 cm and perpendicular height 9 cm. Calculate its area.",2,"Area = 1/2 × 14 × 9 = 63 cm²."],
    ["A cylinder has radius 4 cm and height 10 cm. Calculate its volume in terms of π.",3,"Volume = πr²h = π × 4² × 10 = 160π cm³."]
  ],
  "8. Introduction to probability":[
    ["A fair spinner has eight equal sections numbered 1 to 8. Find the probability of spinning an even number.",2,"4/8 = 1/2."],
    ["The probability that a bus is late is 0.18. Find the probability that it is not late.",1,"1 − 0.18 = 0.82."],
    ["A bag contains 7 white and 5 black counters. One counter is selected at random. Find the probability that it is black.",2,"5/12."],
    ["Two fair coins are tossed. Find the probability of obtaining two heads.",2,"1/2 × 1/2 = 1/4."]
  ],
  "9. Sequences, surds and sets":[
    ["Find the next two terms of the sequence 5, 9, 13, 17, ...",1,"21, 25."],
    ["Find an expression for the nth term of 4, 7, 10, 13, ...",2,"3n + 1."],
    ["Simplify √50.",2,"√50 = √(25 × 2) = 5√2."],
    ["In a group of 30 students, 18 study French and 14 study Spanish. Five study both. Find how many study neither.",3,"18 + 14 − 5 = 27 study at least one, so 3 study neither."]
  ],
  "10. Straight lines and quadratic equations":[
    ["Find the gradient of the line joining (−1, 3) and (5, 15).",2,"Gradient = (15 − 3)/(5 − (−1)) = 12/6 = 2."],
    ["Find the equation of the line with gradient 3 and y-intercept −4.",2,"y = 3x − 4."],
    ["Solve x² + 5x + 6 = 0.",2,"(x + 2)(x + 3) = 0, so x = −2 or −3."],
    ["The line y = 2x + 1 passes through the point (4, y). Find y.",1,"y = 2(4) + 1 = 9."]
  ],
  "11. Pythagoras' theorem and similar shapes":[
    ["A right-angled triangle has shorter sides 9 cm and 12 cm. Calculate its hypotenuse.",2,"√(9² + 12²) = 15 cm."],
    ["Two similar shapes have corresponding lengths 4 cm and 10 cm. Find the scale factor of enlargement.",1,"10/4 = 2.5."],
    ["A right-angled triangle has hypotenuse 17 cm and one shorter side 8 cm. Calculate the other shorter side.",3,"√(17² − 8²) = 15 cm."],
    ["Two similar triangles have scale factor 3. The area of the smaller triangle is 8 cm². Find the area of the larger triangle.",2,"Area scale factor = 3² = 9, so area = 72 cm²."]
  ],
  "12. Averages and measures of spread":[
    ["Find the mean of 6, 9, 11, 14 and 20.",2,"(6 + 9 + 11 + 14 + 20)/5 = 12."],
    ["Find the range of 18, 7, 13, 21, 9 and 16.",1,"21 − 7 = 14."],
    ["The mean of five numbers is 8. Find their total.",1,"5 × 8 = 40."],
    ["The values 2, 4, 6 and 8 have frequencies 1, 3, 4 and 2. Calculate the mean.",3,"Total = 2 + 12 + 24 + 16 = 54. Frequency = 10. Mean = 5.4."]
  ],
  "14. Further solving of equations and inequalities":[
    ["Solve the inequality 3x + 5 < 20.",2,"3x < 15, so x < 5."],
    ["Solve 2x² − 7x + 3 = 0.",3,"(2x − 1)(x − 3) = 0, so x = 1/2 or 3."],
    ["Solve the simultaneous equations y = 2x + 1 and x + y = 10.",3,"x + 2x + 1 = 10, so x = 3 and y = 7."],
    ["Rearrange v = u + at to make t the subject.",2,"t = (v − u)/a."]
  ],
  "16. Scatter diagrams and correlation":[
    ["State the type of correlation expected between the age of a car and its resale value.",1,"Negative correlation."],
    ["Explain why correlation does not always imply causation.",2,"A relationship between two variables does not prove that one variable causes the other; another factor may affect both."],
    ["A line of best fit predicts y = 18 when x = 6. State the estimated value of y.",1,"18."],
    ["Describe the correlation shown when points lie close to an upward-sloping line.",1,"Strong positive correlation."]
  ]
};
function mathsVariants(chapter){
  const variants=[];
  for(let i=1;i<=18;i++){
    if(chapter==="1. Review of number concepts"){const a=12+i,b=3+(i%6);variants.push([`Calculate ${a} × ${b} − ${b*2}.`,2,`${a*b} − ${b*2} = ${a*b-b*2}.`]);}
    else if(chapter==="2. Making sense of algebra"){const a=2+(i%5),b=3+(i%7),c=1+(i%4);variants.push([`Simplify ${a}x + ${b} + ${c}x − ${c}.`,2,`${a+c}x + ${b-c}.`]);}
    else if(chapter==="3. Lines, angles and shapes"){const angle=40+(i*3);variants.push([`Two angles on a straight line are ${angle}° and x°. Find x.`,2,`x = 180 − ${angle} = ${180-angle}°.`]);}
    else if(chapter==="4. Collecting, organising and displaying data"){const a=3+i,b=5+i,c=7+i;variants.push([`Find the mean of ${a}, ${b} and ${c}.`,2,`Mean = (${a} + ${b} + ${c})/3 = ${(a+b+c)/3}.`]);}
    else if(chapter==="5. Fractions, percentages and standard form"){const amount=100+20*i,percent=5*(1+(i%4));variants.push([`Calculate ${percent}% of ${amount}.`,2,`${percent}/100 × ${amount} = ${percent*amount/100}.`]);}
    else if(chapter==="6. Equations, factors and formulae"){const x=2+i,a=2+(i%4),b=3+(i%6),total=a*x+b;variants.push([`Solve ${a}x + ${b} = ${total}.`,2,`${a}x = ${total-b}, so x = ${x}.`]);}
    else if(chapter==="7. Perimeter, area and volume"){const length=5+i,width=3+(i%6);variants.push([`A rectangle has length ${length} cm and width ${width} cm. Calculate its area.`,2,`Area = ${length} × ${width} = ${length*width} cm².`]);}
    else if(chapter==="8. Introduction to probability"){
      const mode=i%4;
      if(mode===0){
        const red=4+i,blue=2+(i%6),total=red+blue;
        variants.push([`A bag contains ${red} red counters and ${blue} blue counters. Find the probability of selecting a blue counter.`,2,`${blue}/${total}.`]);
      }else if(mode===1){
        const total=10+2*i,success=2+(i%5);
        variants.push([`A spinner has ${total} equal sections and ${success} are shaded. Find the probability of landing on a shaded section.`,2,`${success}/${total}.`]);
      }else if(mode===2){
        const late=(10+i)/100;
        variants.push([`The probability that a bus is late is ${late.toFixed(2)}. Find the probability that it is on time.`,2,`1 - ${late.toFixed(2)} = ${(1-late).toFixed(2)}.`]);
      }else{
        const white=3+(i%6),black=2+(i%5),green=1+(i%4),total=white+black+green;
        variants.push([`A bag contains ${white} white, ${black} black and ${green} green counters. Find the probability of selecting a counter that is not green.`,2,`(${white}+${black})/${total} = ${white+black}/${total}.`]);
      }
    }
    else if(chapter==="9. Sequences, surds and sets"){const start=1+i,diff=2+(i%5);variants.push([`Find the next two terms of the sequence ${start}, ${start+diff}, ${start+2*diff}, ${start+3*diff}, ...`,2,`${start+4*diff}, ${start+5*diff}.`]);}
    else if(chapter==="10. Straight lines and quadratic equations"){const gradient=1+(i%5),intercept=i-4,x=2+(i%6);variants.push([`Find y when x = ${x} for the line y = ${gradient}x ${intercept<0?"−":"+"} ${Math.abs(intercept)}.`,2,`y = ${gradient}(${x}) ${intercept<0?"−":"+"} ${Math.abs(intercept)} = ${gradient*x+intercept}.`]);}
    else if(chapter==="11. Pythagoras' theorem and similar shapes"){const a=3+i,b=4+i;variants.push([`A right-angled triangle has shorter sides ${a} cm and ${b} cm. Write an expression for the length of its hypotenuse.`,2,`Hypotenuse = √(${a}² + ${b}²) cm.`]);}
    else if(chapter==="12. Averages and measures of spread"){const a=4+i,b=7+i,c=10+i,d=13+i;variants.push([`Find the range of ${a}, ${b}, ${c} and ${d}.`,1,`Range = ${d} − ${a} = ${d-a}.`]);}
    else if(chapter==="14. Further solving of equations and inequalities"){const x=2+i,a=2+(i%5),b=1+(i%4),limit=a*x+b;variants.push([`Solve the inequality ${a}x + ${b} < ${limit}.`,2,`${a}x < ${limit-b}, so x < ${x}.`]);}
    else if(chapter==="16. Scatter diagrams and correlation"){const contexts=["hours revised and test score","outside temperature and heating use","vehicle age and resale value"];const context=contexts[i%contexts.length],type=i%3===0?"positive":i%3===1?"negative":"a possible";variants.push([`State whether you would expect ${type} correlation between ${context}. Give a reason.`,2,`A suitable explanation based on the expected relationship between the two variables.`]);}
  }
  return variants;
}
let state={subject:"Physics",chapters:["2. Describing motion","3. Forces and motion"],questions:[],seed:0,referenceQuestions:[],referenceSource:"",referenceCheckedAt:"",lastReferenceLink:null};
const $=id=>document.getElementById(id);
function renderSubjects(){ $("subject-grid").innerHTML=Object.keys(curriculum).map(s=>`<button type="button" class="subject-card ${s===state.subject?"active":""}" data-subject="${s}">${s}<span>${subjectMeta[s]}</span></button>`).join(""); document.querySelectorAll("[data-subject]").forEach(b=>b.onclick=()=>{state.subject=b.dataset.subject;state.chapters=[];state.referenceQuestions=[];state.lastReferenceLink=null;render();});}
function renderChapters(){const search=$("chapter-input").value.toLowerCase();$("chapter-options").innerHTML=curriculum[state.subject].filter(c=>c.toLowerCase().includes(search)).map(c=>`<button class="chapter-option ${state.chapters.includes(c)?"selected":""}" type="button" data-chapter="${c}">${c}</button>`).join("");document.querySelectorAll("[data-chapter]").forEach(b=>b.onclick=()=>{if(!state.chapters.includes(b.dataset.chapter))state.chapters.push(b.dataset.chapter);render();});$("selected-chapters").innerHTML=state.chapters.length?state.chapters.map(c=>`<span class="chapter-chip">${c}<button type="button" data-remove="${c}">×</button></span>`).join(""):`<span class="chapter-chip">Choose at least one chapter</span>`;document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{state.chapters=state.chapters.filter(c=>c!==b.dataset.remove);render();});}
function hasSplit(){return state.subject!=="Mathematics";}
function getSplit(){return {theory:+$("theory-marks").value||0,numerical:+$("numerical-marks").value||0};}
function getDifficulty(){return ($("difficulty")&&$("difficulty").value)||"Balanced";}
function getReferenceLink(){return ($("reference-link")&&$("reference-link").value.trim())||"";}
function sanitizeReferenceLink(){const raw=getReferenceLink();if(!raw)return {ok:true,url:""};try{const u=new URL(raw);if(u.protocol!=="http:"&&u.protocol!=="https:")return {ok:false,error:"Please enter an http or https URL."};return {ok:true,url:u.toString()};}catch(e){return {ok:false,error:"Please enter a valid URL (e.g. https://example.com/paper.pdf)."};}}
function difficultyRank(marks){const d=getDifficulty();if(d==="Foundation")return marks<=2?0:marks<=3?1:2;if(d==="Challenge")return marks>=4?0:marks>=3?1:2;return 0;}
function orderByDifficulty(items){return [...items].sort((x,y)=>{const refDiff=(y.fromReference?1:0)-(x.fromReference?1:0);if(refDiff!==0)return refDiff;return difficultyRank(x.q[1])-difficultyRank(y.q[1]);});}
function updateSummary(){const marks=+$("marks").value||40,split=getSplit(),showSplit=hasSplit(),duration=$("duration")?$("duration").value:"",difficulty=getDifficulty(),link=getReferenceLink();$("sum-subject").textContent=state.subject;$("sum-chapters").textContent=`${state.chapters.length} selected`;$("sum-marks").textContent=`${marks} marks`;$("sum-questions").textContent=`~${Math.max(4,Math.ceil(marks/3))} questions`;$("split-settings").classList.toggle("hidden",!showSplit);$("sum-split-row").classList.toggle("hidden",!showSplit);$("sum-split").textContent=`${split.theory} theory · ${split.numerical} numerical`;if($("sum-duration"))$("sum-duration").textContent=duration;if($("sum-difficulty"))$("sum-difficulty").textContent=difficulty;if($("sum-reference"))$("sum-reference").textContent=link?link:"Default PMT archive";$("split-error").textContent=showSplit&&split.theory+split.numerical!==marks?`Theory and numerical marks must add up to ${marks}.`:"";}
function render(){renderSubjects();renderChapters();updateSummary();}
function addCustom(){const val=$("chapter-input").value.trim();if(val&&!state.chapters.includes(val)){state.chapters.push(val);$("chapter-input").value="";render();}}
function referenceQuestionItems(){return (state.referenceQuestions||[]).filter(r=>state.chapters.includes(r.chapter)).map(r=>({q:[r.text,r.marks,r.answer||"Refer to the original source for the marking scheme.",""],chapter:r.chapter,forcedType:r.type||(hasSplit()?"Theory":"Questions"),fromReference:true}));}
function chapterQuestions(){const ref=referenceQuestionItems();const curated=banks[state.subject].map((q,i)=>({q,chapter:chapterMap[state.subject][i]})).filter(item=>state.chapters.includes(item.chapter));if(state.subject==="Mathematics"){const extra=state.chapters.flatMap(chapter=>[...(mathsSupplements[chapter]||[]),...mathsVariants(chapter)].map(q=>({q,chapter})));return [...ref,...curated,...extra];}if(state.subject==="Chemistry"){const extra=state.chapters.flatMap(chapter=>{const bank=chemistrySupplements[chapter]||{Theory:[],Numerical:[]},variants=chemistryVariants(chapter);return [...bank.Theory,...variants.Theory].map(q=>({q,chapter,forcedType:"Theory"})).concat([...bank.Numerical,...variants.Numerical].map(q=>({q,chapter,forcedType:"Numerical"})));});return [...ref,...curated,...extra];}const extra=state.chapters.flatMap(chapter=>{const bank=physicsSupplements[chapter]||{Theory:[],Numerical:[]},variants=physicsVariants(chapter);return [...bank.Theory,...variants.Theory].map(q=>({q,chapter,forcedType:"Theory"})).concat([...bank.Numerical,...variants.Numerical].map(q=>({q,chapter,forcedType:"Numerical"})));});return [...ref,...curated,...extra];}
function questionSources(){const source=chapterQuestions();if(state.subject==="Physics")return {Theory:source.filter(item=>item.forcedType==="Theory"||(!item.forcedType&&![1,3,5,10,11,12,13,16,17,20].includes(banks.Physics.indexOf(item.q)))),Numerical:source.filter(item=>item.forcedType==="Numerical"||(!item.forcedType&&[1,3,5,10,11,12,13,16,17,20].includes(banks.Physics.indexOf(item.q))))};if(state.subject==="Chemistry")return {Theory:source.filter(item=>item.forcedType==="Theory"||(!item.forcedType&&![2,11].includes(banks.Chemistry.indexOf(item.q)))),Numerical:source.filter(item=>item.forcedType==="Numerical"||(!item.forcedType&&[2,11].includes(banks.Chemistry.indexOf(item.q))))};return {Questions:source};}
function sectionCapacity(source){return source.reduce((sum,item)=>sum+item.q[1],0);}
function normalizeQuestionText(text){return (text||"").replace(/\s+/g," ").trim().toLowerCase();}
function normalizeQuestionTemplate(text){return normalizeQuestionText(text).replace(/[0-9]+(?:\.[0-9]+)?/g,"<n>").replace(/[−-]\s*<n>/g,"<n>");}
function questionDedupeKey(item){if(state.subject==="Mathematics")return `${item.chapter||"general"}::${normalizeQuestionText(item.q[0])}`;return normalizeQuestionText(item.q[0]);}
function questionKeyLimit(){return 1;}
function uniqueSectionCapacity(source,usedCounts){const counts=usedCounts||new Map(),limit=questionKeyLimit();let total=0;for(const item of source){const key=questionDedupeKey(item),used=counts.get(key)||0;if(used>=limit)continue;counts.set(key,used+1);total+=item.q[1];}return total;}
function fillSection(source,target,type,startIndex,usedCounts){if(!target||!source.length)return [];let result=[],total=0,prepared=orderByDifficulty(source),ordered=[...prepared.slice(startIndex%prepared.length),...prepared.slice(0,startIndex%prepared.length)],counts=usedCounts||new Map(),limit=questionKeyLimit();for(const item of ordered){if(total>=target)break;let q=item.q,key=questionDedupeKey(item),used=counts.get(key)||0;if(used>=limit)continue;let questionMarks=Math.min(q[1],target-total);result.push({text:q[0],marks:questionMarks,answer:q[2],diagram:q[3]||"",type,chapter:item.chapter});counts.set(key,used+1);total+=questionMarks;}return result;}
function buildQuestions(){const sources=questionSources(),split=getSplit(),usedCounts=new Map();state.questions=hasSplit()?[...fillSection(sources.Theory,split.theory,"Theory",state.seed,usedCounts),...fillSection(sources.Numerical,split.numerical,"Numerical",state.seed,usedCounts)]:fillSection(sources.Questions,+$("marks").value,"Questions",state.seed,usedCounts);state.seed++;}
function questionHtml(){let lastType="";return state.questions.map((q,i)=>{const heading=q.type!==lastType?`<h4 class="paper-section">${q.type}<span>${state.questions.filter(item=>item.type===q.type).reduce((sum,item)=>sum+item.marks,0)} marks</span></h4>`:"";lastType=q.type;return `${heading}<div class="question"><b>${i+1}.</b><div>${q.text}${q.diagram?`<div class="question-diagram">${q.diagram}</div>`:""}<div class="work-lines">${"<i></i>".repeat(Math.max(1,q.marks-1))}</div></div><span class="marks">[${q.marks}]</span></div>`;}).join("");}
function renderPaper(){const title=$("paper-title").value||"Chapter Assessment",marks=+$("marks").value,duration=$("duration").value,difficulty=getDifficulty(),link=getReferenceLink(),chapters=state.chapters.join(" · ");$("preview-subtitle").textContent=`${state.subject} · ${marks} marks · ${difficulty}`;$("paper-output").innerHTML=`<header class="paper-head"><h2>${title}</h2><p>Cambridge IGCSE ${state.subject} · ${subjectMeta[state.subject]}</p><p>${chapters}</p></header><div class="paper-meta"><span>Name: __________________________</span><span>Time: ${duration}</span><span>Total: ${marks} marks</span><span>Level: ${difficulty}</span></div><div class="instructions"><b>Instructions:</b> Answer all questions. Show your working clearly where appropriate. Write your answers in the spaces provided.${link?` <br /><small>Reference: ${link}</small>`:""}</div>${questionHtml()}`;$("answer-output").innerHTML=`<h2>${title} · Answer key</h2><p>${state.subject} · ${marks} marks · ${difficulty}</p>${state.questions.map((q,i)=>`<div class="answer-item"><b>${i+1}. ${q.type} [${q.marks}]</b> ${q.answer}</div>`).join("")}`;}
async function refreshReference(){const status=$("reference-status"),link=getReferenceLink();status.className="reference-status checking";status.textContent=link?`Scanning the reference link for chapter-matched questions...`:"Refreshing the PMT past-paper reference archive...";const params=new URLSearchParams();if(link)params.set("url",link);if(state.subject)params.set("subject",state.subject);if(state.chapters&&state.chapters.length)params.set("chapters",JSON.stringify(state.chapters));const url=`/.netlify/functions/reference-refresh${params.toString()?`?${params.toString()}`:""}`;try{const response=await fetch(url,{cache:"no-store"});if(!response.ok)throw new Error("Reference refresh failed");const data=await response.json();state.referenceQuestions=Array.isArray(data.referenceQuestions)?data.referenceQuestions:[];state.referenceSource=data.source||"";state.referenceCheckedAt=data.checkedAt||"";state.lastReferenceLink=link||null;status.className="reference-status";const checkedAt=data.checkedAt?new Date(data.checkedAt).toLocaleString():"just now";if(link){const found=state.referenceQuestions.length;status.textContent=found?`Reference checked ${checkedAt} — ${found} matching question${found===1?"":"s"} from ${data.source}. These will be used first.`:`Reference checked ${checkedAt} — no chapter-matched questions found at ${data.source}. Falling back to the built-in bank.`;}else{status.textContent=`Reference archive checked ${checkedAt}. Preparing an original chapter-matched paper.`;}return true;}catch(error){state.referenceQuestions=[];state.lastReferenceLink=null;status.className="reference-status error";status.textContent=link?"Could not reach the reference link. Check the URL or remove it and try again.":"Reference archive refresh failed. Run the local server or try again before generating.";return false;}}
async function openPreview(){const marks=+$("marks").value,split=getSplit(),linkCheck=sanitizeReferenceLink();if(!linkCheck.ok){alert(linkCheck.error);return;}if(!state.chapters.length){alert("Please choose at least one chapter.");return;}if(hasSplit()&&split.theory+split.numerical!==marks){alert(`Theory and numerical marks must add up to ${marks}.`);return;}if(!await refreshReference())return;const sources=questionSources();if(hasSplit()&&((split.theory&&!sources.Theory.length)||(split.numerical&&!sources.Numerical.length))){alert("The selected chapters do not yet have enough theory and numerical templates for this split. Please adjust the split or choose another chapter.");return;}if(hasSplit()){const usedCounts=new Map(),availableTheory=uniqueSectionCapacity(sources.Theory,usedCounts),availableNumerical=uniqueSectionCapacity(sources.Numerical,usedCounts);if(split.theory>availableTheory||split.numerical>availableNumerical){alert(`There are not enough unique questions for this paper yet. Available for the selected chapters: ${availableTheory} theory marks and ${availableNumerical} numerical marks. Please reduce the marks or choose more chapters.`);return;}}if(!hasSplit()&&!sources.Questions.length){alert("The selected chapters do not yet have question templates. Please choose another chapter.");return;}if(!hasSplit()){const available=uniqueSectionCapacity(sources.Questions,new Map());if(marks>available){alert(`There are not enough unique questions for this paper yet. Available for the selected chapters: ${available} marks. Please reduce the marks or choose more chapters.`);return;}}buildQuestions();renderPaper();$("preview").classList.add("open");$("preview").setAttribute("aria-hidden","false");}
$("paper-form").onsubmit=async e=>{e.preventDefault();await openPreview();};$("chapter-input").oninput=renderChapters;$("chapter-input").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();addCustom();}};$("add-custom").onclick=addCustom;$("marks").oninput=updateSummary;$("theory-marks").oninput=updateSummary;$("numerical-marks").oninput=updateSummary;if($("duration"))$("duration").onchange=updateSummary;if($("difficulty"))$("difficulty").onchange=updateSummary;if($("reference-link"))$("reference-link").oninput=updateSummary;$("close-preview").onclick=()=>$("preview").classList.remove("open");$("print-paper").onclick=()=>window.print();$("regenerate").onclick=async()=>{if(await refreshReference()){buildQuestions();renderPaper();}};$("answer-toggle").onclick=()=>{const p=$("answer-output");p.classList.toggle("hidden");$("answer-toggle").textContent=p.classList.contains("hidden")?"Show answer key":"Hide answer key";};render();
