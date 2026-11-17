import { NextRequest, NextResponse } from 'next/server';
import { INITIAL_COMPANIES, INITIAL_EXPERIENCES } from '@/lib/initialData';
import db from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const q = (searchParams.get('q') || '').trim().toLowerCase();
    const category = searchParams.get('category');
    const role = searchParams.get('role');

    if (!q && !category && !role) {
      return NextResponse.json({
        success: true,
        total: 0,
        companies: [],
        questions: [],
        experiences: []
      });
    }

    const tokens = q.split(/\s+/).filter(t => t.length > 1);

    // Filter Companies
    let matchedCompanies = INITIAL_COMPANIES.filter(c => {
      if (category && category !== 'all' && c.category !== category) return false;
      if (tokens.length === 0) return true;

      const searchableText = `${c.name} ${c.slug} ${c.category} ${c.availableRoles.join(' ')} ${c.keyTopics.join(' ')} ${c.overview.summary} ${c.overview.frequentlyReportedQuestions.join(' ')}`.toLowerCase();
      return tokens.some(t => searchableText.includes(t));
    });

    // Extract Matching Questions across all experiences & company overviews
    const matchedQuestions: { question: string; companyName: string; companySlug: string; topic: string }[] = [];

    INITIAL_COMPANIES.forEach(c => {
      c.overview.frequentlyReportedQuestions.forEach(fq => {
        if (tokens.length === 0 || tokens.some(t => fq.toLowerCase().includes(t) || c.name.toLowerCase().includes(t))) {
          matchedQuestions.push({
            question: fq,
            companyName: c.name,
            companySlug: c.slug,
            topic: c.keyTopics[0] || 'Technical'
          });
        }
      });
    });

    INITIAL_EXPERIENCES.forEach(e => {
      e.keyQuestions.forEach(kq => {
        if (tokens.length === 0 || tokens.some(t => kq.toLowerCase().includes(t) || e.companyName.toLowerCase().includes(t))) {
          if (!matchedQuestions.some(mq => mq.question === kq)) {
            matchedQuestions.push({
              question: kq,
              companyName: e.companyName,
              companySlug: e.companyName.toLowerCase().replace(/\s+/g, '-'),
              topic: e.role
            });
          }
        }
      });
    });

    // Filter Experiences
    const matchedExperiences = INITIAL_EXPERIENCES.filter(e => {
      if (tokens.length === 0) return true;
      const searchable = `${e.companyName} ${e.studentName} ${e.department} ${e.role} ${e.summary} ${e.keyQuestions.join(' ')}`.toLowerCase();
      return tokens.some(t => searchable.includes(t));
    });

    return NextResponse.json({
      success: true,
      query: q,
      total: matchedCompanies.length + matchedQuestions.length + matchedExperiences.length,
      companies: matchedCompanies,
      questions: matchedQuestions.slice(0, 12),
      experiences: matchedExperiences
    });

  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Search execution failed' },
      { status: 500 }
    );
  }
}
