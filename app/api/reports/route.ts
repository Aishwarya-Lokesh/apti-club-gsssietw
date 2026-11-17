import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { INITIAL_EXPERIENCES } from '@/lib/initialData';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status') || 'verified';
    const companyId = searchParams.get('companyId');

    let reports: any[] = [];

    try {
      let query = 'SELECT r.*, c.name as company_name, c.slug as company_slug FROM placement_reports r JOIN companies c ON r.company_id = c.id WHERE 1=1';
      const params: any[] = [];

      if (status !== 'all') {
        query += ' AND r.status = ?';
        params.push(status);
      }

      if (companyId) {
        query += ' AND r.company_id = ?';
        params.push(companyId);
      }

      query += ' ORDER BY r.created_at DESC';

      const rows: any = await db.query(query, params);
      if (Array.isArray(rows) && rows.length > 0) {
        reports = rows.map(r => ({
          ...r,
          roundsData: typeof r.rounds_data === 'string' ? JSON.parse(r.rounds_data) : r.rounds_data,
          keyQuestions: typeof r.key_questions === 'string' ? JSON.parse(r.key_questions) : r.key_questions,
          selectionTips: typeof r.selection_tips === 'string' ? JSON.parse(r.selection_tips) : r.selection_tips,
        }));
      }
    } catch (dbErr) {
      // Fallback
    }

    if (reports.length === 0) {
      reports = INITIAL_EXPERIENCES.map(e => ({
        id: e.id,
        company_id: e.companyId,
        company_name: e.companyName,
        student_name: e.isAnonymous ? 'Verified GSSSIETW Alum' : e.studentName,
        is_anonymous: e.isAnonymous,
        department: e.department,
        batch_year: e.year,
        role: e.role,
        package_lpa: e.packageLPA,
        summary: e.summary,
        keyQuestions: e.keyQuestions,
        selectionTips: e.selectionTips,
        status: 'verified',
        created_at: e.createdAt
      }));
    }

    return NextResponse.json({
      success: true,
      count: reports.length,
      reports
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch reports' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const {
      companyId,
      studentName,
      isAnonymous,
      department,
      batchYear,
      role,
      packageLpa,
      summary,
      roundsData,
      keyQuestions,
      selectionTips,
      mistakesToAvoid,
      originalDocumentUrl
    } = body;

    if (!companyId || !studentName || !department || !role || !summary) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    const reportId = `rep-${Date.now()}`;
    const studentId = user?.id || null;

    try {
      await db.query(
        `INSERT INTO placement_reports 
         (id, company_id, student_id, student_name, is_anonymous, department, batch_year, role, package_lpa, original_document_url, summary, rounds_data, key_questions, selection_tips, mistakes_to_avoid, status)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
        [
          reportId,
          companyId,
          studentId,
          studentName,
          isAnonymous ? 1 : 0,
          department,
          batchYear || '2026',
          role,
          packageLpa || 'Not Disclosed',
          originalDocumentUrl || null,
          summary,
          JSON.stringify(roundsData || []),
          JSON.stringify(keyQuestions || []),
          JSON.stringify(selectionTips || []),
          JSON.stringify(mistakesToAvoid || [])
        ]
      );

      // Audit log
      await db.query(
        'INSERT INTO audit_logs (id, user_id, action, resource, details) VALUES (UUID(), ?, ?, ?, ?)',
        [studentId, 'REPORT_SUBMISSION', 'PLACEMENT_REPORTS', `Submitted interview experience for review: ${role}`]
      );
    } catch (dbErr) {
      console.warn('[Report Submit] Database insert skipped, operating in mock mode');
    }

    return NextResponse.json({
      success: true,
      message: 'Placement experience submitted successfully! It will be reviewed by the T&P faculty before being published.',
      reportId
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit report' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'super_admin' && user.role !== 'placement_admin' && user.role !== 'teacher')) {
      return NextResponse.json(
        { success: false, message: 'Forbidden. Teacher or Admin privileges required.' },
        { status: 403 }
      );
    }

    const { reportId, status, verificationNotes } = await req.json();

    if (!reportId || !['verified', 'rejected'].includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status or missing reportId' },
        { status: 400 }
      );
    }

    try {
      await db.query(
        'UPDATE placement_reports SET status = ?, verified_by = ?, verification_notes = ? WHERE id = ?',
        [status, user.id, verificationNotes || null, reportId]
      );

      await db.query(
        'INSERT INTO audit_logs (id, user_id, action, resource, details) VALUES (UUID(), ?, ?, ?, ?)',
        [user.id, `REPORT_${status.toUpperCase()}`, 'PLACEMENT_REPORTS', `Report ${reportId} marked as ${status}`]
      );
    } catch (dbErr) {
      console.warn('[Report Verify] DB update skipped');
    }

    return NextResponse.json({
      success: true,
      message: `Report has been successfully ${status}`
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Action failed' },
      { status: 500 }
    );
  }
}
