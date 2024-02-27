import { getServerSession, type NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import LineProvisers from 'next-auth/providers/line';
import ActionAuth from '@/actions/Auth';
import { userService } from './services/userService';
import { UserDetail } from '@/dto/UserDetail';
const { login, ValidateMember } = ActionAuth();
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && account.provider === 'credentials') {
        var prameterCheck = {
          memberKey: token.sub,
        };
        var _userdetail = await ValidateMember(prameterCheck);
        if (_userdetail) {
          token.userDetail = _userdetail;
          token.userId = _userdetail.memberKey;
        }
      }
      if (account && account.provider === 'line') {
        var prameterCheckLine = {
          lineId: account.providerAccountId,
        };
        var _userdetail = await ValidateMember(prameterCheckLine);
        if (!_userdetail) {
          var insertUserWithLineID = {
            lineId: account.providerAccountId,
            fullName: token.name,
            register: true,
          };
          var user = await ValidateMember(insertUserWithLineID);
          if (user) {
            token.userDetail = user;
            token.userId = user.memberKey;
          }
        } else {
          token.userDetail = _userdetail;
          token.userId = _userdetail.memberKey;
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.userId; //(3)
      session.user.userDetail = token.userDetail;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        var userLogin = await login({ email: username, password: password })
          .then((res) => {
            return res.data;
          })
          .catch((error) => {
            return null;
          });
        if (!userLogin.data) {
          return null;
        }

        const user = {
          id: userLogin.memberKey,
          name: userLogin.data.fullName,
          email: userLogin.data.email,
          memberKey: userLogin.memberKey,
        };
        return user;
      },
    }),

    LineProvisers({
      clientId: process.env.AUTH_LINE_ID as string,
      clientSecret: process.env.AUTH_LINE_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
