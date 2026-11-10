'use client';

import React, { useState } from 'react';
import { EventItem } from '@/types';
import { useStore } from '@/lib/store';
import { X, CheckCircle2, AlertCircle, Share2, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EventRegistrationModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export default function EventRegistrationModal({ event, onClose }: EventRegistrationModalProps) {
  const { registerForEvent } = useStore();
  
  const [formData, setFormData] = useState({
    studentName: '',
    usn: '',
    department: 'Computer Science & Engineering',
    year: '3rd Year',
    email: '',
    phone: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'submitting' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.studentName.trim() || !formData.usn.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    // USN pattern check (VTU USN e.g. 4GW22CS001 or similar)
    if (formData.usn.trim().length < 6) {
      setStatus({ type: 'error', message: 'Please enter a valid USN.' });
      return;
    }

    setStatus({ type: 'submitting', message: 'Processing your registration...' });

    const result = registerForEvent(event.id, {
      studentName: formData.studentName.trim(),
      usn: formData.usn.trim().toUpperCase(),
      department: formData.department,
      year: formData.year,
      email: formData.email.trim(),
      phone: formData.phone.trim()
    });

    if (result.success) {
      setStatus({ type: 'success', message: result.message });
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Ignore confetti if not supported
      }
    } else {
      setStatus({ type: 'error', message: result.message });
    }
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      event.whatsAppTemplate || 
      `*${event.title}* by APTI CLUB GSSSIETW\nDate: ${event.date} at ${event.time}\nRegister here: https://apti-gsssietw.edu/events`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0f092b] border border-amber-400/30 shadow-2xl p-6 sm:p-8 overflow-hidden text-slate-100">
        
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-purple-900/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {status.type === 'success' ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-serif font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400">
                Registration Confirmed!
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                You are registered for <span className="font-semibold text-amber-300">{event.title}</span>. Please arrive 10 minutes prior to the scheduled time.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Student:</span>
                <span className="font-semibold">{formData.studentName}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">USN:</span>
                <span className="font-mono font-semibold">{formData.usn.toUpperCase()}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Date & Time:</span>
                <span>{event.date} • {event.time}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Venue:</span>
                <span>{event.venue}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share with Batchmates</span>
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-6 rounded-xl bg-purple-900/60 hover:bg-purple-900 text-slate-200 font-semibold text-xs transition-colors border border-purple-700/40"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-[11px] font-semibold mb-2">
                <Sparkles className="w-3 h-3" />
                <span>APTI CLUB Event Registration</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-100">
                {event.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-purple-200/80">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {event.venue}
                </span>
              </div>
            </div>

            {/* Error banner */}
            {status.type === 'error' && (
              <div className="mb-4 p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 flex items-center gap-2 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{status.message}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Rao"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-slate-100 placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">USN *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 4GW22CS045"
                    value={formData.usn}
                    onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-slate-100 placeholder-slate-500 uppercase font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Department *</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-slate-100"
                  >
                    <option value="Computer Science & Engineering">CSE</option>
                    <option value="Information Science & Engineering">ISE</option>
                    <option value="CSE (Artificial Intelligence & ML)">CSE (AI & ML)</option>
                    <option value="Electronics & Communication Engineering">ECE</option>
                    <option value="Electrical & Electronics Engineering">EEE</option>
                    <option value="Mechanical / Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Current Year *</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-slate-100"
                  >
                    <option value="1st Year">1st Year (2028 Batch)</option>
                    <option value="2nd Year">2nd Year (2027 Batch)</option>
                    <option value="3rd Year">3rd Year (2026 Batch)</option>
                    <option value="4th Year">4th Year (2025 Batch)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">College Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="student@gsss.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-slate-100 placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-slate-100 placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status.type === 'submitting'}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{status.type === 'submitting' ? 'Registering...' : 'Confirm Registration'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
