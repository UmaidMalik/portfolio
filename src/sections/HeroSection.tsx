import { useTypewriter } from "@/hooks/useTypewriter"

const roles = [
  "Software Developer",
  "Backend Engineer",
  "DevOps Engineer",
]

export function HeroSection() {
  const role = useTypewriter({
    words: roles,
  })

  return (
    <section id="about" className="ambient-glow min-h-screen">
      <div className="page-container flex min-h-screen items-center py-24">
        <div>
          <p className="mb-5 text-xs font-medium text-[var(--accent)]">
            $ whoami
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Umaid Malik
          </h1>

          <p
            className="mt-4 min-h-8 text-xl text-[var(--accent)]"
            aria-label="Software developer, backend engineer, and devops engineer"
          >
            <span aria-hidden="true">{role}</span>
            <span
              aria-hidden="true"
              className="ml-0.5 inline-block animate-pulse"
            >
              _
            </span>
          </p>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            I turn complex problems into practical software systems,
            combining backend engineering, product thinking, automation,
            and a strong focus on reliability and real-world constraints.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="terminal-button"
              href="https://github.com/UmaidMalik"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              className="terminal-button"
              href="https://www.linkedin.com/in/umaid-a-malik"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
      <a
        href="#experience"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] text-[var(--subtle-foreground)] transition-colors hover:text-[var(--accent)]"
      >
        <span>scroll</span>
        <span aria-hidden="true" className="text-[var(--accent)]">
          ↓
        </span>
      </a>
    </section>
  )
}
/*
  <a className="terminal-button" href="/Umaid-Malik-Resume.pdf">
    Resume.pdf ↗
  </a>
*/