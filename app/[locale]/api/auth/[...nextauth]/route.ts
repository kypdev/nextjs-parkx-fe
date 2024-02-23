import NextAuth from 'next-auth/next';
import CredentialsProviders from 'next-auth/providers/credentials';
import LineProvisers from 'next-auth/providers/line';

const hahdler = NextAuth({
  providers: [
    CredentialsProviders({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('https://www.melivecode.com/api/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const respose = await res.json();
        if (respose.status === 'ok') {
          return respose.user;
        }
        return null;
      },
    }),
    LineProvisers({
      clientId: process.env.AUTH_LINE_ID as string,
      clientSecret: process.env.AUTH_LINE_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
    signOut: '/',
  },
});

export { hahdler as GET, hahdler as POST };
