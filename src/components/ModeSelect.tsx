import { Pressable, StyleSheet, Text, View } from "react-native";
import { QuizMode } from "../logic/quizMode";
import { colors, glow } from "../theme";
import { PressableScale } from "./PressableScale";

interface Props {
  onSelect: (mode: QuizMode) => void;
  onShowRankings: () => void;
}

const MODES: { mode: QuizMode; label: string; hint: string }[] = [
  { mode: "classic", label: "Klassisch", hint: "10 Fragen" },
  { mode: "infinite", label: "Unendlich", hint: "3 Leben" },
];

export function ModeSelect({ onSelect, onShowRankings }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Wähle einen Modus</Text>
      <View style={styles.grid}>
        {MODES.map(({ mode, label, hint }) => (
          <PressableScale
            key={mode}
            onPress={() => onSelect(mode)}
            style={styles.button}
            accessibilityRole="button"
            accessibilityLabel={`${label}, ${hint}`}
          >
            <Text style={styles.buttonText}>{label}</Text>
            <Text style={styles.buttonHint}>{hint}</Text>
          </PressableScale>
        ))}
      </View>

      <Pressable style={styles.rankingsButton} onPress={onShowRankings} accessibilityRole="button">
        <Text style={styles.rankingsButtonText}>🏆 Rangliste (Unendlich-Modus)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 480,
    alignItems: "center",
    gap: 24,
  },
  prompt: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  button: {
    width: 150,
    paddingVertical: 28,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.der,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    ...glow(colors.der),
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text,
  },
  buttonHint: {
    fontSize: 11,
    color: colors.textMuted,
  },
  rankingsButton: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  rankingsButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textMuted,
    textDecorationLine: "underline",
  },
});
