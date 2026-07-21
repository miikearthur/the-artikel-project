import { useCallback, useRef, useState } from "react";
import { Article, GERMAN_NOUNS, GermanNoun } from "../data/germanNouns";

export const QUESTIONS_PER_ROUND = 10;

function pickRandom(list: GermanNoun[]): GermanNoun {
  return list[Math.floor(Math.random() * list.length)];
}

interface QuizState {
  currentNoun: GermanNoun;
  questionNumber: number;
  score: number;
  selectedArticle: Article | null;
  isRoundComplete: boolean;
}

function freshRound(): { state: QuizState; pool: GermanNoun[] } {
  const first = pickRandom(GERMAN_NOUNS);
  return {
    state: {
      currentNoun: first,
      questionNumber: 1,
      score: 0,
      selectedArticle: null,
      isRoundComplete: false,
    },
    pool: GERMAN_NOUNS.filter((n) => n.id !== first.id),
  };
}

export function useQuiz() {
  const initial = useRef(freshRound());
  const pool = useRef(initial.current.pool);
  const [state, setState] = useState<QuizState>(initial.current.state);

  const isAnswered = state.selectedArticle !== null;

  const submitAnswer = useCallback(
    (article: Article) => {
      setState((prev) => {
        if (prev.selectedArticle !== null) return prev;
        const correct = article === prev.currentNoun.article;
        return {
          ...prev,
          selectedArticle: article,
          score: correct ? prev.score + 1 : prev.score,
        };
      });
    },
    []
  );

  const advance = useCallback(() => {
    setState((prev) => {
      if (prev.selectedArticle === null) return prev;
      if (prev.questionNumber >= QUESTIONS_PER_ROUND) {
        return { ...prev, isRoundComplete: true };
      }
      if (pool.current.length === 0) {
        pool.current = GERMAN_NOUNS.filter((n) => n.id !== prev.currentNoun.id);
      }
      const next = pickRandom(pool.current);
      pool.current = pool.current.filter((n) => n.id !== next.id);
      return {
        ...prev,
        questionNumber: prev.questionNumber + 1,
        selectedArticle: null,
        currentNoun: next,
      };
    });
  }, []);

  const restart = useCallback(() => {
    const round = freshRound();
    pool.current = round.pool;
    setState(round.state);
  }, []);

  return { ...state, isAnswered, submitAnswer, advance, restart };
}
