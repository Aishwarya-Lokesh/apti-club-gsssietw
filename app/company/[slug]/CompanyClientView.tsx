'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Trophy, 
  FileText, 
  Clock, 
  ArrowLeft, 
  Sparkles, 
  AlertCircle, 
  Download, 
  Eye, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  ShieldCheck, 
  User 
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CompanyClientView({ slug }: { slug: string }) {
  const { companies, experiences } = useStore();
  const [activePdfModal, setActivePdfModal] = useState<string | null>(null);

  const company = companies.find(c => c.slug === slug);

  if (!company) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
        <Building2 className="w-12 h-12 text-purple-400 opacity-50" />
        <h2 className="font-serif font-bold text-xl text-slate-100">Company Guide Not Found</h2>
        <p className="text-xs text-slate-400">The requested company preparation guide is either in draft or does not exist.</p>
        <Link href="/placement-hub" className="py-2 px-5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs">
          Return to Placement Hub
        </Link>
      </div>
    );
  }

  // Related individual experiences
  const companyExperiences = experiences.filter(e => e.companyId === company.id);

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-purple-300/80">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <Link href="/placement-hub" className="hover:text-amber-300">
            Placement Hub
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">{company.name}</span>
        </div>

        {/* 1. COMPANY HEADER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shrink-0 shadow-xl border border-purple-300/30">
                <Image
                  src={company.logoUrl}
                  alt={company.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    {company.category}
                  </span>
                  <span className="text-xs font-mono text-purple-300">
                    Recruitment Batch {company.recruitmentYear}
                  </span>
                </div>
                <h1 className="font-serif font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
                  {company.name}
                </h1>
                <p className="text-xs text-purple-200/80 max-w-xl">
                  {company.overview.summary}
                </p>
              </div>
            </div>

            {/* Header Badges */}
            <div className="flex flex-row md:flex-col items-center md:items-end gap-3 shrink-0">
              <div className="px-4 py-2 rounded-2xl bg-purple-950/70 border border-purple-700/50 text-right">
                <p className="text-xs text-slate-400">Verified Reports</p>
                <p className="font-serif font-bold text-lg text-amber-300">
                  {company.experienceCount} Experiences
                </p>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-purple-950/70 border border-purple-700/50 text-right">
                <p className="text-xs text-slate-400">Selection Stages</p>
                <p className="font-serif font-bold text-lg text-amber-300">
                  {company.roundsCount} Rounds
                </p>
              </div>
            </div>

          </div>

          {/* Roles ribbon */}
          <div className="mt-6 pt-6 border-t border-purple-900/40 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-purple-300 mr-2">Available Roles:</span>
            {company.availableRoles.map((r, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-purple-900/40 text-slate-200 border border-purple-800/40">
                {r}
              </span>
            ))}
          </div>

        </div>

        {/* 2. RECRUITMENT ROUNDS VISUAL TIMELINE */}
        <div className="p-8 sm:p-10 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl text-slate-100">
                  Reported Recruitment Timeline
                </h2>
                <p className="text-xs text-purple-300/80">
                  Synthesized directly from multiple candidate experiences for {company.name}.
                </p>
              </div>
            </div>
          </div>

          {/* Horizontal / Responsive Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {company.roundsTimeline.map((rnd, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/50 hover:border-amber-400/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 flex items-center justify-center font-bold text-xs">
                      {rnd.roundNumber}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      rnd.difficulty === 'High' 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {rnd.difficulty} Difficulty
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-100">{rnd.name}</h3>
                  <p className="text-[11px] text-amber-300/90 font-mono mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{rnd.duration}</span>
                  </p>

                  <p className="text-xs text-slate-300/90 mt-2 leading-relaxed">
                    {rnd.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-900/30">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-purple-400 mb-1">
                    Key Focus
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {rnd.keyFocus.map((f, fi) => (
                      <span key={fi} className="text-[10px] px-2 py-0.5 rounded bg-purple-900/60 text-slate-200">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Variations note */}
          {company.overview.experienceVariations && (
            <div className="p-4 rounded-2xl bg-purple-900/20 border border-purple-800/40 flex items-start gap-3 text-xs text-purple-200">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Reported Experience Variations: </strong>
                <span>{company.overview.experienceVariations}</span>
              </div>
            </div>
          )}

        </div>

        {/* 3. COMPREHENSIVE RECRUITMENT OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Cols: Detailed Breakdown of Rounds */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="p-8 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-xl text-slate-100">
                    Comprehensive Process Breakdown
                  </h2>
                  <p className="text-xs text-purple-300/80">
                    Detailed analysis of what candidates actually faced in each round.
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-xs text-slate-300 leading-relaxed">
                
                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-2">
                  <h4 className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Aptitude &amp; Cognitive Assessment</span>
                  </h4>
                  <p>{company.overview.aptitudeDetails}</p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-2">
                  <h4 className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Coding &amp; Algorithm Assessment</span>
                  </h4>
                  <p>{company.overview.codingDetails}</p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-2">
                  <h4 className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Technical Interview Rounds</span>
                  </h4>
                  <p>{company.overview.technicalDetails}</p>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-2">
                  <h4 className="font-bold text-sm text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>HR &amp; Fitment Round</span>
                  </h4>
                  <p>{company.overview.hrDetails}</p>
                </div>

              </div>
            </div>

            {/* Individual Student Experience Cards */}
            <div className="space-y-4">
              <h2 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span>Submitted Student Experiences ({companyExperiences.length})</span>
              </h2>

              <div className="space-y-4">
                {companyExperiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4 hover:border-amber-400/40 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-purple-900/30">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-900/60 border border-purple-700/50 flex items-center justify-center text-amber-300">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-slate-100">{exp.studentName}</p>
                          <p className="text-[10px] text-purple-300">
                            {exp.department} • {exp.year}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-semibold">
                          Offered: {exp.role} {exp.packageLPA ? `(${exp.packageLPA})` : ''}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed italic bg-purple-950/30 p-3 rounded-xl border border-purple-900/40">
                      &ldquo;{exp.summary}&rdquo;
                    </p>

                    {/* Reported questions */}
                    {exp.keyQuestions && exp.keyQuestions.length > 0 && (
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                          Specific Questions Encountered:
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {exp.keyQuestions.map((q, qi) => (
                            <li key={qi} className="flex items-start gap-2">
                              <span className="text-amber-400 font-bold">•</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-400">
                        Original Document: Verified PDF
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActivePdfModal(exp.originalPdfUrl)}
                          className="py-1.5 px-3 rounded-lg bg-purple-900/50 hover:bg-purple-800 text-amber-300 flex items-center gap-1.5 border border-purple-700/40 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Read Report</span>
                        </button>
                        <a
                          href={exp.originalPdfUrl}
                          download
                          className="py-1.5 px-3 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 flex items-center gap-1.5 border border-amber-400/30 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right 1 Col: Preparation Insights & Repeated Questions */}
          <div className="space-y-6">
            
            {/* Repeated Topics */}
            <div className="p-6 rounded-3xl bg-card-luxury border border-amber-400/30 space-y-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif font-bold text-base text-slate-100">
                  Repeated Interview Topics
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                {company.overview.repeatedTopics.map((top, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-purple-950/50 border border-purple-800/40 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-slate-200 font-medium">{top}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Reported Questions */}
            <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif font-bold text-base text-slate-100">
                  Frequently Reported Questions
                </h3>
              </div>

              <div className="space-y-2.5 text-xs">
                {company.overview.frequentlyReportedQuestions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
                    <span className="text-[10px] font-bold text-amber-400">Q{idx + 1}.</span>
                    <p className="text-slate-200 mt-0.5 leading-relaxed">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggested Strategy */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/50 via-[#120a32] to-purple-950/50 border border-purple-700/40 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Suggested Strategy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {company.overview.suggestedStrategy}
              </p>
            </div>

          </div>

        </div>

        {/* 4. MANDATORY DISCLAIMER AS REQUESTED IN SECTION 7 */}
        <div className="p-6 rounded-3xl bg-[#0b061d] border border-amber-400/20 text-xs text-slate-400 leading-relaxed space-y-1">
          <p className="font-bold text-amber-300/90 uppercase tracking-wider text-[10px]">
            Important Placement Disclaimer
          </p>
          <p className="italic">
            &ldquo;These interview experiences are based on student-submitted reports from previous recruitment processes. Recruitment patterns, selection rounds, and requirements may change depending on the role, year, and hiring requirements. These experiences are intended for preparation and reference only.&rdquo;
          </p>
        </div>

      </div>

      {/* PDF Viewer Modal */}
      {activePdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl h-[85vh] rounded-3xl bg-[#0e0828] border border-amber-400/40 shadow-2xl flex flex-col overflow-hidden">
            <div className="p-4 bg-purple-950/80 border-b border-purple-800/40 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <FileText className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">{company.name} Interview Experience Document</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activePdfModal}
                  download
                  className="py-1 px-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setActivePdfModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex-1 bg-black/50">
              <iframe
                src={`${activePdfModal}#toolbar=1`}
                className="w-full h-full border-0"
                title="Interview Report PDF"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
