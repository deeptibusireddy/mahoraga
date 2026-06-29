// Demon Slayer visuals + JJK terminology — LOCKED FINAL DESIGN
// From session 2026-06-14-04-32-58, line 8754 mockup approved

export const colors = {
  // ── Core backgrounds (Demon Slayer midnight navy) ──
  background:  '#060C1A',   // deepest background
  surface:     '#07101A',   // slight lift
  card:        '#071828',   // card surface
  cardLight:   '#0A2540',   // elevated card
  cardAlt:     '#0A0F1A',   // darker variant

  // ── Primary accent: Water Breathing teal/cyan ──
  teal:        '#00B4D8',
  tealDark:    '#0077B6',
  tealDeep:    '#023E6A',
  tealMuted:   'rgba(0,180,216,0.12)',

  // ── Active/action state: Sukuna crimson ──
  crimson:     '#E63946',
  crimsonDark: '#2D0A0A',
  crimsonMuted:'rgba(230,57,70,0.12)',

  // ── Gold: Cursed XP ──
  gold:        '#FFD700',
  goldMuted:   'rgba(255,215,0,0.35)',

  // ── Completed state: deep teal ──
  success:     '#0077B6',
  successBg:   '#0A2540',
  successBorder:'#0A3050',

  // ── Legacy aliases (keep for backwards compat) ──
  green:       '#00B4D8',
  greenLight:  '#48CAE4',
  greenDark:   '#0077B6',
  greenMuted:  'rgba(0,119,182,0.15)',
  amber:       '#F4A261',
  amberLight:  '#F9C784',
  amberDark:   '#78350F',

  // ── Subject colors ──
  math:        '#5B8FD4',
  history:     '#C17B3A',
  science:     '#4AB88A',
  ela:         '#9B6FD4',
  telugu:      '#E07A5F',
  mixed:       '#00B4D8',

  // ── Text ──
  textPrimary:   '#FFFFFF',
  textSecondary: 'rgba(255,255,255,0.88)',
  textMuted:     'rgba(0,180,216,0.7)',

  // ── State ──
  error:       '#E63946',
  border:      '#0A3050',
  borderLight: '#0d1f35',
};

export const subjectColor = (subject) => ({
  math:    colors.math,
  history: colors.history,
  science: colors.science,
  ela:     colors.ela,
  telugu:  colors.telugu,
  mixed:   colors.mixed,
})[subject] || colors.teal;
