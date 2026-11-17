'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Brain, 
  Users, 
  Code2, 
  Handshake, 
  Calendar, 
  Clock, 
  Share2, 
  Building2, 
  Trophy, 
  Star, 
  BookOpen, 
  Rocket, 
  TrendingUp, 
  FileText, 
  ExternalLink,
  Sparkles,
  MapPin,
  Megaphone,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Download,
  GraduationCap,
  HeartHandshake
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { EventItem } from '@/types';
import EventRegistrationModal from '@/components/EventRegistrationModal';

export default function HomePage() {
  const { events, companies, chronicles } = useStore();
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);

  const featuredEvent = events[0] || null;
  const featuredCompany = companies.find(c => c.slug === 'deutsche-bank') || companies[0];

  const handleWhatsAppShare = (event: EventItem) => {
    const text = encodeURIComponent(
      event.whatsAppTemplate || 
      `*${event.title}* - APTI CLUB GSSSIETW\nDate: ${event.date} at ${event.time}\nRegister here: https://apti-gsssietw.edu/events`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const coreTeamMembers = [
    {
      name: 'AISHWARYA S L',
      role: 'Core Committee • Student Lead',
      department: 'GSSSIETW, Mysuru',
      academicYear: 'Batch 2026',
      initials: 'AS',
      bio: 'Leading club strategy, campus drives readiness, and student career mentorship.',
      badge: 'Core Lead'
    },
    {
      name: 'CHINMAYI S',
      role: 'Core Committee • Technical & Events Lead',
      department: 'GSSSIETW, Mysuru',
      academicYear: 'Batch 2026',
      initials: 'CS',
      bio: 'Orchestrating technical coding sprints, assessment simulations, and workshop coordination.',
      badge: 'Technical Lead'
    },
    {
      name: 'RACHANA N',
      role: 'Core Committee • Operations & Editorial Lead',
      department: 'GSSSIETW, Mysuru',
      academicYear: 'Batch 2026',
      initials: 'RN',
      bio: 'Curating annual placement chronicles, alumni interview dossiers, and student outreach.',
      badge: 'Operations Lead'
    }
  ];

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 flex flex-col">
      
      {/* 1. HERO SECTION WITH DUAL BRANDING & LUXURY MOTTO */}
      <section className="relative w-full overflow-hidden bg-hero-gradient pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-purple-900/40">
        
        {/* Glow ambient backdrops */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Hero Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              
              {/* Institution Identity Banner */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-700/50 shadow-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300">
                  GSSS INSTITUTE OF ENGINEERING AND TECHNOLOGY FOR WOMEN
                </span>
              </div>

              {/* Massive APTI CLUB Display Title with Official Motto */}
              <div>
                <h1 className="font-serif font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 drop-shadow-sm">
                  APTI CLUB
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-1.5">
                  <span className="font-serif italic text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 font-semibold">
                    Dream. Discover. Define.
                  </span>
                  <span className="text-purple-400 hidden sm:inline">•</span>
                  <span className="font-serif italic text-sm sm:text-base text-purple-200/90 hidden sm:inline">
                    Prepare. Practice. Perform.
                  </span>
                </div>
              </div>

              {/* Subheading */}
              <p className="text-xs sm:text-sm text-purple-200/90 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed pt-1">
                The premier student-led placement intelligence, career development, and technical empowerment platform of GSSSIETW. Dedicated to guiding women engineers toward top-tier placements.
              </p>

              {/* Hero Action CTAs */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/wings/aptitude"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2 group hover:scale-[1.02]"
                >
                  <span>Explore The 4 Wings</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/events"
                  className="px-5 py-3 rounded-full bg-purple-950/70 hover:bg-purple-900/90 text-amber-300 font-semibold text-xs tracking-wider border border-purple-700/50 hover:border-amber-400/50 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Upcoming Events</span>
                </Link>

                <Link
                  href="/chronicles"
                  className="px-5 py-3 rounded-full bg-[#180e3b] hover:bg-purple-900/60 text-purple-200 hover:text-white font-medium text-xs tracking-wider border border-purple-800/40 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>5-Year Chronicles</span>
                </Link>
              </div>

            </div>

            {/* Hero Right: Interactive 4 Wings Floating Card + Dream Placement */}
            <div className="flex flex-col items-center lg:items-end gap-5 shrink-0">
              
              {/* 4 Wings Card */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#110931]/90 border border-purple-500/40 backdrop-blur-xl shadow-2xl flex items-center gap-4 sm:gap-6">
                
                <Link href="/wings/aptitude" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 group-hover:text-amber-300">
                    Aptitude
                  </span>
                  <span className="text-[9px] text-purple-300/70">Quant &amp; Speed</span>
                </Link>

                <Link href="/wings/personality" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 group-hover:text-amber-300">
                    Personality
                  </span>
                  <span className="text-[9px] text-purple-300/70">GD &amp; Speaking</span>
                </Link>

                <Link href="/wings/technical" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 group-hover:text-amber-300">
                    Technical
                  </span>
                  <span className="text-[9px] text-purple-300/70">DSA &amp; Core CS</span>
                </Link>

                <Link href="/wings/interview" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 group-hover:text-amber-300">
                    Interview
                  </span>
                  <span className="text-[9px] text-purple-300/70">STAR &amp; HR</span>
                </Link>

              </div>

              {/* Dream Placement Banner */}
              <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-950/80 via-[#190c3d] to-purple-950/80 border border-amber-400/40 shadow-lg flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-amber-300 uppercase">
                    BE READY. STAND OUT.
                  </p>
                  <p className="font-serif italic text-sm text-slate-100 font-semibold">
                    Campus Placement Excellence
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 2. LIVE ANNOUNCEMENT RIBBON */}
      <div className="w-full bg-[#120a32] border-b border-purple-900/40 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 font-bold uppercase tracking-wider text-[10px]">
              <Megaphone className="w-3 h-3 text-amber-400" />
              Club Announcements:
            </span>
            <span className="text-slate-200 font-medium">
              5-Year Chronicles (2022–2026) are now accessible online!
            </span>
            <span className="text-purple-400 hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-purple-200 hidden md:inline-flex">
              <Calendar className="w-3 h-3 text-amber-400" />
              Mock Interview Registrations Open
            </span>
          </div>

          <Link
            href="/events"
            className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold text-xs ml-auto"
          >
            <span>View Events</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

        </div>
      </div>

      {/* 3. ABOUT APTI CLUB & INSTITUTIONAL VISION */}
      <section className="py-14 bg-gradient-to-b from-[#070417] via-[#0d0726] to-[#070417] border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
              About The Club
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Empowering Women Engineers to Lead &amp; Excel
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              APTI CLUB was established at GSSS Institute of Engineering and Technology for Women under the Department of Training &amp; Placement to bridge the gap between academic syllabus and industry recruitment expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 space-y-3 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Our Vision</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                To transform every student of GSSSIETW into an articulate, technically agile, and interview-ready professional capable of excelling in Tier-1 product, fintech, and global technology organizations.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 space-y-3 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">Our Mission</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Conduct high-yield workshops, simulated mock interview drives, coding bootcamps, and compile annual verified chronicles so every junior learns from authentic past placement experiences.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 space-y-3 hover:border-amber-400/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">The Four Wings Synergy</h3>
              <p className="text-xs text-purple-200/70 leading-relaxed">
                Structured across Aptitude (Quant &amp; Logic), Personality (GD &amp; Communication), Technical (DSA &amp; Core CS), and Interview (STAR HR &amp; Behavior) to leave zero weak spots.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MAIN BENTO GRID: EVENTS, COMPANY PREP, QUICK LINKS, CHRONICLES PREVIEW */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: UPCOMING EVENTS & COMPANY PREPARATION HUB (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* A. UPCOMING EVENTS */}
            <div className="p-6 rounded-3xl bg-card-luxury">
              
              <div className="flex items-center justify-between pb-5 border-b border-purple-900/30 mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif font-bold text-lg text-slate-100">
                    Upcoming Events &amp; Workshops
                  </h2>
                </div>
                <Link
                  href="/events"
                  className="flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {featuredEvent && (
                <div className="flex flex-col sm:flex-row gap-5 items-stretch">
                  <div className="relative w-full sm:w-48 h-44 sm:h-auto rounded-2xl overflow-hidden border border-purple-700/40 bg-purple-950 shrink-0">
                    <Image
                      src={featuredEvent.posterUrl}
                      alt={featuredEvent.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-black/60 text-amber-300 border border-amber-400/30">
                        APTI CLUB
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                          Registrations Open
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-slate-100">
                        {featuredEvent.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                        {featuredEvent.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        {featuredEvent.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        {featuredEvent.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        {featuredEvent.eligibleBatch}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => setSelectedEventForReg(featuredEvent)}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-400/20 transition-all"
                      >
                        <span>Register Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleWhatsAppShare(featuredEvent)}
                        className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                        title="Share on WhatsApp"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* B. COMPANY PREPARATION HUB */}
            <div className="p-6 rounded-3xl bg-card-luxury">
              
              <div className="flex items-center justify-between pb-5 border-b border-purple-900/30 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h2 className="font-serif font-bold text-lg text-slate-100">
                      Company Preparation Dossier
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Explore company-wise hiring patterns and verified student experiences.
                  </p>
                </div>
                <Link
                  href="/placement-hub"
                  className="flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold shrink-0"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {featuredCompany && (
                <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-700/30 flex flex-col md:flex-row items-center justify-between gap-5 hover:border-amber-400/40 transition-colors">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md">
                      <Image
                        src={featuredCompany.logoUrl}
                        alt={featuredCompany.name}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-100">
                        {featuredCompany.name}
                      </h3>
                      <span className="inline-block mt-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-900/60 text-purple-200 border border-purple-700/40">
                        {featuredCompany.experienceCount} Verified Reports
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-xs text-slate-300">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-amber-400 mb-0.5">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <p className="font-bold text-sm text-slate-100">{featuredCompany.roundsCount}</p>
                      <p className="text-[10px] text-slate-400">Rounds</p>
                    </div>

                    <div className="text-left border-l border-purple-800/40 pl-6 hidden sm:block">
                      <div className="flex items-center gap-1 text-amber-400 text-[10px] font-semibold uppercase">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>Key Topics</span>
                      </div>
                      <p className="text-xs text-slate-200 font-medium mt-0.5">
                        Aptitude • DSA • Core CS • HR
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/company/${featuredCompany.slug}`}
                    className="py-2.5 px-5 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-amber-300 font-semibold text-xs border border-purple-600/40 hover:border-amber-400/50 transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <span>View Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                </div>
              )}

            </div>

          </div>

          {/* RIGHT COLUMN: QUICK LINKS & 5-YEAR CHRONICLES PREVIEW (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* A. QUICK LINKS */}
            <div className="p-6 rounded-3xl bg-card-luxury">
              
              <div className="flex items-center gap-2 pb-5 border-b border-purple-900/30 mb-5">
                <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <h2 className="font-serif font-bold text-lg text-slate-100">
                  Quick Access
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                
                <Link
                  href="/wings/aptitude"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <Brain className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Apti Practice
                  </span>
                </Link>

                <Link
                  href="/company/compare"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <Sparkles className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Compare Recruiters
                  </span>
                </Link>

                <Link
                  href="/wings/technical"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <Code2 className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Technical Roadmap
                  </span>
                </Link>

                <Link
                  href="/wings/interview"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <FileText className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Resume &amp; STAR HR
                  </span>
                </Link>

                <Link
                  href="/events"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <Users className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Mock Interviews
                  </span>
                </Link>

                <Link
                  href="/dashboard"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <GraduationCap className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Student Dashboard
                  </span>
                </Link>

              </div>

            </div>

            {/* B. CHRONICLE ARCHIVE (5 YEARS PREVIEW) */}
            <div className="p-6 rounded-3xl bg-card-luxury">
              
              <div className="flex items-center justify-between pb-5 border-b border-purple-900/30 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h2 className="font-serif font-bold text-lg text-slate-100">
                      5-Year Chronicles Archive
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Authentic annual publications from 2022 through 2026.
                  </p>
                </div>

                <Link
                  href="/chronicles"
                  className="flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold shrink-0"
                >
                  <span>All Editions</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Real Extracted Chronicle Covers Grid */}
              <div className="grid grid-cols-3 gap-3">
                {chronicles.slice(0, 3).map((c) => (
                  <Link
                    key={c.id}
                    href={`/chronicles#${c.id}`}
                    className="group relative rounded-xl overflow-hidden border border-purple-700/40 hover:border-amber-400/60 transition-all shadow-md flex flex-col bg-[#140a32]"
                  >
                    <div className="relative aspect-[3/4] w-full bg-purple-950 overflow-hidden">
                      <Image
                        src={c.coverImageUrl}
                        alt={c.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-1.5 left-1 right-1 text-center">
                        <p className="text-[10px] font-bold text-amber-300 truncate">
                          {c.edition}
                        </p>
                        <p className="text-[9px] text-purple-200/80">
                          {c.pagesCount} Pages
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* 5. ROADMAP TIMELINE: ESTABLISHMENT TO MULTI-YEAR VISION */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-amber-400/30 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-purple-900/40">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-slate-100">
                  APTI CLUB Evolution &amp; Milestone Roadmap
                </h3>
                <p className="text-xs text-purple-200/80">
                  From founding genesis to an intelligent, multi-year career platform at GSSSIETW.
                </p>
              </div>
            </div>

            <Link
              href="/wings/technical"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md"
            >
              <span>Explore Milestones</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">2021 – 2022</span>
              <p className="font-bold text-xs text-white">Genesis &amp; Founding</p>
              <p className="text-[11px] text-purple-200/70">Club founded under T&amp;P Department; launch of Newsletter Vol. 1.</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">2022 – 2023</span>
              <p className="font-bold text-xs text-white">The Four Wings Framework</p>
              <p className="text-[11px] text-purple-200/70">Formalization of Aptitude, Personality, Technical, and Interview wings.</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">2023 – 2025</span>
              <p className="font-bold text-xs text-white">Career Catalyst Series</p>
              <p className="text-[11px] text-purple-200/70">Expansion to 50+ recruiting company dossiers and annual placement chronicles.</p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-amber-400 font-mono">2026 &amp; Beyond</span>
              <p className="font-bold text-xs text-white">AI Placement Intelligence</p>
              <p className="text-[11px] text-purple-200/70">Autonomous local RAG intelligence, verified student reports, and server-native governance.</p>
            </div>

          </div>

        </div>

        {/* 6. CORE COMMITTEE SECTION (EXACT 3 MEMBERS REQUIRED BY USER) */}
        <section id="team" className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-purple-700/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-900/40">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  GSSSIETW • Department of Training &amp; Placement
                </span>
                <h3 className="font-serif font-bold text-2xl text-white">
                  APTI CLUB Core Committee
                </h3>
              </div>
            </div>

            <a
              href="https://www.instagram.com/apticlub_gsss/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-900/60 to-pink-900/50 hover:from-purple-800 hover:to-pink-700 text-slate-200 hover:text-white text-xs font-semibold border border-purple-700/50 transition-all shadow-md self-start sm:self-auto"
            >
              <span>Follow @apticlub_gsss on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreTeamMembers.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0f092b] border border-purple-800/50 hover:border-amber-400/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-lg flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                      {member.initials}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                      {member.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-purple-200/70 mt-0.5">
                      {member.department} • {member.academicYear}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300/80 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] text-purple-300/80">
                  <span>APTI CLUB • GSSSIETW</span>
                  <span className="text-amber-400 font-semibold">Core Lead</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Registration Modal */}
      {selectedEventForReg && (
        <EventRegistrationModal
          event={selectedEventForReg}
          onClose={() => setSelectedEventForReg(null)}
        />
      )}

    </div>
  );
}
