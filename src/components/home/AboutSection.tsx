import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/data/site";

export default function AboutSection() {
  return (
    <section className="relative border-t py-28 sm:py-36" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.6fr] md:gap-20">
          <Reveal>
            <p className="text-label" style={{ color: "var(--accent)" }}>
              Who is Zo7al?
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-display text-3xl sm:text-4xl md:text-5xl">
              {SITE.description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
