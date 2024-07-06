import NextAuth from "next-auth";

import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";
import authConfig from "@/auth.config";
import db from "@/lib/db";

const prisma = new PrismaClient();

export const {handlers, signIn, signOut, auth} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {strategy: "jwt"},
  // adapter: PrismaAdapter(prisma),
  adapter: PrismaAdapter(db),
  ...authConfig,
});
