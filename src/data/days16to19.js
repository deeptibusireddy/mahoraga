export const days16to19 = [
  {
    "id": 16,
    "title": "Punnett & Pythagoras 3D",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Pythagorean Theorem in 3D",
        "emoji": "📐",
        "imageQuery": "Pythagorean theorem 3D diagonal box distance formula",
        "content": "The Pythagorean theorem extends to 3D!\n\n**3D distance formula:**\nd = √(a² + b² + c²)\n\nFor a box (l × w × h), the longest interior diagonal:\nd = √(l² + w² + h²)\n\n**Example:** Box 3 × 4 × 12:\nd = √(9 + 16 + 144) = √169 = **13**\n\n**Two-step approach (same result):**\n1. Find floor diagonal: √(3²+4²) = 5\n2. Find space diagonal: √(5²+12²) = √169 = 13\n\nGPS satellites use this exact 3D distance formula to pinpoint your location.",
        "keyFact": "GPS calculates your location by finding your 3D distance from at least 4 satellites simultaneously — all using this formula.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "To find the diagonal of a box, you use the formula d² = a² + b² + c². If a box is 3×4×12, what is the diagonal?",
                            "options": [
                                      "13",
                                      "169",
                                      "12",
                                      "√169"
                            ],
                            "answer": 0,
                            "explanation": "3² + 4² + 12² = 9 + 16 + 144 = 169. √169 = 13. You apply Pythagorean theorem twice for 3D!"
                  },
                  {
                            "type": "mc",
                            "q": "Which of these is a real-world use of 3D Pythagorean theorem?",
                            "options": [
                                      "Finding area of a wall",
                                      "Measuring longest rod that fits in a box",
                                      "Calculating paint needed",
                                      "Counting tiles on a floor"
                            ],
                            "answer": 1,
                            "explanation": "If you need to fit a long object (like a pole or sword) into a box, the 3D diagonal formula tells you the longest possible length."
                  },
                  {
                            "type": "typed",
                            "q": "How many times do you apply the Pythagorean theorem to find the space diagonal of a 3D box?",
                            "answer": "twice",
                            "placeholder": "How many times?",
                            "explanation": "First find the face diagonal using a² + b², then use that result with the height c to get the space diagonal."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Genetics: Punnett Squares",
        "emoji": "🧬",
        "imageQuery": "Punnett square genetics dominant recessive traits diagram alleles",
        "content": "A **Punnett square** predicts the probability of offspring traits.\n\n**Setup:**\nParent 1 alleles across the top. Parent 2 alleles down the side. Fill each box with one allele from each parent.\n\n**Example: Bb × Bb** (both brown eyes, carrying blue recessive)\n\n|   | B  | b  |\n|---|----|\n| B | BB | Bb |\n| b | Bb | bb |\n\n→ BB (25%), Bb (50%), bb (25%)\n→ 75% brown eyes, 25% blue eyes\n\n**Key rule:** Dominant allele (capital letter) always masks recessive (lowercase) when present.",
        "keyFact": "Gregor Mendel discovered genetic inheritance in the 1860s by breeding pea plants — without knowing DNA existed. He just observed patterns and did the math.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In a Punnett square cross of Bb × Bb, what fraction of offspring will be homozygous recessive (bb)?",
                            "options": [
                                      "1/4",
                                      "1/2",
                                      "3/4",
                                      "0"
                            ],
                            "answer": 0,
                            "explanation": "Bb × Bb gives BB, Bb, Bb, bb. Only 1 out of 4 is bb = 25%."
                  },
                  {
                            "type": "mc",
                            "q": "What does a Punnett square predict?",
                            "options": [
                                      "The exact traits of each offspring",
                                      "The probability of trait combinations",
                                      "How many children a couple will have",
                                      "Which parent is dominant"
                            ],
                            "answer": 1,
                            "explanation": "Punnett squares predict the PROBABILITY of genotype and phenotype combinations in offspring."
                  },
                  {
                            "type": "typed",
                            "q": "If T=tall (dominant) and t=short (recessive), what is the phenotype of genotype Tt?",
                            "answer": "tall",
                            "placeholder": "Tall or short?",
                            "explanation": "Tt has one dominant T allele. Dominant traits always show when present — so Tt is TALL."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Counterclaim & Rebuttal",
        "emoji": "✍️",
        "imageQuery": "argument counterclaim rebuttal debate writing structure claim evidence",
        "content": "A **counterclaim** acknowledges the opposing view. A **rebuttal** explains why your position is still stronger.\n\n**Structure:**\n1. Your claim + evidence\n2. \"Some argue that...\" (counterclaim)\n3. \"However, this overlooks...\" (rebuttal)\n\n**Example:**\nClaim: School should start later.\nCounterclaim: \"Some argue this disrupts working parents' schedules.\"\nRebuttal: \"However, studies show teen academic performance and mental health improve significantly with later start times, and scheduling can adapt.\"\n\nAcknowledging counterarguments makes you seem more credible, not weaker.",
        "keyFact": "Acknowledging the strongest counterargument, then refuting it, is the hallmark of a sophisticated thinker — it shows you've genuinely considered other views.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Why do strong arguments include a counterclaim?",
                            "options": [
                                      "To confuse the reader",
                                      "To show you understand both sides and can defeat the other view",
                                      "To make the essay longer",
                                      "To avoid taking a position"
                            ],
                            "answer": 1,
                            "explanation": "Including a counterclaim shows intellectual honesty and makes your argument stronger by showing you've considered — and can defeat — the opposing view."
                  },
                  {
                            "type": "mc",
                            "q": "What comes AFTER a counterclaim in a strong argument?",
                            "options": [
                                      "Another claim",
                                      "The introduction",
                                      "A rebuttal that defeats the counterclaim",
                                      "More evidence for the counterclaim"
                            ],
                            "answer": 2,
                            "explanation": "Structure: Counterclaim → Rebuttal. You present the opposing view, then explain why your position is still stronger."
                  },
                  {
                            "type": "typed",
                            "q": "What is the term for the response that defeats a counterclaim?",
                            "answer": "rebuttal",
                            "placeholder": "One word...",
                            "explanation": "A rebuttal is your response to the counterclaim — it explains why the opposing view doesn't override your argument."
                  }
        ]
      },
      "quiz": {
        "type": "quiz",
        "title": "Binding Vow",
        "unlocksAfterLessons": [
          1,
          2,
          3
        ],
        "questions": [
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Box 3×4×12. Longest diagonal?",
            "options": [
              "13",
              "15",
              "169",
              "√169=13"
            ],
            "answer": 0,
            "explanation": "√(9+16+144) = √169 = 13."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Box 6×8×10. Longest diagonal?",
            "options": [
              "√200",
              "10√2",
              "14.1",
              "Both A and B"
            ],
            "answer": 3,
            "explanation": "√(36+64+100)=√200=10√2≈14.1. All three are the same answer."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "A ramp rises 5m vertically over 12m horizontal. Ramp length?",
            "options": [
              "13m",
              "17m",
              "7m",
              "√119"
            ],
            "answer": 0,
            "explanation": "√(12²+5²)=√(144+25)=√169=13m."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "When the 3D formula d=√(l²+w²+h²) has h=0, it becomes:",
            "options": [
              "0",
              "√(l²+w²) — the 2D Pythagorean theorem",
              "l+w",
              "Undefined"
            ],
            "answer": 1,
            "explanation": "h=0 reduces 3D to 2D: √(l²+w²+0²)=√(l²+w²). The 2D theorem is a special case of the 3D formula."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "In a Punnett square Bb × Bb, what fraction show the recessive trait?",
            "options": [
              "1/4",
              "1/2",
              "3/4",
              "0"
            ],
            "answer": 0,
            "explanation": "Only bb shows the recessive trait = 1 box out of 4 = 25% = 1/4."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Who discovered genetic inheritance using pea plants?",
            "options": [
              "Darwin",
              "Watson and Crick",
              "Gregor Mendel",
              "Marie Curie"
            ],
            "answer": 2,
            "explanation": "Gregor Mendel (1860s) discovered patterns of inheritance — without knowing DNA existed."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Two Bb parents. Which genotype appears most in offspring?",
            "options": [
              "BB",
              "Bb — at 50%",
              "bb",
              "All equal at 33%"
            ],
            "answer": 1,
            "explanation": "Punnett: BB(25%), Bb(50%), bb(25%). Bb appears most often."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "A trait appears in a child but not in either parent. Most likely because:",
            "options": [
              "The trait appeared from nowhere",
              "Both parents carry a recessive allele (Bb) that combined as bb in the child",
              "The child mutated",
              "The trait skipped two generations"
            ],
            "answer": 1,
            "explanation": "Two Bb parents each contribute one b — producing a bb child showing the recessive trait neither parent expressed."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "What is a counterclaim?",
            "options": [
              "Your main argument",
              "The opposing view you acknowledge in your argument",
              "Evidence supporting your claim",
              "Your conclusion"
            ],
            "answer": 1,
            "explanation": "A counterclaim honestly acknowledges the strongest argument against your position."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Why does addressing a counterclaim strengthen your argument?",
            "options": [
              "It makes it longer",
              "It shows you've genuinely considered opposing views and can refute them",
              "It confuses the reader",
              "Teachers require it"
            ],
            "answer": 1,
            "explanation": "Addressing the counterclaim shows intellectual honesty and lets you directly refute the opposition — making your position more persuasive."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "A rebuttal should:",
            "options": [
              "Simply repeat your claim",
              "Directly explain why the counterclaim doesn't overcome your evidence",
              "Agree with the counterclaim",
              "Ignore the counterclaim evidence"
            ],
            "answer": 1,
            "explanation": "A good rebuttal engages the counterclaim seriously — showing why even if true, it doesn't outweigh your evidence."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "Which makes a rebuttal most effective?",
            "options": [
              "Being longer than the counterclaim",
              "Dismissing the counterclaim as obviously wrong",
              "Using the counterclaim's own logic to show it's incomplete or outweighed",
              "Starting with \"however\""
            ],
            "answer": 2,
            "explanation": "The best rebuttals engage seriously — showing why even granting the counterclaim, your overall argument still wins."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You're in a room with 3 switches. Upstairs is one light bulb.\n\nYou can flip switches however you want — but you can only **enter the room once**.\n\nHow do you determine which switch controls the bulb?",
        "hint": "A light bulb has more than two observable states. What else can you measure besides on/off?",
        "minWords": 20,
        "answer": "1. Turn Switch 1 ON — wait 5 minutes\n2. Turn Switch 1 OFF\n3. Turn Switch 2 ON\n4. Enter the room\n\n**Read the result:**\n- Light ON → Switch 2\n- Light OFF and WARM → Switch 1 (was on recently, has heat)\n- Light OFF and COLD → Switch 3 (never on)\n\n**Key insight:** A bulb has THREE observable states — on, off-warm, off-cold. Most people only thought of two."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🎨",
        "formatName": "Create Something",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find a paragraph in any book, article, or text you've written. Rewrite it to be twice as vivid without adding more than 20% more words. Focus on strong verbs, specific nouns, and sensory details."
        },
        "partB": {
          "prompt": "Put the original and rewrite side by side.",
          "questions": [
            "Paste or write the original paragraph.",
            "Paste your rewritten version. What specific changes did you make?"
          ]
        },
        "writingPrompt": "In at least 50 words: compare the two versions. What specific word choices made your rewrite more vivid? What does this tell you about the difference between good and great writing?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Punnett Squares",
        "prompt": "Do a genetics experiment with the family:\n\n1. Check eye colors across family members\n2. Explain: **\"These are determined by dominant and recessive genes. Two Bb parents have a 25% chance of a blue-eyed child.\"**\n3. Draw a Punnett square together for Bb × Bb\n4. Ask Thatha: \"Did anyone in your family have an unexpected eye or hair color?\"\n\nThat unexpected trait? Recessive genes showing up! Record a voice memo if no one is around 🎙️",
        "followUp": "What traits did you compare? Did you find any recessive traits skipping generations? What surprised the family?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "A sorcerer's domain is a rectangular box: 15m × 10m × 8m.\n\n**Part A:** Find the longest interior diagonal (the farthest two points inside).\n\n**Part B:** If a curse travels along the diagonal at 5 m/s, how long does it take to cross the domain?\n\n**Part C:** A second domain is a cube with the same VOLUME as the box. Find the cube's side length.\n\n**Part D — Thatha Level 🧮:** The diagonal of the cube vs. the box — which is longer? Prove it with calculations.",
        "hint": "Part C: Volume of box = 15×10×8 = 1200 m³. Cube: s³ = 1200 → s = ∛1200. Part D: Use the 3D formula for both.",
        "answer": "Part A: √(225+100+64) = √389 ≈ 19.7m. Part B: 19.7/5 ≈ 3.9 seconds. Part C: s=∛1200 ≈ 10.6m. Part D: Cube diagonal = √(3s²) = s√3 ≈ 10.6×1.73 ≈ 18.3m. Box diagonal ≈ 19.7m. Box diagonal is longer."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Asking Questions",
        "newPhrases": [
          {
            "telugu": "మీరు ఏం చేస్తున్నారు?",
            "romanized": "Meeru em chestunnaaru?",
            "english": "What are you doing? (respectful)",
            "tip": "\"Em\" not \"emi\" — this is distinctly Telangana. A natural conversation opener whenever you call."
          },
          {
            "telugu": "మీరు ఎక్కడ ఉన్నారు?",
            "romanized": "Meeru ekkada unnaaru?",
            "english": "Where are you? (respectful)",
            "tip": "Good for video calls. \"Ekkada unnaaru?\" = \"Where are you sitting right now?\""
          },
          {
            "telugu": "ఎందుకు?",
            "romanized": "Enduku?",
            "english": "Why?",
            "tip": "Simple and essential. Enduku = why? (Same in both Telangana and Andhra.)"
          },
          {
            "telugu": "ఎప్పుడు?",
            "romanized": "Eppudu?",
            "english": "When?",
            "tip": "Eppudu = when. \"Meeru eppudu vaccharu?\" = When did you come/arrive?"
          },
          {
            "telugu": "ఎలా?",
            "romanized": "Elaa?",
            "english": "How?",
            "tip": "Elaa = how. You already used it in \"Elaa unnaaru?\" (how are you?)"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Amma",
            "options": [
              "Dad",
              "Mom",
              "Maternal grandmother",
              "Grandfather"
            ],
            "answer": 1,
            "explanation": "Amma = Mom."
          },
          {
            "romanized": "Annam, pappu, kuura",
            "options": [
              "Mom",
              "Rice, dal/lentils, curry/vegetable dish",
              "Dad",
              "Maternal grandmother"
            ],
            "answer": 1,
            "explanation": "Annam, pappu, kuura = Rice, dal/lentils, curry/vegetable dish."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Have a 5-question conversation with great-grandma using these. Ask real questions about her real day.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 17,
    "title": "Surface Area & The Constitution",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Surface Area",
        "emoji": "📦",
        "imageQuery": "surface area geometric shapes box cylinder net unfolded faces",
        "content": "**Surface area** = total area of all outer faces of a 3D shape.\n\n**Rectangular prism (box):**\nSA = 2(lw + lh + wh)\n\nExample: 4 × 3 × 5 box:\nSA = 2(12 + 20 + 15) = 2(47) = **94 sq units**\n\n**Cylinder:**\nSA = 2πr² + 2πrh\n(two circular ends + curved side)\n\n**\"Net\" thinking:** Unfold the shape mentally. A box becomes 6 rectangles. Add all their areas.\n\n**Why it matters:** Packaging (how much cardboard), painting (how much paint), cooking (how much surface area browns).",
        "keyFact": "Two boxes can have the exact same volume but very different surface areas — an elongated box has much more surface area than a cube of equal volume.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the surface area of a cube with side length 4cm?",
                            "options": [
                                      "16 cm²",
                                      "64 cm²",
                                      "96 cm²",
                                      "24 cm²"
                            ],
                            "answer": 2,
                            "explanation": "A cube has 6 faces, each 4×4=16 cm². Total SA = 6 × 16 = 96 cm²."
                  },
                  {
                            "type": "typed",
                            "q": "How many faces does a rectangular prism have?",
                            "answer": "6",
                            "placeholder": "Enter the number...",
                            "explanation": "A rectangular prism has 6 faces — 3 pairs of opposite rectangles. Surface area adds up all 6 face areas."
                  },
                  {
                            "type": "mc",
                            "q": "Why does a higher surface area to volume ratio matter for cells?",
                            "options": [
                                      "Cells look bigger",
                                      "More efficient exchange of nutrients and waste",
                                      "Cells move faster",
                                      "It doesn't matter"
                            ],
                            "answer": 1,
                            "explanation": "High SA:Volume ratio means more surface for materials to pass through relative to the cell's needs. Small cells are more efficient than large ones."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Genetics: Dominant/Recessive Deep Dive",
        "emoji": "🧬",
        "imageQuery": "genetics genotype phenotype incomplete dominance codominance blood type",
        "content": "Going deeper into how traits actually work.\n\n**Genotype vs. Phenotype:**\n- **Genotype** — actual alleles (BB, Bb, bb)\n- **Phenotype** — observable trait (brown eyes, blue eyes)\n\n**Homozygous vs. Heterozygous:**\n- **Homozygous** — both alleles same (BB or bb)\n- **Heterozygous** — alleles different (Bb)\n\n**Incomplete dominance:** Neither allele dominates.\nRed (RR) × White (WW) → Pink (RW) — a blend!\n\n**Codominance:** Both alleles fully expressed.\nBlood type AB — both A and B antigens are fully present.",
        "keyFact": "Blood type is determined by three alleles (A, B, O). Type O is recessive — you need two copies. Type AB shows codominance — both A and B expressed fully.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "If B = brown eyes (dominant) and b = blue eyes (recessive), what is the eye color of someone with genotype Bb?",
                            "options": [
                                      "Blue",
                                      "Brown",
                                      "Green",
                                      "Half and half"
                            ],
                            "answer": 1,
                            "explanation": "Dominant alleles (B) always express when present. Bb has one B, so brown eyes show. You need bb to get blue eyes."
                  },
                  {
                            "type": "mc",
                            "q": "What do we call an organism with two identical alleles (like BB or bb)?",
                            "options": [
                                      "Heterozygous",
                                      "Dominant",
                                      "Recessive",
                                      "Homozygous"
                            ],
                            "answer": 3,
                            "explanation": "Homozygous means two identical alleles — BB (homozygous dominant) or bb (homozygous recessive). Different alleles = heterozygous."
                  },
                  {
                            "type": "typed",
                            "q": "What tool do geneticists use to predict offspring ratios?",
                            "answer": "Punnett square",
                            "placeholder": "Name the tool...",
                            "explanation": "A Punnett square maps all possible allele combinations from two parents to predict the probability of each genotype in offspring."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The US Constitution — Three Branches",
        "emoji": "🏛️",
        "imageQuery": "US Constitution 1787 three branches government separation powers checks balances",
        "content": "The Constitutional Convention (1787) produced the document still governing the US today.\n\n**Three branches — separation of powers:**\n- **Legislative** (Congress): makes laws\n- **Executive** (President): enforces laws\n- **Judicial** (Courts): interprets laws\n\n**Checks & balances — each limits the others:**\n- Congress passes law → President can veto → Congress can override\n- President nominates judges → Senate must confirm\n- Courts can strike down laws as unconstitutional\n\n**The Great Compromise:** Small states wanted equal votes; large states wanted proportional representation. Solution: two-chamber Congress — equal Senate, proportional House.",
        "keyFact": "The Constitution is the world's oldest written national constitution still in use — 237 years and counting.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which branch of government makes laws?",
                            "options": [
                                      "Executive",
                                      "Judicial",
                                      "Legislative",
                                      "Presidential"
                            ],
                            "answer": 2,
                            "explanation": "The Legislative branch (Congress) makes laws. Executive enforces them, Judicial interprets them."
                  },
                  {
                            "type": "mc",
                            "q": "What is 'checks and balances'?",
                            "options": [
                                      "A banking system",
                                      "Each branch limiting the power of the others",
                                      "The voting system",
                                      "Presidential authority"
                            ],
                            "answer": 1,
                            "explanation": "Checks and balances prevents any one branch from becoming too powerful — Congress overrides vetoes, courts strike down unconstitutional laws, etc."
                  },
                  {
                            "type": "typed",
                            "q": "Name the two houses of Congress.",
                            "answer": "Senate and House",
                            "placeholder": "Two names...",
                            "explanation": "Congress has the Senate (100 members, 2 per state) and the House of Representatives (435 members, based on population)."
                  }
        ]
      },
      "quiz": {
        "type": "quiz",
        "title": "Binding Vow",
        "unlocksAfterLessons": [
          1,
          2,
          3
        ],
        "questions": [
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Surface area of a box: 2×3×4",
            "options": [
              "24",
              "52",
              "48",
              "26"
            ],
            "answer": 1,
            "explanation": "SA = 2(lw+lh+wh) = 2(6+8+12) = 2(26) = 52."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "A cube has side length 5. Surface area?",
            "options": [
              "25",
              "100",
              "125",
              "150"
            ],
            "answer": 3,
            "explanation": "SA = 6s² = 6×25 = 150."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Why might an elongated box have more SA than a cube of equal volume?",
            "options": [
              "It doesn't — volume determines SA",
              "More flat faces mean more surface exposed — cubes minimize SA for a given volume",
              "Cubes always have more SA",
              "They have the same SA always"
            ],
            "answer": 1,
            "explanation": "Cubes minimize surface area for a given volume. Elongated shapes have more SA — relevant for packaging efficiency."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Cylinder with radius 3, height 8. Curved surface area only (2πrh)?",
            "options": [
              "48π",
              "24π",
              "16π",
              "54π"
            ],
            "answer": 0,
            "explanation": "2π(3)(8) = 48π."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is a phenotype?",
            "options": [
              "The actual DNA sequence",
              "The observable/expressed trait",
              "The combination of alleles",
              "The recessive gene only"
            ],
            "answer": 1,
            "explanation": "Phenotype = what you actually observe. Genotype = what the DNA actually says."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "A person with Bb genotype is:",
            "options": [
              "Homozygous dominant",
              "Homozygous recessive",
              "Heterozygous",
              "Codominant"
            ],
            "answer": 2,
            "explanation": "Heterozygous = two different alleles. Bb has one dominant (B) and one recessive (b)."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Red (RR) × White (WW) = Pink offspring. This is:",
            "options": [
              "Complete dominance",
              "Incomplete dominance — blend of both",
              "Codominance",
              "A mutation"
            ],
            "answer": 1,
            "explanation": "Incomplete dominance: neither allele fully takes over — the result is a blend (pink instead of red or white)."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Blood type AB is an example of:",
            "options": [
              "Complete dominance",
              "Incomplete dominance",
              "Codominance — both A and B fully expressed",
              "A recessive trait"
            ],
            "answer": 2,
            "explanation": "Codominance: both alleles fully expressed. AB blood has both A and B antigens — not a blend, both present."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What are the three branches of the US government?",
            "options": [
              "President, Congress, Army",
              "Federal, State, Local",
              "Legislative, Executive, Judicial",
              "Senate, House, Supreme Court"
            ],
            "answer": 2,
            "explanation": "Legislative (Congress), Executive (President), Judicial (Courts) — the three branches with separated powers."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What was the Great Compromise at the Constitutional Convention?",
            "options": [
              "Compromise between North and South on slavery",
              "A two-chamber Congress: equal Senate seats + proportional House seats",
              "Agreement on presidential term length",
              "Compromise on the Bill of Rights"
            ],
            "answer": 1,
            "explanation": "The Great Compromise created a bicameral Congress — equal Senate votes for all states, proportional House seats by population."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Checks and balances mean:",
            "options": [
              "Government keeps financial records",
              "Each branch has ways to limit the other branches — preventing any one from becoming too powerful",
              "All laws require unanimous agreement",
              "The president runs all three branches"
            ],
            "answer": 1,
            "explanation": "Checks and balances is the Constitution's main protection against tyranny — each branch can limit the others."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Why is separation of powers a solution to what went wrong under the Articles of Confederation?",
            "options": [
              "It makes government stronger by combining powers",
              "The Articles were too weak; separation of powers gives real authority while distributing it so no group misuses it",
              "It copies the British system",
              "It ensures states stay powerful"
            ],
            "answer": 1,
            "explanation": "The Articles were too weak to function. Separation of powers gives government real power while preventing its concentration — the solution to both weakness and tyranny."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You're in a room with 5 switches. In 5 different rooms are 5 different light bulbs.\n\nYou can only make **ONE trip total** through the 5 rooms.\n\nHow do you figure out which switch controls which bulb?\n\n(Harder version of yesterday's puzzle — think about how to create 5 distinguishable states.)",
        "hint": "You can control how long each switch has been ON before your trip. Different durations create different heat levels.",
        "minWords": 20,
        "answer": "- Switch 1: ON 10 minutes, then OFF\n- Switch 2: ON 5 minutes, then OFF\n- Switch 3: ON 2 minutes, then OFF\n- Switch 4: ON (leave on)\n- Switch 5: OFF the whole time\n\n**Reading each room:**\n- Bulb ON → Switch 4\n- Very hot but off → Switch 1\n- Warm but off → Switch 2\n- Slightly warm → Switch 3\n- Cold and off → Switch 5\n\nFive distinguishable states from five switches. Same logic as Day 16 but extended! ✓"
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🎤",
        "formatName": "Interview Mission",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Ask an adult: \"When did you last have to persuade someone of something important? How did you structure your argument?\" Write their exact answer."
        },
        "partB": {
          "prompt": "Connect their real-world persuasion to the PEEL + counterclaim structure.",
          "questions": [
            "What situation did they describe?",
            "Can you identify the claim, evidence, and any counterclaim in what they did — even without using those words?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain how the PEEL + counterclaim structure appears in real-world persuasion. Use the adult's example. What made their argument work or fail?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Checks & Balances",
        "prompt": "Teach the three branches using the sorcerer world:\n\n**\"Imagine Jujutsu High has three teams: one writes the rules for sorcerers, one enforces them, and one decides if they're fair. Each team can block the others — no single team gets total control.\"**\n\nThen:\n1. Ask: \"Which branch do you think is most powerful in real life?\"\n2. Discuss: \"What would happen without checks and balances?\"\n3. Find a recent real example of one branch checking another\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Which branch did they think is most powerful? Did they know a recent real example of checks and balances?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "A sorcerer's domain is a cylinder: radius 8m, height 15m.\n\n**Part A:** Find the total surface area (top + bottom + curved side).\n\n**Part B:** Find the volume.\n\n**Part C:** The domain is coated with a \"cursed energy membrane\" that costs 3 XP per square meter of surface area. Total XP cost?\n\n**Part D — Thatha Level 🧮:** A second domain is a cube with the same surface area as the cylinder. Find the cube's side length and its volume. Which domain holds more space per XP spent?",
        "hint": "Part D: SA of cylinder ≈ find it in Part A. Set 6s² = that value and solve for s.",
        "answer": "Part A: 2π(64)+2π(8)(15)=128π+240π=368π≈1,157 m². Part B: π(64)(15)=960π≈3,016 m³. Part C: 1,157×3≈3,471 XP. Part D: 6s²=1157 → s²=192.8 → s≈13.9m. Volume=13.9³≈2,686 m³. Cylinder holds more (3,016 vs 2,686 m³) for the same surface area and XP cost."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Wanting, Needing, Leaving",
        "newPhrases": [
          {
            "telugu": "నాకు ___ కావాలి",
            "romanized": "Naaku ___ kaavaali",
            "english": "I want / I need ___",
            "tip": "Kaavaali = want/need. Fill in anything: nidra (sleep), sahaayam (help), neellu (water)."
          },
          {
            "telugu": "నాకు సాయం కావాలి",
            "romanized": "Naaku saayam kaavaali",
            "english": "I need help",
            "tip": "\"Saayam\" is the Telangana word for help (vs \"sahayam\" which is more formal/Andhra). Very natural."
          },
          {
            "telugu": "నేను పోతా",
            "romanized": "Nenu pothaa",
            "english": "I am going / I have to go",
            "tip": "\"Pothaa\" is distinctly Telangana for \"I'm going/leaving.\" Never say \"vellaaali\" — that's Andhra. This is what great-grandma says."
          },
          {
            "telugu": "నాకు అర్థం కాలేదు",
            "romanized": "Naaku artham kaaleedu",
            "english": "I didn't understand",
            "tip": "Honest and useful. Artham kaaleedu = understanding didn't happen. Use this freely — she will explain again happily."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Okati, rendu, muudu",
            "options": [
              "Four, five, six",
              "One, two, three",
              "Seven, eight, nine",
              "Ten"
            ],
            "answer": 1,
            "explanation": "Okati, rendu, muudu = One, two, three."
          },
          {
            "romanized": "Nenu aaḍutunna",
            "options": [
              "One, two, three",
              "I am playing",
              "Four, five, six",
              "Seven, eight, nine"
            ],
            "answer": 1,
            "explanation": "Nenu aaḍutunna = I am playing."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Practice ending a call: \"Nenu pothaa. Dhanyavaadaalu. Malli maatlaadutaa!\" (I'm going. Thank you. I'll talk again!)",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 18,
    "title": "Volume & Bill of Rights",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Volume",
        "emoji": "📦",
        "imageQuery": "volume geometric shapes 3D rectangular prism cylinder cone sphere formula",
        "content": "**Volume** = amount of 3D space inside a shape.\n\n**Rectangular prism:** V = l × w × h\nExample: 4×3×5 = **60 cubic units**\n\n**Cylinder:** V = πr²h\nRadius 3, height 7: V = π(9)(7) = 63π ≈ **197.9**\n\n**Cone:** V = ⅓πr²h\n(exactly ⅓ of the cylinder with same base and height)\n\n**Sphere:** V = (4/3)πr³\nRadius 4: V ≈ **268.1 cubic units**\n\n**Key fact:** A cone holds exactly ⅓ what a cylinder with the same base and height holds. Pour 3 cones into a cylinder — it fills exactly.",
        "keyFact": "Try it: fill a cone with water and pour it into a cylinder of the same base and height. You need to do it exactly three times to fill the cylinder.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the volume of a rectangular box that is 4cm × 5cm × 3cm?",
                            "options": [
                                      "12 cm³",
                                      "60 cm³",
                                      "24 cm³",
                                      "47 cm³"
                            ],
                            "answer": 1,
                            "explanation": "Volume of a rectangular prism = length × width × height = 4 × 5 × 3 = 60 cm³."
                  },
                  {
                            "type": "typed",
                            "q": "What is the formula for the volume of a cylinder? (use π, r, and h)",
                            "answer": "πr²h",
                            "placeholder": "V = ...",
                            "explanation": "Volume of cylinder = π × r² × h. Think of it as the area of the circular base (πr²) times the height."
                  },
                  {
                            "type": "mc",
                            "q": "A cube has side length 5. What is its volume?",
                            "options": [
                                      "15",
                                      "25",
                                      "125",
                                      "75"
                            ],
                            "answer": 2,
                            "explanation": "Volume of cube = side³ = 5³ = 5 × 5 × 5 = 125 cubic units."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Genetics: Mutations & Traits",
        "emoji": "🧬",
        "imageQuery": "DNA mutation types point insertion deletion genetics cancer UV light",
        "content": "**Mutations** are changes in DNA sequence. Not all are harmful!\n\n**Types:**\n- **Point mutation** — one base changed (sickle cell anemia)\n- **Insertion/deletion** — base added or removed (shifts all subsequent code)\n- **Chromosomal** — large sections changed or rearranged\n\n**Effects:**\n- **Neutral** — no change in function (most mutations)\n- **Harmful** — disrupts important protein\n- **Beneficial** — rare, but these drive evolution!\n\n**Cancer:** Mutations in genes controlling cell division → cells divide uncontrollably.\n\n**Common mutagens:** UV light (skin cancer), tobacco carcinogens (lung cancer), certain viruses (HPV).",
        "keyFact": "Every time a cell divides, it copies 3 billion DNA base pairs. Even at 99.9999% accuracy, that's ~3,000 errors per division — most caught by repair mechanisms.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is a genetic mutation?",
                            "options": [
                                      "A change in behavior",
                                      "A permanent change in the DNA sequence",
                                      "A disease",
                                      "Only caused by radiation"
                            ],
                            "answer": 1,
                            "explanation": "A mutation is a change in the DNA sequence — can be caused by radiation, chemicals, or copying errors during cell division."
                  },
                  {
                            "type": "mc",
                            "q": "Which mutations can be passed to offspring?",
                            "options": [
                                      "Skin cell mutations",
                                      "Muscle cell mutations",
                                      "Sperm or egg cell mutations",
                                      "Any body cell mutation"
                            ],
                            "answer": 2,
                            "explanation": "Only mutations in reproductive cells (sperm/eggs) are heritable. Body cell mutations affect only that individual."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call a mutation that helps an organism survive better?",
                            "answer": "beneficial",
                            "placeholder": "One word...",
                            "explanation": "Beneficial mutations improve survival or reproduction. Natural selection spreads them through populations over generations."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The Bill of Rights",
        "emoji": "📜",
        "imageQuery": "Bill of Rights first ten amendments Constitution freedom speech press religion",
        "content": "The Constitution was ratified in 1788 — but many demanded a **Bill of Rights** protecting individual liberties.\n\n**First 10 Amendments — the key ones:**\n- **1st:** Free speech, religion, press, assembly, petition\n- **2nd:** Right to bear arms\n- **4th:** No unreasonable search and seizure (warrants required)\n- **5th:** No self-incrimination; due process\n- **6th:** Right to speedy trial and a lawyer\n- **8th:** No cruel or unusual punishment\n- **9th:** Rights not listed are still protected\n- **10th:** Powers not given to federal government go to states\n\n**Key distinction:** The Bill of Rights restricts GOVERNMENT — not private companies or individuals.",
        "keyFact": "The 1st Amendment says CONGRESS shall make no law restricting speech. Twitter banning your account is NOT a 1st Amendment violation — Twitter isn't Congress.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "How many amendments are in the Bill of Rights?",
                            "options": [
                                      "7",
                                      "13",
                                      "10",
                                      "25"
                            ],
                            "answer": 2,
                            "explanation": "The Bill of Rights is the first 10 amendments to the Constitution, ratified in 1791 to protect individual freedoms."
                  },
                  {
                            "type": "mc",
                            "q": "Which amendment protects freedom of speech, religion, and press?",
                            "options": [
                                      "1st",
                                      "2nd",
                                      "4th",
                                      "5th"
                            ],
                            "answer": 0,
                            "explanation": "The 1st Amendment protects five freedoms: speech, religion, press, assembly, and petition — the most fundamental civil liberties."
                  },
                  {
                            "type": "typed",
                            "q": "In what year was the Bill of Rights ratified?",
                            "answer": "1791",
                            "placeholder": "Enter the year...",
                            "explanation": "The Bill of Rights was ratified on December 15, 1791 — added to the Constitution to address concerns about individual rights."
                  }
        ]
      },
      "quiz": {
        "type": "quiz",
        "title": "Binding Vow",
        "unlocksAfterLessons": [
          1,
          2,
          3
        ],
        "questions": [
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Volume of a box 5×4×3?",
            "options": [
              "47",
              "60",
              "94",
              "120"
            ],
            "answer": 1,
            "explanation": "V = 5×4×3 = 60 cubic units."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "A cone vs. cylinder with the same base and height. Cone's volume is:",
            "options": [
              "Same as cylinder",
              "Half the cylinder",
              "One third the cylinder",
              "Twice the cylinder"
            ],
            "answer": 2,
            "explanation": "V(cone) = ⅓ × V(cylinder) with same base and height. Every time."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Cylinder: radius 5, height 10. Volume? (π≈3.14)",
            "options": [
              "157",
              "314",
              "785",
              "1570"
            ],
            "answer": 2,
            "explanation": "V = πr²h = 3.14×25×10 = 785 cubic units."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Sphere radius 3. Volume? (use 4/3πr³)",
            "options": [
              "12π",
              "36π",
              "4π",
              "108π"
            ],
            "answer": 1,
            "explanation": "V = (4/3)π(27) = 36π."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Most mutations are:",
            "options": [
              "Harmful",
              "Beneficial",
              "Neutral — no significant change in function",
              "Fatal"
            ],
            "answer": 2,
            "explanation": "The vast majority of mutations are neutral — they don't occur in critical regions or don't significantly change protein function."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Cancer is caused by:",
            "options": [
              "Viruses always",
              "Mutations in genes that control cell division",
              "Too many white blood cells",
              "A single inherited gene"
            ],
            "answer": 1,
            "explanation": "Cancer = mutations in proto-oncogenes or tumor suppressor genes, causing uncontrolled cell division."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why does sunscreen help prevent skin cancer?",
            "options": [
              "It kills cancer cells",
              "It blocks UV light that causes DNA mutations in skin cells",
              "It strengthens immunity",
              "It hydrates skin cells"
            ],
            "answer": 1,
            "explanation": "UV light causes mutations in skin cell DNA. Sunscreen absorbs UV before it reaches your cells."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "A beneficial mutation spreads through a population because:",
            "options": [
              "The organism intentionally passed it on",
              "It improves survival or reproduction — offspring with it reproduce more, spreading it over generations",
              "It jumps between organisms",
              "All mutations spread equally"
            ],
            "answer": 1,
            "explanation": "Natural selection: beneficial mutations help organisms survive and reproduce more → passed to more offspring → spreads through population."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "The 1st Amendment protects:",
            "options": [
              "Right to vote and bear arms",
              "Free speech, religion, press, assembly, and petition — five freedoms",
              "Right to a trial and lawyer",
              "Privacy and search protections"
            ],
            "answer": 1,
            "explanation": "The 1st Amendment protects FIVE fundamental freedoms."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why was the Bill of Rights added to the Constitution?",
            "options": [
              "The Constitution was incomplete",
              "Many states refused to ratify without explicit protection of individual rights from government overreach",
              "Britain demanded it",
              "The Founders forgot to include rights"
            ],
            "answer": 1,
            "explanation": "Anti-Federalists worried the Constitution gave too much federal power. The Bill of Rights was the compromise needed to get the Constitution ratified."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Twitter banning someone's account is NOT a 1st Amendment issue because:",
            "options": [
              "The 1st Amendment doesn't protect online speech",
              "The 1st Amendment only restricts government — not private companies like Twitter",
              "The account was harmful",
              "Free speech doesn't apply to social media"
            ],
            "answer": 1,
            "explanation": "The 1st Amendment restricts GOVERNMENT action. Private companies can set their own speech rules."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The 9th Amendment says rights not listed are still protected. Why does this matter?",
            "options": [
              "It removes unlisted rights",
              "It acknowledges the Founders couldn't list every right — rights exist beyond any written list",
              "It gives government more power",
              "It only applies to states"
            ],
            "answer": 1,
            "explanation": "The 9th prevents the government from arguing \"if it's not listed, it's not a right.\" Rights are broader than any possible list."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "How do you weigh an elephant without a scale?\n\n(There are multiple valid methods. Try to think of at least two different approaches — using different principles.)",
        "hint": "Think about what you CAN measure or observe. Archimedes had a related insight about water displacement.",
        "minWords": 20,
        "answer": "**Multiple valid approaches:**\n\n**Method 1 (Archimedes displacement):**\nLead elephant onto a large boat. Mark waterline. Remove elephant. Fill boat with known weights until it sinks to same waterline. Total weight added = elephant's weight.\n\n**Method 2 (Bridge pressure):**\nDrive a truck over a bridge with a pressure sensor. Drive again with elephant in the truck. Difference = elephant's weight.\n\n**Method 3 (Footprint pressure):**\nMeasure the area of all four footprints × pressure per square inch the elephant exerts.\n\nAll three use **indirect measurement** — measuring something related when direct measurement is impossible. Scientists do this constantly."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🧮",
        "formatName": "Surprise Thatha",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find the most surprising fact you can about the Bill of Rights — something most people don't know. Search: \"surprising Bill of Rights facts\" or \"strangest 1st Amendment cases ever.\""
        },
        "partB": {
          "prompt": "Go tell Thatha your fact. Ask what he knows about the Bill of Rights.",
          "questions": [
            "What surprising fact did you find?",
            "What did Thatha know about the Bill of Rights? What surprised him?"
          ]
        },
        "writingPrompt": "In at least 50 words: which amendment do you think is most important and why? Make a specific argument using PEEL structure — claim, evidence, explanation, link.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Volume in Real Life",
        "prompt": "Teach volume using something in your kitchen:\n\n**Find a pot, box, or cup. Measure its dimensions.**\n\n1. Calculate the volume together\n2. Compare to the labeled capacity — how close?\n3. Ask: \"Why do you think companies care so much about volume when designing packaging?\"\n4. Calculate: if a soda can is radius 3.3cm, height 12cm — what's its volume?\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What container did you measure? How close was your calculation to the labeled capacity? What did they say about packaging?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "The Jujutsu High Domain is cylindrical: radius 8m, height 15m.\n\n**Part A:** Find the volume of the domain.\n\n**Part B:** The domain is filled with \"cursed mist\" — 1 cubic meter weighs 0.5 kg. Total mass of the mist?\n\n**Part C:** The domain expands at 2 cubic meters per second. Write an equation for volume V after t seconds. How long until it reaches twice its original size?\n\n**Part D — Thatha Level 🧮:** If the domain were a sphere instead, what radius would give the same volume as the cylinder? Show all work. (Use V = (4/3)πr³ and solve for r.)",
        "hint": "Part D: Set (4/3)πr³ = 960π → (4/3)r³ = 960 → r³ = 720 → r = ∛720.",
        "answer": "Part A: π(64)(15) = 960π ≈ 3,016 m³. Part B: 3,016 × 0.5 ≈ 1,508 kg. Part C: V(t)=960π+2t. 2×960π=960π+2t → t=960π≈3,016 seconds≈50 minutes. Part D: r³=720 → r=∛720≈8.96m."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Size, Amount & Half",
        "newPhrases": [
          {
            "telugu": "పెద్ద, చిన్న",
            "romanized": "Pedda, chinna",
            "english": "Big, small",
            "tip": "Pedda = big. Chinna = small. Great-grandma might call you \"Chinna Abhi\" as a term of endearment!"
          },
          {
            "telugu": "చాలా, కొంచెం",
            "romanized": "Chaalaa, konchem",
            "english": "A lot / very, a little",
            "tip": "Chaalaa you know! Konchem = a little. \"Konchem Telugu telusu naaku\" = I know a little Telugu."
          },
          {
            "telugu": "అన్నీ, ఏమీ లేదు",
            "romanized": "Anni, emi ledu",
            "english": "Everything / all, Nothing",
            "tip": "Anni = all/everything. Emi ledu = nothing. \"Emi ledu\" is very Telangana — dropping the final \"-i.\""
          },
          {
            "telugu": "సగం అయింది",
            "romanized": "Sagam aindi",
            "english": "Half is done",
            "tip": "Sagam = half. Aindi = it happened/is done (Telangana: \"aindi\" not \"ayindi\"). Perfect for Mahoraga progress!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Padakoṇḍu, panneṇḍu, padamuuḍu",
            "options": [
              "Fourteen, fifteen",
              "Eleven, twelve, thirteen",
              "Sixteen, seventeen, eighteen",
              "Nineteen, twenty"
            ],
            "answer": 1,
            "explanation": "Padakoṇḍu, panneṇḍu, padamuuḍu = Eleven, twelve, thirteen."
          },
          {
            "romanized": "Enti?",
            "options": [
              "Eleven, twelve, thirteen",
              "What? / What is it?",
              "Fourteen, fifteen",
              "Sixteen, seventeen, eighteen"
            ],
            "answer": 1,
            "explanation": "Enti? = What? / What is it?."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma your Mahoraga progress: \"Sagam aindi!\" Show her you're halfway through summer.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 19,
    "title": "Stats & First Amendment Live",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Statistics: Mean, Median, Mode",
        "emoji": "📊",
        "imageQuery": "statistics mean median mode range data set calculation bar chart",
        "content": "**Statistics** helps us understand data.\n\nData set: 4, 7, 7, 9, 13\n\n- **Mean (average):** sum ÷ count = 40 ÷ 5 = **8**\n- **Median (middle):** order them → 4,7,**7**,9,13 = **7**\n- **Mode (most common):** **7** (appears twice)\n- **Range:** max - min = 13 - 4 = **9**\n\n**When to use which:**\n- Mean: evenly spread data\n- Median: better when outliers exist (extreme values skew mean)\n- Mode: best for categorical data (\"most popular color\")\n\n**Outlier:** A value far from the rest. One outlier can massively skew the mean while barely affecting the median.",
        "keyFact": "Median household income is used instead of mean because a few billionaires would pull the average way up — median better represents what a \"typical\" household actually earns.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the median of: 3, 7, 9, 12, 15?",
                            "options": [
                                      "9",
                                      "7",
                                      "11",
                                      "10"
                            ],
                            "answer": 0,
                            "explanation": "Median = middle value when sorted. 3, 7, [9], 12, 15 — middle value is 9."
                  },
                  {
                            "type": "typed",
                            "q": "What is the mean of 4, 8, 12, 16?",
                            "answer": "10",
                            "placeholder": "Enter the number...",
                            "explanation": "Mean = sum ÷ count = (4+8+12+16) ÷ 4 = 40 ÷ 4 = 10."
                  },
                  {
                            "type": "mc",
                            "q": "Which measure of center is most resistant to extreme outliers?",
                            "options": [
                                      "Mean",
                                      "Median",
                                      "Average",
                                      "Sum"
                            ],
                            "answer": 1,
                            "explanation": "The median is based on position not value — extreme outliers don't pull it. The mean gets distorted because it includes every value."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Ecology: Population Dynamics",
        "emoji": "🌿",
        "imageQuery": "population dynamics growth carrying capacity predator prey ecology graph",
        "content": "**Population dynamics** studies how and why populations change over time.\n\n**Factors affecting population:**\n- **Birth rate** — increases population\n- **Death rate** — decreases it\n- **Carrying capacity (K)** — maximum population an environment can support\n\n**Growth patterns:**\n- **Exponential growth:** No limits → J-shaped curve (bacteria in ideal conditions)\n- **Logistic growth:** Slows as carrying capacity is approached → S-shaped curve (most real populations)\n\n**Predator-prey cycles:**\nPrey increase → predators increase (with lag) → prey decrease → predators decrease → cycle repeats.\n\n**Human impact:** Habitat destruction lowers carrying capacity; invasive species disrupt relationships.",
        "keyFact": "No population grows exponentially forever. Every population eventually hits its carrying capacity — or crashes if it overshoots.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What term describes the maximum population an environment can support?",
                            "options": [
                                      "Population size",
                                      "Carrying capacity",
                                      "Biodiversity index",
                                      "Limiting factor"
                            ],
                            "answer": 1,
                            "explanation": "Carrying capacity (K) is the maximum population size that an environment can sustainably support given its resources."
                  },
                  {
                            "type": "mc",
                            "q": "When a population exceeds carrying capacity, what typically happens?",
                            "options": [
                                      "It keeps growing",
                                      "Resources increase",
                                      "Population declines due to resource shortage",
                                      "Nothing changes"
                            ],
                            "answer": 2,
                            "explanation": "When a population exceeds K, resources run short — food, space, water. Population typically crashes back down, often below K."
                  },
                  {
                            "type": "typed",
                            "q": "What are factors like food, space, and water that limit population growth called?",
                            "answer": "limiting factors",
                            "placeholder": "Two words...",
                            "explanation": "Limiting factors cap population growth. When any resource becomes scarce, it limits how large a population can grow."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The Bill of Rights in Action Today",
        "emoji": "📜",
        "imageQuery": "First Amendment free speech protest press rights 2024 modern application",
        "content": "The Bill of Rights isn't just history — it shapes your life right now.\n\n**1st Amendment in action:**\n- Students can protest at school (Tinker v. Des Moines, 1969)\n- The press can publish government secrets (Pentagon Papers, 1971)\n- Flag burning is protected speech (Texas v. Johnson, 1989)\n- Social media companies can set their own rules — they're private\n\n**4th Amendment evolving:**\nPolice need a warrant to search your phone (Riley v. California, 2014) — the Supreme Court applied 18th century privacy principles to 21st century technology.\n\n**The key distinction:** The Bill of Rights restricts GOVERNMENT — not private individuals or companies.",
        "keyFact": "The Bill of Rights was written in 1791. In 2014, the Supreme Court unanimously ruled it requires police to get a warrant before searching your smartphone. Old words, new applications.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which amendment is most debated in relation to social media and online speech?",
                            "options": [
                                      "2nd",
                                      "4th",
                                      "1st",
                                      "5th"
                            ],
                            "answer": 2,
                            "explanation": "The 1st Amendment (free speech) is constantly debated regarding social media content moderation — what speech can platforms limit?"
                  },
                  {
                            "type": "mc",
                            "q": "How does the 4th Amendment (search and seizure) apply to smartphones today?",
                            "options": [
                                      "Police can search any phone freely",
                                      "Courts require warrants for most phone searches",
                                      "Phones aren't covered by the 4th Amendment",
                                      "Only texts are protected"
                            ],
                            "answer": 1,
                            "explanation": "The Supreme Court ruled in Riley v. California (2014) that police generally need a warrant to search a phone — a modern application of the 4th Amendment."
                  },
                  {
                            "type": "typed",
                            "q": "Which amendment protects your right to stay silent when arrested?",
                            "answer": "5th",
                            "placeholder": "Which amendment?",
                            "explanation": "The 5th Amendment protects against self-incrimination — this is why police read you Miranda rights including the right to remain silent."
                  }
        ]
      },
      "quiz": {
        "type": "quiz",
        "title": "Binding Vow",
        "unlocksAfterLessons": [
          1,
          2,
          3
        ],
        "questions": [
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Find the mean of: 5, 8, 10, 7",
            "options": [
              "7",
              "7.5",
              "8",
              "8.5"
            ],
            "answer": 1,
            "explanation": "(5+8+10+7)/4 = 30/4 = 7.5."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Find the median of: 3, 7, 2, 9, 5",
            "options": [
              "3",
              "5",
              "7",
              "9"
            ],
            "answer": 1,
            "explanation": "Order: 2,3,5,7,9. Middle value = 5."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Mode of: 4, 4, 6, 8, 8, 8, 10",
            "options": [
              "4",
              "6",
              "8",
              "10"
            ],
            "answer": 2,
            "explanation": "8 appears 3 times — mode is 8."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "A class average is 82. One student scores 20. Which measure is MOST affected?",
            "options": [
              "Mean — heavily influenced by outliers",
              "Median",
              "Mode",
              "Range"
            ],
            "answer": 0,
            "explanation": "Mean is pulled toward extreme outliers. Median just takes the middle value and is resistant to outliers."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is carrying capacity?",
            "options": [
              "How much an animal weighs",
              "The maximum population an environment can sustainably support",
              "How fast a population grows",
              "How much food a population needs"
            ],
            "answer": 1,
            "explanation": "Carrying capacity (K) = the maximum number of individuals an environment can sustain with available resources."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "The S-shaped (logistic) growth curve shows:",
            "options": [
              "Unlimited exponential growth",
              "Growth that slows and levels off as it approaches carrying capacity",
              "Population decline",
              "Predator-prey cycles"
            ],
            "answer": 1,
            "explanation": "Logistic growth starts fast but slows as the population approaches carrying capacity — an S-shaped curve representing most real populations."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why do predator populations lag behind prey populations in a cycle?",
            "options": [
              "Predators are slower",
              "Reproduction takes time — more prey = better-fed predators with more offspring, but those offspring take time to mature",
              "Predators choose to delay",
              "Weather slows predators"
            ],
            "answer": 1,
            "explanation": "Biological time lags: more prey → better predator survival and reproduction → but offspring take months to years to mature and start hunting."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "A bacterial colony doubles every 20 minutes. Starting with 1 bacterium, how many after 2 hours?",
            "options": [
              "12",
              "64",
              "4096",
              "16384"
            ],
            "answer": 2,
            "explanation": "2 hours = 120 minutes. 120/20 = 6 doublings. 2⁶ = 64 bacteria."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "Can students legally protest at school under the 1st Amendment?",
            "options": [
              "No — school is private property",
              "Yes — Tinker v. Des Moines (1969) established students don't lose rights at school",
              "Only with teacher permission",
              "Only outside school hours"
            ],
            "answer": 1,
            "explanation": "Tinker v. Des Moines: students don't \"shed their constitutional rights at the schoolhouse gate.\""
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why is a private company banning your social media NOT a 1st Amendment violation?",
            "options": [
              "The 1st Amendment doesn't protect online speech",
              "The 1st Amendment only restricts government — private companies can set their own speech rules",
              "The speech was harmful",
              "Free speech doesn't apply to adults"
            ],
            "answer": 1,
            "explanation": "The 1st Amendment restricts CONGRESS (government). Twitter, Instagram, etc. are private companies that can set their own rules."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Riley v. California (2014) ruled police need a warrant to search:",
            "options": [
              "Your home",
              "Your car",
              "Your phone",
              "Your email only"
            ],
            "answer": 2,
            "explanation": "The Supreme Court unanimously ruled that digital privacy of phones requires a warrant — applying 18th century constitutional privacy principles to 21st century technology."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The Bill of Rights was written in 1791. How does it stay relevant for issues like phone searches (2014) or social media (2020s)?",
            "options": [
              "It's updated every decade",
              "Courts interpret its principles to new situations the Founders couldn't have imagined",
              "It only applies to original situations",
              "Congress rewrites it as needed"
            ],
            "answer": 1,
            "explanation": "Constitutional principles are interpreted, not just applied literally. The 4th Amendment's privacy principle extends to phones. The 1st Amendment's logic defines what counts as \"government\" speech restriction."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "The Monty Hall Problem:\n\nYou're on a game show. 3 doors — one hides a prize, two hide nothing.\n\nYou pick Door 1. The host (who knows what's behind every door) opens Door 3 — showing nothing.\n\n**Should you switch to Door 2, stick with Door 1, or does it matter?**\n\nMost people say \"doesn't matter.\" They're wrong. What's the actual answer and why?",
        "hint": "Think about what the host's action reveals. Initially your door had 1/3 chance. What happens to that probability when the host eliminates one door?",
        "minWords": 20,
        "answer": "**SWITCH. Your odds double.**\n\nWhen you first picked: 1/3 chance of being right.\nDoors 2+3 combined: 2/3 chance.\n\nHost removes Door 3 (always a wrong door). All that 2/3 probability concentrates on Door 2.\n\nSo: Door 1 = 1/3. Door 2 = 2/3. **Switch!**\n\n**Intuition pump:** Imagine 1,000 doors. You pick one. Host opens 998 wrong doors. Obviously switch to the one remaining door — same logic, just clearer at scale.\n\nMarilyn vos Savant published this in 1990. Thousands of mathematicians wrote angry letters saying she was wrong. She was right. Even math PhD holders had the wrong intuition."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🗺️",
        "formatName": "Map It",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Collect real data! Ask 8-10 family members, neighbors, or anyone nearby ONE question: how many hours of sleep did they get last night? Record every answer."
        },
        "partB": {
          "prompt": "Calculate mean, median, mode, and range for your data. Look for outliers.",
          "questions": [
            "List all the answers you collected.",
            "Show your work: mean, median, mode, range. Is there an outlier? How does it affect the mean vs. median?"
          ]
        },
        "writingPrompt": "In at least 50 words: which measure (mean, median, or mode) best represents the \"typical\" person in your data set and why? What would a major outlier do to each measure?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Mean vs Median",
        "prompt": "Teach the difference using NBA salaries:\n\n**\"NBA teams use MEDIAN salary when describing what players earn — not mean. Why? Because one player earning $50M makes the average look enormous, even if most players earn $1-2M.\"**\n\nThen:\n1. Make a mini data set: 2, 3, 3, 4, 5, 5, 50 (millions)\n2. Calculate mean vs. median together\n3. Ask: \"Which better represents a typical player's salary?\"\n4. Ask Thatha: where else does he see the mean/median distinction?\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Did they understand why median is better here? What other examples did Thatha give?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Jujutsu High tracks sorcerer XP. Nine sorcerers' scores:\n22, 34, 34, 41, 45, 48, 52, 58, 200\n\n**Part A:** Find mean, median, mode, and range. Show all work.\n\n**Part B:** The score of 200 belongs to Gojo. Is it an outlier? How does it affect mean vs. median?\n\n**Part C:** Remove Gojo's score. Recalculate the mean. How much did it drop?\n\n**Part D — Thatha Level 🧮:** The school wants to report \"typical sorcerer performance\" to new students. Write 2-3 sentences arguing which measure they should use and why — using the actual numbers as evidence.",
        "hint": "For mean: add all 9 values and divide by 9. For median with 9 values: the 5th value when ordered.",
        "answer": "Part A: Sum=534, mean=59.3. Ordered: 22,34,34,41,45,48,52,58,200 → median=45. Mode=34. Range=178. Part B: 200 is a clear outlier — raises mean 14 points above median. Part C: Sum without Gojo=334, mean=334/8=41.75. Dropped 17.6 points. Part D: Should argue for median (45) — it better represents typical performance since Gojo is an exceptional outlier who inflates the mean to 59.3, which no typical sorcerer actually achieves."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Good, Great, Not Good",
        "newPhrases": [
          {
            "telugu": "బాగుంది",
            "romanized": "Baagundi",
            "english": "It is good / It's fine",
            "tip": "Your go-to positive response. \"Baagundi\" = it's good."
          },
          {
            "telugu": "చాలా బాగుంది",
            "romanized": "Chaalaa baagundi",
            "english": "Very good / Excellent",
            "tip": "Add chaalaa to anything to intensify it. Chaalaa baagundi = very good indeed."
          },
          {
            "telugu": "బాగా లేదు",
            "romanized": "Baagaa ledu",
            "english": "Not good / Not well",
            "tip": "Ledu = is not. If you feel unwell or something isn't good. Honest and necessary."
          },
          {
            "telugu": "అద్భుతం!",
            "romanized": "Adbhutam!",
            "english": "Wonderful! / Amazing!",
            "tip": "Adbhutam = miraculous/wonderful. Say with real enthusiasm!"
          },
          {
            "telugu": "సూపర్!",
            "romanized": "Super!",
            "english": "Super! / Great!",
            "tip": "\"Super!\" is used all the time in Telangana Telugu — borrowed from English but completely natural. Great-grandma will understand this one!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Erupu, neelam, pachcha",
            "options": [
              "Yellow, orange, pink",
              "Red, blue, green",
              "White, black",
              "What color is this?"
            ],
            "answer": 1,
            "explanation": "Erupu, neelam, pachcha = Red, blue, green."
          },
          {
            "romanized": "Naaku bhayangaa undi",
            "options": [
              "Red, blue, green",
              "I am scared / I feel afraid",
              "Yellow, orange, pink",
              "White, black"
            ],
            "answer": 1,
            "explanation": "Naaku bhayangaa undi = I am scared / I feel afraid."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "React to 5 things great-grandma tells you using: Baagundi / Chaalaa baagundi / Adbhutam! / Super!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  }
];
