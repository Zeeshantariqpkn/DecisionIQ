export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'h-5 w-5', md: 'h-8 w-8', lg: 'h-12 w-12' };
  return (
    <div className="flex items-center justify-center py-12">
      <div
        className={`${sizes[size]} border-2 border-primary/20 border-t-primary rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-border dark:border-slate-700 animate-pulse-soft">
      <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-3" />
      <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-3" />
      <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded" />
    </div>
  );
}

export function SkeletonChart() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-border dark:border-slate-700 animate-pulse-soft">
      <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-4" />
      <div className="h-48 bg-slate-100 dark:bg-slate-700 rounded" />
    </div>
  );
}
