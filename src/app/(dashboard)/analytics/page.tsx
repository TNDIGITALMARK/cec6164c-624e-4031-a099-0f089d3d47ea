'use client';

import { analyticsData } from '@/lib/mock-data';
import {
  TrendingUp,
  Clock,
  CheckCircle2,
  Activity,
  Download,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function AnalyticsPage() {
  // Transform data for charts
  const trendChartData = analyticsData.trendData.labels.map((label, index) => ({
    month: label,
    timeSaved: analyticsData.trendData.timeSaved[index],
    completionRate: analyticsData.trendData.completionRate[index]
  }));

  const categoryData = [
    { name: 'Finance', value: 45, color: '#3B82F6' },
    { name: 'HR', value: 25, color: '#8B5CF6' },
    { name: 'Support', value: 20, color: '#10B981' },
    { name: 'Operations', value: 10, color: '#F59E0B' }
  ];

  const performanceData = [
    { category: 'Invoice Processing', original: 76.8, automated: 4.5 },
    { category: 'Onboarding', original: 120, automated: 36 },
    { category: 'Support Tickets', original: 45, automated: 2 },
    { category: 'Purchase Orders', original: 64, automated: 8 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Results Analytics Hub</h1>
              <p className="mt-2 text-gray-600">
                Measure impact through time savings, cost reductions, and efficiency gains
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Last 6 Months
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span>10.7%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Monthly Time Saved</p>
            <p className="text-3xl font-bold text-gray-900">{analyticsData.monthlyTimeSaved}h</p>
            <p className="text-xs text-gray-500 mt-2">vs 765h last month</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span>0.8%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Completion Rate</p>
            <p className="text-3xl font-bold text-gray-900">{analyticsData.processCompletionRate}%</p>
            <p className="text-xs text-gray-500 mt-2">vs 93.5% last month</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-green-600">
                <ArrowUp className="w-4 h-4" />
                <span>67%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Avg Resolution Time</p>
            <p className="text-3xl font-bold text-gray-900">{analyticsData.averageResolutionTime}%</p>
            <p className="text-xs text-gray-500 mt-2">Faster than manual</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-gray-600">
                <span className="text-xs">+{analyticsData.completedThisMonth} completed</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Active Processes</p>
            <p className="text-3xl font-bold text-gray-900">{analyticsData.activeProcesses}</p>
            <p className="text-xs text-gray-500 mt-2">Across all categories</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Time Saved Trend */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Time Saved Trend</h3>
              <p className="text-sm text-gray-600">Monthly hours saved through automation</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  stroke="#9ca3af"
                />
                <YAxis
                  tick={{ fill: '#6b7280', fontSize: 12 }}
                  stroke="#9ca3af"
                  label={{ value: 'Hours', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="timeSaved"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Process Distribution */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Process Distribution</h3>
              <p className="text-sm text-gray-600">Active processes by category</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Comparison</h3>
            <p className="text-sm text-gray-600">Manual vs Automated processing times (hours)</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="category"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                stroke="#9ca3af"
              />
              <YAxis
                tick={{ fill: '#6b7280', fontSize: 12 }}
                stroke="#9ca3af"
                label={{ value: 'Hours', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <Legend />
              <Bar dataKey="original" fill="#EF4444" name="Manual Process" radius={[8, 8, 0, 0]} />
              <Bar dataKey="automated" fill="#10B981" name="Automated Process" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Completion Rate Trend */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Completion Rate Trend</h3>
            <p className="text-sm text-gray-600">Process completion rate over time (%)</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                stroke="#9ca3af"
              />
              <YAxis
                domain={[85, 100]}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                stroke="#9ca3af"
                label={{ value: 'Completion Rate (%)', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              />
              <Line
                type="monotone"
                dataKey="completionRate"
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: '#10B981', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ROI Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
            <h4 className="text-sm font-medium opacity-90 mb-2">Total Time Saved (6 Months)</h4>
            <p className="text-4xl font-bold mb-2">4,449h</p>
            <p className="text-sm opacity-90">Equivalent to 556 working days</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
            <h4 className="text-sm font-medium opacity-90 mb-2">Cost Savings Estimate</h4>
            <p className="text-4xl font-bold mb-2">$222,450</p>
            <p className="text-sm opacity-90">Based on avg hourly rate of $50</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <h4 className="text-sm font-medium opacity-90 mb-2">Productivity Increase</h4>
            <p className="text-4xl font-bold mb-2">185%</p>
            <p className="text-sm opacity-90">vs manual processing baseline</p>
          </div>
        </div>
      </div>
    </div>
  );
}
