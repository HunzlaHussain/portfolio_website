"use client";

import { getCalApi } from "@calcom/embed-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { calBooking } from "@/content/site";

type CalApi = Awaited<ReturnType<typeof getCalApi>>;

const modalConfig = {
  layout: "month_view" as const,
  useSlotsViewOnSmallScreen: "true" as const,
};

const CalBookingContext = createContext<{
  openBookingModal: () => void;
  ready: boolean;
} | null>(null);

export function CalBookingProvider({ children }: { children: React.ReactNode }) {
  const calRef = useRef<CalApi | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cal = await getCalApi({ namespace: calBooking.namespace });
      if (cancelled) return;
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      calRef.current = cal;
      setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const openBookingModal = useCallback(async () => {
    let cal = calRef.current;
    if (!cal) {
      cal = await getCalApi({ namespace: calBooking.namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      calRef.current = cal;
      setReady(true);
    }
    cal("modal", {
      calLink: calBooking.link,
      config: modalConfig,
    });
  }, []);

  return (
    <CalBookingContext.Provider value={{ openBookingModal, ready }}>
      {children}
    </CalBookingContext.Provider>
  );
}

export function useCalBooking() {
  const ctx = useContext(CalBookingContext);
  if (!ctx) {
    throw new Error("useCalBooking must be used within CalBookingProvider");
  }
  return ctx;
}
