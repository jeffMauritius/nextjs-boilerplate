interface MenuItemsProps {
  menuTitle: string
  price: number
  description: string
  imageUrl: string
}

const MenuItems = ({
  menuTitle,
  price,
  description,
  imageUrl,
}: MenuItemsProps) => {
  return (
    <div>
      <h1>{menuTitle}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src={imageUrl} alt="menu item" />
    </div>
  )
}
