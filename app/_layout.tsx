import { Stack } from "expo-router";
import Head from "expo-router/head";
import { StatusBar } from "expo-status-bar";
import "../src/logic/amplifyConfig";
import { colors } from "../src/theme";

export default function RootLayout() {
  return (
    <>
      <Head>
        <title>The Artikel Project</title>
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
