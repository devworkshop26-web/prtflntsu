import Image from "next/image";
import { notFound } from "next/navigation";
import { CTAButton } from "@/components/CTAButton";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionReveal } from "@/components/SectionReveal";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-12 px-6 py-24">
      <SectionReveal>
        <SectionTitle
          eyebrow={project.category}
          title={project.title}
          description={project.description}
        />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10">
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" />
        </div>
      </SectionReveal>
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Objectifs</p>
              <p className="mt-3 text-sm text-muted">{project.story.challenge}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Solution</p>
              <p className="mt-3 text-sm text-muted">{project.story.solution}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Résultats</p>
              <p className="mt-3 text-sm text-muted">{project.results}</p>
            </div>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.story.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">{metric.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton label="Voir le site" href={project.links.live} />
              <CTAButton label="Retour" href="/" variant="ghost" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
