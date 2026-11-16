export function HeroSection() {
  return (
    <section id="about" className="ambient-glow min-h-screen">
      <div className="page-container flex min-h-screen items-center py-28">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">Engineering portfolio / Montreal</p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Umaid Malik</h1>
          <p className="mt-5 max-w-3xl text-2xl leading-snug text-[var(--accent)] sm:text-4xl">From computing to the physical world.</p>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            I have a BEng in Computer Engineering and a professional background in software,
            automation, and production reliability. I’m now building toward electrical
            engineering, with a focus on power electronics, motor control, and embedded systems.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
            My interests centre on how circuits, sensing, and control come together
            to make physical systems work. This portfolio connects that direction
            with the engineering experience I bring to it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="terminal-button terminal-button-primary" href="#projects">Explore projects ↓</a>
            <a className="terminal-button" href="#experience">Professional background ↓</a>
            <a className="terminal-button" href="https://www.linkedin.com/in/umaid-a-malik" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <div className="mt-12 flex max-w-2xl flex-wrap gap-x-8 gap-y-3 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted-foreground)]">
            <span>Electrical systems</span><span>Embedded control</span><span>Power &amp; energy</span>
          </div>
        </div>
      </div>
    </section>
  )
}
