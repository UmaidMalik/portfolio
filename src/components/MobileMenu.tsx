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
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
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
          <SheetTitle className="text-left font-mono text-[var(--accent)]">
            ~/dev.portfolio
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-10 flex flex-col gap-2">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <SheetClose asChild key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={[
                    "border-b border-[var(--border)] px-1 py-4 text-sm transition-colors",
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {isActive ? `[${item.label}]` : item.label}
                </a>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}