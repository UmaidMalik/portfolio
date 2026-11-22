# Umaid Malik — Developer Portfolio

A responsive engineering portfolio built with React, TypeScript, Tailwind CSS, and shadcn/ui.

The portfolio presents my computer engineering background and direction toward electrical systems, power electronics, motor control, and embedded systems. Professional software, DevOps, and reliability experience remains part of the record, alongside completed projects and clearly labelled ongoing work.

**Live site:** [umaidmalik.com](https://umaidmalik.com)

## Development and approval

Changes are developed on `dev`, built by CI, and reviewed before promotion to `main` through a pull request. Only `main` deploys the live site. See [CONTRIBUTING.md](CONTRIBUTING.md) for the review and preview process.

## Electrical Notebook Themes

The default local theme is `electrical-notebook-black`: near-black backgrounds, charcoal panels, muted coral accents, and electrical doodles. The navy `electrical-notebook-dark` and light `electrical-notebook` themes remain available alongside all five original themes. All eight themes use the electrical notebook layout, doodles, and mobile styling. The older theme names select colour palettes, not the legacy terminal design. Pushes and scheduled rebuilds use the black default; manual workflow dispatch can select any palette.

To preview the light version locally, set `VITE_PORTFOLIO_THEME=electrical-notebook` before starting Vite. Clear the variable to return to the dark default.

## Daily Rebuild

The portfolio rebuilds every day at **08:00 America/Toronto** using `electrical-notebook-black`. The schedule does not rotate the palette.

The release workflow injects the default palette into the Vite production build and deploys the resulting site to GitHub Pages. Other palettes remain available through the manual deployment selector; the next scheduled rebuild returns to the black default.

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
