"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  useEffect(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition ${
        isScrolled ? "backdrop-blur-xl bg-base/80 border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-white">
        <a href="#" className="font-display text-lg uppercase tracking-[0.3em]">
          A.D.
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <CTAButton label="Discuter" href="#contact" variant="ghost" />
        </div>
      </nav>
      <motion.div
        className="h-[3px] origin-left bg-gradient-to-r from-cyan-400/80 via-violet-400/80 to-fuchsia-400/80"
        style={{ scaleX: scrollYProgress, opacity: isScrolled ? 1 : 0 }}
      />
    </motion.header>
  );
}
