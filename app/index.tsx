import { useEffect, useRef, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CategorySelect } from "../src/components/CategorySelect";
import { InfiniteResultsView } from "../src/components/InfiniteResultsView";
import { LevelSelect } from "../src/components/LevelSelect";
import { NicknamePrompt } from "../src/components/NicknamePrompt";
import { QuizView } from "../src/components/QuizView";
import { RankingsView } from "../src/components/RankingsView";
import { ResultsView } from "../src/components/ResultsView";
import { SignInButton } from "../src/components/SignInButton";
import { Article, GermanNoun, Level, NOUNS_BY_LEVEL, nounsForCategories } from "../src/data/germanNouns";
import { useBestStreaks } from "../src/logic/useBestStreaks";
import { MAX_LIVES, useInfiniteQuiz } from "../src/logic/useInfiniteQuiz";
import { useLeaderboard } from "../src/logic/useLeaderboard";
import { QUESTIONS_PER_ROUND, useQuiz } from "../src/logic/useQuiz";
import { QuizMode } from "../src/logic/quizMode";
import { useSoundPreference } from "../src/logic/useSoundPreference";
import { useWordProgressSync } from "../src/logic/useWordProgressSync";
import { colors } from "../src/theme";

function livesDisplay(lives: number): string {
  return "❤️".repeat(Math.max(lives, 0)) + "🖤".repeat(Math.max(MAX_LIVES - lives, 0));
}

function ClassicQuiz({
  nouns,
  onBack,
  recordAnswer,
  isMuted,
  onToggleMute,
}: {
  nouns: GermanNoun[];
  onBack: () => void;
  recordAnswer: (wordId: string, correct: boolean) => void;
  isMuted: boolean;
  onToggleMute: () => void;
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
          progressLeft={`${quiz.questionNumber} / ${QUESTIONS_PER_ROUND}`}
          progressRight={`Punkte: ${quiz.score}`}
          isAnswered={quiz.isAnswered}
          selectedArticle={quiz.selectedArticle}
          onSelect={handleSelect}
          onNext={quiz.advance}
          nextLabel={quiz.questionNumber >= QUESTIONS_PER_ROUND ? "Ergebnis" : "Weiter"}
          isMuted={isMuted}
          onToggleMute={onToggleMute}
        />
      )}
    </>
  );
}

function InfiniteQuizScreen({
  nouns,
  level,
  onBack,
  recordAnswer,
  recordStreak,
  leaderboard,
  nicknamePromptDismissed,
  onDismissNicknamePrompt,
  isMuted,
  onToggleMute,
}: {
  nouns: GermanNoun[];
  level: Level;
  onBack: () => void;
  recordAnswer: (wordId: string, correct: boolean) => void;
  recordStreak: (level: Level, streak: number) => boolean;
  leaderboard: ReturnType<typeof useLeaderboard>;
  nicknamePromptDismissed: boolean;
  onDismissNicknamePrompt: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
}) {
  const quiz = useInfiniteQuiz(nouns);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [globalSubmitted, setGlobalSubmitted] = useState(false);
  const recordedRef = useRef(false);

  useEffect(() => {
    if (quiz.isGameOver && !recordedRef.current) {
      recordedRef.current = true;
      setIsNewRecord(recordStreak(level, quiz.streak));
    }
  }, [quiz.isGameOver, quiz.streak, level, recordStreak]);

  useEffect(() => {
    // Fires once a nickname is available (either already set, or just saved
    // via the prompt below) — a no-op if signed out or skipped, matching
    // useLeaderboard's own silent-no-op-when-signed-out behavior.
    if (quiz.isGameOver && leaderboard.nickname && !globalSubmitted) {
      setGlobalSubmitted(true);
      leaderboard.submitScore(level, quiz.streak);
    }
  }, [quiz.isGameOver, quiz.streak, level, leaderboard, globalSubmitted]);

  const handleSelect = (article: Article) => {
    recordAnswer(quiz.currentNoun.id, article === quiz.currentNoun.article);
    quiz.submitAnswer(article);
  };

  const handleRestart = () => {
    recordedRef.current = false;
    setIsNewRecord(false);
    setGlobalSubmitted(false);
    quiz.restart();
  };

  const showNicknamePrompt =
    quiz.isGameOver && leaderboard.needsNickname && !nicknamePromptDismissed;

  return (
    <>
      <Pressable onPress={onBack}>
        <Text style={styles.changeLevel}>‹ Zurück</Text>
      </Pressable>

      {showNicknamePrompt ? (
        <NicknamePrompt onSave={leaderboard.setNickname} onSkip={onDismissNicknamePrompt} />
      ) : quiz.isGameOver ? (
        <InfiniteResultsView streak={quiz.streak} isNewRecord={isNewRecord} onRestart={handleRestart} />
      ) : (
        <QuizView
          word={quiz.currentNoun.word}
          translation={quiz.currentNoun.translation}
          correctArticle={quiz.currentNoun.article}
          progressLeft={livesDisplay(quiz.lives)}
          progressRight={`Serie: ${quiz.streak}`}
          isAnswered={quiz.isAnswered}
          selectedArticle={quiz.selectedArticle}
          onSelect={handleSelect}
          onNext={quiz.advance}
          nextLabel={quiz.lives <= 0 ? "Ergebnis" : "Weiter"}
          isMuted={isMuted}
          onToggleMute={onToggleMute}
        />
      )}
    </>
  );
}

export default function Index() {
  const [level, setLevel] = useState<Level | null>(null);
  const [showRankings, setShowRankings] = useState(false);
  const [session, setSession] = useState<{ pool: GermanNoun[]; mode: QuizMode } | null>(null);
  const [nicknamePromptDismissed, setNicknamePromptDismissed] = useState(false);
  const { recordAnswer, masteredIds } = useWordProgressSync();
  const { bestStreaks, recordStreak } = useBestStreaks();
  const leaderboard = useLeaderboard();
  const { isMuted, toggleMuted } = useSoundPreference();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Artikel</Text>
        <Text style={styles.subtitle}>der · die · das</Text>
        <SignInButton />

        {showRankings ? (
          <RankingsView bestStreaks={bestStreaks} fetchTop={leaderboard.fetchTop} onBack={() => setShowRankings(false)} />
        ) : level === null ? (
          <LevelSelect onSelect={setLevel} onShowRankings={() => setShowRankings(true)} />
        ) : session === null ? (
          <CategorySelect
            level={level}
            masteredIds={masteredIds}
            onBack={() => setLevel(null)}
            onStartAll={(mode) => setSession({ pool: NOUNS_BY_LEVEL[level], mode })}
            onStartSelected={(categories, mode) => setSession({ pool: nounsForCategories(level, categories), mode })}
          />
        ) : session.mode === "classic" ? (
          <ClassicQuiz
            nouns={session.pool}
            onBack={() => setSession(null)}
            recordAnswer={recordAnswer}
            isMuted={isMuted}
            onToggleMute={toggleMuted}
          />
        ) : (
          <InfiniteQuizScreen
            nouns={session.pool}
            level={level}
            onBack={() => setSession(null)}
            recordAnswer={recordAnswer}
            recordStreak={recordStreak}
            leaderboard={leaderboard}
            nicknamePromptDismissed={nicknamePromptDismissed}
            onDismissNicknamePrompt={() => setNicknamePromptDismissed(true)}
            isMuted={isMuted}
            onToggleMute={toggleMuted}
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
  changeLevel: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 16,
    textDecorationLine: "underline",
  },
});
