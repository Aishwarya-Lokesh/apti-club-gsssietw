import { 
  EventItem, 
  CompanyItem, 
  ChronicleItem, 
  NotificationItem, 
  TeamMemberItem, 
  PreparationResourceItem,
  InterviewExperienceItem
} from '@/types';

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Mock Interview Drive 2026',
    slug: 'mock-interview-2026',
    posterUrl: '/assets/mock-interview-poster.jpg',
    date: 'Nov 11, 2026',
    time: '2:15 PM - 5:30 PM',
    venue: 'Placement Cell & Seminar Hall 2, GSSSIETW',
    eligibleBatch: '2nd & 3rd Year Students',
    category: 'Interview Prep',
    maxRegistrations: 80,
    currentRegistrations: 54,
    registrationDeadline: 'Nov 10, 2026 11:59 PM',
    status: 'open',
    description: 'Get hands-on real-time interview experience and boost your confidence for upcoming campus placements. Panelists include alumni and industry professionals from top tier MNCs.',
    keyTakeaways: [
      'One-on-one simulated Technical & HR interview rounds',
      'Instant personalized feedback on resume & articulation',
      'Detailed checklist on posture, eye contact & voice modulation',
      'Experience handling unexpected scenario questions'
    ],
    whatsAppTemplate: 'Check out APTI CLUB\'s Mock Interview Drive on Nov 11, 2026 at 2:15 PM! Registrations are open now. Secure your slot here: https://apti-gsssietw.edu/events/mock-interview-2026'
  },
  {
    id: 'evt-2',
    title: 'Group Discussion & Extempore Workshop',
    slug: 'gd-extempore-workshop',
    posterUrl: '/assets/mock-interview-poster.jpg',
    date: 'Nov 15, 2026',
    time: '10:30 AM - 1:00 PM',
    venue: 'Auditorium, GSSSIETW Campus',
    eligibleBatch: 'All Engineering Batches (1st to 4th Year)',
    category: 'Group Discussion',
    maxRegistrations: 120,
    currentRegistrations: 89,
    registrationDeadline: 'Nov 14, 2026 06:00 PM',
    status: 'open',
    description: 'Master the art of expressing opinions coherently, active listening, turning discussions without confrontation, and scoring high in GD evaluation grids.',
    keyTakeaways: [
      'Top 25 recurring GD topics in 2026 placement drives',
      'The 3-point framework for entering crowded discussions',
      'Extempore spontaneous speech drills (1-minute speaking challenge)'
    ],
    whatsAppTemplate: 'Join APTI CLUB\'s Group Discussion & Extempore Workshop on Nov 15, 2026! Register here: https://apti-gsssietw.edu/events/gd-extempore-workshop'
  },
  {
    id: 'evt-3',
    title: 'DSA & Coding Assessment Bootcamp',
    slug: 'dsa-coding-bootcamp',
    posterUrl: '/assets/mock-interview-poster.jpg',
    date: 'Nov 22, 2026',
    time: '3:00 PM - 6:00 PM',
    venue: 'Computer Center Lab 4',
    eligibleBatch: '3rd & 4th Year (Circuit & Non-Circuit)',
    category: 'Technical',
    maxRegistrations: 100,
    currentRegistrations: 100,
    registrationDeadline: 'Nov 20, 2026',
    status: 'closed',
    description: 'Comprehensive problem-solving sprint focusing on Sliding Window, Two Pointers, Trees, and Dynamic Programming patterns commonly asked in HackerRank & HackerEarth company tests.',
    keyTakeaways: [
      'Live code walkthrough of top 15 placement patterns',
      'Time complexity optimization tricks under pressure',
      'HackerRank test environment strategy'
    ],
    whatsAppTemplate: 'DSA Bootcamp registrations are closed for this batch. Stay tuned to APTI CLUB for future sessions!'
  }
];

