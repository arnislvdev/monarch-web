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
    detail: "Pick a release, and it starts playing. Nothing lands on disk first.",
  },
  {
    key: "aniskip",
    icon: RiSkipForwardFill,
    label: "AniSkip built in",
    category: "Watch",
    detail: "Openings and endings skip themselves, timed to the episode.",
  },
  {
    key: "reader",
    icon: RiBookOpenFill,
    label: "Distraction-free reader",
    category: "Read",
    detail: "Panels fill the window. Everything else gets out of the way.",
  },
  {
    key: "progress",
    icon: RiBookmarkFill,
    label: "Progress that follows you",
    category: "Read",
    detail: "Close a chapter anywhere, reopen exactly where you left off.",
  },
  {
    key: "novels",
    icon: RiBook2Fill,
    label: "Light novels too",
    category: "Read",
    detail:
      "A dedicated text reader with typography controls and text-to-speech narration.",
  },
  {
    key: "anilist",
    icon: RiRefreshFill,
    label: "AniList sync",
    category: "Track",
    detail: "Progress updates your AniList profile the moment you close an episode or chapter.",
  },
  {
    key: "discord",
    icon: RiDiscordFill,
    label: "Discord Rich Presence",
    category: "Track",
    detail: "Friends see what you're watching or reading, right in your status.",
  },
  {
    key: "schedule",
    icon: RiCalendarEventFill,
    label: "Release schedule",
    category: "Track",
    detail:
      "See when the next episode airs — for your library and everything else this season.",
  },
  {
    key: "extensions",
    icon: RiPuzzleFill,
    label: "Extensions",
    category: "Extend",
    detail:
      "Add or swap content sources with installable extensions. The client stays the same; the sources are yours.",
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
                    <p className="mt-1 pl-[26px] text-muted-foreground">
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