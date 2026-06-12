export const themes = [
  "purple-lavender",
  "purple-lavender",
  "midnight-amber",
  "cyber-cyan",
] as const

export type ThemeName = (typeof themes)[number]

const DEFAULT_THEME: ThemeName = "cyber-cyan"

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