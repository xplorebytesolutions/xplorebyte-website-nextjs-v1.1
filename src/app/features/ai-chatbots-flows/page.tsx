import type { Metadata } from "next";
import AIChatbotsFlowsClient from "./AIChatbotsFlowsClient";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebyte.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/features/ai-chatbots-flows";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "No-Code Chatbot Builder | XploreByte" },
  description:
    "Build interactive WhatsApp flows with XploreByte's No-Code Chatbot Builder - automate support, qualify leads, and hand off to your Team Inbox.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "No-Code Chatbot Builder | XploreByte",
    description:
      "Build interactive WhatsApp flows with XploreByte's No-Code Chatbot Builder - automate support, qualify leads, and hand off to your Team Inbox.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "No-Code Chatbot Builder | XploreByte",
    description:
      "Build interactive WhatsApp flows with XploreByte's No-Code Chatbot Builder - automate support, qualify leads, and hand off to your Team Inbox.",
  },
};

export default function Page() {
  return <AIChatbotsFlowsClient />;
}