export const INITIAL_COMPANIES: CompanyItem[] = [
  {
    id: 'comp-1',
    name: 'Deutsche Bank',
    slug: 'deutsche-bank',
    logoUrl: '/assets/xref_1372.jpeg',
    recruitmentYear: '2026',
    category: 'Fintech',
    availableRoles: ['Graduate Analyst (Technology)', 'Software Development Engineer', 'Data Analyst'],
    experienceCount: 4,
    roundsCount: 4,
    keyTopics: ['Aptitude', 'Data Structures & Algorithms', 'Core CS (OOPs & DBMS)', 'HR & Values'],
    overview: {
      summary: 'Deutsche Bank evaluates candidates thoroughly on fundamental computer science depth, analytical speed, and alignment with corporate integrity and team culture. Their recruitment consists of an online assessment followed by 2 technical rounds and an HR / Leadership interview.',
      selectionRoundsSummary: 'Candidates report a 4-round pipeline: Round 1 Online Assessment (Coding + MCQ Aptitude), Round 2 Technical Interview 1 (DSA + Live Coding), Round 3 Technical Interview 2 (System Architecture, DB Design & Projects), and Round 4 HR & Fitment Discussion.',
      aptitudeDetails: 'The aptitude section places high emphasis on Data Interpretation, Quantitative Arithmetic (Time & Work, Probability, Permutations), and Logical Deductions. Speed and accuracy are vital as section switching was restricted.',
      codingDetails: 'Coding questions are hosted on HackerEarth. 2 DSA problems: usually one array/string sliding window problem (Medium) and one Graph/Tree BFS/DFS traversal problem. Candidates who passed at least 1 full + 1 partial test case qualified for interviews.',
      technicalDetails: 'Technical interviewers ask candidates to code live in a shared editor (CoderPad / HackerRank CodePair). Strong emphasis on explaining thought processes, writing clean modular code, SQL query joins/group by, ACID properties, and OOPs 4 pillars with real-world examples.',
      hrDetails: 'HR rounds focus heavily on Deutsche Bank’s core values (Integrity, Sustainable Performance, Client Focus). Questions explore situational teamwork, resolving deadlines, and reasons for joining an investment bank.',
      repeatedTopics: [
        'Dynamic Programming & Sliding Window',
        'Binary Trees (Lowest Common Ancestor, Tree Traversals)',
        'Database Normalization (1NF to BCNF) & SQL Joins',
        'OOPs: Polymorphism vs Inheritance differences',
        'Operating Systems: Deadlock conditions & Process Synchronization'
      ],
      frequentlyReportedQuestions: [
        'Find the longest substring without repeating characters.',
        'Given a binary tree, print its top view and boundary traversal.',
        'Write an SQL query to find the second highest salary without using MAX() in a subquery.',
        'Explain the difference between optimistic and pessimistic locking.',
        'Tell me about a time when you disagreed with a team member during a college project.'
      ],
      suggestedStrategy: 'Prioritize Striver A2Z sheet for DSA. Practice writing error-free SQL queries on HackerRank. Be ready to explain every single line of code in your resume projects.',
      experienceVariations: 'Circuit branch students reported questions on basic microcontrollers and logic circuits, while CS/IS students were tested more heavily on System Design and Operating Systems.'
    },
    roundsTimeline: [
      {
        roundNumber: 1,
        name: 'Online Assessment',
        type: 'Aptitude Assessment',
        duration: '90 Minutes',
        description: 'Conducted on HackerEarth platform: 20 Aptitude & CS Core MCQs + 2 Data Structure Coding questions.',
        difficulty: 'Challenging',
        keyFocus: ['Speed-Math', 'Logic Series', 'Strings & Arrays', 'SQL MCQs']
      },
      {
        roundNumber: 2,
        name: 'Technical Interview 1',
        type: 'Technical Interview',
        duration: '45 - 60 Minutes',
        description: 'Live coding on shared IDE. In-depth questions on data structures, algorithmic complexity, and edge cases.',
        difficulty: 'High',
        keyFocus: ['Live Coding', 'Time Complexity Analysis', 'Recursion & Trees']
      },
      {
        roundNumber: 3,
        name: 'Technical Interview 2',
        type: 'Technical Interview',
        duration: '45 Minutes',
        description: 'Deep dive into resume projects, DBMS schema design, OOPs principles, and basic distributed systems concepts.',
        difficulty: 'Moderate',
        keyFocus: ['Project Architecture', 'DBMS Joins & Indexing', 'OOPs in Java/C++']
      },
      {
        roundNumber: 4,
        name: 'HR & Leadership Round',
        type: 'HR & Behavioral',
        duration: '30 Minutes',
        description: 'Evaluation of corporate culture fit, STAR-method behavioral scenarios, communication clarity, and career goals.',
        difficulty: 'Moderate',
        keyFocus: ['STAR Method', 'Bank Values', 'Confidence & Clarity']
      }
    ],
    status: 'published',
    updatedAt: '2026-11-05'
  },
  {
    id: 'comp-2',
    name: 'Accenture',
    slug: 'accenture',
    logoUrl: '/assets/xref_1372.jpeg',
    recruitmentYear: '2026',
    category: 'Consulting & IT',
    availableRoles: ['Associate Software Engineer (ASE)', 'Advanced Associate Software Engineer (AASE)'],
    experienceCount: 5,
    roundsCount: 3,
    keyTopics: ['Cognitive Ability', 'Technical MCQs', 'Hands-on Coding', 'Communication Assessment'],
    overview: {
      summary: 'Accenture’s on-campus selection process consists of Cognitive & Technical Assessment, Coding Assessment, an AI-monitored Communication Assessment, and a final Interview round.',
      selectionRoundsSummary: 'Stage 1: Cognitive Assessment + Technical MCQs. Candidates who clear cognitive immediately unlock the Coding round in the same sitting. Stage 2: Communication Assessment (Voice recognition). Stage 3: Virtual Technical & HR Interview.',
      aptitudeDetails: 'Cognitive tests cover English Ability, Critical Reasoning, and Abstract Reasoning. Technical questions test MS Office fundamentals, Pseudocodes, Common Network protocols, and Cloud basics.',
      codingDetails: '2 coding problems in 45 minutes. Language options: C, C++, Java, Python. Questions typically involve arrays, frequency maps, math operations, and string manipulations.',
      technicalDetails: 'Technical interviewers ask about final year projects, roles played in team assignments, and basic concepts of OOPs and Databases.',
      hrDetails: 'Questions evaluate willingness to relocate, flexible work shifts, conflict resolution, and enthusiasm for learning emerging technologies.',
      repeatedTopics: [
        'Pseudocode output prediction',
        'Bit manipulation and string manipulation',
        'Cloud basics & Networking protocols (HTTP, TCP, IP)',
        'Project architecture and personal contributions'
      ],
      frequentlyReportedQuestions: [
        'Predict the output of the following nested loop pseudocode.',
        'Find the difference between maximum and minimum sum of k elements.',
        'What are the advantages of cloud computing over on-premise infrastructure?',
        'Describe a situation where you had to adapt quickly to a new technology.'
      ],
      suggestedStrategy: 'Practice pseudocode solving on IndiaBix and PrepInsta. Ensure your mic and quiet environment are perfect for the voice-based communication assessment.',
      experienceVariations: 'Candidates eligible for the higher AASE package received harder dynamic programming and tree-based coding challenges.'
    },
    roundsTimeline: [
      {
        roundNumber: 1,
        name: 'Cognitive & Technical Assessment',
        type: 'Aptitude Assessment',
        duration: '90 Minutes',
        description: 'Integrated assessment evaluating English, Analytical Reasoning, Abstract Logic, Pseudocode, and Common Cloud fundamentals.',
        difficulty: 'Moderate',
        keyFocus: ['English Grammar', 'Pseudocodes', 'Abstract Reasoning']
      },
      {
        roundNumber: 2,
        name: 'Coding & Communication Round',
        type: 'Coding Round',
        duration: '45 + 20 Minutes',
        description: '2 Hands-on programming problems followed by an automated AI voice reading and speech assessment.',
        difficulty: 'Moderate',
        keyFocus: ['Array Algorithms', 'Speech Clarity', 'Listening & Repeat']
      },
      {
        roundNumber: 3,
        name: 'Technical & HR Interview',
        type: 'HR & Behavioral',
        duration: '30 - 40 Minutes',
        description: 'Comprehensive discussion covering academic project implementation, strengths, and company fit.',
        difficulty: 'Moderate',
        keyFocus: ['Project Walkthrough', 'Company Knowledge', 'Adaptability']
      }
    ],
    status: 'published',
    updatedAt: '2026-11-02'
  },
  {
    id: 'comp-3',
    name: 'Infosys',
    slug: 'infosys',
    logoUrl: '/assets/xref_1372.jpeg',
    recruitmentYear: '2026',
    category: 'Global MNC',
    availableRoles: ['Specialist Programmer (SP)', 'Digital Specialist Engineer (DSE)', 'Systems Engineer (SE)'],
    experienceCount: 3,
    roundsCount: 2,
    keyTopics: ['Advanced Algorithms', 'Greedy & Dynamic Programming', 'System Design Basics'],
    overview: {
      summary: 'Infosys conducts recruitment through on-campus test drives and the national HackWithInfy hackathon. Top scorers are interviewed for SP (9.5 LPA) and DSE (6.25 LPA) packages.',
      selectionRoundsSummary: 'Round 1: 3 Advanced Coding Problems on HackerEarth. Round 2: In-depth Technical Interview with Senior Engineers.',
      aptitudeDetails: 'For SP and DSE roles, no separate aptitude test is held. For SE roles, standard Mathematical Critical Thinking and Reasoning is conducted.',
      codingDetails: 'SP problems require high-level competitive programming skills: Advanced Graph Algorithms (Dijkstra, Bellman-Ford), Dynamic Programming on Trees, and Segment Trees.',
      technicalDetails: 'Interviewers ask candidates to optimize their test submissions, walk through time complexities, and explain data structure choices.',
      hrDetails: 'Standard behavioral questions regarding teamwork, adaptability, and project experience.',
      repeatedTopics: [
        'Graph Traversal & Shortest Path',
        'Dynamic Programming with Bitmasking',
        'Disjoint Set Union (DSU)',
        'Object-Oriented Design'
      ],
      frequentlyReportedQuestions: [
        'Can you optimize the solution you wrote for Question 2 in the test?',
        'Explain how garbage collection works in Java.',
        'Design a rate limiter algorithm conceptually.'
      ],
      suggestedStrategy: 'Practice LeetCode Medium to Hard problems and Striver Sheet.',
      experienceVariations: 'Interviews for DSE focus more on implementation accuracy, whereas SP interviews push into algorithmic optimality and distributed systems.'
    },
    roundsTimeline: [
      {
        roundNumber: 1,
        name: 'Coding Challenge',
        type: 'Coding Round',
        duration: '180 Minutes',
        description: '3 Algorithmic problems ranging from Medium to Hard difficulty on HackerEarth.',
        difficulty: 'High',
        keyFocus: ['DP', 'Graphs', 'Mathematical Logic']
      },
      {
        roundNumber: 2,
        name: 'Technical & Fitment Interview',
        type: 'Technical Interview',
        duration: '45 - 60 Minutes',
        description: 'Deep dive into test problem solutions, data structures, and core engineering concepts.',
        difficulty: 'High',
        keyFocus: ['Complexity Optimization', 'Project Architecture']
      }
    ],
    status: 'published',
    updatedAt: '2026-10-28'
  }
];

