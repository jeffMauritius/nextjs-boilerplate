import CardComponent from "@/components/homePage/CardComponent"

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
      <div className="col-span-2 rounded-lg border border-gray-800 "></div>
      <div className="grid grid-cols-1 gap-4 rounded-lg">
        <CardComponent title={"MENU SNACK"} buttonTitle={"MENU SNACK"} />
        <CardComponent title={"MENU CREPES / GAUFFRES"} buttonTitle={"MENU"} />
        <CardComponent
          title={"NOS PARTENAIRES"}
          buttonTitle={"NOS PARTENAIRES"}
        />
      </div>
    </div>
  )
}

export default HomePage
