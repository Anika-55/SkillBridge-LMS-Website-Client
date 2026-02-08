import { Navbar } from '@/components/layout/Navbar'
import React from 'react'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <Navbar />
      {children}
    </div>
  );
}
