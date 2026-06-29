// JJK-themed levels for Mahoraga
export const LEVELS = [
  { level: 1,  title: 'Cursed Beginner',          emoji: '🌱', xpRequired: 0    },
  { level: 2,  title: 'Student Sorcerer',          emoji: '📚', xpRequired: 100  },
  { level: 3,  title: 'Grade 3 Sorcerer',          emoji: '⚡', xpRequired: 250  },
  { level: 4,  title: 'Grade 2 Sorcerer',          emoji: '🔥', xpRequired: 450  },
  { level: 5,  title: 'Semi-Grade 1',              emoji: '🌊', xpRequired: 700  },
  { level: 6,  title: 'Grade 1 Sorcerer',          emoji: '💫', xpRequired: 1000 },
  { level: 7,  title: 'Special Grade Sorcerer',    emoji: '🏯', xpRequired: 1350 },
  { level: 8,  title: 'Jujutsu Higher Ups',        emoji: '👁️', xpRequired: 1750 },
  { level: 9,  title: 'Divine General Mahoraga',   emoji: '♾️', xpRequired: 2200 },
];

export const BADGES = [
  { id: 'math_explorer',   subject: 'math',    emoji: '🔢', title: 'Math Sorcerer',     desc: 'Complete 10 Math days',           daysRequired: 10 },
  { id: 'history_seeker',  subject: 'history', emoji: '🏛️', title: 'History Keeper',    desc: 'Complete 10 History days',        daysRequired: 10 },
  { id: 'science_nerd',    subject: 'science', emoji: '🔬', title: 'Domain Scholar',    desc: 'Complete 10 Science days',        daysRequired: 10 },
  { id: 'word_wizard',     subject: 'ela',     emoji: '📖', title: 'Cursed Wordsmith',  desc: 'Complete 6 ELA days',             daysRequired: 6  },
  { id: 'telugu_speaker',  subject: 'telugu',  emoji: '🗣️', title: 'Telugu Incanter',  desc: 'Complete 20 Telugu Incantations', daysRequired: 20 },
  { id: 'explorer',        subject: 'mixed',   emoji: '🔭', title: 'Domain Expander',  desc: 'Complete 5 Domain Expansions',    daysRequired: 5  },
  { id: 'teacher',         subject: 'mixed',   emoji: '🔄', title: 'Reverse Technician', desc: 'Complete 5 Reverse Cursed Techniques', daysRequired: 5 },
  { id: 'summer_trophy',   subject: 'mixed',   emoji: '🏆', title: 'Summer Trophy',    desc: 'Complete 35 days',                daysRequired: 35 },
];

// XP values matching JJK activity names
export const XP_VALUES = {
  lesson1:      10,  // Cursed Technique
  lesson2:      10,  // Cursed Technique II
  lesson3:      10,  // Cursed Technique III
  quiz:         15,  // Binding Vow
  brainTeaser:  10,  // Brain Teaser
  goExplore:    20,  // Domain Expansion
  teachItBack:  20,  // Reverse Cursed Technique
  challenge:    15,  // Special Grade Mission
  telugu:       10,  // Telugu Incantation
  teluguBonus:   5,  // Telugu bonus
};

export const JJK_NAMES = {
  lesson1:     'Cursed Technique',
  lesson2:     'Cursed Technique II',
  lesson3:     'Cursed Technique III',
  quiz:        'Binding Vow',
  brainTeaser: 'Brain Teaser',
  goExplore:   'Domain Expansion',
  teachItBack: 'Reverse Cursed Technique',
  challenge:   'Special Grade Mission',
  telugu:      'Telugu Incantation',
};

export const ACTIVITY_EMOJIS = {
  lesson1:     '📖',
  lesson2:     '📖',
  lesson3:     '📖',
  quiz:        '❓',
  brainTeaser: '🧩',
  goExplore:   '🔭',
  teachItBack: '👨‍🏫',
  challenge:   '⚔️',
  telugu:      '🗣️',
};

// Ordered list for display
export const ACTIVITY_ORDER = [
  'lesson1', 'lesson2', 'lesson3',
  'quiz', 'brainTeaser', 'goExplore',
  'teachItBack', 'challenge', 'telugu',
];

export const getLevelForXP = (xp) => {
  let current = LEVELS[0];
  for (const level of LEVELS) {
    if (xp >= level.xpRequired) current = level;
    else break;
  }
  return current;
};

export const getNextLevel = (xp) => {
  for (const level of LEVELS) {
    if (xp < level.xpRequired) return level;
  }
  return null;
};
