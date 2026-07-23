import { defineBackend } from '@aws-amplify/backend';
import { CfnUserPoolDomain } from 'aws-cdk-lib/aws-cognito';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// defineAuth() has no supported way to set the Cognito Hosted UI domain
// prefix — it always auto-generates one from a stable backend hash instead
// (@aws-amplify/backend-auth's factory.js sets
// `authProps.loginWith.externalProviders.domainPrefix =
// stableBackendIdentifiers.getStableBackendHash()` itself, unconditionally,
// after stripping that field out of defineAuth's own TypeScript props). That
// hash is what was showing up on the Google consent screen as "continue to
// e6c11b34164dbc4b7358.auth.eu-central-1.amazoncognito.com" — reads as
// unsafe to anyone signing in, even though it's legitimate.
//
// The underlying CDK construct (@aws-amplify/auth-construct) does fully
// support a custom prefix; it's just not reachable through defineAuth's
// public API. So this reaches directly into the CDK tree it builds and
// overrides the domain resource instead. The construct IDs below
// ("UserPoolDomain", "Resource") come from reading the installed
// @aws-amplify/auth-construct and aws-cdk-lib source, not documented public
// API — if a future dependency upgrade renames either one, this throws
// instead of silently falling back to the ugly auto-generated domain, so
// it's obvious immediately rather than discovered by someone eventually
// noticing the domain looks wrong again.
const userPoolDomain = backend.auth.resources.userPool.node.tryFindChild('UserPoolDomain');
if (!userPoolDomain) {
  throw new Error(
    'amplify/backend.ts: could not find the UserPoolDomain construct to override — the internal Amplify/CDK construct ID may have changed.'
  );
}
const cfnUserPoolDomain = userPoolDomain.node.tryFindChild('Resource');
if (!(cfnUserPoolDomain instanceof CfnUserPoolDomain)) {
  throw new Error(
    'amplify/backend.ts: could not find the CfnUserPoolDomain resource to override — the internal Amplify/CDK construct ID may have changed.'
  );
}
cfnUserPoolDomain.domain = 'artikel-miguelserrano';
