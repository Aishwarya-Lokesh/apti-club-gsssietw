export interface EventItem {
  id: string;
  title: string;
  slug: string;
  posterUrl: string;
  date: string;
  time: string;
  venue: string;
  eligibleBatch: string;
  category: 'Interview Prep' | 'Group Discussion' | 'Technical' | 'Aptitude' | 'Workshop';
  maxRegistrations: number;
  currentRegistrations: number;
  registrationDeadline: string;
  status: 'open' | 'closed' | 'ongoing' | 'completed' | 'archived';
  description: string;
  keyTakeaways: string[];
  whatsAppTemplate?: string;
}

export interface RegistrationItem {
  id: string;
  eventId: string;
  eventTitle: string;
  studentName: string;
  usn: string;
  department: string;
  year: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface RecruitmentRound {
  roundNumber: number;
  name: string;
  type: 'Aptitude Assessment' | 'Coding Round' | 'Technical Interview' | 'HR & Behavioral' | 'Managerial Round';
  duration: string;
  description: string;
  difficulty: 'Moderate' | 'Challenging' | 'High';
  keyFocus: string[];
}

export interface InterviewExperienceItem {
  id: string;
  companyId: string;
  companyName: string;
  studentName: string;
  isAnonymous: boolean;
  department: string;
  year: string;
  role: string;
  packageLPA?: string;
  originalPdfUrl: string;
  summary: string;
  keyQuestions: string[];
  selectionTips: string[];
  status: 'uploaded' | 'processing' | 'approved' | 'published';
  createdAt: string;
}

export interface CompanyItem {
  id: string;
  name: string;
  slug: string;
  logoUrl: string;
  recruitmentYear: string;
  category: 'Fintech' | 'Product' | 'Consulting & IT' | 'Global MNC';
  availableRoles: string[];
  experienceCount: number;
  roundsCount: number;
  keyTopics: string[];
  overview: {
    summary: string;
    selectionRoundsSummary: string;
    aptitudeDetails: string;
    codingDetails: string;
    technicalDetails: string;
    hrDetails: string;
    repeatedTopics: string[];
    frequentlyReportedQuestions: string[];
    suggestedStrategy: string;
    experienceVariations: string;
  };
  roundsTimeline: RecruitmentRound[];
  status: 'draft' | 'analyzed' | 'review_required' | 'published';
  updatedAt: string;
}

export interface ChronicleItem {
  id: string;
  title: string;
  edition: string;
  academicYear: string;
  coverImageUrl: string;
  pdfUrl: string;
  description: string;
  pagesCount: number;
  publishedAt: string;
  highlights: string[];
  contributors: string[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  category: 'event' | 'company' | 'chronicle' | 'resource' | 'announcement';
  link: string;
  isRead: boolean;
  createdAt: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  designation: string;
  wing: 'Advisory / Faculty' | 'Club Head' | 'Aptitude' | 'Personality' | 'Technical' | 'Interview';
  department: string;
  year: string;
  photoUrl?: string;
  linkedInUrl?: string;
  initials: string;
}

export interface PreparationResourceItem {
  id: string;
  wing: 'Aptitude' | 'Personality' | 'Technical' | 'Interview';
  category: string;
  title: string;
  description: string;
  linkUrl: string;
  platform: string;
  recommendedFor: string;
  isPdf?: boolean;
}
