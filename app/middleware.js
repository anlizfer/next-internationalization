import { NextResponse } from "next/server";
let locales = ['es', 'en']

function getLocale(request) { 
    return 'es';
}

export function middleware(request){    
    const pathname = request.nextUrl.pathName;           
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
      // Skip all internal paths (_next)
      '/((?!_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
}