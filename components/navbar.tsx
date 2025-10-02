"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const aboutCloseTimerRef = useRef<number | null>(null)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (aboutCloseTimerRef.current) {
        clearTimeout(aboutCloseTimerRef.current)
      }
    }
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{ willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden", perspective: "1000px" }}
      >
        <Link
          href="/"
          onClick={scrollToTop}
          className={`z-50 flex items-center gap-2 transition-all duration-300 cursor-pointer ${isScrolled ? "ml-4" : ""}`}
          aria-label="Go home"
        >
          <Image src="/devsphereLogo.png" alt="DevSphere Logo" width={24} height={24} sizes="24px" className="rounded-full" />
          <span className="text-lg font-semibold text-foreground">DevSphere</span>
        </Link>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a href="/#features" className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <span className="relative z-20">Why Join?</span>
          </a>
          <a href="/#membership" className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <span className="relative z-20">Membership</span>
          </a>
          <a href="/#testimonials" className="relative px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <span className="relative z-20">Testimonials</span>
          </a>
           <div
             className="relative"
             onMouseEnter={() => {
               if (aboutCloseTimerRef.current) clearTimeout(aboutCloseTimerRef.current)
               setIsAboutOpen(true)
             }}
             onMouseLeave={() => {
               if (aboutCloseTimerRef.current) clearTimeout(aboutCloseTimerRef.current)
               aboutCloseTimerRef.current = window.setTimeout(() => setIsAboutOpen(false), 1000)
             }}
           >
             <button className="relative flex items-center gap-1 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
               <span className="relative z-20">About</span>
               <svg
                 className={`size-4 text-muted-foreground transition-transform duration-200 ${isAboutOpen ? "rotate-180" : ""}`}
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="2"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 aria-hidden="true"
               >
                 <path d="m6 9 6 6 6-6" />
               </svg>
             </button>
             <div
               className={`absolute left-0 top-full mt-2 w-[220px] rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl ring-1 ring-border/40 transition-all duration-200 ${
                 isAboutOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-1 scale-95 pointer-events-none"
               }`}
             >
               <div className="p-2">
                 <Link href="/core-team" className="block rounded-lg px-3 py-2 hover:bg-background/70 hover:text-foreground transition-colors">
                   <div className="flex items-center gap-2">
                     <span className="text-sm font-medium">Team</span>
                     <span className="ml-auto text-xs text-muted-foreground">Meet us</span>
                   </div>
                 </Link>
                 <Link href="/#faq" className="mt-1 block rounded-lg px-3 py-2 hover:bg-background/70 hover:text-foreground transition-colors">
                   <div className="flex items-center gap-2">
                     <span className="text-sm font-medium">FAQ</span>
                     <span className="ml-auto text-xs text-muted-foreground">Get answers</span>
                   </div>
                 </Link>
               </div>
             </div>
           </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://chat.whatsapp.com/Fhvp7ZQvdHo4sdIr1GglAY"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
          >
            Join DevSphere
          </a>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <Link href="/" onClick={scrollToTop} className="flex items-center gap-2 cursor-pointer" aria-label="Go home">
          <Image src="/devsphereLogo.png" alt="DevSphere Logo" width={24} height={24} sizes="24px" className="rounded-full" />
          <span className="text-base font-semibold text-foreground">DevSphere</span>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/#features" className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
              <Link href="/#membership" className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50" onClick={() => setIsMobileMenuOpen(false)}>
                Membership
              </Link>
              <Link href="/#testimonials" className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <div className="rounded-xl border border-border/50 p-2">
                <div className="px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground/80">About</div>
                <Link href="/core-team" className="block rounded-lg px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-background/50" onClick={() => setIsMobileMenuOpen(false)}>
                  Team
                </Link>
                <Link href="/#faq" className="block rounded-lg px-4 py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-background/50" onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
                </Link>
              </div>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <a
                  href="https://chat.whatsapp.com/Fhvp7ZQvdHo4sdIr1GglAY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-lg font-bold text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Join DevSphere
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}


