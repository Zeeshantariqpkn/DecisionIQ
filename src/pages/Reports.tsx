import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ReportCard } from '../components/ui/ReportCard';
import { Modal } from '../components/ui/Modal';
import { EmptyState } from '../components/ui/EmptyState';
import { reports } from '../data/mockData';
import { useToast } from '../context/ToastContext';

export default function Reports() {
  const { addToast } = useToast();
  const [previewReport, setPreviewReport] = useState<string | null>(null);

  return (
    <div className="animate-fade-in">
      <Breadcrumb items={[{ label: 'Reports' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground dark:text-white mb-1">Reports</h1>
          <p className="text-sm text-muted dark:text-slate-400">View and download your generated reports</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 rounded-lg px-3 py-2 border border-border dark:border-slate-700">
            <Search size={15} className="text-muted" />
            <input type="text" placeholder="Search reports..." className="bg-transparent text-sm text-foreground dark:text-white placeholder:text-muted outline-none w-40" />
          </div>
          <button className="p-2 rounded-lg border border-border dark:border-slate-700 hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer">
            <Filter size={16} className="text-muted" />
          </button>
        </div>
      </div>

      {/* Report List */}
      {reports.length > 0 ? (
        <div className="space-y-3">
          {reports.map((r) => (
            <ReportCard
              key={r.id}
              title={r.title}
              date={r.date}
              status={r.status}
              pages={r.pages}
              type={r.type}
              onPreview={() => setPreviewReport(r.title)}
              onDownload={() => addToast(`Downloading ${r.title}...`, 'info')}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<FileTextPlaceholder />}
          title="No reports yet"
          description="Generate your first executive summary or analytics report to see it here."
          action={
            <button className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-primary-dark transition-all cursor-pointer">
              Generate Report
            </button>
          }
        />
      )}

      {/* Preview Modal */}
      <Modal open={!!previewReport} onClose={() => setPreviewReport(null)} title={previewReport || ''} size="lg">
        <div className="space-y-4">
          <div className="bg-surface dark:bg-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-foreground dark:text-white mb-2">Executive Summary</h4>
            <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">
              DecisionIQ demo company demonstrates strong financial performance with $4.29M in annual revenue and 23.8% year-over-year growth. Net profit margins remain healthy at 26.3%, though operating expenses have trended slightly above target.
            </p>
          </div>
          <div className="bg-surface dark:bg-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-foreground dark:text-white mb-2">Key Metrics</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Revenue: $4.29M', 'Profit: $1.13M', 'Growth: 23.8%', 'Customers: 3,842'].map((m, i) => (
                <div key={i} className="text-sm text-foreground dark:text-white bg-white dark:bg-slate-800 rounded-lg p-3 text-center font-medium">
                  {m}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface dark:bg-slate-700 rounded-lg p-4">
            <h4 className="font-semibold text-foreground dark:text-white mb-2">Recommendations</h4>
            <ul className="space-y-1.5 text-sm text-muted dark:text-slate-400">
              <li>• Launch European sales hub in Q1</li>
              <li>• Implement cost optimization program</li>
              <li>• Develop AI-powered analytics add-on</li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function FileTextPlaceholder() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 dark:text-slate-600">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}
