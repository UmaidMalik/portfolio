interface SectionHeadingProps {
  command: string
  title: string
  description?: string
}

export function SectionHeading({
  command,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-10">
      <p className="mb-3 text-xs font-medium text-[var(--accent)]">
        $ {command}
      </p>

      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)]">
          {description}
        </p>
      ) : null}
    </header>
  )
}