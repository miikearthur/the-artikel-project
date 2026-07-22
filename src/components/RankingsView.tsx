import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LEVELS, Level, NOUNS_BY_LEVEL } from "../data/germanNouns";
import { LeaderboardRow } from "../logic/useLeaderboard";
import { colors, shadows } from "../theme";

interface Props {
  bestStreaks: Partial<Record<Level, number>>;
  fetchTop: (level: Level, limit?: number) => Promise<LeaderboardRow[]>;
  onBack: () => void;
}

export function RankingsView({ bestStreaks, fetchTop, onBack }: Props) {
  // Resolved all at once (rather than updating state as each level's fetch
  // lands) so the "🌍 Weltweit" sections across all cards fill in together —
  // one settle instead of each card popping open at its own network-timed
  // moment. null = still loading, so a "Lädt…" line reserves the same
  // single-line height the eventual placeholder/content will occupy.
  const [globalTop, setGlobalTop] = useState<Partial<Record<Level, LeaderboardRow[]>> | null>(null);

  useEffect(() => {
    let cancelled = false;
    const levels = LEVELS.filter((level) => NOUNS_BY_LEVEL[level].length > 0);
    Promise.all(levels.map((level) => fetchTop(level, 5).then((rows) => [level, rows] as const))).then(
      (entries) => {
        if (cancelled) return;
        setGlobalTop(Object.fromEntries(entries));
      }
    );
    return () => {
      cancelled = true;
    };
  }, [fetchTop]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={onBack}
        accessibilityRole="button"
        accessibilityLabel="Zurück"
      >
        <Text style={styles.backButtonText}>‹ Zurück</Text>
      </Pressable>

      <Text style={styles.title} accessibilityRole="header">🏆 Rangliste</Text>
      <Text style={styles.subtitle}>Beste Serie im Unendlich-Modus</Text>

      <View style={styles.list}>
        {LEVELS.map((level) => {
          const available = NOUNS_BY_LEVEL[level].length > 0;
          const best = bestStreaks[level];
          const top = globalTop?.[level];
          return (
            <View key={level} style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.levelText}>{level.toUpperCase()}</Text>
                {!available ? (
                  <Text style={styles.placeholder}>bald verfügbar</Text>
                ) : best ? (
                  <Text style={styles.streakText}>🔥 {best} · du</Text>
                ) : (
                  <Text style={styles.placeholder}>noch keine Serie</Text>
                )}
              </View>

              {available && (
                <View style={styles.globalList}>
                  <Text style={styles.globalHeading}>🌍 Weltweit</Text>
                  {globalTop === null ? (
                    <Text style={styles.placeholder}>Lädt…</Text>
                  ) : !top || top.length === 0 ? (
                    <Text style={styles.placeholder}>Sei die/der Erste!</Text>
                  ) : (
                    top.map((entry, i) => (
                      <View key={i} style={styles.globalRow}>
                        <Text style={styles.globalRank}>{i + 1}.</Text>
                        <Text style={styles.globalName} numberOfLines={1}>
                          {entry.nickname}
                        </Text>
                        <Text style={styles.globalStreak}>{entry.streak}</Text>
                      </View>
                    ))
                  )}
                </View>
              )}
            </View>
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
    gap: 16,
  },
  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  backButtonText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textMuted,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.text,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: -8,
  },
  list: {
    width: "100%",
    gap: 10,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.border,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 10,
    ...shadows.soft,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  levelText: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text,
  },
  streakText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.das,
  },
  placeholder: {
    fontSize: 13,
    color: colors.textMuted,
  },
  globalList: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
    gap: 6,
  },
  globalHeading: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textMuted,
    textTransform: "uppercase",
  },
  globalRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  globalRank: {
    fontSize: 13,
    color: colors.textMuted,
    width: 18,
  },
  globalName: {
    fontSize: 13,
    color: colors.text,
    flex: 1,
  },
  globalStreak: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.der,
  },
});
