import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser } from '@/lib/auth';
import { INITIAL_COMPANIES } from '@/lib/initialData';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let companies: any[] = [];

    try {
      let query = 'SELECT * FROM companies WHERE status = "published"';
      const params: any[] = [];

      if (category && category !== 'all') {
        query += ' AND category = ?';
        params.push(category);
      }

      if (search) {
        query += ' AND (name LIKE ? OR slug LIKE ?)';
        params.push(`%${search}%`, `%${search}%`);
      }

      query += ' ORDER BY experience_count DESC, created_at DESC';

      const rows: any = await db.query(query, params);
      if (Array.isArray(rows) && rows.length > 0) {
        companies = rows.map(c => ({
          ...c,
          overview: typeof c.overview === 'string' ? JSON.parse(c.overview) : c.overview,
          availableRoles: typeof c.available_roles === 'string' ? JSON.parse(c.available_roles) : c.available_roles,
          keyTopics: typeof c.key_topics === 'string' ? JSON.parse(c.key_topics) : c.key_topics,
        }));
      }
    } catch (dbErr) {
      // Fallback
    }

    if (companies.length === 0) {
      companies = INITIAL_COMPANIES;
      if (category && category !== 'all') {
        companies = companies.filter(c => c.category === category);
      }
      if (search) {
        const s = search.toLowerCase();
        companies = companies.filter(c => c.name.toLowerCase().includes(s) || c.slug.toLowerCase().includes(s));
      }
    }

    return NextResponse.json({
      success: true,
      count: companies.length,
      companies
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user || (user.role !== 'super_admin' && user.role !== 'placement_admin')) {
      return NextResponse.json({ success: false, message: 'Forbidden. Admin privileges required.' }, { status: 403 });
    }

    const body = await req.json();
    const { name, slug, logoUrl, category, availableRoles, keyTopics, overview, roundsTimeline } = body;

    if (!name || !slug || !category) {
      return NextResponse.json({ success: false, message: 'Missing mandatory fields' }, { status: 400 });
    }

    const id = `comp-${Date.now()}`;
    await db.query(
      `INSERT INTO companies (id, name, slug, logo_url, category, available_roles, key_topics, overview, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')`,
      [
        id,
        name,
        slug,
        logoUrl || '/assets/xref_1372.jpeg',
        category,
        JSON.stringify(availableRoles || []),
        JSON.stringify(keyTopics || []),
        JSON.stringify(overview || {})
      ]
    );

    return NextResponse.json({
      success: true,
      message: 'Company added successfully',
      companyId: id
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to create company' },
      { status: 500 }
    );
  }
}
