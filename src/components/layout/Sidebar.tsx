import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Database,
  BarChart3,
  FileText,
  MessageSquare,
  FileCheck,
  Settings,
  X,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/data-sources', icon: Database, label: 'Data Sources' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/executive-summary', icon: FileText, label: 'Executive Summary' },
  { to: '/ai-chat', icon: MessageSquare, label: 'AI Chat' },
  { to: '/reports', icon: FileCheck, label: 'Reports' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-sidebar dark:bg-slate-800 border-r border-border dark:border-slate-700 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border dark:border-slate-700">
          <NavLink to="/" className="flex items-center gap-2.5" onClick={onClose}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-white font-bold text-sm">DI</span>
            </div>
            <span className="font-bold text-foreground dark:text-white text-lg">DecisionIQ</span>
          </NavLink>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg hover:bg-sidebar-hover dark:hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close sidebar"
          >
            <X size={18} className="text-muted" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-muted dark:text-slate-400 hover:bg-sidebar-hover dark:hover:bg-slate-700 hover:text-foreground dark:hover:text-white'
                    }`
                  }
                >
                  <item.icon size={18} />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border dark:border-slate-700">
          <p className="text-xs text-muted dark:text-slate-500 text-center">
            DecisionIQ v1.0 — Enterprise Preview
          </p>
        </div>
      </aside>
    </>
  );
}
