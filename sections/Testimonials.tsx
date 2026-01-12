import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { testimonials } from "@/data/site";

const logos = ["Nova", "Lumen", "Arcadia", "Flux", "Pulse"];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="Témoignages"
            title="Des partenaires qui misent sur l’élégance et l’impact."
            description="Une collaboration fluide, des résultats mesurables et une expérience premium."
          />
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <SectionReveal key={item.name} delay={index * 0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/80">“{item.quote}”</p>
                <div className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">
                  {item.name} · {item.role}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.4em] text-white/40">
            {logos.map((logo) => (
              <span key={logo} className="rounded-full border border-white/10 px-4 py-2">
                {logo}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
