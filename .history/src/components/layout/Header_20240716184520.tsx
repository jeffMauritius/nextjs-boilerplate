import { SiteConfig } from "@/lib/config"
import Link from "next/link"
import { ThemeToggle } from "../ThemeToggle"
import Image from "next/image"
import { Button } from "../ui/button"
import Auth from "./Auth"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className=" container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link
          href={`/home`}
          className={`m-auto -ml-14 flex flex-1 items-center justify-center`}
        >
          <Image
            src="/logo.jpg"
            alt="Site logo"
            width={170}
            height={170}
            className="-mt-10 rounded-full border-4"
          />
        </Link>
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
