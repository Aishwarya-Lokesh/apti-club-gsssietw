export interface KnowledgeItem {
  id: string;
  category: 'policy' | 'company' | 'aptitude' | 'technical' | 'interview' | 'platform' | 'events' | 'identity';
  topic: string;
  keywords: string[];
  questionPatterns: string[];
  answer: string;
  source: string;
  actionUrl?: string;
  actionText?: string;
}

export const KNOWLEDGE_BASE: KnowledgeItem[] = [
  // -------------------------------------------------------------
  // APTI CLUB & INSTITUTIONAL IDENTITY
  // -------------------------------------------------------------
  {
    id: 'kb-apti-club-identity',
    category: 'identity',
    topic: 'About APTI CLUB – GSSSIETW',
    keywords: ['apti club', 'gsss', 'gsssietw', 'about', 'motto', 'mission', 'vision', 'college', 'mysuru', 'instagram'],
    questionPatterns: [
      'what is apti club',
      'about apti club',
      'apti club instagram',
      'what is the motto of apti club',
      'tell me about apti club gsssietw'
    ],
    answer: `### APTI CLUB – GSSS Institute of Engineering and Technology for Women (GSSSIETW), Mysuru

**APTI CLUB** is the premier student-led placement intelligence and professional development organization operating under the **Department of Training & Placement, GSSSIETW, Mysuru**.

- **Official Mottos:** *"Dream. Discover. Define."* & *"Be Ready. Stand Out."*
- **Institution:** GSSS Institute of Engineering and Technology for Women, Mysuru, Karnataka.
- **Official Instagram:** [@apticlub_gsss](https://www.instagram.com/apticlub_gsss/) — Follow for drive alerts, event recaps, and live quizzes.
- **Official Contact Email:** \`apticlub@gsss.edu.in\`

#### The Four Core Wings:
- **Aptitude Wing:** Speed-math calculation strategies, quantitative problem-solving, and logical deduction.
- **Personality Wing:** Communication excellence, public speaking, group discussions, and body language.
- **Technical Wing:** Data Structures & Algorithms, DBMS, OOPs, System Architecture, and Core CS.
- **Interview Wing:** Real-world mock drives, STAR behavioral framework, and resume defenses.`,
    source: 'APTI CLUB Institutional Charter & Constitution 2026, GSSSIETW',
    actionUrl: '/',
    actionText: 'Explore APTI CLUB'
  },
  {
    id: 'kb-five-year-chronicles',
    category: 'identity',
    topic: 'Five-Year APTI CLUB Chronicles Archive',
    keywords: ['chronicle', 'chronicles', 'archive', '5 years', 'career catalyst', 'editions', 'pdf', 'magazine', '2022', '2023', '2024', '2025', '2026', 'download'],
    questionPatterns: [
      'where can i read the chronicles',
      'what is career catalyst',
      'show me the 5 year chronicles',
      'how to download placement magazine',
      'previous year interview chronicles'
    ],
    answer: `### Five Years of APTI CLUB Chronicles (2022 – 2026)

The **Chronicles Archive** contains five years of official placement dossiers, annual synthesis reports, and candidate transcripts:

1. **Career Catalyst 2026 (Volume 2)** — 64 Pages: Deep dive into tier-1 recruitment drives, FinTech hiring patterns (Deutsche Bank, Target), and verified question sets.
2. **Career Catalyst 2025 (Volume 1)** — 32 Pages: Comprehensive analysis of early post-pandemic hiring shifts and service-to-product transition blueprints.
3. **APTI CLUB Chronicle 2024** — 61 Pages: In-depth round breakdowns, technical MCQ patterns, and interview round insights.
4. **APTI Annual Placement Report 2024** — 37 Pages: Verified departmental placement audits, salary bands, and branch-wise distributions.
5. **APTI CLUB Chronicle 2023** — 34 Pages: Foundation guide on aptitude short-tricks and behavioral round preparedness.
6. **APTI CLUB Chronicle 2022** — 13 Pages: Inaugural edition detailing the establishment of the Four Wings.

All editions can be read online through the interactive viewer or downloaded as high-resolution PDFs.`,
    source: 'APTI CLUB Publications Archive 2022–2026',
    actionUrl: '/chronicles',
    actionText: 'Browse 5-Year Archive'
  },

  // -------------------------------------------------------------
  // DATA STRUCTURES & ALGORITHMS (DSA) PREPARATION
  // -------------------------------------------------------------
  {
    id: 'kb-dsa-roadmap',
    category: 'technical',
    topic: 'DSA Complete Beginner to Advanced Roadmap',
    keywords: ['dsa', 'roadmap', 'data structures', 'algorithms', 'learning sequence', 'beginner', 'striver', 'leetcode', 'how to start dsa', 'what to learn first'],
    questionPatterns: [
      'how to learn dsa from scratch',
      'what should i learn first in dsa',
      'dsa roadmap for campus placements',
      'step by step guide to master dsa',
      'best sequence to study data structures'
    ],
    answer: `### DSA Complete Roadmap for Campus Placements:

Follow this proven 6-stage sequential roadmap to progress from complete beginner to cracking Tier-1 and MNC technical rounds:

#### Stage 1: Master One Programming Language (Weeks 1–2)
- Pick **C++ (STL)**, **Java (Collections Framework)**, or **Python**.
- Master I/O, vectors/ArrayLists, sets, maps/HashMaps, iterators, and pointers/references.
- Never switch languages mid-way during placement preparation.

#### Stage 2: Time & Space Complexity Analysis (Week 3)
- Understand Asymptotic Notations: Big-O ($O$), Big-Omega ($\Omega$), Big-Theta ($\Theta$).
- Compare orders of growth: $O(1) < O(\\log N) < O(N) < O(N \\log N) < O(N^2) < O(2^N)$.
- Learn to estimate time limits: 1 second $\\approx 10^8$ basic CPU operations.

#### Stage 3: Linear Data Structures (Weeks 4–7)
- **Arrays & Strings:** Two Pointers, Sliding Window, Prefix Sum, Dutch National Flag, Kadane's Algorithm.
- **Linked Lists:** Single/Doubly, Fast & Slow Pointers (Floyd's Cycle Finding), Reverse in k-groups.
- **Stacks & Queues:** Next Greater Element (Monotonic Stack), Valid Parentheses, LRU Cache implementation using Doubly Linked List + HashMap.

#### Stage 4: Non-Linear Data Structures (Weeks 8–11)
- **Binary Trees:** In-order, Pre-order, Post-order, Level-order traversals (BFS), Height, Diameter, Lowest Common Ancestor (LCA).
- **Binary Search Trees (BST):** Search, Insert, Delete, In-order traversal property (sorted array), Validate BST.
- **Heaps / Priority Queues:** Min-Heap, Max-Heap, Kth Largest Element, Top-K Frequent Elements.

#### Stage 5: Graphs & Dynamic Programming (Weeks 12–16)
- **Graphs:** Adjacency List, BFS, DFS, Cycle Detection (Directed & Undirected), Topological Sort (Kahn's), Shortest Path (Dijkstra, Bellman-Ford).
- **Recursion & Backtracking:** Subsets, Permutations, N-Queens, Sudoku Solver.
- **Dynamic Programming (DP):**
  - 1D DP: Climbing Stairs, Frog Jump, House Robber.
  - 2D / Grid DP: Unique Paths, Minimum Path Sum.
  - Classic Patterns: 0/1 Knapsack, Coin Change, Longest Common Subsequence (LCS), Longest Increasing Subsequence (LIS).

#### Stage 6: Curated Problem Lists
- Complete the **Striver SDE Sheet (180 Questions)**.
- Practice the **LeetCode Top Interview 150**.
- Aim for 200–250 quality solved problems before placement season.`,
    source: 'APTI CLUB Technical Wing Placement Curriculum 2026',
    actionUrl: '/wings/technical',
    actionText: 'Explore Technical Wing'
  },
  {
    id: 'kb-arrays-vs-linkedlists',
    category: 'technical',
    topic: 'Arrays vs Linked Lists: Conceptual & Performance Breakdown',
    keywords: ['array', 'arrays', 'linked list', 'linked lists', 'difference', 'compare', 'memory', 'cache', 'time complexity', 'random access'],
    questionPatterns: [
      'difference between array and linked list',
      'arrays vs linked lists',
      'when to use linked list over array',
      'compare array and linked list memory layout'
    ],
    answer: `### Arrays vs. Linked Lists: In-Depth Technical Comparison

| Feature | Array | Singly Linked List |
| :--- | :--- | :--- |
| **Memory Allocation** | Contiguous blocks in memory | Non-contiguous, dynamically allocated on heap |
| **Access Time (Index)** | **$O(1)$** (Direct arithmetic via pointer offset) | **$O(N)$** (Sequential traversal from head) |
| **Insertion / Deletion at Head** | $O(N)$ (Requires shifting all subsequent elements) | **$O(1)$** (Pointer reassignment only) |
| **Insertion / Deletion in Middle** | $O(N)$ (Due to element shifts) | $O(N)$ traversal + $O(1)$ pointer splice |
| **Insertion at Tail** | $O(1)$ amortized for dynamic arrays; $O(N)$ for fixed | **$O(1)$** if tail pointer is maintained |
| **Cache Locality** | **Excellent (High spatial locality)** $\\rightarrow$ CPU cache hits | **Poor** $\\rightarrow$ Pointer chasing causes cache misses |
| **Memory Overhead** | **Zero extra overhead** (pure data elements) | **Extra pointer per node** (4 or 8 bytes per node) |
| **Size Flexibility** | Fixed (static) or expensive resize (allocating $2\\times$ buffer) | Completely dynamic; grows & shrinks per node |

#### Practical Interview Heuristics:
- **Choose an Array when:** You need frequent random lookups by index ($O(1)$), know the collection size in advance, or prioritize maximum CPU cache performance.
- **Choose a Linked List when:** You perform frequent insertions and deletions at the head or front (e.g., implementing Queues, Deques, or LRU cache nodes) and random access is not required.`,
    source: 'APTI CLUB Data Structures Foundation Dossier',
    actionUrl: '/wings/technical',
    actionText: 'More Data Structures Guides'
  },

  // -------------------------------------------------------------
  // CORE CS FUNDAMENTALS (DBMS, OOPS, OS, NETWORKS)
  // -------------------------------------------------------------
  {
    id: 'kb-core-cs-dbms',
    category: 'technical',
    topic: 'DBMS ACID Properties, Normalization & SQL Essentials',
    keywords: ['dbms', 'acid', 'properties', 'normalization', '1nf', '2nf', '3nf', 'bcnf', 'sql', 'indexing', 'transactions', 'database'],
    questionPatterns: [
      'explain acid properties in dbms',
      'what is normalization and its types',
      'what are acid properties with example',
      'dbms interview questions',
      'difference between b tree and hash index'
    ],
    answer: `### DBMS Core Fundamentals for Technical Interviews:

#### 1. ACID Properties (Explained with Bank Transfer Example: Account A sends ₹1,000 to Account B)
- **A - Atomicity ("All or Nothing"):** Either both operations succeed (A debited by ₹1,000 AND B credited by ₹1,000) or the entire transaction is rolled back if a server crashes midway.
- **C - Consistency:** Database moves from one valid state to another. Total money in system before transfer must equal total money after transfer.
- **I - Isolation:** Concurrent transactions run independently without interfering. Another customer querying Account A midway will not see intermediate, uncommitted debit states.
- **D - Durability:** Once the transaction commits, changes are permanently written to non-volatile storage (write-ahead log / disk) even in case of total power failure.

#### 2. Normalization Stages:
- **1NF:** Eliminate repeating groups; ensure every column contains atomic (indivisible) values.
- **2NF:** Must be in 1NF + eliminate **partial functional dependencies** (all non-key attributes must depend fully on the primary key, not a part of a composite key).
- **3NF:** Must be in 2NF + eliminate **transitive dependencies** (non-key attribute must not depend on another non-key attribute: $A \\rightarrow B$ and $B \\rightarrow C$).
- **BCNF (Boyce-Codd):** Stricter 3NF: For every functional dependency $X \\rightarrow Y$, $X$ must be a super key.

#### 3. High-Frequency SQL Patterns:
- Finding $N$-th highest salary:
  \`SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET (N - 1);\`
- Self Join, INNER vs LEFT vs FULL OUTER JOIN, and \`HAVING\` vs \`WHERE\`.`,
    source: 'APTI CLUB Core CS Knowledge Repository 2026',
    actionUrl: '/wings/technical',
    actionText: 'Review DBMS Questions'
  },
  {
    id: 'kb-core-cs-oops',
    category: 'technical',
    topic: 'Object-Oriented Programming (OOPs) Four Pillars & Concepts',
    keywords: ['oops', 'four pillars', 'encapsulation', 'abstraction', 'inheritance', 'polymorphism', 'overloading', 'overriding', 'virtual function', 'interface'],
    questionPatterns: [
      'what are the four pillars of oops',
      'explain oops concepts with real world examples',
      'difference between method overloading and overriding',
      'difference between abstract class and interface'
    ],
    answer: `### The Four Pillars of Object-Oriented Programming (OOPs):

#### 1. Encapsulation (Data Hiding & Bundling)
- Wrapping variables (data) and methods (code) into a single cohesive unit (class) while restricting direct outside access to sensitive variables using private access modifiers and providing controlled getters/setters.
- *Real-world analogy:* A medical capsule containing medicines inside, or an ATM machine hiding cash vault internals behind a keypad interface.

#### 2. Abstraction (Hiding Complexity)
- Exposing only relevant, essential features to the user while concealing internal implementation mechanics. Achieved via **Abstract Classes** and **Interfaces**.
- *Real-world analogy:* Pressing the brake pedal in a car — you stop the car without needing to know hydraulic fluid pressure or caliper friction physics.

#### 3. Inheritance (Code Reusability)
- Mechanism where a subclass (derived class) inherits properties and behavior from a superclass (base class).
- Supports single, multi-level, and hierarchical inheritance (and multiple inheritance via interfaces in Java/C++).
- *Real-world analogy:* A \`ElectricCar\` inherits features from \`Vehicle\` and adds specific battery attributes.

#### 4. Polymorphism ("Many Forms")
- **Compile-Time Polymorphism (Static / Early Binding):** Method Overloading (same method name, different parameter signature in the same class) and Operator Overloading.
- **Runtime Polymorphism (Dynamic / Late Binding):** Method Overriding (subclass provides specific implementation of a virtual/overridden method declared in parent class). Resolved dynamically at runtime via virtual method tables (\`vtable\`).

#### Abstract Class vs. Interface:
- An **Interface** defines a pure contract (*what* to do, 100% abstract methods in older versions, supports multiple inheritance).
- An **Abstract Class** defines an identity (*what something is*, can hold state, constructors, and partial concrete method implementations).`,
    source: 'APTI CLUB Technical Wing Core CS Syllabus',
    actionUrl: '/wings/technical',
    actionText: 'Explore OOPs Modules'
  },
  {
    id: 'kb-core-cs-os',
    category: 'technical',
    topic: 'Operating Systems: Process vs Thread, Deadlocks & Virtual Memory',
    keywords: ['os', 'operating systems', 'process', 'thread', 'deadlock', 'virtual memory', 'paging', 'tlb', 'mutex', 'semaphore'],
    questionPatterns: [
      'difference between process and thread',
      'what are the four conditions for deadlock',
      'explain virtual memory and paging',
      'difference between mutex and semaphore'
    ],
    answer: `### Core Operating Systems Concepts for Campus Interviews:

#### 1. Process vs. Thread
- **Process:** An independent executing program in memory. Has its own separate address space, PCB (Process Control Block), heap, stack, and file descriptors. Context switching between processes is relatively expensive.
- **Thread:** A lightweight sub-unit of execution within a process. Threads of the same process **share the same address space, code segment, and heap**, but maintain their own independent Program Counter (PC), registers, and stack. Inter-thread communication is faster than IPC.

#### 2. The Four Necessary Coffman Conditions for Deadlock:
Deadlock can occur *if and only if* all four conditions hold simultaneously:
1. **Mutual Exclusion:** At least one resource must be held in a non-shareable mode.
2. **Hold and Wait:** A process is holding at least one resource and waiting to acquire additional resources held by others.
3. **No Preemption:** Resources cannot be forcibly confiscated; they can only be released voluntarily by the holding process.
4. **Circular Wait:** A closed chain of processes exists where each process holds a resource needed by the next ($P_0 \\rightarrow P_1 \\rightarrow P_2 \\rightarrow P_0$).
*Deadlock Prevention:* Eliminate at least one condition (e.g., impose strict global resource ordering to break Circular Wait).

#### 3. Virtual Memory & Paging:
- **Virtual Memory:** Hardware-software illusion allowing processes to execute as if contiguous, large RAM is available, even if physical RAM is smaller.
- **Paging:** Memory management scheme dividing virtual address space into fixed-size blocks called **Pages**, and physical memory into corresponding **Frames**.
- **Page Fault:** An interrupt generated when an active process accesses a page not currently mapped in physical RAM, triggering the OS to fetch it from disk swap space.`,
    source: 'APTI CLUB OS Master Review Notes 2026',
    actionUrl: '/wings/technical',
    actionText: 'Review OS Notes'
  },
  {
    id: 'kb-core-cs-cn',
    category: 'technical',
    topic: 'Computer Networks: TCP 3-Way Handshake, OSI Layers & DNS',
    keywords: ['cn', 'computer networks', 'tcp', 'handshake', 'osi', 'layers', 'dns', 'http', 'https', 'udp', '3-way handshake'],
    questionPatterns: [
      'explain tcp 3 way handshake',
      'what happens when you type google.com in browser',
      'difference between tcp and udp',
      'explain 7 layers of osi model',
      'difference between http and https'
    ],
    answer: `### Computer Networks Interview Essentials:

#### 1. TCP 3-Way Handshake (Connection Establishment):
1. **Step 1 (SYN):** Client generates an Initial Sequence Number ($ISN_C$) and sends a segment with \`SYN = 1, SEQ = ISN_C\` to the server.
2. **Step 2 (SYN-ACK):** Server acknowledges by sending \`SYN = 1, ACK = 1, SEQ = ISN_S, ACK_NUM = ISN_C + 1\`.
3. **Step 3 (ACK):** Client sends final acknowledgement \`ACK = 1, ACK_NUM = ISN_S + 1\`. Connection is now established (\`ESTABLISHED\` state), and bidirectional data transfer begins.

#### 2. TCP vs. UDP:
- **TCP (Transmission Control Protocol):** Connection-oriented, reliable (guaranteed delivery via sequence numbers and retransmissions), flow control (sliding window), congestion control. Used in HTTP/HTTPS, SSH, FTP, SMTP.
- **UDP (User Datagram Protocol):** Connectionless, lightweight, unreliable (best-effort delivery, no retransmissions), minimal latency. Used in DNS lookups, video streaming, VoIP, live gaming.

#### 3. What Happens When You Type a URL in Browser:
1. Browser checks local cache (Browser cache $\\rightarrow$ OS cache $\\rightarrow$ Router cache $\\rightarrow$ ISP DNS resolver).
2. DNS query resolves domain name to target IP address (Recursive + Iterative queries through Root, TLD, Authoritative DNS servers).
3. TCP 3-way handshake establishes socket connection on port 80 (HTTP) or port 443 (HTTPS).
4. TLS/SSL handshake executes for HTTPS (certificates exchanged, asymmetric key negotiation, symmetric session keys generated).
5. Browser dispatches HTTP GET request; server responds with HTML, CSS, JavaScript assets.
6. Browser engine constructs DOM and CSSOM trees, computes render layout, and paints pixels.`,
    source: 'APTI CLUB Computer Networks Interview Handbook',
    actionUrl: '/wings/technical',
    actionText: 'Study Computer Networks'
  },

  // -------------------------------------------------------------
  // APTITUDE WING BLUEPRINT
  // -------------------------------------------------------------
  {
    id: 'kb-aptitude-blueprint',
    category: 'aptitude',
    topic: 'Aptitude Wing: Quantitative & Logical Preparation Blueprint',
    keywords: ['aptitude', 'quant', 'quantitative', 'speed math', 'formulas', 'tricks', 'logical reasoning', 'shortcuts', 'syllogisms', 'time and work'],
    questionPatterns: [
      'how to prepare for aptitude rounds',
      'what are the most important aptitude topics',
      'speed math calculation shortcuts',
      'how to solve quantitative aptitude fast'
    ],
    answer: `### Aptitude Wing: Comprehensive Placement Study Blueprint

Aptitude assessments are the primary elimination stage in campus drives (eliminating 60%–70% of candidates). Follow this structured syllabus:

#### 1. Speed-Math Foundation (Memorize Before Solving):
- Tables up to $25 \\times 10$.
- Squares of numbers up to $35^2$ (e.g., $25^2 = 625, 31^2 = 961, 32^2 = 1024$).
- Cubes of numbers up to $15^3$ ($11^3 = 1331, 12^3 = 1728, 13^3 = 2197$).
- Reciprocal percentage conversions:
  - $1/6 \\approx 16.67\\%$, $1/7 \\approx 14.28\\%$, $1/8 = 12.5\\%$, $1/9 \\approx 11.11\\%$, $1/11 \\approx 9.09\\%$, $1/12 \\approx 8.33\\%$.
- **Digital Root Method:** Sum digits of numbers until single digit to verify arithmetic options in 5 seconds.

#### 2. Tier-1 High-Frequency Quantitative Topics:
1. **Time, Speed & Distance:** Relative speed, train crossing stationary pole vs moving train, upstream/downstream river currents ($Speed_{boat} = (U + D)/2$).
2. **Time & Work:** Unitary work concept, efficiency ratios, negative work in Pipes & Cisterns (leak emptying tank).
3. **Percentages, Profit & Loss:** Successive percentage formula ($A + B + \\frac{AB}{100}$), marked price vs discount, false weights.
4. **Permutations, Combinations & Probability:** Arrangement with vowels together, selection combinations, coin/dice/card probability.
5. **Simple & Compound Interest:** Difference between CI and SI for 2 years ($Diff = P(R/100)^2$).

#### 3. High-Yield Logical Reasoning Topics:
- **Syllogisms:** Standard Venn/Euler diagram method (All A are B, Some B are C).
- **Seating Arrangements:** Circular facing center vs facing outward, linear row arrangement with conditional constraints.
- **Blood Relations & Direction Sense:** Coded family trees, angle turns (clockwise/counter-clockwise displacement).`,
    source: 'APTI CLUB Aptitude Training Module 2026',
    actionUrl: '/wings/aptitude',
    actionText: 'Explore Aptitude Wing'
  },

  // -------------------------------------------------------------
  // INTERVIEW WING & STAR FRAMEWORK
  // -------------------------------------------------------------
  {
    id: 'kb-star-framework',
    category: 'interview',
    topic: 'Mastering HR & Behavioral Rounds with the STAR Framework',
    keywords: ['star', 'star method', 'hr', 'behavioral', 'interview tips', 'tell me about yourself', 'conflict', 'failure', 'weakness'],
    questionPatterns: [
      'how to answer hr questions using star method',
      'what is star framework in interview',
      'how to introduce yourself in interview',
      'how to answer what is your weakness',
      'how to answer conflict with teammate'
    ],
    answer: `### The STAR Framework for HR & Behavioral Rounds:

Recruiters evaluate situational competence using **STAR**:
- **S - Situation:** Set up the scene, team environment, and challenge (15% of answer).
- **T - Task:** Clarify your specific goal or responsibility (15% of answer).
- **A - Action:** Detail the concrete, methodical steps *you* took (55% of answer — use active verbs: *"I architected...", "I resolved...", "I researched..."*).
- **R - Result:** Share quantifiable achievements and learnings (15% of answer: *"reduced load time by 34%", "achieved 98% accuracy"*).

---

#### Scripted Models for Common Behavioral Questions:

#### 1. "Tell Me About Yourself" (The 90-Second Anchor Formula)
*"Good morning! I am [Name], currently pursuing my B.E. in [Branch] at GSSSIETW, Mysuru. Over the past three years, I have focused heavily on core software engineering and problem-solving, building projects in [Tech Stack, e.g., Next.js and PostgreSQL]. One of my proudest achievements was building [Project Name], which solved [Real Problem] and handled [Metric, e.g., 500+ active student records]. Beyond technical work, I actively contribute as an APTI CLUB coordinator, facilitating peer mock drives. I have been following [Company Name]'s recent work in [Tech/Product], and I am excited about the opportunity to contribute my skills to your engineering team."*

#### 2. "Tell Me About a Time You Had a Conflict in a Team"
- **Situation:** During our final-year project development, two teammates disagreed strongly on whether to use MongoDB or PostgreSQL for storing relational student records.
- **Task:** As the project lead, I needed to avoid deadline delays and unite the team behind an objective architecture.
- **Action:** Instead of taking personal sides, I created a benchmark matrix comparing schema consistency, query latency for complex joins, and team familiarity. I organized a 30-minute structured discussion where both teammates reviewed the benchmark data.
- **Result:** We agreed on PostgreSQL due to its ACID guarantees for financial modules, delivered the milestone 3 days ahead of schedule, and maintained strong mutual trust.

#### 3. "What is Your Greatest Weakness?"
*"In the past, I tended to hesitate before delegating tasks during group hackathons because I wanted every line of code to match a specific standard. However, I realized this created bottlenecks. Over the last year, I adopted structured task management, setting clear interfaces and holding brief daily syncs. This has improved our team velocity while helping me become a more collaborative and supportive engineer."*`,
    source: 'APTI CLUB Interview Wing Master Guide 2026',
    actionUrl: '/wings/interview',
    actionText: 'Explore Interview Wing'
  },

  // -------------------------------------------------------------
  // COMPANY DOSSIERS (DEUTSCHE BANK, ACCENTURE, INFOSYS)
  // -------------------------------------------------------------
  {
    id: 'kb-deutsche-bank',
    category: 'company',
    topic: 'Deutsche Bank Campus Recruitment Dossier',
    keywords: ['deutsche', 'db', 'deutsche bank', 'rounds', 'package', 'eligibility', 'fintech', '19.6'],
    questionPatterns: [
      'what are the eligibility criteria for deutsche bank',
      'deutsche bank interview rounds',
      'how to prepare for deutsche bank',
      'what is deutsche bank package',
      'what questions does deutsche bank ask'
    ],
    answer: `### Deutsche Bank Campus Recruitment Dossier:

- **Category:** Global FinTech / Investment Banking
- **Role:** Analyst – Graduate Technology
- **Package:** **19.60 LPA**
- **Eligible Branches:** CSE, ISE, ECE with CGPA $\\ge 7.0$ and No Active Backlogs
- **Recruitment Process (4 Rounds):**
  1. **Online Assessment (90 Mins):** 2 Coding Questions (Medium DSA: Dynamic Programming, Sliding Window, Graph BFS) + 20 CS fundamentals MCQs.
  2. **Technical Interview 1 (45–60 Mins):** Deep dive into Data Structures (Trees, Graphs), DBMS ACID properties, and SQL Joins.
  3. **Technical Interview 2 (45 Mins):** System Design fundamentals, OOPs design patterns, and resume project architecture.
  4. **Professional Fitment & HR (30 Mins):** Situational scenarios, banking domain interest, and STAR-format behavioral questions.`,
    source: 'Deutsche Bank 2026 Campus Drive Synthesis Report (APTI CLUB)',
    actionUrl: '/company/deutsche-bank',
    actionText: 'Explore Deutsche Bank Guide'
  },
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
- **Eligibility:** All Circuit Branches (CSE, ISE, ECE, EEE, AI&DS) with CGPA $\\ge 6.5$
- **Recruitment Rounds:**
  1. **Cognitive & Technical Assessment (90 Mins):** Critical Thinking, Abstract Reasoning, English Ability, Pseudo-code, Cloud & Security basics. (Elimination Round)
  2. **Coding Assessment (45 Mins):** 2 Programming questions (Language of choice: C++, Java, Python).
  3. **Communication Assessment (20 Mins):** Automated voice-based test evaluating pronunciation, fluency, and sentence mastery.
  4. **Virtual Interview (30 Mins):** Project discussion, leadership scenarios, and adaptability.`,
    source: 'Accenture Placement Archive 2026, Volume 2',
    actionUrl: '/company/accenture',
    actionText: 'Explore Accenture Guide'
  },
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

  // -------------------------------------------------------------
  // PLATFORM & PROCEDURAL POLICIES
  // -------------------------------------------------------------
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
3. **Submit Registration:** Click on the **"Register Now"** button on the drive card before the posted deadline.
4. **Resume Verification:** Ensure your profile information reflects the required skills.
5. **Confirmation:** You will receive an instant dashboard notification with the assessment schedule.

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

You can monitor your recruitment progression directly via your **Student Dashboard**:
- **Applied:** Your registration is received and under branch verification.
- **Shortlisted:** Eligible to appear for Round 1 (Online Assessment).
- **In-Progress:** Cleared assessment; interview schedule dispatched.
- **Offered:** Letter of Intent (LOI) issued by the recruiting company!

All shortlisted USNs are also broadcasted immediately via the **Live Notification Bell** on the top navigation bar.`,
    source: 'APTI CLUB Student Portal Guide',
    actionUrl: '/dashboard',
    actionText: 'View My Dashboard'
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
 * Checks if a query is clearly out-of-domain (cooking, sports gossip, astrology, movies, etc.)
 */
function isOutOfDomainQuery(normalizedQuery: string): boolean {
  const offDomainTriggers = [
    'cook', 'recipe', 'biryani', 'pizza', 'cake', 'movie', 'actor', 'actress',
    'bollywood', 'hollywood', 'cricket match score', 'astrology', 'horoscope',
    'song lyrics', 'weather today', 'fashion tips', 'makeup', 'video game cheats'
  ];

  return offDomainTriggers.some(trigger => normalizedQuery.includes(trigger));
}

/**
 * Local Self-Contained RAG Engine with Multi-Turn Conversation Context Support
 */
export function queryKnowledgeBase(
  userQuery: string,
  history?: { sender: 'user' | 'bot'; text: string }[]
): {
  answer: string;
  source: string;
  confidence: 'high' | 'medium' | 'low';
  category?: string;
  actionUrl?: string;
  actionText?: string;
  suggestedQuestions: string[];
} {
  const normalizedQuery = userQuery.toLowerCase().trim();

  // 1. Check for empty query
  if (!normalizedQuery) {
    return {
      answer: "Hello! I am your **APTI CLUB Placement Intelligence Assistant**.\n\nYou can ask me anything about campus placement drives, company patterns (*Deutsche Bank, Accenture, Infosys*), data structures & algorithms roadmaps, speed-math aptitude formulas, or the STAR interview framework.",
      source: 'APTI CLUB Placement Intelligence System',
      confidence: 'high',
      suggestedQuestions: [
        'How to start DSA from scratch?',
        'Difference between Array and Linked List',
        'What are the eligibility criteria for Deutsche Bank?',
        'How to answer HR questions using STAR method?'
      ]
    };
  }

  // 2. Out-of-Domain Graceful Redirection
  if (isOutOfDomainQuery(normalizedQuery)) {
    return {
      answer: `I am specialized specifically as the **APTI CLUB Placement Intelligence & Career Preparation Assistant** for GSSSIETW students.

While I cannot assist with non-career topics like that, here is how I can help you prepare and excel right now:
- **DSA Roadmap:** Step-by-step guidance from linear structures to Dynamic Programming.
- **Company Dossiers:** Eligibility, packages, and rounds for Deutsche Bank, Accenture, and Infosys.
- **Core CS Topics:** DBMS ACID properties, OOPs 4 pillars, OS virtual memory, and TCP handshakes.
- **Aptitude Shortcuts:** Speed-math formulas and quantitative blueprints.
- **HR Frameworks:** Behavioral interview scripts using the STAR method.`,
      source: 'APTI CLUB Placement Helpdesk',
      confidence: 'medium',
      suggestedQuestions: [
        'How to start DSA from scratch?',
        'What are the eligibility criteria for Deutsche Bank?',
        'Tell me about APTI CLUB and its Four Wings'
      ]
    };
  }

  // 3. Multi-Turn Context Augmentation
  let searchContext = normalizedQuery;
  const isVagueFollowUp = /^(what|how|where|when|why|tell me more|explain|explain this|how to start|what next|what should i do|roadmap|more details)\b/i.test(normalizedQuery) || normalizedQuery.length < 15;

  if (isVagueFollowUp && history && history.length > 0) {
    // Look at previous turns to inherit topical keywords
    const recentBotMessages = history.filter(h => h.sender === 'bot').slice(-2);
    const recentUserMessages = history.filter(h => h.sender === 'user').slice(-2);
    const combinedContext = [...recentUserMessages, ...recentBotMessages].map(m => m.text).join(' ');
    
    if (combinedContext.toLowerCase().includes('dsa') || combinedContext.toLowerCase().includes('data structure')) {
      searchContext += ' dsa data structures roadmap beginner';
    } else if (combinedContext.toLowerCase().includes('deutsche')) {
      searchContext += ' deutsche bank eligibility rounds';
    } else if (combinedContext.toLowerCase().includes('accenture')) {
      searchContext += ' accenture eligibility rounds';
    } else if (combinedContext.toLowerCase().includes('aptitude') || combinedContext.toLowerCase().includes('quant')) {
      searchContext += ' aptitude speed math quant';
    } else if (combinedContext.toLowerCase().includes('star') || combinedContext.toLowerCase().includes('hr')) {
      searchContext += ' star method hr interview';
    }
  }

  const queryTokens = tokenize(searchContext);

  // 4. Exact Question Pattern Matching Pass
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

  // 5. Keyword & Conceptual Token Scoring Pass (TF-IDF approximation with keyword boosting)
  let bestScore = 0;
  let bestItem: KnowledgeItem | null = null;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;

    for (const token of queryTokens) {
      // Keyword match (weight 4)
      if (item.keywords.some(k => k.includes(token) || token.includes(k))) {
        score += 4;
      }
      // Topic match (weight 5)
      if (item.topic.toLowerCase().includes(token)) {
        score += 5;
      }
      // Answer body match (weight 1)
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
      confidence: bestScore >= 8 ? 'high' : 'medium',
      category: bestItem.category,
      actionUrl: bestItem.actionUrl,
      actionText: bestItem.actionText,
      suggestedQuestions: getRelatedQuestions(bestItem.id)
    };
  }

  // 6. Helpful Fallback
  return {
    answer: `I could not locate specific placement documentation directly matching **"${userQuery}"** in the current college database.

**Helpful next steps:**
1. **DSA & Technical:** Ask *"How to start DSA from scratch?"* or *"Explain ACID properties in DBMS"*.
2. **Company Dossiers:** Ask *"What are the eligibility criteria for Deutsche Bank?"* or *"Accenture interview rounds"*.
3. **Aptitude Wing:** Ask *"Aptitude preparation blueprint"* or *"Speed-math calculation shortcuts"*.
4. **Behavioral:** Ask *"How to answer HR questions using STAR method?"*.
5. **APTI CLUB:** Ask *"Tell me about APTI CLUB and its Four Wings"* or *"Where can I read the 5-year chronicles?"*.`,
    source: 'GSSSIETW Placement Helpdesk Reference',
    confidence: 'low',
    suggestedQuestions: [
      'How to start DSA from scratch?',
      'What are the eligibility criteria for Deutsche Bank?',
      'How to answer HR questions using STAR method?'
    ]
  };
}

