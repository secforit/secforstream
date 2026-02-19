import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/app/lib/store';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await store.getSession(id);
  if (!session) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 });
  }

  const challenge = await store.getChallengeBySession(session.id);
  const consensus = challenge ? await store.getConsensus(challenge.id) : null;
  const responses = challenge ? await store.getResponsesByChallenge(challenge.id) : [];

  return NextResponse.json({
    id: session.id,
    streamerAddress: session.streamerAddress,
    stakeAmount: session.stakeAmount,
    stakeTx: session.stakeTx,
    status: session.status,
    startTime: session.startTime,
    endTime: session.endTime,
    challenge: challenge
      ? {
          id: challenge.id,
          type: challenge.type,
          prompt: challenge.prompt,
          difficulty: challenge.difficulty,
          timeLimit: challenge.timeLimit,
          expiresAt: challenge.expiresAt,
          status: challenge.status,
          responseCount: responses.length,
          consensus: consensus
            ? {
                passed: consensus.passed,
                approvalRate: consensus.approvalRate,
                totalVotes: consensus.totalVotes,
                finalizedAt: consensus.finalizedAt,
              }
            : null,
        }
      : null,
  });
}
