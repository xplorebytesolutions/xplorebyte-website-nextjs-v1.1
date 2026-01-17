import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "XploreByte | WhatsApp Business API CRM + No-Code Chatbot Builder" },
  description:
    "XploreByte helps small businesses grow with WhatsApp Business API using a WhatsApp CRM with Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start your free trial today.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "XploreByte | WhatsApp Business API CRM + No-Code Chatbot Builder",
    description:
      "XploreByte helps small businesses grow with WhatsApp Business API using a WhatsApp CRM with Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start your free trial today.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "XploreByte | WhatsApp Business API CRM + No-Code Chatbot Builder",
    description:
      "XploreByte helps small businesses grow with WhatsApp Business API using a WhatsApp CRM with Team Inbox, No-Code Chatbot Builder, Campaigning, and Advanced Analytics reports. Start your free trial today.",
  },
};

export default function Page() {
  return <HomeClient />;
}
