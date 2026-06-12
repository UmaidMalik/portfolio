import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ACTIVE_THEME } from "./config/theme.ts"
import App from "./App.tsx"

document.documentElement.dataset.theme = ACTIVE_THEME

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />   
  </StrictMode>
)
