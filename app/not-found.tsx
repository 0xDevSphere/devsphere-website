"use client"

import Link from "next/link"
import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"

function MeshGradientSVG({ turbo, hatOn, onToggleHat }: { turbo: boolean; hatOn: boolean; onToggleHat: () => void }) {
  const colors = useMemo(
    () =>
      turbo
        ? ["#FF5E5B", "#FFE066", "#2EC4B6", "#5E60CE", "#FF006E"]
        : ["#FFB3D9", "#87CEEB", "#4A90E2", "#2C3E50", "#1A1A2E"],
    [turbo]
  )
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const rect = document.querySelector("svg")?.getBoundingClientRect()
    if (rect) {
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (mousePosition.x - centerX) * 0.08
      const deltaY = (mousePosition.y - centerY) * 0.08
      const maxOffset = 8
      setEyeOffset({
        x: Math.max(-maxOffset, Math.min(maxOffset, deltaX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, deltaY)),
      })
    }
  }, [mousePosition])

  return (
    <motion.div
      className="relative w-full max-w-[200px] sm:max-w-xs mx-auto p-4 rounded-lg cursor-pointer select-none"
      animate={{ y: [0, -8, 0], scaleY: [1, 1.08, 1], rotate: turbo ? [0, 3, -3, 0] : 0 }}
      transition={{ duration: turbo ? 1.6 : 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      style={{ transformOrigin: "top center" }}
      onClick={onToggleHat}
      title={hatOn ? "Click to remove the party hat" : "Click to give them a party hat"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="231" height="289" viewBox="0 0 231 289" className="w-full h-auto">
        <defs>
          <clipPath id="shapeClip">
            <path d="M230.809 115.385V249.411C230.809 269.923 214.985 287.282 194.495 288.411C184.544 288.949 175.364 285.718 168.26 280C159.746 273.154 147.769 273.461 139.178 280.23C132.638 285.384 124.381 288.462 115.379 288.462C106.377 288.462 98.1451 285.384 91.6055 280.23C82.912 273.385 70.9353 273.385 62.2415 280.23C55.7532 285.334 47.598 288.411 38.7246 288.462C17.4132 288.615 0 270.667 0 249.359V115.385C0 51.6667 51.6756 0 115.404 0C179.134 0 230.809 51.6667 230.809 115.385Z" />
          </clipPath>
        </defs>
        <foreignObject width="231" height="289" clipPath="url(#shapeClip)">
          <div className="w-full h-full">
            <MeshGradient colors={colors} className="w-full h-full" speed={turbo ? 2 : 1} />
          </div>
        </foreignObject>
        <motion.ellipse rx="20" ry="30" fill="currentColor" className="animate-blink" animate={{ cx: 80 + eyeOffset.x, cy: 120 + eyeOffset.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }} />
        <motion.ellipse rx="20" ry="30" fill="currentColor" className="animate-blink" animate={{ cx: 150 + eyeOffset.x, cy: 120 + eyeOffset.y }} transition={{ type: "spring", stiffness: 150, damping: 15 }} />
        {hatOn && (
          <g>
            <polygon points="115,40 95,85 135,85" fill="#FF5E5B" />
            <rect x="100" y="85" width="30" height="6" rx="3" fill="#2C3E50" />
          </g>
        )}
      </svg>
      <style jsx>{`
        .animate-blink { animation: blink 3s infinite ease-in-out; }
        @keyframes blink { 0%, 90%, 100% { ry: 30; } 95% { ry: 3; } }
      `}</style>
    </motion.div>
  )
}

export default function NotFound() {
  const [turbo, setTurbo] = useState(false)
  const [hatOn, setHatOn] = useState(false)
  const [excuseIndex, setExcuseIndex] = useState(0)
  const konamiIndex = useRef(0)
  const konami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  const excuses = [
    "We hid it behind a feature flag called ‘mystery’.",
    "The page went to get snacks. It’ll be right back. Probably.",
    "404? More like 4-oh-fun. Not this one, though.",
    "An intern refactored it into the void.",
    "It passed code review and then eloped with /about.",
    "Our mesh blinked and reality desynced for a bit.",
  ]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key
      if (key === konami[konamiIndex.current]) {
        konamiIndex.current += 1
        if (konamiIndex.current === konami.length) {
          setTurbo((t) => !t)
          konamiIndex.current = 0
        }
      } else {
        konamiIndex.current = 0
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center gap-6 text-center px-6">
      <MeshGradientSVG turbo={turbo} hatOn={hatOn} onToggleHat={() => setHatOn((v) => !v)} />
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">404 — We misplaced that page</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">{excuses[excuseIndex % excuses.length]}</p>
        {turbo ? (
          <p className="text-xs text-primary/80">Konami unlocked! Turbo mesh engaged. Press the code again to chill.</p>
        ) : (
          <p className="text-xs text-muted-foreground/70">Hint: Up, Up, Down, Down, Left, Right, Left, Right, B, A</p>
        )}
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setExcuseIndex((i) => i + 1)}
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent transition"
        >
          Another excuse
        </button>
        <Link href="/" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">Go home</Link>
      </div>
    </div>
  )
}


