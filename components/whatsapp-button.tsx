"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppButton() {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Show button after scrolling a bit
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = "15551234567" // Replace with actual number
  const defaultMessage = "Hi! I'm interested in your pool services."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, '_blank')
  }

  if (!isClient) return null

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          className="fixed right-6 md:right-8 bottom-8 z-[9998] pointer-events-auto"
          initial={{ scale: 0, x: 100, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          exit={{ scale: 0, x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Popup Message */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-teal-500/20 overflow-hidden"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Doge Pools</h4>
                      <p className="text-white/90 text-xs">Typically replies instantly</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 bg-slate-50">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-slate-700 text-sm mb-3">
                      👋 Hi there! Need help with your pool?
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      Chat with us on WhatsApp for instant support and free quotes!
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-3 bg-white border-t border-slate-200">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Chat on WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 40px rgba(34,197,94,0.4)",
                "0 10px 60px rgba(34,197,94,0.6)",
                "0 10px 40px rgba(34,197,94,0.4)",
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-400"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Icon */}
            <MessageCircle 
              className="w-8 h-8 md:w-9 md:h-9 text-white relative z-10 group-hover:scale-110 transition-transform" 
              strokeWidth={2.5}
            />

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.button>

          {/* Floating Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, (i - 1) * 30],
                y: [0, -40 - i * 10],
                opacity: [0.6, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
