import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Modal, TextInput, Alert, ActivityIndicator, Animated, Dimensions,
} from 'react-native';
import LessonImage from '../components/LessonImage';
import InteractiveLesson from '../components/InteractiveLesson';
import { BrainTeaser, DomainExpansion, TeachItBack, Challenge, Telugu } from '../components/ActivityModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { colors, subjectColor } from '../theme/colors';
import {
  XP_VALUES, JJK_NAMES, ACTIVITY_EMOJIS, ACTIVITY_ORDER,
  getLevelForXP, getNextLevel,
} from '../theme/levels';
import { allDays } from '../data/allDays';
import { speakTelugu } from '../utils/tts';
import {
  getXP, addXP, getCompletedDays, markDayComplete,
  getCompletedActivities, markActivityComplete,
  saveGoExploreResponse, saveTeachResponse, addFlag,
} from '../utils/storage';

const { width: SW } = Dimensions.get('window');
const wordCount = (t) => t.trim().split(/\s+/).filter(Boolean).length;

// ─── Simple Markdown Renderer ─────────────────────────────────────────────────
// Renders **bold**, newlines, and bullet points from lesson content
function SimpleMarkdown({ text, style }) {
  if (!text) return null;
  const lines = text.replace(/\\n/g, '\n').split('\n');
  return (
    <View>
      {lines.map((line, i) => {
        if (!line.trim()) return <View key={i} style={{ height: 8 }} />;
        // Parse **bold** segments
        const parts = line.split(/\*\*([^*]+)\*\*/g);
        return (
          <Text key={i} style={[style, { marginBottom: 2 }]}>
            {parts.map((part, j) =>
              j % 2 === 1
                ? <Text key={j} style={{ fontWeight: '800', color: '#FFFFFF' }}>{part}</Text>
                : part
            )}
          </Text>
        );
      })}
    </View>
  );
}


const quizUnlocked = (ca, dayId) =>
  ['lesson1','lesson2','lesson3'].every(k => ca[`${dayId}_${k}`]);

// Subject accent colors — bright, distinct
const SUBJ_COLOR = {
  math:    '#5B8FD4',
  science: '#4AB88A',
  history: '#C17B3A',
  ela:     '#9B6FD4',
  telugu:  '#E07A5F',
  mixed:   '#00B4D8',
};
const SUBJ_BG = {
  math:    'rgba(91,143,212,0.12)',
  science: 'rgba(74,184,138,0.12)',
  history: 'rgba(193,123,58,0.12)',
  ela:     'rgba(155,111,212,0.12)',
  telugu:  'rgba(224,122,95,0.12)',
  mixed:   'rgba(0,180,216,0.12)',
};

// Which activity key maps to which subject color
const ACT_SUBJECT = {
  lesson1: 'math', lesson2: 'science', lesson3: 'history',
  quiz: 'mixed', brainTeaser: 'ela', goExplore: 'science',
  teachItBack: 'mixed', challenge: 'math', telugu: 'telugu',
};

// ─── XP Flash ────────────────────────────────────────────────────────────────
function XPFlash({ amount, visible }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (visible) {
      opacity.setValue(1); y.setValue(0);
      Animated.parallel([
        Animated.timing(opacity, { toValue: 0, duration: 1400, useNativeDriver: true }),
        Animated.timing(y, { toValue: -50, duration: 1400, useNativeDriver: true }),
      ]).start();
    }
  }, [visible]);
  if (!visible) return null;
  return (
    <Animated.Text style={[g.xpFlash, { opacity, transform: [{ translateY: y }] }]}>
      +{amount} XP ⚡
    </Animated.Text>
  );
}

// ─── BIG Activity Card ────────────────────────────────────────────────────────
// Each activity is a tall, visually distinct card — not a thin list row
function ActivityCard({ actKey, activity, completed, isActive, isLocked, onPress }) {
  const subject = activity?.subject || ACT_SUBJECT[actKey] || 'mixed';
  const accent = SUBJ_COLOR[subject] || '#00B4D8';
  const accentBg = SUBJ_BG[subject] || 'rgba(0,180,216,0.12)';
  const isThatha = activity?.isThatha;

  if (isLocked) {
    return (
      <View style={g.cardLocked}>
        <View style={g.cardLockedIcon}>
          <Text style={{ fontSize: 28 }}>🔒</Text>
        </View>
        <View style={g.cardLockedBody}>
          <Text style={g.cardLockedTitle}>{JJK_NAMES[actKey]}</Text>
          <Text style={g.cardLockedSub}>
            {actKey === 'teachItBack' || actKey === 'challenge'
              ? 'Finish lessons + quiz first'
              : 'Finish all 3 lessons first'}
          </Text>
        </View>
      </View>
    );
  }

  if (completed) {
    return (
      <View style={[g.cardDone, { borderLeftColor: accent }]}>
        <View style={[g.cardDoneIcon, { backgroundColor: accentBg }]}>
          <Text style={{ fontSize: 26 }}>{ACTIVITY_EMOJIS[actKey] || '✅'}</Text>
        </View>
        <View style={g.cardDoneBody}>
          <Text style={[g.cardDoneLabel, { color: accent }]} numberOfLines={1}>
            {actKey === 'lesson1' ? 'Math · Cursed Technique'
              : actKey === 'lesson2' ? 'Science · Cursed Technique II'
              : actKey === 'lesson3' ? `${activity?.subject === 'ela' ? 'ELA' : 'History'} · Cursed Technique III`
              : JJK_NAMES[actKey]}
          </Text>
          <Text style={g.cardDoneTitle} numberOfLines={1}>
            {activity?.title || activity?.concept || JJK_NAMES[actKey]}
          </Text>
        </View>
        <View style={[g.cardDoneCheck, { backgroundColor: accent }]}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '900' }}>✓</Text>
        </View>
      </View>
    );
  }

  if (isActive) {
    // BIG glowing card for the current activity
    return (
      <TouchableOpacity style={[g.cardActive, { borderColor: accent }]} onPress={onPress} activeOpacity={0.8}>
        {/* Colored background tint */}
        <View style={[g.cardActiveTint, { backgroundColor: accentBg }]} />
        
        <View style={g.cardActiveTop}>
          <View style={[g.cardActiveBadge, { backgroundColor: accent + '22', borderColor: accent + '44' }]}>
            <Text style={[g.cardActiveBadgeText, { color: accent }]}>
              {actKey === 'lesson1' ? '📐 MATH'
                : actKey === 'lesson2' ? '🔬 SCIENCE'
                : actKey === 'lesson3' ? (activity?.subject === 'ela' ? '📝 ELA' : '🏛️ HISTORY')
                : actKey === 'quiz' ? '❓ BINDING VOW'
                : actKey === 'brainTeaser' ? '🧩 BRAIN TEASER'
                : actKey === 'goExplore' ? '🔭 GO EXPLORE'
                : actKey === 'teachItBack' ? '👨‍🏫 TEACH BACK'
                : actKey === 'challenge' ? (isThatha ? '🧮 THATHA' : '⚔️ CHALLENGE')
                : actKey === 'telugu' ? '🗣️ TELUGU'
                : '⚡ MISSION'}
            </Text>
          </View>
          <Text style={[g.cardActiveXp, { color: accent, marginLeft: 'auto' }]}>+{XP_VALUES[actKey] || 10} XP</Text>
        </View>

        <Text style={g.cardActiveTitle}>
          {activity?.title || activity?.concept || JJK_NAMES[actKey]}
        </Text>

        {actKey === 'quiz' && (
          <Text style={g.cardActiveDesc}>12 questions · Math, Science, History</Text>
        )}
        {actKey === 'brainTeaser' && (
          <Text style={g.cardActiveDesc}>Think it through · 20 words to unlock answer</Text>
        )}
        {actKey === 'goExplore' && (
          <Text style={g.cardActiveDesc}>Video + research · 50 word write-up</Text>
        )}
        {actKey === 'teachItBack' && (
          <Text style={g.cardActiveDesc}>Teach someone · 30 words minimum</Text>
        )}
        {actKey === 'telugu' && (
          <Text style={g.cardActiveDesc}>5-step · Learn, recall, speak, bonus XP</Text>
        )}

        <View style={[g.cardActiveBtn, { backgroundColor: accent }]}>
          <Text style={g.cardActiveBtnText}>START MISSION →</Text>
        </View>
      </TouchableOpacity>
    );
  }

  // Upcoming (not active yet, not locked, not done) — visible but not tappable
  return (
    <View style={[g.cardUpcoming, { borderLeftColor: accent + '30' }, { opacity: 0.6 }]}>
      <View style={[g.cardUpcomingIcon, { backgroundColor: accentBg }]}>
        <Text style={{ fontSize: 24 }}>{ACTIVITY_EMOJIS[actKey] || '📌'}</Text>
      </View>
      <View style={g.cardUpcomingBody}>
        <Text style={[g.cardUpcomingLabel, { color: accent }]} numberOfLines={1}>
          {actKey === 'lesson1' ? 'Math · Cursed Technique'
            : actKey === 'lesson2' ? 'Science · Cursed Technique II'
            : actKey === 'lesson3' ? `${activity?.subject === 'ela' ? 'ELA' : 'History'} · Cursed Technique III`
            : JJK_NAMES[actKey]}
        </Text>
        <Text style={g.cardUpcomingTitle} numberOfLines={1}>
          {activity?.title || activity?.concept || JJK_NAMES[actKey]}
        </Text>
      </View>
      <Text style={[g.cardUpcomingXp, { color: accent + '60' }]}>+{XP_VALUES[actKey] || 10}</Text>
    </View>
  );
}

