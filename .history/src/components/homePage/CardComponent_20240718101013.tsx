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
    <Card className={`${imageUrl}`}>
      <CardFooter className="relative flex justify-end ">
        <Button variant="secondary" className="absolute bottom-0 left-0">
          {buttonTitle}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
