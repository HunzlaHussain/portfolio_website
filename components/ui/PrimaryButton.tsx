import Link from "next/link";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function PrimaryButton({
  children,
  href,
  className,
  type = "button",
  onClick,
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex h-14 items-center justify-center rounded-full bg-zen-primary px-10 text-base font-semibold text-[#121212] transition hover:-translate-y-0.5 hover:shadow-md md:h-14",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
