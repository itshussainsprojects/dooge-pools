"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Droplet, Waves } from "lucide-react"

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })
  const [showClickEffect, setShowClickEffect] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      setClickPosition({ x: e.clientX, y: e.clientY })
      setShowClickEffect(true)
      setTimeout(() => setShowClickEffect(false), 800)
    }
    
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-hover") ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Main Cursor - Pool Water Droplet */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.4 : isClicking ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="relative w-8 h-8">
          {/* Water Droplet SVG with Gradient */}
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          >
            <defs>
              <linearGradient id="dropletGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
            <motion.path
              d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
              fill="url(#dropletGradient)"
              stroke="#06b6d4"
              strokeWidth="1.5"
              animate={{
                scale: isClicking ? [1, 0.8, 1] : [1, 1.05, 1],
              }}
              transition={{
                duration: isClicking ? 0.3 : 2,
                repeat: isClicking ? 0 : Infinity,
              }}
            />
            {/* Light Reflection */}
            <ellipse
              cx="10"
              cy="10"
              rx="2"
              ry="3"
              fill="white"
              opacity="0.6"
            />
          </svg>
        </div>
      </motion.div>

      {/* Pulsing Ring Around Droplet */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-cyan-400/40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            borderColor: [
              "rgba(6, 182, 212, 0.4)",
              "rgba(20, 184, 166, 0.7)",
              "rgba(6, 182, 212, 0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Hover Effect - Pool Service Icon */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 30,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-2 shadow-2xl shadow-cyan-500/50 border-2 border-white/30">
            <Waves className="w-4 h-4 text-white" />
          </div>
        </motion.div>
      )}

      {/* Click Effect - Water Ripples */}
      {showClickEffect && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed top-0 left-0 pointer-events-none z-[9996]"
              initial={{
                x: clickPosition.x - 20,
                y: clickPosition.y - 20,
                scale: 0,
                opacity: 1,
              }}
              animate={{
                scale: 2 + i * 0.5,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="w-10 h-10 rounded-full border-4 border-cyan-400/80 shadow-xl shadow-cyan-400/50" />
            </motion.div>
          ))}
          
          {/* Water Splash Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`splash-${i}`}
              className="fixed top-0 left-0 pointer-events-none z-[9996]"
              initial={{
                x: clickPosition.x,
                y: clickPosition.y,
              }}
              animate={{
                x: clickPosition.x + Math.cos((i * Math.PI) / 4) * 60,
                y: clickPosition.y + Math.sin((i * Math.PI) / 4) * 60,
                opacity: [1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <Droplet className="w-3 h-3 text-cyan-400 fill-cyan-300" />
            </motion.div>
          ))}
        </>
      )}

      {/* Trailing Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9995]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-400/30 blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  )
}
