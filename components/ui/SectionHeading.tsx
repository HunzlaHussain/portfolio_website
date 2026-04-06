import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  tag: string;
  title: string;
  className?: string;
  align?: "start" | "between";
};

export function SectionHeading({
  tag,
  title,
  className,
  align = "start",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8 md:mb-10",
        align === "between" &&
          "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div>
        <div className="mb-6 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-muted md:mb-8">
          <span
            className="inline-block size-2 rounded-full bg-zen-primary"
            aria-hidden
          />
          {tag}
        </div>
        <h3 className="font-display text-2xl font-medium leading-tight text-zen-text sm:text-3xl md:text-[44px] md:leading-[60px]">
          {title}
        </h3>
      </div>
    </div>
  );
}
