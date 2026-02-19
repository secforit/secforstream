import { NextRequest, NextResponse } from 'next/server';
import { getWalletFromAuth } from '@/app/lib/auth';
import { store } from '@/app/lib/store';
import { getConsensusStatus, finalizeConsensus } from '@/app/lib/services/ConsensusEngine';
import { updateAfterChallenge } from '@/app/lib/services/TrustScoreCalculator';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const wallet = getWalletFromAuth(request.headers.get('authorization')) || body.voterAddress;

  if (!wallet) {
    return NextResponse.json({ error: 'voterAddress is required (or send auth token)' }, { status: 400 });
  }

  const { challengeId, approved, reason } = body;
  if (!challengeId || typeof approved !== 'boolean') {
    return NextResponse.json({ error: 'challengeId and approved (boolean) are required' }, { status: 400 });
  }

  const challenge = await store.getChallenge(challengeId);
  if (!challenge) {
    return NextResponse.json({ error: 'Challenge not found' }, { status: 404 });
  }

  const session = await store.getSession(challenge.sessionId);
  if (session && session.streamerAddress === wallet) {
    return NextResponse.json({ error: 'Cannot vote on your own challenge' }, { status: 403 });
  }

  if (challenge.status !== 'active') {
    return NextResponse.json({ error: `Challenge is ${challenge.status}, voting closed` }, { status: 400 });
  }

  if (new Date() > new Date(challenge.expiresAt)) {
    return NextResponse.json({ error: 'Challenge has expired' }, { status: 400 });
  }

  const existingVote = await store.findResponse(challengeId, wallet);
  if (existingVote) {
    return NextResponse.json({ error: 'You have already voted on this challenge' }, { status: 409 });
  }

  await store.createResponse({
    challengeId,
    viewerAddress: wallet,
    approved,
    reason: reason || null,
  });

  const status = await getConsensusStatus(challengeId);

  // Auto-finalize if enough votes
  if (status.minVotesMet) {
    const consensus = await finalizeConsensus(challengeId);
    if (consensus && session) {
      await updateAfterChallenge(session.streamerAddress, consensus.passed);
    }
  }

  return NextResponse.json({
    challengeId,
    recorded: true,
    currentStatus: {
      totalResponses: status.totalResponses,
      approvals: status.approvals,
      approvalRate: status.approvalRate,
      minVotesMet: status.minVotesMet,
    },
  }, { status: 201 });
}
