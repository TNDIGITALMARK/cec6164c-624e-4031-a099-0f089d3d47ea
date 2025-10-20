import { AppSidebar } from '@/components/app-sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AppSidebar />
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
