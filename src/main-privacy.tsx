import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { PrivacyPage } from "@/page/privacy.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="min-h-svh bg-background">
        <PrivacyPage />
      </div>
    </ThemeProvider>
  </StrictMode>
)
