import { NextResponse } from 'next/server';
import { store } from '@/app/lib/store';

export async function GET() {
  const challenges = await store.getActiveChallenges();
  const now = Date.now();

  const result = await Promise.all(
    challenges.map(async (c) => {
      const session = await store.getSession(c.sessionId);
      const responses = await store.getResponsesByChallenge(c.id);
      return {
        challengeId: c.id,
        sessionId: c.sessionId,
        type: c.type,
        prompt: c.prompt,
        difficulty: c.difficulty,
        timeLimit: c.timeLimit,
        expiresAt: c.expiresAt,
        streamerAddress: session?.streamerAddress || 'unknown',
        stakeAmount: session?.stakeAmount || 0,
        responseCount: responses.length,
        secondsRemaining: Math.max(0, Math.floor((new Date(c.expiresAt).getTime() - now) / 1000)),
      };
    }),
  );

  return NextResponse.json(result);
}
