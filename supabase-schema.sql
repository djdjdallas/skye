-- Newsletter subscribers for the Selah Skye site.
-- Run this in the Supabase SQL editor.

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'website',
  created_at timestamptz not null default now()
);

-- Row-Level Security is what actually protects this table. The anon key in the
-- browser is public; RLS decides what that key is allowed to do.
alter table public.subscribers enable row level security;

-- Anonymous visitors may add themselves to the list.
create policy "anon can subscribe"
  on public.subscribers
  for insert
  to anon
  with check (true);

-- Deliberately NO select/update/delete policy for anon. With RLS on and no
-- policy for an action, that action is denied. So nobody can scrape your list
-- from the browser. Read it from the Supabase dashboard or a server-side
-- function using the service role key instead.
