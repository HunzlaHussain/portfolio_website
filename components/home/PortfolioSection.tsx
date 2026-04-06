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
              className="rounded-t-[40px] bg-gradient-to-b from-white/[0.07] to-transparent px-0 pb-10 pt-7 md:px-10 md:pt-10"
            >
              <Link
                href={p.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="relative mb-6 block w-[calc(100%+1.5rem)] max-w-none min-[400px]:w-[calc(100%+2rem)] -mx-3 min-[400px]:-mx-4 overflow-hidden rounded-[20px] shadow-lg md:mx-0 md:w-full"
              >
                <SafeImage
                  src={p.image}
                  alt={p.title}
                  width={582}
                  height={388}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1150px) 100vw, 582px"
                />
                <span className="absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center rounded-full bg-zen-primary px-3 py-1.5 text-[10px] font-semibold uppercase leading-tight tracking-wide text-[#121212] sm:bottom-5 sm:left-5 sm:h-8 sm:px-4 sm:py-0 sm:text-[12px]">
                  <span className="truncate">{p.tag}</span>
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
