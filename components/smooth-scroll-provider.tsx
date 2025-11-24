"use client"

import { ReactNode, useEffect } from "react"
import Lenis from "lenis"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Detect mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    const lenis = new Lenis({
      duration: isMobile ? 1.2 : 0.6,  // Slower on mobile for control
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !isMobile,  // Disable smooth wheel on mobile
      wheelMultiplier: 1.2,
      touchMultiplier: isMobile ? 1.5 : 2,  // Reduced for mobile
      infinite: false,
      syncTouch: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
