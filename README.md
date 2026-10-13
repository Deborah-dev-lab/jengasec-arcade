# JengaSec Arcade — Live Kahoot-style game

## Quick start
1. Create Supabase project and run `supabase/schema.sql` in SQL Editor.
2. Copy `.env.example` to `.env.local`, fill in Project URL and **secret** API key and set a 12+ character `HOST_PASSWORD`.
3. `npm install` then `npm run dev`.
4. Open `/host` on projector, enter password and create a session. Players scan QR or visit `/join`.
5. Host starts each question, reveals answers, advances; leaderboard updates ~1.2 seconds.
6. Push to GitHub and import to Vercel. Set the same three environment variables in Vercel settings; redeploy.

**Important:** `SUPABASE_SECRET_KEY` must NEVER start with `NEXT_PUBLIC_`, be shared, or committed. This app uses server-side DB access with RLS and no public policies. The host password is supplied on the host screen and is sent to the server for validation; use a private host device. For large crowds, use an additional rate-limiting layer. Scores are server-calculated, one submission per question. Questions advance manually, so the host should reveal once the timer is up. For serious competitions, add authenticated host accounts, session recovery and strict atomic transitions.

Unlock schedule: Day 1 Oct 14 midnight EAT, Day 2 Oct 15 9AM EAT, Day 3 Oct 16 9AM EAT (`lib/server.ts`).
