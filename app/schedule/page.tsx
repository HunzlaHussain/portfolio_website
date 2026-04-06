import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/SiteHeader";
import { RightBar } from "@/components/home/RightBar";
import { SchedulePageContent } from "@/components/cal/SchedulePageContent";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteMeta } from "@/content/site";

export const metadata: Metadata = {
  title: `Schedule · ${siteMeta.title}`,
  description: `Book a meeting with ${siteMeta.name} — ${siteMeta.role}.`,
};

export default function SchedulePage() {
  return (
    <div className="relative min-h-screen bg-zen-bg text-zen-text">
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        aria-hidden
      >
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_rgba(69,231,123,0.15),_transparent_50%)]" />
      </div>

      <SiteHeader />

      <main className="relative z-[1] mx-auto max-w-[1320px] px-4 pb-20 pt-[200px] min-[1150px]:pt-[233px]">
        <SectionHeading
          tag="Schedule"
          title="Book a time that works for you"
        />
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-zen-muted">
          Pick a slot below to schedule a call. You can also open booking from
          the <strong className="text-zen-text">Contact</strong> section on the
          home page.
        </p>
        <SchedulePageContent />
      </main>

      <RightBar />
    </div>
  );
}
