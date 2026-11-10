'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Handshake, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Sparkles, 
  ArrowLeft,
  Laptop,
  HelpCircle,
  Award
} from 'lucide-react';

export default function InterviewWingPage() {
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
          <span className="text-amber-400 font-semibold">Interview Wing</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Handshake className="w-4 h-4 text-amber-400" />
              <span>Wing I — Interview Mastery</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              Know the Company. Own the Interview.
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Your resume speaks before you enter the room, and your articulation seals the offer. Master resume crafting, company research, and behavioral response frameworks.
            </p>
          </div>
        </div>

        {/* 1. Resume Essentials (Career Catalyst Page 8) */}
        <div id="resume-guide" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-100">
                Resume Essentials
              </h2>
              <p className="text-xs text-purple-300/80">
                Recruiters glance at resumes for only a few seconds. Structure and crisp clarity matter more than decoration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5" />
                <span>What To Include</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Clear career objective:</strong> Aligned with your specific domain (Software, Analytics, or Embedded).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Skills in order of strength:</strong> Group logically into Languages, Frameworks, Developer Tools, and Databases.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Problem-Solution-Impact project format:</strong> Instead of generic descriptions, highlight what problem was solved and measurable outcomes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Verifiable GitHub &amp; Live Links:</strong> Every project must have a working deployment link or clean README repository.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Clean professional contact details:</strong> Professional email, LinkedIn profile, and active phone number.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-rose-500/30 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5" />
                <span>Avoid These Mistakes</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Long paragraphs and story-like descriptions:</strong> Use bullet points starting with action verbs (Engineered, Architected, Reduced).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Mentioning tools you never used:</strong> Don&apos;t list Kubernetes or Docker if you only ran a single demo container.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Overusing icons, graphics, or complex columns:</strong> Multi-column tables often fail Applicant Tracking Systems (ATS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Adding unnecessary personal info:</strong> Date of birth, marital status, or full postal addresses waste precious resume space.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Formatting and spelling inconsistencies:</strong> Mixing font sizes and inconsistent date alignments show lack of attention to detail.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 2. Pre-Interview Company Research (Career Catalyst Page 11-12) */}
        <div className="p-8 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-100">
                Pre-Interview Research Framework
              </h2>
              <p className="text-xs text-purple-300/80">
                Before stepping into an interview, make sure you know exactly who you are talking to and what they expect.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-2">
              <h3 className="font-bold text-amber-300">Company Overview</h3>
              <p className="text-slate-300 leading-relaxed">
                Mission, core corporate values, work culture, global headquarters, and recent leadership milestones.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-2">
              <h3 className="font-bold text-amber-300">Products &amp; Current Tech Stack</h3>
              <p className="text-slate-300 leading-relaxed">
                What does the company build or monetize? Are they focused on cloud transformation, microservices, or AI automation?
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-2">
              <h3 className="font-bold text-amber-300">Interview Style &amp; Role</h3>
              <p className="text-slate-300 leading-relaxed">
                Do they emphasize deep algorithmic puzzles or real-world system design? Inspect previous year experiences on our Placement Hub.
              </p>
            </div>
          </div>
        </div>

        {/* 3. The STAR Method for Behavioral Questions */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 via-[#10072d] to-purple-950/50 border border-amber-400/30 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-100">
                The STAR Framework for Behavioral Rounds
              </h2>
              <p className="text-xs text-purple-200/80">
                Structure answers to &ldquo;Tell me about a time when...&rdquo; without rambling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-800/40">
              <span className="text-lg font-serif font-black text-amber-300">S</span>
              <p className="font-bold text-slate-100 mt-1">Situation</p>
              <p className="text-slate-400 text-[11px] mt-1">Briefly set the context and challenge faced in your team project or internship.</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-800/40">
              <span className="text-lg font-serif font-black text-amber-300">T</span>
              <p className="font-bold text-slate-100 mt-1">Task</p>
              <p className="text-slate-400 text-[11px] mt-1">Explain the specific responsibility or goal that was assigned to you personally.</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-800/40">
              <span className="text-lg font-serif font-black text-amber-300">A</span>
              <p className="font-bold text-slate-100 mt-1">Action</p>
              <p className="text-slate-400 text-[11px] mt-1">Detail the exact technical steps and decisions you took to resolve the challenge.</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-900/40 border border-purple-800/40">
              <span className="text-lg font-serif font-black text-amber-300">R</span>
              <p className="font-bold text-slate-100 mt-1">Result</p>
              <p className="text-slate-400 text-[11px] mt-1">Highlight measurable success, lessons learned, and positive outcome achieved.</p>
            </div>
          </div>
        </div>

        {/* CTA to Mock Interviews */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif font-bold text-lg text-slate-100">
              Ready to Test Your Interview Skills?
            </h4>
            <p className="text-xs text-purple-200 mt-1">
              Participate in upcoming simulated mock interviews conducted by alumni and senior mentors.
            </p>
          </div>
          <Link
            href="/events"
            className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shrink-0"
          >
            Register for Mock Interview
          </Link>
        </div>

      </div>
    </div>
  );
}
