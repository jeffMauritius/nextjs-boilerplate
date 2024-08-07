import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  EnvelopeOpenIcon,
  Pencil1Icon,
  ArrowBottomRightIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CardComponent = ({ buttonTitle, imageUrl, pageUrl }) => {
  return (
    <Card className={`${imageUrl} relative`}>
      <CardFooter>
        <Button className="absolute bottom-0 right-0 rounded-tl-full border-none bg-gray-950 text-gray-500">
          {buttonTitle}
          <ArrowRightIcon className="ml-2 size-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
