import { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'

impo

export const NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    
}