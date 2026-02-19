export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  solanaRpcUrl: process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret',
  tokenMint: process.env.TOKEN_MINT || '7aS4v65fEGvQseGxmrZ8iGNpHW7yd49SMmLm2cLApump',

  challenge: {
    defaultTimeLimit: 60,
    minVotesRequired: 5,
    consensusThreshold: 0.70,
    maxActiveChallenges: 50,
  },

  trustScore: {
    challengeWeight: 0.40,
    streakWeight: 0.25,
    frequencyWeight: 0.20,
    communityWeight: 0.15,
    weeklyDecayRate: 0.02,
    inactivityPenalty7d: 10,
    inactivityPenalty30d: 0.5,
  },

  rewards: {
    baseReward: 10,
    difficultyMultipliers: { 1: 1.0, 2: 1.25, 3: 1.5, 4: 1.75, 5: 2.0 } as Record<number, number>,
    maxStreakBonus: 2.0,
    streakBonusPerSuccess: 0.1,
    speedBonuses: { slow: 1.0, fast: 1.2, veryFast: 1.5 },
  },

  rateLimit: {
    windowMs: 60_000,
    maxRequests: 60,
  },
} as const;
