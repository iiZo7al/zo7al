import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SocialGrid from "@/components/socials/SocialGrid";

export const metadata: Metadata = {
  title: "Socials — ZO7AL",
  description: "Follow the journey.",
};

export default function SocialsPage() {
  return (
    <main data-accent="socials">
      <PageHero eyebrow="Community" title="FOLLOW THE JOURNEY." text="Every platform, one place to start." />

      <section className="relative pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1180px] px-6">
          <SocialGrid />
        </div>
      </section>
    </main>
  );
}
