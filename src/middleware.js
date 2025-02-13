import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const userInfo = {
    role: "admin",
    email: "xyz@gmail.com",
  };
  const isUsersPage = request.nextUrl.pathname === "/users";
  const isAdmin = userInfo?.role == "admin";
  if (isUsersPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
