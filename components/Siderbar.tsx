    import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col items-center py-4 bg-white border-r ">
      <div className="text-2xl font-bold mb-8">Logo</div>
      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex flex-col gap-4">
          <NavigationMenuItem>
              <Link href={"/"}>
            <NavigationMenuLink className="font-semibold">
              Home
            </NavigationMenuLink>
              </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/weekly"}>
            <NavigationMenuLink className="font-semibold">
              Weekly
            </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
