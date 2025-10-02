"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface CardHoverEffectProps {
  title: string
  description: string
  icon: ReactNode
  variant: string
  glowEffect?: boolean
  size?: "sm" | "md" | "lg"
  showGridLines?: boolean
}

export function CardHoverEffect({
  title,
  description,
  icon,
  variant,
  glowEffect = false,
  size = "md",
  showGridLines = false,
}: CardHoverEffectProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-card p-6 will-change-transform will-change-opacity",
        // keep border color change snappy without heavy shadows
        variant === "rose" && "border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700",
        size === "lg" && "p-8",
        // avoid box-shadow during hover; use lightweight radial glow layer instead
      )}
    >
      {showGridLines && (
        <div className="pointer-events-none absolute inset-0 bg-grid-small-black/[0.12] dark:bg-grid-small-white/[0.12]" />
      )}

      {/* Lightweight GPU-friendly glow layer for hover */}
      {glowEffect && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-12 opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(231,138,83,0.28) 0%, rgba(231,138,83,0.18) 35%, rgba(231,138,83,0.00) 70%)",
            filter: "saturate(110%)",
          }}
        />
      )}
      <div className="relative z-10 transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
        <div className="mb-4 h-8 w-8 text-rose-600">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
