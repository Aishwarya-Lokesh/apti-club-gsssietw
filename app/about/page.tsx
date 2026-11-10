'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  ArrowLeft, 
  Brain, 
  Users, 
  Code2, 
  Handshake, 
  Award, 
  MapPin, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export default function AboutPage() {
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
          <span className="text-amber-400 font-semibold">About APTI CLUB</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>GSSSIETW Department of Training &amp; Placement</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              About APTI CLUB
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Founded under the aegis of the Department of Training &amp; Placement at GSSS Institute of Engineering and Technology for Women, APTI CLUB is dedicated to bridging the transition from campus classrooms to elite industry placement offers.
            </p>
          </div>
        </div>

        {/* The Four Wings Vision */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif font-bold text-2xl text-slate-100">
              The Four Pillars: A – P – T – I
            </h2>
            <p className="text-xs text-purple-300">
              Every letter represents a core competency demanded by modern recruiters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-amber-400/40 flex items-center justify-center text-amber-300 font-serif font-extrabold text-xl">
                A
              </div>
              <h3 className="font-serif font-bold text-base text-slate-100">
                Aptitude Wing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sharpening quantitative mathematics, logical reasoning patterns, verbal fluency, and modern gamified cognitive assessments like Perspect AI.
              </p>
              <Link href="/wings/aptitude" className="inline-block text-xs text-amber-400 hover:text-amber-300 font-semibold pt-2">
                Explore Aptitude Wing →
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-amber-400/40 flex items-center justify-center text-amber-300 font-serif font-extrabold text-xl">
                P
              </div>
              <h3 className="font-serif font-bold text-base text-slate-100">
                Personality Wing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Developing professional communication, spontaneous extempore speaking, group discussion leadership, and corporate etiquette.
              </p>
              <Link href="/wings/personality" className="inline-block text-xs text-amber-400 hover:text-amber-300 font-semibold pt-2">
                Explore Personality Wing →
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-amber-400/40 flex items-center justify-center text-amber-300 font-serif font-extrabold text-xl">
                T
              </div>
              <h3 className="font-serif font-bold text-base text-slate-100">
                Technical Wing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mastering Data Structures and Algorithms, Core CS subjects (OOPs, DBMS, OS, Computer Networks), and verifiable resume engineering projects.
              </p>
              <Link href="/wings/technical" className="inline-block text-xs text-amber-400 hover:text-amber-300 font-semibold pt-2">
                Explore Technical Wing →
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-amber-400/40 flex items-center justify-center text-amber-300 font-serif font-extrabold text-xl">
                I
              </div>
              <h3 className="font-serif font-bold text-base text-slate-100">
                Interview Wing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Refining behavioral responses through the STAR method, virtual interview setup, resume optimization, and pre-interview company intelligence.
              </p>
              <Link href="/wings/interview" className="inline-block text-xs text-amber-400 hover:text-amber-300 font-semibold pt-2">
                Explore Interview Wing →
              </Link>
            </div>

          </div>
        </div>

        {/* College & Institution Details */}
        <div className="p-8 sm:p-10 rounded-3xl bg-card-luxury border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
              Host Institution
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-100">
              GSSS Institute of Engineering and Technology for Women
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Geetha Shishu Shikshana Sangha (R), established to pioneer women in technical education and leadership. Affiliated to VTU Belagavi, approved by AICTE New Delhi &amp; Govt. of Karnataka, and accredited by NBA and NAAC with &lsquo;A&rsquo; Grade.
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-300 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>KRS Road, Metagalli, Mysuru – 570 016, Karnataka, India</span>
            </div>
          </div>

          <div className="shrink-0 text-center space-y-2">
            <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-purple-500 to-amber-200 shadow-xl mx-auto flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#140a32] flex items-center justify-center">
                <Image src="/assets/apti-logo.png" alt="APTI CLUB" width={60} height={60} className="object-contain" />
              </div>
            </div>
            <p className="font-serif italic text-amber-300 text-sm font-semibold">
              Dream. Discover. Define.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
