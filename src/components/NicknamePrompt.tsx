import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme";

interface Props {
  onSave: (nickname: string) => void;
  onSkip: () => void;
}

export function NicknamePrompt({ onSave, onSkip }: Props) {
  const [name, setName] = useState("");
  const canSave = name.trim().length > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌍 Weltrangliste</Text>
      <Text style={styles.hint}>Wähle einen Spitznamen, damit dein Ergebnis eingetragen wird.</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Dein Spitzname"
        placeholderTextColor={colors.textMuted}
        maxLength={20}
        autoFocus
      />
      <Pressable style={[styles.button, !canSave && styles.buttonDisabled]} disabled={!canSave} onPress={() => onSave(name)}>
        <Text style={styles.buttonText}>Speichern</Text>
      </Pressable>
      <Pressable onPress={onSkip} style={styles.skipLink}>
        <Text style={styles.skipLinkText}>Überspringen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 480,
    alignItems: "center",
    gap: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.text,
  },
  hint: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.der,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginTop: 4,
  },
  buttonDisabled: {
    opacity: 0.4,
  },
  buttonText: {
    color: "#0b0b1e",
    fontSize: 16,
    fontWeight: "800",
  },
  skipLink: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  skipLinkText: {
    fontSize: 13,
    color: colors.textMuted,
    textDecorationLine: "underline",
  },
});
