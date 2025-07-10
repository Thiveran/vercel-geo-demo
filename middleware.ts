import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'unknown';
  console.log('Visitor country:', country);
  if (country === 'IN') {
    return NextResponse.redirect(new URL('/india-page', request.url));
  }
  if (country === 'US') {
  return NextResponse.redirect(new URL('/usa-page', request.url));
}
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
