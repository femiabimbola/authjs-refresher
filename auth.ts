import NextAuth from "next-auth";
import type {NextAuthConfig} from "next-auth";

import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import authConfig from "@/auth.config";
import db from "@/lib/db";

const prisma = new PrismaClient();

export const config: NextAuthConfig = {
  ...authConfig,
  callbacks: {
    async jwt({token}) {
      if (!token.sub) return token;
      return token;
    },
    async session({token, session}: any) {
      session.user.id = token.id;
      return token;
    },
  //   async jwt({user, token}) {
  //     if (user) token.user = user;
  //     return token;
  // },
  // async session({session, token}: any) {
  //     session.user = token.user;
  //     return session;
  // },
  }, 
  session: {strategy: "jwt"},
  adapter: PrismaAdapter(db),
}


export const {handlers, auth, signIn, signOut} = NextAuth(config);