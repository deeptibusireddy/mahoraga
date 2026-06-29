/**
 * ActivityModal — Full-screen, big-text, step-through UI
 * for all non-lesson activities: BrainTeaser, DomainExpansion,
 * TeachItBack (Reverse), Challenge, and Telugu.
 *
 * Design rules (same as InteractiveLesson):
 *  - Full screen, no tiny scrollable blobs
 *  - One thing per screen/step
 *  - Big text, big buttons, countdown where appropriate
 *  - iPad-friendly (no fixed widths)
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, TextInput, ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform,
} from 'react-native';
import { speakTelugu } from '../utils/tts';
import { XP_VALUES } from '../theme/levels';

// ─── Countdown hook ────────────────────────────────────────────────────────────
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

// ─── Word count ────────────────────────────────────────────────────────────────
const wc = t => t.trim().split(/\s+/).filter(Boolean).length;

// ─── Shared full-screen card shell ────────────────────────────────────────────
function Card({ accent, topLabel, children, btn, btnDisabled, onBtn, bottomNote }) {
  return (
    <View style={[s.card, { borderTopColor: accent, borderTopWidth: 4 }]}>
      {topLabel && <Text style={[s.topLabel, { color: accent }]}>{topLabel}</Text>}
      <View style={s.body}>{children}</View>
      {bottomNote && <Text style={s.bottomNote}>{bottomNote}</Text>}
      <TouchableOpacity
        style={[s.btn, { backgroundColor: accent }, btnDisabled && s.btnOff]}
        onPress={btnDisabled ? undefined : onBtn}
        activeOpacity={btnDisabled ? 1 : 0.8}
      >
        <Text style={s.btnText}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
}

// ─── RichText ─────────────────────────────────────────────────────────────────
function RichText({ text, style }) {
  if (!text) return null;
  const raw = text.replace(/\\n/g, '\n');
  return (
    <View>
      {raw.split('\n').map((line, i) => {
        if (!line.trim()) return <View key={i} style={{ height: 10 }} />;
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

// ════════════════════════════════════════════════════════════════════════════════
// ─── BRAIN TEASER ─────────────────────────────────────────────────────────────
// Steps: Read → Think (write) → Reveal
// ════════════════════════════════════════════════════════════════════════════════
export function BrainTeaser({ activity, onComplete, onFlag }) {
  const [step, setStep] = useState(0); // 0=read, 1=think, 2=reveal
  const [response, setResponse] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const ACCENT = '#9B6FD4';
  const words = wc(response);
  const ready = words >= 20;

  const { remaining, ready: timerReady } = useCountdown(12, step === 0);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <StepPills steps={['Read', 'Think', 'Reveal']} current={step} accent={ACCENT} />
        <Flag onPress={onFlag} />
      </View>

      {step === 0 && (
        <Card
          accent={ACCENT}
          topLabel="🧩 BRAIN TEASER"
          btn={timerReady ? 'Got it — Start Thinking →' : `Read it... ${remaining}s`}
          btnDisabled={!timerReady}
          onBtn={() => setStep(1)}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={s.bigQuestion}>{activity.teaser}</Text>
            {activity.hint && (
              <View style={[s.hintBox, { borderLeftColor: ACCENT }]}>
                <Text style={s.hintText}>💡 {activity.hint}</Text>
              </View>
            )}
          </ScrollView>
        </Card>
      )}

      {step === 1 && (
        <Card
          accent={ACCENT}
          topLabel="YOUR THINKING"
          btn={ready ? 'See Answer →' : `${words} / 20 words`}
          btnDisabled={!ready}
          onBtn={() => { Keyboard.dismiss(); setStep(2); }}
          bottomNote={!ready ? 'Write at least 20 words to unlock the answer' : undefined}
        >
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}
            onPress={() => { Keyboard.dismiss(); setStep(0); }}
          >
            <Text style={[s.wcText, { color: ACCENT, textAlign: 'left' }]}>← See question again</Text>
          </TouchableOpacity>
          <Text style={s.inputPrompt}>Write your reasoning:</Text>
          <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <TextInput
              style={[s.bigInput, { minHeight: 140 }]}
              value={response}
              onChangeText={setResponse}
              placeholder="Think it through..."
              placeholderTextColor="rgba(255,255,255,0.25)"
              multiline
            />
            <Text style={[s.wcText, ready && { color: ACCENT }]}>
              {words} / 20 words {ready ? '✓' : ''}
            </Text>
          </ScrollView>
        </Card>
      )}

      {step === 2 && (
        <Card
          accent={ACCENT}
          topLabel="ANSWER"
          btn={`Complete! +${XP_VALUES.brainTeaser} XP ✓`}
          onBtn={onComplete}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[s.answerCard, { borderColor: ACCENT + '60', backgroundColor: ACCENT + '10' }]}>
              <Text style={[s.answerLabel, { color: ACCENT }]}>✓ ANSWER</Text>
              <Text style={s.answerText}>{activity.answer}</Text>
            </View>
            <View style={[s.yourBox, { borderColor: ACCENT + '40' }]}>
              <Text style={[s.yourLabel, { color: ACCENT }]}>YOUR THINKING</Text>
              <Text style={s.yourText}>{response}</Text>
            </View>
          </ScrollView>
        </Card>
      )}
    </View>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// ─── DOMAIN EXPANSION (Go Explore) ───────────────────────────────────────────
// Steps: Mission → Question 1 → Question 2 → Write-up → Done
// ════════════════════════════════════════════════════════════════════════════════
export function DomainExpansion({ activity, dayId, onComplete, onFlag, saveResponse }) {
  const [step, setStep] = useState(0);
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [writing, setWriting] = useState('');
  const ACCENT = '#E63946';
  const questions = activity.partB?.questions || [];
  const words = wc(writing);
  const { remaining, ready: timerReady } = useCountdown(15, step === 0);

  const handleComplete = async () => {
    await saveResponse(dayId, { q1, q2, writing });
    onComplete();
  };

  // Build step list dynamically
  const steps = ['Mission'];
  if (questions[0]) steps.push('Q1');
  if (questions[1]) steps.push('Q2');
  steps.push('Write', 'Done');
  const totalSteps = steps.length;

  return (
    <View style={s.container}>
      <View style={s.header}>
        <StepPills steps={steps} current={step} accent={ACCENT} />
        <Flag onPress={onFlag} />
      </View>

      {/* Step 0: Mission briefing */}
      {step === 0 && (
        <Card
          accent={ACCENT}
          topLabel="🔭 DOMAIN EXPANSION"
          btn={timerReady ? 'Start Mission →' : `Read... ${remaining}s`}
          btnDisabled={!timerReady}
          onBtn={() => setStep(1)}
        >
          <Text style={s.actTitle}>{activity.title || 'Go Explore'}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {activity.partA?.instruction && (
              <View style={[s.promptCard, { borderLeftColor: ACCENT }]}>
                <RichText text={activity.partA.instruction} style={s.promptText} />
                {activity.partA.url && (
                  <Text style={[s.urlText, { color: ACCENT }]}>🔗 {activity.partA.url}</Text>
                )}
              </View>
            )}
          </ScrollView>
        </Card>
      )}

      {/* Q1 */}
      {step === 1 && questions[0] && (
        <Card
          accent={ACCENT}
          topLabel={`QUESTION 1 OF ${questions.length}`}
          btn={q1.trim().length > 5 ? 'Next →' : 'Write your answer first'}
          btnDisabled={q1.trim().length <= 5}
          onBtn={() => setStep(questions[1] ? 2 : steps.indexOf('Write'))}
        >
          <Text style={s.bigQuestion}>{questions[0]}</Text>
          <TextInput
            style={s.bigInput}
            value={q1}
            onChangeText={setQ1}
            placeholder="Your answer..."
            placeholderTextColor="rgba(255,255,255,0.25)"
            multiline
            autoFocus
          />
        </Card>
      )}

      {/* Q2 */}
      {step === 2 && questions[1] && (
        <Card
          accent={ACCENT}
          topLabel={`QUESTION 2 OF ${questions.length}`}
          btn={q2.trim().length > 5 ? 'Next →' : 'Write your answer first'}
          btnDisabled={q2.trim().length <= 5}
          onBtn={() => setStep(steps.indexOf('Write'))}
        >
          <Text style={s.bigQuestion}>{questions[1]}</Text>
          <TextInput
            style={s.bigInput}
            value={q2}
            onChangeText={setQ2}
            placeholder="Your answer..."
            placeholderTextColor="rgba(255,255,255,0.25)"
            multiline
            autoFocus
          />
        </Card>
      )}

      {/* Write-up */}
      {step === steps.indexOf('Write') && (
        <Card
          accent={ACCENT}
          topLabel="✍️ WRITE-UP"
          btn={words >= 50 ? 'Submit →' : `${words} / 50 words`}
          btnDisabled={words < 50}
          onBtn={() => setStep(steps.indexOf('Done'))}
          bottomNote={words < 50 ? 'Write at least 50 words' : undefined}
        >
          <Text style={s.inputPrompt}>{activity.writingPrompt}</Text>
          <TextInput
            style={[s.bigInput, { minHeight: 160 }]}
            value={writing}
            onChangeText={setWriting}
            placeholder="Write at least 50 words..."
            placeholderTextColor="rgba(255,255,255,0.25)"
            multiline
            autoFocus
          />
          <Text style={[s.wcText, words >= 50 && { color: ACCENT }]}>
            {words} / 50 words {words >= 50 ? '✓' : ''}
          </Text>
        </Card>
      )}

      {/* Done */}
      {step === steps.indexOf('Done') && (
        <Card
          accent={ACCENT}
          topLabel="🔭 MISSION COMPLETE"
          btn={`Submit +${XP_VALUES.goExplore} XP ✓`}
          onBtn={handleComplete}
        >
          <Text style={s.completeMedal}>🌍</Text>
          <Text style={s.completeTitle}>Domain Expanded!</Text>
          <Text style={[s.completeMsg, { color: ACCENT }]}>
            You explored, investigated, and wrote it up. That's real learning.
          </Text>
        </Card>
      )}
    </View>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// ─── TEACH IT BACK (Reverse Cursed Technique) ─────────────────────────────────
