import { Navbar } from "@/components/navbar"

export const metadata = {
  title: "Scam Warning | DevSphere",
  description: "Stay safe from scams impersonating DevSphere and asking for money.",
}

export default function ScamWarningPage() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="inline-block size-2 rounded-full bg-red-500/80" aria-hidden />
            Security Advisory
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">Scam Warning</h1>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">Stay safe from impersonation and payment scams.</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="rounded-3xl border border-border bg-card/40 backdrop-blur-sm p-6 md:p-8">
          {/* Top notice */}
          <div className="mb-6 flex items-start gap-3 text-red-200">
            <svg className="mt-0.5 size-5 shrink-0 text-red-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            <p className="text-sm leading-6">We have received reports of individuals impersonating DevSphere and requesting payments or personal information. DevSphere will never DM you to ask for money, payments via WhatsApp/UPI, or confidential data.</p>
          </div>

          {/* Official channels highlight */}
          <div className="mb-8 rounded-2xl border border-border/60 bg-background/60 p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Official website</p>
                <p className="font-mono text-sm md:text-base text-foreground">0xdevsphere.vercel.app</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Official email</p>
                <p className="font-mono text-sm md:text-base text-foreground">club_devsphere@rvu.edu.in</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-foreground">How to verify official communication</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Official website: <span className="font-mono text-foreground">0xdevsphere.vercel.app</span></li>
                <li>Official email: club_devsphere@rvu.edu.in</li>
                <li>No payment requests via DMs, WhatsApp, Telegram, or personal UPI.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Red flags to watch for</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Urgent requests for money, gift cards, or UPI transfers.</li>
                <li>Promises of guaranteed membership, jobs, or rewards for fees.</li>
                <li>Accounts with misspelled names or new profiles.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-foreground">What to do if contacted</h2>
              <ol className="mt-3 space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-red-500/15 text-red-300">1</span>
                  Do not pay or share personal information.
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-red-500/15 text-red-300">2</span>
                  Take screenshots and the profile link of the scammer.
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-red-500/15 text-red-300">3</span>
                  Report the account on the platform.
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-red-500/15 text-red-300">4</span>
                  Let us know via our email <span className="font-mono text-foreground">club_devsphere@rvu.edu.in</span>.
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Payments and membership</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Any legitimate payments for DevSphere will only be processed through official links on this website. If you are unsure about a request, assume it is fraudulent and verify via the contact methods listed here.</p>
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="mailto:club_devsphere@rvu.edu.in?subject=Report%20Scam%20-%20DevSphere" className="inline-flex items-center justify-center rounded-md border border-border bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background/90">
              Report a scam
            </a>
          </div>

          <hr className="my-8 border-border/60" />
          <p className="text-xs leading-6 text-muted-foreground">
            DevSphere will not be responsible or liable for any loss or damage (direct or indirect) suffered by anyone due to the use of or dealings with any fake/fraudulent website(s), or by dealing with individuals impersonating DevSphere or its representatives.
          </p>
        </div>
      </section>

      {/* No footer on this page */}
    </div>
  )
}