function getRelatedQuestions(currentId: string): string[] {
  const recommendations: Record<string, string[]> = {
    'kb-apti-club-identity': [
      'Where can I read the 5-year chronicles?',
      'How to start DSA from scratch?',
      'What are the eligibility criteria for Deutsche Bank?'
    ],
    'kb-five-year-chronicles': [
      'What are the eligibility criteria for Deutsche Bank?',
      'How to answer HR questions using STAR method?',
      'Tell me about APTI CLUB and its Four Wings'
    ],
    'kb-dsa-roadmap': [
      'Difference between Array and Linked List',
      'Explain ACID properties in DBMS',
      'What technical skills are commonly tested?'
    ],
    'kb-arrays-vs-linkedlists': [
      'How to start DSA from scratch?',
      'Explain four pillars of OOPs',
      'What are the eligibility criteria for Deutsche Bank?'
    ],
    'kb-core-cs-dbms': [
      'Explain four pillars of OOPs',
      'Difference between Process and Thread',
      'Explain TCP 3-way handshake'
    ],
    'kb-core-cs-oops': [
      'Explain ACID properties in DBMS',
      'Difference between Array and Linked List',
      'How to start DSA from scratch?'
    ],
    'kb-core-cs-os': [
      'Explain TCP 3-way handshake',
      'Explain ACID properties in DBMS',
      'Difference between Process and Thread'
    ],
    'kb-core-cs-cn': [
      'Difference between TCP and UDP',
      'Difference between Process and Thread',
      'What are the eligibility criteria for Deutsche Bank?'
    ],
    'kb-aptitude-blueprint': [
      'How to start DSA from scratch?',
      'What are the eligibility criteria for Deutsche Bank?',
      'How to answer HR questions using STAR method?'
    ],
    'kb-star-framework': [
      'What are the eligibility criteria for Deutsche Bank?',
      'How to start DSA from scratch?',
      'What are Accenture interview rounds?'
    ],
    'kb-deutsche-bank': [
      'What are Accenture interview rounds?',
      'How to start DSA from scratch?',
      'How to answer HR questions using STAR method?'
    ],
    'kb-accenture': [
      'What are the eligibility criteria for Deutsche Bank?',
      'How to prepare for aptitude rounds?',
      'How to answer HR questions using STAR method?'
    ]
  };

  if (recommendations[currentId]) {
    return recommendations[currentId];
  }

  return [
    'How to start DSA from scratch?',
    'What are the eligibility criteria for Deutsche Bank?',
    'How to answer HR questions using STAR method?'
  ];
}
