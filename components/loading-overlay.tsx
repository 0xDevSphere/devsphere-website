"use client"
import { useEffect, useState } from "react"

export function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHiding, setIsHiding] = useState(false)

  useEffect(() => {
    let hideTimeout: number | undefined
    const complete = () => {
      setIsHiding(true)
      hideTimeout = window.setTimeout(() => setIsVisible(false), 400)
    }

    if (document.readyState === "complete") {
      complete()
    } else {
      window.addEventListener("load", complete, { once: true })
      // Fallback in case 'load' delays or misses
      const fallback = window.setTimeout(complete, 4000)
      return () => {
        window.removeEventListener("load", complete)
        window.clearTimeout(fallback)
        if (hideTimeout) window.clearTimeout(hideTimeout)
      }
    }

    return () => {
      if (hideTimeout) window.clearTimeout(hideTimeout)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-400 ${
        isHiding ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-rose-500/30 to-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-cyan-500/30 to-emerald-500/20 blur-3xl animate-pulse" />
      </div>

      {/* Subtle grid dots background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "18px 18px", color: "#ffffff" }} />
      </div>

      <div className={`relative flex flex-col items-center justify-center gap-6 transition-transform duration-400 ${isHiding ? "scale-95" : "scale-100"}`}>
        {/* Spinner with glow */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
          <div className="absolute inset-0 rounded-full border-4 border-primary/25" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          {/* Inner pulse */}
          <div className="absolute inset-3 rounded-full bg-primary/30 animate-ping" />
        </div>

        {/* Bouncing dots activity */}
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-white/70 animate-bounce" style={{ animationDelay: "120ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "240ms" }} />
        </div>

        {/* Copy with subtle shimmer effect via gradient mask */}
        <div className="relative text-center">
          <p className="text-white/90 text-sm tracking-[0.2em] uppercase">
            Preparing experience
            <span className="mx-1">·</span>
            almost there
          </p>
        </div>

        {/* Tiny floating sparkles */}
        <div className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="h-1 w-1 rounded-full bg-white/70 animate-ping" />
          <span className="h-1 w-1 rounded-full bg-white/70 animate-ping" style={{ animationDelay: "200ms" }} />
          <span className="h-1 w-1 rounded-full bg-white/70 animate-ping" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </div>
  )
}


