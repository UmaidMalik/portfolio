export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-3">
      <svg aria-hidden="true" viewBox="0 0 28 28" className="size-7 shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20h7V8h11M12 14h8" />
        <circle cx="5" cy="20" r="2.5" fill="var(--background)" />
        <circle cx="23" cy="8" r="2.5" fill="var(--background)" />
        <circle cx="22" cy="14" r="2.5" fill="var(--background)" />
      </svg>
      <span className="text-sm font-semibold tracking-tight text-[var(--foreground)]">Umaid Malik</span>
    </span>
  )
}
