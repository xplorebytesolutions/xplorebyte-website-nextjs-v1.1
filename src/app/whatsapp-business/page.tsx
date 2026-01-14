import type { Metadata } from "next";
import HeroSection from "@/components/whatsappBusiness/HeroSection";
import ProductFeatures from "@/components/whatsappBusiness/ProductFeatures";
import DemoCTA from "@/components/whatsappBusiness/DemoCTA";
import SocialProof from "@/components/whatsappBusiness/SocialProof";
import Testimonials from "@/components/whatsappBusiness/Testimonials";
import HubsSection from "@/components/whatsappBusiness/HubsSection";
import IndustriesGrid from "@/components/whatsappBusiness/IndustriesGrid";
import IndustriesCarousel from "@/components/whatsappBusiness/IndustryCarousel";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebytesolutions.com"
).replace(/\/+$/, "");
const PAGE_PATH = "/whatsapp-business";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "WhatsApp Business API | XploreByte" },
  description:
    "Connect WhatsApp Business API with XploreByte to run campaigns, build no-code chatbots, manage a Team Inbox, and track Advanced Campaign Analytics & Reports — built for small businesses.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "WhatsApp Business API | XploreByte",
    description:
      "Connect WhatsApp Business API with XploreByte to run campaigns, build no-code chatbots, manage a Team Inbox, and track Advanced Campaign Analytics & Reports — built for small businesses.",
    url: PAGE_URL,
    images: [
      {
        url: "/whatsapp-business/whatsapp-hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Business API - XploreByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Business API | XploreByte",
    description:
      "Connect WhatsApp Business API with XploreByte to run campaigns, build no-code chatbots, manage a Team Inbox, and track Advanced Campaign Analytics & Reports — built for small businesses.",
    images: ["/whatsapp-business/whatsapp-hero-illustration.png"],
  },
};

export default function WhatsappBusinessPage() {
  return (
    <>
      <HeroSection />
      <HubsSection />
      <SocialProof />
      <IndustriesGrid />
      <IndustriesCarousel />
      <ProductFeatures />
      <Testimonials />
      <DemoCTA />
    </>
  );
}
