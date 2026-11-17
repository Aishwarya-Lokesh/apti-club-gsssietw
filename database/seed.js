/**
 * APTI CLUB - GSSSIETW Placement Intelligence Platform
 * Primary Database Migration & Seeding Script
 * 
 * Usage:
 *   node database/seed.js
 */

const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Simple .env parser to support running standalone without dotenv package
function loadEnv() {
  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx > 0) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^['"]|['"]$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'apti_placement_db',
  multipleStatements: true
};

async function seed() {
  console.log('🚀 Starting APTI CLUB MySQL Database Seeding...');
  console.log(`Connecting to MySQL at ${dbConfig.host}:${dbConfig.port} as ${dbConfig.user}...`);

  let connection;
  try {
    // 1. Connect without database first to ensure database exists
    const rootConn = await mysql.createConnection({
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.password
    });

    await rootConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await rootConn.end();

    // 2. Connect to the database
    connection = await mysql.createConnection(dbConfig);
    console.log('Connected to MySQL successfully.');

    // 3. Read and run schema
    const schemaPath = path.join(__dirname, 'schema.sql');
    if (fs.existsSync(schemaPath)) {
      console.log('Executing database schema...');
      const schemaSql = fs.readFileSync(schemaPath, 'utf8');
      await connection.query(schemaSql);
      console.log('Schema tables verified and created.');
    }

    // 4. Create Users with Bcrypt Hashing
    console.log('Seeding administrative and student user accounts...');
    const adminPass = await bcrypt.hash('Admin@Gsss2026!', 10);
    const placementPass = await bcrypt.hash('Placement@2026!', 10);
    const teacherPass = await bcrypt.hash('Teacher@2026!', 10);
    const studentPass = await bcrypt.hash('Student@2026!', 10);

    const users = [
      {
        id: 'usr-admin-01',
        email: 'admin@gsss.edu.in',
        password_hash: adminPass,
        full_name: 'Super Administrator',
        role: 'super_admin'
      },
      {
        id: 'usr-placement-01',
        email: 'placement@gsss.edu.in',
        password_hash: placementPass,
        full_name: 'Dr. T&P Director',
        role: 'placement_admin'
      },
      {
        id: 'usr-teacher-01',
        email: 'teacher@gsss.edu.in',
        password_hash: teacherPass,
        full_name: 'Prof. Anitha Rao',
        role: 'teacher'
      },
      {
        id: 'usr-student-01',
        email: 'student@gsss.edu.in',
        password_hash: studentPass,
        full_name: 'Sneha Sharma',
        role: 'student'
      }
    ];

    for (const u of users) {
      await connection.query(
        `INSERT INTO users (id, email, password_hash, full_name, role)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE full_name = VALUES(full_name), role = VALUES(role), password_hash = VALUES(password_hash)`,
        [u.id, u.email, u.password_hash, u.full_name, u.role]
      );
    }

    // 5. Seed Student Profile
    await connection.query(
      `INSERT INTO students (id, user_id, usn, full_name, department, semester, batch_year, cgpa, phone, readiness_score)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE full_name = VALUES(full_name), cgpa = VALUES(cgpa)`,
      ['stu-01', 'usr-student-01', '4GW22CS045', 'Sneha Sharma', 'Computer Science & Engineering', 6, '2026', 8.75, '+91 98451 23456', 85]
    );

    // 6. Seed Companies
    console.log('Seeding verified recruiting companies...');
    const companies = [
      {
        id: 'comp-db-01',
        name: 'Deutsche Bank',
        slug: 'deutsche-bank',
        logo_url: '/assets/xref_1372.jpeg',
        recruitment_year: '2026',
        category: 'Fintech',
        available_roles: JSON.stringify(['Graduate Analyst - Tech', 'Software Development Engineer']),
        experience_count: 4,
        rounds_count: 4,
        key_topics: JSON.stringify(['Dynamic Programming', 'SQL Joins', 'OOPs Design', 'Behavioral']),
        overview: JSON.stringify({
          summary: 'Deutsche Bank is a leading global investment bank with a dedicated engineering center in India delivering low-latency distributed transaction systems.',
          selectionRoundsSummary: '4 Rounds: Assessment -> Technical 1 -> Technical 2 -> Leadership Fitment.',
          aptitudeDetails: 'Analytical reasoning, speed-math, probability, and financial case calculation.',
          codingDetails: '2 Algorithmic DSA problems (Sliding Window, Tree traversals, LeetCode Medium).',
          technicalDetails: 'OOPs architecture, ACID properties, multithreading in Java/C++, and deep dive into resume projects.',
          hrDetails: 'STAR methodology answers focusing on ethics, deadline management, and why Deutsche Bank.',
          repeatedTopics: ['Trees & Graphs', 'DBMS Indexing & Normalization', 'OOPs Inheritance vs Composition', 'System Architecture'],
          frequentlyReportedQuestions: [
            'Find the lowest common ancestor in a binary tree.',
            'Explain how an index in MySQL speeds up search and why it hurts write performance.',
            'Design an LRU cache with O(1) get and put operations.',
            'Describe a situation where you resolved a major bug under pressure.'
          ],
          suggestedStrategy: 'Master Striver SDE sheet topics. Practice SQL queries on HackerRank. Have in-depth knowledge of everything written on your resume.',
          experienceVariations: 'Identical rounds reported across CSE and ISE branches.'
        })
      },
      {
        id: 'comp-accenture-01',
        name: 'Accenture',
        slug: 'accenture',
        logo_url: '/assets/xref_1372.jpeg',
        recruitment_year: '2026',
        category: 'Consulting & IT',
        available_roles: JSON.stringify(['Associate Software Engineer (ASE)', 'Advanced ASE (FADA)']),
        experience_count: 8,
        rounds_count: 4,
        key_topics: JSON.stringify(['Cognitive Ability', 'Pseudo-code', 'Hands-on Coding', 'Communication Test']),
        overview: JSON.stringify({
          summary: 'Accenture is a global professional services company leading digital, cloud, and security transformations.',
          selectionRoundsSummary: '4 Rounds: Cognitive & Tech -> Coding Assessment -> Communication Round -> Virtual Interview.',
          aptitudeDetails: 'Abstract reasoning, numerical problem solving, and English proficiency.',
          codingDetails: '2 Hands-on coding questions (String manipulation, Matrix manipulation, Sorting).',
          technicalDetails: 'Pseudocode dry-running, cloud computing basics, and object-oriented fundamentals.',
          hrDetails: 'Communication, situational adaptability, and career goals.',
          repeatedTopics: ['Pseudocode Tracing', 'Strings & Arrays', 'Basic SQL Queries', 'SDLC Models'],
          frequentlyReportedQuestions: [
            'Given a string, find the first non-repeating character.',
            'Difference between Agile and Waterfall development models.',
            'What are primary keys and foreign keys in relational databases?'
          ],
          suggestedStrategy: 'Practice pseudocode evaluation and time management. Take speaking practice for the automated communication round.',
          experienceVariations: 'Coding round performance dictates eligibility for the higher 6.5 LPA FADA role.'
        })
      },
      {
        id: 'comp-infosys-01',
        name: 'Infosys',
        slug: 'infosys',
        logo_url: '/assets/xref_1372.jpeg',
        recruitment_year: '2026',
        category: 'Global MNC',
        available_roles: JSON.stringify(['Systems Engineer', 'Digital Specialist Engineer (DSE)', 'Specialist Programmer (SP)']),
        experience_count: 6,
        rounds_count: 3,
        key_topics: JSON.stringify(['Pseudocode', 'Mathematical Ability', 'Algorithmic Coding', 'Technical Q&A']),
        overview: JSON.stringify({
          summary: 'Infosys is a global leader in next-generation digital services and consulting.',
          selectionRoundsSummary: '3 Rounds: Assessment (Cognitive + Pseudo) -> Coding -> Technical & HR.',
          aptitudeDetails: 'High difficulty puzzles, reasoning questions, and verbal ability.',
          codingDetails: 'LeetCode Medium to Hard for Specialist Programmer candidates.',
          technicalDetails: 'Data structures, DBMS, Operating Systems, and project questions.',
          hrDetails: 'Willingness to relocate, continuous learning attitude, and team collaboration.',
          repeatedTopics: ['Dynamic Programming', 'Graph Traversals', 'Pointers & Memory', 'OOPs'],
          frequentlyReportedQuestions: [
            'Implement binary search on a rotated sorted array.',
            'Explain process scheduling algorithms in Operating Systems.',
            'Write an SQL query to retrieve employees with salaries above department average.'
          ],
          suggestedStrategy: 'Practice HackWithInfy archive questions and solve VTU past aptitude papers.',
          experienceVariations: 'Specialist Programmer track candidates undergo an advanced 3-question coding contest.'
        })
      }
    ];

    for (const c of companies) {
      await connection.query(
        `INSERT INTO companies (id, name, slug, logo_url, recruitment_year, category, available_roles, experience_count, rounds_count, key_topics, overview, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
         ON DUPLICATE KEY UPDATE name = VALUES(name), overview = VALUES(overview), key_topics = VALUES(key_topics)`,
        [c.id, c.name, c.slug, c.logo_url, c.recruitment_year, c.category, c.available_roles, c.experience_count, c.rounds_count, c.key_topics, c.overview]
      );
    }

    // 7. Seed Placement Drives
    console.log('Seeding active campus recruitment drives...');
    const drives = [
      {
        id: 'drv-db-2026',
        company_id: 'comp-db-01',
        academic_year: '2026-27',
        role_title: 'Graduate Technology Analyst',
        package_lpa: 19.60,
        min_cgpa: 7.00,
        eligible_branches: JSON.stringify(['CSE', 'ISE', 'ECE']),
        drive_date: '2026-11-28',
        registration_deadline: '2026-11-25 23:59:00',
        status: 'active',
        venue: 'Main Auditorium & Online Test Labs',
        description: 'Deutsche Bank campus recruitment drive for 2026 batch engineering graduates.'
      },
      {
        id: 'drv-acc-2026',
        company_id: 'comp-accenture-01',
        academic_year: '2026-27',
        role_title: 'Associate Software Engineer & Advanced ASE',
        package_lpa: 6.50,
        min_cgpa: 6.50,
        eligible_branches: JSON.stringify(['CSE', 'ISE', 'ECE', 'EEE', 'AI&DS']),
        drive_date: '2026-12-05',
        registration_deadline: '2026-11-30 23:59:00',
        status: 'upcoming',
        venue: 'Computer Science Labs, GSSSIETW',
        description: 'Accenture national campus drive for all circuit branches.'
      }
    ];

    for (const d of drives) {
      await connection.query(
        `INSERT INTO placement_drives (id, company_id, academic_year, role_title, package_lpa, min_cgpa, eligible_branches, drive_date, registration_deadline, status, venue, description)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE role_title = VALUES(role_title), package_lpa = VALUES(package_lpa), status = VALUES(status)`,
        [d.id, d.company_id, d.academic_year, d.role_title, d.package_lpa, d.min_cgpa, d.eligible_branches, d.drive_date, d.registration_deadline, d.status, d.venue, d.description]
      );
    }

    // 8. Seed Placement Reports (Verified Experiences)
    console.log('Seeding verified student placement experiences...');
    const reports = [
      {
        id: 'rep-01',
        company_id: 'comp-db-01',
        student_id: 'stu-01',
        student_name: 'Sneha Sharma',
        is_anonymous: false,
        department: 'CSE',
        batch_year: '2026',
        role: 'Graduate Technology Analyst',
        package_lpa: '19.6 LPA',
        summary: 'Cleared Deutsche Bank campus drive. Round 1 assessment had 2 DSA problems and CS core questions. Both technical interviews focused heavily on clean code and database transaction management.',
        rounds_data: JSON.stringify([
          { round: 1, name: 'Online Assessment', difficulty: 'Moderate', focus: 'DSA + CS Fundamentals' },
          { round: 2, name: 'Technical Round 1', difficulty: 'Challenging', focus: 'Trees, SQL Joins, Indexing' },
          { round: 3, name: 'Technical Round 2', difficulty: 'Challenging', focus: 'System Design, Projects' },
          { round: 4, name: 'HR & Values', difficulty: 'Moderate', focus: 'STAR framework behavioral questions' }
        ]),
        key_questions: JSON.stringify([
          'Explain the difference between clustered and non-clustered indexes in MySQL.',
          'Find the maximum sum path between two leaf nodes in a binary tree.',
          'How does HTTPS prevent man-in-the-middle attacks?',
          'Tell me about your final year project architecture and database schema.'
        ]),
        selection_tips: JSON.stringify([
          'Be completely honest about your projects — they ask deep questions.',
          'Explain your thought process aloud while coding.',
          'Know ACID properties and database isolation levels thoroughly.'
        ]),
        status: 'verified'
      }
    ];

    for (const r of reports) {
      await connection.query(
        `INSERT INTO placement_reports (id, company_id, student_id, student_name, is_anonymous, department, batch_year, role, package_lpa, summary, rounds_data, key_questions, selection_tips, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE summary = VALUES(summary)`,
        [r.id, r.company_id, r.student_id, r.student_name, r.is_anonymous, r.department, r.batch_year, r.role, r.package_lpa, r.summary, r.rounds_data, r.key_questions, r.selection_tips, r.status]
      );
    }

    console.log('✅ MySQL Database Seeding Completed Successfully!');
    console.log('Default Accounts Created:');
    console.log(' - Super Admin: admin@gsss.edu.in | Admin@Gsss2026!');
    console.log(' - Placement Officer: placement@gsss.edu.in | Placement@2026!');
    console.log(' - Teacher Coordinator: teacher@gsss.edu.in | Teacher@2026!');
    console.log(' - Student: student@gsss.edu.in | Student@2026!');

  } catch (error) {
    console.error('❌ Seeding failed with error:', error.message);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

seed();
