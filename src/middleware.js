import { NextResponse } from 'next/server';
import * as jose from 'jose';

export default async function middleware(request) {
  const token = request.cookies.get('token').value;

  const secretKey = new TextEncoder().encode('secret1234567890');
  console.log(secretKey);

  try {
    const isValid = await jose.jwtVerify(token, secretKey);
    console.log(isValid);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: '/dashboard/:path*',
};
