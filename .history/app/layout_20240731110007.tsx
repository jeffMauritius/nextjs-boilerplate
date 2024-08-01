// app/layout.
import { Header } from "@/components/layout/Header"
import Image from "next/image"
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
            <Image
              src="/logo.svg"
              alt="logo"
              width={160}
              height={160}
              className="z-70 absolute inset-x-0 top-0"
            />
            <Header />
            {children}
          </div>
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}