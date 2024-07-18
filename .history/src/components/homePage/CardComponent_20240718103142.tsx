import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"

const CardComponent = ({ buttonTitle, imageUrl }) => {
  return (
    <Card className={`${imageUrl} relative`}>
      <CardFooter>
        <Button
          EnvelopeOpenIcon
          className="absolute bottom-0 right-0 rounded-tl-full border-none bg-gray-950 text-gray-500"
        >
          {buttonTitle}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
