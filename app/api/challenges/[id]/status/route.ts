import { NextRequest, NextResponse } from 'next/server';
import { getConsensusStatus } from '@/app/lib/services/ConsensusEngine';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const status = await getConsensusStatus(id);
  return NextResponse.json(status);
}
