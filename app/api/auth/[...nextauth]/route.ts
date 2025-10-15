import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import getAppUrl from "@/lib/getAppUrl"

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Demo: replace with real auth (DB, OAuth, etc.)
        if (credentials?.username === "demo" && credentials.password === "demo") {
          return { id: "1", name: "Demo User", email: "demo@example.com" }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Ensure redirect uses canonical app url
      const appUrl = getAppUrl()
      // Allow relative URLs
      if (url.startsWith('/')) return `${appUrl}${url}`
      // Otherwise default to the URL's origin if same host
      try {
        const dest = new URL(url)
        const appOrigin = new URL(appUrl).origin
        if (dest.origin === appOrigin) return url
      } catch (e) {
        // ignore
      }
      return appUrl
    },
  },
}

const handler = NextAuth(options)
export { handler as GET, handler as POST }
