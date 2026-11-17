'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Filter, 
  AlertCircle,
  Building2,
  TrendingUp,
  Download,
  Award
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function TeacherCoordinatorDashboardPage() {
  const { experiences, companies } = useStore();

  const [activeTab, setActiveTab] = useState<'pending' | 'verified' | 'dept-stats'>('pending');
  const [selectedDept, setSelectedDept] = useState('Computer Science & Engineering');

  // Pending reports queue state
  const [reportsQueue, setReportsQueue] = useState([
    {
      id: 'rep-pending-01',
      studentName: 'Pooja Hegde',
      usn: '4GW22CS082',
      department: 'Computer Science & Engineering',
      company: 'Deutsche Bank',
      role: 'Graduate Technology Analyst',
      packageLpa: '19.6 LPA',
      submissionDate: 'Nov 16, 2026',
      summary: 'Round 1 had 2 medium coding problems on binary trees and two-pointer arrays. Round 2 technical was 50 mins on DBMS indexing and Spring Boot project architecture.',
      status: 'pending'
    },
    {
      id: 'rep-pending-02',
      studentName: 'Ananya Deshmukh',
      usn: '4GW22IS019',
      department: 'Information Science & Engineering',
      company: 'Accenture',
      role: 'Advanced ASE (FADA)',
      packageLpa: '6.5 LPA',
      submissionDate: 'Nov 15, 2026',
      summary: 'Cleared Cognitive, Technical Pseudocode and Coding assessment. Virtual interview had questions on final year project and OOPs virtual functions.',
      status: 'pending'
    }
  ]);

  const [feedbackNotes, setFeedbackNotes] = useState<Record<string, string>>({});

  const handleApprove = (id: string) => {
    setReportsQueue(prev => prev.map(r => r.id === id ? { ...r, status: 'verified' } : r));
  };

  const handleReject = (id: string) => {
    setReportsQueue(prev => prev.map(r => r.id === id ? { ...r, status: 'rejected' } : r));
  };

  const pendingReports = reportsQueue.filter(r => r.status === 'pending');
  const verifiedReports = reportsQueue.filter(r => r.status === 'verified');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070417] via-[#0d0726] to-[#070417] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Coordinator Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/80 via-[#180a3c] to-[#10072b] border border-purple-800/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-2xl shadow-lg shadow-amber-500/20">
                T
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-white tracking-tight">Department Coordinator Portal</h1>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                    Faculty Coordinator
                  </span>
                </div>
                <p className="text-xs text-purple-200/80 mt-1">
                  Prof. Anitha Rao • Department of Training & Placement, GSSSIETW
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs px-3.5 py-2 rounded-xl bg-purple-950/60 border border-purple-800/50 text-slate-300">
                Department: <strong className="text-amber-300">CSE / ISE</strong>
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-purple-800/40">
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Reports Awaiting Review</p>
              <p className="text-xl font-bold text-amber-300 mt-0.5">{pendingReports.length} Pending</p>
            </div>
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Department Placement Rate</p>
              <p className="text-xl font-bold text-emerald-400 mt-0.5">92.8%</p>
            </div>
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Total Eligible Students</p>
              <p className="text-xl font-bold text-blue-300 mt-0.5">140 Students</p>
            </div>
            <div>
              <p className="text-[11px] text-purple-300/70 font-medium uppercase tracking-wider">Highest Package (Dept)</p>
              <p className="text-xl font-bold text-purple-200 mt-0.5">19.6 LPA</p>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-purple-900/40 pb-3">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'pending'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-purple-300 hover:text-white hover:bg-purple-900/30'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Verification Queue ({pendingReports.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('verified')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'verified'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-purple-300 hover:text-white hover:bg-purple-900/30'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Approved Reports ({verifiedReports.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('dept-stats')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'dept-stats'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'text-purple-300 hover:text-white hover:bg-purple-900/30'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Department Statistics</span>
          </button>
        </div>

        {/* Tab Content: Pending Verification Queue */}
        {activeTab === 'pending' && (
          <div className="space-y-4">
            {pendingReports.length === 0 ? (
              <div className="p-12 rounded-3xl bg-[#0f092b] border border-purple-800/40 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">All Reports Verified!</h3>
                <p className="text-xs text-purple-200/70 mt-1">There are no pending student placement submissions in your queue.</p>
              </div>
            ) : (
              pendingReports.map(report => (
                <div key={report.id} className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-purple-900/40">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-white">{report.studentName}</h3>
                        <span className="text-xs font-mono text-amber-300">({report.usn})</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-200 font-medium">
                          {report.department}
                        </span>
                      </div>
                      <p className="text-xs text-purple-200/80 mt-1">
                        Offered: <strong className="text-white">{report.company}</strong> — {report.role} (<span className="text-amber-300">{report.packageLpa}</span>)
                      </p>
                    </div>

                    <span className="text-xs px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 font-semibold self-start sm:self-auto">
                      Awaiting Verification
                    </span>
                  </div>

                  <div className="text-xs text-slate-200 leading-relaxed bg-[#160c3b] p-4 rounded-2xl border border-purple-900/40">
                    <p className="font-semibold text-purple-300 mb-1">Student Narrative Overview:</p>
                    {report.summary}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <input
                      type="text"
                      placeholder="Add coordinator feedback or note (optional)..."
                      value={feedbackNotes[report.id] || ''}
                      onChange={e => setFeedbackNotes({ ...feedbackNotes, [report.id]: e.target.value })}
                      className="flex-1 bg-[#160c3b] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white"
                    />

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleReject(report.id)}
                        className="px-4 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 text-xs font-semibold border border-rose-800/40 flex items-center gap-1.5 transition-colors"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Request Revision</span>
                      </button>
                      <button
                        onClick={() => handleApprove(report.id)}
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:brightness-110 text-white text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verify & Publish</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab Content: Approved Reports */}
        {activeTab === 'verified' && (
          <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-white mb-2">Verified Reports Published to Dossier</h3>
            {verifiedReports.length === 0 ? (
              <p className="text-xs text-purple-300/60">No reports verified in this current session.</p>
            ) : (
              <div className="space-y-3">
                {verifiedReports.map(r => (
                  <div key={r.id} className="p-4 rounded-2xl bg-[#160c3b] border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white">{r.studentName} ({r.usn})</h4>
                      <p className="text-xs text-purple-200/70">{r.company} • {r.role} ({r.packageLpa})</p>
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                      Published
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Department Stats */}
        {activeTab === 'dept-stats' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 space-y-3">
              <h4 className="text-sm font-bold text-white">Drive Participation</h4>
              <p className="text-2xl font-bold text-amber-300">128 / 140</p>
              <p className="text-xs text-purple-200/70">91.4% of eligible students appeared in at least 2 campus recruitment assessments.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 space-y-3">
              <h4 className="text-sm font-bold text-white">Multiple Offers</h4>
              <p className="text-2xl font-bold text-emerald-400">42 Students</p>
              <p className="text-xs text-purple-200/70">Students holding dual offers across Product, Fintech, and IT services.</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#0f092b] border border-purple-800/40 space-y-3">
              <h4 className="text-sm font-bold text-white">Dream Placements (&gt; 10 LPA)</h4>
              <p className="text-2xl font-bold text-purple-300">24 Offers</p>
              <p className="text-xs text-purple-200/70">Recruiters include Deutsche Bank, Cisco Systems, and Commvault.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
