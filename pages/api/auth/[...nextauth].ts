// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth/next';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';

import { Envs as Environments } from '../../../config';
// import clientPromise from '../../../lib/mongodb';
import prisma from '../../../lib/prisma';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: Environments.GOOGLE_CLIENT_ID,
            clientSecret: Environments.GOOGLE_CLIENT_SECRET,
        }),
        EmailProvider({
            server: {
                host: Environments.EMAIL_HOST,
                port: Environments.EMAIL_PORT,
                auth: {
                    user: Environments.EMAIL_USER,
                    pass: Environments.EMAIL_PASS,
                },
            },
            from: Environments.EMAIL_FROM,
        }),
    ],
    // adapter: MongoDBAdapter(clientPromise),
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/signin',
    },
});
