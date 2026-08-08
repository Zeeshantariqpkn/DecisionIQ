import { AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

interface AlertCardProps {
  type: 'warning' | 'info' | 'success';
  title: string;
  message: string;
  time: string;
}

const icons = {
  warning: <AlertTriangle size={18} className="text-warning" />,
  info: <Info size={18} className="text-primary" />,
  success: <CheckCircle2 size={18} className="text-success" />,
};

const bgColors = {
  warning: 'bg-amber-50 dark:bg-amber-900/20 border-l-warning',
  info: 'bg-blue-50 dark:bg-blue-900/20 border-l-primary',
  success: 'bg-emerald-50 dark:bg-emerald-900/20 border-l-success',
};

export function AlertCard({ type, title, message, time }: AlertCardProps) {
  return (
    <div className={`${bgColors[type]} border border-border dark:border-slate-700 border-l-4 rounded-lg p-3`}>
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex-shrink-0">{icons[type]}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-sm font-semibold text-foreground dark:text-white">{title}</h4>
            <span className="text-xs text-muted dark:text-slate-500 whitespace-nowrap">{time}</span>
          </div>
          <p className="text-xs text-muted dark:text-slate-400 mt-1 leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
}
