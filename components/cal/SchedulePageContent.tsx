"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";
import { calBooking } from "@/content/site";

export function SchedulePageContent() {
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: calBooking.namespace });
      if (cancelled || !mounted.current) return;
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          align: "left",
        },
        cssVarsPerTheme: {
          dark: {
            "--booker-main-width": "min(100%, 720px)",
          },
          light: {
            "--booker-main-width": "min(100%, 720px)",
          },
        },
      });
      cal("inline", {
        calLink: calBooking.link,
        elementOrSelector: "#cal-schedule-inline",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        },
      });
    })();
    return () => {
      cancelled = true;
      mounted.current = false;
    };
  }, []);

  return (
    <div
      id="cal-schedule-inline"
      className="cal-inline-host min-h-[560px] w-full max-w-full min-w-0 rounded-[20px] border border-white/10 bg-[#121212]/50 p-2 md:min-h-[640px] md:p-4"
    />
  );
}
