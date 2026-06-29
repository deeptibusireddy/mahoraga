import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  XP:                    'mah_xp',
  COMPLETED_DAYS:        'mah_completed_days',
  COMPLETED_ACTIVITIES:  'mah_completed_activities',
  FLAGS:                 'mah_flags',
  GO_EXPLORE_RESPONSES:  'mah_go_explore',
  TEACH_RESPONSES:       'mah_teach',
  REWARD_TOKENS:         'mah_reward_tokens',
  REWARD_MENU:           'mah_reward_menu',
  REWARD_REQUESTS:       'mah_reward_requests',
  TELUGU_COUNT:          'mah_telugu_count',
  EXPLORE_COUNT:         'mah_explore_count',
  TEACH_COUNT:           'mah_teach_count',
  SUBJECT_DAYS:          'mah_subject_days',
};

// ─── XP ───────────────────────────────────────────────────────────────────────
export async function getXP() {
  try { return parseInt((await AsyncStorage.getItem(KEYS.XP)) || '0', 10); }
  catch { return 0; }
}

export async function addXP(amount) {
  try {
    const prev = await getXP();
    const prevTokens = Math.floor(prev / 100);
    const newXP = prev + amount;
    const newTokens = Math.floor(newXP / 100);
    await AsyncStorage.setItem(KEYS.XP, String(newXP));
    const tokensEarned = newTokens - prevTokens;
    if (tokensEarned > 0) await addRewardTokens(tokensEarned);
    return { newXP, tokensEarned };
  } catch { return { newXP: 0, tokensEarned: 0 }; }
}

// ─── Completed Days ───────────────────────────────────────────────────────────
export async function getCompletedDays() {
  try { return JSON.parse((await AsyncStorage.getItem(KEYS.COMPLETED_DAYS)) || '[]'); }
  catch { return []; }
}

export async function markDayComplete(dayId, subject) {
  try {
    const days = await getCompletedDays();
    if (!days.find(d => d.id === dayId)) {
      days.push({ id: dayId, subject, completedAt: new Date().toISOString() });
      await AsyncStorage.setItem(KEYS.COMPLETED_DAYS, JSON.stringify(days));
      await incrementSubjectDays(subject);
    }
  } catch {}
}

// ─── Completed Activities ─────────────────────────────────────────────────────
export async function getCompletedActivities() {
  try { return JSON.parse((await AsyncStorage.getItem(KEYS.COMPLETED_ACTIVITIES)) || '{}'); }
  catch { return {}; }
}

export async function markActivityComplete(dayId, activityKey) {
  try {
    const all = await getCompletedActivities();
    all[`${dayId}_${activityKey}`] = true;
    await AsyncStorage.setItem(KEYS.COMPLETED_ACTIVITIES, JSON.stringify(all));
    // Increment counters
    if (activityKey === 'telugu')      await incrementCount(KEYS.TELUGU_COUNT);
    if (activityKey === 'goExplore')   await incrementCount(KEYS.EXPLORE_COUNT);
    if (activityKey === 'teachItBack') await incrementCount(KEYS.TEACH_COUNT);
  } catch {}
}

async function incrementCount(key) {
  try {
    const val = parseInt((await AsyncStorage.getItem(key)) || '0', 10);
    await AsyncStorage.setItem(key, String(val + 1));
  } catch {}
}

// ─── Subject Days ─────────────────────────────────────────────────────────────
export async function getSubjectDays() {
  try { return JSON.parse((await AsyncStorage.getItem(KEYS.SUBJECT_DAYS)) || '{}'); }
  catch { return {}; }
}

async function incrementSubjectDays(subject) {
  try {
    const days = await getSubjectDays();
    days[subject] = (days[subject] || 0) + 1;
    await AsyncStorage.setItem(KEYS.SUBJECT_DAYS, JSON.stringify(days));
  } catch {}
}

// ─── Flags ────────────────────────────────────────────────────────────────────
export async function getFlags() {
  try { return JSON.parse((await AsyncStorage.getItem(KEYS.FLAGS)) || '[]'); }
  catch { return []; }
}

export async function addFlag(flagData) {
  try {
    const flags = await getFlags();
    flags.push({ ...flagData, flaggedAt: new Date().toISOString(), resolved: false });
    await AsyncStorage.setItem(KEYS.FLAGS, JSON.stringify(flags));
  } catch {}
}

export async function resolveFlag(index) {
  try {
    const flags = await getFlags();
    if (flags[index]) { flags[index].resolved = true; flags[index].resolvedAt = new Date().toISOString(); }
    await AsyncStorage.setItem(KEYS.FLAGS, JSON.stringify(flags));
  } catch {}
}

// ─── Go Explore Responses ─────────────────────────────────────────────────────
export async function getGoExploreResponses() {
  try { return JSON.parse((await AsyncStorage.getItem(KEYS.GO_EXPLORE_RESPONSES)) || '{}'); }
  catch { return {}; }
}

