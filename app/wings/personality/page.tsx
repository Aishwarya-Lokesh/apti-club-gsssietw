'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  CheckCircle2, 
  XCircle, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowLeft,
  Laptop,
  HeartHandshake,
  ShieldAlert
} from 'lucide-react';

export default function PersonalityWingPage() {
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
          <span className="text-amber-400 font-semibold">Personality Wing</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Wing P — Personality &amp; Communication</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              Because Character &amp; Clarity Open Every Door.
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Your confidence, clarity, and calmness play a decisive role during placement evaluations. Small behavioural nuances and articulation can transform an average interview into an offer.
            </p>
          </div>
        </div>

        {/* 1. Interview Behaviour Check (Do's & Don'ts from Career Catalyst) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-100">
                Interview Behaviour Check
              </h2>
              <p className="text-xs text-purple-300/80">
                Standard expectations reported by senior recruiters and alumni panelists.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* What You Should Do */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <CheckCircle2 className="w-5 h-5" />
                <span>What You Should Do</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Walk in with a positive and attentive attitude:</strong> Greet the panel with genuine warmth and composure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Listen fully before answering:</strong> Let the interviewer finish speaking; take a 2-second pause to structure your thoughts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Speak with clarity and a steady pace:</strong> High pitch and rushed sentences signal nervous anxiety. Keep cadence controlled.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Use real project examples:</strong> Ground theoretical claims in decisions made during your college projects.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span><strong>Ask thoughtful questions about the role:</strong> Shows genuine curiosity and enthusiasm for the company.</span>
                </li>
              </ul>
            </div>

            {/* What You Should Avoid */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-rose-500/30 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                <XCircle className="w-5 h-5" />
                <span>What You Should Avoid</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Rushing into answers without thinking:</strong> Answering spontaneously without clarifying constraints leads to avoidable bugs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Arguing or contradicting the interviewer:</strong> Even if you have an alternative perspective, phrase it diplomatically.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Overexplaining technical concepts:</strong> Answer concisely; do not ramble beyond the specific question asked.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Using filler words repeatedly:</strong> Avoid &ldquo;umm...&rdquo;, &ldquo;like...&rdquo;, &ldquo;basically...&rdquo; repeatedly. Silence is better than fillers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                  <span><strong>Being unsure of what is on your resume:</strong> If a skill or project is listed, you must know every library and line of code.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 2. Group Discussion (GD) Framework */}
        <div id="gd" className="p-8 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-100">
                Group Discussion &amp; Extempore Strategy
              </h2>
              <p className="text-xs text-purple-300/80">
                The 3-point entry method and recurring placement debate topics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40">
              <h3 className="font-bold text-sm text-amber-300 mb-2">1. The Opening Hook</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If initiating, define the scope cleanly with facts. Never launch into an emotional monologue. Provide a framework (e.g. &ldquo;Let&apos;s evaluate this across economic, technological, and societal dimensions&rdquo;).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40">
              <h3 className="font-bold text-sm text-amber-300 mb-2">2. Entering a Loud Debate</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Acknowledge a previous speaker first: &ldquo;Building on what my peer mentioned regarding infrastructure, we must also consider scalability...&rdquo; This commands respect without shouting.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40">
              <h3 className="font-bold text-sm text-amber-300 mb-2">3. The Summarizer</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                When invited to summarize, do NOT present your personal opinion. Recapitulate both sides objectively and conclude with an overarching forward-looking synthesis.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Virtual Interview Tech Checklist */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 via-[#10072d] to-purple-950/50 border border-amber-400/30 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-slate-100">
                Virtual Hiring Tech Checklist
              </h3>
              <p className="text-xs text-purple-200/80">
                Keep your camera at eye level, stable front lighting, and close background apps 15 minutes before the session.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 text-center">
              <p className="font-bold text-amber-300">Camera</p>
              <p className="text-[10px] text-slate-400 mt-1">Eye-level height</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 text-center">
              <p className="font-bold text-amber-300">Lighting</p>
              <p className="text-[10px] text-slate-400 mt-1">Front face illumination</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 text-center">
              <p className="font-bold text-amber-300">Audio</p>
              <p className="text-[10px] text-slate-400 mt-1">Tested wired / crisp mic</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 text-center">
              <p className="font-bold text-amber-300">Backup Hotspot</p>
              <p className="text-[10px] text-slate-400 mt-1">Phone charged on standby</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 text-center">
              <p className="font-bold text-amber-300">Background</p>
              <p className="text-[10px] text-slate-400 mt-1">Plain neutral wall</p>
            </div>
            <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 text-center">
              <p className="font-bold text-amber-300">Test Call</p>
              <p className="text-[10px] text-slate-400 mt-1">10 mins prior to link</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
