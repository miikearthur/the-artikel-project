import { Stack } from "expo-router";
import Head from "expo-router/head";
import { StatusBar } from "expo-status-bar";
import "../src/logic/amplifyConfig";
import { colors, gradientColors } from "../src/theme";

export default function RootLayout() {
  return (
    <>
      <Head>
        <title>The Artikel Project</title>
        {/* Expo's web export bakes a flat background-color onto html/body/#root
            from the app's theme, for the moment before JS hydrates. That flat
            color no longer matches the app's gradient background, so on iOS
            Safari — where bouncing past the top/bottom, or the address bar
            collapsing, reveals whatever's behind the page content — a mismatched
            solid band would show instead of the gradient. Overriding it with the
            same gradient (!important, since we don't control the ordering
            against Expo's auto-generated <style> tag) keeps that reveal seamless. */}
        <style>{`html, body, #root { background: linear-gradient(180deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%) !important; }`}</style>
      </Head>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </>
  );
}
