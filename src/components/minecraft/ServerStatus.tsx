"use client";

import { useEffect, useState } from "react";
import { MINECRAFT_SERVER } from "@/lib/data/minecraft";

type Status =
  | { state: "loading" }
  | { state: "error" }
  | {
      state: "ready";
      online: boolean;
      players?: { online: number; max: number };
      version?: string;
    };

export default function ServerStatus() {
  const [status, setStatus] = useState<Status>({ state: "loading" });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    fetch(`https://api.mcstatus.io/v2/status/java/${MINECRAFT_SERVER.javaAddress}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setStatus({
          state: "ready",
          online: Boolean(data.online),
          players: data.players
            ? { online: data.players.online ?? 0, max: data.players.max ?? 0 }
            : undefined,
          version: data.version?.name_clean ?? data.version?.name,
        });
      })
      .catch(() => {
        if (!cancelled) setStatus({ state: "error" });
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  const isLive = status.state === "ready";
  const isOnline = isLive && status.online;

  return (
    <div
      className="rounded-2xl border p-6 sm:p-8"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <span
          className="relative flex h-2.5 w-2.5"
          aria-hidden="true"
        >
          <span
            className="absolute inline-flex h-full w-full rounded-full opacity-60"
            style={{
              background: status.state === "loading" ? "var(--text-muted)" : isOnline ? "var(--accent)" : "var(--text-muted)",
              animation: status.state === "loading" ? "none" : isOnline ? "pulse-ring 1.8s ease-out infinite" : "none",
            }}
          />
          <span
            className="relative inline-flex h-2.5 w-2.5 rounded-full"
            style={{ background: status.state === "loading" ? "var(--text-muted)" : isOnline ? "var(--accent)" : "var(--text-muted)" }}
          />
        </span>
        <span className="text-label" style={{ color: "var(--text)" }}>
          {status.state === "loading" && "Checking status…"}
          {status.state === "error" && "ZO7AL Network — Ready to play"}
          {isLive && (status.online ? "Online" : "Offline")}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
        <div>
          <p className="text-label mb-1">Players</p>
          <p className="text-2xl font-bold tabular-nums">
            {isLive && status.players ? `${status.players.online} / ${status.players.max}` : "—"}
          </p>
        </div>
        <div>
          <p className="text-label mb-1">Version</p>
          <p className="text-2xl font-bold">
            {isLive && status.version ? status.version : "—"}
          </p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="text-label mb-1">Address</p>
          <p className="text-2xl font-bold truncate">{MINECRAFT_SERVER.javaAddress}</p>
        </div>
      </div>

      {status.state === "error" && (
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          Live status is unavailable right now — connect with the address below to jump in.
        </p>
      )}
    </div>
  );
}
