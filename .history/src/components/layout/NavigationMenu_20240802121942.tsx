"use client"

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
  const navigationData = data
  return (
    <NavigationMenu>
      {navigationData.map((item, index) => (
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
