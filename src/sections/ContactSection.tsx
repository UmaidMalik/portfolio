import { ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import { SectionHeading } from "@/components/SectionHeading"

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <div className="page-container">
        <div className="ambient-glow-subtle border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-10">
          <SectionHeading
            command="ping umaid@dev"
            title="Get in touch"
            description="I’m open to software development opportunities in Montreal and Toronto/GTA."
          />

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:umaid.a.malik@gmail.com"
              className="terminal-button terminal-button-primary"
            >
              <Mail className="size-3.5" />
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/umaid-a-malik"
              target="_blank"
              rel="noreferrer"
              className="terminal-button"
            >
              <FaLinkedinIn className="size-3.5" />
              LinkedIn
              <ArrowUpRight className="size-3.5" />
            </a>

            <a
              href="https://github.com/UmaidMalik"
              target="_blank"
              rel="noreferrer"
              className="terminal-button"
            >
              <FaGithub className="size-3.5" />
              GitHub
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}