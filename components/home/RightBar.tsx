import Link from "next/link";
import { IconGear } from "@/components/icons/SocialIcons";
import { ThemeToggle } from "@/components/home/ThemeToggle";

export function RightBar() {
  return (
    <aside className="pointer-events-none fixed bottom-5 right-4 z-[99] flex flex-col items-center gap-2 min-[1441px]:right-10 min-[1150px]:top-[150px] min-[1150px]:bottom-auto">
      <div className="pointer-events-auto flex flex-col gap-2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md">
        <ThemeToggle />
        <Link
          href="#settings"
          className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zen-text transition hover:bg-white/10"
          aria-label="Open settings"
        >
          <IconGear className="size-6" />
        </Link>
      </div>
    </aside>
  );
}
