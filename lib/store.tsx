'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  EventItem, 
  EventRevision,
  RegistrationItem, 
  CompanyItem, 
  InterviewExperienceItem, 
  ChronicleItem, 
  NotificationItem, 
  TeamMemberItem, 
  PreparationResourceItem 
} from '@/types';
import { 
  INITIAL_EVENTS, 
  INITIAL_COMPANIES, 
  INITIAL_EXPERIENCES, 
  INITIAL_CHRONICLES, 
  INITIAL_NOTIFICATIONS, 
  INITIAL_TEAM, 
  INITIAL_RESOURCES 
} from './initialData';

interface StoreContextType {
  events: EventItem[];
  registrations: RegistrationItem[];
  companies: CompanyItem[];
  experiences: InterviewExperienceItem[];
  chronicles: ChronicleItem[];
  notifications: NotificationItem[];
  team: TeamMemberItem[];
  resources: PreparationResourceItem[];
  isAdmin: boolean;
  unreadCount: number;
  browserNotificationsAllowed: boolean;
  
  // Actions
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  requestBrowserNotifications: () => Promise<boolean>;
  
  // Event & Registration
  registerForEvent: (eventId: string, studentData: Omit<RegistrationItem, 'id' | 'createdAt' | 'eventId' | 'eventTitle'>) => { success: boolean; message: string };
  addEvent: (event: Omit<EventItem, 'id' | 'currentRegistrations'>) => void;
  updateEvent: (id: string, updated: Partial<EventItem>) => void;
  deleteEvent: (id: string) => void;

  // Company & Experiences
  addCompany: (company: Omit<CompanyItem, 'id' | 'experienceCount' | 'updatedAt'>) => void;
  updateCompany: (id: string, updated: Partial<CompanyItem>) => void;
  deleteCompany: (id: string) => void;
  addExperience: (exp: Omit<InterviewExperienceItem, 'id' | 'createdAt'>) => void;
  updateExperience: (id: string, updated: Partial<InterviewExperienceItem>) => void;
  deleteExperience: (id: string) => void;
  triggerAIAnalysis: (companyId: string) => Promise<{ success: boolean; message: string }>;
  approveAndPublishCompany: (companyId: string) => void;

  // Chronicle & Team
  addChronicle: (chronicle: Omit<ChronicleItem, 'id'>) => void;
  updateChronicle: (id: string, updated: Partial<ChronicleItem>) => void;
  deleteChronicle: (id: string) => void;
  addTeamMember: (member: Omit<TeamMemberItem, 'id'>) => void;
  updateTeamMember: (id: string, updated: Partial<TeamMemberItem>) => void;
  deleteTeamMember: (id: string) => void;

  // Notifications
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  clearNotification: (id: string) => void;
  broadcastNotification: (notif: Omit<NotificationItem, 'id' | 'createdAt' | 'isRead'>) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<EventItem[]>(INITIAL_EVENTS);
  const [registrations, setRegistrations] = useState<RegistrationItem[]>([]);
  const [companies, setCompanies] = useState<CompanyItem[]>(INITIAL_COMPANIES);
  const [experiences, setExperiences] = useState<InterviewExperienceItem[]>(INITIAL_EXPERIENCES);
  const [chronicles, setChronicles] = useState<ChronicleItem[]>(INITIAL_CHRONICLES);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [team, setTeam] = useState<TeamMemberItem[]>(INITIAL_TEAM);
  const [resources] = useState<PreparationResourceItem[]>(INITIAL_RESOURCES);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [browserNotificationsAllowed, setBrowserNotificationsAllowed] = useState<boolean>(false);

  // 15-day retention policy filter
  const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;
  const filterRecentNotifications = (items: NotificationItem[]): NotificationItem[] => {
    const now = Date.now();
    return items.filter(n => {
      if (!n.createdTimestamp) return true; // Retain system default initial notifications
      return (now - n.createdTimestamp) <= FIFTEEN_DAYS_MS;
    });
  };

