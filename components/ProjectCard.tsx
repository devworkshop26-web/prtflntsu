"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  metrics: { label: string; value: string }[];
};

export function ProjectCard({ title, description, image, tags, href, metrics }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      whileHover={prefersReducedMotion ? undefined : { y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-6 shadow-card backdrop-blur transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base"
    >
      <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/25" />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 transition group-hover:ring-primary/40" />
      <div className="relative">
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
          <Image src={image} alt={title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
        <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-primary/70">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/30 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-white md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-slate-300/80 md:text-base md:leading-relaxed">{description}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/80">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="uppercase tracking-[0.2em] text-[10px] text-white/50">{metric.label}</p>
              <p className="text-sm font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80">
          <span>Détails</span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70 transition group-hover:scale-110" />
        </div>
      </div>
    </motion.a>
  );
}
