import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh-TW']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/' || pathname === '') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
  }

  const isLocalePrefixed = locales.some((l) => pathname.startsWith(`/${l}`))
  return isLocalePrefixed ? NextResponse.next() : NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|.*\.[\w]+$).*)'],
}


