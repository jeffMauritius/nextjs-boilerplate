import { ThemeToggle } from "../ThemeToggle"

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full ">
      <div className=" container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-end space-x-5">
          <p>Éclats d'éden</p>
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
