import { motion } from "motion/react"
import { RiDownload2Fill } from "@remixicon/react"

import { Button } from "@/components/ui/button"
import { GradientBackground } from "@/components/gradient-background"
import { IconLogo, TextLogo } from "@/components/brand"
import { downloadUrl, useLatestRelease } from "@/hooks/use-latest-release"

export function Hero() {
  const release = useLatestRelease()

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

      <motion.p
        className="relative z-10 mt-6 max-w-md text-center text-muted-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
      >
        A modular anime &amp; manga desktop client for Windows.
      </motion.p>

      <motion.div
        className="relative z-10 mt-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        <Button
          size="xl"
          loading={release.status === "loading"}
          disabled={release.status === "error"}
          render={
            release.status === "ready" ? (
              <a href={downloadUrl("amd64")} download />
            ) : undefined
          }
        >
          <RiDownload2Fill data-icon="inline-start" />
          {release.status === "ready"
            ? `Download for Windows (${release.release.version})`
            : release.status === "error"
              ? "Download unavailable"
              : "Download for Windows"}
        </Button>
        {release.status === "ready" && release.release.installers.arm64 && (
          <Button
            size="sm"
            variant="link"
            className="mt-2 text-muted-foreground"
            render={<a href={downloadUrl("arm64")} download />}
          >
            Also available for Windows on ARM (arm64)
          </Button>
        )}
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Free &middot; In beta &middot; Windows 10/11,{" "}
          {release.status === "ready" && release.release.installers.arm64
            ? "x64 & ARM64"
            : "64-bit"}
        </p>
      </motion.div>
    </section>
  )
}