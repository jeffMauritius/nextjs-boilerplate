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
    <Card>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-end ">
        <Button className="">{buttonTitle}</Button>
      </CardFooter>
    </Card>
  )
}

export default CardComponent
