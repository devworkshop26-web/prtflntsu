"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxDotsProps = {
  className?: string;
};

export function ParallaxDots({ className }: ParallaxDotsProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [10, -20]);
  const xOffset = useTransform(scrollYProgress, [0, 1], [-10, 12]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <motion.div
        style={{ y: yOffset, x: xOffset }}
        className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(126,224,255,0.35)_1px,_transparent_1px)] [background-size:18px_18px] opacity-40"
      />
      <motion.div
        style={{ y: yOffset }}
        className="absolute right-8 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(182,156,255,0.3)_1px,_transparent_1px)] [background-size:20px_20px] opacity-35"
      />
      <motion.div
        style={{ y: yOffset, x: xOffset }}
        className="absolute bottom-12 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(240,183,255,0.3)_1px,_transparent_1px)] [background-size:16px_16px] opacity-30"
      />
    </div>
  );
}
