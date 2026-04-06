"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { RotatingText } from "@/components/home/RotatingText";
import { SocialLinks } from "@/components/home/SocialLinks";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { budgetTags, rotatingContactWords, siteMeta } from "@/content/site";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="pb-10 pt-16 md:pt-[71px]">
      <div className="grid gap-12 min-[1150px]:grid-cols-12 min-[1150px]:gap-8">
        <div className="min-[1150px]:col-span-5">
          <div className="mb-10">
            <div className="mb-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-muted">
              <span className="inline-block size-2 rounded-full bg-zen-primary" />
              Contact
            </div>
            <h3 className="font-display text-3xl font-medium leading-tight text-zen-text md:text-[44px] md:leading-[60px]">
              Lets{" "}
              <RotatingText words={rotatingContactWords} className="text-zen-primary" />{" "}
              Incredible
            </h3>
            <h3 className="mt-2 font-display text-3xl font-medium text-zen-text md:text-[44px] md:leading-[60px]">
              Work Together
            </h3>
          </div>
          <div>
            <h4 className="mb-1 font-display text-2xl font-normal text-zen-text">
              <Link
                href={`mailto:${siteMeta.email}`}
                className="hover:text-zen-primary"
              >
                {siteMeta.email}
              </Link>
            </h4>
            <p className="mb-3 font-display text-2xl font-normal text-zen-text">
              <Link
                href={`tel:${siteMeta.phone.tel}`}
                className="hover:text-zen-primary"
              >
                {siteMeta.phone.display}
              </Link>
            </p>
            <p className="mb-6 text-[12px] text-zen-secondary">{siteMeta.location}</p>
            <SocialLinks hrefs={siteMeta.social} className="justify-start" />
          </div>
        </div>

        <div className="min-[1150px]:col-span-7">
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-[40px] border-t border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] px-6 py-10 min-[1150px]:ml-8 min-[1150px]:px-14"
          >
            <div className="mb-6 grid gap-6">
              <label className="sr-only" htmlFor="name">
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full border-b border-white/10 bg-transparent py-3 font-sans text-zen-text placeholder:text-zen-secondary focus:border-zen-text focus:outline-none"
              />
              <label className="sr-only" htmlFor="email">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="w-full border-b border-white/10 bg-transparent py-3 font-sans text-zen-text placeholder:text-zen-secondary focus:border-zen-text focus:outline-none"
              />
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Your Message..."
                className="min-h-[120px] w-full border-b border-white/10 bg-transparent py-3 font-sans text-zen-text placeholder:text-zen-secondary focus:border-zen-text focus:outline-none"
              />
            </div>

            <ul className="mb-8 flex flex-wrap gap-3">
              {budgetTags.map((t) => (
                <li key={t}>
                  <button
                    type="button"
                    className={cn(
                      "rounded-full border-t border-white/10 bg-white/5 px-6 py-3 font-sans text-base text-zen-text transition hover:bg-white/10",
                    )}
                  >
                    {t}
                  </button>
                </li>
              ))}
            </ul>

            <PrimaryButton type="submit">
              <span>Get Started !</span>
            </PrimaryButton>
          </form>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-zen-secondary">
        © {new Date().getFullYear()} {siteMeta.name}. All Rights Reserved.
      </p>
    </section>
  );
}
