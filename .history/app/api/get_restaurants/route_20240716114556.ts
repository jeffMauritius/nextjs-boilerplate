import { NextResponse } from "next/server"
import pw from "playwright"

const SBR_CDP = `wss://${process.env.BRIGHT_API}@brd.superproxy.io:9222`

export const GET = async (req: Request, res: Response) => {
  console.log(SBR_CDP)
  const browser = await pw.chromium.connectOverCDP(SBR_CDP)
  const page = await browser.newPage()

  await page.goto(
    "https://restaurants.mu/fr/repertoire-gastronomie-restaurants-maurice.html",
  )

  const restaurants = await page.$eval("body", body => {
    const restaurants: any[] | Promise<any[]> = []
    const items = body.querySelectorAll(".resto")
    items.forEach(item => {
      //const title = item.querySelector('h3')?.textContent
      //const description = item.querySelector('row')?.textContent
      restaurants.push({ item })
    })
    return restaurants
  })

  return NextResponse.json({
    restaurants,
  })
}
