
import { createClient } from '@supabase/supabase-js';

// Supabase database connection
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

// Verify the host password
export function keyOK(key: unknown) {
  return (
    typeof key === 'string' &&
    key.length >= 12 &&
    key === process.env.HOST_PASSWORD
  );
}

// Unlock games automatically on their scheduled dates
export function open(day: number) {
  // Allow all games during local development
  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  // Conference unlock schedule (East Africa Time)
  const dates: Record<number, string> = {
    1: '2026-10-14T00:00:00+03:00',
    2: '2026-10-15T00:00:00+03:00',
    3: '2026-10-16T00:00:00+03:00',
  };

  const unlockDate = dates[day];

  // Prevent unknown game days from unlocking
  if (!unlockDate) {
    return false;
  }

  // Check whether the scheduled unlock time has passed
  return Date.now() >= new Date(unlockDate).getTime();
}
