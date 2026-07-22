import * as Speech from "expo-speech";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Article } from "../data/germanNouns";
import { isSpeechSupported } from "../logic/speechSupport";
import { useKeepAudioWarm } from "../logic/useKeepAudioWarm";
import { colors } from "../theme";
import { ArticleButton } from "./ArticleButton";

const ARTICLES: Article[] = ["der", "die", "das"];

interface Props {
  word: string;
  translation: string;
  correctArticle: Article;
  // Left/right of the progress row above the card — classic mode passes
  // "N / 10" and "Punkte: N", infinite mode passes a lives display and
  // "Serie: N". Kept as pre-formatted strings so this view stays mode-agnostic.
  progressLeft: string;
  progressRight: string;
  isAnswered: boolean;
  selectedArticle: Article | null;
  onSelect: (article: Article) => void;
  onNext: () => void;
  nextLabel: string;
  isMuted: boolean;
  onToggleMute: () => void;
}

export function QuizView({
  word,
  translation,
  correctArticle,
  progressLeft,
  progressRight,
  isAnswered,
  selectedArticle,
  onSelect,
  onNext,
  nextLabel,
  isMuted,
  onToggleMute,
}: Props) {
  const buttonState = (article: Article): "idle" | "correct" | "incorrect" | "neutral" => {
    if (!isAnswered) return "idle";
    if (article === correctArticle) return "correct";
    if (article === selectedArticle) return "incorrect";
    return "neutral";
  };

  const wasCorrect = isAnswered && selectedArticle === correctArticle;

  // Firefox has a persistent click-on-every-word bug in its speech engine
  // that nothing on the app side can work around, so pronunciation is
  // disabled outright there rather than shipping a broken feature.
  const speechSupported = isSpeechSupported();

  useKeepAudioWarm(speechSupported);

  // Speak just the bare noun, never "der/die/das + noun" — saying the article
  // out loud before the player answers would give away the quiz.
  //
  // The leading ", " is deliberate: some browsers produce an audible click
  // as the speech engine cold-starts right at the first spoken syllable. A
  // brief silent pause up front gives the engine a moment to spin up before
  // any audible word content begins, so the click (if any) lands in the
  // pause instead of on the word.
  const speakWord = () => {
    if (!speechSupported) return;
    Speech.speak(`, ${word}`, { language: "de-DE" });
  };

  // Auto-speak only happens when unmuted — muted by default, see
  // useSoundPreference. The speaker button below always works regardless,
  // so a muted player can still listen to a specific word on demand.
  // isMuted is a dependency so unmuting mid-question immediately speaks
  // the word that's already on screen, instead of waiting for the next one.
  useEffect(() => {
    if (isMuted) return;
    speakWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word, isMuted]);

  // Only stop speech when leaving the quiz screen entirely — calling
  // stop() before every speak() (e.g. in the effect above) causes an
  // audible click as the speech engine cancels and immediately restarts.
  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.progressRow}>
        <Text style={styles.progressText}>{progressLeft}</Text>
        {speechSupported && (
          <Pressable onPress={onToggleMute} style={styles.muteToggle} hitSlop={8}>
            <Text style={styles.muteToggleText}>{isMuted ? "🔇 Ton aus" : "🔊 Ton an"}</Text>
          </Pressable>
        )}
        <Text style={styles.progressText}>{progressRight}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.wordRow}>
          <Text style={styles.word}>{word}</Text>
          {speechSupported && (
            <Pressable onPress={speakWord} style={styles.speakerButton} hitSlop={8}>
              <Text style={styles.speakerIcon}>🔊</Text>
            </Pressable>
          )}
        </View>
        {isAnswered && <Text style={styles.translation}>{translation}</Text>}
      </View>

      <View style={styles.buttonsRow}>
        {ARTICLES.map((article) => (
          <ArticleButton
            key={article}
            article={article}
            disabled={isAnswered}
            state={buttonState(article)}
            onPress={() => onSelect(article)}
          />
        ))}
      </View>

      {isAnswered && (
        <View style={styles.feedbackArea}>
          <Text style={[styles.feedbackText, { color: wasCorrect ? colors.correct : colors.incorrect }]}>
            {wasCorrect ? "Richtig!" : `Falsch! Richtig ist: ${correctArticle} ${word}`}
          </Text>
          <Pressable style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextButtonText}>{nextLabel}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 480,
    gap: 24,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  muteToggle: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  muteToggleText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textMuted,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 8,
  },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  word: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.text,
    textAlign: "center",
  },
  speakerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
  },
  speakerIcon: {
    fontSize: 16,
  },
  translation: {
    fontSize: 16,
    color: colors.textMuted,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  feedbackArea: {
    alignItems: "center",
    gap: 16,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  nextButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700",
  },
});
