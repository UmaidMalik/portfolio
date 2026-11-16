import { ExperienceTabs } from "@/components/ExperienceTabs"
import { SectionHeading } from "@/components/SectionHeading"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="page-container">
        <SectionHeading
          command="02 / Professional background"
          title="Professional Background"
          description="Experience in software, automation, and production reliability that informs how I approach engineering problems."
        />

        <ExperienceTabs />
      </div>
    </section>
  )
}