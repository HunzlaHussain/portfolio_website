import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[160px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-md",
        "zen-light:border-zinc-200 zen-light:bg-white zen-light:from-white zen-light:to-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
