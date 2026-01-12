import { CTAButton } from "@/components/CTAButton";
import { GradientBlob } from "@/components/GradientBlob";
import { HeroVisual } from "@/components/HeroVisual";
import { SectionReveal } from "@/components/SectionReveal";
import { ParallaxBlobs } from "@/components/decor/ParallaxBlobs";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-28">
      <ParallaxBlobs />
      <GradientBlob className="left-[-80px] top-16 h-60 w-60 opacity-70" />
      <GradientBlob className="right-[-120px] top-1/3 h-72 w-72 opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{site.location}</p>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
                {site.role}
              </h1>
              <p className="text-base leading-relaxed text-slate-200/90 md:text-lg">{site.tagline}</p>
              <div className="flex flex-wrap gap-4">
                <CTAButton label="Voir mes projets" href="#projects" />
                <CTAButton label="Me contacter" href="#contact" variant="ghost" />
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-xs uppercase tracking-[0.3em] text-white/60">
                {["Next.js", "n8n", "Automation"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:-translate-y-1 hover:border-primary/50 hover:text-white"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1} className="flex justify-center">
            <HeroVisual />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
