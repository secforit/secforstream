import { NextRequest, NextResponse } from 'next/server';
import { getWalletFromAuth } from '@/app/lib/auth';
import { store } from '@/app/lib/store';
import { generateChallenge, type ChallengeType } from '@/app/lib/services/ChallengeGenerator';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const wallet = getWalletFromAuth(
    request.headers.get('authorization'),
    body.walletAddress || body.streamerAddress,
  );

  if (!wallet) {
    return NextResponse.json({ error: 'Missing or invalid authorization header' }, { status: 401 });
  }

  const { sessionId, preferredType, preferredDifficulty } = body;
  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId is required' }, { status: 400 });
  }

  const session = await store.getSession(sessionId);
  if (!session) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 });
  }
  if (session.streamerAddress !== wallet) {
    return NextResponse.json({ error: 'Not your session' }, { status: 403 });
  }
  if (session.status !== 'active') {
    return NextResponse.json({ error: `Session is ${session.status}` }, { status: 400 });
  }

  const existingChallenge = await store.getChallengeBySession(sessionId);
  if (existingChallenge) {
    return NextResponse.json(
      { error: 'Challenge already exists', challengeId: existingChallenge.id },
      { status: 409 },
    );
  }

  const template = generateChallenge(wallet, preferredType as ChallengeType | undefined, preferredDifficulty);
  const expiresAt = new Date(Date.now() + template.timeLimit * 1000).toISOString();

  const challenge = await store.createChallenge({
    sessionId,
    type: template.type,
    prompt: template.prompt,
    difficulty: template.difficulty,
    timeLimit: template.timeLimit,
    expiresAt,
    status: 'active',
  });

  return NextResponse.json({
    challengeId: challenge.id,
    sessionId: challenge.sessionId,
    type: challenge.type,
    prompt: challenge.prompt,
    difficulty: challenge.difficulty,
    timeLimit: challenge.timeLimit,
    expiresAt: challenge.expiresAt,
    status: challenge.status,
  }, { status: 201 });
}
