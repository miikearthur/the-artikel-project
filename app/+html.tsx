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
// #page-scroll below targets the app's own root ScrollView (app/index.tsx)
// specifically: once page content is taller than the screen, *that*
// element becomes the thing Safari actually bounces, and react-native-web
// has no gradient style prop to set directly in React — Safari paints an
// overscrolled element's own background in the reveal area, not whatever
// is visually behind it, so without this rule that reveal is plain white.
//
// color-scheme: dark tells the browser itself (not just the page) that
// this is a dark-only page.
//
// How Safari actually picks the status-bar/toolbar tint color, and why a
// plain background wasn't enough:
// - Safari 15 introduced theme-color for tinting the status bar and
//   toolbar. Safari 26 (the "Liquid Glass" redesign) stopped reading
//   theme-color at all — it now looks for a position:fixed or
//   position:sticky element sitting within ~4px of the top (or ~3px of
//   the bottom) of the viewport, at least 80% of the viewport wide and at
//   least 3px tall, and tints using THAT element's background-color. If
//   no such element exists, it falls back to <body>'s background-color —
//   which is also what pre-26 Safari always used.
// - Both of those only ever read background-color, a flat color — never
//   background-image. The line below used to be `background: <gradient>`,
//   which (being the background shorthand) silently resets
//   background-color to transparent as a side effect of not mentioning a
//   color in it. That's a real regression: it looked fine in the app
//   itself (which paints its own gradient at runtime), but left Safari's
//   own chrome with nothing to sample, so it fell back to white.
//   background-image + background-color as two separate declarations
//   avoids that trap.
// - Because Safari only ever samples ONE flat color, it can't reproduce a
//   gradient's two different ends on its own — so #safari-tint-top and
//   #safari-tint-bottom below give it two separate fixed elements to find,
//   one pinned to each edge, each carrying the matching end of the actual
//   gradient. They sit just off-screen (negative top/bottom offset) so the
//   sliver Safari can "see" stays inside the safe-area strip and never
//   shows up over real content. The @supports check is a standard
//   Safari-only feature-detect (these -webkit- properties are unique to
//   WebKit), so this never runs in Chrome/Firefox/Android, and the
//   max-width media query keeps it to phone-sized screens.
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
        {/* Without this, iOS Safari has no icon to use for "Add to Home
            Screen" and falls back to synthesizing one from the page title's
            first letter — this is the actual fix for that, not a cosmetic
            addition. 180x180 is Apple's current single recommended size;
            iOS downscales it itself for smaller contexts (Settings,
            Spotlight). */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: backgroundStyle }} />
      </head>
      <body>
        <div id="safari-tint-top" aria-hidden="true" />
        {children}
        <div id="safari-tint-bottom" aria-hidden="true" />
      </body>
    </html>
  );
}

const gradient = `linear-gradient(180deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`;

const backgroundStyle = `
html {
  color-scheme: dark;
}
html, body, #root, #page-scroll {
  background-image: ${gradient};
  background-color: ${colors.background};
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
}
#safari-tint-top, #safari-tint-bottom {
  display: none;
  position: fixed;
  left: 0;
  width: 100%;
  min-height: 12px;
  pointer-events: none;
  z-index: 1000;
}
#safari-tint-top {
  top: -8px;
  background-color: ${gradientColors[0]};
}
#safari-tint-bottom {
  bottom: -8px;
  background-color: ${colors.background};
}
@supports (-webkit-text-size-adjust: none) and (font: -apple-system-body) and (-webkit-touch-callout: none) {
  @media (max-width: 768px) {
    #safari-tint-top, #safari-tint-bottom {
      display: block;
    }
  }
}`;
