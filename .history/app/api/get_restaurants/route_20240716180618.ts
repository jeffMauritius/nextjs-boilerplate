import { NextResponse } from "next/server";
import data from "./data.html"

export const GET = async (req: Request, res: Response) => {
  
   const parser = new DOMParser
   const htmlDoc = parser.parseFromString(data, 'text/html')
   
    return NextResponse.json({
        htmlDoc,
    })
}