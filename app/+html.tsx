import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";
import { colors, gradientColors } from "../src/theme";

// Expo Router's default HTML shell doesn't set viewport-fit=cover or a
// background-color on the document itself — on iOS Safari that leaves the
// safe-area strips (behind the notch/status bar and the home-indicator bar)
// showing the browser's default white instead of the app's background,
// since nothing tells the page it's allowed to draw into those areas at all.
//
// When the site is added to the home screen and opened as a standalone
// "web app", the status bar area (clock/battery, top of the screen) stops
// being part of the page at all — it becomes real native iOS chrome, drawn
// by the OS, and its color is controlled *only* by
// apple-mobile-web-app-status-bar-style, never by any CSS on the page.
// Without apple-mobile-web-app-capable turning standalone mode on in the
// first place, iOS also ignores that style tag and just shows its default
// white bar. black-translucent makes that native bar fully see-through, so
// the app's own gradient shows underneath it, matching regular Safari.
//
// viewport-fit=cover also means content can now render *underneath*
// Safari's floating toolbar (the bar with the URL and tab button) — without
// reserving space for it, buttons near the bottom of a screen end up
// visually hidden behind that toolbar. The safe-area-inset padding below
// keeps real content clear of it; env() evaluates to 0px on devices/
// browsers that don't have this concept (older iPhones, desktop, Android),
// so it adds no unwanted spacing there.
//
// That padding alone wasn't enough, though: Expo's own reset stylesheet
// pins html/body/#root to height:100%, which on iOS Safari resolves against
// the *largest* possible viewport (toolbar collapsed) — so while the
// toolbar is actually showing, content sized to that inflated height
// extends underneath it regardless of padding. This is the well-known
// "100vh on mobile Safari" bug. 100dvh (dynamic viewport height) tracks the
// real, currently-visible viewport as the toolbar shows/hides, so it
// replaces the fixed height for browsers that support it (iOS Safari
// 15.4+); the plain 100vh line above it is the fallback for ones that
// don't. !important is needed to win over Expo's own #expo-reset rule,
// which has identical specificity.
//
// The background is a gradient (matching the one the app renders at
// runtime via expo-linear-gradient) rather than a flat color, so whatever
// iOS Safari reveals when rubber-band bouncing past the top/bottom of the
// page — or when its toolbar collapses/expands — is seamless instead of a
// mismatched solid band.
//
// #page-scroll below targets the app's own root ScrollView (app/index.tsx)
// specifically: once page content is taller than the screen, *that*
// element becomes the thing Safari actually bounces, and react-native-web
// has no gradient style prop to set directly in React — Safari paints an
// overscrolled element's own background in the reveal area, not whatever
// is visually behind it, so without this rule that reveal is plain white.
//
// color-scheme: dark tells the browser itself (not just the page) that
// this is a dark-only page — without it, Safari has no signal that it
// shouldn't fall back to its own default light styling for browser-level
// chrome around the page, on top of whatever theme-color says.
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="theme-color" content={colors.background} />
        <meta name="color-scheme" content="dark" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: backgroundStyle }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const gradient = `linear-gradient(180deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;

const backgroundStyle = `
html {
  color-scheme: dark;
}
html, body, #root, #page-scroll {
  background: ${gradient};
}
html, body, #root {
  height: 100vh !important;
  height: 100dvh !important;
}
#root {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  box-sizing: border-box;
}`;
