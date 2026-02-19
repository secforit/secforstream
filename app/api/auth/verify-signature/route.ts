import { NextRequest, NextResponse } from 'next/server';
import { verifySignature } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { wallet, signature, message } = body;

  if (!wallet || !signature || !message) {
    return NextResponse.json({ error: 'wallet, signature, and message are required' }, { status: 400 });
  }

  const token = verifySignature(wallet, signature, message);
  if (!token) {
    return NextResponse.json({ error: 'Invalid signature or expired nonce' }, { status: 401 });
  }

  return NextResponse.json({ token, wallet });
}
