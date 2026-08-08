// ============================================================
// DecisionIQ — Mock Data
// Realistic demo data for a fictional SaaS company
// ============================================================

// --- KPI Data ---
export const kpiData = [
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$4,285,000',
    delta: 12.5,
    deltaLabel: 'vs last year',
    icon: 'DollarSign',
    color: '#2563EB',
  },
  {
    id: 'profit',
    label: 'Net Profit',
    value: '$1,128,400',
    delta: 8.3,
    deltaLabel: 'vs last year',
    icon: 'TrendingUp',
    color: '#10B981',
  },
  {
    id: 'expenses',
    label: 'Operating Expenses',
    value: '$2,156,600',
    delta: -3.2,
    deltaLabel: 'vs last year',
    icon: 'CreditCard',
    color: '#F59E0B',
  },
  {
    id: 'customers',
    label: 'Active Customers',
    value: '3,842',
    delta: 15.7,
    deltaLabel: 'vs last year',
    icon: 'Users',
    color: '#8B5CF6',
  },
  {
    id: 'growth',
    label: 'Growth Rate',
    value: '23.8%',
    delta: 5.1,
    deltaLabel: 'vs last year',
    icon: 'Zap',
    color: '#EC4899',
  },
  {
    id: 'health',
    label: 'Business Health Score',
    value: '84/100',
    delta: 4,
    deltaLabel: 'vs last quarter',
    icon: 'Heart',
    color: '#10B981',
  },
];

// --- Monthly Revenue Trend ---
export const revenueTrend = [
  { month: 'Jan', revenue: 280000, profit: 72000, expenses: 178000 },
  { month: 'Feb', revenue: 310000, profit: 85000, expenses: 190000 },
  { month: 'Mar', revenue: 350000, profit: 98000, expenses: 205000 },
  { month: 'Apr', revenue: 330000, profit: 88000, expenses: 198000 },
  { month: 'May', revenue: 370000, profit: 102000, expenses: 215000 },
  { month: 'Jun', revenue: 420000, profit: 125000, expenses: 240000 },
  { month: 'Jul', revenue: 395000, profit: 112000, expenses: 230000 },
  { month: 'Aug', revenue: 380000, profit: 108000, expenses: 225000 },
  { month: 'Sep', revenue: 410000, profit: 120000, expenses: 238000 },
  { month: 'Oct', revenue: 450000, profit: 138000, expenses: 255000 },
  { month: 'Nov', revenue: 430000, profit: 130000, expenses: 248000 },
  { month: 'Dec', revenue: 360000, profit: 95000, expenses: 210000 },
];

// --- Sales by Product ---
export const salesByProduct = [
  { product: 'Enterprise Suite', sales: 1250000, color: '#2563EB' },
  { product: 'Analytics Pro', sales: 980000, color: '#3B82F6' },
  { product: 'Starter Plan', sales: 720000, color: '#60A5FA' },
  { product: 'Add-ons', sales: 450000, color: '#93C5FD' },
  { product: 'Consulting', sales: 885000, color: '#BFDBFE' },
];

// --- Monthly Growth ---
export const monthlyGrowth = [
  { month: 'Jan', growth: 18, target: 15 },
  { month: 'Feb', growth: 22, target: 15 },
  { month: 'Mar', growth: 25, target: 18 },
  { month: 'Apr', growth: 20, target: 18 },
  { month: 'May', growth: 28, target: 20 },
  { month: 'Jun', growth: 32, target: 20 },
  { month: 'Jul', growth: 26, target: 22 },
  { month: 'Aug', growth: 24, target: 22 },
  { month: 'Sep', growth: 30, target: 22 },
  { month: 'Oct', growth: 35, target: 25 },
  { month: 'Nov', growth: 29, target: 25 },
  { month: 'Dec', growth: 19, target: 25 },
];

// --- Regional Sales ---
export const regionalSales = [
  { region: 'North America', sales: 1850000, percentage: 43 },
  { region: 'Europe', sales: 1250000, percentage: 29 },
  { region: 'Asia Pacific', sales: 720000, percentage: 17 },
  { region: 'Latin America', sales: 320000, percentage: 7 },
  { region: 'Middle East & Africa', sales: 145000, percentage: 4 },
];

