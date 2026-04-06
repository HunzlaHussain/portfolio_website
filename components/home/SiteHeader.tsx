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
    <header className="fixed inset-x-0 top-0 z-[1000] isolate px-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] min-[400px]:px-4 min-[1150px]:pt-10">
      <GlassPanel className="relative mx-auto w-full min-w-0 max-w-[1320px] rounded-[24px] px-3 py-3 shadow-lg shadow-black/20 sm:rounded-[160px] sm:px-4 sm:py-3.5 md:px-6">
        {/*
          Balanced row: equal flex-1 sides so centered nav never sits under the brand.
          (Absolute center + left block caused “About” to overlap the green role.)
        */}
        <div className="flex w-full min-w-0 items-center gap-2 min-[1150px]:gap-3">
          <div className="min-w-0 flex-1">
            <Link
              href="/"
              className="inline-flex max-w-full min-w-0 items-center gap-3 sm:gap-3.5"
            >
              <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-white/20 to-transparent ring-1 ring-white/15 min-[1150px]:size-[68px]">
                {avatarFailed ? (
                  <span className="absolute inset-0 flex items-center justify-center font-brand text-base text-zen-text min-[1150px]:text-lg">
                    {initials}
                  </span>
                ) : (
                  <Image
                    src={siteMeta.profileImage}
                    alt=""
                    width={68}
                    height={68}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1149px) 48px, 68px"
                    priority
                    onError={() => setAvatarFailed(true)}
                  />
                )}
              </span>
              <span className="min-w-0 text-left">
                <span className="block font-brand text-base font-medium leading-tight tracking-tight text-zen-text min-[1150px]:text-lg">
                  {siteMeta.name}
                </span>
                {/* Short line until xl — keeps nav column clear on mid-width desktops */}
                <span className="mt-0.5 block text-[11px] font-semibold uppercase leading-snug tracking-wide text-zen-primary min-[1150px]:text-[10px] min-[1150px]:leading-tight xl:hidden">
                  {siteMeta.roleShort}
                </span>
                <span className="mt-0.5 hidden text-[11px] font-semibold uppercase leading-tight tracking-[0.06em] text-zen-primary xl:line-clamp-2 xl:block xl:text-[11px] xl:tracking-[0.07em]">
                  {siteMeta.role}
                </span>
              </span>
            </Link>
          </div>

          <nav
            className="hidden shrink-0 flex-nowrap items-center gap-x-3 min-[1150px]:flex min-[1150px]:gap-x-5 xl:gap-x-8"
            aria-label="Primary"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="whitespace-nowrap font-sans text-sm font-semibold text-zen-text transition hover:text-zen-primary min-[1280px]:text-base"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex min-w-0 flex-1 items-center justify-end">
            <button
              type="button"
              className="flex size-11 touch-manipulation items-center justify-center rounded-full border border-white/15 bg-white/10 text-zen-text shadow-sm transition hover:bg-white/15 active:scale-95 min-[1150px]:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="size-5"
                  aria-hidden
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="size-5"
                  aria-hidden
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </GlassPanel>

      <div
        id="mobile-menu"
        className={cn(
          "mx-auto mt-2 max-w-[1320px] rounded-2xl border border-white/10 bg-[#121212]/90 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out min-[1150px]:hidden",
          open
            ? "max-h-[min(80vh,calc(100dvh-5rem))] overflow-y-auto overflow-x-hidden px-4 py-4 opacity-100 min-[400px]:px-5 min-[400px]:py-5"
            : "max-h-0 overflow-hidden py-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="min-h-11 border-b border-white/10 py-3 text-base font-semibold leading-snug text-zen-text last:border-0 active:bg-white/5"
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
