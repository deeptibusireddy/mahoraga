// Biome - Days 11-25 Content

export const days11to25 = [

  // ─────────────────────────────────────────
  // DAY 11 - Math: Fractions, Decimals, Percents
  // ─────────────────────────────────────────
  {
    id: 11,
    subject: 'math',
    title: 'Fractions, Decimals & Percents',
    activities: {
      lesson: {
        type: 'lesson', title: 'FDP: Three Ways to Say the Same Thing', subject: 'math', emoji: '🔢',
        content: `Fractions, decimals, and percents are three ways to represent the same value. Switching between them is a key 7th grade skill.

**Fraction → Decimal:** Divide the numerator by the denominator
- 3/4 = 3 ÷ 4 = 0.75

**Decimal → Percent:** Multiply by 100 (move decimal right 2 places)
- 0.75 = 75%

**Percent → Fraction:** Put over 100, simplify
- 75% = 75/100 = 3/4

**Common ones to memorize:**
- 1/2 = 0.5 = 50%
- 1/4 = 0.25 = 25%
- 1/3 = 0.333... = 33.3%
- 1/5 = 0.2 = 20%
- 3/4 = 0.75 = 75%

**Finding a percent of a number:**
What is 35% of 80?
→ 0.35 × 80 = 28

**Real world:** Sales tax, discounts, test scores, statistics — percents are everywhere in 7th grade math and real life.`,
      },
      quiz: {
        type: 'quiz', title: 'FDP Quiz', subject: 'math',
        questions: [
          { q: 'Convert 2/5 to a percent.', options: ['25%', '40%', '50%', '52%'], answer: 1, explanation: '2 ÷ 5 = 0.4 = 40%.' },
          { q: 'What is 60% of 90?', options: ['54', '60', '45', '36'], answer: 0, explanation: '0.60 × 90 = 54.' },
          { q: 'Which is largest: 0.6, 58%, or 3/5?', options: ['0.6', '58%', '3/5', 'They are equal'], answer: 3, explanation: '0.6 = 60%, 3/5 = 60%. They\'re all equal! 58% is the smallest.' },
          { q: 'A shirt costs $40. It\'s 25% off. What\'s the sale price?', options: ['$10', '$25', '$30', '$35'], answer: 2, explanation: '25% of $40 = $10. $40 - $10 = $30.' },
          { q: 'Convert 0.125 to a fraction in simplest form.', options: ['1/8', '1/4', '12/100', '1/5'], answer: 0, explanation: '0.125 = 125/1000 = 1/8.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Equivalent', pronunciation: 'ih-KWIV-uh-lent',
        definition: 'Equal in value, amount, or meaning, though possibly different in form.',
        exampleSentence: 'The fractions 1/2 and 4/8 are equivalent — they represent the same amount.',
        teluguWord: 'సమానమైన', teluguRomanized: 'Samaanamaina', teluguMeaning: 'Equal / Equivalent',
      },
      slot4: {
        type: 'teachItBack', title: 'Teach It Back: Percents for Thatha!', emoji: '👨‍🏫', isTeachItBack: true,
        prompt: `Hey Abhi — percent problems come up in real shopping all the time!\n\nFind Thatha or a parent and:\n1. Explain how to find a percent of a number (your own words)\n2. Give this real problem: "A $120 pair of shoes is 30% off. How much do you save? What's the final price?"\n3. Solve it together step by step`,
        followUp: 'What was the answer? Did Thatha or your parent have a faster method?',
      },
      challenge: {
        type: 'challenge', title: 'Thatha Challenge 🧮', isThatha: true,
        problem: `Abhi is shopping for Minecraft merch.\n\n**Part A:** A hoodie is $65. There's a 20% discount AND then 10.2% sales tax on the discounted price. What's the final price?\n\n**Part B:** Abhi got 42 out of 50 on a quiz and 88 out of 100 on a test. Which score is a higher percentage?\n\n**Part C (Thatha level):** If Abhi's score improved from 72% to 90%, what was the percentage INCREASE? (Hint: percentage change = (new - old)/old × 100)`,
        hint: 'For Part A, apply the discount first, THEN calculate tax on the new price.',
        answer: 'Part A: 65 × 0.80 = $52, then $52 × 1.102 = $57.30. Part B: 42/50 = 84%, 88/100 = 88% → test is higher. Part C: (90-72)/72 × 100 = 25% increase.',
      },
      telugu: { type: 'telugu', phrase: 'నాకు కొత్త విషయాలు నేర్చుకోవడం ఇష్టం', romanized: 'Naaku kotta vishayaalu nerchukavadam ishtam', english: 'I like learning new things', context: 'Tell Amma this after a good study session! 📚' },
    },
  },

  // DAY 12 - Science: Human Body Systems
  {
    id: 12,
    subject: 'science',
    title: 'Human Body: Systems Working Together',
    activities: {
      lesson: {
        type: 'lesson', title: 'Body Systems Overview', subject: 'science', emoji: '🫀',
        content: `Your body is like the most complex machine ever built — and it runs 24/7 without you even thinking about it.

**Key body systems:**

🫀 **Circulatory System** — heart + blood vessels. Delivers oxygen and nutrients to every cell, removes waste. Heart beats ~100,000 times per day!

🫁 **Respiratory System** — lungs + airways. Brings oxygen in, pushes carbon dioxide out.

🦴 **Skeletal System** — 206 bones. Structure, protection, makes blood cells in bone marrow.

💪 **Muscular System** — 600+ muscles. Movement, posture, pumps blood (heart is a muscle!).

🧠 **Nervous System** — brain + spinal cord + nerves. Controls everything. Signals travel up to 268 mph!

🍽️ **Digestive System** — mouth to intestines. Breaks food into nutrients your cells can use.

🛡️ **Immune System** — white blood cells, lymph nodes. Fights infection and disease.

**Key idea:** These systems don't work alone — they're constantly coordinating. When you sprint in a race, your nervous system sends signals, muscles contract, heart pumps faster, lungs breathe harder — all at once.`,
      },
      quiz: {
        type: 'quiz', title: 'Body Systems Quiz', subject: 'science',
        questions: [
          { q: 'Which system delivers oxygen and nutrients to body cells?', options: ['Digestive', 'Circulatory', 'Nervous', 'Skeletal'], answer: 1, explanation: 'The circulatory system (heart + blood vessels) delivers oxygen and nutrients to every cell.' },
          { q: 'How many bones are in the adult human body?', options: ['106', '206', '306', '406'], answer: 1, explanation: 'Adults have 206 bones. Babies are born with ~270, and some fuse together as you grow.' },
          { q: 'The heart is an example of which type of muscle?', options: ['Voluntary', 'Skeletal', 'Cardiac', 'Smooth'], answer: 2, explanation: 'The heart is cardiac muscle — it contracts automatically without you thinking about it.' },
          { q: 'Which system breaks food down into nutrients the body can use?', options: ['Circulatory', 'Respiratory', 'Digestive', 'Immune'], answer: 2, explanation: 'The digestive system breaks food into molecules small enough for cells to absorb.' },
          { q: 'When you run fast, which systems work together simultaneously?', options: ['Only muscular', 'Only circulatory', 'Muscular, circulatory, and respiratory', 'Skeletal only'], answer: 2, explanation: 'Running uses muscles, increases heart rate (circulatory), and makes you breathe harder (respiratory) — all at once.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Homeostasis', pronunciation: 'ho-mee-oh-STAY-sis',
        definition: 'The body\'s ability to maintain stable internal conditions (like temperature and blood sugar) despite changes in the environment.',
        exampleSentence: 'When you get hot, sweating is homeostasis — your body cooling itself to maintain a stable temperature.',
        teluguWord: 'శరీరం', teluguRomanized: 'Shareeram', teluguMeaning: 'Body',
      },
      slot4: {
        type: 'goExplore', title: 'Go Explore: Your Heart Rate', emoji: '🫀', isGoExplore: true,
        prompt: `Science experiment time! Go find your pulse (press two fingers on your wrist or neck). Count the beats for 15 seconds and multiply by 4 = your resting heart rate.\n\nThen do 30 jumping jacks and count again immediately.`,
        questions: ['What was your resting heart rate? What was it after jumping jacks?', 'Why does your heart beat faster during exercise? Explain using what you learned today.'],
        writingPrompt: 'In 2-3 sentences explain what you observed and why it happened using science terms.',
      },
      challenge: {
        type: 'challenge', title: 'Body Systems Challenge 🧠', isThatha: false,
        problem: `Abhi gets a cold. A virus enters through his nose.\n\nTrace the body's response step by step — name at least 4 body systems involved from the moment the virus enters to when Abhi recovers. For each system, explain its specific role.\n\nBonus: Why do you get a fever when you're sick, and is that actually helpful?`,
        hint: 'Think about: respiratory (entry point), immune (fights it), nervous (detects symptoms), circulatory (transports immune cells)...',
        answer: 'Open-ended. Should mention: respiratory (virus enters), immune (detects & fights), circulatory (carries white blood cells), nervous (signals fever/symptoms). Bonus: fever raises body temp to kill pathogens — it\'s actually a defense mechanism.',
      },
      telugu: { type: 'telugu', phrase: 'నాకు జలుబు చేసింది', romanized: 'Naaku jalubu chesindi', english: 'I have a cold', context: 'Useful phrase to tell Amma when you\'re not feeling well! 🤧' },
    },
  },

  // DAY 13 - US History: The Thirteen Colonies
  {
    id: 13,
    subject: 'history',
    title: 'The Thirteen Colonies',
    activities: {
      lesson: {
        type: 'lesson', title: 'Building a New World: The Colonies', subject: 'history', emoji: '🏛️',
        content: `Between 1607 and 1733, England established 13 colonies along the eastern coast of North America. Each had a distinct character shaped by who settled there and why.

**Three regions:**

🌲 **New England Colonies** (Massachusetts, Connecticut, Rhode Island, New Hampshire)
- Rocky soil, cold winters — farming was hard
- Economy: fishing, shipbuilding, trade
- Founded largely by Puritans seeking religious freedom
- Town meetings → early tradition of self-government

🌾 **Middle Colonies** (New York, Pennsylvania, New Jersey, Delaware)
- "Breadbasket" — fertile land, grew wheat and grain
- Most diverse — Dutch, German, Swedish, English settlers
- Philadelphia was the largest city in the colonies

🌿 **Southern Colonies** (Virginia, Maryland, Georgia, North Carolina, South Carolina)
- Warm climate, long growing season
- Large plantations growing tobacco, rice, indigo
- **Enslaved African people** provided forced labor — the foundation of the Southern economy

**Key tension:** Colonists came to the Americas seeking freedom and opportunity — yet built a society that enslaved hundreds of thousands of people. This contradiction would define American history for the next 200 years.`,
      },
      quiz: {
        type: 'quiz', title: 'Thirteen Colonies Quiz', subject: 'history',
        questions: [
          { q: 'Which region was known as the "breadbasket" of the colonies?', options: ['New England', 'Middle Colonies', 'Southern Colonies', 'Western Territories'], answer: 1, explanation: 'The Middle Colonies had fertile soil and grew large amounts of wheat and grain, earning the "breadbasket" nickname.' },
          { q: 'What was the main economic crop of the Southern Colonies?', options: ['Wheat', 'Corn', 'Tobacco', 'Cotton'], answer: 2, explanation: 'Tobacco was the primary cash crop of Virginia and other Southern colonies in the colonial era.' },
          { q: 'The New England colonies developed a tradition of self-government through:', options: ['Royal governors', 'Town meetings', 'Plantation councils', 'Trade guilds'], answer: 1, explanation: 'New England town meetings gave colonists direct experience with democratic self-governance.' },
          { q: 'Why did the Southern economy rely heavily on enslaved labor?', options: ['It was required by British law', 'Large plantations needed massive labor forces that colonists forced enslaved Africans to provide', 'Enslaved people volunteered for the work', 'It was the cheapest form of labor available'], answer: 1, explanation: 'Large-scale tobacco and rice plantations required intensive labor. Colonists chose to enslave African people to maximize profit — a brutal and unjust system.' },
          { q: 'Which city was the largest in the colonial era?', options: ['Boston', 'New York', 'Philadelphia', 'Charleston'], answer: 2, explanation: 'Philadelphia, in the Middle Colonies, was the largest and most prosperous city in colonial America.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Colony', pronunciation: 'KOL-uh-nee',
        definition: 'A territory under the political control of a distant country, settled by people from that country.',
        exampleSentence: 'The thirteen British colonies eventually rebelled against distant control and became the United States.',
        teluguWord: 'వలసరాజ్యం', teluguRomanized: 'Valasaraajyam', teluguMeaning: 'Colony',
      },
      slot4: {
        type: 'goExplore', title: 'Go Explore: Where Did YOUR Family Come From?', emoji: '🌍', isGoExplore: true,
        prompt: `The colonies were built by people from many different places — and so is your family's story!\n\nAsk a parent or grandparent: Where did our family originally come from? When did they come to the US (or are they still in India)?\n\nYou can also look up: "Telugu people history" to learn about the region your family is from.`,
        questions: ['Where does your family originally come from? Any interesting details about your family\'s history?', 'How is your family\'s immigration story similar to or different from the colonial settlers you just learned about?'],
        writingPrompt: 'Write 2-3 sentences connecting your own family story to the idea of people moving to build a new life.',
      },
      challenge: {
        type: 'challenge', title: 'Primary Source Challenge 📜', isThatha: false,
        problem: `Read this quote from John Winthrop, first governor of Massachusetts Bay Colony (1630):\n\n*"We shall be as a city upon a hill. The eyes of all people are upon us."*\n\n**Question 1:** What do you think Winthrop meant by this?\n**Question 2:** Many colonists believed they were building something special and new. But from whose perspective might this "new world" not seem so new or special?\n**Question 3:** How does this quote connect to American identity today? (You may have heard politicians quote this.)`,
        hint: 'Think about who was already living in America when Winthrop said this. "New" for whom?',
        answer: 'Open-ended. Q1: Winthrop meant the colony would be a model for the world, watched by everyone. Q2: Indigenous peoples for whom this was their ancient homeland. Q3: The "city on a hill" idea persists in American exceptionalism — the belief that America has a special role in the world.',
      },
      telugu: { type: 'telugu', phrase: 'మన కుటుంబం భారతదేశం నుండి వచ్చింది', romanized: 'Mana kutumbam Bhaaratadaesham nundi vachhindi', english: 'Our family came from India', context: 'A proud thing to say! Tell Thatha 🇮🇳' },
    },
  },

  // DAY 14 - Math: Geometry - Area & Perimeter
  {
    id: 14,
    subject: 'math',
    title: 'Geometry: Area, Perimeter & Circumference',
    activities: {
      lesson: {
        type: 'lesson', title: 'Shapes, Area & Perimeter', subject: 'math', emoji: '📐',
        content: `Geometry is coming back in 7th grade — bigger and harder. Let's make sure the fundamentals are solid.

**Perimeter** = distance around the outside (add all sides)
**Area** = space inside a shape (multiply dimensions)

**Key formulas:**
- Rectangle: Area = l × w, Perimeter = 2(l + w)
- Triangle: Area = ½ × base × height
- Parallelogram: Area = base × height
- Circle: Circumference = 2πr or πd, Area = πr²

**π (pi) ≈ 3.14159...** — the ratio of any circle's circumference to its diameter. It never ends and never repeats!

**Example:**
A circle has radius 5cm.
- Circumference = 2π(5) = 10π ≈ 31.4 cm
- Area = π(5²) = 25π ≈ 78.5 cm²

**Why it matters for 7th grade:** You'll extend this to 3D shapes — surface area and volume — and work with composite figures (shapes made of multiple shapes combined).

**Minecraft connection:** Every time you build a floor or fill a pool, you're calculating area! A 16×16 chunk = 256 square blocks.`,
      },
      quiz: {
        type: 'quiz', title: 'Geometry Quiz', subject: 'math',
        questions: [
          { q: 'What is the area of a triangle with base 10 and height 6?', options: ['60', '30', '16', '32'], answer: 1, explanation: 'Area = ½ × base × height = ½ × 10 × 6 = 30.' },
          { q: 'A circle has diameter 14cm. What is its circumference? (Use π ≈ 3.14)', options: ['21.98 cm', '43.96 cm', '153.86 cm', '87.92 cm'], answer: 1, explanation: 'C = πd = 3.14 × 14 = 43.96 cm. Remember: diameter = 2 × radius.' },
          { q: 'A rectangle is 8m long and 5m wide. What is its perimeter?', options: ['13m', '26m', '40m', '20m'], answer: 1, explanation: 'Perimeter = 2(l + w) = 2(8 + 5) = 2(13) = 26m.' },
          { q: 'What is the area of a circle with radius 3? (Use π ≈ 3.14)', options: ['9.42', '18.84', '28.26', '6.28'], answer: 2, explanation: 'Area = πr² = 3.14 × 3² = 3.14 × 9 = 28.26.' },
          { q: 'A Minecraft floor is 12 blocks × 8 blocks. How many blocks do you need to fill it?', options: ['20', '40', '96', '112'], answer: 2, explanation: 'Area = 12 × 8 = 96 square blocks.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Circumference', pronunciation: 'ser-KUM-fer-ents',
        definition: 'The distance around the edge of a circle.',
        exampleSentence: 'To find how much fencing you\'d need around a circular garden, you calculate the circumference.',
        teluguWord: 'పరిధి', teluguRomanized: 'Paridhi', teluguMeaning: 'Circumference / Boundary',
      },
      slot4: {
        type: 'teachItBack', title: 'Teach It Back: Build Something with Geometry!', emoji: '📐', isTeachItBack: true,
        prompt: `Real world geometry challenge for Abhi!\n\n1. Find a circular object in your house (plate, cup, bowl, lid)\n2. Measure its diameter with a ruler\n3. Calculate the circumference and area yourself\n4. Show Thatha or a parent your work and explain how you got the answer\n\nBonus: Can you verify the circumference by wrapping a string around the object and measuring it?`,
        followUp: 'What object did you measure? What were the circumference and area? Did the string match your calculation?',
      },
      challenge: {
        type: 'challenge', title: 'Thatha Challenge 🧮', isThatha: true,
        problem: `Abhi wants to build a Minecraft house with a circular tower.\n\n**Part A:** The tower floor is a circle with radius 4 blocks. What is the area of the floor?\n\n**Part B:** He wants to put a fence around the tower. What length of fence does he need (circumference)?\n\n**Part C (Thatha level):** The house itself is an L-shaped floor. It's made of a 10×8 rectangle with a 3×4 rectangle cut out of one corner. What is the total floor area?\n\nDraw it on paper if it helps!`,
        hint: 'For Part C, calculate the full 10×8 rectangle and subtract the 3×4 cutout.',
        answer: 'Part A: π×16 ≈ 50.3 blocks². Part B: 2π×4 ≈ 25.1 blocks. Part C: (10×8) - (3×4) = 80 - 12 = 68 blocks².',
      },
      telugu: { type: 'telugu', phrase: 'ఇది ఎంత పెద్దది!', romanized: 'Idi enta peddadi!', english: 'This is so big!', context: 'Say this when you see something huge — like a giant Minecraft build! 🏗️' },
    },
  },

  // DAY 15 - Science: Photosynthesis & Cellular Respiration
  {
    id: 15,
    subject: 'science',
    title: 'Energy in Living Things',
    activities: {
      lesson: {
        type: 'lesson', title: 'Photosynthesis & Cellular Respiration', subject: 'science', emoji: '☀️',
        content: `All life needs energy. Plants get it from the sun. Animals get it by eating. But how does it actually work?

**Photosynthesis** (plants, algae, some bacteria):
Sunlight + Water + CO₂ → Glucose + Oxygen

6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂

Plants capture sunlight in **chloroplasts** using **chlorophyll** (the green pigment) and convert it into glucose — their food. Oxygen is released as a byproduct. That's where we get the air we breathe!

**Cellular Respiration** (ALL living things):
Glucose + Oxygen → CO₂ + Water + ENERGY (ATP)

C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP

Every cell breaks down glucose to release the energy stored in it. This happens in the **mitochondria**.

**The beautiful cycle:**
- Plants do photosynthesis → make glucose, release O₂
- Animals eat plants → do respiration → release CO₂
- Plants use that CO₂ for photosynthesis again
- It's a perfect loop!

**Notice:** Photosynthesis and respiration are OPPOSITES of each other — one builds glucose using energy, the other breaks it down to release energy.`,
      },
      quiz: {
        type: 'quiz', title: 'Energy Systems Quiz', subject: 'science',
        questions: [
          { q: 'What are the THREE inputs (ingredients) needed for photosynthesis?', options: ['Oxygen, glucose, water', 'Sunlight, water, carbon dioxide', 'Glucose, oxygen, carbon dioxide', 'Nitrogen, sunlight, water'], answer: 1, explanation: 'Photosynthesis needs: sunlight (energy), water (H₂O), and carbon dioxide (CO₂). It produces glucose and oxygen.' },
          { q: 'Where does photosynthesis occur in plant cells?', options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'], answer: 2, explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis.' },
          { q: 'Cellular respiration occurs in which organelle?', options: ['Chloroplast', 'Nucleus', 'Vacuole', 'Mitochondria'], answer: 3, explanation: 'Mitochondria are the "powerhouse of the cell" — they produce ATP through cellular respiration.' },
          { q: 'Which gas is a PRODUCT of photosynthesis that animals need to breathe?', options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], answer: 2, explanation: 'Photosynthesis releases oxygen as a byproduct — the same oxygen we breathe!' },
          { q: 'Why are photosynthesis and cellular respiration described as "opposite" processes?', options: ['One occurs at night, one during the day', 'One builds glucose using energy, the other breaks glucose down to release energy', 'One is in plants and one is in animals only', 'One uses water and one does not'], answer: 1, explanation: 'Photosynthesis: energy + CO₂ + H₂O → glucose + O₂. Respiration: glucose + O₂ → energy + CO₂ + H₂O. They are chemical opposites.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Chlorophyll', pronunciation: 'KLOR-oh-fill',
        definition: 'The green pigment in plants that captures light energy for photosynthesis.',
        exampleSentence: 'In autumn, leaves lose their chlorophyll and reveal the yellow and red pigments that were hidden beneath the green.',
        teluguWord: 'ఆకు పచ్చ రంగు', teluguRomanized: 'Aaku pachcha rangu', teluguMeaning: 'Leaf green color / Chlorophyll',
      },
      slot4: {
        type: 'goExplore', title: 'Go Explore: Leaf Investigation', emoji: '🍃', isGoExplore: true,
        prompt: `Go outside and collect 3 different leaves from different plants. Look at them carefully.\n\nLook up: "why do leaves change color in autumn" to understand what\'s happening with chlorophyll.`,
        questions: ['What differences did you notice between the 3 leaves (size, color, texture, shape)?', 'Based on what you read, why do leaves turn orange and red in autumn? What\'s happening to the chlorophyll?'],
        writingPrompt: 'Explain in 2-3 sentences what chlorophyll does and what happens when it breaks down.',
      },
      challenge: {
        type: 'challenge', title: 'Equation Challenge ⚗️', isThatha: false,
        problem: `Abhi notices that a fish tank with lots of plants stays cleaner and healthier than one without plants.\n\n**Part 1:** Using photosynthesis and cellular respiration, explain scientifically WHY plants help keep a fish tank healthy. Think about what the fish produces and what the plant needs.\n\n**Part 2:** If you sealed a fish tank completely (no air exchange), would the plants and fish be able to survive indefinitely together? Explain your reasoning using the photosynthesis/respiration cycle.\n\n**Part 3:** Write the two chemical equations from memory (symbols are fine).`,
        hint: 'Think about what fish breathe out (CO₂) and what plants need. Then think about what plants release (O₂) and what fish need.',
        answer: 'Part 1: Fish produce CO₂ which plants use for photosynthesis; plants produce O₂ which fish use to breathe — a perfect cycle. Part 2: Theoretically yes — if balanced! The fish\'s CO₂ feeds the plants and the plants\' O₂ feeds the fish. In practice, imbalances occur. Part 3: Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP.',
      },
      telugu: { type: 'telugu', phrase: 'చెట్లు మనకు ఆక్సిజన్ ఇస్తాయి', romanized: 'Chetlu manaku oxygen istayi', english: 'Trees give us oxygen', context: 'Share this science fact with your family! 🌳' },
    },
  },

  // DAY 16 - ELA: Reading Comprehension & Main Idea
  {
    id: 16,
    subject: 'ela',
    title: 'Finding the Main Idea',
    activities: {
      lesson: {
        type: 'lesson', title: 'Main Idea, Supporting Details & Inference', subject: 'ela', emoji: '📖',
        content: `In 7th grade, you'll read a LOT — history texts, science articles, literature. The #1 skill is finding the main idea fast.

**Main Idea** = what the whole text is MOSTLY about. It's the author's central point.
- Not a detail
- Not the first sentence necessarily
- Ask: "What is the author trying to tell me overall?"

**Supporting Details** = specific facts, examples, or evidence that back up the main idea.

**Example:**
*"Wolves play a crucial role in healthy ecosystems. When wolves were reintroduced to Yellowstone in 1995, elk herds began to move more, which allowed riverbanks to regrow with vegetation. This stabilized rivers and created habitats for beavers, birds, and fish. Scientists call this a 'trophic cascade.'"*

- **Main Idea:** Wolves are crucial to healthy ecosystems
- **Supporting Details:** elk movement changed, vegetation regrew, rivers stabilized, other species benefited

**Inference** = reading between the lines. Using clues + what you know to figure out what the author implies but doesn't say directly.

*"She gripped the door handle and slowly turned it, holding her breath."*
→ Inference: She's nervous or scared about what's on the other side.

**7th grade tip:** On tests, main idea questions often try to trick you with answers that are TRUE but too narrow (just one detail) or too broad (not specific enough).`,
      },
      quiz: {
        type: 'quiz', title: 'Reading Skills Quiz', subject: 'ela',
        questions: [
          { q: 'Read this paragraph: "Deforestation destroys animal habitats. It also increases carbon dioxide in the atmosphere. Additionally, it causes soil erosion and flooding. Scientists warn that current rates of deforestation are unsustainable." What is the main idea?', options: ['Flooding is caused by deforestation', 'Animals lose their homes when forests are cut down', 'Deforestation has multiple serious negative consequences', 'Scientists study forests'], answer: 2, explanation: 'The paragraph lists multiple problems caused by deforestation — the main idea covers all of them.' },
          { q: 'What is the difference between a main idea and a supporting detail?', options: ['They are the same thing', 'Main idea is the central point; details provide specific evidence for it', 'Details are more important than the main idea', 'Main idea is always the first sentence'], answer: 1, explanation: 'The main idea is the overall point. Supporting details are specific facts/examples that back it up.' },
          { q: '"The cafeteria was unusually quiet. Students stared at their food. No one laughed." What can you INFER?', options: ['The food was delicious', 'Something bad or sad had happened', 'It was a normal day', 'Students weren\'t hungry'], answer: 1, explanation: 'The details (quiet, staring, no laughing) suggest something negative has occurred — this is an inference.' },
          { q: 'Which answer best describes an INFERENCE?', options: ['A fact stated directly in the text', 'A conclusion you draw using text clues and your own knowledge', 'The author\'s opinion stated clearly', 'A definition from the text'], answer: 1, explanation: 'An inference goes beyond what\'s directly stated — you use clues to figure out what the author implies.' },
          { q: 'A good summary of a paragraph should:', options: ['Include every detail', 'Be longer than the original', 'Capture the main idea in fewer words without copying', 'Start with "This paragraph is about..."'], answer: 2, explanation: 'A good summary captures the essence in your own words, much shorter than the original.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Inference', pronunciation: 'IN-fer-ents',
        definition: 'A conclusion reached by reasoning from evidence and prior knowledge, rather than from explicit statements.',
        exampleSentence: 'From the muddy boots by the door and the wet jacket on the hook, I made the inference that it was raining outside.',
        teluguWord: 'అనుమానం', teluguRomanized: 'Anumanam', teluguMeaning: 'Inference / Deduction / Suspicion',
      },
      slot4: {
        type: 'goExplore', title: 'Go Explore: Read a Real Article', emoji: '📰', isGoExplore: true,
        prompt: `Go to kids.nationalgeographic.com or newsela.com and find ONE interesting article about nature, animals, or science. Read the whole thing.\n\nCome back and complete the following:`,
        questions: ['What is the main idea of the article in ONE sentence (your own words)?', 'Name two supporting details the author uses to back up the main idea'],
        writingPrompt: 'Write a 2-3 sentence summary of the article without copying any sentences directly.',
      },
      challenge: {
        type: 'challenge', title: 'Writing Challenge ✍️', isThatha: false,
        problem: `Read this passage and answer the questions:\n\n*"In 1854, a cholera epidemic swept through London. A doctor named John Snow did something revolutionary — instead of accepting the prevailing theory that disease spread through 'bad air,' he mapped every case of cholera on a city grid. He noticed all cases clustered around one water pump on Broad Street. He convinced authorities to remove the pump handle. The epidemic stopped. Snow had invented epidemiology — the science of how disease spreads."*\n\n1. What is the main idea?\n2. What inference can you make about how science progresses?\n3. Write one sentence that the author IMPLIES but never directly states.`,
        hint: 'For question 3, think about what this story suggests about questioning accepted ideas and using evidence.',
        answer: '1. John Snow used observation and data mapping to solve a cholera epidemic and invented epidemiology. 2. Science progresses when people question accepted theories and use evidence. 3. Implied: being willing to challenge conventional wisdom (bad air theory) and use data can save lives.',
      },
      telugu: { type: 'telugu', phrase: 'నేను ఒక పుస్తకం చదివాను', romanized: 'Nenu oka pustakam chadivaanu', english: 'I read a book', context: 'Tell Amma what you\'ve been reading! 📚' },
    },
  },

  // DAY 17 - Math: Solving Two-Step Equations
  {
    id: 17,
    subject: 'math',
    title: 'Two-Step Equations',
    activities: {
      lesson: {
        type: 'lesson', title: 'Solving Two-Step Equations', subject: 'math', emoji: '🔢',
        content: `You can solve one-step equations. Now let's level up to two-step equations — the bread and butter of 7th grade and Algebra.

**The golden rule:** Whatever you do to one side, do to the other. Work in REVERSE order of operations (PEMDAS backwards — addition/subtraction first, then multiplication/division).

**Example 1:** 2x + 5 = 17
- Step 1: Subtract 5 from both sides → 2x = 12
- Step 2: Divide both sides by 2 → x = 6
- Check: 2(6) + 5 = 17 ✅

**Example 2:** x/3 - 4 = 2
- Step 1: Add 4 to both sides → x/3 = 6
- Step 2: Multiply both sides by 3 → x = 18
- Check: 18/3 - 4 = 6 - 4 = 2 ✅

**Example 3 (with negatives):** -3x + 7 = -8
- Step 1: Subtract 7 → -3x = -15
- Step 2: Divide by -3 → x = 5
- Check: -3(5) + 7 = -15 + 7 = -8 ✅

**Word problem setup:**
"Abhi earns $12 per hour mowing lawns and already has $20 saved. How many hours must he work to have $80?"
→ 12h + 20 = 80 → 12h = 60 → h = 5 hours`,
      },
      quiz: {
        type: 'quiz', title: 'Two-Step Equations Quiz', subject: 'math',
        questions: [
          { q: 'Solve: 3x + 7 = 22', options: ['x = 3', 'x = 5', 'x = 7', 'x = 9'], answer: 1, explanation: '3x = 22 - 7 = 15. x = 15 ÷ 3 = 5.' },
          { q: 'Solve: x/4 - 3 = 5', options: ['x = 2', 'x = 8', 'x = 32', 'x = 20'], answer: 2, explanation: 'x/4 = 5 + 3 = 8. x = 8 × 4 = 32.' },
          { q: 'Solve: -2x + 10 = 4', options: ['x = -3', 'x = 3', 'x = 7', 'x = -7'], answer: 1, explanation: '-2x = 4 - 10 = -6. x = -6 ÷ -2 = 3.' },
          { q: 'Tickets cost $7 each plus a $5 service fee. Abhi spent $40. How many tickets did he buy?', options: ['4', '5', '6', '7'], answer: 1, explanation: '7t + 5 = 40. 7t = 35. t = 5 tickets.' },
          { q: 'Which step should you do FIRST to solve 5x - 8 = 27?', options: ['Divide by 5', 'Subtract 27', 'Add 8 to both sides', 'Multiply by 8'], answer: 2, explanation: 'Work backwards through PEMDAS: undo subtraction first by adding 8 to both sides, THEN divide by 5.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Equation', pronunciation: 'ih-KWAY-zhun',
        definition: 'A mathematical statement that two expressions are equal, shown with an equals sign.',
        exampleSentence: 'The equation 2x + 5 = 11 tells us that twice some unknown number, plus five, equals eleven.',
        teluguWord: 'సమీకరణం', teluguRomanized: 'Sameekaranam', teluguMeaning: 'Equation',
      },
      slot4: {
        type: 'teachItBack', title: 'Teach It Back: Abhi the Math Teacher!', emoji: '👨‍🏫', isTeachItBack: true,
        prompt: `Time to teach, Abhi!\n\nMake up THREE of your own two-step equation word problems (they can be about Minecraft, animals, sports — anything you like!).\n\nSolve each one yourself first, then present them to Thatha or a parent as a quiz. Give them 2 minutes per problem.\n\nWho gets the most right? 😄`,
        followUp: 'Write your three problems here and their answers. Who won the quiz?',
      },
      challenge: {
        type: 'challenge', title: 'Thatha Challenge 🧮', isThatha: true,
        problem: `**Part A:** Solve and check: 4(x - 3) = 20\n(Hint: distribute first, OR divide both sides by 4 first)\n\n**Part B:** Abhi and his friend together have $135. Abhi has $15 more than his friend. How much does each person have?\n(Hint: let friend = x, then Abhi = x + 15)\n\n**Part C (Thatha level):** Solve for x:\n3x + 2 = 5x - 10\n(Variables on BOTH sides — new challenge!)`,
        hint: 'For Part C, get all x terms on one side and all numbers on the other.',
        answer: 'Part A: x - 3 = 5, x = 8. Check: 4(8-3) = 20 ✅. Part B: x + x + 15 = 135, 2x = 120, x = $60. Friend has $60, Abhi has $75. Part C: 3x - 5x = -10 - 2, -2x = -12, x = 6.',
      },
      telugu: { type: 'telugu', phrase: 'నేను లెక్కలు చేయగలను!', romanized: 'Nenu lekkalu cheyagalanu!', english: 'I can do math!', context: 'Say this with confidence after solving today\'s equations! 💪' },
    },
  },

  // DAY 18 - US History: Causes of the American Revolution
  {
    id: 18,
    subject: 'history',
    title: 'Road to Revolution',
    activities: {
      lesson: {
        type: 'lesson', title: 'Causes of the American Revolution', subject: 'history', emoji: '🏛️',
        content: `The American Revolution didn't happen overnight — it built up over 12 years of growing tensions between Britain and its American colonies.

**The core dispute: "No taxation without representation"**
After the French and Indian War (1754-1763), Britain was deeply in debt and decided the colonies should help pay for it.

**Key events:**
- **Proclamation of 1763** — Britain forbade colonists from settling west of the Appalachians. Colonists were furious.
- **Stamp Act (1765)** — taxed all printed materials (newspapers, legal documents, playing cards). First direct tax on colonists. Massive protests followed.
- **Townshend Acts (1767)** — taxed glass, paper, paint, tea. Colonists boycotted British goods.
- **Boston Massacre (1770)** — British soldiers killed 5 colonists during a confrontation. Crispus Attucks, a formerly enslaved man, was the first to die.
- **Boston Tea Party (1773)** — colonists dumped 342 chests of British tea into Boston Harbor to protest the Tea Act.
- **Intolerable Acts (1774)** — Britain's punishment for the Tea Party. Closed Boston Harbor. Colonists formed the First Continental Congress in response.
- **Lexington & Concord (April 1775)** — "The shot heard round the world." The war begins.

**Key idea:** The colonists weren't just angry about taxes — they believed they deserved the same rights as British citizens, including representation in the government that taxed them.`,
      },
      quiz: {
        type: 'quiz', title: 'Revolution Causes Quiz', subject: 'history',
        questions: [
          { q: 'What was the colonists\' main argument against British taxation?', options: ['Taxes were too high', 'They had no representatives in Parliament to vote on taxes', 'Britain spent the money wastefully', 'Only the king could collect taxes'], answer: 1, explanation: '"No taxation without representation" — colonists believed they shouldn\'t be taxed by a Parliament where they had no elected representatives.' },
          { q: 'What happened at the Boston Tea Party?', options: ['Colonists served tea to British soldiers', 'Colonists dumped 342 chests of British tea into Boston Harbor', 'A tea shop was burned down', 'Colonists refused to buy tea'], answer: 1, explanation: 'In 1773, colonists (some dressed as Mohawk Indians) dumped entire shiploads of tea to protest the Tea Act.' },
          { q: 'Crispus Attucks was significant in the Boston Massacre because:', options: ['He led the British soldiers', 'He was the first person killed, and was a formerly enslaved Black man', 'He wrote about the event', 'He was a colonial soldier'], answer: 1, explanation: 'Attucks, a formerly enslaved man of African and Indigenous descent, was the first to die — making him one of the first martyrs of the Revolution.' },
          { q: 'What was the FIRST military clash of the American Revolution?', options: ['Battle of Bunker Hill', 'Battle of Yorktown', 'Battles of Lexington and Concord', 'Battle of Saratoga'], answer: 2, explanation: 'The Battles of Lexington and Concord in April 1775 were the first military engagements of the Revolutionary War.' },
          { q: 'Which act taxed all printed materials including newspapers and legal documents?', options: ['Tea Act', 'Townshend Acts', 'Stamp Act', 'Proclamation of 1763'], answer: 2, explanation: 'The Stamp Act of 1765 required colonists to pay a tax on all printed materials — the first direct tax on the colonies.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Representation', pronunciation: 'rep-rih-zen-TAY-shun',
        definition: 'Having elected officials who speak and act on your behalf in government.',
        exampleSentence: 'The colonists demanded representation in Parliament before agreeing to pay any taxes imposed by Britain.',
        teluguWord: 'ప్రాతినిధ్యం', teluguRomanized: 'Praatinidhyam', teluguMeaning: 'Representation',
      },
      slot4: {
        type: 'goExplore', title: 'Go Explore: The Boston Tea Party', emoji: '🫖', isGoExplore: true,
        prompt: `Look up a short video or article about the Boston Tea Party. Search: "Boston Tea Party explained for kids" on YouTube or a history site.`,
        questions: ['Why did colonists dress as Mohawk Indians during the Tea Party? What were they trying to communicate?', 'Do you think dumping tea in the harbor was a justified protest, or did it go too far? Explain your reasoning.'],
        writingPrompt: 'In 2-3 sentences, explain the Boston Tea Party and what it showed about colonial attitudes toward British rule.',
      },
      challenge: {
        type: 'challenge', title: 'Perspective Challenge 📜', isThatha: false,
        problem: `It's 1774. Write TWO short paragraphs (3-4 sentences each):\n\n**Paragraph 1:** You are a Boston colonist who participated in the Tea Party. Justify your actions.\n\n**Paragraph 2:** You are a British member of Parliament. Explain why you support the Intolerable Acts as a response.\n\nBoth perspectives should be historically accurate — even if you personally disagree with one of them.`,
        hint: 'For the colonist: think about rights, representation, and economic harm. For the British MP: think about debt, order, and the cost of protecting the colonies.',
        answer: 'Open-ended. Colonist perspective should mention: taxation without representation, rights as British subjects, economic hardship. British perspective should mention: war debt, need for order, cost of protecting colonies.',
      },
      telugu: { type: 'telugu', phrase: 'స్వేచ్ఛ చాలా ముఖ్యమైనది', romanized: 'Svechha chaalaa mukhyamainadi', english: 'Freedom is very important', context: 'A powerful thing to say after learning about the Revolution! 🗽' },
    },
  },

  // DAY 19 - Math: Inequalities
  {
    id: 19,
    subject: 'math',
    title: 'Inequalities',
    activities: {
      lesson: {
        type: 'lesson', title: 'Solving & Graphing Inequalities', subject: 'math', emoji: '🔢',
        content: `An inequality is like an equation, but instead of "equals," it says "greater than," "less than," or "at least/at most."

**Symbols:**
- > greater than (open circle on number line)
- < less than (open circle)
- ≥ greater than or equal to (closed circle)
- ≤ less than or equal to (closed circle)

**Solving inequalities** works just like equations — with ONE important rule:
⚠️ **When you multiply or divide by a NEGATIVE number, FLIP the inequality sign!**

**Example 1:** 2x + 3 > 11
- 2x > 8
- x > 4 (all numbers greater than 4)
- Graph: open circle at 4, arrow pointing right →

**Example 2:** -3x ≤ 12
- Divide by -3 → **FLIP the sign** → x ≥ -4
- Graph: closed circle at -4, arrow pointing right →

**Example 3 (word problem):**
"Abhi needs at least 80 points to get an A. He has 52 so far. How many more points does he need?"
→ 52 + p ≥ 80 → p ≥ 28 (he needs at least 28 more points)

**Key difference from equations:** Equations have ONE answer. Inequalities have a whole RANGE of answers.`,
      },
      quiz: {
        type: 'quiz', title: 'Inequalities Quiz', subject: 'math',
        questions: [
          { q: 'Solve: x + 7 > 12', options: ['x > 5', 'x > 19', 'x < 5', 'x = 5'], answer: 0, explanation: 'Subtract 7 from both sides: x > 12 - 7 = 5.' },
          { q: 'Solve: -4x < 20. What happens to the inequality sign?', options: ['Stays the same: x < -5', 'Flips: x > -5', 'Stays: x < 5', 'Flips: x > 5'], answer: 1, explanation: 'Dividing by a negative (-4) flips the sign. -4x < 20 → x > -5.' },
          { q: 'Which graph represents x ≥ 3?', options: ['Open circle at 3, arrow left', 'Open circle at 3, arrow right', 'Closed circle at 3, arrow left', 'Closed circle at 3, arrow right'], answer: 3, explanation: '≥ means "greater than or equal to" — closed circle (includes 3) with arrow pointing right (greater values).' },
          { q: 'Abhi can spend at most $50. He\'s already spent $32. Which inequality shows how much more he can spend (m)?', options: ['m > 18', 'm ≥ 18', 'm < 18', 'm ≤ 18'], answer: 3, explanation: '32 + m ≤ 50, so m ≤ 18. He can spend $18 or less.' },
          { q: 'What is the key difference between an equation and an inequality?', options: ['Equations use letters, inequalities don\'t', 'Equations have one solution, inequalities have a range of solutions', 'Inequalities are harder', 'They are the same thing'], answer: 1, explanation: 'An equation like x = 5 has one solution. An inequality like x > 5 has infinitely many solutions (5.1, 6, 100, etc.).' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Inequality', pronunciation: 'in-ee-KWOL-ih-tee',
        definition: 'A mathematical statement showing that two expressions are not equal, using symbols like >, <, ≥, or ≤.',
        exampleSentence: 'The inequality x > 5 represents all numbers greater than 5, not just one specific value.',
        teluguWord: 'అసమానత', teluguRomanized: 'Asamaanata', teluguMeaning: 'Inequality / Disparity',
      },
      slot4: {
        type: 'teachItBack', title: 'Teach It Back: The Flip Rule!', emoji: '👨‍🏫', isTeachItBack: true,
        prompt: `The flip rule (flip sign when dividing by negative) is something almost everyone forgets at first. Make it stick!\n\nTeach Thatha or a parent:\n1. Why the flip rule exists (try using a number example: start with 2 > 1, multiply both sides by -1 — does the inequality still hold without flipping?)\n2. Solve this together: -5x + 3 ≥ -12\n3. Graph the answer on a number line (draw it on paper)`,
        followUp: 'What was the answer? Did the visual of multiplying 2 > 1 by -1 help explain WHY the rule works?',
      },
      challenge: {
        type: 'challenge', title: 'Thatha Challenge 🧮', isThatha: true,
        problem: `**Part A:** Solve and graph: -2x + 6 > -4\n\n**Part B:** Abhi wants to save at least $200 for a new gaming setup. He earns $15 per hour and already has $65. Write and solve an inequality to find the minimum number of hours he needs to work.\n\n**Part C (Thatha level):** Solve this compound inequality and graph it:\n-1 ≤ 2x + 3 ≤ 11\n(Hint: treat it as two inequalities and solve each part)`,
        hint: 'Part C: subtract 3 from all three parts, then divide all three parts by 2.',
        answer: 'Part A: -2x > -10, x < 5. Open circle at 5, arrow left. Part B: 15h + 65 ≥ 200, 15h ≥ 135, h ≥ 9 hours. Part C: -4 ≤ 2x ≤ 8, -2 ≤ x ≤ 4. Closed circles at -2 and 4, filled in between.',
      },
      telugu: { type: 'telugu', phrase: 'నాకు మరింత ప్రాక్టీస్ కావాలి', romanized: 'Naaku marinta practice kaavaali', english: 'I need more practice', context: 'It\'s okay to say this! Even Thatha practices 😄' },
    },
  },

  // DAY 20 - MILESTONE DAY
  {
    id: 20,
    subject: 'mixed',
    title: '🏆 Day 20 Milestone — You\'re 40% There, Abhi!',
    isMilestone: true,
    activities: {
      lesson: {
        type: 'lesson', title: 'Halfway to Halfway!', subject: 'mixed', emoji: '🏆',
        content: `Abhi — you've completed 20 days of Biome. That is genuinely impressive. 

Here's what you've covered so far:

**Math:** Ratios, negative numbers, variables, fractions/percents, geometry, two-step equations, inequalities
**Science:** Cells, ecosystems/biomes, genetics, human body systems, photosynthesis
**US History:** Indigenous peoples, European exploration, thirteen colonies, causes of the Revolution
**ELA:** Vivid writing, main idea, inference, summarizing
**Telugu:** 20 phrases — you know how to greet, express feelings, talk about family, learning, and nature

That's a semester's worth of content in 20 days. 

**What's coming in Days 21-50:**
- Math: Graphing, slope, surface area, volume, statistics
- Science: The American Revolution and its outcome, the Constitution, Civil War
- History: More US History including slavery, abolitionism, and Reconstruction
- ELA: Argumentative writing, research skills, grammar deep dives
- Telugu: Full conversations

You're building real 7th grade readiness. Keep going! 🌿`,
      },
      quiz: {
        type: 'quiz', title: 'Days 11-19 Review Quiz', subject: 'mixed',
        questions: [
          { q: 'Solve: -3x + 9 = -6', options: ['x = -1', 'x = 1', 'x = 5', 'x = -5'], answer: 2, explanation: '-3x = -6 - 9 = -15. x = -15 ÷ -3 = 5.' },
          { q: 'What gas do plants release during photosynthesis?', options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], answer: 2, explanation: 'Photosynthesis releases oxygen as a byproduct — the same oxygen animals breathe.' },
          { q: 'What was the colonists\' rallying cry against British taxation?', options: ['No peace without freedom', 'No taxation without representation', 'Freedom or death', 'United we stand'], answer: 1, explanation: '"No taxation without representation" — colonists felt they shouldn\'t be taxed by Parliament where they had no elected voice.' },
          { q: 'What is 35% of 200?', options: ['35', '70', '65', '100'], answer: 1, explanation: '0.35 × 200 = 70.' },
          { q: 'Which body system fights infection and disease?', options: ['Circulatory', 'Nervous', 'Immune', 'Digestive'], answer: 2, explanation: 'The immune system — including white blood cells and lymph nodes — defends the body against pathogens.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Perseverance', pronunciation: 'per-suh-VEER-ents',
        definition: 'Continued effort and determination despite difficulty or delay in achieving success.',
        exampleSentence: 'Abhi\'s perseverance through 20 days of learning shows real commitment to being prepared for 7th grade.',
        teluguWord: 'పట్టుదల', teluguRomanized: 'Pattudala', teluguMeaning: 'Determination / Perseverance',
      },
      slot4: {
        type: 'teachItBack', title: 'Milestone Teach It Back 🌟', emoji: '🌟', isTeachItBack: true,
        prompt: `Day 20 celebration, Abhi!\n\nYou've learned SO much. Here's your milestone challenge:\n\nPick your favorite topic from the last 10 days. Find Amma, Thatha, or your dad. Give them a 3-minute "mini lesson" like a real teacher.\n\nBonus: Ask them to quiz you back with 2 questions on the topic.`,
        followUp: 'What topic did you teach? What questions did they ask you? How did you do?',
      },
      challenge: {
        type: 'challenge', title: 'Milestone Crossover Challenge 🏆', isThatha: true,
        problem: `**Math + History crossover:**\n\nThe American Revolution formally ended in 1783 with the Treaty of Paris. The US Constitution was signed in 1787.\n\n**Part A:** How many years passed between the start of the war (1775) and the Constitution?\n\n**Part B:** The original 13 colonies each sent delegates to the Constitutional Convention. If they split into 4 regional groups with x delegates each, plus 3 extra, and the total was 55, write and solve an equation for x.\n\n**Part C (Thatha level):** The Great Compromise gave small states 2 senators each. If the total Senate had 26 senators representing 13 states, and the House had representation proportional to population — and the total Congress was 91 members — how many House members were there? Write this as an equation.`,
        hint: 'Part C: 91 = 26 (Senate) + H (House). Simple subtraction, but think about WHY this structure was chosen.',
        answer: 'Part A: 1787 - 1775 = 12 years. Part B: 4x + 3 = 55, 4x = 52, x = 13. Part C: H = 91 - 26 = 65 House members.',
      },
      telugu: { type: 'telugu', phrase: 'నేను ఇరవై రోజులు పూర్తి చేశాను! చాలా గొప్పగా ఉంది!', romanized: 'Nenu iravayi rojulu poorti cheshaanu! Chaalaa goppagaa undi!', english: 'I completed twenty days! That\'s amazing!', context: 'Shout this to the whole family! You earned it, Abhi! 🎉' },
    },
  },

  // DAY 21 - Science: Food Webs & Ecological Relationships
  {
    id: 21,
    subject: 'science',
    title: 'Food Webs & Ecological Relationships',
    activities: {
      lesson: {
        type: 'lesson', title: 'Food Webs: It\'s Complicated', subject: 'science', emoji: '🕸️',
        content: `A food chain is a simple line: grass → rabbit → fox. But real ecosystems aren't that simple — they're food WEBS.

**Food Web** = a complex network showing ALL the feeding relationships in an ecosystem. Every organism usually eats multiple things and is eaten by multiple things.

**Trophic Levels:**
1. **Producers** (plants, algae) — make their own food via photosynthesis
2. **Primary Consumers** (herbivores) — eat producers
3. **Secondary Consumers** (omnivores/carnivores) — eat primary consumers
4. **Tertiary Consumers** (top predators) — eat secondary consumers
5. **Decomposers** (bacteria, fungi) — break down dead matter, return nutrients to soil

**Ecological relationships:**
- **Predation:** wolf eats rabbit (predator/prey)
- **Competition:** two wolf packs compete for the same territory
- **Mutualism:** bees pollinate flowers, flowers provide nectar (both benefit)
- **Commensalism:** barnacles on a whale (barnacle benefits, whale unaffected)
- **Parasitism:** tick on a dog (tick benefits, dog harmed)

**Keystone species:** A species whose impact on the ecosystem is disproportionately large. Remove them and the whole system can collapse. Wolves in Yellowstone are a famous example — their presence changed river patterns!`,
      },
      quiz: {
        type: 'quiz', title: 'Food Webs Quiz', subject: 'science',
        questions: [
          { q: 'What is the main difference between a food chain and a food web?', options: ['Food webs only include predators', 'Food webs show multiple interconnected feeding relationships vs a single chain', 'Food chains are more accurate', 'They are the same thing'], answer: 1, explanation: 'A food chain is a single path. A food web shows all the interconnected relationships — much more realistic.' },
          { q: 'Bees pollinate flowers and receive nectar in return. This is an example of:', options: ['Parasitism', 'Competition', 'Mutualism', 'Predation'], answer: 2, explanation: 'Both the bee and flower benefit — bee gets food, flower gets pollinated. This is mutualism.' },
          { q: 'Which organisms break down dead material and return nutrients to the soil?', options: ['Producers', 'Primary consumers', 'Top predators', 'Decomposers'], answer: 3, explanation: 'Decomposers (bacteria, fungi) break down dead organisms and recycle nutrients back into the ecosystem.' },
          { q: 'A tick feeds on a dog\'s blood, harming the dog. This is:', options: ['Mutualism', 'Commensalism', 'Parasitism', 'Competition'], answer: 2, explanation: 'Parasitism: the tick (parasite) benefits, the dog (host) is harmed.' },
          { q: 'What is a "keystone species"?', options: ['The most numerous species', 'A species whose removal causes major ecosystem disruption', 'The top predator only', 'An endangered species'], answer: 1, explanation: 'A keystone species has a disproportionately large effect on the ecosystem — removing them causes collapse of many other species.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Predator', pronunciation: 'PRED-uh-ter',
        definition: 'An animal that hunts and eats other animals.',
        exampleSentence: 'The wolf is an apex predator in the Yellowstone ecosystem, controlling elk populations and reshaping the landscape.',
        teluguWord: 'వేటగాడు', teluguRomanized: 'Vetagaadu', teluguMeaning: 'Hunter / Predator',
      },
      slot4: {
        type: 'goExplore', title: 'Go Explore: Yellowstone Wolves', emoji: '🐺', isGoExplore: true,
        prompt: `Search YouTube for "How Wolves Change Rivers" — it's a famous 4-minute video about the reintroduction of wolves to Yellowstone. Watch the whole thing.`,
        questions: ['Name TWO unexpected ways wolves changed Yellowstone after their reintroduction', 'What is a "trophic cascade" based on what you watched?'],
        writingPrompt: 'In 2-3 sentences explain how one animal species (wolves) could change the shape of rivers.',
      },
      challenge: {
        type: 'challenge', title: 'Ecosystem Design Challenge 🌍', isThatha: false,
        problem: `Design a simple food web for a Pacific Northwest forest (Abhi's actual backyard biome!).\n\nInclude:\n- 2 producers (plants)\n- 3 primary consumers (animals that eat plants)\n- 2 secondary consumers\n- 1 tertiary consumer / apex predator\n- 1 decomposer\n\nDraw the web on paper with arrows showing energy flow (arrow points FROM eaten TO eater).\n\nBonus: Identify one mutualistic relationship in your web.`,
        hint: 'Pacific Northwest animals: deer, elk, salmon, bears, wolves, cougars, eagles, rabbits, squirrels. Plants: ferns, Douglas fir, berries, grass.',
        answer: 'Open-ended. Should have correct arrow directions (energy flows from eaten to eater), correct placement in trophic levels, and a plausible mutualism (e.g. bears eat berries, spread seeds = mutualism).',
      },
      telugu: { type: 'telugu', phrase: 'తోడేళ్ళు చాలా తెలివైనవి', romanized: 'Toodeellu chaalaa telivainavi', english: 'Wolves are very intelligent', context: 'Share this animal fact with your family! 🐺' },
    },
  },

  // DAY 22 - Math: Graphing on Coordinate Plane
  {
    id: 22,
    subject: 'math',
    title: 'Graphing: The Coordinate Plane',
    activities: {
      lesson: {
        type: 'lesson', title: 'Coordinate Plane & Graphing', subject: 'math', emoji: '📊',
        content: `The coordinate plane is two number lines crossed — horizontal (x-axis) and vertical (y-axis). Every point is a unique address: (x, y).

**Reading coordinates (ordered pairs):**
- Start at the origin (0,0)
- Move right/left for x (positive right, negative left)
- Move up/down for y (positive up, negative down)
- (3, -2): right 3, down 2

**Four Quadrants:**
- Quadrant I: (+, +) — top right
- Quadrant II: (-, +) — top left
- Quadrant III: (-, -) — bottom left
- Quadrant IV: (+, -) — bottom right

**Graphing a linear equation:**
To graph y = 2x + 1:
1. Make a table of values (pick x values, calculate y)
   - x=0: y=1 → (0,1)
   - x=1: y=3 → (1,3)
   - x=-1: y=-1 → (-1,-1)
2. Plot the points
3. Connect with a straight line

**Slope:** How steep a line is. Rise over run.
- Slope = (y₂-y₁)/(x₂-x₁)
- Positive slope: goes up left to right ↗
- Negative slope: goes down left to right ↘
- Zero slope: horizontal line →
- Undefined slope: vertical line ↑

**Minecraft connection:** Every Minecraft coordinate IS an ordered pair (or triple in 3D)! X,Y,Z coordinates are exactly this concept.`,
      },
      quiz: {
        type: 'quiz', title: 'Coordinate Plane Quiz', subject: 'math',
        questions: [
          { q: 'Which quadrant contains the point (-3, 5)?', options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'], answer: 1, explanation: 'Quadrant II: negative x, positive y. (-3, 5) has negative x and positive y.' },
          { q: 'For the equation y = 3x - 2, what is y when x = 2?', options: ['4', '6', '1', '8'], answer: 0, explanation: 'y = 3(2) - 2 = 6 - 2 = 4.' },
          { q: 'What is the slope between points (1, 3) and (3, 7)?', options: ['1', '2', '3', '4'], answer: 1, explanation: 'Slope = (7-3)/(3-1) = 4/2 = 2.' },
          { q: 'A line with a NEGATIVE slope:', options: ['Goes up left to right', 'Is horizontal', 'Goes down left to right', 'Is vertical'], answer: 2, explanation: 'Negative slope means as x increases, y decreases — the line goes downward from left to right.' },
          { q: 'What are the coordinates of the origin?', options: ['(1, 1)', '(0, 1)', '(1, 0)', '(0, 0)'], answer: 3, explanation: 'The origin is the point where the x and y axes cross — always (0, 0).' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Slope', pronunciation: 'SLOHP',
        definition: 'A measure of the steepness of a line, calculated as the ratio of vertical change to horizontal change (rise over run).',
        exampleSentence: 'A ski slope with a slope of 3/1 rises 3 feet for every 1 foot of horizontal distance — very steep!',
        teluguWord: 'వాలు', teluguRomanized: 'Vaalu', teluguMeaning: 'Slope / Incline',
      },
      slot4: {
        type: 'teachItBack', title: 'Teach It Back: Graph It!', emoji: '📊', isTeachItBack: true,
        prompt: `Graphing challenge for Abhi!\n\nOn paper, draw a coordinate plane (x and y axes with numbers -5 to 5).\n\nGraph these three equations by making a table of values for each:\n1. y = x + 2\n2. y = -x + 1\n3. y = 2\n\nShow your graphs to Thatha or a parent and explain: what does the slope of each line look like? What does y=2 look like and why?`,
        followUp: 'Describe what the three graphs looked like. What was special about y=2?',
      },
      challenge: {
        type: 'challenge', title: 'Thatha Challenge 🧮', isThatha: true,
        problem: `**Part A:** Graph y = -2x + 4. What is the slope? Where does it cross the y-axis (y-intercept)?\n\n**Part B:** Two points on a line are (2, 5) and (6, 13). Find the slope, then write the equation of the line in y = mx + b form.\n\n**Part C (Thatha level):** What does the slope of a line represent in real life? Give two different real-world examples where slope has meaning (hint: think speed, cost, temperature change...).`,
        hint: 'For Part B: find slope first, then plug one point into y = mx + b to find b.',
        answer: 'Part A: slope = -2, y-intercept = 4. Part B: slope = (13-5)/(6-2) = 8/4 = 2. Using (2,5): 5 = 2(2) + b, b = 1. Equation: y = 2x + 1. Part C: Open-ended. Examples: speed (distance/time), unit price (total cost/items), temperature drop (degrees/hour).',
      },
      telugu: { type: 'telugu', phrase: 'నేను గ్రాఫ్ గీయగలను', romanized: 'Nenu graph geeyagalanu', english: 'I can draw a graph', context: 'Show Thatha your graphs today! 📊' },
    },
  },

  // DAY 23 - US History: Declaration of Independence & Revolution
  {
    id: 23,
    subject: 'history',
    title: 'The Declaration & the Revolution',
    activities: {
      lesson: {
        type: 'lesson', title: 'Independence & War', subject: 'history', emoji: '🗽',
        content: `By 1776, the colonies were ready to break free from Britain entirely.

**The Declaration of Independence (July 4, 1776)**
Written primarily by Thomas Jefferson, the Declaration is one of the most important documents in world history.

**Key ideas:**
- "All men are created equal" — a radical idea in 1776 (though limited in practice — enslaved people, women, and non-landowners were excluded)
- People have natural rights: "life, liberty, and the pursuit of happiness"
- Governments get their power from the consent of the governed
- When government violates rights, the people can abolish it

**The Contradiction:** Jefferson wrote "all men are created equal" while enslaving over 600 people over his lifetime. This tension would define America for centuries.

**The Revolutionary War (1775-1783)**
Key moments:
- **Valley Forge (1777-78):** Washington's army nearly starved and froze. Survival showed incredible determination.
- **Battle of Saratoga (1777):** American victory that convinced France to join as an ally — the turning point.
- **Yorktown (1781):** Cornwallis surrenders. Effectively ends the war.
- **Treaty of Paris (1783):** Britain officially recognizes American independence.

**Who fought:** Not just white colonists — African Americans (some enslaved, promised freedom by the British; others fighting for the Patriots), Indigenous nations, women, immigrants from across Europe.`,
      },
      quiz: {
        type: 'quiz', title: 'Revolution Quiz', subject: 'history',
        questions: [
          { q: 'Who was the primary author of the Declaration of Independence?', options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'John Adams'], answer: 2, explanation: 'Thomas Jefferson was the primary author, though a committee including Franklin and Adams reviewed and edited it.' },
          { q: 'What was the turning point of the Revolutionary War that brought France as an ally?', options: ['Battle of Bunker Hill', 'Battle of Saratoga', 'Battle of Yorktown', 'Valley Forge'], answer: 1, explanation: 'The American victory at Saratoga in 1777 convinced France that the Patriots could win, leading France to enter the war as an ally.' },
          { q: 'The Declaration states that government gets its power from:', options: ['God and the king', 'Military strength', 'The consent of the governed', 'Wealthy landowners'], answer: 2, explanation: 'The Declaration\'s revolutionary idea: governments derive "their just powers from the consent of the governed."' },
          { q: 'What is the central contradiction in the Declaration of Independence?', options: ['It was written in secret', 'Jefferson wrote "all men are created equal" while enslaving hundreds of people', 'It was not signed by all colonies', 'Washington refused to sign it'], answer: 1, explanation: 'The Declaration proclaimed equality while its primary author and many signers enslaved African Americans — a fundamental contradiction in American founding ideals.' },
          { q: 'When did Britain officially recognize American independence?', options: ['1776', '1781', '1783', '1787'], answer: 2, explanation: 'The Treaty of Paris in 1783 officially ended the Revolutionary War and recognized American independence.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Inalienable', pronunciation: 'in-AY-lee-un-uh-bul',
        definition: 'Unable to be taken away or transferred to another; fundamental rights that cannot be removed.',
        exampleSentence: 'The Declaration of Independence called life, liberty, and the pursuit of happiness "inalienable rights" — rights no government could take away.',
        teluguWord: 'హక్కులు', teluguRomanized: 'Hakkulu', teluguMeaning: 'Rights',
      },
      slot4: {
        type: 'goExplore', title: 'Go Explore: Read the Real Document', emoji: '📜', isGoExplore: true,
        prompt: `Search: "Declaration of Independence text" and read the first two paragraphs (just the beginning, up to "...to secure these rights").\n\nIt's old English but try to understand it — this is one of the most important pieces of writing in history.`,
        questions: ['In your own words, what are the first two paragraphs saying?', 'The Declaration says people have the right to "alter or abolish" a government that doesn\'t protect their rights. Do you think this is a good idea? Why or why not?'],
        writingPrompt: 'In 2-3 sentences, explain the main argument of the Declaration of Independence in modern language.',
      },
      challenge: {
        type: 'challenge', title: 'Document Analysis Challenge 📜', isThatha: false,
        problem: `Thomas Jefferson wrote: *"All men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."*\n\nAt the time of writing:\n- Jefferson enslaved over 100 people\n- Women could not vote\n- Property ownership was required to vote in most states\n\n**Write a paragraph (5-6 sentences) analyzing this contradiction.** Address:\n1. What Jefferson's words promised\n2. Who was actually included vs. excluded\n3. Why this contradiction matters for understanding American history`,
        hint: 'This isn\'t about whether Jefferson was good or bad — it\'s about understanding how stated ideals and reality can differ, and how that gap drove future reform movements.',
        answer: 'Open-ended. Should acknowledge: the radical promise of the words, the reality of who was excluded (enslaved people, women, non-property owners), and that this contradiction became the engine of reform movements (abolitionism, suffrage, civil rights).',
      },
      telugu: { type: 'telugu', phrase: 'సమానత్వం చాలా ముఖ్యమైనది', romanized: 'Samaanatvam chaalaa mukhyamainadi', english: 'Equality is very important', context: 'A meaningful phrase after today\'s history lesson 🗽' },
    },
  },

  // DAY 24 - ELA: Argumentative Writing
  {
    id: 24,
    subject: 'ela',
    title: 'How to Write a Strong Argument',
    activities: {
      lesson: {
        type: 'lesson', title: 'Argumentative Writing', subject: 'ela', emoji: '✍️',
        content: `In 7th grade, argumentative writing is HUGE. You'll write essays where you take a position and defend it with evidence. Here's how to do it well.

**The 5-part structure:**

1. **Introduction + Claim**
   - Hook the reader
   - State your claim clearly: "Schools should start later because..."

2. **Reason 1 + Evidence**
   - State one reason that supports your claim
   - Back it up with specific evidence (facts, data, examples)

3. **Reason 2 + Evidence**
   - Another reason with evidence

4. **Counterclaim + Rebuttal**
   - Acknowledge the other side: "Some people argue that..."
   - Then explain why your argument is still stronger: "However..."
   - This actually makes your argument MORE convincing

5. **Conclusion**
   - Restate your claim (don't just copy it — rephrase it)
   - End with something memorable

**Strong claim checklist:**
✅ Takes a clear position (not "There are pros and cons")
✅ Is debatable (not a fact everyone agrees on)
✅ Is specific

**Weak:** "Social media is good and bad"
**Strong:** "Schools should ban smartphones during class because they harm focus and social skills"`,
      },
      quiz: {
        type: 'quiz', title: 'Argumentative Writing Quiz', subject: 'ela',
        questions: [
          { q: 'Which is the strongest argumentative claim?', options: ['Some animals are endangered.', 'Conservation efforts are important.', 'Zoos should be abolished because they cause psychological harm to animals.', 'There are many opinions about zoos.'], answer: 2, explanation: 'A strong claim takes a clear, debatable position with a reason. "Zoos should be abolished because..." does this.' },
          { q: 'What is a "counterclaim" in an argument?', options: ['Your strongest point', 'The opposing viewpoint that you address and rebut', 'A supporting detail', 'The conclusion'], answer: 1, explanation: 'A counterclaim acknowledges what the other side would say — then you explain why your argument is still stronger.' },
          { q: 'Why should you include a counterclaim in your argument?', options: ['To confuse the reader', 'To show you understand other views and make your argument more credible', 'Because teachers require it', 'To make the essay longer'], answer: 1, explanation: 'Addressing the opposing view shows intellectual honesty and actually strengthens your position by showing you\'ve considered all angles.' },
          { q: 'Which sentence is the best evidence for the claim "schools should start later"?', options: ['I prefer mornings.', 'Studies show teenagers need 8-10 hours of sleep and their natural sleep cycle starts later than adults.', 'Some students are tired.', 'School is hard in the morning.'], answer: 1, explanation: 'Good evidence is specific, factual, and directly supports the claim. The sleep research is specific and relevant.' },
          { q: 'What should a conclusion NOT do?', options: ['Restate the claim in new words', 'Summarize key points', 'Copy the introduction word for word', 'End with something memorable'], answer: 2, explanation: 'Never copy your introduction. Restate your claim using different words and leave the reader with something to think about.' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Rebuttal', pronunciation: 'rih-BUT-ul',
        definition: 'A response that disproves or argues against an opposing point.',
        exampleSentence: 'After the other team stated their argument, our team offered a strong rebuttal with data that contradicted their claims.',
        teluguWord: 'వాదన', teluguRomanized: 'Vaadana', teluguMeaning: 'Argument / Debate',
      },
      slot4: {
        type: 'teachItBack', title: 'Teach It Back: Debate Time!', emoji: '⚖️', isTeachItBack: true,
        prompt: `Abhi, you're going to run a mini debate!\n\nPick ONE of these topics:\n- "Homework should be banned"\n- "Video games make you smarter"\n- "Animals should not be kept in zoos"\n\nYou argue FOR it. Ask Thatha or a parent to argue AGAINST it.\n\n3 minutes each side. Then switch!\n\nAfterward: who had the better rebuttal?`,
        followUp: 'What topic did you debate? What was YOUR best argument? What was their best counterargument?',
      },
      challenge: {
        type: 'challenge', title: 'Write Your Argument ✍️', isThatha: false,
        problem: `Write a SHORT argumentative paragraph (6-8 sentences) on this topic:\n\n**"Should students have homework over summer vacation?"**\n\nYour paragraph must include:\n1. A clear claim sentence\n2. Two reasons with brief evidence\n3. One counterclaim + rebuttal\n4. A conclusion sentence\n\nLabel each part: [CLAIM], [REASON 1], [REASON 2], [COUNTERCLAIM], [REBUTTAL], [CONCLUSION]`,
        hint: 'Pick a side you actually believe — you\'ll write better. Even if you agree with homework, argue against it (or vice versa) for practice.',
        answer: 'Open-ended. Evaluate: clear claim? Specific reasons? Evidence? Counterclaim present? Rebuttal addresses the counter? Conclusion restates claim in new words?',
      },
      telugu: { type: 'telugu', phrase: 'నా అభిప్రాయం ఏమిటంటే...', romanized: 'Naa abhipraayam emitante...', english: 'My opinion is that...', context: 'Use this to start any argument or discussion! 💬' },
    },
  },

  // DAY 25 - Math: Surface Area & Volume
  {
    id: 25,
    subject: 'math',
    title: 'Surface Area & Volume',
    activities: {
      lesson: {
        type: 'lesson', title: '3D Geometry: Surface Area & Volume', subject: 'math', emoji: '📦',
        content: `Moving from 2D to 3D is a big jump in 7th grade. Surface area and volume are essential.

**Surface Area** = total area of ALL outer faces of a 3D shape (like wrapping paper)
**Volume** = total space inside a 3D shape (like how much water it holds)

**Rectangular Prism (box):**
- SA = 2(lw + lh + wh)
- V = l × w × h

**Cube:**
- SA = 6s² (6 equal faces)
- V = s³

**Cylinder:**
- SA = 2πr² + 2πrh (two circles + rectangle wrapped around)
- V = πr²h

**Triangular Prism:**
- SA = (perimeter of triangle × h) + 2(triangle area)
- V = triangle area × h

**Example (Minecraft dirt cube, 3×3×3):**
- SA = 6(3²) = 6(9) = 54 square units
- V = 3³ = 27 cubic units

**Real world:** Packaging design, construction, filling a pool, painting a house — surface area and volume are everywhere.

**Key distinction:** SA is measured in square units (cm²), Volume in cubic units (cm³).`,
      },
      quiz: {
        type: 'quiz', title: 'Surface Area & Volume Quiz', subject: 'math',
        questions: [
          { q: 'What is the volume of a box that is 4cm × 5cm × 3cm?', options: ['24 cm³', '60 cm³', '47 cm³', '94 cm³'], answer: 1, explanation: 'V = l × w × h = 4 × 5 × 3 = 60 cm³.' },
          { q: 'What is the surface area of a cube with side 4cm?', options: ['16 cm²', '64 cm²', '96 cm²', '24 cm²'], answer: 2, explanation: 'SA = 6s² = 6 × 4² = 6 × 16 = 96 cm².' },
          { q: 'Surface area is measured in ___ units, volume in ___ units.', options: ['Cubic, square', 'Square, cubic', 'Linear, square', 'Square, linear'], answer: 1, explanation: 'Area (including surface area) = square units (cm²). Volume = cubic units (cm³).' },
          { q: 'A cylinder has radius 3cm and height 5cm. What is its volume? (π ≈ 3.14)', options: ['94.2 cm³', '141.3 cm³', '47.1 cm³', '188.4 cm³'], answer: 1, explanation: 'V = πr²h = 3.14 × 9 × 5 = 141.3 cm³.' },
          { q: 'You want to paint all 6 faces of a box that is 2m × 3m × 4m. What is the total area to paint?', options: ['24 m²', '52 m²', '26 m²', '48 m²'], answer: 1, explanation: 'SA = 2(lw + lh + wh) = 2(2×3 + 2×4 + 3×4) = 2(6+8+12) = 2(26) = 52 m².' },
        ],
      },
      wordOfDay: {
        type: 'wordOfDay', word: 'Dimension', pronunciation: 'dih-MEN-shun',
        definition: 'A measurable extent such as length, width, or height. 2D shapes have two dimensions; 3D shapes have three.',
        exampleSentence: 'A flat square has two dimensions, but a cube has three dimensions — length, width, and height.',
        teluguWord: 'కొలత', teluguRomanized: 'Kolata', teluguMeaning: 'Measurement / Dimension',
      },
      slot4: {
        type: 'teachItBack', title: 'Teach It Back: Real World 3D Math!', emoji: '📦', isTeachItBack: true,
        prompt: `Find a box in your house (cereal box, shoe box, anything rectangular).\n\n1. Measure its length, width, and height with a ruler (in cm or inches)\n2. Calculate the surface area (paint area)\n3. Calculate the volume (filling space)\n4. Show your work to Thatha or a parent\n\nBonus question to ask Thatha: "When would you need surface area vs volume in real life?"`,
        followUp: 'What were your box\'s dimensions? What were the SA and Volume? What real-world uses did Thatha mention?',
      },
      challenge: {
        type: 'challenge', title: 'Thatha Challenge 🧮', isThatha: true,
        problem: `Abhi is designing a Minecraft storage room.\n\n**Part A:** The room is a rectangular prism: 8 blocks wide, 6 blocks deep, 4 blocks tall. What is the volume (total blocks inside)?\n\n**Part B:** He wants to line ALL the interior walls, floor, and ceiling with stone. How many stone blocks does he need (surface area)?\n\n**Part C (Thatha level):** He wants to place a cylindrical water tank (radius 2 blocks, height 3 blocks) inside. What volume of the room does the tank take up? What percentage of the room's total volume does the tank occupy?`,
        hint: 'For Part C: find cylinder volume, then divide by room volume and multiply by 100.',
        answer: 'Part A: 8×6×4 = 192 cubic blocks. Part B: 2(8×6 + 8×4 + 6×4) = 2(48+32+24) = 208 surface blocks. Part C: π×4×3 ≈ 37.7 cubic blocks. 37.7/192 × 100 ≈ 19.6% of room.',
      },
      telugu: { type: 'telugu', phrase: 'ఈ పెట్టె చాలా పెద్దది', romanized: 'Ee pette chaalaa peddadi', english: 'This box is very big', context: 'Say this while measuring boxes for today\'s math! 📦' },
    },
  },
];
