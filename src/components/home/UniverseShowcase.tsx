import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import ProjectArt from "./ProjectArt";

const PROJECTS = [
  {
    id: "minecraft",
    variant: "minecraft" as const,
    meta: ["MINECRAFT", "JAVA + BEDROCK"],
    title: "ZO7AL NETWORK",
    text: "A Minecraft network built for players.",
    cta: "Explore Network",
    href: "/minecraft",
  },
  {
    id: "modpacks",
    variant: "modpacks" as const,
    meta: ["MODPACKS", "MODRINTH + CURSEFORGE"],
    title: "MINECRAFT MODPACKS",
    text: "Minecraft experiences created and curated by Zo7al.",
    cta: "View Modpacks",
    href: "/modpacks",
  },
  {
    id: "fortnite",
    variant: "fortnite" as const,
    meta: ["FORTNITE", "CREATIVE"],
    title: "FORTNITE CREATIVE",
    text: "Maps and experiences created by Zo7al.",
    cta: "Explore Maps",
    href: "/fortnite",
  },
];

export default function UniverseShowcase() {
  return (
    <section id="universe" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-[1180px] px-6">
        <SectionHeader
          eyebrow="The projects"
          title="The ZO7AL universe"
          text="Explore the worlds, projects and experiences built by Zo7al."
        />

        <div className="mt-20 flex flex-col gap-28">
          {PROJECTS.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={p.id} delay={0.05}>
                <Link
                  href={p.href}
                  data-cursor="project"
                  className={`group grid items-center gap-10 md:grid-cols-2 md:gap-16`}
                >
                  <div className={reversed ? "md:order-2" : ""}>
                    <ProjectArt variant={p.variant} />
                  </div>
                  <div className={reversed ? "md:order-1" : ""}>
                    <div className="flex items-center gap-3 text-label">
                      {p.meta.map((m) => (
                        <span key={m} style={{ color: "var(--accent)" }}>
                          {m}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-display mt-5 text-3xl sm:text-4xl md:text-5xl">
                      {p.title}
                    </h3>
                    <p className="mt-5 max-w-md text-lg text-[var(--text-muted)]">{p.text}</p>
                    <span
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.cta}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
