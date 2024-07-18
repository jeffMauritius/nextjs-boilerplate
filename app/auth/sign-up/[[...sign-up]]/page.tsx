import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex justify-end pt-10">
      <SignUp />
    </div>
  )
}
