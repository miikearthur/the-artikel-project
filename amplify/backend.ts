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

// Rebrands the Cognito Hosted UI domain away from its auto-generated hash
// (e.g. "e6c11b34164dbc4b7358.auth..." — that's what showed up on the
// Google consent screen and read as unsafe). defineAuth() gives no
// supported way to set this (@aws-amplify/backend-auth's factory always
// injects `stableBackendIdentifiers.getStableBackendHash()` as the prefix,
// unconditionally, whenever external providers are configured), so this
// removes the auto-generated domain the factory creates every synth and
// replaces it with a fixed, readable one.
//
// This has to be a plain removal + fresh creation, not a property override
// on the existing resource — Cognito doesn't support renaming a
// UserPoolDomain in place. An earlier deploy tried the direct-override
// approach and CloudFormation got back "Invalid request provided:
// AWS::Cognito::UserPoolDomain" from the Cognito API itself. The domain
// removal already shipped and deployed successfully on its own first (so
// the stack currently has no domain at all); this adds the new one back.
const removed = backend.auth.resources.userPool.node.tryRemoveChild('UserPoolDomain');
if (!removed) {
  throw new Error(
    'amplify/backend.ts: could not find the UserPoolDomain construct to remove — the internal Amplify/CDK construct ID may have changed.'
  );
}
new CfnUserPoolDomain(backend.auth.resources.userPool, 'UserPoolDomain', {
  domain: 'artikel-miguelserrano',
  userPoolId: backend.auth.resources.userPool.userPoolId,
});
