import { NextRequest, NextResponse } from 'next/server';
import { getLeaderboard } from '@/app/lib/services/TrustScoreCalculator';

export async function GET(request: NextRequest) {
  const limit = Math.min(100, parseInt(request.nextUrl.searchParams.get('limit') || '20'));
  const leaderboard = await getLeaderboard(limit);

  return NextResponse.json({
    leaderboard: leaderboard.map((s) => ({
      address: s.streamerAddress,
      score: s.score,
      tier: s.tier,
      streak: s.streak,
      totalChallenges: s.totalChallenges,
      successRate: s.successRate,
    })),
    total: leaderboard.length,
  });
}
