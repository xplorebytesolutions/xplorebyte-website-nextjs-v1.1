import type { Metadata } from "next";
import AnalyticsReportingClient from "./AnalyticsReportingClient";

export const metadata: Metadata = {
  title: { absolute: "Advanced Campaign Analytics & Reports | XploreByte" },
  description:
    "Measure WhatsApp campaign performance with XploreByte's Advanced Campaign Analytics & Reports - dashboards, ROI tracking, and actionable insights for teams.",
  alternates: {
    canonical: "/features/analytics-reporting",
  },
  openGraph: {
    title: "Advanced Campaign Analytics & Reports | XploreByte",
    description:
      "Measure WhatsApp campaign performance with XploreByte's Advanced Campaign Analytics & Reports - dashboards, ROI tracking, and actionable insights for teams.",
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
