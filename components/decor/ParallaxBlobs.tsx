"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxBlobsProps = {
  className?: string;
};

export function ParallaxBlobs({ className }: ParallaxBlobsProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ySlow = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const yFast = useTransform(scrollYProgress, [0, 1], [20, -30]);
  const xShift = useTransform(scrollYProgress, [0, 1], [-12, 16]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <motion.div
        style={{ y: ySlow }}
        className="absolute left-[-120px] top-10 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400/20 via-transparent to-fuchsia-400/20 blur-3xl"
      />
      <motion.div
        style={{ y: yFast, x: xShift }}
        className="absolute right-[-160px] top-1/3 h-72 w-72 rounded-full bg-gradient-to-tr from-violet-400/20 via-transparent to-cyan-400/20 blur-3xl"
      />
      <motion.div
        style={{ y: ySlow }}
        className="absolute bottom-[-160px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-400/20 via-transparent to-violet-400/20 blur-3xl"
      />
    </div>
  );
}
