'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  User, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  Circle, 
  Calendar, 
  Award, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  Clock,
  MapPin,
  Search,
  Bell,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Check,
  AlertCircle
} from 'lucide-react';
import { useStore } from '@/lib/store';
import EventRegistrationModal from '@/components/EventRegistrationModal';
import { EventItem } from '@/types';

export default function StudentDashboardPage() {
  const { 
    companies, 
    events, 
    registrations, 
    notifications, 
    markNotificationAsRead 
  } = useStore();

  const [searchCompany, setSearchCompany] = useState('');
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);

  // Personalized Student Profile (Personal View Only)
  const [student] = useState({
    name: 'Sneha Sharma',
    usn: '4GW22CS045',
    department: 'Computer Science & Engineering',
    semester: '6th Semester',
    cgpa: 8.75,
    email: 'sneha.cs22@gsss.edu.in',
    phone: '+91 98451 23456'
  });

  // Interactive Personal Preparation Roadmap & Checklist
  const [checklist, setChecklist] = useState([
    { id: 1, title: 'Master Core DSA (Trees, Graphs, BFS/DFS, DP)', wing: 'Technical', done: true },
    { id: 2, title: 'Revise SQL Joins, Indexing & Normalization (1NF–BCNF)', wing: 'Technical', done: true },
    { id: 3, title: 'Speed-Math & Quant Formulas Practice (TSD, Work & Time)', wing: 'Aptitude', done: true },
    { id: 4, title: 'STAR Method Prep for 5 Behavioral Scenarios', wing: 'Interview', done: false },
    { id: 5, title: 'Technical Project Architecture & System Diagrams Defense', wing: 'Interview', done: true },
    { id: 6, title: 'Appear for Live Club Mock Interview & GD Masterclass', wing: 'Events', done: false }
  ]);

  const toggleChecklist = (id: number) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const completedCount = checklist.filter(c => c.done).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  // Tracked drives for student
  const appliedDrives = [
    { company: 'Deutsche Bank', role: 'Graduate Technology Analyst', package: '19.60 LPA', status: 'Shortlisted for Round 2', date: 'Nov 28, 2026', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { company: 'Accenture', role: 'Advanced ASE (FADA)', package: '6.50 LPA', status: 'Registration Verified', date: 'Dec 05, 2026', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
    { company: 'Infosys', role: 'Digital Specialist Engineer', package: '6.25 LPA', status: 'Application Submitted', date: 'Dec 12, 2026', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' }
  ];

  // Filtered upcoming events (status: open)
  const upcomingEvents = events.filter(e => e.status === 'open').slice(0, 3);

  // Filtered student registrations for events
  const myEventRegistrations = registrations.filter(
    r => r.usn.toLowerCase() === student.usn.toLowerCase() || r.email.toLowerCase() === student.email.toLowerCase()
  );

  // Searchable Company Dossiers for Placement Intelligence
  const filteredCompanies = companies.filter(c => 
    c.name.toLowerCase().includes(searchCompany.toLowerCase()) ||
    c.category.toLowerCase().includes(searchCompany.toLowerCase()) ||
    c.keyTopics.some(t => t.toLowerCase().includes(searchCompany.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070417] via-[#0d0726] to-[#070417] py-10 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Personalized Welcome Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/80 via-[#190c3e] to-[#12082f] border border-amber-400/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-2xl shadow-lg shadow-amber-500/20 shrink-0">
                {student.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-white tracking-tight">Welcome, {student.name}</h1>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Student
                  </span>
                </div>
                <p className="text-xs text-purple-200/80 mt-1">
                  USN: <span className="font-mono text-amber-300 font-semibold">{student.usn}</span> • {student.department} • {student.semester}
                </p>
              </div>
            </div>

            {/* Quick Profile Overview Metrics */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-purple-950/60 border border-purple-800/60 text-right">
                <p className="text-[10px] text-purple-300 uppercase tracking-wider font-semibold">Academic CGPA</p>
                <p className="text-lg font-bold text-amber-300">{student.cgpa} / 10.0</p>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-purple-950/60 border border-purple-800/60 text-right">
                <p className="text-[10px] text-purple-300 uppercase tracking-wider font-semibold">Prep Progress</p>
                <p className="text-lg font-bold text-emerald-400">{progressPercent}% Ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 Cols): Upcoming Events & My Registrations & Drive Tracker */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Section 1: Upcoming Events & Registration Deadlines */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <h2 className="text-base font-bold text-white">Upcoming Events &amp; Registration Deadlines</h2>
                </div>
                <Link href="/events" className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 font-medium">
                  <span>View All Events</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                {upcomingEvents.map((evt) => (
                  <div 
                    key={evt.id}
                    className="p-4 rounded-2xl bg-[#160c3b] border border-purple-900/40 hover:border-amber-400/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-900 text-amber-300 border border-purple-700/50">
                          {evt.category}
                        </span>
                        <h3 className="text-sm font-bold text-white">{evt.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-purple-200/80 pt-0.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {evt.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          {evt.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          {evt.venue}
                        </span>
                      </div>
                      <p className="text-[11px] text-amber-300/90 font-medium">
                        Deadline: {evt.registrationDeadline}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => setSelectedEventForReg(evt)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                      >
                        <span>Register Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: My Registrations & Drive Tracker */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-amber-400" />
                  <h2 className="text-base font-bold text-white">My Campus Drives &amp; Registrations</h2>
                </div>
                <span className="text-xs text-purple-300 font-mono">
                  {appliedDrives.length} Active Drives
                </span>
              </div>

              <div className="space-y-3">
                {appliedDrives.map((d, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-[#160c3b] border border-purple-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-white">{d.company}</h3>
                        <span className="text-xs font-semibold text-amber-300">{d.package}</span>
                      </div>
                      <p className="text-xs text-purple-200/70 mt-0.5">{d.role}</p>
                      <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-purple-400" />
                        <span>Scheduled: {d.date}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-3 py-1 rounded-full font-medium border ${d.badge}`}>
                        {d.status}
                      </span>
                      <Link 
                        href={`/company/${d.company.toLowerCase().replace(/\s+/g, '-')}`}
                        className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-800/60 text-purple-200 hover:text-white transition-colors"
                        title="View Company Placement Dossier"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}

                {/* My Event Registrations (if registered in store) */}
                {myEventRegistrations.map((reg) => (
                  <div
                    key={reg.id}
                    className="p-4 rounded-2xl bg-[#190c3e]/70 border border-purple-800/50 flex items-center justify-between gap-3"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        Event Registration
                      </span>
                      <h3 className="text-sm font-bold text-white mt-1">{reg.eventTitle}</h3>
                      <p className="text-[11px] text-purple-300/70">Registration ID: {reg.id}</p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-medium">
                      Confirmed
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Placement Intelligence Search & Company Dossiers */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  <div>
                    <h2 className="text-base font-bold text-white">Placement Intelligence &amp; Company Dossiers</h2>
                    <p className="text-xs text-purple-200/70">Search recruitment rounds, tested topics, and candidate interview experiences.</p>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search by company name, category (Fintech, Product), or topics (DSA, SQL)..."
                  value={searchCompany}
                  onChange={(e) => setSearchCompany(e.target.value)}
                  className="w-full bg-[#160c3b] border border-purple-800/50 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-purple-300/50 focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Company Cards List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {filteredCompanies.slice(0, 4).map((comp) => (
                  <div
                    key={comp.id}
                    className="p-4 rounded-2xl bg-[#160c3b] border border-purple-900/40 hover:border-purple-700/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-900/70 text-amber-300 border border-purple-700/50">
                          {comp.category}
                        </span>
                        <span className="text-[11px] font-mono text-purple-300">
                          {comp.roundsCount} Rounds
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white mt-2">{comp.name}</h3>
                      <p className="text-xs text-purple-200/70 mt-1 line-clamp-2">
                        {comp.overview.summary}
                      </p>
                      
                      {/* Key Topics Badges */}
                      <div className="flex flex-wrap gap-1 mt-3">
                        {comp.keyTopics.slice(0, 3).map((topic, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-purple-950 text-slate-300 border border-purple-800/40">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/company/${comp.slug}`}
                      className="mt-4 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-purple-950/70 hover:bg-purple-900/70 text-xs font-semibold text-amber-300 border border-purple-800/40 transition-colors"
                    >
                      <span>Explore Company Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (1 Col): Interactive Preparation Checklist & Live Notifications */}
          <div className="space-y-8">
            
            {/* Interactive Preparation Readiness Checklist */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-sm font-bold text-white">Preparation Roadmap</h3>
                </div>
                <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                  {completedCount}/{checklist.length}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-purple-950 overflow-hidden">
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
                    className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between gap-2.5 transition-all ${
                      item.done 
                        ? 'bg-purple-950/30 border-purple-900/40 text-slate-400' 
                        : 'bg-[#160c3b] border-purple-800/50 text-white hover:border-amber-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.done ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                      <span className={`text-xs ${item.done ? 'line-through text-slate-400' : 'font-medium'}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-700/40 shrink-0">
                      {item.wing}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Access to Four Wings & Chronicles */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-3">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Preparation Wings &amp; Resources</span>
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
                <span>Aptitude Wing (Speed-Math &amp; Quant)</span>
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
                href="/company/compare"
                className="flex items-center justify-between p-3 rounded-xl bg-[#160c3b] hover:bg-purple-900/40 text-xs text-slate-200 transition-colors border border-purple-900/40"
              >
                <span>Company Comparison Engine</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link 
                href="/chronicles"
                className="flex items-center justify-between p-3 rounded-xl bg-[#160c3b] hover:bg-purple-900/40 text-xs text-slate-200 transition-colors border border-purple-900/40"
              >
                <span>Chronicles Archive (5 Years)</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Notifications Feed (15-Day Policy Enforced) */}
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white">Recent Notifications</h3>
                </div>
                <span className="text-[10px] text-purple-300/70 font-mono">15-day retention</span>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {notifications.slice(0, 4).map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => markNotificationAsRead(notif.id)}
                    className={`p-3 rounded-xl border text-xs transition-colors cursor-pointer ${
                      notif.isRead 
                        ? 'bg-[#160c3b]/50 border-purple-900/30 text-slate-300' 
                        : 'bg-[#1c0e4a] border-amber-400/30 text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-semibold text-amber-300">{notif.title}</span>
                      <span className="text-[10px] text-purple-300/60">{notif.createdAt}</span>
                    </div>
                    <p className="text-[11px] text-slate-300/80 leading-relaxed line-clamp-2">
                      {notif.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Event Registration Modal */}
      {selectedEventForReg && (
        <EventRegistrationModal
          event={selectedEventForReg}
          onClose={() => setSelectedEventForReg(null)}
        />
      )}
    </div>
  );
}
