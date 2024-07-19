import { Button } from "@/components/ui/button"

export default function Snack() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl border">
        <video autoPlay muted loop id="myVideo" className="rounded-2xl">
          <source src="/snack.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-10 top-72 flex justify-center ">
          <p className="rounded-2xl  bg-black p-5 text-7xl text-white opacity-55">
            Menu snack
          </p>
        </div>
      </div>
      <div className="rounded-2xl border">right</div>
    </div>
  )
}
