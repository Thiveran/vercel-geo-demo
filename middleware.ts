import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'unknown';
  if (country === 'IN') {
    return NextResponse.redirect(new URL('/india-page', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
