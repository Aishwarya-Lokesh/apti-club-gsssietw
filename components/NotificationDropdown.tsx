'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { Bell, CheckCheck, ExternalLink, Calendar, Briefcase, BookOpen, Volume2, X } from 'lucide-react';
import Link from 'next/link';

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { 
    notifications, 
    unreadCount, 
    markNotificationAsRead, 
    markAllNotificationsAsRead, 
    browserNotificationsAllowed,
    requestBrowserNotifications 
  } = useStore();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'event': return <Calendar className="w-4 h-4 text-emerald-400" />;
      case 'company': return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'chronicle': return <BookOpen className="w-4 h-4 text-purple-400" />;
      default: return <Bell className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="View notifications"
        className="relative p-2 rounded-full text-slate-300 hover:text-amber-300 hover:bg-purple-900/40 transition-all border border-purple-800/40"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-[10px] font-bold text-slate-950 shadow-sm animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-[#0e0828] border border-purple-500/30 shadow-2xl z-50 overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-purple-950/80 to-[#120a32] border-b border-purple-900/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-sm text-slate-100">Live Notifications</span>
              {unreadCount > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {unreadCount} new
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllNotificationsAsRead}
                  className="text-xs text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
                  title="Mark all as read"
                >
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Mark all</span>
                </button>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Browser Push Opt-In Banner */}
          {!browserNotificationsAllowed && (
            <div className="px-4 py-2 bg-purple-900/30 border-b border-purple-800/30 flex items-center justify-between text-xs text-purple-200">
              <div className="flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Enable desktop alerts</span>
              </div>
              <button
                onClick={requestBrowserNotifications}
                className="text-[11px] font-medium px-2 py-0.5 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 rounded border border-amber-400/40 transition-colors"
              >
                Allow
              </button>
            </div>
          )}

          {/* List */}
          <div className="max-h-[360px] overflow-y-auto divide-y divide-purple-900/30">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-sm">
                No notifications right now.
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => markNotificationAsRead(n.id)}
                  className={`p-3.5 hover:bg-purple-900/30 transition-colors cursor-pointer flex gap-3 ${
                    !n.isRead ? 'bg-purple-950/40' : ''
                  }`}
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-purple-900/50 border border-purple-700/30 shrink-0">
                    {getCategoryIcon(n.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-xs font-semibold truncate ${!n.isRead ? 'text-amber-200' : 'text-slate-200'}`}>
                        {n.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 shrink-0">{n.createdAt}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {n.message}
                    </p>
                    {n.link && (
                      <Link
                        href={n.link}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 mt-1.5 font-medium"
                      >
                        <span>View details</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-2.5 bg-[#0a0520] border-t border-purple-900/40 text-center">
            <span className="text-[11px] text-slate-400">
              Department of Training & Placement • GSSSIETW
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
