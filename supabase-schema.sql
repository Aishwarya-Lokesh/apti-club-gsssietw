-- ====================================================================
-- APTI CLUB - GSSSIETW Placement Preparation Platform
-- Database Schema for Supabase (PostgreSQL with Row Level Security)
-- ====================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Events Table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  poster_url TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  venue TEXT NOT NULL,
  eligible_batch TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Interview Prep', 'Group Discussion', 'Technical', 'Aptitude', 'Workshop')),
  max_registrations INTEGER NOT NULL DEFAULT 80,
  current_registrations INTEGER NOT NULL DEFAULT 0,
  registration_deadline TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'closed', 'ongoing', 'completed', 'archived')),
  description TEXT NOT NULL,
  key_takeaways TEXT[] DEFAULT '{}',
  whats_app_template TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Student Registrations Table
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
  event_title TEXT NOT NULL,
  student_name TEXT NOT NULL,
  usn TEXT NOT NULL,
  department TEXT NOT NULL,
  year TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT unique_student_event UNIQUE (event_id, usn)
);

-- 4. Recruiting Companies Table
CREATE TABLE IF NOT EXISTS public.companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT NOT NULL,
  recruitment_year TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Fintech', 'Product', 'Consulting & IT', 'Global MNC')),
  available_roles TEXT[] NOT NULL DEFAULT '{}',
  experience_count INTEGER NOT NULL DEFAULT 0,
  rounds_count INTEGER NOT NULL DEFAULT 3,
  key_topics TEXT[] NOT NULL DEFAULT '{}',
  overview JSONB NOT NULL DEFAULT '{}'::jsonb,
  rounds_timeline JSONB NOT NULL DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'analyzed', 'review_required', 'published')),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Interview Experiences Table
CREATE TABLE IF NOT EXISTS public.interview_experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  student_name TEXT NOT NULL,
  is_anonymous BOOLEAN NOT NULL DEFAULT FALSE,
  department TEXT NOT NULL,
  year TEXT NOT NULL,
  role TEXT NOT NULL,
  package_lpa TEXT,
  original_pdf_url TEXT NOT NULL,
  summary TEXT NOT NULL,
  key_questions TEXT[] DEFAULT '{}',
  selection_tips TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'approved' CHECK (status IN ('uploaded', 'processing', 'approved', 'published')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Chronicle Publications Archive
CREATE TABLE IF NOT EXISTS public.chronicles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  edition TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  cover_image_url TEXT NOT NULL,
  pdf_url TEXT NOT NULL,
  description TEXT NOT NULL,
  pages_count INTEGER NOT NULL DEFAULT 24,
  published_at TEXT NOT NULL,
  highlights TEXT[] DEFAULT '{}',
  contributors TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Notifications Table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('event', 'company', 'chronicle', 'resource', 'announcement')),
  link TEXT NOT NULL DEFAULT '/',
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Team Members Table
CREATE TABLE IF NOT EXISTS public.team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  designation TEXT NOT NULL,
  wing TEXT NOT NULL CHECK (wing IN ('Advisory / Faculty', 'Club Head', 'Aptitude', 'Personality', 'Technical', 'Interview')),
  department TEXT NOT NULL,
  year TEXT NOT NULL,
  photo_url TEXT,
  linked_in_url TEXT,
  initials TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interview_experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chronicles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public can view open and completed events" 
  ON public.events FOR SELECT USING (true);

CREATE POLICY "Public can view published companies" 
  ON public.companies FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view approved interview experiences" 
  ON public.interview_experiences FOR SELECT USING (status = 'approved');

CREATE POLICY "Public can view chronicles" 
  ON public.chronicles FOR SELECT USING (true);

CREATE POLICY "Public can view team members" 
  ON public.team_members FOR SELECT USING (true);

CREATE POLICY "Public can view notifications" 
  ON public.notifications FOR SELECT USING (true);

-- Student Self-Registration Policy
CREATE POLICY "Students can submit registrations" 
  ON public.registrations FOR INSERT WITH CHECK (true);

-- Admin Full Access Policies (Service Role / Authenticated)
CREATE POLICY "Admins have full access to events"
  ON public.events FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to registrations"
  ON public.registrations FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to companies"
  ON public.companies FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to experiences"
  ON public.interview_experiences FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to chronicles"
  ON public.chronicles FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to team"
  ON public.team_members FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to notifications"
  ON public.notifications FOR ALL USING (auth.role() = 'authenticated');
