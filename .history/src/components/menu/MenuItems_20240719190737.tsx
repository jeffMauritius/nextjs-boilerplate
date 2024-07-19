import Image from "next/image"

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
      <p>{price} RS</p>
      <Image src={imageUrl} alt="menu item" />
    </div>
  )
}

export default MenuItems
