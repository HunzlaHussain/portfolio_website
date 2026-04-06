import { SiteHeader } from "@/components/home/SiteHeader";
import { RightBar } from "@/components/home/RightBar";
import { UserBar } from "@/components/home/UserBar";
import { AboutSection } from "@/components/home/AboutSection";
import { ResumeSection } from "@/components/home/ResumeSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-zen-bg text-zen-text">
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        aria-hidden
      >
        <div
          className="h-full w-full bg-[radial-gradient(ellipse_at_top,_rgba(69,231,123,0.15),_transparent_50%)]"
        />
      </div>

      <SiteHeader />

      <main className="relative z-[1] mx-auto min-w-0 max-w-[1320px] px-3 pb-12 pt-28 min-[400px]:px-4 sm:pb-16 sm:pt-36 md:pt-44 lg:pt-[200px] min-[1150px]:pt-[233px]">
        <div className="flex flex-col gap-10 min-[1150px]:flex-row min-[1150px]:gap-0">
          <div className="min-[1150px]:w-4/12 min-[1150px]:shrink-0 min-[1150px]:pr-8">
            <UserBar />
          </div>
          <div className="min-[1150px]:w-8/12 min-[1150px]:max-w-none">
            <AboutSection />
            <ResumeSection />
          </div>
        </div>

        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <RightBar />
    </div>
  );
}
