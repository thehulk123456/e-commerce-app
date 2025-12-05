import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/login", "/sign-up", "/reset-password"];
const REDIRECT_WHEN_LOGGED_IN = ["/login", "/sign-up"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isPublic = PUBLIC_ROUTES.some((r) => pathname.startsWith(r));
  const redirectIfLoggedIn = REDIRECT_WHEN_LOGGED_IN.some((r) =>
    pathname.startsWith(r)
  );

  if (redirectIfLoggedIn && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublic && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
