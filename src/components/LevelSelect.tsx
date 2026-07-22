import { Pressable, StyleSheet, Text, View } from "react-native";
import { LEVELS, Level, NOUNS_BY_LEVEL } from "../data/germanNouns";
import { QuizMode } from "../logic/quizMode";
import { colors, glow } from "../theme";
import { PressableScale } from "./PressableScale";

interface Props {
  mode: QuizMode;
  onSelect: (level: Level) => void;
  onBack: () => void;
}

const MODE_LABEL: Record<QuizMode, string> = {
  classic: "Klassisch",
  infinite: "Unendlich",
};

export function LevelSelect({ mode, onSelect, onBack }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable
          style={styles.backButton}
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Zurück"
        >
          <Text style={styles.backButtonText}>‹ Zurück</Text>
        </Pressable>
        <Text style={styles.modeBadge}>{MODE_LABEL[mode]}</Text>
      </View>

      <Text style={styles.prompt}>Wähle dein Level</Text>
      <View style={styles.grid}>
        {LEVELS.map((level) => {
          const available = NOUNS_BY_LEVEL[level].length > 0;
          return (
            <PressableScale
              key={level}
              disabled={!available}
              onPress={() => onSelect(level)}
              style={[styles.button, !available && styles.buttonDisabled]}
              accessibilityRole="button"
              accessibilityLabel={`${level.toUpperCase()}, ${
                available ? `${NOUNS_BY_LEVEL[level].length} Wörter` : "bald verfügbar"
              }`}
              accessibilityState={{ disabled: !available }}
            >
              <Text style={[styles.buttonText, !available && styles.buttonTextDisabled]}>
                {level.toUpperCase()}
              </Text>
              {available ? (
                <Text style={styles.wordCount}>{NOUNS_BY_LEVEL[level].length} Wörter</Text>
              ) : (
                <Text style={styles.comingSoon}>bald verfügbar</Text>
              )}
            </PressableScale>
          );
        })}
      </View>
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
  topRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  backButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textMuted,
  },
  modeBadge: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textMuted,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 9,
    overflow: "hidden",
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
    width: 120,
    paddingVertical: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.der,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    ...glow(colors.der, 0.3),
  },
  buttonDisabled: {
    borderColor: colors.border,
    backgroundColor: colors.surface,
    opacity: 0.5,
    boxShadow: "none",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text,
  },
  buttonTextDisabled: {
    color: colors.textMuted,
  },
  comingSoon: {
    fontSize: 11,
    color: colors.textMuted,
  },
  wordCount: {
    fontSize: 11,
    color: colors.textMuted,
  },
});
