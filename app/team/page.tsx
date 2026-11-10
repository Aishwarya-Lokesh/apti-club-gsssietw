'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Sparkles, 
  ArrowLeft, 
  GraduationCap, 
  ShieldCheck, 
  Award,
  Plus
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { TeamMemberItem } from '@/types';

export default function TeamPage() {
  const { team, isAdmin, addTeamMember } = useStore();
  const [selectedWing, setSelectedWing] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMember, setNewMember] = useState<{
    name: string;
    designation: string;
    wing: TeamMemberItem['wing'];
    department: string;
    year: string;
    initials: string;
  }>({
    name: '',
    designation: '',
    wing: 'Technical',
    department: 'Computer Science & Engineering',
    year: '2026 Batch',
    initials: ''
  });

  const wings = ['All', 'Advisory / Faculty', 'Club Head', 'Aptitude', 'Personality', 'Technical', 'Interview'];

  const filteredTeam = team.filter(m => {
    if (selectedWing === 'All') return true;
    return m.wing === selectedWing;
  });

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMember.name || !newMember.designation) return;

    addTeamMember({
      name: newMember.name,
      designation: newMember.designation,
      wing: newMember.wing,
      department: newMember.department,
      year: newMember.year,
      initials: newMember.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    });

    setShowAddModal(false);
    setNewMember({
      name: '',
      designation: '',
      wing: 'Technical',
      department: 'Computer Science & Engineering',
      year: '2026 Batch',
      initials: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-purple-300/80">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Our Team (2026–2027)</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Users className="w-4 h-4 text-amber-400" />
              <span>Department of Training &amp; Placement • GSSSIETW</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              APTI CLUB Team 2026–2027
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Meet the faculty coordinators, student club heads, and wing leaders dedicated to empowering every junior with clarity, resources, and structured guidance.
            </p>
          </div>
        </div>

        {/* Filter Toolbar + Admin Add Member */}
        <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 flex flex-wrap items-center justify-between gap-4">
          
          {/* Wing Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {wings.map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWing(w)}
                className={`px-3.5 py-1.5 rounded-full font-semibold transition-all ${
                  selectedWing === w
                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md'
                    : 'bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40'
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          {/* Admin Add button */}
          {isAdmin && (
            <button
              onClick={() => setShowAddModal(true)}
              className="py-2 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md"
            >
              <Plus className="w-4 h-4" />
              <span>Add Member Profile</span>
            </button>
          )}

        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTeam.map((mem) => (
            <div
              key={mem.id}
              className="p-6 rounded-3xl bg-card-luxury flex flex-col justify-between hover:border-amber-400/50 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Avatar Badge */}
                <div className="relative w-20 h-20 rounded-2xl mx-auto p-1 bg-gradient-to-tr from-amber-400 via-purple-500 to-amber-200 shadow-xl overflow-hidden">
                  <div className="w-full h-full rounded-xl bg-[#140a32] flex items-center justify-center font-serif font-extrabold text-2xl text-amber-300">
                    {mem.initials}
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-900/60 text-amber-300 border border-purple-700/40">
                    {mem.wing}
                  </span>
                  
                  <h3 className="font-serif font-bold text-base text-slate-100 group-hover:text-amber-200 transition-colors pt-1">
                    {mem.name}
                  </h3>

                  <p className="text-xs text-amber-400/90 font-medium">
                    {mem.designation}
                  </p>

                  <p className="text-[11px] text-slate-400">
                    {mem.department}
                  </p>

                  <p className="text-[10px] text-purple-300 font-mono">
                    {mem.year}
                  </p>
                </div>

              </div>

              {/* LinkedIn SVG */}
              <div className="pt-4 border-t border-purple-900/30 mt-4 flex items-center justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-purple-900/40 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-all border border-purple-800/40"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Admin Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-3xl bg-[#0e0828] border border-amber-400/40 p-6 space-y-4">
            <h3 className="font-serif font-bold text-lg text-slate-100">
              Add New Team Member
            </h3>

            <form onSubmit={handleAddMember} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vennela Chowdary"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Designation</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aptitude Wing Lead"
                  value={newMember.designation}
                  onChange={(e) => setNewMember({ ...newMember, designation: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1">Wing</label>
                  <select
                    value={newMember.wing}
                    onChange={(e) => setNewMember({ ...newMember, wing: e.target.value as TeamMemberItem['wing'] })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  >
                    <option value="Aptitude">Aptitude</option>
                    <option value="Personality">Personality</option>
                    <option value="Technical">Technical</option>
                    <option value="Interview">Interview</option>
                    <option value="Club Head">Club Head</option>
                    <option value="Advisory / Faculty">Faculty</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">Department</label>
                  <select
                    value={newMember.department}
                    onChange={(e) => setNewMember({ ...newMember, department: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 text-slate-100"
                  >
                    <option value="Computer Science & Engineering">CSE</option>
                    <option value="Information Science & Engineering">ISE</option>
                    <option value="CSE (AI & ML)">CSE (AI & ML)</option>
                    <option value="Electronics & Communication">ECE</option>
                    <option value="Electrical & Electronics">EEE</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold"
                >
                  Save Member
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="py-2 px-4 rounded-xl bg-purple-900/50 text-slate-300"
                >
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
