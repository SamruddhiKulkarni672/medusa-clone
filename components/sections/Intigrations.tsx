"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HomeScene from "@/components/sections/Features"
 

gsap.registerPlugin(ScrollTrigger)

export default function Page() {
  useEffect(() => {
    gsap.to(".home-content", {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    gsap.from(".product-card", {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".products",
        start: "top center",
        scrub: true,
      },
    })
  }, [])

  return (
    <main className="relative bg-black text-white">
      <HomeScene />

      <section className="home h-screen flex items-center justify-center relative z-10">
        <h1 className="home-content text-6xl font-bold">
          Welcome to Antigravity Style
        </h1>
      </section>

     
    </main>
  )
}