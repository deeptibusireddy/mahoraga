export const days6to10 = [
  {
    "id": 6,
    "title": "Ecosystem Domain",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Inequalities",
        "emoji": "🔢",
        "imageQuery": "inequality number line math greater less than graph",
        "content": "An **inequality** compares values that aren't equal.\nSymbols: > (greater), < (less), ≥ (or equal), ≤ (or equal)\n\n**Solving — same as equations EXCEPT:**\nIf you multiply or divide by a **negative number**, FLIP the sign!\n\nx + 5 > 12 → x > 7 ✓\n-2x < 8 → x > -4 ✓ (flipped — divided by -2)\n\n**Graphing:** Open circle (>, <), closed circle (≥, ≤), shade the solution.",
        "keyFact": "Dividing by a negative flips the inequality — the most common algebra mistake. Always remember this.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which inequality symbol means 'greater than or equal to'?",
                            "options": [
                                      "<",
                                      "≤",
                                      ">",
                                      "≥"
                            ],
                            "answer": 3,
                            "explanation": "≥ means 'greater than or equal to.' ≤ means 'less than or equal to.'"
                  },
                  {
                            "type": "mc",
                            "q": "Solve: x + 5 > 12. What is x?",
                            "options": [
                                      "x > 7",
                                      "x > 17",
                                      "x < 7",
                                      "x = 7"
                            ],
                            "answer": 0,
                            "explanation": "Subtract 5 from both sides: x > 12 - 5, so x > 7."
                  },
                  {
                            "type": "typed",
                            "q": "If you flip an inequality, what happens to the symbol? (hint: when you multiply or divide by a negative)",
                            "answer": "flips",
                            "placeholder": "What happens to the symbol?",
                            "explanation": "Multiplying or dividing both sides by a negative number flips the inequality — > becomes <."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Biomes of the World",
        "emoji": "🌍",
        "imageQuery": "world biomes map tropical rainforest desert tundra grassland",
        "content": "A **mahoraga** is a large region sharing similar climate, plants, and animals.\n\n**Major mahoragas:**\n- 🌧️ **Tropical Rainforest** — highest biodiversity, 12+ feet of rain/year\n- 🌾 **Grassland/Savanna** — seasonal rain, large herds\n- 🏜️ **Desert** — less than 10 inches rain/year\n- ❄️ **Tundra** — frozen soil (permafrost), short summers\n- 🌲 **Temperate Forest** — 4 seasons, moderate climate\n- 🌊 **Ocean** — covers 71% of Earth\n\n**You live in:** Temperate Rainforest — Pacific Northwest!",
        "keyFact": "The Amazon rainforest produces 20% of Earth's oxygen and contains 10% of all species on the planet.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which biome receives the least rainfall?",
                            "options": [
                                      "Rainforest",
                                      "Grassland",
                                      "Desert",
                                      "Tundra"
                            ],
                            "answer": 2,
                            "explanation": "Deserts receive less than 25cm of rain per year — the driest biome. The Sahara and Antarctic ice sheet are both classified as deserts."
                  },
                  {
                            "type": "mc",
                            "q": "What makes a biome different from an ecosystem?",
                            "options": [
                                      "Biomes are smaller",
                                      "Biomes are large regions defined by climate and dominant vegetation; ecosystems are specific communities",
                                      "They are the same thing",
                                      "Ecosystems include more animals"
                            ],
                            "answer": 1,
                            "explanation": "Biomes are large-scale regions (tropical rainforest, tundra) defined by climate patterns. Ecosystems are specific communities of organisms and their environment."
                  },
                  {
                            "type": "typed",
                            "q": "What biome covers most of Canada and Russia with permafrost and low-growing plants?",
                            "answer": "tundra",
                            "placeholder": "One word...",
                            "explanation": "The tundra is characterized by permafrost (permanently frozen ground), short growing seasons, and plants like mosses and lichens."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Colonial Economy & Slavery",
        "emoji": "⛓️",
        "imageQuery": "colonial slavery America plantation tobacco 1700s historical",
        "content": "The colonial economy was built largely on enslaved labor.\n\n**By the numbers:**\n- ~500,000 enslaved Africans brought to the 13 colonies\n- Enslaved people made up 20% of the colonial population by 1770\n- Virginia planters grew wealthy from tobacco picked by enslaved workers\n\n**The legal framework:** Enslaved people were legally classified as property. No rights. Families routinely separated and sold.\n\n**Resistance:** Enslaved people resisted constantly — work slowdowns, preserving culture, escape attempts, revolts.",
        "keyFact": "The wealth of many prominent Founders — including Washington and Jefferson — came directly from enslaved labor.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the 'Triangle Trade'?",
                            "options": [
                                      "Trade between 3 Native tribes",
                                      "Trade route between Americas, Africa, and Europe",
                                      "Trade between 3 colonial cities",
                                      "Trade of 3 goods only"
                            ],
                            "answer": 1,
                            "explanation": "The Triangle Trade connected the Americas, Africa, and Europe — enslaved people from Africa, raw goods from Americas, finished goods from Europe."
                  },
                  {
                            "type": "mc",
                            "q": "Which colonial region relied most heavily on enslaved labor for large plantations?",
                            "options": [
                                      "New England",
                                      "Middle colonies",
                                      "Southern colonies",
                                      "Western territories"
                            ],
                            "answer": 2,
                            "explanation": "Southern colonies like Virginia and South Carolina had large tobacco and rice plantations that relied heavily on enslaved people."
                  },
                  {
                            "type": "typed",
                            "q": "What cash crop made Virginia colonists wealthy?",
                            "answer": "tobacco",
                            "placeholder": "Name the crop...",
                            "explanation": "Tobacco was Virginia's most valuable export and the foundation of its colonial economy."
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
            "q": "Solve: x + 5 > 12",
            "options": [
              "x>7",
              "x<7",
              "x>17",
              "x<17"
            ],
            "answer": 0,
            "explanation": "Subtract 5: x > 7."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Solve: -2x < 8",
            "options": [
              "x<-4",
              "x>-4",
              "x<4",
              "x>4"
            ],
            "answer": 1,
            "explanation": "Divide by -2 and FLIP: x > -4."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: 3x - 6 ≥ 9",
            "options": [
              "x≥1",
              "x≥5",
              "x≤5",
              "x≥15"
            ],
            "answer": 1,
            "explanation": "Add 6: 3x≥15. Divide by 3: x≥5."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Which value satisfies 2x - 3 < 7?",
            "options": [
              "x=6",
              "x=5",
              "x=4",
              "x=8"
            ],
            "answer": 2,
            "explanation": "2(4)-3=5 < 7 ✓. x=5: 2(5)-3=7, not less than 7."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Which mahoraga has the highest biodiversity?",
            "options": [
              "Desert",
              "Tundra",
              "Tropical Rainforest",
              "Ocean"
            ],
            "answer": 2,
            "explanation": "Tropical rainforests cover only 6% of Earth but contain over 50% of species."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What mahoraga do you most likely live in near Seattle?",
            "options": [
              "Desert",
              "Tropical Rainforest",
              "Temperate Forest/Rainforest",
              "Tundra"
            ],
            "answer": 2,
            "explanation": "The Pacific Northwest has a temperate rainforest climate — mild, wet, abundant conifers."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What is permafrost?",
            "options": [
              "Permanent ice on mountains",
              "Frozen soil that stays frozen year-round in tundra",
              "A type of desert rock",
              "Ice caps at poles"
            ],
            "answer": 1,
            "explanation": "Permafrost is permanently frozen ground in tundra. Climate change is causing it to thaw, releasing methane."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why does the desert have less biodiversity than rainforests?",
            "options": [
              "Deserts are newer",
              "Limited water severely limits what can survive",
              "Deserts are too cold",
              "Desert soil has no nutrients"
            ],
            "answer": 1,
            "explanation": "Water is essential for life. Desert's scarce water means only specially adapted organisms survive."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "About what percentage of colonial population was enslaved by 1770?",
            "options": [
              "2%",
              "10%",
              "20%",
              "50%"
            ],
            "answer": 2,
            "explanation": "About 20% of the colonial population was enslaved — nearly all in Southern colonies."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "How were enslaved people classified under colonial law?",
            "options": [
              "As indentured servants",
              "As citizens with limited rights",
              "As property with no legal rights",
              "As temporary workers"
            ],
            "answer": 2,
            "explanation": "Enslaved people were legally classified as property — could be bought, sold, separated from family."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "How did enslaved people resist?",
            "options": [
              "They generally didn't",
              "Only through violent revolts",
              "Work slowdowns, preserving culture, escapes, and revolts",
              "Only by escaping north"
            ],
            "answer": 2,
            "explanation": "Resistance was constant — subtle (slowdowns, breaking tools) to open (revolts, escapes)."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Founders like Washington and Jefferson enslaved people while writing about liberty. This fact:",
            "options": [
              "Doesn't matter — political ideas stand alone",
              "Makes their contributions worthless",
              "Makes their ideals about liberty deeply complicated and contradictory",
              "Has no relevance to history"
            ],
            "answer": 2,
            "explanation": "People can hold great ideals and act in profound contradiction to them. Understanding this complexity is essential history."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A farmer needs to cross a river with a fox, a chicken, and a bag of grain.\n\nHis boat only holds him and ONE thing at a time.\n\nIf left alone: the fox eats the chicken. The chicken eats the grain.\n\nHow does he get everything across safely?",
        "hint": "The key insight: you can take something BACK across. Most people forget this option.",
        "minWords": 20,
        "answer": "1. Take chicken across → leave it\n2. Go back alone\n3. Take fox across → bring **chicken BACK** (key insight!)\n4. Leave chicken, take grain across with fox\n5. Go back alone\n6. Take chicken across\n\n**Done!** ✓\n\nThe insight most people miss: you can take something BACK. That's what makes this solvable."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🌿",
        "formatName": "Go Outside",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Go outside for 10 minutes. Look like a scientist. List: 3 biotic (living) things and 3 abiotic (non-living) things. Look for at least one example of something eating or decomposing."
        },
        "partB": {
          "prompt": "Search: \"Pacific Northwest keystone species\" — find one animal that holds the local ecosystem together.",
          "questions": [
            "What 3 biotic and 3 abiotic things did you observe outside?",
            "What Pacific Northwest keystone species did you find and why is it important?"
          ]
        },
        "writingPrompt": "In at least 50 words: describe what you observed outside using biotic, abiotic, and ecosystem correctly. What would change if one organism you observed disappeared?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Biomes",
        "prompt": "Tell a family member about the mahoraga they live in:\n\n**\"We live in a Temperate Rainforest mahoraga — that's why it rains so much and why there are tall trees everywhere. Compare that to a desert, which gets less than 10 inches of rain per year.\"**\n\nThen:\n1. Ask: \"Which mahoraga would you want to live in?\"\n2. Explain why biodiversity matters\n3. Connect to the Amazon — why is losing it a big deal?\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Which mahoraga did they pick? How did you explain biodiversity? What surprised them about the Amazon?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "science",
        "problem": "You are a conservation scientist. Choose ONE mahoraga under threat:\n- Tropical Rainforest (Amazon)\n- Coral Reef (Great Barrier Reef)\n- Arctic Tundra\n\n**Design a 3-step conservation plan:**\n1. Identify the ROOT cause of the threat\n2. One immediate action + one long-term action\n3. How you would measure success after 5 years\n\nUse at least 3 scientific terms from your lessons.",
        "hint": "Root causes are specific: not just \"pollution\" but \"agricultural runoff.\" Not just \"climate change\" but \"methane from thawing permafrost.\"",
        "answer": "Should show: specific root cause, differentiated short/long-term actions, measurable success criteria, correct scientific vocabulary."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Family Words",
        "newPhrases": [
          {
            "telugu": "అమ్మ",
            "romanized": "Amma",
            "english": "Mom",
            "tip": "You know this one! But say it in Telugu today."
          },
          {
            "telugu": "నాన్న",
            "romanized": "Naanna",
            "english": "Dad",
            "tip": "Naanna — easy and warm."
          },
          {
            "telugu": "అమ్మమ్మ",
            "romanized": "Ammamma",
            "english": "Maternal grandmother",
            "tip": "Your Ammamma — the reason you're learning Telugu!"
          },
          {
            "telugu": "తాత",
            "romanized": "Thaatha",
            "english": "Grandfather",
            "tip": "Thaatha — your Thatha, the math master."
          },
          {
            "telugu": "మా అందరూ",
            "romanized": "Maa andaruu",
            "english": "All of us / Our whole family",
            "tip": "Maa = our. Andaruu = everyone/all. \"Maa andaruu\" = all of us together."
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
            "romanized": "Naaku baadhagaa undi",
            "options": [
              "Hello / Greetings",
              "I am sad",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Naaku baadhagaa undi = I am sad."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma about your family using these words: \"Maa andaruu Amma, Naanna, Ammamma, Thaatha...\" Add anyone else!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 7,
    "title": "Road to Revolution",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "The Coordinate Plane",
        "emoji": "🔢",
        "imageQuery": "coordinate plane grid x y axis quadrants points plotting",
        "content": "The coordinate plane has two axes:\n- **x-axis** — horizontal\n- **y-axis** — vertical\n- **Origin** — (0,0) where they meet\n\n**Plotting points (x, y):**\n(3, 4) → right 3, up 4\n(-2, 5) → left 2, up 5\n(4, -3) → right 4, down 3\n\n**Four quadrants:**\n- Q1: (+,+) | Q2: (-,+) | Q3: (-,-) | Q4: (+,-)",
        "keyFact": "Every GPS coordinate on Earth is just a point on a massive coordinate plane — latitude (y) and longitude (x).",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What are the coordinates of the origin?",
                            "options": [
                                      "(1,1)",
                                      "(0,1)",
                                      "(0,0)",
                                      "(1,0)"
                            ],
                            "answer": 2,
                            "explanation": "The origin is where the x-axis and y-axis intersect — always at (0,0). Every other point is measured from this starting point."
                  },
                  {
                            "type": "typed",
                            "q": "In the point (3, -4), which quadrant is it in?",
                            "answer": "IV",
                            "placeholder": "Which quadrant? (I, II, III, or IV)",
                            "explanation": "Quadrant IV: positive x, negative y. The quadrants go counterclockwise: I (+,+), II (-,+), III (-,-), IV (+,-)."
                  },
                  {
                            "type": "mc",
                            "q": "To plot point (-2, 5), you move...",
                            "options": [
                                      "Right 2, up 5",
                                      "Left 2, up 5",
                                      "Right 2, down 5",
                                      "Left 2, down 5"
                            ],
                            "answer": 1,
                            "explanation": "(x, y) = (-2, 5): negative x means left 2, positive y means up 5. Always move horizontally first, then vertically."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Food Webs & Ecological Relationships",
        "emoji": "🌿",
        "imageQuery": "food web ecosystem arrows energy flow species relationships",
        "content": "A **food web** shows ALL feeding relationships in an ecosystem — more realistic than a single chain.\n\n**Ecological relationships:**\n- **Predation** — one eats another (+/-)\n- **Mutualism** — both benefit (+/+): bees and flowers\n- **Commensalism** — one benefits, other unaffected (+/0)\n- **Parasitism** — one benefits, other harmed (+/-): ticks on deer\n\n**Keystone species:** Remove it → ecosystem collapses.\nSea otters eat urchins → protect kelp forests → support entire ocean ecosystems.",
        "keyFact": "Wolves reintroduced to Yellowstone in 1995 changed river courses. One species affected the geography.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What happens to a food web if a keystone species is removed?",
                            "options": [
                                      "Nothing changes",
                                      "Only predators are affected",
                                      "The whole ecosystem can collapse",
                                      "Only prey are affected"
                            ],
                            "answer": 2,
                            "explanation": "Keystone species hold ecosystems together. Remove them and the whole food web can collapse — like removing a keystone from an arch."
                  },
                  {
                            "type": "mc",
                            "q": "In a food web, energy flows from...",
                            "options": [
                                      "Consumers to producers",
                                      "Producers to consumers",
                                      "Decomposers to producers",
                                      "Prey to predators"
                            ],
                            "answer": 1,
                            "explanation": "Energy always flows from producers (plants) to consumers (animals). Each level loses about 90% of energy as heat."
                  },
                  {
                            "type": "typed",
                            "q": "What is the term for an organism that makes its own food using sunlight?",
                            "answer": "producer",
                            "placeholder": "One word...",
                            "explanation": "Producers (like plants) use photosynthesis to make food. All other organisms in the food web depend on them."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Road to Revolution",
        "emoji": "🏛️",
        "imageQuery": "Boston Tea Party 1773 colonial protest taxation British ships harbor",
        "content": "After the French and Indian War (1763), Britain was in debt and taxed the colonies.\n\n**Key events:**\n- **Stamp Act (1765)** — taxed all paper. \"No taxation without representation!\"\n- **Boston Massacre (1770)** — 5 colonists killed by British soldiers\n- **Tea Act & Boston Tea Party (1773)** — Colonists dumped 342 chests of tea into Boston Harbor\n- **Intolerable Acts (1774)** — Britain closed Boston Harbor\n- **First Continental Congress (1774)** — Colonies unite",
        "keyFact": "Paul Revere's \"Boston Massacre\" painting was propaganda — he exaggerated British brutality to inflame colonial opinion.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the colonial rallying cry against British taxation?",
                            "options": [
                                      "No freedom without liberty",
                                      "No taxation without representation",
                                      "Freedom or death",
                                      "Unite or die"
                            ],
                            "answer": 1,
                            "explanation": "'No taxation without representation' meant colonists refused to be taxed by a Parliament where they had no elected voice — a core grievance leading to revolution."
                  },
                  {
                            "type": "mc",
                            "q": "What did colonists do at the Boston Tea Party?",
                            "options": [
                                      "Refused to pay taxes",
                                      "Attacked British soldiers",
                                      "Dumped 342 chests of British tea into Boston Harbor",
                                      "Signed a declaration of independence"
                            ],
                            "answer": 2,
                            "explanation": "On December 16, 1773, colonists (the Sons of Liberty) boarded British ships and dumped 342 chests of tea into Boston Harbor to protest the Tea Act."
                  },
                  {
                            "type": "typed",
                            "q": "What was the first organized meeting of colonial representatives in 1774 called?",
                            "answer": "First Continental Congress",
                            "placeholder": "Name the meeting...",
                            "explanation": "The First Continental Congress (1774) united 12 colonies in response to the Intolerable Acts — the first major step toward colonial unity and eventually independence."
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
            "q": "Point 3 right and 5 up from origin?",
            "options": [
              "(5,3)",
              "(3,5)",
              "(-3,5)",
              "(3,-5)"
            ],
            "answer": 1,
            "explanation": "x=3 (right), y=5 (up) → (3,5)."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "In which quadrant is (-3, 4)?",
            "options": [
              "Q1",
              "Q2",
              "Q3",
              "Q4"
            ],
            "answer": 1,
            "explanation": "Negative x, positive y → Quadrant II."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Distance between (2,3) and (2,8)?",
            "options": [
              "2",
              "5",
              "10",
              "13"
            ],
            "answer": 1,
            "explanation": "Same x → vertical line. Distance = |8-3| = 5."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Which point is in Quadrant III?",
            "options": [
              "(3,4)",
              "(-2,5)",
              "(-3,-4)",
              "(5,-2)"
            ],
            "answer": 2,
            "explanation": "Q3 has both x and y negative: (-3,-4)."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Difference between food chain and food web?",
            "options": [
              "Same thing",
              "Food web shows ALL feeding relationships, not just one path",
              "Food chain includes more species",
              "Food web is simpler"
            ],
            "answer": 1,
            "explanation": "Food chains show one path. Food webs show the complex network of all relationships."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Bees pollinate flowers and get nectar. This relationship is:",
            "options": [
              "Parasitism",
              "Predation",
              "Mutualism",
              "Commensalism"
            ],
            "answer": 2,
            "explanation": "Both benefit (+/+) → Mutualism."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "A keystone species is removed. What happens?",
            "options": [
              "Nothing significant",
              "Only predators affected",
              "Dramatic cascading changes through the ecosystem",
              "Only prey affected"
            ],
            "answer": 2,
            "explanation": "Keystone species removal triggers cascading effects through the entire ecosystem."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Ticks attach to deer and drink blood. This is:",
            "options": [
              "Mutualism",
              "Commensalism",
              "Predation",
              "Parasitism"
            ],
            "answer": 3,
            "explanation": "Tick benefits (+), deer harmed (-) → Parasitism."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What did \"No taxation without representation\" mean?",
            "options": [
              "Colonists refused all taxes",
              "Britain couldn't tax colonists with no seats in Parliament",
              "Only wealthy colonists pay taxes",
              "Taxes voted on by the King"
            ],
            "answer": 1,
            "explanation": "Colonists had no voice in Parliament but were taxed by it — a violation of their rights."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What was the Boston Tea Party (1773)?",
            "options": [
              "A diplomatic meeting",
              "Colonists dumped 342 chests of British tea into Boston Harbor",
              "A celebration of trade laws",
              "A battle with soldiers"
            ],
            "answer": 1,
            "explanation": "The Boston Tea Party protested the Tea Act — colonists dumped £10,000 of tea."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why did Paul Revere's \"Boston Massacre\" painting matter?",
            "options": [
              "It was historically accurate",
              "It was propaganda inflaming colonial anti-British sentiment",
              "It showed British perspective fairly",
              "It was ignored"
            ],
            "answer": 1,
            "explanation": "Revere exaggerated British brutality — it became one of history's most effective pieces of political propaganda."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Why did Britain need to tax the colonies after 1763?",
            "options": [
              "To punish colonists",
              "French and Indian War left Britain deeply in debt",
              "To fund American expansion",
              "King George III needed wealth"
            ],
            "answer": 1,
            "explanation": "The French and Indian War was enormously expensive. Britain believed colonists should help pay for a war fought to defend them."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "Three light switches are outside a room. Inside is one light bulb.\n\nYou can flip switches however you want — but you can only **ENTER the room ONE time**.\n\nHow do you determine which switch controls the bulb?",
        "hint": "Think beyond just on/off. A light bulb has more than two states...",
        "minWords": 20,
        "answer": "1. Turn Switch 1 ON — wait 5 minutes\n2. Turn Switch 1 OFF\n3. Turn Switch 2 ON\n4. Enter the room\n\n**Reading the result:**\n- Light ON → Switch 2\n- Light OFF and WARM → Switch 1 (was on recently)\n- Light OFF and COLD → Switch 3 (never on)\n\n**Key insight:** A bulb has THREE states — on, off-warm, off-cold. Most people only thought of two."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "📜",
        "formatName": "Primary Source",
        "partA": {
          "url": "https://www.historyplace.com/unitedstates/revolution/teaparty.htm",
          "videoTitle": "Boston Tea Party — firsthand accounts",
          "instruction": "Read the firsthand accounts of the Boston Tea Party. Find one detail that surprised you — something a textbook wouldn't include."
        },
        "partB": {
          "prompt": "Primary sources give us details textbooks miss.",
          "questions": [
            "What surprising detail did you find in the firsthand account?",
            "How is reading a primary source different from a textbook?"
          ]
        },
        "writingPrompt": "In at least 50 words: what does the Boston Tea Party tell us about the colonists' state of mind in 1773? Were they acting rationally? Use evidence from the primary source.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "The Coordinate Plane",
        "prompt": "Teach the coordinate plane using a map:\n\n**\"Every point has an address — (x, y). Like a city grid: go 3 blocks east, then 4 blocks north.\"**\n\nThen:\n1. Draw a coordinate plane together\n2. Plot (3,4), (-2,3), (0,-5)\n3. Ask: \"What quadrant is (-3,-4) in?\"\n4. Connect to GPS: \"This is how Google Maps works\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Who did you teach? Were they surprised by the GPS connection? What was confusing?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "History + Math crossover:\n\n**Part A:** Boston Harbor is ~3 miles wide and 5 miles long. Plot a coordinate map. Place the Tea Party ship at (1,-2) and British blockade at (3,4). Find horizontal and vertical distance between them.\n\n**Part B:** British soldiers march at 3 mph. Colonists need 30 minutes head start to escape. Write and solve an inequality showing how far the head start gets them.\n\n**Part C — Thatha Level 🧮:** 342 chests of tea, each weighing 45 kg. Total weight? In 1773, tea sold for £2.50/pound (2.2 lbs/kg). Total value in pounds? Show all work.",
        "hint": "Part C: First find total kg → convert to lbs → multiply by price per pound.",
        "answer": "Part A: Horizontal |3-1|=2, Vertical |4-(-2)|=6 miles. Part B: 3×(1/2)=1.5 mile head start. Part C: 342×45=15,390kg → ×2.2=33,858 lbs → ×£2.50=£84,645."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Numbers 1-10",
        "newPhrases": [
          {
            "telugu": "ఒకటి, రెండు, మూడు",
            "romanized": "Okati, rendu, muudu",
            "english": "One, two, three",
            "tip": "The first three! Say them loud. Okati-rendu-muudu."
          },
          {
            "telugu": "నాలుగు, అయిదు, ఆరు",
            "romanized": "Naalugu, ayidu, aaru",
            "english": "Four, five, six",
            "tip": "Ayidu sounds like \"eye-doo.\" Aaru like \"aa-roo.\" Practice the sounds."
          },
          {
            "telugu": "ఏడు, ఎనిమిది, తొమ్మిది",
            "romanized": "Yeḍu, enimidi, tommidi",
            "english": "Seven, eight, nine",
            "tip": "Yeḍu = 7. Enimidi = 8 (sounds like \"any-midi\"). Tommidi = 9."
          },
          {
            "telugu": "పది",
            "romanized": "Padi",
            "english": "Ten",
            "tip": "Padi = 10. A milestone number you'll build on."
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
            "romanized": "Naaku nidra vastundi",
            "options": [
              "Hello / Greetings",
              "I am sleepy",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Naaku nidra vastundi = I am sleepy."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Count 1-10 out loud in Telugu. Then backwards. Then count your fingers with great-grandma on a video call.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 8,
    "title": "Slope Unlocked",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Slope: Rise Over Run",
        "emoji": "🔢",
        "imageQuery": "slope rise over run graph line steepness math visual",
        "content": "**Slope** measures how steep a line is — how much y changes per unit of x.\n\n**Formula:** m = (y₂ - y₁) / (x₂ - x₁) = rise / run\n\nExample: Points (2,1) and (6,9):\nm = (9-1)/(6-2) = 8/4 = **2**\n\n**What slope tells you:**\n- Positive → line goes up ↗\n- Negative → line goes down ↘\n- Zero → horizontal line →\n- Undefined → vertical line ↑",
        "keyFact": "Slope is rate of change. Speed, price per item, population growth — all slopes in disguise.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In the slope formula rise/run, what does 'rise' mean?",
                            "options": [
                                      "Horizontal change",
                                      "Vertical change",
                                      "The y-intercept",
                                      "The x-intercept"
                            ],
                            "answer": 1,
                            "explanation": "Rise is the vertical change (up/down), run is the horizontal change (left/right). Slope = rise ÷ run."
                  },
                  {
                            "type": "typed",
                            "q": "A line goes up 6 units and right 3 units. What is the slope?",
                            "answer": "2",
                            "placeholder": "Enter the number...",
                            "explanation": "Slope = rise/run = 6/3 = 2. A slope of 2 means for every 1 step right, you go 2 steps up."
                  },
                  {
                            "type": "mc",
                            "q": "A slope of 0 means the line is...",
                            "options": [
                                      "Vertical",
                                      "Diagonal",
                                      "Horizontal",
                                      "Undefined"
                            ],
                            "answer": 2,
                            "explanation": "A slope of 0 means no rise — the line is perfectly horizontal. A vertical line has undefined slope."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Keystone Species",
        "emoji": "🌿",
        "imageQuery": "keystone species sea otter kelp forest wolf Yellowstone ecosystem",
        "content": "A **keystone species** has an effect far greater than its numbers. Remove it → ecosystem collapses.\n\n**Famous examples:**\n- **Sea otters** → eat sea urchins → protect kelp forests → support entire ocean ecosystems\n- **Wolves at Yellowstone** → control elk → allow riverbank vegetation → stabilize rivers\n- **Beavers** → build dams → create wetlands → support hundreds of species\n\n**In your mahoraga:** Salmon are keystone species in the Pacific Northwest — bringing ocean nutrients inland when they spawn.",
        "keyFact": "\"Keystone species\" was discovered in 1966 when biologist Robert Paine removed starfish from tide pools and everything changed.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is a keystone species?",
                            "options": [
                                      "The largest animal in an ecosystem",
                                      "A species whose removal would dramatically change the ecosystem",
                                      "An endangered species",
                                      "A top predator only"
                            ],
                            "answer": 1,
                            "explanation": "A keystone species has a disproportionately large effect on its ecosystem relative to its abundance. Remove it and the whole system can collapse."
                  },
                  {
                            "type": "mc",
                            "q": "Sea otters are a keystone species. If removed, what would happen?",
                            "options": [
                                      "Sea urchin populations would decrease",
                                      "Kelp forests would thrive",
                                      "Sea urchins would explode in number, destroying kelp forests",
                                      "Nothing significant would change"
                            ],
                            "answer": 2,
                            "explanation": "Otters eat sea urchins. Without otters → sea urchin explosion → they devour kelp → kelp forest ecosystem collapses. One species affects everything."
                  },
                  {
                            "type": "typed",
                            "q": "What classic example of keystone species comes from biologist Robert Paine removing starfish from tide pools?",
                            "answer": "starfish",
                            "placeholder": "Name the animal...",
                            "explanation": "Paine removed Pisaster starfish from tide pools. Mussels took over, crowding out everything else — proving the starfish was a keystone holding the community together."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Inference: Reading Between the Lines",
        "emoji": "✍️",
        "imageQuery": "inference reading comprehension text evidence conclusion thinking",
        "content": "An **inference** is a conclusion you reach using text evidence + your own knowledge.\n\n**Formula:** Text clue + Background knowledge = Inference\n\nExample:\n\"She put on her coat before checking the forecast.\"\n→ Inference: She's cold or impulsive.\n\n**Strong inference** = supported by specific text evidence.\n**Weak inference** = reading things in that aren't there.\n\nKey question: \"What did the author want me to understand without stating it?\"",
        "keyFact": "About 70% of human communication is implied, not stated. Inference is the skill that gets you that 70%.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is a text inference?",
                            "options": [
                                      "A direct quote from the text",
                                      "A conclusion based on clues + your knowledge",
                                      "The author's main opinion",
                                      "A summary of the whole text"
                            ],
                            "answer": 1,
                            "explanation": "An inference is a conclusion you reach using text clues plus your own background knowledge — reading between the lines."
                  },
                  {
                            "type": "mc",
                            "q": "Which is the best inference from: 'Maya walked in soaking wet, umbrella dripping'?",
                            "options": [
                                      "Maya went swimming",
                                      "It was raining outside",
                                      "Maya spilled water on herself",
                                      "Maya forgot her umbrella"
                            ],
                            "answer": 1,
                            "explanation": "The clues (soaking wet, dripping umbrella) point to rain outside — that's a strong inference from the evidence."
                  },
                  {
                            "type": "typed",
                            "q": "What two things do you combine to make an inference?",
                            "answer": "text clues",
                            "placeholder": "Text ___ + knowledge",
                            "explanation": "Inference = text clues + your background knowledge. You can't just use one — you need both."
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
            "q": "Find the slope between (0,0) and (4,8)",
            "options": [
              "1/2",
              "2",
              "4",
              "8"
            ],
            "answer": 1,
            "explanation": "m = (8-0)/(4-0) = 8/4 = 2."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "A line going UP left to right has slope:",
            "options": [
              "Negative",
              "Zero",
              "Positive",
              "Undefined"
            ],
            "answer": 2,
            "explanation": "Lines going up left to right have positive slope."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Find the slope between (3,7) and (7,3)",
            "options": [
              "-2",
              "-1",
              "1",
              "2"
            ],
            "answer": 1,
            "explanation": "m = (3-7)/(7-3) = -4/4 = -1."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "A vertical line has slope:",
            "options": [
              "0",
              "1",
              "-1",
              "Undefined"
            ],
            "answer": 3,
            "explanation": "Vertical lines have undefined slope — dividing by 0."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is a keystone species?",
            "options": [
              "The largest species",
              "A species whose removal causes dramatic ecosystem collapse",
              "Any endangered species",
              "The top predator only"
            ],
            "answer": 1,
            "explanation": "Keystone species have disproportionate impact — far beyond their numbers."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Sea otters are keystone species because they:",
            "options": [
              "Are top ocean predators",
              "Eat sea urchins that would destroy kelp forests",
              "Produce most ocean oxygen",
              "Feed the most species"
            ],
            "answer": 1,
            "explanation": "Without otters, urchins explode and eat all kelp — destroying the entire kelp forest ecosystem."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why are salmon keystone species in the Pacific Northwest?",
            "options": [
              "Most numerous fish",
              "Bring ocean nutrients inland when spawning, feeding forest ecosystems",
              "Eat all invasive species",
              "Control river temperatures"
            ],
            "answer": 1,
            "explanation": "When salmon spawn and die in rivers, their bodies bring marine nutrients into forest ecosystems."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "If salmon collapsed in Pacific Northwest, which would be LEAST directly affected?",
            "options": [
              "Bears",
              "Eagles",
              "Riverside forests",
              "Desert lizards in Arizona"
            ],
            "answer": 3,
            "explanation": "Desert lizards in Arizona are geographically and ecologically disconnected from Pacific Northwest salmon."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "What is an inference?",
            "options": [
              "A direct quote",
              "A conclusion based on text evidence + background knowledge",
              "The main idea",
              "A fact stated in the text"
            ],
            "answer": 1,
            "explanation": "Inference = text evidence + your knowledge → conclusion the author implied but didn't state."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "\"He checked his phone twice before the interview.\" We can infer:",
            "options": [
              "He was bored",
              "He was probably nervous or anxious",
              "He didn't want the job",
              "He was late"
            ],
            "answer": 1,
            "explanation": "Repeated phone checking before a stressful event suggests nervousness — but it's not stated."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "What makes an inference STRONG vs WEAK?",
            "options": [
              "Strong inferences are longer",
              "Strong inferences are supported by specific text evidence",
              "Strong inferences use big words",
              "Weak inferences are about characters"
            ],
            "answer": 1,
            "explanation": "Strong inference always connects back to specific evidence in the text."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "A character silently hands food to someone in need and walks away. Best strong inference:",
            "options": [
              "She is the richest person in the city",
              "She values quiet acts of kindness over recognition",
              "She is afraid of them",
              "She has too much food"
            ],
            "answer": 1,
            "explanation": "The specific detail of acting silently and walking away supports an inference about valuing private generosity."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You're in a room with 5 switches. In 5 different rooms are 5 different light bulbs.\n\nYou can only make **ONE trip** total through the 5 rooms (each room visited once, in any order).\n\nHow do you figure out which switch controls which bulb?",
        "hint": "You can use different combinations of ON time and heat — a bulb that was on for 10 min vs 2 min will feel different.",
        "minWords": 20,
        "answer": "- Switch 1: ON 10 min, then OFF\n- Switch 2: ON 5 min, then OFF\n- Switch 3: ON 2 min, then OFF\n- Switch 4: ON (leave on)\n- Switch 5: OFF the whole time\n\n**Reading each room:**\n- Bulb ON → Switch 4\n- Hot but off → Switch 1\n- Warm but off → Switch 2\n- Slightly warm → Switch 3\n- Cold and off → Switch 5\n\nFive distinguishable states from five switches. ✓"
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🎤",
        "formatName": "Interview Mission",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Ask an adult in your house: \"When do you use slope or rate of change in your job or daily life?\" Write down their exact answer."
        },
        "partB": {
          "prompt": "Slope = rate of change. It shows up in finance, cooking, driving, medicine, sports.",
          "questions": [
            "What was the adult's answer?",
            "Can you think of one slope example in YOUR daily life they didn't mention?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain slope to someone who's never heard of it using ONLY real-world examples. No math symbols. Make it feel relevant.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Keystone Species",
        "prompt": "Teach someone about keystone species using the wolf story:\n\n**\"When wolves were removed from Yellowstone, deer overgrazed the riverbanks. That caused erosion. That changed river courses. One species — wolves — affected the rivers themselves.\"**\n\nThen:\n1. Ask: \"Can you think of a keystone species in our neighborhood?\"\n2. Discuss: What would happen if bees disappeared?\n3. Connect to salmon in the Pacific Northwest\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What keystone species did they suggest? What was their reaction to the wolf-changing-rivers story?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "ela",
        "problem": "Read these three sentences. For each, write:\n1. A STRONG inference with text evidence\n2. A WEAK inference (unsupported)\n\n**A:** \"After the test results, she put her phone face-down and stared at the ceiling for three minutes.\"\n\n**B:** \"The old man smiled when he heard the song, then quickly looked away.\"\n\n**C:** \"He ordered the cheapest thing on the menu and then asked to split the check three ways.\"",
        "hint": "Strong inferences are specific and tied to exact details. \"She was sad\" is weak. \"She received difficult news she's processing\" is stronger — connects to face-down phone + ceiling stare.",
        "answer": "Should show: specific text evidence for strong inferences, and recognition of what counts as unsupported for weak ones."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Numbers 11-20",
        "newPhrases": [
          {
            "telugu": "పదకొండు, పన్నెండు, పదమూడు",
            "romanized": "Padakoṇḍu, panneṇḍu, padamuuḍu",
            "english": "Eleven, twelve, thirteen",
            "tip": "Padi (10) + koṇḍu (1) = 11. Padi + rendu (2) = 12. The pattern is: ten + unit."
          },
          {
            "telugu": "పద్నాలుగు, పదిహేను",
            "romanized": "Padnaaalugu, padihenu",
            "english": "Fourteen, fifteen",
            "tip": "Padnaaalugu = 14. Padihenu = 15. Keep going!"
          },
          {
            "telugu": "పదహారు, పదిహేడు, పద్దెనిమిది",
            "romanized": "Padahaaru, padiheyḍu, paddenimidi",
            "english": "Sixteen, seventeen, eighteen",
            "tip": "Padahaaru = 16. Padiheyḍu = 17. Paddenimidi = 18."
          },
          {
            "telugu": "పంతొమ్మిది, ఇరవై",
            "romanized": "Panthommidi, iravai",
            "english": "Nineteen, twenty",
            "tip": "Iravai = 20 — this is a new word, not a pattern. Remember it."
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
            "romanized": "Naaku daahangaa undi",
            "options": [
              "Hello / Greetings",
              "I am thirsty",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Naaku daahangaa undi = I am thirsty."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma your age in Telugu. How old is she? Ask: \"Meeru entha vasthuvugaa unnaru?\"",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 9,
    "title": "The Code of Life",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Slope-Intercept Form: y = mx + b",
        "emoji": "🔢",
        "imageQuery": "slope intercept form y=mx+b graph line equation visual",
        "content": "**y = mx + b** is the most important equation in pre-algebra.\n\n- **m** = slope (rate of change)\n- **b** = y-intercept (where line crosses y-axis)\n\n**Reading the equation:**\ny = 3x + 2: slope=3, y-intercept=2\ny = -½x + 5: slope=-½, y-intercept=5\n\n**Graphing:** Plot y-intercept first. Use slope (rise/run) to find next points.\n\n**Two lines with same slope:** Parallel — they never intersect.",
        "keyFact": "y=mx+b appears in physics, economics, biology, chemistry — it models almost anything that changes at a constant rate.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In y = mx + b, what does b represent?",
                            "options": [
                                      "The slope",
                                      "The x-intercept",
                                      "The y-intercept",
                                      "The rate of change"
                            ],
                            "answer": 2,
                            "explanation": "b is the y-intercept — where the line crosses the y-axis (when x = 0). m is the slope (rate of change)."
                  },
                  {
                            "type": "typed",
                            "q": "What is the slope of the line y = -3x + 7?",
                            "answer": "-3",
                            "placeholder": "Enter the slope...",
                            "explanation": "In y = mx + b, m is the slope. So slope = -3. The negative means the line goes down from left to right."
                  },
                  {
                            "type": "mc",
                            "q": "A line has slope 2 and y-intercept -1. Which is its equation?",
                            "options": [
                                      "y = -x + 2",
                                      "y = 2x - 1",
                                      "y = -2x + 1",
                                      "y = x - 2"
                            ],
                            "answer": 1,
                            "explanation": "Plug into y = mx + b: slope m=2, y-intercept b=-1 gives y = 2x + (-1) = 2x - 1."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Genetics: The Code of Life",
        "emoji": "🧬",
        "imageQuery": "DNA double helix genetics chromosomes Punnett square diagram",
        "content": "**DNA** is a twisted ladder (double helix) inside every cell nucleus — the instruction manual for building you.\n\n**Key terms:**\n- **Gene** — section of DNA coding for one trait\n- **Chromosome** — humans have 46 (23 pairs, one from each parent)\n- **Dominant (B)** — one copy shows the trait (brown eyes)\n- **Recessive (b)** — needs TWO copies to show (blue eyes)\n\n**Punnett Square:** Bb × Bb →\nBB (25%), Bb (50%), bb (25%)\n→ 75% brown, 25% blue",
        "keyFact": "You share 99.9% of DNA with every human on Earth. The 0.1% difference makes you completely unique.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What does DNA stand for?",
                            "options": [
                                      "Deoxyribonucleic Acid",
                                      "Double Nucleic Arrangement",
                                      "Directed Nitrogen Atoms",
                                      "Dynamic Natural Assembly"
                            ],
                            "answer": 0,
                            "explanation": "DNA stands for Deoxyribonucleic Acid — it's the molecule that carries genetic instructions in all living things."
                  },
                  {
                            "type": "mc",
                            "q": "Which molecule carries genetic instructions from DNA to make proteins?",
                            "options": [
                                      "ATP",
                                      "RNA",
                                      "Glucose",
                                      "Enzyme"
                            ],
                            "answer": 1,
                            "explanation": "RNA is the messenger — it carries instructions from DNA out of the nucleus to make proteins."
                  },
                  {
                            "type": "typed",
                            "q": "What are the 4 bases in DNA? (list the letters)",
                            "answer": "ATCG",
                            "placeholder": "4 letters...",
                            "explanation": "The 4 DNA bases are Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). A pairs with T, C pairs with G."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Boston Tea Party & Intolerable Acts",
        "emoji": "🫖",
        "imageQuery": "Boston Tea Party 1773 colonial protest ships harbor tea chests",
        "content": "December 16, 1773: 116 colonists dumped **342 chests of tea** worth £10,000 into Boston Harbor.\n\n**Why:** The Tea Act gave the British East India Company a monopoly — undercutting local merchants.\n\n**Britain's response — The Intolerable Acts (1774):**\n- Closed Boston Harbor until tea was repaid\n- Reduced Massachusetts self-governance\n- Required colonists to house British soldiers\n\n**The effect:** Backfired completely — instead of isolating Massachusetts, it united all 13 colonies. The First Continental Congress met in September 1774.",
        "keyFact": "342 chests × 45kg = ~15,390 kg of tea. At today's prices, worth over $1 million.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Why did colonists dump tea into Boston Harbor in 1773?",
                            "options": [
                                      "The tea tasted bad",
                                      "To protest British taxation without colonial representation",
                                      "Because they preferred coffee",
                                      "Britain banned tea imports"
                            ],
                            "answer": 1,
                            "explanation": "The Boston Tea Party protested the Tea Act — colonists were furious about being taxed on tea without their consent, so the Sons of Liberty dumped 342 chests of British tea."
                  },
                  {
                            "type": "mc",
                            "q": "How did Britain respond to the Boston Tea Party?",
                            "options": [
                                      "They apologized",
                                      "They removed all taxes",
                                      "They passed the Intolerable Acts, closing Boston's port",
                                      "They sent more tea"
                            ],
                            "answer": 2,
                            "explanation": "Britain passed the Coercive Acts (called 'Intolerable Acts' by colonists) — closing Boston's port, restricting Massachusetts self-government, and requiring colonists to house British troops."
                  },
                  {
                            "type": "typed",
                            "q": "What did the Intolerable Acts ultimately do to colonial unity?",
                            "answer": "increased it",
                            "placeholder": "What effect?",
                            "explanation": "The Intolerable Acts backfired — other colonies rallied around Massachusetts, leading to the First Continental Congress and ultimately uniting colonies against Britain."
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
            "q": "In y = 3x + 7, what is the slope?",
            "options": [
              "7",
              "3",
              "1/3",
              "-3"
            ],
            "answer": 1,
            "explanation": "In y=mx+b, m is slope. Here m=3."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "In y = -2x + 5, where does the line cross the y-axis?",
            "options": [
              "-2",
              "2",
              "5",
              "-5"
            ],
            "answer": 2,
            "explanation": "In y=mx+b, b is y-intercept. Here b=5."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Equation: slope 4, y-intercept -3",
            "options": [
              "y=4x-3",
              "y=-3x+4",
              "y=4x+3",
              "y=-4x-3"
            ],
            "answer": 0,
            "explanation": "y = mx + b → y = 4x + (-3) → y = 4x - 3."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "y=2x+3 and y=2x-5. Do they intersect?",
            "options": [
              "Yes, at (0,3)",
              "Yes at (3,-5)",
              "No — they're parallel",
              "Yes on x-axis"
            ],
            "answer": 2,
            "explanation": "Same slope (m=2) → parallel → never intersect."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Where is DNA stored in a cell?",
            "options": [
              "Cell membrane",
              "Mitochondria",
              "Nucleus",
              "Ribosome"
            ],
            "answer": 2,
            "explanation": "DNA is stored in the nucleus — the cell's control center."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Humans have how many chromosomes?",
            "options": [
              "23",
              "46",
              "64",
              "92"
            ],
            "answer": 1,
            "explanation": "Humans have 46 chromosomes in 23 pairs — one set from each parent."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "A dominant allele (B) paired with recessive (b) = Bb. What shows?",
            "options": [
              "Recessive trait",
              "Dominant trait",
              "Both equally",
              "Neither"
            ],
            "answer": 1,
            "explanation": "Dominant alleles mask recessive ones. Bb = shows the dominant trait."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Two parents are both Bb. Probability their child has blue eyes (bb)?",
            "options": [
              "0%",
              "25%",
              "50%",
              "75%"
            ],
            "answer": 1,
            "explanation": "Punnett: BB(25%)+Bb(50%)+bb(25%). Only bb = recessive = 25%."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What did colonists dump into Boston Harbor in 1773?",
            "options": [
              "Coffee",
              "342 chests of British tea",
              "British weapons",
              "British trade goods"
            ],
            "answer": 1,
            "explanation": "The Boston Tea Party — 342 chests of tea to protest the Tea Act."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "How did the Intolerable Acts backfire?",
            "options": [
              "Colonists paid for the tea",
              "Isolated Massachusetts as intended",
              "United all 13 colonies against Britain",
              "Britain withdrew troops"
            ],
            "answer": 2,
            "explanation": "Rather than isolating Massachusetts, the Intolerable Acts convinced other colonies that British tyranny threatened everyone."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What did the Intolerable Acts require colonists to do?",
            "options": [
              "Pay a tea tax",
              "House British soldiers",
              "Stop all trade",
              "Swear loyalty"
            ],
            "answer": 1,
            "explanation": "The Quartering Act required colonists to house and feed British soldiers — a major violation."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Britain's goal with Intolerable Acts was to punish Massachusetts. Why did it fail?",
            "options": [
              "Britain's military was weak",
              "Other colonies saw it as a threat to ALL colonial rights",
              "Colonists were already planning revolution",
              "France interfered"
            ],
            "answer": 1,
            "explanation": "The Intolerable Acts showed colonists that Britain would crush self-governance anywhere — making unity strategically necessary."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "What comes next in this sequence?\n\n2, 6, 12, 20, 30, 42, 56, ___\n\nBonus: Can you find the formula for the nth term?",
        "hint": "Look at the differences between terms: 4, 6, 8, 10, 12, 14... do you see a pattern in the differences?",
        "minWords": 20,
        "answer": "**Next: 72**\n\nDifferences: 4, 6, 8, 10, 12, 14, **16**\n56 + 16 = **72**\n\n**The formula:** n(n+1) where n = 1, 2, 3...\n- n=1: 1×2=2 ✓\n- n=2: 2×3=6 ✓\n- n=8: 8×9=72 ✓\n\nThis is the product of consecutive integers — appears in Pascal's Triangle, combinatorics, and more."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🗺️",
        "formatName": "Map It",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "WITHOUT looking at notes — draw a cell diagram from memory. Include at least 5 organelles with labels. Make it as detailed as you can recall."
        },
        "partB": {
          "prompt": "Now check your diagram against your Day 1-2 lessons. What did you get right? What did you forget?",
          "questions": [
            "How many organelles did you correctly label from memory?",
            "What did you forget that surprised you?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain the relationship between nucleus, DNA, chromosomes, and genes. How do they fit inside each other like Russian nesting dolls?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Genetics & Family Traits",
        "prompt": "Do a genetics experiment with family:\n\n1. Compare eye color and earlobe attachment (attached or hanging free) across family members\n2. Explain: **\"These traits are determined by genes — dominant or recessive versions passed from parents.\"**\n3. Draw a simple Punnett square: if both parents are Bb, what are the odds for each child?\n4. Can you spot a trait that SKIPPED a generation? That's recessive genes at work!\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What traits did you compare? Did you spot any recessive traits? What surprised the family?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "In the JJK world, the ability to see cursed spirits is dominant (S). Not seeing them is recessive (s).\n\n**Part A:** Two sorcerer parents are both Ss. Draw the Punnett square. What % of children can see cursed spirits?\n\n**Part B:** A child cannot see spirits (ss). What must BOTH parents' genotypes include?\n\n**Part C — Thatha Level 🧮:** If sorcerer power follows y=2x+3 (power vs. training days), and a non-sorcerer has power y=1, find x. What does this result mean?\n\n**Part D:** If 75% of people in JJK can see curses, write y=mx+b predicting sorcerers in a group of n people.",
        "hint": "Part C: 1=2x+3 → x=-1. A negative day count is impossible — what does that tell you about non-sorcerers and this model?",
        "answer": "Part A: 75% can see spirits (SS+Ss). Part B: Both must carry s (Ss or ss). Part C: x=-1 — nonsensical. Non-sorcerers don't fit the model. Part D: y=0.75n, slope=0.75."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Colors",
        "newPhrases": [
          {
            "telugu": "ఎరుపు, నీలం, పచ్చ",
            "romanized": "Erupu, neelam, pachcha",
            "english": "Red, blue, green",
            "tip": "Erupu = red. Neelam = blue (like \"neel\" in Hindi). Pachcha = green (also means raw/unripe)."
          },
          {
            "telugu": "పసుపు, నారింజ, గులాబీ",
            "romanized": "Pasupu, naarinj, gulaabi",
            "english": "Yellow, orange, pink",
            "tip": "Pasupu = turmeric = yellow! Gulaabi comes from \"gulab\" (rose flower). Lovely origin."
          },
          {
            "telugu": "తెలుపు, నలుపు",
            "romanized": "Telupu, nalupu",
            "english": "White, black",
            "tip": "Telupu = white. Did you notice? Telugu and Telupu share the same root — \"bright/clear.\""
          },
          {
            "telugu": "ఇది ఏ రంగు?",
            "romanized": "Idi e rangu?",
            "english": "What color is this?",
            "tip": "Rangu = color. Idi = this. \"E\" = what (Telangana shortening of \"eee\"). Point at things and ask!"
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
            "romanized": "Dayachesi",
            "options": [
              "Hello / Greetings",
              "Please",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Dayachesi = Please."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Point to 5 things around you and name their color in Telugu to great-grandma. Ask her to correct you!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 10,
    "title": "💎 Chapter 1 Complete — Special Grade!",
    "subject": "mixed",
    "isMilestone": true,
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Chapter 1 Math — Power Review",
        "emoji": "🔢",
        "imageQuery": "math review algebra equations slope achievement milestone",
        "content": "You covered serious math ground in 9 days:\n\n✓ **Ratios & Proportions** — comparing and scaling\n✓ **Negative Numbers** — sign rules, absolute value\n✓ **Variables & Expressions** — algebra's building blocks\n✓ **Two-Step Equations** — balance scale method\n✓ **Variables on Both Sides** — collect like terms first\n✓ **Inequalities** — flip when dividing by negative!\n✓ **Coordinate Plane** — every point has an address\n✓ **Slope** — rise over run, rate of change\n✓ **y = mx + b** — the most useful equation in pre-algebra\n\nIf you can do all of these cold — you're walking into 7th grade already ahead.",
        "keyFact": "You've covered the foundation of 7th grade math. Days 11-50 build on every single one of these.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which of these is a linear equation?",
                            "options": [
                                      "y = x²",
                                      "y = 2x + 3",
                                      "y = x³",
                                      "y = √x"
                            ],
                            "answer": 1,
                            "explanation": "y = 2x + 3 is linear — no exponents on x. It graphs as a straight line with slope 2 and y-intercept 3."
                  },
                  {
                            "type": "typed",
                            "q": "What is the slope of the line y = 5x - 7?",
                            "answer": "5",
                            "placeholder": "Enter the number...",
                            "explanation": "In y = mx + b, m is the slope. So slope = 5. The -7 is the y-intercept."
                  },
                  {
                            "type": "mc",
                            "q": "The equation y = 3x represents a proportional relationship. What does this mean?",
                            "options": [
                                      "y is always 3",
                                      "x and y are always equal",
                                      "y is always 3 times x",
                                      "y decreases as x increases"
                            ],
                            "answer": 2,
                            "explanation": "In y = 3x, for every 1 unit increase in x, y increases by 3. It's proportional because the ratio y/x is always 3."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Chapter 1 Science — Power Review",
        "emoji": "🔬",
        "imageQuery": "biology science cells genetics ecosystem review summary",
        "content": "Nine days of Life Science. Here's what you now understand:\n\n✓ **Cells** — smallest unit of life; 37 trillion in your body\n✓ **Organelles** — nucleus, mitochondria, membrane, chloroplast\n✓ **Prokaryotes vs Eukaryotes** — nucleus or no nucleus\n✓ **Photosynthesis** — CO₂ + H₂O + light → glucose + O₂\n✓ **Cellular Respiration** — glucose + O₂ → CO₂ + H₂O + ATP\n✓ **Ecosystems** — producers, consumers, decomposers\n✓ **Food Webs** — 10% energy rule\n✓ **Biomes** — tropical, desert, tundra, temperate, ocean\n✓ **Keystone Species** — outsized impact\n✓ **Genetics** — DNA, chromosomes, Punnett squares",
        "keyFact": "Everything in biology connects: photosynthesis makes food → food chains move energy → genetics determines who survives → evolution shapes ecosystems.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which best describes a food web compared to a food chain?",
                            "options": [
                                      "Food webs are simpler",
                                      "Food webs show multiple feeding relationships; food chains show only one path",
                                      "They are the same thing",
                                      "Food chains include more species"
                            ],
                            "answer": 1,
                            "explanation": "Food chains show one linear path (grass→rabbit→fox). Food webs show the complex, interconnected reality — most animals eat many things and are eaten by many things."
                  },
                  {
                            "type": "mc",
                            "q": "What is the role of decomposers in an ecosystem?",
                            "options": [
                                      "They produce food from sunlight",
                                      "They break down dead matter and return nutrients to the soil",
                                      "They are the top predators",
                                      "They convert nitrogen to usable form only"
                            ],
                            "answer": 1,
                            "explanation": "Decomposers (fungi, bacteria) break down dead organisms and waste, returning nutrients to the soil — completing the nutrient cycle that producers need."
                  },
                  {
                            "type": "typed",
                            "q": "Name the two types of cells based on whether they have a membrane-bound nucleus.",
                            "answer": "prokaryote and eukaryote",
                            "placeholder": "Two types...",
                            "explanation": "Prokaryotes (no nucleus — like bacteria) and eukaryotes (with nucleus — animals, plants, fungi). This is the most fundamental division of life on Earth."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "mixed",
        "title": "20% Complete — You're Ahead of the Game",
        "emoji": "💎",
        "imageQuery": "achievement milestone celebration progress trophy success",
        "content": "Abhi. 10 days. Let that sink in.\n\nYou have covered:\n- 9 math concepts — most of 7th grade pre-algebra foundation\n- 10 science topics — most of 7th grade Life Science unit\n- History from Indigenous peoples through the Road to Revolution\n- ELA: vivid writing and inference\n- 9 Telugu phrases — enough for a real phone call\n\nThe average student forgets 70% of what they learn over summer. You're doing the opposite.\n\n**20% of your summer goal is complete.** The Summer Trophy unlocks at Day 35. You're already more than a quarter of the way there.\n\nChapter 2 starts tomorrow. The content gets harder and more interesting. Keep going.",
        "keyFact": "Research shows spaced practice is 2-3x more effective than cramming. You're building real, lasting knowledge.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "You've finished 10 days. What percentage of the 50-day program is that?",
                            "options": [
                                      "10%",
                                      "20%",
                                      "15%",
                                      "25%"
                            ],
                            "answer": 1,
                            "explanation": "10 ÷ 50 = 0.20 = 20%. You've completed 1/5 of the entire program — that's a real achievement!"
                  },
                  {
                            "type": "mc",
                            "q": "If you earn an average of 90 XP per day, how much total XP after 50 days?",
                            "options": [
                                      "4000",
                                      "4500",
                                      "5000",
                                      "3500"
                            ],
                            "answer": 1,
                            "explanation": "90 XP × 50 days = 4,500 XP. At that rate you'd reach Grade 1 Sorcerer level and be close to Special Grade!"
                  },
                  {
                            "type": "typed",
                            "q": "Quick review: What does ratio 2:6 simplify to?",
                            "answer": "1:3",
                            "placeholder": "Simplified ratio...",
                            "explanation": "Divide both by GCF (2): 2÷2 = 1, 6÷2 = 3. Ratio = 1:3. You learned this on Day 1 — still remember it!"
                  }
        ]
      },
      "quiz": {
        "type": "quiz",
        "title": "Chapter 1 Final Binding Vow",
        "unlocksAfterLessons": [
          1,
          2,
          3
        ],
        "questions": [
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: -3x + 6 = -9",
            "options": [
              "x=-1",
              "x=1",
              "x=5",
              "x=-5"
            ],
            "answer": 2,
            "explanation": "Subtract 6: -3x=-15. Divide by -3: x=5."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Slope between (2,5) and (6,13)?",
            "options": [
              "1/2",
              "2",
              "4",
              "8"
            ],
            "answer": 1,
            "explanation": "(13-5)/(6-2) = 8/4 = 2."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: 4x - 3 > 2x + 5",
            "options": [
              "x>1",
              "x>4",
              "x<4",
              "x>8"
            ],
            "answer": 1,
            "explanation": "Subtract 2x: 2x-3>5. Add 3: 2x>8. x>4."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "Write y=mx+b: slope -2, passes through (3,1)",
            "options": [
              "y=-2x+7",
              "y=-2x-1",
              "y=2x-7",
              "y=-2x+1"
            ],
            "answer": 0,
            "explanation": "1=-2(3)+b → 1=-6+b → b=7. y=-2x+7."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "During photosynthesis, what gas is released?",
            "options": [
              "CO₂",
              "Nitrogen",
              "Oxygen",
              "Hydrogen"
            ],
            "answer": 2,
            "explanation": "Plants take in CO₂ and water, release oxygen."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Punnett square: Bb × Bb. Chance of blue eyes (bb)?",
            "options": [
              "0%",
              "25%",
              "50%",
              "75%"
            ],
            "answer": 1,
            "explanation": "BB+Bb+bb. Only bb = recessive = 25%."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Remove a keystone species → ecosystem collapses. Remove non-keystone → minor changes. What does this tell us?",
            "options": [
              "All species equally important",
              "Some species have disproportionate structural roles",
              "Larger species matter more",
              "Only predators are keystone"
            ],
            "answer": 1,
            "explanation": "Ecosystems aren't flat democracies — some species hold structural roles others can't replace."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What became the symbol of colonial opposition to British taxation?",
            "options": [
              "Give me liberty",
              "No taxation without representation",
              "Don't tread on me",
              "We the People"
            ],
            "answer": 1,
            "explanation": "\"No taxation without representation\" captured the core grievance — taxed by a Parliament they had no voice in."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "European diseases killed approximately what % of Indigenous populations?",
            "options": [
              "10%",
              "30%",
              "60%",
              "Up to 90%"
            ],
            "answer": 3,
            "explanation": "Smallpox and measles killed up to 90% of some Indigenous populations with zero prior immunity."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Connect the Columbian Exchange to the Intolerable Acts. What do they share?",
            "options": [
              "Both involved tea",
              "Both demonstrate how contact between worlds can have massive unintended consequences",
              "Both happened in 1773",
              "Both started in Spain"
            ],
            "answer": 1,
            "explanation": "Columbian Exchange: contact led to catastrophic disease. Intolerable Acts: British response led to colonial unity. Both are about unintended consequences."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "\"He wore his jacket inside and sat close to the heater.\" What can you infer?",
            "options": [
              "He likes fashion",
              "He is probably cold",
              "He's going outside",
              "He just came in"
            ],
            "answer": 1,
            "explanation": "Multiple clues (jacket inside + near heater) both point to feeling cold — strong evidence-based inference."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "\"Show don't tell\" writing works because:",
            "options": [
              "It uses longer sentences",
              "It avoids all descriptions",
              "Specific details trigger the reader's own emotional response",
              "It always describes physical appearance"
            ],
            "answer": 2,
            "explanation": "Showing works because specific details trigger the reader's own feeling — they experience it rather than being told to."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A school has 100 lockers, all closed. 100 students walk by.\n\nStudent 1 opens EVERY locker.\nStudent 2 changes every 2nd (closes 2,4,6...)\nStudent 3 changes every 3rd\n...Student 100 changes only locker 100.\n\nAfter all 100 students — which lockers are OPEN?",
        "hint": "A locker is open if it's been toggled an odd number of times. When does a number have an odd number of factors?",
        "minWords": 20,
        "answer": "**Open lockers: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100** — the perfect squares!\n\n**Why:** A locker is open if toggled an odd number of times. Locker n gets toggled once per factor. Most numbers have even factors (pairs: 1×12, 2×6, 3×4 for 12).\n\nBut **perfect squares** have one factor that pairs with itself (4: 2×2 — the 2 appears once). So only perfect squares have an odd number of factors → only perfect squares end up open. ✓"
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "⚖️",
        "formatName": "Debate It",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Statement: \"Summer learning programs like Mahoraga are more valuable than a full school year of regular classes.\""
        },
        "partB": {
          "prompt": "Write the STRONGEST argument FOR. Then the STRONGEST argument AGAINST. Use specific evidence from your Chapter 1 experience.",
          "questions": [
            "Write your strongest FOR argument (3-4 sentences with evidence)",
            "Write your strongest AGAINST argument (3-4 sentences with evidence)"
          ]
        },
        "writingPrompt": "In at least 50 words: after making both arguments, which side do YOU actually believe? Why? Be honest — there's no right answer.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "🌟",
        "concept": "Chapter 1 Full Showcase",
        "prompt": "This is your Day 10 moment, Abhi. Get the whole family if you can.\n\nDo a 5-minute \"Chapter 1 Report\":\n1. ONE thing from Math you're proud of knowing\n2. ONE thing from Science that surprised you\n3. ONE thing from History you didn't know before\n4. Your favorite Telugu phrase\n5. Tell them: \"I'm 20% done with my summer training.\"\n\nNo notes. Just talk. You've earned this. 🎤",
        "followUp": "What did you pick for each subject? What was the family's reaction? How did it feel to present without notes?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "History + Math + Science Ultimate Crossover:\n\nWhen Europeans arrived, ~60 million Indigenous people lived in the Americas. European diseases killed ~90%.\n\n**Part A:** How many survived? Write as an equation.\n\n**Part B:** The surviving population grew at 2% per year. Is 2% growth LINEAR or EXPONENTIAL? Explain the difference.\n\n**Part C — Thatha Level 🧮:** Using P(t) = 6,000,000 × (1.02)^t, estimate population after 10 years. Use (1.02)^10 ≈ 1.22.\n\n**Part D (Discussion):** What does the math tell us? What CAN'T the math tell us? What factors would affect real recovery that equations can't capture?",
        "hint": "Part B: 2% growth is exponential (multiplying by 1.02 each year), not linear (adding a constant). Big difference over time.",
        "answer": "Part A: 60,000,000 × 0.10 = 6,000,000. Part B: Exponential — each year multiplies by 1.02. Part C: 6,000,000 × 1.22 = 7,320,000. Part D: Open — math shows slow recovery; can't capture continued violence, displacement, forced assimilation."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Ten Days! First Milestone",
        "newPhrases": [
          {
            "telugu": "నేను పది రోజులు నేర్చుకున్నా!",
            "romanized": "Nenu padi rojulu nerchukunna!",
            "english": "I have been learning for ten days!",
            "tip": "Nerchukunna = I learned (Telangana colloquial — no \"-anu\" ending). Proud and natural."
          },
          {
            "telugu": "నేను తెలుగు నేర్చుకుంటున్నా",
            "romanized": "Nenu Telugu nerchukunṭunna",
            "english": "I am learning Telugu",
            "tip": "Nerchukunṭunna = am learning (Telangana present continuous). Your mission statement."
          },
          {
            "telugu": "మీతో మాట్లాడటం నాకు ఇష్టం",
            "romanized": "Meeṭho maaṭlaaḍaṭam naaku ishtam",
            "english": "I enjoy talking with you",
            "tip": "Ishtam = love/like. Meeṭho = with you (respectful). This sentence will make her day."
          },
          {
            "telugu": "మీరు నాకు చాలా ముఖ్యం",
            "romanized": "Meeru naaku chaalaa mukhyam",
            "english": "You are very important to me",
            "tip": "Mukhyam = important. One of the most meaningful things you can say to an elder."
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
            "romanized": "Mallii cheppaṇḍi",
            "options": [
              "Hello / Greetings",
              "Please say again (respectful)",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Mallii cheppaṇḍi = Please say again (respectful)."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "CALL GREAT-GRANDMA. Tell her \"Nenu Telugu nerchukunṭunna\" and \"Meeṭho maaṭlaaḍaṭam naaku ishtam.\" Listen to what she says back.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  }
];
