"use client";

import { useMemo, useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { ParallaxBlobs } from "@/components/decor/ParallaxBlobs";
import { filters, projects } from "@/data/site";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const visibleProjects = useMemo(() => {
    if (activeFilter === "Tous") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <ParallaxBlobs className="opacity-50" />
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="Projets"
            title="Des expériences premium qui combinent design, data et automation."
            description="Chaque projet est un concentré de performance, d'élégance et d'impact business."
          />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base ${
                  activeFilter === filter
                    ? "border-primary/60 bg-primary/10 text-white"
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </SectionReveal>
        <div className="grid gap-8 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <SectionReveal key={project.slug} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                href={project.links.case}
                metrics={project.metrics}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
