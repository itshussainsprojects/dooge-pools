"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Waves, Droplets } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Hero() {
  const ref = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    if (!contentRef.current) return

    const ctx = gsap.context(() => {
      // 3D Bottom-to-Top animations
      gsap.from(".hero-title-line1", {
        y: 150,
        opacity: 0,
        rotationX: 90,
        transformPerspective: 2000,
        duration: 1.8,
        ease: "power4.out",
        delay: 0.5,
      })

      gsap.from(".hero-subtitle", {
        y: 100,
        opacity: 0,
        rotationX: 45,
        transformPerspective: 2000,
        duration: 1.5,
        ease: "power3.out",
        delay: 1.2,
      })

      gsap.from(".hero-badge", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotationX: 30,
        transformPerspective: 2000,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.8,
      })

      gsap.from(".hero-cta", {
        y: 100,
        opacity: 0,
        scale: 0.9,
        rotationX: 60,
        transformPerspective: 2000,
        duration: 1.4,
        ease: "back.out(1.7)",
        delay: 1.6,
      })
    }, contentRef)

    return () => ctx.revert()
  }, [])

  // 3D Particles Animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      z: number
      size: number
      speedX: number
      speedY: number
      speedZ: number
    }> = []

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        speedZ: Math.random() * 2 + 1,
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'rgba(15, 23, 42, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.z -= particle.speedZ
        if (particle.z <= 0) particle.z = 1000

        const scale = 1000 / (1000 + particle.z)
        const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2
        const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2
        const size = particle.size * scale

        const alpha = 1 - particle.z / 1000
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 2)
        gradient.addColorStop(0, `rgba(20, 184, 166, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${alpha * 0.5})`)
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x2d, y2d, size * 2, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #164e63 70%, #0f172a 100%)' }}>
      {/* 3D Particle Canvas Background - Full Coverage */}
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #164e63 50%, #0e7490 100%)' }}>
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Video Background Option */}
      <motion.div style={{ y, opacity: opacity }} className="absolute inset-0 z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <motion.div ref={contentRef} className="relative z-20 container mx-auto px-4 md:px-8 text-center text-white pt-36 md:pt-48 lg:pt-52 pb-20 md:pb-32">
        
        {/* Premium Badge - EXTRA TOP SPACE on Desktop */}
        <div className="hero-badge flex justify-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 md:gap-3 px-5 md:px-7 py-2.5 md:py-3.5 rounded-full bg-teal-500/10 backdrop-blur-xl border-2 border-cyan-400/30 shadow-2xl">
            <Waves className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-cyan-200 font-['Montserrat']">Premium Pool Services</span>
          </div>
        </div>

        {/* Main Title - PERFECT BALANCED SIZE */}
        <h1 className="hero-title-line1 font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-none px-4">
          <span className="block bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
            DOGE POOLS
          </span>
        </h1>

        {/* Subtitle - Perfect Size */}
        <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl font-['Montserrat'] font-light tracking-wider md:tracking-widest mb-10 md:mb-14 text-teal-100/90 px-4">
          CONSTRUCTION • MAINTENANCE • REPAIRS
        </p>

        {/* CTA Buttons - PERFECT SIZE & Better Spacing */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 mb-24 md:mb-32">
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 text-white text-base md:text-xl font-bold rounded-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/60 hover:scale-105 font-['Montserrat'] shadow-xl shadow-cyan-500/40"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
              <Waves className="w-5 h-5 md:w-6 md:h-6" />
              Get Free Quote
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </a>

          <a
            href="#services"
            className="group w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white/10 backdrop-blur-md border-2 border-cyan-400/40 text-white text-base md:text-xl font-bold rounded-full transition-all hover:bg-white/20 hover:border-cyan-400/60 hover:scale-105 font-['Montserrat'] duration-500 shadow-xl shadow-white/20"
          >
            <span className="flex items-center justify-center gap-2 md:gap-3">
              <Droplets className="w-5 h-5 md:w-6 md:h-6" />
              Our Services
            </span>
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator - BELOW buttons, NO overlap! */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2 text-cyan-300/70">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold font-['Montserrat']">SCROLL</span>
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
