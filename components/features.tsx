"use client"

import type React from "react"

import { useTheme } from "next-themes"
import Earth from "./ui/globe"
import ScrambleHover from "./ui/scramble"
import { FollowerPointerCard } from "./ui/following-pointer"
import { motion, useInView } from "framer-motion"
import { Suspense, useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"
import Image from "next/image"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0.906, 0.541, 0.325]) // #e78a53 in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setBaseColor([0.906, 0.541, 0.325]) // #e78a53
    setGlowColor([0.906, 0.541, 0.325]) // #e78a53
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = inputValue.trim()
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessages((prev) => [...prev, { role: "bot", content: data.response }])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: `Error: ${data.error || "Failed to get response"}` },
        ])
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", content: "Failed to connect to chatbot" }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div>
      <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className,
          )}
        >
          What We Offer
        </h2>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>✨</span>
              <span>What We Offer</span>
            </div>
          }
        >
          <div className="cursor-none">
            <div className="grid grid-cols-12 gap-4 justify-center">
              {/* Cli */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-colors duration-150 will-change-transform md:col-span-6 xl:col-span-6 xl:col-start-2 hover:border-[#e78a53]/60"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ transform: "translateZ(0)" }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[#e78a53]/60 opacity-0 transition-opacity duration-150 group-hover:opacity-100"></div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Hands-On Workshops</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px] mb-6">
                      Regular workshops on blockchain development, smart contracts, DApps, and open source contribution best practices.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative">
                  <div
                    className="relative w-full h-[400px] rounded-xl overflow-hidden"
                    style={{ borderRadius: "20px" }}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src="https://framerusercontent.com/images/UjqUIiBHmIcSH9vos9HlG2BF4bo.png"
                        alt="Arrow-CoreExchange"
                        fill
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 800px"
                        className="object-cover rounded-xl"
                      />
                    </div>

                    {/* Animated SVG Connecting Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 1.59 L 60.688 92.449 M 60.688 92.449 L 119.368 92.449 M 60.688 92.449 L 1.414 92.449"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                      <svg width="100%" height="100%" viewBox="0 0 121 94" className="absolute">
                        <motion.path
                          d="M 60.688 92.449 L 60.688 1.59 M 60.688 1.59 L 119.368 1.59 M 60.688 1.59 L 1.414 1.59"
                          stroke="rgb(255,222,213)"
                          fill="transparent"
                          strokeDasharray="2 2"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: "easeInOut",
                          }}
                        />
                      </svg>
                    </motion.div>

                    {/* Animated Purple Blur Effect */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-500 rounded-full blur-[74px] opacity-65 transform -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 1 }}
                      animate={isCliHovering ? { scale: [1, 1.342, 1, 1.342] } : { scale: 1 }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                    />

                    {/* Main Content Container with Staggered Animations */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center gap-8">
                        {/* Left Column */}
                        <div className="flex flex-col gap-3">
                          {["Resources", "Mentorship", "Growth"].map((item, index) => (
                            <motion.div
                              key={`left-${index}`}
                              className="bg-white rounded px-3 py-2 flex items-center gap-2 text-black text-sm font-medium shadow-sm"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [-20, 0] } : { x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                {index === 0 && <span className="text-xs">📄</span>}
                                {index === 1 && <span className="text-xs">💰</span>}
                                {index === 2 && <span className="text-xs">🏢</span>}
                              </div>
                              {item}
                            </motion.div>
                          ))}
                        </div>

                        {/* Center Logo */}
                        <motion.div
                          className="w-16 h-16 border border-gray-300 rounded-lg overflow-hidden shadow-lg"
                          initial={{ opacity: 1, scale: 1 }}
                          animate={isCliHovering ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                        <Image
                          src="/devsphere.svg"
                          alt="DevSphere"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                          priority={false}
                          />
                        </motion.div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-3">
                          {["Network", "Credits", "Events"].map((item, index) => (
                            <motion.div
                              key={`right-${index}`}
                              className="bg-white rounded px-3 py-2 flex items-center gap-2 text-black text-sm font-medium shadow-sm"
                              initial={{ opacity: 1, x: 0 }}
                              animate={isCliHovering ? { x: [20, 0] } : { x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                              }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                {index === 0 && <span className="text-xs">👥</span>}
                                {index === 1 && <span className="text-xs">💳</span>}
                                {index === 2 && <span className="text-xs">👨‍⚕️</span>}
                              </div>
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Animated Circular Border */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={isCliHovering ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="350" height="350" viewBox="0 0 350 350" className="opacity-40">
                        <motion.path
                          d="M 175 1.159 C 271.01 1.159 348.841 78.99 348.841 175 C 348.841 271.01 271.01 348.841 175 348.841 C 78.99 348.841 1.159 271.01 1.159 175 C 1.159 78.99 78.99 1.159 175 1.159 Z"
                          stroke="rgba(255, 255, 255, 0.38)"
                          strokeWidth="1.16"
                          fill="transparent"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, rotate: 0 }}
                          animate={isCliHovering ? { pathLength: 1, rotate: 360 } : { pathLength: 0, rotate: 0 }}
                          transition={{
                            pathLength: { duration: 3, ease: "easeInOut" },
                            rotate: {
                              duration: 20,
                              repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                              ease: "linear",
                            },
                          }}
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Global */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-colors duration-150 will-change-transform md:col-span-6 xl:col-span-6 xl:col-start-8 hover:border-[#e78a53]/60"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ transform: "translateZ(0)" }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[#e78a53]/60 opacity-0 transition-opacity duration-150 group-hover:opacity-100"></div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Global Community</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Connect with developers worldwide. Collaborate on open source projects and Web3 initiatives that make a real impact.
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[300px] grow items-start justify-center select-none">
                  <h1 className="mt-8 text-center text-5xl leading-[100%] font-semibold sm:leading-normal lg:mt-12 lg:text-6xl">
                    <span className='bg-background relative mt-3 inline-block w-fit rounded-md border px-1.5 py-0.5'>
                      <ScrambleHover
                        text="Community"
                        scrambleSpeed={70}
                        maxIterations={20}
                        useOriginalCharsOnly={false}
                        className="cursor-pointer bg-gradient-to-t from-[#e78a53] to-[#e78a53] bg-clip-text text-transparent"
                        isHovering={isHovering}
                        setIsHovering={setIsHovering}
                        characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
                      />
                    </span>
                  </h1>
                  <div className="absolute top-64 z-10 flex items-center justify-center">
                    <div className="w-[400px] h-[400px]">
                      <Suspense
                        fallback={
                          <div className="bg-secondary/20 h-[400px] w-[400px] animate-pulse rounded-full"></div>
                        }
                      >
                        <Earth baseColor={baseColor} markerColor={[0, 0, 0]} glowColor={glowColor} dark={dark} />
                      </Suspense>
                    </div>
                  </div>
                  <div className="absolute top-1/2 w-full translate-y-20 scale-x-[1.2] opacity-70 transition-all duration-1000 group-hover:translate-y-8 group-hover:opacity-100">
                    <div className="from-primary/50 to-primary/0 absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="from-primary/30 to-primary/0 absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-200 rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </motion.div>

              {/* Smart Components */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-colors duration-150 will-change-transform md:col-span-6 xl:col-span-6 xl:col-start-2 hover:border-[#e78a53]/50"
                onMouseEnter={() => setIsFeature3Hovering(true)}
                onMouseLeave={() => setIsFeature3Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                style={{ transform: "translateZ(0)" }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[#e78a53]/50 opacity-0 transition-opacity duration-150 group-hover:opacity-100"></div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Hackathons & Events</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Participate in exciting hackathons, coding challenges, and tech events. Build innovative projects and win prizes.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="w-full max-w-lg flex flex-col h-full">
                    {/* Chat Messages */}
                    {messages.length > 0 && (
                      <div className="mb-4 max-h-[200px] overflow-y-auto space-y-3 px-2">
                        {messages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                msg.role === "user"
                                  ? "bg-[#e78a53] text-white"
                                  : "bg-white/10 text-white border border-white/10"
                              }`}
                            >
                              {msg.role === "user" ? (
                                <p className="text-sm leading-relaxed">{msg.content}</p>
                              ) : (
                                <div className="text-sm leading-relaxed markdown-content">
                                  <ReactMarkdown
                                    components={{
                                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                      strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                                      em: ({ children }) => <em className="italic">{children}</em>,
                                      ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                                      ol: ({ children }) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
                                      li: ({ children }) => <li className="mb-1">{children}</li>,
                                      code: ({ children }) => (
                                        <code className="bg-black/30 px-1 py-0.5 rounded text-xs">{children}</code>
                                      ),
                                    }}
                                  >
                                    {msg.content}
                                  </ReactMarkdown>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                        {isLoading && (
                          <div className="flex justify-start">
                            <div className="bg-white/10 text-white border border-white/10 rounded-2xl px-4 py-2">
                              <div className="flex gap-1">
                                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Input Area */}
                    <div className="relative rounded-2xl border border-white/10 bg-black/20 dark:bg-white/5 backdrop-blur-sm">
                      <div className="p-4">
                        <textarea
                          className="w-full min-h-[100px] bg-transparent border-none text-white placeholder:text-white/50 resize-none focus:outline-none text-base leading-relaxed"
                          placeholder="Ask me anything..."
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleKeyDown}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="flex items-center justify-between px-4 pb-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={sendMessage}
                            disabled={isLoading || !inputValue.trim()}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e78a53] hover:bg-[#e78a53]/90 transition-colors text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m22 2-7 20-4-9-9-4Z"></path>
                              <path d="M22 2 11 13"></path>
                            </svg>
                            {isLoading ? "Sending..." : "Send"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dynamic Layouts */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-colors duration-150 will-change-transform md:col-span-6 xl:col-span-6 xl:col-start-8 hover:border-[#e78a53]/60"
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ rotateY: 5, rotateX: 2, transition: { duration: 0.12 } }}
                style={{ transform: "translateZ(0)" }}
              >
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[#e78a53]/60 opacity-0 transition-opacity duration-150 group-hover:opacity-100"></div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Mentorship Programs</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Learn from experienced developers and industry professionals. Get guidance on projects and career paths.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[300px] p-4">
                  <div className="relative w-full max-w-sm">
                    <Image
                      src="/mentorship.jpg"
                      alt="Mentorship Programs"
                      width={640}
                      height={480}
                      className="w-full h-auto rounded-lg shadow-lg"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  )
}
