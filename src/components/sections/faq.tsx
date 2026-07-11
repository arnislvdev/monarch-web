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
      "Yes. Monarch is free to download and use. It's currently in beta, so expect the occasional rough edge — updates ship regularly.",
  },
  {
    question: "What do I need to run it?",
    answer:
      "A 64-bit Windows 10 or 11 PC. Everything else — player, reader, tracking — is built into the app; there's nothing extra to install.",
  },
  {
    question: "Windows warned me about an unrecognized app. Is that normal?",
    answer:
      "Yes. The installer isn't code-signed yet, so Windows SmartScreen may show a warning on first run. Click “More info” and then “Run anyway”. Only do this for installers downloaded from this site.",
  },
  {
    question: "Where does the content come from?",
    answer:
      "Monarch doesn't host or distribute any media. It's a client: it finds content through public sources and extensions you choose to install, and pulls metadata and artwork from services like AniList. You're responsible for making sure your sources are legal where you live.",
  },
  {
    question: "Do I need an AniList account?",
    answer:
      "No. You can skip sign-in and use Monarch on its own. Signing in unlocks syncing — your lists show up in the library, and progress writes back to your AniList profile automatically.",
  },
  {
    question: "How do updates work?",
    answer:
      "Monarch checks for new releases and lets you update from inside the app, with release notes shown in a “What's New” dialog after each update.",
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
