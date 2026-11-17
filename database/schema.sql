-- ====================================================================
-- APTI CLUB - GSSSIETW Placement Intelligence & Career Management Platform
-- Normalized Primary MySQL Database Schema
-- Production Ready with Foreign Keys, Cascades, Indexes, and Full Constraints
-- ====================================================================

CREATE DATABASE IF NOT EXISTS apti_placement_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE apti_placement_db;

-- 1. Users Table (Role-Based Access Control)
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY,
  email VARCHAR(191) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(191) NOT NULL,
  role ENUM('super_admin', 'placement_admin', 'teacher', 'student') NOT NULL DEFAULT 'student',
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  failed_login_attempts INT NOT NULL DEFAULT 0,
  locked_until DATETIME NULL,
  last_login_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_users_email (email),
  INDEX idx_users_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Students Profile Table
CREATE TABLE IF NOT EXISTS students (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL UNIQUE,
  usn VARCHAR(30) NOT NULL UNIQUE,
  full_name VARCHAR(191) NOT NULL,
  department VARCHAR(50) NOT NULL,
  semester INT NOT NULL DEFAULT 6,
  batch_year VARCHAR(10) NOT NULL DEFAULT '2026',
  cgpa DECIMAL(4, 2) NOT NULL DEFAULT 0.00,
  phone VARCHAR(20) NOT NULL,
  resume_url TEXT NULL,
  readiness_score INT NOT NULL DEFAULT 65,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_students_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_students_usn (usn),
  INDEX idx_students_dept (department),
  INDEX idx_students_batch (batch_year)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Recruiting Companies Table
CREATE TABLE IF NOT EXISTS companies (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(191) NOT NULL,
  slug VARCHAR(191) NOT NULL UNIQUE,
  logo_url TEXT NOT NULL,
  recruitment_year VARCHAR(10) NOT NULL DEFAULT '2026',
  category ENUM('Fintech', 'Product', 'Consulting & IT', 'Global MNC') NOT NULL,
  available_roles JSON NOT NULL,
  experience_count INT NOT NULL DEFAULT 0,
  rounds_count INT NOT NULL DEFAULT 3,
  key_topics JSON NOT NULL,
  overview JSON NOT NULL,
  status ENUM('draft', 'analyzed', 'review_required', 'published') NOT NULL DEFAULT 'published',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_companies_slug (slug),
  INDEX idx_companies_category (category),
  INDEX idx_companies_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Placement Drives Table (Campus Recruitment Drives)
CREATE TABLE IF NOT EXISTS placement_drives (
  id VARCHAR(36) PRIMARY KEY,
  company_id VARCHAR(36) NOT NULL,
  academic_year VARCHAR(20) NOT NULL DEFAULT '2026-27',
  role_title VARCHAR(191) NOT NULL,
  package_lpa DECIMAL(5, 2) NOT NULL DEFAULT 0.00,
  min_cgpa DECIMAL(4, 2) NOT NULL DEFAULT 6.50,
  eligible_branches JSON NOT NULL,
  drive_date DATE NOT NULL,
  registration_deadline DATETIME NOT NULL,
  status ENUM('upcoming', 'active', 'completed', 'cancelled') NOT NULL DEFAULT 'upcoming',
  venue VARCHAR(191) NOT NULL DEFAULT 'Placement Auditorium / Online',
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_drives_company FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
  INDEX idx_drives_status (status),
  INDEX idx_drives_date (drive_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Student Drive Applications
CREATE TABLE IF NOT EXISTS student_applications (
  id VARCHAR(36) PRIMARY KEY,
  drive_id VARCHAR(36) NOT NULL,
  student_id VARCHAR(36) NOT NULL,
  status ENUM('applied', 'shortlisted', 'in_progress', 'offered', 'rejected') NOT NULL DEFAULT 'applied',
  current_round VARCHAR(100) NULL,
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  notes TEXT NULL,
  CONSTRAINT fk_apps_drive FOREIGN KEY (drive_id) REFERENCES placement_drives(id) ON DELETE CASCADE,
  CONSTRAINT fk_apps_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  UNIQUE KEY unique_student_drive (drive_id, student_id),
  INDEX idx_apps_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Interview Experiences & Placement Reports Table
CREATE TABLE IF NOT EXISTS placement_reports (
  id VARCHAR(36) PRIMARY KEY,
  company_id VARCHAR(36) NOT NULL,
  student_id VARCHAR(36) NULL,
  student_name VARCHAR(191) NOT NULL,
  is_anonymous BOOLEAN NOT NULL DEFAULT FALSE,
  department VARCHAR(50) NOT NULL,
  batch_year VARCHAR(10) NOT NULL DEFAULT '2026',
  role VARCHAR(191) NOT NULL,
  package_lpa VARCHAR(50) NULL,
  original_document_url TEXT NULL,
  summary TEXT NOT NULL,
  rounds_data JSON NOT NULL,
  key_questions JSON NOT NULL,
  selection_tips JSON NOT NULL,
  mistakes_to_avoid JSON NULL,
  status ENUM('pending', 'verified', 'rejected') NOT NULL DEFAULT 'verified',
  verified_by VARCHAR(36) NULL,
  verification_notes TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_reports_company FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
  CONSTRAINT fk_reports_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE SET NULL,
  INDEX idx_reports_company (company_id),
  INDEX idx_reports_status (status),
  INDEX idx_reports_dept (department)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Interview Rounds Template / Specifications
CREATE TABLE IF NOT EXISTS interview_rounds (
  id VARCHAR(36) PRIMARY KEY,
  company_id VARCHAR(36) NOT NULL,
  round_number INT NOT NULL,
  name VARCHAR(191) NOT NULL,
  type ENUM('Aptitude Assessment', 'Coding Round', 'Technical Interview', 'HR & Behavioral', 'Managerial Round') NOT NULL,
  duration VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  difficulty ENUM('Moderate', 'Challenging', 'High') NOT NULL DEFAULT 'Moderate',
  key_focus JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_rounds_company FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE,
  INDEX idx_rounds_company (company_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Events Table (Mock Interviews, GD Workshops, etc.)
CREATE TABLE IF NOT EXISTS events (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(191) NOT NULL UNIQUE,
  poster_url TEXT NOT NULL,
  date VARCHAR(50) NOT NULL,
  time VARCHAR(50) NOT NULL,
  venue VARCHAR(191) NOT NULL,
  eligible_batch VARCHAR(100) NOT NULL,
  category ENUM('Interview Prep', 'Group Discussion', 'Technical', 'Aptitude', 'Workshop') NOT NULL,
  max_registrations INT NOT NULL DEFAULT 80,
  current_registrations INT NOT NULL DEFAULT 0,
  registration_deadline VARCHAR(100) NOT NULL,
  status ENUM('open', 'closed', 'ongoing', 'completed', 'archived') NOT NULL DEFAULT 'open',
  description TEXT NOT NULL,
  key_takeaways JSON NOT NULL,
  whats_app_template TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_events_slug (slug),
  INDEX idx_events_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. Student Event Registrations Table
CREATE TABLE IF NOT EXISTS registrations (
  id VARCHAR(36) PRIMARY KEY,
  event_id VARCHAR(36) NOT NULL,
  event_title VARCHAR(255) NOT NULL,
  student_name VARCHAR(191) NOT NULL,
  usn VARCHAR(30) NOT NULL,
  department VARCHAR(50) NOT NULL,
  year VARCHAR(20) NOT NULL,
  email VARCHAR(191) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_regs_event FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  UNIQUE KEY unique_event_usn (event_id, usn),
  INDEX idx_regs_usn (usn)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. Chronicle Publications Archive Table
CREATE TABLE IF NOT EXISTS chronicles (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  edition VARCHAR(50) NOT NULL,
  academic_year VARCHAR(20) NOT NULL,
  cover_image_url TEXT NOT NULL,
  pdf_url TEXT NOT NULL,
  description TEXT NOT NULL,
  pages_count INT NOT NULL DEFAULT 24,
  published_at VARCHAR(50) NOT NULL,
  highlights JSON NOT NULL,
  contributors JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_chronicles_year (academic_year)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. Team Members Table
CREATE TABLE IF NOT EXISTS team_members (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(191) NOT NULL,
  designation VARCHAR(191) NOT NULL,
  wing ENUM('Advisory / Faculty', 'Club Head', 'Aptitude', 'Personality', 'Technical', 'Interview') NOT NULL,
  department VARCHAR(50) NOT NULL,
  year VARCHAR(20) NOT NULL,
  photo_url TEXT NULL,
  linked_in_url TEXT NULL,
  initials VARCHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_team_wing (wing)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 12. Advanced Notifications Table
CREATE TABLE IF NOT EXISTS notifications (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  category ENUM('event', 'company', 'chronicle', 'resource', 'announcement', 'drive', 'deadline', 'interview') NOT NULL,
  link VARCHAR(255) NOT NULL DEFAULT '/',
  target_role ENUM('all', 'student', 'teacher', 'admin') NOT NULL DEFAULT 'all',
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_notif_target (target_role),
  INDEX idx_notif_category (category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 13. Chatbot Knowledge Base Table (Self-Contained Local RAG)
CREATE TABLE IF NOT EXISTS chatbot_knowledge_base (
  id VARCHAR(36) PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  topic VARCHAR(191) NOT NULL,
  question_patterns JSON NOT NULL,
  keywords JSON NOT NULL,
  answer_content TEXT NOT NULL,
  source_reference VARCHAR(191) NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_kb_category (category),
  FULLTEXT idx_kb_content (topic, answer_content)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 14. Audit Logs Table (Admin Security & Governance)
CREATE TABLE IF NOT EXISTS audit_logs (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NULL,
  action VARCHAR(100) NOT NULL,
  resource VARCHAR(100) NOT NULL,
  details TEXT NULL,
  ip_address VARCHAR(45) NULL,
  user_agent TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_audit_action (action),
  INDEX idx_audit_user (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 15. Student Bookmarks Table
CREATE TABLE IF NOT EXISTS student_bookmarks (
  id VARCHAR(36) PRIMARY KEY,
  student_id VARCHAR(36) NOT NULL,
  item_type ENUM('company', 'experience', 'event', 'question') NOT NULL,
  item_id VARCHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_bm_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  UNIQUE KEY unique_student_bookmark (student_id, item_type, item_id),
  INDEX idx_bm_student (student_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
