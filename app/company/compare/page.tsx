'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Briefcase, 
  ExternalLink,
  Layers,
  Award,
  BarChart3
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function CompanyComparisonPage() {
  const { companies } = useStore();

  const [companyAId, setCompanyAId] = useState<string>(companies[0]?.id || 'comp-db-01');
  const [companyBId, setCompanyBId] = useState<string>(companies[1]?.id || 'comp-accenture-01');

  const compA = companies.find(c => c.id === companyAId) || companies[0];
  const compB = companies.find(c => c.id === companyBId) || companies[1] || companies[0];

  const getPackageEstimate = (slug: string) => {
    switch (slug) {
      case 'deutsche-bank': return '19.60 LPA';
      case 'accenture': return '4.5 - 6.5 LPA';
      case 'infosys': return '3.6 - 9.5 LPA';
      default: return '6.0 - 12.0 LPA';
    }
  };

  const getEligibilityEstimate = (slug: string) => {
    switch (slug) {
      case 'deutsche-bank': return 'CGPA ≥ 7.0 (No Backlogs) | CSE, ISE, ECE';
      case 'accenture': return 'CGPA ≥ 6.5 | All Circuit Branches';
      case 'infosys': return 'CGPA ≥ 6.0 | All Engineering Branches';
      default: return 'CGPA ≥ 6.5';
    }
  };

  const getAssessmentType = (slug: string) => {
    switch (slug) {
      case 'deutsche-bank': return 'HackerEarth (2 Medium/Hard DSA + 20 CS Core)';
      case 'accenture': return 'CoCubes / Wheebox (Cognitive + Pseudo + 2 Coding)';
      case 'infosys': return 'InfyTQ / HackWithInfy (Reasoning + Pseudocode + Coding)';
      default: return 'Online Coding & Aptitude Platform';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070417] via-[#0d0726] to-[#070417] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Back Link */}
        <div>
          <Link
            href="/placement-hub"
            className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Placement Hub</span>
          </Link>
        </div>

        {/* Page Header Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/80 via-[#190c3e] to-[#11072c] border border-purple-800/40 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Company Comparison Engine</h1>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  AI Intelligence
                </span>
              </div>
              <p className="text-xs text-purple-200/80 mt-1">
                Side-by-side analysis of recruitment patterns, interview rounds, salary packages, and tested concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Company Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-2xl bg-[#0f092b] border border-purple-800/40">
            <label className="block text-xs font-semibold text-purple-300 mb-1.5">First Recruiter</label>
            <select
              value={companyAId}
              onChange={e => setCompanyAId(e.target.value)}
              className="w-full bg-[#160c3b] border border-purple-800/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-medium"
            >
              {companies.map(c => (
                <option key={c.id} value={c.id}>{c.name} ({c.category})</option>
              ))}
            </select>
          </div>

          <div className="p-4 rounded-2xl bg-[#0f092b] border border-purple-800/40">
            <label className="block text-xs font-semibold text-purple-300 mb-1.5">Second Recruiter</label>
            <select
              value={companyBId}
              onChange={e => setCompanyBId(e.target.value)}
              className="w-full bg-[#160c3b] border border-purple-800/60 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 font-medium"
            >
              {companies.map(c => (
                <option key={c.id} value={c.id}>{c.name} ({c.category})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-[#170a3c] border-b border-purple-800/50 p-4 font-bold text-xs">
            <div className="text-purple-300">Feature / Metric</div>
            <div className="text-amber-300">{compA?.name}</div>
            <div className="text-amber-300">{compB?.name}</div>
          </div>

          <div className="divide-y divide-purple-900/40 text-xs">
            
            {/* Category */}
            <div className="grid grid-cols-3 p-4 items-center">
              <span className="font-semibold text-slate-400">Industry Category</span>
              <span className="text-white font-medium">{compA?.category}</span>
              <span className="text-white font-medium">{compB?.category}</span>
            </div>

            {/* Compensation Package */}
            <div className="grid grid-cols-3 p-4 items-center bg-purple-950/20">
              <span className="font-semibold text-slate-400">Compensation Package</span>
              <span className="text-amber-300 font-bold text-sm">{getPackageEstimate(compA?.slug || '')}</span>
              <span className="text-amber-300 font-bold text-sm">{getPackageEstimate(compB?.slug || '')}</span>
            </div>

            {/* Eligibility Criteria */}
            <div className="grid grid-cols-3 p-4 items-center">
              <span className="font-semibold text-slate-400">Eligibility & Branches</span>
              <span className="text-purple-200">{getEligibilityEstimate(compA?.slug || '')}</span>
              <span className="text-purple-200">{getEligibilityEstimate(compB?.slug || '')}</span>
            </div>

            {/* Total Recruitment Rounds */}
            <div className="grid grid-cols-3 p-4 items-center bg-purple-950/20">
              <span className="font-semibold text-slate-400">Number of Rounds</span>
              <span className="text-white font-semibold">{compA?.roundsCount || 4} Rounds</span>
              <span className="text-white font-semibold">{compB?.roundsCount || 4} Rounds</span>
            </div>

            {/* Assessment Format */}
            <div className="grid grid-cols-3 p-4 items-center">
              <span className="font-semibold text-slate-400">Assessment Platform & Format</span>
              <span className="text-purple-200">{getAssessmentType(compA?.slug || '')}</span>
              <span className="text-purple-200">{getAssessmentType(compB?.slug || '')}</span>
            </div>

            {/* Key Tested Topics */}
            <div className="grid grid-cols-3 p-4 items-center bg-purple-950/20">
              <span className="font-semibold text-slate-400">Core High-Frequency Topics</span>
              <div className="flex flex-wrap gap-1">
                {(compA?.keyTopics || []).map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-200 border border-purple-700/50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {(compB?.keyTopics || []).map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-200 border border-purple-700/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Frequently Reported Questions */}
            <div className="grid grid-cols-3 p-4 items-start">
              <span className="font-semibold text-slate-400">Sample Reported Questions</span>
              <ul className="space-y-1.5 text-[11px] text-slate-300 list-disc list-inside">
                {(compA?.overview.frequentlyReportedQuestions || []).slice(0, 3).map((q, idx) => (
                  <li key={idx} className="leading-snug">{q}</li>
                ))}
              </ul>
              <ul className="space-y-1.5 text-[11px] text-slate-300 list-disc list-inside">
                {(compB?.overview.frequentlyReportedQuestions || []).slice(0, 3).map((q, idx) => (
                  <li key={idx} className="leading-snug">{q}</li>
                ))}
              </ul>
            </div>

            {/* Suggested Strategy */}
            <div className="grid grid-cols-3 p-4 items-start bg-purple-950/20">
              <span className="font-semibold text-slate-400">Recommended Strategy</span>
              <p className="text-xs text-purple-200/90 leading-relaxed">{compA?.overview.suggestedStrategy}</p>
              <p className="text-xs text-purple-200/90 leading-relaxed">{compB?.overview.suggestedStrategy}</p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 p-4 items-center">
              <span className="font-semibold text-slate-400">Detailed Company Dossier</span>
              <div>
                <Link
                  href={`/company/${compA?.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-800/60 hover:bg-purple-700 text-white font-semibold text-xs"
                >
                  <span>Open {compA?.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div>
                <Link
                  href={`/company/${compB?.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-800/60 hover:bg-purple-700 text-white font-semibold text-xs"
                >
                  <span>Open {compB?.name}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
