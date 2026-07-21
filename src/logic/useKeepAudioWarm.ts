import { useEffect } from "react";
import { Platform } from "react-native";

// Web-only fix for a known Chrome/macOS quirk: speechSynthesis.speak() fully
// opens and closes the audio output device around each utterance, which
// produces an audible click/tap at the start of every word. Keeping a
// silent tone playing continuously (started once, for as long as this
// screen is mounted) keeps the audio device open so individual speak()
// calls no longer have to spin it up and down.
export function useKeepAudioWarm(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    if (Platform.OS !== "web") return;

    const AudioContextClass =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx: AudioContext = new AudioContextClass();
    const gain = ctx.createGain();
    gain.gain.value = 0.0001;
    const oscillator = ctx.createOscillator();
    oscillator.frequency.value = 20;
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();

    return () => {
      oscillator.stop();
      ctx.close();
    };
  }, [enabled]);
}
