import { NextResponse } from "next/server"
import pw from "playwright"

const SBR_CDP = `wss://${process.env.BRIGHT_DATA}@brd.superproxy.io:9222`

export const GET = async (req: Request, res: Response) => {
  const browser = await pw.chromium.connectOverCDP(SBR_CDP)
  return NextResponse.json({
    restaurants: [],
  })
}
