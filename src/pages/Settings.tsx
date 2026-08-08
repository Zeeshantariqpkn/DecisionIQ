import {
  Puzzle,
  Save,
  Moon,
  Sun,
} from 'lucide-react';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { Tabs } from '../components/ui/Tabs';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Settings() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { addToast } = useToast();

  const tabs = [
    {
      id: 'profile',
      label: 'Profile',
      content: (
        <div className="max-w-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
              {user?.avatar || 'U'}
            </div>
            <div>
              <h3 className="font-semibold text-foreground dark:text-white">{user?.name || 'User'}</h3>
              <p className="text-sm text-muted dark:text-slate-400">{user?.email || 'user@example.com'}</p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); addToast('Profile updated', 'success'); }}>
            {[
              { label: 'Full Name', value: user?.name || 'Sarah Chen' },
              { label: 'Email', value: user?.email || 'sarah@decisioniq.com', type: 'email' },
              { label: 'Job Title', value: 'Chief Executive Officer' },
            ].map((f, i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-foreground dark:text-white mb-1.5">{f.label}</label>
                <input
                  type={f.type || 'text'}
                  defaultValue={f.value}
                  className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            ))}
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-200 active:scale-[0.97] cursor-pointer"
            >
              <Save size={15} /> Save Changes
            </button>
          </form>
        </div>
      ),
    },
    {
      id: 'organization',
      label: 'Organization',
      content: (
        <div className="max-w-lg">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); addToast('Organization updated', 'success'); }}>
            {[
              { label: 'Company Name', value: 'DecisionIQ Demo Co.' },
              { label: 'Industry', value: 'Technology / SaaS' },
              { label: 'Company Size', value: '51-200 employees' },
              { label: 'Website', value: 'https://decisioniq.com', type: 'url' },
            ].map((f, i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-foreground dark:text-white mb-1.5">{f.label}</label>
                <input
                  type={f.type || 'text'}
                  defaultValue={f.value}
                  className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            ))}
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-200 active:scale-[0.97] cursor-pointer"
            >
              <Save size={15} /> Save Changes
            </button>
          </form>
        </div>
      ),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      content: (
        <div className="max-w-lg space-y-4">
          {[
            { label: 'Weekly summary email', desc: 'Receive a weekly executive summary by email', defaultChecked: true },
            { label: 'Alert notifications', desc: 'Get notified about business anomalies and alerts', defaultChecked: true },
            { label: 'Report generation', desc: 'Notify when AI-generated reports are ready', defaultChecked: true },
            { label: 'Product updates', desc: 'Updates about new features and improvements', defaultChecked: false },
            { label: 'Marketing emails', desc: 'Tips, guides, and best practices', defaultChecked: false },
          ].map((n, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border dark:border-slate-700 last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground dark:text-white">{n.label}</p>
                <p className="text-xs text-muted dark:text-slate-400">{n.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked={n.defaultChecked} className="sr-only peer" />
                <div className="w-9 h-5 bg-slate-200 dark:bg-slate-600 peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all" />
              </label>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 'integrations',
      label: 'Integrations',
      content: (
        <div className="max-w-lg">
          <p className="text-sm text-muted dark:text-slate-400 mb-5">Connect DecisionIQ with your existing tools and services.</p>
          <div className="space-y-3">
            {[
              { name: 'AI/ML API', desc: 'Connect your AI/ML API key for AI-powered analysis', connected: false, icon: Puzzle },
              { name: 'Slack', desc: 'Receive reports and alerts directly in Slack', connected: false, icon: Puzzle },
              { name: 'Salesforce', desc: 'Sync customer data with your CRM', connected: false, icon: Puzzle },
              { name: 'Google Sheets', desc: 'Import data directly from Google Sheets', connected: true, icon: Puzzle },
            ].map((int, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface dark:bg-slate-700">
                    <int.icon size={18} className="text-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground dark:text-white">{int.name}</p>
                    <p className="text-xs text-muted dark:text-slate-400">{int.desc}</p>
                  </div>
                </div>
                <button
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    int.connected
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {int.connected ? 'Connected' : 'Connect'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'appearance',
      label: 'Appearance',
      content: (
        <div className="max-w-lg space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground dark:text-white">Dark Mode</p>
              <p className="text-xs text-muted dark:text-slate-400">Toggle between light and dark theme</p>
            </div>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 p-2 rounded-lg border border-border dark:border-slate-700 hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {theme === 'light' ? <Moon size={18} className="text-muted" /> : <Sun size={18} className="text-warning" />}
              <span className="text-sm text-foreground dark:text-white">{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground dark:text-white mb-2">Font Size</p>
            <div className="flex items-center gap-2">
              {['Small', 'Medium', 'Large'].map((size, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                    i === 1
                      ? 'bg-primary text-white'
                      : 'bg-surface dark:bg-slate-700 text-foreground dark:text-white border border-border dark:border-slate-600 hover:border-primary'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <Breadcrumb items={[{ label: 'Settings' }]} />
      <h1 className="text-2xl font-bold text-foreground dark:text-white mb-6">Settings</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}
