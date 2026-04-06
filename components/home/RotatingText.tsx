"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type RotatingTextProps = {
  words: readonly string[];
  className?: string;
  intervalMs?: number;
};

export function RotatingText({
  words,
  className,
  intervalMs = 2800,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className={cn("inline-block min-w-[8ch] text-zen-primary", className)}>
      <span className="inline-block transition-opacity duration-300">
        {words[index]}
      </span>
    </span>
  );
}
