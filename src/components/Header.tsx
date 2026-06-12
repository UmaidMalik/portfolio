import { MobileMenu } from "@/components/MobileMenu"
import {
  type SectionId,
  useActiveSection,
} from "@/hooks/useActiveSection"

const navigationItems: Array<{
  id: SectionId
  label: string
}> = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
]

export function Header() {
  const activeSection = useActiveSection()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/90 backdrop-blur-md">
      <div className="page-container flex h-16 items-center justify-between">
        <a
          href="#about"
          className="text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
        >
          ~/<span className="text-[var(--accent)]">dev.portfolio</span>
        </a>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "text-xs transition-colors",
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {isActive ? `[${item.label}]` : item.label}
              </a>
            )
          })}
        </nav>

        <MobileMenu activeSection={activeSection} />
      </div>
    </header>
  )
}