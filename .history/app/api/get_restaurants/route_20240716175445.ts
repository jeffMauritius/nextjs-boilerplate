import { NextResponse } from "next/server"
import pw from "playwright"

export const GET = async (req: Request, res: Response) => {
  const restaurants = [
    { title: "1", description: "1" },
    { title: "2", description: "2" },
    { title: "3", description: "3" },
  ]

  return NextResponse.json({
    restaurants,
  })
}
