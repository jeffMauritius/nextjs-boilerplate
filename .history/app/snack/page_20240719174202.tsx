import { Button } from "@/components/ui/button"

export default function Snack() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl border">
        <video autoPlay muted loop id="myVideo" className="rounded-2xl">
          <source src="/snack.mp4" type="video/mp4" />
        </video>
        <div className="top-50 absolute left-10 flex justify-center">
          <Button>Menu Snack</Button>
        </div>
      </div>
      <div className="rounded-2xl border">right</div>
    </div>
  )
}
