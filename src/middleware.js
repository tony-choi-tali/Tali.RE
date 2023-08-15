import { NextResponse } from "next/server";

// add paths in matcher to run middleware only on these paths
// const PUBLIC_URLS = ["/auth/login"];

export default function validateAuthentication(req) {
  // let checkUser = req.cookies.get("loggedIn");
  // let { pathname } = req.nextUrl;

  // if (pathname.startsWith("/_next")) {
  //   return NextResponse.next();
  // }

  // // if not logged-in and requested protected route
  // if (!checkUser && !PUBLIC_URLS.includes(pathname)) {
  //   req.nextUrl.pathname = PUBLIC_URLS[0];
  //   return NextResponse.redirect(req.nextUrl);
  // }

  // // if logged-in
  // if (checkUser && PUBLIC_URLS.includes(pathname)) {
  //   req.nextUrl.pathname = "/";
  //   return NextResponse.redirect(req.nextUrl);
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/", "/about-us", "/auth/login", "/users", "/users/:path?"],
// };
