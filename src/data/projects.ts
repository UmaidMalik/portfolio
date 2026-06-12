import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    title: "Incident Management System",
    slug: "incident-management-system",
    category: "Full-Stack Platform",
    description:
      "A production-style incident tracking platform with ticket workflows, assignment, filtering, dashboards, containerized infrastructure, CI/CD, and cloud deployment.",
    technologies: [
      "React",
      "TypeScript",
      "Flask",
      "MySQL",
      "Docker",
      "AWS",
      "Terraform",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/UmaidMalik/ticket-management-system",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://d1pg4k7q96xzlo.cloudfront.net",
        type: "live",
      },
    ],
    image: "/projects/incident-management.webp",
    featured: true,
    status: "open source",
  },
  {
    title: "CHIP-8 Emulator",
    slug: "chip8-emulator",
    category: "Systems",
    description:
      "A cross-platform CHIP-8 emulator with instruction decoding, timers, keyboard input, SDL3 rendering, automated builds, and packaged releases.",
    technologies: ["C++23", "SDL3", "CMake", "GitHub Actions"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/UmaidMalik/chip-8",
        type: "github",
      },
      {
        label: "Live Demo",
        href: "https://umaidmalik.github.io/chip-8",
        type: "live",
      },      
      {
        label: "Releases",
        href: "https://github.com/UmaidMalik/chip-8/releases",
        type: "release",
      },
    ],
    image: "/projects/chip-8.webp",
    featured: true,    
    status: "open source",
  },
  {
    title: "Cellular Automata GPU",
    slug: "cellular-automata-gpu",
    category: "Simulation",
    description:
      "A configurable cellular automata simulation with CPU-based state updates, GPU rendering, and an ImGui control interface. THIS IS A WORK IN PROGRESS",
    technologies: ["C++", "SDL3", "SDL_gpu", "ImGui"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/UmaidMalik/cellular-automata-sdl",
        type: "github",
      },
    ],
    status: "open source",
  },
  {
    title: "Interactive OpenGL Scene",
    slug: "opengl-graphics-project",
    category: "Graphics",
    description:
      "A real-time 3D graphics application featuring custom shaders, lighting, textured geometry, camera controls, and skybox rendering.",
    technologies: ["C++", "OpenGL", "GLSL", "CMake"],
    links: [
      {
        label: "GitHub",
        href: "",
        type: "github",
      },
    ],
    status: "open source",
  },
  {
    title: "AI Transcription Service",
    slug: "ai-transcription-service",
    category: "Backend",
    description:
      "A FastAPI media-processing service that extracts audio with FFmpeg, generates transcripts with Whisper, and produces WebVTT subtitle files.",
    technologies: ["Python", "FastAPI", "FFmpeg", "Whisper", "MySQL"],
    links: [],
    status: "professional",
  },
  { 
    title: "Snake & Rabbit", 
    slug: "snake-rabbit", 
    category: "Game Development", 
    description: "A modern variation of the classic Snake game written in C with raylib. \
    The rabbit moves away when the snake approaches, and the game includes keyboard and \
    gamepad controls, a speed boost, score tracking, a CRT-style shader, native desktop \
    builds, and a WebAssembly browser version.", 
    technologies: [ "C", "raylib", "GLSL", "WebAssembly", "Emscripten", "Premake", "GitHub Actions", "GitHub Pages", ], 
    links: [ 
      { 
        label: "GitHub", 
        href: "https://github.com/UmaidMalik/snake-rabbit", 
        type: "github", 
      }, 
      { 
        label: "Play Online", 
        href: "https://umaidmalik.github.io/snake-rabbit/", 
        type: "live",
      },
      { 
        label: "Releases",
        href: "https://github.com/UmaidMalik/snake-rabbit/releases",
        type: "release", 
      }, 
    ],
    image: "/projects/snake-rabbit.webp",
    status: "open source",
    featured: false,
  },
]