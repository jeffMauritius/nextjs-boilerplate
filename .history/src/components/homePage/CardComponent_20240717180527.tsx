import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"

const CardComponent = ({ buttonTitle }) => {
  return (
    <Card className="h-40">
      <CardFooter className="bottom-0 flex justify-end">
        <Button className="">{buttonTitle}</Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
