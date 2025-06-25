import React from "react";

/*
 * Lightweight Calendly iframe embed.
 * The iframe-only method avoids loading Calendly's heavy widget.js
 * and therefore renders much faster.
 */
const CalendlyInlineWidget = ({
  url = "https://calendly.com/rob-rso/30min",
  styles = { minWidth: 320, height: 700 },
  domain,
}) => {
  const embedDomain =
    domain || (typeof window !== "undefined" ? window.location.hostname : "");
  const src = `${url}?embed_domain=${embedDomain}&embed_type=Inline`;

  return (
    <iframe
      src={src}
      style={{ ...styles, border: 0, width: "100%" }}
      title="Schedule time with RSO Consulting"
    />
  );
};

export default CalendlyInlineWidget;
