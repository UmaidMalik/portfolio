import type { Experience } from "@/types/portfolio"

export const experience: Experience[] = [
  {
    company: "Morgan Stanley",
    role: "Production Support & Reliability Engineering",
    startDate: "August 2026",
    endDate: "Present",
    location: "Montreal, QC",
    summary:
      "Supporting a global reliability engineering environment involving production systems, incident management, troubleshooting, and automation.",
    achievements: [
      "In progress",
    ],
    technologies: [
      "Python",
      "SQL",
      "Snowflake",
    ],
  },
  {
    company: "FDM Group",
    role: "IT Consultant / Software Developer",
    startDate: "December 2025",
    endDate: "March 2026",
    location: "Montreal, QC",
    summary:
      "Completed internal software-engineering training and technical development following the conclusion of a client assignment, strengthening backend development, testing, database, and application-design skills.",
    achievements: [
      "Completed structured training and practical exercises focused on Java, Spring Boot, REST APIs, SQL, and software-development practices.",
      "Strengthened backend development skills through application design, debugging, testing, and database-focused exercises.",
      "Continued independent technical development while preparing for placement on a new software-engineering client assignment.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "SQL",
      "Git",
      "React",
      "GCP",
    ],
  },
  {
    company: "Intact Financial",
    role: "DevOps Engineer",
    startDate: "January 2025",
    endDate: "December 2025",
    location: "Montreal, QC",
    summary:
      "Supported and enhanced enterprise CI/CD and GitOps platforms used by internal development teams, developing Jenkins pipeline logic, Helm deployment templates, and Argo CD configurations while resolving build, deployment, and platform issues.",
    achievements: [
      "Developed and maintained reusable Groovy code for shared Jenkins pipelines supporting enterprise build and deployment workflows.",
      "Created Helm chart templates and maintained GitOps configurations used by Argo CD to deploy applications across Kubernetes and OpenShift environments.",
      "Implemented Jenkins Kubernetes agent-provisioning controls that improved shared namespace resource allocation and helped manage AWS infrastructure costs.",
      "Migrated a Jenkins build image from CentOS to Debian, reducing known vulnerabilities and improving build performance by approximately 50%.",
      "Investigated and resolved pipeline failures, deployment issues, access problems, and configuration errors by updating Jenkins code, Helm charts, container images, and platform settings.",
    ],
    technologies: [
      "Jenkins",
      "Groovy",
      "Kubernetes",
      "OpenShift",
      "Helm",
      "Argo CD",
      "GitOps",
      "Docker",
      "AWS",
      "Linux",
    ],
  },
  {
    company: "FDM Group",
    role: "IT Consultant / Software Developer",
    startDate: "March 2024",
    endDate: "January 2025",
    location: "Montreal, QC",
    summary:
      "Developed backend services, internal tools, automated tests, and full-stack features across Java, Python, Angular, and SQL applications.",
    achievements: [
      "Built a FastAPI media-processing service using FFmpeg and Whisper to generate transcripts and WebVTT subtitle files.",
      "Developed Spring Boot REST APIs and data-processing features involving CSV ingestion, analysis, and visualization.",
      "Created Selenium, Java, and Cucumber end-to-end tests and a Python developer-onboarding automation tool.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Angular",
      "MySQL",
      "Selenium",
      "Cucumber",
    ],
  },
]