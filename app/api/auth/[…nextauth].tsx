import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import LineProvider from "next-auth/providers/line";
export const authOptions: NextAuthOptions = {
    providers: [
      LineProvider({
            clientId: process.env.AUTH_LINE_ID as string,
            clientSecret: process.env.AUTH_LINE_SECRET as string,
        }),
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
      signIn: "/login",
  },
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST ,handler as signIn, handler as signOut};