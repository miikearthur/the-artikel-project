import { generateClient } from "aws-amplify/data";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { isAmplifyConfigured } from "./amplifyConfig";
import { useAuthUser } from "./useAuthUser";

const MASTERY_STREAK = 3;

let client: ReturnType<typeof generateClient<Schema>> | null = null;
function getClient() {
  if (!isAmplifyConfigured) return null;
  if (!client) client = generateClient<Schema>();
  return client;
}

// Cross-device word progress, synced when signed in. Signing in is
// optional throughout the app, so every operation here is a silent
// no-op when signed out or when a request fails — a network hiccup or
// missing backend should never interrupt the quiz itself.
export function useWordProgressSync() {
  const { user } = useAuthUser();
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  const loadedForUserId = useRef<string | null>(null);

  useEffect(() => {
    const c = getClient();
    if (!c || !user) {
      setMasteredIds(new Set());
      loadedForUserId.current = null;
      return;
    }
    if (loadedForUserId.current === user.userId) return;
    loadedForUserId.current = user.userId;

    c.models.WordProgress.list()
      .then(({ data }) => {
        setMasteredIds(new Set(data.filter((p) => p.mastered).map((p) => p.wordId)));
      })
      .catch(() => {
        // Best-effort — the quiz works fine without progress data.
      });
  }, [user]);

  const recordAnswer = useCallback(
    async (wordId: string, correct: boolean) => {
      const c = getClient();
      if (!c || !user) return;

      try {
        const { data: existing } = await c.models.WordProgress.listWordProgressByWordId({ wordId });
        const row = existing[0];
        const correctStreak = correct ? (row?.correctStreak ?? 0) + 1 : 0;
        const mastered = correctStreak >= MASTERY_STREAK;
        const lastAnsweredAt = new Date().toISOString();

        if (row) {
          await c.models.WordProgress.update({
            id: row.id,
            correctStreak,
            timesCorrect: (row.timesCorrect ?? 0) + (correct ? 1 : 0),
            timesSeen: (row.timesSeen ?? 0) + 1,
            mastered,
            lastAnsweredAt,
          });
        } else {
          await c.models.WordProgress.create({
            wordId,
            correctStreak,
            timesCorrect: correct ? 1 : 0,
            timesSeen: 1,
            mastered,
            lastAnsweredAt,
          });
        }

        setMasteredIds((prev) => {
          const alreadyThere = prev.has(wordId);
          if (mastered === alreadyThere) return prev;
          const next = new Set(prev);
          if (mastered) next.add(wordId);
          else next.delete(wordId);
          return next;
        });
      } catch {
        // Best-effort sync — never let a network/AWS hiccup break the quiz.
      }
    },
    [user]
  );

  return { recordAnswer, masteredIds, isSyncEnabled: !!user };
}
