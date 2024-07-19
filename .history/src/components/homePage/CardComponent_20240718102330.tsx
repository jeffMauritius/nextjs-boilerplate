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
        <Button className="rounded-tl-4-xl absolute -bottom-1 -right-1 border-none bg-gray-950 text-gray-500">
          {buttonTitle}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent