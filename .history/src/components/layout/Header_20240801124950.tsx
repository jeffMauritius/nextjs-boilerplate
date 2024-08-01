import Image from "next/image"
import { ThemeToggle } from "../ThemeToggle"

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full ">
      <div className=" container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center">
          <Image
            className="size-12"
            src="/images/logo.png"
            alt="Eclats d'Eden"
            width={48}
            height={48}
          />
          <h1 className="text-4xl font-bold"> Éclats d'éden</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-5">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
