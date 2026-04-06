import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resumeItems } from "@/content/site";

export function ResumeSection() {
  return (
    <section id="resume" className="pb-0 pt-16 md:pb-10 md:pt-20">
      <SectionHeading tag="Resume" title="Education & Experience" />

      <div className="relative space-y-0">
        {resumeItems.map((item, i) => (
          <div key={item.id} className="relative pl-10">
            {i > 0 ? (
              <span
                className="absolute left-[13px] top-0 h-[86px] w-px -translate-x-1/2 bg-white/10"
                aria-hidden
              />
            ) : null}
            <span
              className="absolute left-0 top-6 z-[1] size-4 rounded-full border-[3px] border-zen-primary bg-[#121212]"
              aria-hidden
            />
            <div className="flex flex-col gap-3 rounded-[20px] border-t border-transparent bg-gradient-to-br from-white/0 to-white/0 px-5 py-5 transition hover:border-white/10 hover:from-white/10 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <h5 className="mb-1 font-display text-xl text-zen-text">
                  <Link href="#contact" className="hover:text-zen-primary">
                    {item.title}
                  </Link>
                </h5>
                <span className="font-sans text-base text-zen-text">{item.org}</span>
                {"description" in item && item.description ? (
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-zen-muted">
                    {item.description}
                  </p>
                ) : null}
              </div>
              <div className="shrink-0 whitespace-nowrap rounded-full bg-white/5 px-4 py-2 text-sm text-zen-text">
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
