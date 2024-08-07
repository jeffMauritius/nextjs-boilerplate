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
    <Card className="bg-[url('/riz.jpeg')] bg-cover">
      <CardFooter className="">
        <Button variant="secondary">{buttonTitle}</Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
