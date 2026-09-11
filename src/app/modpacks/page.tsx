import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ModpackGallery from "@/components/modpacks/ModpackGallery";
import CurseForgeGallery from "@/components/modpacks/CurseForgeGallery";

export const metadata: Metadata = {
  title: "Modpacks — ZO7AL",
  description: "Explore Minecraft projects created by Zo7al.",
};

export default function ModpacksPage() {
  return (
    <main data-accent="modpacks">
      <PageHero
        eyebrow="Modpacks"
        title="MINECRAFT, REIMAGINED."
        text="Explore Minecraft projects created by Zo7al."
      />

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1180px] px-6">
          <SectionHeader eyebrow="Modrinth" title="Modrinth releases" />
          <div className="mt-14">
            <ModpackGallery />
          </div>
        </div>
      </section>

      <section className="relative border-t py-24 sm:py-32" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1180px] px-6">
          <SectionHeader eyebrow="CurseForge" title="CurseForge mirrors" />
          <div className="mt-14">
            <CurseForgeGallery />
          </div>
        </div>
      </section>
    </main>
  );
}
