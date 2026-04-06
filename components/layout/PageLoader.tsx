"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LOADER_MS = 1000;
const FADE_MS = 350;

export function PageLoader({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("out"), LOADER_MS);
    const t2 = window.setTimeout(() => {
      setPhase("gone");
      onDone?.();
    }, LOADER_MS + FADE_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [onDone]);

  if (phase === "gone") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[10050] flex flex-col items-center justify-center bg-zen-bg transition-opacity duration-300 ease-out",
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      aria-hidden={phase === "out"}
    >
      <div
        className="size-12 animate-spin rounded-full border-2 border-white/15 border-t-zen-primary"
        role="status"
        aria-label="Loading"
      />
      <p className="mt-4 text-sm text-zen-muted">Loading…</p>
    </div>
  );
}
