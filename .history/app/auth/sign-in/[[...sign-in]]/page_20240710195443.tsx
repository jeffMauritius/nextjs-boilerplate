import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex justify-end p-2">
      <SignIn />
    </div>
  )
}
