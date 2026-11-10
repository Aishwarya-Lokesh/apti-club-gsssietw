import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/lib/store';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'APTI CLUB | Department of Training & Placement, GSSSIETW',
  description: 'Official Placement Preparation, Student Development, Company Interview Experiences, and Chronicle Platform of GSSS Institute of Engineering and Technology for Women, Mysuru.',
  icons: {
    icon: '/assets/apti-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#070417] text-slate-100 flex flex-col antialiased selection:bg-amber-400/30 selection:text-amber-200">
        <StoreProvider>
          <Suspense fallback={<div className="h-20 bg-[#070417]" />}>
            <Navbar />
          </Suspense>
          <div className="flex-1">
            <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-xs text-amber-300">Loading...</div>}>
              {children}
            </Suspense>
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
