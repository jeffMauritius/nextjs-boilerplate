import { Button } from "@/components/ui/button"

export default function Snack() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl border">
        <video autoPlay muted loop id="myVideo" className="rounded-2xl pb-10">
          <source src="/snack.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="rounded-2xl border">right</div>
    </div>
  )
}
