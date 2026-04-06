"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { siteMeta, navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

function nameInitials(name: string) {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "HH"
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const initials = nameInitials(siteMeta.name);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000] isolate px-4 pt-6 min-[1150px]:pt-10">
      <GlassPanel className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-3 py-3 pl-4 md:px-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative size-[68px] shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-white/20 to-transparent ring-1 ring-white/10">
            {avatarFailed ? (
              <span className="absolute inset-0 flex items-center justify-center font-brand text-lg text-zen-text">
                {initials}
              </span>
            ) : (
              <Image
                src={siteMeta.profileImage}
                alt=""
                width={68}
                height={68}
                className="h-full w-full object-cover"
                sizes="68px"
                priority
                onError={() => setAvatarFailed(true)}
              />
            )}
          </span>
          <span className="text-left">
            <span className="block font-brand text-lg text-zen-text">
              {siteMeta.name}
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-primary">
              {siteMeta.role}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-10 min-[1150px]:flex"
          aria-label="Primary"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-base font-semibold text-zen-text transition hover:text-zen-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex size-12 items-center justify-center rounded-full bg-white/10 text-xl text-zen-text min-[1150px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="text-2xl leading-none">
              ≡
            </span>
          </button>
        </div>
      </GlassPanel>

      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-2xl border border-white/10 bg-[#121212]/90 px-5 py-5 backdrop-blur-md transition-all min-[1150px]:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 py-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-white/10 pb-4 font-semibold text-zen-text last:border-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
