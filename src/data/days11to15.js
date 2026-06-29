export const days11to15 = [
  {
    "id": 11,
    "title": "Systems Activated",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Systems of Equations — Intro",
        "emoji": "🔢",
        "imageQuery": "systems of equations two lines intersection graph",
        "content": "A **system of equations** has two equations with the same variables. The **solution** is the point where both are true — where the lines intersect.\n\n**Solve by graphing:** Plot both lines. Where they cross = the solution.\n\n**Solve by substitution:**\ny = 2x + 1\ny = -x + 7\n\nSet equal: 2x + 1 = -x + 7 → 3x = 6 → x = 2\nPlug back: y = 2(2)+1 = 5\n**Solution: (2, 5)** ✓\nCheck both: 5=2(2)+1 ✓ and 5=-2+7 ✓",
        "keyFact": "Two lines can intersect (1 solution), be parallel (0 solutions), or be the same line (infinite solutions).",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is a system of equations?",
                            "options": [
                                      "One equation with two variables",
                                      "Two or more equations solved together",
                                      "An equation with no solution",
                                      "A graph with one line"
                            ],
                            "answer": 1,
                            "explanation": "A system of equations is two or more equations that share variables — you solve them together to find values that work for all equations."
                  },
                  {
                            "type": "mc",
                            "q": "If y = 2x and y = x + 5, what is x?",
                            "options": [
                                      "x = 2",
                                      "x = 5",
                                      "x = 10",
                                      "x = 3"
                            ],
                            "answer": 1,
                            "explanation": "Substitute: 2x = x + 5. Subtract x: x = 5. Then y = 10. Check: y = x + 5 → 10 = 5 + 5 ✓"
                  },
                  {
                            "type": "typed",
                            "q": "What method substitutes one equation into the other?",
                            "answer": "substitution",
                            "placeholder": "Name the method...",
                            "explanation": "The substitution method: solve one equation for a variable, then plug that expression into the other equation."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Human Body: Digestive System",
        "emoji": "🔬",
        "imageQuery": "digestive system diagram stomach intestines organs human body",
        "content": "The **digestive system** breaks food into nutrients your cells can use.\n\n**The journey of food:**\n1. **Mouth** — mechanical + chemical breakdown (saliva has amylase)\n2. **Esophagus** — transports to stomach\n3. **Stomach** — acid (pH 2!) breaks down proteins\n4. **Small intestine** — most absorption happens here (20 feet long!)\n5. **Large intestine** — absorbs water, forms waste\n6. **Liver & Pancreas** — produce digestive enzymes and bile",
        "keyFact": "Your small intestine is about 20 feet long — folded up to fit inside you. It has tiny finger-like projections (villi) that massively increase surface area for absorption.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Where does most chemical digestion of food take place?",
                            "options": [
                                      "Mouth",
                                      "Stomach",
                                      "Small intestine",
                                      "Large intestine"
                            ],
                            "answer": 2,
                            "explanation": "The small intestine does most chemical digestion AND absorption — enzymes break down food, then nutrients absorb through the villi into the bloodstream."
                  },
                  {
                            "type": "mc",
                            "q": "What does the liver produce to help digest fats?",
                            "options": [
                                      "Stomach acid",
                                      "Insulin",
                                      "Bile",
                                      "Amylase"
                            ],
                            "answer": 2,
                            "explanation": "The liver produces bile, which is stored in the gallbladder and released into the small intestine to break down fats into smaller droplets."
                  },
                  {
                            "type": "typed",
                            "q": "What is the muscular tube that pushes food from mouth to stomach called?",
                            "answer": "esophagus",
                            "placeholder": "Name the tube...",
                            "explanation": "The esophagus uses muscular contractions (peristalsis) to push food down to the stomach — it works through muscle action, not just gravity."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The Declaration of Independence",
        "emoji": "🏛️",
        "imageQuery": "Declaration of Independence 1776 founding document Jefferson parchment",
        "content": "July 4, 1776: the Continental Congress adopted the Declaration of Independence.\n\n**Thomas Jefferson's key ideas:**\n- All men are created equal\n- They have unalienable rights: **life, liberty, and pursuit of happiness**\n- Governments derive power from **consent of the governed**\n- If government violates these rights, people can abolish it\n\n**The contradiction:** Jefferson wrote \"all men are created equal\" while enslaving over 100 people.\n\n**The document's impact:** Inspired revolutions worldwide — France (1789), Haiti (1804), Latin America.",
        "keyFact": "The Declaration was a radical idea: that governments answer to the people, not the other way around.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In what year was the Declaration of Independence signed?",
                            "options": [
                                      "1775",
                                      "1776",
                                      "1783",
                                      "1787"
                            ],
                            "answer": 1,
                            "explanation": "The Declaration of Independence was adopted on July 4, 1776 — which is why Americans celebrate July 4th as Independence Day."
                  },
                  {
                            "type": "mc",
                            "q": "Who was the primary author of the Declaration of Independence?",
                            "options": [
                                      "George Washington",
                                      "Benjamin Franklin",
                                      "Thomas Jefferson",
                                      "John Adams"
                            ],
                            "answer": 2,
                            "explanation": "Thomas Jefferson wrote the first draft. Franklin and Adams made edits before Congress approved it."
                  },
                  {
                            "type": "typed",
                            "q": "What document did Jefferson draw heavily from when writing about 'unalienable rights'?",
                            "answer": "Locke",
                            "placeholder": "Which philosopher?",
                            "explanation": "John Locke's ideas about life, liberty, and property heavily influenced Jefferson's 'life, liberty, and the pursuit of happiness.'"
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
            "q": "What does the \"solution\" to a system of equations represent?",
            "options": [
              "The slope of both lines",
              "The point where both lines intersect",
              "The y-intercept of the first equation",
              "The average of both equations"
            ],
            "answer": 1,
            "explanation": "The solution is the (x,y) point satisfying BOTH equations."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Solve the system: y = 3x and y = x + 4",
            "options": [
              "(1,3)",
              "(2,6)",
              "(3,9)",
              "(4,8)"
            ],
            "answer": 1,
            "explanation": "3x = x+4 → 2x=4 → x=2, y=6."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Two lines have the same slope, different y-intercepts. Solutions?",
            "options": [
              "One",
              "Two",
              "None",
              "Infinite"
            ],
            "answer": 2,
            "explanation": "Same slope = parallel lines = never intersect = no solution."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: y = x + 3 and y = 2x + 1",
            "options": [
              "(1,4)",
              "(2,5)",
              "(3,6)",
              "(4,7)"
            ],
            "answer": 1,
            "explanation": "x+3=2x+1 → x=2, y=5."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Where does most nutrient absorption happen?",
            "options": [
              "Stomach",
              "Small intestine",
              "Large intestine",
              "Mouth"
            ],
            "answer": 1,
            "explanation": "The small intestine (20 feet long!) is the primary site of nutrient absorption."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is the pH of stomach acid?",
            "options": [
              "7 (neutral)",
              "10 (basic)",
              "2 (very acidic)",
              "5 (mildly acidic)"
            ],
            "answer": 2,
            "explanation": "Stomach acid has pH around 2 — highly acidic, which breaks down proteins and kills bacteria."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What role does the liver play in digestion?",
            "options": [
              "Produces stomach acid",
              "Makes digestive enzymes and bile that break down fats",
              "Absorbs all nutrients",
              "Stores waste products"
            ],
            "answer": 1,
            "explanation": "The liver produces bile (which breaks down fats) and detoxifies substances — critical to digestion."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why does the small intestine have villi?",
            "options": [
              "To slow food down",
              "To massively increase surface area for absorption",
              "To produce enzymes",
              "To kill bacteria"
            ],
            "answer": 1,
            "explanation": "Villi (tiny finger-like projections) dramatically increase the surface area available to absorb nutrients."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "When was the Declaration of Independence adopted?",
            "options": [
              "July 4, 1775",
              "July 4, 1776",
              "July 4, 1777",
              "July 4, 1778"
            ],
            "answer": 1,
            "explanation": "July 4, 1776 — Independence Day."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Jefferson wrote that governments get their power from:",
            "options": [
              "God",
              "Military force",
              "Consent of the governed",
              "Tradition and inheritance"
            ],
            "answer": 2,
            "explanation": "\"Consent of the governed\" — this was radical. Governments answer to people, not the reverse."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What was the central contradiction of the Declaration?",
            "options": [
              "It was written in English not French",
              "Jefferson wrote \"all men are created equal\" while enslaving over 100 people",
              "It didn't mention taxes",
              "Britain had signed it"
            ],
            "answer": 1,
            "explanation": "Jefferson's words proclaimed universal liberty while his actions enslaved human beings. This contradiction shaped American history."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The Declaration inspired revolutions in France (1789), Haiti (1804), and Latin America. Why was this idea so powerful?",
            "options": [
              "It was well written",
              "The idea that people can overthrow unjust governments was radically new and universal",
              "France and America were allies",
              "The US was militarily powerful"
            ],
            "answer": 1,
            "explanation": "The idea of popular sovereignty — that governments answer to people, not monarchs — was genuinely revolutionary and applicable everywhere."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You're in a room. There are 3 exits:\n- Door A: leads to a room with no air — you suffocate\n- Door B: leads to a room with a lethal laser grid\n- Door C: leads to a room filled with electric eels\n\nWhich door do you choose to survive?",
        "hint": "Think literally. Read each option very carefully. What actually kills you in each room?",
        "minWords": 20,
        "answer": "**Door C — the room filled with electric eels.**\n\nElectric eels need water to be dangerous. In a room with no water, they're just... eels. You can walk out safely.\n\n**Door A:** No air = death. **Door B:** Laser grid = death.\n\nThis puzzle tests whether you apply assumptions automatically. \"Electric eels = dangerous\" is an assumption — the danger comes from the water, not the eel itself. Always question your assumptions."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "📺",
        "formatName": "Watch & Discover",
        "partA": {
          "url": "https://www.youtube.com/watch?v=Qpx8BHGKFxc",
          "videoTitle": "Systems of Equations — Khan Academy",
          "instruction": "Watch the first 5 minutes. Pay attention to how graphing two lines finds the solution visually."
        },
        "partB": {
          "prompt": "Think about where systems of equations appear in real life: when two things change at different rates and you need to find when they're equal.",
          "questions": [
            "Give one real-life example of a \"system of equations\" — two things changing at different rates where you need to find when they're equal.",
            "What happened in the video when two lines were parallel? What does that mean in real life?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain how finding where two lines intersect is actually the same as solving a real-world problem. Use a specific example you came up with.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "The Declaration of Independence",
        "prompt": "Teach someone about the Declaration's central idea:\n\n**\"Jefferson wrote that all people have unalienable rights — life, liberty, pursuit of happiness. And that governments get their power from the people. If the government violates those rights, people can change it.\"**\n\nThen:\n1. Ask: \"Do you think this idea was truly radical in 1776?\"\n2. Discuss: \"Jefferson wrote this while enslaving people. How do you make sense of that?\"\n3. Ask: \"Is this idea still radical today?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to the contradiction? Do they think the idea is still radical today? Why?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Abhi trains at 2 missions/hour. His friend trains at 3 missions/hour but started 4 missions ahead.\n\n**Part A:** Write equations for each person's total missions after h hours.\n\n**Part B:** When does Abhi's friend catch up? (System of equations)\n\n**Part C:** At that moment, how many total missions has each completed?\n\n**Part D — Thatha Level 🧮:** Abhi wants to be exactly 10 missions ahead of his friend after starting behind. At what point can he achieve this, and how many hours of training does it take?",
        "hint": "Part B: Set the two equations equal. Part D: Abhi's missions - Friend's missions = 10. Write that as an equation.",
        "answer": "Part A: Abhi=2h, Friend=3h+4. Wait — Abhi starts behind. If Abhi starts at 0 and friend at 4: Abhi=2h, Friend=4. Abhi never catches up if friend stops at 4. Reread — friend trains at 3/hr. Abhi: 2h, Friend: 3h+4. 2h=3h+4 → -h=4 → h=-4 (impossible — Abhi never catches up since friend is faster AND ahead). Part D: This is impossible with these rates. Discussion point: what would Abhi need to change?"
      },
      "telugu": {
        "type": "telugu",
        "theme": "Food Words",
        "newPhrases": [
          {
            "telugu": "అన్నం, పప్పు, కూర",
            "romanized": "Annam, pappu, kuura",
            "english": "Rice, dal/lentils, curry/vegetable dish",
            "tip": "The holy trinity of Telugu food. Annam = cooked rice. Pappu = dal. Kuura = any cooked vegetable or curry."
          },
          {
            "telugu": "నాకు [food] అంటే ఇష్టం",
            "romanized": "Naaku [food] ante ishtam",
            "english": "I like [food]",
            "tip": "\"Ante\" is very Telangana — meaning \"means/that thing called.\" Naaku pappu ante ishtam = I love dal."
          },
          {
            "telugu": "ఇది చాలా రుచిగా ఉంది",
            "romanized": "Idi chaalaa ruchigaa undi",
            "english": "This is very tasty",
            "tip": "Ruchi = taste. The most important phrase at any Telugu meal!"
          },
          {
            "telugu": "ఇంకొంచెం కావాలి",
            "romanized": "Inkoncem kaavaali",
            "english": "I want a little more",
            "tip": "Inkonchem = a little more (Telangana: \"inko\" + \"conchem\"). More natural than \"marinta.\" Perfect for second helpings."
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
            "romanized": "Amma",
            "options": [
              "Hello / Greetings",
              "Mom",
              "I am Abhi",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Amma = Mom."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "At your next meal, react to the food in Telugu. At least one sentence — even just \"Idi chaalaa ruchigaa undi!\"",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 12,
    "title": "Heart of the Matter",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Systems — Substitution Method",
        "emoji": "🔢",
        "imageQuery": "substitution method algebra system equations solve steps",
        "content": "**Substitution** is the cleanest way to solve systems algebraically.\n\n**Steps:**\n1. Solve one equation for one variable\n2. Substitute that expression into the other equation\n3. Solve for the remaining variable\n4. Plug back to find the other\n\n**Example:**\nx + y = 10\n2x - y = 5\n\nStep 1: x = 10 - y\nStep 2: 2(10-y) - y = 5 → 20 - 2y - y = 5 → -3y = -15 → y = 5\nStep 3: x = 10 - 5 = **5**\nSolution: (5, 5) ✓",
        "keyFact": "Substitution works best when one equation is already solved for a variable (or easy to solve).",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Solve using substitution: y = 2x and x + y = 9. What is x?",
                            "options": [
                                      "x = 3",
                                      "x = 6",
                                      "x = 9",
                                      "x = 2"
                            ],
                            "answer": 0,
                            "explanation": "Substitute y=2x into x+y=9: x+2x=9, 3x=9, x=3. Then y=6. Check: 3+6=9 ✓"
                  },
                  {
                            "type": "typed",
                            "q": "In substitution, what do you do with the expression you found?",
                            "answer": "substitute",
                            "placeholder": "What's the step?",
                            "explanation": "You take one variable's expression and substitute (plug) it into the other equation — replacing that variable so you have one equation with one unknown."
                  },
                  {
                            "type": "mc",
                            "q": "Which equation is best to start with when using substitution?",
                            "options": [
                                      "The equation with the most variables",
                                      "The equation already solved for one variable",
                                      "The longer equation",
                                      "The equation with fractions"
                            ],
                            "answer": 1,
                            "explanation": "Start with the equation already solved for one variable (like y = 2x+1) — it's ready to substitute directly without extra algebra steps."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Circulatory System",
        "emoji": "🫀",
        "imageQuery": "circulatory system heart blood vessels arteries veins diagram",
        "content": "The **circulatory system** delivers oxygen and nutrients to every cell — and removes waste.\n\n**Key parts:**\n- **Heart** — 4 chambers (2 atria, 2 ventricles), beats ~100,000 times per day\n- **Arteries** — carry blood AWAY from heart (oxygenated, except pulmonary)\n- **Veins** — carry blood TO the heart (deoxygenated, except pulmonary)\n- **Capillaries** — tiny vessels where actual exchange of O₂/CO₂ happens\n\n**Pulmonary circuit:** heart → lungs → back to heart\n**Systemic circuit:** heart → body → back to heart",
        "keyFact": "Your heart beats about 100,000 times per day — 35 million times per year — without ever stopping for rest.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What does the heart's left side pump?",
                            "options": [
                                      "Deoxygenated blood to lungs",
                                      "Oxygenated blood to the body",
                                      "Blood to the kidneys only",
                                      "Blood back from the body"
                            ],
                            "answer": 1,
                            "explanation": "The left side pumps oxygenated blood to the whole body. The right side pumps deoxygenated blood to the lungs to pick up oxygen."
                  },
                  {
                            "type": "mc",
                            "q": "What is the largest artery in the body?",
                            "options": [
                                      "Vena cava",
                                      "Aorta",
                                      "Pulmonary artery",
                                      "Carotid artery"
                            ],
                            "answer": 1,
                            "explanation": "The aorta is the largest artery — it carries oxygenated blood directly from the heart's left ventricle to the rest of the body."
                  },
                  {
                            "type": "typed",
                            "q": "What do red blood cells carry throughout the body?",
                            "answer": "oxygen",
                            "placeholder": "What do they carry?",
                            "explanation": "Red blood cells contain hemoglobin which binds to oxygen and carries it to every cell in your body."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Valley Forge & the French Alliance",
        "emoji": "🏴",
        "imageQuery": "Valley Forge 1777 Washington soldiers winter suffering Continental Army",
        "content": "Winter 1777-78: Washington's army camped at Valley Forge, Pennsylvania.\n\n**Conditions:**\n- 12,000 soldiers; 2,500 died from cold, disease, starvation\n- Few supplies, inadequate clothing\n- Soldiers wrapped feet in rags\n\n**The turning point:**\nFriedrich von Steuben (Prussian general) drilled the army into a disciplined fighting force.\n\n**France enters (1778):**\nAfter the American victory at Saratoga (1777), France officially joined against Britain.\nFrench money, troops, and crucially — **naval power** — changed the entire war.",
        "keyFact": "Without the French alliance, the American Revolution may well have failed. Benjamin Franklin spent years in Paris convincing France to join.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was Valley Forge?",
                            "options": [
                                      "A major American victory",
                                      "The Continental Army's brutal winter encampment in 1777-1778",
                                      "A French military base",
                                      "The final battle of the Revolution"
                            ],
                            "answer": 1,
                            "explanation": "Valley Forge was where Washington's army spent a brutal winter — thousands died from cold, hunger, and disease. It tested the army's resolve to its absolute limits."
                  },
                  {
                            "type": "mc",
                            "q": "Who trained American soldiers at Valley Forge?",
                            "options": [
                                      "Benjamin Franklin",
                                      "Marquis de Lafayette",
                                      "Friedrich von Steuben",
                                      "George Washington himself"
                            ],
                            "answer": 2,
                            "explanation": "Prussian military officer Friedrich von Steuben drilled and trained the Continental Army at Valley Forge — transforming ragged soldiers into disciplined fighters."
                  },
                  {
                            "type": "typed",
                            "q": "What 1777 American victory convinced France to officially join as America's ally?",
                            "answer": "Saratoga",
                            "placeholder": "Name the battle...",
                            "explanation": "The Battle of Saratoga was the turning point — America's first major victory proved they could win, convincing France to sign a formal alliance in 1778."
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
            "q": "Solve using substitution: y = 3x and x + y = 8",
            "options": [
              "(1,3)",
              "(2,6)",
              "(3,9)",
              "(4,12)"
            ],
            "answer": 1,
            "explanation": "Substitute y=3x into x+y=8: x+3x=8 → 4x=8 → x=2, y=6."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Solve: y = x - 2 and 2x + y = 10",
            "options": [
              "(3,1)",
              "(4,2)",
              "(5,3)",
              "(6,4)"
            ],
            "answer": 1,
            "explanation": "Sub y=x-2: 2x+(x-2)=10 → 3x=12 → x=4, y=2."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Which equation should you solve first in: 2x + 3y = 12 and y = 2x - 4?",
            "options": [
              "First equation for x",
              "First equation for y",
              "Second equation for x",
              "Second equation — already solved for y"
            ],
            "answer": 3,
            "explanation": "When an equation is already solved for a variable, start there. y=2x-4 is already solved for y."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "Two sorcerers together complete 20 missions. Sorcerer A does 4 more than Sorcerer B. How many did each complete?",
            "options": [
              "A=10,B=10",
              "A=12,B=8",
              "A=14,B=6",
              "A=16,B=4"
            ],
            "answer": 1,
            "explanation": "A+B=20 and A=B+4. Sub: (B+4)+B=20 → 2B=16 → B=8, A=12."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "How many times does the heart beat per day?",
            "options": [
              "1,000",
              "10,000",
              "100,000",
              "1,000,000"
            ],
            "answer": 2,
            "explanation": "The heart beats about 100,000 times per day — never resting."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What do arteries do?",
            "options": [
              "Carry blood to the heart",
              "Carry blood away from the heart",
              "Exchange gases with cells",
              "Filter blood"
            ],
            "answer": 1,
            "explanation": "Arteries carry blood AWAY from the heart (A for away, A for arteries)."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Where does actual gas exchange (O₂ and CO₂) happen?",
            "options": [
              "Heart",
              "Arteries",
              "Veins",
              "Capillaries"
            ],
            "answer": 3,
            "explanation": "Capillaries are so thin that oxygen and carbon dioxide can diffuse through their walls directly into/out of cells."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "The pulmonary circuit carries blood from:",
            "options": [
              "Heart → body → heart",
              "Heart → lungs → heart",
              "Lungs → organs → heart",
              "Arteries → veins → capillaries"
            ],
            "answer": 1,
            "explanation": "Pulmonary = lungs. The pulmonary circuit is heart → lungs → heart, getting blood oxygenated."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "Where did Washington's army spend the brutal winter of 1777-78?",
            "options": [
              "Gettysburg",
              "Saratoga",
              "Valley Forge",
              "Yorktown"
            ],
            "answer": 2,
            "explanation": "Valley Forge — a brutal winter where 2,500 soldiers died, but the survivors emerged as a disciplined fighting force."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why did France officially enter the Revolutionary War in 1778?",
            "options": [
              "They hated Britain",
              "After American victory at Saratoga showed the colonists could win",
              "Franklin paid them",
              "They wanted American territory"
            ],
            "answer": 1,
            "explanation": "France needed proof the Americans could actually win. Saratoga (1777) was that proof."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What did Friedrich von Steuben contribute at Valley Forge?",
            "options": [
              "Food and supplies",
              "Diplomatic connections to France",
              "Drilled the Continental Army into a disciplined fighting force",
              "Medical care for sick soldiers"
            ],
            "answer": 2,
            "explanation": "Von Steuben, a Prussian military expert, transformed Washington's ragged army into a professional fighting force."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Why was French naval power so crucial to the Revolution's outcome?",
            "options": [
              "France had more soldiers",
              "Britain controlled the seas — French naval power neutralized that advantage",
              "French ships were faster",
              "America had no ports"
            ],
            "answer": 1,
            "explanation": "Britain's naval dominance was its greatest advantage. France's navy countered it, ultimately trapping Cornwallis at Yorktown."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You have a 3-liter jug and a 5-liter jug. No markings on either jug.\n\nYou need to measure exactly **4 liters** of water.\n\nHow do you do it?",
        "hint": "Think about what you can do: fill a jug, empty a jug, pour one into the other (until one is full or empty).",
        "minWords": 20,
        "answer": "**Method 1:**\n1. Fill 5L jug\n2. Pour from 5L into 3L until 3L is full → 5L has 2L left\n3. Empty the 3L jug\n4. Pour the 2L into 3L jug\n5. Fill 5L jug again\n6. Pour from 5L into 3L until full (needs 1 more liter)\n7. **5L jug now has 4L** ✓\n\n**Method 2 (fewer steps):**\n1. Fill 3L jug, pour into 5L\n2. Fill 3L jug again, pour into 5L (now 5L is full, 3L has 1L left)\n3. Empty 5L jug\n4. Pour 1L from 3L into 5L\n5. Fill 3L and pour into 5L → **5L has 4L** ✓"
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🌿",
        "formatName": "Go Outside",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find your resting pulse. Count your heartbeats for 15 seconds × 4. Then do 20 jumping jacks. Count again immediately. Count one more time after 2 minutes of rest."
        },
        "partB": {
          "prompt": "Use your circulatory system knowledge to explain what you observed.",
          "questions": [
            "What were your 3 pulse readings (rest, exercise, recovery)?",
            "Using circulatory system vocabulary, explain WHY your heart rate changed with exercise."
          ]
        },
        "writingPrompt": "In at least 50 words: explain the connection between what you just felt in your chest and the circulatory system diagram from today's lesson. What was your heart actually doing?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Circulatory System",
        "prompt": "Teach the circulatory system using a delivery analogy:\n\n**\"Your heart is like a pump in a delivery network. Arteries are highways going OUT from the distribution center. Veins are highways coming BACK. Capillaries are the tiny roads that actually reach each house — each cell.\"**\n\nThen:\n1. Ask them to feel their own pulse\n2. Explain what that pulse actually is (heart contracting)\n3. Ask: \"What happens to delivery systems when roads get blocked?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to feeling their own pulse? How did they answer the blocked roads question?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "history",
        "problem": "Write a diary entry from the perspective of a Continental Army soldier at Valley Forge, Winter 1777.\n\nRequirements:\n- At least 8 sentences\n- Include: weather conditions, your physical state, what you're fighting for, your doubts, and one thing keeping you going\n- SHOW the conditions (no emotion words — show us the cold, the hunger, the exhaustion through specifics)\n- End with why you haven't left yet",
        "hint": "Real soldiers at Valley Forge described wrapping bloody feet in rags, eating \"fire cakes\" (flour and water paste), and sleeping four to a tent.",
        "answer": "Should show: specific physical details (feet, food, cold), internal conflict, motivation, and a reason for staying. Show don't tell in practice."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Daily Actions",
        "newPhrases": [
          {
            "telugu": "నేను చదువుతున్నా",
            "romanized": "Nenu chaduvutunna",
            "english": "I am studying",
            "tip": "Chaduvutunna = am studying (Telangana: no \"-anu\" ending in casual speech). What you do every Mahoraga day!"
          },
          {
            "telugu": "నేను ఆడుతున్నా",
            "romanized": "Nenu aaḍutunna",
            "english": "I am playing",
            "tip": "Aaḍutunna = am playing. Tell great-grandma when you take breaks!"
          },
          {
            "telugu": "నేను తింటున్నా",
            "romanized": "Nenu tinṭunna",
            "english": "I am eating",
            "tip": "Tinṭunna = am eating. All these present tense verbs end in \"-tunna\" in Telangana Telugu."
          },
          {
            "telugu": "నేను నిద్రపోతున్నా",
            "romanized": "Nenu nidrapootu­nna",
            "english": "I am going to sleep",
            "tip": "Nidrapootunna = going to sleep. Say this as your goodnight to great-grandma!"
          },
          {
            "telugu": "నేను వస్తున్నా",
            "romanized": "Nenu vastunna",
            "english": "I am coming",
            "tip": "Vastunna = am coming. When someone calls you — \"Nenu vastunna!\""
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Avunu",
            "options": [
              "No",
              "Yes",
              "Okay / Alright",
              "Thank you"
            ],
            "answer": 1,
            "explanation": "Avunu = Yes."
          },
          {
            "romanized": "Maa andaruu",
            "options": [
              "Yes",
              "All of us / Our whole family",
              "No",
              "Okay / Alright"
            ],
            "answer": 1,
            "explanation": "Maa andaruu = All of us / Our whole family."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma a full day in present tense: \"Nenu chaduvutunna, tinṭunna...\" Give her a picture of your day.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 13,
    "title": "Bones & Breakthroughs",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Percents: Discounts & Tax",
        "emoji": "🔢",
        "imageQuery": "percentage discount tax sale price math calculation",
        "content": "**Percent** means \"per hundred.\" Convert by dividing by 100.\n\n**Finding a percent of a number:**\n30% of 150 = 0.30 × 150 = **45**\n\n**Discount (sale price):**\n$80 jacket, 25% off:\nDiscount = 0.25 × 80 = $20\nSale price = 80 - 20 = **$60**\nOR: Sale price = 0.75 × 80 = **$60** (faster!)\n\n**Tax:**\n$60 + 8.5% tax:\nTax = 0.085 × 60 = $5.10\nTotal = **$65.10**",
        "keyFact": "Multiplying by (1 - discount) or (1 + tax) is faster than calculating the change separately. This is how stores' computer systems work.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "A shirt costs $40 and is 25% off. What is the sale price?",
                            "options": [
                                      "$30",
                                      "$10",
                                      "$15",
                                      "$35"
                            ],
                            "answer": 0,
                            "explanation": "25% of $40 = $10 discount. $40 - $10 = $30. Or multiply: $40 × 0.75 = $30."
                  },
                  {
                            "type": "typed",
                            "q": "What do you multiply a price by to find 80% of it (after a 20% discount)?",
                            "answer": "0.8",
                            "placeholder": "Enter the decimal...",
                            "explanation": "100% - 20% = 80%. Convert to decimal: 80% = 0.8. Multiply the price by 0.8 to get the discounted price."
                  },
                  {
                            "type": "mc",
                            "q": "Sales tax of 8% is added to a $50 item. What is the total?",
                            "options": [
                                      "$54",
                                      "$58",
                                      "$42",
                                      "$56"
                            ],
                            "answer": 0,
                            "explanation": "8% of $50 = $4. $50 + $4 = $54. Or multiply: $50 × 1.08 = $54."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Skeletal & Muscular Systems",
        "emoji": "🦴",
        "imageQuery": "skeletal system bones muscles diagram human body structure",
        "content": "**Skeletal system:** 206 bones. Functions:\n- Support and structure\n- Protect organs (skull protects brain, ribs protect heart/lungs)\n- Produce blood cells (red bone marrow)\n- Store minerals (calcium, phosphorus)\n\n**Muscular system:** 3 types:\n- **Skeletal (voluntary)** — you control these\n- **Smooth (involuntary)** — organs, digestive tract\n- **Cardiac (involuntary)** — heart only\n\n**How muscles work:** Muscles can only PULL, never push. They work in **antagonistic pairs** — one contracts while the other relaxes (bicep/tricep).",
        "keyFact": "Babies are born with about 270 bones. As you grow, bones fuse together until you have 206 as an adult.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What are the three main functions of the skeletal system?",
                            "options": [
                                      "Support, movement, and digestion",
                                      "Support, protection, and blood cell production",
                                      "Movement, digestion, and support",
                                      "Protection, temperature regulation, and movement"
                            ],
                            "answer": 1,
                            "explanation": "The skeleton provides structural support, protects organs (skull=brain, ribs=lungs/heart), and red bone marrow produces blood cells."
                  },
                  {
                            "type": "mc",
                            "q": "What type of muscle is the heart made of?",
                            "options": [
                                      "Skeletal muscle",
                                      "Smooth muscle",
                                      "Cardiac muscle",
                                      "Voluntary muscle"
                            ],
                            "answer": 2,
                            "explanation": "The heart is made of cardiac muscle — it's involuntary (you can't control it) and never fatigues, beating about 100,000 times per day."
                  },
                  {
                            "type": "typed",
                            "q": "What connects muscles to bones?",
                            "answer": "tendons",
                            "placeholder": "One word...",
                            "explanation": "Tendons connect muscles to bones (muscles MOVE bones). Ligaments connect bones to other bones (joints). Remember: tendons = muscles to bones."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "France Enters — Yorktown & Victory",
        "emoji": "⚔️",
        "imageQuery": "Yorktown 1781 Cornwallis surrender Revolutionary War victory",
        "content": "The American Revolution ended not with a bang but with a siege.\n\n**Yorktown (1781):**\nWashington + French General Rochambeau trapped British General Cornwallis on the Virginia peninsula. The French navy blocked escape by sea.\n\nAfter 3 weeks of bombardment, Cornwallis surrendered — October 19, 1781.\n\n**Treaty of Paris (1783):**\n- Britain formally recognized American independence\n- US gained all land east of the Mississippi\n\n**Why America won:**\n- Home territory advantage\n- French alliance (crucial)\n- British overconfidence and supply problems\n- High colonial motivation",
        "keyFact": "Cornwallis claimed he was \"sick\" and sent a subordinate to formally surrender. He couldn't bring himself to hand over his sword to Washington.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the significance of the Battle of Saratoga?",
                            "options": [
                                      "It ended the Revolutionary War",
                                      "It convinced France to ally with America",
                                      "It was the first battle of the war",
                                      "British captured New York"
                            ],
                            "answer": 1,
                            "explanation": "Saratoga (1777) was the turning point — the American victory convinced France to officially join as America's ally, providing ships, troops, and money."
                  },
                  {
                            "type": "mc",
                            "q": "Where did Cornwallis surrender, ending the Revolutionary War?",
                            "options": [
                                      "Philadelphia",
                                      "Boston",
                                      "Saratoga",
                                      "Yorktown"
                            ],
                            "answer": 3,
                            "explanation": "At Yorktown, Virginia (1781), Cornwallis surrendered to Washington and the French alliance, effectively ending the Revolutionary War."
                  },
                  {
                            "type": "typed",
                            "q": "What country's navy blocked British escape at Yorktown?",
                            "answer": "France",
                            "placeholder": "Which country?",
                            "explanation": "The French fleet blocked Chesapeake Bay, trapping Cornwallis. Without French help, Washington couldn't have won at Yorktown."
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
            "q": "20% of 250 =",
            "options": [
              "25",
              "50",
              "75",
              "100"
            ],
            "answer": 1,
            "explanation": "0.20 × 250 = 50."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "$120 item, 30% discount. Sale price?",
            "options": [
              "$36",
              "$84",
              "$90",
              "$96"
            ],
            "answer": 1,
            "explanation": "0.70 × 120 = $84. Or: 120 - (0.30×120) = 120-36 = $84."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "$75 + 8% tax. Total?",
            "options": [
              "$77",
              "$81",
              "$83",
              "$85"
            ],
            "answer": 1,
            "explanation": "75 × 1.08 = $81."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Sale price is $68 after 15% off. Original price?",
            "options": [
              "$75",
              "$78",
              "$80",
              "$85"
            ],
            "answer": 2,
            "explanation": "68 = 0.85 × original → original = 68/0.85 = $80."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "How many bones do adult humans have?",
            "options": [
              "170",
              "206",
              "270",
              "300"
            ],
            "answer": 1,
            "explanation": "Adults have 206 bones. Babies start with ~270, which fuse as they grow."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Which type of muscle is the heart?",
            "options": [
              "Skeletal",
              "Smooth",
              "Cardiac",
              "Voluntary"
            ],
            "answer": 2,
            "explanation": "The heart is cardiac muscle — involuntary and unique to the heart."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Muscles can only pull, never push. How do you push a door then?",
            "options": [
              "Muscles can push when needed",
              "You use bones to push while different muscles pull them into position",
              "Smooth muscles push",
              "The door pushes back"
            ],
            "answer": 1,
            "explanation": "When you push, you're using muscles that pull your arm bones into the pushing position. It's always a pull at the muscle level."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What is an \"antagonistic pair\" of muscles?",
            "options": [
              "Muscles that fight each other for control",
              "Pairs where one contracts while the other relaxes to create movement",
              "Muscles on opposite sides of the body",
              "The largest muscles in the body"
            ],
            "answer": 1,
            "explanation": "Bicep/tricep is the classic example — bicep contracts to lift, tricep relaxes. To lower, tricep contracts and bicep relaxes."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "Where did Cornwallis surrender in 1781?",
            "options": [
              "Saratoga",
              "Boston",
              "Valley Forge",
              "Yorktown"
            ],
            "answer": 3,
            "explanation": "Yorktown, Virginia — the final major battle of the Revolutionary War."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What made Yorktown a successful trap?",
            "options": [
              "Superior American numbers",
              "Washington and the French army on land + French navy blocking sea escape",
              "Better weapons",
              "British surrender before fighting"
            ],
            "answer": 1,
            "explanation": "Cornwallis had no escape — American/French forces on land, French navy at sea. A perfect military trap."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What did the Treaty of Paris (1783) accomplish?",
            "options": [
              "Started the war",
              "Created the Constitution",
              "Formally recognized American independence and set boundaries",
              "Formed the French alliance"
            ],
            "answer": 2,
            "explanation": "The 1783 Treaty of Paris officially ended the war, with Britain recognizing US independence and setting the western boundary at the Mississippi River."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Why was the French naval presence at Yorktown so decisive?",
            "options": [
              "French ships had better cannon",
              "It prevented British reinforcement or escape by sea — making American victory inevitable",
              "France brought more troops than America",
              "The French navy sank the British fleet"
            ],
            "answer": 1,
            "explanation": "Without sea escape, Cornwallis was completely surrounded. The French navy turned a battle into an inescapable trap."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A man rides into town on a horse. He arrives on Friday. He stays for 3 days. He leaves on Friday.\n\nHow is this possible?",
        "hint": "You're assuming something about what \"Friday\" means. Question your assumption.",
        "minWords": 20,
        "answer": "**The horse's name is Friday!** 🐴\n\nThe man arrives on a horse named Friday, stays 3 days, and leaves on (the horse named) Friday.\n\nThis puzzle works because we automatically read \"Friday\" as a day of the week — our brain pattern-matches immediately. But nothing in the puzzle says Friday is a day.\n\nIn math and logic: read every word literally before applying assumptions."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "📜",
        "formatName": "Primary Source",
        "partA": {
          "url": "https://founders.archives.gov/documents/Washington/99-01-02-11749",
          "videoTitle": "Washington's letter from Valley Forge",
          "instruction": "Read the first 3 paragraphs of Washington's letter to Congress from Valley Forge (February 1778). What is his tone?"
        },
        "partB": {
          "prompt": "Washington was a careful writer who knew Congress would read his words closely.",
          "questions": [
            "How does Washington describe the condition of his troops?",
            "What is he asking Congress for? What tone does he use — desperate, commanding, pleading?"
          ]
        },
        "writingPrompt": "In at least 50 words: what does this primary source tell you about Washington's character and leadership style that a textbook summary wouldn't?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Percents in Real Life",
        "prompt": "Teach percents using a real purchase:\n\n**\"Find something in the house with a price tag, or use a recent receipt. Let's calculate the actual discount or tax.\"**\n\nThen:\n1. Find an item with a known price\n2. Calculate 20% off together\n3. Add 10% tax to the sale price\n4. Ask them: \"When did you last use percent math without thinking about it?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What item did you use? What was the final price after discount and tax? What did they say about using percents?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Jujutsu High has a training sale. Original XP cost for Grade 1 training: 800 XP.\n\n**Part A:** There's a 35% discount. What is the sale price in XP?\n\n**Part B:** After the discount, there's a \"domain tax\" of 12%. What is the final price?\n\n**Part C:** Alternatively, can you multiply 800 by a single factor to get the final price directly? What is that factor?\n\n**Part D — Thatha Level 🧮:** The training price increases 8% each year. Write the price after n years as an equation. After how many years does the price exceed 1,200 XP? (Use 1.08^n — try n=4 and n=5.)",
        "hint": "Part C: 35% off = multiply by 0.65. Then 12% tax = multiply by 1.12. Combined = 0.65 × 1.12.",
        "answer": "Part A: 800×0.65=520 XP. Part B: 520×1.12=$582.40. Part C: 0.65×1.12=0.728 → 800×0.728=582.40. Part D: P(n)=800×(1.08)^n. n=4: 800×1.36=1,088. n=5: 800×1.47=1,176. n=6: 800×1.587=1,270 → exceeds 1,200 at year 6."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Telangana Question Words",
        "newPhrases": [
          {
            "telugu": "ఏంటి?",
            "romanized": "Enti?",
            "english": "What? / What is it?",
            "tip": "\"Enti?\" is very distinctly Telangana — you'll hear this constantly. More casual than \"Emiti?\" which is Andhra. This is what great-grandma uses."
          },
          {
            "telugu": "అది ఏంటి?",
            "romanized": "Adi enti?",
            "english": "What is that?",
            "tip": "Adi = that. Enti = what. Point at anything and ask!"
          },
          {
            "telugu": "ఎక్కడ ఉంది?",
            "romanized": "Ekkada undi?",
            "english": "Where is it?",
            "tip": "Ekkada = where. Undi = is. Drop \"idi\" (this) and it still works naturally."
          },
          {
            "telugu": "మీకు ఏం కావాలి?",
            "romanized": "Meeku em kaavaali?",
            "english": "What do you need? (respectful)",
            "tip": "\"Em\" instead of \"emi\" — Telangana drops the final vowel. Meeku em kaavaali = What do you need? Ask great-grandma this!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Naaku santoshangaa undi",
            "options": [
              "I am sad",
              "I am happy",
              "Very good! / Excellent!",
              "I don't know"
            ],
            "answer": 1,
            "explanation": "Naaku santoshangaa undi = I am happy."
          },
          {
            "romanized": "Padakoṇḍu, panneṇḍu, padamuuḍu",
            "options": [
              "I am happy",
              "Eleven, twelve, thirteen",
              "I am sad",
              "Very good! / Excellent!"
            ],
            "answer": 1,
            "explanation": "Padakoṇḍu, panneṇḍu, padamuuḍu = Eleven, twelve, thirteen."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Video call great-grandma. Point to things around her and ask \"Adi enti?\" — let her teach you new Telugu words!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 14,
    "title": "Percent Power",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Percent Change",
        "emoji": "🔢",
        "imageQuery": "percent change increase decrease calculation formula",
        "content": "**Percent change** measures how much something increased or decreased.\n\n**Formula:**\nPercent Change = (New - Old) / Old × 100\n\n**Increase example:**\nPrice goes from $40 to $52:\n(52-40)/40 × 100 = 12/40 × 100 = **30% increase**\n\n**Decrease example:**\nTest score drops from 85 to 68:\n(68-85)/85 × 100 = -17/85 × 100 ≈ **-20% (20% decrease)**\n\n**Important:** Always divide by the ORIGINAL value, not the new one.",
        "keyFact": "Always divide by the ORIGINAL value when calculating percent change — this is the most common mistake.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "A game costs $80 and goes on sale for $60. What is the percent decrease?",
                            "options": [
                                      "20%",
                                      "25%",
                                      "33%",
                                      "40%"
                            ],
                            "answer": 1,
                            "explanation": "Percent change = (change/original) × 100 = (20/80) × 100 = 25% decrease."
                  },
                  {
                            "type": "typed",
                            "q": "A population grows from 500 to 600. What is the percent increase?",
                            "answer": "20",
                            "placeholder": "Enter the percent...",
                            "explanation": "Change = 100. Percent change = (100/500) × 100 = 20% increase. Always divide by the ORIGINAL value."
                  },
                  {
                            "type": "mc",
                            "q": "Which formula calculates percent change?",
                            "options": [
                                      "(new - old) × 100",
                                      "(new - old) / new × 100",
                                      "(new - old) / old × 100",
                                      "old / new × 100"
                            ],
                            "answer": 2,
                            "explanation": "Percent change = ((new - old) / old) × 100. Always divide by the original (old) value — not the new one."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "The Nervous System & Brain",
        "emoji": "🧠",
        "imageQuery": "human brain diagram nervous system neurons cerebral cortex",
        "content": "The **nervous system** is your body's communication network.\n\n**Central Nervous System:** Brain + spinal cord\n**Peripheral Nervous System:** All the other nerves\n\n**Brain regions:**\n- **Cerebrum** — largest part; thinking, memory, personality, movement\n- **Cerebellum** — balance and coordination\n- **Brain stem** — breathing, heart rate, basic survival\n- **Prefrontal cortex** — decision-making, impulse control (not fully developed until age 25!)\n\n**Neurons:** Nerve cells that transmit electrical signals. They communicate across **synapses** using chemical signals (neurotransmitters).",
        "keyFact": "The prefrontal cortex — responsible for decision-making and impulse control — isn't fully developed until age 25. This is why teenagers take more risks.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the brain's command center for thinking and decision-making?",
                            "options": [
                                      "Cerebellum",
                                      "Brain stem",
                                      "Cerebrum",
                                      "Hippocampus"
                            ],
                            "answer": 2,
                            "explanation": "The cerebrum is the largest part of the brain — it handles thinking, language, memory, and voluntary movement."
                  },
                  {
                            "type": "mc",
                            "q": "What do neurons use to send signals?",
                            "options": [
                                      "Blood",
                                      "Electrical and chemical signals",
                                      "Sound waves",
                                      "Oxygen only"
                            ],
                            "answer": 1,
                            "explanation": "Neurons communicate through electrical signals within the cell and chemical signals (neurotransmitters) across synapses between cells."
                  },
                  {
                            "type": "typed",
                            "q": "What is the gap between two neurons called?",
                            "answer": "synapse",
                            "placeholder": "One word...",
                            "explanation": "A synapse is the tiny gap between neurons where neurotransmitters carry signals from one neuron to the next."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Argumentative Writing",
        "emoji": "✍️",
        "imageQuery": "argumentative writing structure claim evidence reasoning essay",
        "content": "An **argument** makes a claim and supports it with evidence and reasoning.\n\n**Structure (PEEL):**\n- **P**oint — your claim\n- **E**vidence — specific facts, data, examples\n- **E**xplanation — connect evidence to your point\n- **L**ink — transition to next point\n\n**Strong argument vs. weak:**\n❌ Weak: \"Social media is bad because it wastes time.\"\n✅ Strong: \"Social media negatively impacts teen mental health: a 2019 study found 60% more anxiety in teens who used social media 3+ hours daily compared to those who used it less than 1 hour.\"",
        "keyFact": "The strongest arguments acknowledge the other side (counterclaim) and explain why your evidence is more persuasive.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What are the three main parts of an argumentative essay?",
                            "options": [
                                      "Introduction, body, conclusion",
                                      "Claim, evidence, counterclaim/rebuttal",
                                      "Hook, plot, resolution",
                                      "Opinion, fact, opinion"
                            ],
                            "answer": 1,
                            "explanation": "Strong arguments have: a clear Claim (your position), Evidence (facts/examples supporting it), and a Counterclaim with Rebuttal (acknowledge and defeat the other side)."
                  },
                  {
                            "type": "mc",
                            "q": "Which of these is the strongest piece of evidence?",
                            "options": [
                                      "'Most people agree that...'",
                                      "'I think that...'",
                                      "'A 2023 study of 10,000 participants found...'",
                                      "'It seems like...'"
                            ],
                            "answer": 2,
                            "explanation": "Specific data from credible studies is the strongest evidence. Vague appeals to what 'people think' or personal opinion don't hold up to scrutiny."
                  },
                  {
                            "type": "typed",
                            "q": "What is the term for the sentence that states your argument's main position?",
                            "answer": "thesis",
                            "placeholder": "One word...",
                            "explanation": "The thesis statement states your argument's central claim. Everything in your essay — evidence, analysis, rebuttal — should support your thesis."
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
            "q": "Price rises from $50 to $60. Percent increase?",
            "options": [
              "10%",
              "20%",
              "25%",
              "50%"
            ],
            "answer": 1,
            "explanation": "(60-50)/50 × 100 = 10/50 × 100 = 20%."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Score drops from 80 to 64. Percent decrease?",
            "options": [
              "16%",
              "20%",
              "25%",
              "32%"
            ],
            "answer": 1,
            "explanation": "(64-80)/80 × 100 = -16/80 × 100 = -20%."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Population was 200, now 250. Percent change?",
            "options": [
              "20%",
              "25%",
              "30%",
              "50%"
            ],
            "answer": 1,
            "explanation": "(250-200)/200 × 100 = 50/200 × 100 = 25%."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "An item increased 40% and now costs $70. Original price?",
            "options": [
              "$42",
              "$50",
              "$56",
              "$98"
            ],
            "answer": 1,
            "explanation": "70 = 1.40 × original → original = 70/1.40 = $50."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What does the cerebellum control?",
            "options": [
              "Personality and thinking",
              "Balance and coordination",
              "Breathing and heart rate",
              "Decision-making"
            ],
            "answer": 1,
            "explanation": "The cerebellum handles balance, coordination, and fine motor control."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "The prefrontal cortex is fully developed around age:",
            "options": [
              "13",
              "18",
              "21",
              "25"
            ],
            "answer": 3,
            "explanation": "The prefrontal cortex — controlling decisions and impulse control — isn't fully developed until about age 25."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "How do neurons communicate with each other?",
            "options": [
              "Direct physical contact",
              "Through blood vessels",
              "Electrical signals across synapses using chemical neurotransmitters",
              "Through the brain stem only"
            ],
            "answer": 2,
            "explanation": "Neurons send electrical signals that trigger chemical neurotransmitters to cross synapses to the next neuron."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Which brain region handles breathing and heart rate?",
            "options": [
              "Cerebrum",
              "Cerebellum",
              "Brain stem",
              "Prefrontal cortex"
            ],
            "answer": 2,
            "explanation": "The brain stem controls vital automatic functions — breathing, heart rate, blood pressure. You can't consciously control these."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "What is the \"P\" in PEEL argumentative structure?",
            "options": [
              "Proof",
              "Point (your claim)",
              "Paragraph",
              "Position"
            ],
            "answer": 1,
            "explanation": "P = Point — your claim or argument statement."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Which is a stronger argument?",
            "options": [
              "\"Exercise is good for you.\"",
              "\"Exercise improves mental health: studies show 45 minutes of cardio reduces depression symptoms by 47%.\"",
              "\"Everyone should exercise because it's healthy.\"",
              "\"Exercise is important in my opinion.\""
            ],
            "answer": 1,
            "explanation": "Specific evidence (45 min cardio, 47% reduction) makes an argument strong. Vague statements don't."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Why does acknowledging a counterclaim make your argument STRONGER?",
            "options": [
              "It makes it longer",
              "It shows you've considered and can refute opposing views",
              "It makes the reader feel smarter",
              "Teachers require it"
            ],
            "answer": 1,
            "explanation": "Acknowledging the other side shows intellectual honesty and allows you to directly refute it — making your position more persuasive."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "What's missing from this argument? \"We should have a later school start time. Students would learn better.\"",
            "options": [
              "A claim",
              "Evidence connecting the claim to the conclusion",
              "A counterclaim",
              "A conclusion"
            ],
            "answer": 1,
            "explanation": "The claim is there (\"later start time\") and the point is there (\"learn better\"), but there's NO evidence or reasoning connecting them."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "How many piano tuners are there in the city of Seattle?\n\n(No looking it up — estimate using logical reasoning and what you know.)",
        "hint": "Break it into parts: How many people in Seattle? How often do pianos get tuned? How many pianos are there? How many pianos can one tuner service per day/year?",
        "minWords": 20,
        "answer": "**Estimation (Fermi problem):**\n\n- Seattle population: ~750,000 people\n- Average household: 2.5 people → ~300,000 households\n- Assume 1 in 20 households has a piano → ~15,000 pianos\n- Add schools, churches, studios → ~20,000 pianos\n- Pianos tuned once/year → 20,000 tunings/year\n- A tuner does ~4 tunings/day × 250 days = 1,000 tunings/year\n- **20,000 ÷ 1,000 = ~20 piano tuners in Seattle**\n\nActual answer is around 30-50. You were in the right range! This is called Fermi estimation."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🔍",
        "formatName": "Spot It In The Wild",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find 3 real percentages in your daily life today — on receipts, food labels, sale signs, apps, websites. Photograph or screenshot each one."
        },
        "partB": {
          "prompt": "For each percent you find, calculate what it actually means in dollars, calories, or whatever the unit is.",
          "questions": [
            "What 3 percentages did you find and where?",
            "For each one, what does that percentage actually calculate to?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain why percent is one of the most practically useful math concepts in everyday life. Use your 3 specific examples as evidence.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "The Brain & Decision Making",
        "prompt": "Teach the prefrontal cortex fact to a family member:\n\n**\"The part of the brain that controls decision-making and impulse control isn't fully developed until age 25. That's why teenagers take more risks — it's literally biology.\"**\n\nThen:\n1. Ask: \"Does knowing this change how you think about teenagers' decisions?\"\n2. Discuss: \"What does this mean for responsibilities we give teenagers vs. adults?\"\n3. Ask them: \"Do you feel like your decision-making improved a lot after age 25?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to the age-25 fact? What did they say about their own decision-making development?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "ela",
        "problem": "Write a 5-sentence PEEL paragraph arguing FOR or AGAINST this position:\n\n**\"12-year-olds should be allowed to choose their own school schedule.\"**\n\n- Sentence 1: Point (your claim)\n- Sentences 2-3: Evidence (at least one specific fact or statistic — look one up if needed)\n- Sentence 4: Explanation (how does your evidence prove your point?)\n- Sentence 5: Link (connect to broader significance)\n\nLabel each sentence with its PEEL letter.",
        "hint": "Strong evidence might include: research on student autonomy, student motivation studies, or examples from schools that already do this.",
        "answer": "Should have clearly labeled PEEL structure, at least one specific piece of evidence, and explanation connecting evidence to claim."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Feelings — Excited, Surprised, Scared",
        "newPhrases": [
          {
            "telugu": "నాకు భయంగా ఉంది",
            "romanized": "Naaku bhayangaa undi",
            "english": "I am scared / I feel afraid",
            "tip": "Bhayam = fear. Useful to share when something worries you. Great-grandma will want to comfort you."
          },
          {
            "telugu": "నేను ఆశ్చర్యపోయా",
            "romanized": "Nenu aashcharyapooyaa",
            "english": "I am amazed / I am surprised",
            "tip": "Aashcharya = wonder/amazement. Pooyaa = became (Telangana ending, no \"-nu\"). Use after a mind-blowing Mahoraga fact!"
          },
          {
            "telugu": "నాకు చాలా ఉత్సాహంగా ఉంది",
            "romanized": "Naaku chaalaa utsaahangaa undi",
            "english": "I am very excited",
            "tip": "Utsaaham = enthusiasm/excitement. A great feeling to share with family."
          },
          {
            "telugu": "నమ్మలేను!",
            "romanized": "Nammalenu!",
            "english": "I can't believe it! / Unbelievable!",
            "tip": "Short, punchy, very natural in Telangana. Drop the formalities and just say it!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Naaku nidra vastundi",
            "options": [
              "I am hungry",
              "I am sleepy",
              "I am thirsty",
              "I am tired"
            ],
            "answer": 1,
            "explanation": "Naaku nidra vastundi = I am sleepy."
          },
          {
            "romanized": "Erupu, neelam, pachcha",
            "options": [
              "I am sleepy",
              "Red, blue, green",
              "I am hungry",
              "I am thirsty"
            ],
            "answer": 1,
            "explanation": "Erupu, neelam, pachcha = Red, blue, green."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Share something from Mahoraga that surprised you, then say \"Nammalenu!\" Great-grandma will love your reaction.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 15,
    "title": "The Theorem",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "The Pythagorean Theorem",
        "emoji": "📐",
        "imageQuery": "Pythagorean theorem right triangle a squared b squared c squared visual",
        "content": "For any **right triangle**: **a² + b² = c²**\n\n- **a, b** = the legs (shorter sides)\n- **c** = hypotenuse (longest side, opposite the right angle)\n\n**Example:** Legs 3 and 4:\n3² + 4² = 9 + 16 = 25 → c = √25 = **5** ✓\n\n**Working backwards:** c=13, a=5:\n5² + b² = 13² → 25 + b² = 169 → b² = 144 → b = **12**\n\n**Common triples:** 3-4-5, 5-12-13, 8-15-17",
        "keyFact": "The Pythagorean Theorem was known by ancient Babylonians over 1,000 years before Pythagoras. He just gets the credit.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In a right triangle with legs 3 and 4, what is the hypotenuse?",
                            "options": [
                                      "5",
                                      "7",
                                      "6",
                                      "25"
                            ],
                            "answer": 0,
                            "explanation": "3² + 4² = 9 + 16 = 25. √25 = 5. This is the famous 3-4-5 right triangle!"
                  },
                  {
                            "type": "typed",
                            "q": "In the formula a² + b² = c², what does c represent?",
                            "answer": "hypotenuse",
                            "placeholder": "Which side?",
                            "explanation": "c is always the hypotenuse — the longest side, opposite the right angle. a and b are the two shorter legs."
                  },
                  {
                            "type": "mc",
                            "q": "Which of these is a right triangle?",
                            "options": [
                                      "Sides: 2, 3, 4",
                                      "Sides: 5, 12, 13",
                                      "Sides: 4, 5, 7",
                                      "Sides: 3, 4, 6"
                            ],
                            "answer": 1,
                            "explanation": "5² + 12² = 25 + 144 = 169 = 13². So 5, 12, 13 is a right triangle!"
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "The Immune System",
        "emoji": "🦠",
        "imageQuery": "immune system white blood cells antibodies lymphocytes diagram",
        "content": "The **immune system** is your body's defense force — recognizing and destroying invaders.\n\n**Innate immunity (first line):** Non-specific defense\n- Skin (barrier)\n- Fever (heat kills pathogens)\n- White blood cells (attack anything foreign)\n\n**Adaptive immunity (second line):** Specific defense\n- **B cells** — produce antibodies targeting specific pathogens\n- **T cells** — kill infected cells directly\n- **Memory cells** — remember past invaders → why vaccines work!\n\n**Vaccines:** Introduce a weakened/dead pathogen so immune system builds memory without getting sick.",
        "keyFact": "When you get a vaccine, your body builds memory cells. If the real pathogen shows up years later, your immune system recognizes and destroys it in hours instead of days.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What are antibodies?",
                            "options": [
                                      "Cells that attack bacteria directly",
                                      "Proteins that recognize and neutralize specific pathogens",
                                      "Cells in the lymph nodes",
                                      "Enzymes that digest viruses"
                            ],
                            "answer": 1,
                            "explanation": "Antibodies are Y-shaped proteins made by B cells that recognize specific pathogens and neutralize them — like locks designed for specific keys."
                  },
                  {
                            "type": "mc",
                            "q": "Why do vaccines work?",
                            "options": [
                                      "They kill all bacteria in the body",
                                      "They train the immune system to recognize a pathogen without causing disease",
                                      "They boost white blood cell count permanently",
                                      "They replace the immune system"
                            ],
                            "answer": 1,
                            "explanation": "Vaccines introduce a harmless version of a pathogen (dead, weakened, or just a protein). The immune system builds memory cells — so it responds fast if the real pathogen appears."
                  },
                  {
                            "type": "typed",
                            "q": "What cells produce antibodies to fight pathogens?",
                            "answer": "B cells",
                            "placeholder": "Name the cells...",
                            "explanation": "B cells (B lymphocytes) produce antibodies. T cells directly kill infected cells. Both are types of white blood cells in the adaptive immune system."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The Articles of Confederation — First Government Fails",
        "emoji": "🏛️",
        "imageQuery": "Articles of Confederation Constitutional Convention 1787 founding documents",
        "content": "After independence, the new nation needed a government. Their first attempt: the **Articles of Confederation (1781)**.\n\n**Why it failed:**\n- Federal government couldn't tax\n- Couldn't enforce laws\n- No national army\n- Each state acted like its own country\n- Required unanimous agreement to change\n\n**Shays' Rebellion (1786):** Debt-ridden farmers revolted in Massachusetts. The government couldn't respond.\n\n**The fix:** Constitutional Convention, Philadelphia, 1787 — 55 delegates rewrote the whole thing.",
        "keyFact": "The Founders intentionally made government weak under the Articles — they'd just fought a powerful central government. They overcorrected.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the main weakness of the Articles of Confederation?",
                            "options": [
                                      "Too much presidential power",
                                      "No Bill of Rights",
                                      "Congress couldn't tax or enforce laws — too weak",
                                      "States had too little power"
                            ],
                            "answer": 2,
                            "explanation": "Under the Articles, Congress couldn't collect taxes or enforce laws — it could only ask states for money. Without revenue or authority, the national government was powerless."
                  },
                  {
                            "type": "mc",
                            "q": "What 1786-87 event showed the Articles of Confederation were failing?",
                            "options": [
                                      "The Boston Massacre",
                                      "Shays' Rebellion",
                                      "The Stamp Act Crisis",
                                      "Valley Forge"
                            ],
                            "answer": 1,
                            "explanation": "Shays' Rebellion — Massachusetts farmers revolting against debt — showed the national government couldn't maintain order. It convinced leaders a stronger Constitution was needed."
                  },
                  {
                            "type": "typed",
                            "q": "How many states had to ratify any change to the Articles of Confederation?",
                            "answer": "all 13",
                            "placeholder": "How many states?",
                            "explanation": "Any amendment required unanimous approval from all 13 states — making the Articles nearly impossible to fix. This inflexibility was a fatal flaw."
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
            "q": "Right triangle, legs 6 and 8. Hypotenuse?",
            "options": [
              "10",
              "12",
              "14",
              "100"
            ],
            "answer": 0,
            "explanation": "6² + 8² = 36+64 = 100. √100 = 10."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "What is the hypotenuse?",
            "options": [
              "Either shorter side",
              "The side opposite the right angle (longest)",
              "The vertical side",
              "The horizontal side"
            ],
            "answer": 1,
            "explanation": "The hypotenuse is always the longest side, opposite the right angle."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Hypotenuse is 13, one leg is 5. Find the other leg.",
            "options": [
              "8",
              "10",
              "12",
              "√194"
            ],
            "answer": 2,
            "explanation": "5² + b² = 13². 25+b²=169. b²=144. b=12."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Is a triangle with sides 7, 24, and 25 a right triangle?",
            "options": [
              "Yes",
              "No",
              "Cannot determine",
              "Only if angle given"
            ],
            "answer": 0,
            "explanation": "7²+24²=49+576=625=25². Yes! ✓ (7-24-25 is a Pythagorean triple)."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What do B cells produce?",
            "options": [
              "Fever",
              "Antibodies targeting specific pathogens",
              "White blood cells",
              "Memory cells only"
            ],
            "answer": 1,
            "explanation": "B cells are the antibody factories of the adaptive immune system."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Why do vaccines work?",
            "options": [
              "They kill the pathogen permanently",
              "They make you briefly sick",
              "They cause the immune system to build memory cells without full infection",
              "They strengthen the innate immune system"
            ],
            "answer": 2,
            "explanation": "Vaccines introduce a harmless version of a pathogen, prompting memory cell creation. Future exposure triggers fast immune response."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What is the difference between innate and adaptive immunity?",
            "options": [
              "Innate is learned, adaptive is instinctive",
              "Innate is non-specific (attacks anything foreign), adaptive is specific (targets particular pathogens)",
              "Innate only works in children",
              "Adaptive is first, innate is second"
            ],
            "answer": 1,
            "explanation": "Innate immunity is your first line — broad and fast. Adaptive immunity is slower but precise, building specific antibodies."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why does a fever help fight infection?",
            "options": [
              "It makes you rest more",
              "Higher body temperature makes it harder for many pathogens to survive or reproduce",
              "It activates antibiotics",
              "It flushes pathogens out"
            ],
            "answer": 1,
            "explanation": "Many pathogens evolved to thrive at normal body temperature. Fever makes their environment inhospitable."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What was the main weakness of the Articles of Confederation?",
            "options": [
              "It had too many laws",
              "The federal government was too weak — couldn't tax, couldn't enforce laws",
              "It gave too much power to the president",
              "It didn't include the Bill of Rights"
            ],
            "answer": 1,
            "explanation": "The federal government under the Articles was almost powerless — couldn't tax citizens directly or enforce its own laws."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What was Shays' Rebellion and why did it matter?",
            "options": [
              "A revolt against the new Constitution",
              "Debt-ridden farmers revolted in Massachusetts, revealing the government couldn't maintain order",
              "A British attempt to retake America",
              "A colonial tax protest"
            ],
            "answer": 1,
            "explanation": "Shays' Rebellion (1786) showed that the government under the Articles was too weak to maintain order — accelerating the push for a stronger Constitution."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why did the Founders initially make government so weak under the Articles?",
            "options": [
              "They didn't know how to govern",
              "They overcorrected against British centralized power they'd just fought",
              "They wanted states to be independent countries",
              "They planned to strengthen it later"
            ],
            "answer": 1,
            "explanation": "Having just fought a powerful central government, the Founders overcorrected — making a federal government so weak it couldn't function."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The move from Articles of Confederation to the Constitution shows:",
            "options": [
              "Americans were quick to trust strong government",
              "Governments sometimes need adjustment when theory meets reality",
              "The Founders were confused from the start",
              "Strong federal power was always popular"
            ],
            "answer": 1,
            "explanation": "The Articles showed that ideas about governance need to be tested against reality. The Founders were willing to fundamentally change course when the first attempt failed."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A group of missionaries and cannibals need to cross a river. There are 3 missionaries and 3 cannibals.\n\nThe boat holds only 2 people.\nIf cannibals ever OUTNUMBER missionaries on either side — missionaries get eaten.\n\nHow do they all get across safely?",
        "hint": "Sometimes you need to send someone BACK to prevent outnumbering on either side. Map out every state carefully.",
        "minWords": 20,
        "answer": "**Solution (7 crossings):**\n1. 2 cannibals go → C side: 2C, M side: 3M+1C\n2. 1 cannibal returns ← C side: 1C, M side: 3M+2C\n3. 2 cannibals go → C side: 3C, M side: 3M\n4. 1 cannibal returns ← C side: 2C, M side: 3M+1C\n5. 2 missionaries go → C side: 2C+2M, M side: 1M+1C\n6. 1M+1C returns ← C side: 1C+1M, M side: 2M+2C... \n\nThis one requires careful tracking — there are multiple valid solutions. The key insight: cannibals can row back to prevent outnumbering."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🔮",
        "formatName": "Predict & Check",
        "partA": {
          "url": "https://www.youtube.com/watch?v=2W85Dwxx218",
          "videoTitle": "Immune System Explained — Kurzgesagt",
          "instruction": "BEFORE watching: predict what you think happens inside your body during the first 24 hours of a cold or flu infection. Write it out in detail, then watch."
        },
        "partB": {
          "prompt": "Compare your prediction to what the video showed.",
          "questions": [
            "What did you predict would happen in the first 24 hours of infection?",
            "What did the video show that surprised you most?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain why vaccines are one of the most important medical inventions in human history. Use what you learned about memory cells and adaptive immunity.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Pythagorean Theorem",
        "prompt": "Teach the Pythagorean Theorem to Thatha or someone nearby:\n\n**\"For any right triangle, a² + b² = c², where c is the longest side.\"**\n\nThen:\n1. Prove 3-4-5 works: 9+16=25 ✓\n2. Challenge them: \"Is 7-24-25 a right triangle?\" (7²+24²=625=25²) ✓\n3. Ask Thatha: \"Have you ever used this in real life? Where?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Did Thatha know the theorem? Did they know about 7-24-25? Where have they used it?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "A sorcerer needs to find the shortest path from training room to domain exit.\n\n**Part A:** The room is 12m long and 5m wide. What is the diagonal shortcut distance?\n\n**Part B:** A second room is 8m × 15m. Find the diagonal.\n\n**Part C:** The sorcerer can run 5m/sec diagonally or 7m/sec along the walls. For the 12×5 room, which route is faster?\n\n**Part D — Thatha Level 🧮:** A 3D domain is 6m × 8m × 10m (length, width, height). Find the longest diagonal through the space. Formula: d = √(l² + w² + h²)",
        "hint": "Part D: d = √(36+64+100) = √200. Simplify √200.",
        "answer": "Part A: √(144+25)=√169=13m. Part B: √(64+225)=√289=17m. Part C: Diagonal=13m at 5m/s=2.6sec. Wall route=12+5=17m at 7m/s=2.4sec — walls are faster! Part D: √(36+64+100)=√200=10√2≈14.1m."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Talking About Family",
        "newPhrases": [
          {
            "telugu": "మా అమ్మ పేరు ___",
            "romanized": "Maa amma peru ___",
            "english": "My mom's name is ___",
            "tip": "Peru = name. Fill in the real name. Great-grandma will love hearing you talk about the family."
          },
          {
            "telugu": "మా నాన్న ___ చేస్తారు",
            "romanized": "Maa naanna ___ chestaru",
            "english": "My dad does / works as ___",
            "tip": "Chestaru = does/works (respectful). Talk about what your dad does for work."
          },
          {
            "telugu": "నాకు మీరంటే చాలా ఇష్టం",
            "romanized": "Naaku meerantee chaalaa ishtam",
            "english": "I love you / I really like you (to elder)",
            "tip": "Meerantee = you (affectionate respectful Telangana form). This is more tender than \"meeru\" alone. Say this to great-grandma."
          },
          {
            "telugu": "మీరు ఎలా ఉన్నారు?",
            "romanized": "Meeru elaa unnaaru?",
            "english": "How are you? (respectful)",
            "tip": "You learned this on Day 1 — using it again proves you remember! Always ask how she is."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Dayachesi",
            "options": [
              "Sorry / Excuse me (respectful)",
              "Please",
              "Please say again (respectful)",
              "Please speak slowly"
            ],
            "answer": 1,
            "explanation": "Dayachesi = Please."
          },
          {
            "romanized": "Nenu padi rojulu nerchukunna!",
            "options": [
              "Please",
              "I have been learning for ten days!",
              "Sorry / Excuse me (respectful)",
              "Please say again (respectful)"
            ],
            "answer": 1,
            "explanation": "Nenu padi rojulu nerchukunna! = I have been learning for ten days!."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Spend 5 minutes describing your whole family to great-grandma in Telugu. Use everything you know.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  }
];
