import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { findByEmail, verifyPassword } from "../../../models/user";

export default NextAuth({
    secret: process.env.SECRET,
    pages: {
        signIn: '/login',
      },
    
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
          const userInDb = await findByEmail(credentials.email);
          if (userInDb && await verifyPassword(credentials.password, userInDb.hashedPassword))
          return userInDb;
          return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      console.log('in session', { session, user, token });

      if (token) {
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (token && !token.role) {
        const user = await findByEmail(token.email);
        token.role = user.role;
      }

      console.log('in jwt', { token, user, account, profile, isNewUser });

      return token;
    },
  },
});
