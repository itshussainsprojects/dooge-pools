"use client"

import { Section } from "./ui/section"
import { useRef, useEffect, useState } from "react"
import { Star, Quote, Sparkles } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Homeowner",
    location: "Beverly Hills, CA",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Doge Pools transformed our backyard into an absolute paradise! The attention to detail and professionalism was outstanding. Our pool has never looked better."
  },
  {
    name: "Sarah Thompson",
    role: "Property Manager",
    location: "San Francisco, CA",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "We manage multiple properties and Doge Pools is hands-down the best service we've ever used. Reliable, thorough, and the quality is unmatched."
  },
  {
    name: "David Chen",
    role: "Resort Owner",
    location: "Malibu, CA",
    image: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    text: "Running a resort means our pools need to be perfect 24/7. Doge Pools delivers consistently exceptional service. Our guests constantly compliment the pristine water quality."
  },
  {
    name: "Jennifer Martinez",
    role: "Homeowner",
    location: "Los Angeles, CA",
    image: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    text: "After trying several pool companies, we finally found perfection with Doge Pools. They're punctual, professional, and our pool sparkles like never before!"
  },
  {
    name: "Robert Williams",
    role: "Hotel Manager",
    location: "San Diego, CA",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 5,
    text: "The team at Doge Pools goes above and beyond. They transformed our aging pool system into a modern marvel. Highly recommend for commercial properties!"
  },
  {
    name: "Emily Johnson",
    role: "Homeowner",
    location: "Santa Monica, CA",
    image: "https://i.pravatar.cc/150?img=10",
    rating: 5,
    text: "Best investment we ever made! Our pool looks like it belongs in a luxury magazine. The crew is friendly, efficient, and truly passionate about their work."
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".testimonials-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".testimonials-title", start: "top 85%" },
      })

      gsap.from(".testimonial-card", {
        y: 80,
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 80%" },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section className="bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* 3D Background Elements */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i * 12)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: [0, 360],
                rotateZ: [0, i % 2 === 0 ? 180 : -180],
                z: [0, 80, 0],
                scale: [1, 1.3, 1],
                opacity: [0.08, 0.15, 0.08],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-16 h-16 text-teal-500 fill-teal-500/20" />
            </motion.div>
          ))}
        </div>
      )}

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="testimonials-title text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
            <Quote className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-bold tracking-wider uppercase text-teal-700">Testimonials</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-[-0.02em] leading-[1.1]">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Loved by Our Clients
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* 3D Testimonial Cards Grid */}
        <div className="testimonials-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card group relative"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateY: 3,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: '1000px' }}
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_rgba(20,184,166,0.2)] transition-all duration-700 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote className="w-20 h-20 text-teal-600 fill-teal-600" />
                </div>

                {/* Stars Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-700 text-base leading-relaxed mb-8 relative z-10 font-medium">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-500/20 group-hover:ring-teal-500/50 transition-all duration-500">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-teal-600 font-medium">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-teal-400/40 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-b-[2.5rem] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
              </div>

              {/* 3D Shadow Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 rounded-[2.5rem] -z-10 blur-3xl transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
