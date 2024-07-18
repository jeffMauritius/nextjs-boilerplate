import CardComponent from "@/components/homePage/CardComponent"

const HomePage = () => {
  return (
    <div className="grid gap-4 p-5 md:grid-cols-3">
      <div className="col-span-2 rounded-lg border border-gray-800 "></div>
      <div className="grid grid-cols-1 gap-4 rounded-lg">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  )
}

export default HomePage
