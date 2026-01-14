import type { Metadata } from "next";
import PricingClient from "./PricingClient";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebytesolutions.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/pricing";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "Pricing | XploreByte" },
  description:
    "Simple pricing for XploreByte — WhatsApp First CRM for small businesses with Team Inbox, chatbot automation, WhatsApp Campaigning, WhatsApp Business API integration, and analytics. Start a free trial.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Pricing | XploreByte",
    description:
      "Simple pricing for XploreByte — WhatsApp First CRM for small businesses with Team Inbox, chatbot automation, WhatsApp Campaigning, WhatsApp Business API integration, and analytics. Start a free trial.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | XploreByte",
    description:
      "Simple pricing for XploreByte — WhatsApp First CRM for small businesses with Team Inbox, chatbot automation, WhatsApp Campaigning, WhatsApp Business API integration, and analytics. Start a free trial.",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
