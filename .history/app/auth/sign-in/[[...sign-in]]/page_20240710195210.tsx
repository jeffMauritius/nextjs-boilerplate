import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="mx-auto flex">
      <SignIn />
    </div>
  )
}
