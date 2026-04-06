"use client";

import Link from "next/link";
import { RotatingText } from "@/components/home/RotatingText";
import { SocialLinks } from "@/components/home/SocialLinks";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useCalBooking } from "@/context/CalBookingContext";
import { rotatingContactWords, siteMeta } from "@/content/site";

export function ContactSection() {
  const { openBookingModal } = useCalBooking();

  return (
    <section id="contact" className="pb-10 pt-16 md:pt-[71px]">
      <div className="grid gap-12 min-[1150px]:grid-cols-12 min-[1150px]:gap-8">
        <div className="min-[1150px]:col-span-5">
          <div className="mb-10">
            <div className="mb-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-muted">
              <span className="inline-block size-2 rounded-full bg-zen-primary" />
              Contact
            </div>
            <h3 className="font-display text-[1.6rem] font-medium leading-[1.2] text-zen-text min-[400px]:text-3xl md:text-[44px] md:leading-[60px]">
              Lets{" "}
              <RotatingText words={rotatingContactWords} className="text-zen-primary" />{" "}
              Incredible
            </h3>
            <h3 className="mt-2 font-display text-[1.6rem] font-medium leading-[1.2] text-zen-text min-[400px]:text-3xl md:text-[44px] md:leading-[60px]">
              Work Together
            </h3>
          </div>
          <div>
            <h4 className="mb-1 font-display text-lg font-normal text-zen-text min-[400px]:text-xl sm:text-2xl">
              <Link
                href={`mailto:${siteMeta.email}`}
                className="break-all hover:text-zen-primary"
              >
                {siteMeta.email}
              </Link>
            </h4>
            <p className="mb-3 font-display text-lg font-normal text-zen-text min-[400px]:text-xl sm:text-2xl">
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
          <div className="relative overflow-hidden rounded-[24px] border-t border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] px-4 py-8 min-[1150px]:ml-8 min-[1150px]:rounded-[40px] min-[1150px]:px-14 min-[1150px]:py-10">
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-muted">
              Schedule
            </p>
            <h4 className="mb-3 font-display text-2xl font-medium text-zen-text md:text-3xl">
              Book a meeting
            </h4>
            <p className="mb-8 max-w-md text-base leading-relaxed text-zen-muted">
              Pick a time that works for you — we use Cal.com for scheduling. You
              can open the calendar here or visit the full schedule page.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <PrimaryButton
                type="button"
                className="w-full min-[480px]:w-auto"
                onClick={() => {
                  void openBookingModal();
                }}
              >
                Book with Cal.com
              </PrimaryButton>
              <Link
                href="/schedule"
                className="inline-flex h-14 w-full min-w-0 items-center justify-center rounded-full border border-white/15 px-6 text-center text-base font-semibold text-zen-text transition hover:border-white/25 hover:bg-white/5 min-[480px]:w-auto min-[480px]:px-8"
              >
                View schedule page
              </Link>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-zen-secondary">
        © {new Date().getFullYear()} {siteMeta.name}. All Rights Reserved.
      </p>
    </section>
  );
}
