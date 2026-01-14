export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const GA_TRACKING_ID = GA_ID;

function ensureGtag() {
  if (typeof window === "undefined") return null;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = (...args: any[]) => {
      w.dataLayer.push(args);
    };
  }
  return w.gtag as (...args: any[]) => void;
}

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (!GA_ID) return;
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag("config", GA_ID, {
    page_path: url,
  });
};

// Log specific events happening.
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (!GA_ID) return;
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
