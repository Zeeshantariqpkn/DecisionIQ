import { FileText, Download, Eye } from 'lucide-react';

interface ReportCardProps {
  title: string;
  date: string;
  status: string;
  pages: number;
  type: string;
  onPreview?: () => void;
  onDownload?: () => void;
}

export function ReportCard({ title, date, status, pages, type, onPreview, onDownload }: ReportCardProps) {
  const statusColors: Record<string, string> = {
    Ready: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    Generating: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    Failed: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-border dark:border-slate-700 flex items-center gap-4 hover:shadow-card-hover transition-all duration-200">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
        <FileText size={20} className="text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground dark:text-white truncate">{title}</h4>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-muted dark:text-slate-400">{date}</span>
          <span className="text-xs text-muted dark:text-slate-400">{pages} pages</span>
          <span className="text-xs text-muted dark:text-slate-400">{type}</span>
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${statusColors[status] || statusColors.Ready}`}>
            {status}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onPreview}
          className="p-2 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Preview report"
        >
          <Eye size={16} className="text-muted" />
        </button>
        <button
          onClick={onDownload}
          disabled={status !== 'Ready'}
          className="p-2 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Download report"
        >
          <Download size={16} className="text-muted" />
        </button>
      </div>
    </div>
  );
}