// --- Customer Growth ---
export const customerGrowth = [
  { month: 'Jan', customers: 2800, churn: 45 },
  { month: 'Feb', customers: 2950, churn: 38 },
  { month: 'Mar', customers: 3120, churn: 42 },
  { month: 'Apr', customers: 3250, churn: 35 },
  { month: 'May', customers: 3400, churn: 40 },
  { month: 'Jun', customers: 3580, churn: 32 },
  { month: 'Jul', customers: 3650, churn: 38 },
  { month: 'Aug', customers: 3720, churn: 30 },
  { month: 'Sep', customers: 3800, churn: 28 },
  { month: 'Oct', customers: 3880, churn: 25 },
  { month: 'Nov', customers: 3920, churn: 22 },
  { month: 'Dec', customers: 3842, churn: 35 },
];

// --- Profit Margin ---
export const profitMargin = [
  { month: 'Jan', margin: 25.7 },
  { month: 'Feb', margin: 27.4 },
  { month: 'Mar', margin: 28.0 },
  { month: 'Apr', margin: 26.7 },
  { month: 'May', margin: 27.6 },
  { month: 'Jun', margin: 29.8 },
  { month: 'Jul', margin: 28.4 },
  { month: 'Aug', margin: 28.4 },
  { month: 'Sep', margin: 29.3 },
  { month: 'Oct', margin: 30.7 },
  { month: 'Nov', margin: 30.2 },
  { month: 'Dec', margin: 26.4 },
];

// --- Recent Activity ---
export const recentActivity = [
  { id: 1, action: 'Monthly report generated', time: '10 minutes ago', user: 'System', icon: 'FileText' },
  { id: 2, action: 'New dataset uploaded: Q4_Sales.csv', time: '2 hours ago', user: 'Sarah Chen', icon: 'Upload' },
  { id: 3, action: 'AI Chat session completed', time: '5 hours ago', user: 'James Wilson', icon: 'MessageSquare' },
  { id: 4, action: 'Executive summary updated', time: '1 day ago', user: 'System', icon: 'FileCheck' },
  { id: 5, action: 'Anomaly detected in North America sales', time: '1 day ago', user: 'System', icon: 'AlertTriangle' },
  { id: 6, action: 'Settings updated: Notification preferences', time: '2 days ago', user: 'Sarah Chen', icon: 'Settings' },
];

// --- Business Alerts ---
export const businessAlerts = [
  { id: 1, type: 'warning' as const, title: 'North America sales anomaly', message: 'Sales dropped 8% below forecast in the Northeast region during Q4. Review market conditions.', time: '1 day ago' },
  { id: 2, type: 'info' as const, title: 'Customer retention improving', message: 'Churn rate decreased to 2.2% this quarter — the lowest in 18 months.', time: '3 days ago' },
  { id: 3, type: 'success' as const, title: 'Enterprise Suite revenue milestone', message: 'Enterprise Suite crossed $1.25M in annual recurring revenue for the first time.', time: '5 days ago' },
  { id: 4, type: 'warning' as const, title: 'Expense ratio trending up', message: 'Operating expenses reached 50.3% of revenue — above the 45% target threshold.', time: '1 week ago' },
];

// --- AI Recommendations ---
export const aiRecommendations = [
  { id: 1, title: 'Expand Enterprise Suite in Europe', description: 'Enterprise Suite shows 34% higher adoption in Europe than other regions. Consider increasing sales team coverage.', impact: 'High', icon: 'Target' },
  { id: 2, title: 'Optimize Q1 pricing strategy', description: 'Historical data shows 12% conversion lift with January promotional pricing. Prepare Q1 campaign.', impact: 'High', icon: 'DollarSign' },
  { id: 3, title: 'Address Northeast region decline', description: 'Northeast region underperforming by 8%. Conduct customer interviews and competitive analysis.', impact: 'Medium', icon: 'MapPin' },
  { id: 4, title: 'Launch customer success program', description: 'At 2.2% churn, a dedicated success program could achieve best-in-class <1.5% retention target.', impact: 'Medium', icon: 'Heart' },
];

