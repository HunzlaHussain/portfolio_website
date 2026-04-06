"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { IconCheck } from "@/components/icons/SocialIcons";
import { pricingPlans } from "@/content/site";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [tab, setTab] = useState<"standard" | "premium">("standard");
  const plan = tab === "standard" ? pricingPlans.standard : pricingPlans.premium;

  return (
    <section id="pricing" className="pt-24 md:pt-[100px]">
      <SectionHeading tag="Pricing" title="My Pricing" />

      <div className="mb-8 max-w-[335px] rounded-[52px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-1">
        <div className="relative flex">
          <span
            className={cn(
              "absolute inset-y-0 left-0 w-1/2 rounded-[44px] border border-white/10 bg-white/10 transition-transform duration-500",
              tab === "premium" && "translate-x-full",
            )}
            aria-hidden
          />
          <button
            type="button"
            className={cn(
              "relative z-[1] flex-1 rounded-[44px] px-6 py-3 text-center text-base font-semibold transition",
              tab === "standard" ? "text-zen-text" : "text-zen-muted",
            )}
            onClick={() => setTab("standard")}
          >
            Standard Plan
          </button>
          <button
            type="button"
            className={cn(
              "relative z-[1] flex-1 rounded-[44px] px-6 py-3 text-center text-base font-semibold transition",
              tab === "premium" ? "text-zen-text" : "text-zen-muted",
            )}
            onClick={() => setTab("premium")}
          >
            Premium Plan
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[20px] border-t border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] px-6 py-10 md:flex md:items-center md:justify-between md:gap-6 md:px-10 md:py-14">
        <div className="mb-8 md:mb-0 md:w-[38%]">
          <h4 className="font-display text-2xl text-zen-text md:text-3xl">
            {plan.name.split(" ").map((w, i) => (
              <span key={`${w}-${i}`} className="block">
                {w}
              </span>
            ))}
          </h4>
        </div>
        <ul className="mb-8 grid flex-1 gap-2 md:mb-0">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 font-sans text-base text-zen-text"
            >
              <IconCheck className="size-6 shrink-0 text-zen-primary" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-start gap-5 md:w-[20%] md:items-end">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-zen-text md:text-4xl">
              {plan.price}
            </span>
            <span className="text-sm text-zen-muted">{plan.unit}</span>
          </div>
          <PrimaryButton href="#contact">
            <span>Get Started !</span>
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
