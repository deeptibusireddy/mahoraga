import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { LEVELS, BADGES, getLevelForXP, getNextLevel } from '../theme/levels';
import { getAllStats, getRewardMenu, requestReward, getRewardRequests } from '../utils/storage';
import { allDays } from '../data/allDays';

export default function MeScreen() {
  const [stats, setStats] = useState(null);
  const [rewardMenu, setRewardMenu] = useState([]);
  const [rewardRequests, setRewardRequests] = useState([]);

  useFocusEffect(useCallback(() => { load(); }, []));

  const load = async () => {
    const [s, menu, requests] = await Promise.all([getAllStats(), getRewardMenu(), getRewardRequests()]);
    setStats(s);
    setRewardMenu(menu);
    setRewardRequests(requests);
  };

  const handleRewardRequest = async (reward) => {
    const success = await requestReward(reward);
    if (success) {
      Alert.alert('Reward Requested! 🎟️', `You asked for: ${reward.title}\nAsk Amma to approve it!`);
      load();
    } else {
      Alert.alert('Not enough tokens', `You need ${reward.tokens} tokens for this.`);
    }
  };

  if (!stats) return <SafeAreaView style={styles.container}><Text style={styles.loading}>Loading...</Text></SafeAreaView>;

  const level = getLevelForXP(stats.xp);
  const nextLevel = getNextLevel(stats.xp);
  const prevXP = level.xpRequired;
  const nextXP = nextLevel ? nextLevel.xpRequired : stats.xp;
  const progress = nextLevel ? Math.min(100, ((stats.xp - prevXP) / (nextXP - prevXP)) * 100) : 100;
  const totalDays = stats.completedDays.length;
  const trophyPct = Math.min(100, (totalDays / 35) * 100);
  const openFlags = stats.flags.filter(f => !f.resolved);
  const pendingRewards = rewardRequests.filter(r => r.status === 'pending');

  const isBadgeEarned = (badge) => {
    if (badge.id === 'telugu_speaker') return stats.teluguCount >= badge.daysRequired;
    if (badge.id === 'explorer') return stats.exploreCount >= badge.daysRequired;
    if (badge.id === 'teacher') return stats.teachCount >= badge.daysRequired;
    if (badge.id === 'summer_trophy') return totalDays >= badge.daysRequired;
    return (stats.subjectDays[badge.subject] || 0) >= badge.daysRequired;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.screenTitle}>Sorcerer Profile</Text>

        {/* XP Card */}
        <View style={styles.xpCard}>
          <View style={styles.xpTop}>
            <Text style={styles.levelEmoji}>{level.emoji}</Text>
            <View style={styles.xpInfo}>
              <Text style={styles.levelTitle}>{level.title}</Text>
              <Text style={styles.levelSub}>Level {level.level} · {stats.xp} XP total</Text>
            </View>
          </View>
          <View style={styles.xpBarBg}>
            <View style={[styles.xpBarFill, { width: `${progress}%` }]} />
          </View>
          {nextLevel ? (
            <Text style={styles.xpNextText}>⚡ {nextLevel.xpRequired - stats.xp} XP until Level {nextLevel.level}: {nextLevel.emoji} {nextLevel.title}</Text>
          ) : (
            <Text style={styles.xpNextText}>🎓 Maximum level! You're Unlimited Knowledge!!</Text>
          )}
        </View>

        {/* Stats row */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsScroll}>
          {[
            { emoji: '📅', value: totalDays, label: 'Days Done' },
            { emoji: '🎟️', value: stats.tokens, label: 'Tokens' },
            { emoji: '🔢', value: stats.subjectDays.math || 0, label: 'Math' },
            { emoji: '🔬', value: stats.subjectDays.science || 0, label: 'Science' },
            { emoji: '🏛️', value: stats.subjectDays.history || 0, label: 'History' },
          ].map((item, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statEmoji}>{item.emoji}</Text>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Journey Map — horizontal scroll */}
        <View style={styles.journeyCard}>
          <Text style={styles.sectionTitle}>🗺️ Your Journey</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.journeyRow}>
            {LEVELS.map((lv, i) => {
              const reached = stats.xp >= lv.xpRequired;
              const isCurrent = level.level === lv.level;
              return (
                <View key={lv.level} style={styles.journeyStop}>
                  {/* Connector line to next node */}
                  {i < LEVELS.length - 1 && (
                    <View style={[styles.journeyLine, reached && styles.journeyLineDone]} />
                  )}
                  {/* Circle node */}
                  <View style={[styles.journeyNode, reached && styles.journeyNodeDone, isCurrent && styles.journeyNodeCurrent]}>
                    <Text style={styles.journeyEmoji}>{lv.emoji}</Text>
                  </View>
                  {/* YOU badge */}
                  {isCurrent && (
                    <View style={styles.journeyCurrentBadge}>
                      <Text style={styles.journeyCurrentText}>YOU</Text>
                    </View>
                  )}
                  {/* Label below */}
                  <Text style={[styles.journeyLevelText, isCurrent && { color: colors.amber }]}>Lv.{lv.level}</Text>
                  <Text style={[styles.journeyTitle, reached && styles.journeyTitleDone, isCurrent && styles.journeyTitleCurrent]}>{lv.title}</Text>
                  <Text style={styles.journeyXP}>{lv.xpRequired} XP</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        {/* Summer Trophy */}
        <View style={styles.trophyCard}>
          <Text style={styles.trophyEmoji}>{totalDays >= 35 ? '🏆' : '🔒'}</Text>
          <Text style={styles.trophyTitle}>Summer Trophy</Text>
          {totalDays >= 35 ? (
            <Text style={styles.trophyDone}>You earned it! Amazing summer! 🎉</Text>
          ) : (
            <View style={styles.trophyBarBg}>
              <View style={[styles.trophyBarFill, { width: `${trophyPct}%` }]} />
            </View>
          )}
          {totalDays < 35 ? <Text style={styles.trophyRemaining}>{35 - totalDays} more days to unlock</Text> : null}
        </View>

        {/* Manga Box Set — 100% completion reward */}
        <View style={[styles.mangaCard, totalDays >= 50 && styles.mangaCardUnlocked]}>
          <Text style={styles.mangaEmoji}>{totalDays >= 50 ? '📚' : '🔒'}</Text>
          <Text style={[styles.mangaTitle, totalDays >= 50 && { color: '#FFD700' }]}>
            Manga Box Set
          </Text>
          {totalDays >= 50 ? (
            <>
              <Text style={styles.mangaUnlockedText}>🎉 You did it! All 50 days complete!</Text>
              <Text style={styles.mangaClaimText}>Tell Amma — pick ANY manga box set of your choice!</Text>
            </>
          ) : (
            <>
              <View style={styles.trophyBarBg}>
                <View style={[styles.trophyBarFill, { width: `${Math.min(100, (totalDays / 50) * 100)}%`, backgroundColor: '#FF6B9D' }]} />
              </View>
              <Text style={styles.trophyRemaining}>{50 - totalDays} more days to unlock</Text>
            </>
          )}
        </View>

        {/* Badges */}
        <Text style={styles.sectionTitle}>🏅 Badges</Text>
        <View style={styles.badgeGrid}>
          {BADGES.map(badge => {
            const earned = isBadgeEarned(badge);
            return (
              <View key={badge.id} style={[styles.badgeCard, !earned && styles.badgeCardLocked]}>
                <Text style={styles.badgeEmoji}>{earned ? badge.emoji : '🔒'}</Text>
                <Text style={[styles.badgeName, !earned && styles.badgeNameLocked]}>{badge.title}</Text>
                <Text style={styles.badgeDesc}>{badge.desc}</Text>
              </View>
            );
          })}
        </View>

        {/* Flags */}
        {openFlags.length > 0 ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🚩 Ask Later ({openFlags.length})</Text>
            {openFlags.map((flag, i) => (
              <View key={i} style={styles.flagCard}>
                <Text style={styles.flagDay}>Day {flag.dayId}</Text>
                <Text style={styles.flagTitle}>{flag.activityTitle || flag.activityType}</Text>
              </View>
            ))}
          </View>
        ) : null}

        {/* Rewards */}
        <View style={styles.section}>
          <View style={styles.rewardHeader}>
            <Text style={styles.sectionTitle}>🎟️ Rewards</Text>
            <View style={styles.tokenBadge}>
              <Text style={styles.tokenBadgeText}>{stats.tokens} tokens</Text>
            </View>
          </View>
          <Text style={styles.rewardHint}>Earn 1 Cursed Token per 100 XP</Text>
          {rewardMenu.map(reward => {
            const pending = rewardRequests.find(r => r.id === reward.id && r.status === 'pending');
            const approved = rewardRequests.find(r => r.id === reward.id && r.status === 'approved');
            return (
              <View key={reward.id} style={styles.rewardCard}>
                <Text style={styles.rewardEmoji}>{reward.emoji}</Text>
                <View style={styles.rewardInfo}>
                  <Text style={styles.rewardTitle}>{reward.title}</Text>
                  <Text style={styles.rewardCost}>{reward.tokens} token{reward.tokens > 1 ? 's' : ''}</Text>
                </View>
                {approved ? <Text style={styles.rewardApproved}>✓ Approved!</Text>
                  : pending ? <Text style={styles.rewardPending}>⏳ Pending</Text>
                  : (
                    <TouchableOpacity
                      style={[styles.redeemBtn, stats.tokens < reward.tokens && styles.redeemBtnDisabled]}
                      onPress={() => stats.tokens >= reward.tokens && handleRewardRequest(reward)}
                    >
                      <Text style={styles.redeemBtnText}>Redeem</Text>
                    </TouchableOpacity>
                  )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  loading: { color: colors.textMuted, textAlign: 'center', marginTop: 100 },
  scroll: { padding: 16, paddingBottom: 50 },
  screenTitle: { fontSize: 28, fontWeight: '800', color: colors.teal, marginBottom: 16 },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: colors.textPrimary, marginBottom: 10 },
  section: { marginTop: 8 },
  xpCard: { backgroundColor: colors.card, borderRadius: 16, padding: 18, marginBottom: 16 },
  xpTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  levelEmoji: { fontSize: 36, marginRight: 12 },
  xpInfo: { flex: 1 },
  levelTitle: { fontSize: 20, fontWeight: '800', color: colors.textPrimary },
  levelSub: { fontSize: 13, color: colors.textMuted },
  xpBarBg: { height: 12, backgroundColor: colors.cardLight, borderRadius: 6, overflow: 'hidden', marginBottom: 8 },
  xpBarFill: { height: 12, backgroundColor: colors.green, borderRadius: 6 },
  xpNextText: { fontSize: 13, color: colors.amber, fontWeight: '600' },
  statsScroll: { marginBottom: 16 },
  statCard: { backgroundColor: colors.card, borderRadius: 14, padding: 14, alignItems: 'center', minWidth: 80, marginRight: 10 },
  statEmoji: { fontSize: 22, marginBottom: 4 },
  statValue: { fontSize: 22, fontWeight: '800', color: colors.textPrimary },
  statLabel: { fontSize: 11, color: colors.textMuted, marginTop: 2 },
  journeyCard: { backgroundColor: colors.card, borderRadius: 16, padding: 16, marginBottom: 16 },
  journeyRow: { flexDirection: 'row', paddingVertical: 8 },
  journeyRow: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 8, paddingHorizontal: 4 },
  journeyStop: { alignItems: 'center', width: 90, position: 'relative', marginRight: 4 },
  journeyNode: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.cardLight, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.border },
  journeyNodeDone: { backgroundColor: colors.greenDark, borderColor: colors.green },
  journeyNodeCurrent: { backgroundColor: colors.amber, borderColor: colors.amberLight },
  journeyEmoji: { fontSize: 28 },
  journeyLevelText: { fontSize: 11, color: colors.textMuted, marginTop: 6, fontWeight: '700' },
  journeyTitle: { fontSize: 12, color: colors.textMuted, textAlign: 'center', lineHeight: 16, marginTop: 2 },
  journeyTitleDone: { color: colors.green },
  journeyTitleCurrent: { color: colors.amber, fontWeight: '800' },
  journeyLine: { position: 'absolute', top: 31, left: 64, width: 30, height: 2, backgroundColor: colors.border },
  journeyLineDone: { backgroundColor: colors.green },
  journeyXP: { fontSize: 10, color: colors.textMuted, marginTop: 2, opacity: 0.6 },
  journeyInfo: { alignItems: 'center' },
  journeyCurrentBadge: { backgroundColor: colors.amber, borderRadius: 8, paddingHorizontal: 6, paddingVertical: 2, marginTop: 2 },
  journeyCurrentText: { fontSize: 10, fontWeight: '900', color: '#000' },
  trophyCard: { backgroundColor: colors.card, borderRadius: 16, padding: 20, alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: colors.gold + '40' },
  mangaCard: { backgroundColor: colors.card, borderRadius: 16, padding: 20, alignItems: 'center', marginBottom: 16, borderWidth: 1, borderColor: 'rgba(255,107,157,0.3)' },
  mangaCardUnlocked: { borderColor: '#FFD700', borderWidth: 2, backgroundColor: 'rgba(255,215,0,0.05)' },
  mangaEmoji: { fontSize: 48, marginBottom: 8 },
  mangaTitle: { fontSize: 18, fontWeight: '700', color: 'rgba(255,255,255,0.5)', marginBottom: 8 },
  mangaUnlockedText: { color: '#FFD700', fontWeight: '800', fontSize: 16, marginBottom: 6, textAlign: 'center' },
  mangaClaimText: { color: 'rgba(255,255,255,0.7)', fontSize: 14, textAlign: 'center', lineHeight: 20 },
  trophyEmoji: { fontSize: 48, marginBottom: 8 },
  trophyTitle: { fontSize: 18, fontWeight: '700', color: colors.gold, marginBottom: 8 },
  trophyBarBg: { width: '100%', height: 10, backgroundColor: colors.cardLight, borderRadius: 5, overflow: 'hidden', marginBottom: 8 },
  trophyBarFill: { height: 10, backgroundColor: colors.gold, borderRadius: 5 },
  trophyRemaining: { color: colors.textMuted, fontSize: 13 },
  trophyDone: { color: colors.success, fontWeight: '700', fontSize: 15 },
  badgeGrid: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  badgeCard: { width: '30%', backgroundColor: colors.card, borderRadius: 14, padding: 12, alignItems: 'center', margin: '1.5%' },
  badgeCardLocked: { opacity: 0.45 },
  badgeEmoji: { fontSize: 28, marginBottom: 4 },
  badgeName: { fontSize: 11, fontWeight: '700', color: colors.textPrimary, textAlign: 'center', marginBottom: 2 },
  badgeNameLocked: { color: colors.textMuted },
  badgeDesc: { fontSize: 9, color: colors.textMuted, textAlign: 'center', lineHeight: 13 },
  flagCard: { backgroundColor: colors.card, borderRadius: 12, padding: 14, marginBottom: 8, borderLeftWidth: 3, borderLeftColor: colors.amber },
  flagDay: { fontSize: 11, color: colors.textMuted },
  flagTitle: { fontSize: 14, color: colors.textPrimary, fontWeight: '600', marginTop: 2 },
  rewardHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 },
  tokenBadge: { backgroundColor: colors.amberDark, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4 },
  tokenBadgeText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  rewardHint: { color: colors.textMuted, fontSize: 12, marginBottom: 10 },
  rewardCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card, borderRadius: 14, padding: 14, marginBottom: 8 },
  rewardEmoji: { fontSize: 26, marginRight: 12 },
  rewardInfo: { flex: 1 },
  rewardTitle: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  rewardCost: { fontSize: 12, color: colors.textMuted },
  redeemBtn: { backgroundColor: colors.amber, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 8 },
  redeemBtnDisabled: { backgroundColor: colors.cardLight },
  redeemBtnText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  rewardPending: { color: colors.amber, fontWeight: '600', fontSize: 13 },
  rewardApproved: { color: colors.success, fontWeight: '700', fontSize: 13 },
});
