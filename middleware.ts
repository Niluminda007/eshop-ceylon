import { NextRequest, NextResponse } from "next/server";
import { getSession, updateSession } from "@/utils/lib";

const protectedRoutes = ["/home"];

export async function middleware(request: NextRequest) {
  const session = await getSession();

  if (isProtectedRoute(request.url)) {
    if (!session) {
      //check for validity of jwt
      const loginPageUrl = new URL("/auth/login", request.nextUrl.origin);

      return NextResponse.redirect(loginPageUrl.toString());
    }
    return await updateSession(request);
  }

  return NextResponse.next();
}

function isProtectedRoute(url: string): boolean {
  return protectedRoutes.some((route) => url.includes(route));
}
