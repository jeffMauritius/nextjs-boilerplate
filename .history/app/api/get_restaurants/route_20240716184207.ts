import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  
   const restaurants = [{}]
   
    return NextResponse.json({
        restaurants,
    })
}