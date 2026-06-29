import React, { useState, useCallback, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Animated, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { getLevelForXP, getNextLevel } from '../theme/levels';
import { getXP, getCompletedDays, getCompletedActivities } from '../utils/storage';
import { allDays } from '../data/allDays';

const { width: SW } = Dimensions.get('window');

// Snaking x positions — left, center-left, center-right, right, then back
// Each node gets a pixel x position from left edge
const NODE_SIZE = 68;
const NODE_SIZE_ACTIVE = 84;
const WRAP_WIDTH = 120; // wrapper wider than node so text doesn't clip

// 3-column snake that stays safely within screen bounds
const COL_LEFT   = 20;
const COL_CENTER = SW / 2 - WRAP_WIDTH / 2;
const COL_RIGHT  = SW - WRAP_WIDTH - 20;

// Snake pattern: center → right → right → center → left → left → repeat
const SNAKE_X = [
  COL_CENTER,  // 0
  COL_RIGHT,   // 1
  COL_RIGHT,   // 2
  COL_CENTER,  // 3
  COL_LEFT,    // 4
  COL_LEFT,    // 5
  COL_CENTER,  // 6
  COL_RIGHT,   // 7
];

const ROW_HEIGHT = 150; // vertical space between node centers

const SUBJECT_ICONS = {
  math: '🔢', science: '🔬', history: '🏛️',
  ela: '📖', telugu: '🗣️', mixed: '⚡',
};

// ── Sorcerer mascot ─────────────────────────────────────────────────────────
function SorcererMascot() {
  const bounceAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: -6, duration: 800, useNativeDriver: true }),
        Animated.timing(bounceAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[mascot.root, { transform: [{ translateY: bounceAnim }] }]}>
      {/* Body */}
      <View style={mascot.body}>
        {/* Hood */}
        <View style={mascot.hood} />
        {/* Face */}
        <View style={mascot.face}>
          <View style={mascot.hair} />
          <View style={mascot.eyeRow}>
            <View style={mascot.eye} />
            <View style={mascot.eye} />
          </View>
          <View style={mascot.mouth} />
        </View>
      </View>
      {/* Cursed energy glow */}
      <View style={mascot.glow} />
    </Animated.View>
  );
}

const mascot = StyleSheet.create({
  root: { width: 36, height: 48, alignItems: 'center', position: 'relative' },
  body: { width: 26, height: 30, borderRadius: 6, backgroundColor: '#0D2A4A', alignItems: 'center' },
  hood: { width: 34, height: 18, borderRadius: 17, backgroundColor: '#0D2A4A', marginTop: -8 },
  face: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#D4956A', position: 'absolute', top: 2, alignItems: 'center' },
  hair: { width: 22, height: 10, borderRadius: 11, backgroundColor: '#1A1A2E', position: 'absolute', top: -3 },
  eyeRow: { flexDirection: 'row', gap: 5, marginTop: 7 },
  eye: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#1A1A2E' },
  mouth: { width: 8, height: 2, borderRadius: 1, backgroundColor: '#C07850', marginTop: 4 },
  glow: { position: 'absolute', bottom: -4, width: 40, height: 16, borderRadius: 20, backgroundColor: 'rgba(0,180,216,0.25)' },
});

