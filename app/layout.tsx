import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { LoadingOverlay } from "@/components/loading-overlay"

export const metadata: Metadata = {
  title: {
    default: "DevSphere — Open Source & Web 3.0 Club of RV University",
    template: "%s | DevSphere",
  },
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devsphere.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devsphere.com",
    title: "DevSphere — Open Source & Web 3.0 Club of RV University",
    description:
      "DevSphere is the Open Source and Web 3.0 Club of RV University. Join us for workshops, hackathons, blockchain projects, and modern web development.",
    siteName: "DevSphere",
    images: [
      {
        url: "/devsphereLogo.png",
        width: 1200,
        height: 630,
        alt: "DevSphere — RV University Open Source and Web 3.0 Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSphere — Open Source & Web 3.0 Club of RV University",
    description:
      "DevSphere is RV University's Open Source and Web 3.0 Club. Workshops, hackathons, and real-world projects.",
    creator: "@taufeeqriyaz",
    images: ["/devsphereLogo.png"],
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
