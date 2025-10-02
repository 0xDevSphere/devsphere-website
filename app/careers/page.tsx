import Link from "next/link"

export default function CareersPage() {
  return (
    <>
    <section className="relative py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <span>✶</span>
          <span className="text-sm text-white/80">Careers</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Hiring at Devsphere is everything.</h1>

        <div className="mb-8">
          <Link
            href="/"
            className="inline-block rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-white/70 leading-relaxed mb-6">
          The right people in the right teams change everything. That’s why finding, recruiting, and empowering them is one of the highest-leverage things we do.
        </p>

        <p className="text-white/70 leading-relaxed mb-6">
          We’re always on the lookout for exceptional folks, no matter your experience. If you care about what we’re building, we’ll find a spot for you.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">When we meet someone new, we ask:</p>

        <ul className="list-disc list-inside space-y-2 text-white/80 mb-8">
          <li>Are they smarter than us?</li>
          <li>Are they hungrier than us?</li>
          <li>Do they own their life 100%?</li>
          <li>Can they honestly say, “I don’t know”?</li>
        </ul>

        <p className="text-white/70 leading-relaxed mb-4">If that’s you, we want to meet.</p>
        <p className="text-white/70 leading-relaxed">
          Heads up: we only take <span className="font-medium text-white">referrals</span>. Find someone on the team who can vouch for you, chat with them, and that’s where it starts.
        </p>
      </div>
    </section>
    
    {/* Additional Sections */}
    <section className="relative py-6 px-4">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Why DevSphere */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Why DevSphere</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">Build in Public</h3>
              <p className="text-white/70 text-sm">Open source first. Ship fast, learn faster, leave a footprint others can build on.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">Real Impact</h3>
              <p className="text-white/70 text-sm">Hackathons, workshops, and products that reach real users inside RVU and beyond.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">Mentorship</h3>
              <p className="text-white/70 text-sm">Hands-on guidance from peers and industry folks who’ve done it before.</p>
            </div>
          </div>
        </div>

        {/* How referrals work */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">How referrals work</h2>
          <ol className="grid gap-4 md:grid-cols-3 list-none">
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="text-[#e78a53] font-semibold">01</span>
              <h3 className="font-medium mt-2 mb-1">Find a core member</h3>
              <p className="text-white/70 text-sm">Reach out to someone in the core team who knows your work.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="text-[#e78a53] font-semibold">02</span>
              <h3 className="font-medium mt-2 mb-1">Have a conversation</h3>
              <p className="text-white/70 text-sm">Share projects, ambitions, and what you want to build with us.</p>
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-5">
              <span className="text-[#e78a53] font-semibold">03</span>
              <h3 className="font-medium mt-2 mb-1">Get referred</h3>
              <p className="text-white/70 text-sm">If there’s a fit, they’ll refer you internally and we’ll take it forward.</p>
            </li>
          </ol>
        </div>

        {/* Roles we care about */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Roles we care about</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Full‑stack",
              "Smart Contracts",
              "DevRel",
              "Design",
              "Product",
              "Infra/DevOps",
              "AI/Agents",
              "Community",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-medium mb-1">Still interested?</h3>
            <p className="text-white/70 text-sm">If you don’t know anyone yet, start by joining our events and contributing.</p>
          </div>
          <a
            href="mailto:club_devsphere@rvu.edu.in?subject=Referral%20question"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium border border-white/15 bg-[#e78a53] text-white hover:opacity-90 transition-colors"
          >
            Write to us
          </a>
        </div>
      </div>
    </section>
    </>
  )
}


