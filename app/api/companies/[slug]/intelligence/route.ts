import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { INITIAL_COMPANIES, INITIAL_EXPERIENCES } from '@/lib/initialData';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // 1. Try to fetch from MySQL database
    let company: any = null;
    let verifiedReports: any[] = [];

    try {
      const compRows: any = await db.query(
        'SELECT * FROM companies WHERE slug = ? LIMIT 1',
        [slug]
      );
      if (Array.isArray(compRows) && compRows.length > 0) {
        company = compRows[0];
        // Parse JSON fields
        if (typeof company.overview === 'string') company.overview = JSON.parse(company.overview);
        if (typeof company.available_roles === 'string') company.available_roles = JSON.parse(company.available_roles);
        if (typeof company.key_topics === 'string') company.key_topics = JSON.parse(company.key_topics);

        const reportRows: any = await db.query(
          'SELECT * FROM placement_reports WHERE company_id = ? AND status = "verified" ORDER BY created_at DESC',
          [company.id]
        );
        if (Array.isArray(reportRows)) {
          verifiedReports = reportRows.map(r => ({
            ...r,
            rounds_data: typeof r.rounds_data === 'string' ? JSON.parse(r.rounds_data) : r.rounds_data,
            key_questions: typeof r.key_questions === 'string' ? JSON.parse(r.key_questions) : r.key_questions,
            selection_tips: typeof r.selection_tips === 'string' ? JSON.parse(r.selection_tips) : r.selection_tips,
          }));
        }
      }
    } catch (dbErr) {
      // Fallback to static initial data if MySQL is offline
    }

    if (!company) {
      const found = INITIAL_COMPANIES.find(c => c.slug === slug);
      if (!found) {
        return NextResponse.json(
          { success: false, message: 'Company not found' },
          { status: 404 }
        );
      }
      company = found;
      verifiedReports = INITIAL_EXPERIENCES.filter(e => e.companyId === found.id);
    }

    // 2. Synthesize multi-report intelligence
    const allQuestions: { question: string; frequency: number }[] = [];
    const questionMap = new Map<string, number>();
    const keyTopicsSet = new Set<string>();
    const tipsList: string[] = [];

    verifiedReports.forEach(r => {
      const questions = r.keyQuestions || r.key_questions || [];
      questions.forEach((q: string) => {
        const count = questionMap.get(q) || 0;
        questionMap.set(q, count + 1);
      });

      const tips = r.selectionTips || r.selection_tips || [];
      tipsList.push(...tips);
    });

    questionMap.forEach((freq, q) => {
      allQuestions.push({ question: q, frequency: freq });
    });
    allQuestions.sort((a, b) => b.frequency - a.frequency);

    // Prepare for this company checklist
    const preparationChecklist = [
      { id: 'chk-1', task: `Revise ${company.name} high-priority topics (${company.keyTopics ? company.keyTopics.slice(0, 3).join(', ') : 'Core CS'})`, status: 'essential' },
      { id: 'chk-2', task: 'Review past verified interview questions & practice live code dry-runs', status: 'essential' },
      { id: 'chk-3', task: 'Prepare resume project architecture diagrams & database schema explanation', status: 'high' },
      { id: 'chk-4', task: 'Formulate STAR-method responses for leadership & behavioral fitment', status: 'high' },
      { id: 'chk-5', task: 'Take a mock assessment on APTI CLUB aptitude portal', status: 'recommended' }
    ];

    return NextResponse.json({
      success: true,
      company: {
        id: company.id,
        name: company.name,
        slug: company.slug,
        category: company.category,
        recruitmentYear: company.recruitment_year || company.recruitmentYear,
        experienceCount: verifiedReports.length || company.experienceCount || 1,
        overview: company.overview,
        keyTopics: company.keyTopics || company.key_topics,
        roundsTimeline: company.roundsTimeline || []
      },
      intelligence: {
        totalVerifiedReports: verifiedReports.length,
        frequentlyAskedQuestions: allQuestions.slice(0, 8),
        curatedTips: Array.from(new Set(tipsList)).slice(0, 5),
        preparationChecklist,
        confidenceRating: verifiedReports.length >= 3 ? 'High Confidence (Multiple Verified Sources)' : 'Moderate Confidence'
      }
    });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to synthesize intelligence' },
      { status: 500 }
    );
  }
}
