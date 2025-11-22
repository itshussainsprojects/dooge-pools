"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, Waves, Sparkles, Droplets } from "lucide-react"

export function ScrollTriggerButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed left-6 md:left-8 bottom-8 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Button Container */}
          <motion.button
            onClick={scrollToTop}
            className="group relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Outer Glow Ring - Pulsing */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-40 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Middle Ring - Rotating */}
            <motion.div
              className="absolute -inset-2 border-2 border-cyan-400/50 rounded-full"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Main Button */}
            <motion.div
              className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl shadow-teal-500/60 border-4 border-white/20 backdrop-blur-xl overflow-hidden"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(20, 184, 166, 0.6)",
                  "0 0 80px rgba(6, 182, 212, 0.8)",
                  "0 0 40px rgba(20, 184, 166, 0.6)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Animated Background Shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Icon with Bounce */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronUp className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10" strokeWidth={3} />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    left: `${25 + i * 15}%`,
                    bottom: "10%",
                  }}
                  animate={{
                    y: [0, -60, -60],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Text Label - Appears on Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute left-24 md:left-28 top-1/2 -translate-y-1/2 whitespace-nowrap"
                >
                  <div className="bg-gradient-to-r from-slate-900 to-teal-900 backdrop-blur-2xl px-6 py-3 rounded-2xl border-2 border-teal-400/50 shadow-2xl shadow-teal-500/50">
                    <div className="flex items-center gap-3">
                      <Waves className="w-5 h-5 text-cyan-400 animate-pulse" />
                      <span className="text-base font-bold bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent font-['Montserrat']">
                        Back to Top
                      </span>
                      <Sparkles className="w-4 h-4 text-teal-400 animate-spin" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Floating Droplets Around Button */}
          {isHovered && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-300/60 rounded-full backdrop-blur-sm"
                  style={{
                    left: `${Math.cos((i * Math.PI) / 3) * 50}px`,
                    top: `${Math.sin((i * Math.PI) / 3) * 50}px`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}

          {/* Progress Ring - Shows Scroll Progress */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <motion.circle
              cx="50%"
              cy="50%"
              r="44"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: Math.min(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight), 1) 
              }}
              transition={{ duration: 0.3 }}
              style={{
                filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
