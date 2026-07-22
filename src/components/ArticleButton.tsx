import { StyleSheet, Text } from "react-native";
import { Article } from "../data/germanNouns";
import { articleColors, colors, glow } from "../theme";
import { PressableScale } from "./PressableScale";

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

  // A colored glow that tracks the button's current meaning: the der/die/das
  // accent while idle, then a stronger correct/incorrect pop once answered.
  // The one remaining "neutral" button (answered, not selected, not correct)
  // stays flat so attention lands on the correct/incorrect pair instead.
  const stateGlow =
    state === "idle"
      ? glow(accent, 0.35)
      : state === "correct"
        ? glow(colors.correct, 0.5)
        : state === "incorrect"
          ? glow(colors.incorrect, 0.5)
          : { boxShadow: "none" };

  const label =
    state === "correct" ? `${article}, richtig` : state === "incorrect" ? `${article}, falsch` : article;

  return (
    <PressableScale
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, { borderColor, backgroundColor: background }, stateGlow]}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
    >
      <Text style={[styles.text, state === "idle" && { color: accent }]}>{article}</Text>
    </PressableScale>
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
