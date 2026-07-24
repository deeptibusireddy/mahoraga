import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { getLevelForXP } from '../theme/levels';
import { getAllStats, getGoExploreResponses, getTeachResponses, getRewardRequests, approveRewardRequest, resolveFlag, resetAllProgress, markActivityComplete, markDayComplete, addXP } from '../utils/storage';
import { allDays } from '../data/allDays';

const PARENT_PIN = process.env.EXPO_PUBLIC_PARENT_PIN || '1234';

function PINScreen({ onUnlock }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleDigit = (d) => {
    if (d === '⌫') { setPin(p => p.slice(0, -1)); return; }
    const next = pin + d;
    setPin(next);
    setError(false);
    if (next.length === 4) {
      if (next === PARENT_PIN) { onUnlock(); setPin(''); }
      else { setError(true); setTimeout(() => { setPin(''); setError(false); }, 600); }
    }
  };

  const digits = [['1','2','3'],['4','5','6'],['7','8','9'],['','0','⌫']];

  return (
    <View style={styles.pinContainer}>
      <Text style={styles.pinTitle}>Sorcerer HQ</Text>
      <Text style={styles.pinSubtitle}>Enter your PIN</Text>
      <View style={styles.pinDots}>
        {[0,1,2,3].map(i => (
          <View key={i} style={[styles.pinDot, pin.length > i && styles.pinDotFilled, error && styles.pinDotError]} />
        ))}
      </View>
      {digits.map((row, r) => (
        <View key={r} style={styles.pinRow}>
          {row.map((d, c) => (
            <TouchableOpacity key={c} style={[styles.pinKey, d === '' && styles.pinKeyHidden]} onPress={() => d !== '' && handleDigit(d)}>
              <Text style={styles.pinKeyText}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

export default function ParentScreen() {
  const [unlocked, setUnlocked] = useState(false);
  const [stats, setStats] = useState(null);
  const [goExploreResponses, setGoExploreResponses] = useState({});
  const [teachResponses, setTeachResponses] = useState({});
  const [rewardRequests, setRewardRequests] = useState([]);
  const [tab, setTab] = useState('overview');

  useFocusEffect(useCallback(() => { if (unlocked) load(); }, [unlocked]));

  const load = async () => {
    const [s, ge, tr, rr] = await Promise.all([getAllStats(), getGoExploreResponses(), getTeachResponses(), getRewardRequests()]);
    setStats(s);
    setGoExploreResponses(ge);
    setTeachResponses(tr);
    setRewardRequests(rr);
  };

  if (!unlocked) {
    return (
      <SafeAreaView style={styles.container}>
        <PINScreen onUnlock={() => setUnlocked(true)} />
      </SafeAreaView>
    );
  }

  if (!stats) return <SafeAreaView style={styles.container}><Text style={styles.loading}>Loading...</Text></SafeAreaView>;

  const level = getLevelForXP(stats.xp);
  const openFlags = stats.flags.filter(f => !f.resolved);
  const pendingRewards = rewardRequests.filter(r => r.status === 'pending');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'responses', label: 'Responses' },
    { id: 'flags', label: `Flags${openFlags.length > 0 ? ` (${openFlags.length})` : ''}` },
    { id: 'rewards', label: `Rewards${pendingRewards.length > 0 ? ` (${pendingRewards.length})` : ''}` },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>👩‍👦 Sorcerer HQ</Text>
        <TouchableOpacity onPress={() => setUnlocked(false)}>
          <Text style={styles.lockBtn}>🔒 Lock</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsScroll}>
        <View style={styles.tabsRow}>
          {tabs.map(t => (
            <TouchableOpacity key={t.id} style={[styles.tab, tab === t.id && styles.tabActive]} onPress={() => setTab(t.id)}>
              <Text style={[styles.tabText, tab === t.id && styles.tabTextActive]}>{t.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <ScrollView contentContainerStyle={styles.scroll}>
        {tab === 'overview' && (
          <View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>📊 Progress</Text>
              <View style={styles.summaryRow}>
                {[
                  { label: 'Days', value: stats.completedDays.length },
                  { label: 'XP', value: stats.xp },
                  { label: 'Level', value: level.level },
                  { label: 'Tokens', value: stats.tokens },
                ].map((item, i) => (
                  <View key={i} style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>{item.value}</Text>
                    <Text style={styles.summaryLabel}>{item.label}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.levelDisplay}>{level.emoji} {level.title}</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>📚 By Subject</Text>
              {Object.entries(stats.subjectDays).map(([subject, count]) => (
                <View key={subject} style={styles.subjectRow}>
                  <Text style={styles.subjectLabel}>{subject}</Text>
                  <Text style={styles.subjectCount}>{count} days</Text>
                </View>
              ))}
              {Object.keys(stats.subjectDays).length === 0 && <Text style={styles.emptyText}>No days completed yet.</Text>}
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>📅 Recent Activity</Text>
              {stats.completedDays.slice(-10).reverse().map((d, i) => {
                const dayData = allDays.find(day => day.id === d.id);
                return (
                  <View key={i} style={styles.activityLogRow}>
                    <Text style={styles.activityLogDay}>Day {d.id}</Text>
                    <Text style={styles.activityLogTitle} numberOfLines={1}>{dayData?.title || ''}</Text>
                    <Text style={styles.activityLogDate}>{new Date(d.completedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</Text>
                  </View>
                );
              })}
              {stats.completedDays.length === 0 && <Text style={styles.emptyText}>No completed days yet!</Text>}
            </View>
          </View>
        )}

        {tab === 'responses' && (
          <View>
            <Text style={styles.sectionHeader}>Go Explore Responses</Text>
            {Object.entries(goExploreResponses).map(([dayId, data]) => {
              const dayData = allDays.find(d => d.id === parseInt(dayId));
              return (
                <View key={dayId} style={styles.responseCard}>
                  <Text style={styles.responseDay}>Day {dayId} · {dayData?.title}</Text>
                  <Text style={styles.responseDate}>{new Date(data.savedAt).toLocaleDateString()}</Text>
                  {(data.response.questions || []).map((qa, i) => (
                    <View key={i} style={styles.qaBlock}>
                      <Text style={styles.qaQuestion}>Q: {qa.q}</Text>
                      <Text style={styles.qaAnswer}>A: {qa.a}</Text>
                    </View>
                  ))}
                  {data.response.paragraph ? (
                    <View style={styles.qaBlock}>
                      <Text style={styles.qaQuestion}>Paragraph:</Text>
                      <Text style={styles.qaAnswer}>{data.response.paragraph}</Text>
                    </View>
                  ) : null}
                </View>
              );
            })}
            {Object.keys(goExploreResponses).length === 0 && <Text style={styles.emptyText}>No responses yet.</Text>}

            <Text style={[styles.sectionHeader, { marginTop: 20 }]}>Teach It Back Responses</Text>
            {Object.entries(teachResponses).map(([dayId, data]) => {
              const dayData = allDays.find(d => d.id === parseInt(dayId));
              return (
                <View key={dayId} style={styles.responseCard}>
                  <Text style={styles.responseDay}>Day {dayId} · {dayData?.title}</Text>
                  <Text style={styles.responseDate}>{new Date(data.savedAt).toLocaleDateString()}</Text>
                  <Text style={styles.qaAnswer}>{data.response}</Text>
                </View>
              );
            })}
            {Object.keys(teachResponses).length === 0 && <Text style={styles.emptyText}>No Teach It Back responses yet.</Text>}
          </View>
        )}

        {tab === 'flags' && (
          <View>
            <Text style={styles.sectionHeader}>Open Flags ({openFlags.length})</Text>
            {openFlags.map((flag, i) => (
              <View key={i} style={styles.flagCard}>
                <View style={styles.flagInfo}>
                  <Text style={styles.flagDay}>Day {flag.dayId} · {flag.activityType}</Text>
                  <Text style={styles.flagTitle}>{flag.activityTitle}</Text>
                  <Text style={styles.flagDate}>{new Date(flag.flaggedAt).toLocaleDateString()}</Text>
                </View>
                <TouchableOpacity style={styles.resolveBtn} onPress={async () => { await resolveFlag(stats.flags.indexOf(flag)); load(); }}>
                  <Text style={styles.resolveBtnText}>Resolved ✓</Text>
                </TouchableOpacity>
              </View>
            ))}
            {openFlags.length === 0 && <Text style={styles.emptyText}>No open flags!</Text>}
          </View>
        )}

        {tab === 'rewards' && (
          <View>
            <Text style={styles.sectionHeader}>Reward Requests ({rewardRequests.length})</Text>
            {rewardRequests.map((req, i) => (
              <View key={i} style={styles.rewardCard}>
                <Text style={styles.rewardEmoji}>{req.emoji}</Text>
                <View style={styles.rewardInfo}>
                  <Text style={styles.rewardTitle}>{req.title}</Text>
                  <Text style={styles.rewardDate}>{new Date(req.requestedAt).toLocaleDateString()}</Text>
                  <Text style={[styles.rewardStatus, req.status === 'approved' && { color: colors.success }]}>
                    {req.status === 'pending' ? '⏳ Pending' : '✓ Approved'}
                  </Text>
                </View>
                {req.status === 'pending' ? (
                  <TouchableOpacity style={styles.approveBtn} onPress={async () => { await approveRewardRequest(i); load(); }}>
                    <Text style={styles.approveBtnText}>Approve ✓</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            ))}
            {rewardRequests.length === 0 && <Text style={styles.emptyText}>No reward requests yet.</Text>}
          </View>
        )}
      </ScrollView>

      {/* Mark days complete for Abhi */}
      {[2, 3].map(dayNum => (
        <TouchableOpacity
          key={dayNum}
          style={{ margin: 16, marginBottom: 0, padding: 14, backgroundColor: '#071828', borderRadius: 12, borderWidth: 1, borderColor: 'rgba(0,180,216,0.3)', alignItems: 'center' }}
          onPress={() => {
            Alert.alert(
              `✅ Mark Day ${dayNum} Complete`,
              `Marks all Day ${dayNum} activities as done and awards XP.`,
              [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Mark Complete', onPress: async () => {
                  const activities = ['lesson1', 'lesson2', 'lesson3', 'quiz', 'brainTeaser', 'goExplore', 'teachItBack', 'challenge', 'telugu'];
                  for (const act of activities) {
                    await markActivityComplete(dayNum, act);
                  }
                  await markDayComplete(dayNum, 'mixed');
                  await addXP(120);
                  Alert.alert('✓ Done', `Day ${dayNum} marked complete! Restart the app.`);
                }},
              ]
            );
          }}
        >
          <Text style={{ color: '#00B4D8', fontWeight: '700', fontSize: 14 }}>✅ Mark Day {dayNum} Complete (One-time)</Text>
        </TouchableOpacity>
      ))}

      {/* DEV: Reset progress between test builds */}
      <TouchableOpacity
        style={{ margin: 16, marginTop: 0, padding: 14, backgroundColor: '#1A0808', borderRadius: 12, borderWidth: 1, borderColor: 'rgba(230,57,70,0.3)', alignItems: 'center' }}
        onPress={() => {
          Alert.alert(
            '🔄 Reset All Progress',
            'Clears all XP, completed days and activities. Use between test builds.',
            [
              { text: 'Cancel', style: 'cancel' },
              { text: 'Reset', style: 'destructive', onPress: async () => {
                await resetAllProgress();
                Alert.alert('✓ Done', 'Progress cleared. Restart the app.');
              }},
            ]
          );
        }}
      >
        <Text style={{ color: '#E63946', fontWeight: '700', fontSize: 14 }}>🔄 Reset Progress (Dev)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  loading: { color: colors.textMuted, textAlign: 'center', marginTop: 100 },
  pinContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  pinTitle: { fontSize: 24, fontWeight: '800', color: colors.textPrimary, marginBottom: 8 },
  pinSubtitle: { fontSize: 15, color: colors.textMuted, marginBottom: 24 },
  pinDots: { flexDirection: 'row', marginBottom: 32 },
  pinDot: { width: 16, height: 16, borderRadius: 8, backgroundColor: colors.card, borderWidth: 2, borderColor: colors.border, marginHorizontal: 8 },
  pinDotFilled: { backgroundColor: colors.green, borderColor: colors.green },
  pinDotError: { backgroundColor: colors.error, borderColor: colors.error },
  pinRow: { flexDirection: 'row', marginBottom: 12 },
  pinKey: { width: 72, height: 72, borderRadius: 36, backgroundColor: colors.card, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 },
  pinKeyHidden: { opacity: 0 },
  pinKeyText: { fontSize: 24, color: colors.textPrimary, fontWeight: '600' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  headerTitle: { fontSize: 20, fontWeight: '800', color: colors.textPrimary },
  lockBtn: { color: colors.textMuted, fontSize: 14 },
  tabsScroll: { maxHeight: 50 },
  tabsRow: { flexDirection: 'row', paddingHorizontal: 16, paddingBottom: 8 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: colors.card, marginRight: 8 },
  tabActive: { backgroundColor: colors.green },
  tabText: { color: colors.textMuted, fontWeight: '600', fontSize: 13 },
  tabTextActive: { color: '#fff' },
  scroll: { padding: 16, paddingBottom: 50 },
  card: { backgroundColor: colors.card, borderRadius: 16, padding: 16, marginBottom: 16 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginBottom: 12 },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  summaryItem: { alignItems: 'center' },
  summaryValue: { fontSize: 26, fontWeight: '800', color: colors.green },
  summaryLabel: { fontSize: 11, color: colors.textMuted },
  levelDisplay: { textAlign: 'center', color: colors.amber, fontWeight: '700', fontSize: 15 },
  subjectRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  subjectLabel: { color: colors.textSecondary, fontSize: 14, textTransform: 'capitalize' },
  subjectCount: { color: colors.textPrimary, fontWeight: '700', fontSize: 14 },
  activityLogRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6, borderBottomWidth: 1, borderBottomColor: colors.border },
  activityLogDay: { color: colors.green, fontWeight: '700', fontSize: 13, width: 45 },
  activityLogTitle: { flex: 1, color: colors.textSecondary, fontSize: 13 },
  activityLogDate: { color: colors.textMuted, fontSize: 12 },
  sectionHeader: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, marginBottom: 12 },
  responseCard: { backgroundColor: colors.card, borderRadius: 14, padding: 14, marginBottom: 10 },
  responseDay: { fontSize: 14, fontWeight: '700', color: colors.green, marginBottom: 2 },
  responseDate: { fontSize: 11, color: colors.textMuted, marginBottom: 8 },
  qaBlock: { backgroundColor: colors.cardLight, borderRadius: 8, padding: 10, marginBottom: 6 },
  qaQuestion: { fontSize: 12, color: colors.textMuted, fontStyle: 'italic', marginBottom: 4 },
  qaAnswer: { fontSize: 14, color: colors.textPrimary, lineHeight: 20 },
  flagCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: 14, padding: 14, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: colors.amber },
  flagInfo: { flex: 1 },
  flagDay: { fontSize: 11, color: colors.textMuted },
  flagTitle: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  flagDate: { fontSize: 11, color: colors.textMuted },
  resolveBtn: { backgroundColor: colors.green, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  resolveBtnText: { color: '#fff', fontWeight: '700', fontSize: 12 },
  rewardCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: 14, padding: 14, marginBottom: 8 },
  rewardEmoji: { fontSize: 26, marginRight: 12 },
  rewardInfo: { flex: 1 },
  rewardTitle: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  rewardDate: { fontSize: 11, color: colors.textMuted },
  rewardStatus: { fontSize: 12, color: colors.amber, fontWeight: '600' },
  approveBtn: { backgroundColor: colors.success, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  approveBtnText: { color: '#fff', fontWeight: '700', fontSize: 12 },
  emptyText: { color: colors.textMuted, fontSize: 14, textAlign: 'center', paddingVertical: 20 },
});
