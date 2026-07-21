import { getCurrentUser, signInWithRedirect, signOut, type AuthUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { isAmplifyConfigured } from "../logic/amplifyConfig";
import { colors } from "../theme";

export function SignInButton() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAmplifyConfigured) {
      setChecked(true);
      return;
    }

    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setChecked(true));

    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      if (payload.event === "signedIn") {
        getCurrentUser().then(setUser).catch(() => setUser(null));
      }
      if (payload.event === "signedOut") {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  // Not deployed yet, or still checking the current session — render nothing
  // rather than flash a button that can't work yet.
  if (!isAmplifyConfigured || !checked) return null;

  if (user) {
    return (
      <Pressable onPress={() => signOut()} style={styles.link}>
        <Text style={styles.linkText}>{user.signInDetails?.loginId ?? user.username} · Abmelden</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={() => signInWithRedirect({ provider: "Google" })} style={styles.link}>
      <Text style={styles.linkText}>Mit Google anmelden</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  linkText: {
    fontSize: 12,
    color: colors.textMuted,
    textDecorationLine: "underline",
  },
});
