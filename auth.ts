import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const {handlers, signIn, signOut, auth} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  providers: [Google, Twitter],
  session: {strategy: "jwt"},
  adapter: PrismaAdapter(prisma),
});
