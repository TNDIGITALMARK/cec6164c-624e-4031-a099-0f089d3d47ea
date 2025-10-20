'use client';

import { activeProcesses } from '@/lib/mock-data';
import {
  Activity,
  Clock,
  CheckCircle2,
  Loader,
  AlertTriangle,
  Filter,
  Search,
  MoreVertical,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';
import { useState } from 'react';

const statusConfig = {
  pending: { icon: Clock, color: 'text-gray-500 bg-gray-100', label: 'Pending' },
  in_progress: { icon: Loader, color: 'text-blue-500 bg-blue-100', label: 'In Progress' },
  completed: { icon: CheckCircle2, color: 'text-green-500 bg-green-100', label: 'Completed' },
  blocked: { icon: AlertTriangle, color: 'text-red-500 bg-red-100', label: 'Blocked' }
};

export default function OperationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProcesses = selectedCategory === 'all'
    ? activeProcesses
    : activeProcesses.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Live Operations Center</h1>
              <p className="mt-2 text-gray-600">
                Real-time monitoring of all active processes with status tracking and analytics
              </p>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Now</p>
              <p className="text-xl font-bold text-gray-900">23</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Awaiting Approval</p>
              <p className="text-xl font-bold text-gray-900">7</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed Today</p>
              <p className="text-xl font-bold text-gray-900">156</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Needs Attention</p>
              <p className="text-xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search processes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('finance')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'finance'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Finance
            </button>
            <button
              onClick={() => setSelectedCategory('hr')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'hr'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              HR
            </button>
            <button
              onClick={() => setSelectedCategory('support')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'support'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Support
            </button>
          </div>
        </div>

        {/* Process List */}
        <div className="space-y-4">
          {filteredProcesses.map((process) => (
            <div
              key={process.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{process.name}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {process.status}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        {process.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{process.description}</p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Original Time</p>
                    <p className="text-sm font-semibold text-gray-900">{process.metrics.originalTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Automated Time</p>
                    <p className="text-sm font-semibold text-gray-900">{process.metrics.automatedTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Time Saved</p>
                    <p className="text-sm font-semibold text-green-600">{process.metrics.timeSaved}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Completion Rate</p>
                    <p className="text-sm font-semibold text-gray-900">{process.metrics.completionRate}%</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Step {process.metrics.currentStep} of {process.metrics.totalSteps}
                    </span>
                    <span className="text-sm text-gray-600">
                      {Math.round((process.metrics.currentStep / process.metrics.totalSteps) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2 transition-all duration-300"
                      style={{
                        width: `${(process.metrics.currentStep / process.metrics.totalSteps) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-2">
                  {process.steps.map((step, index) => {
                    const config = statusConfig[step.status];
                    const Icon = config.icon;

                    return (
                      <div
                        key={step.id}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          step.status === 'in_progress'
                            ? 'bg-blue-50 border border-blue-200'
                            : 'bg-gray-50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg ${config.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{step.name}</p>
                          {step.assignee && (
                            <p className="text-xs text-gray-600">Assigned to: {step.assignee}</p>
                          )}
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
                          {config.label}
                        </span>
                        {step.duration && (
                          <span className="text-xs text-gray-600">{step.duration}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3">
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Pause className="w-4 h-4" />
                    Pause
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
