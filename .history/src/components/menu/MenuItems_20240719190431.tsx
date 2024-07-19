import Image from "next/image" // Import the Image component from the appropriate library

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
      <Image src={imageUrl} alt="menu item" />
    </div>
  )
}

export default MenuItems
