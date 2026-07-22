# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

**Artikel** — a game that quizzes users on German noun articles (der/die/das). Expo +
React Native + TypeScript, chosen specifically so one codebase covers the website
(`artikel.miguelserrano.de`, static export via `expo export --platform web`) and future
iOS/Android apps via the same source. Separate repo and separate AWS Amplify app from
Miguel's main site (`miguelserrano.de`) — do not mix the two.

Miguel is not a professional developer — keep code comments beginner-friendly and
explanatory, matching the existing style (i.e. mostly no comments, and where present,
explaining *why*, not *what*).

## Commands

- `npm run web` — dev server in the browser
- `npm run ios` / `npm run android` — simulators (need Xcode / Android Studio)
- `npm run typecheck` — TypeScript check
- `npm run build:web` — static export into `dist/` (what Amplify's `amplify.yml` runs)

## Working agreements

- **Never commit or push without being asked.** Make the change, verify it, leave it for
  Miguel to review, push only when he says "push".
- **Verify changes in a real browser, not just by building.** Playwright (chromium) can be
  installed as a dev dependency for scripted checks; write throwaway scripts in the session
  scratchpad, not in the repo. Screenshot and look at visual changes.
- Check mobile widths (~390px) as well as desktop — this is a phone-first game.
- **The dev server must always be available for Miguel to test, without him having to ask.**
  Start it (background, `npm run web`, default port) at the beginning of any session touching
  this app if it isn't already running, and re-check/restart it after any change that could
  have killed it — don't wait to be asked. Verify with `curl` before assuming it's up; don't
  claim something is testable without checking first.
- If native (iOS/Android) work is added later, keep it behind the same Expo Router
  screens — don't fork the UI per platform unless a screen genuinely needs it.

## Architecture notes

- **`app/index.tsx`** is the entire game: it owns the `useQuiz()` hook and switches between
  `QuizView` (mid-round) and `ResultsView` (round complete).
- **`src/logic/useQuiz.ts`** is the state machine: current noun, question number (1–10),
  score, selected answer, round-complete flag. It draws from a shuffled pool of
  `src/data/germanNouns.ts` without repeats until the pool is exhausted, then reshuffles —
  ported 1:1 from the original SwiftUI prototype's `QuizViewModel`.
- **`src/logic/useInfiniteQuiz.ts`** mirrors `useQuiz.ts`'s pool-draw/reshuffle mechanics but
  replaces the 10-question cap with 3 lives (`MAX_LIVES`). The streak counts correct answers
  for the whole run and is **not** reset by a wrong answer — losing a life is the only cost
  of a mistake, so the streak only ever climbs until game over. `advance()` only flips
  `isGameOver` once the player taps past the life-ending answer, same as `useQuiz` only flips
  `isRoundComplete` on the tap past question 10 — so the last wrong answer's feedback always
  gets to display before the screen swaps to results.
- **`QuizView`** is mode-agnostic: it takes pre-formatted `progressLeft`/`progressRight`
  strings and a `nextLabel` rather than knowing about question counts or lives itself. Classic
  and infinite mode each format their own header text in `app/index.tsx`.
- **`src/logic/useBestStreaks.ts`** persists each level's best infinite-mode streak via
  AsyncStorage, keyed locally per device — it does **not** sync across devices through
  Amplify yet (unlike word-progress mastery via `useWordProgressSync.ts`). Extending it to
  the same owner-scoped Amplify pattern is a reasonable future step if cross-device rankings
  turn out to matter.
- **Colors are semantic, not decorative**: `der` = blue, `die` = pink, `das` = green,
  consistently, in `src/theme.ts`. Don't reassign these — it's the whole point of a
  learn-the-articles game that the color becomes a memory aid.
- **Web output is static** (`app.json` → `expo.web.output: "static"`), which is what makes
  `npm run build:web` produce a plain `dist/` folder Amplify can host — no Node server
  required in production.
