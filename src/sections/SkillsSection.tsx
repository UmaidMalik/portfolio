import { Check } from "lucide-react"

import { SectionHeading } from "@/components/SectionHeading"
import { skillGroups } from "@/data/skills"

const engineeringFocus = [
  "Backend and distributed systems",
  "Developer tooling and automation",
  "Graphics, emulation, and simulation",
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="page-container">
        <SectionHeading
          command="skills --list"
          title="Technical Skills"
          description="Technologies I have used across application development, production delivery, infrastructure, and systems projects."
        />

        <div className="grid border-l border-t border-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="glow-hover min-h-44 border-b border-r border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7"
            >
              <h3 className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                {group.title}
              </h3>

              <p className="mt-6 flex flex-wrap gap-x-3 gap-y-3 text-sm leading-7 text-[var(--muted-foreground)]">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
            Engineering focus
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {engineeringFocus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-[var(--muted-foreground)]"
              >
                <Check
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}