export const INITIAL_EXPERIENCES: InterviewExperienceItem[] = [
  {
    id: 'exp-1',
    companyId: 'comp-1',
    companyName: 'Deutsche Bank',
    studentName: 'Ananya S.',
    isAnonymous: false,
    department: 'Computer Science & Engineering',
    year: '2026 Batch',
    role: 'Graduate Analyst',
    packageLPA: '19.6 LPA',
    originalPdfUrl: '/assets/career_catalyst_vol2.pdf',
    summary: 'The interview focused on live problem solving, OOPs fundamentals, and explaining project decisions. The panel was friendly and guided me whenever I got stuck.',
    keyQuestions: [
      'Two Sum variation with 3 pointers',
      'Difference between Abstract class and Interface in Java 8+',
      'Write SQL query for Self Join to find employees reporting to same manager',
      'Explain ACID properties with an ATM transaction example'
    ],
    selectionTips: [
      'Think aloud while solving coding problems on CoderPad.',
      'Never hesitate to clarify question constraints before writing code.',
      'Revise DBMS indexing and transactions thoroughly.'
    ],
    status: 'approved',
    createdAt: '2026-11-01'
  },
  {
    id: 'exp-2',
    companyId: 'comp-1',
    companyName: 'Deutsche Bank',
    studentName: 'Student (Verified)',
    isAnonymous: true,
    department: 'Information Science & Engineering',
    year: '2026 Batch',
    role: 'Technology Analyst',
    packageLPA: '19.6 LPA',
    originalPdfUrl: '/assets/career_catalyst_vol2.pdf',
    summary: 'Round 1 had 2 medium DSA questions. Round 2 went deep into Operating Systems memory management and page replacement algorithms. HR round was very conversational.',
    keyQuestions: [
      'Find cycle in a linked list and return the starting node of the cycle',
      'Virtual Memory, Paging, and Thrashing explanation',
      'Why Deutsche Bank instead of a tech-first product company?'
    ],
    selectionTips: [
      'Read about Deutsche Bank’s current engineering initiatives in cloud banking.',
      'Keep resume crisp and be prepared to justify every project technology.'
    ],
    status: 'approved',
    createdAt: '2026-11-03'
  },
  {
    id: 'exp-3',
    companyId: 'comp-2',
    companyName: 'Accenture',
    studentName: 'Pooja R.',
    isAnonymous: false,
    department: 'Electronics & Communication Engineering',
    year: '2026 Batch',
    role: 'Advanced Associate Software Engineer',
    packageLPA: '6.5 LPA',
    originalPdfUrl: '/assets/career_catalyst_vol2.pdf',
    summary: 'Cleared both Cognitive and Coding in the first slot. The communication test requires clear speaking without hesitation. Interview was focused on my IoT mini-project and team collaboration.',
    keyQuestions: [
      'Array manipulation: replace each element with greatest on its right side',
      'Basic explanation of microcontrollers used in my project',
      'How do you handle working with someone whose opinions clash with yours?'
    ],
    selectionTips: [
      'Speak clearly into your microphone during the communication round.',
      'Do not rush into answering; take 5 seconds to structure your thoughts.'
    ],
    status: 'approved',
    createdAt: '2026-10-30'
  }
];

