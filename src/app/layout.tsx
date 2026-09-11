import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/cursor/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://zo7al.example"),
  title: {
    default: "ZO7AL — Gaming Universe",
    template: "%s — ZO7AL",
  },
  description:
    "Zo7al is a gaming creator building Minecraft networks, modpacks, Fortnite Creative maps and experimental gaming projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <MotionConfig reducedMotion="user">
          <div className="grain" aria-hidden="true" />
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <div className="flex-1">{children}</div>
          </PageTransition>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
