"use client";

import { useCallback, useEffect, useState } from "react";
import { CalBookingProvider } from "@/context/CalBookingContext";
import { HashScroll } from "@/components/layout/HashScroll";
import { FirstVisitSchedulePrompt } from "@/components/layout/FirstVisitSchedulePrompt";
import { PageLoader } from "@/components/layout/PageLoader";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showFirstVisit, setShowFirstVisit] = useState(false);

  const onLoaderDone = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;
    const id = window.setTimeout(() => {
      try {
        if (!localStorage.getItem("portfolio-cal-first-prompt")) {
          setShowFirstVisit(true);
        }
      } catch {
        setShowFirstVisit(true);
      }
    }, 0);
    return () => window.clearTimeout(id);
  }, [loading]);

  return (
    <CalBookingProvider>
      {!loading ? <HashScroll /> : null}
      {children}
      <FirstVisitSchedulePrompt
        open={showFirstVisit}
        onDismiss={() => setShowFirstVisit(false)}
      />
      {loading ? <PageLoader onDone={onLoaderDone} /> : null}
    </CalBookingProvider>
  );
}
