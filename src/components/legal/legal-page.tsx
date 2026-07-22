import type { ReactNode } from "react"

import { IconLogo } from "@/components/brand"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <a
        href="./"
        className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
      >
        &larr; Back to Monarch
      </a>
      <div className="mt-8 flex items-center gap-3">
        <IconLogo size="sm" />
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          {title}
        </h1>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Last updated: {updated}
      </p>
      <div className="mt-10">{children}</div>
    </div>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 text-lg font-medium text-foreground first:mt-0">
      {children}
    </h2>
  )
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
      {children}
    </p>
  )
}

export function Ul({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
      {children}
    </ul>
  )
}
