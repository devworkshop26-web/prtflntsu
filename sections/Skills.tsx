import { SectionReveal } from "@/components/SectionReveal";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillPill } from "@/components/SkillPill";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionReveal>
          <SectionTitle
            eyebrow="Compétences"
            title="Un socle technique moderne, orienté produit et automation."
            description="Des stacks solides, combinées à une sensibilité UI pour livrer des produits premium et rapides."
          />
        </SectionReveal>
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <SectionReveal key={group.category} delay={index * 0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
