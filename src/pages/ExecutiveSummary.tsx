import { useState, useEffect } from 'react';
import {
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { HealthScoreGauge } from '../components/ui/HealthScoreGauge';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { fetchExecutiveSummary } from '../services/dataService';
import { useToast } from '../context/ToastContext';

export default function ExecutiveSummary() {
  const { addToast } = useToast();
  const [summary, setSummary] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(true);
  const [regenerating, setRegenerating] = useState(false);

  useEffect(() => {
    fetchExecutiveSummary()
      .then((data) => setSummary(data))
      .catch((err) => console.error('Failed to load executive summary:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleRegenerate = () => {
    setRegenerating(true);
    setTimeout(() => {
      setRegenerating(false);
      addToast('Executive summary regenerated', 'success');
    }, 2000);
  };

  if (loading) return <LoadingSpinner />;

  const healthScore = typeof summary.healthScore === 'number' ? summary.healthScore : 84;
  const overview = (summary.overview as string) || '';
  const keyFindings = (summary.keyFindings as string[]) || [];
  const strengths = (summary.strengths as string[]) || [];
  const weaknesses = (summary.weaknesses as string[]) || [];
  const risks = (summary.risks as string[]) || [];
  const opportunities = (summary.opportunities as string[]) || [];
  const recommendations = (summary.recommendations as Array<{ action: string; priority: string; timeline: string; owner: string }>) || [];

  return (
    <div className="animate-fade-in max-w-5xl mx-auto">
      <Breadcrumb items={[{ label: 'Executive Summary' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground dark:text-white mb-1">Executive Summary</h1>
          <p className="text-sm text-muted dark:text-slate-400">AI-generated business intelligence report</p>
        </div>
        <button
          onClick={handleRegenerate}
          disabled={regenerating}
          className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-200 active:scale-[0.97] cursor-pointer disabled:opacity-60"
        >
          <RefreshCw size={16} className={regenerating ? 'animate-spin' : ''} />
          {regenerating ? 'Regenerating...' : 'Regenerate'}
        </button>
      </div>

      {/* Health Score + Overview */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-card border border-border dark:border-slate-700 flex flex-col items-center justify-center">
          <HealthScoreGauge score={healthScore} size={180} />
          <p className="text-sm text-muted dark:text-slate-400 mt-4 text-center">Based on financial performance, growth, risk, and market position</p>
        </div>
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-card border border-border dark:border-slate-700">
          <h2 className="text-lg font-bold text-foreground dark:text-white mb-4">Business Overview</h2>
          <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">{overview}</p>
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-foreground dark:text-white mb-3">Key Findings</h3>
            <ul className="space-y-2">
              {keyFindings.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground dark:text-white">
                  <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SWOT */}
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        {/* Strengths */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/30">
              <TrendingUp size={18} className="text-success" />
            </div>
            <h3 className="font-semibold text-foreground dark:text-white">Strengths</h3>
          </div>
          <ul className="space-y-2.5">
            {strengths.map((s: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-slate-400">
                <span className="text-success mt-0.5">•</span> {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-900/30">
              <TrendingDown size={18} className="text-warning" />
            </div>
            <h3 className="font-semibold text-foreground dark:text-white">Weaknesses</h3>
          </div>
          <ul className="space-y-2.5">
            {weaknesses.map((w: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-slate-400">
                <span className="text-warning mt-0.5">•</span> {w}
              </li>
            ))}
          </ul>
        </div>

        {/* Risks */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/30">
              <AlertTriangle size={18} className="text-destructive" />
            </div>
            <h3 className="font-semibold text-foreground dark:text-white">Risks</h3>
          </div>
          <ul className="space-y-2.5">
            {risks.map((r: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-slate-400">
                <span className="text-destructive mt-0.5">•</span> {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Opportunities */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <Lightbulb size={18} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground dark:text-white">Opportunities</h3>
          </div>
          <ul className="space-y-2.5">
            {opportunities.map((o: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-slate-400">
                <span className="text-primary mt-0.5">•</span> {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
        <div className="flex items-center gap-2 mb-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 dark:bg-violet-900/30">
            <Target size={18} className="text-violet-600" />
          </div>
          <h3 className="font-semibold text-foreground dark:text-white">Recommended Actions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border dark:border-slate-700">
                <th className="text-left py-3 px-3 text-xs font-semibold text-muted dark:text-slate-400 uppercase">Action</th>
                <th className="text-left py-3 px-3 text-xs font-semibold text-muted dark:text-slate-400 uppercase">Priority</th>
                <th className="text-left py-3 px-3 text-xs font-semibold text-muted dark:text-slate-400 uppercase">Timeline</th>
                <th className="text-left py-3 px-3 text-xs font-semibold text-muted dark:text-slate-400 uppercase">Owner</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((r, i) => {
                const priorityColors: Record<string, string> = {
                  High: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30',
                  Medium: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30',
                  Low: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30',
                };
                return (
                  <tr key={i} className="border-b border-border dark:border-slate-700 last:border-0 hover:bg-surface dark:hover:bg-slate-700/50 transition-colors">
                    <td className="py-3 px-3 text-foreground dark:text-white">{r.action}</td>
                    <td className="py-3 px-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${priorityColors[r.priority]}`}>{r.priority}</span>
                    </td>
                    <td className="py-3 px-3 text-muted dark:text-slate-400">{r.timeline}</td>
                    <td className="py-3 px-3 text-muted dark:text-slate-400">{r.owner}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
