import { useMemo, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ProjectRow } from "@/components/ProjectRow"
import { SectionHeading } from "@/components/SectionHeading"
import { TechTag } from "@/components/TechTag"
import { projects } from "@/data/projects"

const filters = [
  { label: "all", value: "all" },
  { label: "full stack", value: "Full-Stack Platform" },
  { label: "backend", value: "Backend" },
  { label: "systems", value: "Systems" },
  { label: "graphics", value: "Graphics" },
  { label: "simulation", value: "Simulation" },
] as const

type FilterValue = (typeof filters)[number]["value"]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects
    }

    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const featuredProjects = filteredProjects.filter((project) => project.featured,)
  const additionalProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-shell">
      <div className="page-container">
        <SectionHeading
          command="ls -la ~/projects"
          title="Projects"
          description="Selected applications, systems projects, developer tools, and infrastructure work."
        />

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
            {featuredProjects.map((project, index) => (
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

                      <span className="border border-[var(--border)] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-[var(--muted-foreground)]">
                        {project.category}
                      </span>
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
                    {project.image ? (
                      <img
                        src={project.image}
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
            ))}
          </div>
        ) : null}

        {additionalProjects.length > 0 ? (
          <div
            className={[
              "border-y border-[var(--border)]",
              featuredProjects ? "mt-10" : "",
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