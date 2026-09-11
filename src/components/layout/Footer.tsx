import Link from "next/link";
import { NAV_LINKS, SITE, STORE_LINK } from "@/lib/data/site";
import { MODRINTH_PROFILE_URL } from "@/lib/data/modrinth";
import { CURSEFORGE_PROFILE_URL } from "@/lib/data/curseforge";
import { FORTNITE_PROFILE_URL } from "@/lib/data/fortnite";

const platforms = [
  { label: "Modrinth", href: MODRINTH_PROFILE_URL },
  { label: "CurseForge", href: CURSEFORGE_PROFILE_URL },
  { label: "Fortnite", href: FORTNITE_PROFILE_URL },
  { label: "Tebex", href: STORE_LINK },
];

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1180px] px-6 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            {SITE.name}
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <p className="text-label mb-4">Site</p>
          <ul className="flex flex-col gap-3">
            {[...NAV_LINKS, { label: "Store", href: "/store" }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  data-cursor="link"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-label mb-4">Platforms</p>
          <ul className="flex flex-col gap-3">
            {platforms.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="mx-auto max-w-[1180px] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t text-xs text-[var(--text-muted)]"
        style={{ borderColor: "var(--border)" }}
      >
        <p>© {SITE.year} Zo7al. All rights reserved.</p>
        <p>Not an official Minecraft, Epic Games or Fortnite service.</p>
      </div>
    </footer>
  );
}
