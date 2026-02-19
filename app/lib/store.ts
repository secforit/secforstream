import { Redis } from '@upstash/redis';
import { randomUUID } from 'crypto';

// ─── Redis Client ───────────────────────────────────────────────────
// Falls back to in-memory Map if UPSTASH_REDIS_REST_URL is not set (local dev)

let redis: Redis | null = null;

function getRedis(): Redis | null {
  if (redis) return redis;
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    return redis;
  }
  return null;
}

// ─── In-Memory Fallback ─────────────────────────────────────────────

const memoryStore = new Map<string, string>();

async function get<T>(key: string): Promise<T | null> {
  const r = getRedis();
  if (r) {
    return r.get<T>(key);
  }
  const raw = memoryStore.get(key);
  return raw ? JSON.parse(raw) : null;
}

async function set(key: string, value: unknown, ttlSeconds?: number): Promise<void> {
  const r = getRedis();
  if (r) {
    if (ttlSeconds) {
      await r.set(key, JSON.stringify(value), { ex: ttlSeconds });
    } else {
      await r.set(key, JSON.stringify(value));
    }
    return;
  }
  memoryStore.set(key, JSON.stringify(value));
}

async function del(key: string): Promise<void> {
  const r = getRedis();
  if (r) {
    await r.del(key);
    return;
  }
  memoryStore.delete(key);
}

// keys() not needed — we use explicit index keys (idx:*) for lookups

// ─── Entity Types ───────────────────────────────────────────────────

export interface VerificationSession {
  id: string;
  streamerAddress: string;
  stakeAmount: number;
  stakeTx: string | null;
  status: 'active' | 'completed' | 'failed' | 'expired';
  startTime: string;
  endTime: string | null;
  createdAt: string;
}

export interface Challenge {
  id: string;
  sessionId: string;
  type: string;
  prompt: string;
  difficulty: number;
  timeLimit: number;
  expiresAt: string;
  status: 'active' | 'waiting_consensus' | 'passed' | 'failed' | 'expired';
  createdAt: string;
}

export interface ChallengeResponse {
  id: string;
  challengeId: string;
  viewerAddress: string;
  approved: boolean;
  reason: string | null;
  createdAt: string;
}

export interface ChallengeConsensus {
  id: string;
  challengeId: string;
  totalVotes: number;
  approvals: number;
  approvalRate: number;
  passed: boolean;
  minVotesMet: boolean;
  onChainTx: string | null;
  finalizedAt: string;
}

