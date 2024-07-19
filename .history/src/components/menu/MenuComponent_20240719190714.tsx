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
        imageUrl="/plat.webp"
      />
    </div>
  )
}

export default MenuComponent
