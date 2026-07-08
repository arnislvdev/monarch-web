import { motion } from "motion/react"
import {
  RiDownloadCloud2Line,
  RiSkipForwardLine,
  RiBookOpenLine,
  RiBookmarkLine,
} from "@remixicon/react"

const pillars = [
  {
    key: "watch",
    eyebrow: "Watch",
    title: "Stream the second it's found",
    description:
      "Monarch pulls a torrent stream straight into playback — no separate client, no waiting for a download bar to finish.",
    points: [
      {
        icon: RiDownloadCloud2Line,
        label: "Torrent-native playback",
        detail: "Pick a release, and it starts playing. Nothing lands on disk first.",
      },
      {
        icon: RiSkipForwardLine,
        label: "AniSkip built in",
        detail: "Openings and endings skip themselves, timed to the episode.",
      },
    ],
  },
  {
    key: "read",
    eyebrow: "Read",
    title: "Pick up any chapter, instantly",
    description:
      "The same library that tracks what you're watching tracks what you're reading — chapter progress included.",
    points: [
      {
        icon: RiBookOpenLine,
        label: "Distraction-free reader",
        detail: "Panels fill the window. Everything else gets out of the way.",
      },
      {
        icon: RiBookmarkLine,
        label: "Progress that follows you",
        detail: "Close a chapter anywhere, reopen exactly where you left off.",
      },
    ],
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="text-sm font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Two apps in one
        </motion.p>
        <motion.h2
          className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Every title, watched or read, lives in the same place.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/40 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.article
              key={pillar.key}
              className="flex flex-col gap-6 bg-background p-8 sm:p-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <div>
                <span className="text-sm font-medium text-primary">
                  {pillar.eyebrow}
                </span>
                <h3 className="mt-2 text-xl font-medium text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {pillar.points.map((point) => (
                  <li key={point.label} className="flex gap-3">
                    <point.icon
                      className="mt-0.5 size-5 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {point.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {point.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}