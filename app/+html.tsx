import { ScrollViewStyleReset } from "expo-router/html";
import { type PropsWithChildren } from "react";
import { colors } from "../src/theme";

// Expo Router's default HTML shell doesn't set viewport-fit=cover or a
// background-color on the document itself — on iOS Safari that leaves the
// safe-area strips (behind the notch/status bar and the home-indicator bar)
// showing the browser's default white instead of the app's background,
// since nothing tells the page it's allowed to draw into those areas at all.
//
// viewport-fit=cover also means content can now render *underneath*
// Safari's floating toolbar (the bar with the URL and tab button) — without
// reserving space for it, buttons near the bottom of a screen end up
// visually hidden behind that toolbar. The safe-area-inset padding below
// keeps real content clear of it; env() evaluates to 0px on devices/
// browsers that don't have this concept (older iPhones, desktop, Android),
// so it adds no unwanted spacing there.
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
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: backgroundStyle }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

const backgroundStyle = `
html, body, #root {
  background-color: ${colors.background};
}
#root {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  box-sizing: border-box;
}`;
