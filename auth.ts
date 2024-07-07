import NextAuth from "next-auth";

import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import authConfig from "@/auth.config";
import db from "@/lib/db";

const prisma = new PrismaClient();

export const {handlers, signIn, signOut, auth} = NextAuth({
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({user, account, profile}: any) {
      return true;
    },
    async jwt({token}) {
      if (!token.sub) return token;
      console.log("jwt");
      return token;
    },
    async session({token, session}: any) {
      console.log("FINALLY");
      session.user.id = token.id;
      return session;
    },
  },
  // adapter: PrismaAdapter(prisma),
  adapter: PrismaAdapter(db),
  session: {strategy: "jwt"},
  ...authConfig,
});