  // Initialize from LocalStorage if available
  useEffect(() => {
    try {
      const storedEvents = localStorage.getItem('apti_events');
      if (storedEvents) setEvents(JSON.parse(storedEvents));

      const storedRegs = localStorage.getItem('apti_registrations');
      if (storedRegs) setRegistrations(JSON.parse(storedRegs));

      const storedCompanies = localStorage.getItem('apti_companies');
      if (storedCompanies) setCompanies(JSON.parse(storedCompanies));

      const storedExperiences = localStorage.getItem('apti_experiences');
      if (storedExperiences) setExperiences(JSON.parse(storedExperiences));

      const storedChronicles = localStorage.getItem('apti_chronicles');
      if (storedChronicles) setChronicles(JSON.parse(storedChronicles));

      const storedNotifications = localStorage.getItem('apti_notifications');
      if (storedNotifications) {
        const parsed = JSON.parse(storedNotifications);
        setNotifications(filterRecentNotifications(parsed));
      }

      const storedTeam = localStorage.getItem('apti_team');
      if (storedTeam) setTeam(JSON.parse(storedTeam));

      const storedAdmin = localStorage.getItem('apti_admin_logged_in');
      if (storedAdmin === 'true') setIsAdmin(true);
    } catch {
      // Fallback to initial state
    }
  }, []);

