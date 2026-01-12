"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative mx-auto max-w-md"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-cyan-400/30 via-violet-400/20 to-fuchsia-400/30 blur-2xl"
        animate={prefersReducedMotion ? undefined : { opacity: [0.5, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-surface/80 p-2 shadow-card"
        animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
          <Image
            src="/hero.svg"
            alt="Portrait premium"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, 60vw"
            priority
          />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/10" />
      </motion.div>
    </motion.div>
  );
}
