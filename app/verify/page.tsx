'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const API = '/api';

// Demo JWT (in real app, this comes from wallet signature auth)
const DEMO_JWT = 'demo-mode';

type PageState = 'wallet' | 'staking' | 'challenge' | 'result';

interface ChallengeData {
  challengeId: string;
  sessionId: string;
  type: string;
  prompt: string;
  difficulty: number;
  timeLimit: number;
  expiresAt: string;
}

interface StatusData {
  totalResponses: number;
  approvals: number;
  disapprovals: number;
  approvalRate: number;
  minVotesNeeded: number;
  minVotesMet: boolean;
}

export default function VerifyPage() {
  const [state, setState] = useState<PageState>('wallet');
  const [wallet, setWallet] = useState('');
  const [stakeAmount, setStakeAmount] = useState(100);
  const [challenge, setChallenge] = useState<ChallengeData | null>(null);
  const [status, setStatus] = useState<StatusData | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ passed: boolean; score: number; tier: string } | null>(null);

  const connectWallet = () => {
    const addr = Array.from({ length: 44 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789'[Math.floor(Math.random() * 58)]).join('');
    setWallet(addr);
    setState('staking');
  };

  const startVerification = async () => {
    setLoading(true);
    setError('');
    try {
      // Create session
      const sessRes = await fetch(`${API}/sessions/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${DEMO_JWT}` },
        body: JSON.stringify({ stakeAmount, stakeTx: 'demo-tx-' + Date.now(), streamerAddress: wallet }),
      });
      const sessData = await sessRes.json();
      if (!sessRes.ok) throw new Error(sessData.error || 'Failed to create session');

      // Generate challenge
      const chalRes = await fetch(`${API}/challenges`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${DEMO_JWT}` },
        body: JSON.stringify({ sessionId: sessData.sessionId, streamerAddress: wallet }),
      });
      const chalData = await chalRes.json();
      if (!chalRes.ok) throw new Error(chalData.error || 'Failed to generate challenge');

      setChallenge(chalData);
      setTimeLeft(chalData.timeLimit);
      setState('challenge');
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  // Poll voting status
  const pollStatus = useCallback(async () => {
    if (!challenge) return;
    try {
      const res = await fetch(`${API}/challenges/${challenge.challengeId}/status`);
      const data = await res.json();
      setStatus(data);

      // Check if consensus finalized
      if (data.minVotesMet) {
        // Check challenge details for final result
        const chalRes = await fetch(`${API}/challenges/${challenge.challengeId}`);
        const chalData = await chalRes.json();
        if (chalData.consensus) {
          // Fetch trust score
          const trustRes = await fetch(`${API}/trust/${wallet}`);
          const trustData = trustRes.ok ? await trustRes.json() : null;

          setResult({
            passed: chalData.consensus.passed,
            score: trustData?.score ?? 0,
            tier: trustData?.tier ?? 'Risk',
          });
          setState('result');
        }
      }
    } catch { /* ignore polling errors */ }
  }, [challenge, wallet]);

  useEffect(() => {
    if (state !== 'challenge' || !challenge) return;
    const interval = setInterval(pollStatus, 2000);
    return () => clearInterval(interval);
  }, [state, challenge, pollStatus]);

  // Countdown timer
  useEffect(() => {
    if (state !== 'challenge' || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((p) => Math.max(0, p - 1)), 1000);
    return () => clearInterval(t);
  }, [state, timeLeft]);

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
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-red-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span className="font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white via-red-200 to-rose-200 bg-clip-text text-transparent">
            Verify Your Stream
          </h1>
          {wallet && <span className="text-sm text-gray-400 font-mono">{wallet.slice(0, 4)}...{wallet.slice(-4)}</span>}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* ── Connect Wallet ── */}
        {state === 'wallet' && (
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Proof-of-Human Protocol</span>
            </div>
            <h2 className="text-4xl font-bold text-white">Connect Your Wallet to Begin</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Stake $SECS tokens to initiate a verification session. Complete a challenge to prove you're human and build your trust score.
            </p>
            <button onClick={connectWallet} className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 hover:scale-105">
              Connect Wallet (Demo)
            </button>
          </div>
        )}

        {/* ── Staking Form ── */}
        {state === 'staking' && (
          <div className="max-w-lg mx-auto space-y-6">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">Stake $SECS Tokens</h2>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Amount to Stake</label>
                <div className="relative">
                  <input type="number" value={stakeAmount} onChange={(e) => setStakeAmount(Number(e.target.value))} min={1}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white text-lg focus:border-red-500 focus:outline-none" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">SECS</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Minimum 1 SECS. Higher stakes = higher trust potential.</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-4 text-sm text-gray-300 space-y-1">
                <p>Your tokens will be locked during verification (24h cooldown).</p>
                <p>Successfully completing a challenge earns you rewards + trust score.</p>
              </div>

              {error && <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-3 text-red-300 text-sm">{error}</div>}

              <button onClick={startVerification} disabled={loading || stakeAmount < 1}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                {loading ? 'Starting Verification...' : 'Start Verification'}
              </button>
            </div>
          </div>
        )}

        {/* ── Challenge Active ── */}
        {state === 'challenge' && challenge && (
          <div className="space-y-6">
            {/* Challenge Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${typeColors[challenge.type] || 'bg-slate-700 text-gray-300'}`}>
                  {challenge.type.charAt(0).toUpperCase() + challenge.type.slice(1)}
                </span>
                <span className="text-yellow-400 text-sm">{stars(challenge.difficulty)}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {challenge.prompt}
              </h2>

              {/* Timer */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${timeLeft < 10 ? 'bg-red-500/20 border-red-500/30 text-red-300' : 'bg-slate-700 text-gray-300'} border border-slate-600`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="font-mono font-bold text-lg">{fmtTime(timeLeft)}</span>
              </div>
            </div>

            {/* Voting Status */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Community Votes
              </h3>

              {status ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Responses</span>
                    <span className="text-white font-bold text-xl">{status.totalResponses} / {status.minVotesNeeded} min</span>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Approval Rate</span>
                      <span className="text-white font-semibold">{(status.approvalRate * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500" style={{ width: `${status.approvalRate * 100}%` }} />
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-green-400">{status.approvals} approved</span>
                      <span className="text-red-400">{status.disapprovals} rejected</span>
                    </div>
                  </div>

                  {!status.minVotesMet && (
                    <div className="bg-slate-700/50 rounded-lg p-3 text-sm text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                      Waiting for {status.minVotesNeeded - status.totalResponses} more vote{status.minVotesNeeded - status.totalResponses !== 1 ? 's' : ''}...
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-gray-400">Waiting for viewers to validate...</p>
                  <p className="text-gray-500 text-sm mt-1">Share this challenge with your audience!</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Result ── */}
        {state === 'result' && result && (
          <div className="space-y-6">
            <div className={`rounded-xl p-12 text-center border ${result.passed ? 'bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-700/50' : 'bg-gradient-to-br from-red-900/20 to-rose-900/20 border-red-700/50'}`}>
              <div className={`text-7xl mb-4 ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                {result.passed ? '✓' : '✗'}
              </div>
              <h2 className={`text-4xl font-bold mb-3 ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                {result.passed ? 'Verification Passed!' : 'Verification Failed'}
              </h2>
              <p className="text-gray-400">
                {result.passed ? 'Your stream has been verified by community consensus.' : 'The community did not reach consensus on your challenge.'}
              </p>
            </div>

            {/* Trust Score */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Your Trust Score</h3>
              <div className="flex items-end gap-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                  {result.score.toFixed(1)}
                </span>
                <span className="text-gray-400 text-lg mb-1">/ 100</span>
                <span className="ml-auto text-lg font-semibold text-white">{result.tier}</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href="/" className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold text-white transition-colors">
                Back to Home
              </Link>
              <button onClick={() => { setState('staking'); setChallenge(null); setStatus(null); setResult(null); setError(''); }}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-red-600/30 transition-all">
                Verify Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
