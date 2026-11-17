export interface KnowledgeItem {
  id: string;
  category: 'policy' | 'company' | 'aptitude' | 'technical' | 'interview' | 'platform' | 'events';
  topic: string;
  keywords: string[];
  questionPatterns: string[];
  answer: string;
  source: string;
  actionUrl?: string;
  actionText?: string;
}

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  // Platform & Registration
  {
    id: 'kb-register-drive',
    category: 'policy',
    topic: 'Placement Drive Registration',
    keywords: ['register', 'apply', 'drive', 'process', 'registration', 'deadline', 'eligibility'],
    questionPatterns: [
      'how do i register for a placement drive',
      'how to apply for campus drive',
      'steps to register for companies',
      'where to apply for placement',
      'can i register for placement drive'
    ],
    answer: `### How to Register for a Campus Placement Drive at GSSSIETW:

1. **Check Eligibility Criteria:** Navigate to the **Placement Hub** or **Student Dashboard** to verify that your branch, CGPA, and backlog status match the company's requirement.
2. **Review the Job Description:** Read the role profile, stipend/salary package, and bond conditions.
3. **Submit Registration:** Click on the **"Register Now"** button on the drive card before the deadline.
4. **Resume Verification:** Ensure your uploaded resume in the Student Profile is up-to-date and reflects the required skills.
5. **Confirmation:** You will receive an instant dashboard notification and confirmation email with the assessment schedule.

*Note: Registrations cannot be submitted after the posted deadline.*`,
    source: 'GSSSIETW Training & Placement Operational Handbook 2026, Section 4.2',
    actionUrl: '/placement-hub',
    actionText: 'Go to Placement Hub'
  },
  {
    id: 'kb-check-status',
    category: 'platform',
    topic: 'Application Status Tracking',
    keywords: ['status', 'application', 'track', 'shortlist', 'result', 'selection'],
    questionPatterns: [
      'how do i check my application status',
      'where to see if i am shortlisted',
      'track my drive application',
      'how to know if i got selected'
    ],
    answer: `### Tracking Your Application Status:

You can monitor your real-time recruitment progression via your **Student Dashboard**:
- **Applied:** Your registration is received and under branch verification.
- **Shortlisted:** Eligible to appear for Round 1 (Online Assessment).
- **In-Progress:** Cleared assessment; interview schedule dispatched.
- **Offered:** Letter of Intent (LOI) issued by the recruiting company!

All shortlisted USNs are also broadcasted immediately via the **Live Notification Bell** on the top navigation bar.`,
    source: 'APTI CLUB Student Portal Guide',
    actionUrl: '/dashboard',
    actionText: 'View My Dashboard'
  },
  {
    id: 'kb-upload-experience',
    category: 'platform',
    topic: 'Uploading Interview Experience',
    keywords: ['upload', 'submit', 'experience', 'report', 'share', 'interview experience', 'template'],
    questionPatterns: [
      'how do i upload my placement experience',
      'how to submit interview experience',
      'where can i share my placement report',
      'upload interview questions'
    ],
    answer: `### Submitting Your Placement Experience:

Placing students are encouraged to share their journey to guide juniors:
1. Download the **Standardized Placement Experience Template** (available in DOCX or PDF format from the Placement Hub).
2. Go to **Placement Hub -> Submit Report**.
3. Fill in the structured multi-round breakdown (Aptitude topics, Coding problems asked, Technical Q&A, and HR questions).
4. Attach your verified document and hit **Submit**.
5. Your report will be reviewed by the T&P faculty coordinator and published to the Company Dossier within 24 hours.`,
    source: 'APTI CLUB Knowledge Sharing Protocol 2026',
    actionUrl: '/placement-hub/submit-report',
    actionText: 'Submit Placement Report'
  },

  // Company Specifics - Deutsche Bank
  {
    id: 'kb-deutsche-bank',
    category: 'company',
    topic: 'Deutsche Bank Campus Recruitment',
    keywords: ['deutsche', 'db', 'deutsche bank', 'rounds', 'package', 'eligibility', 'fintech'],
    questionPatterns: [
      'what are the eligibility criteria for deutsche bank',
      'deutsche bank interview rounds',
      'how to prepare for deutsche bank',
      'what is deutsche bank package',
      'what questions does deutsche bank ask'
    ],
    answer: `### Deutsche Bank Campus Recruitment Dossier:

- **Category:** Global Fintech / Investment Banking
- **Eligible Branches:** CSE, ISE, ECE with CGPA ≥ 7.0 and No Active Backlogs
- **Compensation:** 19.60 LPA (Analyst - Graduate Technology)
- **Recruitment Process (4 Rounds):**
  1. **Online Assessment (90 Mins):** 2 Coding Questions (Medium DSA: Dynamic Programming, Sliding Window) + 20 CS fundamentals MCQs.
  2. **Technical Interview 1 (45-60 Mins):** Deep dive into Data Structures (Trees, Graphs), DBMS ACID properties, and SQL Joins.
  3. **Technical Interview 2 (45 Mins):** System Design fundamentals, OOPs design patterns, and resume project architecture.
  4. **Professional Fitment & HR (30 Mins):** Situational scenarios, banking domain interest, and STAR-format behavioral questions.`,
    source: 'Deutsche Bank 2026 Campus Drive Synthesis Report (APTI CLUB)',
    actionUrl: '/company/deutsche-bank',
    actionText: 'Explore Deutsche Bank Guide'
  },

  // Company Specifics - Accenture
  {
    id: 'kb-accenture',
    category: 'company',
    topic: 'Accenture Recruitment Process',
    keywords: ['accenture', 'ase', 'fada', 'rounds', 'cognitive', 'coding', 'package'],
    questionPatterns: [
      'accenture eligibility criteria',
      'what are accenture interview rounds',
      'how to prepare for accenture',
      'accenture cognitive assessment syllabus'
    ],
    answer: `### Accenture Campus Hiring Pattern:

- **Roles:** Associate Software Engineer (ASE: 4.5 LPA) & Advanced ASE (FADA: 6.5 LPA)
- **Eligibility:** All Circuit Branches (CSE, ISE, ECE, EEE, AI&DS) with CGPA ≥ 6.5
- **Recruitment Rounds:**
  1. **Cognitive & Technical Assessment (90 Mins):** Critical Thinking, Abstract Reasoning, English Ability, Pseudo-code, Cloud & Security basics. (Elimination Round)
  2. **Coding Assessment (45 Mins):** 2 Programming questions (Language of choice: C++, Java, Python).
  3. **Communication Assessment (20 Mins):** Automated voice-based test evaluating pronunciation, fluency, and sentence mastery.
  4. **Virtual Interview (30 Mins):** Project discussion, leadership scenarios, and adaptability.`,
    source: 'Accenture Placement Archive 2026, Volume 2',
    actionUrl: '/company/accenture',
    actionText: 'Explore Accenture Guide'
  },

  // Company Specifics - Infosys
  {
    id: 'kb-infosys',
    category: 'company',
    topic: 'Infosys Recruitment Details',
    keywords: ['infosys', 'specialist programmer', 'ses', 'infytq', 'hackwithinfy', 'dse'],
    questionPatterns: [
      'infosys interview rounds',
      'infosys eligibility criteria',
      'how to prepare for specialist programmer infosys'
    ],
    answer: `### Infosys Campus Recruitment Tracks:

- **Tracks:**
  - **Systems Engineer (SE):** 3.6 LPA
  - **Digital Specialist Engineer (DSE):** 6.25 LPA
  - **Specialist Programmer (SP):** 9.5 LPA
- **Selection Workflow:**
  1. **Online Test:** Reasoning Ability, Mathematical Ability, Verbal Ability, Pseudocode, and Puzzle Solving.
  2. **HackWithInfy / SP Coding Test:** 3 Hard/Medium algorithmic challenges (Greedy, Segment Trees, Backtracking).
  3. **Technical & HR Interview:** In-depth discussion on projects, data structures, and core engineering subjects.`,
    source: 'Infosys Campus Connect & Placement Records 2026',
    actionUrl: '/company/infosys',
    actionText: 'Explore Infosys Guide'
  },

  // Technical Preparation & Wings
  {
    id: 'kb-technical-skills',
    category: 'technical',
    topic: 'Most Tested Technical Concepts',
    keywords: ['technical', 'skills', 'concepts', 'syllabus', 'coding', 'dbms', 'oops', 'dsa'],
    questionPatterns: [
      'what technical skills are commonly tested',
      'what coding topics should i practice',
      'important dbms questions for placements',
      'core subjects asked in technical rounds'
    ],
    answer: `### High-Frequency Technical Topics Tested in Campus Drives:

1. **Data Structures & Algorithms (DSA):**
   - Arrays (Two Pointers, Sliding Window)
   - Strings (Anagrams, Palindromic substrings)
   - Linked Lists (Cycle detection, Reversal)
   - Binary Trees & BST (Traversals, LCA, Diameter)
   - Dynamic Programming basics (0/1 Knapsack, Coin Change)
2. **Database Management Systems (DBMS):**
   - SQL: 2nd highest salary, Self Joins, Group By with Having
   - Normalization (1NF through BCNF)
   - ACID Properties & Transaction Isolation levels
   - Indexing mechanisms (B-Trees, Hash Indexing)
3. **Object-Oriented Programming (OOPs):**
   - 4 Pillars: Encapsulation, Abstraction, Inheritance, Polymorphism
   - Virtual functions & Abstract classes
   - Diamond problem and method overloading vs overriding
4. **Computer Networks & OS:**
   - TCP 3-Way Handshake, DNS resolution process
   - Process vs Thread, Deadlock necessary conditions, Paging & Virtual Memory.`,
    source: 'APTI CLUB Technical Wing Placement Syllabus 2026',
    actionUrl: '/wings/technical',
    actionText: 'Explore Technical Wing'
  },

  // Aptitude Wing
  {
    id: 'kb-aptitude-prep',
    category: 'aptitude',
    topic: 'Quantitative & Logical Aptitude Strategy',
    keywords: ['aptitude', 'quant', 'logical', 'math', 'shortcuts', 'speed', 'reasoning'],
    questionPatterns: [
      'how to prepare for aptitude rounds',
      'important aptitude topics',
      'what is tested in quant',
      'how to improve calculation speed'
    ],
    answer: `### Aptitude Wing - Recommended Study Blueprint:

- **Must-Master Quant Topics:**
  1. Time, Speed & Distance (Trains, Boats & Streams)
  2. Time & Work (Pipes & Cisterns, Efficiency ratios)
  3. Percentages, Profit & Loss, Partnerships
  4. Permutations, Combinations & Probability
  5. Simple & Compound Interest (Half-yearly compounding)
- **Logical Reasoning:**
  - Syllogisms, Blood Relations, Seating Arrangements, Direction Sense.
- **Speed-Math Strategy:**
  - Memorize tables up to 25, squares up to 35, and cubes up to 15.
  - Practice digital root techniques to eliminate incorrect MCQ options rapidly.`,
    source: 'APTI CLUB Aptitude Wing Training Module',
    actionUrl: '/wings/aptitude',
    actionText: 'Explore Aptitude Wing'
  },

  // HR & Behavioral
  {
    id: 'kb-hr-star',
    category: 'interview',
    topic: 'Mastering the HR Interview with STAR Method',
    keywords: ['hr', 'behavioral', 'star', 'questions', 'tips', 'soft skills', 'introduce yourself'],
    questionPatterns: [
      'how to answer hr interview questions',
      'what is star method',
      'tell me about yourself placement interview',
      'common hr questions'
    ],
    answer: `### The STAR Methodology for HR & Managerial Rounds:

Structure every behavioral answer using:
- **S - Situation:** Set the context (project, college event, hackathon).
- **T - Task:** What was your specific responsibility or problem?
- **A - Action:** The tangible steps *you* personally took to resolve it.
- **R - Result:** The measurable outcome (improved latency by 20%, won 2nd prize).

**Top 3 Questions to Prepare:**
1. *"Tell me about yourself"* (Focus 80% on technical skills, projects, and career aspiration).
2. *"Describe a time you had a conflict with a teammate and how you handled it."*
3. *"Why do you want to join our company specifically?"* (Cite recent tech products or company values).`,
    source: 'APTI CLUB Interview Wing Handbook 2026',
    actionUrl: '/wings/interview',
    actionText: 'Explore Interview Wing'
  },

  // Chronicle & Resources
  {
    id: 'kb-chronicles',
    category: 'platform',
    topic: 'Career Catalyst Chronicle Archive',
    keywords: ['chronicle', 'catalyst', 'magazine', 'pdf', 'archive', 'alumni', 'experiences'],
    questionPatterns: [
      'where can i find company reports',
      'how to download career catalyst pdf',
      'where are previous placement magazines',
      'find past placed students'
    ],
    answer: `### Career Catalyst Chronicle Archive:

The **Career Catalyst** is our flagship annual placement dossier published by APTI CLUB GSSSIETW.
- **Volume 2 (2026 Edition):** Features 40+ verified candidate experiences, detailed salary trends, and interview transcripts.
- **Volume 1 (2025 Edition):** Comprehensive compilation of top recruiters and placement tips.

You can read all editions directly through our embedded online flip-reader or download the high-resolution PDF for offline preparation.`,
    source: 'APTI CLUB Publication Board',
    actionUrl: '/chronicles',
    actionText: 'Open Chronicle Archive'
  },

  // Profile Management
  {
    id: 'kb-profile-update',
    category: 'platform',
    topic: 'Student Profile Management',
    keywords: ['profile', 'update', 'cgpa', 'resume', 'edit', 'account'],
    questionPatterns: [
      'how can i update my profile',
      'how to upload my resume',
      'change my cgpa or phone number'
    ],
    answer: `### Updating Your Student Profile:

1. Log in to your student account using your college email or USN.
2. Navigate to **Student Dashboard -> Profile Settings**.
3. You can update your contact phone, preferred technical domains, and upload a new resume (PDF format, max 5MB).
4. *Important:* Semester CGPA and backlog updates require administrative validation by your departmental placement coordinator before becoming active for company filters.`,
    source: 'GSSSIETW Placement Portal User Manual',
    actionUrl: '/dashboard',
    actionText: 'Go to Profile Settings'
  }
];

