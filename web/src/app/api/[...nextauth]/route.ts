import NextAuth from "next-auth";
import { authOptions } from "@a1c/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };