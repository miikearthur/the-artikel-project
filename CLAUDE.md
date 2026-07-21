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
- Run the dev server in the background so it survives across turns; check it's still up
  before pointing Miguel at it.
- If native (iOS/Android) work is added later, keep it behind the same Expo Router
  screens — don't fork the UI per platform unless a screen genuinely needs it.

## Architecture notes

- **`app/index.tsx`** is the entire game: it owns the `useQuiz()` hook and switches between
  `QuizView` (mid-round) and `ResultsView` (round complete).
- **`src/logic/useQuiz.ts`** is the state machine: current noun, question number (1–10),
  score, selected answer, round-complete flag. It draws from a shuffled pool of
  `src/data/germanNouns.ts` without repeats until the pool is exhausted, then reshuffles —
  ported 1:1 from the original SwiftUI prototype's `QuizViewModel`.
- **Colors are semantic, not decorative**: `der` = blue, `die` = pink, `das` = green,
  consistently, in `src/theme.ts`. Don't reassign these — it's the whole point of a
  learn-the-articles game that the color becomes a memory aid.
- **Web output is static** (`app.json` → `expo.web.output: "static"`), which is what makes
  `npm run build:web` produce a plain `dist/` folder Amplify can host — no Node server
  required in production.
