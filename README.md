# Umaid Malik — Developer Portfolio

A responsive, terminal-inspired software development portfolio built with React, TypeScript, Tailwind CSS, and shadcn/ui.

The portfolio showcases my professional experience, technical skills, education, certifications, and selected projects across backend development, developer tooling, DevOps, infrastructure automation, graphics, and systems programming.

**Live site:** [umaidmalik.com](https://umaidmalik.com)

## Daily Theme Rotation

The portfolio theme changes automatically every day at **08:00 America/Toronto**.

A scheduled GitHub Actions workflow selects a theme, injects it into the Vite production build through an environment variable, and deploys the resulting site to GitHub Pages.

## Tech

### Application

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Radix UI
* Lucide
* React Icons

### CI/CD and Hosting

* GitHub Actions
* GitHub Pages
* Squarespace DNS
* Custom domain
* HTTPS

## Running Locally

### Requirements

* Node.js 22 or later
* npm

Clone the repository:

```bash
git clone https://github.com/UmaidMalik/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL, typically:

```text
http://localhost:5173
```

## Building

Create a production build:

```bash
npm run build
```

Preview the production bundle locally:

```bash
npm run preview
```

The generated site is written to:

```text
dist/
```

## Testing a Theme Locally

### PowerShell

```powershell
$env:VITE_PORTFOLIO_THEME = "purple-lavender"
npm run dev
```

Clear the environment variable afterward:

```powershell
Remove-Item Env:VITE_PORTFOLIO_THEME
```

### Linux or macOS

```bash
VITE_PORTFOLIO_THEME=purple-lavender npm run dev
```

Restart the Vite development server after changing the theme variable.

## Adding a Theme

Add the theme name to the allowed values in:

```text
src/config/theme.ts
```

Then define its CSS variables in:

```text
src/styles/themes.css
```

Example:

```css
:root[data-theme="example-theme"] {
  --background: #050505;
  --surface: #0a0a0a;
  --surface-hover: #101010;
  --foreground: #f4f4f4;
  --muted-foreground: #777777;
  --subtle-foreground: #444444;
  --border: #222222;
  --accent: #00e5ff;
  --accent-hover: #36ecff;
  --accent-muted: #062f35;
}
```
