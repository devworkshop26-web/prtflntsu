import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="Services"
            title="Des offres calibrées pour accélérer vos projets."
            description="Des livrables clairs, des délais réalistes et un accompagnement premium."
          />
        </SectionReveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/80">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">{service.timeline}</p>
                  <CTAButton label={service.cta} href="#contact" variant="ghost" />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
