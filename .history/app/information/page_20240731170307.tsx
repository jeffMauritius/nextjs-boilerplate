import Localization from "@/components/Localization"

export default function Information() {
  return (
    <div className="flex-full flex justify-center">
      <h1>Information</h1>
      <p>Information about the company</p>
      <div className="grid grid-cols-2 gap-6">
        <Localization />
        <div>Horaires d'ouverture</div>
      </div>
    </div>
  )
}
