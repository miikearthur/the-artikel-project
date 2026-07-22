# the-artikel-project

**Artikel** — a small game for learning German noun genders (der/die/das). You're shown a
noun, you pick its article, you get instant feedback plus the English translation, and you
get a score at the end of a 10-question round.

Built with **Expo + React Native + TypeScript**, so the same codebase ships as:
- a website (`artikel.miguelserrano.de`)
- an iOS app
- an Android app (later, if wanted)

This is a completely separate project from `miguelserrano.de` — different repo, different
Amplify app, own subdomain.

## Commands

- `npm install` — install dependencies
- `npm run web` — dev server in the browser (opens at `http://localhost:8081`)
- `npm run ios` — run in the iOS simulator (needs Xcode)
- `npm run android` — run in an Android emulator (needs Android Studio)
- `npm run typecheck` — TypeScript check, no build output
- `npm run build:web` — static web export into `dist/` (what Amplify runs)

## Project layout

```
app/                    — Expo Router screens (app/index.tsx is the whole game)
src/data/germanNouns.ts — the word list (word, article, English translation)
src/logic/useQuiz.ts    — quiz state machine (score, round progress, question order)
src/components/         — QuizView (question + answer buttons), ResultsView, ArticleButton
src/theme.ts            — colors (der = blue, die = pink, das = green)
```

The word list and quiz logic were ported from an earlier SwiftUI prototype
(`german articles test/` next to this repo on Miguel's machine) — same ~120 nouns,
same round structure (10 random questions, no repeats until the pool is exhausted).

## Deploying — AWS Amplify + subdomain

The main site (`miguelserrano.de`) is on AWS Amplify already; this project gets its **own**
Amplify app, pointed at **this** repo, with its own subdomain. Steps:

1. **Push this repo to GitHub** (already done if you're reading this from the repo).
2. **AWS Amplify Console** → **New app** → **Host web app** → connect to GitHub → pick
   `the-artikel-project` → branch `main`.
3. Amplify auto-detects `amplify.yml` in this repo (build command `npm run build:web`,
   output folder `dist`) — just confirm and deploy.
4. Once the first deploy succeeds, go to the app's **Domain management** tab → **Add domain**.
   - If `miguelserrano.de` is already a "domain" entry under a *different* Amplify app, you
     can't add the exact same root domain to two apps — instead add just the subdomain:
     domain `miguelserrano.de`, and under subdomains add `artikel` (so the full record is
     `artikel.miguelserrano.de`).
   - Amplify will give you a CNAME record to add wherever `miguelserrano.de`'s DNS is
     managed (Route 53, or whatever registrar/DNS host was used for the main site).
5. Add that CNAME record. DNS propagation is usually minutes, sometimes longer.
6. Once it shows "Available" in Amplify's Domain management tab, `artikel.miguelserrano.de`
   is live.

Every push to `main` redeploys automatically, same as the main site.

## To-do

- [ ] option to disable sound
- [ ] fill in B2-C2 word lists (A2 done — 1000 words; B1 done — 2000 words)
- [ ] spaced-repetition quiz mode (prioritize words that aren't mastered yet)
- [ ] daily streak / stats page
- [ ] PWA install support (add to home screen)
- [ ] actually publish the native app
- [ ] light/dark theme toggle
- [ ] different question types (type the word, match translation to word)
- [ ] fix top/bottom white bar on mobile
- [ ] language selector: German only, or English & German
- [x] infinite mode (no 10-question limit)
- [ ] progress bar during the round (not just the "1/10" text)
- [x] show word count on level select (e.g. "A1 · 500 Wörter")
- [ ] remember last-picked categories locally
- [ ] keyboard shortcuts on web (1/2/3 or D/I/S to answer)
- [ ] custom app icon/favicon (still using Expo's default)
- [ ] show which category you're playing during the quiz
- [ ] loading indicator while progress syncs after sign-in
- [ ] perfect-round celebration (animation/confetti on 10/10)
- [ ] a way to check overall progress — mastered words/categories section
- [x] check difficulty of vocab to make sure it's appropriate to the different levels
