'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  GitBranch,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Process Builder', href: '/builder', icon: GitBranch },
  { name: 'Operations Center', href: '/operations', icon: Activity },
  { name: 'Analytics Hub', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings }
];

export function AppSidebar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-lg">FlowMaster</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out',
          'w-64 bg-white border-r border-gray-200',
          'lg:translate-x-0',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center gap-3 px-6 border-b border-gray-200">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">FlowMaster</h1>
              <p className="text-xs text-gray-500">Automation Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                    'text-sm font-medium',
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Notifications Badge */}
          <div className="px-4 py-4 border-t border-gray-200">
            <Link
              href="/notifications"
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Notifications</span>
              </div>
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                2
              </span>
            </Link>
          </div>

          {/* User Info */}
          <div className="px-4 py-4 border-t border-gray-200">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">OM</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Operations Manager
                </p>
                <p className="text-xs text-gray-500 truncate">manager@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
