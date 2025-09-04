import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col items-center py-4 bg-white border-r ">
      <div className="text-2xl font-bold mb-8">
        <Image src={Logo} alt="Logo" width={160} height={60} />
      </div>
      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex flex-col gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink className="font-semibold" asChild>
              <Link href={"/"}>ယနေ့တာ မြစ်ရေအခြေအနေ</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink className="font-semibold" asChild>
            <Link href={"/weekly"}>
                တစ်ပတ်တာ မြစ်ရေအခြေအနေ
            </Link>
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
