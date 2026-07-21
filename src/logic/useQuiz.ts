import { useCallback, useRef, useState } from "react";
import { Article, GermanNoun } from "../data/germanNouns";

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

function freshRound(nouns: GermanNoun[]): { state: QuizState; pool: GermanNoun[] } {
  const first = pickRandom(nouns);
  return {
    state: {
      currentNoun: first,
      questionNumber: 1,
      score: 0,
      selectedArticle: null,
      isRoundComplete: false,
    },
    pool: nouns.filter((n) => n.id !== first.id),
  };
}

export function useQuiz(nouns: GermanNoun[]) {
  const initial = useRef(freshRound(nouns));
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
        pool.current = nouns.filter((n) => n.id !== prev.currentNoun.id);
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
  }, [nouns]);

  const restart = useCallback(() => {
    const round = freshRound(nouns);
    pool.current = round.pool;
    setState(round.state);
  }, [nouns]);

  return { ...state, isAnswered, submitAnswer, advance, restart };
}
