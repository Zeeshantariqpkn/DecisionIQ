import { useState, useEffect } from 'react';
import {
  DollarSign,
  TrendingUp,
  CreditCard,
  Users,
  Zap,
  Heart,
  MoreHorizontal,
  ArrowRight,
  FileText,
  Clock,
  Upload,
  MessageSquare,
  FileCheck,
  AlertTriangle,
  Settings,
  Target,
  MapPin,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { KpiCard } from '../components/ui/KpiCard';
import { ChartCard } from '../components/ui/ChartCard';
import { RecommendationCard } from '../components/ui/RecommendationCard';
import { AlertCard } from '../components/ui/AlertCard';
import { Breadcrumb } from '../components/ui/Breadcrumb';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import {
  fetchKpiData,
  fetchRevenueTrend,
  fetchSalesByProduct,
  fetchMonthlyGrowth,
  fetchRegionalSales,
  fetchCustomerGrowth,
  fetchProfitMargin,
  fetchRecentActivity,
  fetchBusinessAlerts,
  fetchAiRecommendations,
} from '../services/dataService';
import { Link } from 'react-router-dom';

const kpiIcons: Record<string, React.ReactNode> = {
  DollarSign: <DollarSign size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  CreditCard: <CreditCard size={20} />,
  Users: <Users size={20} />,
  Zap: <Zap size={20} />,
  Heart: <Heart size={20} />,
};

const REGION_COLORS = ['#2563EB', '#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE'];

const activityIcons: Record<string, React.ReactNode> = {
  FileText: <FileText size={14} />,
  Upload: <Upload size={14} />,
  MessageSquare: <MessageSquare size={14} />,
  FileCheck: <FileCheck size={14} />,
  AlertTriangle: <AlertTriangle size={14} />,
  Settings: <Settings size={14} />,
};

const recIconMap: Record<string, LucideIcon> = {
  Target,
  DollarSign,
  MapPin,
  Heart,
};

function formatCurrency(v: number) {
  return `$${(v / 1000).toFixed(0)}K`;
}

export default function Dashboard() {
  const [data, setData] = useState({
    kpiData: [] as Array<{ id: string; label: string; value: string; delta: number; deltaLabel: string; icon: string; color: string }>,
    revenueTrend: [] as Array<{ month: string; revenue: number; profit: number; expenses: number }>,
    salesByProduct: [] as Array<{ product: string; sales: number; color: string }>,
    monthlyGrowth: [] as Array<{ month: string; growth: number; target: number }>,
    regionalSales: [] as Array<{ region: string; sales: number; percentage: number }>,
    customerGrowth: [] as Array<{ month: string; customers: number; churn: number }>,
    profitMargin: [] as Array<{ month: string; margin: number }>,
    recentActivity: [] as Array<{ id: number; action: string; time: string; user: string; icon: string }>,
    businessAlerts: [] as Array<{ id: number; type: 'warning' | 'info' | 'success' | 'error'; title: string; message: string; time: string }>,
    aiRecommendations: [] as Array<{ id: number; title: string; description: string; impact: string; icon: string }>,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          kpiData,
          revenueTrend,
          salesByProduct,
          monthlyGrowth,
          regionalSales,
          customerGrowth,
          profitMargin,
          recentActivity,
          businessAlerts,
          aiRecommendations,
        ] = await Promise.all([
          fetchKpiData(),
          fetchRevenueTrend(),
          fetchSalesByProduct(),
          fetchMonthlyGrowth(),
          fetchRegionalSales(),
          fetchCustomerGrowth(),
          fetchProfitMargin(),
          fetchRecentActivity(),
          fetchBusinessAlerts(),
          fetchAiRecommendations(),
        ]);
        setData({
          kpiData: kpiData ?? [],
          revenueTrend: revenueTrend ?? [],
          salesByProduct: salesByProduct ?? [],
          monthlyGrowth: monthlyGrowth ?? [],
          regionalSales: regionalSales ?? [],
          customerGrowth: customerGrowth ?? [],
          profitMargin: profitMargin ?? [],
          recentActivity: recentActivity ?? [],
          businessAlerts: businessAlerts ?? [],
          aiRecommendations: aiRecommendations ?? [],
        });
      } catch (err) {
        console.error('Failed to load dashboard data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="animate-fade-in">
      <Breadcrumb items={[{ label: 'Dashboard' }]} />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        {data.kpiData.map((kpi) => (
          <KpiCard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            delta={kpi.delta}
            deltaLabel={kpi.deltaLabel}
            icon={kpiIcons[kpi.icon]}
            color={kpi.color}
          />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-5 mb-6">
        {/* Revenue Trend */}
        <ChartCard title="Revenue & Profit Trend" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={data.revenueTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={formatCurrency} />
              <Tooltip formatter={(v) => formatCurrency(Number(v))} />
              <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="profit" stroke="#10B981" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Sales by Product */}
        <ChartCard title="Sales by Product" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.salesByProduct} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis type="number" tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={formatCurrency} />
              <YAxis type="category" dataKey="product" tick={{ fontSize: 12, fill: '#64748B' }} width={110} />
              <Tooltip formatter={(v) => formatCurrency(Number(v))} />
              <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
                {data.salesByProduct.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Monthly Growth */}
        <ChartCard title="Monthly Growth Rate" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data.monthlyGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v) => `${Number(v)}%`} />
              <Area type="monotone" dataKey="growth" stroke="#8B5CF6" fill="#8B5CF620" strokeWidth={2} />
              <Line type="monotone" dataKey="target" stroke="#94A3B8" strokeDasharray="5 5" strokeWidth={1.5} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Regional Sales */}
        <ChartCard title="Regional Sales Distribution" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={data.regionalSales} dataKey="sales" nameKey="region" cx="50%" cy="50%" outerRadius={100} label={(props: any) => `${props.payload.region} ${props.payload.percentage}%`}>
                {data.regionalSales.map((_, i) => (
                  <Cell key={i} fill={REGION_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip formatter={(v) => formatCurrency(Number(v))} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Customer Growth */}
        <ChartCard title="Customer Growth" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={data.customerGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} />
              <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
              <Tooltip />
              <Line type="monotone" dataKey="customers" stroke="#EC4899" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Profit Margin */}
        <ChartCard title="Profit Margin %" action={<MoreHorizontal size={16} className="text-muted cursor-pointer" />}>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data.profitMargin}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} />
              <YAxis domain={[20, 35]} tick={{ fontSize: 12, fill: '#64748B' }} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v) => `${Number(v)}%`} />
              <Area type="monotone" dataKey="margin" stroke="#10B981" fill="#10B98120" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Bottom Widgets */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Executive Summary Preview */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground dark:text-white">Executive Summary</h3>
            <Link to="/executive-summary" className="text-xs text-primary hover:text-primary-dark flex items-center gap-1 cursor-pointer">
              View Full Report <ArrowRight size={12} />
            </Link>
          </div>
          <p className="text-sm text-muted dark:text-slate-400 leading-relaxed mb-4">
            DecisionIQ demo company demonstrates strong financial performance with $4.29M in annual revenue and 23.8% year-over-year growth. Net profit margins remain healthy at 26.3%.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-success font-semibold">
              <TrendingUp size={14} /> Revenue +23.8%
            </span>
            <span className="flex items-center gap-1.5 text-success font-semibold">
              <Users size={14} /> Customers +15.7%
            </span>
            <span className="flex items-center gap-1.5 text-foreground dark:text-white font-semibold">
              <Heart size={14} /> Health 84/100
            </span>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground dark:text-white">AI Recommendations</h3>
            <MoreHorizontal size={16} className="text-muted cursor-pointer" />
          </div>
          <div className="space-y-1">
            {data.aiRecommendations.slice(0, 3).map((rec) => {
              const IconComponent = recIconMap[rec.icon] || Target;
              return (
                <RecommendationCard
                  key={rec.id}
                  title={rec.title}
                  description={rec.description}
                  impact={rec.impact}
                  icon={IconComponent}
                />
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <h3 className="text-sm font-semibold text-foreground dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {data.recentActivity.map((a) => (
              <div key={a.id} className="flex items-start gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface dark:bg-slate-700 flex-shrink-0">
                  <span className="text-muted">{activityIcons[a.icon]}</span>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground dark:text-white">{a.action}</p>
                  <p className="text-xs text-muted dark:text-slate-500">
                    {a.user} · <Clock size={10} className="inline" /> {a.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Alerts */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-card border border-border dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground dark:text-white">Business Alerts</h3>
            <MoreHorizontal size={16} className="text-muted cursor-pointer" />
          </div>
          <div className="space-y-3">
            {data.businessAlerts.map((a) => (
              <AlertCard key={a.id} type={a.type} title={a.title} message={a.message} time={a.time} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
