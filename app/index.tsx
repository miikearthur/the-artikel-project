import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { CategorySelect } from "../src/components/CategorySelect";
import { ConfirmModal } from "../src/components/ConfirmModal";
import { FadeIn } from "../src/components/FadeIn";
import { InfiniteResultsView } from "../src/components/InfiniteResultsView";
import { LevelSelect } from "../src/components/LevelSelect";
import { ModeSelect } from "../src/components/ModeSelect";
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
import { colors, gradientColors } from "../src/theme";

function livesDisplay(lives: number): string {
  return "❤️".repeat(Math.max(lives, 0)) + "🖤".repeat(Math.max(MAX_LIVES - lives, 0));
}

function ClassicQuiz({
  nouns,
  level,
  onBack,
  recordAnswer,
  isMuted,
  onToggleMute,
}: {
  nouns: GermanNoun[];
  level: Level;
  onBack: () => void;
  recordAnswer: (wordId: string, correct: boolean) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}) {
  const quiz = useQuiz(nouns);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const handleSelect = (article: Article) => {
    recordAnswer(quiz.currentNoun.id, article === quiz.currentNoun.article);
    quiz.submitAnswer(article);
  };

  // Bailing out of question 1 before answering loses nothing, so only
  // confirm once at least one answer has actually counted toward the score.
  const hasProgress = !quiz.isRoundComplete && (quiz.questionNumber > 1 || quiz.isAnswered);

  const handleBackPress = () => {
    if (hasProgress) setShowExitConfirm(true);
    else onBack();
  };

  return (
    <>
      <View style={styles.topRow}>
        <Pressable onPress={handleBackPress} accessibilityRole="button" accessibilityLabel="Zurück">
          <Text style={styles.changeLevel}>‹ Zurück</Text>
        </Pressable>
        <Text style={styles.levelBadge}>{level.toUpperCase()}</Text>
      </View>

      {quiz.isRoundComplete ? (
        <FadeIn style={styles.screen}>
          <ResultsView score={quiz.score} onRestart={quiz.restart} />
        </FadeIn>
      ) : (
        <FadeIn style={styles.screen}>
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
        </FadeIn>
      )}

      {showExitConfirm && (
        <ConfirmModal
          message="Runde abbrechen? Dein Fortschritt in dieser Runde geht verloren."
          confirmLabel="Verlassen"
          cancelLabel="Weiterspielen"
          onConfirm={onBack}
          onCancel={() => setShowExitConfirm(false)}
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
  const [showExitConfirm, setShowExitConfirm] = useState(false);
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

  // Losing a life is expected mid-run, so only confirm once there's
  // something real to lose: an active streak, spent lives, or a pending answer.
  const hasProgress =
    !quiz.isGameOver && (quiz.streak > 0 || quiz.isAnswered || quiz.lives < MAX_LIVES);

  const handleBackPress = () => {
    if (hasProgress) setShowExitConfirm(true);
    else onBack();
  };

  return (
    <>
      <View style={styles.topRow}>
        <Pressable onPress={handleBackPress} accessibilityRole="button" accessibilityLabel="Zurück">
          <Text style={styles.changeLevel}>‹ Zurück</Text>
        </Pressable>
        <Text style={styles.levelBadge}>{level.toUpperCase()}</Text>
      </View>

      {showNicknamePrompt ? (
        <FadeIn style={styles.screen}>
          <NicknamePrompt onSave={leaderboard.setNickname} onSkip={onDismissNicknamePrompt} />
        </FadeIn>
      ) : quiz.isGameOver ? (
        <FadeIn style={styles.screen}>
          <InfiniteResultsView streak={quiz.streak} isNewRecord={isNewRecord} onRestart={handleRestart} />
        </FadeIn>
      ) : (
        <FadeIn style={styles.screen}>
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
        </FadeIn>
      )}

      {showExitConfirm && (
        <ConfirmModal
          message="Runde abbrechen? Deine aktuelle Serie geht verloren."
          confirmLabel="Verlassen"
          cancelLabel="Weiterspielen"
          onConfirm={onBack}
          onCancel={() => setShowExitConfirm(false)}
        />
      )}
    </>
  );
}

export default function Index() {
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [showRankings, setShowRankings] = useState(false);
  const [pool, setPool] = useState<GermanNoun[] | null>(null);
  const [nicknamePromptDismissed, setNicknamePromptDismissed] = useState(false);
  const { recordAnswer, masteredIds, isSyncEnabled } = useWordProgressSync();
  const { bestStreaks, recordStreak } = useBestStreaks();
  const leaderboard = useLeaderboard();
  const { isMuted, toggleMuted } = useSoundPreference();

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={gradientColors} style={StyleSheet.absoluteFill} pointerEvents="none" />
      <ScrollView
        style={styles.scrollRoot}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title} accessibilityRole="header">The Artikel Project</Text>
        <Text style={styles.subtitle}>der · die · das</Text>
        <SignInButton />

        {showRankings ? (
          <FadeIn style={styles.screen}>
            <RankingsView bestStreaks={bestStreaks} fetchTop={leaderboard.fetchTop} onBack={() => setShowRankings(false)} />
          </FadeIn>
        ) : mode === null ? (
          <FadeIn style={styles.screen}>
            <ModeSelect onSelect={setMode} onShowRankings={() => setShowRankings(true)} />
          </FadeIn>
        ) : level === null ? (
          <FadeIn style={styles.screen}>
            <LevelSelect mode={mode} onSelect={setLevel} onBack={() => setMode(null)} />
          </FadeIn>
        ) : pool === null ? (
          <FadeIn style={styles.screen}>
            <CategorySelect
              level={level}
              mode={mode}
              masteredIds={masteredIds}
              showMastery={isSyncEnabled}
              onBack={() => setLevel(null)}
              onStartAll={() => setPool(NOUNS_BY_LEVEL[level])}
              onStartSelected={(categories) => setPool(nounsForCategories(level, categories))}
            />
          </FadeIn>
        ) : mode === "classic" ? (
          <FadeIn style={styles.screen}>
            <ClassicQuiz
              nouns={pool}
              level={level}
              onBack={() => setPool(null)}
              recordAnswer={recordAnswer}
              isMuted={isMuted}
              onToggleMute={toggleMuted}
            />
          </FadeIn>
        ) : (
          <FadeIn style={styles.screen}>
            <InfiniteQuizScreen
              nouns={pool}
              level={level}
              onBack={() => setPool(null)}
              recordAnswer={recordAnswer}
              recordStreak={recordStreak}
              leaderboard={leaderboard}
              nicknamePromptDismissed={nicknamePromptDismissed}
              onDismissNicknamePrompt={() => setNicknamePromptDismissed(true)}
              isMuted={isMuted}
              onToggleMute={toggleMuted}
            />
          </FadeIn>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollRoot: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 8,
  },
  screen: {
    width: "100%",
    alignItems: "center",
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
    textDecorationLine: "underline",
  },
  topRow: {
    width: "100%",
    maxWidth: 480,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
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
});
