import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'apti_gsss_secure_jwt_token_secret_key_2026_default';
const COOKIE_NAME = 'apti_session_token';
const TOKEN_EXPIRY = '7d';

export type UserRole = 'super_admin' | 'placement_admin' | 'teacher' | 'student';

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  usn?: string;
  department?: string;
}

export interface JWTPayload extends AuthUser {
  iat?: number;
  exp?: number;
}

// In-Memory Rate Limiter for Login Protection
interface AttemptRecord {
  count: number;
  firstAttempt: number;
  lockedUntil?: number;
}

const loginAttempts = new Map<string, AttemptRecord>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const WINDOW_DURATION_MS = 15 * 60 * 1000;

export function checkRateLimit(identifier: string): { allowed: boolean; remainingAttempts: number; retryAfterSeconds?: number } {
  const now = Date.now();
  const record = loginAttempts.get(identifier);

  if (!record) {
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }

  // Check if locked
  if (record.lockedUntil && record.lockedUntil > now) {
    const retryAfter = Math.ceil((record.lockedUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfterSeconds: retryAfter };
  }

  // Check window reset
  if (now - record.firstAttempt > WINDOW_DURATION_MS) {
    loginAttempts.delete(identifier);
    return { allowed: true, remainingAttempts: MAX_ATTEMPTS };
  }

  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_WINDOW_MS;
    return { 
      allowed: false, 
      remainingAttempts: 0, 
      retryAfterSeconds: Math.ceil(LOCKOUT_WINDOW_MS / 1000) 
    };
  }

  return { allowed: true, remainingAttempts: MAX_ATTEMPTS - record.count };
}

export function recordFailedAttempt(identifier: string): void {
  const now = Date.now();
  const record = loginAttempts.get(identifier);

  if (!record || (now - record.firstAttempt > WINDOW_DURATION_MS)) {
    loginAttempts.set(identifier, { count: 1, firstAttempt: now });
  } else {
    record.count += 1;
    if (record.count >= MAX_ATTEMPTS) {
      record.lockedUntil = now + LOCKOUT_WINDOW_MS;
    }
  }
}

export function clearRateLimit(identifier: string): void {
  loginAttempts.delete(identifier);
}

// Password Hashing
export async function hashPassword(plainText: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainText, salt);
}

export async function verifyPassword(plainText: string, hashed: string): Promise<boolean> {
  return bcrypt.compare(plainText, hashed);
}

// JWT Token
export function signToken(user: AuthUser): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      usn: user.usn,
      department: user.department
    },
    JWT_SECRET,
    { expiresIn: TOKEN_EXPIRY }
  );
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (err) {
    return null;
  }
}

// Cookie Helper for App Router API routes
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    path: '/'
  });
}

export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/'
  });
}

export async function getCurrentUser(): Promise<JWTPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return null;
    return verifyToken(token);
  } catch {
    return null;
  }
}

export function getUserFromRequest(req: NextRequest): JWTPayload | null {
  try {
    const token = req.cookies.get(COOKIE_NAME)?.value || 
                  req.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) return null;
    return verifyToken(token);
  } catch {
    return null;
  }
}

// RBAC Role Check
export function hasRequiredRole(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  if (userRole === 'super_admin') return true; // Super admin has full privileges
  return allowedRoles.includes(userRole);
}
