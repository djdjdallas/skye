import { createClient } from "@supabase/supabase-js";

/**
 * Browser Supabase client for the newsletter form.
 *
 * Created lazily rather than at import time on purpose. `createClient` throws
 * if the URL is missing, and this module gets imported during the build. If it
 * threw at import time, a missing env var would fail your whole deploy instead
 * of just disabling one form. Lazy creation keeps the failure contained.
 *
 * The anon key is public by design. What actually protects your data is
 * Row-Level Security on the table (see supabase-schema.sql): anonymous users
 * may INSERT a subscriber row and nothing else. They cannot read, update, or
 * delete. Never put a service role key in a NEXT_PUBLIC_ variable.
 */
let client = null;

export function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null; // Not configured yet.
  if (!client) client = createClient(url, key);

  return client;
}
