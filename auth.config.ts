import type {NextAuthConfig} from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import {LoginSchema} from "@/lib/schemas";
import bcrypt from "bcryptjs";
import {getUserByEmail} from "@/data/user";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) throw new Error("Wrong data input");

        const {email, password} = validatedFields.data;
        
        const user = await getUserByEmail(email);

        
        if (!user || !user.password) throw new Error("User not found.");

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) throw new Error("Password no match o");

        
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
