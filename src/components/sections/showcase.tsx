import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { Button } from "@/components/ui/button"
import discoverImg from "@/assets/screenshots/Discover.png"
import libraryImg from "@/assets/screenshots/Library.png"
import scheduleImg from "@/assets/screenshots/Schedule.png"
import themesImg from "@/assets/screenshots/Themes.png"
import settingsImg from "@/assets/screenshots/Settings.png"
import detailsImg from "@/assets/screenshots/Details.png"
import playerImg from "@/assets/screenshots/PlayerBuffer.png"
import downloadsImg from "@/assets/screenshots/Downloads.png"
import marketplaceImg from "@/assets/screenshots/Marketplace.png"
import watchTogetherImg from "@/assets/screenshots/WatchTogether.png"

const shots = [
  {
    key: "discover",
    label: "Discover",
    src: discoverImg,
    alt: "Monarch's Discover page showing a currently airing anime and a continue watching row",
  },
  {
    key: "library",
    label: "Library",
    src: libraryImg,
    alt: "Monarch's Library page showing anime grouped by status, synced with AniList",
  },
    {
    key: "settings",
    label: "Settings",
    src: settingsImg,
    alt: "Monarch's Settings page showing various configuration options",
  },
  {
    key: "details",
    label: "Details",
    src: detailsImg,
    alt: "Monarch's title details page showing synopsis and metadata for an anime",
  },
  {
    key: "schedule",
    label: "Schedule",
    src: scheduleImg,
    alt: "Monarch's schedule page showing upcoming releases and airing times",
  },
  {
    key: "themes",
    label: "Themes",
    src: themesImg,
    alt: "Monarch's themes page showing available color schemes and customization options",
  },
  {
    key: "player",
    label: "Playback",
    src: playerImg,
    alt: "Monarch's player buffering a torrent stream before playback starts",
  },
  {
    key: "downloads",
    label: "Downloads",
    src: downloadsImg,
    alt: "Monarch's Downloads page showing episodes downloading with progress, speed, and ETA, alongside finished downloads",
  },
  {
    key: "marketplace",
    label: "Marketplace",
    src: marketplaceImg,
    alt: "Monarch's Marketplace page showing one-click installable novel sources across several languages",
  },
  {
    key: "watch-together",
    label: "Watch Together",
    src: watchTogetherImg,
    alt: "Monarch's Watch Together panel showing a synced room with a shareable code and member list",
  },
]

export function Showcase() {
  const [active, setActive] = useState(shots[0].key)
  const activeShot = shots.find((shot) => shot.key === active) ?? shots[0]

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="text-center text-sm font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Take a look
        </motion.p>
        <motion.h2
          className="mt-3 text-center text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          What it looks like day to day.
        </motion.h2>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {shots.map((shot) => (
            <Button
              key={shot.key}
              variant={shot.key === active ? "default" : "ghost"}
              onClick={() => setActive(shot.key)}
            >
              {shot.label}
            </Button>
          ))}
        </motion.div>

        <motion.div
          className="relative mt-8 overflow-hidden rounded-2xl border border-border/40 shadow-xs/5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={activeShot.key}
              src={activeShot.src}
              alt={activeShot.alt}
              className="aspect-video w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
