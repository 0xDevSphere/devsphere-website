"use client"

import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import { useMemo } from "react"

type Particle = {
  id: number
  leftPct: number
  topPct: number
  width: number
  height: number
  hue: number
  duration: number
  delay: number
  driftX: number
  lift: number
  spin: number
}

function makeParticles(count: number): Particle[] {
  const hues = [24, 38, 200, 270, 320]
  return Array.from({ length: count }, (_, id) => ({
    id,
    leftPct: 35 + Math.random() * 30,
    topPct: 42 + Math.random() * 18,
    width: 5 + Math.random() * 6,
    height: 8 + Math.random() * 10,
    hue: hues[id % hues.length] + Math.random() * 18,
    duration: 1.35 + Math.random() * 0.85,
    delay: Math.random() * 0.15,
    driftX: (Math.random() - 0.5) * 520,
    lift: 320 + Math.random() * 240,
    spin: (Math.random() > 0.5 ? 1 : -1) * (540 + Math.random() * 360),
  }))
}

export function JoinConfetti({ fire }: { fire: boolean }) {
  const particles = useMemo(() => makeParticles(80), [])

  if (typeof document === "undefined" || !fire) return null

  return createPortal(
    <div
      className="pointer-events-none fixed inset-0 z-[200] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-[2px] shadow-sm"
          style={{
            left: `${p.leftPct}%`,
            top: `${p.topPct}%`,
            width: p.width,
            height: p.height,
            background: `linear-gradient(180deg, hsla(${p.hue}, 85%, 62%, 1), hsla(${p.hue}, 70%, 45%, 0.95))`,
          }}
          initial={{ y: 0, x: 0, opacity: 1, rotate: 0, scale: 1 }}
          animate={{
            y: -p.lift,
            x: p.driftX,
            opacity: [1, 1, 0],
            rotate: p.spin,
            scale: [1, 1.1, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-[46%] h-40 w-40 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: [0.2, 1.4, 1], opacity: [0, 0.9, 0] }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      />
    </div>,
    document.body,
  )
}
