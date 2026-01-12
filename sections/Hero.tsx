import { CTAButton } from "@/components/CTAButton";
import { GradientBlob } from "@/components/GradientBlob";
import { ParallaxOrbs } from "@/components/ParallaxOrbs";
import { SectionReveal } from "@/components/SectionReveal";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-28">
      <ParallaxOrbs />
      <GradientBlob className="left-[-80px] top-16 h-60 w-60 opacity-70" />
      <GradientBlob className="right-[-120px] top-1/3 h-72 w-72 opacity-60" />
      <div className="absolute inset-0 bg-hero-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <SectionReveal>
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{site.location}</p>
            <h1 className="text-4xl font-semibold text-white md:text-6xl">{site.role}</h1>
            <p className="text-base text-muted md:text-lg">{site.tagline}</p>
            <div className="flex flex-wrap gap-4">
              <CTAButton label="Voir mes projets" href="#projects" />
              <CTAButton label="Me contacter" href="#contact" variant="ghost" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
