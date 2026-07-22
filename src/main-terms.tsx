import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { TermsPage } from "@/page/terms.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <div className="min-h-svh bg-background">
        <TermsPage />
      </div>
    </ThemeProvider>
  </StrictMode>
)
