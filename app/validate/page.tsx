'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const API = '/api';

interface Challenge {
  challengeId: string;
  sessionId: string;
  streamerAddress: string;
  type: string;
  prompt: string;
  difficulty: number;
  timeLimit: number;
  expiresAt: string;
  stakeAmount: number;
  responseCount: number;
  secondsRemaining: number;
}

interface VoteState {
  challengeId: string;
  votePass: boolean;
  reason?: string;
}

type PageState = 'wallet' | 'challenges' | 'voting' | 'confirmed';

export default function ValidatePage() {
  const [pageState, setPageState] = useState<PageState>('wallet');
  const [walletAddress, setWalletAddress] = useState('');
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [voteReason, setVoteReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [voteState, setVoteState] = useState<VoteState | null>(null);

  // Generate a demo Solana-style wallet address
  const connectWallet = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789';
    const addr = Array.from({ length: 44 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    setWalletAddress(addr);
    setPageState('challenges');
    fetchActiveChallenges();
  };

  // Fetch active challenges from backend
  const fetchActiveChallenges = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API}/challenges/active`);
      if (!res.ok) throw new Error('Failed to fetch challenges');
      const data = await res.json();
      setChallenges(Array.isArray(data) ? data : data.challenges || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load challenges');
      setChallenges([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto-refresh challenges every 5 seconds
  useEffect(() => {
    if (pageState !== 'challenges') return;
    fetchActiveChallenges();
    const interval = setInterval(fetchActiveChallenges, 5000);
    return () => clearInterval(interval);
  }, [pageState, fetchActiveChallenges]);

  // Submit vote via POST /responses (matches backend route)
  const handleSubmitVote = async (votePass: boolean) => {
    if (!selectedChallenge || !walletAddress) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${API}/responses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challengeId: selectedChallenge.challengeId,
          voterAddress: walletAddress,
          approved: votePass,
          confidence: 0.85,
          reason: voteReason || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit vote');
      }

      setVoteState({
        challengeId: selectedChallenge.challengeId,
        votePass,
        reason: voteReason,
      });
      setPageState('confirmed');

      // Refresh challenges after a moment
      setTimeout(fetchActiveChallenges, 1000);
    } catch (err: any) {
      setError(err.message || 'Failed to submit vote');
    } finally {
      setLoading(false);
    }
  };

  const truncate = (addr: string) => `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);
  const fmtTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  const typeColors: Record<string, string> = {
    contextual: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    temporal: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    creative: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    physical: 'bg-green-500/20 text-green-300 border-green-500/30',
    cognitive: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent">
            Validate Challenges
          </h1>
          {walletAddress && <span className="text-sm text-gray-400 font-mono">{truncate(walletAddress)}</span>}
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* ── Connect Wallet ── */}
        {pageState === 'wallet' && (
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Community Validation</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Join as a Validator</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Connect your wallet to review active stream challenges. Vote on whether streamers are human and earn rewards for honest participation.
            </p>
            <button onClick={connectWallet} className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 hover:scale-105">
              Connect Wallet (Demo)
            </button>
          </div>
        )}

        {/* ── Challenges Grid ── */}
        {pageState === 'challenges' && (
          <div className="space-y-8">
            {error && (
              <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 text-red-300 flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <p className="font-semibold">Error loading challenges</p>
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            {loading && challenges.length === 0 && (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-gray-400 mt-4">Loading active challenges...</p>
              </div>
            )}

            {!loading && challenges.length === 0 && !error && (
              <div className="text-center py-16 space-y-4">
                <svg className="w-16 h-16 text-slate-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
                <p className="text-gray-400 text-lg">No active challenges right now</p>
                <p className="text-gray-500 text-sm">Challenges appear when streamers start verification sessions</p>
                <button onClick={fetchActiveChallenges} className="mt-4 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 rounded-lg transition-colors text-sm font-medium">
                  Refresh
                </button>
              </div>
            )}

            {challenges.length > 0 && (
              <>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                    Active Challenges ({challenges.length})
                  </h2>
                  <button onClick={fetchActiveChallenges} disabled={loading}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-gray-300 rounded-lg transition-colors text-sm font-medium">
                    Refresh
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {challenges.map((challenge) => (
                    <div key={challenge.challengeId}
                      onClick={() => { setSelectedChallenge(challenge); setPageState('voting'); setVoteReason(''); setError(''); }}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-6 hover:border-red-600/50 cursor-pointer transition-all duration-200 space-y-4 group">

                      {/* Streamer */}
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Streamer</span>
                        <span className="text-white font-mono text-sm">{truncate(challenge.streamerAddress)}</span>
                      </div>

                      {/* Challenge Prompt */}
                      <h3 className="text-white font-semibold text-lg leading-snug line-clamp-2">
                        {challenge.prompt}
                      </h3>

                      {/* Type + Difficulty */}
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors[challenge.type] || 'bg-slate-700 text-gray-300 border-slate-600'}`}>
                          {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
                        </span>
                        <span className="text-yellow-400 text-sm">{stars(challenge.difficulty)}</span>
                      </div>

                      {/* Time + Status */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <div className="flex items-center gap-2 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <span className="text-sm">{fmtTime(challenge.timeLimit)}</span>
                        </div>
                        <span className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">Active</span>
                      </div>

                      {/* CTA */}
                      <button className="w-full py-2.5 bg-gradient-to-r from-red-600/20 to-rose-600/20 border border-red-600/40 text-red-300 rounded-lg group-hover:from-red-600/30 group-hover:to-rose-600/30 transition-colors font-semibold text-sm">
                        Cast Your Vote
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Voting Interface ── */}
        {pageState === 'voting' && selectedChallenge && (
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Challenge Details */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${typeColors[selectedChallenge.type] || 'bg-slate-700 text-gray-300'}`}>
                  {selectedChallenge.type.charAt(0).toUpperCase() + selectedChallenge.type.slice(1)}
                </span>
                <span className="text-yellow-400 text-sm">{stars(selectedChallenge.difficulty)}</span>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-2">Streamer: {truncate(selectedChallenge.streamerAddress)}</p>
                <h2 className="text-3xl font-bold text-white leading-tight">{selectedChallenge.prompt}</h2>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg w-fit">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-gray-300 text-sm">Time limit: <span className="text-white font-semibold">{fmtTime(selectedChallenge.timeLimit)}</span></span>
              </div>
            </div>

            {/* Vote Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Cast Your Vote
              </h3>

              <div>
                <label className="block text-gray-300 font-medium mb-2">Reason (Optional)</label>
                <textarea value={voteReason} onChange={(e) => setVoteReason(e.target.value)}
                  placeholder="Why did you vote this way? Help improve consensus quality..."
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-red-500 focus:outline-none transition-colors resize-none h-24" />
              </div>

              {error && (
                <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-3 text-red-300 text-sm">{error}</div>
              )}

              {/* Vote Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => handleSubmitVote(true)} disabled={loading}
                  className="py-3.5 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {loading ? 'Submitting...' : 'Vote Pass'}
                </button>
                <button onClick={() => handleSubmitVote(false)} disabled={loading}
                  className="py-3.5 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  {loading ? 'Submitting...' : 'Vote Reject'}
                </button>
              </div>

              <button onClick={() => { setPageState('challenges'); setSelectedChallenge(null); setVoteReason(''); setError(''); }}
                className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 font-semibold rounded-lg transition-colors">
                Back to Challenges
              </button>
            </div>
          </div>
        )}

        {/* ── Vote Confirmed ── */}
        {pageState === 'confirmed' && voteState && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className={`rounded-xl p-12 text-center border ${voteState.votePass
              ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-700/50'
              : 'bg-gradient-to-br from-red-900/20 to-rose-900/20 border-red-700/50'}`}>

              <div className={`text-7xl mb-4 ${voteState.votePass ? 'text-green-400' : 'text-red-400'}`}>
                {voteState.votePass ? '✓' : '✗'}
              </div>

              <h2 className={`text-3xl font-bold mb-3 ${voteState.votePass ? 'text-green-400' : 'text-red-400'}`}>
                Vote Recorded
              </h2>

              <p className="text-gray-400">
                {voteState.votePass
                  ? 'You voted to pass this challenge. Thank you for validating!'
                  : 'You voted to reject this challenge. Thank you for your evaluation.'}
              </p>

              {voteState.reason && (
                <div className="mt-4 bg-slate-800/50 rounded-lg p-4 text-sm text-gray-300 text-left">
                  <span className="text-gray-500 font-medium">Your reason:</span> {voteState.reason}
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={() => { setPageState('challenges'); setSelectedChallenge(null); setVoteState(null); setVoteReason(''); fetchActiveChallenges(); }}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-600/30 transition-all">
                Vote on Another Challenge
              </button>
              <Link href="/" className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-white transition-colors">
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
