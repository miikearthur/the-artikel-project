import { StyleSheet, Text, View } from "react-native";
import { QUESTIONS_PER_ROUND } from "../logic/useQuiz";
import { colors, glow } from "../theme";
import { Fireworks } from "./Fireworks";
import { PressableScale } from "./PressableScale";

interface Props {
  score: number;
  onRestart: () => void;
}

function message(score: number): string {
  const ratio = score / QUESTIONS_PER_ROUND;
  if (ratio === 1) return "Perfekt! Du kennst alle Artikel.";
  if (ratio >= 0.7) return "Sehr gut! Fast perfekt.";
  if (ratio >= 0.4) return "Guter Start! Übe weiter.";
  return "Das war schwer. Versuch es noch einmal!";
}

export function ResultsView({ score, onRestart }: Props) {
  const isPerfect = score === QUESTIONS_PER_ROUND;

  return (
    <View style={styles.container}>
      {isPerfect && <Fireworks />}
      <Text style={styles.score}>
        {score} / {QUESTIONS_PER_ROUND}
      </Text>
      <Text style={styles.message}>{message(score)}</Text>
      <PressableScale style={styles.button} onPress={onRestart} accessibilityRole="button">
        <Text style={styles.buttonText}>Nochmal spielen</Text>
      </PressableScale>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 480,
    alignItems: "center",
    gap: 20,
  },
  score: {
    fontSize: 56,
    fontWeight: "800",
    color: colors.text,
  },
  message: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.der,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginTop: 12,
    ...glow(colors.der),
  },
  buttonText: {
    color: "#0b0b1e",
    fontSize: 16,
    fontWeight: "800",
  },
});
