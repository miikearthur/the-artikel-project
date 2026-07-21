import { Platform } from "react-native";

// Firefox has a persistent, apparently unfixable bug where
// speechSynthesis.speak() produces an audible click on every single
// utterance, unrelated to the audio-device-cycling issue that affects
// (and was fixable in) Chrome/Safari. Rather than ship a pronunciation
// feature that clicks on every word, we disable it outright on Firefox.
// Native iOS/Android builds use the platform's own TTS engine, not the
// web Speech API, so they're unaffected regardless of browser.
export function isSpeechSupported(): boolean {
  if (Platform.OS !== "web") return true;
  if (typeof navigator === "undefined") return true;
  return !/firefox/i.test(navigator.userAgent);
}
