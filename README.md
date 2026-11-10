# APTI CLUB – Department of Training and Placement
### GSSS Institute of Engineering and Technology for Women (GSSSIETW), Mysuru

> **"Dream. Discover. Define."** • *Prepare. Practice. Perform.* • **"Be Ready. Stand Out."**

---

## 🌟 Overview

**APTI CLUB** is the official dedicated placement preparation, student development, event management, and company interview intelligence platform for **GSSSIETW, Mysuru**.

This permanent digital platform unites the **Four Wings (A-P-T-I)**:
- **A – Aptitude Wing:** Quantitative arithmetic, logical reasoning, verbal fluency, speed-math drills, and new-age gamified cognitive tests (Perspect AI, Lumosity, TinkerCAD for circuit branches).
- **P – Personality Wing:** Interview behaviour checks, body language guidelines, group discussion (GD) frameworks, extempore speech drills, and virtual hiring readiness.
- **T – Technical Wing:** 5-stage technical roadmap (Foundations → DSA → Core CS → Projects → Interview Prep), Striver's A2Z DSA sheet, curated video lectures, and mistakes juniors should avoid.
- **I – Interview Wing:** Resume essentials (what to include vs avoid), the STAR method for behavioral rounds, pre-interview company research framework, and virtual test checklists.

---

## 🎨 Design System & Visual Identity

Engineered to reproduce the exact visual direction of the provided reference design:
- **Deep Midnight Navy & Black Purple:** `#070417`, `#0d0826`, `#140a32`
- **Rich Royal Purple Gradients:** `#24124e`, `#381677`, `#5b21b6`
- **Champagne Gold & Warm Accents:** `#fce588`, `#f6d285`, `#d4af37`, `#aa8024`
- **Typography & Hierarchy:** Elegant serif headings, letter-spaced kickers, gold script taglines, and clean high-readability body text.
- **Zero generic template elements:** Authentic branding with circular APTI CLUB emblem, college header, and real assets extracted from Career Catalyst Vol. 2.

---

## 🚀 Key Modules & Capabilities

### 1. 🏠 Flagship Home Page (`/`)
- **Luxury Hero Section:** Department kicker, gold display title, tagline, interactive 4 Wings pills, and "Dream Placement" banner.
- **Live Announcement Ticker:** Real-time marquee highlighting registrations and workshops.
- **Upcoming Events:** Event poster, eligibility tags, capacity tracking, "Register Now" modal, and direct WhatsApp sharing.
- **Company Preparation Hub:** Featured company preview (Deutsche Bank) with rounds counter, key topics, and direct navigation.
- **Quick Links (6-Tile Grid):** Apti Practice, Company Directory, Preparation Roadmap, Resume Tips, Mock Interviews, GD Topics.
- **Chronicle Archive Preview:** Magazine cover showcase with instant reader access.
- **Your Placement Journey Roadmap:** 4-year visual milestone track.
- **APTI CLUB 2026–2027 Team Banner.**

### 2. 🏢 Company Experience Analysis System (`/company/[slug]`)
- **The Most Important Placement Feature:**
  - Dynamic company pages (e.g. `/company/deutsche-bank`, `/company/accenture`, `/company/infosys`).
  - **Recruitment Process Overview:** Synthesized from candidate experiences.
  - **Interactive Recruitment Rounds Timeline:** Visual pipeline detailing duration, difficulty, and focus areas.
  - **Individual Student Experience Cards:** Anonymous/verified student reports, package (LPA), role, key questions asked, selection tips, and PDF download.
  - **Preparation Insights:** Repeated topics, frequently reported questions, suggested strategy, and experience variations.
  - **Mandatory Placement Disclaimer:**
    > *"These interview experiences are based on student-submitted reports from previous recruitment processes. Recruitment patterns, selection rounds, and requirements may change depending on the role, year, and hiring requirements. These experiences are intended for preparation and reference only."*

### 3. 📅 Events & Student Registration (`/events`)
- Live event catalog filtered by Upcoming, Ongoing, and Completed/Archived.
- Interactive registration modal with USN check, department, year, email, phone, capacity enforcement, duplicate prevention, and celebratory confetti!
- Pre-filled WhatsApp sharing generator.

### 4. 📖 Career Catalyst Chronicle Archive (`/chronicles`)
- Official host of **Career Catalyst Vol. 2 (2026 Batch)** — 28-page placement guide compiled by senior students.
- Embedded interactive PDF reader and instant direct download (`/assets/career_catalyst_vol2.pdf`).
- Honors editorial contributors: E Vennela Chowdary, Habeeba, Likhitha G, Anagha G Adiga, Kushi B G, Shibha Shetty, and Senior Vennela Chowdary's inspirational note.

### 5. 👥 Our Team (`/team`)
- APTI CLUB 2026–2027 faculty advisory, placement officer, club heads, and wing coordinators.
- Filterable by wing, with initials avatars and LinkedIn connectivity.

### 6. 🔒 Admin Command Center (`/admin`)
- **Protected Access:** Password-authenticated portal (`apti@2026`).
- **Overview Metrics:** Total events, registrations, companies, experiences, chronicles, and pending review drafts.
- **Event Manager:** Create, edit, set registration capacity, and export all registrations to CSV.
- **Company & PDF Analysis Engine:**
  - Create companies, upload logos, define roles.
  - Upload student experience PDFs.
  - **Approval Pipeline:** `Draft → AI Analysis → Admin Review → Edit → Approve → Publish`.
  - Trigger backend document analysis via `/api/analyze-experience`.
- **Broadcast System:** Send push and in-app notifications directly to students.

---

## 🛠️ Technology Stack

- **Framework:** Next.js (App Router, Turbopack, React Server & Client Components)
- **Styling:** Tailwind CSS (Custom luxury color tokens, glassmorphism, responsive grids)
- **Icons:** Lucide React & Custom Brand SVGs
- **Celebrations:** Canvas Confetti
- **Backend & Database:** 
  - Ready for Supabase PostgreSQL (schema provided in `supabase-schema.sql` with Row Level Security)
  - Built-in resilient client & server persistence via React Context & LocalStorage
- **AI Document Processing:**
  - Backend route `/api/analyze-experience` supporting Google Gemini API via `GEMINI_API_KEY` with deterministic structural synthesis engine fallback.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build & start production server
npm run build
npm start
```

Open `http://localhost:3000` in your browser.

- **Admin Login:** Navigate to `/admin` and enter password `apti@2026`.

---

© 2026 APTI CLUB, Department of Training & Placement, GSSSIETW. All rights reserved.
