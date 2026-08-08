import { useState, type ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? '');

  return (
    <div>
      <div className="border-b border-border dark:border-slate-700 mb-6">
        <nav className="flex gap-0 -mb-px" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                active === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted dark:text-slate-400 hover:text-foreground dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div role="tabpanel">{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
}
