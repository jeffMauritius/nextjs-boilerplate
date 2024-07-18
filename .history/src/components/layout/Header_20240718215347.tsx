import { SiteConfig } from "@/lib/config"
import Link from "next/link"
import { ThemeToggle } from "../ThemeToggle"
import Image from "next/image"
import { Button } from "../ui/button"
import Auth from "./Auth"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className=" container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-end space-x-5">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
        <div className="flex items-center  space-x-1">
          <nav className="flex items-center space-x-5">
            <Auth />
          </nav>
        </div>
      </div>
    </header>
  )
}
