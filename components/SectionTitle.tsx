type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-sm text-muted md:text-base">{description}</p> : null}
    </div>
  );
}
