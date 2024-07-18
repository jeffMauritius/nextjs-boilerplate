import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="relative flex min-h-screen justify-center">
      <SignIn />
    </div>
  )
}
