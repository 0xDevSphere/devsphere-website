"use client"

import { Marquee } from "@/components/magicui/marquee"

const testimonials = [
  {
    name: "S MD Adil Ahmed",
    username: "BTech 2028",
    body: "DevSphere is a great place to learn and grow. The community is very supportive and helps you build skills through real projects and teamwork.",
    img: "/testimonials/adil.jpg",
  },
  {
    name: "Busetty Sugnesh",
    username: "BTech 2028",
    body: "DevSphere was where I first explored open source in a real way. More than just coding, it gave me a community to learn, share, and grow with.",
    img: "/testimonials/busetty.jpg",
  },
  {
    name: "Rabiya Basri",
    username: "BTech 2028",
    body: "DevSphere is a great place to start your journey. Beginners get the right guidance and support, and the community helps you learn by doing real projects. Everyone here is friendly and ready to help, which makes it easier to grow and improve your skills.",
    img: "/testimonials/rabiya.jpg",
  },
  {
    name: "Pruthvi Krishna N.G.",
    username: "BTech 2029",
    body: "DevSphere has become one of my favorite clubs. I like how the admins help each other, and the webinars they conduct are amazing and helpful.",
    img: "/testimonials/pruthvi.jpg",
  },
  {
    name: "Harshitha CM",
    username: "BCA 2028",
    body: "Attending the workshop was really helpful—I learned about Perplexity and its uses. The live examples made it even more interesting. It's a good platform to learn something new.",
    img: "/placeholder-user.jpg",
  },
  {
    name: "Mahaveer Vaishnav",
    username: "BSc 2028",
    body: "Joining DevSphere immediately put me on a path to explore the tech field, and the vibrant community truly sets it apart. Being in touch with superb seniors—and learning and growing through their guidance—is the club's biggest asset. I look forward to more cutting-edge events and workshops as we keep exploring new technologies.",
    img: "/placeholder-user.jpg",
  },
  {
    name: "Amith Emmanuel",
    username: "BCA 2029",
    body: "DevSphere has been an incredible platform for me to deepen my understanding of technology and collaborate with like‑minded peers. The club doesn’t just focus on coding—it fosters a culture of learning, innovation, and teamwork. My experience here has strengthened my skills and confidence, and I’m excited to contribute to real‑world projects.",
    img: "/testimonials/amith.jpg",
  },
  {
    name: "Sree Govinth N",
    username: "BTech 2027",
    body: "DevSphere embodies the idea of surrounding yourself with people who push you to be better. Every idea gets support and the right opportunities. It’s the best club and community—always standing out because they trust your ability and help you excel.",
    img: "/placeholder-user.jpg",
  },
]

function splitIntoColumns<T>(items: T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => [])
  const baseSize = Math.floor(items.length / columns)
  const remainder = items.length % columns
  let start = 0
  for (let i = 0; i < columns; i++) {
    const size = baseSize + (i < remainder ? 1 : 0)
    result[i] = items.slice(start, start + size)
    start += size
  }
  return result
}

const [firstColumn, secondColumn, thirdColumn] = splitIntoColumns(testimonials, 3)

const TestimonialCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
      <div className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b from-[#e78a53]/10 to-transparent blur-md"></div>

      <div className="text-white/90 leading-relaxed">{body}</div>

      <div className="mt-5 flex items-center gap-2">
        <img
          src={img || "/placeholder-user.jpg"}
          alt={name}
          height="40"
          width="40"
          className="h-10 w-10 rounded-full"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            if (target.src.endsWith("/placeholder-user.jpg")) return
            target.src = "/placeholder-user.jpg"
          }}
        />
        <div className="flex flex-col">
          <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
          <div className="leading-5 tracking-tight text-white/60">{username}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-[#e78a53] to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"></div>
              <span className="relative text-white">Testimonials</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            What our members say
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            Hear from students who have grown their skills and built amazing projects with DevSphere.
          </p>
        </div>

        <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s]">
              {firstColumn.map((testimonial) => (
                <TestimonialCard key={`${testimonial.name}-${testimonial.username}`} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
              {secondColumn.map((testimonial) => (
                <TestimonialCard key={`${testimonial.name}-${testimonial.username}`} {...testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s]">
              {thirdColumn.map((testimonial) => (
                <TestimonialCard key={`${testimonial.name}-${testimonial.username}`} {...testimonial} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="-mt-8 flex justify-center">
          <a
            href="mailto:club_devsphere@rvu.edu.in?subject=DevSphere%20Testimonial"
            className="group relative inline-flex items-center gap-2 rounded-full border border-[#e78a53]/30 bg-black/50 px-6 py-3 text-sm font-medium text-white transition-all hover:border-[#e78a53]/60 hover:bg-[#e78a53]/10 active:scale-95"
          >
            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#e78a53]/40 to-transparent"></div>
            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-[#e78a53]/40 to-transparent"></div>
            <span className="h-4 w-4 text-[#e78a53]" aria-hidden="true">🎉</span>
            Share your DevSphere journey
          </a>
        </div>
      </div>
    </section>
  )
}
