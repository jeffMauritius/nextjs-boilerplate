import CardComponent from "@/components/homePage/CardComponent"

const HomePage = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      <div className="col-span-2 border border-white"></div>
      <div className="grid grid-cols-1 gap-4 rounded-md border border-white">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  )
}

export default HomePage
