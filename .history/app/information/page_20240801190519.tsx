import Localization from "@/components/Localization"
import { schedule } from "@/components/schedule"

export default function Information() {
  return (
    <div className="p-10">
      <div className="flex-full flex justify-center pb-10">
        <h1 className="font-display text-4xl text-cyan-400">
          Informations utiles
        </h1>
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
                className="border-b-1 flex justify-between p-3  font-display text-2xl "
              >
                <div>{day.day}</div>
                <div className="font-body text-lg">{day.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
