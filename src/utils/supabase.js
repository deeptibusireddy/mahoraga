// Supabase sync for Mahoraga
// Syncs progress between iPhone and iPad

const SUPABASE_URL = 'https://jtykpskbkzrgwdjdhllx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0eWtwc2tia3pyZ3dkamRobGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NzU1MzIsImV4cCI6MjEwMDE1MTUzMn0.08ycJVx4Bjl3vFIytXyyCjxsBWxqkzqN5CmEA8dB9cM';
const USER_ID = 'abhi';

const headers = {
  'Content-Type': 'application/json',
  'apikey': SUPABASE_ANON_KEY,
  'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
};

// Push local progress to Supabase
export async function pushProgress(data) {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/progress?user_id=eq.${USER_ID}`,
      {
        method: 'PATCH',
        headers: { ...headers, 'Prefer': 'return=minimal' },
        body: JSON.stringify(data),
      }
    );
    if (!res.ok) console.error('Supabase push error:', res.status);
    return res.ok;
  } catch (e) {
    console.error('Supabase push error:', e);
    return false;
  }
}

// Pull progress from Supabase
export async function pullProgress() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/progress?user_id=eq.${USER_ID}&select=*`,
      { method: 'GET', headers }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.[0] || null;
  } catch (e) {
    console.error('Supabase pull error:', e);
    return null;
  }
}
