
import { createClient } from '@supabase/supabase-js';

export function db() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}

export function keyOK(key: unknown) {
  return (
    typeof key === 'string' &&
    key.length >= 12 &&
    key === process.env.HOST_PASSWORD
  );
}

// Set to true ONLY while testing locally.
const TEST_MODE = process.env.NODE_ENV === 'development';

export function open(day: number) {
  if (TEST_MODE) {
    return true;
  }

  const dates: Record<number, string> = {
    1: '2026-10-14T00:00:00+03:00',
    2: '2026-10-15T09:00:00+03:00',
    3: '2026-10-16T09:00:00+03:00',
  };

  const unlockDate = dates[day];

  if (!unlockDate) return false;

  return Date.now() >= new Date(unlockDate).getTime();
}
