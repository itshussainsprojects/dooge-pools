// "use client"

// import { Section } from "./ui/section"
// import { useRef, useEffect, useState } from "react"
// import { Play, Sparkles, Award, Eye } from "lucide-react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { motion } from "framer-motion"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// const projects = [
//   {
//     video: "https://videos.pexels.com/video-files/3205916/3205916-hd_1920_1080_25fps.mp4",
//     title: "Luxury Residential Pool",
//     location: "Beverly Hills, CA",
//     category: "New Construction"
//   },
//   {
//     video: "/c.mp4",
//     title: "Commercial Pool Renovation",
//     location: "San Francisco, CA",
//     category: "Renovation"
//   },
//   {
//     video: "https://videos.pexels.com/video-files/6110556/6110556-hd_1920_1080_25fps.mp4",
//     title: "Resort Pool Complex",
//     location: "Malibu, CA",
//     category: "Maintenance"
//   },
//   {
//     video: "https://videos.pexels.com/video-files/3205916/3205916-hd_1920_1080_25fps.mp4",
//     title: "Modern Infinity Pool",
//     location: "Los Angeles, CA",
//     category: "New Construction"
//   },
//   {
//     video: "https://videos.pexels.com/video-files/4325457/4325457-hd_1920_1080_30fps.mp4",
//     title: "Backyard Oasis Transform",
//     location: "San Diego, CA",
//     category: "Renovation"
//   },
//   {
//     video: "https://videos.pexels.com/video-files/6110556/6110556-hd_1920_1080_25fps.mp4",
//     title: "Hotel Pool Maintenance",
//     location: "Santa Monica, CA",
//     category: "Maintenance"
//   },
// ]

// export function Gallery() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   useEffect(() => {
//     if (!sectionRef.current) return

//     const ctx = gsap.context(() => {
//       gsap.from(".gallery-title", {
//         y: 40,
//         opacity: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: { 
//           trigger: ".gallery-title", 
//           start: "top 85%",
//           once: true,
//         },
//       })

//       gsap.from(".gallery-video", {
//         y: 50,
//         opacity: 0,
//         scale: 0.95,
//         stagger: 0.08,
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: { 
//           trigger: ".gallery-grid", 
//           start: "top 85%",
//           once: true,
//         },
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <Section id="gallery" className="bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
//       {/* 3D Background Shapes - Pool Theme */}
//       {isClient && (
//         <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={`bg-shape-${i}`}
//               className="absolute"
//               style={{
//                 left: `${10 + (i * 13)}%`,
//                 top: `${15 + (i * 10)}%`,
//                 transformStyle: 'preserve-3d',
//               }}
//               animate={{
//                 rotateX: [0, 360],
//                 rotateY: [0, 360],
//                 z: [0, 100, 0],
//                 opacity: [0.05, 0.15, 0.05],
//               }}
//               transition={{
//                 duration: 20 + i * 2,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             >
//               <div 
//                 className="w-24 h-24 rounded-2xl border-2"
//                 style={{
//                   borderColor: 'rgba(6,182,212,0.2)',
//                   background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(6,182,212,0.08))',
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       )}

//       <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
//         {/* Title Section */}
//         <div className="gallery-title text-center mb-16 md:mb-20">
//           <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
//             <Award className="w-5 h-5 text-teal-600" />
//             <span className="text-sm font-bold tracking-wider uppercase text-teal-700">Portfolio</span>
//           </div>

//           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-[-0.02em] leading-[1.1]">
//             <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//               Projects That Inspire
//             </span>
//           </h2>
//           <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
//             Transforming ordinary pools into extraordinary aquatic experiences. See our craftsmanship in action.
//           </p>
//         </div>

//         {/* 3D Video Grid */}
//         <div className="gallery-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="gallery-video group relative"
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.02,
//                 rotateY: 2,
//                 transition: { duration: 0.3 }
//               }}
//               style={{ perspective: '1000px' }}
//             >
//               <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_rgba(20,184,166,0.2)] transition-all duration-700">
//                 {/* Video */}
//                 <video 
//                   src={project.video} 
//                   muted 
//                   loop 
//                   playsInline 
//                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
//                   onMouseOver={(e) => e.currentTarget.play()} 
//                   onMouseOut={(e) => e.currentTarget.pause()}
//                 />
                
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
//                 {/* Play Icon */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <motion.div 
//                     className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl"
//                     whileHover={{ scale: 1.2, rotate: 90 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Play className="w-9 h-9 text-white fill-white ml-1" />
//                   </motion.div>
//                 </div>

//                 {/* Project Info Overlay */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                   {/* Category Badge */}
//                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/90 backdrop-blur-sm mb-3">
//                     <Eye className="w-3.5 h-3.5 text-white" />
//                     <span className="text-xs font-bold text-white uppercase tracking-wider">{project.category}</span>
//                   </div>
                  
