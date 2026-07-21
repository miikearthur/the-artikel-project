import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CategorySelect } from "../src/components/CategorySelect";
import { LevelSelect } from "../src/components/LevelSelect";
import { QuizView } from "../src/components/QuizView";
import { ResultsView } from "../src/components/ResultsView";
import { SignInButton } from "../src/components/SignInButton";
import { Article, GermanNoun, Level, NOUNS_BY_LEVEL, nounsForCategories } from "../src/data/germanNouns";
import { useQuiz } from "../src/logic/useQuiz";
import { useWordProgressSync } from "../src/logic/useWordProgressSync";
import { colors } from "../src/theme";

function Quiz({
  nouns,
  onBack,
  recordAnswer,
}: {
  nouns: GermanNoun[];
  onBack: () => void;
  recordAnswer: (wordId: string, correct: boolean) => void;
}) {
  const quiz = useQuiz(nouns);

  const handleSelect = (article: Article) => {
    recordAnswer(quiz.currentNoun.id, article === quiz.currentNoun.article);
    quiz.submitAnswer(article);
  };

  return (
    <>
      <Pressable onPress={onBack}>
        <Text style={styles.changeLevel}>‹ Zurück</Text>
      </Pressable>

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
          onSelect={handleSelect}
          onNext={quiz.advance}
        />
      )}
    </>
  );
}

export default function Index() {
  const [level, setLevel] = useState<Level | null>(null);
  const [pool, setPool] = useState<GermanNoun[] | null>(null);
  const { recordAnswer, masteredIds } = useWordProgressSync();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Artikel</Text>
        <Text style={styles.subtitle}>der · die · das</Text>
        <SignInButton />

        {level === null ? (
          <LevelSelect onSelect={setLevel} />
        ) : pool === null ? (
          <CategorySelect
            level={level}
            masteredIds={masteredIds}
            onBack={() => setLevel(null)}
            onStartAll={() => setPool(NOUNS_BY_LEVEL[level])}
            onStartSelected={(categories) => setPool(nounsForCategories(level, categories))}
          />
        ) : (
          <Quiz nouns={pool} onBack={() => setPool(null)} recordAnswer={recordAnswer} />
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
  changeLevel: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 16,
    textDecorationLine: "underline",
  },
});
