"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSidebar } from "@/store/use-sidebar"

export function Navbar() {
  const { toggle } = useSidebar()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          onClick={toggle}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

