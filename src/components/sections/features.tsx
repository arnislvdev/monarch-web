import { motion } from "motion/react"
import {
  RiDownloadCloud2Fill,
  RiSkipForwardFill,
  RiBookOpenFill,
  RiBookmarkFill,
  RiRefreshFill,
  RiDiscordFill,
  RiBook2Fill,
  RiCalendarEventFill,
  RiPuzzleFill,
  RiGroup2Fill,
  RiDownload2Fill,
  RiClosedCaptioningFill,
} from "@remixicon/react"

const features = [
  {
    key: "playback",
    icon: RiDownloadCloud2Fill,
    label: "Torrent-native playback",
    category: "Watch",
    detail: "Stream right away without waiting for the download to finish. Nothing saves to your hard drive.",
  },
  {
    key: "aniskip",
    icon: RiSkipForwardFill,
    label: "AniSkip built in",
    category: "Watch",
    detail: "Automatically skip openings and endings, perfectly timed to every episode.",
  },
  {
    key: "watch-together",
    icon: RiGroup2Fill,
    label: "Watch Together",
    category: "Watch",
    detail: "Host a room and share the code. Everyone's playback stays locked in sync, with chat and reactions alongside.",
  },
  {
    key: "downloads",
    icon: RiDownload2Fill,
    label: "Download for offline",
    category: "Watch",
    detail: "Save episodes straight to your library, one at a time or a whole batch at once, and watch without a connection.",
  },
  {
    key: "subtitles",
    icon: RiClosedCaptioningFill,
    label: "Subtitles that just work",
    category: "Watch",
    detail: "Torrent-bundled and local subtitle files are found and converted automatically, text or bitmap, no setup needed.",
  },
  {
    key: "reader",
    icon: RiBookOpenFill,
    label: "Distraction-free reader",
    category: "Read",
    detail: "Manga panels fill the entire screen so you can focus entirely on the story.",
  },
  {
    key: "progress",
    icon: RiBookmarkFill,
    label: "Progress that follows you",
    category: "Read",
    detail: "Close a chapter whenever you want, and pick up right where you left off.",
  },
  {
    key: "novels",
    icon: RiBook2Fill,
    label: "Light novels too",
    category: "Read",
    detail: "A clean layout built for reading, complete with custom fonts and text-to-speech support.",
  },
  {
    key: "anilist",
    icon: RiRefreshFill,
    label: "AniList sync",
    category: "Track",
    detail: "Your profile updates automatically the second you finish an episode or chapter.",
  },
  {
    key: "discord",
    icon: RiDiscordFill,
    label: "Discord Rich Presence",
    category: "Track",
    detail: "Let your friends see exactly what you're watching or reading in real time.",
  },
  {
    key: "schedule",
    icon: RiCalendarEventFill,
    label: "Release schedule",
    category: "Track",
    detail: "Track countdowns for your watch list and the rest of the current season's lineup.",
  },
  {
    key: "extensions",
    icon: RiPuzzleFill,
    label: "Marketplace",
    category: "Extend",
    detail: "Install curated anime, manga, and novel sources in one click, or add any extension yourself by pasting its link.",
  },
]

// Categories in display order. Each becomes its own labelled block of cards,
// so the list reads by what you're doing (Watch / Read / Track / Extend)
// instead of one long undifferentiated table.
const CATEGORY_ORDER = ["Watch", "Read", "Track", "Extend"] as const

const groups = CATEGORY_ORDER.map((category) => ({
  category,
  items: features.filter((f) => f.category === category),
}))

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="text-center text-sm font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          One client
        </motion.p>
        <motion.h2
          className="mx-auto mt-3 max-w-2xl text-center text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Everything you watch and read, tracked without the busywork.
        </motion.h2>

        <div className="mt-16 flex flex-col gap-14">
          {groups.map((group) => (
            <div key={group.category}>
              <motion.p
                className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4 }}
              >
                {group.category}
              </motion.p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((feature, i) => (
                  <motion.div
                    key={feature.key}
                    className="group rounded-2xl bg-muted/40 p-5 transition-colors hover:bg-muted/70"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <span className="flex size-9 items-center justify-center rounded-xl bg-background/70 text-foreground transition-colors group-hover:bg-background">
                      <feature.icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 font-medium text-foreground">{feature.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {feature.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}