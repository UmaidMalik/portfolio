export interface SocialLink {
  label: string
  href: string
  download?: boolean
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  summary: string
  achievements: string[]
  technologies: string[]
}

export interface ProjectLink {
  label: string
  href: string
  type: "github" | "live" | "release" | "case-study"
}

export interface Project {
  title: string
  slug: string
  category: string[]
  description: string
  technologies: string[]
  links: ProjectLink[]
  featured?: boolean
  image?: string
  status?: "open source" | "professional" | "archived" | "personal" | "group"
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface Certification {
  name: string
  issuer?: string
  year?: string
  credentialUrl?: string
}

export interface Education {
  institution: string
  degree: string
  startDate?: string
  endDate?: string
  status?: string
  location: string
  details?: string[]
}