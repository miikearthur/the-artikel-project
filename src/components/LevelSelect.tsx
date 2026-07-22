import { Pressable, StyleSheet, Text, View } from "react-native";
import { LEVELS, Level, NOUNS_BY_LEVEL } from "../data/germanNouns";
import { colors } from "../theme";

interface Props {
  onSelect: (level: Level) => void;
  onShowRankings: () => void;
}

export function LevelSelect({ onSelect, onShowRankings }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Wähle dein Level</Text>
      <View style={styles.grid}>
        {LEVELS.map((level) => {
          const available = NOUNS_BY_LEVEL[level].length > 0;
          return (
            <Pressable
              key={level}
              disabled={!available}
              onPress={() => onSelect(level)}
              style={({ pressed }) => [
                styles.button,
                !available && styles.buttonDisabled,
                pressed && available && { opacity: 0.85 },
              ]}
            >
              <Text style={[styles.buttonText, !available && styles.buttonTextDisabled]}>
                {level.toUpperCase()}
              </Text>
              {available ? (
                <Text style={styles.wordCount}>{NOUNS_BY_LEVEL[level].length} Wörter</Text>
              ) : (
                <Text style={styles.comingSoon}>bald verfügbar</Text>
              )}
            </Pressable>
          );
        })}
      </View>

      <Pressable style={styles.rankingsButton} onPress={onShowRankings}>
        <Text style={styles.rankingsButtonText}>🏆 Rangliste</Text>
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
    width: 120,
    paddingVertical: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.der,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  buttonDisabled: {
    borderColor: colors.border,
    backgroundColor: colors.surface,
    opacity: 0.5,
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