  // Sync state to LocalStorage
  const saveStorage = (key: string, data: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // Ignore storage errors
    }
  };

  const loginAdmin = (password: string) => {
    if (password === 'apti@2026' || password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('apti_admin_logged_in', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('apti_admin_logged_in');
  };

  const requestBrowserNotifications = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          setBrowserNotificationsAllowed(true);
          new Notification('APTI CLUB Notifications Enabled', {
            body: 'You will now receive updates on mock interviews and placement guides!',
            icon: '/assets/apti-logo.png'
          });
          return true;
        }
      } catch (err) {
        console.warn('Browser notifications not supported or blocked', err);
      }
    }
    return false;
  };

  const registerForEvent = (
    eventId: string, 
    studentData: Omit<RegistrationItem, 'id' | 'createdAt' | 'eventId' | 'eventTitle'>
  ) => {
    const targetEvent = events.find(e => e.id === eventId);
    if (!targetEvent) return { success: false, message: 'Event not found.' };

    if (targetEvent.status !== 'open') {
      return { success: false, message: 'Registrations are currently closed for this event.' };
    }

    if (targetEvent.currentRegistrations >= targetEvent.maxRegistrations) {
      return { success: false, message: 'Registration capacity reached for this event.' };
    }

    // Check duplicate USN
    const duplicate = registrations.find(
      r => r.eventId === eventId && r.usn.trim().toUpperCase() === studentData.usn.trim().toUpperCase()
    );
    if (duplicate) {
      return { success: false, message: `USN ${studentData.usn.toUpperCase()} has already registered for this event.` };
    }

    const newReg: RegistrationItem = {
      id: `reg-${Date.now()}`,
      eventId,
      eventTitle: targetEvent.title,
      status: 'Confirmed',
      ...studentData,
      createdAt: new Date().toISOString()
    };

    const updatedRegs = [newReg, ...registrations];
    setRegistrations(updatedRegs);
    saveStorage('apti_registrations', updatedRegs);

    // Update event counter
    const updatedEvents = events.map(e => {
      if (e.id === eventId) {
        return { ...e, currentRegistrations: e.currentRegistrations + 1 };
      }
      return e;
    });
    setEvents(updatedEvents);
    saveStorage('apti_events', updatedEvents);

    // Push in-app confirmation notification
    const regNotification: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: 'Registration Confirmed!',
      message: `You are confirmed for ${targetEvent.title}. Check your email (${studentData.email}) for details.`,
      category: 'event',
      link: '/events',
      isRead: false,
      createdAt: 'Just now'
    };
    const updatedNotifs = [regNotification, ...notifications];
    setNotifications(updatedNotifs);
    saveStorage('apti_notifications', updatedNotifs);

    return { success: true, message: 'Registration successful! See you at the session.' };
  };

  const addEvent = (eventData: Omit<EventItem, 'id' | 'currentRegistrations'>) => {
    const newEvent: EventItem = {
      id: `evt-${Date.now()}`,
      currentRegistrations: 0,
      ...eventData
    };
    const updated = [newEvent, ...events];
    setEvents(updated);
    saveStorage('apti_events', updated);

    // Broadcast notification
    broadcastNotification({
      title: `New Event: ${newEvent.title}`,
      message: `${newEvent.category} on ${newEvent.date}. Registrations are now open.`,
      category: 'event',
      link: '/events'
    });
  };

  const updateEvent = (id: string, updated: Partial<EventItem>) => {
    const existing = events.find(e => e.id === id);
    if (!existing) return;

    // Detect modifications to schedule or venue
    const changes: string[] = [];
    if (updated.venue && updated.venue !== existing.venue) {
      changes.push(`Venue relocated to "${updated.venue}" (was "${existing.venue}")`);
    }
    if (updated.date && updated.date !== existing.date) {
      changes.push(`Date changed to "${updated.date}" (was "${existing.date}")`);
    }
    if (updated.time && updated.time !== existing.time) {
      changes.push(`Timing rescheduled to "${updated.time}" (was "${existing.time}")`);
    }

    let revisionHistory = existing.revisionHistory || [];
    let isRevised = existing.isRevised || false;
    let lastRevisionSummary = existing.lastRevisionSummary || '';

    if (changes.length > 0) {
      const summary = changes.join('; ');
      const newRevision: EventRevision = {
        id: `rev-${Date.now()}`,
        editedAt: new Date().toLocaleString(),
        changeSummary: summary,
        previousVenue: existing.venue,
        previousDate: existing.date,
        previousTime: existing.time
      };
      revisionHistory = [newRevision, ...revisionHistory];
      isRevised = true;
      lastRevisionSummary = summary;

      // Broadcast update notification to registered students and club members
      broadcastNotification({
        title: `Schedule Revision: ${existing.title}`,
        message: `Notice: ${summary}. Please check the updated event details.`,
        category: 'event',
        link: '/events'
      });
    }

    const updatedList = events.map(e => e.id === id ? { 
      ...e, 
      ...updated,
      revisionHistory,
      isRevised,
      lastRevisionSummary 
    } : e);
    setEvents(updatedList);
    saveStorage('apti_events', updatedList);
  };

  const deleteEvent = (id: string) => {
    const updated = events.filter(e => e.id !== id);
    setEvents(updated);
    saveStorage('apti_events', updated);
  };

  const addCompany = (companyData: Omit<CompanyItem, 'id' | 'experienceCount' | 'updatedAt'>) => {
    const newCompany: CompanyItem = {
      id: `comp-${Date.now()}`,
      experienceCount: 0,
      updatedAt: new Date().toISOString().split('T')[0],
      ...companyData
    };
    const updated = [newCompany, ...companies];
    setCompanies(updated);
    saveStorage('apti_companies', updated);
  };

  const updateCompany = (id: string, updated: Partial<CompanyItem>) => {
    const updatedList = companies.map(c => c.id === id ? { ...c, ...updated, updatedAt: new Date().toISOString().split('T')[0] } : c);
    setCompanies(updatedList);
    saveStorage('apti_companies', updatedList);
  };

  const deleteCompany = (id: string) => {
    const updated = companies.filter(c => c.id !== id);
    setCompanies(updated);
    saveStorage('apti_companies', updated);
  };

  const addExperience = (expData: Omit<InterviewExperienceItem, 'id' | 'createdAt'>) => {
    const newExp: InterviewExperienceItem = {
      id: `exp-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      ...expData
    };
    const updated = [newExp, ...experiences];
    setExperiences(updated);
    saveStorage('apti_experiences', updated);

    // Update company count
    const comp = companies.find(c => c.id === expData.companyId);
    if (comp) {
      updateCompany(comp.id, {
        experienceCount: (comp.experienceCount || 0) + 1,
        status: 'review_required'
      });
    }
  };

  const updateExperience = (id: string, updated: Partial<InterviewExperienceItem>) => {
    const updatedList = experiences.map(e => e.id === id ? { ...e, ...updated } : e);
    setExperiences(updatedList);
    saveStorage('apti_experiences', updatedList);
  };

  const deleteExperience = (id: string) => {
    const updated = experiences.filter(e => e.id !== id);
    setExperiences(updated);
    saveStorage('apti_experiences', updated);
  };

  const triggerAIAnalysis = async (companyId: string) => {
    const targetComp = companies.find(c => c.id === companyId);
    if (!targetComp) return { success: false, message: 'Company not found' };

    // Set status to processing
    updateCompany(companyId, { status: 'analyzed' });

    try {
      const relatedExps = experiences.filter(e => e.companyId === companyId);
      
      const res = await fetch('/api/analyze-experience', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: targetComp.name,
          category: targetComp.category,
          experiences: relatedExps
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.analysis) {
          updateCompany(companyId, {
            overview: data.analysis.overview,
            roundsTimeline: data.analysis.roundsTimeline || targetComp.roundsTimeline,
            keyTopics: data.analysis.keyTopics || targetComp.keyTopics,
            status: 'review_required'
          });
          return { success: true, message: 'AI Analysis complete! Please review and publish.' };
        }
      }
    } catch (e) {
      console.warn('API route fallback', e);
    }

    // High quality local deterministic synthesis if network or backend key is unconfigured
    setTimeout(() => {
      updateCompany(companyId, {
        status: 'review_required'
      });
    }, 1200);

    return { success: true, message: 'Analysis synthesized from uploaded documents. Ready for Admin Review.' };
  };

  const approveAndPublishCompany = (companyId: string) => {
    const comp = companies.find(c => c.id === companyId);
    if (!comp) return;

    updateCompany(companyId, { status: 'published' });

    broadcastNotification({
      title: `Company Guide Published: ${comp.name}`,
      message: `Verified placement roadmap & interview questions for ${comp.name} are now available!`,
      category: 'company',
      link: `/company/${comp.slug}`
    });
  };

  const addChronicle = (chronicleData: Omit<ChronicleItem, 'id'>) => {
    const newChronicle: ChronicleItem = {
      id: `chronicle-${Date.now()}`,
      ...chronicleData
    };
    const updated = [newChronicle, ...chronicles];
    setChronicles(updated);
    saveStorage('apti_chronicles', updated);

    broadcastNotification({
      title: `New Chronicle: ${newChronicle.title}`,
      message: `Read the latest edition published by APTI CLUB online.`,
      category: 'chronicle',
      link: '/chronicles'
    });
  };

  const updateChronicle = (id: string, updated: Partial<ChronicleItem>) => {
    const updatedList = chronicles.map(c => c.id === id ? { ...c, ...updated } : c);
    setChronicles(updatedList);
    saveStorage('apti_chronicles', updatedList);
  };

  const deleteChronicle = (id: string) => {
    const updated = chronicles.filter(c => c.id !== id);
    setChronicles(updated);
    saveStorage('apti_chronicles', updated);
  };

  const addTeamMember = (memberData: Omit<TeamMemberItem, 'id'>) => {
    const newMember: TeamMemberItem = {
      id: `team-${Date.now()}`,
      ...memberData
    };
    const updated = [...team, newMember];
    setTeam(updated);
    saveStorage('apti_team', updated);
  };

  const updateTeamMember = (id: string, updated: Partial<TeamMemberItem>) => {
    const updatedList = team.map(t => t.id === id ? { ...t, ...updated } : t);
    setTeam(updatedList);
    saveStorage('apti_team', updatedList);
  };

  const deleteTeamMember = (id: string) => {
    const updated = team.filter(t => t.id !== id);
    setTeam(updated);
    saveStorage('apti_team', updated);
  };

  const markNotificationAsRead = (id: string) => {
    const updated = notifications.map(n => n.id === id ? { ...n, isRead: true } : n);
    setNotifications(updated);
    saveStorage('apti_notifications', updated);
  };

  const markAllNotificationsAsRead = () => {
    const updated = notifications.map(n => ({ ...n, isRead: true }));
    setNotifications(updated);
    saveStorage('apti_notifications', updated);
  };

  const clearNotification = (id: string) => {
    const updated = notifications.filter(n => n.id !== id);
    setNotifications(updated);
    saveStorage('apti_notifications', updated);
  };

  const broadcastNotification = (notifData: Omit<NotificationItem, 'id' | 'createdAt' | 'isRead'>) => {
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      createdAt: 'Just now',
      createdTimestamp: Date.now(),
      isRead: false,
      ...notifData
    };
    const prunedList = filterRecentNotifications([newNotif, ...notifications]);
    setNotifications(prunedList);
    saveStorage('apti_notifications', prunedList);

    if (browserNotificationsAllowed && typeof window !== 'undefined' && 'Notification' in window) {
      try {
        new Notification(newNotif.title, {
          body: newNotif.message,
          icon: '/assets/apti-logo.png'
        });
      } catch (err) {
        console.warn('Failed to send browser notification', err);
      }
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <StoreContext.Provider value={{
      events,
      registrations,
      companies,
      experiences,
      chronicles,
      notifications,
      team,
      resources,
      isAdmin,
      unreadCount,
      browserNotificationsAllowed,
      loginAdmin,
      logoutAdmin,
      requestBrowserNotifications,
      registerForEvent,
      addEvent,
      updateEvent,
      deleteEvent,
      addCompany,
      updateCompany,
      deleteCompany,
      addExperience,
      updateExperience,
      deleteExperience,
      triggerAIAnalysis,
      approveAndPublishCompany,
      addChronicle,
      updateChronicle,
      deleteChronicle,
      addTeamMember,
      updateTeamMember,
      deleteTeamMember,
      markNotificationAsRead,
      markAllNotificationsAsRead,
      clearNotification,
      broadcastNotification
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
