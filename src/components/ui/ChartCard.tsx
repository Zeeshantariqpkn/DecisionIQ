import type { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function ChartCard({ title, children, action, className = '' }: ChartCardProps) {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground dark:text-white">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}
