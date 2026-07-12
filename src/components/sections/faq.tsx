import { motion } from "motion/react"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Monarch free?",
    answer:
      "Yes, completely. It's free to download and use. Just keep in mind that it's currently in beta, so you might run into a few rough edges as updates roll out.",
  },
  {
    question: "What do I need to run it?",
    answer:
      "Just a Windows 10 or 11 PC — both regular (x64) and Windows on ARM devices are supported, each with a native installer. The media player, manga reader, and tracking features are all built right in, so you won't need to install any extra software.",
  },
  {
    question: "Windows warned me about an 'unrecognized app.' Is that normal?",
    answer:
      "Yes, this is normal for new software. Because the installer isn't code-signed yet, Windows SmartScreen might flag it. You can safely bypass this by clicking 'More info' and then 'Run anyway'—just make sure you only download the app from this official site.",
  },
  {
    question: "Where does the content come from?",
    answer:
      "Monarch doesn't host or provide any media itself. It acts as a client that streams content through public sources and the extensions you choose to add. Metadata and cover art are pulled from services like AniList.",
  },
  {
    question: "Do I need an AniList account?",
    answer:
      "Not at all. You can use Monarch entirely offline or as a standalone app. However, signing in with AniList lets you sync your library and automatically update your progress as you watch or read.",
  },
  {
    question: "How do updates work?",
    answer:
      "Monarch checks for updates automatically. When a new version is ready, you can install it directly from inside the app and view the latest changes in the 'What's New' window.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.p
          className="text-sm font-medium text-primary"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Good to know
        </motion.p>
        <motion.h2
          className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Questions you'd ask before installing.
        </motion.h2>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionPanel>{faq.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
