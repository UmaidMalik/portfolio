import { ArrowUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="page-container flex flex-col gap-5 py-8 text-[0.65rem] text-[var(--subtle-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p>Umaid Malik · {currentYear}</p>

        <p>Built with React, TypeScript, Tailwind CSS, and shadcn/ui</p>

        <a
          href="#about"
          className="inline-flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
        >
          back to top
          <ArrowUp className="size-3" />
        </a>
      </div>
    </footer>
  )
}