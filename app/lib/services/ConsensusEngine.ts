import { store } from '../store';
import { config } from '../config';

export interface ConsensusResult {
  challengeId: string;
  totalVotes: number;
  approvals: number;
  approvalRate: number;
  passed: boolean;
  minVotesMet: boolean;
}

const minVotes = config.challenge.minVotesRequired;
const threshold = config.challenge.consensusThreshold;

export async function evaluateConsensus(challengeId: string): Promise<ConsensusResult | null> {
  const responses = await store.getResponsesByChallenge(challengeId);
  const totalVotes = responses.length;
  const approvals = responses.filter((r) => r.approved).length;
  const approvalRate = totalVotes > 0 ? approvals / totalVotes : 0;
  const minVotesMet = totalVotes >= minVotes;

  if (!minVotesMet) return null;

  return { challengeId, totalVotes, approvals, approvalRate, passed: approvalRate >= threshold, minVotesMet };
}

export async function finalizeConsensus(challengeId: string): Promise<ConsensusResult | null> {
  const existing = await store.getConsensus(challengeId);
  if (existing) {
    return {
      challengeId,
      totalVotes: existing.totalVotes,
      approvals: existing.approvals,
      approvalRate: existing.approvalRate,
      passed: existing.passed,
      minVotesMet: existing.minVotesMet,
    };
  }

  const result = await evaluateConsensus(challengeId);
  if (!result) return null;

  await store.createConsensus({
    challengeId,
    totalVotes: result.totalVotes,
    approvals: result.approvals,
    approvalRate: result.approvalRate,
    passed: result.passed,
    minVotesMet: result.minVotesMet,
    onChainTx: null,
    finalizedAt: new Date().toISOString(),
  });

  await store.updateChallenge(challengeId, { status: result.passed ? 'passed' : 'failed' });

  const challenge = await store.getChallenge(challengeId);
  if (challenge) {
    await store.updateSession(challenge.sessionId, {
      status: result.passed ? 'completed' : 'failed',
      endTime: new Date().toISOString(),
    });
  }

  return result;
}

export async function getConsensusStatus(challengeId: string) {
  const responses = await store.getResponsesByChallenge(challengeId);
  const totalVotes = responses.length;
  const approvals = responses.filter((r) => r.approved).length;

  return {
    challengeId,
    totalResponses: totalVotes,
    approvals,
    disapprovals: totalVotes - approvals,
    approvalRate: totalVotes > 0 ? approvals / totalVotes : 0,
    minVotesNeeded: minVotes,
    minVotesMet: totalVotes >= minVotes,
    thresholdNeeded: threshold,
  };
}
