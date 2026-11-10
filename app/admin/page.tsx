'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Lock, 
  ShieldCheck, 
  Calendar, 
  Users, 
  Building2, 
  FileText, 
  BookOpen, 
  Bell, 
  Plus, 
  Trash2, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  Sparkles, 
  RefreshCw, 
  ArrowLeft,
  Search,
  ExternalLink,
  LogOut,
  Clock,
  Layers
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { EventItem, CompanyItem, InterviewExperienceItem } from '@/types';

export default function AdminDashboardPage() {
  const {
    isAdmin,
    loginAdmin,
    logoutAdmin,
    events,
    registrations,
    companies,
    experiences,
    chronicles,
    team,
    addEvent,
    deleteEvent,
    addCompany,
    deleteCompany,
    addExperience,
    triggerAIAnalysis,
    approveAndPublishCompany,
    broadcastNotification
  } = useStore();

  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'events' | 'registrations' | 'companies' | 'analysis' | 'broadcast'>('overview');

  // Event modal state
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    slug: '',
    posterUrl: '/assets/mock-interview-poster.jpg',
    date: 'Nov 28, 2026',
    time: '2:30 PM - 5:00 PM',
    venue: 'Seminar Hall 1, GSSSIETW',
    eligibleBatch: '2nd & 3rd Year',
    category: 'Interview Prep' as const,
    maxRegistrations: 60,
    registrationDeadline: 'Nov 27, 2026 11:59 PM',
    status: 'open' as const,
    description: '',
    keyTakeaways: ['Live feedback', 'Resume review']
  });

  // Company creation state
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [newCompany, setNewCompany] = useState({
    name: '',
    slug: '',
    logoUrl: '/assets/xref_1372.jpeg',
    recruitmentYear: '2026',
    category: 'Product' as const,
    availableRoles: ['Software Engineer', 'Systems Analyst'],
    roundsCount: 4,
    keyTopics: ['Aptitude', 'DSA', 'Core CS', 'HR'],
    overview: {
      summary: 'Company recruitment overview generated from candidate feedback.',
      selectionRoundsSummary: '4 Rounds: Assessment -> Technical 1 -> Technical 2 -> HR.',
      aptitudeDetails: 'Standard quantitative and logical ability.',
      codingDetails: '2 LeetCode Medium data structures problems.',
      technicalDetails: 'OOPs, DBMS, OS, and projects deep dive.',
      hrDetails: 'Behavioral and fitment interview.',
      repeatedTopics: ['Trees', 'DBMS Joins', 'OOPs'],
      frequentlyReportedQuestions: ['Explain Polymorphism', 'Find cycle in linked list'],
      suggestedStrategy: 'Revise Striver sheet and project details.',
      experienceVariations: 'Identical rounds reported across branches.'
    },
    roundsTimeline: [
      { roundNumber: 1, name: 'Online Assessment', type: 'Aptitude Assessment' as const, duration: '90 Mins', description: 'MCQs & Coding', difficulty: 'Moderate' as const, keyFocus: ['DSA', 'Quant'] },
      { roundNumber: 2, name: 'Technical Interview', type: 'Technical Interview' as const, duration: '45 Mins', description: 'Shared editor coding', difficulty: 'High' as const, keyFocus: ['Trees', 'SQL'] },
      { roundNumber: 3, name: 'HR Round', type: 'HR & Behavioral' as const, duration: '30 Mins', description: 'Culture fit & background', difficulty: 'Moderate' as const, keyFocus: ['STAR method'] }
    ],
    status: 'draft' as const
  });

  // Upload Experience state
  const [showExpModal, setShowExpModal] = useState(false);
  const [selectedCompanyIdForExp, setSelectedCompanyIdForExp] = useState(companies[0]?.id || '');
  const [newExp, setNewExp] = useState({
    studentName: '',
    isAnonymous: false,
    department: 'Computer Science & Engineering',
    year: '2026 Batch',
    role: 'Associate Software Engineer',
    packageLPA: '12.0 LPA',
    originalPdfUrl: '/assets/career_catalyst_vol2.pdf',
    summary: '',
    keyQuestions: ['Explain your final year project', 'What are ACID properties?'],
    selectionTips: ['Be confident', 'Speak clearly']
  });

  // Broadcast state
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);

  // Analysis feedback state
  const [analysisStatus, setAnalysisStatus] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(passwordInput);
    if (success) {
      setLoginError(false);
      setPasswordInput('');
    } else {
      setLoginError(true);
    }
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title) return;
    addEvent({
      ...newEvent,
      slug: newEvent.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    });
    setShowEventModal(false);
  };

  const handleCreateCompany = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.name) return;
    addCompany({
      ...newCompany,
      slug: newCompany.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    });
    setShowCompanyModal(false);
  };

  const handleCreateExperience = (e: React.FormEvent) => {
    e.preventDefault();
    const targetComp = companies.find(c => c.id === selectedCompanyIdForExp);
    if (!targetComp) return;

    addExperience({
      companyId: targetComp.id,
      companyName: targetComp.name,
      studentName: newExp.isAnonymous ? 'Student (Anonymous)' : newExp.studentName,
      isAnonymous: newExp.isAnonymous,
      department: newExp.department,
      year: newExp.year,
      role: newExp.role,
      packageLPA: newExp.packageLPA,
      originalPdfUrl: newExp.originalPdfUrl,
      summary: newExp.summary || 'Student provided comprehensive interview round details.',
      keyQuestions: newExp.keyQuestions,
      selectionTips: newExp.selectionTips,
      status: 'approved'
    });

    setShowExpModal(false);
  };

  const handleTriggerAnalysis = async (compId: string) => {
    setAnalysisStatus('Processing AI text extraction and round analysis...');
    const res = await triggerAIAnalysis(compId);
    setAnalysisStatus(res.message);
    setTimeout(() => setAnalysisStatus(null), 4000);
  };

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastMessage) return;

    broadcastNotification({
      title: broadcastTitle,
      message: broadcastMessage,
      category: 'announcement',
      link: '/events'
    });

    setBroadcastSuccess(true);
    setBroadcastTitle('');
    setBroadcastMessage('');
    setTimeout(() => setBroadcastSuccess(false), 3000);
  };

  const exportRegistrationsCsv = () => {
    if (registrations.length === 0) {
      alert('No registrations available to export.');
      return;
    }

    const headers = ['ID', 'Event', 'Student Name', 'USN', 'Department', 'Year', 'Email', 'Phone', 'Registered At'];
    const rows = registrations.map(r => [
      r.id,
      `"${r.eventTitle}"`,
      `"${r.studentName}"`,
      `"${r.usn}"`,
      `"${r.department}"`,
      `"${r.year}"`,
      `"${r.email}"`,
      `"${r.phone}"`,
      `"${r.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `apti_club_registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // If not logged in, show elegant login card
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#070417] text-slate-100 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md rounded-3xl bg-card-luxury border border-amber-400/40 shadow-2xl p-8 space-y-6 overflow-hidden">
          
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-purple-900/60 border border-amber-400/50 flex items-center justify-center text-amber-300 mx-auto mb-2 shadow-lg">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="font-serif font-extrabold text-2xl text-slate-100">
              Admin Portal
            </h1>
            <p className="text-xs text-purple-200/80">
              APTI CLUB • Department of Training &amp; Placement
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Invalid password. (Hint: apti@2026)</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 mb-1 font-medium">
                Admin Master Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter password (e.g. apti@2026)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800/80 focus:border-amber-400 focus:outline-none text-slate-100"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link href="/" className="text-xs text-purple-300 hover:text-amber-300">
              ← Return to public website
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // Admin Dashboard View
  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-900/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                Authenticated Admin Session
              </span>
            </div>
            <h1 className="font-serif font-extrabold text-2xl sm:text-3xl text-slate-100 mt-1">
              APTI CLUB Command Center
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="py-2 px-4 rounded-xl bg-purple-900/40 hover:bg-purple-900/70 text-slate-200 text-xs font-semibold border border-purple-800/40 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </Link>

            <button
              onClick={logoutAdmin}
              className="py-2 px-4 rounded-xl bg-rose-950/60 hover:bg-rose-900 text-rose-300 text-xs font-semibold border border-rose-800/40 flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Status Toast */}
        {analysisStatus && (
          <div className="p-4 rounded-2xl bg-amber-400/20 border border-amber-400/50 text-amber-200 text-xs flex items-center gap-2 animate-in fade-in">
            <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
            <span>{analysisStatus}</span>
          </div>
        )}

        {/* Overview Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          
          <div className="p-4 rounded-2xl bg-card-luxury border border-purple-800/40">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Total Events</span>
            </div>
            <p className="font-serif font-extrabold text-2xl text-slate-100">{events.length}</p>
            <p className="text-[10px] text-slate-400">{events.filter(e => e.status === 'open').length} Open</p>
          </div>

          <div className="p-4 rounded-2xl bg-card-luxury border border-purple-800/40">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Registrations</span>
            </div>
            <p className="font-serif font-extrabold text-2xl text-slate-100">{registrations.length}</p>
            <p className="text-[10px] text-slate-400">Total Enrolled</p>
          </div>

          <div className="p-4 rounded-2xl bg-card-luxury border border-purple-800/40">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Building2 className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Companies</span>
            </div>
            <p className="font-serif font-extrabold text-2xl text-slate-100">{companies.length}</p>
            <p className="text-[10px] text-slate-400">{companies.filter(c => c.status === 'published').length} Published</p>
          </div>

          <div className="p-4 rounded-2xl bg-card-luxury border border-purple-800/40">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <FileText className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Experiences</span>
            </div>
            <p className="font-serif font-extrabold text-2xl text-slate-100">{experiences.length}</p>
            <p className="text-[10px] text-slate-400">Verified Reports</p>
          </div>

          <div className="p-4 rounded-2xl bg-card-luxury border border-purple-800/40">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Chronicles</span>
            </div>
            <p className="font-serif font-extrabold text-2xl text-slate-100">{chronicles.length}</p>
            <p className="text-[10px] text-slate-400">2024–2026</p>
          </div>

          <div className="p-4 rounded-2xl bg-card-luxury border border-purple-800/40">
            <div className="flex items-center gap-2 text-rose-400 mb-1">
              <AlertCircle className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase">Pending Review</span>
            </div>
            <p className="font-serif font-extrabold text-2xl text-slate-100">
              {companies.filter(c => c.status === 'review_required').length}
            </p>
            <p className="text-[10px] text-slate-400">Company Drafts</p>
          </div>

        </div>

        {/* Module Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs border-b border-purple-900/40">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-purple-950/40 text-slate-300 hover:text-white'
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'events'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-purple-950/40 text-slate-300 hover:text-white'
            }`}
          >
            Events &amp; Capacity ({events.length})
          </button>

          <button
            onClick={() => setActiveTab('registrations')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'registrations'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-purple-950/40 text-slate-300 hover:text-white'
            }`}
          >
            Registrations Records ({registrations.length})
          </button>

          <button
            onClick={() => setActiveTab('companies')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'companies'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-purple-950/40 text-slate-300 hover:text-white'
            }`}
          >
            Company &amp; PDF Management ({companies.length})
          </button>

          <button
            onClick={() => setActiveTab('analysis')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'analysis'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-purple-950/40 text-slate-300 hover:text-white'
            }`}
          >
            AI Document Analysis Pipeline
          </button>

          <button
            onClick={() => setActiveTab('broadcast')}
            className={`px-4 py-2 rounded-xl font-bold transition-all ${
              activeTab === 'broadcast'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-purple-950/40 text-slate-300 hover:text-white'
            }`}
          >
            Broadcaster
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Quick Actions */}
              <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4">
                <h3 className="font-serif font-bold text-lg text-slate-100">
                  Quick Administration Actions
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button
                    onClick={() => { setActiveTab('events'); setShowEventModal(true); }}
                    className="p-4 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-left flex flex-col justify-between"
                  >
                    <Calendar className="w-5 h-5 text-amber-400 mb-2" />
                    <div>
                      <p className="font-bold text-slate-200">Create New Event</p>
                      <p className="text-[10px] text-slate-400">Posters, slots, deadline</p>
                    </div>
                  </button>

                  <button
                    onClick={() => { setActiveTab('companies'); setShowCompanyModal(true); }}
                    className="p-4 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-left flex flex-col justify-between"
                  >
                    <Building2 className="w-5 h-5 text-amber-400 mb-2" />
                    <div>
                      <p className="font-bold text-slate-200">Add Company Profile</p>
                      <p className="text-[10px] text-slate-400">Logos, roles, category</p>
                    </div>
                  </button>

                  <button
                    onClick={() => { setActiveTab('companies'); setShowExpModal(true); }}
                    className="p-4 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-left flex flex-col justify-between"
                  >
                    <FileText className="w-5 h-5 text-amber-400 mb-2" />
                    <div>
                      <p className="font-bold text-slate-200">Upload Experience PDF</p>
                      <p className="text-[10px] text-slate-400">Student reports &amp; questions</p>
                    </div>
                  </button>

                  <button
                    onClick={exportRegistrationsCsv}
                    className="p-4 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/40 text-left flex flex-col justify-between"
                  >
                    <Download className="w-5 h-5 text-amber-400 mb-2" />
                    <div>
                      <p className="font-bold text-slate-200">Export Registrations</p>
                      <p className="text-[10px] text-slate-400">Download CSV format</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Pending Company Analysis & Approvals */}
              <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg text-slate-100">
                    Draft &amp; Pending Approvals
                  </h3>
                  <span className="text-xs text-amber-300 font-semibold">
                    Workflow: Draft → Analysis → Review → Publish
                  </span>
                </div>

                <div className="space-y-3">
                  {companies.map((c) => (
                    <div
                      key={c.id}
                      className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-bold text-slate-100">{c.name}</p>
                        <p className="text-[11px] text-purple-300">{c.experienceCount} Experiences • Status: <strong className="text-amber-300 uppercase">{c.status}</strong></p>
                      </div>

                      <div className="flex items-center gap-2">
                        {c.status !== 'published' ? (
                          <button
                            onClick={() => approveAndPublishCompany(c.id)}
                            className="py-1 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px]"
                          >
                            Approve &amp; Publish
                          </button>
                        ) : (
                          <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Published
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: EVENTS MANAGEMENT */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif font-bold text-xl text-slate-100">Events Management</h2>
                <p className="text-xs text-purple-300">Create, edit, and configure student registration limits.</p>
              </div>

              <button
                onClick={() => setShowEventModal(true)}
                className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>Create Event</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((evt) => (
                <div key={evt.id} className="p-5 rounded-3xl bg-card-luxury border border-purple-800/40 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-purple-900 text-amber-300 font-semibold text-[10px]">
                        {evt.category}
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">{evt.status}</span>
                    </div>

                    <h3 className="font-bold text-base text-slate-100">{evt.title}</h3>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">{evt.description}</p>
                    
                    <div className="mt-3 text-xs text-purple-200/80 space-y-1">
                      <p>Date: {evt.date} • {evt.time}</p>
                      <p>Enrolled: <strong>{evt.currentRegistrations} / {evt.maxRegistrations}</strong> students</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between">
                    <button
                      onClick={() => deleteEvent(evt.id)}
                      className="p-2 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 transition-colors"
                      title="Delete Event"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <Link
                      href={`/events`}
                      className="text-xs text-amber-300 hover:text-amber-200 font-semibold"
                    >
                      View on Public Site →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: REGISTRATIONS TABLE */}
        {activeTab === 'registrations' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif font-bold text-xl text-slate-100">
                  Student Registrations ({registrations.length})
                </h2>
                <p className="text-xs text-purple-300">
                  Real-time enrollment submissions across all active events.
                </p>
              </div>

              <button
                onClick={exportRegistrationsCsv}
                className="py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>Export to CSV</span>
              </button>
            </div>

            {registrations.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-card-luxury border border-purple-800/40 space-y-2">
                <Users className="w-8 h-8 text-purple-400 mx-auto" />
                <p className="text-sm font-semibold text-slate-300">No student registrations recorded yet.</p>
                <p className="text-xs text-slate-400">Registrations submitted on the public website will immediately appear here.</p>
              </div>
            ) : (
              <div className="rounded-3xl bg-card-luxury border border-purple-800/40 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-purple-950/60 border-b border-purple-800/40 text-slate-300 font-semibold uppercase text-[10px]">
                      <tr>
                        <th className="p-3.5">Student Name</th>
                        <th className="p-3.5">USN</th>
                        <th className="p-3.5">Event</th>
                        <th className="p-3.5">Department</th>
                        <th className="p-3.5">Year</th>
                        <th className="p-3.5">Email</th>
                        <th className="p-3.5">Phone</th>
                        <th className="p-3.5">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-900/30 text-slate-200">
                      {registrations.map((r) => (
                        <tr key={r.id} className="hover:bg-purple-900/20">
                          <td className="p-3.5 font-bold text-amber-200">{r.studentName}</td>
                          <td className="p-3.5 font-mono text-purple-300">{r.usn}</td>
                          <td className="p-3.5 font-medium">{r.eventTitle}</td>
                          <td className="p-3.5 text-slate-400">{r.department}</td>
                          <td className="p-3.5">{r.year}</td>
                          <td className="p-3.5 text-slate-300">{r.email}</td>
                          <td className="p-3.5 font-mono">{r.phone}</td>
                          <td className="p-3.5 text-[10px] text-slate-400">{r.createdAt.split('T')[0]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: COMPANY & PDF MANAGEMENT */}
        {activeTab === 'companies' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif font-bold text-xl text-slate-100">
                  Company &amp; Interview Document Management
                </h2>
                <p className="text-xs text-purple-300">
                  Create companies, upload student experience PDFs, and control publishing.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowCompanyModal(true)}
                  className="py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Company</span>
                </button>

                <button
                  onClick={() => setShowExpModal(true)}
                  className="py-2 px-4 rounded-xl bg-purple-900 hover:bg-purple-800 text-amber-300 font-bold text-xs flex items-center gap-1.5 border border-purple-700/50"
                >
                  <FileText className="w-4 h-4" />
                  <span>Upload Student PDF</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companies.map((comp) => (
                <div key={comp.id} className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0">
                      <Image src={comp.logoUrl} alt={comp.name} width={40} height={40} className="object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-100">{comp.name}</h3>
                      <span className="text-[10px] text-amber-300 font-semibold">{comp.category} • Batch {comp.recruitmentYear}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    <p>Experiences: <strong>{comp.experienceCount} Reports</strong></p>
                    <p>Status: <span className="font-bold uppercase text-amber-400">{comp.status}</span></p>
                  </div>

                  <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleTriggerAnalysis(comp.id)}
                      className="py-1 px-2.5 rounded-lg bg-purple-900/50 hover:bg-purple-800 text-amber-300 flex items-center gap-1 border border-purple-700/40"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Analyze</span>
                    </button>

                    {comp.status !== 'published' ? (
                      <button
                        onClick={() => approveAndPublishCompany(comp.id)}
                        className="py-1 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold"
                      >
                        Publish
                      </button>
                    ) : (
                      <span className="text-[11px] text-emerald-400 font-semibold">Published</span>
                    )}

                    <button
                      onClick={() => deleteCompany(comp.id)}
                      className="p-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AI DOCUMENT ANALYSIS PIPELINE */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-card-luxury border border-amber-400/30 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-xl text-slate-100">
                    PDF Document Analysis &amp; Approval Engine
                  </h2>
                  <p className="text-xs text-purple-300">
                    Backend AI pipeline extracts rounds, repeated questions, and synthesizes company preparation guides.
                  </p>
                </div>
              </div>

              {/* Status information */}
              <div className="p-4 rounded-2xl bg-purple-950/50 border border-purple-800/40 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-amber-300">AI Service Integration Status:</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                    Engine Active (Backend LLM &amp; Structural Synthesis Ready)
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  When new interview PDFs are uploaded, clicking &ldquo;Trigger Analysis&rdquo; processes candidate responses, groups identical rounds, identifies recurring algorithmic questions, and drafts an overview for Admin Review.
                </p>
              </div>

              {/* Table of companies awaiting or completed */}
              <div className="space-y-4">
                <h3 className="font-bold text-sm text-slate-200">Company Document Processing Status:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {companies.map((c) => (
                    <div key={c.id} className="p-5 rounded-2xl bg-purple-950/40 border border-purple-800/40 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-base text-slate-100">{c.name}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                            c.status === 'published' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {c.status}
                          </span>
                        </div>
                        <p className="text-slate-400 text-[11px] mt-1">{c.experienceCount} uploaded reports analyzed</p>
                      </div>

                      <div className="p-3 rounded-xl bg-purple-900/30 border border-purple-800/40 text-[11px] text-slate-300">
                        <strong className="text-amber-300">Draft Summary: </strong>
                        <span>{c.overview.summary.slice(0, 120)}...</span>
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={() => handleTriggerAnalysis(c.id)}
                          className="flex-1 py-1.5 px-3 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-amber-300 font-semibold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Re-Analyze</span>
                        </button>

                        <button
                          onClick={() => approveAndPublishCompany(c.id)}
                          className="flex-1 py-1.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors"
                        >
                          Approve &amp; Publish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 6: BROADCAST NOTIFICATIONS */}
        {activeTab === 'broadcast' && (
          <div className="p-8 rounded-3xl bg-card-luxury border border-purple-800/40 max-w-2xl space-y-6">
            <div>
              <h2 className="font-serif font-bold text-xl text-slate-100 flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-400" />
                <span>Broadcast Push &amp; In-App Announcement</span>
              </h2>
              <p className="text-xs text-purple-300 mt-1">
                Instantly notifies all students via the website notification bell and browser alerts.
              </p>
            </div>

            {broadcastSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Announcement broadcasted successfully to all students!</span>
              </div>
            )}

            <form onSubmit={handleBroadcast} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 mb-1 font-medium">Notification Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Deutsche Bank Placement Drive Announced"
                  value={broadcastTitle}
                  onChange={(e) => setBroadcastTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800/80 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">Notification Message</label>
                <textarea
                  required
                  rows={3}
                  placeholder="e.g. Registrations for Deutsche Bank campus drive close tonight at 11:59 PM. Review the preparation guide now."
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800/80 text-slate-100"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-md"
              >
                Send Broadcast Notification
              </button>
            </form>
          </div>
        )}

      </div>

      {/* CREATE EVENT MODAL */}
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e0828] border border-amber-400/40 p-6 space-y-4 text-xs">
            <h3 className="font-serif font-bold text-lg text-slate-100">Create New APTI CLUB Event</h3>
            
            <form onSubmit={handleCreateEvent} className="space-y-3">
              <div>
                <label className="block text-slate-300 mb-1">Event Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aptitude Speed Challenge 2026"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Date</label>
                  <input
                    type="text"
                    required
                    placeholder="Nov 25, 2026"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Time</label>
                  <input
                    type="text"
                    required
                    placeholder="2:15 PM - 4:30 PM"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Max Registration Slots</label>
                  <input
                    type="number"
                    required
                    value={newEvent.maxRegistrations}
                    onChange={(e) => setNewEvent({ ...newEvent, maxRegistrations: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Eligible Batches</label>
                  <input
                    type="text"
                    required
                    value={newEvent.eligibleBatch}
                    onChange={(e) => setNewEvent({ ...newEvent, eligibleBatch: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Description</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Event details..."
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold">
                  Publish Event
                </button>
                <button type="button" onClick={() => setShowEventModal(false)} className="py-2 px-4 rounded-xl bg-purple-900/50 text-slate-300">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CREATE COMPANY MODAL */}
      {showCompanyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e0828] border border-amber-400/40 p-6 space-y-4 text-xs">
            <h3 className="font-serif font-bold text-lg text-slate-100">Add New Recruiting Company</h3>
            
            <form onSubmit={handleCreateCompany} className="space-y-3">
              <div>
                <label className="block text-slate-300 mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Goldman Sachs"
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Category</label>
                  <select
                    value={newCompany.category}
                    onChange={(e) => setNewCompany({ ...newCompany, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  >
                    <option value="Fintech">Fintech</option>
                    <option value="Product">Product</option>
                    <option value="Consulting & IT">Consulting &amp; IT</option>
                    <option value="Global MNC">Global MNC</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Recruitment Year</label>
                  <input
                    type="text"
                    required
                    value={newCompany.recruitmentYear}
                    onChange={(e) => setNewCompany({ ...newCompany, recruitmentYear: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Available Roles (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="Analyst, SDE, Cloud Engineer"
                  onChange={(e) => setNewCompany({ ...newCompany, availableRoles: e.target.value.split(',').map(s => s.trim()) })}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold">
                  Save Company
                </button>
                <button type="button" onClick={() => setShowCompanyModal(false)} className="py-2 px-4 rounded-xl bg-purple-900/50 text-slate-300">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* UPLOAD EXPERIENCE MODAL */}
      {showExpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0e0828] border border-amber-400/40 p-6 space-y-4 text-xs">
            <h3 className="font-serif font-bold text-lg text-slate-100">Upload Student Interview Report</h3>
            
            <form onSubmit={handleCreateExperience} className="space-y-3">
              <div>
                <label className="block text-slate-300 mb-1">Target Company</label>
                <select
                  value={selectedCompanyIdForExp}
                  onChange={(e) => setSelectedCompanyIdForExp(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                >
                  {companies.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Student Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Sahana M."
                    disabled={newExp.isAnonymous}
                    value={newExp.studentName}
                    onChange={(e) => setNewExp({ ...newExp, studentName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100 disabled:opacity-50"
                  />
                </div>
                <div className="flex items-center gap-2 pt-6">
                  <input
                    type="checkbox"
                    id="anon"
                    checked={newExp.isAnonymous}
                    onChange={(e) => setNewExp({ ...newExp, isAnonymous: e.target.checked })}
                    className="rounded"
                  />
                  <label htmlFor="anon" className="text-slate-300">Keep Anonymous</label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Department</label>
                  <select
                    value={newExp.department}
                    onChange={(e) => setNewExp({ ...newExp, department: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  >
                    <option value="Computer Science & Engineering">CSE</option>
                    <option value="Information Science & Engineering">ISE</option>
                    <option value="CSE (AI & ML)">CSE (AI & ML)</option>
                    <option value="Electronics & Communication">ECE</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Role / Package</label>
                  <input
                    type="text"
                    value={newExp.role}
                    onChange={(e) => setNewExp({ ...newExp, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Experience Summary</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Summary of rounds, difficulty, and tips..."
                  value={newExp.summary}
                  onChange={(e) => setNewExp({ ...newExp, summary: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button type="submit" className="flex-1 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold">
                  Save Report &amp; Trigger Review
                </button>
                <button type="button" onClick={() => setShowExpModal(false)} className="py-2 px-4 rounded-xl bg-purple-900/50 text-slate-300">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
