import { BrandMark } from "@/components/BrandMark"
import { MobileMenu } from "@/components/MobileMenu"
import {
  type SectionId,
  useActiveSection,
} from "@/hooks/useActiveSection"

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

export function Header() {
  const activeSection = useActiveSection()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[color:var(--background)]/90 backdrop-blur-md">
      <div className="page-container flex h-16 items-center justify-between">
        <a
          href="#about"
          className="text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
        >
          <BrandMark />
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
                  "border-b-2 pb-2 pt-2 text-xs transition-colors",
                  isActive
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "border-transparent text-[var(--muted-foreground)] hover:border-[var(--border)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <MobileMenu activeSection={activeSection} />
      </div>
    </header>
  )
}