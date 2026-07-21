import { Pressable, StyleSheet, Text, View } from "react-native";
import { Article } from "../data/germanNouns";
import { QUESTIONS_PER_ROUND } from "../logic/useQuiz";
import { colors } from "../theme";
import { ArticleButton } from "./ArticleButton";

const ARTICLES: Article[] = ["der", "die", "das"];

interface Props {
  word: string;
  translation: string;
  correctArticle: Article;
  questionNumber: number;
  score: number;
  isAnswered: boolean;
  selectedArticle: Article | null;
  onSelect: (article: Article) => void;
  onNext: () => void;
}

export function QuizView({
  word,
  translation,
  correctArticle,
  questionNumber,
  score,
  isAnswered,
  selectedArticle,
  onSelect,
  onNext,
}: Props) {
  const buttonState = (article: Article): "idle" | "correct" | "incorrect" | "neutral" => {
    if (!isAnswered) return "idle";
    if (article === correctArticle) return "correct";
    if (article === selectedArticle) return "incorrect";
    return "neutral";
  };

  const wasCorrect = isAnswered && selectedArticle === correctArticle;

  return (
    <View style={styles.container}>
      <View style={styles.progressRow}>
        <Text style={styles.progressText}>
          {questionNumber} / {QUESTIONS_PER_ROUND}
        </Text>
        <Text style={styles.progressText}>Score: {score}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.word}>{word}</Text>
        {isAnswered && <Text style={styles.translation}>{translation}</Text>}
      </View>

      <View style={styles.buttonsRow}>
        {ARTICLES.map((article) => (
          <ArticleButton
            key={article}
            article={article}
            disabled={isAnswered}
            state={buttonState(article)}
            onPress={() => onSelect(article)}
          />
        ))}
      </View>

      {isAnswered && (
        <View style={styles.feedbackArea}>
          <Text style={[styles.feedbackText, { color: wasCorrect ? colors.correct : colors.incorrect }]}>
            {wasCorrect ? "Richtig!" : `Not quite — it's ${correctArticle} ${word}`}
          </Text>
          <Pressable style={styles.nextButton} onPress={onNext}>
            <Text style={styles.nextButtonText}>
              {questionNumber >= QUESTIONS_PER_ROUND ? "See results" : "Next"}
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 480,
    gap: 24,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressText: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingVertical: 48,
    paddingHorizontal: 24,
    alignItems: "center",
    gap: 8,
  },
  word: {
    fontSize: 36,
    fontWeight: "800",
    color: colors.text,
    textAlign: "center",
  },
  translation: {
    fontSize: 16,
    color: colors.textMuted,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  feedbackArea: {
    alignItems: "center",
    gap: 16,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  nextButton: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  nextButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "700",
  },
});