export async function saveGoExploreResponse(dayId, response) {
  try {
    const all = await getGoExploreResponses();
    all[String(dayId)] = { response, savedAt: new Date().toISOString() };
    await AsyncStorage.setItem(KEYS.GO_EXPLORE_RESPONSES, JSON.stringify(all));
  } catch {}
}

// ─── Teach It Back Responses ──────────────────────────────────────────────────
export async function getTeachResponses() {
  try { return JSON.parse((await AsyncStorage.getItem(KEYS.TEACH_RESPONSES)) || '{}'); }
  catch { return {}; }
}

export async function saveTeachResponse(dayId, response) {
  try {
    const all = await getTeachResponses();
    all[String(dayId)] = { response, savedAt: new Date().toISOString() };
    await AsyncStorage.setItem(KEYS.TEACH_RESPONSES, JSON.stringify(all));
  } catch {}
}

// ─── Reward Tokens ────────────────────────────────────────────────────────────
export async function getRewardTokens() {
  try { return parseInt((await AsyncStorage.getItem(KEYS.REWARD_TOKENS)) || '0', 10); }
  catch { return 0; }
}

async function addRewardTokens(amount) {
  try {
    const prev = await getRewardTokens();
    await AsyncStorage.setItem(KEYS.REWARD_TOKENS, String(prev + amount));
  } catch {}
}

// ─── Reward Menu ──────────────────────────────────────────────────────────────
const DEFAULT_REWARD_MENU = [
  { id: 'grocery_item',  emoji: '🛒', title: 'Item of your choice from the grocery store', tokens: 1 },
  { id: 'audiobook',    emoji: '🎧', title: 'Audiobook of your choice',                    tokens: 2 },
  { id: 'ingame',       emoji: '🎮', title: '$5 on an in-game item',                       tokens: 3 },
  { id: 'book',         emoji: '📖', title: 'Physical book of your choice',                tokens: 4 },
  { id: 'amazon',       emoji: '🎁', title: '$10 Amazon gift card',                        tokens: 5 },
];

export async function getRewardMenu() {
  try {
    const stored = await AsyncStorage.getItem(KEYS.REWARD_MENU);
    return stored ? JSON.parse(stored) : DEFAULT_REWARD_MENU;
  } catch { return DEFAULT_REWARD_MENU; }
}

// ─── Reward Requests ──────────────────────────────────────────────────────────
export async function getRewardRequests() {
  try { return JSON.parse((await AsyncStorage.getItem(KEYS.REWARD_REQUESTS)) || '[]'); }
  catch { return []; }
}

export async function requestReward(reward) {
  try {
    const tokens = await getRewardTokens();
    if (tokens < reward.tokens) return false;
    await AsyncStorage.setItem(KEYS.REWARD_TOKENS, String(tokens - reward.tokens));
    const requests = await getRewardRequests();
    requests.push({ ...reward, requestedAt: new Date().toISOString(), status: 'pending' });
    await AsyncStorage.setItem(KEYS.REWARD_REQUESTS, JSON.stringify(requests));
    return true;
  } catch { return false; }
}

export async function approveRewardRequest(index) {
  try {
    const requests = await getRewardRequests();
    if (requests[index]) requests[index].status = 'approved';
    await AsyncStorage.setItem(KEYS.REWARD_REQUESTS, JSON.stringify(requests));
  } catch {}
}

// ─── getAllStats (used by MeScreen & ParentScreen) ────────────────────────────
export async function getAllStats() {
  try {
    const [xp, completedDays, subjectDays, flags, tokens, teluguCount, exploreCount, teachCount] =
      await Promise.all([
        getXP(),
        getCompletedDays(),
        getSubjectDays(),
        getFlags(),
        getRewardTokens(),
        AsyncStorage.getItem(KEYS.TELUGU_COUNT).then(v => parseInt(v || '0', 10)).catch(() => 0),
        AsyncStorage.getItem(KEYS.EXPLORE_COUNT).then(v => parseInt(v || '0', 10)).catch(() => 0),
        AsyncStorage.getItem(KEYS.TEACH_COUNT).then(v => parseInt(v || '0', 10)).catch(() => 0),
      ]);
    return { xp, completedDays, subjectDays, flags, tokens, teluguCount, exploreCount, teachCount };
  } catch {
    return { xp: 0, completedDays: [], subjectDays: {}, flags: [], tokens: 0, teluguCount: 0, exploreCount: 0, teachCount: 0 };
  }
}

// ─── DEV: Reset all progress ──────────────────────────────────────────────────
export async function resetAllProgress() {
  try {
    await AsyncStorage.multiRemove(Object.values(KEYS));
    // Also clear lesson image cache
    const allKeys = await AsyncStorage.getAllKeys();
    const cacheKeys = allKeys.filter(k => k.startsWith('mah_') || k.startsWith('mah_img_') || k.startsWith('mah_visual_'));
    if (cacheKeys.length > 0) await AsyncStorage.multiRemove(cacheKeys);
    return true;
  } catch {
    return false;
  }
}
