'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Database, 
  Layers, 
  Cpu, 
  ExternalLink, 
  ArrowLeft,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FolderGit2,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function TechnicalWingPage() {
  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-purple-300/80">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span>The Four Wings</span>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Technical Wing</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>Wing T — Technical Mastery</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              From Foundations to Placement-Ready Engineer.
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Technical preparation is not about memorizing answers; it is about understanding, practicing, and applying core computer science concepts consistently to build real software.
            </p>
          </div>
        </div>

        {/* Technical Roadmap 5 Stages */}
        <div className="space-y-8">
          <h2 className="font-serif font-bold text-2xl text-slate-100 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span>The 5-Stage Technical Blueprint</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Stage 1: Foundations */}
            <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                  Stage 1
                </span>
                <span className="text-xs text-purple-300/80">1st &amp; 2nd Year</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-100">
                Programming Foundations
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Choose ONE primary language (C++, Java, or Python). Master control flow, pointers/references, functions, and standard library data structures.
              </p>
              <div className="pt-2 border-t border-purple-900/30 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>HackerRank 10 Days</span>
                  <a href="https://hackerrank.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    <span>Practice</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Kunal Kushwaha Java</span>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    <span>YouTube</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stage 2: DSA */}
            <div className="p-6 rounded-3xl bg-card-luxury border border-amber-400/40 space-y-4 shadow-lg shadow-purple-950/50">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/50">
                  Stage 2 • Core Hiring
                </span>
                <span className="text-xs text-amber-300 font-semibold">2nd &amp; 3rd Year</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-100">
                Data Structures &amp; Algorithms
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tested in every company from service MNCs to top product firms. Master Arrays, Two Pointers, Trees, Graphs (BFS/DFS), and Dynamic Programming.
              </p>
              <div className="pt-2 border-t border-purple-900/30 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Striver A2Z DSA Sheet</span>
                  <a href="https://takeuforward.org" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    <span>A2Z Sheet</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Aditya Verma DP Playlist</span>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    <span>YouTube</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>USFCA Algorithm Visualizer</span>
                  <a href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    <span>Interactive</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stage 3: Core Subjects */}
            <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                  Stage 3
                </span>
                <span className="text-xs text-purple-300/80">3rd Year</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-100">
                Core Computer Science
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mandatory for TCS, Infosys, Deutsche Bank, Accenture, and Amazon. In-depth revision of OOPs, DBMS (SQL &amp; ACID), OS (Scheduling &amp; Memory), and CN.
              </p>
              <div className="pt-2 border-t border-purple-900/30 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Abdul Bari OS Playlist</span>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    <span>YouTube</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>DBMS Lakshay / Gate Smashers</span>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 flex items-center gap-1">
                    <span>YouTube</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mistakes Juniors Should Avoid (from Career Catalyst Page 25) */}
        <div className="p-8 rounded-3xl bg-card-luxury border border-rose-500/30 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-100">
                Mistakes Juniors Should Avoid
              </h2>
              <p className="text-xs text-purple-300/80">
                From Career Catalyst 2026: Crucial pitfalls that cost students placement offers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-slate-100">Preparing only Aptitude</h4>
                <p className="text-[11px] text-slate-400 mt-1">Ignoring technical depth leads to clearing test rounds but getting eliminated in interview round 1.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-slate-100">Copying GitHub Projects</h4>
                <p className="text-[11px] text-slate-400 mt-1">Interviewers dissect project code instantly. If you cannot explain the architecture, it is an automatic rejection.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-slate-100">Learning Too Many Languages</h4>
                <p className="text-[11px] text-slate-400 mt-1">Dabbling in 5 languages without depth in any. Pick C++ or Java and master its memory model completely.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-slate-100">Leaving DSA for the Last Minute</h4>
                <p className="text-[11px] text-slate-400 mt-1">Cramming algorithms in 2 weeks fails under time pressure. Daily 1 problem over 6 months wins.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-slate-100">Not Revising Core Subjects</h4>
                <p className="text-[11px] text-slate-400 mt-1">Forgetting SQL query joins, ACID properties, and OS synchronization during technical discussions.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/30 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-slate-100">Weak Resume Structure</h4>
                <p className="text-[11px] text-slate-400 mt-1">Vague descriptions without measurable metrics or live GitHub links. Recruiters spend only 6 seconds scanning.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Final Senior Advice */}
        <div className="p-6 sm:p-8 rounded-3xl bg-purple-950/40 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif font-bold text-lg text-slate-100">
              &ldquo;Be consistent... even 1 hour per day matters.&rdquo;
            </h4>
            <p className="text-xs text-purple-200 mt-1">
              Technical preparation is not a race. It is a journey of building yourself into an engineer who can think, reason, and create.
            </p>
          </div>
          <Link
            href="/placement-hub"
            className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0"
          >
            Explore Company Guides
          </Link>
        </div>

      </div>
    </div>
  );
}
