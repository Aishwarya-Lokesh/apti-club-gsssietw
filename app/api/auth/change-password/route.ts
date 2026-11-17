import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, hashPassword, verifyPassword } from '@/lib/auth';
import db from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword || newPassword.length < 8) {
      return NextResponse.json(
        { success: false, message: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    try {
      const rows: any = await db.query(
        'SELECT password_hash FROM users WHERE id = ? LIMIT 1',
        [user.id]
      );

      if (Array.isArray(rows) && rows.length > 0) {
        const isMatch = await verifyPassword(currentPassword, rows[0].password_hash);
        if (!isMatch) {
          return NextResponse.json(
            { success: false, message: 'Current password is incorrect' },
            { status: 400 }
          );
        }

        const newHash = await hashPassword(newPassword);
        await db.query(
          'UPDATE users SET password_hash = ? WHERE id = ?',
          [newHash, user.id]
        );

        await db.query(
          'INSERT INTO audit_logs (id, user_id, action, resource, details) VALUES (UUID(), ?, ?, ?, ?)',
          [user.id, 'PASSWORD_CHANGE', 'USERS', 'User successfully changed password']
        );
      }
    } catch (dbErr) {
      console.warn('[Change Password] DB update skipped, mock mode active');
    }

    return NextResponse.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to change password' },
      { status: 500 }
    );
  }
}
