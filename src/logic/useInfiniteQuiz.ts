import { useCallback, useRef, useState } from "react";
import { Article, GermanNoun } from "../data/germanNouns";

export const MAX_LIVES = 3;

function pickRandom(list: GermanNoun[]): GermanNoun {
  return list[Math.floor(Math.random() * list.length)];
}

interface InfiniteQuizState {
  currentNoun: GermanNoun;
  streak: number;
  lives: number;
  selectedArticle: Article | null;
  isGameOver: boolean;
}

function freshGame(nouns: GermanNoun[]): { state: InfiniteQuizState; pool: GermanNoun[] } {
  const first = pickRandom(nouns);
  return {
    state: {
      currentNoun: first,
      streak: 0,
      lives: MAX_LIVES,
      selectedArticle: null,
      isGameOver: false,
    },
    pool: nouns.filter((n) => n.id !== first.id),
  };
}

// Same endless-pool-with-reshuffle approach as useQuiz, but the round never
// ends on a question count — it ends when lives run out, which advance()
// only converts into isGameOver once the player taps past the final answer
// (mirrors useQuiz's questionNumber >= QUESTIONS_PER_ROUND check, so the
// last wrong answer still gets to show its feedback before the screen swaps).
// The streak counts correct answers for the whole run and is never reset by
// a wrong answer — losing a life is the only cost of a mistake.
export function useInfiniteQuiz(nouns: GermanNoun[]) {
  const initial = useRef(freshGame(nouns));
  const pool = useRef(initial.current.pool);
  const [state, setState] = useState<InfiniteQuizState>(initial.current.state);

  const isAnswered = state.selectedArticle !== null;

  const submitAnswer = useCallback((article: Article) => {
    setState((prev) => {
      if (prev.selectedArticle !== null) return prev;
      const correct = article === prev.currentNoun.article;
      return {
        ...prev,
        selectedArticle: article,
        // A wrong answer costs a life but does not break the streak — lives
        // are the "mistake budget", so the streak only ever climbs within a run.
        streak: correct ? prev.streak + 1 : prev.streak,
        lives: correct ? prev.lives : prev.lives - 1,
      };
    });
  }, []);

  const advance = useCallback(() => {
    setState((prev) => {
      if (prev.selectedArticle === null) return prev;
      if (prev.lives <= 0) {
        return { ...prev, isGameOver: true };
      }
      if (pool.current.length === 0) {
        pool.current = nouns.filter((n) => n.id !== prev.currentNoun.id);
      }
      const next = pickRandom(pool.current);
      pool.current = pool.current.filter((n) => n.id !== next.id);
      return {
        ...prev,
        selectedArticle: null,
        currentNoun: next,
      };
    });
  }, [nouns]);

  const restart = useCallback(() => {
    const round = freshGame(nouns);
    pool.current = round.pool;
    setState(round.state);
  }, [nouns]);

  return { ...state, isAnswered, submitAnswer, advance, restart };
}
