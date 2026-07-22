import { fetchUserAttributes, signInWithRedirect, signOut } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { isAmplifyConfigured } from "../logic/amplifyConfig";
import { useAuthUser } from "../logic/useAuthUser";
import { colors } from "../theme";

export function SignInButton() {
  const { user, checked } = useAuthUser();
  const [email, setEmail] = useState<string | null>(null);
  const [emailChecked, setEmailChecked] = useState(false);

  useEffect(() => {
    if (!user) {
      setEmail(null);
      setEmailChecked(false);
      return;
    }
    setEmailChecked(false);
    // signInDetails.loginId isn't populated for external IdPs like Google —
    // the real email lives in the user's Cognito attributes instead.
    // user.username for a Google-federated user is a long numeric IdP id,
    // never a fallback worth showing, so we wait for this before rendering.
    fetchUserAttributes()
      .then((attrs) => setEmail(attrs.email ?? null))
      .catch(() => setEmail(null))
      .finally(() => setEmailChecked(true));
  }, [user]);

  // Not deployed yet, or still checking the current session — render nothing
  // rather than flash a button that can't work yet.
  if (!isAmplifyConfigured || !checked) return null;
  // Signed in but the email attribute hasn't loaded yet — render nothing
  // rather than flash the raw Cognito username (a long numeric IdP id).
  if (user && !emailChecked) return null;

  if (user) {
    return (
      <Pressable
        onPress={() => signOut()}
        style={styles.link}
        accessibilityRole="button"
        accessibilityLabel={`${email ?? user.username}, abmelden`}
      >
        <Text style={styles.linkText}>{email ?? user.username} · Abmelden</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={() => signInWithRedirect({ provider: "Google" })}
      style={styles.link}
      accessibilityRole="button"
      accessibilityLabel="Mit Google anmelden"
    >
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
