import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700", "800", "900"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Doge Pools | Premium Pool Construction, Maintenance & Repairs",
  description: "Award-winning pool services featuring construction, maintenance, and repairs. Experience crystal-clear perfection with Doge Pools - where luxury meets expertise.",
  icons: {
    icon: "/DOGEPOOL.jpg",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html  lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} font-sans antialiased bg-slate-950 text-white overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