export const INITIAL_CHRONICLES: ChronicleItem[] = [
  {
    id: 'chronicle-2026',
    title: 'Career Catalyst Vol. 5 (2026 Batch)',
    edition: 'Volume 5',
    academicYear: '2026–2027',
    coverImageUrl: '/chronicles/cover_2026.png',
    pdfUrl: '/chronicles/chronicle_2026.pdf',
    description: 'The flagship 2026 annual placement chronicle curated by APTI CLUB GSSSIETW. Features 64 pages of comprehensive roadmaps for Aptitude, Professional Readiness, Technical Foundations, DSA, Core Subjects, and verified student interview dossiers.',
    pagesCount: 64,
    publishedAt: '2026',
    highlights: [
      'Comprehensive 4 Wings: Aptitude, Personality, Technical, Interview',
      'Detailed company dossiers: Deutsche Bank, Accenture, Infosys',
      'Core Subjects: OOPs, DBMS, OS, CN, SDLC with curated question banks',
      'Real candidate interview transcripts and selection tips'
    ],
    contributors: ['APTI CLUB Core Committee 2026']
  },
  {
    id: 'chronicle-2025',
    title: 'Career Catalyst Vol. 4 (2025 Batch)',
    edition: 'Volume 4',
    academicYear: '2025–2026',
    coverImageUrl: '/chronicles/cover_2025.png',
    pdfUrl: '/chronicles/chronicle_2025.pdf',
    description: 'The 2025 recruitment edition capturing tier-1 company selection workflows, aptitude benchmarks, technical interviews, and alumni preparation strategies.',
    pagesCount: 32,
    publishedAt: '2025',
    highlights: [
      'Foundational placement guide & formula bank',
      'Company profiles and interview round breakdowns',
      'Aptitude shortcuts & speed-math drills'
    ],
    contributors: ['APTI CLUB Senior Editorial Team 2025']
  },
  {
    id: 'chronicle-2024',
    title: 'APTI Chronicle Vol. 3 (2024 Batch)',
    edition: 'Volume 3',
    academicYear: '2024–2025',
    coverImageUrl: '/chronicles/cover_2024.png',
    pdfUrl: '/chronicles/chronicle_2024.pdf',
    description: 'A 61-page edition documenting student placement experiences, department-wise recruitment rounds, and company technical questions.',
    pagesCount: 61,
    publishedAt: '2024',
    highlights: [
      'Detailed analysis of multiple company drives',
      'Department-wise student experiences (CSE, ISE, ECE)',
      'High-frequency interview questions and solutions'
    ],
    contributors: ['APTI CLUB Team 2024']
  },
  {
    id: 'chronicle-report-2024',
    title: 'APTI Club Annual Report (2024)',
    edition: 'Annual Report',
    academicYear: '2023–2024',
    coverImageUrl: '/chronicles/cover_report_2024.png',
    pdfUrl: '/chronicles/apti_report_2024.pdf',
    description: 'Annual Club Activity Report highlighting mock interview drives, speaker sessions, workshops, and milestones achieved across academic terms.',
    pagesCount: 37,
    publishedAt: '2024',
    highlights: [
      'Summary of mock drives and workshops conducted',
      'Student participation numbers and achievements',
      'Faculty advisory commendations'
    ],
    contributors: ['Department of Training & Placement, GSSSIETW']
  },
  {
    id: 'chronicle-2023',
    title: 'APTI Club Chronicle Vol. 2 (2023 Batch)',
    edition: 'Volume 2',
    academicYear: '2022–2023',
    coverImageUrl: '/chronicles/cover_2023.png',
    pdfUrl: '/chronicles/chronicle_2023.pdf',
    description: 'Volume 2 capturing core technical subjects, coding interview preparation patterns, and placement insights from visiting recruiters.',
    pagesCount: 34,
    publishedAt: '2023',
    highlights: [
      'Introduction of technical coding modules',
      'Group discussion strategies and extempore drills',
      'Alumni placement journeys'
    ],
    contributors: ['APTI CLUB Committee 2023']
  },
  {
    id: 'chronicle-2022',
    title: 'APTI Club Newsletter Vol. 1 (2022 Genesis)',
    edition: 'Volume 1',
    academicYear: '2021–2022',
    coverImageUrl: '/chronicles/cover_2022.png',
    pdfUrl: '/chronicles/chronicle_2022.pdf',
    description: 'The inaugural founding newsletter establishing APTI CLUB’s mission, founding team, and vision for GSSSIETW student career excellence.',
    pagesCount: 13,
    publishedAt: '2022',
    highlights: [
      'Inauguration of APTI CLUB at GSSSIETW',
      'Establishment of the Four Wings',
      'Orientation and foundational workshop reports'
    ],
    contributors: ['APTI CLUB Founding Committee 2022']
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Mock Interview Registrations Open!',
    message: 'Mock Interview Drive for 2nd & 3rd Year is scheduled for Nov 11, 2026. Register before slots fill up.',
    category: 'event',
    link: '/events',
    isRead: false,
    createdAt: 'Just now',
    createdTimestamp: Date.now() - (10 * 60 * 1000)
  },
  {
    id: 'notif-2',
    title: 'New Company Guide: Deutsche Bank',
    message: 'Analysis of verified student interview experiences is now published in the Placement Hub.',
    category: 'company',
    link: '/company/deutsche-bank',
    isRead: false,
    createdAt: '2 hours ago',
    createdTimestamp: Date.now() - (2 * 60 * 60 * 1000)
  },
  {
    id: 'notif-3',
    title: '5 Years of APTI Chronicles Available',
    message: 'Explore the complete archive of APTI CLUB Chronicles from 2022 through 2026 online.',
    category: 'chronicle',
    link: '/chronicles',
    isRead: false,
    createdAt: '1 day ago',
    createdTimestamp: Date.now() - (24 * 60 * 60 * 1000)
  },
  {
    id: 'notif-4',
    title: 'GD & Extempore Workshop Announced',
    message: 'Master communication and group discussions on Nov 15, 2026. Open to all students.',
    category: 'event',
    link: '/events',
    isRead: true,
    createdAt: '2 days ago',
    createdTimestamp: Date.now() - (48 * 60 * 60 * 1000)
  }
];

