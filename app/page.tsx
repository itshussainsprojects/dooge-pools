import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ScrollTriggerButton } from "@/components/scroll-trigger-button"
import { AnimatedCursor } from "@/components/animated-cursor"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="min-h-screen bg-transparent cursor-none">
      <AnimatedCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <ScrollTriggerButton />
      <WhatsAppButton />
    </main>
  )
}
