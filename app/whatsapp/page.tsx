import Link from "next/link"

export const metadata = {
  title: "WhatsApp Group Rules | DevSphere",
  description:
    "Guidelines and rules for participating in DevSphere WhatsApp community groups. Learn how to communicate effectively and maintain a productive environment.",
}

export default function WhatsAppRulesPage() {
  return (
    <section className="relative py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
          <span>✶</span>
          <span className="text-sm text-white/80">WhatsApp Guidelines</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          DevSphere WhatsApp Group Rules
        </h1>

        <div className="mb-8">
          <Link
            href="/"
            className="inline-block rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <p className="text-white/70 leading-relaxed mb-4">
          Welcome to the DevSphere WhatsApp community! These guidelines ensure our groups remain productive,
          respectful, and valuable for all members. By joining, you agree to follow these rules.
        </p>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-8">
          <p className="text-amber-200/90 text-sm leading-relaxed">
            <strong>Important:</strong> Violation of these rules may result in warnings, removal from the group,
            or being blocked from future DevSphere activities. Please read carefully and respect the community.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">General Communication Guidelines</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
          <li>
            <strong>Stay on topic:</strong> Keep discussions relevant to technology, development, open source,
            and DevSphere activities. Off-topic conversations should be minimal.
          </li>
          <li>
            <strong>Be respectful:</strong> Treat all members with respect. No discrimination, hate speech,
            personal attacks, or offensive language of any kind.
          </li>
          <li>
            <strong>Think before you send:</strong> Ensure your message adds value to the conversation.
            Avoid sending messages that can be answered with a simple Google search.
          </li>
          <li>
            <strong>No spam:</strong> Do not send unnecessary forwards.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Strictly Prohibited Content</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
          <li>
            <strong>No promotional content:</strong> Do not advertise products, services, courses, or referral
            links without prior approval from admins. This includes affiliate links and promotional codes.
          </li>
          <li>
            <strong>No political or religious discussions:</strong> Keep the group focused on technology and
            development. Political and religious topics are not allowed.
          </li>
          <li>
            <strong>No inappropriate content:</strong> Absolutely no NSFW content, violent imagery, or anything
            that could make members uncomfortable.
          </li>
          <li>
            <strong>No pirated content:</strong> Do not share or request pirated software, courses, books,
            or any copyrighted material. We support legitimate resources only.
          </li>
          <li>
            <strong>No scams or fraudulent activities:</strong> Any attempt to scam, deceive, or defraud
            members will result in immediate removal and potential legal action.
          </li>
          <li>
            <strong>No personal information:</strong> Do not share others' personal information (phone numbers,
            addresses, emails) without explicit consent.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Best Practices for Messaging</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
          <li>
            <strong>No message bombing:</strong> Don't send multiple consecutive messages. Compile your
            thoughts into one or two well-structured messages.
          </li>
          <li>
            <strong>Use replies:</strong> Use the reply feature to respond to specific messages. This keeps
            conversations organized and easy to follow.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Asking Questions Effectively</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
          <li>
            <strong>Search first:</strong> Before asking, check if the question has been answered before.
            Use Google, documentation, or search the chat history.
          </li>
          <li>
            <strong>Be specific:</strong> Clearly state your problem. Include error messages, code snippets
            (use proper formatting), and what you've already tried.
          </li>
          <li>
            <strong>Don't ask to ask:</strong> Instead of "Can I ask a question?", just ask your question directly.
            Everyone is here to help and learn.
          </li>
          <li>
            <strong>Show effort:</strong> Demonstrate that you've tried to solve the problem yourself.
            Share what you've attempted and why it didn't work.
          </li>
          <li>
            <strong>Use code formatting:</strong> When sharing code, use proper formatting or share via
            GitHub Gist, CodePen, or similar platforms for longer snippets.
          </li>
          <li>
            <strong>Follow up:</strong> If someone helps you solve an issue, share what worked.
            This helps others who might face similar problems.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Resource Sharing Guidelines</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
          <li>
            <strong>Quality over quantity:</strong> Share high-quality, verified resources.
            Avoid sharing random blog posts or unverified tutorials.
          </li>
          <li>
            <strong>Add context:</strong> When sharing links, articles, or videos, include a brief description
            of what it is and why it's valuable.
          </li>
          <li>
            <strong>Free and legal only:</strong> Only share free, legal resources or paid resources you
            have the right to share.
          </li>
          <li>
            <strong>Verify before sharing:</strong> Check that links are working and lead to legitimate
            content before posting.
          </li>
          <li>
            <strong>No YouTube/blog self-promotion:</strong> Don't promote your own content unless it's
            directly relevant to an ongoing discussion and adds significant value.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Helping Others</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
          <li>
            <strong>Be patient and kind:</strong> Remember that everyone is at different skill levels.
            Be encouraging and supportive, especially with beginners.
          </li>
          <li>
            <strong>Guide, don't do:</strong> Help people learn by guiding them to the solution rather
            than just giving them the answer or code.
          </li>
          <li>
            <strong>Correct respectfully:</strong> If someone shares incorrect information, correct them
            politely and provide accurate information with sources.
          </li>
          <li>
            <strong>Acknowledge contributions:</strong> Thank people who help you and recognize valuable
            contributions from community members.
          </li>
        </ul>


        <h2 className="text-2xl font-semibold mt-8 mb-3">Group Etiquette</h2>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">

          <li>
            <strong>Respect admins:</strong> Admin decisions are final. If you disagree, discuss privately
            and respectfully, not in the group.
          </li>
          <li>
            <strong>No meta-discussion:</strong> Don't have long discussions about the group rules in the main chat. Contact admins separately.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Quick Do's and Don'ts</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-green-400 mb-3">Do's</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Share valuable resources and insights</li>
              <li>• Help others solve problems</li>
              <li>• Participate in discussions actively</li>
              <li>• Use proper formatting and language</li>
              <li>• Respect everyone's time and opinion</li>
              <li>• Follow admin instructions</li>
              <li>• Report violations to admins</li>
            </ul>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-red-400 mb-3">Don'ts</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• Send spam or promotional content</li>
              <li>• Share pirated or illegal content</li>
              <li>• Use offensive or abusive language</li>
              <li>• Engage in off-topic discussions</li>
              <li>• Send excessive voice notes or media</li>
              <li>• Tag everyone unnecessarily</li>
              <li>• Argue with members publicly</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Violation and Enforcement</h2>
        <p className="text-white/70 leading-relaxed mb-3">
          We follow a progressive enforcement policy to maintain group quality:
        </p>
        <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
          <li>
            <strong>First offense:</strong> Warning from admins and message deletion.
          </li>
          <li>
            <strong>Second offense:</strong> Removal from the group.
          </li>
          <li>
            <strong>Severe violations:</strong> Immediate removal without warning for serious offenses
            (harassment, scams, NSFW content, etc.).
          </li>
        </ul>
        <p className="text-white/70 leading-relaxed">
          Admins reserve the right to take appropriate action based on the context and severity of violations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Contact Admins</h2>
        <p className="text-white/70 leading-relaxed mb-2">
          If you need to report a violation, have questions about the rules, or need assistance, contact the
          group admins directly or email us at{" "}
          <a className="underline" href="mailto:club_devsphere@rvu.edu.in">
            club_devsphere@rvu.edu.in
          </a>
          .
        </p>
        <p className="text-white/70 leading-relaxed">
          For urgent matters or Code of Conduct violations, please reach out immediately. All reports are
          handled confidentially.
        </p>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">Additional Resources</h3>
          <ul className="space-y-2 text-white/80">
            <li>
              • Read our full{" "}
              <Link href="/code-of-conduct" className="underline hover:text-white">
                Code of Conduct
              </Link>
            </li>
            <li>
              • Learn about{" "}
              <Link href="/safety/scam-warning" className="underline hover:text-white">
                Safety and Scam Awareness
              </Link>
            </li>
          </ul>
        </div>

        <p className="text-white/50 text-sm mt-8 text-center">
          Last updated: October 2025 • Rules subject to updates as needed
        </p>
      </div>
    </section>
  )
}

