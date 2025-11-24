// "use client"

// import { Section } from "./ui/section"
// import { useRef, useEffect, useState } from "react"
// import { Send, Phone, Mail, Clock, MapPin, Sparkles, User } from "lucide-react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { motion } from "framer-motion"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// export function Contact() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   useEffect(() => {
//     if (!sectionRef.current) return

//     const ctx = gsap.context(() => {
//       // Set initial state
//       gsap.set(".contact-info", { y: 40, opacity: 0 })
//       gsap.set(".contact-form", { y: 40, opacity: 0 })
//       gsap.set(".contact-item", { y: 20, opacity: 0 })

//       // Animate once and stay
//       gsap.to(".contact-info", {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: { 
//           trigger: ".contact-info", 
//           start: "top 85%",
//           once: true,
//           toggleActions: "play none none none",
//         },
//       })

//       gsap.to(".contact-form", {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: { 
//           trigger: ".contact-form", 
//           start: "top 85%",
//           once: true,
//           toggleActions: "play none none none",
//         },
//       })

//       gsap.to(".contact-item", {
//         y: 0,
//         opacity: 1,
//         stagger: 0.1,
//         duration: 0.6,
//         ease: "power2.out",
//         scrollTrigger: { 
//           trigger: ".contact-items", 
//           start: "top 90%",
//           once: true,
//           toggleActions: "play none none none",
//         },
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <Section id="contact" className="bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
//       {/* 3D Background Shapes - Optimized */}
//       {isClient && (
//         <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
//           {[...Array(5)].map((_, i) => (
//             <motion.div
//               key={`contact-shape-${i}`}
//               className="absolute"
//               style={{
//                 left: `${8 + (i * 10)}%`,
//                 top: `${12 + (i * 9)}%`,
//                 transformStyle: 'preserve-3d',
//               }}
//               animate={{
//                 rotateY: [0, 360],
//                 rotateX: [0, i % 2 === 0 ? 180 : -180],
//                 z: [0, 100, 0],
//                 scale: [1, 1.4, 1],
//                 opacity: [0.05, 0.12, 0.05],
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
//                   borderColor: 'rgba(6,182,212,0.15)',
//                   background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(6,182,212,0.08))',
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       )}

//       <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
//           {/* Left Side - Contact Info */}
//           <div className="contact-info lg:col-span-2">
//             <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
//               <User className="w-4 h-4 text-teal-600" />
//               <span className="text-xs font-bold tracking-wider uppercase text-teal-700">Get In Touch</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 leading-[1.1] tracking-tight">
//               <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
//                 Let's Talk Pools
//               </span>
//             </h2>

//             <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed font-medium">
//               Ready to transform your pool? Get a free consultation and quote from our expert team today.
//             </p>

