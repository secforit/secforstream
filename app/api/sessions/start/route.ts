import { NextRequest, NextResponse } from 'next/server';
import { getWalletFromAuth } from '@/app/lib/auth';
import { store } from '@/app/lib/store';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const wallet = getWalletFromAuth(
    request.headers.get('authorization'),
    body.walletAddress || body.streamerAddress,
  );

  if (!wallet) {
    return NextResponse.json({ error: 'Missing or invalid authorization header' }, { status: 401 });
  }

  const { stakeAmount, stakeTx } = body;
  if (!stakeAmount || typeof stakeAmount !== 'number' || stakeAmount < 1) {
    return NextResponse.json({ error: 'stakeAmount must be a positive number' }, { status: 400 });
  }

  const activeSession = await store.findActiveSession(wallet);
  if (activeSession) {
    return NextResponse.json(
      { error: 'You already have an active verification session', sessionId: activeSession.id },
      { status: 409 },
    );
  }

  const session = await store.createSession({
    streamerAddress: wallet,
    stakeAmount,
    stakeTx: stakeTx || null,
  });

  return NextResponse.json({
    sessionId: session.id,
    status: session.status,
    streamerAddress: session.streamerAddress,
    stakeAmount: session.stakeAmount,
    createdAt: session.createdAt,
    readyForChallenge: true,
  }, { status: 201 });
}
