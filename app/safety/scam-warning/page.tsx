import { Navbar } from "@/components/navbar"
import { StickyFooter } from "@/components/sticky-footer"

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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Scam Warning</h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">Stay safe from impersonation and payment scams.</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 pb-24 md:pb-32">
        <div className="rounded-3xl border border-border bg-card/40 backdrop-blur-sm p-6 md:p-8">
          <div className="mb-6 flex items-start gap-3 text-red-200">
            <svg className="mt-0.5 size-5 shrink-0 text-red-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
            <p className="text-sm leading-6">We have received reports of individuals impersonating DevSphere and requesting payments or personal information. DevSphere will never DM you to ask for money, payments via WhatsApp/UPI, or confidential data.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-foreground">How to verify official communication</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Official website: <span className="font-mono text-foreground">0xdevsphere.vercel.app</span> or links on this site.</li>
                <li>Official email: messages from our official email listed on this site.</li>
                <li>No payment requests via DMs, WhatsApp, Telegram, or personal UPI.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Red flags to watch for</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Urgent requests for money, gift cards, or UPI transfers.</li>
                <li>Promises of guaranteed membership, jobs, or rewards for fees.</li>
                <li>Accounts with misspelled names, few followers, or new profiles.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-foreground">What to do if contacted</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Do not pay or share personal information.</li>
                <li>Take screenshots and the profile link of the scammer.</li>
                <li>Report the account on the platform and to local cybercrime authorities.</li>
                <li>Let us know via the official channels listed on this site.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">Payments and membership</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Any legitimate payments for DevSphere will only be processed through official links on this website. If you are unsure about a request, assume it is fraudulent and verify via the contact methods listed here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer and Footer */}
      <div className="h-32 md:h-56" />
      <StickyFooter />
    </div>
  )
}


