import type { ReactNode } from 'react';

interface KpiCardProps {
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
  icon: ReactNode;
  color: string;
}

export function KpiCard({ label, value, delta, deltaLabel, icon, color }: KpiCardProps) {
  const isPositive = delta >= 0;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer border border-border dark:border-slate-700">
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm font-medium text-muted dark:text-slate-400">{label}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}15` }}>
          <span style={{ color }}>{icon}</span>
        </span>
      </div>
      <div className="text-2xl font-bold text-foreground dark:text-white mb-2">{value}</div>
      <div className="flex items-center gap-1.5">
        <span
          className={`inline-flex items-center text-xs font-semibold px-1.5 py-0.5 rounded ${
            isPositive ? 'text-success bg-emerald-50 dark:bg-emerald-900/30' : 'text-destructive bg-red-50 dark:bg-red-900/30'
          }`}
        >
          {isPositive ? '↑' : '↓'} {Math.abs(delta)}%
        </span>
        <span className="text-xs text-muted dark:text-slate-400">{deltaLabel}</span>
      </div>
    </div>
  );
}
