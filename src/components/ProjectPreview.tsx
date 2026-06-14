import { Expand } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { Project } from "@/types/portfolio"

interface ProjectPreviewProps {
  project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  if (!project.images) {
    return null
  }

  if (!project.images?.length) {
    return null
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
        >
          <Expand className="size-3.5" />
          Preview
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-[min(92vw,72rem)] overflow-auto border-[var(--border)] bg-[var(--surface)] p-0 text-[var(--foreground)]">
        <div className="border-b border-[var(--border)] px-5 py-4">
          <DialogTitle className="font-mono text-base">
            {project.title}
          </DialogTitle>

          <DialogDescription className="mt-1 font-mono text-xs text-[var(--muted-foreground)]">
            Project screenshot
          </DialogDescription>
        </div>

        <div className="space-y-6 bg-[var(--background)] p-4 sm:p-6">
          {project.images.map((image, index) => (
            <div
              key={image}
              className="overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-2 sm:p-3"
            >
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}