import type { Metadata } from "next";
import FeaturesClient from "./FeaturesClient";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/features";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "Features | XploreByte WhatsApp First CRM" },
  description:
    "Explore XploreByte features for small businesses: Team Inbox, WhatsApp Business API integration, No-Code Chatbot Builder, Campaigning, automation, and Advanced Campaign Analytics & Reports.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Features | XploreByte WhatsApp First CRM",
    description:
      "Explore XploreByte features for small businesses: Team Inbox, WhatsApp Business API integration, No-Code Chatbot Builder, Campaigning, automation, and Advanced Campaign Analytics & Reports.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | XploreByte WhatsApp First CRM",
    description:
      "Explore XploreByte features for small businesses: Team Inbox, WhatsApp Business API integration, No-Code Chatbot Builder, Campaigning, automation, and Advanced Campaign Analytics & Reports.",
  },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
