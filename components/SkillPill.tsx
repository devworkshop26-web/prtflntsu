"use client";

import { motion, useReducedMotion } from "framer-motion";

type SkillPillProps = {
  label: string;
};

export function SkillPill({ label }: SkillPillProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:-translate-y-1 hover:border-primary/50 hover:text-white"
    >
      {label}
    </motion.span>
  );
}
