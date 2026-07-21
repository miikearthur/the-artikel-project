import { Pressable, StyleSheet, Text } from "react-native";
import { Article } from "../data/germanNouns";
import { articleColors, colors } from "../theme";

interface Props {
  article: Article;
  onPress: () => void;
  disabled: boolean;
  // Once answered: "correct" | "incorrect" | "neutral" tells the button how to render.
  state: "idle" | "correct" | "incorrect" | "neutral";
}

export function ArticleButton({ article, onPress, disabled, state }: Props) {
  const accent = articleColors[article];
  const background =
    state === "correct" ? colors.correct : state === "incorrect" ? colors.incorrect : colors.surface;
  const borderColor = state === "idle" ? accent : background;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        { borderColor, backgroundColor: background, opacity: pressed && !disabled ? 0.85 : 1 },
      ]}
    >
      <Text style={[styles.text, state === "idle" && { color: accent }]}>{article}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    textTransform: "lowercase",
  },
});
