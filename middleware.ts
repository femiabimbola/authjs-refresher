//Middleware code always runs in an edge runtime.
//a database adapter that isn’t explicitly “edge compatible
// PostgreSQL queries will not work in middleware, its uses tcp

import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const {auth: middleware} = NextAuth(authConfig);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
