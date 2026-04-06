"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCaretLeft, IconCaretRight, IconQuote } from "@/components/icons/SocialIcons";
import { testimonials } from "@/content/site";
import "swiper/css";

export function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="testimonial" className="pt-24 md:pt-[100px]">
      <div className="mb-10 flex flex-col gap-6 md:mb-11 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          tag="testimonials"
          title="Trusted By Clients"
          className="mb-0"
        />
        <div className="flex gap-3">
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full bg-white text-[#121212] md:size-[60px]"
            aria-label="Previous testimonial"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IconCaretLeft className="size-8" />
          </button>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full bg-white text-[#121212] md:size-[60px]"
            aria-label="Next testimonial"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IconCaretRight className="size-8" />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        className="!overflow-visible"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} className="!h-auto">
            <div className="flex h-full flex-col justify-between rounded-[20px] border-t border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-8 md:p-10">
              <div>
                <div className="mb-5 text-3xl text-zen-text">
                  <IconQuote className="size-9" />
                </div>
                <p className="mb-6 font-sans text-lg leading-8 text-zen-text">{t.quote}</p>
              </div>
              <div>
                <div className="mb-1 font-display text-lg text-zen-text">{t.name}</div>
                <span className="text-[12px] font-semibold uppercase tracking-wide text-zen-primary">
                  {t.role}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
