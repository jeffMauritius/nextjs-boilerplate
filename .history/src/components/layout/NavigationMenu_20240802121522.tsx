import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const NavigationMenuComponent = (data: any[]) => {
  console.log("data", data)
  return (
    <NavigationMenu>
      {data.map((item, index) => (
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          key={index}
          href={item.link}
        >
          {item.title}
        </NavigationMenuLink>
      ))}
    </NavigationMenu>
  )
}

export default NavigationMenuComponent
