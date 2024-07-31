import Localization from "@/components/Localization"
import { schedule } from "@/components/schedule"

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
        <div>
          <div className="p-5 text-center">Nos horaires d'ouverture</div>
          <div className="border ">
            {schedule.map((day, index) => (
              <div key={index} className="flex justify-between px-10 py-1">
                <div>{day.day}</div>
                <div>{day.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
