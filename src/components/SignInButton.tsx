import { fetchUserAttributes, signInWithRedirect, signOut } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { isAmplifyConfigured } from "../logic/amplifyConfig";
import { useAuthUser } from "../logic/useAuthUser";
import { colors } from "../theme";

export function SignInButton() {
  const { user, checked } = useAuthUser();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setEmail(null);
      return;
    }
    // signInDetails.loginId isn't populated for external IdPs like Google —
    // the real email lives in the user's Cognito attributes instead.
    fetchUserAttributes()
      .then((attrs) => setEmail(attrs.email ?? null))
      .catch(() => setEmail(null));
  }, [user]);

  // Not deployed yet, or still checking the current session — render nothing
  // rather than flash a button that can't work yet.
  if (!isAmplifyConfigured || !checked) return null;

  if (user) {
    return (
      <Pressable onPress={() => signOut()} style={styles.link}>
        <Text style={styles.linkText}>{email ?? user.username} · Abmelden</Text>
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
