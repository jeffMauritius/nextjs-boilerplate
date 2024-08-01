import Image from "next/image"
import { ThemeToggle } from "../ThemeToggle"

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full ">
      <div className=" container flex h-20  items-center space-x-4 pt-3 sm:justify-between sm:space-x-0">
        <div className="flex flex-auto justify-center ">
          <h1 className={` p-2 font-display text-6xl font-bold text-cyan-400`}>
            {" "}
            {`Éclats d'éden`}
          </h1>
          {/* <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full"*/}
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
