import Link from "next/link";
import { IconArrowRight } from "@/components/icons/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SafeImage } from "@/components/media/SafeImage";
import { services } from "@/content/site";

export function ServicesSection() {
  return (
    <section id="services" className="pt-24 md:pt-[100px]">
      <SectionHeading
        tag="Services"
        title="Full-Stack Development & Cloud"
      />

      <div className="flex flex-col gap-0">
        {services.map((s) => (
          <div
            key={s.n}
            className="group relative border-t border-white/5 py-2 first:border-t-0"
          >
            <div className="relative overflow-hidden rounded-[20px] px-5 py-8 transition group-hover:bg-white/5 md:px-6">
              <div className="relative z-[1] flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-6">
                  <span className="shrink-0 text-[12px] font-medium text-zen-muted">
                    {s.n}/
                  </span>
                  <h5 className="min-w-0 font-display text-lg leading-snug text-zen-text md:text-2xl">
                    <Link href="#contact" className="hover:text-zen-primary">
                      {s.title}
                    </Link>
                  </h5>
                </div>
                <Link
                  href="#contact"
                  className="relative z-[2] flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-zen-text transition group-hover:bg-zen-primary group-hover:text-[#121212] md:size-14"
                  aria-label={`Contact about ${s.title}`}
                >
                  <IconArrowRight className="size-6" />
                </Link>
              </div>
              <div className="pointer-events-none absolute right-[10%] top-1/2 hidden w-[140px] -translate-y-1/2 rotate-3 opacity-0 transition group-hover:rotate-0 group-hover:opacity-100 md:block">
                <SafeImage
                  src={s.image}
                  alt=""
                  width={140}
                  height={140}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
