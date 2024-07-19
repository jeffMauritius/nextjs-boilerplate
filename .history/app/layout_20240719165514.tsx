// app/layout.
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import Image from "next/image"
import { ClerkProvider } from "@clerk/nextjs"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { SiteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"
import { Providers } from "./Providers"
import "./globals.css"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            `h-full bg-background font-sans antialiased`,
            fontSans.variable,
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <div className="z-70 flex justify-center">
                <Image src="/logo.svg" alt="logo" width={150} height={150} />
              </div>
              <div>{children}</div>
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
