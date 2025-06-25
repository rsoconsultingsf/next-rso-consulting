import { useEffect, useCallback } from "react";
import Script from "next/script";

/*
 * Reusable Calendly inline widget component.
 * Renders a placeholder div that Calendly will transform into an iframe
 * after its external script loads. We load the script lazily on the client
 * and disable SSR to avoid React hydration mismatches.
 */
const CalendlyInlineWidget = ({
  url = "https://calendly.com/rob-rso/30min",
  styles = { minWidth: 320, height: 700 },
  parentId = "calendly-inline-widget",
}) => {
  // Fallback for cases where the script has already loaded before this component mounts
  const initCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url,
        parentElement: document.getElementById(parentId),
        prefill: {},
        utm: {},
      });
    }
  }, [url, parentId]);

  useEffect(() => {
    initCalendly();
  }, [initCalendly]);

  return (
    <>
      <div
        id={parentId}
        style={styles}
      />
      {/* Load Calendly script only on the client */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={initCalendly}
      />
    </>
  );
};

export default CalendlyInlineWidget;
