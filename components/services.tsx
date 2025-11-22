"use client"

import { Section } from "./ui/section"
import { useRef, useEffect, useState } from "react"
import { Droplets, Zap, Scale, Sparkles, Trash2, Filter, Brush, Waves, Search } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  { 
    icon: Droplets, 
    title: "Water Chemistry Testing", 
    description: "Advanced digital photometer analysis ensuring perfect chemical balance for crystal-clear, safe swimming.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnOja12K43uHZwG_Wf9ZBHH_mP0oULxJiDQ&s"
  },
  { 
    icon: Zap, 
    title: "Pool Shock Treatment", 
    description: "Premium oxidation therapy eliminating bacteria, algae, and organic contaminants instantly.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRQBRProdiBaKjmPnBCiKXtS7JCB4mXi7ww&s"
  },
  { 
    icon: Scale, 
    title: "pH Balance Optimization", 
    description: "Precision alkalinity adjustment for swimmer comfort and equipment longevity protection.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-jsArkosASbKr_vhDZi7gDHMq2Ng6-Q4dw&s"
  },
  { 
    icon: Sparkles, 
    title: "Complete Sanitization", 
    description: "Professional chlorination and sanitation systems ensuring hospital-grade water purity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95JX4zk805k0HAYqvzOx4VTz60worA8mF5Q&s"
  },
  { 
    icon: Trash2, 
    title: "Basket Cleaning Service", 
    description: "Thorough debris removal from skimmers and pump baskets maximizing filtration efficiency.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHpvRSDGP2Wk3V-3RnZigawx4p86pU2Bcrg&s"
  },
  { 
    icon: Filter, 
    title: "Filter System Maintenance", 
    description: "Deep-clean filter cartridges and backwashing for optimal water circulation and clarity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfzs2Z7IlbFsmAGXn2xzI_JEykJlnf96FbA&s"
  },
  { 
    icon: Brush, 
    title: "Wall & Tile Brushing", 
    description: "Meticulous scrubbing preventing algae growth and calcium buildup on all pool surfaces.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENNTHogq7iNkqYLd-STho_3f62Adw5vTFuA&s"
  },
  { 
    icon: Waves, 
    title: "Surface Skimming", 
    description: "Professional removal of floating debris achieving glass-like surface perfection and perfection like neverever",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJ3PaqAmqLLtkVrSK8uUedw_4kJUSkDEP6g&s"
  },
  { 
    icon: Search, 
    title: "Precision Pool Vacuuming", 
    description: "Advanced underwater cleaning removing sediment, dirt, and debris from pool floor completely.",
    image: "https://cdn.shopify.com/s/files/1/0812/9049/4250/files/image_12.png?v=1731994833"
  },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".services-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-title", start: "top 85%" },
      })

      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        scale: 0.9,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Parallax transforms for 3D background animations
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0])
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1])
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])

  return (
    <Section id="services" className="bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0" style={{ perspective: '2000px' }}>
        {/* TRUE 3D MAZE - Pool & Construction Service Theme */}
        {isClient && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Layer 1: 3D Swimming Pool Tiles - Floating Grid */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`pool-tile-${i}`}
              className="absolute"
              style={{
                left: `${8 + (i % 4) * 25}%`,
                top: `${10 + Math.floor(i / 4) * 30}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                z: [0, 150, 0],
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className="w-24 h-24 rounded-xl border-3 bg-gradient-to-br shadow-2xl"
                style={{
                  borderColor: 'rgba(6,182,212,0.4)',
                  background: 'linear-gradient(135deg, rgba(20,184,166,0.15) 0%, rgba(6,182,212,0.15) 100%)',
                  boxShadow: '0 10px 30px rgba(6,182,212,0.3), inset 0 5px 15px rgba(255,255,255,0.2)',
                }}
              >
                {/* Pool Tile Grid Pattern */}
                <div className="grid grid-cols-3 gap-1 p-2 h-full">
                  {[...Array(9)].map((_, idx) => (
                    <div key={idx} className="bg-cyan-500/20 rounded-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Layer 2: 3D Floating Pool Rings - Life Savers */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`pool-ring-${i}`}
              className="absolute"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${12 + (i * 11)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, i % 2 === 0 ? 180 : -180, 0],
                rotateZ: [0, 360],
                z: [0, 180, 0],
                scale: [1, 1.5, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 18 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-20 h-20">
                <div 
                  className="absolute inset-0 rounded-full border-[6px]"
                  style={{
                    borderColor: '#ef4444',
                    background: 'radial-gradient(circle, rgba(239,68,68,0.3), transparent 60%)',
                    boxShadow: '0 8px 25px rgba(239,68,68,0.4), inset 0 3px 10px rgba(255,255,255,0.5)',
                  }}
                />
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{ background: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                />
              </div>
            </motion.div>
          ))}

          {/* Layer 3: 3D Water Droplets - Large & Realistic */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`water-drop-${i}`}
              className="absolute"
              style={{
                left: `${5 + (i * 6.5)}%`,
                top: `${8 + (i * 5)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, (Math.random() - 0.5) * 80, 0],
                z: [0, 120, 0],
                rotateY: [0, 360],
                scale: [0.8, 1.4, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 12 + i * 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="50" height="60" viewBox="0 0 24 30" style={{ filter: 'drop-shadow(0 5px 15px rgba(6,182,212,0.5))' }}>
                <defs>
                  <linearGradient id={`dropGrad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2L18 10C20 13 20 18 18 21C16 24 14 25 12 25C10 25 8 24 6 21C4 18 4 13 6 10L12 2Z"
                  fill={`url(#dropGrad-${i})`}
                  stroke="#06b6d4"
                  strokeWidth="1"
                />
                <ellipse cx="10" cy="12" rx="3" ry="5" fill="white" opacity="0.4" />
              </svg>
            </motion.div>
          ))}

          {/* Layer 4: 3D Construction Tools - Wrenches & Hammers */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`tool-${i}`}
              className="absolute"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${15 + (i * 8)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateZ: [0, i % 2 === 0 ? 360 : -360],
                rotateX: [0, 180, 360],
                z: [0, 200, 0],
                x: [0, i % 2 === 0 ? 60 : -60, 0],
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 22 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className="w-16 h-5 rounded-full relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(100,116,139,0.3), rgba(71,85,105,0.3))',
                  boxShadow: '0 8px 20px rgba(71,85,105,0.4)',
                }}
              >
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-slate-600/30 border-2 border-slate-500/40" />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-600/30 border-2 border-slate-500/40" />
              </div>
            </motion.div>
          ))}

          {/* Layer 5: 3D Wave Patterns - Pool Water Effect */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className="absolute w-full"
              style={{
                top: `${10 + i * 11}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, i % 2 === 0 ? 20 : -20, 0],
                z: [0, 100, 0],
                scaleX: [0.8, 1.3, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 14 + i * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="100%" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none">
                <motion.path
                  d="M0,20 Q300,5 600,20 T1200,20"
                  fill="none"
                  stroke="rgba(6,182,212,0.3)"
                  strokeWidth="3"
                  animate={{
                    d: [
                      "M0,20 Q300,5 600,20 T1200,20",
                      "M0,20 Q300,35 600,20 T1200,20",
                      "M0,20 Q300,5 600,20 T1200,20",
                    ]
                  }}
                  transition={{
                    duration: 6 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </motion.div>
          ))}

          {/* Layer 6: 3D Safety Cones - Construction Theme */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`cone-${i}`}
              className="absolute"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${25 + (i * 10)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: [0, 360],
                rotateX: [0, i % 2 === 0 ? 30 : -30, 0],
                z: [0, 160, 0],
                scale: [1, 1.5, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 20 + i * 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg width="40" height="50" viewBox="0 0 40 50" style={{ filter: 'drop-shadow(0 8px 15px rgba(249,115,22,0.4))' }}>
                <defs>
                  <linearGradient id={`coneGrad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path d="M20,5 L35,45 L5,45 Z" fill={`url(#coneGrad-${i})`} stroke="#f97316" strokeWidth="2" />
                <rect x="5" y="45" width="30" height="4" fill="rgba(0,0,0,0.3)" rx="2" />
                <rect x="10" y="20" width="20" height="4" fill="white" opacity="0.5" />
                <rect x="12" y="30" width="16" height="4" fill="white" opacity="0.5" />
              </svg>
            </motion.div>
          ))}

          {/* Layer 7: 3D Blueprint Sheets - Construction Plans */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`blueprint-${i}`}
              className="absolute"
              style={{
                left: `${12 + (i * 12)}%`,
                top: `${18 + (i * 9)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 180, 360],
                rotateY: [0, 360],
                z: [0, 140, 0],
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 24 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className="w-28 h-20 rounded-md relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15))',
                  border: '2px solid rgba(59,130,246,0.3)',
                  boxShadow: '0 10px 25px rgba(59,130,246,0.3)',
                }}
              >
                {/* Grid Lines */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)',
                  backgroundSize: '8px 8px',
                }} />
              </div>
            </motion.div>
          ))}

          {/* Layer 8: 3D Bubbles - Pool Water Theme */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${10 + Math.random() * 20}px`,
                height: `${10 + Math.random() * 20}px`,
                transformStyle: 'preserve-3d',
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(6,182,212,0.2))',
                border: '2px solid rgba(6,182,212,0.3)',
                boxShadow: '0 5px 20px rgba(6,182,212,0.4), inset 0 3px 10px rgba(255,255,255,0.5)',
              }}
              animate={{
                y: [0, -180 - Math.random() * 100],
                x: [0, (Math.random() - 0.5) * 100],
                z: [0, 180 + Math.random() * 80, 0],
                scale: [1, 1.5, 0.5],
                opacity: [0.4, 0.7, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Layer 9: Large 3D Gradient Orbs - Depth */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`orb-depth-${i}`}
              className="absolute blur-3xl"
              style={{
                left: `${-10 + (i * 28)}%`,
                top: `${-15 + (i * 25)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                x: [0, i % 2 === 0 ? 200 : -200, 0],
                y: [0, i % 3 === 0 ? -180 : 180, 0],
                z: [0, 300, 0],
                scale: [1, 1.8, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 35 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div 
                className="rounded-full"
                style={{
                  width: `${350 + i * 80}px`,
                  height: `${350 + i * 80}px`,
                  background: i % 3 === 0 
                    ? 'radial-gradient(circle at 40% 40%, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0.1) 40%, transparent 70%)'
                    : i % 3 === 1
                    ? 'radial-gradient(circle at 40% 40%, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)'
                    : 'radial-gradient(circle at 40% 40%, rgba(100,116,139,0.25) 0%, rgba(71,85,105,0.08) 40%, transparent 70%)',
                }}
              />
            </motion.div>
          ))}
          </div>
        )}
      </div>

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="services-title text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
            <Sparkles className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-bold tracking-wider uppercase text-teal-700">Our Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-[-0.02em] leading-[1.1]">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Premium Pool Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Professional care packages designed for pristine, crystal-clear pools year-round.
          </p>
        </div>

        <div className="services-grid grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card group relative"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Premium Card Container */}
              <div className="relative bg-white/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_rgba(20,184,166,0.25)] transition-all duration-700 h-full overflow-hidden">
                
                {/* Image Header */}
                <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-[1.15] group-hover:rotate-2 transition-all duration-1000 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Multi-Layer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Animated Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 skew-x-12" />
                </div>

                {/* Content Section - Proper Spacing */}
                <div className="relative px-6 sm:px-7 md:px-8 py-6 sm:py-7 md:py-8">
                  {/* Icon Badge - No Conflict with Image */}
                  <div className="absolute -top-10 right-6 sm:right-7 md:right-8 z-20">
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20">
                      {/* 3D Icon Container */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-2xl shadow-[0_15px_35px_rgba(20,184,166,0.5)] group-hover:shadow-[0_20px_50px_rgba(20,184,166,0.7)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent rounded-2xl" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className="w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" strokeWidth={2.5} />
                      </div>
                      {/* Pulsing Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse" />
                    </div>
                  </div>

                  {/* Typography - Premium Spacing */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 sm:mb-4 leading-[1.2] tracking-tight pr-16">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Award-Winning Hover Effects */}
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-teal-400/50 transition-all duration-700" />
                  <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-cyan-400/40 group-hover:scale-[1.01] transition-all duration-900" />
                  
                  {/* Corner Glow Accents */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-400/0 via-teal-400/0 to-transparent group-hover:from-cyan-400/15 group-hover:via-teal-400/10 rounded-bl-[3rem] transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-blue-400/0 via-cyan-400/0 to-transparent group-hover:from-blue-400/12 group-hover:via-cyan-400/8 rounded-tr-[3rem] transition-all duration-700" />
                  
                  {/* Floating Particles on Hover */}
                  {isClient && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={`hover-particle-${i}`}
                          className="absolute"
                          style={{
                            left: `${25 + i * 12}%`,
                            bottom: '25%',
                          }}
                          animate={{
                            y: [0, -70],
                            x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 80],
                            opacity: [0.7, 0],
                            scale: [0.4, 1.4],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut",
                          }}
                        >
                          <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Accent Lines - Award Style */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-teal-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-60 transition-opacity duration-900 blur-sm" />
              </div>

              {/* Premium Multi-Layer Shadows */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/12 group-hover:to-cyan-500/12 rounded-[2.5rem] -z-10 blur-3xl transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/8 group-hover:to-blue-500/8 rounded-[2.5rem] -z-20 blur-2xl transition-all duration-1000 group-hover:scale-110" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-lg md:text-xl font-bold rounded-full shadow-[0_8px_24px_rgba(20,184,166,0.3)] hover:shadow-[0_16px_48px_rgba(20,184,166,0.4)] transition-all duration-500 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get Your Custom Quote</span>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </motion.a>
        </div>
      </div>
    </Section>
  )
}
