'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Search, 
  ArrowRight, 
  Trophy, 
  Star, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function PlacementHubPage() {
  const { companies } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');

  // Filter companies
  const filteredCompanies = companies.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.availableRoles.some(r => r.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.keyTopics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || c.recruitmentYear === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-purple-300/80">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Placement Preparation Hub</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Department of Training &amp; Placement • GSSSIETW</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              Placement Preparation Hub
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Explore verified company-specific recruitment pipelines, real student interview reports, year-wise preparation roadmaps, and interview question archives.
            </p>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div id="companies" className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <input
                type="text"
                placeholder="Search company, role (e.g. SDE), or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-xs text-slate-100 placeholder-slate-400"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 md:flex-none px-3.5 py-2.5 rounded-2xl bg-purple-950/50 border border-purple-800/60 text-xs text-slate-200 focus:border-amber-400 focus:outline-none"
              >
                <option value="All">All Categories</option>
                <option value="Fintech">Fintech</option>
                <option value="Product">Product</option>
                <option value="Consulting & IT">Consulting &amp; IT</option>
                <option value="Global MNC">Global MNC</option>
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="flex-1 md:flex-none px-3.5 py-2.5 rounded-2xl bg-purple-950/50 border border-purple-800/60 text-xs text-slate-200 focus:border-amber-400 focus:outline-none"
              >
                <option value="All">All Batches</option>
                <option value="2026">2026 Batch</option>
                <option value="2025">2025 Batch</option>
              </select>
            </div>

          </div>
        </div>

        {/* Company Cards Directory Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>Company Preparation Directories</span>
            </h2>
            <span className="text-xs text-purple-300">
              Showing {filteredCompanies.length} companies
            </span>
          </div>

          {filteredCompanies.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-card-luxury border border-purple-900/40 space-y-3">
              <Building2 className="w-10 h-10 text-purple-400 mx-auto opacity-50" />
              <p className="text-sm font-semibold text-slate-300">No companies found matching your query.</p>
              <p className="text-xs text-slate-400">Try adjusting your search terms or category filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((comp) => (
                <div
                  key={comp.id}
                  className="p-6 rounded-3xl bg-card-luxury flex flex-col justify-between hover:border-amber-400/50 transition-all group"
                >
                  <div className="space-y-4">
                    
                    {/* Header: Logo + Name + Category */}
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-md">
                        <Image
                          src={comp.logoUrl}
                          alt={comp.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-900/60 text-amber-300 border border-purple-700/40">
                            {comp.category}
                          </span>
                          <span className="text-[10px] text-purple-300 font-mono">
                            Batch {comp.recruitmentYear}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-lg text-slate-100 group-hover:text-amber-200 transition-colors truncate mt-1">
                          {comp.name}
                        </h3>
                      </div>
                    </div>

                    {/* Meta stats */}
                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                        <div>
                          <p className="text-[10px] text-slate-400">Rounds</p>
                          <p className="font-bold text-slate-200">{comp.roundsCount} Rounds</p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                        <div>
                          <p className="text-[10px] text-slate-400">Experiences</p>
                          <p className="font-bold text-slate-200">{comp.experienceCount} Reports</p>
                        </div>
                      </div>
                    </div>

                    {/* Available Roles */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-purple-300 mb-1">
                        Target Roles
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {comp.availableRoles.map((role, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-purple-900/30 text-slate-300 border border-purple-800/40"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Topics */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-purple-300 mb-1">
                        Key Assessment Topics
                      </p>
                      <p className="text-xs text-slate-300 font-medium line-clamp-1">
                        {comp.keyTopics.join(' • ')}
                      </p>
                    </div>

                  </div>

                  {/* CTA Button */}
                  <div className="pt-5 border-t border-purple-900/30 mt-5">
                    <Link
                      href={`/company/${comp.slug}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-900 to-[#22104a] hover:from-amber-400 hover:to-amber-500 hover:text-slate-950 text-amber-300 font-bold text-xs transition-all flex items-center justify-center gap-2 border border-purple-700/50 hover:border-transparent group-hover:shadow-md"
                    >
                      <span>Explore {comp.name} Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Placement Roadmap Detailed Section */}
        <div id="roadmap" className="p-8 sm:p-12 rounded-3xl bg-card-luxury border border-amber-400/30 space-y-8">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
              Structured Timeline
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-100 mt-1">
              4-Year Engineering Placement Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80 mt-1">
              Derived from Career Catalyst Vol. 2: Recommended strategy for each academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-sm text-slate-100">1st Year: Foundations</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Build rock-solid basic programming knowledge in C++ or Java. Start daily 20-minute speed-math drills on Pocket Aptitude. Maintain clean academics (CGPA &gt; 7.5).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-sm text-slate-100">2nd Year: DSA &amp; Stack</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Master Data Structures and Algorithms with Striver&apos;s A2Z sheet. Pick one specialization (Fullstack, AI/ML, Cloud, or Embedded). Build 2 original projects on GitHub.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-sm text-slate-100">3rd Year: Core &amp; Profile</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Revise Core CS: OOPs, DBMS (SQL Queries), OS, and Computer Networks. Participate in hackathons, complete an internship, and craft an ATS-compliant resume.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 font-bold text-sm">
                04
              </div>
              <h3 className="font-bold text-sm text-slate-100">4th Year: Recruitment</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Participate in APTI CLUB Mock Interview drives. Solve previous company assessment papers on HackerEarth/HackerRank. Attend interview rounds with calm confidence.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
