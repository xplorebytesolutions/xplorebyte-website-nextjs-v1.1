import type { Metadata } from "next";
import CampaignsBroadcastingClient from "./CampaignsBroadcastingClient";

export const metadata: Metadata = {
  title: { absolute: "WhatsApp Campaigning | XploreByte" },
  description:
    "Run WhatsApp Campaigning and broadcasts with XploreByte - segments, templates, scheduling, and performance tracking with Advanced Campaign Analytics & Reports.",
  alternates: {
    canonical: "/features/campaigns-broadcasting",
  },
  openGraph: {
    title: "WhatsApp Campaigning | XploreByte",
    description:
      "Run WhatsApp Campaigning and broadcasts with XploreByte - segments, templates, scheduling, and performance tracking with Advanced Campaign Analytics & Reports.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Campaigning | XploreByte",
    description:
      "Run WhatsApp Campaigning and broadcasts with XploreByte - segments, templates, scheduling, and performance tracking with Advanced Campaign Analytics & Reports.",
  },
};

export default function Page() {
  return <CampaignsBroadcastingClient />;
}
