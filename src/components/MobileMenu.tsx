import { BrandMark } from "@/components/BrandMark"
import { Menu } from "lucide-react"

import type { SectionId } from "@/hooks/useActiveSection"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MobileMenuProps {
  activeSection: SectionId
}

const navigationItems: Array<{
  id: SectionId
  label: string
}> = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export function MobileMenu({ activeSection }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-[var(--foreground)] md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]"
      >
        <SheetHeader>
          <SheetTitle className="text-left">
            <BrandMark />
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-10 flex flex-col gap-2">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <SheetClose asChild key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "border-b border-[var(--border)] px-1 py-4 text-sm transition-colors",
                    isActive
                      ? "border-b-[var(--accent)] text-[var(--accent)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}