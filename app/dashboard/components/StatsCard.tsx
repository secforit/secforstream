'use client';

interface StatsCardProps {
  label: string;
  value: string;
  icon?: string;
  change?: number;
  changeLabel?: string;
}

export default function StatsCard({ label, value, icon, change, changeLabel }: StatsCardProps) {
  return (
    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-red-600/50 transition-all duration-300 group">
      {icon && (
        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      )}
      <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
        {value}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
      {change !== undefined && (
        <div
          className={`text-xs mt-2 font-medium ${
            change >= 0 ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {change >= 0 ? '+' : ''}
          {change.toFixed(2)}% {changeLabel || ''}
        </div>
      )}
    </div>
  );
}
