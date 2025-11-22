(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function Hero() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            "start start",
            "end start"
        ]
    });
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "50%"
    ]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.7
    ], [
        1,
        0
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (!contentRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    // 3D Bottom-to-Top animations
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-title-line1", {
                        y: 150,
                        opacity: 0,
                        rotationX: 90,
                        transformPerspective: 2000,
                        duration: 1.8,
                        ease: "power4.out",
                        delay: 0.5
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-subtitle", {
                        y: 100,
                        opacity: 0,
                        rotationX: 45,
                        transformPerspective: 2000,
                        duration: 1.5,
                        ease: "power3.out",
                        delay: 1.2
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-badge", {
                        y: 80,
                        opacity: 0,
                        scale: 0.8,
                        rotationX: 30,
                        transformPerspective: 2000,
                        duration: 1.2,
                        ease: "back.out(1.7)",
                        delay: 0.8
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-cta", {
                        y: 100,
                        opacity: 0,
                        scale: 0.9,
                        rotationX: 60,
                        transformPerspective: 2000,
                        duration: 1.4,
                        ease: "back.out(1.7)",
                        delay: 1.6
                    });
                }
            }["Hero.useEffect.ctx"], contentRef);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // 3D Particles Animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const particles = [];
            for(let i = 0; i < 100; i++){
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * 1000,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    speedZ: Math.random() * 2 + 1
                });
            }
            function animate() {
                if (!ctx || !canvas) return;
                ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                particles.forEach({
                    "Hero.useEffect.animate": (particle)=>{
                        particle.z -= particle.speedZ;
                        if (particle.z <= 0) particle.z = 1000;
                        const scale = 1000 / (1000 + particle.z);
                        const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
                        const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
                        const size = particle.size * scale;
                        const alpha = 1 - particle.z / 1000;
                        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 2);
                        gradient.addColorStop(0, `rgba(20, 184, 166, ${alpha})`);
                        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${alpha * 0.5})`);
                        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
                        ctx.fillStyle = gradient;
                        ctx.beginPath();
                        ctx.arc(x2d, y2d, size * 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }["Hero.useEffect.animate"]);
                requestAnimationFrame(animate);
            }
            animate();
            const handleResize = {
                "Hero.useEffect.handleResize": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["Hero.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Hero.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        className: "relative h-screen w-full overflow-hidden flex items-center justify-center",
        style: {
            background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #164e63 70%, #0f172a 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                style: {
                    background: 'linear-gradient(180deg, #0f172a 0%, #164e63 50%, #0e7490 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: "absolute inset-0 w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y,
                    opacity: opacity
                },
                className: "absolute inset-0 z-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70 z-10"
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "h-full w-full object-cover opacity-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "/video.mp4",
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: contentRef,
                className: "relative z-20 container mx-auto px-4 md:px-8 text-center text-white pt-36 md:pt-48 lg:pt-52 pb-20 md:pb-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-badge flex justify-center mb-8 md:mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 md:gap-3 px-5 md:px-7 py-2.5 md:py-3.5 rounded-full bg-teal-500/10 backdrop-blur-xl border-2 border-cyan-400/30 shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                    className: "w-4 h-4 md:w-5 md:h-5 text-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs md:text-sm font-bold tracking-widest uppercase text-cyan-200 font-['Montserrat']",
                                    children: "Premium Pool Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hero-title-line1 font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-none px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl",
                            children: "DOGE POOLS"
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl font-['Montserrat'] font-light tracking-wider md:tracking-widest mb-10 md:mb-14 text-teal-100/90 px-4",
                        children: "CONSTRUCTION • MAINTENANCE • REPAIRS"
                    }, void 0, false, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 mb-24 md:mb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "group relative w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 text-white text-base md:text-xl font-bold rounded-full overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/60 hover:scale-105 font-['Montserrat'] shadow-xl shadow-cyan-500/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10 flex items-center justify-center gap-2 md:gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                                className: "w-5 h-5 md:w-6 md:h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/hero.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, this),
                                            "Get Free Quote"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/hero.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#services",
                                className: "group w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white/10 backdrop-blur-md border-2 border-cyan-400/40 text-white text-base md:text-xl font-bold rounded-full transition-all hover:bg-white/20 hover:border-cyan-400/60 hover:scale-105 font-['Montserrat'] duration-500 shadow-xl shadow-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center gap-2 md:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                            className: "w-5 h-5 md:w-6 md:h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/hero.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        "Our Services"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/hero.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/hero.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/hero.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 3,
                    duration: 1
                },
                className: "absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2 text-cyan-300/70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold font-['Montserrat']",
                            children: "SCROLL"
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            className: "w-6 h-6 md:w-8 md:h-8 animate-bounce"
                        }, void 0, false, {
                            fileName: "[project]/components/hero.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/hero.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/hero.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/hero.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s(Hero, "MoCPg409K2MZ//qB4CGSdBQ8M6g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Section({ children, className, id, delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        id: id,
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-100px"
        },
        transition: {
            duration: 0.8,
            delay,
            ease: "easeOut"
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-20 md:py-32", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/section.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/about.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function About() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            setIsClient(true);
        }
    }["About.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "About.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".about-title", {
                        x: -100,
                        opacity: 0,
                        rotation: -5,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".about-title",
                            start: "top 80%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".about-text", {
                        y: 50,
                        opacity: 0,
                        stagger: 0.2,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".about-text",
                            start: "top 85%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".about-image", {
                        scale: 0.8,
                        rotation: 5,
                        opacity: 0,
                        duration: 1.5,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: ".about-image",
                            start: "top 80%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".about-feature", {
                        x: -50,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".about-features",
                            start: "top 85%"
                        }
                    });
                }
            }["About.useEffect.ctx"], sectionRef);
            return ({
                "About.useEffect": ()=>ctx.revert()
            })["About.useEffect"];
        }
    }["About.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "about",
        className: "bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white relative overflow-hidden",
        children: [
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    ...Array(12)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute rounded-full border-4 border-teal-400/20 backdrop-blur-sm",
                        style: {
                            width: `${80 + Math.random() * 150}px`,
                            height: `${80 + Math.random() * 150}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        },
                        animate: {
                            y: [
                                0,
                                -40,
                                0
                            ],
                            x: [
                                0,
                                Math.random() * 30 - 15,
                                0
                            ],
                            rotate: [
                                0,
                                360
                            ],
                            scale: [
                                1,
                                1.2,
                                1
                            ],
                            opacity: [
                                0.2,
                                0.6,
                                0.2
                            ]
                        },
                        transition: {
                            duration: 8 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }
                    }, `ring-${i}`, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    ...Array(25)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-2 h-2 bg-cyan-300/30 rounded-full backdrop-blur-sm shadow-lg shadow-cyan-400/50",
                        style: {
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        },
                        animate: {
                            y: [
                                0,
                                -60,
                                0
                            ],
                            x: [
                                0,
                                Math.random() * 20 - 10,
                                0
                            ],
                            scale: [
                                0.8,
                                1.5,
                                0.8
                            ],
                            opacity: [
                                0.3,
                                0.8,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 5 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }
                    }, `drop-${i}`, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 116,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden opacity-20",
                children: [
                    ...Array(15)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-16 h-16 border border-teal-400/30 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm",
                        style: {
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        },
                        animate: {
                            y: [
                                0,
                                -50,
                                0
                            ],
                            x: [
                                0,
                                30,
                                0
                            ],
                            rotateY: [
                                0,
                                180,
                                360
                            ],
                            rotateX: [
                                0,
                                90,
                                0
                            ],
                            opacity: [
                                0.2,
                                0.5,
                                0.2
                            ]
                        },
                        transition: {
                            duration: 10 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }
                    }, `tile-${i}`, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this),
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    ...Array(8)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute h-full w-1 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm",
                        style: {
                            left: `${Math.random() * 100}%`,
                            transformOrigin: 'top'
                        },
                        animate: {
                            scaleY: [
                                0.5,
                                1,
                                0.5
                            ],
                            opacity: [
                                0.1,
                                0.4,
                                0.1
                            ],
                            x: [
                                0,
                                Math.random() * 50 - 25,
                                0
                            ]
                        },
                        transition: {
                            duration: 6 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut"
                        }
                    }, `beam-${i}`, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                children: [
                    ...Array(20)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute rounded-full bg-gradient-to-br from-cyan-200/20 to-teal-200/20 backdrop-blur-md border border-cyan-300/30 shadow-xl shadow-cyan-400/30",
                        style: {
                            width: `${10 + Math.random() * 30}px`,
                            height: `${10 + Math.random() * 30}px`,
                            left: `${Math.random() * 100}%`,
                            bottom: `-${Math.random() * 20}%`
                        },
                        animate: {
                            y: [
                                `0%`,
                                `-${100 + Math.random() * 50}vh`
                            ],
                            x: [
                                0,
                                Math.random() * 100 - 50,
                                Math.random() * 100 - 50
                            ],
                            scale: [
                                1,
                                1.5,
                                1
                            ],
                            opacity: [
                                0.4,
                                0.8,
                                0
                            ]
                        },
                        transition: {
                            duration: 10 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }
                    }, `bubble-${i}`, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 200,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this),
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden opacity-30",
                children: [
                    ...Array(10)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-20 h-20 border-2 border-teal-400/40 backdrop-blur-sm",
                        style: {
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                        },
                        animate: {
                            rotate: [
                                0,
                                360
                            ],
                            scale: [
                                1,
                                1.3,
                                1
                            ],
                            y: [
                                0,
                                -40,
                                0
                            ],
                            opacity: [
                                0.3,
                                0.7,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 12 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }
                    }, `hex-${i}`, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 230,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500 rounded-full blur-[150px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[140px] animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/about.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: "container mx-auto px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-20 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 backdrop-blur-xl border border-teal-500/20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 text-teal-400"
                                        }, void 0, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold tracking-wider uppercase text-teal-300",
                                            children: "Who We Are"
                                        }, void 0, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "about-title font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-teal-200 via-cyan-300 to-teal-200 bg-clip-text text-transparent",
                                        children: "Perfection in Every Drop"
                                    }, void 0, false, {
                                        fileName: "[project]/components/about.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "about-text text-xl text-teal-100/80 leading-relaxed font-['Montserrat']",
                                    children: "At Doge Pools, we don't just service pools — we create aquatic masterpieces. Every project is a testament to our commitment to excellence, combining cutting-edge technology with artisan-level craftsmanship."
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "about-text text-lg text-teal-200/70 leading-relaxed",
                                    children: "Our certified experts use only premium Suncoast chemicals and state-of-the-art equipment to ensure your pool maintains pristine clarity, perfect chemistry, and stunning beauty year-round."
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "about-features space-y-6 pt-4",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                                            text: "Certified Pool Operators",
                                            color: "from-teal-400 to-cyan-400"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                                            text: "Premium Suncoast Chemicals",
                                            color: "from-cyan-400 to-teal-400"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                                            text: "Weekly Detailed Reports",
                                            color: "from-teal-500 to-cyan-500"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                            text: "100% Satisfaction Guarantee",
                                            color: "from-cyan-500 to-teal-500"
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "about-feature flex items-center gap-5 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-teal-500/40`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        className: "w-7 h-7 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/about.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-bold text-white/90 group-hover:text-teal-300 transition-colors",
                                                    children: item.text
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#services",
                                        className: "inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-teal-500/60 hover:scale-110 transition-all duration-500 text-lg",
                                        children: [
                                            "Explore Our Services",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/about.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/about.tsx",
                                        lineNumber: 302,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-image relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-[650px] rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-teal-950 via-transparent to-transparent z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/pic.jpeg",
                                            alt: "Luxury Pool Maintenance",
                                            fill: true,
                                            className: "object-cover transition-transform duration-1000 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-10 left-10 right-10 z-20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-900/60 backdrop-blur-2xl rounded-3xl p-8 border border-teal-500/30 shadow-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-5 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                    className: "w-8 h-8 text-white"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/about.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/about.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-bold uppercase tracking-wider text-teal-400",
                                                                        children: "Since 2024"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/about.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-2xl font-['Playfair_Display'] font-bold text-white",
                                                                        children: "Industry Leaders"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/about.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/about.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/about.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-teal-100/80 leading-relaxed",
                                                        children: "Setting the gold standard in premium pool care with unmatched expertise and dedication."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/about.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/about.tsx",
                                                lineNumber: 324,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-3xl opacity-40 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/about.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/about.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(About, "18uGhtVmVTb/WU7IpdieG0EUSng=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Services",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/filter.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brush.js [app-client] (ecmascript) <export default as Brush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        title: "Water Chemistry Testing",
        description: "Advanced digital photometer analysis ensuring perfect chemical balance for crystal-clear, safe swimming.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnOja12K43uHZwG_Wf9ZBHH_mP0oULxJiDQ&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Pool Shock Treatment",
        description: "Premium oxidation therapy eliminating bacteria, algae, and organic contaminants instantly.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVRQBRProdiBaKjmPnBCiKXtS7JCB4mXi7ww&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
        title: "pH Balance Optimization",
        description: "Precision alkalinity adjustment for swimmer comfort and equipment longevity protection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg-jsArkosASbKr_vhDZi7gDHMq2Ng6-Q4dw&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        title: "Complete Sanitization",
        description: "Professional chlorination and sanitation systems ensuring hospital-grade water purity.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95JX4zk805k0HAYqvzOx4VTz60worA8mF5Q&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
        title: "Basket Cleaning Service",
        description: "Thorough debris removal from skimmers and pump baskets maximizing filtration efficiency.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHpvRSDGP2Wk3V-3RnZigawx4p86pU2Bcrg&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$filter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"],
        title: "Filter System Maintenance",
        description: "Deep-clean filter cartridges and backwashing for optimal water circulation and clarity.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfzs2Z7IlbFsmAGXn2xzI_JEykJlnf96FbA&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brush$3e$__["Brush"],
        title: "Wall & Tile Brushing",
        description: "Meticulous scrubbing preventing algae growth and calcium buildup on all pool surfaces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENNTHogq7iNkqYLd-STho_3f62Adw5vTFuA&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        title: "Surface Skimming",
        description: "Professional removal of floating debris achieving glass-like surface perfection and perfection like neverever",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJ3PaqAmqLLtkVrSK8uUedw_4kJUSkDEP6g&s"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        title: "Precision Pool Vacuuming",
        description: "Advanced underwater cleaning removing sediment, dirt, and debris from pool floor completely.",
        image: "https://cdn.shopify.com/s/files/1/0812/9049/4250/files/image_12.png?v=1731994833"
    }
];
function Services() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            setIsClient(true);
        }
    }["Services.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Services.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".services-title", {
                        y: 60,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-title",
                            start: "top 85%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".service-card", {
                        y: 80,
                        opacity: 0,
                        scale: 0.9,
                        stagger: 0.12,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-grid",
                            start: "top 80%"
                        }
                    });
                }
            }["Services.useEffect.ctx"], sectionRef);
            return ({
                "Services.useEffect": ()=>ctx.revert()
            })["Services.useEffect"];
        }
    }["Services.useEffect"], []);
    // Parallax transforms for 3D background animations
    const y1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -300
    ]);
    const y2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        250
    ]);
    const y3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        -180
    ]);
    const y4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        150
    ]);
    const rotate1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        360
    ]);
    const rotate2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        360,
        0
    ]);
    const scale1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        1,
        1.2,
        1
    ]);
    const opacity1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        0.3,
        0.6,
        0.3
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "services",
        className: "bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    perspective: '2000px'
                },
                children: isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none overflow-hidden",
                    style: {
                        transformStyle: 'preserve-3d'
                    },
                    children: [
                        [
                            ...Array(12)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute",
                                style: {
                                    left: `${8 + i % 4 * 25}%`,
                                    top: `${10 + Math.floor(i / 4) * 30}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    rotateX: [
                                        0,
                                        360
                                    ],
                                    rotateY: [
                                        0,
                                        360
                                    ],
                                    z: [
                                        0,
                                        150,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.3,
                                        1
                                    ],
                                    opacity: [
                                        0.2,
                                        0.4,
                                        0.2
                                    ]
                                },
                                transition: {
                                    duration: 20 + i * 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-xl border-3 bg-gradient-to-br shadow-2xl",
                                    style: {
                                        borderColor: 'rgba(6,182,212,0.4)',
                                        background: 'linear-gradient(135deg, rgba(20,184,166,0.15) 0%, rgba(6,182,212,0.15) 100%)',
                                        boxShadow: '0 10px 30px rgba(6,182,212,0.3), inset 0 5px 15px rgba(255,255,255,0.2)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-1 p-2 h-full",
                                        children: [
                                            ...Array(9)
                                        ].map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-cyan-500/20 rounded-sm"
                                            }, idx, false, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            }, `pool-tile-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute",
                                style: {
                                    left: `${15 + i * 12}%`,
                                    top: `${12 + i * 11}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    rotateX: [
                                        0,
                                        i % 2 === 0 ? 180 : -180,
                                        0
                                    ],
                                    rotateZ: [
                                        0,
                                        360
                                    ],
                                    z: [
                                        0,
                                        180,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.5,
                                        1
                                    ],
                                    opacity: [
                                        0.25,
                                        0.5,
                                        0.25
                                    ]
                                },
                                transition: {
                                    duration: 18 + i * 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-20 h-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 rounded-full border-[6px]",
                                            style: {
                                                borderColor: '#ef4444',
                                                background: 'radial-gradient(circle, rgba(239,68,68,0.3), transparent 60%)',
                                                boxShadow: '0 8px 25px rgba(239,68,68,0.4), inset 0 3px 10px rgba(255,255,255,0.5)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full",
                                            style: {
                                                background: '#ffffff',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this)
                            }, `pool-ring-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 170,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(15)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute",
                                style: {
                                    left: `${5 + i * 6.5}%`,
                                    top: `${8 + i * 5}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    y: [
                                        0,
                                        -150,
                                        0
                                    ],
                                    x: [
                                        0,
                                        (Math.random() - 0.5) * 80,
                                        0
                                    ],
                                    z: [
                                        0,
                                        120,
                                        0
                                    ],
                                    rotateY: [
                                        0,
                                        360
                                    ],
                                    scale: [
                                        0.8,
                                        1.4,
                                        0.8
                                    ],
                                    opacity: [
                                        0.2,
                                        0.5,
                                        0.2
                                    ]
                                },
                                transition: {
                                    duration: 12 + i * 1,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "50",
                                    height: "60",
                                    viewBox: "0 0 24 30",
                                    style: {
                                        filter: 'drop-shadow(0 5px 15px rgba(6,182,212,0.5))'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: `dropGrad-${i}`,
                                                x1: "0%",
                                                y1: "0%",
                                                x2: "0%",
                                                y2: "100%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#06b6d4",
                                                        stopOpacity: "0.6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#14b8a6",
                                                        stopOpacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2L18 10C20 13 20 18 18 21C16 24 14 25 12 25C10 25 8 24 6 21C4 18 4 13 6 10L12 2Z",
                                            fill: `url(#dropGrad-${i})`,
                                            stroke: "#06b6d4",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                            cx: "10",
                                            cy: "12",
                                            rx: "3",
                                            ry: "5",
                                            fill: "white",
                                            opacity: "0.4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, `water-drop-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(10)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute",
                                style: {
                                    left: `${10 + i * 10}%`,
                                    top: `${15 + i * 8}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    rotateZ: [
                                        0,
                                        i % 2 === 0 ? 360 : -360
                                    ],
                                    rotateX: [
                                        0,
                                        180,
                                        360
                                    ],
                                    z: [
                                        0,
                                        200,
                                        0
                                    ],
                                    x: [
                                        0,
                                        i % 2 === 0 ? 60 : -60,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.4,
                                        1
                                    ],
                                    opacity: [
                                        0.2,
                                        0.45,
                                        0.2
                                    ]
                                },
                                transition: {
                                    duration: 22 + i * 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-5 rounded-full relative",
                                    style: {
                                        background: 'linear-gradient(135deg, rgba(100,116,139,0.3), rgba(71,85,105,0.3))',
                                        boxShadow: '0 8px 20px rgba(71,85,105,0.4)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-slate-600/30 border-2 border-slate-500/40"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-600/30 border-2 border-slate-500/40"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 282,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)
                            }, `tool-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute w-full",
                                style: {
                                    top: `${10 + i * 11}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    rotateX: [
                                        0,
                                        i % 2 === 0 ? 20 : -20,
                                        0
                                    ],
                                    z: [
                                        0,
                                        100,
                                        0
                                    ],
                                    scaleX: [
                                        0.8,
                                        1.3,
                                        0.8
                                    ],
                                    opacity: [
                                        0.2,
                                        0.5,
                                        0.2
                                    ]
                                },
                                transition: {
                                    duration: 14 + i * 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "100%",
                                    height: "40",
                                    viewBox: "0 0 1200 40",
                                    preserveAspectRatio: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                        d: "M0,20 Q300,5 600,20 T1200,20",
                                        fill: "none",
                                        stroke: "rgba(6,182,212,0.3)",
                                        strokeWidth: "3",
                                        animate: {
                                            d: [
                                                "M0,20 Q300,5 600,20 T1200,20",
                                                "M0,20 Q300,35 600,20 T1200,20",
                                                "M0,20 Q300,5 600,20 T1200,20"
                                            ]
                                        },
                                        transition: {
                                            duration: 6 + i * 0.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this)
                            }, `wave-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(6)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute",
                                style: {
                                    left: `${20 + i * 15}%`,
                                    top: `${25 + i * 10}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    rotateY: [
                                        0,
                                        360
                                    ],
                                    rotateX: [
                                        0,
                                        i % 2 === 0 ? 30 : -30,
                                        0
                                    ],
                                    z: [
                                        0,
                                        160,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.5,
                                        1
                                    ],
                                    opacity: [
                                        0.25,
                                        0.5,
                                        0.25
                                    ]
                                },
                                transition: {
                                    duration: 20 + i * 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "40",
                                    height: "50",
                                    viewBox: "0 0 40 50",
                                    style: {
                                        filter: 'drop-shadow(0 8px 15px rgba(249,115,22,0.4))'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                id: `coneGrad-${i}`,
                                                x1: "0%",
                                                y1: "0%",
                                                x2: "0%",
                                                y2: "100%",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "0%",
                                                        stopColor: "#f97316",
                                                        stopOpacity: "0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                        offset: "100%",
                                                        stopColor: "#ea580c",
                                                        stopOpacity: "0.3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M20,5 L35,45 L5,45 Z",
                                            fill: `url(#coneGrad-${i})`,
                                            stroke: "#f97316",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "5",
                                            y: "45",
                                            width: "30",
                                            height: "4",
                                            fill: "rgba(0,0,0,0.3)",
                                            rx: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "10",
                                            y: "20",
                                            width: "20",
                                            height: "4",
                                            fill: "white",
                                            opacity: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "12",
                                            y: "30",
                                            width: "16",
                                            height: "4",
                                            fill: "white",
                                            opacity: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/services.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 354,
                                    columnNumber: 15
                                }, this)
                            }, `cone-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(8)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute",
                                style: {
                                    left: `${12 + i * 12}%`,
                                    top: `${18 + i * 9}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    rotateX: [
                                        0,
                                        180,
                                        360
                                    ],
                                    rotateY: [
                                        0,
                                        360
                                    ],
                                    z: [
                                        0,
                                        140,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.3,
                                        1
                                    ],
                                    opacity: [
                                        0.15,
                                        0.35,
                                        0.15
                                    ]
                                },
                                transition: {
                                    duration: 24 + i * 2,
                                    repeat: Infinity,
                                    ease: "linear"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-28 h-20 rounded-md relative overflow-hidden",
                                    style: {
                                        background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(37,99,235,0.15))',
                                        border: '2px solid rgba(59,130,246,0.3)',
                                        boxShadow: '0 10px 25px rgba(59,130,246,0.3)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0",
                                        style: {
                                            backgroundImage: 'linear-gradient(rgba(59,130,246,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.2) 1px, transparent 1px)',
                                            backgroundSize: '8px 8px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 401,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this)
                            }, `blueprint-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(20)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute rounded-full",
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    width: `${10 + Math.random() * 20}px`,
                                    height: `${10 + Math.random() * 20}px`,
                                    transformStyle: 'preserve-3d',
                                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(6,182,212,0.2))',
                                    border: '2px solid rgba(6,182,212,0.3)',
                                    boxShadow: '0 5px 20px rgba(6,182,212,0.4), inset 0 3px 10px rgba(255,255,255,0.5)'
                                },
                                animate: {
                                    y: [
                                        0,
                                        -180 - Math.random() * 100
                                    ],
                                    x: [
                                        0,
                                        (Math.random() - 0.5) * 100
                                    ],
                                    z: [
                                        0,
                                        180 + Math.random() * 80,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.5,
                                        0.5
                                    ],
                                    opacity: [
                                        0.4,
                                        0.7,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 10 + Math.random() * 8,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: "easeOut"
                                }
                            }, `bubble-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this)),
                        [
                            ...Array(5)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute blur-3xl",
                                style: {
                                    left: `${-10 + i * 28}%`,
                                    top: `${-15 + i * 25}%`,
                                    transformStyle: 'preserve-3d'
                                },
                                animate: {
                                    x: [
                                        0,
                                        i % 2 === 0 ? 200 : -200,
                                        0
                                    ],
                                    y: [
                                        0,
                                        i % 3 === 0 ? -180 : 180,
                                        0
                                    ],
                                    z: [
                                        0,
                                        300,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.8,
                                        1
                                    ],
                                    opacity: [
                                        0.1,
                                        0.25,
                                        0.1
                                    ]
                                },
                                transition: {
                                    duration: 35 + i * 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full",
                                    style: {
                                        width: `${350 + i * 80}px`,
                                        height: `${350 + i * 80}px`,
                                        background: i % 3 === 0 ? 'radial-gradient(circle at 40% 40%, rgba(20,184,166,0.3) 0%, rgba(20,184,166,0.1) 40%, transparent 70%)' : i % 3 === 1 ? 'radial-gradient(circle at 40% 40%, rgba(6,182,212,0.3) 0%, rgba(6,182,212,0.1) 40%, transparent 70%)' : 'radial-gradient(circle at 40% 40%, rgba(100,116,139,0.25) 0%, rgba(71,85,105,0.08) 40%, transparent 70%)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            }, `orb-depth-${i}`, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/services.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/services.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: "container mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-title text-center max-w-4xl mx-auto mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-5 h-5 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 484,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold tracking-wider uppercase text-teal-700",
                                        children: "Our Services"
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 485,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-[-0.02em] leading-[1.1]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent",
                                    children: "Premium Pool Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto",
                                children: "Professional care packages designed for pristine, crystal-clear pools year-round."
                            }, void 0, false, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 493,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/services.tsx",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-grid grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
                        children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "service-card group relative",
                                initial: {
                                    opacity: 0,
                                    y: 60,
                                    scale: 0.95
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                },
                                whileHover: {
                                    y: -12,
                                    scale: 1.02,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut"
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_rgba(20,184,166,0.25)] transition-all duration-700 h-full overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-52 sm:h-56 md:h-60 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: service.image,
                                                        alt: service.title,
                                                        fill: true,
                                                        className: "object-cover group-hover:scale-[1.15] group-hover:rotate-2 transition-all duration-1000 ease-out",
                                                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-teal-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 527,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 skew-x-12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative px-6 sm:px-7 md:px-8 py-6 sm:py-7 md:py-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-10 right-6 sm:right-7 md:right-8 z-20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-18 h-18 sm:w-20 sm:h-20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-2xl shadow-[0_15px_35px_rgba(20,184,166,0.5)] group-hover:shadow-[0_20px_50px_rgba(20,184,166,0.7)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/services.tsx",
                                                                    lineNumber: 539,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent rounded-2xl"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/services.tsx",
                                                                    lineNumber: 540,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                                                        className: "w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-2xl group-hover:scale-110 transition-transform duration-500",
                                                                        strokeWidth: 2.5
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/services.tsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/services.tsx",
                                                                    lineNumber: 541,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/services.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/services.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-3 sm:mb-4 leading-[1.2] tracking-tight pr-16",
                                                        children: service.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm sm:text-base text-slate-600 leading-relaxed font-medium",
                                                        children: service.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-teal-400/50 transition-all duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-cyan-400/40 group-hover:scale-[1.01] transition-all duration-900"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-400/0 via-teal-400/0 to-transparent group-hover:from-cyan-400/15 group-hover:via-teal-400/10 rounded-bl-[3rem] transition-all duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-blue-400/0 via-cyan-400/0 to-transparent group-hover:from-blue-400/12 group-hover:via-cyan-400/8 rounded-tr-[3rem] transition-all duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 19
                                                    }, this),
                                                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                                        children: [
                                                            ...Array(6)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "absolute",
                                                                style: {
                                                                    left: `${25 + i * 12}%`,
                                                                    bottom: '25%'
                                                                },
                                                                animate: {
                                                                    y: [
                                                                        0,
                                                                        -70
                                                                    ],
                                                                    x: [
                                                                        (Math.random() - 0.5) * 40,
                                                                        (Math.random() - 0.5) * 80
                                                                    ],
                                                                    opacity: [
                                                                        0.7,
                                                                        0
                                                                    ],
                                                                    scale: [
                                                                        0.4,
                                                                        1.4
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 1.8,
                                                                    repeat: Infinity,
                                                                    delay: i * 0.2,
                                                                    ease: "easeOut"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                                                                    className: "w-3.5 h-3.5 text-cyan-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/services.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, `hover-particle-${i}`, false, {
                                                                fileName: "[project]/components/services.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/services.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 534,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-teal-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"
                                            }, void 0, false, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 600,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-60 transition-opacity duration-900 blur-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/components/services.tsx",
                                                lineNumber: 601,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 514,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/12 group-hover:to-cyan-500/12 rounded-[2.5rem] -z-10 blur-3xl transition-all duration-700 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 605,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/8 group-hover:to-blue-500/8 rounded-[2.5rem] -z-20 blur-2xl transition-all duration-1000 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/components/services.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/services.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/services.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-16 md:mt-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "#contact",
                            className: "group relative inline-flex items-center gap-3 px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white text-lg md:text-xl font-bold rounded-full shadow-[0_8px_24px_rgba(20,184,166,0.3)] hover:shadow-[0_16px_48px_rgba(20,184,166,0.4)] transition-all duration-500 overflow-hidden",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: "Get Your Custom Quote"
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 618,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 619,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                }, void 0, false, {
                                    fileName: "[project]/components/services.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/services.tsx",
                            lineNumber: 612,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/services.tsx",
                        lineNumber: 611,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/services.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/services.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(Services, "yGqLJBV6+ccFbBT+BN3wS9vt1C8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "Gallery",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
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
    }
];
function Gallery() {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            setIsClient(true);
        }
    }["Gallery.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Gallery.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".gallery-title", {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".gallery-title",
                            start: "top 85%",
                            once: true
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".gallery-video", {
                        y: 50,
                        opacity: 0,
                        scale: 0.95,
                        stagger: 0.08,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".gallery-grid",
                            start: "top 85%",
                            once: true
                        }
                    });
                }
            }["Gallery.useEffect.ctx"], sectionRef);
            return ({
                "Gallery.useEffect": ()=>ctx.revert()
            })["Gallery.useEffect"];
        }
    }["Gallery.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "gallery",
        className: "bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden",
        children: [
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                style: {
                    transformStyle: 'preserve-3d'
                },
                children: [
                    ...Array(8)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute",
                        style: {
                            left: `${10 + i * 13}%`,
                            top: `${15 + i * 10}%`,
                            transformStyle: 'preserve-3d'
                        },
                        animate: {
                            rotateX: [
                                0,
                                360
                            ],
                            rotateY: [
                                0,
                                360
                            ],
                            z: [
                                0,
                                100,
                                0
                            ],
                            opacity: [
                                0.05,
                                0.15,
                                0.05
                            ]
                        },
                        transition: {
                            duration: 20 + i * 2,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 rounded-2xl border-2",
                            style: {
                                borderColor: 'rgba(6,182,212,0.2)',
                                background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(6,182,212,0.08))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/gallery.tsx",
                            lineNumber: 359,
                            columnNumber: 15
                        }, this)
                    }, `bg-shape-${i}`, false, {
                        fileName: "[project]/components/gallery.tsx",
                        lineNumber: 339,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/gallery.tsx",
                lineNumber: 337,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: "container mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery-title text-center mb-16 md:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        className: "w-5 h-5 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/gallery.tsx",
                                        lineNumber: 374,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold tracking-wider uppercase text-teal-700",
                                        children: "Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/components/gallery.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/gallery.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-[-0.02em] leading-[1.1]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent",
                                    children: "Projects That Inspire"
                                }, void 0, false, {
                                    fileName: "[project]/components/gallery.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/gallery.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto",
                                children: "Transforming ordinary pools into extraordinary aquatic experiences. See our craftsmanship in action."
                            }, void 0, false, {
                                fileName: "[project]/components/gallery.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/gallery.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
                        children: projects.map(_s1((project, index)=>{
                            _s1();
                            const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
                            const handleClick = ()=>{
                                const video = videoRef.current;
                                if (!video) return;
                                if (video.paused) video.play();
                                else video.pause();
                            };
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "gallery-video group relative cursor-pointer",
                                initial: {
                                    opacity: 0,
                                    y: 60
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: index * 0.1
                                },
                                whileHover: {
                                    y: -10,
                                    scale: 1.02,
                                    rotateY: 2,
                                    transition: {
                                        duration: 0.3
                                    }
                                },
                                style: {
                                    perspective: '1000px'
                                },
                                onClick: handleClick,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-video rounded-[2rem] overflow-hidden bg-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_rgba(20,184,166,0.2)] transition-all duration-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: videoRef,
                                                src: project.video,
                                                muted: true,
                                                loop: true,
                                                playsInline: true,
                                                className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/components/gallery.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/gallery.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl",
                                                    whileHover: {
                                                        scale: 1.2,
                                                        rotate: 90
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        className: "w-9 h-9 text-white fill-white ml-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gallery.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/gallery.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/gallery.tsx",
                                                lineNumber: 430,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/90 backdrop-blur-sm mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "w-3.5 h-3.5 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/gallery.tsx",
                                                                lineNumber: 443,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold text-white uppercase tracking-wider",
                                                                children: project.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/gallery.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/gallery.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl md:text-2xl font-black text-white mb-1 leading-tight",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gallery.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-teal-200 font-medium",
                                                        children: project.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/gallery.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/gallery.tsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-teal-400/50 transition-all duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/gallery.tsx",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/gallery.tsx",
                                        lineNumber: 416,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/8 group-hover:to-cyan-500/8 rounded-[2rem] -z-10 blur-3xl transition-all duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/components/gallery.tsx",
                                        lineNumber: 457,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/gallery.tsx",
                                lineNumber: 400,
                                columnNumber: 15
                            }, this);
                        }, "0CLVWOVx+8g0ODBjgEMJWUwEryM="))
                    }, void 0, false, {
                        fileName: "[project]/components/gallery.tsx",
                        lineNumber: 388,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "#contact",
                            className: "inline-flex items-center gap-3 px-10 md:px-12 py-5 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 text-white text-lg font-bold rounded-full shadow-[0_8px_24px_rgba(20,184,166,0.3)] hover:shadow-[0_16px_48px_rgba(20,184,166,0.4)] transition-all duration-500",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                "Start Your Project",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/gallery.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/gallery.tsx",
                            lineNumber: 464,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/gallery.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/gallery.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/gallery.tsx",
        lineNumber: 335,
        columnNumber: 5
    }, this);
}
_s(Gallery, "18uGhtVmVTb/WU7IpdieG0EUSng=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
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
    }
];
function Testimonials() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            setIsClient(true);
        }
    }["Testimonials.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Testimonials.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".testimonials-title", {
                        y: 60,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".testimonials-title",
                            start: "top 85%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".testimonial-card", {
                        y: 80,
                        opacity: 0,
                        scale: 0.9,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".testimonials-grid",
                            start: "top 80%"
                        }
                    });
                }
            }["Testimonials.useEffect.ctx"], sectionRef);
            return ({
                "Testimonials.useEffect": ()=>ctx.revert()
            })["Testimonials.useEffect"];
        }
    }["Testimonials.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        className: "bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden",
        children: [
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                style: {
                    transformStyle: 'preserve-3d'
                },
                children: [
                    ...Array(6)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute",
                        style: {
                            left: `${15 + i * 15}%`,
                            top: `${20 + i * 12}%`,
                            transformStyle: 'preserve-3d'
                        },
                        animate: {
                            rotateY: [
                                0,
                                360
                            ],
                            rotateZ: [
                                0,
                                i % 2 === 0 ? 180 : -180
                            ],
                            z: [
                                0,
                                80,
                                0
                            ],
                            scale: [
                                1,
                                1.3,
                                1
                            ],
                            opacity: [
                                0.08,
                                0.15,
                                0.08
                            ]
                        },
                        transition: {
                            duration: 15 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-16 h-16 text-teal-500 fill-teal-500/20"
                        }, void 0, false, {
                            fileName: "[project]/components/testimonials.tsx",
                            lineNumber: 127,
                            columnNumber: 15
                        }, this)
                    }, `star-${i}`, false, {
                        fileName: "[project]/components/testimonials.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/testimonials.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: "container mx-auto px-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testimonials-title text-center mb-16 md:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                        className: "w-5 h-5 text-teal-600"
                                    }, void 0, false, {
                                        fileName: "[project]/components/testimonials.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-bold tracking-wider uppercase text-teal-700",
                                        children: "Testimonials"
                                    }, void 0, false, {
                                        fileName: "[project]/components/testimonials.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/testimonials.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-slate-900 tracking-[-0.02em] leading-[1.1]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent",
                                    children: "Loved by Our Clients"
                                }, void 0, false, {
                                    fileName: "[project]/components/testimonials.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/testimonials.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto",
                                children: "Don't just take our word for it. Here's what our satisfied clients have to say about our services."
                            }, void 0, false, {
                                fileName: "[project]/components/testimonials.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/testimonials.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testimonials-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
                        children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "testimonial-card group relative",
                                initial: {
                                    opacity: 0,
                                    y: 60,
                                    rotateX: -15
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0,
                                    rotateX: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: index * 0.1
                                },
                                whileHover: {
                                    y: -10,
                                    rotateY: 3,
                                    scale: 1.02,
                                    transition: {
                                        duration: 0.3
                                    }
                                },
                                style: {
                                    perspective: '1000px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] group-hover:shadow-[0_25px_80px_rgba(20,184,166,0.2)] transition-all duration-700 h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                    className: "w-20 h-20 text-teal-600 fill-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/testimonials.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1 mb-6",
                                                children: [
                                                    ...Array(testimonial.rating)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "w-5 h-5 text-yellow-500 fill-yellow-500"
                                                    }, i, false, {
                                                        fileName: "[project]/components/testimonials.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-700 text-base leading-relaxed mb-8 relative z-10 font-medium",
                                                children: [
                                                    '"',
                                                    testimonial.text,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/testimonials.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-teal-500/20 group-hover:ring-teal-500/50 transition-all duration-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: testimonial.image,
                                                            alt: testimonial.name,
                                                            fill: true,
                                                            className: "object-cover",
                                                            sizes: "56px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/testimonials.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/testimonials.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300",
                                                                children: testimonial.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-600",
                                                                children: testimonial.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-teal-600 font-medium",
                                                                children: testimonial.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/testimonials.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/testimonials.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/testimonials.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-teal-400/40 transition-all duration-700"
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-b-[2.5rem] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"
                                            }, void 0, false, {
                                                fileName: "[project]/components/testimonials.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/testimonials.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 rounded-[2.5rem] -z-10 blur-3xl transition-all duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/components/testimonials.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/testimonials.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/testimonials.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/testimonials.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/testimonials.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(Testimonials, "18uGhtVmVTb/WU7IpdieG0EUSng=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/location.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Location",
    ()=>Location
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function Location() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Location.useEffect": ()=>{
            setIsClient(true);
        }
    }["Location.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Location.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Location.useEffect.ctx": ()=>{
                    // Set initial state
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".location-content", {
                        y: 40,
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".location-item", {
                        y: 20,
                        opacity: 0
                    });
                    // Animate once and stay
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".location-content", {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".location-content",
                            start: "top 85%",
                            once: true,
                            toggleActions: "play none none none"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".location-item", {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".location-items",
                            start: "top 90%",
                            once: true,
                            toggleActions: "play none none none"
                        }
                    });
                }
            }["Location.useEffect.ctx"], sectionRef);
            return ({
                "Location.useEffect": ()=>ctx.revert()
            })["Location.useEffect"];
        }
    }["Location.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "location",
        className: "p-0 relative overflow-hidden bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: sectionRef,
            className: "grid lg:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 p-10 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden min-h-[500px]",
                    children: [
                        isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 pointer-events-none overflow-hidden",
                            style: {
                                transformStyle: 'preserve-3d'
                            },
                            children: [
                                ...Array(8)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute",
                                    style: {
                                        left: `${10 + i * 13}%`,
                                        top: `${15 + i * 11}%`,
                                        transformStyle: 'preserve-3d'
                                    },
                                    animate: {
                                        rotateY: [
                                            0,
                                            360
                                        ],
                                        rotateX: [
                                            0,
                                            i % 2 === 0 ? 180 : -180
                                        ],
                                        z: [
                                            0,
                                            80,
                                            0
                                        ],
                                        opacity: [
                                            0.08,
                                            0.18,
                                            0.08
                                        ]
                                    },
                                    transition: {
                                        duration: 18 + i * 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 bg-white/10 rounded-2xl border border-white/20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/location.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this)
                                }, `loc-shape-${i}`, false, {
                                    fileName: "[project]/components/location.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/location.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "location-content max-w-xl mx-auto w-full relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-4 h-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/location.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold tracking-wider uppercase text-white",
                                            children: "Find Us"
                                        }, void 0, false, {
                                            fileName: "[project]/components/location.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/location.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight",
                                    children: "Visit Our Location"
                                }, void 0, false, {
                                    fileName: "[project]/components/location.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "location-items space-y-6",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                            title: "Address",
                                            desc: "123 Poolside Avenue\nSunnyvale, CA 94086"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                            title: "Phone",
                                            desc: "+1 (555) 123-4567"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                            title: "Email",
                                            desc: "hello@dogepools.com"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                            title: "Service Area",
                                            desc: "50-mile radius from HQ"
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "location-item group flex items-start gap-4",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: true,
                                                margin: "-20px"
                                            },
                                            transition: {
                                                duration: 0.4,
                                                delay: i * 0.08,
                                                ease: "easeOut"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/location.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/location.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-bold text-white/90 mb-1.5 uppercase tracking-wider",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/location.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/80 leading-relaxed whitespace-pre-line font-medium text-base",
                                                            children: item.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/location.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/location.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/location.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/location.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: "mt-10 w-full bg-white text-teal-600 py-4 rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-3 group text-base",
                                    whileHover: {
                                        scale: 1.02,
                                        y: -2
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    children: [
                                        "Get Directions",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                            className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/components/location.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/location.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/location.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/location.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-full min-h-[500px] w-full bg-slate-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017944336!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647000000000!5m2!1sen!2sus",
                            width: "100%",
                            height: "100%",
                            style: {
                                border: 0,
                                filter: "grayscale(40%) contrast(1.15) brightness(0.9) hue-rotate(140deg)"
                            },
                            allowFullScreen: true,
                            loading: "lazy",
                            referrerPolicy: "no-referrer-when-downgrade"
                        }, void 0, false, {
                            fileName: "[project]/components/location.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 pointer-events-none bg-gradient-to-r from-teal-600/10 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/location.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/location.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/location.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/location.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(Location, "18uGhtVmVTb/WU7IpdieG0EUSng=");
_c = Location;
var _c;
__turbopack_context__.k.register(_c, "Location");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
function Contact() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            setIsClient(true);
        }
    }["Contact.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            if (!sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Contact.useEffect.ctx": ()=>{
                    // Set initial state
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".contact-info", {
                        y: 40,
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".contact-form", {
                        y: 40,
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(".contact-item", {
                        y: 20,
                        opacity: 0
                    });
                    // Animate once and stay
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".contact-info", {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".contact-info",
                            start: "top 85%",
                            once: true,
                            toggleActions: "play none none none"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".contact-form", {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".contact-form",
                            start: "top 85%",
                            once: true,
                            toggleActions: "play none none none"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".contact-item", {
                        y: 0,
                        opacity: 1,
                        stagger: 0.1,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ".contact-items",
                            start: "top 90%",
                            once: true,
                            toggleActions: "play none none none"
                        }
                    });
                }
            }["Contact.useEffect.ctx"], sectionRef);
            return ({
                "Contact.useEffect": ()=>ctx.revert()
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "contact",
        className: "bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden",
        children: [
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                style: {
                    transformStyle: 'preserve-3d'
                },
                children: [
                    ...Array(10)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute",
                        style: {
                            left: `${8 + i * 10}%`,
                            top: `${12 + i * 9}%`,
                            transformStyle: 'preserve-3d'
                        },
                        animate: {
                            rotateY: [
                                0,
                                360
                            ],
                            rotateX: [
                                0,
                                i % 2 === 0 ? 180 : -180
                            ],
                            z: [
                                0,
                                100,
                                0
                            ],
                            scale: [
                                1,
                                1.4,
                                1
                            ],
                            opacity: [
                                0.05,
                                0.12,
                                0.05
                            ]
                        },
                        transition: {
                            duration: 20 + i * 2,
                            repeat: Infinity,
                            ease: "linear"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 rounded-2xl border-2",
                            style: {
                                borderColor: 'rgba(6,182,212,0.15)',
                                background: 'linear-gradient(135deg, rgba(20,184,166,0.08), rgba(6,182,212,0.08))'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this)
                    }, `contact-shape-${i}`, false, {
                        fileName: "[project]/components/contact.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/contact.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sectionRef,
                className: "container mx-auto px-6 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-5 gap-12 lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-info lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-4 h-4 text-teal-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold tracking-wider uppercase text-teal-700",
                                            children: "Get In Touch"
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-slate-900 leading-[1.1] tracking-tight",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent",
                                        children: "Let's Talk Pools"
                                    }, void 0, false, {
                                        fileName: "[project]/components/contact.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 text-base md:text-lg mb-10 leading-relaxed font-medium",
                                    children: "Ready to transform your pool? Get a free consultation and quote from our expert team today."
                                }, void 0, false, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-items space-y-6",
                                    children: [
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                            label: "Call Us",
                                            value: "+1 (555) 123-4567",
                                            color: "from-teal-500 to-cyan-500"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                            label: "Email Us",
                                            value: "hello@dogepools.com",
                                            color: "from-cyan-500 to-blue-500"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                                            label: "Hours",
                                            value: "Mon-Sat: 8am-6pm",
                                            color: "from-blue-500 to-teal-500"
                                        },
                                        {
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                            label: "Service Area",
                                            value: "50-mile radius",
                                            color: "from-teal-500 to-emerald-500"
                                        }
                                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "contact-item group flex items-center gap-4",
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            viewport: {
                                                once: true,
                                                margin: "-20px"
                                            },
                                            transition: {
                                                duration: 0.4,
                                                delay: i * 0.08,
                                                ease: "easeOut"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/contact.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-teal-600 uppercase tracking-wider font-bold mb-0.5",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base md:text-lg font-bold text-slate-900",
                                                            children: item.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-form lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "bg-white/80 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-white/60",
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-20px"
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: "easeOut"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-6",
                                            children: [
                                                "First Name",
                                                "Last Name"
                                            ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-bold text-slate-700 uppercase tracking-wider",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400",
                                                            placeholder: label === "First Name" ? "John" : "Doe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-bold text-slate-700 uppercase tracking-wider",
                                                    children: "Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    className: "w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400",
                                                    placeholder: "john@example.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-bold text-slate-700 uppercase tracking-wider",
                                                    children: "Phone Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    className: "w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400",
                                                    placeholder: "+1 (555) 000-0000"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-bold text-slate-700 uppercase tracking-wider",
                                                    children: "Service Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Weekly Maintenance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "One-time Cleaning"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Pool Repair"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "New Construction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Renovation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/contact.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-bold text-slate-700 uppercase tracking-wider",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 4,
                                                    className: "w-full px-5 py-4 rounded-xl bg-white border-2 border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all text-slate-900 placeholder-slate-400 resize-none",
                                                    placeholder: "Tell us about your pool project..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            type: "submit",
                                            className: "w-full bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 text-white font-bold py-5 rounded-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-3 text-lg group",
                                            whileHover: {
                                                scale: 1.02,
                                                y: -2
                                            },
                                            whileTap: {
                                                scale: 0.98
                                            },
                                            children: [
                                                "Send Message",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/contact.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/contact.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/contact.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/contact.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/contact.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/contact.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/contact.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/contact.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(Contact, "18uGhtVmVTb/WU7IpdieG0EUSng=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Footer() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            setIsClient(true);
        }
    }["Footer.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 py-16 md:py-20 lg:py-24 border-t-4 border-teal-500/40 relative overflow-hidden",
        children: [
            isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none overflow-hidden",
                style: {
                    perspective: '1500px'
                },
                children: [
                    [
                        ...Array(20)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute",
                            style: {
                                left: `${i * 5.5 % 100}%`,
                                top: `${i * 7 % 100}%`,
                                transformStyle: 'preserve-3d'
                            },
                            animate: {
                                rotateX: [
                                    0,
                                    360
                                ],
                                rotateY: [
                                    0,
                                    i % 2 === 0 ? 360 : -360
                                ],
                                rotateZ: [
                                    0,
                                    i % 3 === 0 ? 180 : -180
                                ],
                                z: [
                                    0,
                                    120,
                                    0
                                ],
                                scale: [
                                    1,
                                    1.4,
                                    1
                                ],
                                opacity: [
                                    0.08,
                                    0.18,
                                    0.08
                                ]
                            },
                            transition: {
                                duration: 20 + i * 2,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            children: i % 4 === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-2xl border-2 border-teal-400/20 backdrop-blur-sm shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this) : i % 4 === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/18 to-blue-500/18 border-2 border-cyan-400/25 shadow-xl"
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this) : i % 4 === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "90",
                                height: "90",
                                viewBox: "0 0 100 100",
                                className: "opacity-[0.2] drop-shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "50 1 95 25 95 75 50 99 5 75 5 25",
                                    fill: "rgba(20,184,166,0.15)",
                                    stroke: "#14b8a6",
                                    strokeWidth: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 bg-gradient-to-r from-emerald-500/12 to-teal-500/12 rotate-45 border-2 border-emerald-400/20 shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, this)
                        }, `footer-3d-${i}`, false, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-teal-500/20 rounded-full blur-[150px]",
                        animate: {
                            scale: [
                                1,
                                1.2,
                                1
                            ],
                            opacity: [
                                0.2,
                                0.3,
                                0.2
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]",
                        animate: {
                            scale: [
                                1.2,
                                1,
                                1.2
                            ],
                            opacity: [
                                0.2,
                                0.3,
                                0.2
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.04]",
                        style: {
                            backgroundImage: 'linear-gradient(rgba(20,184,166,0.8) 2px, transparent 2px), linear-gradient(90deg, rgba(20,184,166,0.8) 2px, transparent 2px)',
                            backgroundSize: '60px 60px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-6 lg:px-8 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 flex flex-col items-center lg:items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "mb-8 lg:mb-10",
                                        initial: {
                                            scale: 0.8,
                                            opacity: 0
                                        },
                                        whileInView: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "lg:hidden relative w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-xl border-2 border-teal-400/40 shadow-xl p-3",
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                transition: {
                                                    duration: 0.4
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/DOGEPOOL.jpg",
                                                    alt: "Doge Pools",
                                                    fill: true,
                                                    className: "object-contain rounded-xl",
                                                    style: {
                                                        padding: '4px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "hidden lg:block relative w-64 h-64 rounded-[2.5rem] bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-2xl border-4 border-teal-400/40 shadow-[0_20px_80px_rgba(20,184,166,0.4)] p-6",
                                                whileHover: {
                                                    scale: 1.05,
                                                    rotate: 3,
                                                    boxShadow: "0 30px 100px rgba(20,184,166,0.6)"
                                                },
                                                transition: {
                                                    duration: 0.4,
                                                    ease: "easeOut"
                                                },
                                                style: {
                                                    transformStyle: 'preserve-3d'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/DOGEPOOL.jpg",
                                                        alt: "Doge Pools",
                                                        fill: true,
                                                        className: "object-contain rounded-2xl",
                                                        style: {
                                                            padding: '10px'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-[2.5rem]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "absolute inset-0 rounded-[2.5rem] border-2 border-teal-400/60",
                                                        animate: {
                                                            scale: [
                                                                1,
                                                                1.05,
                                                                1
                                                            ],
                                                            opacity: [
                                                                0.5,
                                                                0.8,
                                                                0.5
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 2,
                                                            repeat: Infinity
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-center lg:text-left text-teal-100/90 leading-relaxed mb-8 text-base md:text-lg max-w-md font-medium",
                                        initial: {
                                            y: 20,
                                            opacity: 0
                                        },
                                        whileInView: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6,
                                            delay: 0.2
                                        },
                                        children: "Transforming ordinary pools into extraordinary aquatic paradises. Premium construction, maintenance, and repair services."
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                                color: "from-blue-600 to-blue-700"
                                            },
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                                color: "from-pink-600 to-purple-600"
                                            },
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
                                                color: "from-sky-500 to-blue-600"
                                            },
                                            {
                                                Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
                                                color: "from-blue-700 to-blue-800"
                                            }
                                        ].map(({ Icon, color }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                href: "#",
                                                className: `relative w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500`,
                                                whileHover: {
                                                    scale: 1.15,
                                                    rotate: 5,
                                                    y: -5
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                initial: {
                                                    y: 20,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.3 + i * 0.1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-6 h-6 text-white relative z-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                                                        animate: {
                                                            x: [
                                                                '-100%',
                                                                '200%'
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            repeatDelay: 1
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 grid grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-x-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h4, {
                                                className: "text-white font-black mb-6 text-lg lg:text-xl flex items-center gap-3",
                                                initial: {
                                                    y: 20,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    duration: 0.6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-5 h-5 text-teal-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Links"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3 lg:space-y-4",
                                                children: [
                                                    "Home",
                                                    "About",
                                                    "Services",
                                                    "Portfolio",
                                                    "Contact"
                                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                        initial: {
                                                            x: -20,
                                                            opacity: 0
                                                        },
                                                        whileInView: {
                                                            x: 0,
                                                            opacity: 1
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.4,
                                                            delay: i * 0.1
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `#${item.toLowerCase()}`,
                                                            className: "group inline-flex items-center gap-2 lg:gap-3 text-teal-100/80 hover:text-teal-300 transition-all duration-300 text-sm lg:text-base font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-teal-500/50 group-hover:bg-teal-400",
                                                                    whileHover: {
                                                                        scale: 1.5
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/footer.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "group-hover:translate-x-1 transition-transform duration-300",
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/footer.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-3 h-3 lg:w-4 lg:h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/footer.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, item, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h4, {
                                                className: "text-white font-black mb-6 text-lg lg:text-xl flex items-center gap-3",
                                                initial: {
                                                    y: 20,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    y: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    duration: 0.6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-5 h-5 text-cyan-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Services"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3 lg:space-y-4",
                                                children: [
                                                    "Maintenance",
                                                    "Repairs",
                                                    "Construction",
                                                    "Testing",
                                                    "Renovation"
                                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                        initial: {
                                                            x: -20,
                                                            opacity: 0
                                                        },
                                                        whileInView: {
                                                            x: 0,
                                                            opacity: 1
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.4,
                                                            delay: i * 0.1
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#services",
                                                            className: "group inline-flex items-center gap-2 lg:gap-3 text-cyan-100/80 hover:text-cyan-300 transition-all duration-300 text-sm lg:text-base font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400",
                                                                    whileHover: {
                                                                        scale: 1.5
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/footer.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "group-hover:translate-x-1 transition-transform duration-300",
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/footer.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, item, false, {
                                                        fileName: "[project]/components/footer.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h4, {
                                        className: "text-white font-black mb-6 text-lg lg:text-xl flex items-center gap-3 justify-center lg:justify-start",
                                        initial: {
                                            y: 20,
                                            opacity: 0
                                        },
                                        whileInView: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-5 h-5 text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, this),
                                            "Get In Touch"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4",
                                        children: [
                                            {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
                                                text: "+1 (555) 123-4567",
                                                color: "from-teal-500 to-cyan-500"
                                            },
                                            {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                                text: "hello@dogepools.com",
                                                color: "from-cyan-500 to-blue-500"
                                            },
                                            {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                                text: "Sunnyvale, CA 94086",
                                                color: "from-blue-500 to-indigo-500"
                                            }
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                initial: {
                                                    x: 20,
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    x: 0,
                                                    opacity: 1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    duration: 0.4,
                                                    delay: i * 0.1
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group flex items-center gap-3 lg:gap-4 justify-center lg:justify-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: `w-11 h-11 lg:w-12 lg:h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`,
                                                            whileHover: {
                                                                scale: 1.1,
                                                                rotate: 5
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                className: "w-5 h-5 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/footer.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-200 font-medium text-sm lg:text-base group-hover:text-white transition-colors text-left",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/footer.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/footer.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/footer.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/footer.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "pt-8 border-t border-teal-500/30",
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-center gap-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-teal-100/70 flex items-center gap-2 font-medium text-center md:text-left",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " Doge Pools — Crafted with",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "w-4 h-4 text-teal-400 fill-teal-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/footer.tsx",
                                                lineNumber: 309,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 308,
                                            columnNumber: 7
                                        }, this),
                                        " for excellence."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 306,
                                    columnNumber: 5
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-teal-100/70 hover:text-teal-300 transition-colors font-medium",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 316,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-teal-100/70 hover:text-teal-300 transition-colors font-medium",
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/components/footer.tsx",
                                            lineNumber: 319,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/footer.tsx",
                                    lineNumber: 315,
                                    columnNumber: 5
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/footer.tsx",
                            lineNumber: 303,
                            columnNumber: 3
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/footer.tsx",
                        lineNumber: 296,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/footer.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/footer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Footer, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", {
        "Navbar.useMotionValueEvent": (latest)=>{
            setIsScrolled(latest > 100);
        }
    }["Navbar.useMotionValueEvent"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".nav-logo", {
                scale: 0,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 0.2
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".nav-link", {
                opacity: 0,
                y: -20,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.6
            });
            // FIXED: Simple animation for CTA button visibility
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".nav-cta", {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                delay: 1
            });
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Services",
            href: "#services"
        },
        {
            name: "Gallery",
            href: "#gallery"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        // className={cn(
        //   "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        //   isScrolled
        //     ? "bg-slate-950/80 backdrop-blur-2xl shadow-2xl shadow-teal-500/10 py-4 md:py-5"
        //     : "bg-transparent py-4 md:py-6",
        // )}
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-700", isScrolled ? "bg-transparent backdrop-blur-xl py-4 md:py-5" : "bg-transparent py-6 md:py-8"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "nav-logo group relative flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-2xl overflow-hidden transition-all duration-700 ring-2", isScrolled ? "w-14 h-14 md:w-16 md:h-16 ring-teal-500/40 shadow-lg shadow-teal-500/40" : "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ring-cyan-400/50 shadow-2xl shadow-cyan-400/50"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/DOGEPOOL.jpg",
                                    alt: "Doge Pools",
                                    width: 96,
                                    height: 96,
                                    className: "w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-700",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700"
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-8 xl:gap-10",
                        children: [
                            navLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "nav-link text-sm xl:text-base font-semibold transition-all duration-300 relative group/link text-white hover:text-cyan-300 font-['Montserrat']",
                                    style: {
                                        color: '#ffffff',
                                        opacity: '1'
                                    },
                                    children: [
                                        link.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover/link:w-full transition-all duration-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "nav-cta relative px-6 xl:px-8 py-2.5 xl:py-3 rounded-full text-sm xl:text-base font-bold transition-all duration-500 overflow-hidden group/btn bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 font-['Montserrat'] flex items-center gap-2",
                                style: {
                                    opacity: 1,
                                    visibility: 'visible'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: "Get Quote"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lg:hidden p-3 rounded-xl bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 hover:bg-teal-500/20 transition-all",
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6 text-cyan-400"
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 130,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-6 h-6 text-cyan-400"
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 130,
                            columnNumber: 73
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navbar.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "lg:hidden bg-slate-900/98 backdrop-blur-2xl border-t border-teal-500/10 shadow-2xl p-6 flex flex-col gap-6",
                children: [
                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            className: "text-white/80 font-semibold py-3 hover:text-cyan-400 transition-colors border-b border-white/5 font-['Montserrat']",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            children: link.name
                        }, link.name, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: "w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-4 rounded-xl font-bold text-center hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 font-['Montserrat']",
                        onClick: ()=>setIsMobileMenuOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            "Get Quote"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navbar.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navbar.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(Navbar, "S3Tcug19mTyt/UjxLTDJ8+o687c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/scroll-trigger-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollTriggerButton",
    ()=>ScrollTriggerButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ScrollTriggerButton() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollTriggerButton.useEffect": ()=>{
            const toggleVisibility = {
                "ScrollTriggerButton.useEffect.toggleVisibility": ()=>{
                    if (window.pageYOffset > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["ScrollTriggerButton.useEffect.toggleVisibility"];
            window.addEventListener("scroll", toggleVisibility);
            return ({
                "ScrollTriggerButton.useEffect": ()=>window.removeEventListener("scroll", toggleVisibility)
            })["ScrollTriggerButton.useEffect"];
        }
    }["ScrollTriggerButton.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: -100,
                scale: 0.5
            },
            animate: {
                opacity: 1,
                x: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                x: -100,
                scale: 0.5
            },
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            },
            className: "fixed left-6 md:left-8 bottom-8 z-50",
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: ()=>setIsHovered(false),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: scrollToTop,
                    className: "group relative",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-40 blur-xl",
                            animate: {
                                scale: [
                                    1,
                                    1.3,
                                    1
                                ],
                                opacity: [
                                    0.4,
                                    0.7,
                                    0.4
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/scroll-trigger-button.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute -inset-2 border-2 border-cyan-400/50 rounded-full",
                            animate: {
                                rotate: [
                                    0,
                                    360
                                ]
                            },
                            transition: {
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/scroll-trigger-button.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-500 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl shadow-teal-500/60 border-4 border-white/20 backdrop-blur-xl overflow-hidden",
                            animate: {
                                boxShadow: [
                                    "0 0 40px rgba(20, 184, 166, 0.6)",
                                    "0 0 80px rgba(6, 182, 212, 0.8)",
                                    "0 0 40px rgba(20, 184, 166, 0.6)"
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                                    animate: {
                                        x: [
                                            "-100%",
                                            "200%"
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/scroll-trigger-button.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        y: [
                                            0,
                                            -8,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        className: "w-8 h-8 md:w-10 md:h-10 text-white relative z-10",
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/components/scroll-trigger-button.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/scroll-trigger-button.tsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                [
                                    ...Array(4)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute w-1.5 h-1.5 bg-white rounded-full",
                                        style: {
                                            left: `${25 + i * 15}%`,
                                            bottom: "10%"
                                        },
                                        animate: {
                                            y: [
                                                0,
                                                -60,
                                                -60
                                            ],
                                            opacity: [
                                                0,
                                                1,
                                                0
                                            ],
                                            scale: [
                                                0,
                                                1,
                                                0
                                            ]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                            ease: "easeOut"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/scroll-trigger-button.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/scroll-trigger-button.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                exit: {
                                    opacity: 0,
                                    x: -20
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                },
                                className: "absolute left-24 md:left-28 top-1/2 -translate-y-1/2 whitespace-nowrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-slate-900 to-teal-900 backdrop-blur-2xl px-6 py-3 rounded-2xl border-2 border-teal-400/50 shadow-2xl shadow-teal-500/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                                className: "w-5 h-5 text-cyan-400 animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/components/scroll-trigger-button.tsx",
                                                lineNumber: 156,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-bold bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent font-['Montserrat']",
                                                children: "Back to Top"
                                            }, void 0, false, {
                                                fileName: "[project]/components/scroll-trigger-button.tsx",
                                                lineNumber: 157,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-4 h-4 text-teal-400 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/scroll-trigger-button.tsx",
                                                lineNumber: 160,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/scroll-trigger-button.tsx",
                                        lineNumber: 155,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/scroll-trigger-button.tsx",
                                    lineNumber: 154,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/scroll-trigger-button.tsx",
                                lineNumber: 147,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/scroll-trigger-button.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/scroll-trigger-button.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        ...Array(6)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute w-2 h-2 bg-cyan-300/60 rounded-full backdrop-blur-sm",
                            style: {
                                left: `${Math.cos(i * Math.PI / 3) * 50}px`,
                                top: `${Math.sin(i * Math.PI / 3) * 50}px`
                            },
                            animate: {
                                scale: [
                                    0,
                                    1.5,
                                    0
                                ],
                                opacity: [
                                    0,
                                    0.8,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeOut"
                            }
                        }, i, false, {
                            fileName: "[project]/components/scroll-trigger-button.tsx",
                            lineNumber: 172,
                            columnNumber: 17
                        }, this))
                }, void 0, false),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute inset-0 w-full h-full -rotate-90 pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: "50%",
                            cy: "50%",
                            r: "44",
                            stroke: "url(#gradient)",
                            strokeWidth: "3",
                            fill: "none",
                            strokeLinecap: "round",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: Math.min(window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight), 1)
                            },
                            transition: {
                                duration: 0.3
                            },
                            style: {
                                filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/scroll-trigger-button.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "gradient",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#14b8a6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/scroll-trigger-button.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "#06b6d4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/scroll-trigger-button.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#14b8a6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/scroll-trigger-button.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/scroll-trigger-button.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/scroll-trigger-button.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/scroll-trigger-button.tsx",
                    lineNumber: 195,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/scroll-trigger-button.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/scroll-trigger-button.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ScrollTriggerButton, "6CyLk/E0zW5THW6fqU0w2qHSMlY=");
_c = ScrollTriggerButton;
var _c;
__turbopack_context__.k.register(_c, "ScrollTriggerButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/animated-cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedCursor",
    ()=>AnimatedCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplet.js [app-client] (ecmascript) <export default as Droplet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnimatedCursor() {
    _s();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClicking, setIsClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clickPosition, setClickPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [showClickEffect, setShowClickEffect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCursor.useEffect": ()=>{
            const updateMousePosition = {
                "AnimatedCursor.useEffect.updateMousePosition": (e)=>{
                    setMousePosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["AnimatedCursor.useEffect.updateMousePosition"];
            const handleMouseDown = {
                "AnimatedCursor.useEffect.handleMouseDown": (e)=>{
                    setIsClicking(true);
                    setClickPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                    setShowClickEffect(true);
                    setTimeout({
                        "AnimatedCursor.useEffect.handleMouseDown": ()=>setShowClickEffect(false)
                    }["AnimatedCursor.useEffect.handleMouseDown"], 800);
                }
            }["AnimatedCursor.useEffect.handleMouseDown"];
            const handleMouseUp = {
                "AnimatedCursor.useEffect.handleMouseUp": ()=>setIsClicking(false)
            }["AnimatedCursor.useEffect.handleMouseUp"];
            const handleMouseOver = {
                "AnimatedCursor.useEffect.handleMouseOver": (e)=>{
                    const target = e.target;
                    if (target.tagName === "A" || target.tagName === "BUTTON" || target.classList.contains("cursor-hover") || target.closest("a") || target.closest("button")) {
                        setIsHovering(true);
                    } else {
                        setIsHovering(false);
                    }
                }
            }["AnimatedCursor.useEffect.handleMouseOver"];
            window.addEventListener("mousemove", updateMousePosition);
            window.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("mouseover", handleMouseOver);
            return ({
                "AnimatedCursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", updateMousePosition);
                    window.removeEventListener("mousedown", handleMouseDown);
                    window.removeEventListener("mouseup", handleMouseUp);
                    window.removeEventListener("mouseover", handleMouseOver);
                }
            })["AnimatedCursor.useEffect"];
        }
    }["AnimatedCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 pointer-events-none z-[9999]",
                animate: {
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.4 : isClicking ? 0.7 : 1
                },
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-8 h-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        className: "w-full h-full drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "dropletGradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#06b6d4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/animated-cursor.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "50%",
                                            stopColor: "#14b8a6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/animated-cursor.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#0891b2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/animated-cursor.tsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/animated-cursor.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/animated-cursor.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
                                fill: "url(#dropletGradient)",
                                stroke: "#06b6d4",
                                strokeWidth: "1.5",
                                animate: {
                                    scale: isClicking ? [
                                        1,
                                        0.8,
                                        1
                                    ] : [
                                        1,
                                        1.05,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: isClicking ? 0.3 : 2,
                                    repeat: isClicking ? 0 : Infinity
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/animated-cursor.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "10",
                                cy: "10",
                                rx: "2",
                                ry: "3",
                                fill: "white",
                                opacity: "0.6"
                            }, void 0, false, {
                                fileName: "[project]/components/animated-cursor.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/animated-cursor.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/animated-cursor.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/animated-cursor.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 pointer-events-none z-[9998]",
                animate: {
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24
                },
                transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-12 h-12 rounded-full border-2 border-cyan-400/40",
                    animate: {
                        scale: [
                            1,
                            1.3,
                            1
                        ],
                        opacity: [
                            0.4,
                            0.7,
                            0.4
                        ],
                        borderColor: [
                            "rgba(6, 182, 212, 0.4)",
                            "rgba(20, 184, 166, 0.7)",
                            "rgba(6, 182, 212, 0.4)"
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/animated-cursor.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/animated-cursor.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 pointer-events-none z-[9997]",
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    x: mousePosition.x + 20,
                    y: mousePosition.y - 30,
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    type: "spring",
                    stiffness: 300
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl p-2 shadow-2xl shadow-cyan-500/50 border-2 border-white/30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                        className: "w-4 h-4 text-white"
                    }, void 0, false, {
                        fileName: "[project]/components/animated-cursor.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/animated-cursor.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/animated-cursor.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            showClickEffect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    [
                        ...Array(3)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "fixed top-0 left-0 pointer-events-none z-[9996]",
                            initial: {
                                x: clickPosition.x - 20,
                                y: clickPosition.y - 20,
                                scale: 0,
                                opacity: 1
                            },
                            animate: {
                                scale: 2 + i * 0.5,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: "easeOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-full border-4 border-cyan-400/80 shadow-xl shadow-cyan-400/50"
                            }, void 0, false, {
                                fileName: "[project]/components/animated-cursor.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/animated-cursor.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)),
                    [
                        ...Array(8)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "fixed top-0 left-0 pointer-events-none z-[9996]",
                            initial: {
                                x: clickPosition.x,
                                y: clickPosition.y
                            },
                            animate: {
                                x: clickPosition.x + Math.cos(i * Math.PI / 4) * 60,
                                y: clickPosition.y + Math.sin(i * Math.PI / 4) * 60,
                                opacity: [
                                    1,
                                    0
                                ],
                                scale: [
                                    0,
                                    1.5,
                                    0
                                ]
                            },
                            transition: {
                                duration: 0.6,
                                ease: "easeOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplet$3e$__["Droplet"], {
                                className: "w-3 h-3 text-cyan-400 fill-cyan-300"
                            }, void 0, false, {
                                fileName: "[project]/components/animated-cursor.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this)
                        }, `splash-${i}`, false, {
                            fileName: "[project]/components/animated-cursor.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "fixed top-0 left-0 pointer-events-none z-[9995]",
                animate: {
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20
                },
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/30 to-teal-400/30 blur-xl",
                    animate: {
                        scale: [
                            1,
                            1.4,
                            1
                        ],
                        opacity: [
                            0.3,
                            0.6,
                            0.3
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/animated-cursor.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/animated-cursor.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AnimatedCursor, "VsEIZCAdnO3/vL33B2GOkuoRlO8=");
_c = AnimatedCursor;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/whatsapp-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppButton",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WhatsAppButton() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatsAppButton.useEffect": ()=>{
            setIsClient(true);
            // Show button after scrolling a bit
            const handleScroll = {
                "WhatsAppButton.useEffect.handleScroll": ()=>{
                    setShowButton(window.scrollY > 300);
                }
            }["WhatsAppButton.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "WhatsAppButton.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["WhatsAppButton.useEffect"];
        }
    }["WhatsAppButton.useEffect"], []);
    const whatsappNumber = "15551234567" // Replace with actual number
    ;
    const defaultMessage = "Hi! I'm interested in your pool services.";
    const handleWhatsAppClick = ()=>{
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(url, '_blank');
    };
    if (!isClient) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: showButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed right-6 md:right-8 bottom-8 z-[9998] pointer-events-auto",
            initial: {
                scale: 0,
                x: 100,
                opacity: 0
            },
            animate: {
                scale: 1,
                x: 0,
                opacity: 1
            },
            exit: {
                scale: 0,
                x: 100,
                opacity: 0
            },
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-teal-500/20 overflow-hidden",
                        initial: {
                            opacity: 0,
                            y: 20,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            y: 20,
                            scale: 0.9
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-teal-600 to-cyan-600 p-4 relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"
                                    }, void 0, false, {
                                        fileName: "[project]/components/whatsapp-button.tsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsOpen(false),
                                        className: "absolute top-2 right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/whatsapp-button.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/whatsapp-button.tsx",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    className: "w-6 h-6 text-teal-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/whatsapp-button.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/whatsapp-button.tsx",
                                                lineNumber: 62,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-white font-bold text-sm",
                                                        children: "Doge Pools"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/whatsapp-button.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/90 text-xs",
                                                        children: "Typically replies instantly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/whatsapp-button.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/whatsapp-button.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/whatsapp-button.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/whatsapp-button.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-slate-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-xl p-4 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-700 text-sm mb-3",
                                            children: "👋 Hi there! Need help with your pool?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/whatsapp-button.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-600 text-xs leading-relaxed",
                                            children: "Chat with us on WhatsApp for instant support and free quotes!"
                                        }, void 0, false, {
                                            fileName: "[project]/components/whatsapp-button.tsx",
                                            lineNumber: 78,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/whatsapp-button.tsx",
                                    lineNumber: 74,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/whatsapp-button.tsx",
                                lineNumber: 73,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-white border-t border-slate-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleWhatsAppClick,
                                    className: "w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "w-5 h-5 group-hover:scale-110 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/components/whatsapp-button.tsx",
                                            lineNumber: 90,
                                            columnNumber: 21
                                        }, this),
                                        "Chat on WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/whatsapp-button.tsx",
                                    lineNumber: 86,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/whatsapp-button.tsx",
                                lineNumber: 85,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/whatsapp-button.tsx",
                        lineNumber: 45,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/whatsapp-button.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: ()=>setIsOpen(!isOpen),
                    className: "relative w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group overflow-hidden",
                    whileHover: {
                        scale: 1.1,
                        rotate: 5
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    animate: {
                        boxShadow: [
                            "0 10px 40px rgba(34,197,94,0.4)",
                            "0 10px 60px rgba(34,197,94,0.6)",
                            "0 10px 40px rgba(34,197,94,0.4)"
                        ]
                    },
                    transition: {
                        boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 rounded-full border-4 border-green-400",
                            animate: {
                                scale: [
                                    1,
                                    1.4,
                                    1
                                ],
                                opacity: [
                                    0.6,
                                    0,
                                    0.6
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/whatsapp-button.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: "w-8 h-8 md:w-9 md:h-9 text-white relative z-10 group-hover:scale-110 transition-transform",
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/components/whatsapp-button.tsx",
                            lineNumber: 134,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                            animate: {
                                x: [
                                    '-100%',
                                    '200%'
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/whatsapp-button.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/whatsapp-button.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this),
                [
                    ...Array(3)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-2 h-2 bg-green-400 rounded-full",
                        style: {
                            left: '50%',
                            top: '50%'
                        },
                        animate: {
                            x: [
                                0,
                                (i - 1) * 30
                            ],
                            y: [
                                0,
                                -40 - i * 10
                            ],
                            opacity: [
                                0.6,
                                0
                            ],
                            scale: [
                                1,
                                0.5
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeOut"
                        }
                    }, i, false, {
                        fileName: "[project]/components/whatsapp-button.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/whatsapp-button.tsx",
            lineNumber: 35,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/whatsapp-button.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(WhatsAppButton, "WUNG4yZH5WhIl8MF0JU2IrzifmA=");
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_9dca61c2._.js.map