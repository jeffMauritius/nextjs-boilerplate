import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="mx-auto flex min-h-screen flex-col justify-center">
      <SignIn />
    </div>
  )
}
