import { store } from '../store';
import { config } from '../config';

export type TrustTier = 'Elite' | 'High' | 'Good' | 'Moderate' | 'Low' | 'Risk';

export interface TrustScoreData {
  streamerAddress: string;
  score: number;
  tier: TrustTier;
  successRate: number;
  streak: number;
  frequency: number;
  communityScore: number;
  totalChallenges: number;
  totalPassed: number;
  lastVerifiedAt: Date | null;
}

const { challengeWeight, streakWeight, frequencyWeight, communityWeight, weeklyDecayRate, inactivityPenalty7d, inactivityPenalty30d } = config.trustScore;

function calculate(components: { successRate: number; streak: number; maxStreak: number; frequency: number; communityScore: number }): number {
  const maxPossibleStreak = Math.max(components.maxStreak, 10);
  const normalizedStreak = Math.min(1, components.streak / maxPossibleStreak);
  const normalizedFrequency = Math.min(1, components.frequency / 30);
  const normalizedCommunity = Math.min(1, components.communityScore / 5);

  const score = (challengeWeight * components.successRate + streakWeight * normalizedStreak + frequencyWeight * normalizedFrequency + communityWeight * normalizedCommunity) * 100;
  return Math.min(100, Math.max(0, Math.round(score * 100) / 100));
}

function applyDecay(currentScore: number, lastDecayAt: string): number {
  const msSinceDecay = Date.now() - new Date(lastDecayAt).getTime();
  const weeksSinceDecay = msSinceDecay / (7 * 24 * 60 * 60 * 1000);
  if (weeksSinceDecay < 1) return currentScore;

  let decayed = currentScore;
  for (let i = 0; i < Math.floor(weeksSinceDecay); i++) {
    decayed *= 1 - weeklyDecayRate;
  }
  return Math.max(0, Math.round(decayed * 100) / 100);
}

function applyInactivityPenalty(currentScore: number, lastVerifiedAt: string | null): number {
  if (!lastVerifiedAt) return currentScore;
  const days = (Date.now() - new Date(lastVerifiedAt).getTime()) / (24 * 60 * 60 * 1000);
  if (days > 30) return Math.max(0, currentScore * inactivityPenalty30d);
  if (days > 7) return Math.max(0, currentScore - inactivityPenalty7d);
  return currentScore;
}

export function getTier(score: number): TrustTier {
  if (score >= 90) return 'Elite';
  if (score >= 75) return 'High';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  if (score >= 20) return 'Low';
  return 'Risk';
}

export async function updateAfterChallenge(streamerAddress: string, passed: boolean, communityRating?: number): Promise<TrustScoreData> {
  const ts = await store.getTrustScore(streamerAddress);

  const prevTotal = ts?.totalChallenges ?? 0;
  const prevPassed = ts?.totalPassed ?? 0;
  const prevStreak = ts?.streak ?? 0;
  const prevMaxStreak = ts?.maxStreak ?? 0;
  const prevCommunity = ts?.communityScore ?? 0;

  const totalChallenges = prevTotal + 1;
  const totalPassed = prevPassed + (passed ? 1 : 0);
  const successRate = totalPassed / totalChallenges;
  const streak = passed ? prevStreak + 1 : 0;
  const maxStreak = Math.max(prevMaxStreak, streak);
  const communityScore = communityRating ? (prevCommunity * prevTotal + communityRating) / totalChallenges : prevCommunity;

  let score = calculate({ successRate, streak, maxStreak, frequency: totalChallenges, communityScore });
  if (!passed) score = Math.max(0, score - 5);
  if (ts) score = applyDecay(score, ts.lastDecayAt);

  const updated = await store.upsertTrustScore(streamerAddress, {
    score, successRate, streak, maxStreak, frequency: totalChallenges,
    communityScore, totalChallenges, totalPassed,
    lastVerifiedAt: new Date().toISOString(), lastDecayAt: new Date().toISOString(),
  });

  return {
    streamerAddress: updated.streamerAddress, score: updated.score, tier: getTier(updated.score),
    successRate: updated.successRate, streak: updated.streak, frequency: updated.frequency,
    communityScore: updated.communityScore, totalChallenges: updated.totalChallenges,
    totalPassed: updated.totalPassed, lastVerifiedAt: updated.lastVerifiedAt ? new Date(updated.lastVerifiedAt) : null,
  };
}

export async function getScore(streamerAddress: string): Promise<TrustScoreData | null> {
  const ts = await store.getTrustScore(streamerAddress);
  if (!ts) return null;

  let score = applyDecay(ts.score, ts.lastDecayAt);
  score = applyInactivityPenalty(score, ts.lastVerifiedAt);

  return {
    streamerAddress: ts.streamerAddress, score, tier: getTier(score),
    successRate: ts.successRate, streak: ts.streak, frequency: ts.frequency,
    communityScore: ts.communityScore, totalChallenges: ts.totalChallenges,
    totalPassed: ts.totalPassed, lastVerifiedAt: ts.lastVerifiedAt ? new Date(ts.lastVerifiedAt) : null,
  };
}

export async function getLeaderboard(limit = 20): Promise<TrustScoreData[]> {
  const all = await store.getLeaderboard(limit);
  return all.map((s) => ({
    streamerAddress: s.streamerAddress, score: applyDecay(s.score, s.lastDecayAt),
    tier: getTier(s.score), successRate: s.successRate, streak: s.streak,
    frequency: s.frequency, communityScore: s.communityScore,
    totalChallenges: s.totalChallenges, totalPassed: s.totalPassed,
    lastVerifiedAt: s.lastVerifiedAt ? new Date(s.lastVerifiedAt) : null,
  }));
}
