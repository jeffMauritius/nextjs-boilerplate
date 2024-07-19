interface MenuComponentProps {
  menuTitle: string
}

const MenuComponent = ({ menuTitle }: { menuTitle: string }) => {
  return (
    <div>
      <h1>Menu title</h1>
      <p>Menu content</p>
    </div>
  )
}

export default MenuComponent
