import { NextRequest, NextResponse } from 'next/server';
import { requestMessage } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { wallet } = body;

  if (!wallet || typeof wallet !== 'string') {
    return NextResponse.json({ error: 'wallet address is required' }, { status: 400 });
  }

  const result = requestMessage(wallet);
  return NextResponse.json(result);
}
