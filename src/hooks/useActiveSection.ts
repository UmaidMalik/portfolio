import { useEffect, useState } from "react"

const sectionIds = [
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
] as const

export type SectionId = (typeof sectionIds)[number]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("about")

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )

        const mostVisible = visibleSections[0]

        if (mostVisible) {
          setActiveSection(mostVisible.target.id as SectionId)
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.05, 0.2, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return activeSection
}