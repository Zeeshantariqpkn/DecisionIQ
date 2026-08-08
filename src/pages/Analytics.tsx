import React, { useState, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line,
} from 'recharts';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ChartCard } from '../components/ui/ChartCard';
import { DataTable } from '../components/ui/DataTable';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import {
  fetchAnalysisOverview,
  fetchAnalysisColumns,
  fetchAnalysisSummaryStats,
  fetchAnalysisCorrelations,
  fetchAnalysisOutliers,
  fetchAnalysisTrends,
} from '../services/dataService';

export default function Analytics() {
  const [data, setData] = useState<{
    overview: { total_rows: number; total_columns: number; numeric_columns: number; categorical_columns: number; missing_values: number; duplicate_rows: number; date_columns: number } | null;
    columnTypes: Array<{ column_name: string; type: string; missing: number; unique_count: number }>;
    summaryStats: Array<{ column_name: string; mean: string; median: string; std_dev: string; min: string; max: string }>;
    correlationMatrix: Array<{ var1: string; var2: string; correlation: number }>;
    outliers: Array<{ id: number; column_name: string; row: number; value: string; z_score: number; reason: string }>;
    trendAnalysis: Array<{ month: string; actual: number | null; trend: number | null; forecast: number | null }>;
  }>({
    overview: null,
    columnTypes: [],
    summaryStats: [],
    correlationMatrix: [],
    outliers: [],
    trendAnalysis: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [overview, columnTypes, summaryStats, correlationMatrix, outliers, trendAnalysis] = await Promise.all([
          fetchAnalysisOverview(),
          fetchAnalysisColumns(),
          fetchAnalysisSummaryStats(),
          fetchAnalysisCorrelations(),
          fetchAnalysisOutliers(),
          fetchAnalysisTrends(),
        ]);
        setData({ overview, columnTypes: columnTypes ?? [], summaryStats: summaryStats ?? [], correlationMatrix: correlationMatrix ?? [], outliers: outliers ?? [], trendAnalysis: trendAnalysis ?? [] });
      } catch (err) {
        console.error('Failed to load analytics data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);
  const colTypeColumns = [
    { key: 'column', label: 'Column' },
    { key: 'type', label: 'Type' },
    { key: 'missing', label: 'Missing' },
    { key: 'unique', label: 'Unique Values' },
  ];

  const statColumns = [
    { key: 'column', label: 'Column' },
    { key: 'mean', label: 'Mean' },
    { key: 'median', label: 'Median' },
    { key: 'stdDev', label: 'Std Dev' },
    { key: 'min', label: 'Min' },
    { key: 'max', label: 'Max' },
  ];

  const outlierCols = [
    { key: 'id', label: 'ID' },
    { key: 'column', label: 'Column' },
    { key: 'value', label: 'Value' },
    { key: 'zScore', label: 'Z-Score' },
    { key: 'reason', label: 'Reason' },
  ];

  const getCorrColor = (v: number) => {
    if (v > 0.7) return '#10B981';
    if (v > 0.4) return '#2563EB';
    if (v > 0) return '#94A3B8';
    if (v > -0.4) return '#F59E0B';
    return '#EF4444';
  };

  if (loading) return <LoadingSpinner />;
  if (!data.overview) return <LoadingSpinner />;

  const overview = data.overview;
  const colTypes = data.columnTypes;
  const stats = data.summaryStats;
  const corrMatrix = data.correlationMatrix;
  const outlierData = data.outliers;
  const trends = data.trendAnalysis;

  return (
    <div className="animate-fade-in">
      <Breadcrumb items={[{ label: 'Analytics' }]} />

      {/* Data Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-6">
        {[
          { label: 'Total Rows', value: overview.total_rows.toLocaleString(), color: '#2563EB' },
          { label: 'Columns', value: overview.total_columns, color: '#3B82F6' },
          { label: 'Numeric', value: overview.numeric_columns, color: '#8B5CF6' },
          { label: 'Categorical', value: overview.categorical_columns, color: '#EC4899' },
          { label: 'Missing Values', value: overview.missing_values, color: '#F59E0B' },
          { label: 'Duplicates', value: overview.duplicate_rows, color: '#EF4444' },
          { label: 'Date Columns', value: overview.date_columns, color: '#10B981' },
        ].map((s, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-card border border-border dark:border-slate-700 text-center">
            <div className="text-2xl font-bold text-foreground dark:text-white mb-1">{s.value}</div>
            <div className="text-xs text-muted dark:text-slate-400">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-6">
        {/* Column Types */}
        <ChartCard title="Column Types & Missing Values" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <DataTable columns={colTypeColumns} rows={colTypes.map((c) => ({ column: c.column_name, type: c.type, missing: c.missing, unique: c.unique_count }))} />
        </ChartCard>

        {/* Summary Statistics */}
        <ChartCard title="Summary Statistics" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <DataTable columns={statColumns} rows={stats.map((s) => ({ column: s.column_name, mean: s.mean, median: s.median, stdDev: s.std_dev, min: s.min, max: s.max }))} />
        </ChartCard>
      </div>

      {/* Correlation Matrix */}
      <ChartCard title="Correlation Matrix" className="mb-6" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-[120px_repeat(5,1fr)] gap-1">
              <div />
              {['Revenue', 'Units', 'Profit', 'Discount', 'Cost'].map((h) => (
                <div key={h} className="text-xs font-semibold text-muted dark:text-slate-400 text-center py-1">{h}</div>
              ))}
              {['Revenue', 'Units', 'Profit', 'Discount', 'Cost'].map((row) => (
                <React.Fragment key={row}>
                  <div className="text-xs font-medium text-foreground dark:text-white py-2">{row}</div>
                  {['Revenue', 'Units', 'Profit', 'Discount', 'Cost'].map((col) => {
                    const match = corrMatrix.find((c) =>
                      (c.var1 === row && c.var2 === col) || (c.var1 === col && c.var2 === row)
                    );
                    const val = match ? match.correlation : row === col ? 1 : 0;
                    return (
                      <div
                        key={`${row}-${col}`}
                        className="text-xs font-semibold text-center py-2 rounded"
                        style={{
                          backgroundColor: `${getCorrColor(val)}${row === col ? '20' : '15'}`,
                          color: getCorrColor(val),
                        }}
                      >
                        {val.toFixed(2)}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </ChartCard>

      <div className="grid lg:grid-cols-2 gap-5 mb-6">
        {/* Trend Analysis */}
        <ChartCard title="Trend Analysis & Forecast" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={trends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 11, fill: '#64748B' }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip formatter={(v) => `$${(Number(v) / 1000).toFixed(0)}K`} />
              <Line type="monotone" dataKey="actual" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 3 }} name="Actual" />
              <Line type="monotone" dataKey="forecast" stroke="#F59E0B" strokeWidth={2} strokeDasharray="6 3" dot={{ r: 3 }} name="Forecast" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Outlier Detection */}
        <ChartCard title="Outlier Detection" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <DataTable columns={outlierCols} rows={outlierData.map((o) => ({ ...o }))} />
        </ChartCard>
      </div>
    </div>
  );
}
