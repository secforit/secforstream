'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '';

interface AuthContextValue {
  jwt: string | null;
  wallet: string | null;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  signIn: () => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  jwt: null,
  wallet: null,
  isAuthenticated: false,
  isAuthenticating: false,
  signIn: async () => {},
  signOut: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

const JWT_KEY = 'streamproof_jwt';
const WALLET_KEY = 'streamproof_wallet';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { publicKey, signMessage, connected, disconnect } = useWallet();
  const [jwt, setJwt] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const hasAttemptedAuth = useRef(false);

  // Restore JWT from localStorage on mount
  useEffect(() => {
    const storedJwt = localStorage.getItem(JWT_KEY);
    const storedWallet = localStorage.getItem(WALLET_KEY);
    if (storedJwt && storedWallet && publicKey && storedWallet === publicKey.toBase58()) {
      setJwt(storedJwt);
    }
  }, [publicKey]);

  const walletAddress = publicKey?.toBase58() ?? null;

  const signIn = useCallback(async () => {
    if (!publicKey || !signMessage) return;
    setIsAuthenticating(true);
    try {
      const wallet = publicKey.toBase58();

      // 1. Request nonce message from backend
      const msgRes = await fetch(`${API_BASE}/api/auth/request-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet }),
      });
      if (!msgRes.ok) throw new Error('Failed to get auth message');
      const { message } = await msgRes.json();

      // 2. Sign message with wallet
      const encoded = new TextEncoder().encode(message);
      const signatureBytes = await signMessage(encoded);
      const signature = bs58.encode(signatureBytes);

      // 3. Verify signature with backend, get JWT
      const verifyRes = await fetch(`${API_BASE}/api/auth/verify-signature`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet, signature, message }),
      });
      if (!verifyRes.ok) throw new Error('Signature verification failed');
      const { token } = await verifyRes.json();

      setJwt(token);
      localStorage.setItem(JWT_KEY, token);
      localStorage.setItem(WALLET_KEY, wallet);
    } catch (err) {
      console.error('Auth failed:', err);
      setJwt(null);
      localStorage.removeItem(JWT_KEY);
      localStorage.removeItem(WALLET_KEY);
    } finally {
      setIsAuthenticating(false);
    }
  }, [publicKey, signMessage]);

  const signOut = useCallback(() => {
    setJwt(null);
    localStorage.removeItem(JWT_KEY);
    localStorage.removeItem(WALLET_KEY);
    hasAttemptedAuth.current = false;
    disconnect();
  }, [disconnect]);

  // Auto sign-in when wallet first connects
  useEffect(() => {
    if (connected && publicKey && signMessage && !jwt && !isAuthenticating && !hasAttemptedAuth.current) {
      hasAttemptedAuth.current = true;
      signIn();
    }
    if (!connected) {
      hasAttemptedAuth.current = false;
      if (jwt) {
        setJwt(null);
        localStorage.removeItem(JWT_KEY);
        localStorage.removeItem(WALLET_KEY);
      }
    }
  }, [connected, publicKey, signMessage, jwt, isAuthenticating, signIn]);

  return (
    <AuthContext.Provider
      value={{
        jwt,
        wallet: walletAddress,
        isAuthenticated: !!jwt && !!walletAddress,
        isAuthenticating,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
