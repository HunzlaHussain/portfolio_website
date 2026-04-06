import { RotatingText } from "@/components/home/RotatingText";
import { about, rotatingRoles } from "@/content/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-[70vh] flex-col justify-center pb-16 pt-8 min-[1150px]:min-h-[73vh]"
    >
      <div className="mb-10 md:mb-11">
        <div className="mb-8 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.1px] text-zen-muted md:mb-8">
          <span className="inline-block size-2 rounded-full bg-zen-primary" />
          About
        </div>
        <div className="relative inline-block max-w-full rounded-lg border border-zen-primary/40 p-2">
          <h4 className="font-display text-lg font-medium leading-snug text-zen-text min-[400px]:text-xl sm:text-2xl md:text-[32px] md:leading-10">
            Hello! I&apos;m{" "}
            <RotatingText words={rotatingRoles} className="text-zen-primary" />
          </h4>
        </div>
      </div>

      <h1 className="font-display mb-4 text-[1.65rem] font-medium leading-[1.15] tracking-tight text-zen-text min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[88px]">
        Empower Code Intelligence
      </h1>
      <p className="mb-10 max-w-3xl font-sans text-base leading-7 text-zen-muted md:text-lg md:leading-8">
        {about.body}
      </p>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {about.stats.map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden rounded-2xl border-t border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-4"
          >
            <div className="mb-2 flex items-baseline gap-1 font-display text-4xl font-medium text-zen-text">
              <span>{s.value}</span>
              {"mid" in s && s.mid ? (
                <span className="text-3xl">{String(s.mid)}</span>
              ) : null}
              <span className="text-3xl">{s.suffix}</span>
            </div>
            <p className="font-sans text-base text-zen-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
