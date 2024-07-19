import CardComponent from "@/components/homePage/CardComponent"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"

const HomePage = () => {
  return (
    <div className="grid  grid-cols-1 gap-5 p-5 md:grid-cols-3">
      <div className="col-span-3">
        <div className="flex justify-center">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />

          <h1 className="text-4xl font-bold">Bienvenue chez Eclats d'Eden</h1>
        </div>
      </div>
      <div className="col-span-2 rounded-2xl border">
        <video autoPlay muted loop id="myVideo" className="rounded-2xl pb-20">
          <source src="/home.mp4" type="video/mp4" />
        </video>
        <Footer />
      </div>
      <div className="grid grid-cols-1 gap-4 rounded-lg">
        <CardComponent
          buttonTitle={"MENU SNACK"}
          imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}
          pageUrl={"snack"}
        />
        <CardComponent
          buttonTitle={"MENU CREPES / GAUFRES"}
          imageUrl={`bg-[url('/crepes.jpg')] bg-cover`}
          pageUrl={"snack"}
        />
        <CardComponent
          buttonTitle={"NOS PARTENAIRES"}
          imageUrl={`bg-[url('/partenaires.jpg')] bg-cover`}
          pageUrl={"snack"}
        />
      </div>
    </div>
  )
}

export default HomePage
