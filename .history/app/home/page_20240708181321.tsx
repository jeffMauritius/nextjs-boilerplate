import SignIn from "@/components/auth/signin-button"

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-2 place-content-center gap-4 p-60">
      <div className="justify-center border-4 text-center">
        <SignIn />
      </div>
      <div className="justify-center border-4 text-center">02</div>
      <div className="justify-center border-4 text-center">03</div>
      <div className="justify-center border-4 text-center">04</div>
    </div>
  )
}
