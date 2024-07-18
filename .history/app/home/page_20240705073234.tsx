import Image from "next/image"

export default function Home() {
  return (
    <div className="grid h-48 grid-cols-2 place-content-center gap-4">
      <div className="justify-center border-4 text-center">01</div>
      <div className="justify-center border-4 text-center">02</div>
      <div className="justify-center border-4 text-center">03</div>
      <div className="justify-center border-4 text-center">04</div>
    </div>
  )
}
