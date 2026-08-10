import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Upload,
  BarChart3,
  FileText,
  MessageSquare,
  Brain,
  Shield,
  Zap,
  TrendingUp,
  Target,
  Database,
  LineChart,
  ChevronRight,
  Check,
  Star,
  Mail,
  MapPin,
} from 'lucide-react';
import { Accordion } from '../components/ui/Accordion';
import { faqItems, pricingPlans, testimonials } from '../data/mockData';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-border dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-white font-bold text-sm">DI</span>
              </div>
              <span className="font-bold text-foreground dark:text-white text-lg">DecisionIQ</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted dark:text-slate-400 hover:text-foreground dark:hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-muted dark:text-slate-400 hover:text-foreground dark:hover:text-white transition-colors">How It Works</a>
              <a href="#pricing" className="text-sm text-muted dark:text-slate-400 hover:text-foreground dark:hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-sm text-muted dark:text-slate-400 hover:text-foreground dark:hover:text-white transition-colors">FAQ</a>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden sm:inline-flex text-sm font-medium text-foreground dark:text-white hover:text-primary transition-colors cursor-pointer"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-200 active:scale-[0.97] cursor-pointer"
              >
                Get Started <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Zap size={14} /> AI-Powered Decision Intelligence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground dark:text-white tracking-tight mb-6">
            Transform Data into
            <br />
            <span className="text-primary">Confident Decisions</span>
          </h1>
          <p className="text-lg text-muted dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            AI Decision Intelligence Platform that transforms business data into strategic decisions.
            Upload your data and get instant analysis, visualizations, and AI-powered recommendations.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-all duration-200 active:scale-[0.97] cursor-pointer shadow-lg shadow-primary/25"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
            <button className="inline-flex items-center gap-2 bg-surface dark:bg-slate-800 text-foreground dark:text-white font-semibold px-6 py-3 rounded-xl border border-border dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer">
              <Play size={18} className="text-primary" /> Watch Demo
            </button>
          </div>
          <p className="text-xs text-muted dark:text-slate-500 mt-4">No credit card required · Free trial · Cancel anytime</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-surface dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">Everything You Need to Make Data-Driven Decisions</h2>
            <p className="text-muted dark:text-slate-400 max-w-xl mx-auto">From data upload to executive summary — DecisionIQ automates the entire analytics pipeline.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Upload, title: 'Data Upload', desc: 'Drag and drop CSV or Excel files. DecisionIQ auto-detects columns, types, and validates data quality.' },
              { icon: BarChart3, title: 'Advanced Analytics', desc: 'Automatic statistical analysis, correlation detection, outlier identification, and trend forecasting.' },
              { icon: Brain, title: 'AI-Powered Insights', desc: 'Five specialized AI agents work together to analyze your data and generate actionable insights.' },
              { icon: FileText, title: 'Executive Summaries', desc: 'Professional reports with SWOT analysis, recommendations, and business health scoring.' },
              { icon: MessageSquare, title: 'AI Chat Assistant', desc: 'Ask questions about your data in plain English and get instant, data-grounded answers.' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption, role-based access, and SOC 2 compliance. Your data stays private.' },
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border dark:border-slate-700 hover:shadow-card-hover transition-all duration-200 cursor-pointer group">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <f.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">How DecisionIQ Works</h2>
            <p className="text-muted dark:text-slate-400">Three simple steps from raw data to strategic decisions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Upload, title: 'Upload Your Data', desc: 'Drop your CSV or Excel file. DecisionIQ automatically profiles and validates your data.' },
              { step: '02', icon: Brain, title: 'AI Analyzes Everything', desc: 'Our AI agents work together to find patterns, correlations, anomalies, and trends.' },
              { step: '03', icon: FileText, title: 'Get Actionable Insights', desc: 'Receive an executive summary, recommendations, and a business health score in minutes.' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold mx-auto mb-4">{s.step}</div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-muted dark:text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-20 px-4 bg-surface dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">Powered by Specialized AI Agents</h2>
            <p className="text-muted dark:text-slate-400 max-w-xl mx-auto">Five AI agents work in concert to deliver comprehensive business intelligence.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Database, name: 'Data Engineer', desc: 'Validates and profiles your data automatically' },
              { icon: TrendingUp, name: 'Business Analyst', desc: 'Identifies trends, patterns, and KPIs' },
              { icon: LineChart, name: 'Statistician', desc: 'Computes correlations and detects outliers' },
              { icon: Target, name: 'Market Intelligence', desc: 'Benchmarks against industry standards' },
              { icon: Brain, name: 'Executive Advisor', desc: 'Generates strategic recommendations' },
            ].map((a, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-border dark:border-slate-700 text-center hover:shadow-card-hover transition-all duration-200 cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-3">
                  <a.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground dark:text-white mb-1">{a.name}</h4>
                <p className="text-xs text-muted dark:text-slate-400">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground dark:text-white mb-6">Why Choose DecisionIQ?</h2>
              <div className="space-y-4">
                {[
                  'AI-powered insights, not just charts and dashboards',
                  'Go from raw data to executive summary in minutes',
                  'Five specialized AI agents working together',
                  'Enterprise-grade security and privacy',
                  'Designed for business leaders, not data scientists',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-success flex-shrink-0" />
                    <span className="text-foreground dark:text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '5', label: 'AI Agents' },
                { value: '10x', label: 'Faster Decisions' },
                { value: '84%', label: 'Accuracy Rate' },
                { value: '24/7', label: 'Availability' },
              ].map((stat, i) => (
                <div key={i} className="bg-surface dark:bg-slate-800 rounded-xl p-6 text-center border border-border dark:border-slate-700">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-surface dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">Trusted by Business Leaders</h2>
          <p className="text-muted dark:text-slate-400 mb-12">See what executives are saying about DecisionIQ.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-border dark:border-slate-700 text-left">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-warning fill-warning" />
                  ))}
                </div>
                <p className="text-sm text-foreground dark:text-white leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground dark:text-white">{t.name}</div>
                    <div className="text-xs text-muted dark:text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted dark:text-slate-400">Choose the plan that fits your organization.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border-2 transition-all duration-200 ${
                  p.highlighted
                    ? 'border-primary bg-white dark:bg-slate-800 shadow-xl scale-[1.02]'
                    : 'border-border dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg'
                }`}
              >
                {p.highlighted && (
                  <span className="inline-block bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-1">{p.name}</h3>
                <p className="text-xs text-muted dark:text-slate-400 mb-4">{p.description}</p>
                <div className="mb-5">
                  <span className="text-3xl font-extrabold text-foreground dark:text-white">{p.price}</span>
                  <span className="text-muted dark:text-slate-400 text-sm">{p.period}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground dark:text-white">
                      <Check size={14} className="text-success flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 active:scale-[0.97] ${
                    p.highlighted
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : 'bg-surface dark:bg-slate-700 text-foreground dark:text-white border border-border dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600'
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-surface dark:bg-slate-800">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-primary rounded-2xl p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Data into Decisions?</h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">Join thousands of business leaders using DecisionIQ to make smarter, faster decisions.</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200 cursor-pointer active:scale-[0.97]"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold px-6 py-3 cursor-pointer transition-colors"
            >
              Sign In <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with navigation links */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Quick Links */}
            <div>
              <nav className="flex flex-col sm:flex-row gap-4">
                <Link to="/login" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Sign In
                </Link>
                <Link to="/register" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Sign Up
                </Link>
                <Link to="/dashboard" className="text-sm text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
                  Dashboard
                </Link>
                <Link to="/reports" className="text-sm text-slate-400 hover:text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Reports
                </Link>
                <Link to="/analytics" className="text-sm text-slate-400 hover:text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Analytics
                </Link>
                <Link to="/settings" className="text-sm text-slate-400 hover:text-slate-400 hover:text-white transition-colors cursor-pointer">
                  Settings
                </Link>
              </nav>
            </div>
            {/* Product Details */}
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-1">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">© 2025 DecisionIQ. All rights reserved.</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin size={14} /> San Francisco, CA
              <span className="mx-1">·</span>
              <Mail size={14} /> hello@decisioniq.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
