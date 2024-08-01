import Localization from "@/components/Localization"
import { schedule } from "@/components/schedule"

export default function Information() {
  return (
    <div className="p-10">
      <div className="flex-full flex justify-center pb-10">
        <h1 className="text-4xlfont-display text-4xl">Informations utiles</h1>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="p-5 text-center">Nous localiser</div>
          <div className="rounded border p-5">
            <Localization />
          </div>
        </div>
        <div>
          <div className="p-5 text-center">{`Nos horaires d'ouverture`}</div>
          <div className="rounded border p-5">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="flex justify-between border-b-2 px-10 py-1"
              >
                <div>{day.day}</div>
                <div>{day.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
