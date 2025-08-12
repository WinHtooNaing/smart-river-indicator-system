"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Sidebar from "./Siderbar"


export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <SheetTitle>
<Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
        </SheetTitle>
        
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
