import Link from "next/link";
import {
  IconDribbble,
  IconGitHub,
  IconLinkedIn,
  IconX,
} from "@/components/icons/SocialIcons";
import { cn } from "@/lib/utils";

export type SocialHref = {
  linkedin: string;
  github: string;
  x: string;
  dribbble: string;
};

type SocialLinksProps = {
  hrefs: SocialHref;
  className?: string;
};

const items = [
  { key: "linkedin", Icon: IconLinkedIn, label: "LinkedIn" },
  { key: "github", Icon: IconGitHub, label: "GitHub" },
  { key: "x", Icon: IconX, label: "X" },
  { key: "dribbble", Icon: IconDribbble, label: "Dribbble" },
] as const;

export function SocialLinks({ hrefs, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap justify-center gap-3", className)}>
      {items.map(({ key, Icon, label }) => {
        const href = hrefs[key];
        const isExternal = href.startsWith("http");
        return (
          <li key={key}>
            <Link
              href={href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={label}
              className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] text-zen-text transition hover:bg-white hover:text-[#121212]"
            >
              <Icon className="size-6" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
