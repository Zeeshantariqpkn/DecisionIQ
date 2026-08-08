import { supabase } from '../lib/supabase';

// ============================================================
// DecisionIQ — Data Service
// Fetches all business data from Supabase in real time.
// ============================================================

// --- KPI Data ---
export async function fetchKpiData() {
  const { data, error } = await supabase
    .from('kpi_data')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Revenue Trend ---
export async function fetchRevenueTrend() {
  const { data, error } = await supabase
    .from('revenue_trend')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Sales by Product ---
export async function fetchSalesByProduct() {
  const { data, error } = await supabase
    .from('sales_by_product')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Monthly Growth ---
export async function fetchMonthlyGrowth() {
  const { data, error } = await supabase
    .from('monthly_growth')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Regional Sales ---
export async function fetchRegionalSales() {
  const { data, error } = await supabase
    .from('regional_sales')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Customer Growth ---
export async function fetchCustomerGrowth() {
  const { data, error } = await supabase
    .from('customer_growth')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Profit Margin ---
export async function fetchProfitMargin() {
  const { data, error } = await supabase
    .from('profit_margin')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Recent Activity ---
export async function fetchRecentActivity() {
  const { data, error } = await supabase
    .from('recent_activity')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Business Alerts ---
export async function fetchBusinessAlerts() {
  const { data, error } = await supabase
    .from('business_alerts')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- AI Recommendations ---
export async function fetchAiRecommendations() {
  const { data, error } = await supabase
    .from('ai_recommendations')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Executive Summary ---
export async function fetchExecutiveSummary() {
  const { data, error } = await supabase
    .from('executive_summary')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;

  // Convert { section, content } rows into a flat object
  const summary: Record<string, unknown> = {};
  for (const row of data) {
    summary[row.section] = row.content;
  }
  return summary;
}

// --- Datasets (user-specific) ---
export async function fetchDatasets() {
  const { data, error } = await supabase
    .from('datasets')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

export async function deleteDataset(id: number) {
  const { error } = await supabase
    .from('datasets')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// --- Dataset Preview Columns ---
export async function fetchDatasetPreviewColumns() {
  const { data, error } = await supabase
    .from('dataset_preview_columns')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Analysis: Data Overview ---
export async function fetchAnalysisOverview() {
  const { data, error } = await supabase
    .from('analysis_overview')
    .select('*')
    .single();
  if (error) throw error;
  return data;
}

// --- Analysis: Column Types ---
export async function fetchAnalysisColumns() {
  const { data, error } = await supabase
    .from('analysis_columns')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Analysis: Summary Stats ---
export async function fetchAnalysisSummaryStats() {
  const { data, error } = await supabase
    .from('analysis_summary_stats')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Analysis: Correlation Matrix ---
export async function fetchAnalysisCorrelations() {
  const { data, error } = await supabase
    .from('analysis_correlations')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Analysis: Outliers ---
export async function fetchAnalysisOutliers() {
  const { data, error } = await supabase
    .from('analysis_outliers')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Analysis: Trends ---
export async function fetchAnalysisTrends() {
  const { data, error } = await supabase
    .from('analysis_trends')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Chat Suggestions ---
export async function fetchChatSuggestions() {
  const { data, error } = await supabase
    .from('chat_suggestions')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) throw error;
  return data;
}

// --- Chat Messages (user-specific) ---
export async function fetchChatMessages(userId: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('user_id', userId)
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}

export async function saveChatMessage(userId: string, sender: 'user' | 'ai', text: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert({ user_id: userId, sender, text, time: 'Just now' })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteUserChatMessages(userId: string) {
  const { error } = await supabase
    .from('chat_messages')
    .delete()
    .eq('user_id', userId);
  if (error) throw error;
}

// --- Reports ---
export async function fetchReports() {
  const { data, error } = await supabase
    .from('reports')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
}