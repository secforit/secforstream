export type ChallengeType = 'contextual' | 'temporal' | 'creative' | 'physical' | 'cognitive';
export type TrustTier = 'Elite' | 'High' | 'Good' | 'Moderate' | 'Low' | 'Risk';

export interface ActiveChallenge {
  challengeId: string;
  sessionId: string;
  type: ChallengeType;
  prompt: string;
  difficulty: number;
  timeLimit: number;
  expiresAt: string;
  streamerAddress: string;
  stakeAmount: number;
  responseCount: number;
  secondsRemaining: number;
}

export interface ChallengeStatus {
  challengeId: string;
  totalResponses: number;
  approvals: number;
  disapprovals: number;
  approvalRate: number;
  minVotesNeeded: number;
  minVotesMet: boolean;
  thresholdNeeded: number;
}

export interface ChallengeConsensus {
  passed: boolean;
  approvalRate: number;
  totalVotes: number;
  finalizedAt: string;
}

export interface SessionData {
  sessionId: string;
  status: string;
  streamerAddress: string;
  stakeAmount: number;
  createdAt: string;
  readyForChallenge: boolean;
}

export interface GeneratedChallenge {
  challengeId: string;
  sessionId: string;
  type: ChallengeType;
  prompt: string;
  difficulty: number;
  timeLimit: number;
  expiresAt: string;
  status: string;
}

export interface TrustScoreData {
  address: string;
  score: number;
  tier: TrustTier;
  successRate: number;
  streak: number;
  frequency: number;
  communityScore: number;
  totalChallenges: number;
  totalPassed: number;
  lastVerifiedAt: string | null;
}

// Challenge type metadata for UI
export const CHALLENGE_TYPE_META: Record<ChallengeType, { label: string; icon: string; color: string }> = {
  contextual: { label: 'Contextual', icon: '👁️', color: 'text-blue-400' },
  temporal: { label: 'Temporal', icon: '⏰', color: 'text-yellow-400' },
  creative: { label: 'Creative', icon: '🎨', color: 'text-purple-400' },
  physical: { label: 'Physical', icon: '🤸', color: 'text-green-400' },
  cognitive: { label: 'Cognitive', icon: '🧠', color: 'text-orange-400' },
};

export const TRUST_TIER_META: Record<TrustTier, { emoji: string; color: string }> = {
  Elite: { emoji: '💎', color: 'text-cyan-400' },
  High: { emoji: '🏆', color: 'text-yellow-400' },
  Good: { emoji: '✅', color: 'text-green-400' },
  Moderate: { emoji: '⚠️', color: 'text-amber-400' },
  Low: { emoji: '❓', color: 'text-gray-400' },
  Risk: { emoji: '⛔', color: 'text-red-400' },
};
