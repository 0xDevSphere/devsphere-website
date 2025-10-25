import Link from "next/link"

export default function ApprenticeshipPage() {
  return (
    <>
    <section className="relative py-24 px-4">
      {/* Background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[80vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(231,138,83,0.15),transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <span>✶</span>
          <span className="text-sm text-white/80">DevSphere Apprenticeship Program</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
          DevSphere <span className="bg-gradient-to-r from-[#e78a53] via-[#f0b268] to-[#ffd3a6] bg-clip-text text-transparent">Apprenticeship Program</span>
        </h1>
        <p className="text-white/70 mb-4">For those who see learning as creation.</p>

        <div className="mb-8">
          <Link
            href="/"
            className="inline-block rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-white/70 leading-relaxed mb-6">
          The DevSphere Apprenticeship Program is where you get to shine, learn, and make a real impact.
        </p>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 mb-8">
          <p className="text-white/80 font-medium">Members of DevSphere can apply to become apprentices, and if selected, you'll get —</p>
          <ul className="list-disc list-inside space-y-2 text-white/80 mt-4">
            <li><span className="font-medium">One on one mentorship</span> from core members of the club.</li>
            <li>The opportunity to work on exciting, real-world tasks tailored to your skills.</li>
            <li>Points for every task you complete, with top contributors featured on our socials every month.</li>
          </ul>
        </div>

        
      </div>
    </section>

    <section className="relative py-6 px-4">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Narrative Intro */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">For those who see learning as creation.</h2>
          <p className="text-white/70 leading-relaxed">At DevSphere, we believe the best way to learn is to build. The Apprenticeship Program is not a course. It is not a club role. It is a journey where you take ideas and turn them into something real.</p>
          <p className="text-white/70 leading-relaxed">We created this program for people who are curious, driven, and restless. People who want to shape things with their own hands. People who are not waiting for permission to start.</p>
        </div>

        {/* What You Get */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What You Get as an Apprentice</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">1. Mentorship that changes you</h3>
              <p className="text-white/70 text-sm">You will work closely with core members who care deeply about your growth. They will guide you, challenge you, and expect the best from you. You will learn how to think, not just what to do.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">2. Real work that matters</h3>
              <p className="text-white/70 text-sm">You will take on projects that have impact. You will write code, design visuals, tell stories, build systems. You will see your work live in front of people and make a difference.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">3. Recognition for what you create</h3>
              <p className="text-white/70 text-sm">Every task you complete earns you points. The best contributors are celebrated every month. We tell your story to the community because great work deserves to be seen.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">4. A path to leadership</h3>
              <p className="text-white/70 text-sm">After three months of consistent effort, you can apply to join the DevSphere core team. You will lead projects, mentor new apprentices, and shape the culture of the club. This is where builders become leaders.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-2">5. A community that believes in you</h3>
              <p className="text-white/70 text-sm">You will join a circle of learners who dream big and build together. Here, everyone is both a student and a teacher. We learn from each other, push each other, and grow together.</p>
            </div>
          </div>
        </div>

        {/* Expectations */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What We Expect from You</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-1">Show Up</h3>
              <p className="text-white/70 text-sm">Be present. Be consistent. Do the work even when it is hard.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-1">Collaborate</h3>
              <p className="text-white/70 text-sm">Learn from others. Share what you know. Building together is always better than building alone.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-1">Stay Curious</h3>
              <p className="text-white/70 text-sm">Ask questions. Try new things. Curiosity is the fuel for creativity.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-1">Lead by Action</h3>
              <p className="text-white/70 text-sm">Do not wait to be told what to do. Start. Build. Fix. Improve. Inspire.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-1">Own Your Journey</h3>
              <p className="text-white/70 text-sm">What you get from this program depends on what you give. You decide how far you go.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-medium mb-1">Don't Be Afraid to Make Mistakes</h3>
              <p className="text-white/70 text-sm">Experiment boldly. Mistakes are data — reflect, iterate, and improve.</p>
            </div>
          </div>
        </div>

        {/* Why Join */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why You Should Join</h2>
          <p className="text-white/70 leading-relaxed">Because the future is built by people who care. People who show up when others wait. People who build before they are ready.</p>
          <p className="text-white/70 leading-relaxed">The DevSphere Apprenticeship Program is your chance to prove to yourself that you can do it. You will learn faster than ever. You will meet people who change how you think. You will discover the thrill of creating something that did not exist before.</p>
          <p className="text-white/70 leading-relaxed">If you have the fire to learn and the courage to start, this is your moment.</p>
        </div>

        {/* Apply CTA */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-medium mb-1">How to Apply</h3>
            <p className="text-white/70 text-sm">Fill out the Apprenticeship Recruitment Form. Tell us about your skills, your interests, and what drives you. You only need curiosity, honesty, and commitment.</p>
          </div>
          <a
            href="https://forms.gle/4Hq9kaw7LiDNEE9D6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium border border-white/15 bg-[#e78a53] text-white hover:opacity-90 transition-colors"
          >
            Apply
          </a>
        </div>

        <p className="text-center text-white/60 text-sm">The journey begins the moment you decide to start.</p>
      </div>
    </section>
    </>
  )
}


