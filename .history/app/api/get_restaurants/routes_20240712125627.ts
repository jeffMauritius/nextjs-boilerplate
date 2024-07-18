import { NextResponse } from "next/server"
import pw from "playwright"

const SBR_CDP = `wss://${process.env.BRIGHT_API}@brd.superproxy.io:9222`

export const GET = async (req: Request, res: Response) => {
  const browser = await pw.chromium.connectOverCDP(SBR_CDP)
  const page = await browser.newPage()

  return NextResponse.json({
    restaurants: [],
  })
}
