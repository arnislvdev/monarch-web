import { motion } from "motion/react"
import { RiDownload2Fill, RiArrowRightUpLine } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { GradientBackground } from "@/components/gradient-background"
import { IconLogo, TextLogo } from "@/components/brand"
import { Spinner } from "@/components/ui/spinner"

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6">
      <GradientBackground
        gradientColors={[
          "transparent",
          "#312887",
          "#3D5AFE",
          "#FF80AB",
          "#FF6D00",
          "#F7B855",
          "#00E676",
        ]}
        gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        animationSpeed={0.02}
        breathingRange={3}
      />

      <motion.div
        className="relative z-10 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
        >
          <IconLogo size="xl" />
        </motion.div>
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <TextLogo size="xl" />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 mt-16 flex items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        <Button size="xl">
          <RiDownload2Fill data-icon="inline-start" />
          Download for Windows
        </Button>
        <Button size="xl" variant="outline">
          Learn more
          <RiArrowRightUpLine data-icon="inline-end" />
        </Button>
        <Button size="xl" variant="outline" disabled>
          <Spinner data-icon="inline-start" />
          fetching
        </Button>
      </motion.div>
    </section>
  )
}