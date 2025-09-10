import { NextResponse } from 'next/server';

export default async function middleware(request: Request) {
  // Simple middleware - just allow all requests for a basic website
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.ico|.*\\.mp4|.*\\.webm).*)',
  ],
};