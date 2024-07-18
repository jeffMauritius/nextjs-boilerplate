import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"

const CardComponent = ({ buttonTitle, imageUrl }) => {
  return (
    <Card className={`${imageUrl} relative`}>
      <CardFooter>
        <Button className="absolute bottom-0 right-0 bg-black text-gray-300">
          {buttonTitle}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
