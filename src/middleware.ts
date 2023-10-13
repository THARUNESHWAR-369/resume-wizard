import { NextResponse, NextRequest } from 'next/server'

const protectedRoutes = [
    "/dashboard",
]

export default function middleware(req: any) {
    
    if (protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteUrl = new URL("/account/auth", req.nextUrl.origin);
        return NextResponse.redirect(absoluteUrl.toString());
    }
}