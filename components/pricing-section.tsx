"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check, Sparkles } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Explorer",
    price: "Free",
    description: "Perfect for beginners starting their journey",
    features: ["Access to workshops", "Community events", "Learning resources", "Networking opportunities"],
    popular: true,
    cta: "Join as Explorer",
  },
  {
    name: "Apprenticeship",
    price: "Free",
    description: "Structured learning track with guided practice and project exposure (coming soon)",
    features: [
      "All Explorer benefits",
      "Open source projects",
      "Hackathon participation",
      "Web3 development training",
      "Mentorship access",
      "Certificate of contribution",
    ],
    popular: false,
    disabled: true,
    cta: "Coming Soon",
  },
  {
    name: "Core Team",
    price: "Free",
    description: "Leadership roles with advanced responsibilities. We recruit via referrals; connect with a core member.",
    features: [
      "All Contributor benefits",
      "Lead projects",
      "Organize events",
      "Industry connections",
      "Advanced workshops",
      "Priority mentorship",
    ],
    popular: false,
    cta: "Apply for Core Team",
  },
]

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#e78a53]" />
            <span className="text-sm font-medium text-white/80">Create Impact</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
            Membership Tiers
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Choose your level of involvement. All memberships are completely free.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm border transition-all duration-300 flex flex-col h-full ${
                plan.popular
                  ? "bg-gradient-to-b from-[#e78a53]/10 to-transparent border-[#e78a53]/30 shadow-lg shadow-[#e78a53]/10"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#e78a53] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.name === "Core Team" ? (
                <Link href="/careers" className="mt-auto block w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              ) : plan.name === "Explorer" ? (
                <motion.a
                  href="https://chat.whatsapp.com/Fhvp7ZQvdHo4sdIr1GglAY"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-auto block w-full py-3 px-6 rounded-lg font-medium text-center transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </motion.a>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={Boolean((plan as any).disabled)}
                  className={`mt-auto w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#e78a53] to-[#e78a53]/80 text-white shadow-lg shadow-[#e78a53]/25 hover:shadow-[#e78a53]/40"
                      : ((plan as any).disabled
                          ? "bg-white/10 text-white/70 border border-white/15 cursor-not-allowed"
                          : "bg-white/10 text-white border border-white/20 hover:bg-white/20")
                  }`}
                >
                  {plan.cta}
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">Have questions about joining? We're here to help!</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#e78a53] hover:text-[#e78a53]/80 font-medium transition-colors"
            href="mailto:club_devsphere@rvu.edu.in?subject=hi%20devsphere"
          >
            Write to us →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
