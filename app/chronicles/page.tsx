'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Maximize2, 
  X,
  FileText,
  Calendar,
  Layers
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { ChronicleItem } from '@/types';

export default function ChroniclesPage() {
  const { chronicles } = useStore();
  const [activePdfModal, setActivePdfModal] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const featuredChronicle = chronicles[0] || null;

  const filteredChronicles = selectedYear === 'all'
    ? chronicles
    : chronicles.filter(c => c.publishedAt.includes(selectedYear) || c.academicYear.includes(selectedYear));

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-purple-300/80">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Chronicles Archive</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>APTI CLUB Official Publications • 5 Years Archive</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              Career Catalyst &amp; Chronicle Archive
            </h1>

            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-light">
              Explore 5 years of verified campus placement experiences, interview questions, aptitude shortcut banks, and technical roadmaps compiled by APTI CLUB GSSSIETW from 2022 to 2026.
            </p>

            {/* Year Filters */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setSelectedYear('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedYear === 'all'
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'bg-purple-950/60 text-purple-200 hover:text-white border border-purple-800/40'
                }`}
              >
                All Editions ({chronicles.length})
              </button>
              {['2026', '2025', '2024', '2023', '2022'].map(yr => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedYear === yr
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                      : 'bg-purple-950/60 text-purple-200 hover:text-white border border-purple-800/40'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Edition: Career Catalyst Vol. 5 (2026) */}
        {featuredChronicle && selectedYear === 'all' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-card-luxury border border-amber-400/40 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Cover Preview */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl group bg-purple-950">
                  <Image
                    src={featuredChronicle.coverImageUrl}
                    alt={featuredChronicle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <button
                      onClick={() => setActivePdfModal(featuredChronicle.pdfUrl)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Read Online ({featuredChronicle.pagesCount} Pages)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Details & Table of Contents */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    Latest Flagship Edition • {featuredChronicle.edition}
                  </span>
                  <span className="text-xs font-mono text-purple-300">
                    Academic Year {featuredChronicle.academicYear}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-200">
                    {featuredChronicle.pagesCount} Pages Full Dossier
                  </span>
                </div>

                <h2 className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-100">
                  {featuredChronicle.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {featuredChronicle.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Key Highlights in this Edition:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {featuredChronicle.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActivePdfModal(featuredChronicle.pdfUrl)}
                    className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 flex items-center gap-2 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Open Interactive Document Viewer</span>
                  </button>

                  <a
                    href={featuredChronicle.pdfUrl}
                    download
                    className="py-3 px-6 rounded-xl bg-purple-900/60 hover:bg-purple-900 text-amber-300 font-semibold text-xs tracking-wider border border-purple-700/50 hover:border-amber-400/50 flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official PDF</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* All Chronicle Editions Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-2xl text-slate-100 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-amber-400" />
              <span>Chronicle Publications ({filteredChronicles.length} Editions)</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChronicles.map((c) => (
              <div
                key={c.id}
                id={c.id}
                className="p-6 rounded-3xl bg-card-luxury flex flex-col justify-between hover:border-amber-400/40 transition-all group"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-purple-700/40 bg-purple-950">
                    <Image
                      src={c.coverImageUrl}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-300">{c.edition}</span>
                      <span className="text-slate-300 font-mono text-[10px]">{c.academicYear}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-slate-100 group-hover:text-amber-200 transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-3 leading-relaxed">
                      {c.description}
                    </p>
                    <p className="text-[11px] text-purple-300/80 font-mono mt-2">
                      Pages: {c.pagesCount} • Published: {c.publishedAt}
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-purple-900/30 mt-5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActivePdfModal(c.pdfUrl)}
                    className="flex-1 py-2 px-3 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-amber-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-purple-700/40"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Read Online</span>
                  </button>

                  <a
                    href={c.pdfUrl}
                    download
                    className="py-2 px-3 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-semibold text-xs flex items-center gap-1.5 transition-colors border border-amber-400/30"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded PDF Modal Viewer */}
      {activePdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-5xl h-[90vh] rounded-3xl bg-[#0e0828] border border-amber-400/40 shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 bg-purple-950/90 border-b border-purple-800/40 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">APTI CLUB Official Chronicle Reader</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activePdfModal}
                  download
                  className="py-1.5 px-3.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setActivePdfModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Viewer */}
            <div className="flex-1 bg-black/70">
              <iframe
                src={`${activePdfModal}#toolbar=1`}
                className="w-full h-full border-0"
                title="APTI CLUB Chronicle PDF"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
