interface MenuComponentProps {
  menuTitle: string
}

const MenuComponent = ({ menuTitle }: MenuComponentProps) => {
  return (
    <div>
      <h1>{menuTitle}</h1>
      <p>Menu content</p>
    </div>
  )
}

export default MenuComponent
