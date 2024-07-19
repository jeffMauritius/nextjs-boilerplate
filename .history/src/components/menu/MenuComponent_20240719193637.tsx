import MenuItems from "./MenuItems"
import { menuCrepes, menuGauffres, menuSnack } from "./data"

interface MenuComponentProps {
  menuTitle: string
  type: string
}

const MenuComponent = ({ menuTitle, type }: MenuComponentProps) => {
  return (
    <div className="p-5">
      <h1 className="text-center">{menuTitle}</h1>
      {type === "snack" &&
        menuSnack.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      {type === "crepes" &&
        menuCrepes.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      {type === "gauffres" &&
        menuGauffres.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
    </div>
  )
}

export default MenuComponent
