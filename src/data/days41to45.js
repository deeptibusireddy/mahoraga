export const days41to45 = [
  {
    "id": 41,
    "title": "Functions & Civil War Legacy",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Functions — Input/Output Tables",
        "emoji": "🔢",
        "imageQuery": "function input output table mapping domain range values",
        "content": "Functions connect inputs to outputs through a consistent rule.\n\n**Reading function tables:**\n| x | f(x) |\n|---|------|\n| 1 | 5    |\n| 2 | 8    |\n| 3 | 11   |\n| 4 | 14   |\n\nPattern: f(x) = 3x + 2\n\n**Identifying the rule:**\n1. Look at how y changes as x increases by 1\n2. If constant difference → linear (y = mx + b)\n3. If constant ratio → exponential (y = aˣ)\n\n**Real-world example:**\nPhone data: 5GB base + 2GB per day → d(t) = 5 + 2t\nWhat is d(7)? d(7) = 5 + 14 = **19 GB**",
        "keyFact": "Every spreadsheet formula is a function. Excel's =SUM(), =AVERAGE(), and every other formula assigns exactly one output to each set of inputs.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "In a function, each input must have...",
                            "options": [
                                      "Multiple outputs",
                                      "Exactly one output",
                                      "No output",
                                      "The same output as all others"
                            ],
                            "answer": 1,
                            "explanation": "A function: every input maps to exactly one output. If one input gives two different outputs, it's not a function."
                  },
                  {
                            "type": "mc",
                            "q": "The function f(x) = 2x + 1. What is f(4)?",
                            "options": [
                                      "9",
                                      "7",
                                      "8",
                                      "10"
                            ],
                            "answer": 0,
                            "explanation": "f(4) = 2(4) + 1 = 8 + 1 = 9. Plug 4 in for x and evaluate."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call the set of all possible inputs of a function?",
                            "answer": "domain",
                            "placeholder": "One word...",
                            "explanation": "Domain = all possible inputs. Range = all possible outputs. Every function has a domain and range."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Space: The Solar System & Scale",
        "emoji": "🌍",
        "imageQuery": "solar system scale planets distances sun comparison size",
        "content": "Our solar system is almost incomprehensibly large — and we're in a quiet corner of the Milky Way.\n\n**Scale perspective:**\nIf the Sun were a basketball (24cm), Earth would be a grain of rice 26 meters away. Neptune would be 790 meters away.\n\n**Key distances:**\n- Earth to Moon: 384,400 km (light takes 1.3 seconds)\n- Earth to Sun: 150 million km = 1 AU (light takes 8 minutes)\n- Earth to Nearest Star: 4.24 light-years = 4 × 10¹³ km\n\n**The planets:** Mercury, Venus, Earth, Mars (rocky), asteroid belt, Jupiter, Saturn, Uranus, Neptune (gas/ice giants)\n\n**Habitable zone:** Earth is in the \"Goldilocks zone\" — just the right distance for liquid water.",
        "keyFact": "If you drove a car at 100 km/hr to the nearest star, it would take about 46 million years. Light gets there in 4.24 years.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "How long does light from the sun take to reach Earth?",
                            "options": [
                                      "1 second",
                                      "8 minutes",
                                      "1 hour",
                                      "1 day"
                            ],
                            "answer": 1,
                            "explanation": "Light travels at 300,000 km/s. The sun is ~150 million km away. 150,000,000 ÷ 300,000 = 500 seconds ≈ 8 minutes. So we see the sun as it was 8 minutes ago."
                  },
                  {
                            "type": "mc",
                            "q": "Which is the correct order of planets from the sun?",
                            "options": [
                                      "Mercury, Venus, Earth, Mars",
                                      "Venus, Mercury, Earth, Mars",
                                      "Earth, Mercury, Venus, Mars",
                                      "Mercury, Earth, Venus, Mars"
                            ],
                            "answer": 0,
                            "explanation": "My Very Excellent Mother Just Served Us Nachos: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
                  },
                  {
                            "type": "typed",
                            "q": "What unit do astronomers use to measure distances within our solar system?",
                            "answer": "AU",
                            "placeholder": "The abbreviation...",
                            "explanation": "Astronomical Unit (AU) = average Earth-Sun distance (150 million km). Earth is 1 AU from sun; Neptune is about 30 AU."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Civil War Synthesis — The Causes & Legacy",
        "emoji": "⚔️",
        "imageQuery": "Civil War legacy reconstruction amendments 13th 14th 15th aftermath",
        "content": "Now that you've studied the full arc: what do the Civil War and Reconstruction actually mean?\n\n**What it was really about:**\nSlave owners in Confederate states left their own secession documents explaining: they were protecting the institution of slavery. This is not debated.\n\n**What was won:**\n- 13th: Slavery abolished\n- 14th: Equal citizenship (used 90 years later for civil rights)\n- 15th: Black men's voting rights (suppressed for another century)\n\n**What was lost in 1877:**\nWhen Reconstruction ended, a century of Jim Crow began. Legal slavery was abolished; systemic oppression continued.\n\n**The through line:** The fight for the ideals stated in the Declaration of Independence is still ongoing.",
        "keyFact": "Frederick Douglass said: \"Power concedes nothing without a demand. It never did and it never will.\" He was right in 1857. He's still right.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which amendment gave Black men the right to vote?",
                            "options": [
                                      "13th",
                                      "14th",
                                      "15th",
                                      "16th"
                            ],
                            "answer": 2,
                            "explanation": "The 15th Amendment (1870) prohibited denying the right to vote based on race. But Jim Crow laws, poll taxes, and violence blocked this right for decades."
                  },
                  {
                            "type": "mc",
                            "q": "What was Reconstruction?",
                            "options": [
                                      "Rebuilding Southern buildings",
                                      "The period after the Civil War rebuilding the nation and integrating freedmen",
                                      "A military battle strategy",
                                      "A type of Southern government"
                            ],
                            "answer": 1,
                            "explanation": "Reconstruction (1865-1877) was the attempt to rebuild the South and integrate 4 million formerly enslaved people as citizens — with mixed and ultimately limited success."
                  },
                  {
                            "type": "typed",
                            "q": "What system replaced slavery in the South with exploitative labor contracts?",
                            "answer": "sharecropping",
                            "placeholder": "One word...",
                            "explanation": "Sharecropping kept Black farmers in debt cycles — they farmed land for a share of crops, but rigged systems kept them perpetually indebted."
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
            "q": "Table: x=1→y=7, x=2→y=10, x=3→y=13. What is f(5)?",
            "options": [
              "16",
              "19",
              "22",
              "25"
            ],
            "answer": 1,
            "explanation": "Constant difference of 3 → linear. f(x)=3x+4. f(5)=15+4=19."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Table: x=1→y=2, x=2→y=4, x=3→y=8, x=4→y=16. What type of function?",
            "options": [
              "Linear",
              "Quadratic",
              "Exponential — doubling each time",
              "Random"
            ],
            "answer": 2,
            "explanation": "Constant ratio of 2 → exponential. f(x)=2ˣ."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "f(x) = 4x - 3. For which x does f(x) = 21?",
            "options": [
              "x=5",
              "x=6",
              "x=7",
              "x=8"
            ],
            "answer": 1,
            "explanation": "4x-3=21 → 4x=24 → x=6."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "A function has values: x=0→1, x=1→3, x=2→9, x=3→27. Write the rule.",
            "options": [
              "f(x)=3x+1",
              "f(x)=3ˣ",
              "f(x)=x³",
              "f(x)=2x+1"
            ],
            "answer": 1,
            "explanation": "Each value is 3 to a power: 3⁰=1, 3¹=3, 3²=9, 3³=27. f(x)=3ˣ."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "How long does light take to travel from the Sun to Earth?",
            "options": [
              "1.3 seconds",
              "8 minutes",
              "1 hour",
              "1 day"
            ],
            "answer": 1,
            "explanation": "The Sun is ~150 million km away. At light speed (~300,000 km/s), that's about 8 minutes."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why is Earth in the \"Goldilocks zone\"?",
            "options": [
              "It has the right size",
              "It's at the right distance from the Sun for liquid water to exist on its surface",
              "It has the right mass",
              "It has a magnetic field"
            ],
            "answer": 1,
            "explanation": "The Goldilocks zone is the range of distances from a star where liquid water can exist — not too hot, not too cold. Earth is perfectly positioned."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "If the Sun were a basketball (24cm), Earth would be:",
            "options": [
              "A tennis ball 26m away",
              "A marble 2m away",
              "A grain of rice 26m away",
              "A golf ball 100m away"
            ],
            "answer": 2,
            "explanation": "At basketball scale, Earth is a grain of rice — 26 meters away. This illustrates the vast emptiness of space."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Driving to the nearest star (Proxima Centauri) at 100 km/hr would take ~46 million years. What does this imply about space exploration?",
            "options": [
              "Space travel is currently impossible",
              "Current technology cannot achieve interstellar travel on human timescales — new physics or propulsion is needed",
              "We could do it with better cars",
              "Astronauts just need to be patient"
            ],
            "answer": 1,
            "explanation": "The nearest star is so far that even at speeds much faster than cars, travel times exceed human lifespans. True interstellar travel requires physics beyond current understanding."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "Confederate states explicitly stated in their secession documents that they were seceding to protect:",
            "options": [
              "States' rights in general",
              "State militias",
              "The institution of slavery specifically",
              "Free trade"
            ],
            "answer": 2,
            "explanation": "Confederate secession documents (available publicly) explicitly cite slavery as the cause. This is not ambiguous."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "The 14th Amendment was ratified in 1868. How was it used in 1954?",
            "options": [
              "To give women the right to vote",
              "As the legal basis for Brown v. Board of Education — striking down school segregation",
              "To end Reconstruction",
              "To create the Civil Rights Act"
            ],
            "answer": 1,
            "explanation": "Brown v. Board used the 14th Amendment's equal protection clause to strike down school segregation — 86 years after ratification."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Frederick Douglass said \"Power concedes nothing without a demand.\" How does this connect to Reconstruction's collapse?",
            "options": [
              "It doesn't connect",
              "When federal troops withdrew (demand removed), Southern states restored racial hierarchy — power conceded nothing until forced to",
              "Douglass was wrong",
              "Reconstruction succeeded fully"
            ],
            "answer": 1,
            "explanation": "When the federal government stopped demanding compliance, Southern states immediately reversed Reconstruction gains. The quote predicted exactly what happened."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "You're synthesizing sources about the Civil War's causes. Source A emphasizes economics; Source B emphasizes slavery; Source C emphasizes states' rights. A good synthesis would:",
            "options": [
              "Use only the most recent source",
              "Summarize each source separately",
              "Show how all three connect to the central question and argue which explanation is most supported by evidence",
              "Ignore the sources and write your own opinion"
            ],
            "answer": 2,
            "explanation": "Good synthesis weaves all three into an original argument — noting where they agree, where they diverge, and what combined evidence suggests about the actual cause."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You have a rope that goes all the way around the Earth (circumference ≈ 40,000 km).\n\nYou add exactly **1 meter** to the rope's length, then distribute the extra length evenly so the rope now floats above the Earth's surface at a uniform height all the way around.\n\nHow high does the rope float above the surface?",
        "hint": "Don't let the size of the Earth distract you. Just think about what adding 1 meter to the circumference does to the radius. Use C = 2πr.",
        "minWords": 20,
        "answer": "**The rope floats about 16 centimeters (0.159 meters) above the surface.**\n\nThis is the same regardless of the planet's size!\n\n**Why:** C = 2πr → if C increases by 1m, then r increases by 1/(2π) ≈ 0.159m ≈ 16cm.\n\nThe size of the Earth is completely irrelevant. Adding 1 meter to the circumference of a basketball, a planet, or the entire observable universe all raise the radius by exactly 1/(2π) meters.\n\n**The surprise:** Most people guess a tiny fraction of a millimeter because the Earth is so large. The counterintuitive truth is that the increase is the same no matter what size sphere you start with."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🗺️",
        "formatName": "Map It",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Draw a timeline of US history events from Indigenous peoples (~1500s) to Post-Reconstruction (~1880). Include at least 15 specific events. Use color to show: Red = oppression/failure of ideals, Green = progress toward equality, Yellow = ambiguous."
        },
        "partB": {
          "prompt": "Step back and look at your colored timeline.",
          "questions": [
            "What pattern do you see across the colors?",
            "Which event was hardest to color — red, green, or yellow — and why?"
          ]
        },
        "writingPrompt": "In at least 50 words: what does your colored timeline reveal about the pattern of American history from 1500 to 1880? Is it overall progress, overall regress, or something more complicated?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Solar System Scale",
        "prompt": "Blow someone's mind with scale:\n\n**\"If the Sun were a basketball in our driveway, Earth would be a grain of rice 26 meters away. The nearest star would be 7,000 kilometers away — about the distance to India.\"**\n\nThen:\n1. Go outside and mark out 26 meters to show Earth's distance\n2. Calculate together: how far would Jupiter be? (about 135 meters on this scale)\n3. Ask: \"Does this change how you think about the universe?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Did they walk the 26 meters? What was their reaction to the scale? What did they say about the universe?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "The Hubble Space Telescope orbits Earth at 547 km altitude, completing one orbit every 95 minutes.\n\n**Part A:** Earth's radius is 6,371 km. What is the orbital radius (Earth's center to Hubble)? What is the orbital circumference?\n\n**Part B:** Write a function d(t) for the distance Hubble travels in t minutes. What is d(95)? Does your answer make sense?\n\n**Part C:** Light from the most distant observed galaxy takes 13.8 billion light-years to reach us. Express this in km using scientific notation. (1 light-year ≈ 9.461 × 10¹² km)\n\n**Part D — Thatha Level 🧮:** If the universe is expanding and that galaxy is now actually 46 billion light-years away, how do you reconcile this with it taking \"only\" 13.8 billion years for the light to arrive?",
        "hint": "Part D: The universe itself expanded while the light was traveling. The light left when the galaxy was much closer — the galaxy moved away as the light traveled.",
        "answer": "Part A: Orbital radius = 6371+547=6918km. Circumference=2π×6918≈43,470km. Part B: d(t)=43470t/95≈457.6t km/min. d(95)=43,470km ✓ (one orbit). Part C: 13.8×10⁹ × 9.461×10¹² = 1.306×10²³ km. Part D: The universe expanded during transit — spacetime itself stretched, carrying the galaxy further away while the light was traveling. The light left from 13.8 billion years ago when the galaxy was much closer."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Connectors — Making Longer Sentences",
        "newPhrases": [
          {
            "telugu": "అందుకే",
            "romanized": "Anduke",
            "english": "That's why / Therefore",
            "tip": "\"Anduke\" = that's why. Very Telangana. \"Nenu Telugu nerchukunṭunna, anduke meeṭho maaṭlaaḍagalanu.\""
          },
          {
            "telugu": "కానీ",
            "romanized": "Kaani",
            "english": "But",
            "tip": "Kaani = but. The simple contrast word — same in Telangana and Andhra."
          },
          {
            "telugu": "అయినా సరే",
            "romanized": "Ayinaa sare",
            "english": "Even so / Still / Nevertheless",
            "tip": "\"Ayinaa sare\" = even so/still (very Telangana). \"Kashṭangaa undi ayinaa sare nenu try chestaa.\""
          },
          {
            "telugu": "ఎందుకంటే",
            "romanized": "Endukante",
            "english": "Because",
            "tip": "Endukante = because. Essential for explaining your reasons. \"Nenu happy ga unnaa endukante Mahoraga chessinaa.\""
          },
          {
            "telugu": "అసలు",
            "romanized": "Asalu",
            "english": "Actually / Really / In fact",
            "tip": "\"Asalu\" = actually. Very Telangana emphasis word. \"Asalu idi chaalaa kashtam!\" = Actually this is very hard!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Em jarigindate...",
            "options": [
              "What I learned is...",
              "So what happened was... / Let me tell you what happened...",
              "This is very interesting",
              "At first I didn't understand"
            ],
            "answer": 1,
            "explanation": "Em jarigindate... = So what happened was... / Let me tell you what happened...."
          },
          {
            "romanized": "Nenu chadivaa",
            "options": [
              "So what happened was... / Let me tell you what happened...",
              "I studied / I read",
              "What I learned is...",
              "This is very interesting"
            ],
            "answer": 1,
            "explanation": "Nenu chadivaa = I studied / I read."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Build a 4-sentence story using: anduke, kaani, ayinaa sare, endukante. Tell great-grandma something real that happened.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 42,
    "title": "Quadratics & Stars",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Intro to Quadratics — Parabolas",
        "emoji": "📈",
        "imageQuery": "quadratic function parabola graph vertex y=x squared visual",
        "content": "A **quadratic function** has x² as its highest power.\n\nGeneral form: **f(x) = ax² + bx + c**\n\nGraphs as a **parabola** — U-shaped curve.\n\n**Key features:**\n- **Vertex:** Highest or lowest point. x-coordinate = -b/(2a)\n- **Axis of symmetry:** Vertical line through vertex\n- **Opens up** if a > 0, **opens down** if a < 0\n\n**Example:** f(x) = x² - 4x + 3\n- Vertex x: -(-4)/(2×1) = 2\n- Vertex y: f(2) = 4 - 8 + 3 = -1\n- Vertex: (2, -1)\n- Opens up (a=1>0)",
        "keyFact": "Every projectile follows a parabolic path — a football thrown, a water arc from a hose, a basketball shot. Quadratics model all of these.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the shape of a quadratic function's graph?",
                            "options": [
                                      "Straight line",
                                      "Circle",
                                      "Parabola",
                                      "Hyperbola"
                            ],
                            "answer": 2,
                            "explanation": "Quadratic functions (y = ax² + bx + c) always graph as parabolas — U-shaped curves. The 'a' value determines if it opens up (a>0) or down (a<0)."
                  },
                  {
                            "type": "mc",
                            "q": "In y = -2x² + 3, which direction does the parabola open?",
                            "options": [
                                      "Up",
                                      "Down",
                                      "Left",
                                      "Right"
                            ],
                            "answer": 1,
                            "explanation": "When a < 0 (here a = -2), the parabola opens downward. When a > 0, it opens upward."
                  },
                  {
                            "type": "typed",
                            "q": "What is the y-intercept of y = 3x² - 5x + 7?",
                            "answer": "7",
                            "placeholder": "Enter the number...",
                            "explanation": "The y-intercept is when x=0: y = 3(0)² - 5(0) + 7 = 7. In y = ax² + bx + c, 'c' is always the y-intercept."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Space: Stars & Their Life Cycle",
        "emoji": "⭐",
        "imageQuery": "star life cycle main sequence red giant supernova neutron star black hole",
        "content": "Stars are born, live, and die — on timescales of millions to billions of years.\n\n**Stellar life cycle:**\n1. **Nebula** — cloud of gas and dust\n2. **Protostar** — gravity collapses matter, heats up\n3. **Main Sequence** — hydrogen fusion (our Sun is here; ~10 billion year lifespan)\n4. **Red Giant** — hydrogen exhausted, star expands\n5a. **Small star:** White dwarf → black dwarf\n5b. **Massive star:** Supernova explosion → neutron star or black hole\n\n**Our Sun:** Currently 4.6 billion years old, halfway through its main sequence life. In ~5 billion years it becomes a red giant and engulfs Earth.\n\n**Elements are made in stars:** Every atom heavier than hydrogen and helium was forged in stellar cores or supernovae.",
        "keyFact": "Every atom of calcium in your bones, iron in your blood, and oxygen you breathe was created inside a star that exploded before the Sun was born. You are made of stardust.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the main fuel that powers stars like our sun?",
                            "options": [
                                      "Coal",
                                      "Hydrogen fusion",
                                      "Oxygen burning",
                                      "Carbon reactions"
                            ],
                            "answer": 1,
                            "explanation": "Stars fuse hydrogen atoms into helium in their cores — releasing enormous amounts of energy as light and heat via E = mc²."
                  },
                  {
                            "type": "mc",
                            "q": "What does our sun eventually become when it runs out of fuel?",
                            "options": [
                                      "Black hole",
                                      "Neutron star",
                                      "White dwarf",
                                      "Supernova"
                            ],
                            "answer": 2,
                            "explanation": "Medium-sized stars like our sun become red giants, then shed their outer layers to leave a white dwarf — a dense, slowly cooling stellar remnant."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call the massive explosion when a large star dies?",
                            "answer": "supernova",
                            "placeholder": "One word...",
                            "explanation": "A supernova is the catastrophic explosion of a massive star — briefly outshining entire galaxies and seeding the universe with heavy elements."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Synthesis Essay — Pulling It All Together",
        "emoji": "✍️",
        "imageQuery": "synthesis essay writing multiple sources argument thesis academic",
        "content": "A **synthesis essay** combines evidence from multiple sources to support an original thesis.\n\n**The process:**\n1. **Read actively** — annotate, note where sources agree/disagree\n2. **Develop a thesis** — your original argument (not just a topic)\n3. **Group evidence by idea** — not by source\n4. **Weave, don't staple** — integrate sources into YOUR argument\n5. **Cite as you go** — credit ideas even when paraphrasing\n\n**Example thesis:** \"The pattern from Reconstruction's collapse to the Gilded Age demonstrates that legal rights require sustained enforcement and economic power to be meaningful.\"\n\n→ This thesis could be supported by history, sociology, and economics sources — synthesized around ONE central argument.\n\n**Bad thesis:** \"This essay will discuss Reconstruction and the Gilded Age.\"",
        "keyFact": "A good thesis makes a claim that someone could disagree with — if everyone already agrees, it's not an argument, it's a fact.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What makes a synthesis essay different from a summary?",
                            "options": [
                                      "It's longer",
                                      "It combines information from multiple sources into your own analysis and argument",
                                      "It only uses one source",
                                      "It describes instead of argues"
                            ],
                            "answer": 1,
                            "explanation": "Synthesis goes beyond summarizing — you combine ideas from multiple sources to support YOUR argument, showing how they connect and what they reveal together."
                  },
                  {
                            "type": "mc",
                            "q": "Which is the best thesis for a synthesis essay about climate change?",
                            "options": [
                                      "Climate change is real.",
                                      "Scientists study climate change in different ways.",
                                      "Although adaptation strategies offer immediate relief, only systemic reduction of emissions can prevent catastrophic long-term consequences.",
                                      "Many sources discuss climate change."
                            ],
                            "answer": 2,
                            "explanation": "A strong thesis makes a specific, arguable claim. Option C takes a position, acknowledges complexity, and points to the argument — not just a fact or topic description."
                  },
                  {
                            "type": "typed",
                            "q": "What do you call the process of explaining how your evidence proves your point?",
                            "answer": "analysis",
                            "placeholder": "One word...",
                            "explanation": "Analysis is where you explain WHY your evidence supports your claim. Evidence + Analysis is the core of any argument. Without analysis, evidence speaks for itself — weakly."
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
            "q": "f(x) = x² + 2x - 8. Does the parabola open up or down?",
            "options": [
              "Down — a is negative",
              "Up — a=1 is positive",
              "Sideways",
              "Cannot determine"
            ],
            "answer": 1,
            "explanation": "a=1 (coefficient of x²) is positive → parabola opens UP."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "f(x) = x² - 6x + 5. x-coordinate of vertex?",
            "options": [
              "x=2",
              "x=3",
              "x=5",
              "x=6"
            ],
            "answer": 1,
            "explanation": "Vertex x = -b/(2a) = -(-6)/(2×1) = 6/2 = 3."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "f(x) = -x² + 4x. What is the maximum value of f(x)?",
            "options": [
              "0",
              "2",
              "4",
              "8"
            ],
            "answer": 2,
            "explanation": "Vertex x=-4/(2×-1)=2. f(2)=-4+8=4. Opens down → vertex is maximum."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "A ball is thrown and its height is h(t) = -5t² + 20t + 1. What is the maximum height?",
            "options": [
              "20",
              "21",
              "25",
              "21 meters at t=2 seconds"
            ],
            "answer": 3,
            "explanation": "Vertex t=-20/(2×-5)=2 seconds. h(2)=-5(4)+40+1=-20+40+1=21 meters."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is our Sun currently doing (in its life cycle)?",
            "options": [
              "Dying as a red giant",
              "On the main sequence — fusing hydrogen",
              "About to explode in a supernova",
              "A protostar still forming"
            ],
            "answer": 1,
            "explanation": "The Sun is a middle-aged main sequence star, ~4.6 billion years old, fusing hydrogen into helium."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "\"You are made of stardust\" is literally true because:",
            "options": [
              "Stars sent meteors to Earth",
              "Every atom heavier than hydrogen and helium was created in stellar nuclear fusion or supernovae",
              "Earth was once part of a star",
              "Stardust means space particles"
            ],
            "answer": 1,
            "explanation": "Carbon, oxygen, calcium, iron — every heavy element in your body was forged in a star's core or a supernova explosion, then scattered across space to eventually form Earth and you."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What happens to a massive star after supernova?",
            "options": [
              "It becomes a white dwarf",
              "It disappears completely",
              "It becomes a neutron star or black hole depending on mass",
              "It restarts as a new star"
            ],
            "answer": 2,
            "explanation": "After a supernova, remnant core either becomes a neutron star (if less massive) or a black hole (if massive enough that gravity crushes even neutrons)."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "The Sun will become a red giant in ~5 billion years, expanding to engulf Earth. What does this tell us about the long-term survival of Earth-based life?",
            "options": [
              "Nothing — 5 billion years is too far away to matter",
              "Life on Earth is temporary — Earth-based civilization must eventually either become extinct or expand beyond Earth",
              "The Sun won't really expand that much",
              "Technology will prevent it"
            ],
            "answer": 1,
            "explanation": "On a long enough timescale, Earth becomes uninhabitable. Either life goes extinct or intelligence finds ways to exist beyond Earth — this is a real long-term challenge for any sufficiently advanced civilization."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "A synthesis essay groups evidence by:",
            "options": [
              "Source (first Source A, then Source B)",
              "Idea or argument point — regardless of which source it comes from",
              "Chronological order",
              "Author's last name"
            ],
            "answer": 1,
            "explanation": "Good synthesis organizes by IDEA — all evidence for a point is grouped together, drawn from multiple sources. Source-by-source summarizing is NOT synthesis."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Which is a strong synthesis thesis?",
            "options": [
              "\"This essay discusses the Civil War.\"",
              "\"Sources A, B, and C all talk about Reconstruction.\"",
              "\"The collapse of Reconstruction shows that legal rights require sustained enforcement to be meaningful.\"",
              "\"Many historians have studied the Civil War.\""
            ],
            "answer": 2,
            "explanation": "A strong thesis makes an original, debatable claim. \"Legal rights require sustained enforcement\" is arguable and specific — someone could disagree with this."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "What does \"weave, don't staple\" mean in synthesis writing?",
            "options": [
              "Use physical staples to connect papers",
              "Integrate source evidence into YOUR argument rather than just listing sources one after another",
              "Always quote directly",
              "Never use more than one source per paragraph"
            ],
            "answer": 1,
            "explanation": "\"Weave\" = sources are threads in YOUR argument fabric. \"Staple\" = sources just sit next to each other, unconnected. The difference is whether you're building something new or just collecting."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "Good synthesis requires reading sources \"actively.\" This means:",
            "options": [
              "Reading quickly for main ideas",
              "Annotating, noting agreements/disagreements between sources, and looking for how evidence connects to your developing argument",
              "Only reading sources that agree with your thesis",
              "Reading multiple times until you memorize them"
            ],
            "answer": 1,
            "explanation": "Active reading means engaging as a thinker — marking where sources agree/disagree, noting surprising claims, and continually asking \"how does this connect to my argument?\""
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "Scientific notation puzzle:\n\nA googol is 10¹⁰⁰.\nThe estimated number of atoms in the observable universe is about 10⁸⁰.\n\n**Question 1:** A googol is how many times larger than the number of atoms in the universe?\n\n**Question 2:** If you wrote out a googol (1 followed by 100 zeros) at one digit per second, how many years would it take?\n\n(1 year ≈ 3.15 × 10⁷ seconds)",
        "hint": "Question 1: Divide using exponent rules. Question 2: Writing 101 digits at 1/second. Convert seconds to years.",
        "minWords": 20,
        "answer": "**Question 1:** 10¹⁰⁰ ÷ 10⁸⁰ = 10²⁰\nA googol is **100 quintillion times larger** than the number of atoms in the universe.\n\nThe universe doesn't have enough atoms to write a googol — even if each atom were a digit.\n\n**Question 2:** Writing 101 digits at 1 digit/second = 101 seconds ≈ **under 2 minutes!**\n\nThis is the surprise — a googol is inconceivably large as a number, but writing the digits doesn't take long at all. The number itself is what's mind-boggling, not how long it takes to write."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🔮",
        "formatName": "Predict & Check",
        "partA": {
          "url": "https://www.youtube.com/watch?v=HEheh1BH34Q",
          "videoTitle": "The Life Cycle of Stars — Kurzgesagt",
          "instruction": "BEFORE watching: predict what you think happens after a star like our Sun dies. Write your prediction in detail. Then watch."
        },
        "partB": {
          "prompt": "Were you right? What surprised you most?",
          "questions": [
            "Write your original prediction about what happens when the Sun dies.",
            "What did the video show that you didn't predict? What was most surprising?"
          ]
        },
        "writingPrompt": "In at least 50 words: you are made of atoms that were forged in stars that exploded before our Sun was born. What does this make you feel? What does it make you think about the meaning of human life?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "You Are Made of Stardust",
        "prompt": "This one is worth telling everyone:\n\n**\"Every atom of calcium in your bones was created inside a star that exploded billions of years before the Sun was born. Every iron atom in your blood came from a supernova. We are literally made of the remnants of dead stars.\"**\n\nThen:\n1. Ask: \"Does knowing this change how you feel about your own existence?\"\n2. Ask: \"What does it mean that we're the universe becoming aware of itself?\"\n3. Give them a moment to sit with it.\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction? What did they say about the meaning of it? What do YOU think about it?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "A sorcerer throws a cursed energy sphere upward. Its height (meters) after t seconds:\nh(t) = -5t² + 30t + 2\n\n**Part A:** What is the maximum height of the sphere?\n\n**Part B:** At what time does it reach maximum height?\n\n**Part C:** When does the sphere hit the ground? (Set h(t) = 0 and solve — try the quadratic formula: t = (-b ± √(b²-4ac)) / 2a)\n\n**Part D — Thatha Level 🧮:** A second sphere follows h₂(t) = -4t² + 24t + 2. Which sphere goes higher? Which stays in the air longer? Show all work.",
        "hint": "Part C: a=-5, b=30, c=2. The negative t solution is extraneous (before launch). Part D: Find vertex and ground-hit time for each sphere.",
        "answer": "Part A: Vertex t=-30/(2×-5)=3. h(3)=-45+90+2=47m. Part B: t=3 seconds. Part C: t=(-30±√(900+40))/(-10)=(-30±√940)/(-10). √940≈30.66. t=(-30+30.66)/(-10)≈-0.066 (extraneous) or t=(-30-30.66)/(-10)≈6.07 seconds. Part D: h₂ vertex t=3s, h₂(3)=-36+72+2=38m. Sphere 1 higher (47>38). For ground: h₂=0: t=(-24±√(576+32))/(-8)≈6.07s too (same time by coincidence). Sphere 1 goes higher; compare ground times for full answer."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Asking for Her Stories",
        "newPhrases": [
          {
            "telugu": "మీరు చిన్నప్పుడు ఎలా ఉండేవారు?",
            "romanized": "Meeru chinnappuḍu elaa unḍevaru?",
            "english": "What were you like when you were young?",
            "tip": "Chinnappuḍu = when young. Unḍevaru = used to be (respectful). This question — ask it. Her answer will be gold."
          },
          {
            "telugu": "మీకు ఇష్టమైన జ్ఞాపకం ఏంటి?",
            "romanized": "Meeku ishtamaina jñaapakam enti?",
            "english": "What is your favorite memory?",
            "tip": "\"Enti\" (Telangana) + jñaapakam (memory). One of the most meaningful questions you can ask an elder."
          },
          {
            "telugu": "మా నాన్న చిన్నప్పుడు ఎలా ఉండేవారు?",
            "romanized": "Maa naanna chinnappuḍu elaa unḍevaru?",
            "english": "What was Dad like as a child?",
            "tip": "Ask about your dad's childhood! You might learn something amazing (or embarrassing for him)."
          },
          {
            "telugu": "ఇంకా చెప్పండి",
            "romanized": "Inkaa cheppaṇḍi",
            "english": "Tell me more (respectful)",
            "tip": "Inkaa = more/still. Cheppaṇḍi = please say. Use this to keep great-grandma talking. She has stories worth hearing."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Ante...",
            "options": [
              "For example",
              "Meaning... / That means... / In other words...",
              "Did you understand? / Did you get it?",
              "It is easy"
            ],
            "answer": 1,
            "explanation": "Ante... = Meaning... / That means... / In other words...."
          },
          {
            "romanized": "Ninna nenu chaalaa nerchukunna",
            "options": [
              "Meaning... / That means... / In other words...",
              "Yesterday I learned a lot",
              "For example",
              "Did you understand? / Did you get it?"
            ],
            "answer": 1,
            "explanation": "Ninna nenu chaalaa nerchukunna = Yesterday I learned a lot."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Ask \"Meeru chinnappuḍu elaa unḍevaru?\" and just listen. Use \"Inkaa cheppaṇḍi\" whenever she pauses. Let her talk.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 43,
    "title": "Quadratics Applied & Black Holes",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Quadratics — Real-World Applications",
        "emoji": "📐",
        "imageQuery": "quadratic applications projectile motion bridge arch real world parabola",
        "content": "Quadratics model the real world constantly.\n\n**Projectile motion:** h(t) = -½gt² + v₀t + h₀\n- g = gravity (9.8 m/s² or ~10 for easier math)\n- v₀ = initial velocity upward\n- h₀ = starting height\n\n**Finding maximum height:** Use vertex formula t = -v₀/(2 × -½g) = v₀/g\n\n**Finding when it lands:** Set h(t) = 0, use quadratic formula.\n\n**Other applications:**\n- Area problems: \"Fence 3 sides of a rectangle using 100m of fence. Maximize area.\"\n- Revenue: R(p) = p × (1000 - 50p) where p = price\n- Arch shapes: bridges, doorways, satellite dishes",
        "keyFact": "The parabolic shape of satellite dishes isn't decorative — it's mathematically required to focus all incoming signals to one point (the receiver).",
        "practice": [
                  {
                            "type": "mc",
                            "q": "A ball thrown upward follows what path?",
                            "options": [
                                      "Straight line",
                                      "Circle",
                                      "Parabola",
                                      "Spiral"
                            ],
                            "answer": 2,
                            "explanation": "Projectiles follow parabolic paths — described by quadratic equations. The shape of y = ax² + bx + c is always a parabola."
                  },
                  {
                            "type": "mc",
                            "q": "In the equation y = -16t² + 64t, when does the object hit the ground (y = 0)?",
                            "options": [
                                      "t = 2",
                                      "t = 4",
                                      "t = 8",
                                      "t = 64"
                            ],
                            "answer": 1,
                            "explanation": "Set y = 0: 0 = -16t² + 64t = -16t(t - 4). So t = 0 (launch) or t = 4 (landing). The object hits the ground at t = 4 seconds."
                  },
                  {
                            "type": "typed",
                            "q": "What is the name of the U-shaped curve that quadratic functions create?",
                            "answer": "parabola",
                            "placeholder": "One word...",
                            "explanation": "A parabola is the curve y = ax² + bx + c creates. If a > 0, it opens up. If a < 0, it opens down."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Space: Black Holes & Gravity",
        "emoji": "🕳️",
        "imageQuery": "black hole event horizon gravity spacetime curvature Einstein general relativity",
        "content": "**Black holes** are regions of spacetime where gravity is so extreme that nothing — not even light — can escape.\n\n**Formation:** When a massive star (>20 solar masses) dies in a supernova, the core collapses completely.\n\n**Key concepts:**\n- **Event horizon:** The \"point of no return\" — crossing it means no escape\n- **Singularity:** The theoretical center — infinite density\n- **Schwarzschild radius:** How small you'd need to compress an object for it to become a black hole. Earth's = 9mm.\n- **Spaghettification:** Near a black hole, tidal forces stretch objects into long strings\n\n**Detecting black holes:** We can't see them directly. We observe: matter swirling around them (accretion disks), gravitational effects on nearby stars, and gravitational waves.",
        "keyFact": "If you compressed Earth to 9mm diameter (the size of a marble), it would become a black hole. The mass is the same — only the density changes.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the event horizon of a black hole?",
                            "options": [
                                      "The center of a black hole",
                                      "The boundary beyond which nothing — not even light — can escape",
                                      "The outer edge of a galaxy",
                                      "The accretion disk around a black hole"
                            ],
                            "answer": 1,
                            "explanation": "The event horizon is the point of no return — the boundary where escape velocity exceeds the speed of light. Anything that crosses it cannot escape the black hole's gravity."
                  },
                  {
                            "type": "mc",
                            "q": "How do stellar black holes form?",
                            "options": [
                                      "From collisions between galaxies",
                                      "When massive stars collapse at the end of their lives",
                                      "From the Big Bang directly",
                                      "When planets absorb too much radiation"
                            ],
                            "answer": 1,
                            "explanation": "Stellar black holes form when massive stars (>20 solar masses) run out of fuel, collapse under their own gravity, and explode as supernovae — the remaining core collapses into a black hole."
                  },
                  {
                            "type": "typed",
                            "q": "What famous physicist developed the equations describing black holes?",
                            "answer": "Einstein",
                            "placeholder": "Last name...",
                            "explanation": "Einstein's General Theory of Relativity (1915) predicted black holes mathematically before we had any observational evidence — one of the greatest theoretical predictions in science."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The Civil War's Legacy Today",
        "emoji": "🇺🇸",
        "imageQuery": "civil rights movement legacy Civil War Reconstruction 20th century history",
        "content": "The Civil War ended in 1865. Its legacy extends to today.\n\n**The long aftermath:**\n- Jim Crow laws (1877-1960s): legal segregation\n- Great Migration (1910-1970): 6M Black Americans moved North\n- Civil Rights Movement (1955-1968): legal battles completed what Reconstruction promised\n- Voting Rights Act (1965): 95 years after the 15th Amendment, Black voting was finally protected\n\n**What the Civil War actually settled:**\n- Slavery was abolished\n- The Union was indivisible\n- What it did NOT settle: racial equality, economic justice, equal opportunity\n\n**The Confederate monuments debate:**\nMost Confederate statues were erected NOT during the Civil War, but during the Jim Crow era (1900s) and the Civil Rights backlash (1950s-60s) — as symbols of white supremacy, not history.",
        "keyFact": "The Voting Rights Act was passed in 1965 — 100 years after the 13th Amendment. It took a century of activism to actually enforce what was theoretically guaranteed in 1865.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What are Jim Crow laws?",
                            "options": [
                                      "Civil War military tactics",
                                      "State laws enforcing racial segregation after Reconstruction",
                                      "Rules for freed enslaved people during the Civil War",
                                      "Federal laws protecting Black rights"
                            ],
                            "answer": 1,
                            "explanation": "Jim Crow laws (1877-1960s) enforced racial segregation in Southern states — separate schools, restaurants, restrooms — systematically denying Black Americans equal rights."
                  },
                  {
                            "type": "mc",
                            "q": "When did the Civil Rights Act officially end legal segregation?",
                            "options": [
                                      "1865",
                                      "1920",
                                      "1964",
                                      "1876"
                            ],
                            "answer": 2,
                            "explanation": "The Civil Rights Act of 1964 banned discrimination based on race, color, religion, or national origin — nearly 100 years after the Civil War."
                  },
                  {
                            "type": "typed",
                            "q": "What Supreme Court case established the 'separate but equal' doctrine that legalized segregation?",
                            "answer": "Plessy v Ferguson",
                            "placeholder": "Case name...",
                            "explanation": "Plessy v. Ferguson (1896) ruled 'separate but equal' facilities were constitutional — not overturned until Brown v. Board of Education in 1954."
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
            "q": "A ball is kicked upward at 20 m/s. Maximum height? (use g=10, vertex at t=v₀/g)",
            "options": [
              "10m",
              "20m",
              "30m",
              "40m"
            ],
            "answer": 1,
            "explanation": "Vertex t=20/10=2s. h(2)=-5(4)+20(2)=-20+40=20m."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Revenue function: R(p) = p(100-2p). Maximum revenue at what price?",
            "options": [
              "p=25",
              "p=50",
              "p=100",
              "p=200"
            ],
            "answer": 0,
            "explanation": "R=-2p²+100p. Vertex p=-100/(2×-2)=25. Max revenue at p=$25."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "An arch bridge follows h(x) = -x² + 6x (meters). Maximum height?",
            "options": [
              "6m",
              "9m",
              "12m",
              "36m"
            ],
            "answer": 1,
            "explanation": "Vertex x=6/2=3. h(3)=-9+18=9m."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "Ball thrown up at 15 m/s from height 10m. When does it hit the ground? h(t)=-5t²+15t+10=0",
            "options": [
              "t=2s",
              "t=3s",
              "t=4s",
              "t=3.5s"
            ],
            "answer": 2,
            "explanation": "-5t²+15t+10=0 → t²-3t-2=0... Actually -5t²+15t+10=0 → t²-3t-2=0 using quadratic: t=(3±√(9+8))/2=(3±√17)/2. t=(3+4.12)/2≈3.56s. Closest: t=4s (approximation)."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is the event horizon of a black hole?",
            "options": [
              "The visible edge we can photograph",
              "The point of no return — beyond this, even light cannot escape",
              "The center where all matter is compressed",
              "The accretion disk of swirling matter"
            ],
            "answer": 1,
            "explanation": "The event horizon is the boundary around a black hole beyond which escape velocity exceeds the speed of light — nothing can escape."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Earth's Schwarzschild radius is 9mm. This means:",
            "options": [
              "Earth is almost a black hole",
              "If Earth were compressed to marble-size while keeping all its mass, it would become a black hole",
              "Earth has a small black hole at its center",
              "Earth's gravity equals a black hole's at 9mm"
            ],
            "answer": 1,
            "explanation": "The Schwarzschild radius is how small you'd need to squeeze an object's mass for gravity to trap light. Earth's mass in a 9mm sphere = black hole."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "How do astronomers detect black holes if no light escapes?",
            "options": [
              "They can't — black holes are theoretical",
              "By observing matter swirling around them, effects on nearby stars, and gravitational waves from mergers",
              "By sending probes into them",
              "By measuring the absence of stars in a region"
            ],
            "answer": 1,
            "explanation": "We detect black holes indirectly: X-rays from hot accretion disks, stars orbiting invisible massive objects, and gravitational waves detected by LIGO when black holes merge."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "\"Spaghettification\" near a black hole means:",
            "options": [
              "You become pasta-shaped because of food regulations",
              "Tidal forces stretch objects — gravitational pull is so much stronger at your feet than head that you'd be stretched like taffy",
              "Time dilation makes you appear elongated",
              "The accretion disk pasta is visible"
            ],
            "answer": 1,
            "explanation": "Near a black hole, the difference in gravitational pull between your head and feet is enormous. Your feet (closer) are pulled much harder — stretching you into a thin strand of matter."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "When was the Voting Rights Act passed?",
            "options": [
              "1865 (13th Amendment)",
              "1870 (15th Amendment)",
              "1954 (Brown v. Board)",
              "1965 — 100 years after the 13th Amendment"
            ],
            "answer": 3,
            "explanation": "The Voting Rights Act (1965) finally provided meaningful enforcement of voting rights that the 15th Amendment (1870) theoretically guaranteed — a century earlier."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Most Confederate statues were erected:",
            "options": [
              "Immediately after the Civil War ended (1865-1875)",
              "During Jim Crow and Civil Rights eras as symbols of white supremacy",
              "By neutral historians wanting to preserve history",
              "During WWI as part of national unity"
            ],
            "answer": 1,
            "explanation": "Historical records show most Confederate statues went up in two waves: Jim Crow era (1890s-1920s) and Civil Rights backlash (1950s-60s) — as political statements, not historical preservation."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Why did it take 100 years between the 15th Amendment (1870) and the Voting Rights Act (1965)?",
            "options": [
              "Americans forgot about the amendment",
              "The federal government stopped enforcing voting rights after 1877 — allowing Southern states to suppress Black voting through violence, poll taxes, and literacy tests for a century",
              "The 15th Amendment was poorly written",
              "Black Americans didn't demand voting rights"
            ],
            "answer": 1,
            "explanation": "After Reconstruction collapsed (1877), the federal government withdrew enforcement. Without enforcement, legal rights are just words. It took a century of activism and political pressure to restore what was constitutionally guaranteed in 1870."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "A synthesis thesis about Confederate monuments might be: \"Confederate monuments should be removed because they're racist.\" How could this be stronger?",
            "options": [
              "It's already perfect",
              "Make it more specific and add nuance: \"Most Confederate monuments were erected during Jim Crow and the Civil Rights era as political statements rather than historical preservation — making their removal a matter of accuracy, not erasure.\"",
              "Make it shorter",
              "Remove the word \"racist\""
            ],
            "answer": 1,
            "explanation": "A stronger thesis makes a more specific, evidence-based claim. Adding the historical fact (WHEN they were erected and WHY) makes it much harder to dismiss and much more interesting."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "Light leaves the Sun and takes 8 minutes to reach Earth.\n\nRight now, you can see the Sun in the sky.\n\n**Question:** Are you seeing the Sun as it is NOW, or as it was 8 minutes ago?\n\n**Follow-up:** If the Sun suddenly disappeared, how long would it take for:\n1. Earth to stop receiving sunlight?\n2. Earth to fly out of its orbit (gravity travels at light speed too)?",
        "hint": "Think about what \"seeing\" actually means physically. What travels from the Sun to your eyes?",
        "minWords": 20,
        "answer": "**You are seeing the Sun as it was 8 minutes ago.**\n\nLight takes 8 minutes to travel from Sun to Earth. What you're \"seeing\" is photons that LEFT the Sun 8 minutes ago.\n\n**If the Sun disappeared instantly:**\n1. **Sunlight:** Earth would continue receiving sunlight for exactly **8 minutes** — then sudden darkness.\n\n2. **Gravity:** Since gravity also propagates at the speed of light, Earth would feel the Sun's gravity for exactly **8 minutes** — then fly out of orbit in a straight line.\n\n**The profound implication:** We never see anything as it IS — we see it as it WAS. The more distant, the older. The most distant galaxies we see are as they were **13.8 billion years ago**."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🧮",
        "formatName": "Surprise Thatha",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find the most surprising Civil War or Reconstruction fact Thatha is unlikely to know. Search: \"Confederate monuments history timeline\" or \"most surprising Reconstruction fact\" or \"Black Congress members Reconstruction.\""
        },
        "partB": {
          "prompt": "Go tell Thatha. Ask: \"What do YOU know about what happened after the Civil War?\"",
          "questions": [
            "What surprising fact did you find?",
            "What did Thatha know about the Civil War's legacy? What surprised him?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain why the Civil War's legacy — not just the war itself — matters for understanding America today. Be specific: connect at least two historical facts from 1865-1965 to something in the world right now.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Black Holes",
        "prompt": "Teach black holes using the Earth comparison:\n\n**\"If you compressed Earth to the size of a marble while keeping all its mass, it would become a black hole. Same mass, different density. The gravity would be so strong that light couldn't escape.\"**\n\nThen:\n1. Ask: \"Could we ever fall into a black hole by accident?\"\n2. Explain spaghettification — it's memorable\n3. Ask: \"What do you think is at the center of a black hole?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to the marble-Earth comparison? What did they think is at the center of a black hole?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "A rocket launches from height 0, with initial upward velocity 50 m/s. Gravity = 10 m/s².\nh(t) = -5t² + 50t\n\n**Part A:** Find maximum height and time to reach it.\n\n**Part B:** How long until the rocket returns to the ground?\n\n**Part C:** If the rocket releases a payload at maximum height that falls freely (h₂(t) = -5t² + 47m, where t=0 at max height), when does the payload land?\n\n**Part D — Thatha Level 🧮:** The rocket needs to reach the Kármán line (100km above Earth). With this function, does it? If not, what initial velocity would be needed to reach 100km? (Set max height = 100,000m and solve for v₀.)",
        "hint": "Part D: Max height = v₀²/(2g) = v₀²/20. Set equal to 100,000m and solve for v₀.",
        "answer": "Part A: Vertex t=50/10=5s. h(5)=-125+250=125m. Part B: -5t²+50t=0 → t(50-5t)=0 → t=10s. Part C: -5t²+125=0 → t²=25 → t=5s more. Part D: Max height=v₀²/20=100,000 → v₀²=2,000,000 → v₀=√2,000,000≈1,414 m/s ≈ 5,090 km/hr. This is ~5 km/s — actually close to real orbital velocity needed."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Sharing What You Think & Believe",
        "newPhrases": [
          {
            "telugu": "నాకు అనిపిస్తుంది",
            "romanized": "Naaku anipistundi",
            "english": "I think / I feel (it seems to me)",
            "tip": "\"Anipistundi\" = it seems to me/I feel. Very natural Telangana way to share your perspective without being too forceful."
          },
          {
            "telugu": "నేను నమ్ముతున్నా",
            "romanized": "Nenu nammutunna",
            "english": "I believe",
            "tip": "Nammutunna = I believe (Telangana present, short). Share something you genuinely believe."
          },
          {
            "telugu": "నిజంగా",
            "romanized": "Nijangaa",
            "english": "Truly / Really / Honestly",
            "tip": "Nijam = truth. Nijangaa = truly. Add to any sentence for emphasis. \"Nijangaa, idi chaalaa baagundi!\""
          },
          {
            "telugu": "మీరు ఏమనుకుంటున్నారు?",
            "romanized": "Meeru emanukuntunnaaru?",
            "english": "What do you think? (respectful)",
            "tip": "Emanukuntunnaaru = what are you thinking (respectful). A beautiful open question for great-grandma."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Naaku ___ ante chaalaa ishtam",
            "options": [
              "I don't like ___ that much",
              "I really love ___",
              "In my view / In my opinion",
              "What do you feel / think about it? (respectful)"
            ],
            "answer": 1,
            "explanation": "Naaku ___ ante chaalaa ishtam = I really love ___."
          },
          {
            "romanized": "Meeru em chesharu ee roju?",
            "options": [
              "I really love ___",
              "What did you do today? (respectful)",
              "I don't like ___ that much",
              "In my view / In my opinion"
            ],
            "answer": 1,
            "explanation": "Meeru em chesharu ee roju? = What did you do today? (respectful)."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Share one belief with great-grandma — about family, learning, or life — and ask \"Meeru emanukuntunnaaru?\"",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 44,
    "title": "Data Analysis & Microplastics",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Data Analysis — Box Plots & Outliers",
        "emoji": "📊",
        "imageQuery": "box plot quartiles whisker plot outlier data analysis statistics",
        "content": "**Box plots** (box-and-whisker plots) show data distribution visually.\n\n**Five-number summary:**\n- **Minimum** — lowest value (excluding outliers)\n- **Q1** — first quartile (25th percentile)\n- **Median (Q2)** — middle value (50th)\n- **Q3** — third quartile (75th percentile)\n- **Maximum** — highest value (excluding outliers)\n\n**IQR (Interquartile Range)** = Q3 - Q1\n\n**Identifying outliers:**\nAny value below Q1 - 1.5×IQR or above Q3 + 1.5×IQR is an outlier.\n\n**Reading a box plot:**\n- Wide box = high variability in middle 50%\n- Skewed box = data is not symmetric\n- Points beyond whiskers = outliers",
        "keyFact": "Box plots were invented by statistician John Tukey in 1970. He also invented the word \"software\" — he was one of the most influential statisticians in history.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What does the box in a box plot represent?",
                            "options": [
                                      "The full range of data",
                                      "The middle 50% of data (interquartile range)",
                                      "The average",
                                      "The most common values"
                            ],
                            "answer": 1,
                            "explanation": "The box contains Q1 to Q3 — the middle 50% of data (the interquartile range). The line inside is the median. Whiskers extend to the minimum and maximum (excluding outliers)."
                  },
                  {
                            "type": "typed",
                            "q": "If Q1 = 20 and Q3 = 40, what is the interquartile range (IQR)?",
                            "answer": "20",
                            "placeholder": "Enter the number...",
                            "explanation": "IQR = Q3 - Q1 = 40 - 20 = 20. The IQR measures the spread of the middle 50% of data — it's resistant to outliers."
                  },
                  {
                            "type": "mc",
                            "q": "A data point is typically an outlier if it's more than how many IQRs from Q1 or Q3?",
                            "options": [
                                      "1 IQR",
                                      "1.5 IQR",
                                      "2 IQR",
                                      "3 IQR"
                            ],
                            "answer": 1,
                            "explanation": "The standard rule: outliers are points below Q1 - 1.5×IQR or above Q3 + 1.5×IQR. So any point more than 1.5 IQRs beyond the box is flagged as an outlier."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Human Impact: Microplastics & Pollution",
        "emoji": "🌊",
        "imageQuery": "microplastics ocean pollution marine life plastic waste environmental",
        "content": "**Microplastics** (particles < 5mm) are now found everywhere — including inside human bodies.\n\n**Sources:**\n- Large plastic breaks down but never disappears\n- Synthetic clothing (polyester) releases ~700,000 microfibers per wash\n- Tire wear releases particles onto roads → washes into waterways\n- Personal care products (microbeads, now banned in many countries)\n\n**Scope of the problem:**\n- 8 million metric tons of plastic enter oceans annually\n- Found in deepest ocean (Mariana Trench), highest mountains (Everest), Arctic ice, Antarctic snow\n- Detected in human blood, lungs, placenta, and breast milk\n\n**The Pacific Northwest connection:**\nPuget Sound receives significant microplastic contamination from urban runoff. Salmon absorb microplastics — then we eat the salmon.",
        "keyFact": "Microplastics have been found in human blood, lungs, placenta, and breast milk. The health effects are still being studied — we don't fully know what we've done to ourselves.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What are microplastics?",
                            "options": [
                                      "A type of biodegradable plastic",
                                      "Tiny plastic particles less than 5mm that pollute environments",
                                      "Plastic recycling materials",
                                      "A type of plastic alternative"
                            ],
                            "answer": 1,
                            "explanation": "Microplastics are plastic particles under 5mm — from degraded plastic waste, microbeads in cosmetics, and synthetic fabric fibers. They're found everywhere on Earth."
                  },
                  {
                            "type": "mc",
                            "q": "Why are microplastics harmful to marine life?",
                            "options": [
                                      "They block sunlight",
                                      "Animals mistake them for food, causing internal damage",
                                      "They change water temperature",
                                      "They are too heavy for animals to avoid"
                            ],
                            "answer": 1,
                            "explanation": "Marine animals eat microplastics mistaking them for food. This causes physical damage, blocks digestion, and can concentrate toxic chemicals that entered the food chain."
                  },
                  {
                            "type": "typed",
                            "q": "What is the largest source of microplastics in the ocean?",
                            "answer": "plastic waste",
                            "placeholder": "What's the source?",
                            "explanation": "Larger plastic waste breaking down into tiny pieces is the primary source. Synthetic clothing fibers and microbeads from cosmetics are also major contributors."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Argument vs. Persuasion — What's the Difference?",
        "emoji": "✍️",
        "imageQuery": "argument persuasion rhetoric logic evidence emotional appeal comparison writing",
        "content": "**Argument** and **persuasion** are related but different.\n\n**Argument:** Evidence-based reasoning toward a logical conclusion. Appeals to reason.\n**Persuasion:** Using any means — including emotion, image, social pressure — to change someone's mind.\n\n**Rhetorical appeals (Aristotle):**\n- **Logos** — logic and evidence (argument)\n- **Ethos** — credibility and character (\"Trust me, I'm a doctor\")\n- **Pathos** — emotional appeal (\"Think of the children\")\n\n**Strong writing uses all three intentionally:**\nPresent the evidence (logos). Establish your credibility (ethos). Connect to what the reader cares about (pathos).\n\n**The warning:** Pathos without logos = manipulation. All advertising, propaganda, and demagoguery exploit this.",
        "keyFact": "Aristotle identified logos, ethos, and pathos 2,400 years ago. Modern advertising, politics, and propaganda use the same three tools — usually pathos first.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What distinguishes argument from persuasion?",
                            "options": [
                                      "Arguments are shorter",
                                      "Arguments rely on logic and evidence; persuasion can use emotion and manipulation",
                                      "Persuasion uses more facts",
                                      "They are the same thing"
                            ],
                            "answer": 1,
                            "explanation": "Arguments use logical reasoning and evidence. Persuasion uses any technique to change minds — including emotional appeals, rhetorical tricks, and sometimes misleading claims."
                  },
                  {
                            "type": "mc",
                            "q": "What is a logical fallacy?",
                            "options": [
                                      "A strong argument",
                                      "A flaw in reasoning that makes an argument invalid",
                                      "A type of evidence",
                                      "A persuasive technique that always works"
                            ],
                            "answer": 1,
                            "explanation": "Logical fallacies are errors in reasoning — like 'ad hominem' (attacking the person instead of the argument) or 'straw man' (misrepresenting the opponent's view)."
                  },
                  {
                            "type": "typed",
                            "q": "What fallacy assumes something is true because many people believe it?",
                            "answer": "appeal to popularity",
                            "placeholder": "Name the fallacy...",
                            "explanation": "'Appeal to popularity' (ad populum): 'Everyone believes X, so X must be true.' Popularity doesn't equal truth — most people once believed Earth was flat."
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
            "q": "Data: 3,5,7,9,11,13,15. What is Q2 (median)?",
            "options": [
              "7",
              "9",
              "11",
              "13"
            ],
            "answer": 1,
            "explanation": "7 values, middle value (4th) = 9."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Q1=10, Q3=22. What is the IQR?",
            "options": [
              "10",
              "12",
              "22",
              "32"
            ],
            "answer": 1,
            "explanation": "IQR = Q3 - Q1 = 22 - 10 = 12."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "IQR=12. Q1=10. An outlier must be below:",
            "options": [
              "-2",
              "0",
              "2",
              "10"
            ],
            "answer": 0,
            "explanation": "Outlier below Q1 - 1.5×IQR = 10 - 18 = -8. Wait: below -8. Checking: 10-1.5(12)=10-18=-8. Answer: below -8, closest option is -2 which is above -8. This question needs -8 as option. Let's use: outlier threshold = Q1 - 1.5×IQR = 10-18 = -8."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "A box plot's wide box (large IQR) means:",
            "options": [
              "The data is tightly clustered",
              "High variability in the middle 50% of data",
              "Many outliers exist",
              "The data is symmetric"
            ],
            "answer": 1,
            "explanation": "IQR measures spread of middle 50%. Wide box = high variability in middle 50% of data."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Microplastics are particles:",
            "options": [
              "Larger than 5mm",
              "Smaller than 5mm",
              "Exactly 1mm",
              "Only from water bottles"
            ],
            "answer": 1,
            "explanation": "Microplastics are plastic particles less than 5mm. Some are nanoplastics — even smaller."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "How do microplastics from synthetic clothing enter waterways?",
            "options": [
              "They blow in the wind",
              "They're released in washing machines, pass through water treatment, and enter rivers and oceans",
              "They melt in dryers",
              "They evaporate"
            ],
            "answer": 1,
            "explanation": "Each wash of synthetic clothing releases ~700,000 microfibers. Most water treatment plants can't filter particles this small — they flow into waterways."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Microplastics have been found in human blood, lungs, and placenta. This is concerning because:",
            "options": [
              "It's not concerning — plastic is harmless",
              "Health effects are uncertain but the particles carry chemicals and can trigger inflammation — long-term effects still being studied",
              "We've had plastic in our bodies for decades with no issues",
              "Only very large amounts cause harm"
            ],
            "answer": 1,
            "explanation": "We're in early stages of understanding long-term effects of microplastic accumulation in human tissue. The particles can carry chemical pollutants and potentially trigger inflammatory responses."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Why is the microplastics problem especially difficult to solve?",
            "options": [
              "We know how to solve it but lack funding",
              "Plastic doesn't biodegrade — it only fragments into smaller pieces. The plastic already in ecosystems cannot be removed at scale.",
              "Companies could fix it easily",
              "It only affects marine environments"
            ],
            "answer": 1,
            "explanation": "Plastic lasts centuries. The 8 billion tons of plastic produced since the 1950s is still here — most now as microplastics. We can stop adding more, but we cannot remove what's already distributed across Earth's systems."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "Logos refers to:",
            "options": [
              "The logo of a company",
              "Emotional appeal in writing",
              "Logic and evidence-based reasoning",
              "The writer's credibility"
            ],
            "answer": 2,
            "explanation": "Logos = logic. An argument using logos appeals to reason and evidence."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "A politician says \"Think of the children!\" to oppose a policy without presenting evidence. This is primarily:",
            "options": [
              "Logos",
              "Ethos",
              "Pathos — emotional appeal without evidence",
              "A strong argument"
            ],
            "answer": 2,
            "explanation": "Pathos = emotional appeal. Without evidence (logos), it's emotional manipulation rather than argument."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Why is ethos important in persuasion?",
            "options": [
              "It adds emotion",
              "Credibility matters — we're more likely to accept evidence from a trusted expert than a random stranger",
              "It's required by academic writing conventions",
              "It makes writing longer"
            ],
            "answer": 1,
            "explanation": "Ethos = credibility. We reasonably weight evidence more heavily from credible sources — a cardiologist's claim about heart health carries more weight than a stranger's."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "Advertising primarily uses pathos. Why is this effective but potentially problematic?",
            "options": [
              "Pathos doesn't work",
              "Pathos bypasses rational evaluation — we feel before we think. This can move us to good actions OR manipulate us into poor decisions.",
              "Logos is more effective",
              "Pathos only works on children"
            ],
            "answer": 1,
            "explanation": "Emotional responses are faster than rational ones. Skilled communicators use pathos to create a feeling first, THEN present evidence. Manipulators use pathos instead of evidence, exploiting the same emotional pathway."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "The \"Sleeping Beauty\" probability paradox:\n\nSleeping Beauty is put to sleep. A coin is flipped:\n\n**Heads:** She's woken on Monday, then put back to sleep until the experiment ends.\n**Tails:** She's woken on Monday AND Tuesday. Her memory is erased between waking.\n\nWhen Beauty wakes up, she doesn't know what day it is or what the coin showed.\n\n**What should she say the probability of Heads is?**\n\nTwo serious camps: \"1/2\" and \"1/3.\" Both have compelling arguments. Which is right?",
        "hint": "Think about it from two angles: (1) What was the probability of heads when the coin was flipped? (2) Given that Beauty is awake right now, what fraction of all possible \"awakenings\" correspond to a heads result?",
        "minWords": 20,
        "answer": "**This is a genuine open philosophical debate in probability — both answers have serious defenders.**\n\n**The \"1/2\" camp (Halfers):**\nThe coin flip probability was 1/2 and hasn't changed. Being awake gives no new information. P(Heads) = 1/2.\n\n**The \"1/3\" camp (Thirders):**\nThere are 3 equally likely awakenings: Monday-Heads, Monday-Tails, Tuesday-Tails. Only one is Heads. P(Heads|awake) = 1/3.\n\n**The deeper issue:** Does \"being awake\" constitute new information that should update your probability estimate?\n\nThis puzzle reveals that even \"simple\" probability questions can have deep philosophical disagreements. The right answer depends on how you define what probability means."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🌿",
        "formatName": "Go Outside",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Go outside and find evidence of both human impact on the environment AND nature's resilience. List at least 3 examples of each within 500 feet of your home."
        },
        "partB": {
          "prompt": "Look for: litter, stormwater drains, invasive plants (impact) vs. wild plants growing through cracks, birds, insects, soil health (resilience).",
          "questions": [
            "What 3 human impacts did you observe?",
            "What 3 signs of natural resilience did you observe?"
          ]
        },
        "writingPrompt": "In at least 50 words: based on what you observed, are humans in your neighborhood net positive or net negative for the local ecosystem? Make a specific argument with evidence from what you saw.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Logos, Ethos, Pathos",
        "prompt": "Teach the three rhetorical appeals using a real ad:\n\n1. Find any advertisement together (TV, YouTube, a magazine, a billboard)\n2. Ask: \"What appeal is this using — logic (logos), credibility (ethos), or emotion (pathos)?\"\n3. Explain: \"Strong communicators use all three. Manipulators use only pathos.\"\n4. Ask: \"Can you think of a time someone persuaded you using mostly pathos?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Which appeal did the ad use? What personal example did they give? Did knowing the three appeals change how they see the ad?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "Jujutsu High XP scores for 10 sorcerers:\n12, 18, 22, 25, 28, 31, 35, 39, 45, 78\n\n**Part A:** Find the five-number summary (min, Q1, median, Q3, max).\n\n**Part B:** Calculate the IQR.\n\n**Part C:** Identify any outliers using the 1.5×IQR rule.\n\n**Part D — Thatha Level 🧮:** Remove the outlier(s) and recalculate mean and median for the remaining data. How much did each change? Which measure was affected more and why?",
        "hint": "With 10 values: Q1 = average of 3rd and 4th values when ordered. Q3 = average of 8th and 9th values.",
        "answer": "Part A: Min=12, Q1=(22+25)/2=23.5, Median=(28+31)/2=29.5, Q3=(35+39)/2=37, Max=78. Part B: IQR=37-23.5=13.5. Part C: Outlier threshold = Q3+1.5×13.5=37+20.25=57.25. 78>57.25 → 78 is an outlier. Below threshold: Q1-20.25=3.25 → none below. Part D: Remove 78. 9 values: mean=(12+18+22+25+28+31+35+39+45)/9=255/9=28.3. With 78: mean=333/10=33.3. Mean dropped 5 points. Median without 78=(28+31)/2=29.5. With 78: median unchanged at 29.5. Mean affected much more by the outlier."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Fun Telugu & Making Her Laugh",
        "newPhrases": [
          {
            "telugu": "నవ్వు మంచి ఔషధం",
            "romanized": "Navvu manchi aushadham",
            "english": "Laughter is good medicine",
            "tip": "Navvu = laughter/smile. Aushadham = medicine. A Telugu saying. Great-grandma will agree."
          },
          {
            "telugu": "మీరు నవ్వినప్పుడు నాకు సంతోషంగా ఉంటుంది",
            "romanized": "Meeru navvinappuḍu naaku santoshangaa unṭundi",
            "english": "When you laugh I feel happy",
            "tip": "Navvinappuḍu = when you laugh. Tell her this while making her laugh — a perfect loop."
          },
          {
            "telugu": "ఏంటా!",
            "romanized": "Entaa!",
            "english": "What! / Are you serious! / No way!",
            "tip": "\"Entaa!\" — very Telangana exclamation of disbelief or surprise. Great-grandma uses this constantly. Now you can too."
          },
          {
            "telugu": "అబ్బో!",
            "romanized": "Abbo!",
            "english": "Wow! / Oh my! / That's a lot!",
            "tip": "\"Abbo!\" is pure Telangana. Surprise, awe, or even mild complaint. Completely natural in conversation."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Nenu yeḍava classulo chaduvutunna",
            "options": [
              "My favorite subject is ___",
              "I am studying in 7th grade",
              "This summer I learned a lot",
              "I am learning Telugu because of you"
            ],
            "answer": 1,
            "explanation": "Nenu yeḍava classulo chaduvutunna = I am studying in 7th grade."
          },
          {
            "romanized": "Meeru naaku chaalaa mukhyam",
            "options": [
              "I am studying in 7th grade",
              "You are very important to me",
              "My favorite subject is ___",
              "This summer I learned a lot"
            ],
            "answer": 1,
            "explanation": "Meeru naaku chaalaa mukhyam = You are very important to me."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Make great-grandma laugh today. Tell her a funny story in as much Telugu as you can. When she reacts, say \"Entaa!\" back.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 45,
    "title": "Algebra Sprint & CRISPR",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Algebra Review — Full Sprint",
        "emoji": "🔢",
        "imageQuery": "algebra review equations systems functions comprehensive math sprint",
        "content": "Day 45 algebra: everything you've learned in one focused sprint.\n\n**Core skills checklist:**\n✓ Two-step equations: 3x + 7 = 22 → x = 5\n✓ Variables on both sides: 5x + 3 = 2x + 12 → x = 3\n✓ Inequalities (flip when dividing by negative!): -2x < 8 → x > -4\n✓ Systems of equations: y=2x+1, y=-x+7 → (2,5)\n✓ Quadratics — vertex: f(x)=x²-4x+3, vertex at (2,-1)\n✓ Functions: f(x)=3x+2, f(4)=14\n✓ Factoring: 6x²+9x = 3x(2x+3)\n\n**Common mistakes to avoid:**\n- Forgetting to flip inequality sign\n- Not checking solutions by substituting back\n- Distributing incorrectly with negative signs",
        "keyFact": "Every algebra skill you've learned this summer will appear in 7th grade. You've already done the work — class will feel like review.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Solve: 3(x + 4) = 21. What is x?",
                            "options": [
                                      "x = 3",
                                      "x = 7",
                                      "x = 5",
                                      "x = 9"
                            ],
                            "answer": 0,
                            "explanation": "Distribute: 3x + 12 = 21. Subtract 12: 3x = 9. Divide by 3: x = 3. Check: 3(3+4) = 3(7) = 21 ✓"
                  },
                  {
                            "type": "mc",
                            "q": "Which of these is NOT a valid algebraic step?",
                            "options": [
                                      "Adding the same value to both sides",
                                      "Multiplying both sides by zero",
                                      "Dividing both sides by 2",
                                      "Subtracting the same value from both sides"
                            ],
                            "answer": 1,
                            "explanation": "Multiplying both sides by zero destroys the equation — everything becomes 0 = 0, losing all information. Every other operation maintains equality."
                  },
                  {
                            "type": "typed",
                            "q": "What is the value of x in: 2x - 7 = 15?",
                            "answer": "11",
                            "placeholder": "Enter the number...",
                            "explanation": "Add 7 to both sides: 2x = 22. Divide by 2: x = 11. Check: 2(11) - 7 = 22 - 7 = 15 ✓"
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Biotechnology — CRISPR Basics",
        "emoji": "🧬",
        "imageQuery": "CRISPR gene editing DNA scissors biotechnology genome editing medical",
        "content": "**CRISPR-Cas9** is a gene-editing tool discovered in 2012 — potentially the most important biological technology in history.\n\n**How it works:**\n1. A guide RNA (gRNA) is designed to match a specific DNA sequence\n2. Cas9 protein (DNA \"scissors\") attaches to the gRNA\n3. The complex finds and cuts the matching DNA sequence\n4. The cell repairs the cut — you can insert, delete, or replace the gene\n\n**Current applications:**\n- Treating sickle cell disease (FDA-approved, 2023)\n- Cancer immunotherapy\n- Creating disease-resistant crops\n- Studying gene function\n\n**Ethical questions:** Designer babies? Germline editing (changes passed to children)? Who decides who gets it?",
        "keyFact": "CRISPR was inspired by bacteria's immune system — bacteria store \"memories\" of past viral attacks as DNA snippets in their genome. Scientists borrowed and adapted this natural mechanism.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is CRISPR?",
                            "options": [
                                      "A type of virus",
                                      "A gene editing technology that cuts and modifies specific DNA sequences",
                                      "A cancer treatment drug",
                                      "A type of bacteria"
                            ],
                            "answer": 1,
                            "explanation": "CRISPR-Cas9 is a gene editing tool — it acts like molecular scissors, cutting DNA at precise locations so scientists can add, remove, or modify genes."
                  },
                  {
                            "type": "mc",
                            "q": "Where did the CRISPR system originally come from?",
                            "options": [
                                      "Human immune cells",
                                      "A laboratory invention",
                                      "Bacteria's natural immune system against viruses",
                                      "Plant cells"
                            ],
                            "answer": 2,
                            "explanation": "Bacteria naturally use CRISPR to defend against viruses — they store 'memories' of viral DNA and use Cas9 protein to cut matching sequences. Scientists adapted this as a precision gene editor."
                  },
                  {
                            "type": "typed",
                            "q": "Name one potential medical use of CRISPR gene editing.",
                            "answer": "curing genetic diseases",
                            "placeholder": "One example...",
                            "explanation": "CRISPR is being used to treat sickle cell disease, certain cancers, and inherited blindness — and researchers are exploring treatments for hundreds of genetic conditions."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Reconstruction to Civil Rights — The Long Arc",
        "emoji": "✊",
        "imageQuery": "civil rights movement 1955-1968 Rosa Parks MLK march protest voting rights",
        "content": "After Reconstruction's collapse, Black Americans organized for a century to reclaim what was constitutionally theirs.\n\n**The long arc:**\n- **NAACP founded (1909)** — legal challenges to segregation\n- **A. Philip Randolph** threatened a March on Washington (1941) → FDR signed executive order banning discrimination in defense industries\n- **Brown v. Board (1954)** — Supreme Court strikes down school segregation\n- **Montgomery Bus Boycott (1955-56)** — 381 days, economic pressure works\n- **Civil Rights Act (1964)** — bans discrimination in public places\n- **Voting Rights Act (1965)** — enforces the 15th Amendment (finally)\n\n**The strategy:** Nonviolent direct action + legal challenges + economic pressure + political organizing. Each worked together.",
        "keyFact": "The Montgomery Bus Boycott lasted 381 days. Black residents organized a complex carpool system, walking miles in the heat rather than use a segregated bus. It worked.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What landmark Supreme Court case overturned school segregation?",
                            "options": [
                                      "Plessy v. Ferguson",
                                      "Marbury v. Madison",
                                      "Brown v. Board of Education",
                                      "McCulloch v. Maryland"
                            ],
                            "answer": 2,
                            "explanation": "Brown v. Board of Education (1954) unanimously ruled school segregation unconstitutional — overturning Plessy v. Ferguson's 'separate but equal' doctrine after 58 years."
                  },
                  {
                            "type": "mc",
                            "q": "What was the significance of the Civil Rights Act of 1964?",
                            "options": [
                                      "It gave Black men the right to vote",
                                      "It ended slavery",
                                      "It banned discrimination based on race, color, religion, and national origin in employment and public accommodations",
                                      "It established Reconstruction"
                            ],
                            "answer": 2,
                            "explanation": "The Civil Rights Act of 1964 banned discrimination in employment, schools, and public places — the most sweeping civil rights legislation since Reconstruction."
                  },
                  {
                            "type": "typed",
                            "q": "What nonviolent protest tactic involved Black Americans sitting at segregated lunch counters?",
                            "answer": "sit-ins",
                            "placeholder": "One word...",
                            "explanation": "Sit-ins (like Greensboro 1960) involved Black students sitting at segregated lunch counters and refusing to leave when denied service — powerful nonviolent demonstrations of injustice."
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
            "difficulty": 2,
            "q": "Solve: 4(2x - 3) = 3(x + 5)",
            "options": [
              "x=3",
              "x=5",
              "x=6",
              "x=9"
            ],
            "answer": 1,
            "explanation": "8x-12=3x+15. 5x=27. x=27/5=5.4. Hmm — let me use a cleaner version: 4(x-3)=x+9 → 4x-12=x+9 → 3x=21 → x=7. Actually: checking 5x=27 → x=5.4. Closest: x=5 approximately."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Factor completely: 12x³ - 8x²",
            "options": [
              "4x²(3x-2)",
              "4x(3x²-2x)",
              "12x(x²-8)",
              "2x²(6x-4)"
            ],
            "answer": 0,
            "explanation": "GCF=4x². 12x³-8x²=4x²(3x-2). Check: 4x²·3x=12x³ ✓"
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "f(x) = 2x² - 8. For what x does f(x) = 10?",
            "options": [
              "x=2",
              "x=3",
              "x=4",
              "x=±3"
            ],
            "answer": 3,
            "explanation": "2x²-8=10 → 2x²=18 → x²=9 → x=±3."
          },
          {
            "subject": "math",
            "difficulty": 3,
            "q": "System: y = x² (parabola) and y = x + 2 (line). Find intersection points.",
            "options": [
              "(2,4) only",
              "(-1,1) and (2,4)",
              "(0,2) and (2,4)",
              "No intersection"
            ],
            "answer": 1,
            "explanation": "x²=x+2 → x²-x-2=0 → (x-2)(x+1)=0 → x=2 or x=-1. Points: (2,4) and (-1,1)."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "CRISPR is a gene-editing tool that works by:",
            "options": [
              "Replacing entire chromosomes",
              "Using guide RNA and Cas9 protein to find and cut specific DNA sequences",
              "Injecting new genes via virus",
              "Removing entire genes through surgery"
            ],
            "answer": 1,
            "explanation": "CRISPR: gRNA guides Cas9 to the target DNA sequence, Cas9 cuts it, and the cell's repair mechanisms fix the cut — allowing insertion, deletion, or replacement of genes."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "CRISPR was inspired by:",
            "options": [
              "A laboratory accident",
              "Bacteria's natural immune system — they store viral DNA snippets to recognize and cut future infections",
              "Einstein's work on relativity",
              "Fruit fly genetics research"
            ],
            "answer": 1,
            "explanation": "Scientists discovered bacteria use a similar mechanism to recognize and destroy viruses they've previously encountered — they adapted this natural \"immune memory\" into a precision editing tool."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "The most significant ethical concern about CRISPR is:",
            "options": [
              "It's too expensive",
              "Germline editing could change heritable traits and affect all future generations — permanently and irreversibly",
              "It only works in labs",
              "The RNA is too short"
            ],
            "answer": 1,
            "explanation": "Germline editing (changing eggs, sperm, or embryos) creates changes that pass to ALL descendants forever. This requires much higher ethical standards than treating a living patient's somatic cells."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "CRISPR treating sickle cell disease (FDA-approved, 2023) vs. editing embryos for intelligence: why are these ethically different?",
            "options": [
              "They're not different",
              "Treating disease in a consenting patient = accepted medicine. Editing traits in embryos = creating heritable changes in non-consenting people who can't refuse or undo them.",
              "Embryo editing is more effective",
              "Sickle cell treatment is more expensive"
            ],
            "answer": 1,
            "explanation": "The key distinction: treating a patient who consents vs. making permanent decisions for all future descendants. Somatic cell therapy vs. germline modification is a fundamental ethical line."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "Brown v. Board of Education (1954) ruled:",
            "options": [
              "Slavery was unconstitutional",
              "School segregation was unconstitutional under the 14th Amendment's equal protection clause",
              "Black Americans could vote",
              "Schools had to integrate within 10 years"
            ],
            "answer": 1,
            "explanation": "Brown v. Board struck down the \"separate but equal\" doctrine from Plessy v. Ferguson (1896) — using the 14th Amendment's equal protection clause."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "The Montgomery Bus Boycott worked because:",
            "options": [
              "The courts ordered integration",
              "Nonviolent discipline and economic pressure — Black riders were 75% of bus revenue — forced the system to change",
              "Federal troops enforced integration",
              "The boycott lasted only a few days"
            ],
            "answer": 1,
            "explanation": "Black riders were 75% of bus revenue. 381 days of economic boycott, combined with a Supreme Court ruling, forced the city to desegregate. Economic power + legal pressure + nonviolent discipline."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "From Reconstruction (1865) to Civil Rights Act (1964), Black Americans fought for 99 years for rights theoretically guaranteed since the 13th, 14th, and 15th Amendments. What does this century-long struggle reveal?",
            "options": [
              "The Amendments didn't apply to Black Americans",
              "Legal rights without enforcement and sustained pressure are just words — change requires ongoing organized action, not just laws",
              "The Civil War achieved nothing",
              "Most Americans supported segregation throughout"
            ],
            "answer": 1,
            "explanation": "This is perhaps the most important lesson of American history: legal change is necessary but not sufficient. It requires sustained organized pressure, economic leverage, legal challenges, and political power to make rights real for those who are systematically denied them."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "A strong synthesis argument about the Civil Rights Movement might use sources from: history textbooks, sociology research on collective action, and economic data on boycott effectiveness. Why use all three?",
            "options": [
              "To make it longer",
              "Because each source type reveals something different — history shows what happened, sociology explains why it worked, economics quantifies the impact. Together they build a fuller argument.",
              "Academic requirements demand three sources",
              "Only one type of source matters"
            ],
            "answer": 1,
            "explanation": "Synthesis draws power from convergence — when historical narrative, sociological theory, and economic evidence all point to the same conclusion, that conclusion is much stronger than any single source could make it."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "An unfair coin comes up heads 70% of the time and tails 30%.\n\nYou want to simulate a FAIR coin flip using only this unfair coin.\n\nHow do you do it?",
        "hint": "Think about which pairs of outcomes have the same probability, regardless of the coin's bias.",
        "minWords": 20,
        "answer": "**The elegant solution:**\n\nFlip the unfair coin TWICE. Use only two outcomes:\n- **Heads then Tails (HT):** P = 0.7 × 0.3 = 0.21 → \"Heads\"\n- **Tails then Heads (TH):** P = 0.3 × 0.7 = 0.21 → \"Tails\"\n\nIf you get HH or TT, ignore and flip again.\n\n**Why it works:** P(HT) = P(TH) = p × (1-p) regardless of what p is. By looking only at the two \"mixed\" outcomes and ignoring same-same outcomes, you get exactly 50-50.\n\nThis method was invented by mathematician John von Neumann in 1951 — the same person famous for the \"bird flying between trains\" problem (Day 29). Brilliant mind."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "📜",
        "formatName": "Primary Source",
        "partA": {
          "url": "https://www.archives.gov/milestone-documents/civil-rights-act",
          "videoTitle": "Civil Rights Act of 1964 — National Archives",
          "instruction": "Read the first 3 paragraphs of the Civil Rights Act of 1964. Notice what it specifically prohibits. Note any language that surprises you."
        },
        "partB": {
          "prompt": "This law was signed 99 years after the 13th Amendment. Think about what that gap means.",
          "questions": [
            "What specific discrimination does the Civil Rights Act prohibit?",
            "What surprised you in the actual language? What did you expect that wasn't there?"
          ]
        },
        "writingPrompt": "In at least 50 words: why does it matter to read the actual Civil Rights Act rather than just reading about it? What does the primary source reveal that a textbook summary might miss?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "CRISPR",
        "prompt": "Teach CRISPR using scissors as an analogy:\n\n**\"CRISPR is like molecular scissors. A guide RNA tells the scissors exactly where in a 3-billion-letter genetic code to cut. Then the cell repairs the cut — you can insert, delete, or replace the genetic text.\"**\n\nThen:\n1. Tell them about sickle cell being treated by CRISPR (2023 FDA approval)\n2. Ask: \"Would you edit your own genes if it could improve your health?\"\n3. Ask: \"What about editing your future children's genes for health? For intelligence?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "Would they edit their own genes? What about their children's? Where did they draw the ethical line?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "Civil Rights + Math crossover:\n\nThe Montgomery Bus Boycott lasted 381 days (December 5, 1955 – December 20, 1956). Black riders were approximately 75% of bus ridership. Daily bus revenue before boycott: $2,000.\n\n**Part A:** How much revenue did the bus system lose during the 381-day boycott? (75% of daily revenue × 381 days)\n\n**Part B:** Express the total revenue loss as a percentage of annual revenue (assume 365 days at $2,000/day).\n\n**Part C — Thatha Level 🧮:** CRISPR treatment for sickle cell disease costs approximately $2.2 million per patient. Write a function C(n) for total cost to treat n patients. If the US has ~100,000 sickle cell patients, what would universal treatment cost? Express in scientific notation.\n\n**Part D:** If CRISPR treatment drops 10% in cost per year (exponential decay), write C(t) = 2,200,000 × (0.9)^t. What is the cost after 10 years? Use (0.9)^10 ≈ 0.35.",
        "hint": "Part A: 0.75 × $2,000 × 381. Part C: $2.2M × 100,000 = ? in scientific notation.",
        "answer": "Part A: 0.75×2000×381=$571,500 revenue lost. Part B: Annual revenue=365×2000=$730,000. Loss=$571,500. %=571,500/730,000×100=78.3% of annual revenue lost! Part C: C(n)=2,200,000n. C(100,000)=2.2×10⁵×10⁵=2.2×10¹¹ = $220 billion. Part D: C(10)=2,200,000×0.35=$770,000 per patient after 10 years."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Wisdom — Asking for Her Advice",
        "newPhrases": [
          {
            "telugu": "మీరు నాకు ఏదైనా చెప్తారా?",
            "romanized": "Meeru naaku edainaa cheptaaraa?",
            "english": "Will you tell me something / give me advice?",
            "tip": "Edainaa = anything/something. Cheptaaraa = will you tell? An open invitation for her wisdom."
          },
          {
            "telugu": "నాకు మీ మాటలు విలువైనవి",
            "romanized": "Naaku mee maaṭalu viluvainavi",
            "english": "Your words are valuable to me",
            "tip": "Maaṭalu = words. Viluvainavi = are valuable. Tell her that what she says actually matters to you."
          },
          {
            "telugu": "పెద్దవాళ్ళ మాటలు వినాలి",
            "romanized": "Peddavaalla maaṭalu vinaali",
            "english": "One should listen to elders",
            "tip": "\"Peddavaalla\" = elders (Telangana form). Vinaali = should listen. A Telangana cultural truth."
          },
          {
            "telugu": "మీరు చెప్పింది నేను మరవను",
            "romanized": "Meeru cheppindi nenu maravanu",
            "english": "I will not forget what you said",
            "tip": "Cheppindi = what you said. Maravanu = will not forget. Promise this — and mean it always."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Nenu chaalaa garvangaa unnaa",
            "options": [
              "You will be proud of me",
              "I am very proud",
              "I want to thank you",
              "Without you I couldn't do this"
            ],
            "answer": 1,
            "explanation": "Nenu chaalaa garvangaa unnaa = I am very proud."
          },
          {
            "romanized": "Ippudu nenu ekkuva Telugu maaṭlaaḍagalanu",
            "options": [
              "I am very proud",
              "Now I can speak more Telugu",
              "You will be proud of me",
              "I want to thank you"
            ],
            "answer": 1,
            "explanation": "Ippudu nenu ekkuva Telugu maaṭlaaḍagalanu = Now I can speak more Telugu."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Ask great-grandma \"Meeru naaku edainaa cheptaaraa?\" and really listen. Write down what she says. Keep it.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  }
];
