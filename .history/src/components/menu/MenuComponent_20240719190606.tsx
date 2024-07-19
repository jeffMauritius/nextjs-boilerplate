import { Menu } from "lucide-react"
import MenuItems from "./MenuItems"

interface MenuComponentProps {
  menuTitle: string
}

const MenuComponent = ({ menuTitle }: MenuComponentProps) => {
  return (
    <div>
      <h1>{menuTitle}</h1>
      <MenuItems
        menuTitle="Crêpes"
        price={5}
        description="Crêpes au sucre"
        imageUrl="/crepes.jpg"
      />
    </div>
  )
}

export default MenuComponent
