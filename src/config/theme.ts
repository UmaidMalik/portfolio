export const themes = [
  "electrical-notebook",
  "electrical-notebook-dark",
  "electrical-notebook-black",
  "cyber-cyan",
  "black-green",
  "purple-lavender",
  "midnight-amber",
  "paper-burgundy",
] as const

export type ThemeName = (typeof themes)[number]

const DEFAULT_THEME: ThemeName = "electrical-notebook-black"

function isThemeName(value: unknown): value is ThemeName {
  return (
    typeof value === "string" &&
    themes.includes(value as ThemeName)
  )
}

const configuredTheme = import.meta.env.VITE_PORTFOLIO_THEME

export const ACTIVE_THEME: ThemeName = isThemeName(configuredTheme)
  ? configuredTheme
  : DEFAULT_THEME