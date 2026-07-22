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

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

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

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.p
          className="text-sm font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          One client
        </motion.p>
        <motion.h2
          className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Everything you watch and read, tracked without the busywork.
        </motion.h2>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Table variant="card">
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.key} className="align-top">
                  <TableCell className="whitespace-normal">
                    <div className="flex items-center gap-2.5">
                      <feature.icon
                        className="size-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <p className="font-medium text-foreground">
                        {feature.label}
                      </p>
                    </div>
                    <p className="mt-1 pl-6.5 text-muted-foreground">
                      {feature.detail}
                    </p>
                  </TableCell>
                  <TableCell className="px-4 text-right">
                    <Badge>{feature.category}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  )
}