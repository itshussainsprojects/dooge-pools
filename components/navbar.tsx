"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Menu, X, Sparkles } from "lucide-react"
import gsap from "gsap"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100)
  })

  useEffect(() => {
    gsap.from(".nav-logo", {
      scale: 0,
      duration: 1,
      ease: "back.out(1.7)",
      delay: 0.2,
    })

    gsap.from(".nav-link", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.6,
    })

    // FIXED: Simple animation for CTA button visibility
    gsap.fromTo(".nav-cta", 
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
      }
    )
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      // className={cn(
      //   "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
      //   isScrolled
      //     ? "bg-slate-950/80 backdrop-blur-2xl shadow-2xl shadow-teal-500/10 py-4 md:py-5"
      //     : "bg-transparent py-4 md:py-6",
      // )}
      className={cn(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
  isScrolled
    ? "bg-transparent backdrop-blur-xl py-4 md:py-5"
    : "bg-transparent py-6 md:py-8"
)}

    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="nav-logo group relative flex items-center gap-4">
          <div
            className={cn(
              "relative rounded-2xl overflow-hidden transition-all duration-700 ring-2",
              isScrolled
                ? "w-14 h-14 md:w-16 md:h-16 ring-teal-500/40 shadow-lg shadow-teal-500/40"
                : "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ring-cyan-400/50 shadow-2xl shadow-cyan-400/50",
            )}
          >
            <Image
              src="/DOGEPOOL.jpg"
              alt="Doge Pools"
              width={96}
              height={96}
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700" />
        </a>

        {/* Desktop Nav Links - PERFECT ALIGNMENT */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm xl:text-base font-semibold transition-all duration-300 relative group/link text-white hover:text-cyan-300 font-['Montserrat']" 
              style={{ color: '#ffffff', opacity: '1' }}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover/link:w-full transition-all duration-500 rounded-full" />
            </a>
          ))}

          {/* Get Quote CTA - PERFECTLY ALIGNED */}
          <a
            href="#contact"
            className="nav-cta relative px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-sm xl:text-base font-bold transition-all duration-500 overflow-hidden group/btn bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 font-['Montserrat'] flex items-center gap-2"
            style={{ opacity: 1, visibility: 'visible' }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="relative z-10">Get Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-xl bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 hover:bg-teal-500/20 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-slate-900/98 backdrop-blur-2xl border-t border-teal-500/10 shadow-2xl p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 font-semibold py-3 hover:text-cyan-400 transition-colors border-b border-white/5 font-['Montserrat']"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-center hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 font-['Montserrat']"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Sparkles className="w-5 h-5" />
            Get Quote
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
