// Placeholder middleware (Next.js middleware APIs differ between versions).
// For production you may use NextAuth or custom token checks here.
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // Example: protect /dashboard paths in middleware
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    // real check would validate a cookie or token
    // this placeholder lets dev continue locally
    return NextResponse.next();
  }
  return NextResponse.next();
}
