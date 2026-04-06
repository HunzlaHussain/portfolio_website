"use client";

import { useEffect, useState } from "react";
import { IconSun } from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("zen-theme");
    const initial = stored === "light";
    document.documentElement.dataset.theme = initial ? "light" : "dark";
    queueMicrotask(() => setLight(initial));
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    window.localStorage.setItem("zen-theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      className={cn(
        "flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zen-text transition hover:bg-white/10",
        light && "bg-white text-[#121212]",
      )}
    >
      <IconSun className="size-6" />
    </button>
  );
}
