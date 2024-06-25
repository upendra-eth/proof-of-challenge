import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/login', // Override the default sign in page with your custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
});
