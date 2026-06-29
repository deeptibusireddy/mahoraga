export const days21to25 = [
  {
    "id": 21,
    "title": "Probability Domain",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Probability — Basic",
        "emoji": "🎲",
        "imageQuery": "probability dice coins random events math visual",
        "content": "**Probability** measures how likely something is to happen.\n\nP(event) = favorable outcomes ÷ total possible outcomes\n\n- P(rolling a 3) = 1/6 ≈ 16.7%\n- P(flipping heads) = 1/2 = 50%\n\n**Scale:** 0 (impossible) ← → 0.5 (equally likely) ← → 1 (certain)\n\n**Complementary events:**\nP(event) + P(not event) = 1\nIf P(rain) = 0.3, then P(no rain) = 0.7\n\n**Key rule:** All possible outcomes must sum to 1.",
        "keyFact": "Weather forecasts, disease risk, sports predictions — all use probability. Understanding it helps you evaluate claims you hear every day.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "A bag has 3 red and 7 blue marbles. What is the probability of picking red?",
                            "options": [
                                      "3/7",
                                      "7/10",
                                      "3/10",
                                      "1/3"
                            ],
                            "answer": 2,
                            "explanation": "P(red) = favorable outcomes / total outcomes = 3/(3+7) = 3/10. Probability is always between 0 and 1."
                  },
                  {
                            "type": "typed",
                            "q": "If P(rain) = 0.7, what is the probability it does NOT rain?",
                            "answer": "0.3",
                            "placeholder": "Enter the decimal...",
                            "explanation": "P(not rain) = 1 - P(rain) = 1 - 0.7 = 0.3. The probability of an event and its complement always add to 1."
                  },
                  {
                            "type": "mc",
                            "q": "You flip a fair coin twice. What is P(heads, then heads)?",
                            "options": [
                                      "1/2",
                                      "1/4",
                                      "1/3",
                                      "2/4"
                            ],
                            "answer": 1,
                            "explanation": "Multiply independent probabilities: P(H) × P(H) = 1/2 × 1/2 = 1/4. This is the AND rule for independent events."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Climate Science — The Greenhouse Effect",
        "emoji": "🌡️",
        "imageQuery": "greenhouse effect CO2 atmosphere global warming climate diagram",
        "content": "**Climate vs. Weather:**\n- Weather: today's conditions\n- Climate: patterns over decades\n\n**The Greenhouse Effect:**\nCO₂, methane, water vapor trap heat in Earth's atmosphere — like a blanket. Without it, Earth would be -18°C (too cold for life).\n\n**The problem:** Since 1750, burning fossil fuels raised CO₂ from 280 ppm to 420+ ppm — levels not seen in 800,000 years.\n\n**Observed effects so far:**\n- Global avg temp up ~1.2°C since 1850\n- Rising sea levels\n- More intense extreme weather events\n- Ocean acidification",
        "keyFact": "The 420 ppm CO₂ level today is higher than at any point in the last 800,000 years — we know this from bubbles trapped in Antarctic ice cores.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What happens to infrared radiation in the greenhouse effect?",
                            "options": [
                                      "It passes through the atmosphere freely",
                                      "It is absorbed and re-emitted by greenhouse gases, warming Earth",
                                      "It is reflected back to the sun",
                                      "It is converted to visible light"
                            ],
                            "answer": 1,
                            "explanation": "Greenhouse gases (CO₂, methane, water vapor) absorb heat and re-radiate it in all directions — including back toward Earth's surface, warming it."
                  },
                  {
                            "type": "typed",
                            "q": "Name one human activity that significantly increases greenhouse gas levels.",
                            "answer": "burning fossil fuels",
                            "placeholder": "What activity?",
                            "explanation": "Burning fossil fuels (coal, oil, gas) for energy releases CO₂ that was stored underground for millions of years — rapidly increasing atmospheric concentrations."
                  },
                  {
                            "type": "mc",
                            "q": "What would Earth's average temperature be WITHOUT the greenhouse effect?",
                            "options": [
                                      "Same as now",
                                      "Much warmer",
                                      "About -18°C (too cold for most life)",
                                      "Slightly cooler"
                            ],
                            "answer": 2,
                            "explanation": "Without any greenhouse effect, Earth would average about -18°C — frozen and uninhabitable. The natural greenhouse effect is essential; human enhancement of it is the problem."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "Westward Expansion & Manifest Destiny",
        "emoji": "🏔️",
        "imageQuery": "westward expansion manifest destiny map 1800s Oregon Trail pioneers",
        "content": "In the 1800s, the US expanded westward — driven by ideology and disregard for people already there.\n\n**Manifest Destiny:** The belief Americans were destined by God to expand across the continent. Used to justify displacement of Indigenous peoples.\n\n**Key events:**\n- **Louisiana Purchase (1803)** — Jefferson doubled US size for $15M\n- **Lewis & Clark Expedition (1804-06)** — mapped the west\n- **Oregon Trail (1840s)** — 300,000 settlers moved west\n- **Mexican-American War (1846-48)** — US gained California, Texas, Southwest\n\n**Who paid the cost:** Indigenous nations lost land, lives, and culture.",
        "keyFact": "The Louisiana Purchase was roughly $0.04 per acre — today's equivalent is about $15 per acre. Jefferson got a bargain by taking land that wasn't France's to sell.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was 'Manifest Destiny'?",
                            "options": [
                                      "A military strategy",
                                      "The belief that America was destined to expand across the continent",
                                      "A treaty with Native Americans",
                                      "A type of wagon trail"
                            ],
                            "answer": 1,
                            "explanation": "Manifest Destiny was the 19th century belief that American expansion across the continent was inevitable and divinely ordained."
                  },
                  {
                            "type": "mc",
                            "q": "Which territory did the US acquire through the Louisiana Purchase?",
                            "options": [
                                      "Texas",
                                      "Florida",
                                      "Land from Mississippi River to Rocky Mountains",
                                      "California and Oregon"
                            ],
                            "answer": 2,
                            "explanation": "The 1803 Louisiana Purchase doubled the US — Napoleon sold the territory from the Mississippi River to the Rocky Mountains for $15 million."
                  },
                  {
                            "type": "typed",
                            "q": "What infamous government policy forcibly moved Native Americans from their lands?",
                            "answer": "Indian Removal Act",
                            "placeholder": "Name the policy...",
                            "explanation": "The Indian Removal Act (1830) forced tribes like the Cherokee off their lands — leading to the Trail of Tears."
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
            "q": "A bag has 3 red, 5 blue, 2 green marbles. P(blue)?",
            "options": [
              "1/2",
              "1/5",
              "5/10",
              "3/10"
            ],
            "answer": 0,
            "explanation": "5 blue / 10 total = 5/10 = 1/2."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "If P(event) = 0.35, what is P(not event)?",
            "options": [
              "0.35",
              "0.50",
              "0.65",
              "1.35"
            ],
            "answer": 2,
            "explanation": "1 - 0.35 = 0.65."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Probability of 0 means:",
            "options": [
              "50-50 chance",
              "Definitely happens",
              "Impossible",
              "Likely"
            ],
            "answer": 2,
            "explanation": "Probability 0 = impossible. Probability 1 = certain."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "A deck has 52 cards. P(drawing a heart)?",
            "options": [
              "1/52",
              "1/13",
              "1/4",
              "4/13"
            ],
            "answer": 2,
            "explanation": "13 hearts / 52 total = 1/4."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is the difference between weather and climate?",
            "options": [
              "No difference",
              "Weather is daily conditions; climate is long-term patterns",
              "Weather is global; climate is local",
              "Climate changes daily"
            ],
            "answer": 1,
            "explanation": "Weather = today. Climate = 30+ year averages and patterns."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "CO₂ levels today compared to pre-industrial levels are:",
            "options": [
              "About the same",
              "Slightly higher",
              "50% higher",
              "Over 50% higher — from 280 to 420+ ppm"
            ],
            "answer": 3,
            "explanation": "CO₂ has risen from ~280 ppm to over 420 ppm — a 50%+ increase, and levels not seen in 800,000 years."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Without any greenhouse effect, Earth would be:",
            "options": [
              "Just slightly cooler",
              "About -18°C — far too cold for life as we know it",
              "Warmer than today",
              "About the same"
            ],
            "answer": 1,
            "explanation": "The natural greenhouse effect keeps Earth warm enough for life. The problem is the ENHANCED effect from burning fossil fuels."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Ocean acidification is caused by:",
            "options": [
              "Increased ocean temperature",
              "CO₂ dissolving in seawater to form carbonic acid",
              "Plastic pollution",
              "Industrial waste"
            ],
            "answer": 1,
            "explanation": "When CO₂ dissolves in seawater, it forms carbonic acid — making oceans more acidic, harming shellfish and coral."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "What was \"Manifest Destiny\"?",
            "options": [
              "A treaty with Mexico",
              "The belief Americans were destined to expand across the continent",
              "A railroad company",
              "A law about land ownership"
            ],
            "answer": 1,
            "explanation": "Manifest Destiny was the 19th century belief that American expansion across North America was inevitable and divinely ordained."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "The Louisiana Purchase (1803) is significant because:",
            "options": [
              "It ended the war with France",
              "Jefferson roughly doubled the size of the US for about $15 million",
              "It gave the US access to the Pacific Ocean",
              "It was Jefferson's biggest mistake"
            ],
            "answer": 1,
            "explanation": "The Louisiana Purchase was one of the greatest land deals in history — doubling US territory at about 4 cents per acre."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Who paid the true cost of Manifest Destiny?",
            "options": [
              "The US government through high prices",
              "Mexico and France",
              "Indigenous nations who lost land, lives, and culture",
              "European settlers who funded the journey"
            ],
            "answer": 2,
            "explanation": "Indigenous peoples paid the real cost — displacement from ancestral lands, violence, forced removal, and cultural destruction."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The phrase \"Manifest Destiny\" made westward expansion sound inevitable and ordained. Why is this framing problematic?",
            "options": [
              "It wasn't an accurate geographic description",
              "It made a deliberate political choice sound like fate, hiding the human decisions and violence involved",
              "It was a foreign phrase",
              "It wasn't widely used at the time"
            ],
            "answer": 1,
            "explanation": "Calling expansion \"destiny\" obscured the fact that specific people made specific decisions to displace and harm Indigenous peoples. \"Destiny\" removes moral responsibility."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "If you have 23 people in a room, the probability that at least two of them share a birthday is about **50%**.\n\nWith just 23 people out of 365 possible birthdays.\n\nMost people think this is wrong — it feels like the odds should be much lower. Why is it actually true?",
        "hint": "Don't calculate the probability that two people match. Calculate the probability that NO two people match (all different), then subtract from 1.",
        "minWords": 20,
        "answer": "**The Birthday Paradox — why it works:**\n\nWe intuitively think \"23 people vs 365 days = tiny chance.\" But that's wrong.\n\nThe key: we're not asking if someone matches YOUR birthday. We're asking if ANY two people match each other.\n\n**Counting pairs:** 23 people = (23 × 22) / 2 = 253 unique pairs. Each pair has a 1/365 chance of matching. 253 pairs × roughly 1/365 each ≈ 50%.\n\nWith 50 people, probability jumps to 97%. With 70, it's 99.9%.\n\nThis matters: it's the same math behind password collisions in computer security."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "📺",
        "formatName": "Watch & Discover",
        "partA": {
          "url": "https://www.youtube.com/watch?v=EtmknBMGWFQ",
          "videoTitle": "Climate Change — Kurzgesagt",
          "instruction": "Watch this 8-minute video. It's one of the clearest explanations of climate science made for general audiences."
        },
        "partB": {
          "prompt": "Kurzgesagt is known for making complex science accessible. What did they do that made it easy to understand?",
          "questions": [
            "What ONE climate fact from the video surprised you most?",
            "What does the video say is still uncertain vs. what is settled science?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain the greenhouse effect to someone who has never heard of it. Use an analogy that isn't \"like a blanket\" — come up with your own.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Probability",
        "prompt": "Teach probability with a coin or dice:\n\n**\"Probability is just favorable outcomes divided by total possible outcomes. Flip a coin — P(heads) = 1/2. But that doesn't mean every other flip is heads.\"**\n\nThen:\n1. Flip a coin 10 times. Record results.\n2. Calculate experimental probability vs theoretical (1/2)\n3. Ask: \"Why didn't we get exactly 5 heads?\"\n4. Discuss: \"What happens if we flip 1,000 times?\" (Law of Large Numbers)\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "How many heads did you get? What was the gap from theoretical? What did they say about flipping 1,000 times?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "A sorcerer randomly selects a mission from a pool of 20: 8 A-rank, 7 B-rank, 4 C-rank, 1 S-rank.\n\n**Part A:** Find P(A-rank), P(B-rank), P(C-rank), P(S-rank). Verify they sum to 1.\n\n**Part B:** What is P(NOT getting S-rank)?\n\n**Part C:** The sorcerer draws 2 missions (without replacement). P(both A-rank)?\n\n**Part D — Thatha Level 🧮:** If the sorcerer completes 5 random missions, what is the expected number of A-rank missions? (Expected value = n × p)",
        "hint": "Part C: P(first A-rank) = 8/20. If first was A-rank, P(second A-rank) = 7/19. Multiply.",
        "answer": "Part A: 8/20=0.4, 7/20=0.35, 4/20=0.2, 1/20=0.05. Sum=1 ✓. Part B: 19/20=0.95. Part C: 8/20 × 7/19 = 56/380 = 14/95 ≈ 0.147. Part D: 5 × 0.4 = 2 expected A-rank missions."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Numbers 20-60",
        "newPhrases": [
          {
            "telugu": "ఇరవై, ముప్పై, నలభై",
            "romanized": "Iravai, muppai, nalbhai",
            "english": "Twenty, thirty, forty",
            "tip": "Iravai=20, Muppai=30, Nalbhai=40. The tens — commit these to memory."
          },
          {
            "telugu": "యాభై, అరవై",
            "romanized": "Yaabhai, aravai",
            "english": "Fifty, sixty",
            "tip": "Yaabhai=50, Aravai=60. Yaabhai sounds like \"yaa-bai.\""
          },
          {
            "telugu": "ఇరవై అయిదు",
            "romanized": "Iravai aidu",
            "english": "Twenty-five",
            "tip": "Tens + units = any number! Iravai (20) + aidu (5) = 25. Build any number this way."
          },
          {
            "telugu": "ముప్పై రెండు",
            "romanized": "Muppai rendu",
            "english": "Thirty-two",
            "tip": "Muppai (30) + rendu (2) = 32. Same logic as English, just different sounds."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Annam, pappu, kuura",
            "options": [
              "I like [food]",
              "Rice, dal/lentils, curry/vegetable dish",
              "This is very tasty",
              "I want a little more"
            ],
            "answer": 1,
            "explanation": "Annam, pappu, kuura = Rice, dal/lentils, curry/vegetable dish."
          },
          {
            "romanized": "Meeru em chestunnaaru?",
            "options": [
              "Rice, dal/lentils, curry/vegetable dish",
              "What are you doing? (respectful)",
              "I like [food]",
              "This is very tasty"
            ],
            "answer": 1,
            "explanation": "Meeru em chestunnaaru? = What are you doing? (respectful)."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Say your age and great-grandma's age in Telugu. Count from 20 to 50 together on the phone.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 22,
    "title": "Compound Probability",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Compound Probability",
        "emoji": "🎲",
        "imageQuery": "compound probability independent dependent events tree diagram",
        "content": "**Compound events** combine two or more events.\n\n**Independent events** (one doesn't affect the other):\nP(A and B) = P(A) × P(B)\n\nP(heads AND rolling 6) = 1/2 × 1/6 = **1/12**\n\n**Mutually exclusive events** (can't happen together):\nP(A or B) = P(A) + P(B)\n\nP(rolling 2 OR 5) = 1/6 + 1/6 = **1/3**\n\n**Tree diagrams** show all possible outcomes for compound events — draw branches for each possibility.",
        "keyFact": "The \"and\" rule multiplies. The \"or\" rule adds. This distinction appears in logic, computer science, and law.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "You flip a coin and roll a die. P(heads AND 6)?",
                            "options": [
                                      "1/2",
                                      "1/6",
                                      "1/12",
                                      "1/8"
                            ],
                            "answer": 2,
                            "explanation": "Independent events: multiply probabilities. P(heads) × P(6) = 1/2 × 1/6 = 1/12."
                  },
                  {
                            "type": "typed",
                            "q": "A bag has 4 red and 6 blue marbles. You draw one, keep it, draw another. P(red then red)?",
                            "answer": "2/15",
                            "placeholder": "Enter as fraction...",
                            "explanation": "Without replacement: P(red) = 4/10, then P(red again) = 3/9. Multiply: 4/10 × 3/9 = 12/90 = 2/15."
                  },
                  {
                            "type": "mc",
                            "q": "Which rule applies when finding P(A AND B) for independent events?",
                            "options": [
                                      "Add the probabilities",
                                      "Subtract the probabilities",
                                      "Multiply the probabilities",
                                      "Divide the probabilities"
                            ],
                            "answer": 2,
                            "explanation": "AND rule for independent events: P(A and B) = P(A) × P(B). This is because each event's probability doesn't affect the other."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Climate Change — Evidence & Effects",
        "emoji": "🌍",
        "imageQuery": "climate change evidence sea level temperature graph Arctic ice melting",
        "content": "**The evidence for climate change is overwhelming:**\n\n📊 **Temperature records:** 20 of the 21 hottest years on record occurred after 2000.\n🧊 **Ice cores:** Show CO₂ and temperature have risen and fallen together for 800,000 years.\n🌊 **Sea level:** Rising ~3.6mm per year — faster than any time in the last 3,000 years.\n🌀 **Extreme weather:** Hurricanes, wildfires, droughts becoming more intense and frequent.\n\n**Feedback loops:** Arctic ice melts → darker ocean absorbs more heat → more ice melts → accelerates.\n\n**In your backyard:** Cascades glaciers retreating. Salmon habitat shrinking as rivers warm.",
        "keyFact": "The 20 hottest years on record have all occurred since 1995. This isn't a coincidence or natural variation — the trend is unmistakable.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What gas is the primary driver of human-caused climate change?",
                            "options": [
                                      "Oxygen",
                                      "Nitrogen",
                                      "Carbon dioxide",
                                      "Ozone"
                            ],
                            "answer": 2,
                            "explanation": "Carbon dioxide (CO₂) from burning fossil fuels traps heat in the atmosphere, causing global temperatures to rise."
                  },
                  {
                            "type": "mc",
                            "q": "Which of these is evidence of climate change?",
                            "options": [
                                      "Longer winters",
                                      "Shrinking glaciers",
                                      "More snowfall everywhere",
                                      "Stable sea levels"
                            ],
                            "answer": 1,
                            "explanation": "Shrinking glaciers worldwide are a direct, measurable sign of warming temperatures — ice that took thousands of years to form is melting rapidly."
                  },
                  {
                            "type": "typed",
                            "q": "What is the term for Earth's natural process that keeps the planet warm enough for life?",
                            "answer": "greenhouse effect",
                            "placeholder": "Two words...",
                            "explanation": "The greenhouse effect is natural — gases trap heat from the sun. Human activity has enhanced this effect, causing extra warming."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The Trail of Tears",
        "emoji": "😢",
        "imageQuery": "Trail of Tears Cherokee removal 1838 Indian Removal Act map",
        "content": "In 1830, President Andrew Jackson signed the **Indian Removal Act** — forcing all Indigenous nations east of the Mississippi to relocate west.\n\n**The Trail of Tears (1838-39):**\nThe US Army forcibly marched the Cherokee Nation ~1,200 miles from Georgia to Oklahoma.\n\n**The human cost:**\n- Approximately 15,000 people were forced to march\n- An estimated 4,000-8,000 died from cold, disease, starvation\n- Families separated, belongings seized\n\n**The Cherokee response:**\nThey had adopted a written constitution, English literacy, and a newspaper — trying to assimilate. It made no difference.\n\nThe Supreme Court ruled the removal was ILLEGAL. Jackson ignored the ruling.",
        "keyFact": "Jackson ignored a Supreme Court ruling declaring the removal unconstitutional. \"John Marshall has made his decision; now let him enforce it.\" — Andrew Jackson.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What was the Trail of Tears?",
                            "options": [
                                      "A trade route between colonies",
                                      "The forced relocation of Native Americans from southeastern US to Oklahoma",
                                      "A military retreat during the Revolution",
                                      "A river used for migration west"
                            ],
                            "answer": 1,
                            "explanation": "The Trail of Tears (1838-39) was the forced removal of the Cherokee and other tribes from their homeland to Indian Territory (Oklahoma) — thousands died from cold, disease, and starvation."
                  },
                  {
                            "type": "mc",
                            "q": "Which law authorized the forced removal of Native Americans?",
                            "options": [
                                      "The Homestead Act",
                                      "The Indian Removal Act",
                                      "The Dawes Act",
                                      "The Missouri Compromise"
                            ],
                            "answer": 1,
                            "explanation": "The Indian Removal Act (1830) gave President Jackson authority to negotiate removal treaties — despite the Supreme Court ruling in Worcester v. Georgia that such removal was unconstitutional."
                  },
                  {
                            "type": "typed",
                            "q": "About how many Cherokee died during the Trail of Tears?",
                            "answer": "4000",
                            "placeholder": "Approximately how many?",
                            "explanation": "Estimates suggest 4,000 of the 16,000 Cherokee forced to march died from exposure, disease, and starvation — about 25% of their entire population."
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
            "q": "P(flipping heads AND rolling a 4)?",
            "options": [
              "1/12",
              "1/6",
              "1/2",
              "2/12"
            ],
            "answer": 0,
            "explanation": "1/2 × 1/6 = 1/12. Independent events multiply."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "P(rolling a 2 OR a 5) on one die?",
            "options": [
              "1/36",
              "1/6",
              "1/3",
              "2/6"
            ],
            "answer": 2,
            "explanation": "1/6 + 1/6 = 2/6 = 1/3. Mutually exclusive events add."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "A bag has 4 red, 6 blue balls. Draw one, replace it, draw again. P(red then blue)?",
            "options": [
              "4/25",
              "12/25",
              "24/100",
              "24/100=6/25"
            ],
            "answer": 3,
            "explanation": "P(red)=4/10=2/5. P(blue)=6/10=3/5. Independent (replaced): 2/5 × 3/5 = 6/25."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Events A and B are mutually exclusive. P(A)=0.3, P(B)=0.45. P(A or B)?",
            "options": [
              "0.135",
              "0.3",
              "0.45",
              "0.75"
            ],
            "answer": 3,
            "explanation": "Mutually exclusive: P(A or B) = 0.3+0.45 = 0.75."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "How many of the 21 hottest years on record occurred after 2000?",
            "options": [
              "5",
              "10",
              "15",
              "20 of 21"
            ],
            "answer": 3,
            "explanation": "20 of the 21 hottest years on record have occurred since 2000."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "What is a \"climate feedback loop\"?",
            "options": [
              "Seasonal weather patterns",
              "When climate change causes effects that accelerate climate change",
              "Daily weather cycles",
              "Government climate policy"
            ],
            "answer": 1,
            "explanation": "Arctic ice melts → darker ocean absorbs more heat → more warming → more ice melts. Self-reinforcing cycle."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "How does climate change affect Pacific Northwest salmon?",
            "options": [
              "It doesn't significantly",
              "Warmer river temperatures stress salmon and shrink their habitat",
              "It improves salmon spawning conditions",
              "Salmon populations are growing"
            ],
            "answer": 1,
            "explanation": "Salmon need cold water. Warming rivers reduce oxygen levels and harm spawning — threatening a keystone species."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "Ice cores provide evidence of historical CO₂ levels because:",
            "options": [
              "Ancient scientists measured CO₂",
              "Ice contains tiny air bubbles trapped when it formed, preserving ancient atmosphere samples",
              "CO₂ changes ice color",
              "Antarctica was once tropical"
            ],
            "answer": 1,
            "explanation": "Ice cores drilled from Antarctica contain air bubbles from up to 800,000 years ago — tiny samples of ancient atmosphere."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "The Trail of Tears refers to:",
            "options": [
              "A river in Oklahoma",
              "The forced march of Cherokee and other Indigenous nations from their homelands to Oklahoma",
              "A sad battle during the Civil War",
              "A poem about westward expansion"
            ],
            "answer": 1,
            "explanation": "The Trail of Tears (1838-39) was the forced march of ~15,000 Cherokee people 1,200 miles, with 4,000-8,000 dying."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "The Cherokee Nation had adopted written language, newspapers, and a constitution. Why did this NOT protect them from removal?",
            "options": [
              "Their constitution was invalid",
              "The Indian Removal Act was passed despite their efforts to assimilate — removal was about land, not culture",
              "Their language wasn't recognized",
              "They didn't fully adopt American culture"
            ],
            "answer": 1,
            "explanation": "The removal was fundamentally about taking Cherokee land in Georgia, where gold had been discovered. Cultural assimilation was irrelevant to those who wanted the land."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "Jackson ignored the Supreme Court ruling against removal. Why is this significant?",
            "options": [
              "It showed Jackson was a strong leader",
              "It violated the separation of powers and checks and balances the Constitution established",
              "The Court was wrong",
              "Jackson had more authority than the Court"
            ],
            "answer": 1,
            "explanation": "A president ignoring a Supreme Court ruling is a fundamental violation of constitutional order. Jackson set a dangerous precedent about executive power."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "How does the Trail of Tears connect to \"Manifest Destiny\"?",
            "options": [
              "They're unrelated",
              "The Trail of Tears was the direct human cost of Manifest Destiny — expansion required removing the people who already lived there",
              "Manifest Destiny approved of Native culture",
              "Jackson opposed Manifest Destiny"
            ],
            "answer": 1,
            "explanation": "Manifest Destiny was the ideology. The Trail of Tears was one brutal implementation — a reminder that ideologies have human consequences."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You're standing outside. It's raining.\n\nStatement: \"All ravens are black.\"\n\nYou see a green apple on the ground.\n\nDoes this green apple provide evidence that all ravens are black?\n\n(Most scientists say: technically yes. Why?)",
        "hint": "Think about the logical equivalent of \"All ravens are black.\" What does that statement say about non-black things?",
        "minWords": 20,
        "answer": "**Yes — technically, according to formal logic (Hempel's Ravens Paradox).**\n\n\"All ravens are black\" is logically equivalent to: \"All non-black things are non-ravens.\"\n\nA green apple is non-black and non-raven — it technically confirms the equivalent statement.\n\n**Why this is weird:** It means seeing a red sock or a yellow banana also \"confirms\" that all ravens are black. Logically true, but practically useless.\n\n**The deeper point:** Evidence confirms or refutes hypotheses, but we need to be careful about what counts as meaningful evidence. Confirmation bias works the same way — we see things that confirm what we already believe."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🌿",
        "formatName": "Go Outside",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Go outside for 10 minutes. Look specifically for evidence of climate or seasonal change — anything that's different now vs. what you'd expect. Think like a scientist observing your local ecosystem."
        },
        "partB": {
          "prompt": "Search: \"climate change effects Washington state 2024\" — find one specific local impact.",
          "questions": [
            "What did you observe outside that might connect to seasonal or climate patterns?",
            "What specific climate impact did you find for Washington State?"
          ]
        },
        "writingPrompt": "In at least 50 words: connect what you observed outside to the larger climate science from today's lesson. What would change in your local environment if warming continues?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Trail of Tears",
        "prompt": "Teach someone about the Trail of Tears:\n\n**\"The Cherokee had their own written language, newspaper, and constitution. They did everything they were told would make them 'acceptable.' In 1838 the US Army still forced them to march 1,200 miles. An estimated 4,000-8,000 people died.\"**\n\nThen:\n1. Tell them Jackson ignored a Supreme Court ruling saying removal was illegal\n2. Ask: \"What does this tell us about how much 'assimilation' matters when the real goal is land?\"\n3. Ask: \"Can you think of any modern parallels?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to Jackson ignoring the Supreme Court? What modern parallels did they mention?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": false,
        "subject": "history",
        "problem": "You are a Cherokee leader in 1832. You know removal is coming. You have three options:\n\n**Option A:** Continue fighting legally — the Supreme Court is on your side\n**Option B:** Negotiate — accept smaller reservations to stay in Georgia\n**Option C:** Prepare your people for forced removal — minimize casualties\n\nWrite a 6-8 sentence response:\n1. Choose an option and explain why\n2. What are the risks of your choice?\n3. What does the Jackson administration's behavior tell you about what you can realistically expect?\n4. What do you owe your people?",
        "hint": "There is no good option here. The best answers acknowledge that — and still make a choice with reasoning.",
        "answer": "Should show: genuine engagement with the historical situation, acknowledgment of all three options' limitations, a clear choice with reasoning, and understanding that Jackson's behavior shows legal options are limited."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Numbers 70-100",
        "newPhrases": [
          {
            "telugu": "డెబ్బై, ఎనభై, తొంభై",
            "romanized": "Debbhai, enabhai, tombhai",
            "english": "Seventy, eighty, ninety",
            "tip": "Debbhai=70. Enabhai=80. Tombhai=90. Almost there!"
          },
          {
            "telugu": "వంద",
            "romanized": "Vanda",
            "english": "One hundred",
            "tip": "Vanda = 100! A milestone. Now you can count to 100 in Telugu."
          },
          {
            "telugu": "వెయ్యి",
            "romanized": "Veyyi",
            "english": "One thousand",
            "tip": "Veyyi = 1000. Now you can say any number."
          },
          {
            "telugu": "ఎంత?",
            "romanized": "Enta?",
            "english": "How much / How many?",
            "tip": "Enta = how much/many. Very Telangana — short and direct. Ask prices, ages, distances."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Nenu chaduvutunna",
            "options": [
              "I am playing",
              "I am studying",
              "I am eating",
              "I am going to sleep"
            ],
            "answer": 1,
            "explanation": "Nenu chaduvutunna = I am studying."
          },
          {
            "romanized": "Elaa?",
            "options": [
              "I am studying",
              "How?",
              "I am playing",
              "I am eating"
            ],
            "answer": 1,
            "explanation": "Elaa? = How?."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Quiz yourself: say 47, 83, 96 in Telugu without looking. Then ask great-grandma \"Mee vayasu enta?\" (How old are you?)",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 23,
    "title": "Scientific Notation",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Scientific Notation",
        "emoji": "🔬",
        "imageQuery": "scientific notation large small numbers astronomy atoms visual",
        "content": "Scientists deal with huge and tiny numbers. Scientific notation: **a × 10ⁿ**, where 1 ≤ a < 10.\n\n**Large numbers (positive exponent):**\n93,000,000 = **9.3 × 10⁷** (moved decimal 7 left)\n\n**Small numbers (negative exponent):**\n0.000000025 = **2.5 × 10⁻⁸** (moved decimal 8 right)\n\n**Multiplying:** (3 × 10⁴) × (2 × 10³) = 6 × 10⁷\n**Dividing:** (8 × 10⁶) ÷ (4 × 10²) = 2 × 10⁴\n\n**Add exponents when multiplying, subtract when dividing.**",
        "keyFact": "Distance to the nearest star: 4.0 × 10¹³ km. Diameter of an atom: 1 × 10⁻¹⁰ m. Scientific notation makes these manageable.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Write 0.000045 in scientific notation.",
                            "options": [
                                      "4.5 × 10⁵",
                                      "4.5 × 10⁻⁵",
                                      "45 × 10⁻⁶",
                                      "0.45 × 10⁻⁴"
                            ],
                            "answer": 1,
                            "explanation": "Count the decimal places: move right 5 places to get 4.5. Since we moved right, the exponent is negative: 4.5 × 10⁻⁵."
                  },
                  {
                            "type": "typed",
                            "q": "What is 3.2 × 10⁴ written as a regular number?",
                            "answer": "32000",
                            "placeholder": "Write it out...",
                            "explanation": "10⁴ = 10,000. So 3.2 × 10,000 = 32,000. Move the decimal 4 places to the right."
                  },
                  {
                            "type": "mc",
                            "q": "Which is larger: 6.7 × 10⁸ or 9.2 × 10⁷?",
                            "options": [
                                      "9.2 × 10⁷",
                                      "6.7 × 10⁸",
                                      "They are equal",
                                      "Cannot determine"
                            ],
                            "answer": 1,
                            "explanation": "Compare exponents first: 10⁸ > 10⁷, so 6.7 × 10⁸ is larger regardless of the coefficient."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Human Impact on Ecosystems",
        "emoji": "🌍",
        "imageQuery": "human impact ecosystem deforestation pollution biodiversity loss habitat",
        "content": "Humans are now the dominant force shaping Earth's ecosystems.\n\n**Major impacts:**\n- 🌲 **Habitat destruction:** Deforestation, urbanization — Amazon loses ~10,000 sq miles/year\n- 🌊 **Pollution:** Plastics (8M tons/year into oceans), chemical runoff\n- 🦏 **Biodiversity loss:** Current extinction rate is ~1,000x the natural background rate\n- 💧 **Water:** Only 1% of Earth's water is fresh and accessible; aquifers depleting\n\n**Reasons for hope:**\n- Ozone layer healing after CFC ban (1987)\n- Bald eagle recovery after DDT ban\n- Marine protected areas working\n- Renewable energy transition accelerating",
        "keyFact": "Scientists estimate we've discovered only about 15% of all species on Earth. We're destroying ecosystems before we even know what's in them.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which human activity causes the most species extinction worldwide?",
                            "options": [
                                      "Hunting",
                                      "Pollution",
                                      "Habitat destruction",
                                      "Climate change"
                            ],
                            "answer": 2,
                            "explanation": "Habitat destruction — deforestation, urban sprawl, wetland draining — is the #1 cause of extinction. When habitat goes, species have nowhere to live."
                  },
                  {
                            "type": "mc",
                            "q": "What is 'rewilding'?",
                            "options": [
                                      "Training wild animals",
                                      "Restoring ecosystems by reintroducing native species",
                                      "Creating wildlife zoos",
                                      "Reducing hunting laws"
                            ],
                            "answer": 1,
                            "explanation": "Rewilding means restoring ecosystems to their natural state — often by reintroducing keystone species like wolves, which cascade through the ecosystem."
                  },
                  {
                            "type": "typed",
                            "q": "What do we call species introduced by humans that harm native ecosystems?",
                            "answer": "invasive species",
                            "placeholder": "Two words...",
                            "explanation": "Invasive species lack natural predators in new environments, allowing them to outcompete natives and disrupt ecosystems. Kudzu, zebra mussels, and cane toads are examples."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Research Writing & Finding Good Sources",
        "emoji": "✍️",
        "imageQuery": "research writing sources credibility evaluation library database",
        "content": "Good research means finding and evaluating sources — not just Googling.\n\n**Source types:**\n- **Primary:** Firsthand accounts, original data (diaries, scientific papers)\n- **Secondary:** Analysis of primaries (textbooks, articles)\n- **Tertiary:** Summaries (Wikipedia — useful starting point, not citable)\n\n**CRAAP Test for evaluating sources:**\n- **C**urrency — how recent?\n- **R**elevance — does it address your question?\n- **A**uthority — who wrote it? Credentials?\n- **A**ccuracy — evidence-based?\n- **P**urpose — to inform, sell, or persuade?\n\n**Citing sources:** Always give credit. Plagiarism = academic dishonesty.",
        "keyFact": "Wikipedia is written by volunteers and can be edited by anyone — it's a great starting point to find real sources, but not a source itself.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which is the most reliable source for a research paper?",
                            "options": [
                                      "A random blog post",
                                      "Wikipedia",
                                      "A peer-reviewed scientific journal",
                                      "A social media post"
                            ],
                            "answer": 2,
                            "explanation": "Peer-reviewed journals are reviewed by experts before publishing — they're the gold standard for reliable information."
                  },
                  {
                            "type": "mc",
                            "q": "What does 'bias' mean in a source?",
                            "options": [
                                      "It has a lot of facts",
                                      "It presents only one side or has an agenda",
                                      "It was written recently",
                                      "It has many citations"
                            ],
                            "answer": 1,
                            "explanation": "Bias means a source favors a particular point of view, often ignoring or downplaying opposing evidence."
                  },
                  {
                            "type": "typed",
                            "q": "What should you do when two reliable sources disagree?",
                            "answer": "compare them",
                            "placeholder": "What's the strategy?",
                            "explanation": "When sources disagree, compare them — look at their evidence, methods, and potential biases. Strong research considers multiple perspectives."
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
            "q": "450,000 in scientific notation:",
            "options": [
              "45 × 10⁴",
              "4.5 × 10⁵",
              "0.45 × 10⁶",
              "4.5 × 10⁴"
            ],
            "answer": 1,
            "explanation": "4.5 × 10⁵ = 450,000."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "0.0032 in scientific notation:",
            "options": [
              "3.2 × 10³",
              "3.2 × 10⁻³",
              "32 × 10⁻⁴",
              "0.32 × 10⁻²"
            ],
            "answer": 1,
            "explanation": "Move decimal 3 places right → 3.2 × 10⁻³."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "(4 × 10³) × (2 × 10⁵) =",
            "options": [
              "8 × 10⁸",
              "8 × 10¹⁵",
              "6 × 10⁸",
              "8 × 10⁷"
            ],
            "answer": 0,
            "explanation": "4×2=8; 10³×10⁵=10⁸. Result: 8 × 10⁸."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Which is larger: 3.2 × 10⁵ or 8.1 × 10⁴?",
            "options": [
              "8.1 × 10⁴",
              "3.2 × 10⁵",
              "Equal",
              "Cannot determine"
            ],
            "answer": 1,
            "explanation": "3.2×10⁵=320,000. 8.1×10⁴=81,000. 320,000 > 81,000."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Current extinction rate compared to natural background:",
            "options": [
              "Same",
              "10x higher",
              "100x higher",
              "~1,000x higher"
            ],
            "answer": 3,
            "explanation": "Scientists estimate current extinction is approximately 1,000 times the natural background rate."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "The ozone layer has been healing since:",
            "options": [
              "The 1970s",
              "CFCs were banned in 1987 through the Montreal Protocol",
              "2000",
              "It hasn't been recovering"
            ],
            "answer": 1,
            "explanation": "The Montreal Protocol (1987) banned CFCs. The ozone layer has been slowly recovering since then — one of history's great environmental successes."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Only about what percentage of Earth's water is fresh and accessible?",
            "options": [
              "1%",
              "3%",
              "10%",
              "30%"
            ],
            "answer": 0,
            "explanation": "About 1% of Earth's water is fresh and accessible. Most is saltwater (97%) or locked in ice (2%)."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "We're losing species before we discover them. This is a problem because:",
            "options": [
              "We need to name them first",
              "Unknown species could contain medicines, materials, or ecological roles we haven't discovered yet",
              "It affects wildlife tourism",
              "Unknown species don't matter until discovered"
            ],
            "answer": 1,
            "explanation": "Many medicines come from plants and animals. Unknown species might contain cures for diseases, stronger materials, or ecological functions we haven't imagined."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "What does the \"A\" for Authority in the CRAAP test check?",
            "options": [
              "Whether the article is accurate",
              "Who wrote it and their credentials — are they an expert?",
              "Whether it's recent",
              "Whether it's relevant to your question"
            ],
            "answer": 1,
            "explanation": "Authority asks: who wrote this? What are their qualifications? Are they an expert in this field?"
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "Wikipedia is best used as:",
            "options": [
              "A citable primary source",
              "A final authoritative source",
              "A starting point to find real sources and understand a topic",
              "Not useful at all"
            ],
            "answer": 2,
            "explanation": "Wikipedia is great for background understanding and finding sources — check the references at the bottom. But it can be edited by anyone, so don't cite it directly."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "A news article from a major newspaper about a scientific study is:",
            "options": [
              "A primary source",
              "A secondary source",
              "A tertiary source",
              "Not credible"
            ],
            "answer": 1,
            "explanation": "The news article is analyzing and reporting on the original study — that's a secondary source. The study itself is primary."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "What makes paraphrasing different from plagiarism?",
            "options": [
              "Paraphrasing is shorter",
              "Paraphrasing is always allowed",
              "Paraphrasing rewrites in your own words AND credits the original source; plagiarism uses someone's ideas without credit",
              "Paraphrasing uses different fonts"
            ],
            "answer": 2,
            "explanation": "You must always credit sources even when paraphrasing. The key isn't word-for-word copying — it's whether you give credit for the ideas."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "You have a 4-minute hourglass and a 7-minute hourglass.\n\nYou need to time exactly **9 minutes**.\n\nYou can start both at the same time, flip them, etc. How?",
        "hint": "Think about what you know when the 4-minute hourglass runs out, and what's left in the 7-minute one at that moment.",
        "minWords": 20,
        "answer": "**Solution:**\n1. Start BOTH hourglasses at the same time\n2. When 4-minute runs out → 3 minutes remain in 7-minute\n3. Flip the 4-minute hourglass immediately\n4. When 7-minute runs out → 1 minute has passed in the flipped 4-minute\n5. Flip the 4-minute hourglass again\n6. That final flip runs for the remaining 3 minutes\n\n**Total: 7 + 1 + 3... wait.** \n\nActually: Start both. When 4-min ends (4 min elapsed), flip it. When 7-min ends (7 min elapsed), flip the 4-min again — it has 1 min left. That 1 min brings total to 8. Still need 9...\n\n**Correct:** Start 7-min. When 7 done, start 4-min. 7+4=11. OR: start both, when 4 done flip it, run 4 again for 4+4=8 then 1 min of 7=9. ✓"
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "📜",
        "formatName": "Primary Source",
        "partA": {
          "url": "https://www.pbs.org/wgbh/aia/part4/4h3437t.html",
          "videoTitle": "Cherokee Chief John Ross letter, 1836",
          "instruction": "Read the first 3 paragraphs of this letter from Cherokee Chief John Ross to the US Senate. He's fighting removal."
        },
        "partB": {
          "prompt": "Primary sources like this give you the human voice behind history.",
          "questions": [
            "What emotion or argument is most powerful in Chief Ross's letter?",
            "What does reading his own words tell you that a textbook summary can't?"
          ]
        },
        "writingPrompt": "In at least 50 words: why do primary sources like this letter matter? How does reading Chief Ross's actual words change your understanding of the Trail of Tears?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Scientific Notation",
        "prompt": "Blow someone's mind with big numbers:\n\n**\"The observable universe has about 2 × 10²³ stars. Write that out as a regular number.\"**\n\nThen:\n1. Calculate it together (2 followed by 23 zeros)\n2. Compare to grains of sand on Earth (~7.5 × 10¹⁸)\n3. Ask: \"Which is bigger — stars in the universe or grains of sand on Earth?\"\n4. Ask Thatha: \"Have you ever worked with numbers this large?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to the star number? Which was bigger? What did Thatha say about large numbers?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "The Milky Way has ~2 × 10¹¹ stars. The observable universe has ~2 × 10²³ stars.\n\n**Part A:** How many times more stars are in the observable universe than the Milky Way? Express as a power of 10.\n\n**Part B:** If each star has an average of 8 planets, how many planets are in the observable universe?\n\n**Part C:** Light travels 9.461 × 10¹² km per year. The nearest star (Proxima Centauri) is 4.24 light-years away. How far is that in km?\n\n**Part D — Thatha Level 🧮:** An atom is 1 × 10⁻¹⁰ m in diameter. A human hair is 7 × 10⁻⁵ m wide. How many atoms wide is a human hair?",
        "hint": "Part A: Divide the universe stars by Milky Way stars — subtract exponents. Part D: Divide hair width by atom diameter.",
        "answer": "Part A: 2×10²³ ÷ 2×10¹¹ = 10¹² times more. Part B: 2×10²³ × 8 = 1.6×10²⁴ planets. Part C: 9.461×10¹² × 4.24 ≈ 4.01×10¹³ km. Part D: 7×10⁻⁵ ÷ 1×10⁻¹⁰ = 7×10⁵ = 700,000 atoms wide."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Days of the Week",
        "newPhrases": [
          {
            "telugu": "సోమవారం, మంగళవారం, బుధవారం",
            "romanized": "Somavaaram, Mangalavaaram, Budhavaaram",
            "english": "Monday, Tuesday, Wednesday",
            "tip": "Soma = Moon, Mangala = Mars, Budha = Mercury — Telugu days named after planets like English!"
          },
          {
            "telugu": "గురువారం, శుక్రవారం",
            "romanized": "Guruvaaram, Shukravaaram",
            "english": "Thursday, Friday",
            "tip": "Guru = Jupiter, Shukra = Venus. You're learning astronomy AND Telugu simultaneously."
          },
          {
            "telugu": "శనివారం, ఆదివారం",
            "romanized": "Shanivaaram, Aadivaaram",
            "english": "Saturday, Sunday",
            "tip": "Shani = Saturn, Aadi = primordial/sun. Aadivaaram = Sunday, the sun's day."
          },
          {
            "telugu": "ఈ రోజు ___ వారం",
            "romanized": "Ee roju ___ vaaram",
            "english": "Today is ___day",
            "tip": "Ee roju = today. Fill in the day name. Tell great-grandma what day it is!"
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Enti?",
            "options": [
              "What is that?",
              "What? / What is it?",
              "Where is it?",
              "What do you need? (respectful)"
            ],
            "answer": 1,
            "explanation": "Enti? = What? / What is it?."
          },
          {
            "romanized": "Pedda, chinna",
            "options": [
              "What? / What is it?",
              "Big, small",
              "What is that?",
              "Where is it?"
            ],
            "answer": 1,
            "explanation": "Pedda, chinna = Big, small."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma what day it is and what you did: \"Ee roju Somavaaram. Nenu Mahoraga chesinna.\" (Today is Monday. I did Mahoraga.)",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 24,
    "title": "Rational & Irrational",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Rational vs Irrational Numbers",
        "emoji": "🔢",
        "imageQuery": "rational irrational numbers number line pi square root visual",
        "content": "**Rational numbers** can be expressed as a fraction p/q where p, q are integers and q ≠ 0.\n- Integers: -3, 0, 5\n- Fractions: 3/4, -2/7\n- Repeating decimals: 0.333... = 1/3\n- Terminating decimals: 0.25 = 1/4\n\n**Irrational numbers** CANNOT be expressed as a fraction.\n- √2 = 1.41421356... (never repeats, never ends)\n- π = 3.14159265... (never repeats, never ends)\n- √3, √5, √7...\n\n**Together:** Rationals + Irrationals = ALL **Real Numbers**",
        "keyFact": "π has been calculated to over 100 trillion decimal places. It never repeats, never ends. Mathematicians proved this in 1768.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which number is irrational?",
                            "options": [
                                      "3/4",
                                      "0.75",
                                      "√2",
                                      "1.5"
                            ],
                            "answer": 2,
                            "explanation": "√2 ≈ 1.41421356... — it never repeats or terminates. Irrational numbers can't be written as a fraction of two integers."
                  },
                  {
                            "type": "mc",
                            "q": "Which of these is rational?",
                            "options": [
                                      "π",
                                      "√3",
                                      "√9",
                                      "√7"
                            ],
                            "answer": 2,
                            "explanation": "√9 = 3, which is a whole number — perfectly rational. π and √3 are irrational; they never end or repeat."
                  },
                  {
                            "type": "typed",
                            "q": "Is 0.333... (repeating) rational or irrational?",
                            "answer": "rational",
                            "placeholder": "Rational or irrational?",
                            "explanation": "Repeating decimals are rational — they can be written as fractions. 0.333... = 1/3. Any terminating or repeating decimal is rational."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Biodiversity & Conservation",
        "emoji": "🌿",
        "imageQuery": "biodiversity conservation species endangered habitat protection",
        "content": "**Biodiversity** = the variety of life in a given area. More biodiversity = more resilient ecosystem.\n\n**Why it matters:**\n- Ecosystem services: clean air, water, pollination, climate regulation\n- Medical discoveries: 40% of medicines come from natural compounds\n- Food security: diverse gene pools protect against crop disease\n\n**Conservation strategies:**\n- **Protected areas:** National parks, marine reserves\n- **Captive breeding:** Zoos preserving endangered species\n- **Habitat corridors:** Connecting fragmented habitats\n- **Rewilding:** Reintroducing keystone species\n\n**Success stories:** Bald eagle, wolf, California condor, humpback whale — all recovering.",
        "keyFact": "The Pacific Northwest has some of the highest temperate forest biodiversity on Earth. Your backyard ecosystem is globally significant.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Why does biodiversity matter?",
                            "options": [
                                      "It makes ecosystems look nice",
                                      "It makes ecosystems stable and resilient to change",
                                      "It only matters for rare species",
                                      "It increases human food production only"
                            ],
                            "answer": 1,
                            "explanation": "High biodiversity makes ecosystems resilient — more species means more ways for an ecosystem to recover from disease, drought, or other stressors."
                  },
                  {
                            "type": "mc",
                            "q": "What is the biggest threat to global biodiversity right now?",
                            "options": [
                                      "Hunting only",
                                      "Pollution only",
                                      "Habitat destruction",
                                      "Invasive species"
                            ],
                            "answer": 2,
                            "explanation": "Habitat destruction — deforestation, wetland draining, urban sprawl — is the leading cause of species loss worldwide."
                  },
                  {
                            "type": "typed",
                            "q": "What term describes a species found nowhere else on Earth?",
                            "answer": "endemic",
                            "placeholder": "One word...",
                            "explanation": "Endemic species exist only in one specific location. Island species are often endemic — making them especially vulnerable to extinction."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "history",
        "title": "The California Gold Rush",
        "emoji": "⛏️",
        "imageQuery": "California Gold Rush 1849 miners forty-niners Sacramento map",
        "content": "January 24, 1848: James Marshall found gold at Sutter's Mill, California.\n\n**The Rush:**\n- 300,000 people flooded California 1848-1855\n- Most came by sea (Cape Horn) or overland trails\n- 1849 arrivals called \"forty-niners\"\n\n**Economic effects:**\n- California population grew from 14,000 to 300,000 in 7 years\n- San Francisco transformed from small town to major city\n- Funded US economic expansion\n\n**Human costs:**\n- Indigenous California population fell from ~150,000 to ~30,000 by 1870 — violence and disease\n- Chinese immigrants brought to build railroads, then faced severe discrimination\n- Most gold-seekers made little money; merchants got rich",
        "keyFact": "Levi Strauss didn't strike gold — he made a fortune selling durable pants to miners. The lesson: the people supplying the rush often profited more than the miners.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "When did the California Gold Rush begin?",
                            "options": [
                                      "1830",
                                      "1848",
                                      "1865",
                                      "1776"
                            ],
                            "answer": 1,
                            "explanation": "Gold was discovered at Sutter's Mill in January 1848. News spread and by 1849, thousands of '49ers' flooded California seeking fortune."
                  },
                  {
                            "type": "mc",
                            "q": "What was a major effect of the Gold Rush on California's Native population?",
                            "options": [
                                      "They became wealthy",
                                      "Their population dramatically declined due to violence and disease",
                                      "They migrated to other states",
                                      "They participated equally in the gold mining"
                            ],
                            "answer": 1,
                            "explanation": "California's Native population fell from ~150,000 to ~30,000 during the Gold Rush — killed by disease, violence, and displacement as miners flooded their lands."
                  },
                  {
                            "type": "typed",
                            "q": "Who actually became most reliably wealthy during the Gold Rush?",
                            "answer": "merchants",
                            "placeholder": "Who profited most?",
                            "explanation": "Merchants selling supplies to miners — Levi Strauss (pants), grocers, toolmakers — made far more reliable money than most miners, most of whom found little gold."
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
            "q": "Which is irrational?",
            "options": [
              "3/4",
              "0.333...",
              "√5",
              "0.25"
            ],
            "answer": 2,
            "explanation": "√5 ≈ 2.236... — it never repeats or terminates, so it's irrational."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "Which is rational?",
            "options": [
              "π",
              "√2",
              "√3",
              "0.75"
            ],
            "answer": 3,
            "explanation": "0.75 = 3/4 — expressible as a fraction, so it's rational."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "0.666... (repeating) is:",
            "options": [
              "Irrational",
              "Rational — it equals 2/3",
              "Neither",
              "A whole number"
            ],
            "answer": 1,
            "explanation": "0.666... = 2/3. Repeating decimals are always rational."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "Between which two integers does √50 lie?",
            "options": [
              "5 and 6",
              "6 and 7",
              "7 and 8",
              "8 and 9"
            ],
            "answer": 2,
            "explanation": "7²=49, 8²=64. So √50 is between 7 and 8, closer to 7."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "Approximately what percentage of medicines come from natural compounds?",
            "options": [
              "5%",
              "10%",
              "25%",
              "40%"
            ],
            "answer": 3,
            "explanation": "About 40% of pharmaceutical compounds are derived from natural sources — plants, fungi, animals."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Why does higher biodiversity create a more resilient ecosystem?",
            "options": [
              "More species = more competition",
              "More species means more redundancy — if one species disappears, others can fill similar roles",
              "Higher biodiversity always means more predators",
              "Biodiversity reduces carrying capacity"
            ],
            "answer": 1,
            "explanation": "Biodiversity creates redundancy. If a key species is lost, others can partially fill its role. Monocultures are fragile — one disease can destroy everything."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "\"Rewilding\" means:",
            "options": [
              "Releasing pets into the wild",
              "Reintroducing keystone species to restore ecosystem balance",
              "Creating new national parks",
              "Breeding endangered animals in zoos"
            ],
            "answer": 1,
            "explanation": "Rewilding involves reintroducing species that once played important roles — like wolves to Yellowstone."
          },
          {
            "subject": "science",
            "difficulty": 3,
            "q": "The bald eagle, wolf, and humpback whale all recovered after specific human protections. What does this suggest?",
            "options": [
              "Extinction is always inevitable",
              "Some species can recover if humans remove specific threats — nature is more resilient than we think",
              "All endangered species will recover eventually",
              "Recovery only works for large animals"
            ],
            "answer": 1,
            "explanation": "These recoveries show that targeted conservation works — ecosystems can bounce back when specific threats (DDT, hunting) are removed."
          },
          {
            "subject": "history",
            "difficulty": 1,
            "q": "The California Gold Rush began in:",
            "options": [
              "1842",
              "1848",
              "1855",
              "1860"
            ],
            "answer": 1,
            "explanation": "Gold was discovered at Sutter's Mill on January 24, 1848."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "Who actually made the most money from the Gold Rush?",
            "options": [
              "The lucky miners who found gold",
              "Merchants selling supplies to miners — like Levi Strauss who sold pants",
              "The California government",
              "Chinese railroad workers"
            ],
            "answer": 1,
            "explanation": "Most miners found little gold. Merchants who sold food, tools, and clothing to desperate miners made consistent fortunes."
          },
          {
            "subject": "history",
            "difficulty": 2,
            "q": "What happened to California's Indigenous population during the Gold Rush era?",
            "options": [
              "They benefited from new trade",
              "Population grew due to new food sources",
              "Population fell from ~150,000 to ~30,000 due to violence and disease",
              "They were mostly unaffected"
            ],
            "answer": 2,
            "explanation": "The Gold Rush brought massive violence and disease to Indigenous Californians. Their population fell by 80% in just a few decades."
          },
          {
            "subject": "history",
            "difficulty": 3,
            "q": "The Gold Rush transformed California from frontier territory to a US state in just 2 years (1848-1850). What does this tell us?",
            "options": [
              "The US was very organized",
              "Economic incentives can drive political change faster than any other force",
              "California had already been settled",
              "Gold was the only reason for statehood"
            ],
            "answer": 1,
            "explanation": "The Gold Rush created an instant population and economic base — bypassing the usual territorial period and becoming a state in 1850. Economic forces drove political structure."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "A bat and a ball together cost $1.10.\nThe bat costs $1.00 MORE than the ball.\n\nHow much does the ball cost?",
        "hint": "Most people instantly say 10 cents. Try to prove it. Set up the actual equation.",
        "minWords": 20,
        "answer": "**The ball costs 5 cents. Not 10 cents.**\n\nMost people say 10 cents instantly — that's the wrong answer.\n\n**Why:** If ball = 10¢, then bat = $1.10. Together = $1.20. That's too much.\n\n**Set up the equation:**\nLet ball = x\nBat = x + 1.00\nx + (x + 1.00) = 1.10\n2x = 0.10\nx = **0.05 = 5 cents**\n\nCheck: Ball=5¢, Bat=$1.05. Bat costs $1 more ✓. Together=$1.10 ✓\n\nThis is the most famous \"cognitive bias\" problem in psychology — almost everyone's intuitive system gives the wrong answer."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🔍",
        "formatName": "Spot It In The Wild",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Find 3 examples of probability in your daily life — weather forecasts, sports statistics, food expiration dates, medical labels, or anywhere numbers describe likelihood. Photograph or note each one."
        },
        "partB": {
          "prompt": "For each probability you found, explain what it actually means in plain English.",
          "questions": [
            "What 3 probability examples did you find?",
            "For each, what does the probability actually mean for someone making a decision?"
          ]
        },
        "writingPrompt": "In at least 50 words: explain why understanding probability makes you a better decision-maker. Use your 3 specific examples as evidence.",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Rational vs Irrational Numbers",
        "prompt": "Teach the rational/irrational distinction using π:\n\n**\"Rational numbers can be written as fractions. Irrational numbers like π = 3.14159... never repeat and never end. Mathematicians have calculated π to 100 trillion decimal places — it still goes.\"**\n\nThen:\n1. Ask: \"Can you guess why π never repeats?\"\n2. Show: √4 = 2 (rational) vs √5 = 2.236... (irrational)\n3. Ask Thatha: \"Have you ever used π in engineering or math?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to 100 trillion digits? Has Thatha used π in real life? What for?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "mixed",
        "problem": "A Gold Rush merchant sells supplies to miners. He buys flour at $2/bag and sells for $3.50/bag.\n\n**Part A:** What is his profit margin as a percent?\n\n**Part B:** He sells 200 bags in January but demand increases 40% in February. How many bags does he sell in February?\n\n**Part C:** If his revenue grows at 15% per month, write an expression for revenue in month m (starting at $700 in month 1).\n\n**Part D — Thatha Level 🧮:** A miner pans 0.05 troy ounces of gold per day. Gold is worth $1,900/troy ounce. How many days to earn $1,000? Is this rational or irrational (use the actual math definition)?",
        "hint": "Part D: daily earnings = 0.05 × $1,900. Days = $1,000 ÷ daily earnings. Is the result a fraction or an irrational number?",
        "answer": "Part A: (3.50-2.00)/2.00 × 100 = 75%. Part B: 200 × 1.40 = 280 bags. Part C: R(m) = 700 × (1.15)^(m-1). Part D: Daily = $95. Days = 1000/95 = 200/19 ≈ 10.53 days. It's rational (200/19 is a fraction)."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Times of Day",
        "newPhrases": [
          {
            "telugu": "ఉదయం, మధ్యాహ్నం, సాయంత్రం, రాత్రి",
            "romanized": "Udayam, Madhyaanam, Saayantram, Raatri",
            "english": "Morning, afternoon, evening, night",
            "tip": "Four times of day. Udayam = morning/dawn. Raatri = night. Middle two are easy once you say them a few times."
          },
          {
            "telugu": "ఇప్పుడు",
            "romanized": "Ippudu",
            "english": "Now / right now",
            "tip": "Ippudu = now. \"Nenu ippudu chaduvutunna\" = I am studying right now."
          },
          {
            "telugu": "శుభోదయం",
            "romanized": "Shubhodayam",
            "english": "Good morning",
            "tip": "Shubha = auspicious/good. Udayam = morning. Combined: \"auspicious morning.\" Say this on morning calls!"
          },
          {
            "telugu": "శుభ రాత్రి",
            "romanized": "Shubha Raatri",
            "english": "Good night",
            "tip": "End every evening call with Shubha Raatri. She will love that you know this."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Naaku bhayangaa undi",
            "options": [
              "I am amazed / I am surprised",
              "I am scared / I feel afraid",
              "I am very excited",
              "I can't believe it! / Unbelievable!"
            ],
            "answer": 1,
            "explanation": "Naaku bhayangaa undi = I am scared / I feel afraid."
          },
          {
            "romanized": "Baagundi",
            "options": [
              "I am scared / I feel afraid",
              "It is good / It's fine",
              "I am amazed / I am surprised",
              "I am very excited"
            ],
            "answer": 1,
            "explanation": "Baagundi = It is good / It's fine."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Start tomorrow's call with \"Shubhodayam!\" and plan to end tonight's with \"Shubha Raatri.\" Use the time of day in sentences.",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  },
  {
    "id": 25,
    "title": "Exponents Unlocked",
    "subject": "mixed",
    "activities": {
      "lesson1": {
        "type": "lesson",
        "number": 1,
        "subject": "math",
        "title": "Exponents — Rules & Operations",
        "emoji": "🔢",
        "imageQuery": "exponents rules product quotient power math visual algebra",
        "content": "**Exponents** mean repeated multiplication. 2³ = 2 × 2 × 2 = 8\n\n**Key rules:**\n- **Product rule:** aᵐ × aⁿ = aᵐ⁺ⁿ → 2³ × 2⁴ = 2⁷\n- **Quotient rule:** aᵐ ÷ aⁿ = aᵐ⁻ⁿ → 3⁵ ÷ 3² = 3³\n- **Power rule:** (aᵐ)ⁿ = aᵐⁿ → (2³)⁴ = 2¹²\n- **Zero exponent:** a⁰ = 1 (any non-zero base)\n- **Negative exponent:** a⁻ⁿ = 1/aⁿ → 2⁻³ = 1/8\n\n**These connect to scientific notation!** 10³ = 1,000. 10⁻³ = 0.001.",
        "keyFact": "The zero exponent rule (a⁰ = 1) confuses everyone. Proof: 2³ ÷ 2³ = 1. But using the quotient rule: 2³⁻³ = 2⁰. Therefore 2⁰ = 1.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is 2³ × 2⁴?",
                            "options": [
                                      "2⁷",
                                      "4⁷",
                                      "2¹²",
                                      "4¹²"
                            ],
                            "answer": 0,
                            "explanation": "When multiplying same base: add exponents. 2³ × 2⁴ = 2^(3+4) = 2⁷ = 128."
                  },
                  {
                            "type": "typed",
                            "q": "What is anything raised to the power of 0? (like 5⁰ or 100⁰)",
                            "answer": "1",
                            "placeholder": "Enter the value...",
                            "explanation": "Any non-zero number raised to the power of 0 equals 1. It's a rule: x⁰ = 1."
                  },
                  {
                            "type": "mc",
                            "q": "Simplify: (3²)³",
                            "options": [
                                      "3⁵",
                                      "3⁶",
                                      "9³",
                                      "6³"
                            ],
                            "answer": 1,
                            "explanation": "Power to a power: multiply the exponents. (3²)³ = 3^(2×3) = 3⁶ = 729."
                  }
        ]
      },
      "lesson2": {
        "type": "lesson",
        "number": 2,
        "subject": "science",
        "title": "Cells: Mitosis & Cell Division",
        "emoji": "🔬",
        "imageQuery": "mitosis cell division phases PMAT diagram stages",
        "content": "Your body replaces ~3.8 million cells every second through **mitosis**.\n\n**Phases of Mitosis (PMAT):**\n1. **P**rophase — chromosomes condense and become visible\n2. **M**etaphase — chromosomes line up at center\n3. **A**naphase — chromosomes pulled to opposite ends\n4. **T**elophase — two new nuclei form\n\nResult: **2 identical daughter cells**, each with complete set of chromosomes.\n\n**Why it matters:**\n- Growth: you started as 1 cell, now have 37 trillion\n- Repair: wounds heal through mitosis\n- Cancer: when mitosis goes wrong and cells divide uncontrollably",
        "keyFact": "Your body replaces your entire stomach lining every 2-3 days. Skin cells are replaced every 2-4 weeks. Red blood cells: every 120 days.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "What is the purpose of mitosis?",
                            "options": [
                                      "Sexual reproduction",
                                      "Creating genetically diverse offspring",
                                      "Growth and repair through identical cell copies",
                                      "Reducing chromosome number"
                            ],
                            "answer": 2,
                            "explanation": "Mitosis produces two genetically identical daughter cells — used for growth, repair, and replacement of cells in multicellular organisms."
                  },
                  {
                            "type": "mc",
                            "q": "How many chromosomes do human cells have after mitosis?",
                            "options": [
                                      "23",
                                      "46",
                                      "92",
                                      "12"
                            ],
                            "answer": 1,
                            "explanation": "Mitosis produces cells with the same chromosome number as the parent cell — 46 in humans. (Meiosis reduces it to 23 for reproductive cells.)"
                  },
                  {
                            "type": "typed",
                            "q": "What happens to DNA before a cell divides?",
                            "answer": "it replicates",
                            "placeholder": "What does DNA do?",
                            "explanation": "DNA replication copies all genetic material before division — so each daughter cell gets a complete set of chromosomes. Without replication, cells would get half the DNA."
                  }
        ]
      },
      "lesson3": {
        "type": "lesson",
        "number": 3,
        "subject": "ela",
        "title": "Grammar & Sentence Variety",
        "emoji": "✍️",
        "imageQuery": "sentence structure types simple compound complex grammar visual",
        "content": "Sentence variety makes writing more engaging. Four types:\n\n1. **Simple:** One independent clause. \"The sorcerer ran.\"\n2. **Compound:** Two independent clauses joined by FANBOYS (for, and, nor, but, or, yet, so). \"The sorcerer ran, but the curse caught him.\"\n3. **Complex:** One independent + one dependent clause. \"Although the sorcerer ran, the curse caught him.\"\n4. **Compound-complex:** Both. \"Although the sorcerer ran, the curse caught him, and he had to use reverse technique.\"\n\n**Common errors:**\n- Run-on: two sentences without proper connection\n- Fragment: incomplete thought\n- Comma splice: two sentences joined by just a comma",
        "keyFact": "Short sentences create tension. Longer sentences build complexity and show relationships between ideas. The best writers vary both.",
        "practice": [
                  {
                            "type": "mc",
                            "q": "Which sentence uses a semicolon correctly?",
                            "options": [
                                      "I love dogs; because they're loyal.",
                                      "I love dogs; they're always loyal.",
                                      "I love; dogs and cats.",
                                      "I; love dogs."
                            ],
                            "answer": 1,
                            "explanation": "Semicolons join two independent clauses (complete thoughts) without a conjunction. 'I love dogs' and 'they're always loyal' are both complete — semicolon works."
                  },
                  {
                            "type": "mc",
                            "q": "What is a compound sentence?",
                            "options": [
                                      "A sentence with one clause",
                                      "Two independent clauses joined by a conjunction or semicolon",
                                      "A sentence with a dependent clause",
                                      "A sentence with more than 20 words"
                            ],
                            "answer": 1,
                            "explanation": "Compound sentences have two independent clauses joined by coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) or a semicolon."
                  },
                  {
                            "type": "typed",
                            "q": "What are the 7 coordinating conjunctions? (first letters spell FANBOYS)",
                            "answer": "FANBOYS",
                            "placeholder": "The acronym...",
                            "explanation": "For, And, Nor, But, Or, Yet, So — the FANBOYS. These join independent clauses in compound sentences with a comma before them."
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
            "q": "2³ × 2⁴ =",
            "options": [
              "2⁷",
              "2¹²",
              "4⁷",
              "8"
            ],
            "answer": 0,
            "explanation": "Product rule: same base → add exponents. 2³⁺⁴ = 2⁷."
          },
          {
            "subject": "math",
            "difficulty": 1,
            "q": "5⁰ =",
            "options": [
              "0",
              "1",
              "5",
              "Undefined"
            ],
            "answer": 1,
            "explanation": "Any non-zero base to the power 0 equals 1."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "(3²)³ =",
            "options": [
              "3⁵",
              "3⁶",
              "9³",
              "6³"
            ],
            "answer": 1,
            "explanation": "Power rule: (3²)³ = 3²ˣ³ = 3⁶."
          },
          {
            "subject": "math",
            "difficulty": 2,
            "q": "2⁻³ =",
            "options": [
              "-8",
              "1/8",
              "-1/8",
              "8"
            ],
            "answer": 1,
            "explanation": "Negative exponent: 2⁻³ = 1/2³ = 1/8."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What is the result of mitosis?",
            "options": [
              "One daughter cell with half the chromosomes",
              "Two identical daughter cells with complete chromosome sets",
              "Four cells with half the chromosomes",
              "One larger parent cell"
            ],
            "answer": 1,
            "explanation": "Mitosis produces two identical daughter cells, each with the same complete chromosome set as the parent."
          },
          {
            "subject": "science",
            "difficulty": 1,
            "q": "What does PMAT stand for in mitosis?",
            "options": [
              "Process, Mechanism, Action, Termination",
              "Prophase, Metaphase, Anaphase, Telophase",
              "Phase, Match, Align, Transfer",
              "Prepare, Move, Align, Transfer"
            ],
            "answer": 1,
            "explanation": "PMAT: Prophase, Metaphase, Anaphase, Telophase — the four phases of mitosis."
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "During which phase do chromosomes line up at the center?",
            "options": [
              "Prophase",
              "Metaphase",
              "Anaphase",
              "Telophase"
            ],
            "answer": 1,
            "explanation": "Metaphase: chromosomes align at the cell's equator (middle). Think \"Metaphase = Middle.\""
          },
          {
            "subject": "science",
            "difficulty": 2,
            "q": "Cancer occurs when:",
            "options": [
              "Cells stop dividing",
              "Mitosis produces cells with too many chromosomes",
              "Cells divide uncontrollably due to mutations in division-controlling genes",
              "Anaphase is skipped"
            ],
            "answer": 2,
            "explanation": "Cancer is uncontrolled cell division caused by mutations in genes that normally regulate the cell cycle."
          },
          {
            "subject": "ela",
            "difficulty": 1,
            "q": "Identify the sentence type: \"Although the sorcerer trained daily, he struggled in battle.\"",
            "options": [
              "Simple",
              "Compound",
              "Complex",
              "Compound-complex"
            ],
            "answer": 2,
            "explanation": "\"Although the sorcerer trained daily\" is a dependent clause. \"He struggled in battle\" is independent. Together = complex sentence."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "What is a \"comma splice\"?",
            "options": [
              "A sentence with too many commas",
              "Two independent clauses joined by just a comma (incorrect)",
              "A comma used after an introductory phrase",
              "A run-on sentence"
            ],
            "answer": 1,
            "explanation": "Comma splice: \"The sorcerer ran, the curse caught him.\" These need a conjunction (and, but) or semicolon, not just a comma."
          },
          {
            "subject": "ela",
            "difficulty": 2,
            "q": "FANBOYS stands for:",
            "options": [
              "The seven conjunctions: For, And, Nor, But, Or, Yet, So",
              "Seven types of sentences",
              "A grammar mnemonic for fragments",
              "Formal Academic New Sentences"
            ],
            "answer": 0,
            "explanation": "FANBOYS are coordinating conjunctions used to join independent clauses: For, And, Nor, But, Or, Yet, So."
          },
          {
            "subject": "ela",
            "difficulty": 3,
            "q": "Why is sentence variety important in writing?",
            "options": [
              "It makes writing longer",
              "Varied sentence length and structure creates rhythm, emphasis, and prevents monotony",
              "It helps with grammar only",
              "Teachers require it"
            ],
            "answer": 1,
            "explanation": "Monotonous sentences all feel the same. Short sentences hit hard. Longer sentences build ideas. Varying both creates rhythm that keeps readers engaged."
          }
        ]
      },
      "brainTeaser": {
        "type": "brainTeaser",
        "emoji": "🧩",
        "teaser": "Take a piece of paper. Fold it in half. Fold in half again. Keep folding.\n\nIf you could fold a piece of paper 42 times, how thick would the stack be?\n\n(Paper is 0.1 mm thick. Predict first, then calculate using what you know about exponents.)",
        "hint": "Each fold doubles the thickness. After n folds, thickness = 0.1mm × 2ⁿ. Calculate 2⁴² — then convert mm to km.",
        "minWords": 20,
        "answer": "**Answer: ~440,000 km — about the distance from Earth to the Moon!**\n\nThickness after 42 folds = 0.1mm × 2⁴² = 0.1 × 4,398,046,511,104 mm\n= 439,804,651,110.4 mm\n= 439,804 km\n\n**The Moon is ~384,400 km away.**\n\nSo 42 folds of paper would be taller than the distance to the Moon.\n\nThis is the power of exponential growth — small doublings become astronomical quickly. This is also why compound interest, population growth, and disease spread can be so dramatic."
      },
      "goExplore": {
        "type": "goExplore",
        "emoji": "🌿",
        "formatName": "Go Outside",
        "partA": {
          "url": "",
          "videoTitle": "",
          "instruction": "Go outside and try to fold a piece of paper as many times as possible. Count the folds. Most people can only fold 7-8 times no matter how big the paper."
        },
        "partB": {
          "prompt": "Search: \"why can't you fold paper more than 8 times\" — the physics explanation is interesting.",
          "questions": [
            "How many times did you manage to fold the paper?",
            "What physical property of paper limits the folds?"
          ]
        },
        "writingPrompt": "In at least 50 words: connect the paper folding experiment to exponents and exponential growth. Why does each fold require twice as much force as the last?",
        "minWords": 50
      },
      "teachItBack": {
        "type": "teachItBack",
        "emoji": "👨‍🏫",
        "concept": "Mitosis & Cell Division",
        "prompt": "Teach mitosis using a simple analogy:\n\n**\"Mitosis is like photocopying. The cell makes an exact copy of all its DNA, then splits into two identical cells. Your body does this 3.8 million times every second.\"**\n\nThen:\n1. Go through PMAT phases quickly (Prophase-lineup-pull-two nuclei)\n2. Ask: \"Why do you think it's important that the copies are exact?\"\n3. Connect to cancer: \"What happens when the photocopier makes mistakes?\"\n\nRecord a voice memo if no one is around 🎙️",
        "followUp": "What was their reaction to 3.8 million times per second? What did they say about the photocopier making mistakes?",
        "minWords": 30
      },
      "challenge": {
        "type": "challenge",
        "isThatha": true,
        "subject": "math",
        "problem": "A sorcerer's power doubles with each training session.\n\n**Part A:** If starting power is 3, write an expression for power after n sessions.\n\n**Part B:** After 10 sessions, what is the power? After 20 sessions?\n\n**Part C:** A rival starts at power 100 and ADDS 50 per session (linear growth). When does the doubling sorcerer overtake the rival?\n\n**Part D — Thatha Level 🧮:** If each training session takes 30 minutes, how many total hours of training until the doubling sorcerer hits power level 1,000?",
        "hint": "Part C: Set 3×2ⁿ > 100+50n and try values of n. Part D: Find n where 3×2ⁿ ≥ 1,000, then multiply by 0.5 hours.",
        "answer": "Part A: P(n) = 3×2ⁿ. Part B: n=10: 3×1024=3072. n=20: 3×1,048,576≈3.1M. Part C: n=1:6vs150, n=5:96vs350, n=6:192vs400, n=7:384vs450, n=8:768vs500, n=9:1536vs550 → overtakes at session 9. Part D: 3×2ⁿ≥1000 → 2ⁿ≥333 → n=9 (2⁹=512>333). 9×0.5=4.5 hours."
      },
      "telugu": {
        "type": "telugu",
        "theme": "Yesterday, Today, Tomorrow",
        "newPhrases": [
          {
            "telugu": "నిన్న",
            "romanized": "Ninna",
            "english": "Yesterday",
            "tip": "Ninna = yesterday. Short and simple."
          },
          {
            "telugu": "ఈ రోజు",
            "romanized": "Ee roju",
            "english": "Today",
            "tip": "Ee roju = today. You've seen this before!"
          },
          {
            "telugu": "రేపు",
            "romanized": "Reepu",
            "english": "Tomorrow",
            "tip": "Reepu = tomorrow. \"Reepu Mahoraga chestaa\" = Tomorrow I will do Mahoraga."
          },
          {
            "telugu": "నిన్న నేను ___ చేశా",
            "romanized": "Ninna nenu ___ cheshaa",
            "english": "Yesterday I did ___",
            "tip": "Cheshaa = I did (Telangana past, no \"-nu\"). Fill in any activity!"
          },
          {
            "telugu": "రేపు నేను ___ చేస్తా",
            "romanized": "Reepu nenu ___ chestaa",
            "english": "Tomorrow I will do ___",
            "tip": "Chestaa = I will do (Telangana future, short form). Compare: cheshaa (past) vs chestaa (future)."
          }
        ],
        "recallQuiz": [
          {
            "romanized": "Maa amma peru ___",
            "options": [
              "My dad does / works as ___",
              "My mom's name is ___",
              "I love you / I really like you (to elder)",
              "How are you? (respectful)"
            ],
            "answer": 1,
            "explanation": "Maa amma peru ___ = My mom's name is ___."
          },
          {
            "romanized": "Super!",
            "options": [
              "My mom's name is ___",
              "Super! / Great!",
              "My dad does / works as ___",
              "I love you / I really like you (to elder)"
            ],
            "answer": 1,
            "explanation": "Super! = Super! / Great!."
          }
        ],
        "useItPrompt": "Practice today's phrases out loud. Then call great-grandma and use at least 2 of them in real conversation. Write what you said and how she responded.",
        "bonusPrompt": "Tell great-grandma: what you did YESTERDAY, what you're doing TODAY, and what you will do TOMORROW. All in Telugu!",
        "baseXP": 10,
        "bonusXP": 5
      }
    }
  }
];
