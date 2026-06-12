import { SectionHeading } from "@/components/SectionHeading"
import {
  certifications,
  engineeringFocus,
  skillGroups,
} from "@/data/skills"

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

        <div className="mt-14">
          <p className="mb-5 text-xs lowercase text-[var(--subtle-foreground)]">
            certifications
          </p>

          <ul className="border-t border-[var(--border)]">
            {certifications.map((certification) => (
              <li
                key={certification.name}
                className="grid gap-3 border-b border-[var(--border)] py-5 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-base text-[var(--accent)]"
                  >
                    ✓
                  </span>

                  <div>
                    {certification.credentialUrl ? (
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                      >
                        {certification.name} ↗
                      </a>
                    ) : (
                      <p className="text-sm text-[var(--foreground)]">
                        {certification.name}
                      </p>
                    )}

                    {certification.issuer ? (
                      <p className="mt-1 text-xs text-[var(--subtle-foreground)]">
                        {certification.issuer}
                      </p>
                    ) : null}
                  </div>
                </div>

                {certification.year ? (
                  <span className="pl-8 text-xs text-[var(--subtle-foreground)] sm:pl-0">
                    {certification.year}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}