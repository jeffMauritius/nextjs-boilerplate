import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

const NavigationMenuComponent = (data) => {
  return (
    <NavigationMenu>
        {
            data.map((item, index) => (
                <NavigationMenuLink className={navigationMenuTriggerStyle() key={index} href={item.link}>
                    {item.title}
                </NavigationMenuLink>
            ))
        }
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenu>
  )
}

export default NavigationMenuComponent
