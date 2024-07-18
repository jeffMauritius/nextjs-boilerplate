import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  
   const restaurants = [{}]
   const excursions = [{}]
   
    return NextResponse.json({
        restaurants, excursions
    })
}