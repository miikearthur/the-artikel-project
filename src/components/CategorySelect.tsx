import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { categoriesForLevel, Level } from "../data/germanNouns";
import { colors } from "../theme";

interface Props {
  level: Level;
  onBack: () => void;
  onStartAll: () => void;
  onStartSelected: (categories: string[]) => void;
}

export function CategorySelect({ level, onBack, onStartAll, onStartSelected }: Props) {
  const categories = categoriesForLevel(level);
  const [selected, setSelected] = useState<Set<string>>(new Set());

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

  return (
    <View style={styles.container}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>‹ Zurück</Text>
      </Pressable>

      <Pressable style={styles.allButton} onPress={onStartAll}>
        <Text style={styles.allButtonText}>Alle Kategorien</Text>
      </Pressable>

      <Text style={styles.hint}>...oder wähle Kategorien</Text>

      <View style={styles.selectRow}>
        <Pressable
          onPress={() => setSelected(new Set(categories))}
          disabled={allSelected}
          style={styles.selectLink}
        >
          <Text style={[styles.selectLinkText, allSelected && styles.selectLinkTextDisabled]}>
            Alle auswählen
          </Text>
        </Pressable>
        <Text style={styles.selectDivider}>·</Text>
        <Pressable onPress={() => setSelected(new Set())} disabled={!hasSelection} style={styles.selectLink}>
          <Text style={[styles.selectLinkText, !hasSelection && styles.selectLinkTextDisabled]}>
            Alle abwählen
          </Text>
        </Pressable>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.grid}>
        {categories.map((category) => {
          const isSelected = selected.has(category);
          return (
            <Pressable
              key={category}
              onPress={() => toggle(category)}
              style={[styles.chip, isSelected ? styles.chipSelected : styles.chipUnselected]}
            >
              <Text style={[styles.chipText, isSelected ? styles.chipTextSelected : styles.chipTextUnselected]}>
                {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Pressable
        style={[styles.startButton, !hasSelection && styles.startButtonDisabled]}
        disabled={!hasSelection}
        onPress={() => onStartSelected(Array.from(selected))}
      >
        <Text style={[styles.startButtonText, !hasSelection && styles.startButtonTextDisabled]}>
          Start ({selected.size} gewählt)
        </Text>
      </Pressable>
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
  allButton: {
    borderWidth: 2,
    borderColor: colors.der,
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 40,
    alignItems: "center",
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
  scroll: {
    maxHeight: 360,
    width: "100%",
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
  startButton: {
    backgroundColor: colors.das,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginTop: 8,
  },
  startButtonDisabled: {
    backgroundColor: colors.surfaceAlt,
  },
  startButtonText: {
    color: "#0b0b1e",
    fontSize: 16,
    fontWeight: "800",
  },
  startButtonTextDisabled: {
    color: colors.textMuted,
  },
});
