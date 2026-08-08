import type { LucideIcon } from 'lucide-react';

interface RecommendationCardProps {
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
}

export function RecommendationCard({ title, description, impact, icon: Icon }: RecommendationCardProps) {
  const impactColors: Record<string, string> = {
    High: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    Medium: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    Low: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  };

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
        <Icon size={16} className="text-primary" />
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-sm font-medium text-foreground dark:text-white">{title}</h4>
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${impactColors[impact] || impactColors.Medium}`}>
            {impact}
          </span>
        </div>
        <p className="text-xs text-muted dark:text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
