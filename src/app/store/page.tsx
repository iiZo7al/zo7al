import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import StoreRanks from "@/components/store/StoreRanks";
import MagneticButton from "@/components/cursor/MagneticButton";
import { STORE_URL } from "@/lib/data/store";

export const metadata: Metadata = {
  title: "Store — ZO7AL",
  description: "Support the network and explore the official Zo7al store.",
};

export default function StorePage() {
  return (
    <main data-accent="store">
      <PageHero eyebrow="Support Zo7al" title="SUPPORT ZO7AL" text="Support the network and explore the official Zo7al store.">
        <MagneticButton>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="button"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            style={{ background: "var(--accent)", color: "#07080B" }}
          >
            Open Store →
          </a>
        </MagneticButton>
      </PageHero>

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1180px] px-6">
          <SectionHeader eyebrow="Ranks" title="Server ranks" text="Prices and perks as listed on the official Tebex store." />
          <div className="mt-14">
            <StoreRanks />
          </div>
        </div>
      </section>

      <section className="relative border-t py-24 sm:py-32" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1180px] px-6 text-center">
          <p className="text-lg text-[var(--text-muted)]">
            All purchases are processed securely through Tebex — Zo7al&apos;s official store.
          </p>
          <div className="mt-7 flex justify-center">
            <MagneticButton>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="button"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold"
                style={{ borderColor: "var(--border-strong)" }}
              >
                Visit zo7al.tebex.io ↗
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
