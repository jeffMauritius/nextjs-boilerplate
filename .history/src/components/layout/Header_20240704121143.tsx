import { SiteConfig } from "@/lib/config"
import Link from "next/link"
import { ThemeToggle } from "../ThemeToggle"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className=" container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className={`m-auto -ml-16 flex flex-1 items-center justify-start`}>
          <Image
            src="/logo.jpg"
            alt="Site logo"
            width={170}
            height={170}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
