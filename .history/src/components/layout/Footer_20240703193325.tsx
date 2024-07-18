import { SiteConfig } from "@/lib/config"
import Image from "next/image"
import Link from "next/link"
import { Typography } from "../ui/typography"
import { MapPin } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full border-t border-card">
      <div className="m-auto w-full max-w-3xl px-2 py-4">
        <div className="flex w-full items-center justify-center">
          <div className="flex  items-end gap-6 pb-5 text-sm text-muted-foreground">
            <Link className="flex hover:underline" href="/legal/privacy">
              <MapPin />
              Location
            </Link>
            <Link className="hover:underline" href="/legal/cgv">
              CGV
            </Link>
            <Link className="hover:underline" href="/courses">
              Courses
            </Link>
            <Link className="hover:underline" href="/admin">
              Admin
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <Typography variant="base" className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Camille Snack
          </Typography>
        </div>
      </div>
    </footer>
  )
}
