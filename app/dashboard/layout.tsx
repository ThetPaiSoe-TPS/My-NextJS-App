// app/dashboard/layout.tsx
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export default function DashboardLayout({ sidebar, content }: DashboardLayoutProps) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">{sidebar}</aside>
      <main className="flex-1 p-4">{content}</main>
    </div>
  );
}