import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useRef, useState } from "react";
import { Level } from "../data/germanNouns";

const STORAGE_KEY = "artikel:bestStreaks";

type Streaks = Partial<Record<Level, number>>;

// Local-only for now (per-device, via AsyncStorage) — unlike word-progress
// mastery, best streaks aren't synced to Amplify yet. Same owner-scoped
// pattern as useWordProgressSync could be added later if cross-device
// rankings turn out to matter.
export function useBestStreaks() {
  const [bestStreaks, setBestStreaks] = useState<Streaks>({});
  const ref = useRef<Streaks>({});

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (!raw) return;
        const parsed = JSON.parse(raw) as Streaks;
        ref.current = parsed;
        setBestStreaks(parsed);
      })
      .catch(() => {});
  }, []);

  const recordStreak = useCallback((level: Level, streak: number): boolean => {
    const current = ref.current[level] ?? 0;
    if (streak <= current) return false;
    const next = { ...ref.current, [level]: streak };
    ref.current = next;
    setBestStreaks(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
    return true;
  }, []);

  return { bestStreaks, recordStreak };
}
