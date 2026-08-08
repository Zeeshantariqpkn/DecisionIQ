interface Column {
  key: string;
  label: string;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  rows: Record<string, unknown>[];
}

export function DataTable({ columns, rows }: DataTableProps) {
  if (rows.length === 0) {
    return (
      <div className="text-center py-12 text-muted dark:text-slate-400">
        <p className="text-sm">No data available</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border dark:border-slate-700">
            {columns.map((col) => (
              <th
                key={col.key}
                className="text-left py-3 px-4 font-semibold text-muted dark:text-slate-400 text-xs uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-border dark:border-slate-700 last:border-0 hover:bg-surface dark:hover:bg-slate-700/50 transition-colors"
            >
              {columns.map((col) => (
                <td key={col.key} className="py-3 px-4 text-foreground dark:text-slate-200">
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
