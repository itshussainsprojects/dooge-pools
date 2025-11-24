"use client"

import { Facebook, Instagram, Twitter, Linkedin, Sparkles, Heart, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Footer() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 py-16 md:py-20 lg:py-24 border-t-4 border-teal-500/40 relative overflow-hidden">
      {/* AWARD-WINNING 3D Maze Background */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1500px' }}>
          {/* Floating 3D Geometric Shapes */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`footer-3d-${i}`}
              className="absolute"
              style={{
                left: `${(i * 5.5) % 100}%`,
                top: `${(i * 7) % 100}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, i % 2 === 0 ? 360 : -360],
                rotateZ: [0, i % 3 === 0 ? 180 : -180],
                z: [0, 120, 0],
                scale: [1, 1.4, 1],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {i % 4 === 0 ? (
                <div className="w-24 h-24 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-2xl border-2 border-teal-400/20 backdrop-blur-sm shadow-2xl" />
              ) : i % 4 === 1 ? (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/18 to-blue-500/18 border-2 border-cyan-400/25 shadow-xl" />
              ) : i % 4 === 2 ? (
                <svg width="90" height="90" viewBox="0 0 100 100" className="opacity-[0.2] drop-shadow-2xl">
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="rgba(20,184,166,0.15)" stroke="#14b8a6" strokeWidth="3" />
                </svg>
              ) : (
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/12 to-teal-500/12 rotate-45 border-2 border-emerald-400/20 shadow-lg" />
              )}
            </motion.div>
          ))}

          {/* Massive Gradient Orbs */}
          <motion.div 
            className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(rgba(20,184,166,0.8) 2px, transparent 2px), linear-gradient(90deg, rgba(20,184,166,0.8) 2px, transparent 2px)',
            backgroundSize: '60px 60px',
          }} />
        </div>
      )}

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: HUGE Logo & Brand */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            {/* Logo - Mobile: Navbar style, Desktop: MASSIVE */}
            <motion.div 
              className="mb-8 lg:mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Mobile: Small navbar-style logo */}
              {/* <motion.div 
                className="lg:hidden relative w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-teal-400/40 shadow-xl p-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              > */}
              <motion.div 
  className="lg:hidden relative w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-teal-400/40 shadow-xl p-3"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
>

                <Image 
                  src="/DOGEPOOL.jpg" 
                  alt="Doge Pools" 
                  fill 
                  className="object-contain rounded-xl" 
                  style={{ padding: '4px' }}
                />
              </motion.div>

              {/* Desktop: MASSIVE 3D logo */}
              <motion.div 
                className="hidden lg:block relative w-64 h-64 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-2xl border-4 border-teal-400/40 shadow-[0_20px_80px_rgba(20,184,166,0.4)] p-6"
                whileHover={{ scale: 1.05, rotate: 3, boxShadow: "0 30px 100px rgba(20,184,166,0.6)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image 
                  src="/DOGEPOOL.jpg" 
                  alt="Doge Pools" 
                  fill 
                  className="object-contain rounded-2xl" 
                  style={{ padding: '10px' }}
                />
                {/* Light Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-[2.5rem]" />
                {/* Pulsing Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-[2.5rem] border-2 border-teal-400/60"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
            
            {/* Premium Description */}
            <motion.p 
              className="text-center lg:text-left text-teal-100/90 leading-relaxed mb-8 text-base md:text-lg max-w-md font-medium"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transforming ordinary pools into extraordinary aquatic paradises. Premium construction, maintenance, and repair services.
            </motion.p>
            
            {/* Social Media with 3D Effects */}
            <div className="flex gap-4">
  {[
    { Icon: Instagram, color: "from-pink-600 to-purple-600", link: "https://www.instagram.com/dogepoolsllc?igsh=MW9qajFxMXFwMGk5Mw%3D%3D&utm_source=qr" },
    { Icon: Facebook, color: "from-blue-600 to-blue-700", link: "https://www.facebook.com/share/1D2ddmYZFV/?mibextid=wwXIfr" },
  ].map(({ Icon, color, link }, i) => (
    <motion.a 
      key={i} 
      href={link} 
      className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500`}
      whileHover={{ scale: 1.15, rotate: 5, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
    >
      <Icon className="w-6 h-6 text-white relative z-10" />
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
    </motion.a>
  ))}
</div>
</div>

          {/* Columns 2 & 3: Quick Links + Services (Horizontal on mobile) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-16">
            {/* Column 2: Quick Links */}
            <div className="text-left">
              <motion.h4 
                className="text-white font-black mb-6 text-lg lg:text-xl flex items-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-teal-400" />
                Links
              </motion.h4>
              <ul className="space-y-3 lg:space-y-4">
                {["Home", "About", "Services", "Portfolio", "Contact"].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="group inline-flex items-center gap-2 lg:gap-3 text-teal-100/80 hover:text-teal-300 transition-all duration-300 text-sm lg:text-base font-medium"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-teal-500/50 group-hover:bg-teal-400"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="text-left">
              <motion.h4 
                className="text-white font-black mb-6 text-lg lg:text-xl flex items-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Services
              </motion.h4>
              <ul className="space-y-3 lg:space-y-4">
                {["Maintenance", "Repairs", "Construction", "Testing", "Renovation"].map((item, i) => (
                  <motion.li 
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <a 
                      href="#services" 
                      className="group inline-flex items-center gap-2 lg:gap-3 text-cyan-100/80 hover:text-cyan-300 transition-all duration-300 text-sm lg:text-base font-medium"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <motion.h4 
              className="text-white font-black mb-6 text-lg lg:text-xl flex items-center gap-3 justify-center lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              Get In Touch
            </motion.h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: "+1 281-723-5777", color: "from-teal-500 to-cyan-500" },
                { icon: Mail, text: "dogepoolsus@gmail.com", color: "from-cyan-500 to-blue-500" },
                { icon: MapPin, text: "Houston,texas", color: "from-blue-500 to-indigo-500" },
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="group flex items-center gap-3 lg:gap-4 justify-center lg:justify-start">
                    <motion.div 
                      className={`w-11 h-11 lg:w-12 lg:h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-slate-200 font-medium text-sm lg:text-base group-hover:text-white transition-colors text-left">{item.text}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

       {/* Bottom Bar - Premium */}
<motion.div
  className="pt-8 border-t border-teal-500/30"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
    
    {/* Left Text */}
    <p className="text-teal-100/70 flex items-center gap-2 font-medium text-center md:text-left">
      &copy; {new Date().getFullYear()} Doge Pools — Crafted with  
      <span className="flex items-center gap-1">
        <Heart className="w-4 h-4 text-teal-400 fill-teal-400 animate-pulse" />
      </span>
      &nbsp;for excellence by Team Doge Pools
    </p>

    {/* Right Links */}
    <div className="flex gap-6">
      <a href="#" className="text-teal-100/70 hover:text-teal-300 transition-colors font-medium">
        Privacy Policy
      </a>
      <a href="#" className="text-teal-100/70 hover:text-teal-300 transition-colors font-medium">
        Terms of Service
      </a>
    </div>

  </div>
</motion.div>

      </div>
    </footer>
  )
}
