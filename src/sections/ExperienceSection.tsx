import { ExperienceTabs } from "@/components/ExperienceTabs"
import { SectionHeading } from "@/components/SectionHeading"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <div className="page-container">
        <SectionHeading
          command="cat experience.log"
          title="Work Experience"
          description="Application development, production delivery, developer tooling, and infrastructure automation."
        />

        <ExperienceTabs />
      </div>
    </section>
  )
}