// Steps: Read prompt → Write → Done
// ════════════════════════════════════════════════════════════════════════════════
export function TeachItBack({ activity, dayId, onComplete, onFlag, saveResponse }) {
  const [step, setStep] = useState(0);
  const [response, setResponse] = useState('');
  const ACCENT = '#4AB88A';
  const words = wc(response);
  const ready = words >= 30;
  const { remaining, ready: timerReady } = useCountdown(12, step === 0);

  const handleComplete = async () => {
    await saveResponse(dayId, response);
    onComplete();
  };

  return (
    <View style={s.container}>
      <View style={s.header}>
        <StepPills steps={['Mission', 'Teach', 'Done']} current={step} accent={ACCENT} />
        <Flag onPress={onFlag} />
      </View>

      {step === 0 && (
        <Card
          accent={ACCENT}
          topLabel="👨‍🏫 REVERSE CURSED TECHNIQUE"
          btn={timerReady ? "I'm Ready →" : `Read it... ${remaining}s`}
          btnDisabled={!timerReady}
          onBtn={() => setStep(1)}
        >
          <Text style={s.actTitle}>{activity.concept || 'Teach It Back'}</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[s.promptCard, { borderLeftColor: ACCENT }]}>
              <RichText text={activity.prompt} style={s.promptText} />
            </View>
          </ScrollView>
        </Card>
      )}

      {step === 1 && (
        <Card
          accent={ACCENT}
          topLabel="✍️ TEACH IT"
          btn={ready ? 'Done →' : `${words} / 30 words`}
          btnDisabled={!ready}
          onBtn={() => setStep(2)}
          bottomNote={!ready ? 'Write at least 30 words' : undefined}
        >
          <Text style={s.inputPrompt}>{activity.followUp}</Text>
          <TextInput
            style={[s.bigInput, { minHeight: 160 }]}
            value={response}
            onChangeText={setResponse}
            placeholder="Write at least 30 words..."
            placeholderTextColor="rgba(255,255,255,0.25)"
            multiline
            autoFocus
          />
          <Text style={[s.wcText, ready && { color: ACCENT }]}>
            {words} / 30 words {ready ? '✓' : ''}
          </Text>
        </Card>
      )}

      {step === 2 && (
        <Card
          accent={ACCENT}
          topLabel="✓ COMPLETE"
          btn={`Submit +${XP_VALUES.teachItBack} XP ✓`}
          onBtn={handleComplete}
        >
          <Text style={s.completeMedal}>👨‍🏫</Text>
          <Text style={s.completeTitle}>Teaching = Learning Twice</Text>
          <Text style={[s.completeMsg, { color: ACCENT }]}>
            Explaining something proves you understand it. Well done.
          </Text>
          <View style={[s.yourBox, { borderColor: ACCENT + '40' }]}>
            <Text style={[s.yourLabel, { color: ACCENT }]}>WHAT YOU WROTE</Text>
            <Text style={s.yourText}>{response}</Text>
          </View>
        </Card>
      )}
    </View>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// ─── CHALLENGE (Special Grade / Thatha) ──────────────────────────────────────
// Steps: Problem → Hint (optional) → Answer → Done
// ════════════════════════════════════════════════════════════════════════════════
export function Challenge({ activity, onComplete, onFlag }) {
  const [step, setStep] = useState(0); // 0=problem, 1=answer, 2=done
  const [showHint, setShowHint] = useState(false);
  const ACCENT = activity.isThatha ? '#F4A261' : '#E63946';
  const { remaining, ready: timerReady } = useCountdown(20, step === 0);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <StepPills
          steps={['Problem', 'Answer', 'Done']}
          current={step}
          accent={ACCENT}
        />
        <Flag onPress={onFlag} />
      </View>

      {step === 0 && (
        <Card
          accent={ACCENT}
          topLabel={activity.isThatha ? "🧮 THATHA'S BINDING VOW" : '⚔️ SPECIAL GRADE MISSION'}
          btn={timerReady ? "I've Tried It →" : `Think... ${remaining}s`}
          btnDisabled={!timerReady}
          onBtn={() => setStep(1)}
        >
          {activity.isThatha && (
            <View style={[s.thathaBox, { borderColor: ACCENT + '50' }]}>
              <Text style={[s.thathaText, { color: ACCENT }]}>
                🧮 Get Thatha — this one's for both of you!
              </Text>
            </View>
          )}
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={s.bigQuestion}>{activity.problem}</Text>
            {activity.hint && !showHint && (
              <TouchableOpacity
                style={[s.hintBtn, { borderColor: ACCENT + '50' }]}
                onPress={() => setShowHint(true)}
              >
                <Text style={[s.hintBtnText, { color: ACCENT }]}>💡 Show Hint</Text>
              </TouchableOpacity>
            )}
            {showHint && (
              <View style={[s.hintBox, { borderLeftColor: ACCENT }]}>
                <Text style={s.hintText}>💡 {activity.hint}</Text>
              </View>
            )}
          </ScrollView>
        </Card>
      )}

      {step === 1 && (
        <Card
          accent={ACCENT}
          topLabel="✅ ANSWER"
          btn="Got it! →"
          onBtn={() => setStep(2)}
        >
          <View style={[s.answerCard, { borderColor: ACCENT + '60', backgroundColor: ACCENT + '10' }]}>
            <Text style={[s.answerLabel, { color: ACCENT }]}>ANSWER</Text>
            <Text style={s.answerText}>{activity.answer}</Text>
          </View>
          {activity.explanation && (
            <View style={[s.hintBox, { borderLeftColor: ACCENT }]}>
              <RichText text={activity.explanation} style={s.hintText} />
            </View>
          )}
        </Card>
      )}

      {step === 2 && (
        <Card
          accent={ACCENT}
          topLabel="⚔️ MISSION COMPLETE"
          btn={`Completed! +${XP_VALUES.challenge} XP ✓`}
          onBtn={onComplete}
        >
          <Text style={s.completeMedal}>{activity.isThatha ? '🧮' : '⚔️'}</Text>
          <Text style={s.completeTitle}>
            {activity.isThatha ? 'Thatha Defeated!' : 'Challenge Conquered!'}
          </Text>
          <Text style={[s.completeMsg, { color: ACCENT }]}>
            {activity.isThatha
              ? 'Math is more fun with Thatha. Keep it up!'
              : 'Special Grade problem solved. Sorcerer level rising.'}
          </Text>
        </Card>
      )}
    </View>
  );
}

