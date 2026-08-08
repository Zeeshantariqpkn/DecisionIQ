import { useState } from 'react';
import {
  Search,
  Bell,
  Menu,
  Sun,
  Moon,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="h-16 bg-white dark:bg-slate-800 border-b border-border dark:border-slate-700 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={20} className="text-muted" />
        </button>
        <div className="hidden sm:flex items-center gap-2 bg-surface dark:bg-slate-700 rounded-lg px-3 py-2 w-64">
          <Search size={16} className="text-muted flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-foreground dark:text-white placeholder:text-muted dark:placeholder:text-slate-500 outline-none w-full"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon size={18} className="text-muted" />
          ) : (
            <Sun size={18} className="text-muted" />
          )}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer relative">
          <Bell size={18} className="text-muted" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-white dark:ring-slate-800" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
              {user?.avatar || 'U'}
            </div>
            <span className="text-sm text-foreground dark:text-white hidden md:block font-medium">
              {user?.name || 'User'}
            </span>
            <ChevronDown size={14} className="text-muted hidden md:block" />
          </button>

          {showProfile && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowProfile(false)} />
              <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-modal z-50 py-1 animate-fade-in">
                <button
                  onClick={() => { navigate('/settings'); setShowProfile(false); }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground dark:text-white hover:bg-surface dark:hover:bg-slate-700 w-full cursor-pointer"
                >
                  <User size={15} /> Profile
                </button>
                <button
                  onClick={() => { navigate('/settings'); setShowProfile(false); }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground dark:text-white hover:bg-surface dark:hover:bg-slate-700 w-full cursor-pointer"
                >
                  <Settings size={15} /> Settings
                </button>
                <hr className="border-border dark:border-slate-700 my-1" />
                <button
                  onClick={() => { logout(); navigate('/login'); setShowProfile(false); }}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-destructive hover:bg-red-50 dark:hover:bg-red-900/20 w-full cursor-pointer"
                >
                  <LogOut size={15} /> Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
