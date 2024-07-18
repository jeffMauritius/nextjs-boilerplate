import { SiteConfig } from "@/lib/config"
import Link from "next/link"
import { ThemeToggle } from "../ThemeToggle"
import Image from "next/image"
import { Button } from "../ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className=" container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div
          className={`m-auto -ml-14 flex flex-1 items-center justify-center`}
        >
          <Image
            src="/logo.jpg"
            alt="Site logo"
            width={170}
            height={170}
            className="-mt-10 rounded-full"
          />
        </div>
        <div></div>
        <div
          className={`m-auto -ml-14 flex flex-1 items-center justify-center`}
        >
          <Image
            src="/burger.jpeg"
            alt="Site logo"
            width={80}
            height={80}
            className="mt-3 rounded-full border-4 transition duration-700 ease-in-out"
          />
        </div>
        <div
          className={`m-auto -ml-14 flex flex-1 items-center justify-center`}
        >
          <Image
            src="/gauffres.jpeg"
            alt="Site logo"
            width={80}
            height={80}
            className="mt-3 rounded-full border-4"
          />
        </div>
        <div
          className={`m-auto -ml-14 flex flex-1 items-center justify-center`}
        >
          <Image
            src="/crepes.webp"
            alt="Site logo"
            width={80}
            height={80}
            className="mt-3 rounded-full border-4"
          />
        </div>
        <div
          className={`m-auto -ml-14 flex flex-1 items-center justify-center`}
        >
          <Image
            src="/boissons.jpg"
            alt="Site logo"
            width={80}
            height={80}
            className="mt-2 rounded-full border-4"
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
