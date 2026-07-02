import { createClient } from '@supabase/supabase-js';

// Configured via env vars (see .env.example). If they're absent, `supabase`
// is null and the auth UI shows a "not configured yet" notice instead of crashing.
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;
