export const days1to5 = [
  {
    "id": 1,
    "title": "First Mission",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Ratios: Comparing Things",
        "emoji": "🔢",
        "imageQuery": "ratio proportion math visual comparison",
        "content": "A **ratio** compares two quantities. If a training squad has 3 Grade 1 sorcerers and 9 Grade 3 sorcerers, the ratio is 3:9.\n\n**Simplify** by dividing both numbers by the same amount:\n3:9 ÷ 3 = **1:3** ✓\n\nRatios show up everywhere — recipes, maps, speeds, test scores.\n\n**Key trick:** Always divide by the GCF (Greatest Common Factor).",
        "keyFact": "A ratio is just a comparison between two numbers.",
        "practice": [
          {
            "type": "mc",
            "q": "A Jujutsu squad has 2 Grade 1 sorcerers and 6 Grade 3 sorcerers. What is the simplified ratio?",
            "options": ["2:6", "1:3", "3:1", "1:2"],
            "answer": 1,
            "explanation": "Divide both by 2: 2:6 → 1:3. For every 1 Grade 1 sorcerer, there are 3 Grade 3 sorcerers."
          },
          {
            "type": "typed",
            "q": "Simplify the ratio 4:12. What is the first number in the simplified ratio?",
            "answer": "1",
            "placeholder": "Type a number...",
            "explanation": "Divide both by 4: 4÷4 = 1, 12÷4 = 3. So 4:12 simplifies to 1:3."
          },
          {
            "type": "mc",
            "q": "In Minecraft, you use 3 diamonds to make a sword and 9 diamonds to make armor. What is the ratio of sword to armor diamonds?",
            "options": ["3:9", "1:3", "9:3", "1:9"],
            "answer": 1,
            "explanation": "3:9 simplifies to 1:3 — divide both by the GCF which is 3!"
          }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Cells: The Smallest Unit of Life",
        "emoji": "🔬",
        "imageQuery": "animal cell diagram labeled organelles",
        "content": "Every living thing is made of **cells** — the smallest unit of life. Your body has about 37 trillion.\n\n**Key organelles:**\n- **Nucleus** — control center, holds DNA\n- **Mitochondria** — makes energy (ATP)\n- **Cell membrane** — controls what enters/exits\n- **Cytoplasm** — jelly-like fluid everything floats in\n\nPlant cells also have a **cell wall** and **chloroplasts**.",
        "keyFact": "Uncoiled, the DNA in ONE of your cells would stretch about 6 feet long.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What controls everything the cell does and contains the DNA?",
                            "options": [
                                      "Mitochondria",
                                      "Ribosome",
                                      "Nucleus",
                                      "Cell membrane"
                            ],
                            "answer": 2,
                            "explanation": "The nucleus is the cell's control center — it contains DNA, which has instructions for every protein the cell makes."
                  },
                  {
                            "type": "mc",
                            "q": "Which part of the cell is like a Minecraft furnace — producing energy?",
                            "options": [
                                      "Nucleus",
                                      "Cell wall",
                                      "Ribosome",
                                      "Mitochondria"
                            ],
                            "answer": 3,
                            "explanation": "Mitochondria produce ATP (energy) through cellular respiration — they're the powerhouses that fuel everything the cell does."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call the flexible barrier that controls what enters and exits the cell?",
                            "answer": "cell membrane",
                            "placeholder": "Two words...",
                            "explanation": "The cell membrane (plasma membrane) regulates what goes in and out — nutrients in, waste out — keeping the cell in balance."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The First Americans",
        "emoji": "🏛️",
        "imageQuery": "indigenous peoples North America map tribes regions",
        "content": "Before Europeans arrived, North America had **500+ distinct Indigenous nations** — each with their own language, government, and culture.\n\n**Key groups:**\n- **Pacific Northwest** (your home!): Duwamish, Salish — expert fishermen\n- **Great Plains**: Lakota, Comanche — buffalo hunters\n- **Southwest**: Pueblo peoples — multi-story cliff cities\n- **Eastern Woodlands**: Iroquois — democratic system that influenced the US Constitution",
        "keyFact": "Seattle is named after Chief Si'ahl of the Duwamish people — the original inhabitants of your land.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Who were the first people to inhabit the Americas?",
                            "options": [
                                      "European explorers",
                                      "African traders",
                                      "Indigenous peoples who migrated from Asia",
                                      "South American civilizations"
                            ],
                            "answer": 2,
                            "explanation": "The first Americans were Indigenous peoples who migrated from Asia via the Bering Land Bridge approximately 15,000+ years ago."
                  },
                  {
                            "type": "mc",
                            "q": "Which of these was a major civilization in the Americas before European contact?",
                            "options": [
                                      "Roman Empire",
                                      "Aztec Empire",
                                      "Ottoman Empire",
                                      "Ming Dynasty"
                            ],
                            "answer": 1,
                            "explanation": "The Aztec, Maya, and Inca were powerful civilizations in the Americas long before Europeans arrived — with advanced cities, agriculture, and trade."
                  },
                  {
                            "type": "typed",
                            "q": "What was the name of the land bridge connecting Asia to North America during the ice age?",
                            "answer": "Bering Land Bridge",
                            "placeholder": "Name it...",
                            "explanation": "The Bering Land Bridge (Beringia) connected modern Siberia to Alaska when sea levels were lower. Early humans walked across to populate the Americas."
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
            "q": "Simplify the ratio 6:18",
            "options": [
              "1:2",
              "1:3",
              "2:6",
              "3:6"
            ],
            "answer": 1,
            "explanation": "Divide both by 6 → 1:3."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "A squad uses 2 healers for every 5 fighters. How many healers for 15 fighters?",
            "options": [
              "3",
              "6",
              "5",
              "8"
            ],
            "answer": 1,
            "explanation": "2/5 = ?/15 → multiply by 3 → 6."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Are 3:4 and 9:12 equivalent ratios?",
            "options": [
              "Yes",
              "No",
              "Only sometimes",
              "Cannot tell"
            ],
            "answer": 0,
            "explanation": "9÷3=3, 12÷3=4 → same ratio ✓"
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Abhi scores 15/20. Friend scores 18/24. Who scored better?",
            "options": [
              "Abhi",
              "His friend",
              "They're the same",
              "Cannot tell"
            ],
            "answer": 2,
            "explanation": "15/20 = 3/4 = 18/24. Identical!"
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is the control center of a cell?",
            "options": [
              "Mitochondria",
              "Nucleus",
              "Ribosome",
              "Vacuole"
            ],
            "answer": 1,
            "explanation": "The nucleus contains DNA and directs all cell activities."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Which organelle makes energy for the cell?",
            "options": [
              "Nucleus",
              "Cell wall",
              "Mitochondria",
              "Cytoplasm"
            ],
            "answer": 2,
            "explanation": "Mitochondria produce ATP — the energy currency cells need."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Which organelle is in plant cells but NOT animal cells?",
            "options": [
              "Nucleus",
              "Mitochondria",
              "Cell wall",
              "Ribosome"
            ],
            "answer": 2,
            "explanation": "Plant cells have a rigid cell wall. Animal cells only have a flexible membrane."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "A cell without mitochondria would most likely:",
            "options": [
              "Grow larger",
              "Run out of energy and die",
              "Produce more DNA",
              "Divide faster"
            ],
            "answer": 1,
            "explanation": "No mitochondria = no ATP = no energy = cell death."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "How long have Indigenous peoples lived in the Americas?",
            "options": [
              "1,000 years",
              "5,000 years",
              "15,000+ years",
              "500 years"
            ],
            "answer": 2,
            "explanation": "Archaeological evidence shows humans arrived at least 15,000 years ago."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Seattle is named after a leader from which Indigenous nation?",
            "options": [
              "Lakota",
              "Duwamish",
              "Iroquois",
              "Pueblo"
            ],
            "answer": 1,
            "explanation": "Chief Si'ahl of the Duwamish people."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The Iroquois Confederacy influenced the US government because:",
            "options": [
              "They used a similar writing system",
              "Their democratic structure inspired the Founders",
              "They allied with Britain",
              "They built the first cities in North America"
            ],
            "answer": 1,
            "explanation": "The Haudenosaunee had a sophisticated democratic system the Founders studied."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Why did different Indigenous groups develop such different cultures?",
            "options": [
              "They chose randomly",
              "European traders taught them",
              "Each adapted to its local environment",
              "They copied each other"
            ],
            "answer": 2,
            "explanation": "Coastal peoples fished, plains peoples hunted buffalo — perfect adaptation to their environments."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A sorcerer has 12 cursed spirit orbs — identical looking. One is slightly heavier (contains a real curse).\n\nHe has a balance scale and can only use it **3 times**.\n\nHow does he find the heavy orb in exactly 3 weighings?",
        "hint": "Think about splitting into thirds, not halves. Each weighing should eliminate as many possibilities as possible.",
        "minWords": 20,
        "answer": "**Weighing 1:** Split into 3 groups of 4. Weigh Group A vs Group B.\n→ Balanced: heavy orb is in Group C. Unbalanced: it's in the heavier group.\n\n**Weighing 2:** Take your 4 suspects. Weigh 2 vs 2.\n→ Heavier side has it.\n\n**Weighing 3:** Weigh those 2 against each other. Done! ✓\n\n**Key insight:** Split into thirds not halves — eliminates more per weighing."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "📺",
        "formatName": "Watch & Discover",
        "partA": {
          "url": "https://www.youtube.com/watch?v=8IlzKri08kk",
          "videoTitle": "Cell Organelles — Amoeba Sisters",
          "instruction": "Watch 3 minutes. Try to name each organelle before they do."
        },
        "partB": {
          "prompt": "Search: \"what happens when cells stop working properly\" — find one real example.",
          "questions": [
            "How many cells are in the human body? Write the actual number.",
            "What is one real thing that goes wrong when cells malfunction?"
          ]
        },
        "writingPrompt": "If cells are so tiny, why does it matter whether each one works properly? Use what you learned in the lesson AND the video.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Ratios",
        "prompt": "Explain ratios to Thatha, Amma, or anyone nearby.\n\nScript: **\"A ratio compares two things — like 1 teacher for every 30 students. That's 1:30.\"**\n\nThen:\n1. Make up your OWN real-life example\n2. Show them how to simplify 4:12\n3. Ask: \"Where do YOU see ratios in life?\"\n\nNo one around? Record a 30-second voice memo and send it 🎙️",
        "followUp": "Who did you teach? What example did you use? What was their reaction?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Jujutsu High accepts students in a **5:2 ratio** of fighters to healers.\n\n**Part A:** If 35 fighters enroll, how many healers must there be?\n\n**Part B:** A rival school uses a 3:1 ratio. Are 5:2 and 3:1 equivalent? Prove with cross-multiplication.\n\n**Part C — Thatha Level 🧮:** The program wants exactly 84 total students at 5:2. How many fighters? How many healers?",
        "hint": "Part C: A 5:2 ratio has 7 total \"parts.\" If there are 84 students, how much is each part worth?",
        "answer": "Part A: 14 healers. Part B: 5×1=5, 2×3=6 → NOT equivalent. Part C: 84÷7=12 per part → 60 fighters, 24 healers."
      },
      "telugu": {
        "type": "telugu",
        "theme": "First Words",
        "newPhrases": [
          {
            "telugu": "నమస్కారం",
            "romanized": "Namaskaram",
            "english": "Hello / Greetings",
            "tip": "The universal Telugu greeting. Say it with a slight bow to elders. Great-grandma will beam."
          },
          {
            "telugu": "నేను అభి",
            "romanized": "Nenu Abhi",
            "english": "I am Abhi",
            "tip": "Nenu = I. Your very first Telugu sentence!"
          },
          {
            "telugu": "మీరు ఎలా ఉన్నారు?",
            "romanized": "Meeru elaa unnaaru?",
            "english": "How are you? (respectful)",
            "tip": "Meeru = you (respectful for elders). Always use this with great-grandma, never \"nuvvu.\""
          },
          {
            "telugu": "నేను బాగున్నా",
            "romanized": "Nenu baagunnaa",
            "english": "I am fine / I am well",
            "tip": "Baagunnaa = I am well (Telangana style — shorter and natural). The everyday response."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Namaskaram",
            "options": [
              "Goodbye",
              "Hello / Greetings",
              "Thank you",
              "Sorry"
            ],
            "answer": 1,
            "explanation": "Namaskaram = Hello/Greetings."
          },
          {
            "romanized": "Nenu baagunnaa",
            "options": [
              "I am sad",
              "I am tired",
              "I am fine/well",
              "I am hungry"
            ],
            "answer": 2,
            "explanation": "Nenu baagunnaa = I am fine/well (Telangana)."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Call great-grandma right now. Say: Namaskaram → Meeru elaa unnaaru? → wait for her → Nenu baagunnaa. That's a real conversation!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 2,
    "title": "Cursed Energy Rising",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Negative Numbers",
        "emoji": "🔢",
        "imageQuery": "number line negative numbers temperature thermometer",
        "content": "Negative numbers go **left of zero** on a number line.\n\n**Sign rules for multiply/divide:**\n- Same signs → **Positive**: (-4) × (-3) = **12** ✓\n- Different signs → **Negative**: (-4) × 3 = **-12** ✗\n\n**Absolute value:** |x| = distance from zero, always positive.\n|-7| = 7, |7| = 7\n\nExamples: temperature below freezing, debt, underground floors — all negative.",
        "keyFact": "Negative × negative = positive. Two \"wrongs\" literally make a \"right\" in math.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is -5 + 8?",
                            "options": [
                                      "-3",
                                      "3",
                                      "13",
                                      "-13"
                            ],
                            "answer": 1,
                            "explanation": "Starting at -5, moving 8 units right on the number line: -5 + 8 = 3. Think of it as owing 5 but earning 8."
                  },
                  {
                            "type": "typed",
                            "q": "What is -7 × -3?",
                            "answer": "21",
                            "placeholder": "Enter the number...",
                            "explanation": "Negative × negative = positive. -7 × -3 = +21. Two negatives always make a positive in multiplication."
                  },
                  {
                            "type": "mc",
                            "q": "Which is greater: -2 or -8?",
                            "options": [
                                      "-8",
                                      "-2",
                                      "They are equal",
                                      "Cannot compare"
                            ],
                            "answer": 1,
                            "explanation": "-2 > -8 on the number line. The closer a negative number is to 0, the greater it is. -2 is to the right of -8."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Prokaryotes vs Eukaryotes",
        "emoji": "🔬",
        "imageQuery": "prokaryote vs eukaryote cell comparison diagram",
        "content": "Not all cells are the same. Two fundamental types:\n\n**Prokaryotes** (bacteria):\n- No nucleus — DNA floats freely\n- No membrane-bound organelles\n- Tiny, ancient — first life on Earth\n\n**Eukaryotes** (you!):\n- True nucleus\n- Membrane-bound organelles\n- Plants, animals, fungi — all eukaryotes\n\n**Key difference:** Prokaryotes = no nucleus. Eukaryotes = yes nucleus.",
        "keyFact": "You have more bacterial cells (prokaryotes) in your gut than human cells in your entire body.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the key difference between prokaryotes and eukaryotes?",
                            "options": [
                                      "Size only",
                                      "Prokaryotes have no membrane-bound nucleus; eukaryotes do",
                                      "Eukaryotes have no DNA",
                                      "Prokaryotes are always plants"
                            ],
                            "answer": 1,
                            "explanation": "Prokaryotes (like bacteria) have no nucleus — DNA floats free. Eukaryotes (animals, plants, fungi) have DNA enclosed in a membrane-bound nucleus."
                  },
                  {
                            "type": "mc",
                            "q": "Which of these is a prokaryote?",
                            "options": [
                                      "Mushroom",
                                      "Human skin cell",
                                      "Bacteria",
                                      "Plant leaf cell"
                            ],
                            "answer": 2,
                            "explanation": "Bacteria are prokaryotes — single-celled organisms without a nucleus. All multicellular organisms (animals, plants, fungi) are made of eukaryotic cells."
                  },
                  {
                            "type": "typed",
                            "q": "What organelle do eukaryotes have that prokaryotes lack?",
                            "answer": "nucleus",
                            "placeholder": "One word...",
                            "explanation": "The nucleus is the defining feature of eukaryotes — it contains and protects the DNA. Prokaryotes have DNA but no membrane around it."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "European Exploration & Contact",
        "emoji": "⛵",
        "imageQuery": "Columbus 1492 Americas European exploration map Caribbean",
        "content": "In **1492**, Columbus reached the Caribbean — beginning contact that changed the world.\n\n**Why Europeans explored:**\n- Find faster trade routes to Asia\n- Wealth — gold, spices, land\n- Spread Christianity\n\n**Key explorers:**\n- Columbus (Spain) — Caribbean, 1492\n- Vasco da Gama (Portugal) — route to India, 1498\n- Magellan (Spain) — first circumnavigation, 1522\n\nFor Indigenous peoples, \"contact\" meant something very different than \"discovery.\"",
        "keyFact": "Columbus died believing he'd reached Asia. He never knew he'd found two entirely new continents.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was Columbus's original goal when he sailed west in 1492?",
                            "options": [
                                      "Find a new continent",
                                      "Reach Asia by sailing west",
                                      "Establish colonies",
                                      "Find gold in Africa"
                            ],
                            "answer": 1,
                            "explanation": "Columbus was trying to find a western sea route to Asia (for spices and trade). He didn't know the Americas existed — he thought he'd reached Asia."
                  },
                  {
                            "type": "mc",
                            "q": "What motivated most European exploration in the 1400s-1500s?",
                            "options": [
                                      "Scientific curiosity",
                                      "Wealth, trade routes, and spreading Christianity",
                                      "Escaping overpopulation",
                                      "Finding new farmland"
                            ],
                            "answer": 1,
                            "explanation": "The 'Three Gs' drove exploration: Gold (wealth), God (spreading Christianity), and Glory (fame and power for monarchs and explorers)."
                  },
                  {
                            "type": "typed",
                            "q": "What year did Columbus first arrive in the Americas?",
                            "answer": "1492",
                            "placeholder": "Enter the year...",
                            "explanation": "Columbus landed in the Caribbean in 1492, beginning sustained contact between Europe and the Americas — changing world history forever."
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
            "q": "What is (-4) × (-6)?",
            "options": [
              "-24",
              "-10",
              "10",
              "24"
            ],
            "answer": 3,
            "explanation": "Same signs → Positive. 4×6=24."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "What is |-15|?",
            "options": [
              "-15",
              "0",
              "15",
              "150"
            ],
            "answer": 2,
            "explanation": "Absolute value is always positive. |-15| = 15."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Temperature is -3°F and drops 8 more degrees. New temperature?",
            "options": [
              "-11°F",
              "-5°F",
              "5°F",
              "11°F"
            ],
            "answer": 0,
            "explanation": "-3 + (-8) = -11°F."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "What is 2 - (-7)?",
            "options": [
              "-9",
              "-5",
              "5",
              "9"
            ],
            "answer": 3,
            "explanation": "Subtracting a negative = adding: 2+7=9."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is the key difference between prokaryotes and eukaryotes?",
            "options": [
              "Size",
              "Eukaryotes have a true nucleus, prokaryotes don't",
              "Color",
              "Number of cells"
            ],
            "answer": 1,
            "explanation": "Prokaryotes lack a membrane-bound nucleus. That's the defining difference."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Which of these is a prokaryote?",
            "options": [
              "Mushroom",
              "Oak tree",
              "Bacteria",
              "Human skin cell"
            ],
            "answer": 2,
            "explanation": "Bacteria are prokaryotes — no nucleus, no membrane-bound organelles."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "You are a eukaryote. What does this mean?",
            "options": [
              "No nucleus",
              "Your cells have a true nucleus and organelles",
              "Single-celled organism",
              "You are a bacterium"
            ],
            "answer": 1,
            "explanation": "All animals (including humans) are eukaryotes — cells with true nuclei."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why might bacteria be harder to kill than human cells?",
            "options": [
              "They're larger",
              "They're simpler and more adaptable",
              "They have thicker cell walls",
              "They reproduce slower"
            ],
            "answer": 1,
            "explanation": "Bacteria's simplicity makes them adaptable. They can develop antibiotic resistance quickly."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What year did Columbus reach the Caribbean?",
            "options": [
              "1392",
              "1492",
              "1592",
              "1692"
            ],
            "answer": 1,
            "explanation": "1492 — \"In 1492, Columbus sailed the ocean blue.\""
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why did European nations want new sea routes?",
            "options": [
              "To escape bad weather",
              "To find faster trade routes to Asia and access spices and gold",
              "They were looking for new sports",
              "To avoid war"
            ],
            "answer": 1,
            "explanation": "Trade with Asia was enormously profitable. A faster sea route meant more money."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "From an Indigenous perspective, Columbus's arrival was:",
            "options": [
              "A welcome event",
              "Unimportant",
              "The beginning of catastrophic violence and disease",
              "A peaceful first contact"
            ],
            "answer": 2,
            "explanation": "For Indigenous peoples, European contact brought disease, violence, and eventual colonization."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Columbus died believing he'd reached Asia. What does this tell us about exploration?",
            "options": [
              "Explorers always knew where they were going",
              "Major discoveries often happen by accident",
              "Columbus was not a good navigator",
              "European maps were accurate"
            ],
            "answer": 1,
            "explanation": "Many of history's greatest discoveries were accidents — Columbus was looking for Asia and found the Americas."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You are guarding a prison with two doors. One leads to freedom, one to danger.\n\nTwo guards know which is which. One always tells the truth. One always lies. You don't know which is which.\n\nYou can ask **one guard one question**.\n\nWhat do you ask to guarantee finding the safe door?",
        "hint": "What if you asked each guard what the OTHER guard would say?",
        "minWords": 20,
        "answer": "Ask either guard: **\"Which door would the OTHER guard say leads to freedom?\"**\n\nThen take the OPPOSITE door.\n\n**Why:** If you ask the truth-teller, they honestly report what the liar would say (wrong door). If you ask the liar, they lie about what the truth-teller would say (also wrong door). Both answers point to the wrong door — so always pick the other one. ✓"
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🔮",
        "formatName": "Predict & Check",
        "partA": {
          "url": "https://www.youtube.com/watch?v=URUJD5NEXC8",
          "videoTitle": "Cell Organelles — Amoeba Sisters",
          "instruction": "BEFORE watching: predict what would happen to a cell if mitochondria stopped working. Write your prediction, THEN watch."
        },
        "partB": {
          "prompt": "Were you right? What did the video add?",
          "questions": [
            "What was your original prediction?",
            "What did the video show that you didn't predict?"
          ]
        },
        "writingPrompt": "Explain why the mitochondria being called the \"powerhouse of the cell\" is either a perfect description or an oversimplification.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Negative Numbers",
        "prompt": "Explain negative numbers to someone using temperature:\n\n**\"Negative numbers go left of zero. If it's -3°F and drops 8 more degrees, it's -11°F — not 5°F.\"**\n\nThen:\n1. Ask them: \"What's -4 × -3?\" (Answer: 12)\n2. Challenge: \"What's 5 - (-8)?\" (Answer: 13)\n3. Ask Thatha where he uses negatives\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Who did you teach? What confused them? What did Thatha say about negatives?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "A sorcerer's power level works like a number line.\n\n**Part A:** A Grade 3 sorcerer has power -2. A curse has power -8. What is the difference?\n\n**Part B:** Two curses combine: (-3) × (-4). What is their combined power?\n\n**Part C — Thatha Level 🧮:** Starting at -5, power is multiplied by -2 three times in a row. What is the final power level? Show every step.",
        "hint": "Part C: -5 × -2 = 10. Then 10 × -2 = ? Then ? × -2 = ?",
        "answer": "Part A: -2-(-8) = 6. Part B: 12. Part C: -5×-2=10 → 10×-2=-20 → -20×-2=40."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Yes, No, Thank You",
        "newPhrases": [
          {
            "telugu": "అవును",
            "romanized": "Avunu",
            "english": "Yes",
            "tip": "Avunu — said with a slight nod. Very natural in Telangana."
          },
          {
            "telugu": "కాదు",
            "romanized": "Kaadu",
            "english": "No",
            "tip": "Kaadu. Short and clear."
          },
          {
            "telugu": "సరే",
            "romanized": "Sare",
            "english": "Okay / Alright",
            "tip": "Sare is used constantly in Telangana Telugu — like \"okay\" or \"sure.\""
          },
          {
            "telugu": "ధన్యవాదాలు",
            "romanized": "Dhanyavaadaalu",
            "english": "Thank you",
            "tip": "Say this whenever someone does something kind. Great-grandma will love hearing it from you."
          },
          {
            "telugu": "అర్థమైంది",
            "romanized": "Arthamaindi",
            "english": "I understand / Got it",
            "tip": "Arthamaindi = understood (Telangana form). Say it when she explains something."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Namaskaram",
            "options": [
              "I am Abhi",
              "Hello / Greetings",
              "How are you? (respectful)",
              "I am fine / I am well"
            ],
            "answer": 1,
            "explanation": "Namaskaram = Hello / Greetings."
          },
          {
            "romanized": "Meeru elaa unnaaru?",
            "options": [
              "Hello / Greetings",
              "How are you? (respectful)",
              "I am Abhi",
              "I am fine / I am well"
            ],
            "answer": 1,
            "explanation": "Meeru elaa unnaaru? = How are you? (respectful)."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Practice: great-grandma says something → you say \"Arthamaindi\" and \"Dhanyavaadaalu.\" Simple but meaningful.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 3,
    "title": "Ancient Domains",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Variables & Expressions",
        "emoji": "🔢",
        "imageQuery": "algebra variables expressions math visual",
        "content": "A **variable** is a letter representing an unknown number. An **expression** is variables, numbers, and operations combined.\n\n**Evaluating:** Substitute and calculate.\nIf x = 4: 3x + 7 = 3(4) + 7 = 12 + 7 = **19**\n\n**Like terms:** Only combine terms with the same variable.\n5x + 3x - 2x = **6x** ✓\n\nYou can't add 6x + 3 — those are unlike terms.",
        "keyFact": "\"Algebra\" comes from Arabic \"al-jabr\" — invented by Muhammad al-Khwarizmi in 9th century Baghdad.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the value of 3x + 5 when x = 4?",
                            "options": [
                                      "12",
                                      "17",
                                      "23",
                                      "20"
                            ],
                            "answer": 1,
                            "explanation": "Substitute x=4: 3(4) + 5 = 12 + 5 = 17. Always replace the variable with the given value first."
                  },
                  {
                            "type": "mc",
                            "q": "In the expression 7y - 2, what is the coefficient of y?",
                            "options": [
                                      "2",
                                      "7",
                                      "y",
                                      "-2"
                            ],
                            "answer": 1,
                            "explanation": "The coefficient is the number multiplied by the variable. In 7y, the coefficient is 7."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call a letter that represents an unknown value in math?",
                            "answer": "variable",
                            "placeholder": "One word...",
                            "explanation": "A variable is a symbol (usually a letter like x or y) that stands for an unknown or changing value."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Photosynthesis",
        "emoji": "🌿",
        "imageQuery": "photosynthesis diagram plant sunlight CO2 glucose oxygen",
        "content": "Plants make their own food using sunlight. This is **photosynthesis**.\n\n**The equation:**\n6CO₂ + 6H₂O + sunlight → C₆H₁₂O₆ + 6O₂\n\nIn plain English:\nCarbon dioxide + Water + Sunlight → **Glucose** (food) + **Oxygen**\n\n**Where it happens:** Chloroplasts — containing green chlorophyll.\n\nEvery breath of oxygen you take came from photosynthesis. Every calorie you eat traces back to it.",
        "keyFact": "Without photosynthesis, there would be no oxygen in Earth's atmosphere and no food for any animal.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What are the two main ingredients plants need for photosynthesis?",
                            "options": [
                                      "Oxygen and sugar",
                                      "Water and carbon dioxide",
                                      "Glucose and oxygen",
                                      "Nitrogen and sunlight"
                            ],
                            "answer": 1,
                            "explanation": "Photosynthesis: Water + Carbon dioxide + Sunlight → Glucose + Oxygen. Plants take in CO₂ and water, use sunlight energy, and produce sugar and oxygen."
                  },
                  {
                            "type": "typed",
                            "q": "Where in the cell does photosynthesis take place?",
                            "answer": "chloroplast",
                            "placeholder": "One word...",
                            "explanation": "Chloroplasts contain chlorophyll — the green pigment that absorbs sunlight. This is where plants convert light energy into chemical energy (sugar)."
                  },
                  {
                            "type": "mc",
                            "q": "What gas do plants release as a byproduct of photosynthesis?",
                            "options": [
                                      "Carbon dioxide",
                                      "Nitrogen",
                                      "Oxygen",
                                      "Hydrogen"
                            ],
                            "answer": 2,
                            "explanation": "Oxygen is released as a byproduct of photosynthesis. This is where Earth's atmospheric oxygen comes from — plants and algae producing it for billions of years."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The Columbian Exchange",
        "emoji": "🌍",
        "imageQuery": "Columbian Exchange map Americas Europe foods plants animals diseases",
        "content": "The **Columbian Exchange** was the massive transfer of plants, animals, and diseases between Europe and the Americas after 1492.\n\n**Europe → Americas:** horses, cattle, pigs, wheat, smallpox, measles\n\n**Americas → Europe:** corn, potatoes, tomatoes, chocolate, tobacco\n\n**The devastating reality:** European diseases killed an estimated **90% of Indigenous populations** — the greatest demographic catastrophe in human history. Indigenous people had zero immunity.",
        "keyFact": "Italy is famous for tomatoes. But before 1492, there were no tomatoes in Europe. They came from the Americas.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the Columbian Exchange?",
                            "options": [
                                      "A trade deal between Columbus and Native Americans",
                                      "The transfer of plants, animals, and diseases between the Americas and Europe after 1492",
                                      "A currency system Columbus created",
                                      "A shipping route for gold only"
                            ],
                            "answer": 1,
                            "explanation": "The Columbian Exchange was the massive transfer of plants, animals, diseases, and people between the Americas and the Old World after Columbus's 1492 voyage."
                  },
                  {
                            "type": "mc",
                            "q": "Which disease devastated Native American populations after European contact?",
                            "options": [
                                      "Malaria",
                                      "Influenza",
                                      "Smallpox",
                                      "Bubonic plague"
                            ],
                            "answer": 2,
                            "explanation": "Smallpox killed up to 90% of some Native populations — they had no immunity. It was the deadliest consequence of the Columbian Exchange."
                  },
                  {
                            "type": "typed",
                            "q": "Name one food from the Americas that changed European diets forever.",
                            "answer": "potato",
                            "placeholder": "Name a food...",
                            "explanation": "Potatoes, tomatoes, corn, chocolate, and peppers all came from the Americas. The potato alone transformed European nutrition and population growth."
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
            "q": "Evaluate 3x + 7 when x = 5",
            "options": [
              "15",
              "22",
              "37",
              "57"
            ],
            "answer": 1,
            "explanation": "3(5) + 7 = 15 + 7 = 22."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Simplify: 5x + 3x - 2x",
            "options": [
              "6x",
              "8x",
              "10x",
              "5x"
            ],
            "answer": 0,
            "explanation": "(5+3-2)x = 6x."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Evaluate 2a - 5b when a=3, b=2",
            "options": [
              "-4",
              "-1",
              "1",
              "4"
            ],
            "answer": 0,
            "explanation": "2(3) - 5(2) = 6 - 10 = -4."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Which are \"like terms\" that can be combined?",
            "options": [
              "3x and 3y",
              "4x² and 4x",
              "7a and 2a",
              "5x and 5"
            ],
            "answer": 2,
            "explanation": "Like terms have same variable AND exponent. 7a + 2a = 9a."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is the main product plants make during photosynthesis?",
            "options": [
              "Oxygen",
              "Water",
              "Glucose (sugar)",
              "CO₂"
            ],
            "answer": 2,
            "explanation": "Glucose is the food plants make. Oxygen is the byproduct."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What do plants take IN during photosynthesis?",
            "options": [
              "Glucose and oxygen",
              "CO₂, water, and sunlight",
              "Nitrogen and phosphorus",
              "ATP and chlorophyll"
            ],
            "answer": 1,
            "explanation": "Plants absorb CO₂ from air, water from roots, and capture sunlight with chlorophyll."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Where does photosynthesis occur inside a plant cell?",
            "options": [
              "Nucleus",
              "Mitochondria",
              "Ribosome",
              "Chloroplast"
            ],
            "answer": 3,
            "explanation": "Chloroplasts contain chlorophyll and are the site of photosynthesis."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why do leaves appear green?",
            "options": [
              "They reflect green light — chlorophyll absorbs red and blue",
              "They absorb all colors equally",
              "They produce green oxygen",
              "Green light gives most energy"
            ],
            "answer": 0,
            "explanation": "Chlorophyll absorbs red and blue light and reflects green — that's why we see green."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "Which food originally came from the Americas?",
            "options": [
              "Wheat",
              "Rice",
              "Potatoes",
              "Grapes"
            ],
            "answer": 2,
            "explanation": "Potatoes, tomatoes, corn, and chocolate all originated in the Americas."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why did European diseases devastate Indigenous populations?",
            "options": [
              "Indigenous people were less healthy",
              "They had no prior immunity to these diseases",
              "Europeans used diseases intentionally",
              "The climate made them vulnerable"
            ],
            "answer": 1,
            "explanation": "Zero prior exposure = zero immunity. Smallpox and measles killed up to 90% of some populations."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What did the Columbian Exchange mean for European cuisine?",
            "options": [
              "Europeans gave up traditional foods",
              "New foods from the Americas transformed European cooking",
              "European food didn't change much",
              "Only wealthy Europeans ate American foods"
            ],
            "answer": 1,
            "explanation": "Potatoes, tomatoes, and corn became staples of European diets — completely transforming cuisines."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The Irish Potato Famine (1845) shows:",
            "options": [
              "Irish people ate too many potatoes",
              "How dependent Europe had become on an American crop",
              "That American crops were nutritionally inferior",
              "Britain's generosity in providing aid"
            ],
            "answer": 1,
            "explanation": "The potato came from South America. Europe's dependence on it caused catastrophic famine when blight struck."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "What has cities but no houses?\nHas mountains but no trees?\nHas water but no fish?\nAnd has roads but no cars?",
        "hint": "Think about something flat you might look at when planning a trip.",
        "minWords": 20,
        "answer": "**A map!** 🗺️\n\nMaps have symbols representing cities, mountains, water, and roads — but none of the actual things.\n\nThis is a great example of representation vs. reality — something we see in math (variables represent numbers) and science (models represent reality)."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🧮",
        "formatName": "Surprise Thatha",
        "partA": {
          "url": "https://native-land.ca",
          "videoTitle": "Native Land Digital",
          "instruction": "Go to native-land.ca and enter your Sammamish address. Find out whose traditional territory you live on."
        },
        "partB": {
          "prompt": "Find ONE fact about that Indigenous nation that you bet Thatha doesn't know. Go tell him.",
          "questions": [
            "What fact did you find?",
            "What was Thatha's reaction?"
          ]
        },
        "writingPrompt": "In at least 50 words: why is it important to know about the Indigenous history of the specific place where you live, not just general US history?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Photosynthesis",
        "prompt": "Explain photosynthesis to someone:\n\n**\"Plants are solar-powered food factories. They take sunlight, CO₂, and water — and make sugar. The leftover? Oxygen. That's what we breathe.\"**\n\nThen:\n1. Ask: \"So where did the oxygen in this room come from?\"\n2. Ask: \"Why do plants need sunlight?\"\n3. Challenge: \"What would happen if all plants disappeared?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Who did you teach? How did they react to the oxygen fact? What did they say about all plants disappearing?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "science",
        "problem": "You are a CO₂ molecule that gets absorbed by a leaf.\n\nWrite your journey through photosynthesis as a first-person story — at least 5 steps. Be scientifically accurate AND dramatic.\n\nStart: \"I was floating through the air when suddenly...\"\n\nEnd at: glucose being used by the plant.",
        "hint": "CO₂ enters through stomata → reaches chloroplasts → combines with water → uses light energy → becomes glucose.",
        "answer": "Should mention: entering through stomata → reaching chloroplasts → combining with water → using light energy → becoming glucose. Creative framing gets full credit."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Feelings — Happy & Sad",
        "newPhrases": [
          {
            "telugu": "నాకు సంతోషంగా ఉంది",
            "romanized": "Naaku santoshangaa undi",
            "english": "I am happy",
            "tip": "Santosham = happiness. Naaku = to me. \"Happiness is to me\" — Telugu emotion phrases work this way."
          },
          {
            "telugu": "నాకు బాధగా ఉంది",
            "romanized": "Naaku baadhagaa undi",
            "english": "I am sad",
            "tip": "Baadha = sadness/pain. Same pattern as happy — just swap the feeling word."
          },
          {
            "telugu": "చాలా బాగుంది!",
            "romanized": "Chaalaa baagundi!",
            "english": "Very good! / Excellent!",
            "tip": "Chaalaa = very. Baagundi = is good. This is your all-purpose positive reaction."
          },
          {
            "telugu": "నాకు తెలవదు",
            "romanized": "Naaku telavadu",
            "english": "I don't know",
            "tip": "\"Naaku telavadu\" is the natural Telangana form (vs \"teliyadu\" which is more formal/Andhra). Super useful when you don't catch something."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Namaskaram",
            "options": [
              "I am Abhi",
              "Hello / Greetings",
              "How are you? (respectful)",
              "I am fine / I am well"
            ],
            "answer": 1,
            "explanation": "Namaskaram = Hello / Greetings."
          },
          {
            "romanized": "Avunu",
            "options": [
              "Hello / Greetings",
              "Yes",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Avunu = Yes."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma one thing making you \"santoshangaa\" today. She will want to know!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 4,
    "title": "Words That Cut Deep",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Two-Step Equations",
        "emoji": "🔢",
        "imageQuery": "two step equation balance scale algebra solving",
        "content": "An equation is a **balance scale** — whatever you do to one side, do to the other.\n\n**Solving two-step equations:**\n3x + 7 = 22\nStep 1: Subtract 7 → 3x = 15\nStep 2: Divide by 3 → **x = 5** ✓\nCheck: 3(5)+7 = 22 ✓\n\n**Rule:** Undo addition/subtraction FIRST, then multiplication/division.\n\n2x - 9 = 11\nAdd 9: 2x = 20 → Divide by 2: **x = 10** ✓",
        "keyFact": "Always check your answer by plugging it back into the original equation.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Solve: 2x + 5 = 13. What is x?",
                            "options": [
                                      "x = 4",
                                      "x = 9",
                                      "x = 3",
                                      "x = 6"
                            ],
                            "answer": 0,
                            "explanation": "Step 1: subtract 5 from both sides: 2x = 8. Step 2: divide by 2: x = 4. Check: 2(4)+5 = 13 ✓"
                  },
                  {
                            "type": "typed",
                            "q": "Solve: 3x - 7 = 14. What is x?",
                            "answer": "7",
                            "placeholder": "Enter the number...",
                            "explanation": "Add 7: 3x = 21. Divide by 3: x = 7. Check: 3(7)-7 = 21-7 = 14 ✓"
                  },
                  {
                            "type": "mc",
                            "q": "What are the two steps to solve 4x + 6 = 22?",
                            "options": [
                                      "Multiply then divide",
                                      "Subtract 6 then divide by 4",
                                      "Add 6 then multiply by 4",
                                      "Divide by 4 then subtract 6"
                            ],
                            "answer": 1,
                            "explanation": "Undo addition first (subtract 6): 4x = 16. Then undo multiplication (divide by 4): x = 4. Always work backwards through order of operations."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Cellular Respiration",
        "emoji": "🔬",
        "imageQuery": "cellular respiration diagram ATP mitochondria glucose oxygen",
        "content": "Photosynthesis makes glucose. **Cellular respiration** uses that glucose to make energy (ATP).\n\n**The equation:**\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + **ATP**\n\nGlucose + Oxygen → CO₂ + Water + **Energy**\n\n**Notice:** This is the OPPOSITE of photosynthesis!\n- Photosynthesis: uses CO₂, makes O₂\n- Respiration: uses O₂, makes CO₂\n\nAll living things do cellular respiration — plants, animals, fungi.",
        "keyFact": "Your cells do cellular respiration right now — that's how they power every heartbeat, thought, and movement.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the main product of cellular respiration?",
                            "options": [
                                      "Glucose",
                                      "Oxygen",
                                      "ATP (energy)",
                                      "Carbon dioxide only"
                            ],
                            "answer": 2,
                            "explanation": "Cellular respiration converts glucose and oxygen into ATP (energy), carbon dioxide, and water. ATP is the cell's usable energy currency."
                  },
                  {
                            "type": "mc",
                            "q": "Where does cellular respiration mainly occur in a cell?",
                            "options": [
                                      "Nucleus",
                                      "Ribosome",
                                      "Cell membrane",
                                      "Mitochondria"
                            ],
                            "answer": 3,
                            "explanation": "The mitochondria are the powerhouses of the cell — they're where most ATP is produced through cellular respiration."
                  },
                  {
                            "type": "typed",
                            "q": "What is the chemical equation's starting molecule for cellular respiration?",
                            "answer": "glucose",
                            "placeholder": "One word...",
                            "explanation": "Cellular respiration: Glucose + Oxygen → ATP + Carbon dioxide + Water. Glucose (sugar) is the fuel that cells burn for energy."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Vivid Writing: Show Don't Tell",
        "emoji": "✍️",
        "imageQuery": "creative writing show dont tell visual comparison",
        "content": "Good writing **shows** rather than tells.\n\n❌ Tell: \"He was scared.\"\n✅ Show: \"His hands wouldn't stop shaking as he read the message.\"\n\n**Three tools:**\n1. **Strong verbs** — \"sprinted\" not \"ran fast\"\n2. **Specific nouns** — \"German Shepherd\" not \"dog\"\n3. **Sensory details** — what does it look, sound, feel, smell like?\n\nThe reader should FEEL the emotion without you naming it.",
        "keyFact": "The best writers never tell you how to feel — they create conditions that make you feel it yourself.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which sentence SHOWS instead of TELLS?",
                            "options": [
                                      "She was nervous.",
                                      "Her hands shook as she gripped the paper, her eyes darting to the door.",
                                      "He felt scared.",
                                      "The boy was sad."
                            ],
                            "answer": 1,
                            "explanation": "'Show don't tell' means using specific sensory details — what we see, hear, feel — instead of just naming emotions. The shaking hands SHOW nervousness."
                  },
                  {
                            "type": "mc",
                            "q": "'The room was messy' is TELLING. Which revision SHOWS it?",
                            "options": [
                                      "The room was very messy.",
                                      "The room was chaotic.",
                                      "Clothes covered every surface, and empty bottles rolled on the floor.",
                                      "It was a really dirty room."
                            ],
                            "answer": 2,
                            "explanation": "Specific, concrete details (clothes on surfaces, rolling bottles) create a vivid picture. Generic adjectives like 'messy' or 'dirty' make readers fill in blanks themselves."
                  },
                  {
                            "type": "typed",
                            "q": "What technique describes using sensory details to create a vivid picture rather than naming emotions?",
                            "answer": "show don't tell",
                            "placeholder": "Show ___ ___",
                            "explanation": "'Show don't tell' is the core principle of vivid writing — let readers experience the emotion through specific details rather than labeling feelings directly."
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
            "q": "Solve: 3x + 4 = 19",
            "options": [
              "x=4",
              "x=5",
              "x=6",
              "x=7"
            ],
            "answer": 1,
            "explanation": "Subtract 4: 3x=15. Divide by 3: x=5."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Solve: 2x - 9 = 11",
            "options": [
              "x=1",
              "x=5",
              "x=10",
              "x=20"
            ],
            "answer": 2,
            "explanation": "Add 9: 2x=20. Divide by 2: x=10."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: x/4 + 3 = 8",
            "options": [
              "x=5",
              "x=15",
              "x=20",
              "x=44"
            ],
            "answer": 2,
            "explanation": "Subtract 3: x/4=5. Multiply by 4: x=20."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "First step to solve 5x + 8 = 23:",
            "options": [
              "Divide by 5",
              "Subtract 8",
              "Multiply by 5",
              "Add 8"
            ],
            "answer": 1,
            "explanation": "Undo addition first: subtract 8 from both sides."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Cellular respiration produces:",
            "options": [
              "Glucose",
              "CO₂, water, and ATP energy",
              "Oxygen",
              "Chlorophyll"
            ],
            "answer": 1,
            "explanation": "Cellular respiration breaks down glucose to produce CO₂, water, and ATP energy."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "All living things perform cellular respiration. True or false?",
            "options": [
              "True",
              "False",
              "Only animals",
              "Only plants"
            ],
            "answer": 0,
            "explanation": "Plants, animals, fungi — all living cells need ATP and all perform cellular respiration."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Photosynthesis and cellular respiration are:",
            "options": [
              "The same process",
              "Identical in inputs/outputs",
              "Essentially opposite reactions",
              "Only found in plants"
            ],
            "answer": 2,
            "explanation": "Photosynthesis uses CO₂ and makes O₂. Respiration uses O₂ and makes CO₂ — essentially reverse equations."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Where does cellular respiration primarily occur?",
            "options": [
              "Nucleus",
              "Cell membrane",
              "Mitochondria",
              "Chloroplast"
            ],
            "answer": 2,
            "explanation": "The mitochondria is where glucose is broken down to make ATP."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "Which sentence SHOWS rather than tells?",
            "options": [
              "She was very excited.",
              "She jumped up and let out a shout, her eyes wide.",
              "She felt excited about the news.",
              "The excited girl was happy."
            ],
            "answer": 1,
            "explanation": "Actions (jumped, shouted, wide eyes) show excitement without using the word."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Which is the strongest specific verb?",
            "options": [
              "walked quickly",
              "ran",
              "sprinted",
              "moved fast"
            ],
            "answer": 2,
            "explanation": "\"Sprinted\" is specific, vivid, powerful. The others are vague."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "\"The dog barked\" vs \"The Doberman snarled.\" Which uses a more specific noun?",
            "options": [
              "First sentence",
              "Second sentence",
              "Equal",
              "Neither"
            ],
            "answer": 1,
            "explanation": "\"Doberman\" creates a precise mental image. \"Dog\" is generic."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "Rewrite: \"The room was messy.\" Which version SHOWS it best?",
            "options": [
              "The room was very very messy.",
              "The messy room was hard to walk through.",
              "Textbooks, clothes, and empty bottles covered every surface.",
              "It was extremely disorganized."
            ],
            "answer": 2,
            "explanation": "Specific details paint the picture without using \"messy\" at all."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "Five pirates find 100 gold coins. They vote on the split. The most senior pirate proposes first. If 50%+ vote YES, it passes. If not, that pirate walks the plank and the next proposes.\n\nAll pirates are perfectly logical and greedy.\n\nWhat split should Pirate 1 propose to MAXIMIZE his gold while surviving?",
        "hint": "Work backwards from 2 pirates remaining. What happens then? Then 3 pirates? Build up to 5.",
        "minWords": 20,
        "answer": "**Pirate 1 proposes: 98, 0, 1, 0, 1**\n\nWork backwards:\n- 2 pirates: Pirate 2 gets 100 — Pirate 3 gets 0. Pirate 3 knows this.\n- 3 pirates: Pirate 3 offers Pirate 4 just 1 coin (better than 0). Keeps 99.\n- 4 pirates: Pirate 4 offers Pirates 2 and 5 each 1 coin. Wait...\n- 5 pirates: Pirate 1 needs just 2 votes. Offers Pirates 3 and 5 each 1 more than they'd get otherwise.\n\nResult: **Pirate 1 keeps 98 coins!** 🏴‍☠️"
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🎨",
        "formatName": "Create Something",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Write a 4-6 line rap or poem about cellular respiration OR photosynthesis. Must be scientifically accurate AND include at least 2 specific terms from today's lesson."
        },
        "partB": {
          "prompt": "Perform it for someone in your family. Teach them one science fact through your lyrics.",
          "questions": [
            "Write your rap/poem here in full.",
            "What was the family member's reaction?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain why photosynthesis and cellular respiration being opposites of each other is actually a beautiful design for life on Earth.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Show Don't Tell Writing",
        "prompt": "Do a live experiment with someone:\n\n1. Read them: \"She was nervous.\"\n2. Ask how clear the picture is.\n3. Read: \"Her leg bounced under the table and she checked her phone three times in one minute.\"\n4. Ask: \"Which one made you picture it better?\"\n\nThen write your OWN show-don't-tell sentence and test it 📝",
        "followUp": "What sentence did you write? What was their reaction comparing the two versions?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "ela",
        "problem": "Write exactly **6 sentences** about a sorcerer preparing for their first real battle.\n\n**Rules:**\n- ZERO emotion words (no scared, nervous, excited, confident, angry)\n- At least one strong specific verb per sentence\n- At least one sensory detail per sentence\n- Make us FEEL what the sorcerer feels through action and detail only",
        "hint": "Think about physical reactions: heartbeat, breathing, hands, posture, sweat, vision.",
        "answer": "Should have: no emotion words, strong verbs, sensory details, 6 sentences creating clear emotion through showing."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Tired, Hungry, Thirsty",
        "newPhrases": [
          {
            "telugu": "నాకు నిద్ర వస్తుంది",
            "romanized": "Naaku nidra vastundi",
            "english": "I am sleepy",
            "tip": "Nidra = sleep. Vastundi = is coming. \"Sleep is coming to me\" — how Telugu describes physical states."
          },
          {
            "telugu": "నాకు ఆకలిగా ఉంది",
            "romanized": "Naaku aakaligaa undi",
            "english": "I am hungry",
            "tip": "Aakali = hunger. Tell great-grandma this and she'll probably want to send food somehow!"
          },
          {
            "telugu": "నాకు దాహంగా ఉంది",
            "romanized": "Naaku daahangaa undi",
            "english": "I am thirsty",
            "tip": "Daaham = thirst. Notice the pattern: Naaku + [feeling] + gaa + undi = I feel [feeling]."
          },
          {
            "telugu": "నేను అలసిపోయా",
            "romanized": "Nenu alasipooyaa",
            "english": "I am tired",
            "tip": "\"Alasipooyaa\" is the Telangana way — shorter ending than \"alasipooyaanu.\" Sounds natural and local."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Namaskaram",
            "options": [
              "I am Abhi",
              "Hello / Greetings",
              "How are you? (respectful)",
              "I am fine / I am well"
            ],
            "answer": 1,
            "explanation": "Namaskaram = Hello / Greetings."
          },
          {
            "romanized": "Sare",
            "options": [
              "Hello / Greetings",
              "Okay / Alright",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Sare = Okay / Alright."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Next meal, tell Amma you're hungry in Telugu before saying it in English. See her reaction!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 5,
    "title": "Both Sides Now",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Variables on Both Sides",
        "emoji": "🔢",
        "imageQuery": "algebra equations variables both sides balance solve",
        "content": "When variables appear on BOTH sides, collect them first:\n\n5x + 3 = 2x + 12\nSubtract 2x from both sides: 3x + 3 = 12\nSubtract 3: 3x = 9\nDivide by 3: **x = 3** ✓\nCheck: 5(3)+3=18, 2(3)+12=18 ✓\n\n**Watch negatives:**\n7 - 2x = x + 1\nSubtract x: 7 - 3x = 1\nSubtract 7: -3x = -6\nDivide by -3: **x = 2** ✓",
        "keyFact": "Move variable terms to one side, constant terms to the other — before solving.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Solve: 5x + 3 = 2x + 12. What is x?",
                            "options": [
                                      "x = 3",
                                      "x = 5",
                                      "x = 4",
                                      "x = 9"
                            ],
                            "answer": 0,
                            "explanation": "Subtract 2x: 3x + 3 = 12. Subtract 3: 3x = 9. Divide by 3: x = 3. Check: 5(3)+3=18, 2(3)+12=18 ✓"
                  },
                  {
                            "type": "mc",
                            "q": "What is the first step to solve 4x - 6 = 2x + 8?",
                            "options": [
                                      "Divide both sides by 4",
                                      "Collect x terms on one side",
                                      "Add 6 to the right side only",
                                      "Multiply everything by 2"
                            ],
                            "answer": 1,
                            "explanation": "Collect variable terms on one side first: subtract 2x from both sides to get 2x - 6 = 8, then solve from there."
                  },
                  {
                            "type": "typed",
                            "q": "Solve: 7x - 4 = 3x + 16. What is x?",
                            "answer": "5",
                            "placeholder": "Enter the number...",
                            "explanation": "7x - 3x = 16 + 4 → 4x = 20 → x = 5. Check: 7(5)-4=31, 3(5)+16=31 ✓"
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Ecosystems & Food Chains",
        "emoji": "🌿",
        "imageQuery": "food chain ecosystem energy pyramid producers consumers decomposers",
        "content": "An **ecosystem** is all living and non-living things in an area interacting together.\n\n**Food chain roles:**\n- **Producers** — plants (make food via photosynthesis)\n- **Primary consumers** — eat plants (rabbits, deer)\n- **Secondary consumers** — eat primary consumers (foxes, snakes)\n- **Tertiary consumers** — top predators (eagles, wolves)\n- **Decomposers** — break down dead matter (fungi, bacteria)\n\n**The 10% rule:** Only 10% of energy transfers up each level. That's why there are always more rabbits than foxes.",
        "keyFact": "Remove any single organism from a food chain and the effects ripple through the entire ecosystem.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In a food chain: Grass → Rabbit → Fox → Eagle. What is the grass?",
                            "options": [
                                      "Consumer",
                                      "Predator",
                                      "Producer",
                                      "Decomposer"
                            ],
                            "answer": 2,
                            "explanation": "Grass is a producer — it makes its own food through photosynthesis. All other organisms in the chain are consumers that eat other organisms."
                  },
                  {
                            "type": "mc",
                            "q": "What happens to energy as it moves up a food chain?",
                            "options": [
                                      "It doubles",
                                      "It stays the same",
                                      "About 90% is lost at each level",
                                      "It increases slowly"
                            ],
                            "answer": 2,
                            "explanation": "Only about 10% of energy transfers to the next level — 90% is lost as heat. This is why food chains rarely have more than 4-5 levels."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call organisms that break down dead material and return nutrients to the soil?",
                            "answer": "decomposers",
                            "placeholder": "One word...",
                            "explanation": "Decomposers (fungi, bacteria, worms) break down dead organisms, returning nutrients to the soil — completing the nutrient cycle."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The 13 Colonies",
        "emoji": "🏛️",
        "imageQuery": "13 colonies map New England Middle Southern colonial America",
        "content": "By 1733, Britain had 13 American colonies in three regions:\n\n**New England** (MA, CT, RI, NH): Rocky soil, cold winters → fishing, shipbuilding, trade\n\n**Middle Colonies** (NY, PA, NJ, DE): Rich soil, diverse population → farming, religious tolerance\n\n**Southern Colonies** (VA, MD, NC, SC, GA): Warm climate → tobacco, rice, indigo\n→ **Relied heavily on enslaved labor**\n\nEach region developed its own economy — setting the stage for later tensions.",
        "keyFact": "Pennsylvania was founded by Quaker William Penn as a colony based on religious tolerance — radical for its time.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Into which three regions were the 13 colonies divided?",
                            "options": [
                                      "East, Central, West",
                                      "North, Central, South",
                                      "New England, Middle, Southern",
                                      "Atlantic, Inland, Coastal"
                            ],
                            "answer": 2,
                            "explanation": "The 13 colonies were grouped as New England (north), Middle colonies, and Southern colonies — each with distinct economies, climates, and cultures."
                  },
                  {
                            "type": "mc",
                            "q": "Which colony was founded as a refuge for Catholics?",
                            "options": [
                                      "Virginia",
                                      "Massachusetts",
                                      "Maryland",
                                      "Pennsylvania"
                            ],
                            "answer": 2,
                            "explanation": "Maryland was founded in 1632 as a haven for English Catholics. Pennsylvania was founded for Quakers, Massachusetts for Puritans."
                  },
                  {
                            "type": "typed",
                            "q": "What was the primary cash crop of the Southern colonies?",
                            "answer": "tobacco",
                            "placeholder": "Name the crop...",
                            "explanation": "Tobacco was the main cash crop of Virginia and other Southern colonies — its labor-intensive cultivation drove the expansion of enslaved labor in the region."
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
            "q": "Solve: 5x + 3 = 2x + 12",
            "options": [
              "x=2",
              "x=3",
              "x=4",
              "x=5"
            ],
            "answer": 1,
            "explanation": "Subtract 2x: 3x+3=12. Subtract 3: 3x=9. x=3."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Solve: 4x - 1 = 2x + 9",
            "options": [
              "x=4",
              "x=5",
              "x=6",
              "x=10"
            ],
            "answer": 1,
            "explanation": "Subtract 2x: 2x-1=9. Add 1: 2x=10. x=5."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: 7 - 2x = x + 1",
            "options": [
              "x=1",
              "x=2",
              "x=3",
              "x=6"
            ],
            "answer": 1,
            "explanation": "Subtract x: 7-3x=1. Subtract 7: -3x=-6. x=2."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: 3(x + 2) = 2x + 10",
            "options": [
              "x=2",
              "x=4",
              "x=6",
              "x=8"
            ],
            "answer": 1,
            "explanation": "Distribute: 3x+6=2x+10. Subtract 2x: x+6=10. x=4."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "In a food chain, what do PRODUCERS do?",
            "options": [
              "Hunt other animals",
              "Make food from sunlight via photosynthesis",
              "Break down dead organisms",
              "Eat primary consumers"
            ],
            "answer": 1,
            "explanation": "Producers (plants, algae) create energy from sunlight — the base of every food chain."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Why are there always more rabbits than foxes?",
            "options": [
              "Foxes reproduce slower",
              "Rabbits are stronger",
              "Only 10% of energy transfers up each food chain level",
              "Foxes eat other things"
            ],
            "answer": 2,
            "explanation": "The 10% rule means energy is lost at every level — fewer organisms at higher levels."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What happens if all decomposers disappeared?",
            "options": [
              "Nothing significant",
              "Predators increase",
              "Dead matter piles up and nutrients don't cycle back",
              "Plants grow faster"
            ],
            "answer": 2,
            "explanation": "Decomposers recycle nutrients from dead matter. Without them, nutrients lock in dead organisms."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "A wolf is removed from Yellowstone. What most likely happens FIRST?",
            "options": [
              "Plants die",
              "Elk population increases dramatically",
              "Fish disappear",
              "Decomposers take over"
            ],
            "answer": 1,
            "explanation": "With no predator, elk populations explode — then overgraze vegetation."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "Which colonial region was called the \"breadbasket\"?",
            "options": [
              "New England",
              "Middle Colonies",
              "Southern Colonies",
              "Western Territories"
            ],
            "answer": 1,
            "explanation": "The Middle Colonies had rich soil and favorable climate for grain farming."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why did Southern colonies rely on enslaved labor?",
            "options": [
              "They had more land",
              "Climate and crops required massive labor forces",
              "Fewer European immigrants",
              "Britain required it"
            ],
            "answer": 1,
            "explanation": "Large-scale tobacco and rice cultivation required enormous labor — met through the horrific system of slavery."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What made Pennsylvania unusual among colonies?",
            "options": [
              "It was the first colony",
              "Founded on religious tolerance by Quaker William Penn",
              "It had no slavery",
              "It was the largest"
            ],
            "answer": 1,
            "explanation": "William Penn established Pennsylvania as a haven of religious tolerance."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The three colonial regions developing different economies eventually led to:",
            "options": [
              "Peaceful cooperation",
              "Sectional tensions contributing to the Civil War",
              "Each region becoming independent",
              "Britain favoring New England"
            ],
            "answer": 1,
            "explanation": "The North's industrial economy and the South's plantation economy created tensions that led to Civil War."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A school bus is 8 feet wide, 20 feet long, 6 feet tall inside.\nA golf ball is 1.68 inches in diameter.\n\nAbout how many golf balls fit inside the school bus?\n\nDon't just guess — show your estimation reasoning step by step.",
        "hint": "Calculate volume of bus in cubic inches. Calculate volume of golf ball. Divide — but balls don't pack perfectly (~64% efficiency).",
        "minWords": 20,
        "answer": "**Step 1:** Bus volume = 8×20×6 = 960 ft³ = 960 × 1,728 = 1,658,880 in³\n\n**Step 2:** Golf ball volume = (4/3)π(0.84)³ ≈ 2.48 in³\n\n**Step 3:** Max balls = 1,658,880 ÷ 2.48 ≈ 669,000\n\n**Step 4:** Packing efficiency ~64%: 669,000 × 0.64 ≈ **~500,000 golf balls**\n\nThis type of reasoning — Fermi estimation — is used by scientists and engineers constantly."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🔍",
        "formatName": "Spot It In The Wild",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find 3 real-world examples of negative numbers before tomorrow. Look: thermometers, bank statements, elevation signs, weather apps, sports scores, building floors."
        },
        "partB": {
          "prompt": "Photograph, screenshot, or describe each one you find.",
          "questions": [
            "What 3 examples of negative numbers did you find?",
            "Which one surprised you most — where you didn't expect negatives?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain why negative numbers are necessary in the real world. Use your 3 specific examples as evidence.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Food Chains & Ecosystems",
        "prompt": "Explain the 10% energy rule to someone:\n\n**\"Only 10% of energy passes up each level. So if grass has 1,000 units, rabbits get 100, foxes get 10, eagles get 1.\"**\n\nThen ask them:\n1. \"Why are there more rabbits than foxes?\"\n2. \"What would happen if we removed all the foxes?\"\n3. Draw a simple energy pyramid together\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Who did you teach? Did the 10% rule surprise them? What did they predict about removing foxes?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Two sorcerers run toward each other from opposite ends of a 100-meter training field. Sorcerer A runs at 6 m/s. Sorcerer B runs at 4 m/s.\n\n**Part A:** Write an equation for when they meet. Let t = time in seconds.\n\n**Part B:** How far has each run when they meet?\n\n**Part C — Thatha Level 🧮:** Sorcerer B gets a 2-second head start. Write new equations and find when A catches B.",
        "hint": "Part A: A covers 6t meters, B covers 4t meters. They meet when 6t + 4t = 100.",
        "answer": "Part A: 10t=100 → t=10 sec. Part B: A=60m, B=40m. Part C: B starts 2 sec early → covered 8m. 6t=4t+8 → 2t=8 → t=4 sec from A's start."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Please, Sorry & Ask Again",
        "newPhrases": [
          {
            "telugu": "దయచేసి",
            "romanized": "Dayachesi",
            "english": "Please",
            "tip": "Put this before any request. Dayachesi = with kindness/grace."
          },
          {
            "telugu": "క్షమించండి",
            "romanized": "Kshaminchaṇḍi",
            "english": "Sorry / Excuse me (respectful)",
            "tip": "The respectful form of sorry — always use this with elders, never the casual form."
          },
          {
            "telugu": "మళ్ళీ చెప్పండి",
            "romanized": "Mallii cheppaṇḍi",
            "english": "Please say again (respectful)",
            "tip": "Mallii = again. Cheppaṇḍi = please say. Use this whenever great-grandma speaks too fast."
          },
          {
            "telugu": "నెమ్మదిగా చెప్పండి",
            "romanized": "Nemmadiga cheppaṇḍi",
            "english": "Please speak slowly",
            "tip": "Nemmadiga = slowly/gently. Essential when you're still learning. She won't mind at all."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Namaskaram",
            "options": [
              "I am Abhi",
              "Hello / Greetings",
              "How are you? (respectful)",
              "I am fine / I am well"
            ],
            "answer": 1,
            "explanation": "Namaskaram = Hello / Greetings."
          },
          {
            "romanized": "Arthamaindi",
            "options": [
              "Hello / Greetings",
              "I understand / Got it",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Arthamaindi = I understand / Got it."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "In today's call, intentionally ask great-grandma to slow down or repeat something using these phrases. Practice using them for real.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  }
];
