'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Share2, 
  Search, 
  ArrowRight, 
  Sparkles, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { EventItem } from '@/types';
import EventRegistrationModal from '@/components/EventRegistrationModal';

export default function EventsPage() {
  const { events } = useStore();
  const [selectedTab, setSelectedTab] = useState<'all' | 'upcoming' | 'ongoing' | 'completed'>('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);

  const filteredEvents = events.filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedTab === 'upcoming') return matchesSearch && e.status === 'open';
    if (selectedTab === 'ongoing') return matchesSearch && e.status === 'ongoing';
    if (selectedTab === 'completed') return matchesSearch && (e.status === 'completed' || e.status === 'closed' || e.status === 'archived');
    return matchesSearch;
  });

  const handleWhatsAppShare = (event: EventItem) => {
    const text = encodeURIComponent(
      event.whatsAppTemplate || 
      `*${event.title}* - APTI CLUB GSSSIETW\nDate: ${event.date} at ${event.time}\nRegister here: https://apti-gsssietw.edu/events`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070417] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-purple-300/80">
          <Link href="/" className="hover:text-amber-300 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400 font-semibold">Events &amp; Workshops</span>
        </div>

        {/* Hero Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-hero-gradient border border-amber-400/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>APTI CLUB Calendar</span>
            </div>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
              Campus Events &amp; Placement Drives
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-light">
              Participate in simulated mock interviews, competitive coding hackathons, group discussion masterclasses, and pre-placement recruitment orientations.
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-6 rounded-3xl bg-card-luxury border border-purple-800/40 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto text-xs pb-1 md:pb-0">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                selectedTab === 'upcoming'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md'
                  : 'bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40'
              }`}
            >
              Upcoming ({events.filter(e => e.status === 'open').length})
            </button>

            <button
              onClick={() => setSelectedTab('ongoing')}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                selectedTab === 'ongoing'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md'
                  : 'bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40'
              }`}
            >
              Ongoing
            </button>

            <button
              onClick={() => setSelectedTab('completed')}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                selectedTab === 'completed'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md'
                  : 'bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40'
              }`}
            >
              Completed / Archived
            </button>

            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                selectedTab === 'all'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md'
                  : 'bg-purple-950/40 text-slate-300 hover:text-white border border-purple-800/40'
              }`}
            >
              All Events
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              placeholder="Search event title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-purple-950/50 border border-purple-800/60 focus:border-amber-400 focus:outline-none text-xs text-slate-100 placeholder-slate-400"
            />
          </div>

        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {filteredEvents.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-card-luxury border border-purple-900/40 space-y-3">
              <Calendar className="w-10 h-10 text-purple-400 mx-auto opacity-50" />
              <p className="text-sm font-semibold text-slate-300">No events found in this category.</p>
              <p className="text-xs text-slate-400">Check back soon or select another category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-6 rounded-3xl bg-card-luxury flex flex-col justify-between hover:border-amber-400/50 transition-all group"
                >
                  <div className="space-y-4">
                    
                    {/* Poster Image */}
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-purple-700/40 bg-purple-950">
                      <Image
                        src={evt.posterUrl}
                        alt={evt.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-900/80 text-amber-300 border border-amber-400/30">
                          {evt.category}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px]">
                        <span className={`px-2 py-0.5 rounded-full font-semibold ${
                          evt.status === 'open' 
                            ? 'bg-emerald-500/80 text-white' 
                            : 'bg-slate-700 text-slate-300'
                        }`}>
                          {evt.status === 'open' ? 'Registrations Open' : 'Closed / Archived'}
                        </span>
                        <span className="text-slate-300 font-mono text-[10px]">
                          {evt.currentRegistrations} / {evt.maxRegistrations} slots
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-serif font-bold text-lg text-slate-100 group-hover:text-amber-200 transition-colors">
                        {evt.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>

                    {/* Schedule Revision Notice */}
                    {evt.isRevised && (
                      <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-[11px] text-amber-300 flex items-start gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold">Schedule / Venue Revised</p>
                          <p className="text-[10px] text-purple-200/90">{evt.lastRevisionSummary || 'Updated by coordinator.'}</p>
                        </div>
                      </div>
                    )}

                    {/* Date / Time / Venue metadata */}
                    <div className="space-y-1.5 text-xs text-purple-200/90 pt-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{evt.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Eligible: {evt.eligibleBatch}</span>
                      </div>
                    </div>

                    {/* Capacity Progress Bar */}
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                        <span>Registration Capacity</span>
                        <span>{Math.round((evt.currentRegistrations / evt.maxRegistrations) * 100)}% Filled</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-purple-950 overflow-hidden border border-purple-800/40">
                        <div
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                          style={{ width: `${Math.min(100, (evt.currentRegistrations / evt.maxRegistrations) * 100)}%` }}
                        />
                      </div>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-purple-900/30 mt-5 flex items-center gap-3">
                    <button
                      onClick={() => setSelectedEventForReg(evt)}
                      disabled={evt.status !== 'open'}
                      className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        evt.status === 'open'
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                          : 'bg-purple-950/50 text-slate-500 border border-purple-900 cursor-not-allowed'
                      }`}
                    >
                      <span>{evt.status === 'open' ? 'Register Now' : 'Registrations Closed'}</span>
                      {evt.status === 'open' && <ArrowRight className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => handleWhatsAppShare(evt)}
                      className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                      title="Share on WhatsApp"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Registration Modal */}
      {selectedEventForReg && (
        <EventRegistrationModal
          event={selectedEventForReg}
          onClose={() => setSelectedEventForReg(null)}
        />
      )}

    </div>
  );
}
