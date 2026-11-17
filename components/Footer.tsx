'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050312] border-t border-purple-900/40 relative overflow-hidden pt-12 pb-8">
      {/* Decorative Gold & Purple Glow lines */}
      <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent blur-sm" />
      <div className="absolute top-0 right-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-purple-600/40 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-10 border-b border-purple-900/30">
          
          {/* Brand Info with Dual Logos */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* APTI CLUB Logo */}
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-purple-500 to-amber-200 shadow-lg overflow-hidden shrink-0">
                <div className="w-full h-full rounded-full bg-[#120a2e] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/apti-logo.png"
                    alt="APTI CLUB Official Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* GSSSIETW College Logo */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-purple-800/40 p-1 flex items-center justify-center shrink-0">
                <Image
                  src="/assets/gsss-logo.png"
                  alt="GSSSIETW College Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-serif font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 tracking-wide">
                  APTI CLUB
                </h3>
                <p className="text-xs text-purple-200 font-medium">
                  GSSSIETW, Mysuru
                </p>
                <p className="text-[11px] text-amber-300/90 italic font-serif">
                  Dream • Discover • Define
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm">
              The official student placement &amp; career development platform of GSSS Institute of Engineering and Technology for Women. Empowering students across the Four Wings: Aptitude, Personality, Technical, and Interview.
            </p>

            <div className="flex items-center gap-2 text-xs text-purple-200/70 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>KRS Road, Metagalli, Mysuru – 570 016, Karnataka</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-200/70">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Affiliated to VTU Belagavi | Approved by AICTE | Accredited by NAAC &amp; NBA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/wings/aptitude" className="hover:text-amber-300 transition-colors">
                  The Four Wings
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-amber-300 transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/placement-hub" className="hover:text-amber-300 transition-colors">
                  Placement Hub
                </Link>
              </li>
              <li>
                <Link href="/company/compare" className="hover:text-amber-300 transition-colors">
                  Compare Companies
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Chronicles */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
              Archives &amp; Prep
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/chronicles" className="hover:text-amber-300 transition-colors">
                  5 Years Chronicles Archive
                </Link>
              </li>
              <li>
                <Link href="/wings/technical" className="hover:text-amber-300 transition-colors">
                  Technical Wing Roadmap
                </Link>
              </li>
              <li>
                <Link href="/company/compare" className="hover:text-amber-300 transition-colors">
                  Company Comparison
                </Link>
              </li>
              <li>
                <Link href="/wings/aptitude" className="hover:text-amber-300 transition-colors">
                  Aptitude Formula Bank
                </Link>
              </li>
              <li>
                <Link href="/wings/interview" className="hover:text-amber-300 transition-colors">
                  STAR Interview Checklist
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Social Links & Motto */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                Official Channels
              </h4>
              <div className="flex items-center gap-3">
                {/* Official Instagram Link Only */}
                <a
                  href="https://www.instagram.com/apticlub_gsss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-900/60 to-pink-900/50 hover:from-purple-800 hover:to-pink-700 text-slate-200 hover:text-white flex items-center gap-2 text-xs font-medium border border-purple-700/50 transition-all shadow-md"
                  aria-label="Official APTI CLUB Instagram"
                >
                  <svg className="w-4 h-4 fill-current text-pink-400" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@apticlub_gsss</span>
                </a>

                {/* Email Placeholder */}
                <a
                  href="mailto:apticlub@gsss.edu.in"
                  className="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all border border-purple-800/40"
                  aria-label="Official Email"
                  title="Contact APTI CLUB"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Signature Signature Motto */}
            <div className="pt-2">
              <p className="font-serif italic text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 font-medium">
                Be Ready. Stand Out.
              </p>
              <p className="text-[10px] text-purple-300/70 mt-0.5 uppercase tracking-widest font-mono">
                Department of Training &amp; Placement
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 APTI CLUB, GSSSIETW, Mysuru. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>GSSS Institute of Engineering and Technology for Women</span>
            <span>•</span>
            <span>Accredited NAAC &amp; NBA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