// --- Executive Summary Content ---
export const executiveSummary = {
  healthScore: 84,
  overview: 'DecisionIQ demo company demonstrates strong financial performance with $4.29M in annual revenue and 23.8% year-over-year growth. Net profit margins remain healthy at 26.3%, though operating expenses have trended slightly above target. The company serves 3,842 active customers across five global regions, with North America contributing 43% of total revenue.',
  keyFindings: [
    'Revenue grew 23.8% YoY, outpacing the industry average of 18%',
    'Enterprise Suite is the top-performing product with $1.25M in ARR',
    'Customer churn dropped to 2.2% — lowest in 18 months',
    'Operating expenses at 50.3% of revenue exceed the 45% target',
    'Europe shows highest growth potential with 34% Enterprise adoption rate',
  ],
  strengths: [
    'Strong revenue growth trajectory exceeding market benchmarks',
    'High-margin Enterprise Suite driving profitability',
    'Improving customer retention metrics',
    'Diverse geographic revenue mix reducing regional risk',
  ],
  weaknesses: [
    'Operating expenses trending above optimal range',
    'Northeast US region underperforming by 8%',
    'December seasonal dip in growth rate (19% vs 25% target)',
    'Starter Plan shows lower retention than premium tiers',
  ],
  risks: [
    'Market competition intensifying in enterprise analytics segment',
    'Potential economic slowdown affecting Q1 customer acquisition',
    'Single-region concentration risk (43% North America)',
    'Key person dependency in sales leadership',
  ],
  opportunities: [
    'European expansion with localized Enterprise Suite',
    'AI-powered features as premium add-on revenue stream',
    'Strategic partnerships with system integrators',
    'Vertical-specific analytics packages for healthcare and finance',
  ],
  recommendations: [
    { action: 'Launch European sales hub in Q1', priority: 'High', timeline: 'Q1 2025', owner: 'VP Sales' },
    { action: 'Implement cost optimization program', priority: 'High', timeline: 'Immediate', owner: 'CFO' },
    { action: 'Develop AI-powered analytics add-on', priority: 'Medium', timeline: 'Q2 2025', owner: 'CPO' },
    { action: 'Address Northeast region performance', priority: 'Medium', timeline: 'Q1 2025', owner: 'Regional Director' },
    { action: 'Launch customer success initiative', priority: 'Medium', timeline: 'Q1 2025', owner: 'VP Customer Success' },
    { action: 'Explore healthcare vertical', priority: 'Low', timeline: 'Q3 2025', owner: 'Strategy' },
  ],
};

// --- Datasets ---
export const datasets = [
  { id: 1, name: 'Q4_2024_Sales.csv', rows: 1240, columns: 18, uploadDate: '2025-01-15', status: 'Processed' as const, size: '2.4 MB' },
  { id: 2, name: 'Customer_Churn_2024.xlsx', rows: 3842, columns: 22, uploadDate: '2025-01-10', status: 'Processed' as const, size: '5.1 MB' },
  { id: 3, name: 'Marketing_Campaigns_Q4.csv', rows: 560, columns: 14, uploadDate: '2025-01-08', status: 'Processed' as const, size: '1.1 MB' },
  { id: 4, name: 'Product_Usage_Logs.csv', rows: 12800, columns: 8, uploadDate: '2025-01-05', status: 'Processing' as const, size: '18.7 MB' },
  { id: 5, name: 'Employee_Satisfaction_Survey.xlsx', rows: 342, columns: 45, uploadDate: '2024-12-28', status: 'Failed' as const, size: '0.8 MB' },
];

// --- Dataset Preview (sample rows) ---
export const datasetPreviewColumns = ['Date', 'Product', 'Region', 'Revenue', 'Units', 'Customer_ID', 'Segment'];
export const datasetPreviewRows = [
  ['2024-12-15', 'Enterprise Suite', 'North America', '$24,500', '12', 'CUS-2841', 'Enterprise'],
  ['2024-12-15', 'Analytics Pro', 'Europe', '$8,200', '5', 'CUS-1732', 'Mid-Market'],
  ['2024-12-14', 'Starter Plan', 'Asia Pacific', '$1,200', '3', 'CUS-9051', 'SMB'],
  ['2024-12-14', 'Enterprise Suite', 'North America', '$31,000', '15', 'CUS-4421', 'Enterprise'],
  ['2024-12-13', 'Add-ons', 'Europe', '$3,600', '8', 'CUS-1732', 'Mid-Market'],
  ['2024-12-13', 'Consulting', 'Latin America', '$12,000', '1', 'CUS-6612', 'Enterprise'],
  ['2024-12-12', 'Analytics Pro', 'North America', '$7,800', '4', 'CUS-3380', 'Mid-Market'],
  ['2024-12-12', 'Starter Plan', 'Europe', '$950', '2', 'CUS-5519', 'SMB'],
];

