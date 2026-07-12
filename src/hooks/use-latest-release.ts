import { useEffect, useState } from "react"

export type Arch = "amd64" | "arm64"

export interface LatestRelease {
  version: string
  publishedAt: string
  // Only the arches the latest release actually shipped — older releases
  // are amd64-only, so arm64 may be absent and the UI hides that button.
  installers: Partial<Record<Arch, { filename: string; size: number }>>
}

type State =
  | { status: "loading" }
  | { status: "ready"; release: LatestRelease }
  | { status: "error" }

const API_BASE = import.meta.env.VITE_RELEASES_API

export function downloadUrl(arch: Arch): string {
  return `${API_BASE}/download?arch=${arch}`
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
