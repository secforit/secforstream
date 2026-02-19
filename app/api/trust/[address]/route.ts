import { NextRequest, NextResponse } from 'next/server';
import { getScore } from '@/app/lib/services/TrustScoreCalculator';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ address: string }> }) {
  const { address } = await params;
  const scoreData = await getScore(address);

  if (!scoreData) {
    return NextResponse.json({ error: 'No trust score found for this address' }, { status: 404 });
  }

  return NextResponse.json({
    address: scoreData.streamerAddress,
    score: scoreData.score,
    tier: scoreData.tier,
    successRate: scoreData.successRate,
    streak: scoreData.streak,
    frequency: scoreData.frequency,
    communityScore: scoreData.communityScore,
    totalChallenges: scoreData.totalChallenges,
    totalPassed: scoreData.totalPassed,
    lastVerifiedAt: scoreData.lastVerifiedAt?.toISOString() || null,
  });
}