// --- Analytics Data ---
export const dataOverview = {
  totalRows: 1240,
  totalColumns: 18,
  missingValues: 47,
  duplicateRows: 12,
  numericColumns: 10,
  categoricalColumns: 6,
  dateColumns: 2,
};

export const columnTypes = [
  { column: 'Date', type: 'Date', missing: 0, unique: 365 },
  { column: 'Product', type: 'Categorical', missing: 3, unique: 5 },
  { column: 'Region', type: 'Categorical', missing: 0, unique: 5 },
  { column: 'Revenue', type: 'Numeric', missing: 5, unique: 980 },
  { column: 'Units', type: 'Numeric', missing: 2, unique: 450 },
  { column: 'Customer_ID', type: 'Categorical', missing: 0, unique: 842 },
  { column: 'Segment', type: 'Categorical', missing: 8, unique: 3 },
  { column: 'Cost', type: 'Numeric', missing: 12, unique: 760 },
  { column: 'Profit', type: 'Numeric', missing: 12, unique: 750 },
  { column: 'Discount', type: 'Numeric', missing: 5, unique: 120 },
];

export const summaryStats = [
  { column: 'Revenue', mean: '$3,456', median: '$2,890', stdDev: '$2,340', min: '$120', max: '$52,000' },
  { column: 'Units', mean: '4.2', median: '3', stdDev: '3.8', min: '1', max: '25' },
  { column: 'Cost', mean: '$1,820', median: '$1,450', stdDev: '$1,340', min: '$60', max: '$28,000' },
  { column: 'Profit', mean: '$1,636', median: '$1,380', stdDev: '$1,180', min: '$45', max: '$24,000' },
  { column: 'Discount', mean: '8.5%', median: '5%', stdDev: '7.2%', min: '0%', max: '35%' },
];

// --- Correlation Matrix ---
export const correlationMatrix = [
  { var1: 'Revenue', var2: 'Units', correlation: 0.92 },
  { var1: 'Revenue', var2: 'Profit', correlation: 0.88 },
  { var1: 'Revenue', var2: 'Discount', correlation: -0.34 },
  { var1: 'Revenue', var2: 'Cost', correlation: 0.78 },
  { var1: 'Units', var2: 'Profit', correlation: 0.85 },
  { var1: 'Units', var2: 'Discount', correlation: -0.28 },
  { var1: 'Units', var2: 'Cost', correlation: 0.72 },
  { var1: 'Profit', var2: 'Discount', correlation: -0.45 },
  { var1: 'Profit', var2: 'Cost', correlation: 0.65 },
  { var1: 'Profit', var2: 'Revenue', correlation: 0.88 },
];

// --- Outlier Detection ---
export const outliers = [
  { id: 1, column: 'Revenue', row: 245, value: '$52,000', zScore: 4.2, reason: 'Unusually high revenue transaction' },
  { id: 2, column: 'Revenue', row: 891, value: '$48,500', zScore: 3.8, reason: 'Large enterprise deal' },
  { id: 3, column: 'Units', row: 112, value: '25', zScore: 4.1, reason: 'Bulk purchase order' },
  { id: 4, column: 'Discount', row: 567, value: '35%', zScore: 3.5, reason: 'Strategic partner discount' },
  { id: 5, column: 'Profit', row: 245, value: '$24,000', zScore: 3.9, reason: 'Correlated with high-revenue outlier' },
  { id: 6, column: 'Cost', row: 723, value: '$28,000', zScore: 3.6, reason: 'Custom implementation cost' },
];

// --- Trend Analysis ---
export const trendAnalysis = [
  { month: 'Jul', actual: 395000, trend: 388000, forecast: 392000 },
  { month: 'Aug', actual: 380000, trend: 392000, forecast: 398000 },
  { month: 'Sep', actual: 410000, trend: 396000, forecast: 404000 },
  { month: 'Oct', actual: 450000, trend: 400000, forecast: 410000 },
  { month: 'Nov', actual: 430000, trend: 404000, forecast: 416000 },
  { month: 'Dec', actual: 360000, trend: 408000, forecast: 422000 },
  { month: 'Jan (F)', actual: null, trend: null, forecast: 428000 },
  { month: 'Feb (F)', actual: null, trend: null, forecast: 440000 },
  { month: 'Mar (F)', actual: null, trend: null, forecast: 455000 },
];

