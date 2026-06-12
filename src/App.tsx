import { Header } from "@/components/Header"
import { ContactSection } from "@/sections/ContactSection"
import { ExperienceSection } from "@/sections/ExperienceSection"
import { HeroSection } from "@/sections/HeroSection"
import { ProjectsSection } from "@/sections/ProjectsSection"
import { SkillsSection } from "@/sections/SkillsSection"
import { EducationSection } from "@/sections/EducationSection"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="technical-grid min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header/>
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer/>
    </div>
  )
}

export default App