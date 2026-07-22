import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "artikel:soundMuted";

// Muted by default — auto-speak-on-new-word only starts if the player
// explicitly turns it on, and that choice is remembered locally. This only
// gates the *automatic* playback; the per-word speaker button in QuizView
// always works regardless, so a muted player can still listen on demand.
export function useSoundPreference() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw !== null) setIsMuted(raw === "true");
      })
      .catch(() => {});
  }, []);

  const toggleMuted = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      AsyncStorage.setItem(STORAGE_KEY, String(next)).catch(() => {});
      return next;
    });
  }, []);

  return { isMuted, toggleMuted };
}
