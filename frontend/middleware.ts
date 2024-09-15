import { NextResponse } from "next/server";

interface Request extends RequestInit {
  nextUrl: {
    pathname: string;
  };
}

export function middleware(request: Request): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
