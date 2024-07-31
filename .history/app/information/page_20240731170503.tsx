import Localization from "@/components/Localization"

export default function Information() {
  return (
    <>
      <div className="flex-full flex justify-center">
        <h1 className="text-4xl">Information</h1>
        <p className="text-2xl">Information about the company</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Localization />
        <div>Horaires d'ouverture</div>
      </div>
    </>
  )
}
