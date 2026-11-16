import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ProjectRow } from "@/components/ProjectRow"
import { SectionHeading } from "@/components/SectionHeading"
import { TechTag } from "@/components/TechTag"
import { projects } from "@/data/projects"

const filters = [
  { label: "all", value: "all" },
  { label: "embedded", value: "Embedded" },
  { label: "iot", value: "IoT" },
  { label: "full stack", value: "Full Stack" },
  { label: "backend", value: "Backend" },
  { label: "systems", value: "Systems" },
  { label: "graphics", value: "Graphics" },
  { label: "simulation", value: "Simulation" },
  { label: "game", value: "Game"},
  { label: "networking", value: "Networking"},
  { label: "mobile", value: "Mobile"},

] as const

type FilterValue = (typeof filters)[number]["value"]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects
    }

    return projects.filter((project) =>
      project.category.includes(activeFilter),
    )
  }, [activeFilter])

  const featuredProjects = filteredProjects.filter((project) => project.featured,)
  const additionalProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-shell">
      <div className="page-container">
        <SectionHeading
          command="01 / Projects & explorations"
          title="Projects"
          description="Current work in embedded sensing and motor control, followed by projects from my computer engineering and software background."
        />

        <div className="mb-14 grid gap-6 md:grid-cols-2">
          <article className="glow-hover border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)]">01 / In development</p>
            <h3 className="mt-5 text-2xl font-semibold">ESP32 Environmental Monitor</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              An environmental monitoring project built around an ESP32 with a Qwiic
              sensor interface. Development is underway, with a focus on bringing
              sensing and embedded electronics together in a physical device.
            </p>
            <div className="mt-6 flex flex-wrap gap-2"><TechTag>ESP32</TechTag><TechTag>Environmental sensing</TechTag><TechTag>Qwiic / I²C</TechTag></div>
            <p className="mt-6 border-t border-[var(--border)] pt-4 text-xs leading-6 text-[var(--muted-foreground)]">Current stage: active development. Build documentation and results will be added as the project progresses.</p>
          </article>
          <article className="glow-hover border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)]">02 / Early concept</p>
            <h3 className="mt-5 text-2xl font-semibold">BLDC Motor Control</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
              A personal project exploring brushless DC motor control and the
              relationship between power electronics, electric machines, and
              embedded control. The project is currently at the concept stage.
            </p>
            <div className="mt-6 flex flex-wrap gap-2"><TechTag>Motor control</TechTag><TechTag>Power electronics</TechTag><TechTag>Embedded systems</TechTag></div>
            <p className="mt-6 border-t border-[var(--border)] pt-4 text-xs leading-6 text-[var(--muted-foreground)]">Current stage: initial parts ordered. Schematic design has not yet started.</p>
          </article>
        </div>
        <h3 className="mb-3 text-xl font-semibold">Earlier projects &amp; software work</h3>
        <p className="mb-6 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">Previous work in sensor integration, emulation, simulation, and application development. These projects form part of my technical foundation.</p>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={[
                  "border px-3 py-2 text-[0.65rem] lowercase transition-all",
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)]"
                    : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
                ].join(" ")}
              >
                {isActive ? `[${filter.label}]` : filter.label}
              </button>
            )
          })}
        </div>
        <div key={activeFilter} className="project-filter-results">
        {featuredProjects.length > 0 ? (
          <div className="grid gap-8">
            {featuredProjects.map((project, index) => {
              const previewImage = project.images?.[0]

              return (
                <article
                  key={project.slug}
                  className="glow-hover overflow-hidden border border-[var(--border)] bg-[var(--surface)]"
                >
                  <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")} / FEATURED
                        </span>

                        {project.category.map((category) => (
                          <span
                            key={category}
                            className="border border-[var(--border)] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-[var(--accent)]"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <TechTag key={technology}>{technology}</TechTag>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.links.map((link) => {
                          if (!link.href) {
                            return null
                          }

                          const Icon =
                            link.type === "github" ? FaGithub : ArrowUpRight

                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="terminal-button"
                            >
                              <Icon className="size-3.5" />
                              {link.label}
                            </a>
                          )
                        })}
                      </div>
                    </div>

                    <div className="min-h-64 border-t border-[var(--border)] bg-[var(--background)] lg:border-l lg:border-t-0">
                      {previewImage ? (
                        <img
                          src={previewImage}
                          alt={`${project.title} interface`}
                          loading="lazy"
                          decoding="async"
                          className="h-full min-h-64 w-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex h-full min-h-64 items-center justify-center px-8 text-center text-xs text-[var(--subtle-foreground)]">
                          project screenshot pending
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        ) : null}

        {additionalProjects.length > 0 ? (
          <div
            className={[
              "border-y border-[var(--border)]",
              featuredProjects.length > 0 ? "mt-10" : "",
            ].join(" ")}
          >
            {additionalProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        ) : null}

        {filteredProjects.length === 0 ? (
          <div className="border border-[var(--border)] p-8 text-center text-sm text-[var(--muted-foreground)]">
            No projects found in this category.
          </div>
        ) : null}
        </div>
      </div>
    </section>
  )
}
