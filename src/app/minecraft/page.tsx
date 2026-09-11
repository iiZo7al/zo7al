import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import ServerStatus from "@/components/minecraft/ServerStatus";
import ServerConnect from "@/components/minecraft/ServerConnect";
import VersionTimeline from "@/components/minecraft/VersionTimeline";
import ModesGrid from "@/components/minecraft/ModesGrid";
import MagneticButton from "@/components/cursor/MagneticButton";
import { MINECRAFT_SERVER } from "@/lib/data/minecraft";

export const metadata: Metadata = {
  title: "Minecraft — ZO7AL Network",
  description: "Your next Minecraft adventure starts here.",
};

export default function MinecraftPage() {
  return (
    <main data-accent="minecraft">
      <PageHero
        eyebrow="Minecraft"
        title="ZO7AL NETWORK"
        text="Your next Minecraft adventure starts here."
      >
        <MagneticButton>
          <a
            href={MINECRAFT_SERVER.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="button"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            style={{ background: "var(--accent)", color: "#07080B" }}
          >
            Open Store
          </a>
        </MagneticButton>
      </PageHero>

      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-[1180px] px-6">
          <Reveal>
            <ServerStatus />
          </Reveal>
        </div>
      </section>

      <section className="relative border-t py-24 sm:py-32" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1180px] px-6">
          <SectionHeader
            eyebrow="Connect"
            title="Join in seconds"
            text="Java and Bedrock, one network."
          />
          <div className="mt-14">
            <ServerConnect />
          </div>
        </div>
      </section>

      <section className="relative border-t py-24 sm:py-32" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1180px] px-6">
          <SectionHeader eyebrow="Compatibility" title="Supported versions" />
          <div className="mt-14">
            <VersionTimeline />
          </div>
        </div>
      </section>

      <section className="relative border-t py-24 sm:py-32" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1180px] px-6">
          <SectionHeader eyebrow="Gameplay" title="Modes" />
          <div className="mt-14">
            <ModesGrid />
          </div>
        </div>
      </section>

      <section className="relative border-t py-24 sm:py-32" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1180px] px-6">
          <Reveal className="text-center" y={20}>
            <div style={{ background: "var(--surface)", borderColor: "var(--border)" }} className="rounded-3xl border p-10 sm:p-16">
              <p className="text-label mb-4" style={{ color: "var(--accent)" }}>
                Support the network
              </p>
              <h2 className="text-display text-4xl sm:text-5xl">SUPPORT ZO7AL</h2>
              <p className="mt-5 mx-auto max-w-md text-lg text-[var(--text-muted)]">
                Support the network and explore the official Zo7al store.
              </p>
              <div className="mt-8">
                <MagneticButton>
                  <a
                    href={MINECRAFT_SERVER.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
                    style={{ background: "var(--accent)", color: "#07080B" }}
                  >
                    Open Store →
                  </a>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
