import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import MapGallery from "@/components/fortnite/MapGallery";
import MagneticButton from "@/components/cursor/MagneticButton";
import { FORTNITE_PROFILE_URL } from "@/lib/data/fortnite";

export const metadata: Metadata = {
  title: "Fortnite Creative — ZO7AL",
  description: "Maps and experiences built by Zo7al.",
};

export default function FortnitePage() {
  return (
    <main data-accent="fortnite">
      <PageHero
        eyebrow="Fortnite Creative"
        title="FORTNITE CREATIVE"
        text="Maps and experiences built by Zo7al."
      >
        <MagneticButton>
          <a
            href={FORTNITE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="button"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            style={{ background: "var(--accent)", color: "#07080B" }}
          >
            Creator Page ↗
          </a>
        </MagneticButton>
      </PageHero>

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1180px] px-6">
          <SectionHeader eyebrow="Islands" title="Every map, one place" />
          <div className="mt-14">
            <MapGallery />
          </div>
        </div>
      </section>
    </main>
  );
}
