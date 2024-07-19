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
    <div className="grid grid-cols-4 gap-4">
      <h1>{menuTitle}</h1>
      <p>{description}</p>
      <p>{price} RS</p>
      <Image src={imageUrl} alt="menu item" width={100} height={50} />
    </div>
  )
}

export default MenuItems
