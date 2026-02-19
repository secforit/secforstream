'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import useSWR from 'swr';

// ─── Types ────────────────────────────────────────────────────────────────────

export type { HolderTier, BubbleNode, BubbleMapData } from '@/app/types/bubble-map';
import type { HolderTier, BubbleNode, BubbleMapData } from '@/app/types/bubble-map';

// ─── Constants ────────────────────────────────────────────────────────────────

const TIER_COLORS: Record<HolderTier, { fill: string; stroke: string; label: string }> = {
  dev:           { fill: '#fbbf24', stroke: '#f59e0b', label: 'Dev' },
  bonding_curve: { fill: '#f97316', stroke: '#ea580c', label: 'Bonding Curve' },
  whale:         { fill: '#ef4444', stroke: '#dc2626', label: 'Whale >5%' },
  dolphin:       { fill: '#ec4899', stroke: '#db2777', label: 'Dolphin 1-5%' },
  fish:          { fill: '#6366f1', stroke: '#4f46e5', label: 'Fish <1%' },
  dust:          { fill: '#334155', stroke: '#475569', label: 'Dust' },
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok || data.error) throw new Error(data.error || 'Request failed');
  return data;
};

function truncateAddress(addr: string): string {
  if (!addr || addr.length <= 10) return addr;
  return `${addr.slice(0, 4)}…${addr.slice(-4)}`;
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────

interface TooltipProps {
  node: BubbleNode | null;
  x: number;
  y: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

function Tooltip({ node, x, y, containerRef }: TooltipProps) {
  if (!node) return null;

  const rect = containerRef.current?.getBoundingClientRect();
  const maxX = rect ? rect.width - 220 : 9999;
  const maxY = rect ? rect.height - 140 : 9999;

  const tier = TIER_COLORS[node.tier];

  return (
    <div
      className="absolute z-50 pointer-events-none select-none"
      style={{
        left: Math.min(x + 12, maxX),
        top: Math.min(y + 12, maxY),
        width: 210,
      }}
    >
      <div className="rounded-xl border border-slate-600 bg-slate-900/95 backdrop-blur-sm p-3 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: tier.fill, boxShadow: `0 0 6px ${tier.fill}` }}
          />
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: tier.fill }}>
            {node.label || tier.label}
          </span>
        </div>
        <div className="font-mono text-xs text-slate-300 mb-2 break-all">
          {node.address}
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
          <span className="text-slate-500">Holdings</span>
          <span className="text-white font-semibold text-right">
            {node.percentage.toFixed(2)}%
          </span>
          <span className="text-slate-500">Amount</span>
          <span className="text-slate-300 text-right">
            {node.uiAmount >= 1_000_000
              ? `${(node.uiAmount / 1_000_000).toFixed(2)}M`
              : node.uiAmount >= 1_000
              ? `${(node.uiAmount / 1_000).toFixed(2)}K`
              : node.uiAmount.toFixed(0)}
          </span>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-700">
          <a
            className="text-xs text-red-400 hover:text-red-300 pointer-events-auto"
            href={`https://solscan.io/account/${node.address}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View on Solscan ↗
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function Legend() {
  const tiers: HolderTier[] = ['dev', 'bonding_curve', 'whale', 'dolphin', 'fish'];
  return (
    <div className="flex flex-wrap gap-3">
      {tiers.map((tier) => {
        const c = TIER_COLORS[tier];
        return (
          <div key={tier} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c.fill, boxShadow: `0 0 4px ${c.fill}80` }}
            />
            <span className="text-xs text-slate-400">{c.label}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Canvas Renderer ──────────────────────────────────────────────────────────

interface SimNode extends BubbleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

function useForceSimulation(nodes: BubbleNode[], width: number, height: number) {
  const [simNodes, setSimNodes] = useState<SimNode[]>([]);
  const frameRef = useRef<number>(0);
  const nodesRef = useRef<SimNode[]>([]);

  useEffect(() => {
    if (!nodes.length || !width || !height) return;

    const maxPct = Math.max(...nodes.map((n) => n.percentage));
    const minR = 14;
    const maxR = Math.min(width, height) * 0.18;

    const initialized: SimNode[] = nodes.map((n, i) => {
      const angle = (i / nodes.length) * Math.PI * 2;
      const dist = Math.min(width, height) * 0.25;
      return {
        ...n,
        x: width / 2 + Math.cos(angle) * dist * Math.random(),
        y: height / 2 + Math.sin(angle) * dist * Math.random(),
        vx: 0,
        vy: 0,
        r: minR + ((n.percentage / maxPct) ** 0.5) * (maxR - minR),
      };
    });

    nodesRef.current = initialized;

    let tick = 0;
    const MAX_TICKS = 300;

    function simulate() {
      const ns = nodesRef.current;
      const cx = width / 2;
      const cy = height / 2;
      const alpha = Math.max(0.001, 1 - tick / MAX_TICKS);

      // Center gravity
      for (const n of ns) {
        n.vx += (cx - n.x) * 0.02 * alpha;
        n.vy += (cy - n.y) * 0.02 * alpha;
      }

      // Collision resolution
      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const a = ns[i], b = ns[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
          const minDist = a.r + b.r + 3;
          if (dist < minDist) {
            const overlap = (minDist - dist) / dist * 0.5 * alpha;
            const fx = dx * overlap;
            const fy = dy * overlap;
            a.vx -= fx; a.vy -= fy;
            b.vx += fx; b.vy += fy;
          }
        }
      }

      // Boundary repulsion + damping
      for (const n of ns) {
        const pad = n.r + 8;
        if (n.x < pad) n.vx += (pad - n.x) * 0.1;
        if (n.x > width - pad) n.vx += (width - pad - n.x) * 0.1;
        if (n.y < pad) n.vy += (pad - n.y) * 0.1;
        if (n.y > height - pad) n.vy += (height - pad - n.y) * 0.1;

        n.vx *= 0.85;
        n.vy *= 0.85;
        n.x += n.vx;
        n.y += n.vy;
      }

      tick++;
      setSimNodes([...ns]);

      if (tick < MAX_TICKS) {
        frameRef.current = requestAnimationFrame(simulate);
      }
    }

    cancelAnimationFrame(frameRef.current);
    tick = 0;
    frameRef.current = requestAnimationFrame(simulate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [nodes, width, height]);

  return simNodes;
}

// ─── SVG Bubble Map ───────────────────────────────────────────────────────────

interface BubbleMapSVGProps {
  nodes: BubbleNode[];
  width: number;
  height: number;
  onHover: (node: BubbleNode | null, x: number, y: number) => void;
  selectedAddress: string | null;
  onSelect: (address: string | null) => void;
}

function BubbleMapSVG({ nodes, width, height, onHover, selectedAddress, onSelect }: BubbleMapSVGProps) {
  const simNodes = useForceSimulation(nodes, width, height);

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        {Object.entries(TIER_COLORS).map(([tier, c]) => (
          <radialGradient key={tier} id={`grad-${tier}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor={c.fill} stopOpacity="0.9" />
            <stop offset="100%" stopColor={c.stroke} stopOpacity="0.7" />
          </radialGradient>
        ))}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {simNodes.map((node) => {
        const c = TIER_COLORS[node.tier];
        const isSelected = selectedAddress === node.address;
        const labelText = node.r > 28 ? truncateAddress(node.address) : '';
        const pctText = node.r > 22 ? `${node.percentage.toFixed(1)}%` : '';

        return (
          <g
            key={node.address}
            transform={`translate(${node.x},${node.y})`}
            className="cursor-pointer"
            onMouseEnter={(e) => {
              const rect = (e.currentTarget.closest('svg')?.parentElement as HTMLElement)?.getBoundingClientRect();
              const svgRect = e.currentTarget.closest('svg')?.getBoundingClientRect();
              if (svgRect && rect) {
                onHover(node, svgRect.left - rect.left + node.x, svgRect.top - rect.top + node.y);
              }
            }}
            onMouseLeave={() => onHover(null, 0, 0)}
            onClick={() => onSelect(isSelected ? null : node.address)}
          >
            {/* Glow ring for selected */}
            {isSelected && (
              <circle
                r={node.r + 6}
                fill="none"
                stroke={c.fill}
                strokeWidth={2}
                strokeOpacity={0.6}
                filter="url(#glow)"
              />
            )}

            {/* Main bubble */}
            <circle
              r={node.r}
              fill={`url(#grad-${node.tier})`}
              stroke={c.stroke}
              strokeWidth={isSelected ? 2 : 1}
              strokeOpacity={isSelected ? 1 : 0.5}
              style={{ transition: 'r 0.3s ease' }}
            />

            {/* Shine highlight */}
            <circle
              r={node.r * 0.35}
              cx={-node.r * 0.25}
              cy={-node.r * 0.25}
              fill="white"
              fillOpacity={0.12}
            />

            {/* Labels */}
            {pctText && (
              <text
                textAnchor="middle"
                dy={labelText ? '-0.3em' : '0.35em'}
                fontSize={Math.min(12, node.r * 0.38)}
                fontWeight="700"
                fill="white"
                fillOpacity={0.95}
                style={{ fontFamily: 'monospace', pointerEvents: 'none', userSelect: 'none' }}
              >
                {pctText}
              </text>
            )}
            {labelText && (
              <text
                textAnchor="middle"
                dy={pctText ? '0.85em' : '0.35em'}
                fontSize={Math.min(9, node.r * 0.28)}
                fill="white"
                fillOpacity={0.7}
                style={{ fontFamily: 'monospace', pointerEvents: 'none', userSelect: 'none' }}
              >
                {node.label || labelText}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function BubbleMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [tooltip, setTooltip] = useState<{ node: BubbleNode | null; x: number; y: number }>({
    node: null, x: 0, y: 0,
  });
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  const { data, error, isLoading } = useSWR<BubbleMapData>(
    '/api/token/bubble-map',
    fetcher,
    { refreshInterval: 60_000 }
  );

  // Measure container
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height: Math.max(420, Math.min(600, width * 0.65)) });
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const handleHover = useCallback((node: BubbleNode | null, x: number, y: number) => {
    setTooltip({ node, x, y });
  }, []);

  const selectedNode = data?.nodes.find((n) => n.address === selectedAddress) ?? null;

  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="6" cy="12" r="3" strokeWidth="1.5" />
              <circle cx="18" cy="6" r="4" strokeWidth="1.5" />
              <circle cx="18" cy="18" r="2.5" strokeWidth="1.5" />
              <line x1="9" y1="12" x2="14" y2="7.5" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="9" y1="12" x2="15.2" y2="16.5" strokeWidth="1" strokeOpacity="0.5" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Holder Bubble Map</h3>
            <p className="text-xs text-slate-500">
              {data ? `${data.nodes.length} holders · ` : ''}
              Click a bubble to inspect
            </p>
          </div>
        </div>
        {data && (
          <span className="text-xs text-slate-500">
            Updated {new Date(data.updatedAt).toLocaleTimeString()}
          </span>
        )}
      </div>

      {/* Legend */}
      <div className="mb-4">
        <Legend />
      </div>

      {/* Canvas */}
      <div ref={containerRef} className="relative rounded-xl bg-slate-950/60 border border-slate-700/50 overflow-hidden">
        {/* Grid dots background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {isLoading && (
          <div className="flex items-center justify-center" style={{ height: 420 }}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-red-600/30 border-t-red-500 animate-spin" />
              <span className="text-sm text-slate-500">Loading holder map…</span>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center" style={{ height: 420 }}>
            <div className="text-center">
              <div className="text-red-400 text-sm mb-1">Failed to load bubble map</div>
              <div className="text-slate-500 text-xs">Configure HELIUS_RPC_URL to enable</div>
            </div>
          </div>
        )}

        {data && dimensions.width > 0 && (
          <BubbleMapSVG
            nodes={data.nodes}
            width={dimensions.width}
            height={dimensions.height}
            onHover={handleHover}
            selectedAddress={selectedAddress}
            onSelect={setSelectedAddress}
          />
        )}

        {/* Tooltip */}
        <Tooltip
          node={tooltip.node}
          x={tooltip.x}
          y={tooltip.y}
          containerRef={containerRef as React.RefObject<HTMLDivElement>}
        />
      </div>

      {/* Selected node detail panel */}
      {selectedNode && (
        <div className="mt-4 p-4 rounded-xl bg-slate-950/60 border border-slate-600/50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{
                background: TIER_COLORS[selectedNode.tier].fill,
                boxShadow: `0 0 8px ${TIER_COLORS[selectedNode.tier].fill}`,
              }}
            />
            <span className="font-mono text-sm text-slate-300 truncate">{selectedNode.address}</span>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0 text-sm">
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-0.5">Holdings</div>
              <div className="font-bold text-white">{selectedNode.percentage.toFixed(2)}%</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-500 mb-0.5">Tier</div>
              <div
                className="font-semibold capitalize text-xs px-2 py-0.5 rounded"
                style={{
                  color: TIER_COLORS[selectedNode.tier].fill,
                  background: `${TIER_COLORS[selectedNode.tier].fill}20`,
                }}
              >
                {selectedNode.label || TIER_COLORS[selectedNode.tier].label}
              </div>
            </div>
            <a
              href={`https://solscan.io/account/${selectedNode.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-red-400 hover:text-red-300 transition-colors"
            >
              Solscan ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}