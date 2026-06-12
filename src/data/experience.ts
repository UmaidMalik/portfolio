import type { Experience } from "@/types/portfolio"

export const experience: Experience[] = [
  {
    company: "Mthree",
    role: "Production Support Trainee",
    startDate: "May 2026",
    endDate: "Present",
    location: "Montreal, Quebec",
    summary:
      "Completed production-support training focused on incident management, Linux, SQL, monitoring, scripting, and enterprise support workflows.",
    achievements: [
      "Built a full-stack incident-management platform using React, TypeScript, Flask, and MySQL.",
      "Implemented ticket workflows, assignment, filtering, dashboards, and incident status tracking.",
      "Worked with Docker, AWS, Terraform, CI/CD, Prometheus, and Grafana.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Flask",
      "MySQL",
      "Linux",
      "Docker",
      "AWS",
      "Terraform",
    ],
  },
  {
    company: "Intact Financial",
    role: "DevOps & Release Support Consultant",
    startDate: "January 2025",
    endDate: "November 2025",
    location: "Montreal / Toronto",
    summary:
      "Supported enterprise CI/CD and Kubernetes-based delivery environments involving Jenkins, OpenShift, Helm, Argo CD, Docker, and GitOps workflows.",
    achievements: [
      "Migrated Jenkins build images from CentOS to Debian, reducing security exposure and significantly improving build performance.",
      "Implemented and troubleshot Helm, OpenShift route, Argo CD ApplicationSet, and GitOps configuration changes.",
      "Investigated pipeline, deployment, dependency, caching, and container-agent issues across shared delivery platforms.",
    ],
    technologies: [
      "Jenkins",
      "Kubernetes",
      "OpenShift",
      "Helm",
      "Argo CD",
      "Docker",
      "Groovy",
      "GitOps",
    ],
  },
  {
    company: "FDM Group",
    role: "Software Developer",
    startDate: "March 2024",
    endDate: "January 2025",
    location: "Montreal, Quebec",
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