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
      <CardFooter className="flex">
        <Button variant="secondary">{buttonTitle}</Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
