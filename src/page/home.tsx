import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Showcase } from "@/components/sections/showcase"
import { Faq } from "@/components/sections/faq"
import { Disclaimer } from "@/components/sections/disclaimer"

export function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Showcase />
      <Faq />
      <Disclaimer />
    </>
  )
}