export const INITIAL_TEAM: TeamMemberItem[] = [];

export const INITIAL_RESOURCES: PreparationResourceItem[] = [
  // Aptitude
  {
    id: 'res-apt-1',
    wing: 'Aptitude',
    category: 'Quantitative Aptitude',
    title: 'R.S. Aggarwal Quantitative Foundation',
    description: 'The gold standard textbook for mastering numbers, arithmetic, percentages, profit & loss, and speed-math.',
    linkUrl: 'https://www.placementpreparation.io',
    platform: 'Standard Placement Guide',
    recommendedFor: '1st & 2nd Year Beginners'
  },
  {
    id: 'res-apt-2',
    wing: 'Aptitude',
    category: 'Logical Reasoning',
    title: 'IndiaBix Logical Reasoning Practice',
    description: 'Topic-wise practice questions on Coding-Decoding, Blood Relations, Syllogisms, and Seating Arrangements.',
    linkUrl: 'https://www.indiabix.com/logical-reasoning/questions-and-answers/',
    platform: 'IndiaBix',
    recommendedFor: 'Speed & Accuracy Building'
  },
  {
    id: 'res-apt-3',
    wing: 'Aptitude',
    category: 'Verbal Ability',
    title: 'PrepInsta Reading Comprehension & Verbal',
    description: 'Sentence correction, error spotting, para-jumbles, and reading comprehension passages asked in campus exams.',
    linkUrl: 'https://prepinsta.com/verbal-ability/',
    platform: 'PrepInsta',
    recommendedFor: 'TCS & Accenture Tests'
  },
  {
    id: 'res-apt-4',
    wing: 'Aptitude',
    category: 'New-Age Aptitude & Gamification',
    title: 'Perspect AI & Cognitive Gamification Practice',
    description: 'Interactive games and attention trackers used by top modern recruiters to assess cognitive flexibility and decision making.',
    linkUrl: 'https://www.lumosity.com',
    platform: 'Lumosity & NeuroNation',
    recommendedFor: 'Gamified Assessments'
  },
  {
    id: 'res-apt-5',
    wing: 'Aptitude',
    category: 'Electro Quiz (Circuit Branches)',
    title: 'TinkerCAD & CircuitLab Interactive Quizzes',
    description: 'Circuit simulation tools and basic electronics MCQs for ECE/EEE students preparing for core placement rounds.',
    linkUrl: 'https://www.tinkercad.com',
    platform: 'TinkerCAD',
    recommendedFor: 'ECE & EEE Placements'
  },
  // Personality
  {
    id: 'res-pers-1',
    wing: 'Personality',
    category: 'Interview Behaviour Check',
    title: 'Body Language & Posture Masterclass',
    description: 'Maintaining confident eye contact, steady voice modulation, upright posture, and eliminating filler words ("umm...").',
    linkUrl: 'https://www.youtube.com',
    platform: 'APTI CLUB Video Guide',
    recommendedFor: 'Virtual & Offline Interviews'
  },
  {
    id: 'res-pers-2',
    wing: 'Personality',
    category: 'Mindset & Confidence Tracker',
    title: 'Confidence & Pressure Composure Checklist',
    description: 'Overcoming interview anxiety, practicing mock rounds with peers, and building a growth mindset under stressful questions.',
    linkUrl: '/chronicles',
    platform: 'Career Catalyst Vol. 2',
    recommendedFor: 'All Batches'
  },
  // Technical
  {
    id: 'res-tech-1',
    wing: 'Technical',
    category: 'DSA Roadmap',
    title: 'Striver’s A2Z DSA Sheet & TakeUForward',
    description: 'Complete end-to-end roadmap covering 450+ curated problems from basic arrays to dynamic programming and graphs.',
    linkUrl: 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
    platform: 'Take U Forward',
    recommendedFor: 'Product & Tier-1 MNCs'
  },
  {
    id: 'res-tech-2',
    wing: 'Technical',
    category: 'Programming Languages',
    title: 'Kunal Kushwaha Java + DSA Playlist',
    description: 'World-class open-source Java curriculum with deep explanations of memory allocation, OOPs, and recursion.',
    linkUrl: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_UmhsJuv8vxFUOzWC442v',
    platform: 'YouTube',
    recommendedFor: 'Java Developers'
  },
  {
    id: 'res-tech-3',
    wing: 'Technical',
    category: 'Core Subjects - DBMS',
    title: 'DBMS Placement Series & SQL Practice',
    description: 'Normalization (1NF to BCNF), SQL queries, Joins, Transactions, Indexing, and ACID properties.',
    linkUrl: 'https://www.geeksforgeeks.org/dbms/',
    platform: 'GeeksforGeeks & HackerRank',
    recommendedFor: 'All Technical Interviews'
  },
  {
    id: 'res-tech-4',
    wing: 'Technical',
    category: 'Core Subjects - Operating Systems',
    title: 'Abdul Bari & Neso Academy OS Series',
    description: 'Process scheduling, deadlocks, virtual memory, paging, and synchronization algorithms.',
    linkUrl: 'https://www.youtube.com',
    platform: 'YouTube / Neso Academy',
    recommendedFor: 'Technical Rounds'
  },
  // Interview
  {
    id: 'res-int-1',
    wing: 'Interview',
    category: 'Resume Essentials',
    title: 'Resume Crafting: What to Include vs Avoid',
    description: 'Directly from Career Catalyst 2026: crisp problem-solution-impact format, avoiding overused templates and unverified skills.',
    linkUrl: '/wings/interview',
    platform: 'Career Catalyst Guide',
    recommendedFor: 'Resume Building'
  },
  {
    id: 'res-int-2',
    wing: 'Interview',
    category: 'Virtual Hiring Essentials',
    title: 'Tech Checklist for Virtual Rounds',
    description: 'Camera eye level, clean lighting, backup hotspot, testing audio 10 mins prior, and avoiding on-screen lookaways.',
    linkUrl: '/wings/interview',
    platform: 'Career Catalyst Guide',
    recommendedFor: 'Online Company Interviews'
  }
];
