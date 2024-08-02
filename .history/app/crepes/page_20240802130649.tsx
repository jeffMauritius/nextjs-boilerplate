import MenuComponent from "@/components/menu/MenuComponent"

export default function Crepes() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="rounded-2xl border">
        <video autoPlay muted loop id="myVideo" className="rounded-2xl">
          <source src="/crepes.mp4" type="video/mp4" />
        </video>
        <div className="absolute left-10 top-72 flex justify-center ">
          <p className="rounded-2xl  bg-black p-5 text-5xl text-white opacity-35">
            Crépes sucrées & salées
          </p>
        </div>
      </div>
      <div className="rounded-2xl border">
        <MenuComponent menuTitle={"NOS CREPES SALEES"} type="crepes" />
        <MenuComponent menuTitle={"NOS CREPES SUCREES"} type="gauffres" />
      </div>
    </div>
  )
}
