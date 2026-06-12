import { useState } from "react"

import { experience } from "@/data/experience"

export function ExperienceTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedExperience = experience[selectedIndex]

  return (
    <div className="grid gap-8 md:grid-cols-[13rem_1fr] md:gap-12">
      <div
        className="flex overflow-x-auto border-b border-[var(--border)] md:block md:overflow-visible md:border-b-0 md:border-r"
        role="tablist"
        aria-label="Work experience"
      >
        {experience.map((item, index) => {
          const isSelected = index === selectedIndex

          return (
            <button
              key={`${item.company}-${item.startDate}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`experience-panel-${index}`}
              id={`experience-tab-${index}`}
              onClick={() => setSelectedIndex(index)}
              className={[
                "relative min-w-max border-b-2 px-4 py-4 text-left transition-colors md:w-full md:border-b-0 md:border-r-2",
                isSelected
                  ? "border-[var(--accent)] bg-[var(--surface)] text-[var(--accent)]"
                  : "border-transparent text-[var(--muted-foreground)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]",
              ].join(" ")}
            >
              <span className="block text-xs">{item.company}</span>

              <span className="mt-1 block text-[0.65rem] text-[var(--subtle-foreground)]">
                {item.startDate} – {item.endDate}
              </span>
            </button>
          )
        })}
      </div>

      <article
        id={`experience-panel-${selectedIndex}`}
        role="tabpanel"
        aria-labelledby={`experience-tab-${selectedIndex}`}
        className="min-h-[26rem]"
      >
        <header>
          <p className="text-xs text-[var(--accent)]">
            @ {selectedExperience.company}
          </p>

          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
            {selectedExperience.role}
          </h3>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--subtle-foreground)]">
            <span>
              {selectedExperience.startDate} – {selectedExperience.endDate}
            </span>
            <span>{selectedExperience.location}</span>
          </div>
        </header>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
          {selectedExperience.summary}
        </p>

        <ul className="mt-7 space-y-4">
          {selectedExperience.achievements.map((achievement) => (
            <li
              key={achievement}
              className="flex gap-3 text-sm leading-7 text-[var(--muted-foreground)]"
            >
              <span
                aria-hidden="true"
                className="mt-[0.1rem] shrink-0 text-[var(--accent)]"
              >
                ›
              </span>

              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <ul
          className="mt-8 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {selectedExperience.technologies.map((technology) => (
            <li
              key={technology}
              className="border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-[0.65rem] text-[var(--muted-foreground)]"
            >
              {technology}
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}