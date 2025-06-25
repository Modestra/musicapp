import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()
    if (url.pathname === "/redirect/auth") {
        url.pathname = "/auth"
        url.host = `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_POST}`
        return NextResponse.rewrite(url)
    }
}