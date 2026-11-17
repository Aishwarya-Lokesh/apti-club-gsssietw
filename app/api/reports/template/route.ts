import { NextResponse } from 'next/server';

export async function GET() {
  const templateContent = `================================================================================
GSSS INSTITUTE OF ENGINEERING AND TECHNOLOGY FOR WOMEN (GSSSIETW)
DEPARTMENT OF TRAINING & PLACEMENT - APTI CLUB
STANDARDIZED PLACEMENT EXPERIENCE REPORT TEMPLATE (BATCH 2026-27)
================================================================================

INSTRUCTIONS FOR CANDIDATES:
- Fill all mandatory sections marked with [*].
- Accuracy and clarity help future juniors prepare efficiently.
- Submit this completed report via the APTI CLUB Portal (Placement Hub -> Submit Report).

--------------------------------------------------------------------------------
SECTION 1: CANDIDATE & COMPANY METRICS
--------------------------------------------------------------------------------
* Full Name: 
* USN: 
* Branch / Department: [CSE / ISE / ECE / EEE / AI&DS]
* Overall CGPA (at time of drive): 
* Recruiting Company Name: 
* Job Designation Offered: 
* Compensation Package (CTC in LPA): 
* Job Location: 
* Selection Date (DD/MM/YYYY): 

--------------------------------------------------------------------------------
SECTION 2: RECRUITMENT ROUNDS SUMMARY
--------------------------------------------------------------------------------
Total Number of Rounds Conducted: [e.g. 4]

[ROUND 1]: Online Assessment / Aptitude
- Platform Used (HackerEarth / Mettl / CoCubes / Superset / Other): 
- Duration (in Minutes): 
- Structure (MCQs / Coding / Both): 
- Quant & Logical Topics Tested: 
- Coding Problems Description (if any): 
- Difficulty Level (Moderate / Challenging / High): 

[ROUND 2]: Technical Interview 1
- Mode (Virtual / In-Person): 
- Duration: 
- Core Topics Covered (DSA / DBMS / OOPs / OS / Networks): 
- Live Coding Tasks Given: 
- Questions on Resume Projects: 

[ROUND 3]: Technical Interview 2 / Managerial
- Mode: 
- Duration: 
- System Design or Scenario-based Questions: 
- Problem-Solving Scenarios: 

[ROUND 4]: HR & Behavioral Round
- Duration: 
- Questions Asked (STAR method): 
- Willingness for Relocation / Shift Timings: 

--------------------------------------------------------------------------------
SECTION 3: HIGH FREQUENCY QUESTIONS & CONCEPTS
--------------------------------------------------------------------------------
List at least 3 to 5 specific questions asked during your interviews:
1. 
2. 
3. 
4. 

--------------------------------------------------------------------------------
SECTION 4: PREPARATION ADVICE FOR JUNIORS
--------------------------------------------------------------------------------
* Key Preparation Tips:
  - 
  - 

* Common Mistakes to Avoid:
  - 
  - 

* Useful Resources (YouTube / LeetCode / GeeksforGeeks sheets used):
  - 

================================================================================
End of Standardized Report Template.
================================================================================
`;

  return new NextResponse(templateContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'attachment; filename="GSSSIETW_Placement_Report_Template_2026.txt"'
    }
  });
}
