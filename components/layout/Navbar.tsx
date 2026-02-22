// "use client"
// import { motion, useScroll, useTransform } from "framer-motion"

// export default function Navbar() {
//   const { scrollY } = useScroll()
//   const bg = useTransform(scrollY, [0, 80], 
//     ["rgba(10,10,10,0)", "rgba(10,10,10,0.85)"]
//   )

//   return (
//     <motion.nav
//       style={{ background: bg }}
//       className="fixed w-full z-50 backdrop-blur-xl border-b border-white/[0.06]"
//     >
//       <div className="max-w-[1200px] mx-auto px-6 py-5 flex justify-between items-center">
//         <div className="font-semibold tracking-tight text-lg">
//           YourBrand
//         </div>

//         <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
//           <a className="hover:text-white transition duration-200">Docs</a>
//           <a className="hover:text-white transition duration-200">Pricing</a>
//           <a className="hover:text-white transition duration-200">GitHub</a>
//         </div>
//       </div>
//     </motion.nav>
//   )
// }







"use client";

import { ShoppingCart, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <div className="relative z-10">

      <header className="relative flex items-center justify-between px-20 py-6 border-b border-black/10 bg-[#f6f5f3]">

        {/* LEFT MASK SQUARE */}
        <div className="absolute left-12 bottom-0 translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#f6f5f3] border border-black/20 z-20" />

        {/* RIGHT MASK SQUARE */}
        <div className="absolute right-12 bottom-0 translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#f6f5f3] border border-black/20 z-20" />

        <div className="text-lg tracking-[0.35em] font-light">
          YOURHOME
        </div>

        <nav className="hidden md:flex gap-12 text-[14px] font-light tracking-wide">
          <a className="hover:opacity-60 transition">Style</a>
          <a className="hover:opacity-60 transition">Collections</a>
          <a className="hover:opacity-60 transition">Blog</a>
          <a className="hover:opacity-60 transition">About</a>
        </nav>

        <div className="flex items-center gap-8">
          <ShoppingCart size={18} className="opacity-80 hover:opacity-100 cursor-pointer" />
          <Heart size={18} className="opacity-80 hover:opacity-100 cursor-pointer" />
          <button className="px-5 py-2 text-sm border border-black/20 rounded-full hover:bg-black hover:text-white transition">
            Sign In
          </button>
        </div>

      </header>
    </div>
  );
}