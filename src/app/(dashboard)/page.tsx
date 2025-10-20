'use client';

import { processTemplates, activeProcesses } from '@/lib/mock-data';
import {
  FileText,
  UserPlus,
  MessageSquare,
  ShoppingCart,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Activity
} from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  FileText,
  UserPlus,
  MessageSquare,
  ShoppingCart
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Process Builder Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Design automated workflows and transform complex processes into simple visual flows
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Processes</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">23</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">12%</span>
              <span className="text-gray-600 ml-1">vs last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Time Saved</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">847h</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-600">This month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">94.3%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-green-600 font-medium">2.1%</span>
              <span className="text-gray-600 ml-1">improvement</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Resolution</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">67%</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-600">Faster than manual</span>
            </div>
          </div>
        </div>
      </div>

      {/* Process Templates */}
      <div className="px-6 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Process Templates</h2>
          <p className="mt-1 text-gray-600">
            Start with pre-built workflows or create your own custom automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {processTemplates.map((template) => {
            const Icon = iconMap[template.icon as keyof typeof iconMap];
            return (
              <Link
                key={template.id}
                href={`/builder?template=${template.id}`}
                className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {template.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">{template.description}</p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{template.estimatedTimeSaving}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <Activity className="w-4 h-4" />
                          <span>{template.stepCount} steps</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 py-6 pb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          <p className="mt-1 text-gray-600">Latest updates from your active processes</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-200">
          {activeProcesses.slice(0, 3).map((process) => (
            <Link
              key={process.id}
              href={`/operations?process=${process.id}`}
              className="block p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">{process.name}</h3>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {process.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{process.description}</p>
                  <div className="mt-4 flex items-center gap-6">
                    <div className="text-sm">
                      <span className="text-gray-600">Progress:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        Step {process.metrics.currentStep} of {process.metrics.totalSteps}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Time Saved:</span>
                      <span className="ml-2 font-medium text-green-600">
                        {process.metrics.timeSaved}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
