interface TechTagProps {
  children: string
}

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1.5 text-[0.65rem] text-[var(--muted-foreground)]">
      {children}
    </span>
  )
}