// ════════════════════════════════════════════════════════════════════════════════
// ─── TELUGU ───────────────────────────────────────────────────────────────────
// Steps: Learn (per phrase) → Recall quiz → Use It → Bonus
// ════════════════════════════════════════════════════════════════════════════════
export function Telugu({ activity, onComplete }) {
  const [step, setStep] = useState(0);        // 0=learn, 1=recall, 2=use, 3=bonus
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [speakingIdx, setSpeakingIdx] = useState(null);
  const [heard, setHeard] = useState(new Set());
  const [recallAns, setRecallAns] = useState({});
  const [useItText, setUseItText] = useState('');

  const phrases = activity.newPhrases || [];
  const recallQuiz = activity.recallQuiz || [];
  const ACCENT = '#E07A5F';

  const handleSpeak = async (idx, text) => {
    setSpeakingIdx(idx);
    await speakTelugu(text);
    setHeard(prev => new Set([...prev, idx]));
    setSpeakingIdx(null);
  };

  const currentPhrase = phrases[phraseIdx];
  const allRecalled = recallQuiz.length === 0 || Object.keys(recallAns).length === recallQuiz.length;
  const totalXP = XP_VALUES.telugu;

  return (
    <View style={s.container}>
      <View style={s.header}>
        <StepPills steps={['Learn', 'Recall', 'Use It']} current={step} accent={ACCENT} />
      </View>

      {/* LEARN: one phrase per screen */}
      {step === 0 && currentPhrase && (
        <Card
          accent={ACCENT}
          topLabel={`PHRASE ${phraseIdx + 1} OF ${phrases.length} · ${activity.theme || 'Telugu'}`}
          btn={heard.has(phraseIdx)
            ? (phraseIdx < phrases.length - 1 ? 'Next Phrase →' : 'Start Recall →')
            : 'Hear it first ↑'}
          btnDisabled={!heard.has(phraseIdx)}
          onBtn={() => {
            if (phraseIdx < phrases.length - 1) {
              setPhraseIdx(i => i + 1);
            } else {
              setStep(1);
            }
          }}
        >
          <Text style={s.teluguScript}>{currentPhrase.telugu}</Text>
          <Text style={s.teluguRoman}>{currentPhrase.romanized}</Text>
          <Text style={s.teluguEnglish}>{currentPhrase.english}</Text>
          {currentPhrase.tip && (
            <Text style={s.teluguTip}>💡 {currentPhrase.tip}</Text>
          )}
          <TouchableOpacity
            style={[s.speakBtn, { backgroundColor: ACCENT }, heard.has(phraseIdx) && s.speakBtnDone]}
            onPress={() => handleSpeak(phraseIdx, currentPhrase.telugu)}
            disabled={speakingIdx !== null}
          >
            {speakingIdx === phraseIdx
              ? <ActivityIndicator color="#fff" size="small" />
              : <Text style={s.speakBtnText}>
                  {heard.has(phraseIdx) ? '🔊 Hear again' : '🔊 Hear it'}
                </Text>
            }
          </TouchableOpacity>
        </Card>
      )}

      {/* RECALL */}
      {step === 1 && (
        <Card
          accent={ACCENT}
          topLabel="🧠 RECALL QUIZ"
          btn={allRecalled ? 'Next →' : 'Answer all questions'}
          btnDisabled={!allRecalled}
          onBtn={() => setStep(2)}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {recallQuiz.length === 0 ? (
              <Text style={[s.completeMsg, { color: ACCENT }]}>
                No recall quiz yet — you're just getting started!
              </Text>
            ) : recallQuiz.map((q, qIdx) => (
              <View key={qIdx} style={s.recallBlock}>
                <Text style={s.teluguRoman}>"{q.romanized}"</Text>
                {q.options.map((opt, oIdx) => {
                  const answered = recallAns[qIdx] !== undefined;
                  const isRight = oIdx === q.answer;
                  const isSel = recallAns[qIdx] === oIdx;
                  return (
                    <TouchableOpacity
                      key={oIdx}
                      style={[
                        s.mcOpt,
                        isSel && !answered && { borderColor: ACCENT },
                        answered && isRight && s.mcRight,
                        answered && isSel && !isRight && s.mcWrong,
                      ]}
                      onPress={() => {
                        if (recallAns[qIdx] !== undefined) return;
                        setRecallAns(prev => ({ ...prev, [qIdx]: oIdx }));
                      }}
                    >
                      <Text style={[s.mcOptText,
                        answered && isRight && { color: '#48CAE4', fontWeight: '800' },
                        answered && isSel && !isRight && { color: '#FF8FA3' },
                      ]}>{opt}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </ScrollView>
        </Card>
      )}

      {/* USE IT */}
      {step === 2 && (
        <Card
          accent={ACCENT}
          topLabel="💬 USE IT"
          btn={useItText ? `Complete! +${totalXP} XP ✓` : 'Confirm first ↑'}
          btnDisabled={!useItText}
          onBtn={() => onComplete(false)}
        >
          <Text style={s.completeMedal}>🗣️</Text>
          <Text style={[s.completeTitle, { fontSize: 22, marginBottom: 8 }]}>
            Say it to Ammamma or Thatha!
          </Text>
          <View style={[s.promptCard, { borderLeftColor: ACCENT }]}>
            <Text style={s.promptText}>Use today's phrases in a real conversation. Who did you speak Telugu with?</Text>
          </View>
          <TouchableOpacity
            style={[s.confirmBtn, useItText === 'ammamma' && { borderColor: '#FFD700', backgroundColor: 'rgba(255,215,0,0.1)' }]}
            onPress={() => setUseItText(useItText === 'ammamma' ? '' : 'ammamma')}
          >
            <Text style={[s.confirmBtnText, useItText === 'ammamma' && { color: '#FFD700' }]}>
              {useItText === 'ammamma' ? '✅ Said it to Ammamma!' : '👵 I said it to Ammamma'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[s.confirmBtn, useItText === 'thatha' && { borderColor: '#FFD700', backgroundColor: 'rgba(255,215,0,0.1)' }]}
            onPress={() => setUseItText(useItText === 'thatha' ? '' : 'thatha')}
          >
            <Text style={[s.confirmBtnText, useItText === 'thatha' && { color: '#FFD700' }]}>
              {useItText === 'thatha' ? '✅ Said it to Thatha!' : '👴 I said it to Thatha'}
            </Text>
          </TouchableOpacity>
        </Card>
      )}

    </View>
  );
}

// ─── Shared sub-components ────────────────────────────────────────────────────
function StepPills({ steps, current, accent }) {
  return (
    <View style={s.stepRow}>
      {steps.map((label, i) => (
        <View key={i} style={[
          s.stepPill,
          { borderColor: i <= current ? accent : 'rgba(255,255,255,0.1)' },
          i === current && s.stepPillActive,
          i < current && { backgroundColor: accent + '20' },
        ]}>
          <Text style={[s.stepText, i <= current && { color: i < current ? accent : '#fff' }]}>
            {i < current ? '✓' : label}
          </Text>
        </View>
      ))}
    </View>
  );
}

function Flag({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.flagBtn}>
      <Text style={{ fontSize: 20 }}>🚩</Text>
    </TouchableOpacity>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#060C1A' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 4, paddingBottom: 10, gap: 8 },
  stepRow: { flex: 1, flexDirection: 'row', gap: 6 },
  stepPill: { flex: 1, borderRadius: 20, borderWidth: 1, paddingVertical: 7, alignItems: 'center' },
  stepPillActive: { backgroundColor: 'rgba(255,255,255,0.1)' },
  stepText: { fontSize: 11, fontWeight: '700', color: 'rgba(255,255,255,0.3)' },
  flagBtn: { padding: 4 },

  // Card
  card: { flex: 1, paddingHorizontal: 24, paddingTop: 16, paddingBottom: 20 },
  topLabel: { fontSize: 13, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 1.5, textAlign: 'center', marginBottom: 20 },
  body: { flex: 1, justifyContent: 'center' },
  btn: { borderRadius: 18, padding: 20, alignItems: 'center', marginTop: 8 },
  btnOff: { opacity: 0.35 },
  btnText: { color: '#FFFFFF', fontWeight: '900', fontSize: 18, letterSpacing: 0.3 },
  bottomNote: { fontSize: 13, color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: 8 },

  // Content
  actTitle: { fontSize: 26, fontWeight: '900', color: '#FFFFFF', marginBottom: 20, textAlign: 'center' },
  bigQuestion: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', lineHeight: 32, marginBottom: 24 },
  inputPrompt: { fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 16, fontWeight: '600' },
  bigInput: {
    backgroundColor: '#071828', borderRadius: 14, padding: 18,
    color: '#FFFFFF', fontSize: 18, borderWidth: 1, borderColor: '#0A3050',
    minHeight: 100, textAlignVertical: 'top',
  },
  wcText: { fontSize: 13, color: 'rgba(255,255,255,0.35)', textAlign: 'right', marginTop: 8 },

  promptCard: { backgroundColor: '#071828', borderRadius: 16, padding: 20, borderLeftWidth: 4, marginBottom: 16 },
  promptText: { fontSize: 18, color: '#FFFFFF', lineHeight: 28 },
  urlText: { fontSize: 14, marginTop: 12, fontWeight: '600' },

  hintBox: { borderLeftWidth: 3, backgroundColor: 'rgba(0,119,182,0.08)', borderRadius: 10, padding: 16, marginTop: 16 },
  hintText: { color: '#FFFFFF', fontSize: 16, lineHeight: 24 },
  hintBtn: { borderWidth: 1, borderRadius: 14, padding: 16, alignItems: 'center', marginTop: 16 },
  hintBtnText: { fontSize: 16, fontWeight: '700' },

  answerCard: { borderRadius: 16, borderWidth: 2, padding: 24, marginBottom: 16, alignItems: 'center' },
  answerLabel: { fontSize: 12, fontWeight: '900', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },
  answerText: { fontSize: 22, color: '#FFFFFF', fontWeight: '800', textAlign: 'center', lineHeight: 30 },

  yourBox: { borderWidth: 1, borderRadius: 14, padding: 16, marginTop: 12 },
  yourLabel: { fontSize: 11, fontWeight: '800', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 },
  yourText: { fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 24 },

  thathaBox: { borderWidth: 1, borderRadius: 14, padding: 16, marginBottom: 20, alignItems: 'center' },
  thathaText: { fontSize: 16, fontWeight: '700', textAlign: 'center' },

  // Complete
  completeMedal: { fontSize: 72, textAlign: 'center', marginBottom: 16 },
  completeTitle: { fontSize: 28, fontWeight: '900', color: '#FFFFFF', textAlign: 'center', marginBottom: 12 },
  completeMsg: { fontSize: 18, fontWeight: '600', textAlign: 'center', lineHeight: 26, marginBottom: 16 },

  // MC options
  mcOpt: {
    backgroundColor: '#071828', borderRadius: 14,
    padding: 18, marginBottom: 10,
    borderWidth: 1, borderColor: '#0d1f30',
  },
  mcRight: { backgroundColor: '#071828', borderColor: '#00B4D8', borderWidth: 2 },
  mcWrong: { backgroundColor: '#1A0808', borderColor: '#E63946', borderWidth: 2 },
  mcOptText: { fontSize: 17, color: '#FFFFFF', fontWeight: '600' },

  // Telugu
  teluguScript: { fontSize: 48, fontWeight: '900', color: '#FFD700', textAlign: 'center', marginBottom: 12 },
  teluguRoman: { fontSize: 22, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', textAlign: 'center', marginBottom: 8 },
  teluguEnglish: { fontSize: 24, color: '#FFFFFF', fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  teluguTip: { fontSize: 15, color: 'rgba(0,180,216,0.7)', textAlign: 'center', marginBottom: 20, lineHeight: 22 },
  speakBtn: { borderRadius: 24, paddingHorizontal: 32, paddingVertical: 16, alignSelf: 'center' },
  speakBtnDone: { opacity: 0.6 },
  speakBtnText: { color: '#FFFFFF', fontWeight: '800', fontSize: 17 },
  recallBlock: { marginBottom: 24 },

  bonusTap: {
    borderWidth: 2, borderColor: 'rgba(255,215,0,0.3)',
    borderRadius: 16, padding: 20, alignItems: 'center', marginTop: 16,
  },
  bonusTapText: { color: '#FFD700', fontWeight: '700', fontSize: 17 },
  confirmBtn: {
    borderWidth: 2, borderColor: 'rgba(224,122,95,0.3)',
    borderRadius: 16, padding: 20, alignItems: 'center', marginTop: 12,
  },
  confirmBtnText: { color: 'rgba(255,255,255,0.7)', fontWeight: '700', fontSize: 17 },
});
