export type HolderTier = 'dev' | 'bonding_curve' | 'whale' | 'dolphin' | 'fish' | 'dust';

export interface BubbleNode {
  address: string;
  uiAmount: number;
  percentage: number;
  tier: HolderTier;
  label?: string;
}

export interface BubbleMapData {
  nodes: BubbleNode[];
  totalSupply: number;
  updatedAt: number;
}
