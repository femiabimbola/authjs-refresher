import NextAuth from "next-auth";

import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import authConfig from "@/auth.config";
import db from "@/lib/db";

const prisma = new PrismaClient();

export const {handlers, signIn, signOut, auth} = NextAuth({
  // pages: {
  //   signIn: "/login",
  // },
  
  // callbacks: {
  //   async jwt({token}) {
  //     if (!token.sub) return token;
  //     return token;
  //   },
  
  //   async session({token, session}: any) {
  //     console.log(token)
  //     session.user.id = token.id;
  //     return token;
  //   },
  // },
  session: {strategy: "jwt"},
  adapter: PrismaAdapter(db),
  ...authConfig,
});
