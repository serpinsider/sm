'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Define paths that should NOT have the main site header/footer
  const isAppRoute = 
    pathname.startsWith('/provider') ||
    pathname.startsWith('/account') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/dashboard');

  // For app routes (provider dashboard, admin), render without main site chrome
  if (isAppRoute) {
    return <>{children}</>;
  }

  // For main site routes, render with header and footer
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}
