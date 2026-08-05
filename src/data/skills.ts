import type { SkillGroup, Certification } from "@/types/portfolio"

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "C",
      "SQL",
      "Bash",
      "Groovy",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Flask",
      "REST APIs",
      "MySQL",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "AWS",
      "Terraform",
      "Helm",
      "Argo CD",
    ],
  },
  {
    title: "CI/CD & Tooling",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "GitOps",
      "Maven",
      "CMake",
      "Linux",
    ],
  },
  {
    title: "Testing",
    skills: [
      "JUnit",
      "Mockito",
      "pytest",
      "Vitest",
      "Selenium",
      "Cucumber",
    ],
  },
]

export const certifications: Certification[] = [
  {
    name: "Linux Commands & Shell Scripting",
    issuer: "IBM",
    year: "2024",
    credentialUrl: "https://www.credly.com/badges/1f23e543-76b4-48c0-9a50-f0ce63efab50/public_url",
  },
    {
    name: "GitOps Certified for Argo: GitOps Fundamentals Level I",
    issuer: "Codefresh",
    year: "2026",
    credentialId: "6a348b12086376779a05ce60",
  },
]

export const engineeringFocus = [
  "Backend and distributed systems",
  "Developer tooling and automation",
  "Graphics, emulation, and simulation",
]