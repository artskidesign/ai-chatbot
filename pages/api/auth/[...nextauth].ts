import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import { Envs } from "../../../config"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
	GoogleProvider({
		clientId: Envs.GOOGLE_CLIENT_ID,
		clientSecret: Envs.GOOGLE_CLIENT_SECRET,
	}),
	EmailProvider({
		server: {
			host: Envs.EMAIL_HOST,
			port: Envs.EMAIL_PORT,
			auth: {
				user: Envs.EMAIL_USER,
				pass: Envs.EMAIL_PASS,
			}
		},
		from: Envs.EMAIL_FROM,
	}),
  ],
  adapter: MongoDBAdapter(clientPromise),
})