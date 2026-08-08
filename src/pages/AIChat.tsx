import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, RefreshCw, BrainCircuit, Wrench } from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { ChatBubble } from '../components/ui/ChatBubble';
import { supabase } from '../lib/supabase';
import {
  initialChatMessages,
  suggestedQuestions,
  mockAiResponses,
  type ChatMessage,
} from '../data/mockData';

type LiveMode = 'checking' | 'live' | 'demo';

export default function AIChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChatMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [liveMode, setLiveMode] = useState<LiveMode>('checking');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(10);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = { id: nextIdRef.current++, sender: 'user', text, time: 'Just now' };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setIsTyping(true);

    try {
      // Convert chat history to OpenAI message format
      const payload = history.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

      const { data, error } = await supabase.functions.invoke('ml-chat', {
        body: { messages: payload },
      });

      if (error) throw error;
      if (!data?.reply) throw new Error('Empty reply from ML API');

      setLiveMode('live');
      setMessages((prev) => [
        ...prev,
        { id: nextIdRef.current++, sender: 'ai', text: data.reply, time: 'Just now' },
      ]);
    } catch {
      // Fall back to curated demo responses when the live API isn't reachable
      // (e.g. OPENAI_API_KEY not configured yet).
      setLiveMode('demo');
      const response = mockAiResponses[text] || generateFallbackResponse(text);
      setMessages((prev) => [
        ...prev,
        { id: nextIdRef.current++, sender: 'ai', text: response, time: 'Just now' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <div className="animate-fade-in max-w-3xl mx-auto flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between">
        <Breadcrumb items={[{ label: 'AI Chat' }]} />
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors ${
            liveMode === 'live'
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : liveMode === 'demo'
                ? 'bg-amber-50 text-amber-700 border-amber-200'
                : 'bg-slate-50 text-slate-500 border-slate-200'
          }`}
        >
          {liveMode === 'live' ? (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
              Live AI
            </>
          ) : liveMode === 'demo' ? (
            <>
              <Wrench size={12} />
              Demo mode
            </>
          ) : (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-pulse-soft" />
              Connecting…
            </>
          )}
        </span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4">
        {messages.map((msg) => (
          <ChatBubble key={msg.id} sender={msg.sender} text={msg.text} time={msg.time} />
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 pl-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700">
              <Sparkles size={14} className="text-slate-500" />
            </div>
            <div className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-tl-md bg-surface dark:bg-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 1 && (
        <div className="mb-4">
          <p className="text-xs text-muted dark:text-slate-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSend(q)}
                className="text-xs bg-surface dark:bg-slate-700 text-foreground dark:text-white px-3 py-1.5 rounded-full border border-border dark:border-slate-600 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-border dark:border-slate-700 p-3 flex items-end gap-3">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about your business data..."
          rows={1}
          className="flex-1 bg-transparent text-sm text-foreground dark:text-white placeholder:text-muted dark:placeholder:text-slate-500 outline-none resize-none py-2 max-h-32"
        />
        <button
          onClick={() => handleSend(input)}
          disabled={!input.trim() || isTyping}
          className="p-2.5 rounded-lg bg-primary text-white hover:bg-primary-dark transition-all duration-200 active:scale-[0.95] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
        {messages.length > 1 && (
          <button
            onClick={() => setMessages(initialChatMessages)}
            className="p-2.5 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer flex-shrink-0"
            aria-label="Reset chat"
          >
            <RefreshCw size={16} className="text-muted" />
          </button>
        )}
      </div>

      {liveMode === 'demo' && (
        <p className="mt-3 text-center text-xs text-muted dark:text-slate-500 flex items-center justify-center gap-1.5">
          <BrainCircuit size={12} />
          Live AI isn't configured yet — showing demo responses. Add your OpenAI key to go live.
        </p>
      )}
    </div>
  );
}

function generateFallbackResponse(query: string): string {
  const fallbacks = [
    `Based on your data, "${query}" is an excellent question. Here's what the analysis shows:\n\n- Current trends indicate a 12% improvement opportunity\n- Your top-performing segment shows 23% higher margins\n- Competitive benchmarks suggest targeting the mid-market segment\n\nWould you like me to dive deeper into any specific area?`,
    `Great question about "${query}". Looking at your data:\n\n1. The key metric to watch is customer acquisition cost, which has improved 8% QoQ\n2. Revenue per customer is trending upward at 5% annually\n3. Your retention metrics are above industry average at 78%\n\nI recommend focusing on the Enterprise segment for Q1 growth initiatives.`,
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
