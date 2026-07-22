import { generateClient } from "aws-amplify/data";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { LEVELS, Level } from "../data/germanNouns";
import { isAmplifyConfigured } from "./amplifyConfig";
import { useAuthUser } from "./useAuthUser";

let client: ReturnType<typeof generateClient<Schema>> | null = null;
function getClient() {
  if (!isAmplifyConfigured) return null;
  if (!client) client = generateClient<Schema>();
  return client;
}

export interface LeaderboardRow {
  nickname: string;
  streak: number;
}

// Global leaderboard sync, layered on top of the local per-device rankings
// (useBestStreaks). Reading the leaderboard works for everyone — signed in
// or not, since LeaderboardEntry allows public read — but choosing a
// nickname and submitting a score both require being signed in, same
// silent-no-op-when-signed-out philosophy as useWordProgressSync.
export function useLeaderboard() {
  const { user } = useAuthUser();
  const [nickname, setNicknameState] = useState<string | null>(null);
  const [profileChecked, setProfileChecked] = useState(false);
  const loadedForUserId = useRef<string | null>(null);

  useEffect(() => {
    const c = getClient();
    if (!c || !user) {
      setNicknameState(null);
      setProfileChecked(true);
      loadedForUserId.current = null;
      return;
    }
    if (loadedForUserId.current === user.userId) return;
    loadedForUserId.current = user.userId;
    setProfileChecked(false);

    // Wrapped in an async IIFE (rather than chaining .then/.catch straight
    // off the call) so that even a synchronous throw — e.g. PlayerProfile
    // not existing yet on a backend that hasn't been redeployed with this
    // model — is caught, instead of escaping as an unhandled error.
    (async () => {
      try {
        const { data } = await c.models.PlayerProfile.get({ id: user.userId });
        setNicknameState(data?.nickname ?? null);
      } catch {
        setNicknameState(null);
      } finally {
        setProfileChecked(true);
      }
    })();
  }, [user]);

  const setNickname = useCallback(
    async (name: string) => {
      const c = getClient();
      if (!c || !user) return;
      const trimmed = name.trim();
      if (!trimmed) return;

      try {
        const { data: existingProfile } = await c.models.PlayerProfile.get({ id: user.userId });
        if (existingProfile) {
          await c.models.PlayerProfile.update({ id: user.userId, nickname: trimmed });
        } else {
          await c.models.PlayerProfile.create({ id: user.userId, nickname: trimmed });
        }
        setNicknameState(trimmed);

        // Backfill onto any leaderboard rows this user already has, so a
        // rename doesn't leave a stale name visible to everyone else. At
        // most one row per CEFR level, so this is cheap.
        await Promise.all(
          LEVELS.map(async (level) => {
            const id = `${user.userId}_${level}`;
            const { data: existingEntry } = await c.models.LeaderboardEntry.get({ id });
            if (existingEntry) {
              await c.models.LeaderboardEntry.update({ id, nickname: trimmed });
            }
          })
        );
      } catch {
        // Best-effort — the nickname still applies locally via state above.
      }
    },
    [user]
  );

  const submitScore = useCallback(
    async (level: Level, streak: number): Promise<boolean> => {
      const c = getClient();
      if (!c || !user || !nickname) return false;

      try {
        const id = `${user.userId}_${level}`;
        const { data: existing } = await c.models.LeaderboardEntry.get({ id });
        if (existing && existing.streak >= streak) return false;

        if (existing) {
          await c.models.LeaderboardEntry.update({ id, streak, nickname });
        } else {
          await c.models.LeaderboardEntry.create({ id, level, streak, nickname });
        }
        return true;
      } catch {
        return false;
      }
    },
    [user, nickname]
  );

  const fetchTop = useCallback(
    async (level: Level, limit = 5): Promise<LeaderboardRow[]> => {
      const c = getClient();
      if (!c) return [];
      try {
        // The client's default auth mode is userPool, which anonymous
        // visitors have no session for — public reads need the identityPool
        // (guest IAM role) mode explicitly. Signed-in visitors keep the
        // default userPool mode, matching the allow.authenticated() rule.
        const { data } = await c.models.LeaderboardEntry.listLeaderboardEntryByLevel(
          { level },
          { sortDirection: "DESC", limit, authMode: user ? "userPool" : "identityPool" }
        );
        return data.map((entry) => ({ nickname: entry.nickname, streak: entry.streak }));
      } catch {
        return [];
      }
    },
    [user]
  );

  return {
    nickname,
    setNickname,
    submitScore,
    fetchTop,
    isSignedIn: !!user,
    needsNickname: !!user && profileChecked && nickname === null,
  };
}
