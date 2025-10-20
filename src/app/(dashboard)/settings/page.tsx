'use client';

import {
  User,
  Bell,
  Shield,
  Palette,
  Zap,
  Mail,
  Globe,
  Save
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600">
            Manage your account preferences and platform configuration
          </p>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Profile Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Profile Settings</h3>
                  <p className="text-sm text-gray-600">Update your personal information</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Operations Manager"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="manager@company.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                    <option>Operations</option>
                    <option>Finance</option>
                    <option>HR</option>
                    <option>Support</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
                  <p className="text-sm text-gray-600">Choose how you want to be notified</p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Process Approvals</p>
                    <p className="text-sm text-gray-600">Get notified when approvals are required</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-primary" />
                </label>

                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Process Completions</p>
                    <p className="text-sm text-gray-600">Receive updates when processes complete</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-primary" />
                </label>

                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Weekly Reports</p>
                    <p className="text-sm text-gray-600">Get weekly performance summaries</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-primary" />
                </label>

                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">Bottleneck Alerts</p>
                    <p className="text-sm text-gray-600">Alert when processes are delayed</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 text-primary" />
                </label>
              </div>
            </div>

            {/* Integration Settings */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Integrations</h3>
                  <p className="text-sm text-gray-600">Connect with external tools and services</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email System</p>
                      <p className="text-sm text-gray-600">Connected to company@example.com</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Connected
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">Slack Workspace</p>
                      <p className="text-sm text-gray-600">Send notifications to Slack</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 font-medium">
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
