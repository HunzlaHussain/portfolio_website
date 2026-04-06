"use client";

import { useCalBooking } from "@/context/CalBookingContext";
import { siteMeta } from "@/content/site";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import Link from "next/link";

const STORAGE_KEY = "portfolio-cal-first-prompt";

type FirstVisitSchedulePromptProps = {
  open: boolean;
  onDismiss: () => void;
};

export function FirstVisitSchedulePrompt({
  open,
  onDismiss,
}: FirstVisitSchedulePromptProps) {
  const { openBookingModal } = useCalBooking();

  if (!open) return null;

  const handleLater = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    onDismiss();
  };

  const handleBook = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    onDismiss();
    void openBookingModal();
  };

  return (
    <div
      className="fixed inset-0 z-[10040] flex items-end justify-center p-3 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] min-[400px]:p-4 min-[1150px]:items-center min-[1150px]:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="first-visit-schedule-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Close"
        onClick={handleLater}
      />
      <div className="relative z-[1] w-full max-w-lg rounded-[24px] border border-white/10 bg-[#121212] p-6 shadow-2xl md:p-8">
        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-primary">
          Welcome
        </p>
        <h2
          id="first-visit-schedule-title"
          className="font-display text-2xl font-medium text-zen-text md:text-3xl"
        >
          Book a quick intro call
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zen-muted">
          Thanks for visiting. You can schedule a meeting with {siteMeta.name}{" "}
          or reach out via the contact section — whatever works best for you.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <PrimaryButton
            type="button"
            className="w-full sm:w-auto"
            onClick={handleBook}
          >
            Book a meeting
          </PrimaryButton>
          <Link
            href="#contact"
            onClick={handleLater}
            className="inline-flex h-14 w-full min-w-0 items-center justify-center rounded-full border border-white/15 px-6 text-center text-base font-semibold text-zen-text transition hover:border-white/25 hover:bg-white/5 sm:w-auto sm:px-8"
          >
            Contact instead
          </Link>
        </div>
        <button
          type="button"
          onClick={handleLater}
          className="mt-4 w-full text-center text-sm text-zen-muted underline-offset-4 hover:text-zen-text hover:underline"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
