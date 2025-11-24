"use client"

import { Section } from "./ui/section"
import { MapPin, Navigation, Sparkles, Phone, Mail } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".location-content", { y: 40, opacity: 0 })
      gsap.set(".location-item", { y: 20, opacity: 0 })

      // Animate once and stay
      gsap.to(".location-content", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { 
          trigger: ".location-content", 
          start: "top 85%",
          once: true,
          toggleActions: "play none none none",
        },
      })

      gsap.to(".location-item", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { 
          trigger: ".location-items", 
          start: "top 90%",
          once: true,
          toggleActions: "play none none none",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="location" className="p-0 relative overflow-hidden bg-white">
      <div ref={sectionRef} className="grid lg:grid-cols-2">
        {/* Left Side - Info */}
        <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 p-10 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden min-h-[500px]">
          {/* 3D Background Shapes */}
          {isClient && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`loc-shape-${i}`}
                  className="absolute"
                  style={{
                    left: `${10 + (i * 13)}%`,
                    top: `${15 + (i * 11)}%`,
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    rotateY: [0, 360],
                    rotateX: [0, i % 2 === 0 ? 180 : -180],
                    z: [0, 80, 0],
                    opacity: [0.08, 0.18, 0.08],
                  }}
                  transition={{
                    duration: 18 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-20 h-20 bg-white/10 rounded-2xl border border-white/20" />
                </motion.div>
              ))}
            </div>
          )}

          <div className="location-content max-w-xl mx-auto w-full relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 mb-8">
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-xs font-bold tracking-wider uppercase text-white">Find Us</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Visit Our Location
            </h2>

            <div className="location-items space-y-6">
              {[
                { icon: MapPin, title: "Address", desc: "Houstan ,texas" },
                { icon: Phone, title: "Phone", desc: "+1 281-723-5777" },
                { icon: Mail, title: "Email", desc: "dogepoolsus@gmail.com" },
                { icon: Navigation, title: "Service Area", desc: "100-mile radius from HQ" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="location-item group flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                >
                  <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white/90 mb-1.5 uppercase tracking-wider">{item.title}</h3>
                    <p className="text-white/80 leading-relaxed whitespace-pre-line font-medium text-base">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              className="mt-10 w-full bg-white text-teal-600 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-3 group text-base"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Directions
              <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="relative h-full min-h-[500px] w-full bg-slate-900">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443005.0145939474!2d-95.46118999999999!3d29.836095000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1763984547753!5m2!1sen!2s"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(40%) contrast(1.15) brightness(0.9) hue-rotate(140deg)" }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-teal-600/10 to-transparent" />
        </div>
      </div>
    </Section>
  )
}