// ── Path node ────────────────────────────────────────────────────────────────
function PathNode({ day, xPos, yPos, isCompleted, isActive, isLocked, isMilestone, completedCount, totalActivities, onPress, pulseAnim }) {
  const size = isActive ? NODE_SIZE_ACTIVE : NODE_SIZE;

  const bgColor = isCompleted ? '#0A2540'
    : isActive ? '#023E6A'
    : isMilestone ? '#100818'
    : '#0A0F1A';

  const borderColor = isCompleted ? colors.tealDark
    : isActive ? colors.teal
    : isMilestone ? colors.crimson
    : 'rgba(255,255,255,0.1)';

  return (
    <View style={[node.wrapper, { left: xPos - 26, top: yPos }]}>
      {/* Sorcerer above active node */}
      {isActive && (
        <View style={node.mascotWrap}>
          <SorcererMascot />
        </View>
      )}

      <TouchableOpacity
        onPress={() => !isLocked && onPress(day)}
        activeOpacity={isLocked ? 1 : 0.8}
      >
        {/* Glow ring behind active node */}
        {isActive && (
          <Animated.View style={[
            node.glowRing,
            {
              width: size + 20, height: size + 20,
              borderRadius: (size + 20) / 2,
              left: -10, top: -10,
              transform: [{ scale: pulseAnim }],
            }
          ]} />
        )}

        {/* The circle node */}
        <View style={[
          node.circle,
          {
            width: size, height: size, borderRadius: size / 2,
            backgroundColor: bgColor,
            borderColor,
            borderWidth: isActive ? 3.5 : isMilestone ? 2.5 : 2,
            opacity: isLocked ? 0.35 : 1,
          },
          isActive && {
            shadowColor: colors.teal,
            shadowOpacity: 0.6,
            shadowRadius: 20,
            shadowOffset: { width: 0, height: 4 },
            elevation: 14,
          },
        ]}>
          <Text style={{ fontSize: isActive ? 34 : 26 }}>
            {isCompleted ? '✅' : isLocked ? '🔒' : isMilestone ? '💎' : (SUBJECT_ICONS[day.subject] || '⚡')}
          </Text>
        </View>

        {/* Day label */}
        <Text style={[
          node.dayLabel,
          isActive && { color: colors.teal, fontWeight: '900', fontSize: 14 },
          isCompleted && { color: colors.tealDark },
          isLocked && { opacity: 0.4 },
        ]}>
          {isMilestone ? `DAY ${day.id} ★` : `DAY ${day.id}`}
        </Text>

        {/* Progress pips on active */}
        {isActive && totalActivities > 0 && (
          <View style={node.pipsRow}>
            {Array.from({ length: Math.min(totalActivities, 9) }).map((_, i) => (
              <View key={i} style={[node.pip, i < completedCount && node.pipDone]} />
            ))}
          </View>
        )}

        {/* START / CONTINUE button */}
        {isActive && (
          <TouchableOpacity style={node.startBtn} onPress={() => onPress(day)}>
            <Text style={node.startBtnText}>
              {completedCount > 0 ? 'CONTINUE →' : 'START →'}
            </Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}

const node = StyleSheet.create({
  wrapper: { position: 'absolute', alignItems: 'center', width: 120 },
  mascotWrap: { alignItems: 'center', marginBottom: 4 },
  glowRing: {
    position: 'absolute',
    backgroundColor: 'rgba(0,180,216,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(0,180,216,0.15)',
  },
  circle: { alignItems: 'center', justifyContent: 'center' },
  dayLabel: {
    fontSize: 13, color: 'rgba(255,255,255,0.7)',
    fontWeight: '700', letterSpacing: 0.5, marginTop: 6, textAlign: 'center',
  },
  pipsRow: { flexDirection: 'row', gap: 3, marginTop: 5, flexWrap: 'wrap', justifyContent: 'center', maxWidth: 100 },
  pip: { width: 9, height: 4, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.1)' },
  pipDone: { backgroundColor: colors.tealDark },
  startBtn: {
    marginTop: 10, backgroundColor: colors.tealDark,
    borderRadius: 20, paddingHorizontal: 22, paddingVertical: 11,
    shadowColor: colors.teal, shadowOpacity: 0.5, shadowRadius: 10, elevation: 8,
  },
  startBtnText: { color: '#fff', fontWeight: '900', fontSize: 14, letterSpacing: 0.5 },
});

// ── Connector: angled line between nodes ──────────────────────────────────────
// React Native doesn't support transformOrigin, so we translate to rotate around start point
function Connector({ x1, y1, x2, y2, isCompleted }) {
  const fromX = x1 + NODE_SIZE / 2;
  const fromY = y1 + NODE_SIZE;
  const toX = x2 + NODE_SIZE / 2;
  const toY = y2;

  const dx = toX - fromX;
  const dy = toY - fromY;
  const len = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // Rotate around the start point: translate by half the length, rotate, translate back
  return (
    <View style={{
      position: 'absolute',
      left: fromX,
      top: fromY - 1.5,
      width: len,
      height: 3,
      borderRadius: 2,
      backgroundColor: isCompleted ? colors.tealDark : 'rgba(255,255,255,0.07)',
      transform: [
        { translateX: len / 2 },
        { rotate: `${angle}deg` },
        { translateX: -len / 2 },
      ],
    }} />
  );
}

// ── Main screen ──────────────────────────────────────────────────────────────
export default function HomeScreen({ navigation }) {
  const [xp, setXp] = useState(0);
  const [completedDayIds, setCompletedDayIds] = useState([]);
  const [completedActivities, setCompletedActivities] = useState({});
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useFocusEffect(useCallback(() => {
    load();
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.06, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, []));

  const load = async () => {
    const [x, cd, ca] = await Promise.all([getXP(), getCompletedDays(), getCompletedActivities()]);
    setXp(x);
    setCompletedDayIds(cd.map(d => d.id));
    setCompletedActivities(ca);
  };

  const level = getLevelForXP(xp);
  const nextLevel = getNextLevel ? getNextLevel(xp) : null;
  const gradePct = nextLevel
    ? Math.min(100, ((xp - level.xpRequired) / (nextLevel.xpRequired - level.xpRequired)) * 100)
    : 100;

  const activeIndex = (() => {
    const i = allDays.findIndex(day => {
      const acts = Object.keys(day.activities);
      return !acts.every(a => completedActivities[`${day.id}_${a}`]);
    });
    return i === -1 ? allDays.length - 1 : i;
  })();

  const handleNodePress = (day) => navigation.navigate('Today', { dayId: day.id });

  // Compute positions - active node needs extra space for button/pips
  const ACTIVE_EXTRA = 100; // extra px after active node
  const nodePositions = allDays.map((_, i) => {
    const base = i * ROW_HEIGHT;
    const extraBefore = i > activeIndex ? ACTIVE_EXTRA : 0;
    return {
      x: SNAKE_X[i % SNAKE_X.length],
      y: base + extraBefore,
    };
  });

  // Total canvas height
  const canvasHeight = allDays.length * ROW_HEIGHT + ACTIVE_EXTRA + 200;

  return (
    <SafeAreaView style={s.screen}>
      {/* Header */}
      <View style={s.header}>
        <View>
          <Text style={s.kanji}>呪術訓練 · CURSED TRAINING</Text>
          <Text style={s.title}>Mahoraga</Text>
          <Text style={s.sub}>Abhi's Domain Expansion</Text>
        </View>
        <View style={s.xpBox}>
          <Text style={s.xpNum}>{xp} ⭐</Text>
          <Text style={s.xpLbl}>CURSED XP</Text>
        </View>
      </View>

      {/* Grade bar */}
      <View style={s.gradeBar}>
        <View style={s.gradeTop}>
          <Text style={s.gradeTitle}>{level.emoji} {level.title}</Text>
          <Text style={s.gradeRight}>
            {nextLevel ? `${nextLevel.xpRequired - xp} XP → ${nextLevel.title}` : 'MAX ♾️'}
          </Text>
        </View>
        <View style={s.gradeTrack}>
          <View style={[s.gradeFill, { width: `${gradePct}%` }]} />
        </View>
      </View>

      {/* Path label */}
      <Text style={s.pathLabel}>MISSION PATH</Text>

      {/* Scrollable path canvas */}
      <ScrollView
        style={s.scroll}
        contentContainerStyle={{ height: canvasHeight }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, position: 'relative' }}>
          {/* Connectors drawn first (behind nodes) */}
          {allDays.map((day, i) => {
            if (i === 0) return null;
            const prev = nodePositions[i - 1];
            const curr = nodePositions[i];
            const isCompleted = completedDayIds.includes(day.id);
            return (
              <Connector
                key={`conn-${i}`}
                x1={prev.x} y1={prev.y}
                x2={curr.x} y2={curr.y}
                isCompleted={isCompleted}
              />
            );
          })}

          {/* Nodes */}
          {allDays.map((day, i) => {
            const isCompleted = completedDayIds.includes(day.id);
            const isActive = i === activeIndex;
            const isLocked = i > activeIndex;
            const isMilestone = !!day.isMilestone;
            const actKeys = Object.keys(day.activities);
            const completedCount = actKeys.filter(k => completedActivities[`${day.id}_${k}`]).length;

            return (
              <PathNode
                key={day.id}
                day={day}
                xPos={nodePositions[i].x}
                yPos={nodePositions[i].y}
                isCompleted={isCompleted}
                isActive={isActive}
                isLocked={isLocked}
                isMilestone={isMilestone}
                completedCount={completedCount}
                totalActivities={actKeys.length}
                onPress={handleNodePress}
                pulseAnim={pulseAnim}
              />
            );
          })}

          {/* End trophy */}
          <View style={[s.trophy, { top: canvasHeight - 120 }]}>
            <Text style={s.trophyEmoji}>🏆</Text>
            <Text style={s.trophyText}>7th Grade Ready</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#060C1A' },

  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',
    paddingHorizontal: 20, paddingTop: 8, paddingBottom: 12,
    backgroundColor: '#020818',
    borderBottomWidth: 1, borderBottomColor: 'rgba(0,119,182,0.2)',
  },
  kanji: { fontSize: 11, color: colors.teal, fontWeight: '700', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 },
  title: { fontSize: 28, fontWeight: '900', color: '#FFFFFF', letterSpacing: -1, lineHeight: 28 },
  sub: { fontSize: 12, color: 'rgba(0,180,216,0.75)', marginTop: 3 },
  xpBox: { alignItems: 'flex-end' },
  xpNum: { fontSize: 22, fontWeight: '900', color: '#FFD700', lineHeight: 22 },
  xpLbl: { fontSize: 10, color: 'rgba(255,215,0,0.7)', letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 },

  gradeBar: {
    marginHorizontal: 16, marginTop: 10, marginBottom: 4,
    backgroundColor: 'rgba(0,180,216,0.07)', borderRadius: 12,
    padding: 10, paddingHorizontal: 14,
    borderWidth: 1, borderColor: 'rgba(0,180,216,0.2)',
  },
  gradeTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 8 },
  gradeTitle: { fontSize: 13, fontWeight: '800', color: '#FFFFFF' },
  gradeRight: { fontSize: 12, color: 'rgba(0,180,216,0.75)', flexShrink: 1 },
  gradeTrack: { backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 999, height: 5, overflow: 'hidden' },
  gradeFill: { height: 5, borderRadius: 999, backgroundColor: colors.teal },

  pathLabel: {
    fontSize: 11, color: 'rgba(0,180,216,0.65)', fontWeight: '700',
    letterSpacing: 2, textTransform: 'uppercase', textAlign: 'center',
    marginTop: 12, marginBottom: 8,
  },

  scroll: { flex: 1 },

  trophy: { position: 'absolute', alignSelf: 'center', alignItems: 'center', left: 0, right: 0 },
  trophyEmoji: { fontSize: 40 },
  trophyText: { color: 'rgba(255,215,0,0.65)', fontSize: 12, fontWeight: '700', letterSpacing: 1, marginTop: 4 },
});
