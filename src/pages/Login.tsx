import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Login() {
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('sarah@decisioniq.com');
  const [password, setPassword] = useState('password');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      addToast('Welcome back!', 'success');
      navigate('/dashboard');
    } else {
      addToast('Invalid credentials. Try demo@decisioniq.com / password', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted dark:text-slate-400 hover:text-primary transition-colors mb-8 cursor-pointer">
          <ArrowLeft size={15} /> Back to home
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center justify-center gap-2.5 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-white font-bold text-sm">DI</span>
            </div>
            <span className="font-bold text-foreground dark:text-white text-xl">DecisionIQ</span>
          </div>

          <h1 className="text-2xl font-bold text-foreground dark:text-white text-center mb-1">Welcome back</h1>
          <p className="text-sm text-muted dark:text-slate-400 text-center mb-8">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground dark:text-white mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground dark:text-white mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors pr-10"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-border dark:border-slate-600" />
                <span className="text-muted dark:text-slate-400">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-primary hover:text-primary-dark font-medium">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-muted dark:text-slate-400 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:text-primary-dark font-medium">Sign up</Link>
          </p>
        </div>

        <p className="text-center text-xs text-muted dark:text-slate-500 mt-4">
          Demo: use any email and password to sign in
        </p>
      </div>
    </div>
  );
}
