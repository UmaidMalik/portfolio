import { SectionHeading } from "@/components/SectionHeading"
import { education } from "@/data/education"

export function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="page-container">
        <SectionHeading command="cat education.log" title="Education" />

        <div className="divide-y divide-[var(--border)] border border-[var(--border)]">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="text-xs text-[var(--accent)]">
                  {item.institution}
                </p>

                <h3 className="mt-3 text-base font-semibold leading-7 text-[var(--foreground)] sm:text-lg">
                  {item.degree}
                </h3>

                <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                  {item.location}
                </p>

                {item.details?.length ? (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="border border-[var(--border)] px-2.5 py-1.5 text-[0.7rem] text-[var(--muted-foreground)]"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="text-left md:text-right">
                <p className="text-xs text-[var(--subtle-foreground)]">
                  {item.status ?? item.endDate}
                </p>

                {item.startDate && item.endDate ? (
                  <p className="mt-1 text-xs text-[var(--subtle-foreground)]">
                    {item.startDate}–{item.endDate}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}