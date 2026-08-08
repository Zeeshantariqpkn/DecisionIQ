import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export default function ForgotPassword() {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    addToast('Reset link sent to your email', 'success');
  };

  return (
    <div className="min-h-screen bg-surface dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/login" className="inline-flex items-center gap-1 text-sm text-muted dark:text-slate-400 hover:text-primary transition-colors mb-8 cursor-pointer">
          <ArrowLeft size={15} /> Back to sign in
        </Link>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-card border border-border dark:border-slate-700">
          {!sent ? (
            <>
              <div className="flex items-center justify-center gap-2.5 mb-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <span className="text-white font-bold text-sm">DI</span>
                </div>
                <span className="font-bold text-foreground dark:text-white text-xl">DecisionIQ</span>
              </div>

              <h1 className="text-2xl font-bold text-foreground dark:text-white text-center mb-1">Reset your password</h1>
              <p className="text-sm text-muted dark:text-slate-400 text-center mb-8">Enter your email and we'll send you a reset link.</p>

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
                <button
                  type="submit"
                  className="w-full bg-primary text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary-dark transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 mx-auto mb-4">
                <Mail size={28} className="text-success" />
              </div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white mb-2">Check your email</h1>
              <p className="text-sm text-muted dark:text-slate-400 mb-6">
                We sent a password reset link to <strong className="text-foreground dark:text-white">{email}</strong>.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark font-medium cursor-pointer"
              >
                Return to sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
