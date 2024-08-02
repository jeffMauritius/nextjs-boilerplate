import MenuItems from "./MenuItems"
import {
  menuCrepesSalees,
  menuCrepesSucrees,
  menuSnack,
  boissons,
} from "./data"

interface MenuComponentProps {
  menuTitle: string
  type: string
}

const MenuComponent = ({ menuTitle, type }: MenuComponentProps) => {
  return (
    <div className="p-5">
      <h1 className="pb-5 text-center">{menuTitle}</h1>
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
      {type === "crepes-sucrees" &&
        menuCrepesSucrees.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      {type === "crepes-salees" &&
        menuCrepesSalees.map(item => (
          <MenuItems
            key={item.id}
            menuTitle={item.menuTitle}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      {type === "boissons" &&
        boissons.map(item => (
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
