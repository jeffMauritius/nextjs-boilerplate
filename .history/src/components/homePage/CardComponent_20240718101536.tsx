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
        <Button className="absolute -bottom-1 right-0 border-none bg-black text-gray-500">
          {buttonTitle}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
