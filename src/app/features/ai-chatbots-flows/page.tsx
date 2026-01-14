import type { Metadata } from "next";
import AIChatbotsFlowsClient from "./AIChatbotsFlowsClient";

export const metadata: Metadata = {
  title: { absolute: "No-Code Chatbot Builder | XploreByte" },
  description:
    "Build interactive WhatsApp flows with XploreByte's No-Code Chatbot Builder - automate support, qualify leads, and hand off to your Team Inbox.",
  alternates: {
    canonical: "/features/ai-chatbots-flows",
  },
  openGraph: {
    title: "No-Code Chatbot Builder | XploreByte",
    description:
      "Build interactive WhatsApp flows with XploreByte's No-Code Chatbot Builder - automate support, qualify leads, and hand off to your Team Inbox.",
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
