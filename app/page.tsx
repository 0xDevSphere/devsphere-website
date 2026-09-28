"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Hero from "@/components/sections/hero"
import dynamic from "next/dynamic"
const Features = dynamic(() => import("@/components/sections/features"), {
  ssr: false,
  loading: () => (
    <section className="relative py-12 sm:py-24 md:py-32">
      <div className="container mx-auto">
        <div className="h-72 w-full rounded-2xl border border-border/40 bg-background/40 animate-pulse" />
      </div>
    </section>
  ),
})
import { TestimonialsSection } from "@/components/sections/testimonials"
import { NewReleasePromo } from "@/components/sections/new-release-promo"
import { FAQSection } from "@/components/sections/faq-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { StickyFooter } from "@/components/layout/sticky-footer"
import { Navbar } from "@/components/layout/navbar"
import ScamAlertBanner from "@/components/layout/scam-alert-banner"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const element = document.getElementById(elementId)
      if (element) {
        const headerOffset = 120 // Account for sticky header height + margin
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Pearl Mist Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Membership Section */}
      <div id="membership">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <NewReleasePromo />

      {/* Scam Alert Banner placed after feature promo and before FAQ */}
      <ScamAlertBanner />

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  )
}
