'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  Circle, 
  Download, 
  FileText, 
  Award, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  TrendingUp,
  Bookmark,
  ExternalLink,
  ShieldCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function StudentDashboardPage() {
  const { companies, experiences, events } = useStore();

  const [student, setStudent] = useState({
    name: 'Sneha Sharma',
    usn: '4GW22CS045',
    department: 'Computer Science & Engineering',
    semester: '6th Semester',
    cgpa: 8.75,
    email: 'sneha.cs22@gsss.edu.in',
    phone: '+91 98451 23456',
    readinessScore: 82
  });

  const [checklist, setChecklist] = useState([
    { id: 1, title: 'Master Core DSA (Trees, Graphs, DP)', wing: 'Technical', done: true },
    { id: 2, title: 'Revise SQL Joins, Indexing & Normalization', wing: 'Technical', done: true },
    { id: 3, title: 'Speed-Math & Quant Formulas Practice', wing: 'Aptitude', done: true },
    { id: 4, title: 'STAR Method Prep for 5 Behavioral Scenarios', wing: 'Interview', done: false },
    { id: 5, title: 'Resume Technical Deep-Dive & Architecture Diagrams', wing: 'Interview', done: true },
    { id: 6, title: 'Appear for Live Club Mock Interview', wing: 'Events', done: false }
  ]);

  const toggleChecklist = (id: number) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const completedCount = checklist.filter(c => c.done).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const appliedDrives = [
    { company: 'Deutsche Bank', role: 'Graduate Technology Analyst', package: '19.6 LPA', status: 'Shortlisted for Round 2', date: 'Nov 28, 2026', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { company: 'Accenture', role: 'Advanced ASE (FADA)', package: '6.5 LPA', status: 'Registration Verified', date: 'Dec 05, 2026', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
    { company: 'Infosys', role: 'Digital Specialist Engineer', package: '6.25 LPA', status: 'Application Submitted', date: 'Dec 12, 2026', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070417] via-[#0d0726] to-[#070417] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/80 via-[#190c3e] to-[#12082f] border border-purple-800/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-2xl shadow-lg shadow-amber-500/20">
                {student.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-white tracking-tight">{student.name}</h1>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-medium">
                    Verified Student
                  </span>
                </div>
                <p className="text-xs text-purple-200/80 mt-1">
                  USN: <span className="font-mono text-amber-200">{student.usn}</span> • {student.department} • {student.semester}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/api/reports/template"
                download
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#231252] hover:bg-[#2c1764] text-xs font-semibold text-purple-200 hover:text-white border border-purple-700/50 transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>Download Report Template</span>
              </a>
              <Link
                href="/placement-hub/submit-report"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-xs font-bold text-slate-950 shadow-md shadow-amber-500/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Interview Report</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-purple-800/40">
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Overall CGPA</p>
              <p className="text-xl font-bold text-amber-300 mt-0.5">{student.cgpa} / 10.0</p>
            </div>
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Placement Readiness</p>
              <p className="text-xl font-bold text-emerald-400 mt-0.5">{progressPercent}% Ready</p>
            </div>
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Active Applications</p>
              <p className="text-xl font-bold text-blue-300 mt-0.5">{appliedDrives.length} Drives</p>
            </div>
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Verified Reports</p>
              <p className="text-xl font-bold text-purple-200 mt-0.5">1 Published</p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 Cols): Applications Tracker + Readiness Checklist */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Campus Drives Application Tracker */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-amber-400" />
                  <h2 className="text-base font-bold text-white">Drive Applications Tracker</h2>
                </div>
                <Link href="/placement-hub" className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-medium">
                  <span>Browse More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                {appliedDrives.map((d, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-[#160c3b] border border-purple-900/40 hover:border-purple-700/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white">{d.company}</h3>
                        <span className="text-xs font-semibold text-amber-300">{d.package}</span>
                      </div>
                      <p className="text-xs text-purple-200/70 mt-0.5">{d.role}</p>
                      <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Drive Date: {d.date}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium border ${d.badge}`}>
                        {d.status}
                      </span>
                      <Link 
                        href={`/company/${d.company.toLowerCase().replace(/\s+/g, '-')}`}
                        className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-800/60 text-purple-200 hover:text-white transition-colors"
                        title="View Company Dossier"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Preparation Readiness Checklist */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-base font-bold text-white">Placement Readiness Checklist</h2>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  {completedCount} of {checklist.length} Completed
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-purple-950/80 mb-6 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="space-y-2.5">
                {checklist.map(item => (
                  <button
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all ${
                      item.done 
                        ? 'bg-purple-950/30 border-purple-900/40 text-slate-300' 
                        : 'bg-[#160c3b] border-purple-800/50 text-white hover:border-amber-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span className={`text-xs ${item.done ? 'line-through text-slate-400' : 'font-medium'}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-700/40 shrink-0">
                      {item.wing}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (1 Col): Company Comparison shortcut + High Yield Resources */}
          <div className="space-y-8">
            
            {/* Innovative Tool: Company Comparison Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#180a3c] to-[#0f0727] border border-amber-400/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Placement Intelligence</h3>
              </div>
              <h4 className="text-lg font-bold text-amber-200">Company Comparison Engine</h4>
              <p className="text-xs text-purple-200/80 mt-1 leading-relaxed">
                Compare recruitment patterns, salary packages, assessment difficulty, and rounds timeline side-by-side.
              </p>
              <Link
                href="/company/compare"
                className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-bold shadow-md hover:brightness-110 transition-all"
              >
                <span>Launch Comparison</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* High Yield Interview Preparation Wings */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-3">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Four Wings Resources</span>
              </h3>

              <Link 
                href="/wings/technical"
                className="flex items-center justify-between p-3 rounded-xl bg-[#160c3b] hover:bg-purple-900/40 text-xs text-slate-200 transition-colors border border-purple-900/40"
              >
                <span>Technical Wing (DSA, DBMS, OOPs)</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link 
                href="/wings/aptitude"
                className="flex items-center justify-between p-3 rounded-xl bg-[#160c3b] hover:bg-purple-900/40 text-xs text-slate-200 transition-colors border border-purple-900/40"
              >
                <span>Aptitude Wing (Speed-Math & Quant)</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link 
                href="/wings/interview"
                className="flex items-center justify-between p-3 rounded-xl bg-[#160c3b] hover:bg-purple-900/40 text-xs text-slate-200 transition-colors border border-purple-900/40"
              >
                <span>Interview Wing (STAR Behavioral)</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link 
                href="/chronicles"
                className="flex items-center justify-between p-3 rounded-xl bg-[#160c3b] hover:bg-purple-900/40 text-xs text-slate-200 transition-colors border border-purple-900/40"
              >
                <span>Career Catalyst Vol 2 (PDF Magazine)</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
