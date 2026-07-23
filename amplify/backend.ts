import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
});

// STEP 1 of 2 for rebranding the Cognito Hosted UI domain away from its
// auto-generated hash (e.g. "e6c11b34164dbc4b7358.auth...") to something
// readable. Cognito rejects renaming a UserPoolDomain in place — a prior
// deploy tried that as a direct property override and CloudFormation got
// back "Invalid request provided: AWS::Cognito::UserPoolDomain" from the
// Cognito API itself. The only supported path is delete-then-recreate across
// two separate deploys (this matches the domainPrefix doc comment in
// @aws-amplify/auth-construct's source, which describes exactly this
// two-step requirement for changing it).
//
// This step removes the auto-generated domain from the stack outright.
// Google Sign-In will not work between this deploy and the follow-up one
// that adds the new domain back — the Hosted UI won't exist during that
// window. That follow-up is a separate, later commit, not part of this one.
const removed = backend.auth.resources.userPool.node.tryRemoveChild('UserPoolDomain');
if (!removed) {
  throw new Error(
    'amplify/backend.ts: could not find the UserPoolDomain construct to remove — the internal Amplify/CDK construct ID may have changed.'
  );
}
