import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * One row per (signed-in user, word) they've answered at least once.
 * `id` stays the auto-generated primary key rather than `wordId` itself —
 * `allow.owner()` isolates rows per user, but doesn't make the key
 * composite, so using `wordId` as the primary key would let two different
 * users collide on the same word. The secondary index makes
 * `listWordProgressByWordId({ wordId })` available for the get-or-create
 * lookup on each answer.
 * @see https://docs.amplify.aws/gen2/build-a-backend/data
 */
const schema = a.schema({
  WordProgress: a
    .model({
      wordId: a.string().required(),
      correctStreak: a.integer().default(0),
      timesCorrect: a.integer().default(0),
      timesSeen: a.integer().default(0),
      mastered: a.boolean().default(false),
      lastAnsweredAt: a.datetime(),
    })
    .secondaryIndexes((index) => [index('wordId')])
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
