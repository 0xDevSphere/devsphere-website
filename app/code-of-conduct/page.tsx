import Link from "next/link"

export const metadata = {
  title: "Code of Conduct | DevSphere",
  description:
    "DevSphere Code of Conduct: a safe, welcoming, and inclusive community for learning, building and collaborating.",
}

export default function CodeOfConductPage() {
  return (
    <section className="relative py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <span>✶</span>
          <span className="text-sm text-white/80">Code of Conduct</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">DevSphere Code of Conduct</h1>

        <div className="mb-8">
          <Link
            href="/"
            className="inline-block rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-white/70 leading-relaxed mb-4">
          DevSphere is the Open Source and Web 3.0 Club of RV University. We are committed to a safe, inclusive, and
          collaborative environment where everyone can learn, build, and grow—irrespective of background, experience, or identity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Our Pledge</h2>
        <p className="text-white/70 leading-relaxed">
          We pledge to make participation in our community a harassment-free experience for everyone, regardless of age,
          body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal
          appearance, race, religion, or sexual identity and orientation.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Expected Behavior</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>Be respectful, empathetic, and kind. Assume good intent; disagree constructively.</li>
          <li>Use inclusive language. Welcome new members and help them get started.</li>
          <li>Share knowledge openly. Credit others for their work and ideas.</li>
          <li>Follow event and venue rules. Keep discussions on-topic in designated channels.</li>
          <li>Protect privacy. Do not share private information without consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Unacceptable Behavior</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80">
          <li>Harassment, discrimination, or hate speech of any kind.</li>
          <li>Violent threats, intimidation, or stalking (online or in-person).</li>
          <li>Unwelcome sexual attention or advances.</li>
          <li>Disruptive behavior in events, workshops, or community spaces.</li>
          <li>Doxxing or unauthorized sharing of private information.</li>
          <li>Plagiarism or academic dishonesty in projects and submissions.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Reporting and Enforcement</h2>
        <p className="text-white/70 leading-relaxed mb-2">
          If you experience or witness unacceptable behavior, please report it as soon as possible. You can contact the
          core team at <a className="underline" href="mailto:club_devsphere@rvu.edu.in?subject=Code%20of%20Conduct%20Report">club_devsphere@rvu.edu.in</a>.
        </p>
        <p className="text-white/70 leading-relaxed mb-4">
          Reports will be handled confidentially. Violations may result in warnings, temporary bans, or permanent
          removal from events and online spaces, at the discretion of the organizers.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Scope</h2>
        <p className="text-white/70 leading-relaxed">
          This Code applies to all DevSphere spaces—online and offline—including WhatsApp, GitHub orgs, workshops,
          hackathons, meetups, and any events or projects under the DevSphere umbrella.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Attribution</h2>
        <p className="text-white/70 leading-relaxed">
          Portions of this Code are inspired by widely adopted community guidelines such as the Contributor Covenant and
          other open community codes. We review and iterate this document over time.
        </p>
      </div>
    </section>
  )
}


