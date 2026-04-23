import { NextResponse } from "next/server"
import { joinApplicationSchema } from "@/lib/join-application-schema"

type AppsScriptResponse = {
  ok?: boolean
  message?: string
}

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const rateLimitStore = new Map<string, number[]>()

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown"
  return request.headers.get("x-real-ip") ?? "unknown"
}

function getRateLimitStatus(ip: string) {
  const now = Date.now()
  const recentHits = (rateLimitStore.get(ip) ?? []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)
  if (recentHits.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = recentHits[0] ?? now
    const retryAfterSeconds = Math.max(1, Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 1000))
    rateLimitStore.set(ip, recentHits)
    return { limited: true, retryAfterSeconds }
  }

  recentHits.push(now)
  rateLimitStore.set(ip, recentHits)
  return { limited: false, retryAfterSeconds: 0 }
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    const limitStatus = getRateLimitStatus(ip)
    if (limitStatus.limited) {
      return NextResponse.json(
        {
          ok: false,
          message: `Too many attempts. Please try again in about ${limitStatus.retryAfterSeconds} seconds.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(limitStatus.retryAfterSeconds),
          },
        },
      )
    }

    const json = await request.json()
    const honeypot = typeof json?.honeypot === "string" ? json.honeypot.trim() : ""
    if (honeypot.length > 0) {
      return NextResponse.json({
        ok: true,
        message: "Application submitted successfully.",
      })
    }

    const formStartedAt = Number(json?.formStartedAt)
    if (!Number.isFinite(formStartedAt) || Date.now() - formStartedAt < 3000) {
      return NextResponse.json(
        {
          ok: false,
          message: "Submission rejected. Please complete the form normally and try again.",
        },
        { status: 400 },
      )
    }

    const parsed = joinApplicationSchema.safeParse(json)

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      )
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
    const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET
    if (!webhookUrl || !webhookSecret) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "GOOGLE_SHEETS_WEBHOOK_URL or GOOGLE_SHEETS_WEBHOOK_SECRET is missing.",
        },
        { status: 500 },
      )
    }

    const payload = {
      ...parsed.data,
      webhookSecret,
      submittedAt: new Date().toISOString(),
      source: "devsphere-website/join",
    }

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    })

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "Google Sheets webhook rejected the request.",
        },
        { status: 502 },
      )
    }

    let webhookBody: AppsScriptResponse | null = null
    try {
      webhookBody = (await webhookResponse.json()) as AppsScriptResponse
    } catch {
      webhookBody = null
    }

    return NextResponse.json({
      ok: true,
      message: webhookBody?.message ?? "Application submitted successfully.",
    })
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Unexpected error while submitting your application.",
      },
      { status: 500 },
    )
  }
}
