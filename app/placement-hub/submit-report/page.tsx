'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  Upload, 
  CheckCircle2, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Building2, 
  ShieldCheck, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { useStore } from '@/lib/store';

export default function SubmitPlacementReportPage() {
  const { companies } = useStore();

  const [step, setStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    studentName: 'Sneha Sharma',
    usn: '4GW22CS045',
    department: 'Computer Science & Engineering',
    batchYear: '2026',
    isAnonymous: false,
    companyId: companies[0]?.id || 'comp-db-01',
    companyName: companies[0]?.name || 'Deutsche Bank',
    role: 'Graduate Technology Analyst',
    packageLpa: '19.6 LPA',
    summary: '',
    roundsCount: 4,
    roundsData: [
      { roundNumber: 1, name: 'Online Assessment', duration: '90 Mins', focus: 'DSA + CS Fundamentals', difficulty: 'Moderate' },
      { roundNumber: 2, name: 'Technical Interview 1', duration: '45 Mins', focus: 'Trees, SQL, DBMS', difficulty: 'Challenging' },
      { roundNumber: 3, name: 'Technical Interview 2', duration: '45 Mins', focus: 'System Design & Projects', difficulty: 'Challenging' },
      { roundNumber: 4, name: 'HR & Values', duration: '30 Mins', focus: 'Behavioral Fitment', difficulty: 'Moderate' }
    ],
    keyQuestions: [
      'Explain ACID properties and write a query for 2nd highest salary using window function.',
      'Reverse a linked list in groups of size K.'
    ],
    selectionTips: [
      'Be thorough with everything mentioned on your resume.',
      'Explain your thought process aloud before writing code.'
    ],
    mistakesToAvoid: [
      'Guessing an answer instead of admitting you do not know.',
      'Jumping straight into code without clarifying constraints.'
    ],
    uploadedDocumentUrl: ''
  });

  const [uploadingDoc, setUploadingDoc] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newTip, setNewTip] = useState('');
  const [newMistake, setNewMistake] = useState('');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingDoc(true);
    setErrorMsg('');

    try {
      const data = new FormData();
      data.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      });

      const result = await res.json();
      if (result.success) {
        setFormData(prev => ({ ...prev, uploadedDocumentUrl: result.fileUrl }));
      } else {
        setErrorMsg(result.message || 'File upload failed');
      }
    } catch {
      setErrorMsg('Failed to upload document');
    } finally {
      setUploadingDoc(false);
    }
  };

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setFormData(prev => ({ ...prev, keyQuestions: [...prev.keyQuestions, newQuestion.trim()] }));
      setNewQuestion('');
    }
  };

  const removeQuestion = (idx: number) => {
    setFormData(prev => ({ ...prev, keyQuestions: prev.keyQuestions.filter((_, i) => i !== idx) }));
  };

  const addTip = () => {
    if (newTip.trim()) {
      setFormData(prev => ({ ...prev, selectionTips: [...prev.selectionTips, newTip.trim()] }));
      setNewTip('');
    }
  };

  const removeTip = (idx: number) => {
    setFormData(prev => ({ ...prev, selectionTips: prev.selectionTips.filter((_, i) => i !== idx) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.summary.trim()) {
      setErrorMsg('Please write an overview summary of your recruitment experience.');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setErrorMsg(data.message || 'Failed to submit report');
      }
    } catch {
      setErrorMsg('Network error while submitting report');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#070417] via-[#0d0726] to-[#070417] py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-[#0f092b] border border-emerald-500/40 text-center shadow-2xl space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Report Submitted Successfully!</h2>
          <p className="text-xs text-purple-200/80 leading-relaxed">
            Thank you for sharing your placement experience with APTI CLUB! Your report has been dispatched to the Department of Training & Placement for faculty verification and will be published in the Company Intelligence Dossier.
          </p>
          <div className="pt-4 flex justify-center gap-3">
            <Link
              href="/dashboard"
              className="px-5 py-2.5 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 text-xs font-semibold text-white border border-purple-700/40 transition-colors"
            >
              Back to Dashboard
            </Link>
            <Link
              href="/placement-hub"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-bold hover:brightness-110 transition-all"
            >
              Explore Placement Hub
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070417] via-[#0d0726] to-[#070417] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Back Link & Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/placement-hub"
            className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Placement Hub</span>
          </Link>

          <a
            href="/api/reports/template"
            download
            className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/30 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official DOCX/TXT Template</span>
          </a>
        </div>

        {/* Page Title Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/80 via-[#180a3c] to-[#10072a] border border-purple-800/40 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
              <FileText className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Submit Standardized Placement Report</h1>
              <p className="text-xs text-purple-200/80 mt-0.5">
                Batch 2026-27 Official GSSSIETW Placement Documentation
              </p>
            </div>
          </div>

          {/* Stepper indicator */}
          <div className="grid grid-cols-4 gap-2 mt-6">
            {[
              { num: 1, label: 'Candidate & Role' },
              { num: 2, label: 'Rounds Breakdown' },
              { num: 3, label: 'Questions & Tips' },
              { num: 4, label: 'Review & Submit' }
            ].map(s => (
              <button
                key={s.num}
                type="button"
                onClick={() => setStep(s.num)}
                className={`p-2.5 rounded-xl text-left border transition-all ${
                  step === s.num
                    ? 'bg-amber-400/10 border-amber-400/60 text-amber-300'
                    : step > s.num
                    ? 'bg-purple-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-purple-950/20 border-purple-900/30 text-slate-500'
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider">Step {s.num}</div>
                <div className="text-xs font-semibold truncate">{s.label}</div>
              </button>
            ))}
          </div>
        </div>

        {errorMsg && (
          <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-800/60 text-xs text-rose-200 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-[#0f092b] border border-purple-800/40 shadow-2xl space-y-6">

          {/* Step 1: Candidate & Role */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Candidate & Recruiting Company Details</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-purple-200/90 mb-1">Candidate Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={e => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full bg-[#160c3b] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-200/90 mb-1">University Seat Number (USN) *</label>
                  <input
                    type="text"
                    required
                    value={formData.usn}
                    onChange={e => setFormData({ ...formData, usn: e.target.value })}
                    className="w-full bg-[#160c3b] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-200/90 mb-1">Recruiting Company *</label>
                  <select
                    value={formData.companyId}
                    onChange={e => {
                      const sel = companies.find(c => c.id === e.target.value);
                      setFormData({ 
                        ...formData, 
                        companyId: e.target.value,
                        companyName: sel ? sel.name : formData.companyName
                      });
                    }}
                    className="w-full bg-[#160c3b] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {companies.map(c => (
                      <option key={c.id} value={c.id}>{c.name} ({c.category})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-200/90 mb-1">Designation Offered *</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#160c3b] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-200/90 mb-1">Compensation Package (LPA) *</label>
                  <input
                    type="text"
                    required
                    value={formData.packageLpa}
                    onChange={e => setFormData({ ...formData, packageLpa: e.target.value })}
                    className="w-full bg-[#160c3b] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-purple-200/90 mb-1">Department *</label>
                  <select
                    value={formData.department}
                    onChange={e => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-[#160c3b] border border-purple-800/50 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                    <option value="Information Science & Engineering">Information Science & Engineering</option>
                    <option value="Electronics & Communication">Electronics & Communication</option>
                    <option value="Electrical & Electronics">Electrical & Electronics</option>
                    <option value="AI & Data Science">AI & Data Science</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isAnonymous}
                    onChange={e => setFormData({ ...formData, isAnonymous: e.target.checked })}
                    className="rounded bg-[#160c3b] border-purple-800 text-amber-500 focus:ring-0"
                  />
                  <span className="text-xs text-slate-300">Publish anonymously on public portal (Name hidden from students; visible to T&P faculty only)</span>
                </label>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
                >
                  Proceed to Rounds Breakdown
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Rounds Breakdown */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Recruitment Rounds Breakdown</span>
              </h2>

              <div className="space-y-3">
                {formData.roundsData.map((r, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#160c3b] border border-purple-800/40 grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                    <div>
                      <span className="text-[10px] text-amber-300 uppercase font-bold tracking-wider">Round {r.roundNumber}</span>
                      <input
                        type="text"
                        value={r.name}
                        onChange={e => {
                          const updated = [...formData.roundsData];
                          updated[idx].name = e.target.value;
                          setFormData({ ...formData, roundsData: updated });
                        }}
                        className="w-full bg-[#10072b] border border-purple-900 rounded-lg px-2.5 py-1 text-xs text-white mt-1"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-300 uppercase font-bold tracking-wider">Duration</span>
                      <input
                        type="text"
                        value={r.duration}
                        onChange={e => {
                          const updated = [...formData.roundsData];
                          updated[idx].duration = e.target.value;
                          setFormData({ ...formData, roundsData: updated });
                        }}
                        className="w-full bg-[#10072b] border border-purple-900 rounded-lg px-2.5 py-1 text-xs text-white mt-1"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-300 uppercase font-bold tracking-wider">Key Focus</span>
                      <input
                        type="text"
                        value={r.focus}
                        onChange={e => {
                          const updated = [...formData.roundsData];
                          updated[idx].focus = e.target.value;
                          setFormData({ ...formData, roundsData: updated });
                        }}
                        className="w-full bg-[#10072b] border border-purple-900 rounded-lg px-2.5 py-1 text-xs text-white mt-1"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-purple-300 uppercase font-bold tracking-wider">Difficulty</span>
                      <select
                        value={r.difficulty}
                        onChange={e => {
                          const updated = [...formData.roundsData];
                          updated[idx].difficulty = e.target.value;
                          setFormData({ ...formData, roundsData: updated });
                        }}
                        className="w-full bg-[#10072b] border border-purple-900 rounded-lg px-2.5 py-1 text-xs text-white mt-1"
                      >
                        <option value="Moderate">Moderate</option>
                        <option value="Challenging">Challenging</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-xl bg-purple-900/40 text-purple-200 text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
                >
                  Proceed to Questions & Tips
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Questions & Tips */}
          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Interview Questions, Preparation Tips & Pitfalls</span>
              </h2>

              {/* Questions List */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-purple-200">High-Frequency Interview Questions Asked</label>
                <div className="space-y-2">
                  {formData.keyQuestions.map((q, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#160c3b] border border-purple-900/40 text-xs text-slate-200">
                      <span>{q}</span>
                      <button type="button" onClick={() => removeQuestion(idx)} className="text-rose-400 hover:text-rose-300">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={newQuestion}
                    onChange={e => setNewQuestion(e.target.value)}
                    placeholder="Enter question asked during technical/HR rounds..."
                    className="flex-1 bg-[#160c3b] border border-purple-800/50 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <button type="button" onClick={addQuestion} className="px-3 py-1.5 rounded-xl bg-purple-800 hover:bg-purple-700 text-white text-xs font-semibold flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* Selection Tips */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-purple-200">Preparation Tips for Juniors</label>
                <div className="space-y-2">
                  {formData.selectionTips.map((tip, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#160c3b] border border-purple-900/40 text-xs text-slate-200">
                      <span>{tip}</span>
                      <button type="button" onClick={() => removeTip(idx)} className="text-rose-400 hover:text-rose-300">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={newTip}
                    onChange={e => setNewTip(e.target.value)}
                    placeholder="e.g. Master Striver SDE sheet for tree traversals..."
                    className="flex-1 bg-[#160c3b] border border-purple-800/50 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <button type="button" onClick={addTip} className="px-3 py-1.5 rounded-xl bg-purple-800 hover:bg-purple-700 text-white text-xs font-semibold flex items-center gap-1">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-xl bg-purple-900/40 text-purple-200 text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs"
                >
                  Proceed to Review & Document Upload
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Summary & Document Upload */}
          {step === 4 && (
            <div className="space-y-5">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Overall Experience Summary & Attachment</span>
              </h2>

              <div>
                <label className="block text-xs font-semibold text-purple-200 mb-1">
                  Comprehensive Experience Overview *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.summary}
                  onChange={e => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Provide a detailed narrative of the entire placement process: assessment format, interview mood, unexpected challenges, and how you answered tough questions..."
                  className="w-full bg-[#160c3b] border border-purple-800/50 rounded-2xl p-3.5 text-xs text-white focus:outline-none focus:border-amber-400 leading-relaxed"
                />
              </div>

              {/* Document upload */}
              <div className="p-4 rounded-2xl bg-[#160c3b] border border-purple-800/40">
                <label className="block text-xs font-semibold text-purple-200 mb-2">
                  Attach Completed Template / Handwritten Notes (.pdf or .docx, optional)
                </label>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer px-4 py-2 rounded-xl bg-[#231252] hover:bg-[#2c1764] text-xs font-semibold text-purple-200 border border-purple-700/50 flex items-center gap-2">
                    <Upload className="w-4 h-4 text-amber-400" />
                    <span>{uploadingDoc ? 'Uploading...' : 'Choose File'}</span>
                    <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} className="hidden" />
                  </label>
                  {formData.uploadedDocumentUrl && (
                    <span className="text-xs text-emerald-400 font-mono truncate">
                      Attached: {formData.uploadedDocumentUrl}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 rounded-xl bg-purple-900/40 text-purple-200 text-xs font-semibold"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 disabled:opacity-50"
                >
                  {submitting ? 'Submitting Report...' : 'Confirm & Submit to T&P Review'}
                </button>
              </div>
            </div>
          )}

        </form>

      </div>
    </div>
  );
}
