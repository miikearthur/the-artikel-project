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

  /**
   * One row per (signed-in user, CEFR level) tracking their best
   * infinite-mode streak for the global leaderboard. Unlike WordProgress,
   * reads are public (allow.guest() + allow.authenticated()) since the
   * whole point is other players seeing it — only the owner can write.
   * `id` is always set explicitly to `${cognito sub}_${level}` on create,
   * which guarantees exactly one row per user per level and means lookups
   * are a plain get-by-id rather than a list+filter (the WordProgress
   * pattern relies on list being owner-scoped, which isn't true here once
   * public read is added).
   */
  LeaderboardEntry: a
    .model({
      level: a.string().required(),
      streak: a.integer().required(),
      nickname: a.string().required(),
    })
    .secondaryIndexes((index) => [
      index('level').sortKeys(['streak']).queryField('listLeaderboardEntryByLevel'),
    ])
    .authorization((allow) => [
      allow.owner(),
      allow.guest().to(['read']),
      allow.authenticated().to(['read']),
    ]),

  /**
   * The nickname a signed-in user has chosen to appear under on the
   * leaderboard. Kept separate from LeaderboardEntry (which denormalizes
   * its own copy of the nickname onto every row, since a public leaderboard
   * read shouldn't need a second lookup per row) so a rename is a handful
   * of writes instead of rewriting history — see useLeaderboard.ts.
   * `id` is the user's Cognito sub, same convention as LeaderboardEntry.
   */
  PlayerProfile: a
    .model({
      nickname: a.string().required(),
    })
    .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});
