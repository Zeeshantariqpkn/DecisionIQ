import { useState, useEffect } from 'react';
import { Upload, FileSpreadsheet, FileText, Trash2, Eye, Search } from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { DataTable } from '../components/ui/DataTable';
import { ChartCard } from '../components/ui/ChartCard';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import {
  fetchDatasets,
  fetchDatasetPreviewColumns,
  deleteDataset,
} from '../services/dataService';
import { useToast } from '../context/ToastContext';

export default function DataSources() {
  const { addToast } = useToast();
  const [datasets, setDatasets] = useState<Array<{ id: number; name: string; rows: number; columns: number; upload_date: string; status: string; size: string }>>([]);
  const [previewColumns, setPreviewColumns] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [dragOver, setDragOver] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [ds, cols] = await Promise.all([
          fetchDatasets(),
          fetchDatasetPreviewColumns(),
        ]);
        setDatasets(ds ?? []);
        setPreviewColumns(cols ? cols.map((c: { column_name: string }) => c.column_name) : []);
      } catch (err) {
        console.error('Failed to load datasets:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleDelete = async (id: number, name: string) => {
    try {
      await deleteDataset(id);
      setDatasets((prev) => prev.filter((d) => d.id !== id));
      addToast(`Dataset "${name}" deleted`, 'success');
    } catch {
      addToast('Failed to delete dataset', 'error');
    }
  };

  const datasetPreviewColumns = previewColumns;

  if (loading) return <LoadingSpinner />;

  const columns = [
    { key: 'name', label: 'Dataset Name' },
    { key: 'rows', label: 'Rows' },
    { key: 'columns', label: 'Columns' },
    { key: 'size', label: 'Size' },
    { key: 'upload_date', label: 'Upload Date' },
    {
      key: 'status',
      label: 'Status',
      render: (value: unknown) => {
        const s = value as string;
        const colors: Record<string, string> = {
          Processed: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
          Processing: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
          Failed: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
        };
        return <span className={`text-xs font-semibold px-2 py-0.5 rounded ${colors[s] || ''}`}>{s}</span>;
      },
    },
    {
      key: 'actions' as string,
      label: '',
      render: (_: unknown, row: Record<string, unknown>) => (
        <div className="flex items-center gap-1">
          <button
            onClick={() => setSelectedDataset(row.id as number)}
            className="p-1.5 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Preview"
          >
            <Eye size={15} className="text-muted" />
          </button>
          <button
            onClick={() => handleDelete(row.id as number, row.name as string)}
            className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
            aria-label="Delete"
          >
            <Trash2 size={15} className="text-destructive" />
          </button>
        </div>
      ),
    },
  ];

  const previewCols = datasetPreviewColumns.map((c) => ({ key: c, label: c }));

  return (
    <div className="animate-fade-in">
      <Breadcrumb items={[{ label: 'Data Sources' }]} />

      {/* Upload Zone */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200 mb-6 cursor-pointer ${
          dragOver
            ? 'border-primary bg-primary/5'
            : 'border-border dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary/50'
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          addToast('File uploaded successfully', 'success');
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Upload size={28} className="text-primary" />
          </div>
          <div>
            <p className="text-foreground dark:text-white font-semibold">Drag and drop your file here</p>
            <p className="text-sm text-muted dark:text-slate-400 mt-1">or click to browse. Supports CSV and Excel (.xlsx, .xls)</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted dark:text-slate-400 bg-surface dark:bg-slate-700 px-3 py-1.5 rounded-lg">
              <FileSpreadsheet size={14} /> CSV
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted dark:text-slate-400 bg-surface dark:bg-slate-700 px-3 py-1.5 rounded-lg">
              <FileText size={14} /> Excel
            </span>
          </div>
        </div>
        <input type="file" accept=".csv,.xlsx,.xls" className="absolute inset-0 opacity-0 cursor-pointer" onChange={() => addToast('File uploaded successfully', 'success')} />
      </div>

      {/* Datasets Table */}
      <ChartCard title="Uploaded Datasets" action={
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-surface dark:bg-slate-700 rounded-lg px-3 py-1.5 text-xs">
            <Search size={13} className="text-muted" />
            <input type="text" placeholder="Filter..." className="bg-transparent outline-none text-foreground dark:text-white w-24" />
          </div>
        </div>
      }>
        <DataTable columns={columns} rows={datasets.map((d) => ({ ...d, actions: '' }))} />
      </ChartCard>

      {/* Preview Panel */}
      {selectedDataset && (
        <div className="mt-6 bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700 animate-slide-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground dark:text-white">
              Preview: {datasets.find((d) => d.id === selectedDataset)?.name}
            </h3>
            <button onClick={() => setSelectedDataset(null)} className="text-xs text-muted hover:text-foreground cursor-pointer">
              Close
            </button>
          </div>
          <div className="text-sm text-muted dark:text-slate-400 text-center py-8">
            Upload a CSV or Excel file to preview its contents here.
          </div>
        </div>
      )}
    </div>
  );
}
