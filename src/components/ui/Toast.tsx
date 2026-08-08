import { useToast as useToastContext } from '../../context/ToastContext';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

export function ToastContainer() {
  const { toasts } = useToastContext();
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

function ToastItem({ toast }: { toast: { id: number; message: string; type: string } }) {
  const icons = {
    success: <CheckCircle size={18} className="text-success" />,
    error: <XCircle size={18} className="text-destructive" />,
    info: <Info size={18} className="text-primary" />,
  };

  const borders = {
    success: 'border-l-success',
    error: 'border-l-destructive',
    info: 'border-l-primary',
  };

  return (
    <div
      className={`bg-white dark:bg-slate-800 border border-border dark:border-slate-700 border-l-4 ${borders[toast.type as keyof typeof borders]} rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 min-w-[300px] animate-slide-in`}
      role="alert"
    >
      {icons[toast.type as keyof typeof icons]}
      <span className="text-sm text-foreground dark:text-white flex-1">{toast.message}</span>
      <button className="text-muted hover:text-foreground cursor-pointer" aria-label="Dismiss">
        <X size={14} />
      </button>
    </div>
  );
}
