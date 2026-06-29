export const days26to30 = [
  {
    "id": 26,
    "title": "Order of Operations & Civil War",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Order of Operations — Advanced",
        "emoji": "🔢",
        "imageQuery": "order of operations PEMDAS math expression parentheses exponents",
        "content": "**PEMDAS** — the rules for evaluating expressions:\n**P**arentheses → **E**xponents → **M**ultiplication/**D**ivision (left to right) → **A**ddition/**S**ubtraction (left to right)\n\n**Example:** 3 + 4² × (2 + 1) - 8 ÷ 2\n1. Parentheses: 3 + 4² × 3 - 8 ÷ 2\n2. Exponents: 3 + 16 × 3 - 8 ÷ 2\n3. Mult/Div: 3 + 48 - 4\n4. Add/Sub: **47**\n\n**Key mistake:** People add before multiplying. Always multiply/divide first.\n\n**With variables:** 2(x + 3)² when x = 2:\n= 2(5)² = 2(25) = **50**",
        "keyFact": "PEMDAS isn't a law of nature — it's a human convention we all agree on so math expressions have one unambiguous answer.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Evaluate: 3 + 4 × 2² - (6 ÷ 2)",
                            "options": [
                                      "16",
                                      "11",
                                      "13",
                                      "19"
                            ],
                            "answer": 2,
                            "explanation": "PEMDAS: parentheses first (6÷2=3), then exponents (2²=4), then multiply (4×4=16), then add/subtract: 3+16-3=16. Wait: 3+16=19, 19-3=16. Answer is 16."
                  },
                  {
                            "type": "mc",
                            "q": "Which comes first in order of operations?",
                            "options": [
                                      "Addition",
                                      "Multiplication",
                                      "Exponents",
                                      "Parentheses"
                            ],
                            "answer": 3,
                            "explanation": "PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. Always parentheses first!"
                  },
                  {
                            "type": "typed",
                            "q": "What does PEMDAS stand for? (first letters of each word)",
                            "answer": "PEMDAS",
                            "placeholder": "The acronym...",
                            "explanation": "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction — the order you must follow to solve any expression correctly."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Cancer: When Cell Division Goes Wrong",
        "emoji": "🔬",
        "imageQuery": "cancer cell division mutation tumor biology diagram",
        "content": "**Cancer** is fundamentally a disease of DNA — mutations in genes that control cell division.\n\n**Two types of genes involved:**\n- **Proto-oncogenes:** Normal genes that promote growth. Mutation = oncogene = stuck in \"ON\" position\n- **Tumor suppressor genes:** Normal genes that stop growth. Mutation = stuck in \"OFF\" position\n\n**Cancer requires multiple mutations** — your body has many safeguards.\n\n**Common causes of mutations:**\n- UV radiation (skin cancer)\n- Tobacco carcinogens (lung cancer)\n- Certain viruses (HPV → cervical cancer)\n- Random copying errors during cell division\n\n**Treatment:** Surgery, radiation, chemotherapy, immunotherapy — each targets different aspects of cancer biology.",
        "keyFact": "Every time a cell divides, it copies 3 billion DNA base pairs. Even a 99.9999% accuracy rate means ~3,000 errors per division — most are caught by repair mechanisms.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What causes cancer at the cellular level?",
                            "options": [
                                      "Cells dividing too slowly",
                                      "Mutations in DNA that cause uncontrolled cell division",
                                      "Cells not dividing at all",
                                      "Cells producing too much energy"
                            ],
                            "answer": 1,
                            "explanation": "Cancer occurs when mutations in genes that control cell division cause cells to grow and divide uncontrollably, forming tumors and potentially spreading."
                  },
                  {
                            "type": "mc",
                            "q": "What is a tumor?",
                            "options": [
                                      "A type of virus",
                                      "An abnormal mass of cells growing uncontrollably",
                                      "A benign growth always",
                                      "A type of immune response"
                            ],
                            "answer": 1,
                            "explanation": "A tumor is an abnormal mass of cells. Benign tumors are contained; malignant (cancerous) tumors can invade nearby tissue and spread to other parts of the body."
                  },
                  {
                            "type": "typed",
                            "q": "What process do cancer cells use to spread to other parts of the body?",
                            "answer": "metastasis",
                            "placeholder": "One word...",
                            "explanation": "Metastasis is when cancer cells break away, travel through blood or lymph, and form new tumors in other organs — making cancer much harder to treat."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Causes of the Civil War",
        "emoji": "⚔️",
        "imageQuery": "Civil War causes slavery sectionalism map 1861 Confederate Union",
        "content": "The Civil War (1861-1865) was the bloodiest conflict in American history. Its root cause: **slavery**.\n\n**Road to war:**\n- **Missouri Compromise (1820)** — divided new territories by latitude; slavery below 36°30'N\n- **Compromise of 1850** — California admitted free, but Fugitive Slave Act enraged North\n- **Kansas-Nebraska Act (1854)** — allowed territories to vote on slavery → \"Bleeding Kansas\" violence\n- **Dred Scott Decision (1857)** — Supreme Court ruled enslaved people weren't citizens, couldn't sue\n- **John Brown's Raid (1859)** — abolitionist attack on Harper's Ferry\n- **Election of Lincoln (1860)** — South seceded; Lincoln hadn't even appeared on Southern ballots",
        "keyFact": "When Confederate states listed their reasons for secession, they mentioned slavery and the protection of it explicitly, in their own documents.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the primary cause of the Civil War?",
                            "options": [
                                      "Tariffs and trade",
                                      "States' rights to maintain slavery",
                                      "Different climates",
                                      "Immigration differences"
                            ],
                            "answer": 1,
                            "explanation": "While multiple factors existed, slavery was the central cause — Southern states seceded specifically to protect the institution of slavery."
                  },
                  {
                            "type": "mc",
                            "q": "Which event directly triggered Southern secession?",
                            "options": [
                                      "Nat Turner's rebellion",
                                      "The Missouri Compromise",
                                      "Lincoln's election in 1860",
                                      "The Dred Scott decision"
                            ],
                            "answer": 2,
                            "explanation": "When Abraham Lincoln (who opposed slavery's expansion) won the 1860 election, Southern states began seceding before he even took office."
                  },
                  {
                            "type": "typed",
                            "q": "What were the Southern states that seceded called?",
                            "answer": "Confederacy",
                            "placeholder": "One word...",
                            "explanation": "The Confederate States of America (the Confederacy) was formed by 11 Southern states that seceded from the Union."
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
            "q": "Evaluate: 3 + 4 × 2",
            "options": [
              "14",
              "11",
              "10",
              "24"
            ],
            "answer": 1,
            "explanation": "Multiplication before addition: 3 + 8 = 11."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Evaluate: (3 + 4) × 2",
            "options": [
              "10",
              "11",
              "14",
              "24"
            ],
            "answer": 2,
            "explanation": "Parentheses first: 7 × 2 = 14."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Evaluate: 2³ + 4 × 3 - 6 ÷ 2",
            "options": [
              "17",
              "19",
              "23",
              "27"
            ],
            "answer": 1,
            "explanation": "Exponents: 8+4×3-6÷2. Mult/div: 8+12-3. Add/sub: 17."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Evaluate 2(x+3)² when x=1",
            "options": [
              "16",
              "32",
              "18",
              "50"
            ],
            "answer": 1,
            "explanation": "x+3=4. 4²=16. 2×16=32."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Cancer is fundamentally caused by:",
            "options": [
              "Bad diet only",
              "Mutations in genes that control cell division",
              "Too many white blood cells",
              "Bacteria invading cells"
            ],
            "answer": 1,
            "explanation": "Cancer = mutations in proto-oncogenes or tumor suppressor genes causing uncontrolled cell division."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What is a proto-oncogene?",
            "options": [
              "A cancer-causing gene",
              "A normal gene that promotes growth — mutations can turn it into a cancer-driver",
              "A gene that suppresses tumors",
              "A virus that causes cancer"
            ],
            "answer": 1,
            "explanation": "Proto-oncogenes are normal growth genes. Mutations can make them stuck in \"ON\" mode, driving uncontrolled growth."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why does cancer require multiple mutations to develop?",
            "options": [
              "One mutation is always enough",
              "Cancer cells need to overcome multiple cellular safeguards — each mutation breaks one safeguard",
              "DNA repair is inefficient",
              "Mutations only occur in one gene"
            ],
            "answer": 1,
            "explanation": "Your cells have multiple safeguards against uncontrolled division. Cancer typically requires 5-10 mutations to break through all of them."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "How does immunotherapy treat cancer differently from chemotherapy?",
            "options": [
              "It uses stronger chemicals",
              "It boosts the immune system to recognize and attack cancer cells rather than directly poisoning them",
              "It is more painful",
              "It only works for skin cancer"
            ],
            "answer": 1,
            "explanation": "Chemotherapy kills rapidly dividing cells (including healthy ones). Immunotherapy teaches your immune system to specifically target cancer cells."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What was the ROOT cause of the Civil War?",
            "options": [
              "States' rights in general",
              "Tariff disagreements",
              "Slavery — specifically whether it would expand into new territories",
              "Different economic systems with no moral dimension"
            ],
            "answer": 0,
            "explanation": "Slavery — particularly its expansion into new territories — was the central issue. Confederate secession documents explicitly stated this."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What did the Dred Scott Decision (1857) rule?",
            "options": [
              "Slavery was unconstitutional",
              "Enslaved people were property, not citizens, and had no right to sue in federal court",
              "Free states must return escaped enslaved people",
              "Congress could ban slavery in territories"
            ],
            "answer": 1,
            "explanation": "Dred Scott was a catastrophic ruling — it declared enslaved people had no rights and Congress couldn't ban slavery in territories."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why did Southern states secede after Lincoln's election in 1860?",
            "options": [
              "Lincoln promised to immediately abolish slavery",
              "Lincoln hadn't appeared on Southern ballots and his election signaled Northern dominance over slavery expansion",
              "Lincoln announced new tariffs",
              "Lincoln threatened military action first"
            ],
            "answer": 1,
            "explanation": "Lincoln won entirely without Southern electoral votes. Southern states saw his election as proof they could no longer control the federal government's position on slavery."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Why is it historically inaccurate to say the Civil War was \"about states' rights\" without further explanation?",
            "options": [
              "States' rights was never mentioned",
              "The specific right at issue was the right to enslave people — omitting that obscures the moral reality",
              "Northern states had no interest in states' rights",
              "States' rights wasn't a concept yet"
            ],
            "answer": 1,
            "explanation": "Confederate documents explicitly named slavery as the cause. \"States' rights\" was the mechanism; the right they were fighting to preserve was the right to enslave human beings."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You have 1,000 bottles of wine. One bottle is poisoned.\n\nYou have 10 prisoners to test the wine. The poison kills within 24 hours. You only have time for one round of testing.\n\nHow do you identify the poisoned bottle using only 10 prisoners?",
        "hint": "Think about binary — each prisoner represents one \"bit\" of information. 2¹⁰ = 1,024 > 1,000.",
        "minWords": 20,
        "answer": "**Binary encoding!**\n\nNumber each bottle 1-1,000 in binary (10 digits). Each prisoner represents one binary digit position.\n\n**Example:** Bottle 613 = 1001100101 in binary.\nPrisoner 1 drinks bit 1 (ones place), Prisoner 2 drinks bit 2, etc.\n\nAfter 24 hours, read the dead/alive pattern as binary:\n- Prisoner alive = 0\n- Prisoner dead = 1\n\nThe resulting binary number tells you exactly which bottle is poisoned.\n\n**Why it works:** 2¹⁰ = 1,024 — so 10 binary positions can distinguish up to 1,024 different bottles. This is the same logic computers use to store information."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🎨",
        "formatName": "Create Something",
        "prompt": "Create a visual argument map about the causes of the Civil War. Put \"Civil War\" in the center. Draw branches for each major cause (slavery expansion, Dred Scott, Bleeding Kansas, Lincoln's election, economic differences). For each cause, add a leaf with one specific fact.",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Draw this map on paper or digitally. Make it visual — use colors, arrows, and size to show which causes were most important."
        },
        "partB": {
          "prompt": "Photograph or describe your completed map.",
          "questions": [
            "What did your map look like? Describe the branches and how you connected them.",
            "Which cause did you make biggest/most prominent and why?"
          ]
        },
        "writingPrompt": "In at least 50 words: based on your map, which cause do you think was most important in making the Civil War inevitable? Make a specific argument using at least two pieces of evidence.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "PEMDAS & Order of Operations",
        "prompt": "Teach PEMDAS with a trap question:\n\n**\"What is 8 ÷ 2(2+2)?\"**\n\n(This viral math problem divides people. The answer depends on convention.)\n\n1. Work through it with someone: Parentheses first → 8 ÷ 2(4) → left to right: 4(4)=16 by strict PEMDAS\n2. Explain: some people interpret 2(4) as a grouped term and get 8÷8=1\n3. The lesson: math notation needs to be clear — the expression is ambiguous\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What answer did they get first? Were they surprised by the ambiguity? What does this tell us about mathematical notation?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Evaluate these expressions. Show every step labeled with which PEMDAS rule you used:\n\n**Part A:** 5 + 3² × (4 - 1) ÷ 9\n\n**Part B:** (2 + 3)² - 4 × 3 + 2³\n\n**Part C:** 2[(3 + 4)² - 3 × 8] ÷ 2\n\n**Part D — Thatha Level 🧮:** Create your own expression using all five operations (parentheses, exponents, ×, ÷, +, -) that equals exactly 24. Show that your expression equals 24 using PEMDAS step by step.",
        "hint": "Part A: exponents first (9), then mult/div left to right, then add. Part D: This is a creativity challenge — there are many solutions.",
        "answer": "Part A: 5+9×3÷9 = 5+27÷9 = 5+3 = 8. Part B: 25-12+8 = 21. Part C: 2[49-24]÷2 = 2[25]÷2 = 50÷2 = 25. Part D: Open-ended."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Hot, Cold, Fast, Slow",
        "newPhrases": [
          {
            "telugu": "వేడిగా ఉంది, చల్లగా ఉంది",
            "romanized": "Veedigaa undi, challagaa undi",
            "english": "It is hot, it is cold",
            "tip": "Veedi = hot. Challa = cold/cool. \"Challani neeru\" = cold water. \"Veedi coffee\" = hot coffee."
          },
          {
            "telugu": "వేగంగా, నెమ్మదిగా",
            "romanized": "Vegangaa, nemmadiga",
            "english": "Fast, slowly",
            "tip": "Vegam = speed. Nemmadi = calm/slow. You learned nemmadiga on Day 5!"
          },
          {
            "telugu": "కొత్త, పాత",
            "romanized": "Kotta, paata",
            "english": "New, old",
            "tip": "Kotta = new. Paata = old. \"Kotta Telugu\" = new Telugu (what you're learning!)"
          },
          {
            "telugu": "ఈ రోజు వాతావరణం ఎలా ఉంది?",
            "romanized": "Ee roju vaatavaranam elaa undi?",
            "english": "How is the weather today?",
            "tip": "Vaatavaranam = weather. A great conversation starter — ask great-grandma about her weather every call!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Meeru em chestunnaaru?",
            "options": [
              "Where are you? (respectful)",
              "What are you doing? (respectful)",
              "Why?",
              "When?"
            ],
            "answer": 1,
            "explanation": "Meeru em chestunnaaru? = What are you doing? (respectful)."
          },
          {
            "romanized": "Nenu mee kosam nerchukunṭunna",
            "options": [
              "What are you doing? (respectful)",
              "I am learning for you",
              "Where are you? (respectful)",
              "Why?"
            ],
            "answer": 1,
            "explanation": "Nenu mee kosam nerchukunṭunna = I am learning for you."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Describe today's weather to great-grandma and ask about hers. Use veedigaa or challagaa.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 27,
    "title": "Proportional & Underground",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Proportional Relationships & Graphs",
        "emoji": "📊",
        "imageQuery": "proportional relationship graph linear origin slope ratio constant",
        "content": "A **proportional relationship** passes through the origin (0,0) with constant ratio y/x = k.\n\ny = kx (where k is the constant of proportionality)\n\n**Example:** A car travels 60 miles per hour.\n- At 1 hr: 60 miles\n- At 2 hrs: 120 miles\n- Ratio: 60/1 = 120/2 = 60 ← constant!\n\ny = 60x → this is proportional\n\n**vs. non-proportional:** y = 3x + 5 (has a y-intercept)\n\n**In graphs:** Proportional relationships form straight lines through the origin. The slope k = y/x at any point.",
        "keyFact": "Every proportional relationship is linear, but not every linear relationship is proportional. The key is whether it passes through (0,0).",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What does a proportional relationship always graph as?",
                            "options": [
                                      "A curve",
                                      "A straight line through the origin",
                                      "A horizontal line",
                                      "A parabola"
                            ],
                            "answer": 1,
                            "explanation": "Proportional relationships graph as straight lines through the origin (0,0). If it doesn't pass through (0,0), it's linear but not proportional."
                  },
                  {
                            "type": "typed",
                            "q": "If y is proportional to x and y=15 when x=3, what is the constant of proportionality?",
                            "answer": "5",
                            "placeholder": "Enter the number...",
                            "explanation": "k = y/x = 15/3 = 5. The equation is y = 5x. The constant of proportionality k is the ratio y/x for any point."
                  },
                  {
                            "type": "mc",
                            "q": "Which equation represents a proportional relationship?",
                            "options": [
                                      "y = 3x + 2",
                                      "y = x + 5",
                                      "y = 4x",
                                      "y = 2x - 1"
                            ],
                            "answer": 2,
                            "explanation": "y = 4x passes through (0,0) with constant ratio y/x = 4. The others have a y-intercept that isn't 0, making them linear but not proportional."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Evolution: Natural Selection Basics",
        "emoji": "🦎",
        "imageQuery": "natural selection evolution Darwin finches adaptation survival",
        "content": "**Evolution** is change in inherited traits across generations. **Natural selection** is its primary mechanism.\n\n**Darwin's four observations:**\n1. Variation: individuals in a population differ\n2. Inheritance: traits pass from parent to offspring\n3. Competition: more offspring produced than can survive\n4. Differential survival: better-adapted individuals survive to reproduce more\n\n**Result:** Over generations, advantageous traits become more common.\n\n**Classic example:** Darwin's finches — different beak shapes for different food sources on different islands.\n\n**Common misconception:** Evolution doesn't have a goal. It doesn't make species \"better\" — just more suited to current conditions.",
        "keyFact": "Natural selection acts on existing variation — it doesn't create new traits. Mutations create new variation; selection determines which spreads.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is natural selection?",
                            "options": [
                                      "Animals choosing their own traits",
                                      "Traits that help survival are passed on more",
                                      "Scientists selecting the best animals",
                                      "Random changes with no pattern"
                            ],
                            "answer": 1,
                            "explanation": "Natural selection: organisms with traits that help them survive and reproduce pass those traits to offspring more often — over generations, populations change."
                  },
                  {
                            "type": "mc",
                            "q": "A moth population lives on dark trees. Which moth survives best?",
                            "options": [
                                      "White moths",
                                      "Spotted moths",
                                      "Dark moths",
                                      "The fastest moths"
                            ],
                            "answer": 2,
                            "explanation": "Dark moths are camouflaged on dark trees, making them harder for predators to see. They survive and reproduce more — classic natural selection."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call a trait that improves survival in a specific environment?",
                            "answer": "adaptation",
                            "placeholder": "One word...",
                            "explanation": "An adaptation is a trait that helps an organism survive in its environment — like a polar bear's thick fur or a cactus's water storage."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Slavery & the Underground Railroad",
        "emoji": "🌟",
        "imageQuery": "Underground Railroad Harriet Tubman freedom slaves North Star abolition",
        "content": "The **Underground Railroad** was a secret network of people and safe houses helping enslaved people escape to freedom.\n\n**Key figures:**\n- **Harriet Tubman** — \"Moses\" — escaped slavery, then returned 13 times, freeing ~70 people\n- **Frederick Douglass** — escaped slavery, became leading abolitionist and orator\n- **Sojourner Truth** — formerly enslaved, abolitionist and women's rights advocate\n- **Levi Coffin** — Quaker \"president\" of the Underground Railroad, helped 3,000+ people\n\n**The courage required:** Helping enslaved people escape was a federal crime (Fugitive Slave Act). Conductors risked prison or death.\n\n**The scale:** Estimates suggest 30,000-100,000 escaped via the Railroad over its history.",
        "keyFact": "Harriet Tubman said: \"I never ran my train off the track and I never lost a passenger.\" She was never caught during any of her 13 rescue missions.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the Underground Railroad?",
                            "options": [
                                      "An actual railroad beneath the ground",
                                      "A network of safe houses helping enslaved people escape to freedom",
                                      "A government program to move slaves between states",
                                      "A code name for abolition meetings"
                            ],
                            "answer": 1,
                            "explanation": "The Underground Railroad was a secret network of routes, safe houses, and people (conductors) who helped enslaved people escape to free states or Canada."
                  },
                  {
                            "type": "mc",
                            "q": "Who was the most famous 'conductor' of the Underground Railroad?",
                            "options": [
                                      "Frederick Douglass",
                                      "Sojourner Truth",
                                      "Harriet Tubman",
                                      "Nat Turner"
                            ],
                            "answer": 2,
                            "explanation": "Harriet Tubman escaped slavery herself, then made 13 missions freeing approximately 70 enslaved people. She said she 'never lost a passenger' on her Underground Railroad runs."
                  },
                  {
                            "type": "typed",
                            "q": "To which country did many freedom seekers travel to be fully safe from the Fugitive Slave Act?",
                            "answer": "Canada",
                            "placeholder": "Which country?",
                            "explanation": "The Fugitive Slave Act (1850) required escaped enslaved people be returned even from free states. Canada was beyond US law — the only truly safe destination."
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
            "q": "A proportional relationship always passes through:",
            "options": [
              "(1,1)",
              "The origin (0,0)",
              "The y-axis only",
              "Any point"
            ],
            "answer": 1,
            "explanation": "Proportional relationships have the form y=kx — when x=0, y=0. Always passes through origin."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "y = 5x. What is the constant of proportionality?",
            "options": [
              "x",
              "y",
              "5",
              "0"
            ],
            "answer": 2,
            "explanation": "y = kx. Here k = 5."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Which is NOT proportional?",
            "options": [
              "y = 3x",
              "y = x/4",
              "y = 2x + 1",
              "y = 7x"
            ],
            "answer": 2,
            "explanation": "y = 2x + 1 has a y-intercept of 1 — it doesn't pass through origin. Not proportional."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Car A: 50 mph. Car B: y = 65x. After 3 hours, how much farther has Car B traveled?",
            "options": [
              "15 miles",
              "30 miles",
              "45 miles",
              "65 miles"
            ],
            "answer": 2,
            "explanation": "Car A: 50×3=150. Car B: 65×3=195. Difference: 45 miles."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Natural selection works on:",
            "options": [
              "Individual organisms changing to adapt",
              "Existing variation in populations — not creating new traits",
              "All offspring equally",
              "Random individuals regardless of traits"
            ],
            "answer": 1,
            "explanation": "Natural selection selects FROM existing variation. It doesn't create new traits — mutations do that."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Darwin's finches show evolution because:",
            "options": [
              "They all look the same",
              "Different beak shapes on different islands reflect adaptation to available food sources",
              "They lived on the same island",
              "They didn't change at all"
            ],
            "answer": 1,
            "explanation": "Finches on different Galapagos islands evolved different beak shapes matching their food sources — direct evidence of adaptation to environment."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Evolution doesn't have a goal. This means:",
            "options": [
              "Evolution is random and purposeless",
              "Evolution produces the best possible organism",
              "Traits that are advantageous NOW spread — but the environment can change",
              "Evolution is not real"
            ],
            "answer": 2,
            "explanation": "A trait that's advantageous in current conditions may become disadvantageous if conditions change. Evolution responds to the present, not the future."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Antibiotic resistance in bacteria evolves quickly because:",
            "options": [
              "Bacteria intentionally mutate to resist",
              "Bacteria reproduce fast — many generations in a short time allows selection to act quickly on mutations",
              "Antibiotics teach bacteria",
              "Bacteria share resistance genes intentionally"
            ],
            "answer": 1,
            "explanation": "Bacteria reproduce every 20 minutes. Millions of generations in days means selection can rapidly amplify any resistant mutations."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What was the Underground Railroad?",
            "options": [
              "A literal underground train system",
              "A secret network helping enslaved people escape to freedom",
              "A government program",
              "A tunnel under the Ohio River"
            ],
            "answer": 1,
            "explanation": "The Underground Railroad was a secret network of people, safe houses, and routes helping enslaved people escape to freedom in the North or Canada."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why was helping people escape on the Underground Railroad so dangerous?",
            "options": [
              "The routes were physically hazardous",
              "The Fugitive Slave Act made helping escapees a federal crime — conductors faced prison or death",
              "It was only dangerous for the enslaved people",
              "Northern states had banned it"
            ],
            "answer": 1,
            "explanation": "The Fugitive Slave Act (1850) required even free Northern states to return escaped enslaved people. Helping someone escape was a federal offense."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Harriet Tubman's nickname was \"Moses\" because:",
            "options": [
              "She was very religious",
              "Like Moses in the Bible, she led her people out of slavery and bondage",
              "She wrote religious texts",
              "She was from the Middle East"
            ],
            "answer": 1,
            "explanation": "Like the Biblical Moses who led enslaved Hebrews out of Egypt, Tubman repeatedly returned to the South to lead people out of slavery."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "What does the Underground Railroad tell us about the nature of moral courage?",
            "options": [
              "Moral courage is easy when others support you",
              "Thousands of people risked everything for strangers based on principle — showing moral courage can exist even under legal prohibition",
              "Only famous people showed courage",
              "The North was uniformly anti-slavery"
            ],
            "answer": 1,
            "explanation": "Many Underground Railroad conductors were ordinary people who chose to break unjust laws at great personal risk. Moral courage means acting on principle regardless of legal or social pressure."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A famous poisoning puzzle:\n\nYou're at a dinner party with 9 other guests. A glass of wine is poisoned. The poison is tasteless and odorless.\n\nYou notice the host is the only person who knows which glass is which (they poured all the drinks). The host drinks from EVERY glass.\n\nWhat can you conclude?",
        "hint": "Think about the information revealed by the host's action of drinking from every glass — what does it prove or disprove?",
        "minWords": 20,
        "answer": "**This is a logic trap with multiple valid interpretations:**\n\n**If the host drinks from every glass:** Either 1) No glass is poisoned (host is bluffing/lying about the poisoning) OR 2) The host has taken an antidote OR 3) The host is lying about knowing which glass is which OR 4) The host plans to die or is suicidal.\n\n**What you CAN conclude:** If the host actually drinks from every glass without hesitation, the most logical explanation is that no glass is actually poisoned — the \"poisoning\" is a ruse.\n\n**The deeper lesson:** In logic, \"what does this action REVEAL?\" is often more important than what someone says. Actions carry information."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🎤",
        "formatName": "Interview Mission",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Ask an adult: \"Have you ever had to measure something you couldn't measure directly — and how did you figure it out?\" (Could be distance, weight, time, amount — anything where direct measurement was impossible.)"
        },
        "partB": {
          "prompt": "Indirect measurement is everywhere — from GPS to medical imaging to astronomy.",
          "questions": [
            "What was the adult's example of indirect measurement?",
            "Can you connect their example to something you've learned in math or science?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain what \"indirect measurement\" is using TWO examples — one from today's interview and one from your science lessons (hint: think about how we measure things too large, too small, or too far away).",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Harriet Tubman & Moral Courage",
        "prompt": "Teach someone about Harriet Tubman:\n\n**\"Harriet Tubman escaped slavery, then voluntarily returned 13 times to free others. Each trip she risked recapture, torture, or death. She never lost a single person.\"**\n\nThen:\n1. Ask: \"Why would someone take that risk for strangers?\"\n2. Discuss: \"Is there anything in your life you would risk that much for?\"\n3. Ask: \"What makes someone have this kind of courage?\"\n\nThis one should create a real conversation. Record a voice memo if no one is around 🎙️",
        "followUp": "What did they say about why she went back? What would they risk that much for? What did they say about the source of that courage?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "history",
        "problem": "Harriet Tubman carried a gun on her missions — not to protect herself from slave catchers, but to point at enslaved people who wanted to turn back.\n\nShe said: \"You'll be free or die.\"\n\n**Write a 6-8 sentence response:**\n1. What does this fact tell you about how desperate the situation was?\n2. Was Tubman right to do this? Make an argument.\n3. What does this reveal about the impossible moral situations created by slavery?\n4. Is there such a thing as a completely \"clean\" act of resistance against an unjust system?",
        "hint": "There is no comfortable answer here. The best responses sit with the moral complexity rather than resolving it too easily.",
        "answer": "Should acknowledge the moral complexity, make a clear argument about Tubman's choice, and address the broader question about resistance and justice."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Describing People",
        "newPhrases": [
          {
            "telugu": "పొడుగు, పొట్టి",
            "romanized": "Podugu, poṭṭi",
            "english": "Tall, short",
            "tip": "Podugu = tall. Poṭṭi = short. \"Nenu podugugaa unnaa\" = I am tall."
          },
          {
            "telugu": "మీరు చాలా అందంగా ఉన్నారు",
            "romanized": "Meeru chaalaa andangaa unnaaru",
            "english": "You look very beautiful (respectful)",
            "tip": "Andam = beauty. Say this to great-grandma — she will light up."
          },
          {
            "telugu": "మీరు ఆరోగ్యంగా ఉన్నారా?",
            "romanized": "Meeru aarogyangaa unnaaru?",
            "english": "Are you healthy? / How is your health?",
            "tip": "Aarogyam = health. Asking this shows you care about more than just \"how are you.\" She will notice."
          },
          {
            "telugu": "మీరు నాకు చాలా ప్రియమైన వారు",
            "romanized": "Meeru naaku chaalaa priyamaina vaaru",
            "english": "You are very dear to me",
            "tip": "Priyam = dear/beloved. A loving, respectful way to say she matters deeply to you."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Naaku ___ kaavaali",
            "options": [
              "I need help",
              "I want / I need ___",
              "I am going / I have to go",
              "I didn't understand"
            ],
            "answer": 1,
            "explanation": "Naaku ___ kaavaali = I want / I need ___."
          },
          {
            "romanized": "Debbhai, enabhai, tombhai",
            "options": [
              "I want / I need ___",
              "Seventy, eighty, ninety",
              "I need help",
              "I am going / I have to go"
            ],
            "answer": 1,
            "explanation": "Debbhai, enabhai, tombhai = Seventy, eighty, ninety."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Call great-grandma and ask \"Meeru aarogyangaa unnaaru?\" Listen fully to her answer. Follow up with a question.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 28,
    "title": "Linear & Nonlinear",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Linear vs Nonlinear Functions",
        "emoji": "📈",
        "imageQuery": "linear nonlinear function graph comparison curve straight line",
        "content": "**Linear functions** form straight lines. They change by a CONSTANT amount.\ny = mx + b → constant slope\n\n**Nonlinear functions** form curves. Rate of change varies.\n\n**Examples:**\n- Linear: y = 3x + 2 (add 3 each time x increases by 1)\n- Quadratic: y = x² (increases faster and faster)\n- Exponential: y = 2ˣ (doubles with each step)\n\n**How to identify from a table:**\nLinear: differences between y-values are CONSTANT\nNonlinear: differences between y-values CHANGE\n\n**In real life:**\n- Saving $50/month → linear\n- Money in a compound interest account → exponential (nonlinear)",
        "keyFact": "Exponential growth looks slow at first, then suddenly explodes. Linear growth looks steady. The difference becomes massive over time.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which function is nonlinear?",
                            "options": [
                                      "y = 3x + 1",
                                      "y = x - 5",
                                      "y = x²",
                                      "y = -2x"
                            ],
                            "answer": 2,
                            "explanation": "y = x² is nonlinear — it has a squared term, so it graphs as a curve (parabola), not a straight line."
                  },
                  {
                            "type": "mc",
                            "q": "How can you tell a function is linear from a table of values?",
                            "options": [
                                      "The y-values increase",
                                      "The rate of change between points is constant",
                                      "The y-values are all positive",
                                      "The x-values start at 0"
                            ],
                            "answer": 1,
                            "explanation": "In a linear function, the rate of change (slope) is constant — the y-values change by the same amount for every equal step in x."
                  },
                  {
                            "type": "typed",
                            "q": "What shape does a linear function always make when graphed?",
                            "answer": "straight line",
                            "placeholder": "What shape?",
                            "explanation": "Linear functions always graph as straight lines. Nonlinear functions curve — parabolas, exponential curves, etc."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Evolution: Adaptation & Survival",
        "emoji": "🌊",
        "imageQuery": "animal adaptation survival evolution camouflage beak wing",
        "content": "**Adaptations** are traits that improve an organism's chances of surviving and reproducing in its environment.\n\n**Types of adaptations:**\n- **Structural:** Physical features — duck's webbed feet, bird's beak shape, cactus spines\n- **Behavioral:** Actions — migration, hibernation, group hunting\n- **Physiological:** Body processes — camel's ability to store water, bear's torpor\n\n**Examples of amazing adaptations:**\n- Arctic fox: white in winter, brown in summer (camouflage)\n- Mantis shrimp: 16 types of color receptors (humans have 3)\n- Pacific salmon: can detect Earth's magnetic field to navigate home\n- Octopus: can change color AND texture in milliseconds",
        "keyFact": "Pacific salmon can detect their birth river by its unique chemical signature — navigating thousands of miles of ocean to return to exactly where they were born.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is an adaptation?",
                            "options": [
                                      "Any physical change in an organism's lifetime",
                                      "A heritable trait that increases survival and reproduction in an environment",
                                      "An organism's reaction to stress",
                                      "A change in behavior only"
                            ],
                            "answer": 1,
                            "explanation": "Adaptations are heritable traits that improve survival in a specific environment. They develop over many generations through natural selection — not during one organism's lifetime."
                  },
                  {
                            "type": "mc",
                            "q": "Which best demonstrates convergent evolution?",
                            "options": [
                                      "Dogs and wolves having similar features",
                                      "Dolphins and sharks both having streamlined bodies despite different ancestry",
                                      "All primates having similar hands",
                                      "Birds all having feathers"
                            ],
                            "answer": 1,
                            "explanation": "Convergent evolution: unrelated species develop similar traits due to similar environments. Dolphins (mammals) and sharks (fish) both evolved streamlined bodies for water — different ancestry, same solution."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call the process where two species evolve in response to each other?",
                            "answer": "coevolution",
                            "placeholder": "One word...",
                            "explanation": "Coevolution: when two species influence each other's evolution — like flowers and their pollinators, or predators and prey in an evolutionary arms race."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Point of View & Perspective in Writing",
        "emoji": "✍️",
        "imageQuery": "point of view narrative perspective first person third person writing",
        "content": "The **narrator's perspective** fundamentally shapes what a reader understands.\n\n**Points of view:**\n- **First person (I, we):** Intimate, limited — we only know what narrator knows\n- **Second person (you):** Direct, unusual — addresses reader directly\n- **Third person limited (he/she):** Follows one character's perspective\n- **Third person omniscient:** Narrator knows all characters' thoughts\n\n**Why it matters:**\nThe same event told from different perspectives feels completely different.\n\n**In history:** The Trail of Tears from a Cherokee perspective vs. an American soldier's perspective vs. Andrew Jackson's tells THREE different stories — all about the same events.",
        "keyFact": "Every history textbook is written from a perspective — usually the dominant culture's. The \"other side\" often has a completely different story about the same events.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In first-person narration, which pronoun is used?",
                            "options": [
                                      "He/She",
                                      "They",
                                      "I/We",
                                      "You"
                            ],
                            "answer": 2,
                            "explanation": "First person uses I/We — the narrator is telling their own story. This creates intimacy but limits what the narrator can know."
                  },
                  {
                            "type": "mc",
                            "q": "Which point of view knows the thoughts of ALL characters?",
                            "options": [
                                      "First person",
                                      "Second person",
                                      "Third person limited",
                                      "Third person omniscient"
                            ],
                            "answer": 3,
                            "explanation": "Third person omniscient means the narrator knows everything — including the private thoughts of every character in the story."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call the author's attitude toward their subject?",
                            "answer": "tone",
                            "placeholder": "One word...",
                            "explanation": "Tone is the author's attitude — sarcastic, serious, playful, angry. It's conveyed through word choice and what the author emphasizes."
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
            "q": "Which function is LINEAR?",
            "options": [
              "y = x²",
              "y = 2ˣ",
              "y = 3x - 5",
              "y = 1/x"
            ],
            "answer": 2,
            "explanation": "y = 3x - 5 has the form y = mx + b — a linear function with constant slope."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "A table shows y values: 2, 5, 8, 11, 14. Is this linear or nonlinear?",
            "options": [
              "Nonlinear",
              "Linear — differences are constant (+3 each time)",
              "Cannot tell",
              "Exponential"
            ],
            "answer": 1,
            "explanation": "Constant difference of 3 between consecutive y-values means linear."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Saving $50/month is linear. Compound interest is exponential. After 30 years, which has more money?",
            "options": [
              "Saving $50/month",
              "Compound interest — by a MASSIVE amount",
              "They're about equal",
              "Depends on interest rate only"
            ],
            "answer": 1,
            "explanation": "Compound interest grows exponentially — it will vastly outpace linear savings over 30 years due to growth on growth."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Y values: 1, 2, 4, 8, 16. Identify the pattern:",
            "options": [
              "Linear",
              "Quadratic",
              "Exponential — doubling each time",
              "Random"
            ],
            "answer": 2,
            "explanation": "Each value doubles — this is y = 2ˣ, exponential growth."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "An adaptation is:",
            "options": [
              "A random mutation",
              "A trait that improves survival/reproduction in a specific environment",
              "Any physical feature",
              "A behavior only"
            ],
            "answer": 1,
            "explanation": "Adaptations are traits — structural, behavioral, or physiological — that enhance survival and reproduction in an organism's environment."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "An arctic fox's coat changes from white in winter to brown in summer. This is:",
            "options": [
              "Physiological adaptation",
              "Behavioral adaptation",
              "Structural adaptation that changes seasonally",
              "Learned behavior"
            ],
            "answer": 2,
            "explanation": "The changing coat color is a structural adaptation — a physical feature that changes with seasons for camouflage."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Pacific salmon can navigate back to their birth river because:",
            "options": [
              "They memorize maps",
              "They can detect their birth river's unique chemical signature AND Earth's magnetic field",
              "They follow other fish",
              "They randomly guess"
            ],
            "answer": 1,
            "explanation": "Salmon use chemical memory of their birth river's unique scent combined with magnetic field navigation — an extraordinary adaptation."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Antibiotic resistance is NOT an example of an organism \"trying to adapt.\" It's an example of:",
            "options": [
              "Intentional mutation",
              "Natural selection acting on existing variation — resistant bacteria happened to exist and survived while others died",
              "Bacteria learning from experience",
              "A laboratory accident"
            ],
            "answer": 1,
            "explanation": "Some bacteria happened to have genes making them resistant. Antibiotics killed the non-resistant ones, leaving only resistant bacteria to reproduce. No intention required."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "First person point of view uses:",
            "options": [
              "He, she, they",
              "You",
              "I, we, me",
              "The narrator"
            ],
            "answer": 2,
            "explanation": "First person = narrator is a character in the story, using I/we/me."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Third person omniscient means the narrator:",
            "options": [
              "Follows only one character's thoughts",
              "Knows all characters' thoughts and feelings",
              "Is outside the story completely with no access to thoughts",
              "Uses \"you\""
            ],
            "answer": 1,
            "explanation": "Omniscient = all-knowing. Third person omniscient narrators can access any character's thoughts and feelings."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "The Trail of Tears told from a Cherokee perspective vs. Andrew Jackson's perspective would feel:",
            "options": [
              "Identical",
              "Slightly different",
              "Completely different — same events, opposite meanings",
              "Jackson's would be more accurate"
            ],
            "answer": 2,
            "explanation": "The same historical events look completely different depending on perspective — one people's loss is another's \"expansion.\" Point of view shapes everything."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "Why do historians try to read multiple perspectives on the same event?",
            "options": [
              "To make history books longer",
              "No single perspective contains the full truth — different viewpoints reveal different aspects of what happened",
              "One perspective is always more accurate",
              "Multiple perspectives always agree"
            ],
            "answer": 1,
            "explanation": "Historical truth is complex. The Trail of Tears looks different from Cherokee accounts, US government records, and military diaries — each reveals something the others don't."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "What comes next in this famous sequence?\n\n1, 1, 2, 3, 5, 8, 13, 21, 34, ___\n\nBonus: Where does this sequence appear in nature? Name at least 3 places.",
        "hint": "Each number is the sum of the two before it. For the bonus, think about plants, spirals, and the shape of things.",
        "minWords": 20,
        "answer": "**Next number: 55**\n\nThis is the **Fibonacci sequence** — each number = sum of the two before.\n34 + 21 = 55\n\n**Where it appears in nature:**\n1. **Sunflower seeds** — spiral patterns are always Fibonacci numbers (34 and 55 spirals)\n2. **Pinecone scales** — 8 and 13 spirals\n3. **Nautilus shell** — the spiral follows Fibonacci proportions (Golden Ratio)\n4. **Flower petals** — most flowers have 3, 5, 8, or 13 petals\n5. **Pineapple** — 8 and 13 spirals\n6. **Branching of trees** — often follows Fibonacci pattern\n\nThe ratio of consecutive Fibonacci numbers approaches the Golden Ratio (1.618...) — considered the most aesthetically pleasing proportion."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🧮",
        "formatName": "Surprise Thatha",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find the most surprising fact you can about evolution — something most people get wrong or don't know. Good searches: \"evolution myths busted\" or \"surprising evolution facts.\""
        },
        "partB": {
          "prompt": "Go tell Thatha your fact. Challenge him: \"Did you know this about evolution?\"",
          "questions": [
            "What surprising evolution fact did you find?",
            "What was Thatha's reaction? What does he know about evolution?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain what the most common misconception about evolution is and why it's wrong. Use what you learned in today's lesson and what you found.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Linear vs Exponential Growth",
        "prompt": "Teach linear vs exponential using a real choice:\n\n**\"Would you rather: A) Get $1,000 per day for 30 days, or B) Get 1 penny on day 1, doubled every day for 30 days?\"**\n\nAsk them to guess first. Then calculate together:\n- A: 30 × $1,000 = $30,000\n- B: 0.01 × 2²⁹ ≈ $5.4 MILLION\n\nAsk: \"What does this tell us about exponential growth?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Which did they choose first? What was their reaction to the actual answer? How does this change how they think about interest rates or investment?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Two sorcerers train differently:\n- Sorcerer A increases power by 100 per day (linear): P(t) = 500 + 100t\n- Sorcerer B's power increases by 10% per day (exponential): P(t) = 500 × (1.1)^t\n\n**Part A:** Fill in a table for days 0, 5, 10, 15, 20. Show both powers.\n\n**Part B:** When does Sorcerer B overtake Sorcerer A? (Try t values from your table)\n\n**Part C:** At day 30, how much more powerful is Sorcerer B than A?\n\n**Part D — Thatha Level 🧮:** Write the equation to find exactly when they're equal. You can't solve this algebraically (it requires logarithms) — but can you estimate it to within 1 day using your table?",
        "hint": "For Part D: at t=0 both have 500. A grows faster initially. B catches up around day 25 based on the table. Narrow it down.",
        "answer": "Part A: t=0:500/500. t=5:1000/805. t=10:1500/1297. t=15:2000/2089. t=20:2500/3364. Part B: Between day 14-15 (B overtakes around day 14.5). Part C: A: 500+3000=3500. B: 500×(1.1)³⁰≈500×17.45=8,724. B is ~5,224 more powerful. Part D: 500+100t=500×(1.1)^t → estimate between t=14 and t=15."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Places & Where Things Are",
        "newPhrases": [
          {
            "telugu": "ఇంట్లో",
            "romanized": "Inṭlo",
            "english": "At home / inside the house",
            "tip": "Inṭlo = in the house (Telangana: \"lo\" suffix for \"in\"). Very commonly used."
          },
          {
            "telugu": "బయటికి వెళ్ళా",
            "romanized": "Bayaṭiki vellaa",
            "english": "I went outside",
            "tip": "Bayaṭiki = outside/outward. Vellaa = I went (Telangana past, short form)."
          },
          {
            "telugu": "అమెరికాలో ఉన్నా",
            "romanized": "Americaalo unnaa",
            "english": "I am in America",
            "tip": "Aalo = in (location suffix). Americaalo = in America. Unnaa = I am (Telangana short form)."
          },
          {
            "telugu": "దూరంగా ఉన్నాం కానీ మనసులో దగ్గరగా ఉన్నాం",
            "romanized": "Duurangaa unnaamu kaani manasulo daggaragaa unnaamu",
            "english": "Far apart but close in heart",
            "tip": "Manasu = heart/mind (Telangana word — vs \"guṇḍe\" which is more Andhra). \"Close in heart/mind.\" A beautiful sentiment for your situation."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Pedda, chinna",
            "options": [
              "A lot / very, a little",
              "Big, small",
              "Everything / all, Nothing",
              "Half is done"
            ],
            "answer": 1,
            "explanation": "Pedda, chinna = Big, small."
          },
          {
            "romanized": "Somavaaram, Mangalavaaram, Budhavaaram",
            "options": [
              "Big, small",
              "Monday, Tuesday, Wednesday",
              "A lot / very, a little",
              "Everything / all, Nothing"
            ],
            "answer": 1,
            "explanation": "Somavaaram, Mangalavaaram, Budhavaaram = Monday, Tuesday, Wednesday."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma where you are right now and describe one thing visible from where you're sitting.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 29,
    "title": "Scatter Plots & Civil War Battles",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Scatter Plots & Correlation",
        "emoji": "📊",
        "imageQuery": "scatter plot correlation positive negative trend line data points",
        "content": "A **scatter plot** shows the relationship between two variables by plotting data as points.\n\n**Correlation types:**\n- **Positive correlation:** As x increases, y increases (height and shoe size)\n- **Negative correlation:** As x increases, y decreases (temperature and hot chocolate sales)\n- **No correlation:** No clear pattern\n\n**Line of best fit (trend line):** Drawn through the data to show the general trend.\n\n**Correlation ≠ Causation!**\nExample: Ice cream sales and drowning rates are positively correlated. Ice cream doesn't cause drowning — both increase in summer (confounding variable).\n\nAlways ask: is there a third variable causing both?",
        "keyFact": "Correlation ≠ Causation is one of the most important ideas in science. Vaccines and autism were once \"correlated\" in a study — the study was fraudulent.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What does a positive correlation on a scatter plot look like?",
                            "options": [
                                      "Points go down from left to right",
                                      "Points are random with no pattern",
                                      "Points go up from left to right",
                                      "Points form a horizontal line"
                            ],
                            "answer": 2,
                            "explanation": "Positive correlation: as x increases, y increases — points trend upward from left to right. Negative correlation trends downward."
                  },
                  {
                            "type": "mc",
                            "q": "Correlation between ice cream sales and drowning rates is high. What does this mean?",
                            "options": [
                                      "Ice cream causes drowning",
                                      "Drowning causes ice cream sales",
                                      "Both are caused by hot weather — correlation doesn't mean causation",
                                      "They are directly related"
                            ],
                            "answer": 2,
                            "explanation": "Classic example of correlation ≠ causation. Both increase in summer (hot weather) — a third variable. Always ask: is there a hidden cause?"
                  },
                  {
                            "type": "typed",
                            "q": "What is the line drawn through scatter plot data that best represents the trend called?",
                            "answer": "line of best fit",
                            "placeholder": "Three words...",
                            "explanation": "The line of best fit (trend line) passes as close as possible to all data points — it shows the general trend and can be used to make predictions."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Human Body: Endocrine System",
        "emoji": "🔬",
        "imageQuery": "endocrine system hormones glands diagram human body",
        "content": "The **endocrine system** uses hormones (chemical messengers) to regulate body functions — slower but more sustained than the nervous system.\n\n**Key glands and hormones:**\n- **Pituitary** (\"master gland\") — controls other glands; growth hormone\n- **Thyroid** — regulates metabolism and energy\n- **Adrenal glands** — adrenaline (fight-or-flight response)\n- **Pancreas** — insulin and glucagon (blood sugar regulation)\n- **Reproductive glands** — estrogen, testosterone (puberty, reproduction)\n\n**Feedback loops:** Most hormones use negative feedback — high levels trigger \"turn off\" signals.\n\n**Diabetes Type 1:** Pancreas doesn't produce insulin → cells can't absorb glucose.",
        "keyFact": "Adrenaline (epinephrine) can increase strength by up to 20% in extreme situations — that's why people occasionally lift cars off trapped people.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What does the endocrine system use to send messages?",
                            "options": [
                                      "Electrical signals",
                                      "Hormones in the blood",
                                      "Sound waves",
                                      "Neurons"
                            ],
                            "answer": 1,
                            "explanation": "The endocrine system uses hormones — chemical messengers released into the bloodstream that travel to target organs."
                  },
                  {
                            "type": "mc",
                            "q": "Which gland controls growth and metabolism?",
                            "options": [
                                      "Adrenal gland",
                                      "Thyroid gland",
                                      "Pancreas",
                                      "Pituitary gland"
                            ],
                            "answer": 3,
                            "explanation": "The pituitary gland is the 'master gland' — it controls other endocrine glands and produces growth hormone."
                  },
                  {
                            "type": "typed",
                            "q": "What organ produces insulin to regulate blood sugar?",
                            "answer": "pancreas",
                            "placeholder": "Name the organ...",
                            "explanation": "The pancreas produces insulin (lowers blood sugar) and glucagon (raises blood sugar) — keeping glucose levels balanced."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Civil War: Major Battles",
        "emoji": "⚔️",
        "imageQuery": "Civil War battles map Gettysburg Antietam Bull Run 1861-1865",
        "content": "The Civil War (1861-1865) was fought across thousands of battles. Four pivotal ones:\n\n**1st Bull Run (1861):** First major battle. Union spectators came to watch — and fled in panic. Both sides realized this would be a long, brutal war.\n\n**Antietam (1862):** Bloodiest single day in American history — 22,000 casualties. Tactical draw, but strategic Union success → Lincoln issued the Emancipation Proclamation.\n\n**Gettysburg (1863):** 3-day battle, 50,000 casualties. Lee's invasion of the North failed. Union victory marked the turning point.\n\n**Vicksburg (1863):** Union controlled the Mississippi River — splitting the Confederacy in two.",
        "keyFact": "At the Battle of Antietam, September 17, 1862, approximately 22,000 men were killed, wounded, or missing — more casualties in one day than the US suffered in the War of 1812 and Mexican-American War combined.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which battle is known as the bloodiest single day in American history?",
                            "options": [
                                      "Gettysburg",
                                      "Bull Run",
                                      "Antietam",
                                      "Vicksburg"
                            ],
                            "answer": 2,
                            "explanation": "Battle of Antietam (September 17, 1862): ~22,000 casualties in one day — the bloodiest day in American military history. It was a Union tactical victory that allowed Lincoln to issue the Emancipation Proclamation."
                  },
                  {
                            "type": "mc",
                            "q": "Why was the Battle of Gettysburg a turning point?",
                            "options": [
                                      "It ended the war",
                                      "It was the last Confederate invasion of the North — Confederate defeat ended their offensive strategy",
                                      "It freed enslaved people",
                                      "Union first gained control of the Mississippi"
                            ],
                            "answer": 1,
                            "explanation": "Gettysburg (July 1-3, 1863) was the largest battle — 50,000+ casualties. Confederate defeat ended Lee's attempt to invade the North and shift the war's momentum permanently to the Union."
                  },
                  {
                            "type": "typed",
                            "q": "What Union strategy involved capturing the Mississippi River to split the Confederacy?",
                            "answer": "Anaconda Plan",
                            "placeholder": "Name the plan...",
                            "explanation": "The Anaconda Plan: blockade Southern ports + control the Mississippi River to cut the Confederacy in two and strangle its supply lines — like a snake squeezing prey."
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
            "q": "Height and shoe size have positive correlation. This means:",
            "options": [
              "Taller people have smaller feet",
              "As height increases, shoe size tends to increase too",
              "Height causes shoe size",
              "The relationship is perfect"
            ],
            "answer": 1,
            "explanation": "Positive correlation: both variables tend to increase together."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Ice cream sales and drowning rates are correlated. Does ice cream cause drowning?",
            "options": [
              "Yes — ice cream causes overconfidence",
              "No — both increase in summer (confounding variable: warm weather)",
              "Yes — this is a clear causal relationship",
              "No — because the correlation is negative"
            ],
            "answer": 1,
            "explanation": "Confounding variable: warm weather causes both ice cream eating AND swimming (more drowning risk). The ice cream-drowning correlation is spurious."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "A scatter plot shows points going generally UP from left to right. This suggests:",
            "options": [
              "Negative correlation",
              "No correlation",
              "Positive correlation",
              "Causation"
            ],
            "answer": 2,
            "explanation": "Points trending up-right indicate positive correlation — as x increases, y tends to increase."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "What is the purpose of a line of best fit?",
            "options": [
              "To connect every data point",
              "To show the general trend in the data and allow predictions",
              "To find the mean of y values",
              "To show which points are outliers"
            ],
            "answer": 1,
            "explanation": "A line of best fit shows the trend — you can use it to make predictions for x values not in the data set."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What do hormones do?",
            "options": [
              "Fight infections",
              "Act as chemical messengers regulating body functions",
              "Produce electrical signals",
              "Build muscle tissue"
            ],
            "answer": 1,
            "explanation": "Hormones are chemical messengers secreted by glands that travel through blood to target organs and regulate various functions."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Which gland is called the \"master gland\"?",
            "options": [
              "Thyroid",
              "Adrenal",
              "Pituitary",
              "Pancreas"
            ],
            "answer": 2,
            "explanation": "The pituitary gland is the \"master gland\" — it controls many other endocrine glands through its own hormones."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Adrenaline (epinephrine) is released by the adrenal glands in response to:",
            "options": [
              "High blood sugar",
              "Stress or danger — preparing body for fight-or-flight",
              "Low body temperature",
              "High hormone levels from pituitary"
            ],
            "answer": 1,
            "explanation": "Adrenaline prepares the body for emergency — increases heart rate, dilates airways, redirects blood to muscles."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "In Type 1 diabetes, the pancreas doesn't produce insulin. This means:",
            "options": [
              "The body produces too much glucose",
              "Cells can't absorb glucose from blood — blood sugar rises dangerously",
              "The thyroid overcompensates",
              "Too much adrenaline is released"
            ],
            "answer": 1,
            "explanation": "Without insulin, cells can't take up glucose. Blood sugar rises, starving cells of energy despite having glucose in the blood."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What was significant about the Battle of Antietam (1862)?",
            "options": [
              "First battle of the war",
              "The bloodiest single day in American history — gave Lincoln the victory he needed to issue the Emancipation Proclamation",
              "The Union surrendered",
              "Lee captured Washington DC"
            ],
            "answer": 1,
            "explanation": "Antietam (22,000 casualties in one day) was tactically inconclusive but gave Lincoln the Union victory he needed to announce the Emancipation Proclamation."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why was the Battle of Gettysburg (1863) the turning point?",
            "options": [
              "The Union captured Richmond",
              "Lee's invasion of the North was repelled — he never invaded again",
              "Lincoln was killed",
              "The Confederate Navy was defeated"
            ],
            "answer": 1,
            "explanation": "Gettysburg stopped Lee's attempt to bring the war North and force a negotiated peace. After this defeat, the Confederacy was on the defensive."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why was Union control of the Mississippi River (after Vicksburg, 1863) strategically crucial?",
            "options": [
              "The river provided drinking water",
              "It split the Confederacy in two, cutting off Texas and western states from the eastern Confederate states",
              "The Union needed the river for boats",
              "Confederate gold was stored there"
            ],
            "answer": 1,
            "explanation": "Controlling the Mississippi split the Confederacy geographically — cutting communication and supply lines between the eastern and western Confederate states."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "What did the Union's spectators fleeing in panic after 1st Bull Run (1861) reveal?",
            "options": [
              "The Union would lose the war",
              "Both sides had fatally underestimated the scale and length of the coming conflict",
              "Southerners were better fighters",
              "The war would be fought only in Virginia"
            ],
            "answer": 1,
            "explanation": "The shocked spectators who came to watch an easy Union victory and fled in panic revealed that both sides had assumed a short, easy war. 1st Bull Run shattered that illusion for everyone."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "Two trains start at the same time from opposite ends of a 300-mile track. Train A travels at 60 mph. Train B travels at 40 mph.\n\nA bird starts at Train A's location and flies toward Train B at 100 mph. When it reaches Train B, it turns around and flies back to Train A. It keeps flying back and forth until the trains meet.\n\nHow far does the bird fly in total?",
        "hint": "You could calculate each leg of the bird's journey... or you could think about how long the whole thing takes.",
        "minWords": 20,
        "answer": "**The bird flies 300 miles.**\n\nThe tricky way: calculate each leg of the journey (it gets into an infinite series).\n\n**The elegant way:** Ask — how long until the trains meet?\nTrains close at 60+40=100 mph. Distance=300 miles. Time=300/100=**3 hours**.\n\nThe bird flies for exactly 3 hours at 100 mph = **300 miles**.\n\nThis is a famous problem because most mathematicians attempt the complicated calculation (the trains approach in an infinite series of shorter and shorter journeys). But the elegant solution ignores the bird's path and focuses on TIME — the bird flies for exactly as long as the trains travel."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🗺️",
        "formatName": "Map It",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Draw a simple scatter plot using real data. Ask 6-8 people TWO questions: \"How many hours of sleep did you get last night?\" and \"On a scale of 1-10, how focused do you feel today?\" Plot each person as a point (sleep=x, focus=y)."
        },
        "partB": {
          "prompt": "Look at your scatter plot and identify the correlation.",
          "questions": [
            "Draw and describe your scatter plot — what pattern do you see?",
            "What correlation did you find between sleep and focus? Is this causal or just correlated?"
          ]
        },
        "writingPrompt": "In at least 50 words: describe what your scatter plot shows. Is the relationship positive, negative, or no correlation? Is there a clear cause-and-effect relationship, or just correlation? What third variable might confound the results?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Correlation vs Causation",
        "prompt": "Teach correlation vs. causation using a surprising example:\n\n**\"Nicolas Cage movies and pool drownings are positively correlated — the years he makes more movies, more people drown in pools. Does Nicolas Cage cause drownings?\"**\n\nThen:\n1. Explain: correlation just means two things happen together — it doesn't mean one causes the other\n2. Ask: \"Can you think of a correlation that seems causal but probably isn't?\"\n3. Ask: \"What would you need to PROVE causation?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to the Nicolas Cage example? What correlation did they come up with? What did they say about proving causation?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "Civil War data analysis:\n\nUnion: 2.1M soldiers, 620,000 casualties (killed/wounded/missing)\nConfederacy: 750,000 soldiers, 483,000 casualties\n\n**Part A:** Calculate casualty RATE (casualties/soldiers) for each side. Which suffered higher rate?\n\n**Part B:** If casualty rate correlates with losing, does this data support \"the South fought harder\"?\n\n**Part C — Thatha Level 🧮:** The war lasted ~1,460 days. Average daily Union casualties? Average daily Confederate casualties? Which number more shocked you and why?\n\n**Part D:** Is \"casualty rate\" a good measure of how hard each side fought? What are its limitations?",
        "hint": "Part A: Rate = casualties ÷ soldiers. Compare the percentages.",
        "answer": "Part A: Union: 620k/2.1M=29.5%. Confederate: 483k/750k=64.4% — far higher Confederate rate. Part B: High Confederate rate might suggest they fought harder OR that they were outmatched AND took higher losses. Both interpretations are valid. Part C: Union: 620k/1460≈425/day. Confederate: 483k/1460≈331/day. Part D: Casualty rate has limits — doesn't account for battles fought, territory defended, quality of medical care, etc."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Weather & Nature",
        "newPhrases": [
          {
            "telugu": "వర్షం పడుతుంది",
            "romanized": "Varsham paḍutundi",
            "english": "It is raining",
            "tip": "Varsham = rain. Paḍutundi = is falling. \"Rain is falling.\""
          },
          {
            "telugu": "ఎండ బాగుంది",
            "romanized": "Enḍa baagundi",
            "english": "The sun is out / It is sunny",
            "tip": "Enḍa = sun/sunshine. Baagundi = is good. A natural Telangana phrase for nice weather."
          },
          {
            "telugu": "చెట్టు, పూలు, పక్షి",
            "romanized": "Chettu, puulu, pakshi",
            "english": "Tree, flowers, bird",
            "tip": "Chettu = tree. Puulu = flowers (Telangana: \"puulu\" not \"puvvulu\"). Pakshi = bird."
          },
          {
            "telugu": "ఈ రోజు వాతావరణం ఏంటి అక్కడ?",
            "romanized": "Ee roju vaatavaranam enti akkada?",
            "english": "What's the weather like there today?",
            "tip": "\"Enti\" (Telangana) + \"akkada\" (there) = a completely natural Telangana question. Ask great-grandma every time you call!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Baagundi",
            "options": [
              "Very good / Excellent",
              "It is good / It's fine",
              "Not good / Not well",
              "Wonderful! / Amazing!"
            ],
            "answer": 1,
            "explanation": "Baagundi = It is good / It's fine."
          },
          {
            "romanized": "Udayam, Madhyaanam, Saayantram, Raatri",
            "options": [
              "It is good / It's fine",
              "Morning, afternoon, evening, night",
              "Very good / Excellent",
              "Not good / Not well"
            ],
            "answer": 1,
            "explanation": "Udayam, Madhyaanam, Saayantram, Raatri = Morning, afternoon, evening, night."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Look outside right now. Describe what you see to great-grandma in Telugu — weather, trees, sky.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 30,
    "title": "💎 Chapter 3 Complete — Grade 1 Sorcerer!",
    "subject": "mixed",
    "isMilestone": true,
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Chapter 3 Math — Power Review",
        "emoji": "📊",
        "imageQuery": "math statistics probability functions review milestone achievement",
        "content": "Chapter 3 math was next-level:\n\n✓ **Probability** — basic and compound events, AND vs OR rules\n✓ **Scientific Notation** — a × 10ⁿ for huge and tiny numbers\n✓ **Rational vs Irrational** — fractions vs never-ending, never-repeating decimals\n✓ **Exponents** — product, quotient, power, zero, and negative rules\n✓ **Order of Operations** — PEMDAS with complex expressions\n✓ **Proportional Relationships** — y=kx, passes through origin\n✓ **Linear vs Nonlinear** — constant difference vs changing difference\n✓ **Scatter Plots** — correlation, line of best fit, correlation ≠ causation\n\nYou've now seen everything in 7th grade math AND started previewing 8th grade content.",
        "keyFact": "Scatter plots and correlation are among the most practically useful tools you've learned — you'll use them to evaluate news stories, scientific claims, and data throughout your life.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the probability of rolling a 4 on a standard die?",
                            "options": [
                                      "1/4",
                                      "1/6",
                                      "4/6",
                                      "1/3"
                            ],
                            "answer": 1,
                            "explanation": "A die has 6 faces, each equally likely. P(4) = 1/6. There's only one way to roll a 4 out of 6 possibilities."
                  },
                  {
                            "type": "typed",
                            "q": "Write 0.00082 in scientific notation.",
                            "answer": "8.2 × 10⁻⁴",
                            "placeholder": "Use × 10^...",
                            "explanation": "Move decimal 4 places right to get 8.2. Since we moved right, exponent is negative: 8.2 × 10⁻⁴."
                  },
                  {
                            "type": "mc",
                            "q": "Which rule applies when dividing exponents with the same base?",
                            "options": [
                                      "Multiply the exponents",
                                      "Add the exponents",
                                      "Subtract the exponents",
                                      "Divide the exponents"
                            ],
                            "answer": 2,
                            "explanation": "Division rule: x^a ÷ x^b = x^(a-b). Subtract the exponents. Example: 2⁵ ÷ 2³ = 2² = 4."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Chapter 3 Science — Power Review",
        "emoji": "🌍",
        "imageQuery": "climate evolution biodiversity science review summary chapter",
        "content": "Chapter 3 science connected biology to the world:\n\n✓ **Climate Science** — greenhouse effect, evidence, feedback loops, local impacts\n✓ **Human Impact** — habitat destruction, pollution, biodiversity loss, conservation wins\n✓ **Biodiversity & Conservation** — protected areas, rewilding, success stories\n✓ **Mitosis** — PMAT, identical daughter cells, cancer connection\n✓ **Cancer** — mutations in proto-oncogenes and tumor suppressor genes\n✓ **Evolution** — natural selection, Darwin's observations, adaptation\n✓ **Adaptation** — structural, behavioral, physiological examples\n✓ **Endocrine System** — hormones, glands, feedback loops, diabetes\n✓ **Population Dynamics** — carrying capacity, predator-prey cycles\n\nBig picture: you understand how life evolves, grows, regulates itself, and responds to threats.",
        "keyFact": "Evolution and climate are both misunderstood by many people — you now have the scientific foundation to understand both accurately.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the difference between mitosis and meiosis?",
                            "options": [
                                      "Mitosis is faster",
                                      "Mitosis produces 2 identical cells; meiosis produces 4 genetically unique cells with half the chromosomes",
                                      "Meiosis happens in skin cells",
                                      "They produce the same result"
                            ],
                            "answer": 1,
                            "explanation": "Mitosis: growth/repair → 2 identical daughter cells with 46 chromosomes. Meiosis: reproduction → 4 unique cells with 23 chromosomes (sperm/eggs)."
                  },
                  {
                            "type": "mc",
                            "q": "What is the relationship between evolution and natural selection?",
                            "options": [
                                      "They are the same thing",
                                      "Natural selection is the mechanism that drives evolutionary change",
                                      "Evolution causes natural selection",
                                      "Natural selection only applies to animals"
                            ],
                            "answer": 1,
                            "explanation": "Evolution is change in populations over time. Natural selection is the primary mechanism driving it — traits that aid survival are passed on more, gradually changing populations."
                  },
                  {
                            "type": "typed",
                            "q": "What term describes all organisms in an ecosystem plus their non-living environment?",
                            "answer": "ecosystem",
                            "placeholder": "One word...",
                            "explanation": "An ecosystem includes all living organisms (biotic) AND the non-living environment (abiotic — water, sunlight, temperature, soil). Both components interact constantly."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "mixed",
        "title": "60% Complete — You're Ahead of Any 7th Grader",
        "emoji": "💎",
        "imageQuery": "achievement progress 60 percent milestone celebration student",
        "content": "Abhi. 30 days. Halfway through July.\n\nYou've covered:\n- **Math:** All of pre-algebra, most of 7th grade math, early 8th grade previews\n- **Science:** Full year of Life Science + Body Systems + Climate + Evolution\n- **History:** Indigenous peoples → Gold Rush → Civil War battles beginning\n- **ELA:** Every major writing skill — vivid writing, argument, counterclaim, research, grammar, POV\n- **Telugu:** 29 phrases. You can have a real, 5-minute conversation with Ammamma.\n\n**The Summer Trophy is coming.** Day 35 is 5 days away.\n\n**What 7th grade looks like now:** When your teacher says \"variables\" — you've been solving systems. When they say \"food chains\" — you know keystone species. When they say \"Constitution\" — you can debate it.\n\nYou're not reviewing. You're already ahead. Keep going.",
        "keyFact": "Research shows students who learn material before class understand it 2x better when it's taught in class. You're setting up every lesson of 7th grade to be a review.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "You've completed 30 days. What fraction of the program is that?",
                            "options": [
                                      "1/4",
                                      "3/5",
                                      "2/3",
                                      "3/4"
                            ],
                            "answer": 1,
                            "explanation": "30 out of 50 = 30/50 = 3/5 = 60%. You're more than halfway and genuinely ahead of your grade level!"
                  },
                  {
                            "type": "mc",
                            "q": "If the Emancipation Proclamation was issued in 1863 and the Civil War ended in 1865, how long after was it?",
                            "options": [
                                      "1 year",
                                      "2 years",
                                      "3 years",
                                      "4 years"
                            ],
                            "answer": 1,
                            "explanation": "1865 - 1863 = 2 years. The Proclamation was issued during the war; the 13th Amendment officially ended slavery at war's end in 1865."
                  },
                  {
                            "type": "typed",
                            "q": "Quick algebra: solve 2(x + 3) = 14. What is x?",
                            "answer": "4",
                            "placeholder": "Enter x...",
                            "explanation": "Distribute: 2x + 6 = 14. Subtract 6: 2x = 8. Divide by 2: x = 4. Check: 2(4+3) = 2(7) = 14 ✓"
                  }
        ]
      },
      "quiz": {
        "type": "quiz",
        "title": "Chapter 3 Final Binding Vow",
        "unlocksAfterLessons": [
          1,
          2,
          3
        ],
        "questions": [
          {
            "subject": "math",
            "difficulty": 2,
            "q": "P(drawing a heart AND then a spade from 52 cards, without replacement)?",
            "options": [
              "13/204",
              "1/16",
              "1/4",
              "13/52"
            ],
            "answer": 0,
            "explanation": "P(heart)=13/52. P(spade|heart drawn)=13/51. Together: (13/52)(13/51)=169/2652=13/204."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "(3 × 10⁵) × (4 × 10³) =",
            "options": [
              "12 × 10⁸",
              "1.2 × 10⁹",
              "7 × 10⁸",
              "12 × 10¹⁵"
            ],
            "answer": 1,
            "explanation": "3×4=12. 10⁵×10³=10⁸. Result: 12×10⁸ = 1.2×10⁹."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "y values in a table: 2, 4, 8, 16, 32. This is:",
            "options": [
              "Linear",
              "Quadratic",
              "Exponential (doubling each time)",
              "Proportional"
            ],
            "answer": 2,
            "explanation": "Constant ratio (×2) between consecutive y-values = exponential."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "Evaluate: 2⁴ ÷ (3 + 1)² × 2 - 1",
            "options": [
              "0",
              "1",
              "3",
              "7"
            ],
            "answer": 1,
            "explanation": "P: (3+1)=4. E: 2⁴=16, 4²=16. MD: 16÷16=1, then 1×2=2. AS: 2-1=1."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Natural selection requires variation, inheritance, competition, and differential survival. Which of these creates NEW genetic variation?",
            "options": [
              "Natural selection itself",
              "Inheritance",
              "Mutations",
              "Competition"
            ],
            "answer": 2,
            "explanation": "Mutations create new genetic variation. Natural selection then acts on that existing variation."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "The adrenaline response increases strength by up to 20% because:",
            "options": [
              "It makes muscles larger",
              "It redirects blood flow, increases heart rate and oxygen, and releases energy reserves — all at once",
              "It numbs pain receptors",
              "It improves coordination"
            ],
            "answer": 1,
            "explanation": "Adrenaline triggers a coordinated emergency response — more blood to muscles, more oxygen, more glucose release. The overall effect is dramatically enhanced physical capability."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Climate change, biodiversity loss, and evolution are all connected. Which best explains the connection?",
            "options": [
              "They're unrelated",
              "Climate change alters environments → species that can't adapt fast enough go extinct → biodiversity decreases → ecosystems less resilient",
              "Biodiversity caused climate change",
              "Evolution can happen fast enough to prevent any extinctions"
            ],
            "answer": 1,
            "explanation": "Climate change shifts environments faster than evolution can respond → extinction of unadaptable species → biodiversity loss → ecosystem fragility. All interconnected."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "The Trail of Tears (1838) and the California Gold Rush (1848-55) both resulted in:",
            "options": [
              "Economic prosperity for all Americans",
              "Massive loss of Indigenous lives and displacement",
              "Expansion of Indigenous rights",
              "Treaties that were honored long-term"
            ],
            "answer": 1,
            "explanation": "Both events resulted in devastating loss of life and displacement for Indigenous peoples — part of a consistent pattern across American expansion."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Why was the Battle of Antietam important beyond just the fighting?",
            "options": [
              "It ended the war",
              "It gave Lincoln the Union \"victory\" he needed to issue the Emancipation Proclamation — changing the war's meaning",
              "It was the largest battle",
              "It started the war"
            ],
            "answer": 1,
            "explanation": "Lincoln waited for a Union victory to announce the Emancipation Proclamation — so it would seem like a position of strength, not desperation."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "In Chapter 3 history, we covered westward expansion (Manifest Destiny), the Trail of Tears, the Gold Rush, and Civil War causes. What is the COMMON THREAD?",
            "options": [
              "All were military conflicts",
              "All show the tension between American ideals of freedom and equality and American practices of expansion and exploitation",
              "All were economic successes for everyone",
              "All happened in the same decade"
            ],
            "answer": 1,
            "explanation": "The Declaration promised equality. But expansion required displacing Indigenous peoples. Prosperity required slavery. The gap between American ideals and American practices is the common thread of this era."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Which sentence is written from FIRST PERSON point of view?",
            "options": [
              "The sorcerer prepared for battle.",
              "You must face your cursed spirit alone.",
              "I could hear my heart pounding as I entered the domain.",
              "He had trained for years for this moment."
            ],
            "answer": 2,
            "explanation": "\"I could hear my heart pounding\" uses first-person narrator. We experience the battle through the narrator's senses and thoughts."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "Correlation ≠ causation is important for writing research arguments because:",
            "options": [
              "It makes arguments shorter",
              "Finding a correlation is only the first step — you must argue WHY the causal mechanism exists to make a strong claim",
              "Correlations are always false",
              "Research doesn't use statistics"
            ],
            "answer": 1,
            "explanation": "If you claim X causes Y, you need to show HOW and WHY — not just that they correlate. Otherwise, someone can always point to a confounding variable."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A locomotive leaves Chicago heading to Denver at 60 mph. Another leaves Denver heading to Chicago at 80 mph. The cities are 1,000 miles apart.\n\nA very fast bee starts at the front of the Chicago train, flies to the Denver train, bounces back to the Chicago train, bounces again... flying back and forth until the trains collide.\n\nThe bee flies at 150 mph.\n\nHow far does the bee fly?",
        "hint": "You've seen this type of problem before (Day 29). Use the same elegant approach.",
        "minWords": 20,
        "answer": "**The bee flies 1,050 miles.**\n\n**The elegant solution (not the hard way):**\nDon't calculate each leg. Find total TIME.\n\nTrains approach at 60+80=140 mph. Distance=1,000 miles.\nTime = 1,000/140 = 50/7 hours ≈ 7.14 hours.\n\nBee flies 150 mph for 50/7 hours = 150 × 50/7 = 7,500/7 ≈ **1,071 miles**\n\n(Same type of problem as Day 29 — elegant solution ignores the path and uses time.)\n\nMathematician John von Neumann was famously asked this. He gave the answer instantly. \"You summed the series?\" No — \"I thought of the simple way.\""
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "⚖️",
        "formatName": "Debate It",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Statement: \"The United States has done more harm than good throughout its history up to 1865.\""
        },
        "partB": {
          "prompt": "This is a hard one. Write the strongest FOR and strongest AGAINST using specific evidence from Chapters 1-3 history.",
          "questions": [
            "Write your strongest FOR argument — use at least 3 specific historical facts",
            "Write your strongest AGAINST argument — use at least 3 specific historical facts"
          ]
        },
        "writingPrompt": "In at least 50 words: which side wins, in your honest view? Or is this an unanswerable question? Explain your reasoning — this is a real historical debate.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "🌟",
        "concept": "Chapter 3 Full Showcase",
        "prompt": "Chapter 3 celebration! Make it a real family moment.\n\nYour 5-minute \"Chapter 3 Report\":\n1. ONE math concept that still surprises you (probability? exponents? scatter plots?)\n2. ONE science connection you made between climate change and something local\n3. ONE history moment that genuinely upset or moved you\n4. ONE Telugu phrase that feels natural now — not just memorized\n5. Tell them: \"60 days done. 5 days until I unlock the Summer Trophy.\"\n\nNo notes. You know this. 🎤",
        "followUp": "What did you pick? What was the family's reaction? How did it feel to say \"5 days until Summer Trophy\"?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "Chapter 3 Ultimate Crossover — Math + Science + History:\n\nThe Civil War killed approximately 620,000 soldiers. The US population in 1860 was ~31.4 million.\n\n**Part A:** What percentage of the US population died in the Civil War?\n\n**Part B:** Apply that same death rate to today's US population (~335 million). How many deaths would that be?\n\n**Part C — Thatha Level 🧮:** About 620,000 bacterial cells can fit in a 1 cubic millimeter space. If the number of Civil War deaths equals X bacterial cells, and each cell is a cube with side 1μm (10⁻⁶m), what is the total volume in cubic meters? Express in scientific notation.\n\n**Part D (Discussion):** What does connecting the death count to today's population reveal that raw numbers don't?",
        "hint": "Part A: 620,000/31,400,000 × 100. Part C: 620,000 cells × (1×10⁻⁶)³ cubic meters per cell.",
        "answer": "Part A: 620k/31.4M × 100 = 1.97% ≈ 2% of population. Part B: 335M × 0.0197 ≈ 6.6 million deaths today equivalent. Part C: Each cell volume = (10⁻⁶)³ = 10⁻¹⁸ m³. 620,000 × 10⁻¹⁸ = 6.2×10⁵ × 10⁻¹⁸ = 6.2×10⁻¹³ m³. Part D: The proportional scale makes the horror real — 2% of everyone in America today would be ~6.6 million people."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Thirty Days! Halfway!",
        "newPhrases": [
          {
            "telugu": "నేను ముప్పై రోజులు పూర్తి చేశా!",
            "romanized": "Nenu muppai rojulu puurti cheshaa!",
            "english": "I completed thirty days!",
            "tip": "Puurti cheshaa = I completed (Telangana short ending). This is a HUGE deal — say it proudly!"
          },
          {
            "telugu": "నాకు మీరంటే చాలా ఇష్టం",
            "romanized": "Naaku meerantee chaalaa ishtam",
            "english": "I love you so much",
            "tip": "You learned this on Day 15. Say it again — great-grandma can never hear it too many times."
          },
          {
            "telugu": "మీరు నన్ను చాలా ప్రేమిస్తారు",
            "romanized": "Meeru nannu chaalaa premistaru",
            "english": "You love me very much",
            "tip": "Prema = love. Premistaru = you love (respectful). Acknowledging her love out loud."
          },
          {
            "telugu": "నేను మీతో మాట్లాడాలని ఉంది",
            "romanized": "Nenu meeṭho maaṭlaaḍaalaani undi",
            "english": "I want to talk with you",
            "tip": "Maaṭlaaḍaalaani undi = I want to talk. A natural Telangana way to express longing for connection."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Nenu iravai rojulu nerchukunna!",
            "options": [
              "Every day I am learning",
              "I have studied for twenty days!",
              "Talking with you makes me very happy",
              "I am learning for you"
            ],
            "answer": 1,
            "explanation": "Nenu iravai rojulu nerchukunna! = I have studied for twenty days!."
          },
          {
            "romanized": "Ninna",
            "options": [
              "I have studied for twenty days!",
              "Yesterday",
              "Every day I am learning",
              "Talking with you makes me very happy"
            ],
            "answer": 1,
            "explanation": "Ninna = Yesterday."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "CALL GREAT-GRANDMA. This is Day 30. Tell her \"Nenu ముప్పై రోజులు puurti cheshaa!\" and \"Naaku meerantee chaalaa ishtam.\" Mean every word.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  }
];
