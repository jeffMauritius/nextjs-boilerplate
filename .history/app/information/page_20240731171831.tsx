import Localization from "@/components/Localization"

export default function Information() {
 
  return (
    <>
      <div className="flex-full flex justify-center pb-10">
        <h1 className="text-4xl">Information</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="">
          <div className="text-center">Nous localiser</div>
          <Localization />
        </div>

        <div>Nos horaires d'ouverture</div>
        schedule.map((day) => (
          <div className="flex justify-between">
            <p>{day.day}</p>
            <p>{day.hours}</p></div>
        )

      </div>
    </>
  )
}
