"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/store/use-sidebar"
import { X } from "lucide-react"

const routes = [
  {
    label: "대시보드",
    href: "/",
  },
  {
    label: "제품",
    href: "/products",
  },
  {
    label: "분석",
    href: "/analytics",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen, toggle } = useSidebar()

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-20 bg-black/80 backdrop-blur-sm md:hidden",
          isOpen ? "block" : "hidden"
        )}
        onClick={toggle}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-72 bg-background shadow-xl transition-transform duration-300 ease-in-out md:static md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b md:hidden">
          <span className="font-semibold">메뉴</span>
          <Button variant="ghost" size="icon" onClick={toggle}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => {
                    if (window.innerWidth < 768) toggle()
                  }}
                >
                  <Button
                    variant={pathname === route.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                  >
                    {route.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

