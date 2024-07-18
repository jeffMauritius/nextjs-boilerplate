import CardComponent from "@/components/homePage/CardComponent"

const HomePage = () => {
  return (
    <div className="grid h-screen grid-cols-1 gap-4 p-5 md:grid-cols-3">
      <div className="col-span-2 rounded-lg border border-gray-800 "></div>
      <div className="grid grid-cols-1 gap-4 rounded-lg">
        <CardComponent
          buttonTitle={"MENU SNACK"}
          imageUrl={`bg-[url('/riz.jpeg')] bg-cover`}
          pageUrl={"/snack"}
        />
        <CardComponent
          buttonTitle={"MENU CREPES / GAUFRES"}
          imageUrl={`bg-[url('/crepes.jpg')] bg-cover`}
        />
        <CardComponent
          buttonTitle={"NOS PARTENAIRES"}
          imageUrl={`bg-[url('/partenaires.jpg')] bg-cover`}
        />
      </div>
    </div>
  )
}

export default HomePage
