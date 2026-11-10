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
  MessageSquare,
  MapPin,
  Megaphone
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { EventItem } from '@/types';
import EventRegistrationModal from '@/components/EventRegistrationModal';

export default function HomePage() {
  const { events, companies, chronicles } = useStore();
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);

  // Active upcoming event (e.g. Mock Interview)
  const featuredEvent = events[0] || null;

  // Active featured company (Deutsche Bank)
  const featuredCompany = companies.find(c => c.slug === 'deutsche-bank') || companies[0];

  const handleWhatsAppShare = (event: EventItem) => {
    const text = encodeURIComponent(
      event.whatsAppTemplate || 
      `*${event.title}* - APTI CLUB GSSSIETW\nDate: ${event.date} at ${event.time}\nRegister here: https://apti-gsssietw.edu/events`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-hero-gradient pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-purple-900/40">
        
        {/* Abstract Gold & Purple ambient lighting */}
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Subtle curved luxury ribbon gradient */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/20 via-purple-700/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Hero Left Content */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              
              {/* Department Kicker with lines */}
              <div className="inline-flex items-center gap-3">
                <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-400/80" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                  DEPARTMENT OF TRAINING &amp; PLACEMENT
                </span>
                <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-400/80" />
              </div>

              {/* Massive APTI CLUB Display Title */}
              <h1 className="font-serif font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 drop-shadow-sm">
                APTI CLUB
              </h1>

              {/* Tagline Script */}
              <p className="font-serif italic text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 font-medium">
                Prepare. Practice. Perform.
              </p>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-purple-200/90 font-light max-w-xl mx-auto lg:mx-0 pt-1">
                Your Placement Journey Starts Here.
              </p>

              {/* Hero CTA Button */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/placement-hub"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2 group hover:scale-[1.02]"
                >
                  <span>Explore Resources</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/events"
                  className="px-6 py-3 rounded-full bg-purple-950/60 hover:bg-purple-900/80 text-amber-300 font-semibold text-xs tracking-wider border border-purple-700/50 hover:border-amber-400/50 transition-all"
                >
                  Upcoming Events
                </Link>
              </div>

            </div>

            {/* Hero Right: 4 Wings Interactive Floating Badges + Dream Placement */}
            <div className="flex flex-col items-center lg:items-end gap-5">
              
              {/* 4 Wings Card */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#110931]/80 border border-purple-500/30 backdrop-blur-xl shadow-2xl flex items-center gap-4 sm:gap-6">
                
                <Link href="/wings/aptitude" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-300 group-hover:text-amber-300">
                    Aptitude
                  </span>
                </Link>

                <Link href="/wings/personality" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-300 group-hover:text-amber-300">
                    Personality
                  </span>
                </Link>

                <Link href="/wings/technical" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-300 group-hover:text-amber-300">
                    Technical
                  </span>
                </Link>

                <Link href="/wings/interview" className="flex flex-col items-center group text-center">
                  <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/40 group-hover:border-amber-400/70 group-hover:scale-105 transition-all flex items-center justify-center text-amber-300 mb-1.5 shadow-md">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-300 group-hover:text-amber-300">
                    Interview
                  </span>
                </Link>

              </div>

              {/* Dream Placement Banner matching visual reference */}
              <div className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-950/70 via-[#190c3d] to-purple-950/70 border border-amber-400/30 shadow-lg flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                    DREAM PLACEMENT
                  </p>
                  <p className="font-serif italic text-sm text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 font-semibold">
                    Be Ready. Stand Out.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 2. ANNOUNCEMENT RIBBON */}
      <div className="w-full bg-[#120a32] border-b border-purple-900/40 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 font-bold uppercase tracking-wider text-[10px]">
              <Megaphone className="w-3 h-3 text-amber-400" />
              Latest Announcements:
            </span>
            <span className="text-slate-200 font-medium hidden sm:inline">
              Mock Interview Registrations are now open!
            </span>
            <span className="text-purple-400 hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-purple-200 hidden md:inline-flex">
              <Calendar className="w-3 h-3 text-amber-400" />
              Event: GD Workshop on Nov 15, 2026
            </span>
          </div>

          <Link
            href="/events"
            className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold text-xs ml-auto"
          >
            <span>View All</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

        </div>
      </div>

      {/* 3. MAIN DASHBOARD CONTENT (BENTO 2-COLUMN GRID) */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: UPCOMING EVENTS & COMPANY PREPARATION HUB (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* A. UPCOMING EVENTS */}
            <div className="p-6 rounded-3xl bg-card-luxury">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-purple-900/30 mb-5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif font-bold text-lg text-slate-100">
                    Upcoming Events
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

              {/* Event Card Content */}
              {featuredEvent && (
                <div className="flex flex-col sm:flex-row gap-5 items-stretch">
                  
                  {/* Poster Image */}
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

                  {/* Details */}
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

                    {/* Action Buttons */}
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
              
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-purple-900/30 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <h2 className="font-serif font-bold text-lg text-slate-100">
                      Company Preparation Hub
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Explore company-wise preparation guides and verified alumni experiences.
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

              {/* Company Card matching visual reference */}
              {featuredCompany && (
                <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-700/30 flex flex-col md:flex-row items-center justify-between gap-5 hover:border-amber-400/40 transition-colors">
                  
                  {/* Left: Logo & Name */}
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
                        {featuredCompany.experienceCount} Interview Experiences
                      </span>
                    </div>
                  </div>

                  {/* Middle: Rounds & Key Topics */}
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
                        Aptitude • Technical • HR
                      </p>
                    </div>
                  </div>

                  {/* Right: View Details CTA */}
                  <Link
                    href={`/company/${featuredCompany.slug}`}
                    className="py-2.5 px-5 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-amber-300 font-semibold text-xs border border-purple-600/40 hover:border-amber-400/50 transition-all flex items-center gap-1.5 shrink-0"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                </div>
              )}

            </div>

          </div>

          {/* RIGHT COLUMN: QUICK LINKS & CHRONICLE ARCHIVE (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* A. QUICK LINKS */}
            <div className="p-6 rounded-3xl bg-card-luxury">
              
              <div className="flex items-center gap-2 pb-5 border-b border-purple-900/30 mb-5">
                <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <h2 className="font-serif font-bold text-lg text-slate-100">
                  Quick Links
                </h2>
              </div>

              {/* 6 Tile Grid matching reference */}
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
                  href="/placement-hub#companies"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <Building2 className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Company Directory
                  </span>
                </Link>

                <Link
                  href="/placement-hub#roadmap"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <MapPin className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Preparation Roadmap
                  </span>
                </Link>

                <Link
                  href="/wings/interview#resume-guide"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <FileText className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    Resume Tips
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
                  href="/wings/personality#gd"
                  className="p-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 hover:border-amber-400/40 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <MessageSquare className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 group-hover:text-amber-200">
                    GD Topics
                  </span>
                </Link>

              </div>

            </div>

            {/* B. CHRONICLE ARCHIVE */}
            <div className="p-6 rounded-3xl bg-card-luxury">
              
              <div className="flex items-center justify-between pb-5 border-b border-purple-900/30 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-400">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h2 className="font-serif font-bold text-lg text-slate-100">
                      Chronicle Archive
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Explore our journey through previous editions.
                  </p>
                </div>

                <Link
                  href="/chronicles"
                  className="flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold shrink-0"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* 3 Magazine Covers Row */}
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
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* 4. YOUR PLACEMENT JOURNEY ROADMAP (FULL-WIDTH LUXURY BAR) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-amber-400/30 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-purple-900/40">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-slate-100">
                  Your Placement Journey
                </h3>
                <p className="text-xs text-purple-200/80">
                  A step-by-step roadmap to crack your placement drives.
                </p>
              </div>
            </div>

            <Link
              href="/placement-hub#roadmap"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-amber-400/10"
            >
              <span>View Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Horizontal Milestones matching reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            
            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-100">Early Preparation</p>
                <p className="text-[11px] text-slate-400">1st Year • Fundamentals</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-100">Skill Development</p>
                <p className="text-[11px] text-slate-400">2nd Year • DSA &amp; Projects</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-100">Profile Building</p>
                <p className="text-[11px] text-slate-400">3rd Year • Resume &amp; Internships</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/60 flex items-center justify-center text-amber-400 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-100">Recruitment Readiness</p>
                <p className="text-[11px] text-slate-400">4th Year • Placements</p>
              </div>
            </div>

          </div>

        </div>

        {/* 5. APTI CLUB 2026-2027 TEAM BANNER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card-luxury border border-purple-700/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-900/60 border border-purple-700/50 flex items-center justify-center text-amber-400 shrink-0 shadow-lg">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Department of Training &amp; Placement
              </span>
              <h3 className="font-serif font-bold text-xl text-slate-100">
                APTI CLUB 2026 – 2027
              </h3>
              <p className="text-xs text-purple-200/80 mt-1">
                Meet our student coordinators, wing leads, and editorial heads driving placement success.
              </p>
            </div>
          </div>

          <Link
            href="/team"
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-400/20 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

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
