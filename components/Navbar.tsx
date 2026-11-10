'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  ChevronDown, 
  Lock, 
  ShieldCheck, 
  Menu, 
  X, 
  Brain, 
  Users, 
  Code2, 
  Handshake, 
  FileText, 
  Calendar, 
  Sparkles,
  MapPin
} from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';
import { useStore } from '@/lib/store';

export default function Navbar() {
  const pathname = usePathname();
  const { isAdmin } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wingsDropdownOpen, setWingsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070417]/90 border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo & College Header */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-purple-500 to-amber-200 shadow-md shadow-purple-950/50 group-hover:scale-105 transition-transform overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#140b2f] flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/apti-logo.png"
                  alt="APTI CLUB Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif tracking-wider font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400">
                  APTI CLUB
                </span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.2 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-semibold">
                  T&P
                </span>
              </div>
              <p className="text-[11px] text-purple-200/80 font-medium tracking-tight">
                GSSSIETW, Mysuru
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            
            {/* Home Pill */}
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive('/')
                  ? 'bg-gradient-to-r from-amber-300 to-amber-400 text-slate-950 shadow-md shadow-amber-400/20 font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            {/* Four Wings Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setWingsDropdownOpen(true)}
              onMouseLeave={() => setWingsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive('/wings')
                    ? 'text-amber-300 bg-purple-900/40 border border-purple-700/50'
                    : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                <span>Four Wings</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${wingsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {wingsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-[#0f092b] border border-purple-500/30 shadow-2xl p-2 backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2">
                  <Link
                    href="/wings/aptitude"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-900/40 text-slate-200 hover:text-amber-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center border border-purple-700/30 text-amber-400">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Aptitude Wing</p>
                      <p className="text-[10px] text-slate-400">Quant, Logical, Verbal, Perspect AI</p>
                    </div>
                  </Link>

                  <Link
                    href="/wings/personality"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-900/40 text-slate-200 hover:text-amber-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center border border-purple-700/30 text-amber-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Personality Wing</p>
                      <p className="text-[10px] text-slate-400">GD, Communication, Etiquette</p>
                    </div>
                  </Link>

                  <Link
                    href="/wings/technical"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-900/40 text-slate-200 hover:text-amber-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center border border-purple-700/30 text-amber-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Technical Wing</p>
                      <p className="text-[10px] text-slate-400">DSA, OOPs, DBMS, OS, Networks</p>
                    </div>
                  </Link>

                  <Link
                    href="/wings/interview"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-900/40 text-slate-200 hover:text-amber-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center border border-purple-700/30 text-amber-400">
                      <Handshake className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">Interview Wing</p>
                      <p className="text-[10px] text-slate-400">HR, Resume, Virtual Hiring Check</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Events */}
            <Link
              href="/events"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive('/events')
                  ? 'text-amber-300 bg-purple-900/40 border border-purple-700/50'
                  : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
              }`}
            >
              Events
            </Link>

            {/* Placement Hub */}
            <Link
              href="/placement-hub"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive('/placement-hub') || isActive('/company')
                  ? 'text-amber-300 bg-purple-900/40 border border-purple-700/50'
                  : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
              }`}
            >
              Placement Hub
            </Link>

            {/* Chronicles */}
            <Link
              href="/chronicles"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive('/chronicles')
                  ? 'text-amber-300 bg-purple-900/40 border border-purple-700/50'
                  : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
              }`}
            >
              Chronicles
            </Link>

            {/* Our Team */}
            <Link
              href="/team"
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive('/team')
                  ? 'text-amber-300 bg-purple-900/40 border border-purple-700/50'
                  : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
              }`}
            >
              Our Team
            </Link>

            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-purple-900/30 transition-all"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-52 rounded-2xl bg-[#0f092b] border border-purple-500/30 shadow-2xl p-2 backdrop-blur-xl z-50">
                  <Link
                    href="/placement-hub#roadmap"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-purple-900/40 text-xs text-slate-200 hover:text-amber-200"
                  >
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Placement Roadmap</span>
                  </Link>
                  <Link
                    href="/wings/interview#resume-guide"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-purple-900/40 text-xs text-slate-200 hover:text-amber-200"
                  >
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span>Resume Essentials</span>
                  </Link>
                  <Link
                    href="/about"
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-purple-900/40 text-xs text-slate-200 hover:text-amber-200"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>About APTI CLUB</span>
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <NotificationDropdown />

            <Link
              href="/admin"
              className={`hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                isAdmin 
                  ? 'bg-purple-900/60 text-emerald-300 border-emerald-500/40 hover:bg-purple-900/80'
                  : 'bg-gradient-to-r from-purple-900/40 to-[#1b103e] text-amber-300 border-amber-400/40 hover:border-amber-300 hover:shadow-md hover:shadow-amber-400/10'
              }`}
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Admin Portal</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-300" />
                  <span>Admin Login</span>
                </>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-purple-900/40"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0729] border-b border-purple-900/50 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-purple-900/40 hover:text-amber-300"
          >
            <Home className="w-4 h-4 text-amber-400" />
            <span>Home</span>
          </Link>

          <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-purple-300/70">
            The Four Wings
          </div>
          <div className="grid grid-cols-2 gap-1 pl-2">
            <Link
              href="/wings/aptitude"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded-lg text-xs text-slate-300 hover:bg-purple-900/40"
            >
              <Brain className="w-3.5 h-3.5 text-amber-400" />
              <span>Aptitude Wing</span>
            </Link>
            <Link
              href="/wings/personality"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded-lg text-xs text-slate-300 hover:bg-purple-900/40"
            >
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>Personality Wing</span>
            </Link>
            <Link
              href="/wings/technical"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded-lg text-xs text-slate-300 hover:bg-purple-900/40"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Technical Wing</span>
            </Link>
            <Link
              href="/wings/interview"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2 rounded-lg text-xs text-slate-300 hover:bg-purple-900/40"
            >
              <Handshake className="w-3.5 h-3.5 text-amber-400" />
              <span>Interview Wing</span>
            </Link>
          </div>

          <div className="border-t border-purple-900/40 pt-2 space-y-1">
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-purple-900/40 hover:text-amber-300"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Upcoming Events</span>
            </Link>

            <Link
              href="/placement-hub"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-purple-900/40 hover:text-amber-300"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Placement Hub</span>
            </Link>

            <Link
              href="/chronicles"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-purple-900/40 hover:text-amber-300"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Chronicles Archive</span>
            </Link>

            <Link
              href="/team"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-purple-900/40 hover:text-amber-300"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Our Team</span>
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isAdmin ? 'Open Admin Portal' : 'Admin Login'}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
