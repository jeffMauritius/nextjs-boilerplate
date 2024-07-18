import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col text-center">
      <SignIn />
    </div>
  )
}
