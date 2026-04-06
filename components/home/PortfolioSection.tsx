import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SafeImage } from "@/components/media/SafeImage";
import { portfolioItems } from "@/content/site";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="overflow-x-hidden pt-24 md:pt-[100px]">
      <SectionHeading tag="Portfolio" title="Projects" />

      <div className="grid gap-10 min-[1150px]:grid-cols-2 min-[1150px]:gap-11">
        {portfolioItems.map((p) => {
          const isExternal = p.href.startsWith("http");
          return (
            <article
              key={p.title}
              className="min-w-0 rounded-t-[40px] bg-gradient-to-b from-white/[0.07] to-transparent px-0 pb-10 pt-7 md:px-10 md:pt-10"
            >
              <Link
                href={p.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="relative mb-6 block w-full max-w-full overflow-hidden rounded-[20px] shadow-lg"
              >
                <SafeImage
                  src={p.image}
                  alt={p.title}
                  width={582}
                  height={388}
                  className="h-auto w-full max-w-full object-cover"
                  sizes="(max-width: 1150px) 92vw, 582px"
                />
                <span className="absolute bottom-3 left-4 flex max-w-[calc(100%-2rem)] items-center rounded-full bg-zen-primary px-3 py-1.5 text-[10px] font-semibold uppercase leading-tight tracking-wide text-[#121212] sm:bottom-5 sm:left-5 sm:h-8 sm:px-4 sm:py-0 sm:text-[12px]">
                  <span className="truncate">{p.tag}</span>
                </span>
              </Link>
              <div className="min-w-0 pt-3 md:pt-1">
                <h5 className="font-display text-[1.0625rem] font-medium leading-snug tracking-tight text-zen-text min-[400px]:text-lg sm:text-xl md:text-2xl md:font-normal md:leading-tight">
                  <Link
                    href={p.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block break-words text-pretty hover:text-zen-primary"
                  >
                    {p.title}
                  </Link>
                </h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
