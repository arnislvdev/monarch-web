import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Showcase } from "@/components/sections/showcase"
import { Disclaimer } from "@/components/sections/disclaimer"

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <Disclaimer />
    </>
  )
}