'use client';

import { notifications } from '@/lib/mock-data';
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
  FileText,
  Check,
  Trash2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const notificationIcons = {
  approval: FileText,
  completion: CheckCircle2,
  alert: AlertTriangle,
  info: Info
};

const notificationColors = {
  approval: 'bg-blue-100 text-blue-600',
  completion: 'bg-green-100 text-green-600',
  alert: 'bg-red-100 text-red-600',
  info: 'bg-gray-100 text-gray-600'
};

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="mt-2 text-gray-600">
                Stay updated on process approvals, completions, and alerts
              </p>
            </div>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <Check className="w-4 h-4" />
              Mark All Read
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-2xl font-bold text-gray-900">{notifications.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Unread</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {notifications.filter(n => !n.read).length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Requires Action</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {notifications.filter(n => n.type === 'approval').length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-200">
            {notifications.map((notification) => {
              const Icon = notificationIcons[notification.type];
              const colorClass = notificationColors[notification.type];
              const timeAgo = new Date(notification.timestamp).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div
                  key={notification.id}
                  className={`p-6 hover:bg-gray-50 transition-colors ${
                    !notification.read ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center shrink-0`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {notification.title}
                            </h3>
                            {!notification.read && (
                              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{notification.message}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-gray-500">{timeAgo}</span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}>
                              {notification.type}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          {notification.actionUrl && (
                            <Link
                              href={notification.actionUrl}
                              className="p-2 text-primary hover:bg-blue-100 rounded-lg transition-colors"
                            >
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          )}
                          <button className="p-2 text-gray-400 hover:bg-gray-100 hover:text-red-600 rounded-lg transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Action Button for Approvals */}
                      {notification.type === 'approval' && notification.actionUrl && (
                        <Link
                          href={notification.actionUrl}
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          Review & Approve
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State (if no notifications) */}
          {notifications.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-600">You're all caught up!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
