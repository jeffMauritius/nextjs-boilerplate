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
    <Card className="flex">
      <CardFooter className="flex content-end">
        <Button className="">{buttonTitle}</Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
