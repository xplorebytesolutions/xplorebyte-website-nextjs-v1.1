import type { Metadata } from "next";
import AnalyticsReportingClient from "./AnalyticsReportingClient";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/features/analytics-reporting";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "Advanced Campaign Analytics & Reports | XploreByte" },
  description:
    "Measure WhatsApp campaign performance with XploreByte's Advanced Campaign Analytics & Reports - dashboards, ROI tracking, and actionable insights for teams.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Advanced Campaign Analytics & Reports | XploreByte",
    description:
      "Measure WhatsApp campaign performance with XploreByte's Advanced Campaign Analytics & Reports - dashboards, ROI tracking, and actionable insights for teams.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Advanced Campaign Analytics & Reports | XploreByte",
    description:
      "Measure WhatsApp campaign performance with XploreByte's Advanced Campaign Analytics & Reports - dashboards, ROI tracking, and actionable insights for teams.",
  },
};

export default function Page() {
  return <AnalyticsReportingClient />;
}