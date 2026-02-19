import { NextRequest, NextResponse } from 'next/server';
import { getConsensusStatus } from '@/app/lib/services/ConsensusEngine';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ challengeId: string }> }) {
  const { challengeId } = await params;
  const status = await getConsensusStatus(challengeId);
  return NextResponse.json(status);
}