/**
 * Tokenize and normalize text into clean search terms
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length > 2);
}

/**
 * Self-contained TF-IDF / BM25 style Local RAG Query Matcher
 */
export function queryKnowledgeBase(userQuery: string): {
  answer: string;
  source: string;
  confidence: 'high' | 'medium' | 'low';
  category?: string;
  actionUrl?: string;
  actionText?: string;
  suggestedQuestions: string[];
} {
  const queryTokens = tokenize(userQuery);
  const normalizedQuery = userQuery.toLowerCase().trim();

  if (queryTokens.length === 0) {
    return {
      answer: "Hello! I am the **APTI CLUB Placement Intelligence Assistant**. You can ask me anything about campus placement drives, company recruitment patterns (Deutsche Bank, Accenture, Infosys), aptitude formulas, technical rounds, or how to submit your interview report.",
      source: 'APTI CLUB Placement Intelligence System',
      confidence: 'high',
      suggestedQuestions: [
        'How do I register for a placement drive?',
        'What are the eligibility criteria for Deutsche Bank?',
        'What technical skills are commonly tested in interviews?'
      ]
    };
  }

  // Exact pattern matching pass
  for (const item of KNOWLEDGE_BASE) {
    for (const pattern of item.questionPatterns) {
      if (normalizedQuery.includes(pattern) || pattern.includes(normalizedQuery)) {
        return {
          answer: item.answer,
          source: item.source,
          confidence: 'high',
          category: item.category,
          actionUrl: item.actionUrl,
          actionText: item.actionText,
          suggestedQuestions: getRelatedQuestions(item.id)
        };
      }
    }
  }

  // Token Scoring Pass (TF-IDF approximation with keyword boosting)
  let bestScore = 0;
  let bestItem: KnowledgeItem | null = null;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;

    // Check keyword hits (weight = 3)
    for (const token of queryTokens) {
      if (item.keywords.some(k => k.includes(token) || token.includes(k))) {
        score += 3;
      }
      if (item.topic.toLowerCase().includes(token)) {
        score += 4;
      }
      if (item.answer.toLowerCase().includes(token)) {
        score += 1;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  if (bestItem && bestScore >= 4) {
    return {
      answer: bestItem.answer,
      source: bestItem.source,
      confidence: bestScore >= 7 ? 'high' : 'medium',
      category: bestItem.category,
      actionUrl: bestItem.actionUrl,
      actionText: bestItem.actionText,
      suggestedQuestions: getRelatedQuestions(bestItem.id)
    };
  }

  // Default fallback if no match found
  return {
    answer: `I could not locate specific placement documentation matching **"${userQuery}"** in the current college knowledge base.

**Helpful next steps:**
1. Try searching with specific company names (*e.g., "Deutsche Bank rounds", "Accenture eligibility"*).
2. Check our **Four Wings** for dedicated subject blueprints:
   - **Aptitude Wing:** Speed math, quantitative & logical reasoning.
   - **Technical Wing:** Data structures, DBMS, OOPs, SQL.
   - **Interview Wing:** STAR methodology, HR interview tips.
3. For special drive inquiries or profile corrections, contact the **Department of Training & Placement, GSSSIETW**.`,
    source: 'GSSSIETW Placement Helpdesk Reference',
    confidence: 'low',
    suggestedQuestions: [
      'Which companies have visited our college?',
      'How do I register for a placement drive?',
      'How to prepare for Accenture technical round?'
    ]
  };
}

function getRelatedQuestions(currentId: string): string[] {
  const pool = [
    'How do I register for a placement drive?',
    'What are the eligibility criteria for Deutsche Bank?',
    'What technical skills are commonly tested in interviews?',
    'How do I upload my placement experience?',
    'Where can I find company reports?',
    'How to master the HR interview with STAR method?'
  ];

  return pool.filter((_, idx) => (idx % 2 === 0)).slice(0, 3);
}
