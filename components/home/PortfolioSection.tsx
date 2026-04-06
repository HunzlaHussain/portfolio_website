import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SafeImage } from "@/components/media/SafeImage";
import { portfolioItems } from "@/content/site";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-24 md:pt-[100px]">
      <SectionHeading tag="Portfolio" title="Projects" />

      <div className="grid gap-10 min-[1150px]:grid-cols-2 min-[1150px]:gap-11">
        {portfolioItems.map((p) => {
          const isExternal = p.href.startsWith("http");
          return (
            <article
              key={p.title}
              className="rounded-t-[40px] bg-gradient-to-b from-white/[0.07] to-transparent px-4 pb-10 pt-7 md:px-10 md:pt-10"
            >
              <Link
                href={p.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="relative mb-6 block overflow-hidden rounded-[20px] shadow-lg"
              >
                <SafeImage
                  src={p.image}
                  alt={p.title}
                  width={582}
                  height={388}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 582px) 100vw, 582px"
                />
                <span className="absolute bottom-5 left-5 flex h-8 items-center rounded-full bg-zen-primary px-4 text-[12px] font-semibold uppercase tracking-wide text-[#121212]">
                  {p.tag}
                </span>
              </Link>
              <h5 className="font-display text-xl text-zen-text md:text-2xl">
                <Link
                  href={p.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover:text-zen-primary"
                >
                  {p.title}
                </Link>
              </h5>
            </article>
          );
        })}
      </div>
    </section>
  );
}
