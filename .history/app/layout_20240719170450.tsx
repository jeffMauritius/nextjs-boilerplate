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
            <div className="flex min-h-screen flex-col">
              <Image
                src="/logo.svg"
                alt="logo"
                width={200}
                height={200}
                className="z-70 absolute top-0  justify-center"
              />

              {children}
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
