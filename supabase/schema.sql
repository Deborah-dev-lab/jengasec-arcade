-- Run in Supabase SQL Editor. All data access uses server-only secret key.
create table if not exists public.sessions (
 id uuid primary key default gen_random_uuid(),
 pin text not null unique,
 game text not null,
 status text not null default 'lobby' check(status in ('lobby','question','reveal','finished')),
 idx integer not null default 0,
 started_at timestamptz,
 created_at timestamptz not null default now()
);
create table if not exists public.players (
 id uuid primary key default gen_random_uuid(),
 session_id uuid not null references public.sessions(id) on delete cascade,
 nickname text not null,
 token uuid not null unique,
 score integer not null default 0,
 unique(session_id,nickname)
);
create table if not exists public.answers (
 session_id uuid not null references public.sessions(id) on delete cascade,
 player_id uuid not null references public.players(id) on delete cascade,
 question_idx integer not null,
 answer text not null,
 points integer not null,
 primary key(session_id,player_id,question_idx)
);
alter table public.sessions enable row level security;
alter table public.players enable row level security;
alter table public.answers enable row level security;
-- No anonymous policies: browser clients cannot directly read or change records.
create or replace function public.record_answer(p_session uuid,p_player uuid,p_question integer,p_answer text,p_points integer)
returns boolean language plpgsql security invoker set search_path=public as $$
declare n integer;
begin
 insert into public.answers(session_id,player_id,question_idx,answer,points)
 values(p_session,p_player,p_question,p_answer,p_points)
 on conflict do nothing;
 get diagnostics n = row_count;
 if n=0 then return false; end if;
 update public.players set score=score+p_points where id=p_player and session_id=p_session;
 return true;
end;$$;
revoke execute on function public.record_answer(uuid,uuid,integer,text,integer) from public,anon,authenticated;
grant execute on function public.record_answer(uuid,uuid,integer,text,integer) to service_role;
