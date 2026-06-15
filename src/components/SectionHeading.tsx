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

      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-[var(--muted-foreground)]">
          {description}
        </p>
      ) : null}
    </header>
  )
}