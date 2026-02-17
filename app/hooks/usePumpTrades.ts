'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { PumpTrade } from '@/app/types/token';

const WS_URL = process.env.NEXT_PUBLIC_PUMP_WS_URL || 'wss://pumpportal.fun/api/data';
const TOKEN_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_ADDRESS || '7aS4v65fEGvQseGxmrZ8iGNpHW7yd49SMmLm2cLApump';
const MAX_TRADES = 50;
const RECONNECT_DELAY = 3000;

export function usePumpTrades() {
  const [trades, setTrades] = useState<PumpTrade[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    try {
      const ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        setIsConnected(true);
        ws.send(
          JSON.stringify({
            method: 'subscribeTokenTrade',
            keys: [TOKEN_ADDRESS],
          })
        );
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (!data.txType) return; // skip non-trade messages (ack, etc.)
          const trade: PumpTrade = {
            ...data,
            timestamp: data.timestamp || Date.now(),
          };
          setTrades((prev) => [trade, ...prev].slice(0, MAX_TRADES));
        } catch {
          // skip malformed messages
        }
      };

      ws.onclose = () => {
        setIsConnected(false);
        wsRef.current = null;
        reconnectTimeoutRef.current = setTimeout(connect, RECONNECT_DELAY);
      };

      ws.onerror = () => {
        ws.close();
      };

      wsRef.current = ws;
    } catch {
      reconnectTimeoutRef.current = setTimeout(connect, RECONNECT_DELAY);
    }
  }, []);

  useEffect(() => {
    connect();
    return () => {
      clearTimeout(reconnectTimeoutRef.current);
      wsRef.current?.close();
    };
  }, [connect]);

  return { trades, isConnected };
}
