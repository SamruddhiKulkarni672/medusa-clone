"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How to Use", href: "#features" },
  { label: "Features", href: "#artworks" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-all duration-300 ${
        scrolled ? "top-3" : "top-6"
      }`}
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`rounded-2xl bg-[#111111]/85 backdrop-blur-xl shadow-lg    transition-all duration-300 ${
          scrolled ? "px-6 py-1" : "px-8 py-3"
        }`}
      >
        <div className="flex items-center justify-between gap-6">

          {/* LOGO */}
          <a href="#home" className="flex items-center transition-all duration-300">
            <img
              src="/logo.gif"
              alt="Logo"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-10 w-14 my-1" : "h-14 w-20"
              }`}
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              className={`rounded-lg bg-black text-white transition-all duration-300 hover:scale-105 ${
                scrolled ? "px-4 py-2 text-sm" : "px-5 py-3"
              }`}
            >
              Start
            </Button>
          </div>

          {/* MOBILE MENU */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-[#111111] text-white">
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-white/80 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}

                <Button className="mt-4 rounded-lg bg-black text-white">
                  Start
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

        </div>
      </motion.header>
    </div>
  );
}
