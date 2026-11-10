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
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-purple-500 to-amber-200 shadow-lg overflow-hidden shrink-0">
                <div className="w-full h-full rounded-full bg-[#120a2e] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/apti-logo.png"
                    alt="APTI CLUB GSSSIETW"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 tracking-wide">
                  APTI CLUB
                </h3>
                <p className="text-xs text-purple-200 font-medium">
                  GSSSIETW, Mysuru
                </p>
                <p className="text-[11px] text-amber-300/90 italic font-serif">
                  Learn • Prepare • Grow
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm">
              The flagship student-led placement development platform of the Department of Training and Placement, GSSS Institute of Engineering and Technology for Women. Empowering juniors to level up with clarity, confidence, and purpose.
            </p>

            <div className="flex items-center gap-2 text-xs text-purple-200/70 pt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>KRS Road, Metagalli, Mysuru – 570 016, Karnataka</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-purple-200/70">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Affiliated to VTU Belagavi | Approved by AICTE | Accredited by NAAC & NBA</span>
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
                <Link href="/team" className="hover:text-amber-300 transition-colors">
                  Our Team (2026–2027)
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/chronicles" className="hover:text-amber-300 transition-colors">
                  Chronicles Archive
                </Link>
              </li>
              <li>
                <Link href="/wings/technical" className="hover:text-amber-300 transition-colors">
                  Technical Roadmap
                </Link>
              </li>
              <li>
                <Link href="/placement-hub" className="hover:text-amber-300 transition-colors">
                  Company Guides
                </Link>
              </li>
              <li>
                <Link href="/wings/interview" className="hover:text-amber-300 transition-colors">
                  Resume Essentials
                </Link>
              </li>
              <li>
                <Link href="/wings/personality" className="hover:text-amber-300 transition-colors">
                  Interview Behaviour Check
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us & Motto */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3">
                {/* Instagram SVG */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all border border-purple-800/40"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* LinkedIn SVG */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all border border-purple-800/40"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* YouTube SVG */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all border border-purple-800/40"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                <a
                  href="mailto:placement@gsss.edu.in"
                  className="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all border border-purple-800/40"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visual reference signature motto */}
            <div className="pt-2">
              <p className="font-serif italic text-lg lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 font-medium">
                Be Ready. Stand Out.
              </p>
              <p className="text-[10px] text-purple-300/60 mt-1 uppercase tracking-widest font-mono">
                Department of T&P
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 APTI CLUB, GSSSIETW. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Department of Training and Placement</span>
            <span>•</span>
            <span>Designed for Campus Placements</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
