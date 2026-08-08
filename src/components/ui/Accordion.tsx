import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <AccordionRow key={i} item={item} />
      ))}
    </div>
  );
}

function AccordionRow({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-surface dark:hover:bg-slate-800 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground dark:text-white pr-4">{item.question}</span>
        <ChevronDown
          size={18}
          className={`text-muted flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted dark:text-slate-400 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}
