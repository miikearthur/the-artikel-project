import { Pressable, StyleSheet, Text, View } from "react-native";
import { QUESTIONS_PER_ROUND } from "../logic/useQuiz";
import { colors } from "../theme";

interface Props {
  score: number;
  onRestart: () => void;
}

function message(score: number): string {
  const ratio = score / QUESTIONS_PER_ROUND;
  if (ratio === 1) return "Perfekt! You know your articles cold.";
  if (ratio >= 0.7) return "Sehr gut! Just a few slip-ups.";
  if (ratio >= 0.4) return "Solid start — keep drilling.";
  return "Articles are tough. Run it back!";
}

export function ResultsView({ score, onRestart }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>
        {score} / {QUESTIONS_PER_ROUND}
      </Text>
      <Text style={styles.message}>{message(score)}</Text>
      <Pressable style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Play again</Text>
      </Pressable>
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
  },
  buttonText: {
    color: "#0b0b1e",
    fontSize: 16,
    fontWeight: "800",
  },
});
