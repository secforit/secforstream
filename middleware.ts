import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ---------------------------------------------------------------------------
// Global rate limit (across ALL API routes, per IP)
// ---------------------------------------------------------------------------
interface GlobalEntry {
  count: number;
  resetAt: number;
}

const globalStore = new Map<string, GlobalEntry>();
const GLOBAL_WINDOW_MS = 60_000;
const GLOBAL_MAX_REQUESTS = 60; // 60 total API calls/min across all endpoints
const MAX_STORE_SIZE = 10_000;  // Prevent memory exhaustion from botnets

// Cleanup every 2 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of globalStore) {
    if (now > entry.resetAt) globalStore.delete(key);
  }
}, 120_000);

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

// ---------------------------------------------------------------------------
// Allowed origins for CORS
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = new Set([
  'https://stream.secforit.com',
  'https://secforstream.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001',
]);

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  // Allow any *.vercel.app preview deploys
  if (origin.endsWith('.vercel.app')) return true;
  return false;
}

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isApiRoute = pathname.startsWith('/api/');

  // --- CORS preflight ---
  if (isApiRoute && request.method === 'OPTIONS') {
    const origin = request.headers.get('origin');
    const headers: Record<string, string> = {
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    };
    if (isAllowedOrigin(origin)) {
      headers['Access-Control-Allow-Origin'] = origin!;
    }
    return new NextResponse(null, { status: 204, headers });
  }

  // --- Global rate limit for API routes ---
  if (isApiRoute) {
    const ip = getClientIp(request);
    const now = Date.now();
    const entry = globalStore.get(ip);

    if (!entry || now > entry.resetAt) {
      // Evict oldest entries if store is too large
      if (globalStore.size >= MAX_STORE_SIZE) {
        const firstKey = globalStore.keys().next().value;
        if (firstKey) globalStore.delete(firstKey);
      }
      globalStore.set(ip, { count: 1, resetAt: now + GLOBAL_WINDOW_MS });
    } else if (entry.count >= GLOBAL_MAX_REQUESTS) {
      const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
      return NextResponse.json(
        { error: 'Too many requests.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(retryAfter),
            'X-RateLimit-Limit': String(GLOBAL_MAX_REQUESTS),
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    } else {
      entry.count++;
    }
  }

  // --- Build response with security headers ---
  const response = NextResponse.next();

  // CORS for API routes
  if (isApiRoute) {
    const origin = request.headers.get('origin');
    if (isAllowedOrigin(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin!);
    }
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  }

  // Security headers (all routes)
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://api.dexscreener.com https://mainnet.helius-rpc.com https://api.mainnet-beta.solana.com https://frontend-api-v3.pump.fun wss://pumpportal.fun",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );

  return response;
}

export const config = {
  matcher: [
    // Match all API routes
    '/api/:path*',
    // Match all pages (but not static files like _next, images, etc.)
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|md)$).*)',
  ],
};
