import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EnvelopeOpenIcon, Pencil1Icon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

const CardComponent = ({ buttonTitle, imageUrl }) => {
  return (
    <Card className={`${imageUrl} relative`}>
      <CardFooter>
        <Button className="absolute bottom-0 right-0 rounded-tl-full border-none bg-gray-950 text-gray-500">
          {buttonTitle}
          <EnvelopeOpenIcon className="ml-2 size-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
