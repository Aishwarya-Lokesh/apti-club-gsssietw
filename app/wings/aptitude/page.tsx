'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Calculator, 
  Compass, 
  BookOpen, 
  Gamepad2, 
  Zap, 
  ExternalLink, 
  Sparkles, 
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function AptitudeWingPage() {
  const { resources } = useStore();
  const [activeTab, setActiveTab] = useState<'all' | 'quant' | 'logical' | 'verbal' | 'gamification' | 'circuit'>('all');

  const aptiResources = resources.filter(r => r.wing === 'Aptitude');

  const filterResources = () => {
    if (activeTab === 'all') return aptiResources;
    if (activeTab === 'quant') return aptiResources.filter(r => r.category.toLowerCase().includes('quantitative'));
    if (activeTab === 'logical') return aptiResources.filter(r => r.category.toLowerCase().includes('logical'));
    if (activeTab === 'verbal') return aptiResources.filter(r => r.category.toLowerCase().includes('verbal'));
    if (activeTab === 'gamification') return aptiResources.filter(r => r.category.toLowerCase().includes('gamification'));
    if (activeTab === 'circuit') return aptiResources.filter(r => r.category.toLowerCase().includes('electro'));
    return aptiResources;
  };

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs text-purple-300/80">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span>The Four Wings</span>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Aptitude Wing</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Brain className="w-4 h-4 text-amber-400" />
              <span>Wing A — Aptitude Mastery</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              Where Clarity Meets Quick Thinking.
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Aptitude remains one of the strongest deciding factors in campus placements. It reflects how you think, how fast you adapt, and how confidently you solve unfamiliar problems under time pressure.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-amber-200/90">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Industry-aligned practice sets
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Curated directly from Career Catalyst 2026
              </span>
            </div>
          </div>
        </div>

        {/* Categories Overview Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div 
            onClick={() => setActiveTab('quant')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'quant' 
                ? 'bg-purple-900/60 border-amber-400 shadow-lg' 
                : 'bg-card-luxury border-purple-800/40 hover:border-amber-400/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 mb-3">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">Quantitative</h3>
            <p className="text-xs text-slate-400 mt-1">Arithmetic, Speed Math, Time &amp; Work, SI/CI, Probability</p>
          </div>

          <div 
            onClick={() => setActiveTab('logical')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'logical' 
                ? 'bg-purple-900/60 border-amber-400 shadow-lg' 
                : 'bg-card-luxury border-purple-800/40 hover:border-amber-400/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">Logical Reasoning</h3>
            <p className="text-xs text-slate-400 mt-1">Series, Syllogisms, Coding-Decoding, Seating, Puzzles</p>
          </div>

          <div 
            onClick={() => setActiveTab('verbal')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'verbal' 
                ? 'bg-purple-900/60 border-amber-400 shadow-lg' 
                : 'bg-card-luxury border-purple-800/40 hover:border-amber-400/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 mb-3">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">Verbal Ability</h3>
            <p className="text-xs text-slate-400 mt-1">Grammar, RC, Error Spotting, Sentence Correction</p>
          </div>

          <div 
            onClick={() => setActiveTab('gamification')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'gamification' 
                ? 'bg-purple-900/60 border-amber-400 shadow-lg' 
                : 'bg-card-luxury border-purple-800/40 hover:border-amber-400/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 mb-3">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">Gamification / AI</h3>
            <p className="text-xs text-slate-400 mt-1">Perspect AI games, NeuroNation, Task switching</p>
          </div>

          <div 
            onClick={() => setActiveTab('circuit')}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'circuit' 
                ? 'bg-purple-900/60 border-amber-400 shadow-lg' 
                : 'bg-card-luxury border-purple-800/40 hover:border-amber-400/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-100">Electro Quiz</h3>
            <p className="text-xs text-slate-400 mt-1">ECE/EEE Circuits, TinkerCAD, CircuitLab simulation</p>
          </div>

        </div>

        {/* Curated Resources List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Recommended Materials &amp; Practice Portals</span>
            </h2>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 rounded-full font-medium transition-colors ${
                  activeTab === 'all' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                All Modules
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterResources().map((res) => (
              <div 
                key={res.id}
                className="p-6 rounded-3xl bg-card-luxury flex flex-col justify-between hover:border-amber-400/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-900/60 text-amber-300 border border-purple-700/40 font-semibold">
                      {res.category}
                    </span>
                    <span className="text-purple-300/80 font-mono text-[10px]">
                      {res.platform}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-100 group-hover:text-amber-200 transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-xs text-slate-300/90 mt-2 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-purple-900/30 mt-6 flex items-center justify-between">
                  <span className="text-[11px] text-purple-300/70">
                    Recommended for: <strong className="text-slate-200">{res.recommendedFor}</strong>
                  </span>

                  <a
                    href={res.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-purple-900/50 hover:bg-amber-400 hover:text-slate-950 text-amber-300 transition-all border border-purple-700/40"
                    title="Open Resource"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aptitude Strategy Note */}
        <div className="p-6 sm:p-8 rounded-3xl bg-purple-950/40 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base text-slate-100">
                Daily 1-Hour Speed-Math Habit
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                From Career Catalyst 2026: Consistent daily 20-minute drills on Pocket Aptitude or IndiaBix build the subconscious speed required for 90-minute company assessments.
              </p>
            </div>
          </div>

          <Link
            href="/chronicles"
            className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0"
          >
            Read In Chronicle
          </Link>
        </div>

      </div>
    </div>
  );
}
