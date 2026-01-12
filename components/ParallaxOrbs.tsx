"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ParallaxOrbs() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -160]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: ySlow }}
        className="absolute left-[-120px] top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        style={{ y: yFast }}
        className="absolute right-[-100px] top-40 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl"
      />
      <motion.div
        style={{ y: ySlow }}
        className="absolute bottom-[-140px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl"
      />
    </div>
  );
}
