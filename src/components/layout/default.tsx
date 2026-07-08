import type { ReactNode } from "react"

import { TooltipProvider } from "@/components/ui/tooltip"

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <TooltipProvider>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-background shadow-sm">
        <main className="scrollbar-container min-h-0 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </TooltipProvider>
  )
}