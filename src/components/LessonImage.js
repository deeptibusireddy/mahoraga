import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ANTHROPIC_KEY = process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY || '';
const CACHE_PREFIX = 'mah_visual_v2_';

export const SUBJECT_COLOR = {
  math: '#5B8FD4', science: '#4AB88A', history: '#C17B3A',
  ela: '#9B6FD4', telugu: '#E07A5F', mixed: '#00B4D8',
};

export const FALLBACK = {
  math:    [{ emoji: '📐', label: 'The Setup', text: 'Read the problem carefully before anything else.' },
            { emoji: '🔢', label: 'Do the Math', text: 'Apply the formula step by step — don\'t skip!' },
            { emoji: '✅', label: 'Check It', text: 'Does your answer actually make sense?' }],
  science: [{ emoji: '🔬', label: 'Observe', text: 'Science starts with noticing something interesting.' },
            { emoji: '🧪', label: 'Experiment', text: 'Test your idea — that\'s the scientific method.' },
            { emoji: '💡', label: 'Conclude', text: 'What does the evidence actually tell you?' }],
  history: [{ emoji: '🏛️', label: 'The People', text: 'History is real humans making real choices under pressure.' },
            { emoji: '📅', label: 'The Time', text: 'When did this happen, and what came right before it?' },
            { emoji: '🌍', label: 'The Impact', text: 'How did this moment change the world forever?' }],
  ela:     [{ emoji: '📖', label: 'Read Closely', text: 'Every word the author chose was chosen on purpose.' },
            { emoji: '✍️', label: 'Your Voice', text: 'Good writing sounds like you — clear and real.' },
            { emoji: '💬', label: 'Say It Clearly', text: 'If you can\'t explain it simply, keep working on it.' }],
};

async function fetchVisual(title, content, subject) {
  const cacheKey = CACHE_PREFIX + title.slice(0, 30).replace(/\s/g, '_');
  try {
    const cached = await AsyncStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);
  } catch {}

  if (!ANTHROPIC_KEY) return null;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        messages: [{
          role: 'user',
          content: `You are making a lesson visual for a 12-year-old who loves Minecraft and anime (JJK).
Lesson title: "${title}"
Subject: ${subject}
Content summary: ${content.slice(0, 300)}

Create 3 punchy visual bullet points that make this EXCITING. Each has:
- An emoji that perfectly represents the point
- A short bold label (2-4 words)
- One sentence explanation using Minecraft/gaming/JJK analogies when possible

Respond ONLY with valid JSON, no markdown:
{"points":[{"emoji":"⚔️","label":"Attack & Defense","text":"Like sword vs armor — ratios compare two things directly."},{"emoji":"🏰","label":"Creeper Math","text":"3 creepers per 9 blocks = 1:3. Simplify like crafting recipes!"},{"emoji":"🔑","label":"The GCF Key","text":"Greatest Common Factor is your key to unlocking simplified ratios."}]}`
        }],
      }),
    });
    const data = await res.json();
    if (!res.ok) { console.error('Anthropic API error:', res.status, JSON.stringify(data)); return null; }
    const text = data.content?.[0]?.text || '{}';
    const parsed = JSON.parse(text.replace(/```json|```/g, '').trim());
    if (parsed.points?.length) {
      await AsyncStorage.setItem(cacheKey, JSON.stringify(parsed));
      return parsed;
    }
  } catch (e) { console.error('LessonImage fetch error:', e); }
  return null;
}

// Hook that fetches visual points and returns them
export function useLessonVisual(title, content, subject) {
  const [points, setPoints] = useState(null);
  const [loading, setLoading] = useState(true);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    setLoading(true);
    if (!title) { setLoading(false); return; }
    fetchVisual(title, content || '', subject).then(result => {
      if (mounted.current) {
        setPoints(result?.points || FALLBACK[subject] || FALLBACK.math);
        setLoading(false);
      }
    });
    return () => { mounted.current = false; };
  }, [title]);

  return { points: points || [], loading };
}
