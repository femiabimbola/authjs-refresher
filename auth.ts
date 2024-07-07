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
      console.log("bro");
      session.user.id = token.id;
      return token;
    },
  },
  // adapter: PrismaAdapter(prisma),
  events: {
    // for email verifing for oAuth sign in
    async linkAccount({user}) {
      console.log("evebt");
      await db.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()},
      });
    },
  },
  session: {strategy: "jwt"},
  adapter: PrismaAdapter(db),
  ...authConfig,
});
