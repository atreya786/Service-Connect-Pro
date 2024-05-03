import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

import connectToDB from "@utils/index";
import User from "@models/User";
import Provider from "@models/Provider";
import Admin from "@models/Admin";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Invalid email or password");
        }

        await connectToDB();

        const user =
          (await User.findOne({ email: credentials.email })) ||
          (await Provider.findOne({ email: credentials.email })) ||
          (await Admin.findOne({ email: credentials.email }));

        if (!user || !user?.password) {
          throw new Error("Invalid email or password");
        }

        const isMatch = await compare(credentials.password, user.password);

        if (!isMatch) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session }) {
      const mongoDBUser =
        (await User.findOne({ email: session.user.email })) ||
        (await Provider.findOne({ email: session.user.email })) ||
        (await Admin.findOne({ email: session.user.email }));
      session.user.id = mongoDBUser._id.toString();

      session.user = { ...session.user, ...mongoDBUser._doc };

      return session;
    },
  },
});

export { handler as GET, handler as POST };
