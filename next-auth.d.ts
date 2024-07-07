// import NextAuth, {DefaultSession} from "next-auth";

// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user: {
//       token?: accessToken;
//     } & DefaultSession["user"];
//   }
// }

// Files like this are for auth.ts
import NextAuth, {DefaultSession} from "next-auth";
import {UserRole} from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole; //"ADMIN" | "USER"
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

// This alone should have worked
// declare module "@auth/core" {
//   interface Session {
//     user: {
//       role: "ADMIN" | "USER",
//      } & DefaultSession["user"]
//   }
// }
