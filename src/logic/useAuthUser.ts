import { getCurrentUser, type AuthUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useEffect, useState } from "react";
import { isAmplifyConfigured } from "./amplifyConfig";

// Shared sign-in state — both SignInButton (display) and
// useWordProgressSync (data) need to know who's signed in, so the
// getCurrentUser()/Hub listening logic lives here once rather than twice.
export function useAuthUser() {
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

  return { user, checked };
}
