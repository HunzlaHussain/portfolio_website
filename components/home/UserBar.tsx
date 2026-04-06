import Link from "next/link";
import { SocialLinks } from "@/components/home/SocialLinks";
import { SafeImage } from "@/components/media/SafeImage";
import { siteMeta } from "@/content/site";
import { cn } from "@/lib/utils";

type UserBarProps = {
  className?: string;
};

export function UserBar({ className }: UserBarProps) {
  return (
    <div
      className={cn(
        "relative z-[99] overflow-hidden rounded-[20px] border-t border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] px-4 py-6 text-center backdrop-blur-md min-[400px]:px-7 min-[400px]:py-7 min-[1150px]:sticky min-[1150px]:top-[143px]",
        className,
      )}
    >
      <div className="relative z-[1] mx-auto mb-3 max-w-[314px] overflow-hidden rounded-[40px]">
        <div className="relative aspect-square w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-zen-primary/20 to-transparent">
          <SafeImage
            src={siteMeta.profileImage}
            alt={`${siteMeta.name} — ${siteMeta.role}`}
            width={314}
            height={314}
            className="h-full w-full object-cover"
            sizes="(max-width: 1150px) 90vw, 314px"
            priority
          />
        </div>
      </div>
      <div className="font-brand text-2xl text-zen-text min-[400px]:text-3xl sm:text-4xl">
        {siteMeta.name}
      </div>
      <div className="mb-4 mt-2 text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-primary">
        {siteMeta.role}
      </div>
      <Link
        href={`mailto:${siteMeta.email}`}
        className="mb-1 block break-words text-sm text-zen-text underline-offset-4 hover:underline min-[400px]:text-base"
      >
        {siteMeta.email}
      </Link>
      <Link
        href={`tel:${siteMeta.phone.tel}`}
        className="mb-1 block text-sm text-zen-text underline-offset-4 hover:underline min-[400px]:text-base"
      >
        {siteMeta.phone.display}
      </Link>
      <p className="mb-6 text-[12px] text-zen-secondary">{siteMeta.location}</p>
      <SocialLinks hrefs={siteMeta.social} />
    </div>
  );
}