export interface TrustScore {
  id: string;
  streamerAddress: string;
  score: number;
  successRate: number;
  streak: number;
  maxStreak: number;
  frequency: number;
  communityScore: number;
  totalChallenges: number;
  totalPassed: number;
  lastVerifiedAt: string | null;
  lastDecayAt: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Store Operations ───────────────────────────────────────────────

export const store = {
  // ── Sessions ──
  async createSession(input: { streamerAddress: string; stakeAmount: number; stakeTx: string | null }): Promise<VerificationSession> {
    const session: VerificationSession = {
      id: randomUUID(),
      ...input,
      status: 'active',
      startTime: new Date().toISOString(),
      endTime: null,
      createdAt: new Date().toISOString(),
    };
    await set(`session:${session.id}`, session);
    await set(`session:active:${input.streamerAddress}`, session.id, 86400);
    // Add to session index
    const idx = (await get<string[]>('idx:sessions')) || [];
    idx.push(session.id);
    await set('idx:sessions', idx);
    return session;
  },

  async getSession(id: string): Promise<VerificationSession | null> {
    return get<VerificationSession>(`session:${id}`);
  },

  async findActiveSession(streamerAddress: string): Promise<VerificationSession | null> {
    const sessionId = await get<string>(`session:active:${streamerAddress}`);
    if (!sessionId) return null;
    const session = await get<VerificationSession>(`session:${sessionId}`);
    if (session && session.status === 'active') return session;
    // Clean up stale pointer
    await del(`session:active:${streamerAddress}`);
    return null;
  },

  async updateSession(id: string, updates: Partial<VerificationSession>): Promise<VerificationSession | null> {
    const session = await get<VerificationSession>(`session:${id}`);
    if (!session) return null;
    const updated = { ...session, ...updates };
    await set(`session:${id}`, updated);
    if (updates.status && updates.status !== 'active') {
      await del(`session:active:${session.streamerAddress}`);
    }
    return updated;
  },

  // ── Challenges ──
  async createChallenge(input: Omit<Challenge, 'id' | 'createdAt'>): Promise<Challenge> {
    const challenge: Challenge = {
      id: randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };
    await set(`challenge:${challenge.id}`, challenge);
    await set(`challenge:session:${input.sessionId}`, challenge.id);
    // Add to active index
    const idx = (await get<string[]>('idx:active-challenges')) || [];
    idx.push(challenge.id);
    await set('idx:active-challenges', idx);
    return challenge;
  },

  async getChallenge(id: string): Promise<Challenge | null> {
    return get<Challenge>(`challenge:${id}`);
  },

  async getChallengeBySession(sessionId: string): Promise<Challenge | null> {
    const challengeId = await get<string>(`challenge:session:${sessionId}`);
    if (!challengeId) return null;
    return get<Challenge>(`challenge:${challengeId}`);
  },

  async getActiveChallenges(): Promise<Challenge[]> {
    const idx = (await get<string[]>('idx:active-challenges')) || [];
    const now = new Date().toISOString();
    const challenges: Challenge[] = [];
    for (const id of idx) {
      const c = await get<Challenge>(`challenge:${id}`);
      if (c && c.status === 'active' && c.expiresAt > now) {
        challenges.push(c);
      }
    }
    return challenges;
  },

  async updateChallenge(id: string, updates: Partial<Challenge>): Promise<Challenge | null> {
    const challenge = await get<Challenge>(`challenge:${id}`);
    if (!challenge) return null;
    const updated = { ...challenge, ...updates };
    await set(`challenge:${id}`, updated);
    return updated;
  },

  // ── Responses ──
  async createResponse(input: Omit<ChallengeResponse, 'id' | 'createdAt'>): Promise<ChallengeResponse> {
    const response: ChallengeResponse = {
      id: randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };
    await set(`response:${response.id}`, response);
    // Add to challenge responses index
    const idx = (await get<string[]>(`idx:responses:${input.challengeId}`)) || [];
    idx.push(response.id);
    await set(`idx:responses:${input.challengeId}`, idx);
    // Track unique voter
    await set(`vote:${input.challengeId}:${input.viewerAddress}`, response.id);
    return response;
  },

  async getResponsesByChallenge(challengeId: string): Promise<ChallengeResponse[]> {
    const idx = (await get<string[]>(`idx:responses:${challengeId}`)) || [];
    const responses: ChallengeResponse[] = [];
    for (const id of idx) {
      const r = await get<ChallengeResponse>(`response:${id}`);
      if (r) responses.push(r);
    }
    return responses;
  },

  async findResponse(challengeId: string, viewerAddress: string): Promise<ChallengeResponse | null> {
    const responseId = await get<string>(`vote:${challengeId}:${viewerAddress}`);
    if (!responseId) return null;
    return get<ChallengeResponse>(`response:${responseId}`);
  },

  // ── Consensus ──
  async createConsensus(input: Omit<ChallengeConsensus, 'id'>): Promise<ChallengeConsensus> {
    const consensus: ChallengeConsensus = {
      id: randomUUID(),
      ...input,
    };
    await set(`consensus:${input.challengeId}`, consensus);
    return consensus;
  },

  async getConsensus(challengeId: string): Promise<ChallengeConsensus | null> {
    return get<ChallengeConsensus>(`consensus:${challengeId}`);
  },

  // ── Trust Scores ──
  async getTrustScore(streamerAddress: string): Promise<TrustScore | null> {
    return get<TrustScore>(`trust:${streamerAddress}`);
  },

  async upsertTrustScore(streamerAddress: string, data: Partial<TrustScore>): Promise<TrustScore> {
    const now = new Date().toISOString();
    const existing = await get<TrustScore>(`trust:${streamerAddress}`);

    if (!existing) {
      const newScore: TrustScore = {
        id: randomUUID(),
        streamerAddress,
        score: 0,
        successRate: 0,
        streak: 0,
        maxStreak: 0,
        frequency: 0,
        communityScore: 0,
        totalChallenges: 0,
        totalPassed: 0,
        lastVerifiedAt: null,
        lastDecayAt: now,
        createdAt: now,
        updatedAt: now,
        ...data,
      };
      await set(`trust:${streamerAddress}`, newScore);
      // Add to leaderboard index
      const idx = (await get<string[]>('idx:trust-scores')) || [];
      if (!idx.includes(streamerAddress)) {
        idx.push(streamerAddress);
        await set('idx:trust-scores', idx);
      }
      return newScore;
    }

    const updated = { ...existing, ...data, updatedAt: now };
    await set(`trust:${streamerAddress}`, updated);
    return updated;
  },

  async getLeaderboard(limit = 20): Promise<TrustScore[]> {
    const idx = (await get<string[]>('idx:trust-scores')) || [];
    const scores: TrustScore[] = [];
    for (const addr of idx) {
      const s = await get<TrustScore>(`trust:${addr}`);
      if (s) scores.push(s);
    }
    return scores.sort((a, b) => b.score - a.score).slice(0, limit);
  },
};
