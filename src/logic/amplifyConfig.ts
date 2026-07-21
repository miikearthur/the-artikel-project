import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

// amplify_outputs.json is real once the backend is deployed and the file is
// downloaded from the Amplify Console; until then it's the gitignored
// placeholder (see its _comment), and we skip configuring Amplify entirely
// so the app keeps working fully in local-only mode.
export const isAmplifyConfigured =
  (outputs as { auth?: { user_pool_id?: string } })?.auth?.user_pool_id !== "PLACEHOLDER";

if (isAmplifyConfigured) {
  Amplify.configure(outputs as Parameters<typeof Amplify.configure>[0]);
}
