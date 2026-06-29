import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, TextInput, Dimensions,
} from 'react-native';
import { useLessonVisual, SUBJECT_COLOR } from './LessonImage';
import { XP_VALUES, JJK_NAMES } from '../theme/levels';

const { width: SW, height: SH } = Dimensions.get('window');

// ─── Countdown hook ───────────────────────────────────────────────────────────
function useCountdown(seconds, active) {
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => { setRemaining(seconds); }, [seconds]);
  useEffect(() => {
    if (!active || remaining === 0) return;
    const t = setTimeout(() => setRemaining(r => Math.max(0, r - 1)), 1000);
    return () => clearTimeout(t);
  }, [remaining, active]);
  return { remaining, ready: remaining === 0 };
}

// ─── Rich text ────────────────────────────────────────────────────────────────
function RichText({ text, style }) {
  if (!text) return null;
  const raw = text.replace(/\\n/g, '\n');
  return (
    <View>
      {raw.split('\n').map((line, i) => {
        if (!line.trim()) return <View key={i} style={{ height: 12 }} />;
        const parts = line.split(/\*\*([^*]+)\*\*/g);
        return (
          <Text key={i} style={[style, { marginBottom: 6 }]}>
            {parts.map((p, j) => j % 2 === 1
              ? <Text key={j} style={{ fontWeight: '900', color: '#FFFFFF' }}>{p}</Text>
              : p
            )}
          </Text>
        );
      })}
    </View>
  );
}

// ─── Full screen card shell ───────────────────────────────────────────────────
function FullCard({ accent, topLabel, children, buttonLabel, onPress, buttonDisabled }) {
  return (
    <View style={[s.fullCard, { borderTopColor: accent, borderTopWidth: 4 }]}>
      {topLabel && <Text style={[s.cardTopLabel, { color: accent }]}>{topLabel}</Text>}
      <View style={s.fullCardBody}>{children}</View>
      <TouchableOpacity
        style={[s.bigBtn, { backgroundColor: accent }, buttonDisabled && s.bigBtnOff]}
        onPress={buttonDisabled ? undefined : onPress}
        activeOpacity={buttonDisabled ? 1 : 0.8}
      >
        <Text style={s.bigBtnText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Visual point card ────────────────────────────────────────────────────────
function VisualPointCard({ point, accent, pointNum, totalPoints, onNext, isLast, reviewMode = false }) {
  const { remaining, ready } = useCountdown(reviewMode ? 0 : 7, true);
  return (
    <FullCard
      accent={accent}
      topLabel={`${pointNum} of ${totalPoints}`}
      buttonLabel={ready ? (isLast ? 'Now learn it →' : 'Next →') : `${remaining}s`}
      onPress={onNext}
      buttonDisabled={!ready}
    >
      <Text style={s.pointEmoji}>{point.emoji}</Text>
      <Text style={[s.pointLabel, { color: accent }]}>{point.label}</Text>
      <Text style={s.pointText}>{point.text}</Text>
    </FullCard>
  );
}

// ─── Loading card ─────────────────────────────────────────────────────────────
function LoadingCard({ accent, title, subject }) {
  const dots = useDotsAnimation();
  return (
    <View style={[s.fullCard, { borderTopColor: accent, borderTopWidth: 4, justifyContent: 'center' }]}>
      <Text style={s.pointEmoji}>⚡</Text>
      <Text style={[s.pointLabel, { color: accent }]}>{title}</Text>
      <Text style={[s.pointText, { color: accent, marginTop: 24 }]}>Loading{dots}</Text>
    </View>
  );
}

function useDotsAnimation() {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const t = setInterval(() => setDots(d => d.length >= 3 ? '' : d + '.'), 500);
    return () => clearInterval(t);
  }, []);
  return dots;
}

// ─── Learn content card ───────────────────────────────────────────────────────
function LearnCard({ text, cardNum, totalCards, accent, onNext, onBack, isLast, reviewMode = false, onComplete }) {
  const { remaining, ready } = useCountdown(reviewMode ? 0 : 10, true);
  const handleNext = () => {
    if (reviewMode && isLast) { onComplete && onComplete(); } else { onNext(); }
  };
  return (
    <FullCard
      accent={accent}
      topLabel={`Read · ${cardNum} of ${totalCards}`}
      buttonLabel={ready ? (isLast && reviewMode ? 'Done ✓' : isLast ? 'Practice →' : 'Next →') : `${remaining}s`}
      onPress={handleNext}
      buttonDisabled={!ready}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[s.learnCardInner, { borderLeftColor: accent }]}>
          <RichText text={text} style={s.learnText} />
        </View>
      </ScrollView>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={s.backLink}>
          <Text style={[s.backLinkText, { color: accent }]}>← Back</Text>
        </TouchableOpacity>
      )}
    </FullCard>
  );
}

