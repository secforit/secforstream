import jwt from 'jsonwebtoken';
import nacl from 'tweetnacl';
import bs58 from 'bs58';
import { config } from './config';

// Store nonces in-memory (fine for serverless — short-lived by design)
const nonceStore = new Map<string, { nonce: string; expiresAt: number }>();

export interface AuthPayload {
  wallet: string;
  iat: number;
  exp: number;
}

export function requestMessage(wallet: string): { message: string; nonce: string } {
  const nonce = crypto.randomUUID();
  const message = `SECforSTREAM Verification\n\nSign this message to authenticate.\n\nWallet: ${wallet}\nNonce: ${nonce}\nTimestamp: ${new Date().toISOString()}`;
  nonceStore.set(wallet, { nonce, expiresAt: Date.now() + 5 * 60_000 });
  return { message, nonce };
}

export function verifySignature(wallet: string, signature: string, message: string): string | null {
  try {
    const storedNonce = nonceStore.get(wallet);
    if (!storedNonce || Date.now() > storedNonce.expiresAt) return null;

    const publicKey = bs58.decode(wallet);
    const signatureBytes = bs58.decode(signature);
    const messageBytes = new TextEncoder().encode(message);
    const valid = nacl.sign.detached.verify(messageBytes, signatureBytes, publicKey);
    if (!valid) return null;

    nonceStore.delete(wallet);

    const payload: AuthPayload = {
      wallet,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
    };
    return jwt.sign(payload, config.jwtSecret);
  } catch {
    return null;
  }
}

/**
 * Extract wallet address from Authorization header.
 * Returns null if invalid. Supports demo-mode bypass.
 */
export function getWalletFromAuth(authHeader: string | null, bodyWallet?: string): string | null {
  if (!authHeader?.startsWith('Bearer ')) return null;
  const token = authHeader.slice(7);

  // Demo mode bypass
  if (token === 'demo-mode') {
    return bodyWallet || 'DemoWallet' + crypto.randomUUID().slice(0, 8);
  }

  try {
    const payload = jwt.verify(token, config.jwtSecret) as AuthPayload;
    return payload.wallet;
  } catch {
    return null;
  }
}
