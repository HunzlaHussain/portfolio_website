"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash() {
  if (typeof window === "undefined") return;
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  window.requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

/** Runs after shell is ready so /#section navigates correctly (e.g. /#resume from any route). */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const t = window.setTimeout(scrollToHash, 50);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
