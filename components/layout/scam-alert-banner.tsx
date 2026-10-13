"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ScamAlertBanner() {
  return (
    <div role="alert" aria-label="Scam caution notice" className="relative z-10 mx-auto my-12 w-full max-w-4xl rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-200 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-red-500/10">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <svg className="mt-0.5 size-5 shrink-0 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <p className="text-sm leading-6">
            <span className="font-semibold text-red-300">Caution:</span> We’ve been alerted to scams impersonating DevSphere and asking for money. DevSphere never solicits payments via DMs, WhatsApp, or personal UPI. Verify information only on <span className="font-mono text-red-100">0xdevsphere.vercel.app</span>.
          </p>
        </div>
        <div className="shrink-0">
          <Link href="/safety/scam-warning" aria-label="Learn more about scam warnings">
            <Button variant="outline" className="border-red-500/40 text-red-200 hover:bg-red-500/10 hover:text-red-100">
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ScamAlertBanner


