// "use client"
// import { motion } from "framer-motion"

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

//       {/* Grid Background Layer */}
//       <div className="absolute inset-0 -z-40 side-grid vertical-lines" />

//       {/* Floating Glow */}
//       <motion.div
//         className="absolute top-[-200px] left-1/2 -translate-x-1/2 -z-30"
//         animate={{
//           x: [0, 40, -40, 0],
//           y: [0, 30, -30, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <div className="w-[900px] h-[900px] bg-purple-600/20 blur-[200px] rounded-full" />
//       </motion.div>

//       {/* Floating Shapes */}
//       <div className="floating-shape shape-1 -z-20" />
//       <div className="floating-shape shape-2 -z-20" />

//       {/* Content */}
//       <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-[56px] md:text-[80px] leading-[1.05] font-semibold tracking-tight"
//         >
//           Build Commerce <br />
//           Without Limits
//         </motion.h1>

//         <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
//           A modern commerce engine designed for developers.
//         </p>

//         <div className="mt-10 flex justify-center gap-4">
//           <button className="px-6 py-3 rounded-lg bg-white text-black text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition duration-300">
//             Get Started
//           </button>

//           <button className="px-6 py-3 rounded-lg text-sm border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.15] transition duration-300">
//             View Docs
//           </button>
//         </div>

//       </div>

//     </section>
//   )
// }







"use client";

import Navbar from "@/components/layout/Navbar";
import { Ruler, BedDouble, Bath } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f6f5f3] text-[#1a1a1a] overflow-hidden">

      {/* Page Vertical Grid Lines */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-black/10" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-black/10" />

      <Navbar />

      <section className="relative flex flex-col items-center text-center pt-28 px-6">

        {/* Title */}
        <h1
          className="text-[68px] leading-[76px] max-w-4xl font-serif font-medium"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Designed for Living,
          <br />
          Built for You
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl text-lg leading-relaxed">
          Discover beautifully crafted house plans designed for modern living.
          We make the process easy, so you can focus on bringing your dream
          home to life.
        </p>

        {/* ================= EXACT FILTER BAR ================= */}
        <div className="relative mt-14 w-full max-w-5xl">

          
          <div className="flex items-center justify-between bg-white/10 rounded-full border border-black/10 px-8 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

            {/* Item */}
            <div className="flex items-center gap-4 pr-10">
              <Ruler size={18} className="opacity-70" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-gray-400">
                  SQ FT Min
                </p>
                <select className="bg-transparent text-sm outline-none">
                  <option>Select</option>
                </select>
              </div>
            </div>

            <div className="h-8 w-px bg-black/10" />

            <div className="flex items-center gap-4 px-10">
              <Ruler size={18} className="opacity-70" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-gray-400">
                  SQ FT Max
                </p>
                <select className="bg-transparent text-sm outline-none">
                  <option>Select</option>
                </select>
              </div>
            </div>

            <div className="h-8 w-px bg-black/10" />

            <div className="flex items-center gap-4 px-10">
              <BedDouble size={18} className="opacity-70" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-gray-400">
                  Bedrooms
                </p>
                <select className="bg-transparent text-sm outline-none">
                  <option>Select</option>
                </select>
              </div>
            </div>

            <div className="h-8 w-px bg-black/10" />

            <div className="flex items-center gap-4 pl-10">
              <Bath size={18} className="opacity-70" />
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-gray-400">
                  Baths
                </p>
                <select className="bg-transparent text-sm outline-none">
                  <option>Select</option>
                </select>
              </div>
            </div>

            {/* CTA */}
            <button className="ml-8 bg-black text-white px-9 py-4 rounded-full text-sm tracking-wide hover:opacity-90 transition">
              Browse Plans →
            </button>

          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-24 w-full max-w-5xl">
          <img
            src="/house-blueprint.png"
            alt="House"
            className="w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f6f5f3] to-transparent" />
        </div>

      </section>
    </div>
  );
}