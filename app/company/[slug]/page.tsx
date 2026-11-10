import React, { Suspense } from 'react';
import CompanyClientView from './CompanyClientView';

export function generateStaticParams() {
  return [
    { slug: 'deutsche-bank' },
    { slug: 'accenture' },
    { slug: 'infosys' }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center text-amber-300">Loading Company Guide...</div>}>
      <CompanyClientView slug={slug} />
    </Suspense>
  );
}
