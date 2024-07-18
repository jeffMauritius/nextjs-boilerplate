import NextAuth, {NextAuthOptions} from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import {prisma} from "@/lib/prisma"
import { never } from "zod";
 
 
const authConfig = {
    provider: never[],
    adapter: PrismaAdapter(prisma),
    
} satisfies NextAuthOptions;

export default NextAuth(authConfig)