// --- Chat Messages ---
export interface ChatMessage {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const suggestedQuestions = [
  'Why are sales decreasing in December?',
  'Which products should we promote next quarter?',
  'How can we improve the Starter Plan retention?',
  'What actions should management take to reduce expenses?',
  'Which region has the highest growth potential?',
  'Show me the correlation between discounts and profit',
];

export const initialChatMessages: ChatMessage[] = [
  {
    id: 1,
    sender: 'ai',
    text: "Hello! I'm your DecisionIQ AI assistant. I have analyzed your company's data and I'm ready to answer questions about your business performance, trends, and recommendations. What would you like to know?",
    time: 'Just now',
  },
];

export const mockAiResponses: Record<string, string> = {
  'Why are sales decreasing in December?':
    "Based on your data, the December dip (19% growth vs. 25% target) appears to be seasonal rather than structural. Over the past 3 years, December has consistently shown 15-20% lower growth due to:\n\n1. **Holiday slowdown**: Enterprise purchasing cycles pause in mid-December\n2. **Budget exhaustion**: Many clients have depleted annual budgets by Q4 end\n3. **Shorter sales month**: Effective selling days drop ~30% due to holidays\n\n**Recommendation**: Front-load Q4 targets to October-November and set realistic December expectations at 18-20% growth. Your January pipeline already shows recovery to 22% projected growth.",
  'Which products should we promote next quarter?':
    "Analyzing your product performance, here's my recommendation for Q1 priorities:\n\n**🥇 Priority 1: Enterprise Suite** ($1.25M ARR, 34% YoY growth)\n- Highest margin product (72% gross margin)\n- Strong European adoption signals expansion readiness\n\n**🥈 Priority 2: Analytics Pro** ($980K ARR, 22% YoY growth)\n- Mid-market sweet spot with shortest sales cycle (18 days avg)\n- High upsell potential to Enterprise Suite\n\n**🥉 Priority 3: Consulting** ($885K ARR, 28% YoY growth)\n- Drives product adoption and reduces churn\n- Creates stickiness for platform licenses\n\nConsider bundling Analytics Pro + Consulting as a Q1 promotion package.",
  'How can we improve the Starter Plan retention?':
    "The Starter Plan shows a 3.8% monthly churn rate vs. 1.8% for premium tiers. Analysis reveals:\n\n1. **Onboarding gap**: 42% of Starter users never use more than 2 features\n2. **Value realization**: Users who create 3+ reports in first 30 days have 85% lower churn\n3. **Upgrade timing**: The 90-day mark is when successful Starter users naturally upgrade\n\n**Action plan**:\n- Implement guided onboarding with milestone achievements\n- Add in-app prompts after 2nd report: 'Ready for advanced analytics?'\n- Create a 90-day nurture sequence with upgrade incentives\n- Introduce a 'Starter Plus' tier at $49/mo to bridge the gap",
  'What actions should management take to reduce expenses?':
    "Operating expenses at 50.3% of revenue exceed the 45% target by $228K annualized. Here's a data-driven action plan:\n\n**Quick Wins (30 days):**\n- Audit SaaS subscriptions: avg company waste is 30% ($45K savings)\n- Renegotiate cloud infrastructure: reserved instances save 28% ($38K)\n\n**Structural (90 days):**\n- Sales efficiency: cost per acquisition up 15% YoY — review channel mix ($62K)\n- Marketing ROI: content marketing drives 3x pipeline vs paid at half cost — rebalance ($55K)\n\n**Strategic (6 months):**\n- Automate manual reporting processes (saves ~15 hrs/week, $28K)\n- Evaluate office footprint with hybrid work patterns ($variable)\n\nTotal addressable: $228K+ annual savings identified.",
  'Which region has the highest growth potential?':
    "Europe is your #1 growth opportunity. Here's the data:\n\n| Region | Current Rev | YoY Growth | Market Size | TAM Capture |\n|--------|------------|------------|-------------|-------------|\n| Europe | $1.25M | 34% | $12B | 0.01% |\n| Asia Pacific | $720K | 22% | $8B | 0.009% |\n| LatAm | $320K | 18% | $3B | 0.01% |\n\nEurope shows:\n- 34% higher Enterprise Suite adoption than any other region\n- 28% shorter sales cycle for Analytics Pro\n- 92% NPS score (highest globally)\n\n**Recommendation**: Open a European sales hub in Amsterdam or Berlin by Q2, with 3-5 AEs. Projected ROI: 3.2x within 18 months.",
  'Show me the correlation between discounts and profit':
    "The correlation analysis reveals an important strategic insight:\n\n**Discount-Profit Correlation: r = -0.45** (moderate negative)\n\nKey findings:\n- Discounts above 15% reduce profit margins by an average of 8.2 percentage points\n- However, discounts of 5-10% on Enterprise Suite actually **increase** total profit through volume (elasticity > 1.5)\n- The worst-performing discount strategy is 20-25% on Analytics Pro — margin erosion without volume gain\n\n**Strategic recommendation**:\n- Cap standard discounts at 15%\n- Use 5-10% strategic discounts on Enterprise Suite for competitive deals\n- Eliminate 20%+ discounts on mid-tier products\n- Introduce value-based pricing instead of discounting for Analytics Pro",
};

// --- Reports ---
export const reports = [
  { id: 1, title: 'Q4 2024 Executive Summary', date: '2025-01-15', status: 'Ready' as const, pages: 12, type: 'Executive Summary' },
  { id: 2, title: 'Annual Business Review 2024', date: '2025-01-10', status: 'Ready' as const, pages: 24, type: 'Annual Report' },
  { id: 3, title: 'Customer Churn Analysis Q4', date: '2025-01-08', status: 'Ready' as const, pages: 8, type: 'Analytics Report' },
  { id: 4, title: 'Regional Performance Comparison', date: '2025-01-05', status: 'Generating' as const, pages: 15, type: 'Analytics Report' },
  { id: 5, title: 'Product Mix Optimization', date: '2024-12-28', status: 'Ready' as const, pages: 10, type: 'Strategy Report' },
];

// --- FAQ ---
export const faqItems = [
  {
    question: 'What is DecisionIQ?',
    answer: 'DecisionIQ is an AI-powered decision intelligence platform that transforms your business data into actionable insights. It analyzes your data, generates visualizations, produces executive summaries, and lets you chat with an AI that understands your business.',
  },
  {
    question: 'How does DecisionIQ work?',
    answer: 'Simply upload your business data (CSV or Excel), and DecisionIQ automatically analyzes it. Our AI agents work together to profile your data, detect patterns and anomalies, generate charts, and produce a comprehensive executive summary with recommendations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. Your data is encrypted in transit and at rest. We use enterprise-grade security practices. For the MVP, data is stored locally in your browser. In production, data is stored in a secure cloud database with row-level security.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'Currently, DecisionIQ supports CSV (.csv) and Excel (.xlsx, .xls) files. We plan to add support for JSON, Parquet, and direct database connections in future releases.',
  },
  {
    question: 'Can I try DecisionIQ for free?',
    answer: 'Yes! You can get started with DecisionIQ for free. Upload your first dataset and explore all the analytics features. Premium features like advanced AI analysis and unlimited datasets are available on paid plans.',
  },
  {
    question: 'How is DecisionIQ different from traditional BI tools?',
    answer: 'Unlike traditional BI tools that require manual chart creation and analysis, DecisionIQ uses AI to automatically surface insights, detect anomalies, and generate executive-ready summaries. It\'s like having a data analyst, statistician, and executive advisor working for you 24/7.',
  },
];

// --- Pricing ---
export const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'For small teams getting started with data-driven decisions.',
    features: ['Up to 5 datasets', 'Basic analytics', '3 reports/month', 'Email support', 'CSV upload'],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/month',
    description: 'For growing businesses that need advanced analytics and AI insights.',
    features: ['Unlimited datasets', 'Advanced analytics', 'Unlimited reports', 'AI Chat assistant', 'Executive summaries', 'Priority support', 'Excel & CSV upload'],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex data and security requirements.',
    features: ['Everything in Professional', 'Custom integrations', 'SSO & advanced security', 'API access', 'Dedicated support', 'SLA guarantee', 'On-premise option'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

// --- Testimonials ---
export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechVentures Inc.',
    quote: 'DecisionIQ transformed how our leadership team makes decisions. We went from spending weeks on quarterly reviews to having AI-powered insights in minutes.',
    avatar: 'SC',
  },
  {
    name: 'James Wilson',
    role: 'CFO, Meridian Healthcare',
    quote: 'The executive summaries alone are worth it. Our board meetings are now data-driven with actionable recommendations, not just numbers.',
    avatar: 'JW',
  },
  {
    name: 'Maria Rodriguez',
    role: 'VP Operations, GlobalLogix',
    quote: 'We tried Tableau, Power BI, and Looker. DecisionIQ is the only platform that actually tells us what to do with our data, not just show us charts.',
    avatar: 'MR',
  },
];
