import { NextResponse } from "next/server";
import data from "./data.html"

export const GET = async (req: Request, res: Response) => {
  
   const restaurants = JSON.stringify(data)
   
    return NextResponse.json({
        restaurants,
    })
}