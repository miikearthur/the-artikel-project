import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { QuizView } from "../src/components/QuizView";
import { ResultsView } from "../src/components/ResultsView";
import { useQuiz } from "../src/logic/useQuiz";
import { colors } from "../src/theme";

export default function Index() {
  const quiz = useQuiz();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Artikel</Text>
        <Text style={styles.subtitle}>der · die · das</Text>

        {quiz.isRoundComplete ? (
          <ResultsView score={quiz.score} onRestart={quiz.restart} />
        ) : (
          <QuizView
            word={quiz.currentNoun.word}
            translation={quiz.currentNoun.translation}
            correctArticle={quiz.currentNoun.article}
            questionNumber={quiz.questionNumber}
            score={quiz.score}
            isAnswered={quiz.isAnswered}
            selectedArticle={quiz.selectedArticle}
            onSelect={quiz.submitAnswer}
            onNext={quiz.advance}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 0,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 32,
  },
});