//                   {/* Title */}
//                   <h3 className="text-xl md:text-2xl font-black text-white mb-1 leading-tight">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-teal-200 font-medium">
//                     {project.location}
//                   </p>
//                 </div>

//                 {/* Border Effect */}
//                 <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-teal-400/50 transition-all duration-700" />
//               </div>

//               {/* 3D Shadow Layers */}
//               <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/8 group-hover:to-cyan-500/8 rounded-[2rem] -z-10 blur-3xl transition-all duration-700" />
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center mt-16">
//           <motion.a
//             href="#contact"
//             className="inline-flex items-center gap-3 px-10 md:px-12 py-5 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 text-white text-lg font-bold rounded-full shadow-[0_8px_24px_rgba(20,184,166,0.3)] hover:shadow-[0_16px_48px_rgba(20,184,166,0.4)] transition-all duration-500"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Start Your Project
//             <Sparkles className="w-5 h-5" />
//           </motion.a>
//         </div>
//       </div>
//     </Section>
//   )
// }


"use client"

import { Section } from "./ui/section"
import { useRef, useEffect, useState } from "react"
import { Play, Sparkles, Award, Eye } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    video: "https://videos.pexels.com/video-files/3205916/3205916-hd_1920_1080_25fps.mp4",
    title: "Luxury Residential Pool",
    location: "Beverly Hills, CA",
    category: "New Construction"
  },
  {
    video: "/c.mp4",
    title: "Commercial Pool Renovation",
    location: "San Francisco, CA",
    category: "Renovation"
  },
  {
    video: "https://videos.pexels.com/video-files/6110556/6110556-hd_1920_1080_25fps.mp4",
    title: "Resort Pool Complex",
    location: "Malibu, CA",
    category: "Maintenance"
  },
  {
    video: "https://videos.pexels.com/video-files/3205916/3205916-hd_1920_1080_25fps.mp4",
    title: "Modern Infinity Pool",
    location: "Los Angeles, CA",
    category: "New Construction"
  },
  {
    video: "https://videos.pexels.com/video-files/4325457/4325457-hd_1920_1080_30fps.mp4",
    title: "Backyard Oasis Transform",
    location: "San Diego, CA",
    category: "Renovation"
  },
  {
    video: "https://videos.pexels.com/video-files/6110556/6110556-hd_1920_1080_25fps.mp4",
    title: "Hotel Pool Maintenance",
    location: "Santa Monica, CA",
    category: "Maintenance"
  },
]

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".gallery-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { 
          trigger: ".gallery-title", 
          start: "top 85%",
          once: true,
        },
      })

      gsap.from(".gallery-video", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { 
          trigger: ".gallery-grid", 
          start: "top 85%",
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section id="gallery" className="bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`bg-shape-${i}`}
              className="absolute"
              style={{
                left: `${10 + (i * 13)}%`,
                top: `${15 + (i * 10)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                z: [0, 100, 0],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className="w-24 h-24 rounded-2xl border-2"
                style={{
                  borderColor: 'rgba(6,182,212,0.2)',
                  background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(6,182,212,0.08))',
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="gallery-title text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
            <Award className="w-5 h-5 text-teal-600" />
            <span className="text-sm font-bold tracking-wider uppercase text-teal-700">Portfolio</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-[-0.02em] leading-[1.1]">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Projects That Inspire
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Transforming ordinary pools into extraordinary aquatic experiences. See our craftsmanship in action.
          </p>
        </div>

        <div className="gallery-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const videoRef = useRef<HTMLVideoElement>(null)

            const handleClick = () => {
              const video = videoRef.current
              if (!video) return
              if (video.paused) video.play()
              else video.pause()
            }

            return (
              <motion.div
                key={index}
                className="gallery-video group relative cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: '1000px' }}
                onClick={handleClick} // 🔥 click handler
              >
                <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_rgba(20,184,166,0.2)] transition-all duration-700">
                  <video 
                    ref={videoRef}
                    src={project.video} 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div 
                      className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="w-9 h-9 text-white fill-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/90 backdrop-blur-sm mb-3">
                      <Eye className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{project.category}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-1 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-teal-200 font-medium">
                      {project.location}
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-teal-400/50 transition-all duration-700" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/8 group-hover:to-cyan-500/8 rounded-[2rem] -z-10 blur-3xl transition-all duration-700" />
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 md:px-12 py-5 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 text-white text-lg font-bold rounded-full shadow-[0_8px_24px_rgba(20,184,166,0.3)] hover:shadow-[0_16px_48px_rgba(20,184,166,0.4)] transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </Section>
  )
}
