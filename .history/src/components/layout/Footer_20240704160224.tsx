import { SiteConfig } from "@/lib/config"
import Image from "next/image"
import Link from "next/link"
import { Typography } from "../ui/typography"
import { MapPin } from "lucide-react"
import { PhoneCall } from "lucide-react"
import { Clock } from "lucide-react"
import { Star } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full border-t border-card">
      <div className="m-auto w-full max-w-4xl px-2 py-4">
        <div className="flex w-full items-center justify-center">
          <div className="flex gap-4 pb-5 text-sm text-muted-foreground sm:flex-col ">
            <Link
              className="flex gap-4 hover:underline sm:flex-row"
              href="/legal/privacy"
            >
              <MapPin />
              La Cuvette Beach, Grand Baie, Île Maurice
            </Link>
            <Link className="flex gap-4 hover:underline" href="/legal/cgv">
              <PhoneCall />
              +230 5798 8786
            </Link>
            <Link className="flex gap-4 hover:underline" href="/courses">
              <Clock />
              Horaires d'ouverture
            </Link>
            <Link className="flex gap-4 hover:underline" href="/admin">
              <Star />
              Notes et avis
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
