import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resumeItems } from "@/content/site";

export function ResumeSection() {
  return (
    <section id="resume" className="pb-0 pt-16 md:pb-10 md:pt-20">
      <SectionHeading tag="Resume" title="Education & Experience" />

      <div className="relative border-l border-white/10 pl-6 min-[400px]:pl-8 min-[1150px]:pl-10">
        {resumeItems.map((item) => (
          <div key={item.id} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[9px] top-8 z-[1] size-4 rounded-full border-[3px] border-zen-primary bg-[#121212] shadow-[0_0_0_4px_#121212]"
              aria-hidden
            />
            <div className="flex flex-col gap-3 rounded-[20px] border-t border-transparent bg-gradient-to-br from-white/0 to-white/0 px-4 py-5 transition hover:border-white/10 hover:from-white/10 sm:flex-row sm:items-start sm:justify-between sm:px-5">
              <div className="min-w-0 flex-1">
                <h5 className="mb-1 font-display text-lg leading-snug text-zen-text sm:text-xl">
                  <Link href="#contact" className="hover:text-zen-primary">
                    {item.title}
                  </Link>
                </h5>
                <span className="font-sans text-base text-zen-text">
                  {item.org}
                </span>
                {"description" in item && item.description ? (
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-zen-muted">
                    {item.description}
                  </p>
                ) : null}
              </div>
              <div className="w-fit max-w-full rounded-full bg-white/5 px-3 py-2 text-xs text-zen-text sm:shrink-0 sm:whitespace-nowrap sm:px-4 sm:text-sm">
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