// ─── Lesson Modal ─────────────────────────────────────────────────────────────
// ─── Rich text renderer ───────────────────────────────────────────────────────
function RichText({ text, style }) {
  if (!text) return null;
  const raw = text.replace(/\\n/g, '\n');
  const lines = raw.split('\n');
  return (
    <View>
      {lines.map((line, i) => {
        if (!line.trim()) return <View key={i} style={{ height: 10 }} />;
        const parts = line.split(/\*\*([^*]+)\*\*/g);
        return (
          <Text key={i} style={[style, { marginBottom: 4 }]}>
            {parts.map((part, j) =>
              j % 2 === 1
                ? <Text key={j} style={{ fontWeight: '900', color: '#FFFFFF' }}>{part}</Text>
                : part
            )}
          </Text>
        );
      })}
    </View>
  );
}

function LessonModal({ actKey, activity, onComplete, onFlag }) {
  const subj = activity.subject || 'math';
  const accent = SUBJ_COLOR[subj] || '#00B4D8';
  const accentBg = SUBJ_BG[subj] || 'rgba(0,180,216,0.1)';

  return (
    <View style={m.inner}>
      {/* Colored subject header */}
      <View style={[m.header, { backgroundColor: accentBg, borderBottomColor: accent + '40' }]}>
        <Text style={[m.headerTag, { color: accent }]}>{JJK_NAMES[actKey]} · {subj.toUpperCase()}</Text>
        <Text style={m.headerTitle}>{activity.title}</Text>
        <Text style={[m.headerSub, { color: accent }]}>+{XP_VALUES[actKey]} Cursed XP ⚡</Text>
      </View>

      <ScrollView style={m.scroll} showsVerticalScrollIndicator={false}>
        {/* Claude-generated visual breakdown — 3 punchy points */}
        <LessonImage
          imageQuery={activity.imageQuery}
          subject={subj}
          title={activity.title}
          content={activity.content}
        />

        {/* Lesson content with proper bold/paragraph rendering */}
        <View style={[m.lessonCard, { borderLeftColor: accent }]}>
          <RichText text={activity.content} style={m.lessonText} />
        </View>

        {/* Key fact — big and dramatic */}
        {activity.keyFact ? (
          <View style={[m.keyFact, { borderColor: accent + '50', backgroundColor: accent + '10' }]}>
            <Text style={[m.keyFactEmoji]}>⚡</Text>
            <Text style={[m.keyFactLabel, { color: accent }]}>KEY FACT</Text>
            <Text style={m.keyFactText}>{activity.keyFact}</Text>
          </View>
        ) : null}
      </ScrollView>

      <TouchableOpacity style={m.flagBtn} onPress={onFlag}>
        <Text style={m.flagBtnText}>🚩 Flag for Later</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[m.cta, { backgroundColor: accent }]} onPress={onComplete}>
        <Text style={m.ctaText}>Got it! +{XP_VALUES[actKey]} XP ✓</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Quiz Modal ───────────────────────────────────────────────────────────────
function QuizModal({ activity, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const total = activity.questions.length;

  const q = showCelebration ? null : activity.questions[current];
  const subj = q?.subject || 'math';
  const accent = SUBJ_COLOR[subj] || '#00B4D8';

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx); setShowResult(true);
    if (idx === q.answer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent(c => c + 1); setSelected(null); setShowResult(false);
    } else {
      const fs = score + (selected === q.answer ? 1 : 0);
      setFinalScore(fs);
      setShowCelebration(true);
    }
  };

  if (showCelebration) {
    const pct = Math.round((finalScore / total) * 100);
    const isPerfect = finalScore === total;
    const isGreat = pct >= 90;
    const medal = isPerfect ? '🏆' : isGreat ? '⭐' : pct >= 60 ? '💪' : '📚';
    const msg = isPerfect ? 'Perfect Binding Vow! Undefeated!'
      : isGreat ? `${pct}% — Quiz Master bonus earned!`
      : pct >= 60 ? 'Good effort! Keep training.'
      : 'Review the lessons and try again next time.';
    const bonusXP = isGreat ? 2 : 0;
    return (
      <View style={[m.inner, { justifyContent: 'center', alignItems: 'center', paddingHorizontal: 28 }]}>
        <Text style={{ fontSize: 72, marginBottom: 16 }}>{medal}</Text>
        <Text style={[m.headerTitle, { fontSize: 24, textAlign: 'center', marginBottom: 10 }]}>Binding Vow Complete!</Text>
        <Text style={{ fontSize: 17, color: '#00B4D8', textAlign: 'center', marginBottom: 24, fontWeight: '600' }}>{msg}</Text>

        <View style={[m.quizStatBox, { borderColor: '#00B4D840', backgroundColor: 'rgba(0,180,216,0.08)' }]}>
          <Text style={[m.quizStatNum, { color: '#00B4D8' }]}>{finalScore}/{total}</Text>
          <Text style={m.quizStatLbl}>Questions Correct</Text>
        </View>

        <View style={[m.quizStatBox, { borderColor: '#00B4D840', backgroundColor: 'rgba(0,180,216,0.08)' }]}>
          <Text style={[m.quizStatNum, { color: '#00B4D8' }]}>{pct}%</Text>
          <Text style={m.quizStatLbl}>Score</Text>
        </View>

        <View style={[m.quizStatBox, { borderColor: '#FFD70050', backgroundColor: 'rgba(255,215,0,0.08)' }]}>
          <Text style={[m.quizStatNum, { color: '#FFD700' }]}>+{XP_VALUES.quiz}{bonusXP > 0 ? ` + ${bonusXP}` : ''} XP</Text>
          <Text style={m.quizStatLbl}>{bonusXP > 0 ? 'Cursed XP + Quiz Master Bonus' : 'Cursed XP Earned'}</Text>
        </View>

        {isGreat && (
          <View style={[m.quizBonusBox]}>
            <Text style={m.quizBonusText}>⚡ QUIZ MASTER BONUS +2 XP</Text>
          </View>
        )}

        <TouchableOpacity style={[m.cta, { backgroundColor: '#00B4D8', marginTop: 20, width: '100%' }]}
          onPress={() => onComplete({ score: finalScore, total })}>
          <Text style={m.ctaText}>Collect +{XP_VALUES.quiz + bonusXP} XP ✓</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={m.inner}>
      <View style={[m.header, { backgroundColor: 'rgba(0,180,216,0.08)', borderBottomColor: '#00B4D830' }]}>
        <Text style={[m.headerTag, { color: accent }]}>
          BINDING VOW · {subj.toUpperCase()} · {current + 1}/{total}
        </Text>
        <View style={m.pipRowQ}>
          {activity.questions.map((_, i) => (
            <View key={i} style={[m.pipQ, i < current && m.pipQDone, i === current && m.pipQActive]} />
          ))}
        </View>
      </View>
      <Text style={m.quizQ}>{q.q}</Text>
      <ScrollView style={m.scroll} showsVerticalScrollIndicator={false}>
        {q.options.map((opt, i) => (
          <TouchableOpacity key={i}
            style={[m.quizOpt, showResult && i === q.answer && m.quizOptRight, showResult && i === selected && i !== q.answer && m.quizOptWrong]}
            onPress={() => handleSelect(i)}
          >
            <Text style={[m.quizOptText, showResult && i === q.answer && m.quizOptTextRight, showResult && i === selected && i !== q.answer && m.quizOptTextWrong]}>
              {opt}
            </Text>
            {showResult && i === q.answer && <Text style={{ fontSize: 18 }}>✅</Text>}
            {showResult && i === selected && i !== q.answer && <Text style={{ fontSize: 18 }}>❌</Text>}
          </TouchableOpacity>
        ))}
        {showResult && <View style={m.expl}><Text style={m.explText}>{q.explanation}</Text></View>}
        {showResult && (
          <TouchableOpacity style={[m.cta, { marginTop: 12 }]} onPress={handleNext}>
            <Text style={m.ctaText}>{current < total - 1 ? 'Next →' : 'See Results →'}</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

// ─── Brain Teaser Modal ───────────────────────────────────────────────────────
function BrainTeaserModal({ activity, onComplete, onFlag }) {
  const [response, setResponse] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const wc = wordCount(response);
  const ready = wc >= 20;
  return (
    <View style={m.inner}>
      <View style={[m.header, { backgroundColor: 'rgba(155,111,212,0.1)', borderBottomColor: '#9B6FD430' }]}>
        <Text style={[m.headerTag, { color: '#9B6FD4' }]}>🧩 BRAIN TEASER</Text>
        <Text style={m.headerTitle}>Think It Through</Text>
      </View>
      <ScrollView style={m.scroll} showsVerticalScrollIndicator={false}>
        <View style={[m.promptBox, { borderLeftColor: '#9B6FD4' }]}>
          <Text style={m.promptText}>{activity.teaser}</Text>
        </View>
        {activity.hint && !showAnswer && (
          <View style={m.hintBox}><Text style={m.hintText}>💡 {activity.hint}</Text></View>
        )}
        <Text style={m.inputLabel}>Your thinking (minimum 20 words):</Text>
        <TextInput style={m.input} value={response} onChangeText={setResponse}
          placeholder="Write your reasoning here..." placeholderTextColor="rgba(255,255,255,0.2)" multiline />
        <Text style={[m.wc, ready && m.wcReady]}>{wc} / 20 words {ready ? '✓' : ''}</Text>
        {ready && !showAnswer && (
          <TouchableOpacity style={m.revealBtn} onPress={() => setShowAnswer(true)}>
            <Text style={m.revealBtnText}>👁 Reveal Answer</Text>
          </TouchableOpacity>
        )}
        {showAnswer && (
          <View style={m.answerBox}>
            <Text style={m.answerLabel}>ANSWER</Text>
            <Text style={m.answerText}>{activity.answer}</Text>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity style={m.flagBtn} onPress={onFlag}><Text style={m.flagBtnText}>🚩 Flag for Later</Text></TouchableOpacity>
      <TouchableOpacity style={[m.cta, !ready && m.ctaOff]} onPress={ready ? onComplete : undefined}>
        <Text style={m.ctaText}>Done! +{XP_VALUES.brainTeaser} XP ✓</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Domain Expansion Modal ───────────────────────────────────────────────────
function DomainExpansionModal({ activity, dayId, onComplete, onFlag }) {
  const [q1, setQ1] = useState(''); const [q2, setQ2] = useState(''); const [writing, setWriting] = useState('');
  const wc = wordCount(writing);
  const ready = wc >= 50 && q1.trim().length > 5 && q2.trim().length > 5;
  const questions = activity.partB?.questions || [];
  const handleComplete = async () => { await saveGoExploreResponse(dayId, { q1, q2, writing }); onComplete(); };
  return (
    <View style={m.inner}>
      <View style={[m.header, { backgroundColor: 'rgba(230,57,70,0.08)', borderBottomColor: '#E6394630' }]}>
        <Text style={[m.headerTag, { color: '#E63946' }]}>🔭 DOMAIN EXPANSION</Text>
        <Text style={m.headerTitle}>{activity.title || 'Go Explore'}</Text>
      </View>
      <ScrollView style={m.scroll} showsVerticalScrollIndicator={false}>
        {activity.partA?.instruction && (
          <View style={[m.promptBox, { borderLeftColor: '#E63946' }]}>
            <Text style={m.promptText}>{activity.partA.instruction}</Text>
            {activity.partA.url && <Text style={m.urlText}>🔗 {activity.partA.url}</Text>}
          </View>
        )}
        {questions[0] && (<><Text style={m.inputLabel}>{questions[0]}</Text><TextInput style={m.input} value={q1} onChangeText={setQ1} placeholder="Your answer..." placeholderTextColor="rgba(255,255,255,0.2)" multiline /></>)}
        {questions[1] && (<><Text style={[m.inputLabel, { marginTop: 12 }]}>{questions[1]}</Text><TextInput style={m.input} value={q2} onChangeText={setQ2} placeholder="Your answer..." placeholderTextColor="rgba(255,255,255,0.2)" multiline /></>)}
        <Text style={[m.inputLabel, { marginTop: 12 }]}>✍️ {activity.writingPrompt}</Text>
        <TextInput style={[m.input, { minHeight: 120 }]} value={writing} onChangeText={setWriting} placeholder="Write at least 50 words..." placeholderTextColor="rgba(255,255,255,0.2)" multiline />
        <Text style={[m.wc, wc >= 50 && m.wcReady]}>{wc} / 50 words {wc >= 50 ? '✓' : ''}</Text>
      </ScrollView>
      <TouchableOpacity style={m.flagBtn} onPress={onFlag}><Text style={m.flagBtnText}>🚩 Flag for Later</Text></TouchableOpacity>
      <TouchableOpacity style={[m.cta, !ready && m.ctaOff]} onPress={ready ? handleComplete : undefined}>
        <Text style={m.ctaText}>Submit +{XP_VALUES.goExplore} XP ✓</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Reverse Cursed Technique Modal ──────────────────────────────────────────
function ReverseModal({ activity, dayId, onComplete, onFlag }) {
  const [response, setResponse] = useState('');
  const wc = wordCount(response); const ready = wc >= 30;
  const handleComplete = async () => { await saveTeachResponse(dayId, response); onComplete(); };
  return (
    <View style={m.inner}>
      <View style={[m.header, { backgroundColor: 'rgba(74,184,138,0.08)', borderBottomColor: '#4AB88A30' }]}>
        <Text style={[m.headerTag, { color: '#4AB88A' }]}>👨‍🏫 REVERSE CURSED TECHNIQUE</Text>
        <Text style={m.headerTitle}>{activity.concept || 'Teach It Back'}</Text>
      </View>
      <ScrollView style={m.scroll} showsVerticalScrollIndicator={false}>
        <View style={[m.promptBox, { borderLeftColor: '#4AB88A' }]}><Text style={m.promptText}>{activity.prompt}</Text></View>
        <Text style={m.inputLabel}>✍️ {activity.followUp}</Text>
        <TextInput style={[m.input, { minHeight: 120 }]} value={response} onChangeText={setResponse} placeholder="Write at least 30 words about what happened..." placeholderTextColor="rgba(255,255,255,0.2)" multiline />
        <Text style={[m.wc, ready && m.wcReady]}>{wc} / 30 words {ready ? '✓' : ''}</Text>
      </ScrollView>
      <TouchableOpacity style={m.flagBtn} onPress={onFlag}><Text style={m.flagBtnText}>🚩 Flag for Later</Text></TouchableOpacity>
      <TouchableOpacity style={[m.cta, { backgroundColor: '#4AB88A' }, !ready && m.ctaOff]} onPress={ready ? handleComplete : undefined}>
        <Text style={m.ctaText}>Done! +{XP_VALUES.teachItBack} XP ✓</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Challenge Modal ──────────────────────────────────────────────────────────
function ChallengeModal({ activity, onComplete, onFlag }) {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const accent = activity.isThatha ? '#F4A261' : '#E63946';
  return (
    <View style={m.inner}>
      <View style={[m.header, { backgroundColor: activity.isThatha ? 'rgba(244,162,97,0.1)' : 'rgba(230,57,70,0.08)', borderBottomColor: accent + '30' }]}>
        <Text style={[m.headerTag, { color: accent }]}>
          {activity.isThatha ? "🧮 THATHA'S BINDING VOW" : '⚔️ SPECIAL GRADE MISSION'}
        </Text>
        <Text style={m.headerTitle}>{activity.isThatha ? 'Get Thatha!' : 'Challenge'}</Text>
      </View>
      <ScrollView style={m.scroll} showsVerticalScrollIndicator={false}>
        {activity.isThatha && (
          <View style={[m.thathaBox]}><Text style={m.thathaText}>🧮 Get Thatha — this one's for both of you.</Text></View>
        )}
        <View style={[m.promptBox, { borderLeftColor: accent }]}><Text style={m.promptText}>{activity.problem}</Text></View>
        {activity.hint && !showHint && (
          <TouchableOpacity style={m.hintBtn} onPress={() => setShowHint(true)}><Text style={m.hintBtnText}>💡 Show Hint</Text></TouchableOpacity>
        )}
        {showHint && <View style={m.hintBox}><Text style={m.hintText}>💡 {activity.hint}</Text></View>}
        {!showAnswer && (
          <TouchableOpacity style={m.revealBtn} onPress={() => setShowAnswer(true)}><Text style={m.revealBtnText}>👁 Reveal Answer</Text></TouchableOpacity>
        )}
        {showAnswer && <View style={m.answerBox}><Text style={m.answerLabel}>ANSWER</Text><Text style={m.answerText}>{activity.answer}</Text></View>}
      </ScrollView>
      <TouchableOpacity style={m.flagBtn} onPress={onFlag}><Text style={m.flagBtnText}>🚩 Flag for Later</Text></TouchableOpacity>
      <TouchableOpacity style={[m.cta, { backgroundColor: accent }]} onPress={onComplete}>
        <Text style={m.ctaText}>Completed! +{XP_VALUES.challenge} XP ✓</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── Telugu Modal ─────────────────────────────────────────────────────────────
function TeluguModal({ activity, onComplete }) {
  const [speakingIdx, setSpeakingIdx] = useState(null);
  const [heard, setHeard] = useState(new Set());
  const [step, setStep] = useState(0);
  const [recallAns, setRecallAns] = useState({});
  const [recallDone, setRecallDone] = useState(false);
  const [useItText, setUseItText] = useState('');
  const [bonus, setBonus] = useState(false);
  const phrases = activity.newPhrases || [];
  const recallQuiz = activity.recallQuiz || [];

  const handleSpeak = async (idx, text) => {
    setSpeakingIdx(idx); await speakTelugu(text);
    setHeard(prev => new Set([...prev, idx])); setSpeakingIdx(null);
  };
  const handleRecall = (qIdx, oIdx) => {
    if (recallAns[qIdx] !== undefined) return;
    setRecallAns(prev => ({ ...prev, [qIdx]: oIdx }));
  };
  useEffect(() => {
    if (recallQuiz.length > 0 && Object.keys(recallAns).length === recallQuiz.length) setRecallDone(true);
  }, [recallAns]);

  const canLearn = heard.size >= Math.min(phrases.length, 2);
  const canRecall = recallDone || recallQuiz.length === 0;
  const canUse = useItText.trim().length > 10;
  const totalXP = XP_VALUES.telugu + (bonus ? XP_VALUES.teluguBonus : 0);

  return (
    <View style={m.inner}>
      <View style={[m.header, { backgroundColor: 'rgba(224,122,95,0.1)', borderBottomColor: '#E07A5F30' }]}>
        <Text style={[m.headerTag, { color: '#E07A5F' }]}>🗣️ TELUGU INCANTATION</Text>
        <Text style={m.headerTitle}>{activity.theme || 'Today\'s Phrases'}</Text>
      </View>
      <View style={m.stepRow}>
        {['Learn','Recall','Use It','Bonus'].map((label, i) => (
          <View key={i} style={[m.stepPill, step === i && m.stepPillOn, step > i && m.stepPillDone]}>
            <Text style={[m.stepText, (step === i || step > i) && m.stepTextOn]}>{step > i ? '✓' : label}</Text>
          </View>
        ))}
      </View>
      <ScrollView style={m.scroll} showsVerticalScrollIndicator={false}>
        {step === 0 && (
          <View>
            {phrases.map((p, idx) => (
              <View key={idx} style={m.phraseCard}>
                <Text style={m.phraseScript}>{p.telugu}</Text>
                <Text style={m.phraseRoman}>{p.romanized}</Text>
                <Text style={m.phraseEn}>{p.english}</Text>
                {p.tip ? <Text style={m.phraseTip}>💡 {p.tip}</Text> : null}
                <TouchableOpacity style={[m.speakBtn, heard.has(idx) && m.speakBtnDone]} onPress={() => handleSpeak(idx, p.telugu)} disabled={speakingIdx !== null}>
                  {speakingIdx === idx ? <ActivityIndicator color="#fff" size="small" /> : <Text style={m.speakBtnText}>{heard.has(idx) ? '🔊 Heard ✓' : '🔊 Hear it'}</Text>}
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={[m.cta, { backgroundColor: '#E07A5F' }, !canLearn && m.ctaOff]} onPress={canLearn ? () => setStep(1) : undefined}>
              <Text style={m.ctaText}>Next: Recall Quiz →</Text>
            </TouchableOpacity>
          </View>
        )}
        {step === 1 && (
          <View>
            <Text style={m.sectionTitle}>🧠 Can you remember these?</Text>
            {recallQuiz.length === 0 ? <Text style={m.hint}>No recall quiz yet — you're just getting started!</Text>
              : recallQuiz.map((q, qIdx) => (
                <View key={qIdx} style={{ marginBottom: 16 }}>
                  <Text style={m.recallQ}>"{q.romanized}"</Text>
                  {q.options.map((opt, oIdx) => {
                    const answered = recallAns[qIdx] !== undefined;
                    const isRight = oIdx === q.answer; const isSel = recallAns[qIdx] === oIdx;
                    return (
                      <TouchableOpacity key={oIdx} style={[m.quizOpt, answered && isRight && m.quizOptRight, answered && isSel && !isRight && m.quizOptWrong]} onPress={() => handleRecall(qIdx, oIdx)}>
                        <Text style={m.quizOptText}>{opt}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ))}
            <TouchableOpacity style={[m.cta, { backgroundColor: '#E07A5F' }, !canRecall && m.ctaOff]} onPress={canRecall ? () => setStep(2) : undefined}>
              <Text style={m.ctaText}>Next: Use It →</Text>
            </TouchableOpacity>
          </View>
        )}
        {step === 2 && (
          <View>
            <Text style={m.sectionTitle}>💬 Use It</Text>
            <View style={[m.promptBox, { borderLeftColor: '#E07A5F' }]}><Text style={m.promptText}>{activity.useItPrompt}</Text></View>
            <TextInput style={[m.input, { minHeight: 100 }]} value={useItText} onChangeText={setUseItText} placeholder="Write what you said and how it went..." placeholderTextColor="rgba(255,255,255,0.2)" multiline />
            <TouchableOpacity style={[m.cta, { backgroundColor: '#E07A5F' }, !canUse && m.ctaOff]} onPress={canUse ? () => setStep(3) : undefined}>
              <Text style={m.ctaText}>Next: Bonus →</Text>
            </TouchableOpacity>
          </View>
        )}
        {step === 3 && (
          <View>
            <Text style={m.sectionTitle}>⭐ Bonus XP</Text>
            <View style={[m.promptBox, { borderLeftColor: '#FFD700' }]}><Text style={m.promptText}>{activity.bonusPrompt}</Text></View>
            <TouchableOpacity style={[m.bonusBox, bonus && m.bonusBoxOn]} onPress={() => setBonus(b => !b)}>
              <Text style={m.bonusText}>{bonus ? '✅ Yes! +5 Cursed XP' : '☐ Yes, I said 3 Telugu sentences today'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[m.cta, { backgroundColor: '#E07A5F' }]} onPress={() => onComplete(bonus)}>
              <Text style={m.ctaText}>Complete! +{totalXP} XP ✓</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

// ─── Main TodayScreen ─────────────────────────────────────────────────────────
export default function TodayScreen({ route }) {
  const routeDayId = route?.params?.dayId;
  const [dayIdx, setDayIdx] = useState(0);
  const [ca, setCa] = useState({});
  const [doneIds, setDoneIds] = useState([]);
  const [activeAct, setActiveAct] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [xp, setXp] = useState(0);
  const [loading, setLoading] = useState(true);
  const [flash, setFlash] = useState({ visible: false, amount: 0 });

  const day = allDays[dayIdx];
  const acts = day?.activities || {};
  const keys = ACTIVITY_ORDER.filter(k => acts[k]);
  const doneCount = keys.filter(k => ca[`${day?.id}_${k}`]).length;
  const allDone = doneCount === keys.length;

  useFocusEffect(useCallback(() => { load(); }, [routeDayId]));

  const load = async () => {
    setLoading(true);
    const [a, d, x] = await Promise.all([getCompletedActivities(), getCompletedDays(), getXP()]);
    setCa(a); setDoneIds(d.map(dd => dd.id)); setXp(x);
    if (routeDayId) {
      const i = allDays.findIndex(dd => dd.id === routeDayId);
      if (i !== -1) { setDayIdx(i); setLoading(false); return; }
    }
    for (let i = 0; i < allDays.length; i++) {
      const dd = allDays[i];
      const ks = ACTIVITY_ORDER.filter(k => dd.activities?.[k]);
      if (!ks.every(k => a[`${dd.id}_${k}`])) { setDayIdx(i); break; }
    }
    setLoading(false);
  };

  const complete = async (key, extra) => {
    if (!day || ca[`${day.id}_${key}`]) { setActiveAct(null); setActiveKey(null); return; }
    await markActivityComplete(day.id, key);
    let amt = XP_VALUES[key] || 10;
    // Lesson perfect score bonus: +1 XP if all practice questions correct
    if ((key === 'lesson1' || key === 'lesson2' || key === 'lesson3') && extra === true) amt += 1;

    // Quiz bonus: extra is the score fraction e.g. {score: 11, total: 12}
    let quizBonus = 0;
    if (key === 'quiz' && extra && extra.score !== undefined) {
      const pct = extra.total > 0 ? (extra.score / extra.total) : 0;
      if (pct >= 0.9) quizBonus = 2;
    }
    amt += quizBonus;
    const { newXP } = await addXP(amt);
    setXp(newXP);
    setFlash({ visible: true, amount: amt });
    setTimeout(() => setFlash({ visible: false, amount: 0 }), 1500);
    // Show quiz bonus banner if earned
    if (quizBonus > 0) {
      setTimeout(() => Alert.alert("🏆 Quiz Master!", "You scored 90%+ on today's Binding Vow! +2 bonus Cursed XP"), 1600);
    }
    const newCa = { ...ca, [`${day.id}_${key}`]: true };
    setCa(newCa);
    if (keys.every(k => newCa[`${day.id}_${k}`])) {
      await markDayComplete(day.id, day.subject);
      setDoneIds(prev => [...prev, day.id]);
    }
    setActiveAct(null); setActiveKey(null);
  };

  const flag = async () => {
    if (!day || !activeKey) return;
    await addFlag({ dayId: day.id, dayTitle: day.title, activityType: activeKey, activityTitle: acts[activeKey]?.title || JJK_NAMES[activeKey] || '' });
    Alert.alert('Flagged! 🚩', 'Saved to your ask-later list in Sorcerer HQ.');
  };

  const open = (key) => { setActiveKey(key); setActiveAct(acts[key]); };

  const renderModal = () => {
    if (!activeAct || !activeKey) return null;
    const c = (extra) => complete(activeKey, extra);
    if (activeKey === 'lesson1' || activeKey === 'lesson2' || activeKey === 'lesson3')
      return <InteractiveLesson actKey={activeKey} activity={activeAct} onComplete={c} onFlag={flag} />;
    if (activeKey === 'quiz') return <QuizModal activity={activeAct} onComplete={c} />;
    if (activeKey === 'brainTeaser') return <BrainTeaser activity={activeAct} onComplete={c} onFlag={flag} />;
    if (activeKey === 'goExplore') return <DomainExpansion activity={activeAct} dayId={day.id} onComplete={c} onFlag={flag} saveResponse={saveGoExploreResponse} />;
    if (activeKey === 'teachItBack') return <TeachItBack activity={activeAct} dayId={day.id} onComplete={c} onFlag={flag} saveResponse={saveTeachResponse} />;
    if (activeKey === 'challenge') return <Challenge activity={activeAct} onComplete={c} onFlag={flag} />;
    if (activeKey === 'telugu') return <Telugu activity={activeAct} onComplete={c} />;
    return null;
  };

  if (loading) return <SafeAreaView style={g.screen}><ActivityIndicator color="#00B4D8" style={{ marginTop: 100 }} size="large" /></SafeAreaView>;
  if (!day) return <SafeAreaView style={g.screen}><View style={g.center}><Text style={{ fontSize: 48, marginBottom: 16 }}>♾️</Text><Text style={g.centerText}>50 days complete. Unlimited Knowledge.</Text></View></SafeAreaView>;

  const level = getLevelForXP(xp);
  const nextLvl = getNextLevel(xp);
  const pct = nextLvl ? Math.min(100, ((xp - level.xpRequired) / (nextLvl.xpRequired - level.xpRequired)) * 100) : 100;

  return (
    <SafeAreaView style={g.screen}>
      <XPFlash amount={flash.amount} visible={flash.visible} />
      <ScrollView contentContainerStyle={g.scroll} showsVerticalScrollIndicator={false}>

        {/* ── HEADER ── */}
        <View style={g.header}>
          <View style={g.headerRow}>
            <View>
              <Text style={g.kanji}>呪術訓練 · CURSED TRAINING</Text>
              <Text style={g.appName}>Mahoraga</Text>
              <Text style={g.appSub}>Abhi's Domain Expansion</Text>
            </View>
            <View style={g.xpBox}>
              <Text style={g.xpNum}>{xp}</Text>
              <Text style={g.xpStar}>⭐</Text>
              <Text style={g.xpLbl}>CURSED XP</Text>
            </View>
          </View>
          <View style={g.gradeCard}>
            <View style={g.gradeRow}>
              <Text style={g.gradeName}>{level.emoji} {level.title}</Text>
              <Text style={g.gradeNext}>{nextLvl ? `${nextLvl.xpRequired - xp} XP → ${nextLvl.title}` : 'MAX LEVEL ♾️'}</Text>
            </View>
            <View style={g.gradeTrack}>
              <View style={[g.gradeFill, { width: `${pct}%` }]} />
            </View>
          </View>
        </View>

        {/* ── DAY CARD ── */}
        <View style={g.dayCard}>
          <View style={g.dayRow}>
            <TouchableOpacity onPress={() => setDayIdx(i => Math.max(0, i - 1))} disabled={dayIdx === 0} hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
              <Text style={[g.arrow, dayIdx === 0 && g.arrowOff]}>‹</Text>
            </TouchableOpacity>
            <View style={g.dayInfo}>
              <Text style={g.dayMeta}>DAY {day.id} · MIXED DOMAIN</Text>
              <Text style={g.dayTitle}>{day.title}</Text>
              {day.isMilestone && <Text style={g.milestone}>💎 SPECIAL GRADE MILESTONE</Text>}
            </View>
            <TouchableOpacity onPress={() => setDayIdx(i => Math.min(allDays.length - 1, i + 1))} disabled={dayIdx === allDays.length - 1 || !allDone} hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
              <Text style={[g.arrow, dayIdx === allDays.length - 1 && g.arrowOff]}>›</Text>
            </TouchableOpacity>
          </View>
          <View style={g.pips}>
            {keys.map((k, i) => (
              <View key={k} style={[g.pip, ca[`${day.id}_${k}`] ? g.pipDone : i === doneCount ? g.pipActive : g.pipEmpty]} />
            ))}
          </View>
          <Text style={g.pipLabel}>{doneCount} of {keys.length} missions complete</Text>
        </View>

        {/* ── COMPLETE BANNER ── */}
        {allDone && (
          <View style={g.winBanner}>
            <Text style={g.winText}>⚡ Day {day.id} Complete! You crushed it.</Text>
          </View>
        )}

        {/* ── ACTIVITY CARDS ── */}
        <View style={g.cardList}>
          {keys.map((key, idx) => {
            // Free anytime: brainTeaser, goExplore, telugu
            // Locked until lessons + quiz done: teachItBack, challenge
            // Locked until lessons done: quiz
            const FREE_ACTIVITIES = ['brainTeaser', 'goExplore', 'telugu'];
            const quizDone = !!ca[`${day.id}_quiz`];
            const isLocked =
              (key === 'quiz' && !quizUnlocked(ca, day.id)) ||
              ((key === 'teachItBack' || key === 'challenge') && !quizDone);
            const isFree = FREE_ACTIVITIES.includes(key);
            const isDone = !!ca[`${day.id}_${key}`];
            return (
              <ActivityCard
                key={key}
                actKey={key}
                activity={acts[key]}
                completed={isDone}
                isActive={!isDone && !isLocked && (isFree || idx === doneCount)}
                isLocked={isLocked}
                onPress={() => open(key)}
              />
            );
          })}
        </View>

        {/* ── DAY DOTS ── */}
        <View style={g.dots}>
          {allDays.map((d, i) => (
            <TouchableOpacity key={d.id} onPress={() => { if (i <= dayIdx || doneIds.includes(d.id)) setDayIdx(i); }}>
              <View style={[g.dot, doneIds.includes(d.id) && g.dotDone, i === dayIdx && g.dotActive, d.isMilestone && g.dotMile]} />
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      <Modal visible={!!activeAct} animationType="slide" presentationStyle="fullScreen">
        <SafeAreaView style={g.modalShell}>
          <TouchableOpacity style={g.modalClose} onPress={() => { setActiveAct(null); setActiveKey(null); }}>
            <Text style={g.modalCloseText}>✕ Close</Text>
          </TouchableOpacity>
          {renderModal()}
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const g = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#060C1A' },
  scroll: { paddingBottom: 60 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 32 },
  centerText: { color: '#fff', fontSize: 18, textAlign: 'center', marginTop: 16, lineHeight: 26 },
  xpFlash: { position: 'absolute', top: 80, alignSelf: 'center', color: '#FFD700', fontSize: 24, fontWeight: '900', zIndex: 999 },

  // Header
  header: { backgroundColor: '#020A14', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 18, borderBottomWidth: 1, borderBottomColor: 'rgba(0,119,182,0.25)' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  kanji: { fontSize: 11, color: '#00B4D8', fontWeight: '700', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 },
  appName: { fontSize: 32, fontWeight: '900', color: '#FFFFFF', letterSpacing: -1 },
  appSub: { fontSize: 12, color: 'rgba(0,180,216,0.8)', marginTop: 2 },
  xpBox: { alignItems: 'flex-end' },
  xpNum: { fontSize: 28, fontWeight: '900', color: '#FFD700', lineHeight: 28 },
  xpStar: { fontSize: 16, textAlign: 'right' },
  xpLbl: { fontSize: 10, color: 'rgba(255,215,0,0.7)', letterSpacing: 1.5, textTransform: 'uppercase' },
  gradeCard: { backgroundColor: 'rgba(0,180,216,0.08)', borderRadius: 14, padding: 13, paddingHorizontal: 16, borderWidth: 1, borderColor: 'rgba(0,180,216,0.2)' },
  gradeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  gradeName: { fontSize: 14, fontWeight: '800', color: '#FFFFFF' },
  gradeNext: { fontSize: 12, color: 'rgba(0,180,216,0.8)' },
  gradeTrack: { backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 999, height: 6, overflow: 'hidden' },
  gradeFill: { height: 6, borderRadius: 999, backgroundColor: '#00B4D8' },

  // Day card
  dayCard: { backgroundColor: '#07111C', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(0,119,182,0.15)', marginBottom: 16 },
  dayRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  arrow: { fontSize: 36, color: 'rgba(255,255,255,0.7)', paddingHorizontal: 4 },
  arrowOff: { opacity: 0.15 },
  dayInfo: { flex: 1, alignItems: 'center' },
  dayMeta: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 2.5, color: '#00B4D8', marginBottom: 5 },
  dayTitle: { fontSize: 20, fontWeight: '900', color: '#FFFFFF', textAlign: 'center' },
  milestone: { fontSize: 13, color: '#FFD700', marginTop: 4, fontWeight: '700', letterSpacing: 0.5 },
  pips: { flexDirection: 'row', gap: 5, marginBottom: 6 },
  pip: { flex: 1, height: 5, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.07)' },
  pipDone: { backgroundColor: '#0077B6' },
  pipActive: { backgroundColor: '#00B4D8' },
  pipEmpty: { backgroundColor: 'rgba(255,255,255,0.07)' },
  pipLabel: { fontSize: 12, color: 'rgba(0,180,216,0.75)', textAlign: 'center' },

  winBanner: { marginHorizontal: 16, backgroundColor: 'rgba(0,119,182,0.2)', borderRadius: 14, padding: 16, marginBottom: 12, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(0,180,216,0.65)' },
  winText: { color: '#00B4D8', fontWeight: '800', fontSize: 15 },

  // Card list
  cardList: { paddingHorizontal: 16 },

  // ACTIVE card — big, dramatic, colored
  cardActive: {
    borderRadius: 20, marginBottom: 12, padding: 20,
    borderWidth: 2,
    backgroundColor: '#0A0F1A',
    overflow: 'hidden',
    position: 'relative',
  },
  cardActiveTint: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  cardActiveTop: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10, zIndex: 1, gap: 10 },
  cardActiveBadge: { borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5, borderWidth: 1 },
  cardActiveBadgeText: { fontSize: 12, fontWeight: '800', letterSpacing: 0.3 },
  cardActiveXp: { fontSize: 13, fontWeight: '800' },
  cardActiveTitle: { fontSize: 22, fontWeight: '900', color: '#FFFFFF', marginBottom: 6, lineHeight: 26, zIndex: 1 },
  cardActiveDesc: { fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 18, zIndex: 1 },
  cardActiveBtn: { borderRadius: 14, padding: 16, alignItems: 'center', zIndex: 1 },
  cardActiveBtnText: { color: '#FFFFFF', fontWeight: '900', fontSize: 15, letterSpacing: 0.5 },

  // DONE card — faded, checkmark
  cardDone: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#071828', borderRadius: 16, padding: 14, marginBottom: 8,
    borderLeftWidth: 3, opacity: 0.55,
  },
  cardDoneIcon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 12, flexShrink: 0 },
  cardDoneBody: { flex: 1 },
  cardDoneLabel: { fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 },
  cardDoneTitle: { fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: '600' },
  cardDoneCheck: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },

  // LOCKED card
  cardLocked: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#060C1A', borderRadius: 16, padding: 14, marginBottom: 8,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)', opacity: 0.4,
  },
  cardLockedIcon: { width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.04)', alignItems: 'center', justifyContent: 'center', marginRight: 12, flexShrink: 0 },
  cardLockedBody: { flex: 1 },
  cardLockedTitle: { fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: '700', marginBottom: 2 },
  cardLockedSub: { fontSize: 12, color: 'rgba(255,255,255,0.8)' },

  // UPCOMING card
  cardUpcoming: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#071828', borderRadius: 16, padding: 14, marginBottom: 8,
    borderLeftWidth: 3,
  },
  cardUpcomingIcon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 12, flexShrink: 0 },
  cardUpcomingBody: { flex: 1 },
  cardUpcomingLabel: { fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 },
  cardUpcomingTitle: { fontSize: 16, color: 'rgba(255,255,255,0.7)', fontWeight: '700' },
  cardUpcomingXp: { fontSize: 12, fontWeight: '700', flexShrink: 0 },

  // Dots
  dots: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingHorizontal: 16, marginTop: 16 },
  dot: { width: 9, height: 9, borderRadius: 5, backgroundColor: '#0a0f1a', borderWidth: 1, borderColor: '#0d1f35', margin: 2.5 },
  dotDone: { backgroundColor: '#0077B6', borderColor: '#0077B6' },
  dotActive: { backgroundColor: '#00B4D8', borderColor: '#00B4D8', width: 13, height: 13, borderRadius: 7 },
  dotMile: { borderColor: '#E63946', borderWidth: 2 },

  // Modal
  modalShell: { flex: 1, backgroundColor: '#060C1A' },
  modalClose: { padding: 16, alignSelf: 'flex-end' },
  modalCloseText: { color: 'rgba(0,180,216,0.9)', fontSize: 18, fontWeight: '700' },
  modalScroll: { padding: 20, paddingBottom: 60 },
});

const m = StyleSheet.create({
  inner: { paddingBottom: 20 },
  header: { borderRadius: 16, padding: 18, marginBottom: 16, borderBottomWidth: 1 },
  headerTag: { fontSize: 12, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6 },
  headerTitle: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', marginBottom: 4, letterSpacing: -0.5 },
  headerSub: { fontSize: 12, fontWeight: '600' },
  scroll: { maxHeight: 440, marginBottom: 12 },
  lessonCard: { backgroundColor: '#071828', borderRadius: 14, padding: 16, borderLeftWidth: 3, marginBottom: 12 },
  lessonText: { fontSize: 18, color: '#FFFFFF', lineHeight: 26 },
  keyFact: { borderRadius: 16, padding: 18, marginTop: 12, borderWidth: 1, alignItems: 'center' },
  keyFactEmoji: { fontSize: 32, marginBottom: 6 },
  keyFactLabel: { fontSize: 13, fontWeight: '800', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 },
  keyFactText: { color: 'rgba(255,255,255,0.85)', fontSize: 15, lineHeight: 24, textAlign: 'center', fontWeight: '600' },
  pipRowQ: { flexDirection: 'row', gap: 4, marginTop: 8, flexWrap: 'wrap' },
  pipQ: { flex: 1, minWidth: 6, height: 4, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.07)' },
  pipQDone: { backgroundColor: '#0077B6' },
  pipQActive: { backgroundColor: '#00B4D8' },
  quizQ: { fontSize: 20, color: '#FFFFFF', fontWeight: '900', lineHeight: 30, marginBottom: 20, marginTop: 8 },
  quizOpt: { borderRadius: 14, padding: 16, paddingHorizontal: 18, borderWidth: 1, borderColor: '#0d1f30', backgroundColor: '#07101A', marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  quizOptRight: { backgroundColor: '#071828', borderColor: '#00B4D8', borderWidth: 2 },
  quizOptWrong: { backgroundColor: '#1A0808', borderColor: '#E63946', borderWidth: 2 },
  quizOptText: { color: 'rgba(255,255,255,0.8)', fontSize: 15, fontWeight: '600', flex: 1 },
  quizOptTextRight: { color: '#48CAE4' },
  quizOptTextWrong: { color: '#FF8FA3' },
  expl: { backgroundColor: '#071828', borderRadius: 12, padding: 14, marginTop: 4, borderLeftWidth: 3, borderLeftColor: '#0077B6' },
  explText: { color: 'rgba(255,255,255,0.88)', fontSize: 13, lineHeight: 20 },
  promptBox: { backgroundColor: '#071828', borderRadius: 12, padding: 14, marginBottom: 12, borderLeftWidth: 3 },
  promptText: { color: '#FFFFFF', fontSize: 16, lineHeight: 22 },
  urlText: { color: '#00B4D8', fontSize: 13, marginTop: 8 },
  inputLabel: { color: 'rgba(0,180,216,0.85)', fontSize: 13, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8 },
  input: { backgroundColor: '#071828', borderRadius: 12, padding: 14, color: '#FFFFFF', fontSize: 15, borderWidth: 1, borderColor: '#0A3050', minHeight: 70, textAlignVertical: 'top', marginBottom: 4 },
  wc: { color: 'rgba(0,180,216,0.7)', fontSize: 12, textAlign: 'right', marginTop: 2, marginBottom: 8 },
  wcReady: { color: '#00B4D8' },
  revealBtn: { borderWidth: 1, borderColor: '#0d1f30', borderRadius: 12, padding: 13, alignItems: 'center', marginTop: 8, marginBottom: 8 },
  revealBtnText: { color: 'rgba(255,255,255,0.7)', fontSize: 14 },
  hintBox: { backgroundColor: 'rgba(0,119,182,0.1)', borderRadius: 10, padding: 12, marginBottom: 10, borderLeftWidth: 2, borderLeftColor: '#0077B6' },
  hintText: { color: 'rgba(255,255,255,0.88)', fontSize: 14, lineHeight: 20 },
  hintBtn: { borderWidth: 1, borderColor: 'rgba(0,119,182,0.3)', borderRadius: 10, padding: 10, alignItems: 'center', marginBottom: 8 },
  hintBtnText: { color: '#00B4D8', fontSize: 14 },
  answerBox: { backgroundColor: '#071828', borderRadius: 12, padding: 14, borderLeftWidth: 3, borderLeftColor: '#00B4D8', marginTop: 8 },
  answerLabel: { color: '#00B4D8', fontWeight: '700', fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 },
  answerText: { color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 22 },
  thathaBox: { backgroundColor: '#1C1A0E', borderRadius: 12, padding: 13, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(244,162,97,0.3)' },
  thathaText: { color: '#F4A261', fontWeight: '700', fontSize: 13 },
  cta: { borderRadius: 16, padding: 17, alignItems: 'center', marginTop: 10, backgroundColor: '#0077B6' },
  ctaOff: { backgroundColor: 'rgba(255,255,255,0.06)' },
  ctaText: { color: '#FFFFFF', fontWeight: '900', fontSize: 15, letterSpacing: 0.3 },
  flagBtn: { borderWidth: 1, borderColor: 'rgba(0,180,216,0.2)', borderRadius: 14, padding: 12, alignItems: 'center', marginTop: 8 },
  flagBtnText: { color: 'rgba(0,180,216,0.8)', fontWeight: '600', fontSize: 14 },
  stepRow: { flexDirection: 'row', gap: 6, marginBottom: 16 },
  stepPill: { flex: 1, backgroundColor: '#071828', borderRadius: 8, padding: 8, alignItems: 'center' },
  stepPillOn: { backgroundColor: 'rgba(224,122,95,0.15)', borderWidth: 1, borderColor: 'rgba(224,122,95,0.4)' },
  stepPillDone: { backgroundColor: 'rgba(0,119,182,0.15)', borderWidth: 1, borderColor: 'rgba(0,119,182,0.3)' },
  stepText: { fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: '700' },
  stepTextOn: { color: '#E07A5F' },
  phraseCard: { backgroundColor: '#071828', borderRadius: 14, padding: 16, marginBottom: 12, borderLeftWidth: 3, borderLeftColor: '#E07A5F' },
  phraseScript: { fontSize: 28, fontWeight: '800', color: '#FFD700', textAlign: 'center', marginBottom: 6 },
  phraseRoman: { fontSize: 15, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', textAlign: 'center', marginBottom: 4 },
  phraseEn: { fontSize: 16, color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginBottom: 10 },
  phraseTip: { color: 'rgba(0,180,216,0.8)', fontSize: 12, lineHeight: 18, marginBottom: 8 },
  speakBtn: { backgroundColor: '#0077B6', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10, alignSelf: 'center' },
  speakBtnDone: { backgroundColor: 'rgba(0,119,182,0.4)' },
  speakBtnText: { color: '#fff', fontWeight: '700', fontSize: 13 },
  hint: { color: 'rgba(0,180,216,0.7)', fontSize: 12, textAlign: 'center', marginBottom: 12, fontStyle: 'italic' },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#FFFFFF', textAlign: 'center', marginBottom: 16 },
  recallQ: { fontSize: 17, color: '#FFD700', fontStyle: 'italic', textAlign: 'center', marginBottom: 12 },
  bonusBox: { borderWidth: 1, borderColor: 'rgba(255,215,0,0.65)', borderRadius: 14, padding: 16, alignItems: 'center', marginBottom: 14 },
  bonusBoxOn: { backgroundColor: 'rgba(255,215,0,0.08)', borderColor: '#FFD700' },
  bonusText: { color: '#FFD700', fontWeight: '700', fontSize: 15 },
});
