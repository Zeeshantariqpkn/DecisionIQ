import { User, Bot } from 'lucide-react';

interface ChatBubbleProps {
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export function ChatBubble({ sender, text, time }: ChatBubbleProps) {
  const isUser = sender === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full flex-shrink-0 ${
          isUser ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
        }`}
      >
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>
      <div className={`max-w-[75%] ${isUser ? 'text-right' : ''}`}>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isUser
              ? 'bg-primary text-white rounded-tr-md'
              : 'bg-surface dark:bg-slate-700 text-foreground dark:text-white rounded-tl-md'
          }`}
        >
          {text.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < text.split('\n').length - 1 && <br />}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-muted dark:text-slate-500 mt-1 block">{time}</span>
      </div>
    </div>
  );
}
