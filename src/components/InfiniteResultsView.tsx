import { StyleSheet, Text, View } from "react-native";
import { colors, glow, shadows } from "../theme";
import { PressableScale } from "./PressableScale";

interface Props {
  streak: number;
  isNewRecord: boolean;
  onRestart: () => void;
  onShowRankings: () => void;
}

function message(streak: number): string {
  if (streak >= 30) return "Unglaublich! Du bist ein Artikel-Profi.";
  if (streak >= 15) return "Stark! Das war eine lange Serie.";
  if (streak >= 5) return "Gut gemacht! Weiter so.";
  return "Kein Problem, versuch es noch einmal!";
}

export function InfiniteResultsView({ streak, isNewRecord, onRestart, onShowRankings }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.gameOver}>Spiel vorbei</Text>
      {isNewRecord && <Text style={styles.newRecord}>🏆 Neuer Rekord!</Text>}
      <Text style={styles.score}>{streak}</Text>
      <Text style={styles.scoreLabel}>Serie</Text>
      <Text style={styles.message}>{message(streak)}</Text>
      <PressableScale style={styles.button} onPress={onRestart} accessibilityRole="button">
        <Text style={styles.buttonText}>Nochmal spielen</Text>
      </PressableScale>
      <PressableScale style={styles.rankingsButton} onPress={onShowRankings} accessibilityRole="button">
        <Text style={styles.rankingsButtonText}>🏆 Rangliste ansehen</Text>
      </PressableScale>
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
    ...glow(colors.der),
  },
  buttonText: {
    color: "#0b0b1e",
    fontSize: 16,
    fontWeight: "800",
  },
  rankingsButton: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    ...shadows.soft,
  },
  rankingsButtonText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
  },
});