// ─── Practice screen ──────────────────────────────────────────────────────────
function PracticeScreen({ activity, accent, onNext }) {
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [typed, setTyped] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = activity.practice || [];
  if (!questions.length) { onNext(0); return null; }

  const q = questions[qIdx];
  const isMC = !!(q.options);
  const isCorrect = isMC
    ? selected === q.answer
    : typed.trim().toLowerCase() === String(q.answer).toLowerCase();
  const canSubmit = isMC ? selected !== null : typed.trim().length > 0;

  const handleSubmit = () => {
    if (showResult) return;
    setShowResult(true);
    if (isCorrect) setScore(sc => sc + 1);
  };
  const handleNext = () => {
    if (qIdx < questions.length - 1) {
      setQIdx(i => i + 1); setSelected(null); setTyped(''); setShowResult(false);
    } else { onNext(score); }
  };

  return (
    <View style={[s.fullCard, { borderTopColor: accent, borderTopWidth: 4 }]}>
      <Text style={[s.cardTopLabel, { color: accent }]}>
        Practice · {qIdx + 1} of {questions.length}
      </Text>

      <ScrollView style={s.practiceScroll} showsVerticalScrollIndicator={false}>
        <Text style={s.practiceQ}>{q.q}</Text>

        {isMC && q.options.map((opt, i) => {
          const isSel = selected === i;
          const isRight = i === q.answer;
          return (
            <TouchableOpacity
              key={i}
              style={[
                s.mcOpt,
                isSel && !showResult && { borderColor: accent, borderWidth: 2 },
                showResult && isRight && s.mcRight,
                showResult && isSel && !isRight && s.mcWrong,
              ]}
              onPress={() => !showResult && setSelected(i)}
              activeOpacity={showResult ? 1 : 0.7}
            >
              <Text style={[
                s.mcOptText,
                showResult && isRight && { color: '#48CAE4', fontWeight: '800' },
                showResult && isSel && !isRight && { color: '#FF8FA3' },
              ]}>{opt}</Text>
              {showResult && isRight && <Text style={{ fontSize: 20 }}>✅</Text>}
              {showResult && isSel && !isRight && <Text style={{ fontSize: 20 }}>❌</Text>}
            </TouchableOpacity>
          );
        })}

        {!isMC && (
          <View>
            <TextInput
              style={[s.typeInput, showResult && (isCorrect ? s.typeRight : s.typeWrong)]}
              value={typed} onChangeText={setTyped}
              placeholder={q.placeholder || 'Type your answer...'}
              placeholderTextColor="rgba(255,255,255,0.3)"
              editable={!showResult}
              autoCapitalize="none"
            />
            {showResult && !isCorrect && (
              <View style={s.correctBox}>
                <Text style={s.correctLabel}>✅ Correct answer:</Text>
                <Text style={s.correctText}>{q.answer}</Text>
              </View>
            )}
          </View>
        )}

        {showResult && q.explanation && (
          <View style={[s.explanBox, { borderLeftColor: accent }]}>
            <Text style={s.explanText}>{q.explanation}</Text>
          </View>
        )}
      </ScrollView>

      {!showResult ? (
        <TouchableOpacity
          style={[s.bigBtn, { backgroundColor: accent }, !canSubmit && s.bigBtnOff]}
          onPress={canSubmit ? handleSubmit : undefined}
          activeOpacity={canSubmit ? 0.8 : 1}
        >
          <Text style={s.bigBtnText}>Check Answer →</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[s.bigBtn, { backgroundColor: accent }]} onPress={handleNext}>
          <Text style={s.bigBtnText}>
            {qIdx < questions.length - 1 ? 'Next Question →' : 'See Results →'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// ─── Complete screen ──────────────────────────────────────────────────────────
function CompleteScreen({ activity, actKey, score, totalQ, accent, onComplete, reviewMode = false }) {
  const pct = totalQ > 0 ? Math.round((score / totalQ) * 100) : 100;
  const isPerfect = !reviewMode && totalQ > 0 && score === totalQ;
  if (reviewMode) {
    return (
      <View style={[s.fullCard, { borderTopColor: accent, borderTopWidth: 4, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={s.completeMedal}>📖</Text>
        <Text style={s.completeTitle}>Review Complete</Text>
        <Text style={[s.completeMsg, { color: accent }]}>Good refresher! XP already earned on first completion.</Text>
        {activity.keyFact && (
          <View style={[s.keyFactBox, { borderColor: accent + '50', backgroundColor: accent + '10' }]}>
            <Text style={[s.keyFactLabel, { color: accent }]}>⚡ REMEMBER THIS</Text>
            <Text style={s.keyFactText}>{activity.keyFact}</Text>
          </View>
        )}
        <TouchableOpacity style={[s.bigBtn, { backgroundColor: accent, width: '100%' }]} onPress={onComplete}>
          <Text style={s.bigBtnText}>Done ✓</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const medal = isPerfect ? '🏆' : pct >= 66 ? '⭐' : '💪';
  const msg = isPerfect ? 'Perfect score! Cursed technique mastered!'
    : pct >= 66 ? 'Great work! Keep training, sorcerer.'
    : 'Good effort! Review and try again next time.';
  const xp = XP_VALUES[actKey] || 10;
  const bonusXP = isPerfect ? 1 : 0;
  const totalXP = xp + bonusXP;

  return (
    <View style={[s.fullCard, { borderTopColor: accent, borderTopWidth: 4, justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={s.completeMedal}>{medal}</Text>
      <Text style={s.completeTitle}>{activity.title}</Text>
      <Text style={[s.completeMsg, { color: accent }]}>{msg}</Text>

      {totalQ > 0 && (
        <View style={[s.statBox, { borderColor: accent + '50', backgroundColor: accent + '12' }]}>
          <Text style={[s.statNum, { color: accent }]}>{score}/{totalQ}</Text>
          <Text style={s.statLbl}>Practice Score</Text>
        </View>
      )}

      <View style={[s.statBox, { borderColor: '#FFD70050', backgroundColor: '#FFD70012' }]}>
        <Text style={[s.statNum, { color: '#FFD700' }]}>+{xp} XP</Text>
        <Text style={s.statLbl}>Cursed XP Earned</Text>
      </View>

      {isPerfect && (
        <View style={[s.bonusBox]}>
          <Text style={s.bonusEmoji}>⚡</Text>
          <Text style={s.bonusLabel}>PERFECT SCORE BONUS</Text>
          <Text style={s.bonusXP}>+1 XP</Text>
          <Text style={s.bonusDesc}>3/3 — Flawless technique!</Text>
        </View>
      )}

      {activity.keyFact && (
        <View style={[s.keyFactBox, { borderColor: accent + '50', backgroundColor: accent + '10' }]}>
          <Text style={[s.keyFactLabel, { color: accent }]}>⚡ REMEMBER THIS</Text>
          <Text style={s.keyFactText}>{activity.keyFact}</Text>
        </View>
      )}

      <TouchableOpacity style={[s.bigBtn, { backgroundColor: accent, width: '100%' }]} onPress={() => onComplete(isPerfect)}>
        <Text style={s.bigBtnText}>Complete! +{totalXP} XP ✓</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Main InteractiveLesson ───────────────────────────────────────────────────
export default function InteractiveLesson({ actKey, activity, onComplete, onFlag, reviewMode = false }) {
  const subj = activity.subject || 'math';
  const accent = SUBJECT_COLOR[subj] || '#00B4D8';

  // Fetch Claude visual points
  const { points, loading } = useLessonVisual(activity.title, activity.content, subj);

  // Build the full sequence of screens:
  // [visual point 1, visual point 2, visual point 3, learn card 1, learn card 2..., practice, complete]
  const [screenIdx, setScreenIdx] = useState(0);
  const [practiceScore, setPracticeScore] = useState(0);

  // Split lesson content into cards
  const raw = (activity.content || '').replace(/\\n/g, '\n');
  const paragraphs = raw.split('\n\n').filter(p => p.trim());
  const learnCards = activity.cards || (() => {
    const cards = [];
    for (let i = 0; i < paragraphs.length; i += 2) {
      cards.push(paragraphs.slice(i, i + 2).join('\n\n'));
    }
    return cards;
  })();

  const totalPoints = 3; // always 3 visual points
  const totalLearn = learnCards.length;
  const hasPractice = (activity.practice || []).length > 0;

  // Screen types: 'loading' | 'visual_0..2' | 'learn_0..N' | 'practice' | 'complete'
  const totalScreens = totalPoints + totalLearn + (hasPractice ? 1 : 0) + 1; // +1 for complete

  const getScreenType = (idx) => {
    if (loading && idx === 0) return 'loading';
    if (idx < totalPoints) return { type: 'visual', pointIdx: idx };
    const learnIdx = idx - totalPoints;
    if (learnIdx < totalLearn) return { type: 'learn', cardIdx: learnIdx };
    const afterLearn = idx - totalPoints - totalLearn;
    if (hasPractice && afterLearn === 0) return { type: 'practice' };
    return { type: 'complete' };
  };

  const goNext = () => setScreenIdx(i => i + 1);
  const goBack = () => setScreenIdx(i => Math.max(0, i - 1));

  const screen = getScreenType(screenIdx);

  // Step indicator counts
  const stepLabels = reviewMode ? ['Overview', 'Learn'] : ['Overview', 'Learn', 'Practice', 'Done'];
  const currentStep = screenIdx < totalPoints ? 0
    : screenIdx < totalPoints + totalLearn ? 1
    : screenIdx === totalPoints + totalLearn && hasPractice ? 2
    : 3;

  return (
    <View style={s.container}>
      {/* Header: step pills + flag */}
      <View style={s.header}>
        {reviewMode && (
          <View style={{ backgroundColor: 'rgba(255,215,0,0.1)', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5, borderWidth: 1, borderColor: 'rgba(255,215,0,0.3)', marginRight: 8 }}>
            <Text style={{ color: '#FFD700', fontSize: 11, fontWeight: '800', letterSpacing: 1 }}>📖 REVIEW</Text>
          </View>
        )}
        <View style={s.stepRow}>
          {stepLabels.map((label, i) => (
            <View key={i} style={[
              s.stepPill,
              i === currentStep && s.stepPillActive,
              i < currentStep && s.stepPillDone,
              { borderColor: i <= currentStep ? accent : 'rgba(255,255,255,0.12)' },
            ]}>
              <Text style={[s.stepText, i <= currentStep && { color: i < currentStep ? accent : '#fff' }]}>
                {i < currentStep ? '✓' : label}
              </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={onFlag} style={s.flagBtn}>
          <Text style={{ fontSize: 20 }}>🚩</Text>
        </TouchableOpacity>
      </View>

      {/* Screen content */}
      {loading ? (
        <LoadingCard accent={accent} title={activity.title} subject={subj} />
      ) : screen.type === 'visual' ? (
        <VisualPointCard
          key={screen.pointIdx}
          point={points[screen.pointIdx] || { emoji: '⚡', label: 'Key Point', text: '' }}
          accent={accent}
          pointNum={screen.pointIdx + 1}
          totalPoints={totalPoints}
          isLast={screen.pointIdx === totalPoints - 1}
          onNext={goNext}
          reviewMode={reviewMode}
        />
      ) : screen.type === 'learn' ? (
        <LearnCard
          key={`learn-${screen.cardIdx}`}
          text={typeof learnCards[screen.cardIdx] === 'string'
            ? learnCards[screen.cardIdx]
            : learnCards[screen.cardIdx]?.text || ''}
          cardNum={screen.cardIdx + 1}
          totalCards={totalLearn}
          accent={accent}
          isLast={screen.cardIdx === totalLearn - 1}
          onNext={goNext}
          onBack={screenIdx > 0 ? goBack : null}
          reviewMode={reviewMode}
          onComplete={onComplete}
        />
      ) : screen.type === 'practice' ? (
        <PracticeScreen
          activity={activity}
          accent={accent}
          onNext={(sc) => { setPracticeScore(sc); goNext(); }}
        />
      ) : (
        <CompleteScreen
          activity={activity}
          actKey={actKey}
          score={practiceScore}
          totalQ={reviewMode ? 0 : (activity.practice || []).length}
          accent={accent}
          onComplete={onComplete}
          reviewMode={reviewMode}
        />
      )}
    </View>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#060C1A' },

  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingTop: 4, paddingBottom: 10,
    gap: 8,
  },
  stepRow: { flex: 1, flexDirection: 'row', gap: 6 },
  stepPill: { flex: 1, borderRadius: 20, borderWidth: 1, paddingVertical: 7, alignItems: 'center' },
  stepPillActive: { backgroundColor: 'rgba(255,255,255,0.1)' },
  stepPillDone: { backgroundColor: 'rgba(0,180,216,0.1)' },
  stepText: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.3)' },
  flagBtn: { padding: 4 },

  // Full card shell
  fullCard: {
    flex: 1, paddingHorizontal: 24,
    paddingTop: 16, paddingBottom: 20,
  },
  cardTopLabel: {
    fontSize: 13, fontWeight: '800', textTransform: 'uppercase',
    letterSpacing: 1.5, textAlign: 'center', marginBottom: 20,
  },
  fullCardBody: { flex: 1, justifyContent: 'center' },

  // Visual point card
  pointEmoji: { fontSize: 80, textAlign: 'center', marginBottom: 24 },
  pointLabel: { fontSize: 28, fontWeight: '900', textAlign: 'center', marginBottom: 20, letterSpacing: -0.5 },
  pointText: { fontSize: 22, color: '#FFFFFF', textAlign: 'center', lineHeight: 34, fontWeight: '500' },

  // Learn card
  learnCardInner: { borderLeftWidth: 4, paddingLeft: 20, paddingVertical: 8 },
  learnText: { fontSize: 20, color: '#FFFFFF', lineHeight: 32 },
  practiceScroll: { flex: 1, marginBottom: 12 },
  backLink: { alignItems: 'center', paddingTop: 12 },
  backLinkText: { fontSize: 15, fontWeight: '700' },

  // Practice
  practiceQ: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', lineHeight: 32, marginBottom: 24 },
  mcOpt: {
    backgroundColor: '#071828', borderRadius: 14,
    padding: 18, paddingHorizontal: 20, marginBottom: 12,
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1, borderColor: '#0d1f30',
  },
  mcRight: { backgroundColor: '#071828', borderColor: '#00B4D8', borderWidth: 2 },
  mcWrong: { backgroundColor: '#1A0808', borderColor: '#E63946', borderWidth: 2 },
  mcOptText: { fontSize: 18, color: '#FFFFFF', fontWeight: '600', flex: 1 },
  typeInput: {
    backgroundColor: '#071828', borderRadius: 14, padding: 20,
    color: '#FFFFFF', fontSize: 22, borderWidth: 1, borderColor: '#0A3050',
    marginBottom: 14, textAlign: 'center', fontWeight: '700',
  },
  typeRight: { borderColor: '#00B4D8', borderWidth: 2 },
  typeWrong: { borderColor: '#E63946', borderWidth: 2 },
  correctBox: { backgroundColor: '#071828', borderRadius: 10, padding: 14, marginBottom: 14, borderLeftWidth: 3, borderLeftColor: '#00B4D8' },
  correctLabel: { color: '#00B4D8', fontSize: 14, fontWeight: '700', marginBottom: 6 },
  correctText: { color: '#FFFFFF', fontSize: 20, fontWeight: '800' },
  explanBox: { backgroundColor: '#071828', borderRadius: 12, padding: 16, marginBottom: 16, borderLeftWidth: 3 },
  explanText: { color: '#FFFFFF', fontSize: 16, lineHeight: 26 },

  // Complete
  completeMedal: { fontSize: 80, textAlign: 'center', marginBottom: 16 },
  completeTitle: { fontSize: 26, fontWeight: '900', color: '#fff', textAlign: 'center', marginBottom: 10 },
  completeMsg: { fontSize: 18, fontWeight: '600', textAlign: 'center', marginBottom: 24, lineHeight: 26 },
  statBox: { borderRadius: 16, borderWidth: 1, padding: 16, alignItems: 'center', marginBottom: 12, width: '100%' },
  statNum: { fontSize: 40, fontWeight: '900' },
  statLbl: { fontSize: 14, color: 'rgba(255,255,255,0.6)', marginTop: 4, fontWeight: '600' },
  keyFactBox: { borderRadius: 14, padding: 16, borderWidth: 1, alignItems: 'center', marginBottom: 20, width: '100%' },
  keyFactLabel: { fontSize: 13, fontWeight: '800', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 },
  keyFactText: { color: '#FFFFFF', fontSize: 17, lineHeight: 26, textAlign: 'center', fontWeight: '600' },

  // Big button
  bigBtn: { borderRadius: 18, padding: 20, alignItems: 'center', marginTop: 8 },
  bigBtnOff: { opacity: 0.35 },
  bigBtnText: { color: '#FFFFFF', fontWeight: '900', fontSize: 18, letterSpacing: 0.3 },

  bonusBox: {
    width: '100%', borderRadius: 16, padding: 16, marginBottom: 12,
    backgroundColor: 'rgba(255,215,0,0.08)',
    borderWidth: 2, borderColor: '#FFD700',
    alignItems: 'center',
  },
  bonusEmoji: { fontSize: 32, marginBottom: 4 },
  bonusLabel: { fontSize: 12, fontWeight: '900', color: '#FFD700', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 },
  bonusXP: { fontSize: 36, fontWeight: '900', color: '#FFD700', lineHeight: 40 },
  bonusDesc: { fontSize: 14, color: 'rgba(255,215,0,0.7)', marginTop: 4, fontWeight: '600' },
});
