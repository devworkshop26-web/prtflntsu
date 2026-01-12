import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { differentiators, site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <div className="space-y-6">
            <SectionTitle
              eyebrow="À propos"
              title="Construire des expériences premium, guidées par la performance."
              description="Un profil hybride entre design, produit et automatisation, pour livrer rapidement des interfaces élégantes et des processus qui tournent seuls."
            />
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/80 md:text-base md:leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
              <p className="text-sm text-slate-300/80 md:text-base md:leading-relaxed">
                {site.name} aide les équipes ambitieuses à scaler grâce à des interfaces ultra fluides et des
                automatisations sans friction.
              </p>
              <p className="mt-4 text-sm text-slate-300/80 md:text-base md:leading-relaxed">
                Chaque projet est pensé pour livrer un impact mesurable, avec un design sobre, des micro-interactions
                élégantes et une architecture performante.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {site.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-surface/70 p-4 text-center">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
