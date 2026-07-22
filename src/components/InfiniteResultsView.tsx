import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

interface Props {
  streak: number;
  isNewRecord: boolean;
  onRestart: () => void;
}

function message(streak: number): string {
  if (streak >= 30) return "Unglaublich! Du bist ein Artikel-Profi.";
  if (streak >= 15) return "Stark! Das war eine lange Serie.";
  if (streak >= 5) return "Gut gemacht! Weiter so.";
  return "Kein Problem, versuch es noch einmal!";
}

export function InfiniteResultsView({ streak, isNewRecord, onRestart }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.gameOver}>Spiel vorbei</Text>
      {isNewRecord && <Text style={styles.newRecord}>🏆 Neuer Rekord!</Text>}
      <Text style={styles.score}>{streak}</Text>
      <Text style={styles.scoreLabel}>Serie</Text>
      <Text style={styles.message}>{message(streak)}</Text>
      <Pressable style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Nochmal spielen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 480,
    alignItems: "center",
    gap: 12,
  },
  gameOver: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textMuted,
  },
  newRecord: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.das,
  },
  score: {
    fontSize: 56,
    fontWeight: "800",
    color: colors.text,
    marginTop: 8,
  },
  scoreLabel: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: -8,
  },
  message: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: "center",
    marginTop: 8,
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
