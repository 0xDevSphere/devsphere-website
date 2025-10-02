"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.div
          className="fixed z-50 bottom-0 left-0 w-full h-80 flex justify-center items-center"
          style={{ backgroundColor: "#e78a53" }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12"
            style={{ color: "#121113" }}
          >
            <motion.div
              className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com/devsphere.rvu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline cursor-pointer transition-colors"
                    style={{ color: "#121113" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(18, 17, 19, 0.8)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#121113")}
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/company/99369297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline cursor-pointer transition-colors"
                    style={{ color: "#121113" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(18, 17, 19, 0.8)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#121113")}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://chat.whatsapp.com/Fhvp7ZQvdHo4sdIr1GglAY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline cursor-pointer transition-colors"
                    style={{ color: "#121113" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(18, 17, 19, 0.8)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#121113")}
                  >
                    WhatsApp Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/0xDevSphere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline cursor-pointer transition-colors"
                    style={{ color: "#121113" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(18, 17, 19, 0.8)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#121113")}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="/code-of-conduct"
                    className="hover:underline cursor-pointer transition-colors"
                    style={{ color: "#121113" }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(18, 17, 19, 0.8)")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#121113")}
                  >
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.h2
              className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] font-bold select-none"
              style={{ color: "#121113" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              DevSphere
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
