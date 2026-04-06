import { SectionHeading } from "@/components/ui/SectionHeading";
import { SafeImage } from "@/components/media/SafeImage";
import { partnerLogos } from "@/content/site";

export function PartnersSection() {
  return (
    <section id="partners" className="pt-24 md:pt-[100px]">
      <div className="grid gap-10 min-[992px]:grid-cols-12 min-[992px]:items-center">
        <div className="min-[992px]:col-span-5">
          <SectionHeading
            tag="Partner"
            title="Trusted By 100+ Brands Worldwide"
          />
        </div>
        <div className="min-[992px]:col-span-7">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
            {partnerLogos.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-4"
              >
                <SafeImage
                  src={src}
                  alt=""
                  width={80}
                  height={52}
                  className="h-12 w-auto object-contain opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
