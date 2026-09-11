"use client";

import { useState } from "react";
import { MINECRAFT_SERVER } from "@/lib/data/minecraft";
import { flashCursor } from "@/components/cursor/CustomCursor";
import MagneticButton from "@/components/cursor/MagneticButton";

function CopyRow({
  label,
  address,
  disabledNote,
}: {
  label: string;
  address: string | null;
  disabledNote?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      flashCursor("COPIED", 1200);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — no-op, address is still visible/selectable
    }
  };

  return (
    <div
      className="flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div>
        <p className="text-label mb-2">{label}</p>
        {address ? (
          <p className="font-mono text-lg sm:text-xl">{address}</p>
        ) : (
          <p className="text-lg text-[var(--text-muted)]">{disabledNote}</p>
        )}
      </div>

      {address && (
        <MagneticButton>
          <button
            type="button"
            onClick={handleCopy}
            data-cursor="copy"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
            style={{
              background: copied ? "var(--accent)" : "transparent",
              color: copied ? "#07080B" : "var(--text)",
              border: copied ? "1px solid transparent" : "1px solid var(--border-strong)",
            }}
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Copied
              </>
            ) : (
              `Copy ${label}`
            )}
          </button>
        </MagneticButton>
      )}
    </div>
  );
}

export default function ServerConnect() {
  return (
    <div className="grid gap-5">
      <CopyRow label="Java IP" address={MINECRAFT_SERVER.javaAddress} />
      <CopyRow
        label="Bedrock Address"
        address={MINECRAFT_SERVER.bedrockAddress}
        disabledNote="Bedrock support is on the roadmap — not published yet."
      />
    </div>
  );
}
