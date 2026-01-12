"use client";

import { motion, useReducedMotion } from "framer-motion";

type CTAButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

export function CTAButton({ label, href, variant = "primary" }: CTAButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base ${
        variant === "primary"
          ? "border-primary/40 bg-gradient-to-r from-cyan-400/20 via-violet-400/20 to-fuchsia-400/20 text-white shadow-glow hover:border-primary/70"
          : "border-white/10 bg-white/5 text-white/80 hover:border-white/30"
      }`}
    >
      <span>{label}</span>
      <span className="h-1.5 w-1.5 rounded-full bg-primary/80 shadow-glow transition group-hover:scale-110" />
    </motion.a>
  );
}
