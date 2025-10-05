import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { LoadingOverlay } from "@/components/loading-overlay"

export const metadata: Metadata = {
  title: {
    default: "DevSphere — Open Source & Web 3.0 Club of RV University",
    template: "%s | DevSphere",
  },
  applicationName: "DevSphere",
  generator: "Next.js",
  description:
    "DevSphere is the Open Source and Web 3.0 Club of RV University. We build in public, explore blockchain and modern web, run workshops and hackathons, and grow student developers.",
  keywords: [
    "DevSphere",
    "RV University",
    "Open Source",
    "Web 3.0",
    "Blockchain",
    "Student developer club",
    "Hackathons",
    "Workshops",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "RVU",
    "Taufeeq Riyaz",
  ],
  authors: [{ name: "Taufeeq Riyaz" }],
  creator: "Taufeeq Riyaz",
  publisher: "DevSphere",
  referrer: "origin-when-cross-origin",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://0xdevsphere.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DevSphere",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://0xdevsphere.vercel.app/",
    title: "DevSphere — Open Source & Web 3.0 Club of RV University",
    description:
      "DevSphere is the Open Source and Web 3.0 Club of RV University. Join us for workshops, hackathons, blockchain projects, and modern web development.",
    siteName: "DevSphere",
    images: [
      {
        url: "https://raw.githubusercontent.com/0xDevSphere/devsphere-website/refs/heads/main/public/banner.png",
        width: 1200,
        height: 630,
        alt: "DevSphere — RV University Open Source and Web 3.0 Club",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSphere — Open Source & Web 3.0 Club of RV University",
    description:
      "DevSphere is RV University's Open Source and Web 3.0 Club. Workshops, hackathons, and real-world projects.",
    creator: "@taufeeqriyaz",
    images: ["https://raw.githubusercontent.com/0xDevSphere/devsphere-website/refs/heads/main/public/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/devsphereLogo.png",
    shortcut: "/devsphereLogo.png",
    apple: "/devsphereLogo.png",
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className={`dark ${GeistSans.className}`} suppressHydrationWarning>
        <LoadingOverlay />
        {children}
      </body>
    </html>
  )
}
