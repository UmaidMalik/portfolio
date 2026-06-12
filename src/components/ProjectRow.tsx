import { ExternalLink, PackageOpen } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { TechTag } from "@/components/TechTag"
import type { Project } from "@/types/portfolio"

interface ProjectRowProps {
  project: Project
}

function getLinkIcon(type: Project["links"][number]["type"]) {
  switch (type) {
    case "github":
      return FaGithub
    case "release":
      return PackageOpen
    default:
      return ExternalLink
  }
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="glow-hover border-b border-[var(--border)] px-1 py-7 last:border-b-0 sm:px-4">
      <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              {project.slug}
            </h3>

            <span className="border border-[var(--border)] px-2 py-1 text-[0.6rem] uppercase tracking-wider text-[var(--accent)]">
              {project.category}
            </span>

            {project.status === "professional" ? (
              <span className="text-[0.6rem] text-[var(--subtle-foreground)]">
                source unavailable
              </span>
            ) : null}
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <TechTag key={technology}>{technology}</TechTag>
            ))}
          </div>
        </div>

        {project.links.length ? (
          <div className="flex gap-3 sm:flex-col sm:items-end">
            {project.links.map((link) => {
              const Icon = getLinkIcon(link.type)

              if (!link.href) {
                return null
              }

              return (
                <a
                  key={`${project.slug}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
                >
                  <Icon className="size-3.5" />
                  {link.label}
                </a>
              )
            })}
          </div>
        ) : null}
      </div>
    </article>
  )
}