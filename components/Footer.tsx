import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-xs text-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p>© 2024 {site.name}. Tous droits réservés.</p>
        <div className="flex items-center gap-4">
          {site.socials.map((social) => (
            <a key={social.label} href={social.href} className="uppercase tracking-[0.3em] text-white/60 hover:text-white">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
