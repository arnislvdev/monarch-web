import { useEffect, useState } from "react"

export interface LatestRelease {
  version: string
  filename: string
  size: number
  publishedAt: string
}

type State =
  | { status: "loading" }
  | { status: "ready"; release: LatestRelease }
  | { status: "error" }

const API_BASE = import.meta.env.VITE_RELEASES_API

export function downloadUrl(): string {
  return `${API_BASE}/download`
}

export function useLatestRelease(): State {
  const [state, setState] = useState<State>({ status: "loading" })

  useEffect(() => {
    let cancelled = false

    fetch(`${API_BASE}/latest`)
      .then((res) => (res.ok ? (res.json() as Promise<LatestRelease>) : null))
      .then((release) => {
        if (cancelled) return
        setState(release ? { status: "ready", release } : { status: "error" })
      })
      .catch(() => {
        if (cancelled) return
        setState({ status: "error" })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
