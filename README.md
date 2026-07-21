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
