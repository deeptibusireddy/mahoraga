// Biome - Days 1-10 Content
// Each day has 6 activities: lesson, quiz, wordOfDay, goExploreOrTeachBack, challenge, telugu

export const days = [
  // ─────────────────────────────────────────
  // DAY 1 - Math: Ratios & Proportions (6th grade review)
  // ─────────────────────────────────────────
  {
    id: 1,
    subject: 'math',
    title: 'Ratios: The Language of Comparison',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Ratios & Proportions',
        subject: 'math',
        emoji: '🔢',
        content: `A **ratio** compares two quantities. If you have 3 red blocks and 5 blue blocks in Minecraft, the ratio of red to blue is 3:5.

A **proportion** says two ratios are equal. Like if one recipe needs 2 cups of flour for 12 cookies, you can scale it up proportionally for 24 cookies (4 cups).

**The key trick:** Cross-multiply to check if two ratios form a proportion.
- Is 3/4 = 6/8? → 3×8 = 24, 4×6 = 24 ✅ Yes!
- Is 2/5 = 4/9? → 2×9 = 18, 5×4 = 20 ❌ No!

**Real world:** Ratios show up everywhere — recipes, maps, speed, sports stats. In 7th grade math and Algebra, you'll use these constantly.`,
      },
      quiz: {
        type: 'quiz',
        title: 'Ratio Quiz',
        subject: 'math',
        questions: [
          {
            q: 'A recipe uses 2 cups of sugar for every 5 cups of flour. If you use 10 cups of flour, how many cups of sugar do you need?',
            options: ['2', '4', '5', '6'],
            answer: 1,
            explanation: '2/5 = ?/10 → cross multiply: 2×10 = 20, ÷5 = 4 cups of sugar.',
          },
          {
            q: 'Which of these is NOT equivalent to the ratio 3:4?',
            options: ['6:8', '9:12', '12:15', '15:20'],
            answer: 2,
            explanation: '12:15 simplifies to 4:5, not 3:4. All others simplify to 3:4.',
          },
          {
            q: 'A car travels 150 miles in 3 hours. At the same speed, how far will it travel in 5 hours?',
            options: ['200 miles', '250 miles', '300 miles', '350 miles'],
            answer: 1,
            explanation: '150/3 = 50 mph. 50 × 5 = 250 miles.',
          },
          {
            q: 'In a class of 30 students, the ratio of boys to girls is 2:3. How many girls are there?',
            options: ['10', '12', '15', '18'],
            answer: 3,
            explanation: 'Total parts = 5. Each part = 30÷5 = 6. Girls = 3×6 = 18.',
          },
          {
            q: 'Are the ratios 4/6 and 10/15 proportional?',
            options: ['Yes', 'No', 'Only sometimes', 'Cannot tell'],
            answer: 0,
            explanation: '4×15 = 60, 6×10 = 60. Equal products mean they are proportional ✅',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Proportion',
        pronunciation: 'pruh-POR-shun',
        definition: 'A statement that two ratios are equal.',
        exampleSentence: 'The proportion of trees to animals in this biome stayed constant even as the forest grew.',
        teluguWord: 'నిష్పత్తి',
        teluguRomanized: 'Nishpatti',
        teluguMeaning: 'Ratio / Proportion',
      },
      slot4: {
        type: 'teachItBack',
        title: 'Explain It to Thatha!',
        emoji: '👨‍🏫',
        prompt: `You just learned about ratios and proportions. Here's your mission:

Find Thatha, Dad, or Mom and explain:
1. What is a ratio? Give a real example from your life
2. How do you check if two ratios are proportional?
3. Make up a word problem and ask them to solve it!

Thatha loves math — he might even show you a faster trick! 🧮`,
        followUp: 'What happened when you explained it? Did they know it already? Did Thatha show you anything new?',
        isTeachItBack: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Thatha Challenge 🧮',
        isThatha: true,
        problem: `In Minecraft, you're building a giant wall. You need 5 stone blocks for every 2 wood blocks. You have 35 stone blocks.

**Part A:** How many wood blocks do you need?
**Part B:** Your friend says "just use a 3:1 ratio instead — it's close enough." Is 5:2 close to 3:1? Use cross-multiplication to check.
**Part C (Thatha level):** If you wanted the EXACT same ratio as 5:2 but using exactly 100 total blocks, how many of each would you use?`,
        hint: 'For Part C, think about what fraction of the total each type represents.',
        answer: 'Part A: 14 wood blocks. Part B: 5×1=5, 2×3=6 → NOT equal, so no. Part C: 5:2 means 5/7 stone + 2/7 wood. Stone = 500/7 ≈ 71.4, Wood ≈ 28.6. Exact answer: ~71 stone, ~29 wood (or acknowledge it doesn\'t divide evenly).',
      },
      telugu: {
        type: 'telugu',
        phrase: 'నేను చాలా బాగా చేశాను!',
        romanized: 'Nenu chaalaa baagaa cheshaanu!',
        english: 'I did really well!',
        context: 'Say this after finishing your quiz today 🎉',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 2 - Science: Cells - The Building Blocks of Life
  // ─────────────────────────────────────────
  {
    id: 2,
    subject: 'science',
    title: 'Cells: Life\'s Building Blocks',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Cells — Life\'s Lego Bricks',
        subject: 'science',
        emoji: '🔬',
        content: `Think of a cell like a Minecraft block — the basic unit everything is built from. Every living thing is made of cells.

**Two main types:**
- **Prokaryotic** — simple cells with no nucleus (bacteria). Like a dirt block — basic.
- **Eukaryotic** — complex cells WITH a nucleus (plants, animals, fungi, you!). Like a crafting table — has internal structure.

**Key parts of an animal cell:**
- **Nucleus** — the control center (like the command block)
- **Cell membrane** — the outer wall that controls what enters/exits
- **Mitochondria** — the power generator ("powerhouse of the cell" — yes, everyone says this 😄)
- **Cytoplasm** — the jelly-like fluid everything floats in
- **Ribosomes** — build proteins (tiny protein factories)

**Plant cells have extras:**
- **Cell wall** — rigid outer layer for structure
- **Chloroplasts** — capture sunlight for photosynthesis (like a solar panel)
- **Vacuole** — large storage tank for water`,
      },
      quiz: {
        type: 'quiz',
        title: 'Cell Quiz',
        subject: 'science',
        questions: [
          {
            q: 'Which organelle is known as the "powerhouse of the cell"?',
            options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Vacuole'],
            answer: 2,
            explanation: 'Mitochondria produce ATP (energy) through cellular respiration.',
          },
          {
            q: 'Which of these is found in plant cells but NOT animal cells?',
            options: ['Nucleus', 'Cell wall', 'Mitochondria', 'Cell membrane'],
            answer: 1,
            explanation: 'Plant cells have a rigid cell wall for structure. Animal cells only have a flexible cell membrane.',
          },
          {
            q: 'What is the main job of the nucleus?',
            options: ['Produce energy', 'Control what enters the cell', 'Store DNA and control cell activities', 'Build proteins'],
            answer: 2,
            explanation: 'The nucleus contains DNA and directs all cell activities — it\'s the control center.',
          },
          {
            q: 'Bacteria are examples of which type of cell?',
            options: ['Eukaryotic', 'Prokaryotic', 'Plant', 'Fungal'],
            answer: 1,
            explanation: 'Bacteria are prokaryotes — simple cells with no nucleus.',
          },
          {
            q: 'Which organelle captures sunlight for photosynthesis?',
            options: ['Mitochondria', 'Ribosome', 'Chloroplast', 'Vacuole'],
            answer: 2,
            explanation: 'Chloroplasts contain chlorophyll and capture light energy to make food for the plant.',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Organelle',
        pronunciation: 'or-guh-NEL',
        definition: 'A tiny structure inside a cell that has a specific job, like an organ inside a body.',
        exampleSentence: 'Each organelle in the cell works together, just like organs in your body work as a team.',
        teluguWord: 'కణం',
        teluguRomanized: 'Kanam',
        teluguMeaning: 'Cell',
      },
      slot4: {
        type: 'goExplore',
        title: 'Go Explore: Find a Cell!',
        emoji: '🔭',
        prompt: `Go look up: **"what does a plant cell look like under a microscope"** — find an image or video online (YouTube works great).

Then come back and answer:`,
        questions: [
          'Describe one thing you noticed about the cell that surprised you',
          'How is a real cell different from how you imagined it before?',
        ],
        writingPrompt: 'In 2-3 sentences, describe what you saw and one thing that surprised you.',
        isGoExplore: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Brain Challenge 🧠',
        isThatha: false,
        problem: `You are a tiny submarine (like in a movie) shrunk down to enter a human cell.

Describe your journey: You start OUTSIDE the cell and need to reach the nucleus. Name at least 3 structures you would pass through or encounter, and explain what each one does as you encounter it.

Write it like a mini story — 4-6 sentences.`,
        hint: 'Start at the cell membrane, then cytoplasm, then think about what else is floating around before you reach the nucleus.',
        answer: 'Open-ended. Should mention: cell membrane (gateway), cytoplasm (fluid you swim through), possibly ribosomes or mitochondria floating around, then the nuclear membrane before reaching the nucleus.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'ఇది చాలా ఆసక్తికరంగా ఉంది!',
        romanized: 'Idi chaalaa aasaktikarangaa undi!',
        english: 'This is very interesting!',
        context: 'Say this when you learn something cool in science 🔬',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 3 - US History: Indigenous Peoples & First Americans
  // ─────────────────────────────────────────
  {
    id: 3,
    subject: 'history',
    title: 'The First Americans',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Indigenous Peoples of North America',
        subject: 'history',
        emoji: '🏛️',
        content: `Before Europeans arrived, North America was home to millions of people organized into hundreds of distinct nations, each with their own language, culture, and government.

**Key facts:**
- People first arrived in the Americas at least **15,000+ years ago**, crossing from Asia
- By 1492, there were **500+ distinct Indigenous nations** in North America
- Different regions developed very different ways of life based on their environment (their *biome*!)

**Major groups by region:**
- **Pacific Northwest** (where you live!): Coastal Salish peoples — expert fishermen, built massive longhouses, famous for totem poles
- **Great Plains**: Lakota, Comanche — nomadic buffalo hunters
- **Southwest**: Pueblo peoples — built multi-story stone cities in cliffs
- **Eastern Woodlands**: Iroquois Confederacy — a sophisticated democratic government that influenced the U.S. Constitution

**Washington State connection:** The Salish Sea peoples (Duwamish, Snohomish, Muckleshoot) are the original inhabitants of the land where you live. The city of Seattle is named after Chief Si'ahl of the Duwamish.`,
      },
      quiz: {
        type: 'quiz',
        title: 'Indigenous Peoples Quiz',
        subject: 'history',
        questions: [
          {
            q: 'Approximately how long ago did the first people arrive in the Americas?',
            options: ['1,000 years ago', '5,000 years ago', '15,000+ years ago', '500 years ago'],
            answer: 2,
            explanation: 'Archaeological evidence suggests humans arrived in the Americas at least 15,000 years ago, possibly much earlier.',
          },
          {
            q: 'The city of Seattle is named after a leader from which Indigenous nation?',
            options: ['Lakota', 'Duwamish', 'Iroquois', 'Pueblo'],
            answer: 1,
            explanation: 'Seattle is named after Chief Si\'ahl (Chief Seattle) of the Duwamish people.',
          },
          {
            q: 'Which Indigenous confederacy had a government system that is said to have influenced the U.S. Constitution?',
            options: ['Lakota Nation', 'Iroquois Confederacy', 'Pueblo Alliance', 'Salish Council'],
            answer: 1,
            explanation: 'The Haudenosaunee (Iroquois) Confederacy had a sophisticated democratic system of government that influenced the Founding Fathers.',
          },
          {
            q: 'Why did different Indigenous groups develop such different ways of life?',
            options: ['They chose randomly', 'Their ways of life adapted to their local environment and resources', 'European traders taught them different skills', 'They copied each other'],
            answer: 1,
            explanation: 'Indigenous cultures adapted brilliantly to their specific environments — coastal peoples became fishermen, plains peoples followed buffalo, desert peoples built cliff cities.',
          },
          {
            q: 'What term describes Indigenous peoples who moved from place to place following food sources?',
            options: ['Sedentary', 'Agricultural', 'Nomadic', 'Colonial'],
            answer: 2,
            explanation: 'Nomadic peoples moved seasonally to follow animal herds or find food. Great Plains buffalo hunters were famously nomadic.',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Indigenous',
        pronunciation: 'in-DIJ-uh-nus',
        definition: 'Originating or occurring naturally in a particular place; native.',
        exampleSentence: 'The indigenous peoples of the Pacific Northwest developed rich cultures centered around the salmon and cedar tree.',
        teluguWord: 'స్థానిక',
        teluguRomanized: 'Sthanika',
        teluguMeaning: 'Local / Native / Indigenous',
      },
      slot4: {
        type: 'goExplore',
        title: 'Go Explore: Your Local Land',
        emoji: '🌲',
        prompt: `Go look up: **"Muckleshoot tribe Washington state"** or **"Duwamish people Seattle"** — read a little about the original peoples of the land where you live.`,
        questions: [
          'Name one thing the Muckleshoot or Duwamish people are known for',
          'Does your school or city have any connection to Indigenous history? What did you find?',
        ],
        writingPrompt: 'Write 2-3 sentences about what you learned about the Indigenous people of Washington State.',
        isGoExplore: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Think Like a Historian 🤔',
        isThatha: false,
        problem: `Look at this quote from Chief Seattle (Si'ahl), reportedly said in 1854:

*"The earth does not belong to us, we belong to the earth."*

**Question:** What do you think Chief Seattle meant by this? How is this different from how European settlers thought about land ownership? Write 3-4 sentences explaining your thinking.`,
        hint: 'Think about the difference between owning land like property vs. being part of the land like a member of a community.',
        answer: 'Open-ended. Should reflect: Indigenous view of humans as part of nature/land vs. European concept of land as property to be owned, bought, sold.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'నేను చదువుతున్నాను',
        romanized: 'Nenu chaduvutunnaanu',
        english: 'I am studying',
        context: 'Tell Amma or Thatha what you\'re up to! 📚',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 4 - ELA: Vocabulary & Strong Writing
  // ─────────────────────────────────────────
  {
    id: 4,
    subject: 'ela',
    title: 'Words That Pack a Punch',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Precise Language & Vivid Writing',
        subject: 'ela',
        emoji: '📖',
        content: `Good writing isn't about using BIG words — it's about using the **RIGHT** words.

**Vague vs. Precise:**
- ❌ "The animal went through the forest"
- ✅ "The wolf prowled through the dense pine forest, its paws silent on the frozen ground"

**Three tools for vivid writing:**

1. **Specific nouns** — not "animal" but "timber wolf." Not "tree" but "Douglas fir."

2. **Strong verbs** — replace weak verbs with powerful ones:
   - walked → strode, trudged, crept, bolted
   - said → whispered, announced, muttered, declared
   - looked → glared, examined, glimpsed, surveyed

3. **Show, don't tell** — instead of "he was scared," write "his hands trembled and he couldn't swallow."

**For 7th grade:** You'll write a lot of argumentative and informative essays. Strong precise language makes your arguments more convincing and your explanations clearer.`,
      },
      quiz: {
        type: 'quiz',
        title: 'Writing & Vocab Quiz',
        subject: 'ela',
        questions: [
          {
            q: 'Which sentence uses the most precise and vivid language?',
            options: [
              'The dog ran fast.',
              'The big dog moved quickly across the yard.',
              'The greyhound sprinted across the muddy yard, ears pinned back.',
              'A fast dog went outside.',
            ],
            answer: 2,
            explanation: 'Specific breed (greyhound), strong verb (sprinted), specific detail (muddy yard, ears pinned back) — this sentence shows rather than tells.',
          },
          {
            q: 'Which word is the strongest replacement for "said" in the sentence: "Stop!" she ___.',
            options: ['mentioned', 'spoke', 'stated', 'commanded'],
            answer: 3,
            explanation: '"Commanded" carries authority and urgency — perfect for "Stop!"',
          },
          {
            q: 'What does "show, don\'t tell" mean in writing?',
            options: [
              'Use pictures instead of words',
              'Describe actions and details that let the reader feel the emotion, rather than just naming it',
              'Write longer sentences',
              'Always use dialogue',
            ],
            answer: 1,
            explanation: 'Instead of saying "she was nervous," show nervous behavior: "she kept clicking her pen and checking the clock."',
          },
          {
            q: 'Which sentence "shows" rather than "tells"?',
            options: [
              'He was very excited.',
              'He jumped up, pumped his fist, and let out a whoop that echoed down the hall.',
              'He felt excited about the news.',
              'The excited boy was happy.',
            ],
            answer: 1,
            explanation: 'Actions (jumped, pumped fist, whooped) show excitement without ever using the word.',
          },
          {
            q: 'What is a "strong verb"?',
            options: [
              'A very long verb',
              'A verb that is also an adjective',
              'A specific, active verb that paints a clear picture',
              'Any verb with more than 2 syllables',
            ],
            answer: 2,
            explanation: 'Strong verbs are precise and active — "sprinted" is stronger than "ran fast," "whispered" is stronger than "said quietly."',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Vivid',
        pronunciation: 'VIV-id',
        definition: 'Producing powerful feelings or strong, clear images in the mind; intensely bright or detailed.',
        exampleSentence: 'Her vivid description of the rainforest made us feel like we were standing among the ferns.',
        teluguWord: 'స్పష్టమైన',
        teluguRomanized: 'Spashṭamaina',
        teluguMeaning: 'Clear / Vivid / Distinct',
      },
      slot4: {
        type: 'teachItBack',
        title: 'Teach It Back: Show Don\'t Tell',
        emoji: '✍️',
        prompt: `Here's your challenge for today's Teach It Back:

**Step 1:** Write 2 sentences about something you did this week — use boring, vague language on purpose.
Example: "I ate food. It was good."

**Step 2:** Rewrite those same 2 sentences using vivid language, strong verbs, and "show don't tell."

**Step 3:** Read both versions to a parent or adult. Ask them which version they liked more and WHY.`,
        followUp: 'What did the adult say? Which version did they prefer? What did you change?',
        isTeachItBack: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Writing Challenge ✍️',
        isThatha: false,
        problem: `You have exactly **5 sentences** to describe ONE of these scenes using vivid language, strong verbs, and "show don't tell":

**Option A:** A wolf discovering it is being followed through a snowy forest
**Option B:** A Minecraft player seeing a creeper right before it explodes
**Option C:** You opening a gift you weren't expecting

No weak verbs. No "it was." Make us FEEL it.`,
        hint: 'Pick the one you can picture most clearly in your head. Start with what the character sees, then sounds, then what their body does.',
        answer: 'Open-ended creative writing. Should contain: specific nouns, strong verbs, sensory details, no "telling" emotions directly.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'నేను ఒక కథ రాశాను',
        romanized: 'Nenu oka katha raashaanu',
        english: 'I wrote a story',
        context: 'Tell someone about your writing challenge today! 📝',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 5 - Math: Negative Numbers
  // ─────────────────────────────────────────
  {
    id: 5,
    subject: 'math',
    title: 'Negative Numbers: Below Zero',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Negative Numbers & Integers',
        subject: 'math',
        emoji: '🔢',
        content: `Negative numbers are numbers less than zero. You've seen them — temperature below freezing, debt, going underground in Minecraft (Y coordinates below 0!).

**The Number Line:** Negative numbers are to the LEFT of zero.
← -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 →

**Adding and Subtracting:**
- Adding a negative = moving LEFT: 5 + (-3) = 2
- Subtracting a negative = moving RIGHT (double negative!): 5 - (-3) = 5 + 3 = 8

**Multiplying and Dividing — The Sign Rules:**
- Positive × Positive = **Positive** ✅
- Negative × Negative = **Positive** ✅ (two negatives cancel out!)
- Positive × Negative = **Negative** ❌
- Negative × Positive = **Negative** ❌

**Memory trick:** Same signs → Positive. Different signs → Negative.

**Absolute Value |x|:** The distance from zero, always positive.
|−7| = 7, |7| = 7, |−3| = 3`,
      },
      quiz: {
        type: 'quiz',
        title: 'Negative Numbers Quiz',
        subject: 'math',
        questions: [
          {
            q: 'What is -8 + 3?',
            options: ['-11', '-5', '5', '11'],
            answer: 1,
            explanation: 'Start at -8 on the number line, move 3 to the right → -5.',
          },
          {
            q: 'What is (-4) × (-6)?',
            options: ['-24', '-10', '10', '24'],
            answer: 3,
            explanation: 'Negative × Negative = Positive. 4 × 6 = 24, so (-4) × (-6) = 24.',
          },
          {
            q: 'What is 2 - (-7)?',
            options: ['-9', '-5', '5', '9'],
            answer: 3,
            explanation: 'Subtracting a negative is the same as adding: 2 - (-7) = 2 + 7 = 9.',
          },
          {
            q: 'What is |-15|?',
            options: ['-15', '0', '15', '1/15'],
            answer: 2,
            explanation: 'Absolute value is the distance from zero — always positive. |-15| = 15.',
          },
          {
            q: 'The temperature is -3°F. It drops another 8 degrees. What is the new temperature?',
            options: ['-11°F', '-5°F', '5°F', '11°F'],
            answer: 0,
            explanation: '-3 + (-8) = -11°F. Adding two negatives makes a more negative number.',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Integer',
        pronunciation: 'IN-tuh-jer',
        definition: 'Any whole number, positive, negative, or zero. No fractions or decimals.',
        exampleSentence: 'The integers -3, 0, and 7 are all whole numbers, but 3.5 and ½ are not integers.',
        teluguWord: 'పూర్ణ సంఖ్య',
        teluguRomanized: 'Poorṇa sankhya',
        teluguMeaning: 'Whole number / Integer',
      },
      slot4: {
        type: 'teachItBack',
        title: 'Teach It Back: Explain to Thatha!',
        emoji: '👨‍🏫',
        prompt: `This one is perfect for Thatha the math whiz!

Explain to Thatha (or any adult):
1. Why does a negative times a negative equal a positive? 
2. Give a real-world example where negative numbers matter
3. Solve this together: What is (-3)² ? (Hint: that means -3 × -3)

Ask Thatha: "Did you have a trick for remembering the sign rules?"`,
        followUp: 'What trick or explanation did Thatha give you? Write it here so you remember it!',
        isTeachItBack: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Thatha Challenge 🧮',
        isThatha: true,
        problem: `In Minecraft, sea level is Y=62. Bedrock is at Y=-64.

**Part A:** How many blocks underground is bedrock from sea level?

**Part B:** You're mining at Y=-32. You go up 15 blocks, then down 28 blocks. Where are you now?

**Part C (Thatha level):** The temperature at the top of Mt. Rainier is -18°F. In Sammamish it's 72°F. What is the difference in temperature? If the temperature drops at a rate of 3°F for every 1,000 feet of elevation, and Mt. Rainier is 14,411 feet, does this rate roughly explain the temperature difference?`,
        hint: 'For Part C: calculate what the temperature drop should be at 14,411 feet using the 3°F/1000ft rate.',
        answer: 'Part A: 62-(-64) = 126 blocks. Part B: -32+15=−17, −17−28=−45. Part C: Difference = 72-(-18) = 90°F. Rate: 14.411 × 3 = 43.2°F drop expected. Actual is 90°F — much more! Good discussion point about why mountains are colder.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'నాకు అర్థమైంది!',
        romanized: 'Naaku arthamaaindi!',
        english: 'I understood it!',
        context: 'Say this when something clicks in math 💡',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 6 - Science: Ecosystems & Biomes
  // ─────────────────────────────────────────
  {
    id: 6,
    subject: 'science',
    title: 'Ecosystems & Biomes',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Biomes: Earth\'s Great Ecosystems',
        subject: 'science',
        emoji: '🌲',
        content: `A **biome** is a large region of Earth with a similar climate, plants, and animals. Sound familiar? 😏 You live in one — the **Temperate Rainforest** biome of the Pacific Northwest.

**Major Biomes:**
- 🌧️ **Tropical Rainforest** — hot, wet year-round. Highest biodiversity on Earth
- 🌲 **Temperate Forest** — four seasons, deciduous trees (like western Washington!)
- 🌾 **Grassland/Savanna** — wide open plains, large herds of animals
- 🏜️ **Desert** — less than 10 inches of rain/year, extreme temperatures
- ❄️ **Tundra** — frozen, treeless, permafrost underground
- 🌊 **Ocean** — covers 71% of Earth, multiple zones by depth

**Ecosystem = Community + Environment**
An ecosystem includes all living things (biotic) AND non-living things (abiotic) in an area:
- **Biotic:** plants, animals, fungi, bacteria
- **Abiotic:** sunlight, water, soil, temperature, air

**Food chains & energy flow:**
Sun → Producer (plant) → Primary Consumer (deer) → Secondary Consumer (wolf) → Decomposers (bacteria, fungi)

Energy is lost at each step — only about 10% transfers up the chain.`,
      },
      quiz: {
        type: 'quiz',
        title: 'Ecosystems Quiz',
        subject: 'science',
        questions: [
          {
            q: 'What biome do you most likely live in if you\'re in Sammamish, Washington?',
            options: ['Desert', 'Tropical Rainforest', 'Temperate Forest', 'Tundra'],
            answer: 2,
            explanation: 'The Pacific Northwest has a temperate forest/rainforest climate — mild, wet winters and warm summers.',
          },
          {
            q: 'Which of the following is an ABIOTIC factor in an ecosystem?',
            options: ['A pine tree', 'A black bear', 'Soil temperature', 'Decomposing bacteria'],
            answer: 2,
            explanation: 'Abiotic = non-living. Soil temperature is non-living. Trees, bears, and bacteria are all biotic (living).',
          },
          {
            q: 'In a food chain: grass → rabbit → fox → decomposers. What is the rabbit?',
            options: ['Producer', 'Primary Consumer', 'Secondary Consumer', 'Decomposer'],
            answer: 1,
            explanation: 'The rabbit eats the producer (grass), making it the primary consumer.',
          },
          {
            q: 'Approximately what percentage of energy transfers from one level of a food chain to the next?',
            options: ['1%', '10%', '50%', '90%'],
            answer: 1,
            explanation: 'Only about 10% of energy passes to the next level — the rest is lost as heat.',
          },
          {
            q: 'Which biome has the highest biodiversity (most variety of species)?',
            options: ['Tundra', 'Desert', 'Tropical Rainforest', 'Grassland'],
            answer: 2,
            explanation: 'Tropical rainforests have warm temperatures and abundant rain year-round, supporting the greatest variety of life on Earth.',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Biodiversity',
        pronunciation: 'by-oh-dih-VER-sih-tee',
        definition: 'The variety of living species in a particular habitat or on Earth as a whole.',
        exampleSentence: 'The Amazon rainforest\'s incredible biodiversity means a single acre can contain hundreds of different species.',
        teluguWord: 'జీవ వైవిధ్యం',
        teluguRomanized: 'Jeeva vaividhyam',
        teluguMeaning: 'Biodiversity / Variety of life',
      },
      slot4: {
        type: 'goExplore',
        title: 'Go Explore: Your Local Biome',
        emoji: '🌲',
        prompt: `Go OUTSIDE for 10 minutes (backyard, park, or just your street). Look around carefully like a scientist.

Make a quick mental list of:
- 3 living things (biotic) you see
- 3 non-living things (abiotic) you observe

Then come back and answer:`,
        questions: [
          'List the 3 biotic and 3 abiotic things you found outside',
          'Could you find evidence of a food chain? (something eating something else, or signs of it?)',
        ],
        writingPrompt: 'Describe what you observed outside in 2-3 sentences using the terms biotic and abiotic.',
        isGoExplore: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Design Challenge 🌍',
        isThatha: false,
        problem: `You are designing a NEW biome for a planet. You get to decide:

1. **Climate:** Hot or cold? Wet or dry?
2. **Name your biome** (be creative!)
3. **Describe 2 plants** that would survive there and explain WHY they're adapted to your climate
4. **Describe 1 animal** and explain 2 physical features that help it survive

Think like a scientist — every feature should connect to the climate.`,
        hint: 'Extreme biomes are fun — a planet with twin suns, or one that\'s always raining acid rain. Just make sure your animals and plants are adapted to it logically!',
        answer: 'Open-ended creative response. Should show understanding of adaptation — plant/animal features connecting logically to the climate chosen.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'బయట చాలా అందంగా ఉంది',
        romanized: 'Bayata chaalaa andangaa undi',
        english: 'It\'s very beautiful outside',
        context: 'Say this when you go outside for your Go Explore! 🌿',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 7 - US History: European Exploration & Contact
  // ─────────────────────────────────────────
  {
    id: 7,
    subject: 'history',
    title: 'Europeans Arrive: A World Changes',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'European Exploration & Contact',
        subject: 'history',
        emoji: '⛵',
        content: `In 1492, Christopher Columbus sailed from Spain and reached the Caribbean, beginning an era of European exploration of the Americas. This changed the world — for better and for worse.

**Key explorers:**
- **Columbus (1492)** — reached Caribbean islands, claimed land for Spain
- **Cortés (1519)** — conquered the Aztec Empire in Mexico
- **de Soto (1540s)** — explored the American Southeast
- **Hudson (1609)** — explored New York area for the Dutch

**The Columbian Exchange:**
Contact between Europe and the Americas created a massive exchange of plants, animals, and diseases:
- **Europe → Americas:** horses, cattle, pigs, wheat, smallpox, measles
- **Americas → Europe:** corn, potatoes, tomatoes, chocolate, tobacco

**The devastating truth:**
European diseases killed an estimated **90% of Indigenous populations** in the Americas — the greatest demographic catastrophe in human history. Indigenous peoples had no immunity to smallpox, measles, and other diseases.

**Multiple perspectives matter:**
- For Europeans: an exciting "New World" of resources and land
- For Indigenous peoples: invasion, disease, and the destruction of civilizations that had existed for thousands of years

In 7th grade, you'll analyze these events from multiple perspectives — a key historical thinking skill.`,
      },
      quiz: {
        type: 'quiz',
        title: 'European Exploration Quiz',
        subject: 'history',
        questions: [
          {
            q: 'What year did Columbus first reach the Americas?',
            options: ['1392', '1492', '1592', '1692'],
            answer: 1,
            explanation: '1492 — "In 1492, Columbus sailed the ocean blue." Columbus reached the Caribbean islands on October 12, 1492.',
          },
          {
            q: 'What was the Columbian Exchange?',
            options: [
              'A trade agreement between Columbus and Indigenous leaders',
              'The exchange of gold between Spain and Portugal',
              'The transfer of plants, animals, and diseases between Europe and the Americas',
              'A European stock market founded by Columbus',
            ],
            answer: 2,
            explanation: 'The Columbian Exchange was the widespread transfer of plants, animals, culture, people, technology, and diseases between the Americas and the Old World.',
          },
          {
            q: 'Which item traveled FROM the Americas TO Europe through the Columbian Exchange?',
            options: ['Horses', 'Wheat', 'Potatoes', 'Cattle'],
            answer: 2,
            explanation: 'Potatoes, corn, tomatoes, and chocolate all originated in the Americas and were brought to Europe after 1492.',
          },
          {
            q: 'Why did European diseases devastate Indigenous populations so severely?',
            options: [
              'Indigenous people were physically weaker',
              'Indigenous people had no prior exposure or immunity to European diseases',
              'Europeans deliberately spread diseases as a weapon',
              'The diseases only affected certain climates',
            ],
            answer: 1,
            explanation: 'Indigenous peoples had never been exposed to diseases like smallpox and measles, so they had no immunity. This is called a "virgin soil epidemic."',
          },
          {
            q: 'Which explorer conquered the Aztec Empire in Mexico?',
            options: ['Columbus', 'Hudson', 'Cortés', 'de Soto'],
            answer: 2,
            explanation: 'Hernán Cortés led Spanish forces that conquered the Aztec Empire between 1519-1521.',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Perspective',
        pronunciation: 'per-SPEK-tiv',
        definition: 'A particular way of thinking about or viewing something, shaped by your experiences and position.',
        exampleSentence: 'Columbus\'s arrival looked like triumph from a European perspective, but it was catastrophic from an Indigenous perspective.',
        teluguWord: 'దృక్కోణం',
        teluguRomanized: 'Drukkonam',
        teluguMeaning: 'Perspective / Point of view',
      },
      slot4: {
        type: 'goExplore',
        title: 'Go Explore: Two Perspectives',
        emoji: '⚖️',
        prompt: `Look up: **"Columbian Exchange positive and negative effects"** — read about both sides.`,
        questions: [
          'Name one positive effect of the Columbian Exchange and who benefited',
          'Name one negative effect and who was harmed',
        ],
        writingPrompt: 'In 2-3 sentences, explain why the same historical event can be seen as both positive and negative depending on your perspective.',
        isGoExplore: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Historian\'s Challenge 📜',
        isThatha: false,
        problem: `Imagine you are a journalist in 1492 who can interview BOTH Columbus AND a Taíno leader (the Indigenous people Columbus first encountered).

Write 3 questions you would ask EACH person (6 questions total). Make your questions thoughtful — they should reveal the differences in perspective.

Then answer ONE question from each person's point of view.`,
        hint: 'Think about what each person values, fears, and wants. Columbus wants glory and gold. The Taíno leader wants to understand why these strangers have arrived.',
        answer: 'Open-ended. Should show understanding of multiple perspectives. Questions should be substantive and different for each interviewee.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'చరిత్ర చదవడం నాకు ఇష్టం',
        romanized: 'Charitra chadavadam naaku ishtam',
        english: 'I like reading history',
        context: 'Share your interest with family! 📚',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 8 - Math: Expressions & Variables (Algebra preview)
  // ─────────────────────────────────────────
  {
    id: 8,
    subject: 'math',
    title: 'Variables & Expressions: Welcome to Algebra',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Variables, Expressions & Equations',
        subject: 'math',
        emoji: '🔢',
        content: `Algebra is about using letters (variables) to represent unknown numbers. It's the most important math skill you'll use in 7th grade and beyond.

**Variables:** A letter that stands for an unknown number
- x, y, n, a — any letter works
- Example: if you earn $x per hour and work 5 hours, you earn 5x dollars

**Expressions vs. Equations:**
- **Expression:** has no equals sign → 3x + 7
- **Equation:** has an equals sign → 3x + 7 = 22

**Evaluating expressions:** Plug in a value for the variable
- If x = 4, what is 3x + 7? → 3(4) + 7 = 12 + 7 = **19**

**Solving equations — the balance method:**
Whatever you do to one side, do to the other!
- 3x + 7 = 22
- Subtract 7: 3x = 15
- Divide by 3: x = **5** ✅

**Check it:** 3(5) + 7 = 15 + 7 = 22 ✅

**Combining like terms:**
- 3x + 2x = 5x (same variable, add coefficients)
- 3x + 2y = 3x + 2y (different variables, can't combine)`,
      },
      quiz: {
        type: 'quiz',
        title: 'Algebra Basics Quiz',
        subject: 'math',
        questions: [
          {
            q: 'If x = 5, what is the value of 4x - 3?',
            options: ['7', '17', '12', '23'],
            answer: 1,
            explanation: '4(5) - 3 = 20 - 3 = 17.',
          },
          {
            q: 'Solve for x: x + 9 = 16',
            options: ['x = 5', 'x = 7', 'x = 25', 'x = 144'],
            answer: 1,
            explanation: 'Subtract 9 from both sides: x = 16 - 9 = 7.',
          },
          {
            q: 'Which of these is an EXPRESSION (not an equation)?',
            options: ['2x + 3 = 11', 'x = 7', '5n - 4', '3y + 1 = 10'],
            answer: 2,
            explanation: 'An expression has no equals sign. 5n - 4 has no equals sign, so it\'s an expression.',
          },
          {
            q: 'Simplify: 5x + 3x - 2x',
            options: ['6x', '8x', '10x', '5x'],
            answer: 0,
            explanation: '5x + 3x - 2x = (5+3-2)x = 6x. Combine the coefficients of like terms.',
          },
          {
            q: 'Solve for n: 3n = 27',
            options: ['n = 3', 'n = 8', 'n = 9', 'n = 24'],
            answer: 2,
            explanation: 'Divide both sides by 3: n = 27 ÷ 3 = 9.',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Variable',
        pronunciation: 'VAIR-ee-uh-bul',
        definition: 'A symbol (usually a letter) that represents an unknown or changing quantity in math.',
        exampleSentence: 'In the equation 2x + 5 = 11, the variable x represents the unknown number we\'re trying to find.',
        teluguWord: 'చరరాశి',
        teluguRomanized: 'Chararaashi',
        teluguMeaning: 'Variable (math)',
      },
      slot4: {
        type: 'teachItBack',
        title: 'Teach It Back: Algebra for Thatha!',
        emoji: '👨‍🏫',
        prompt: `Algebra time with Thatha (or any adult)!

1. Explain what a variable is in your own words
2. Make up a word problem that uses a variable. Example: "I have some money. I spend $7 and have $13 left. How much did I start with?"
3. Write it as an equation and solve it together
4. Ask Thatha: "What do YOU use math like this for in real life?"`,
        followUp: 'Write the equation you came up with and its answer. What did the adult say about using math in real life?',
        isTeachItBack: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Thatha Challenge 🧮',
        isThatha: true,
        problem: `You're setting up a Minecraft server and need to buy supplies.

**Part A:** Diamonds cost $d each. You buy 7 diamonds and spend $91. Write an equation and solve for d.

**Part B:** You have $200. You buy 3 sets of armor at $a each and 5 swords at $15 each. You have $35 left. Write and solve an equation to find the cost of one set of armor.

**Part C (Thatha level):** Solve this system — find both x and y:
- x + y = 20
- x - y = 6`,
        hint: 'For Part C, try adding the two equations together. What happens to y?',
        answer: 'Part A: 7d = 91, d = $13. Part B: 3a + 75 + 35 = 200, 3a = 90, a = $30. Part C: Adding equations: 2x = 26, x = 13, y = 7.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'గణితం నాకు ఇష్టం',
        romanized: 'Ganitam naaku ishtam',
        english: 'I like math',
        context: 'Tell Thatha! He\'ll be thrilled 😄🧮',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 9 - Science: Genetics — Why You Look Like You
  // ─────────────────────────────────────────
  {
    id: 9,
    subject: 'science',
    title: 'Genetics: You\'re Made of Code',
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Genetics & Heredity',
        subject: 'science',
        emoji: '🧬',
        content: `Why do you look like your parents? Genetics! Your body is built from instructions stored in DNA.

**DNA (Deoxyribonucleic Acid):**
- Found in the nucleus of every cell
- Shaped like a twisted ladder — the **double helix**
- Contains all the instructions to build and run your body
- If you uncoiled all the DNA in one cell, it would be about 6 feet long!

**Genes & Chromosomes:**
- DNA is organized into **chromosomes** — humans have 46 (23 pairs)
- A **gene** is a section of DNA that codes for a specific trait (eye color, height, etc.)
- You inherit one chromosome from mom and one from dad for each pair

**Dominant vs. Recessive:**
- **Dominant** (B) — one copy is enough to show the trait
- **Recessive** (b) — needs two copies to show
- Brown eyes (B) are dominant over blue eyes (b)
- If you have Bb → brown eyes (dominant wins)
- Only bb → blue eyes

**Punnett Squares** predict the probability of traits:
Cross two parents with Bb × Bb:
- BB (25%) — brown
- Bb (50%) — brown  
- bb (25%) — blue

So 75% chance brown, 25% chance blue!`,
      },
      quiz: {
        type: 'quiz',
        title: 'Genetics Quiz',
        subject: 'science',
        questions: [
          {
            q: 'Where is DNA found in a cell?',
            options: ['Cell membrane', 'Mitochondria', 'Nucleus', 'Ribosome'],
            answer: 2,
            explanation: 'DNA is stored in the nucleus of eukaryotic cells.',
          },
          {
            q: 'How many chromosomes do humans normally have?',
            options: ['23', '46', '64', '92'],
            answer: 1,
            explanation: 'Humans have 46 chromosomes organized in 23 pairs — one from each parent.',
          },
          {
            q: 'A dominant allele (B) for brown eyes crosses with a recessive allele (b) for blue eyes. What color eyes will this person have?',
            options: ['Blue', 'Brown', 'Green', 'A mix of both'],
            answer: 1,
            explanation: 'Dominant (B) alleles mask recessive (b) alleles. Bb = brown eyes.',
          },
          {
            q: 'What shape is a DNA molecule?',
            options: ['Single straight strand', 'Circle', 'Double helix', 'Triangle'],
            answer: 2,
            explanation: 'DNA is a double helix — like a twisted ladder. James Watson and Francis Crick discovered this structure in 1953.',
          },
          {
            q: 'Two parents are both Bb (brown eyes, carrying recessive blue). What is the probability their child will have blue eyes (bb)?',
            options: ['0%', '25%', '50%', '75%'],
            answer: 1,
            explanation: 'Punnett square: BB, Bb, Bb, bb → 1 out of 4 = 25% chance of bb (blue eyes).',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Heredity',
        pronunciation: 'huh-RED-ih-tee',
        definition: 'The passing of genetic traits from parents to offspring through genes.',
        exampleSentence: 'Heredity explains why you might have your mother\'s eyes and your father\'s nose.',
        teluguWord: 'వంశపారంపర్యం',
        teluguRomanized: 'Vanshaparamparyam',
        teluguMeaning: 'Heredity / Ancestry',
      },
      slot4: {
        type: 'goExplore',
        title: 'Go Explore: Your Family Traits',
        emoji: '👨‍👩‍👦',
        prompt: `This one is a family activity! Look at yourself and your family members.

Pick 3 physical traits and see who you got them from. Examples: eye color, hair texture, ear shape, nose shape, dimples, attached/detached earlobes.`,
        questions: [
          'What 3 traits did you compare? Who did you get each one from?',
          'Is there a trait you have that NEITHER parent seems to have? (This can happen — can you think of why?)',
        ],
        writingPrompt: 'In 2-3 sentences, describe what you discovered about your family traits and what it tells you about heredity.',
        isGoExplore: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Genetics Challenge 🧬',
        isThatha: false,
        problem: `In wolves, gray fur (G) is dominant over white fur (g).

**Part A:** Draw a Punnett square for two gray wolves that are both Gg. What percentage of their pups will be white?

**Part B:** A white wolf (gg) mates with a gray wolf of unknown genotype. Half their pups are white. What must the gray wolf's genotype be? Explain your reasoning.

**Part C:** Why might white wolves be at a disadvantage in a forest ecosystem but an advantage in a snowy ecosystem? Connect genetics to the concept of natural selection.`,
        hint: 'For Part B, work backwards — if 50% are white (gg), one g must come from each parent. The white parent always gives g, so...',
        answer: 'Part A: GG(25%), Gg(50%), gg(25%) → 25% white. Part B: Must be Gg — only way to get 50% gg offspring when one parent is gg. Part C: Open-ended. White = camouflage in snow, visible in forest. Natural selection would favor gray in forests, white in Arctic.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'మన కుటుంబం చాలా అందంగా ఉంది',
        romanized: 'Mana kutumbam chaalaa andangaa undi',
        english: 'Our family is very beautiful',
        context: 'A sweet thing to say to Amma or Thatha 😊',
      },
    },
  },

  // ─────────────────────────────────────────
  // DAY 10 - Mixed Review + Milestone Day
  // ─────────────────────────────────────────
  {
    id: 10,
    subject: 'mixed',
    title: '🎯 Day 10 Milestone — You\'re 20% There!',
    isMilestone: true,
    activities: {
      lesson: {
        type: 'lesson',
        title: 'Week 2 Brain Warm-Up',
        subject: 'mixed',
        emoji: '🎯',
        content: `You've completed your first 9 days of Biome! Let's quickly review what you've covered:

**Math:** Ratios & Proportions, Negative Numbers, Algebra basics (variables, expressions, equations)
**Science:** Cells & organelles, Ecosystems & Biomes, Genetics & heredity
**US History:** Indigenous peoples of North America, European exploration & the Columbian Exchange
**ELA:** Vivid writing, strong verbs, show don't tell

**Today is a Crossover Day** — the questions and challenges will mix subjects together, because that's how real thinking works. Scientists use math. Historians use writing. Everything connects.

**Fun fact:** The word "biome" was coined by ecologist Frederic Clements in 1916 — and you now know what it means in science AND you're using it as your app name. Full circle! 🌿`,
      },
      quiz: {
        type: 'quiz',
        title: '10-Day Review Quiz',
        subject: 'mixed',
        questions: [
          {
            q: 'A scientist finds that only 10% of energy transfers between food chain levels. If a plant has 10,000 energy units, how much energy reaches a secondary consumer (the animal that eats the plant-eater)?',
            options: ['1,000', '100', '10', '1,000,000'],
            answer: 1,
            explanation: 'Plant → Primary Consumer: 10% of 10,000 = 1,000. Primary → Secondary Consumer: 10% of 1,000 = 100.',
          },
          {
            q: 'Which of these correctly uses "show, don\'t tell" to express that an explorer was nervous?',
            options: [
              'The explorer was very nervous.',
              'The explorer felt scared of what lay ahead.',
              'The explorer\'s hand trembled as he gripped the map, scanning the treeline for movement.',
              'He had nervous feelings about the new land.',
            ],
            answer: 2,
            explanation: 'Physical actions (trembling hand, scanning treeline) show nervousness without naming the emotion.',
          },
          {
            q: 'Solve for x: 2x - 5 = 11',
            options: ['x = 3', 'x = 6', 'x = 8', 'x = 16'],
            answer: 2,
            explanation: 'Add 5 to both sides: 2x = 16. Divide by 2: x = 8.',
          },
          {
            q: 'The Columbian Exchange and genetics both involve a type of "transfer." What did the Columbian Exchange transfer that had the most devastating impact on Indigenous peoples?',
            options: ['Gold', 'Horses', 'European diseases', 'Farming techniques'],
            answer: 2,
            explanation: 'European diseases like smallpox killed up to 90% of Indigenous populations who had no prior immunity.',
          },
          {
            q: 'A cell\'s nucleus is to a cell as the _______ is to the United States government.',
            options: ['Army', 'Supreme Court', 'Congress', 'President'],
            answer: 3,
            explanation: 'The nucleus is the control center that directs all activities, similar to the President who directs the executive functions of government.',
          },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay',
        word: 'Synthesis',
        pronunciation: 'SIN-thuh-sis',
        definition: 'Combining different ideas, information, or things to create something new or reach a deeper understanding.',
        exampleSentence: 'A good essay synthesizes information from multiple sources into one clear, original argument.',
        teluguWord: 'సమన్వయం',
        teluguRomanized: 'Samanvayam',
        teluguMeaning: 'Synthesis / Integration / Coordination',
      },
      slot4: {
        type: 'teachItBack',
        title: 'Milestone Teach It Back 🏆',
        emoji: '🌟',
        prompt: `It's Day 10 — milestone time! Your challenge:

Pick ONE thing from the past 10 days that you found most interesting or surprising. It could be from any subject.

Find a family member (Amma, Thatha, Dad — anyone!) and:
1. Teach them what you learned in 2-3 minutes
2. Tell them WHY it surprised or interested you
3. Ask them: "Did you know this before?"

This is your Day 10 victory lap. Own it! 🎉`,
        followUp: 'What topic did you choose? What did your family member say? Did they know it already?',
        isTeachItBack: true,
      },
      challenge: {
        type: 'challenge',
        title: 'Crossover Thatha Challenge 🧮🌍',
        isThatha: true,
        problem: `**History + Math crossover:**

When Columbus arrived in 1492, historians estimate there were about 60 million Indigenous people in the Americas. European diseases killed approximately 90% within 150 years.

**Part A:** How many Indigenous people survived? (Calculate 10% of 60 million)

**Part B:** Write an equation where x = the number who died. Solve it.

**Part C (Thatha level):** If the population recovered at 2% per year starting from the survivor count, write an expression for the population after n years. (Hint: this is compound growth — P × (1.02)ⁿ). What would the population be after 50 years of recovery?`,
        hint: 'For Part C, use a calculator for the final step. 1.02^50 ≈ 2.69',
        answer: 'Part A: 6 million survived. Part B: x + 6,000,000 = 60,000,000, x = 54,000,000. Part C: P(n) = 6,000,000 × (1.02)^n. After 50 years: 6,000,000 × 2.69 ≈ 16,140,000.',
      },
      telugu: {
        type: 'telugu',
        phrase: 'నేను పది రోజులు పూర్తి చేశాను!',
        romanized: 'Nenu padi rojulu poorti cheshaanu!',
        english: 'I completed ten days!',
        context: 'Shout this to everyone in the house! 🎉🎊',
      },
    },
  },
];
