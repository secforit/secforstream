import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/app/lib/store';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const challenge = await store.getChallenge(id);
  if (!challenge) {
    return NextResponse.json({ error: 'Challenge not found' }, { status: 404 });
  }

  const session = await store.getSession(challenge.sessionId);
  const consensus = await store.getConsensus(challenge.id);
  const responses = await store.getResponsesByChallenge(challenge.id);

  return NextResponse.json({
    challengeId: challenge.id,
    sessionId: challenge.sessionId,
    type: challenge.type,
    prompt: challenge.prompt,
    difficulty: challenge.difficulty,
    timeLimit: challenge.timeLimit,
    expiresAt: challenge.expiresAt,
    status: challenge.status,
    streamerAddress: session?.streamerAddress || 'unknown',
    stakeAmount: session?.stakeAmount || 0,
    responseCount: responses.length,
    consensus: consensus
      ? {
          passed: consensus.passed,
          approvalRate: consensus.approvalRate,
          totalVotes: consensus.totalVotes,
          finalizedAt: consensus.finalizedAt,
        }
      : null,
  });
}
