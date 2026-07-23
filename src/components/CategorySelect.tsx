import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { categoriesForLevel, Level, NOUNS_BY_LEVEL } from "../data/germanNouns";
import { QuizMode } from "../logic/quizMode";
import { colors, glow, shadows } from "../theme";
import { PressableScale } from "./PressableScale";

interface Props {
  level: Level;
  mode: QuizMode;
  masteredIds?: Set<string>;
  // Whether mastery data applies at all (i.e. signed in) — kept separate from
  // masteredIds.size so "signed in, nothing mastered yet" can still show
  // "0/N gelernt" instead of looking identical to "signed out".
  showMastery?: boolean;
  onBack: () => void;
  onStartAll: () => void;
  onStartSelected: (categories: string[]) => void;
}

const MODE_LABEL: Record<QuizMode, string> = {
  classic: "Klassisch",
  infinite: "Unendlich",
};

export function CategorySelect({ level, mode, masteredIds, showMastery, onBack, onStartAll, onStartSelected }: Props) {
  const categories = categoriesForLevel(level);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");

  const masteredCounts = useMemo(() => {
    if (!showMastery) return null;
    const counts = new Map<string, { mastered: number; total: number }>();
    for (const noun of NOUNS_BY_LEVEL[level]) {
      const entry = counts.get(noun.category) ?? { mastered: 0, total: 0 };
      entry.total += 1;
      if (masteredIds?.has(noun.id)) entry.mastered += 1;
      counts.set(noun.category, entry);
    }
    return counts;
  }, [level, masteredIds, showMastery]);

  const visibleCategories = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return categories;
    return categories.filter((category) => category.toLowerCase().includes(query));
  }, [categories, search]);

  const toggle = (category: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  const hasSelection = selected.size > 0;
  const allSelected = selected.size === categories.length;
  // Selecting every category by hand is equivalent to selecting none, so
  // the button collapses back to "Alle Kategorien" in both cases — "Start"
  // only shows for a genuine partial selection.
  const isPartialSelection = hasSelection && !allSelected;

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
        <View style={styles.badgeGroup}>
          <Text style={styles.levelBadge}>{level.toUpperCase()}</Text>
          <Text style={styles.levelBadge}>{MODE_LABEL[mode]}</Text>
        </View>
      </View>

      <PressableScale
        style={styles.allButton}
        onPress={() => (isPartialSelection ? onStartSelected(Array.from(selected)) : onStartAll())}
        accessibilityRole="button"
        accessibilityLabel={isPartialSelection ? `Start, ${selected.size} Kategorien gewählt` : "Alle Kategorien"}
      >
        <Text style={styles.allButtonText}>{isPartialSelection ? "Start" : "Alle Kategorien"}</Text>
      </PressableScale>

      <Text style={styles.hint}>...oder wähle Kategorien</Text>

      <TextInput
        style={styles.search}
        value={search}
        onChangeText={setSearch}
        placeholder="Kategorie suchen…"
        placeholderTextColor={colors.textMuted}
        accessibilityLabel="Kategorie suchen"
      />

      <View style={styles.selectRow}>
        <Pressable
          onPress={() => setSelected(new Set(categories))}
          disabled={allSelected}
          style={styles.selectLink}
          accessibilityRole="button"
          accessibilityLabel="Alle auswählen"
          accessibilityState={{ disabled: allSelected }}
        >
          <Text style={[styles.selectLinkText, allSelected && styles.selectLinkTextDisabled]}>
            Alle auswählen
          </Text>
        </Pressable>
        <Text style={styles.selectDivider}>·</Text>
        <Pressable
          onPress={() => setSelected(new Set())}
          disabled={!hasSelection}
          style={styles.selectLink}
          accessibilityRole="button"
          accessibilityLabel="Alle abwählen"
          accessibilityState={{ disabled: !hasSelection }}
        >
          <Text style={[styles.selectLinkText, !hasSelection && styles.selectLinkTextDisabled]}>
            Alle abwählen
          </Text>
        </Pressable>
      </View>

      {visibleCategories.length === 0 ? (
        <Text style={styles.noResults}>Keine Kategorien gefunden.</Text>
      ) : (
        <View style={styles.grid}>
          {visibleCategories.map((category) => {
            const isSelected = selected.has(category);
            const counts = masteredCounts?.get(category);
            return (
              <PressableScale
                key={category}
                onPress={() => toggle(category)}
                style={[styles.chip, isSelected ? styles.chipSelected : styles.chipUnselected]}
                accessibilityRole="checkbox"
                accessibilityLabel={category}
                accessibilityState={{ checked: isSelected }}
              >
                <Text style={[styles.chipText, isSelected ? styles.chipTextSelected : styles.chipTextUnselected]}>
                  {category}
                </Text>
                {counts && (
                  <Text style={styles.chipBadge}>
                    {counts.mastered}/{counts.total} gelernt
                  </Text>
                )}
              </PressableScale>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 560,
    alignItems: "center",
    gap: 16,
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
  badgeGroup: {
    flexDirection: "row",
    gap: 6,
  },
  levelBadge: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textMuted,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 9,
    overflow: "hidden",
  },
  search: {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.text,
    ...shadows.soft,
  },
  noResults: {
    fontSize: 13,
    color: colors.textMuted,
    paddingVertical: 24,
  },
  allButton: {
    borderWidth: 2,
    borderColor: colors.der,
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 40,
    alignItems: "center",
    ...glow(colors.der),
  },
  allButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "800",
  },
  hint: {
    color: colors.textMuted,
    fontSize: 13,
  },
  selectRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  selectLink: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  selectLinkText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.das,
    textDecorationLine: "underline",
  },
  selectLinkTextDisabled: {
    color: colors.textMuted,
    textDecorationLine: "none",
  },
  selectDivider: {
    color: colors.textMuted,
    fontSize: 13,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 8,
  },
  chip: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    gap: 2,
  },
  chipUnselected: {
    borderColor: colors.border,
    backgroundColor: colors.surface,
    opacity: 0.45,
  },
  chipSelected: {
    borderColor: colors.das,
    backgroundColor: colors.surfaceAlt,
    opacity: 1,
    ...glow(colors.das, 0.3),
  },
  chipText: {
    fontSize: 13,
    fontWeight: "600",
  },
  chipTextUnselected: {
    color: colors.textMuted,
  },
  chipTextSelected: {
    color: colors.text,
  },
  chipBadge: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.das,
  },
});
