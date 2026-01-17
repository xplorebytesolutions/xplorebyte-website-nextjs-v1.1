import type { Metadata } from "next";
import CampaignsBroadcastingClient from "./CampaignsBroadcastingClient";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/features/campaigns-broadcasting";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "WhatsApp Campaigning | XploreByte" },
  description:
    "Run WhatsApp Campaigning and broadcasts with XploreByte - segments, templates, scheduling, and performance tracking with Advanced Campaign Analytics & Reports.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "WhatsApp Campaigning | XploreByte",
    description:
      "Run WhatsApp Campaigning and broadcasts with XploreByte - segments, templates, scheduling, and performance tracking with Advanced Campaign Analytics & Reports.",
    url: PAGE_URL,
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