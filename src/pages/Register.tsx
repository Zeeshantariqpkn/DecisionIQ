import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

export default function Register() {
  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    addToast('Account created successfully!', 'success');
    navigate('/dashboard');
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

          <h1 className="text-2xl font-bold text-foreground dark:text-white text-center mb-1">Create your account</h1>
          <p className="text-sm text-muted dark:text-slate-400 text-center mb-8">Start your free trial today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground dark:text-white mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="Sarah Chen"
              />
            </div>
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
                  minLength={6}
                  className="w-full px-4 py-2.5 rounded-lg border border-border dark:border-slate-700 bg-white dark:bg-slate-800 text-foreground dark:text-white text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors pr-10"
                  placeholder="Min. 6 characters"
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
            <button
              type="submit"
              className="w-full bg-primary text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-muted dark:text-slate-400 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:text-primary-dark font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
