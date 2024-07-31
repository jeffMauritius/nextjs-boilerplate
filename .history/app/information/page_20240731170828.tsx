import Localization from "@/components/Localization"

export default function Information() {
  return (
    <>
      <div className="flex-full flex justify-center pb-10">
        <h1 className="text-4xl">Information</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="justify-center">
          <div>Nous localiser</div>
          <Localization />
        </div>

        <div>Nos horaires d'ouverture</div>
      </div>
    </>
  )
}