//             <div className="contact-items space-y-6">
//               {[
//                 { icon: Phone, label: "Call Us", value: "+1 281-723-5777", color: "from-teal-500 to-cyan-500" },
//                 { icon: Mail, label: "Email Us", value: "dogepoolsus@gmail.com", color: "from-cyan-500 to-blue-500" },
//                 { icon: Clock, label: "Hours", value: "Mon-Sat: 8am-10pm", color: "from-blue-500 to-teal-500" },
//                 { icon: MapPin, label: "Service Area", value: "100-mile radius", color: "from-teal-500 to-emerald-500" },
//               ].map((item, i) => (
//                 <motion.div 
//                   key={i} 
//                   className="contact-item group flex items-center gap-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: "-20px" }}
//                   transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
//                 >
//                   <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
//                     <item.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-teal-600 uppercase tracking-wider font-bold mb-0.5">{item.label}</p>
//                     <p className="text-base md:text-lg font-bold text-slate-900">{item.value}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="contact-form lg:col-span-3">
//             <motion.div 
//               className="bg-white/80 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-white/60"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-20px" }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               <form className="space-y-6">
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   {["First Name", "Last Name"].map((label) => (
//                     <div key={label} className="space-y-2">
//                       <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">{label}</label>
//                       <input 
//                         type="text" 
//                         className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400" 
//                         placeholder={label === "First Name" ? "John" : "Doe"} 
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
//                   <input 
//                     type="email" 
//                     className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400" 
//                     placeholder="john@example.com" 
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
//                   <input 
//                     type="tel" 
//                     className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400" 
//                     placeholder="+1 (555) 000-0000" 
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Type</label>
//                   <select className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900">
//                     <option>Weekly Maintenance</option>
//                     <option>One-time Cleaning</option>
//                     <option>Pool Repair</option>
//                     <option>New Construction</option>
//                     <option>Renovation</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
//                   <textarea 
//                     rows={4} 
//                     className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400 resize-none" 
//                     placeholder="Tell us about your pool project..." 
//                   />
//                 </div>

//                 <motion.button 
//                   type="submit" 
//                   className="w-full bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 text-white font-bold py-5 rounded-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-3 text-lg group"
//                   whileHover={{ scale: 1.02, y: -2 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Send Message
//                   <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </Section>
//   )
// }
"use client"

import { Section } from "./ui/section"
import { useRef, useEffect, useState } from "react"
import { Send, Phone, Mail, Clock, MapPin, User } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [result, setResult] = useState("")  // State to hold result message after form submission
  const [formSubmitted, setFormSubmitted] = useState(false)  // State to track form submission

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(".contact-info", { y: 40, opacity: 0 })
      gsap.set(".contact-form", { y: 40, opacity: 0 })
      gsap.set(".contact-item", { y: 20, opacity: 0 })

      gsap.to(".contact-info", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
          once: true,
          toggleActions: "play none none none",
        },
      })

      gsap.to(".contact-form", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          once: true,
          toggleActions: "play none none none",
        },
      })

      gsap.to(".contact-item", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-items",
          start: "top 90%",
          once: true,
          toggleActions: "play none none none",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Handle form submission
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement;  // Cast event.target to HTMLFormElement

    // Form validation
    const formData = new FormData(form)
    const firstName = formData.get("first_name") as string;
    const lastName = formData.get("last_name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const serviceType = formData.get("service_type") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !phone || !serviceType || !message) {
      setResult("All fields are required.");
      setFormSubmitted(true);
      return;
    }

    // Web3Forms API call
    formData.append("access_key", "8783df33-6f29-4983-86a4-50ae4e6aab39") // Web3Forms API key
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    // Show result message and mark form as submitted
    setResult(data.success ? "Form Submitted Successfully!" : "Error: Please try again.");
    setFormSubmitted(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);

    // Reset the form after submission
    form.reset();
  }

  return (
    <Section id="contact" className="bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* 3D Background Shapes */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`contact-shape-${i}`}
              className="absolute"
              style={{
                left: `${8 + (i * 10)}%`,
                top: `${12 + (i * 9)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateY: [0, 360],
                rotateX: [0, i % 2 === 0 ? 180 : -180],
                z: [0, 100, 0],
                scale: [1, 1.4, 1],
                opacity: [0.05, 0.12, 0.05],
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
                  borderColor: 'rgba(6,182,212,0.15)',
                  background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(6,182,212,0.08))',
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="contact-info lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
              <User className="w-4 h-4 text-teal-600" />
              <span className="text-xs font-bold tracking-wider uppercase text-teal-700">Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Let's Talk Pools
              </span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed font-medium">
              Ready to transform your pool? Get a free consultation and quote from our expert team today.
            </p>

            <div className="contact-items space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+1 281-723-5777", color: "from-teal-500 to-cyan-500" },
                { icon: Mail, label: "Email Us", value: "dogepoolsus@gmail.com", color: "from-cyan-500 to-blue-500" },
                { icon: Clock, label: "Hours", value: "Mon-Sat: 8am-10pm", color: "from-blue-500 to-teal-500" },
                { icon: MapPin, label: "Service Area", value: "100-mile radius", color: "from-teal-500 to-emerald-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="contact-item group flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-teal-600 uppercase tracking-wider font-bold mb-0.5">{item.label}</p>
                    <p className="text-base md:text-lg font-bold text-slate-900">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form lg:col-span-3">
            <motion.div
              className="bg-white/80 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-white/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {["First Name", "Last Name"].map((label) => (
                    <div key={label} className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">{label}</label>
                      <input
                        type="text"
                        name={label.toLowerCase().replace(" ", "_")}  // Use name for Web3Forms
                        className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400"
                        placeholder={label === "First Name" ? "John" : "Doe"}
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Service Type</label>
                  <select name="service_type" className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900">
                    <option>Weekly Maintenance</option>
                    <option>One-time Cleaning</option>
                    <option>Pool Repair</option>
                    <option>New Construction</option>
                    <option>Renovation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400 resize-none"
                    placeholder="Tell us about your pool project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 text-white font-bold py-5 rounded-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-3 text-lg group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Message after Form Submission */}
      {formSubmitted && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-6 py-4 rounded-lg shadow-lg z-50">
          <p className="text-lg font-semibold">{result}</p>
        </div>
      )}
    </Section>
  )
}
