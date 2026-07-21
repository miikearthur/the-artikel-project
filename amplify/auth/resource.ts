import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Auth: email/password plus Google sign-in. Google's OAuth client
 * ID/secret are supplied as Amplify secrets (set in the Amplify Console
 * under Hosting > Secrets), never hardcoded here.
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        scopes: ['email', 'profile', 'openid'],
      },
      // Both localhost ports are listed because the default `npm run web`
      // port (8081) and the port used for manual dev testing this session
      // (8098) can differ — an exact-match mismatch here is a hard OAuth
      // redirect error, so both are safelisted rather than guessing one.
      callbackUrls: [
        'http://localhost:8081/',
        'http://localhost:8098/',
        'https://artikel.miguelserrano.de/',
      ],
      logoutUrls: [
        'http://localhost:8081/',
        'http://localhost:8098/',
        'https://artikel.miguelserrano.de/',
      ],
    },
  },
});
