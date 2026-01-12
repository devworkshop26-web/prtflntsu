import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { CTAButton } from "@/components/CTAButton";
import { ParallaxBlobs } from "@/components/decor/ParallaxBlobs";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <ParallaxBlobs className="opacity-50" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionReveal>
          <SectionTitle
            eyebrow="Contact"
            title="Discutons de votre prochain lancement premium."
            description="Un formulaire rapide et des réponses claires sous 24h."
          />
          <div className="mt-6 space-y-4 text-sm text-slate-300/80 md:text-base md:leading-relaxed">
            <p>
              Un brief, une idée, un besoin d’automatisation ? Je vous accompagne de la stratégie au delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              {site.socials.map((social) => (
                <a key={social.label} href={social.href} className="text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <label className="block text-xs uppercase tracking-[0.3em] text-muted">
              Nom
              <input
                type="text"
                name="name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-base/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60"
                placeholder="Votre nom"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.3em] text-muted">
              Email
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-base/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60"
                placeholder="vous@email.com"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.3em] text-muted">
              Message
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/10 bg-base/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary/60"
                placeholder="Parlez-moi de votre projet"
              />
            </label>
            <CTAButton label="Envoyer" href="mailto:hello@alexd.dev" />
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
