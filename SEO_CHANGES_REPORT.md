# SEO + Routing Fixes Report

Generated: 2026-01-13 22:39:51

## Internal Link Inventory (Header / Footer / Home CTAs)

### Unique internal links
- `/about-us`
- `/acceptable-use-policy`
- `/api-documentation`
- `/careers`
- `/contact`
- `/features`
- `/features/ai-chatbots-flows`
- `/features/analytics-reporting`
- `/features/campaigns-broadcasting`
- `/features/integrations-hub`
- `/features/sales-ecommerce-tools`
- `/industries/education`
- `/industries/finance`
- `/industries/healthcare`
- `/industries/manufacturing`
- `/industries/public-sector`
- `/industries/retail-ecommerce`
- `/industries/transportation-logistics`
- `/login`
- `/pricing`
- `/privacy-policy`
- `/product-updates`
- `/refund-policy`
- `/start-free-trial`
- `/success-stories`
- `/support-center`
- `/terms-of-service`
- `/user-community`
- `/whatsapp-business`

### Links by file
#### `src/components/CTASection.tsx`
- `/start-free-trial`

#### `src/components/Footer.tsx`
- `/about-us`
- `/acceptable-use-policy`
- `/careers`
- `/contact`
- `/privacy-policy`
- `/refund-policy`
- `/success-stories`
- `/terms-of-service`

#### `src/components/Header.tsx`
- `/about-us`
- `/api-documentation`
- `/contact`
- `/features`
- `/features/ai-chatbots-flows`
- `/features/ai-chatbots-flows`
- `/features/analytics-reporting`
- `/features/analytics-reporting`
- `/features/campaigns-broadcasting`
- `/features/campaigns-broadcasting`
- `/features/integrations-hub`
- `/features/sales-ecommerce-tools`
- `/features/sales-ecommerce-tools`
- `/industries/education`
- `/industries/finance`
- `/industries/healthcare`
- `/industries/manufacturing`
- `/industries/public-sector`
- `/industries/retail-ecommerce`
- `/industries/transportation-logistics`
- `/login`
- `/login`
- `/pricing`
- `/product-updates`
- `/support-center`
- `/user-community`
- `/whatsapp-business`

## Full File Contents

### `src/app/layout.tsx`

```
// import "../styles/globals.css";
// import { Montserrat } from "next/font/google";
// import GoogleAnalytics from "@/components/GoogleAnalytics";
// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["200", "300", "300"],
//   variable: "--font-montserrat",
//   display: "swap",
// });
// export const metadata = {
//   title: "XploreByte Solutions",
//   description: "Elite SaaS and digital solutions for ambitious businesses.",
//   icons: [
//     { rel: "icon", url: "/assets/logo_7.svg", type: "image/svg+xml" },
//     { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "32x32" },
//   ],
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {children} <GoogleAnalytics />
//       </body>
//     </html>
//   );
// }

import "../styles/globals.css";
import { Suspense } from "react";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FloatingActionButton from "@/components/FloatingActionButton";
import { AnalyticsRouteTracker } from "@/components/AnalyticsRouteTracker";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Added weights for bold fonts
  variable: "--font-montserrat",
  display: "swap",
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebytesolutions.com").replace(
  /\/+$/,
  "",
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    template: "%s | XploreByte | WhatsApp First CRM",
  },
  description:
    "XploreByte is a WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to turn chats into customers.",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    description:
      "XploreByte is a WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to turn chats into customers.",
    url: siteUrl,
    siteName: "XploreByte",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "XploreByte - WhatsApp First CRM + No-Code Chatbot Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    description:
      "XploreByte is a WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to turn chats into customers.",
    images: ["/herosection.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "XploreByte",
        url: siteUrl,
        logo: `${siteUrl}/apple-touch-icon.png`,
        description:
          "XploreByte is a WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to turn chats into customers.",
        sameAs: [] as string[],
      },
      {
        "@type": "WebSite",
        name: "XploreByte",
        url: siteUrl,
      },
      {
        "@type": "SoftwareApplication",
        name: "XploreByte",
        applicationCategory: "CRM",
        operatingSystem: "Web",
        url: siteUrl,
        description:
          "WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports.",
      },
    ],
  };

  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="pt-14 md:pt-14 no-scrollbar" suppressHydrationWarning>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>
        {children}
        <FloatingActionButton />
      </body>
    </html>
  );
}
```

### `src/app/page.tsx`

```
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: { absolute: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder" },
  description:
    "XploreByte is a WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to turn chats into customers.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    description:
      "XploreByte is a WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to turn chats into customers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "XploreByte | WhatsApp First CRM + No-Code Chatbot Builder",
    description:
      "XploreByte is a WhatsApp First CRM with a Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports to turn chats into customers.",
  },
};

export default function Page() {
  return <HomeClient />;
}
```

### `src/app/HomeClient.tsx`

```
"use client";

import { useState } from "react";
import NextLink from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroFeatureStrip from "../components/HeroFeatureStrip";
import IndustriesGrid from "../components/whatsappBusiness/IndustriesGrid";
import WhyWhatsAppSection from "../components/WhyWhatsAppSection";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import SalesModal from "../components/SalesModal";
import {
  ShoppingCart,
  Rocket,
  Building2,
  Bot,
  Clock,
  Users,
  Settings,
  Link,
  Infinity,
} from "lucide-react";

// import DigitalSerenity from "../components/DigitalSerenity";

export default function Home() {
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col relative overflow-hidden bg-white">
        <Header />
        <div className="flex-1 flex flex-col justify-center">
          <Hero />
        </div>
        <HeroFeatureStrip />
      </div>

      <main className="flex flex-col">
        <IndustriesGrid />
        <WhyWhatsAppSection />

        {/* Features Section */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="font-bold text-gray-900 mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                All the features you need, all in one place
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to turn WhatsApp into your most powerful
                business tool. From intelligent campaigns to automated
                conversations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Click to WhatsApp Ads */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/Click-to-WhatsApp-Ads.webp"
                    alt="Click to WhatsApp Ads - Mobile ad to chat flow"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Click to WhatsApp Ads
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Turn ad clicks into revenue-driving conversations
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Capture verified leads from Meta and Google, engage them
                    instantly, and send conversion signals back to improve ad
                    targeting and ROAS.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More Ã¢â€ â€™
                    </span>
                  </div>
                </div>
              </div>

              {/* Broadcast & Bulk Messages */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/bluk-messaging.webp"
                    alt="Broadcast & Bulk Messages - Mass messaging interface"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Broadcast & Bulk Messages
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Drive higher engagement than email & SMS
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Reach thousands instantly with ready-to-use message
                    templates across different languages. Higher engagement than
                    traditional email and SMS.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More Ã¢â€ â€™
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Flows */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/WhatsApp-flows.webp"
                    alt="WhatsApp Flows - Interactive flow examples"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    WhatsApp Flows
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Create frictionless surveys and interactive experiences
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Effortlessly capture customer interests with WhatsApp flows.
                    Create frictionless surveys, interactive experiences, and
                    registrations to collect customer preferences.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More Ã¢â€ â€™
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Catalog */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/catalog.webp"
                    alt="WhatsApp Catalog - Product catalog interface"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    WhatsApp Catalog
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Browse, ask and buy right inside WhatsApp
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Let people browse, ask and buy, right inside WhatsApp. Use
                    your catalog to highlight offers, share updates and keep
                    customers coming back.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More Ã¢â€ â€™
                    </span>
                  </div>
                </div>
              </div>

              {/* No-code Chatbot */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/noCodeChatbuilder.webp"
                    alt="No-code Chatbot - Chatbot flow builder"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    No-code Chatbot
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Build flows in minutes, not hours
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Build flows in minutes, not hours. Answer FAQs, guide
                    purchases, or route chats, all while staying available 24/7
                    across marketing, support, and sales.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More Ã¢â€ â€™
                    </span>
                  </div>
                </div>
              </div>

              {/* Analytics & Reporting */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer">
                {/* Large Hero Image */}
                <div className="relative h-80 overflow-hidden bg-gray-50">
                  <img
                    src="/landing-page/analytics.webp"
                    alt="Analytics & Reporting - Performance tracking dashboard"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/30">
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.25rem",
                      lineHeight: "1.2",
                    }}
                  >
                    Analytics & Reporting
                  </h3>
                  <p className="text-lg text-[#333] mb-4">
                    Track performance with detailed analytics
                  </p>
                  <p className="text-base text-[#333] mb-4">
                    Track performance with detailed analytics. Monitor message
                    delivery, engagement rates, conversion metrics, and customer
                    satisfaction to optimize your WhatsApp strategy.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      More Ã¢â€ â€™
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transform Your Business with WhatsApp API Section */}
            <div className="mt-20 mb-20">
              <h2
                className="text-center text-black mb-6 font-bold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                Transform Your Business with WhatsApp API
              </h2>
              <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16">
                Three powerful ways to revolutionize your customer engagement,
                boost revenue, and scale operations
              </p>
              {/* Featurette 1: Marketing & Sales */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h3
                    className="font-bold text-black mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    1. Drive Revenue & Boost Sales
                  </h3>
                  <p className="text-lg text-[#333] mb-6">
                    Convert conversations into sales. Send targeted campaigns,
                    showcase products, and close deals faster than ever.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Drive More Sales
                        </h4>
                        <p className="text-[#333]">
                          Send catalogs, process orders, and accept payments
                          through WhatsApp.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Launch Campaigns
                        </h4>
                        <p className="text-[#333]">
                          Send bulk messages and promotional content to
                          thousands instantly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Build Your Brand
                        </h4>
                        <p className="text-[#333]">
                          Create memorable experiences that keep customers
                          coming back.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl p-3 bg-gray-100 border border-gray-200 shadow-lg">
                    <div className="rounded-xl overflow-hidden w-full h-80">
                      <img
                        src="/landing-page/roi.webp"
                        alt="Boost Sales & Marketing ROI - ROI Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Featurette 2: Customer Support */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                <div className="flex items-center justify-center">
                  <div className="rounded-2xl p-3 bg-gray-100 border border-gray-200 shadow-lg w-full">
                    <div className="rounded-xl overflow-hidden w-full h-80">
                      <img
                        src="/landing-page/support.webp"
                        alt="Deliver 24/7, World-Class Support - Support Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center h-80">
                  <h3
                    className="font-bold text-black mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    2. Deliver Exceptional Customer Support
                  </h3>
                  <p className="text-lg text-[#333] mb-6">
                    Provide 24/7 support that delights customers. Reduce costs,
                    eliminate wait times, and resolve issues instantly.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bot className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Resolve Queries Instantly
                        </h4>
                        <p className="text-[#333]">
                          Deploy intelligent chatbots 24/7.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Eliminate Wait Times
                        </h4>
                        <p className="text-[#333]">
                          Reduce response time from hours to seconds.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Empower Your Agents
                        </h4>
                        <p className="text-[#333]">
                          Unified Omni-Inbox for seamless management.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featurette 3: Automation & Scale */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="flex flex-col justify-center h-80">
                  <h3
                    className="font-bold text-black mb-4"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "2rem",
                      lineHeight: "1.2",
                    }}
                  >
                    3. Automate & Scale Seamlessly
                  </h3>
                  <p className="text-lg text-[#333] mb-6">
                    Scale your business without limits. Automate repetitive
                    tasks, integrate with your existing tools, and grow
                    efficiently.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Automate Everything
                        </h4>
                        <p className="text-[#333]">
                          Send automatic reminders and notifications.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Link className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Integrate Your Stack
                        </h4>
                        <p className="text-[#333]">
                          Connect to CRM, e-commerce, and other tools.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Infinity className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">
                          Grow Without Limits
                        </h4>
                        <p className="text-[#333]">
                          Scale from 100 to 1 million messages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="rounded-2xl p-3 bg-gray-100 border border-gray-200 shadow-lg w-full">
                    <div className="rounded-xl overflow-hidden w-full h-80">
                      <img
                        src="/landing-page/automation.webp"
                        alt="Automate & Scale Your Operations - Automation Dashboard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mt-20 bg-gradient-to-r from-[#10B981]/10 to-[#1E3A8A]/10 rounded-xl p-12">
              <div className="text-center mb-8">
                <h3
                  className="font-bold text-gray-900 mb-4"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Real Results from Real Businesses
                </h3>
                <p className="text-xl text-gray-600">
                  Here&apos;s what happens when you combine all these elements
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">
                    3,800
                  </div>
                  <div className="text-gray-600">Messages Delivered</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Out of 5,000 sent
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">
                    2,100
                  </div>
                  <div className="text-gray-600">Messages Read</div>
                  <div className="text-sm text-gray-500 mt-1">
                    55% read rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#10B981] mb-2">
                    110
                  </div>
                  <div className="text-gray-600">Purchases Made</div>
                  <div className="text-sm text-gray-500 mt-1">
                    5.2% conversion
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg text-gray-700 italic">
                  &quot;Those 110 buyers didn&apos;t appear by luck Ã¢â‚¬â€ they
                  appeared because we understood their behavior through
                  xByteChat&apos;s campaign analytics.&quot;
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Ã¢â‚¬â€ Clothing Brand Case Study
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2.5rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of successful businesses that trust XploreByte for
              their digital transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 rounded-lg font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                Talk to Sales
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <NextLink
                href="/whatsapp-business"
                className="inline-flex items-center px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Book a Demo
              </NextLink>
            </div>
          </div>
        </section>

        {/* <DigitalSerenity /> */}
      </main>
      <Footer />

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
```

### `src/app/features/page.tsx`

```
import type { Metadata } from "next";
import FeaturesClient from "./FeaturesClient";

export const metadata: Metadata = {
  title: { absolute: "Features | XploreByte WhatsApp First CRM" },
  description:
    "Explore XploreByte features: Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, CRM, automation, and Advanced Campaign Analytics & Reports.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features | XploreByte WhatsApp First CRM",
    description:
      "Explore XploreByte features: Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, CRM, automation, and Advanced Campaign Analytics & Reports.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features | XploreByte WhatsApp First CRM",
    description:
      "Explore XploreByte features: Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, CRM, automation, and Advanced Campaign Analytics & Reports.",
  },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
```

### `src/app/features/FeaturesClient.tsx`

```
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoModal from "../../components/DemoModal";
import SalesModal from "../../components/SalesModal";
import {
  Bot,
  BarChart3,
  Zap,
  Settings,
  ArrowRight,
  Code,
  HelpCircle,
  Megaphone,
  MessageCircle,
  FileText,
  BookOpen,
  ToggleLeft,
} from "lucide-react";

export default function Features() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Powerful <span className="text-[#11A944]">Features</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the comprehensive suite of tools designed to transform
                your business communication and automation.
              </p>
            </div>
          </div>
        </section>

        {/* WhatsApp Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WhatsApp Business Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leverage the power of WhatsApp to connect with your customers
                like never before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Broadcasting
                </h3>
                <p className="text-gray-600 mb-4">
                  Send targeted messages to thousands of customers instantly
                  with advanced segmentation and personalization.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>â€¢ Bulk messaging with personalization</li>
                  <li>â€¢ Advanced audience segmentation</li>
                  <li>â€¢ Delivery reports and analytics</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  AI WhatsApp Chatbot
                </h3>
                <p className="text-gray-600 mb-4">
                  Intelligent chatbots that understand context and provide
                  instant, accurate responses to customer queries.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>â€¢ Natural language processing</li>
                  <li>â€¢ 24/7 automated support</li>
                  <li>â€¢ Easy conversation flow builder</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Click to WhatsApp Ads
                </h3>
                <p className="text-gray-600 mb-4">
                  Convert your Facebook and Instagram ads into direct WhatsApp
                  conversations, increasing lead generation by 3x.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>â€¢ Seamless ad integration</li>
                  <li>â€¢ Higher conversion rates</li>
                  <li>â€¢ Direct customer engagement</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Chatbots
                </h3>
                <p className="text-gray-600 mb-4">
                  Create sophisticated conversation flows with our drag-and-drop
                  chatbot builder.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>â€¢ Visual flow builder</li>
                  <li>â€¢ Multi-language support</li>
                  <li>â€¢ Advanced logic conditions</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Catalog
                </h3>
                <p className="text-gray-600 mb-4">
                  Showcase your products directly within WhatsApp with rich
                  media and easy ordering.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>â€¢ Product catalog integration</li>
                  <li>â€¢ Rich media support</li>
                  <li>â€¢ Direct ordering system</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Payments
                </h3>
                <p className="text-gray-600 mb-4">
                  Accept payments directly through WhatsApp using UPI, cards,
                  and other payment methods.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>â€¢ Multiple payment options</li>
                  <li>â€¢ Secure transactions</li>
                  <li>â€¢ Payment tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Business Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Business Automation Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Streamline your business operations with our comprehensive
                automation suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Smart Workflows
                    </h3>
                    <p className="text-gray-600">
                      Automate complex business processes with our drag-and-drop
                      workflow builder.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0296FE] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Analytics Dashboard
                    </h3>
                    <p className="text-gray-600">
                      Get real-time insights into your business performance with
                      comprehensive analytics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Integrations
                    </h3>
                    <p className="text-gray-600">
                      Connect with your favorite tools and platforms for
                      seamless data flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#EA1752] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      AI Automation
                    </h3>
                    <p className="text-gray-600">
                      Leverage artificial intelligence to automate repetitive
                      tasks and decision-making.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7D47C4] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      API Access
                    </h3>
                    <p className="text-gray-600">
                      Build custom integrations with our comprehensive API
                      documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Multi-Channel Support
                    </h3>
                    <p className="text-gray-600">
                      Manage all your customer communications from a single
                      platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Start your free trial today and experience the power of our
              comprehensive feature set.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-free-trial"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
```

### `src/app/features/ai-chatbots-flows/page.tsx`

```
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
```

### `src/app/features/ai-chatbots-flows/AIChatbotsFlowsClient.tsx`

```
"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import DemoModal from "../../../components/DemoModal";
import SalesModal from "../../../components/SalesModal";
import {
  Zap,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Code,
  Bot,
  Play,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AIChatbotsFlows() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#11A944]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="max-w-2xl"
              >



                <h1
                  className="font-extrabold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "3.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Build <span className="text-emerald-700">Intelligent</span>{" "}
                  Conversations
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create chatbots and interactive flows with a No-Code Chatbot
                  Builder that understands context, engages customers, and
                  automates sales 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-700 text-white font-semibold font-sans shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-200 group"
                  >
                    Start Building Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setIsSalesModalOpen(true)}
                    className="inline-flex items-center px-8 py-4 rounded-lg font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition-colors font-sans"
                  >
                    View Live Examples
                  </button>
                </div>

                <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> No
                    coding required
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />{" "}
                    Drag-and-drop builder
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                  <div className="absolute top-0 w-full h-12 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="pt-12 bg-gray-50/50">
                    <Image
                      src="/New_Design/whatApi_integration.webp"
                      alt="No-Code Chatbot Builder Interface"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">3x Higher</p>
                    <p className="text-xs text-gray-500">Conversion Rate</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                Everything You Need to Automate
              </h2>
              <p className="text-lg text-gray-600">
                Powerful tools to design, deploy, and manage intelligent
                conversations at scale.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Code className="w-6 h-6 text-emerald-700" />,
                  title: "Visual Flow Builder",
                  desc: "Drag, drop, and connect blocks to design complex conversational paths in minutes. No coding needed.",
                },
                {
                  icon: <Zap className="w-6 h-6 text-emerald-700" />,
                  title: "AI-Powered NLP",
                  desc: "Understand customer intent instantly with built-in natural language processing engine.",
                },
                {
                  icon: <MessageCircle className="w-6 h-6 text-emerald-700" />,
                  title: "Rich Messaging",
                  desc: "Use buttons, lists, carousels, and media to create engaging, app-like experiences within WhatsApp.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-Montserrat">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefit Deep Dive */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs uppercase tracking-wide mb-6">
                  Why It Matters
                </div>
                <h2
                  className="font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  Turn Conversations Into Revenue
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Don't just chat - convert. XploreByte's flows are designed to guide users to the next best action, whether it's booking a demo, making a purchase, or resolving a support ticket.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "24/7 Instant Responses",
                      desc: "Never miss a lead. Your bot works while you sleep, capturing and qualifying every opportunity.",
                    },
                    {
                      title: "Seamless Handoff",
                      desc: "Intelligent routing ensures complex queries are instantly passed to the right human agent with full context.",
                    },
                    {
                      title: "Personalized Journeys",
                      desc: "Use customer data to tailor the conversation path, increasing engagement and satisfaction.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-emerald-50 rounded-3xl transform rotate-3 scale-95 opacity-70"></div>
                <div className="relative bg-white border border-gray-200 shadow-2xl rounded-3xl p-8">
                  <div className="flex flex-col gap-4">
                    {/* Mock Chat Interface */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm text-gray-800">
                          Hi there! How can I help you grow your business today?
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-emerald-600 text-white rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                        <p className="text-sm">
                          I'm looking to automate my customer support.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-sm text-gray-800 mb-3">
                          Great choice! We can help reduce ticket volume by up
                          to 70%. Would you like to see a quick demo?
                        </p>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-emerald-700 text-xs font-bold shadow-sm">
                            Yes, show me
                          </button>
                          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 text-xs font-bold shadow-sm">
                            Pricing first
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-gray-900 mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2.5rem",
                lineHeight: "1.2",
              }}
            >
              Start Automating in Minutes
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of businesses using XploreByte to scale their
              conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-emerald-700 text-white font-semibold font-sans shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-200"
              >
                Book a Free Demo
              </button>
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-4 rounded-lg font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition-colors font-sans"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
```

### `src/app/features/campaigns-broadcasting/page.tsx`

```
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
```

### `src/app/features/campaigns-broadcasting/CampaignsBroadcastingClient.tsx`

```
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import DemoModal from "../../../components/DemoModal";
import {
  Megaphone,
  Target,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
} from "lucide-react";

export default function CampaignsBroadcasting() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="font-extrabold text-white mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <span className="text-[#11A944]">WhatsApp Campaigning</span>{" "}
                  & Broadcasting
                </h1>
                <p className="text-lg text-white/80 mb-8">
                  Bulk WhatsApp Campaigning, broadcasts, and retargeting. Send
                  targeted messages to thousands of customers with precision and
                  personalization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/start-free-trial"
                    className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors"
                  >
                    Launch Campaign
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    View Templates
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Megaphone className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Campaign Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Powerful Campaign Tools
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Create, manage, and optimize your WhatsApp marketing campaigns
                with advanced targeting and analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bulk Messaging
                </h3>
                <p className="text-base text-gray-600">
                  Send personalized messages to thousands of contacts with
                  advanced segmentation and scheduling.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Smart Targeting
                </h3>
                <p className="text-base text-gray-600">
                  Advanced audience segmentation based on behavior,
                  demographics, and engagement history.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Campaign Analytics
                </h3>
                <p className="text-base text-gray-600">
                  Track delivery rates, open rates, click-through rates, and
                  conversion metrics in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2rem",
                    lineHeight: "1.2",
                  }}
                >
                  Why Choose Our Campaign Platform?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        High Delivery Rates
                      </h3>
                      <p className="text-base text-gray-600">
                        Optimized delivery infrastructure ensures your messages
                        reach customers reliably and quickly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Personalization at Scale
                      </h3>
                      <p className="text-base text-gray-600">
                        Dynamic content and personalized messaging that
                        resonates with each individual customer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Compliance Ready
                      </h3>
                      <p className="text-base text-gray-600">
                        Built-in compliance tools to ensure your campaigns meet
                        WhatsApp Business API requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Campaign Analytics Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-white mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Launch Your First Campaign?
            </h2>
            <p className="text-base text-white/80 mb-8">
              Start reaching your customers with targeted, personalized WhatsApp
              messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-free-trial"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
```

### `src/app/features/analytics-reporting/page.tsx`

```
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
```

### `src/app/features/analytics-reporting/AnalyticsReportingClient.tsx`

```
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import DemoModal from "../../../components/DemoModal";
import {
  BarChart3,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  PieChart,
  Activity,
  Eye,
} from "lucide-react";

export default function AnalyticsReporting() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="font-extrabold text-white mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <span className="text-[#11A944]">Advanced Analytics</span> &{" "}
                  Reports
                </h1>
                <p className="text-lg text-white/80 mb-8">
                  Real-time ROI & performance tracking. Get deep insights into
                  your WhatsApp campaigns and team performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/start-free-trial"
                    className="inline-flex items-center px-8 py-4 bg-[#11A944] text-white font-semibold rounded-lg shadow-lg hover:bg-[#0d8a3a] transition-colors"
                  >
                    View Analytics
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Generate Report
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Analytics Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Comprehensive Analytics Features
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Track every metric that matters with our powerful analytics and
                reporting suite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-[#11A944]/5 to-[#0296FE]/5 rounded-2xl border border-[#11A944]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#11A944] to-[#0296FE] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real-Time Metrics
                </h3>
                <p className="text-base text-gray-600">
                  Monitor campaign performance, response times, and engagement
                  rates in real-time.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#FFB800]/5 to-[#EA1752]/5 rounded-2xl border border-[#FFB800]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFB800] to-[#EA1752] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <PieChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ROI Tracking
                </h3>
                <p className="text-base text-gray-600">
                  Measure return on investment with detailed
                  cost-per-acquisition and revenue tracking.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-[#0296FE]/5 to-[#7D47C4]/5 rounded-2xl border border-[#0296FE]/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0296FE] to-[#7D47C4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Team Performance
                </h3>
                <p className="text-base text-gray-600">
                  Track agent productivity, response times, and customer
                  satisfaction scores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  className="font-bold text-gray-900 mb-6"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "2rem",
                    lineHeight: "1.2",
                  }}
                >
                  Why Choose Our Analytics?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Actionable Insights
                      </h3>
                      <p className="text-base text-gray-600">
                        Get clear, actionable insights that help you optimize
                        your WhatsApp campaigns and improve performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Custom Reports
                      </h3>
                      <p className="text-base text-gray-600">
                        Create custom reports and dashboards tailored to your
                        business needs and KPIs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#11A944] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-2">
                        Automated Alerts
                      </h3>
                      <p className="text-base text-gray-600">
                        Set up automated alerts for important metrics and get
                        notified when action is needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-24 h-24 text-[#11A944] mx-auto mb-4" />
                    <p className="text-gray-600">Performance Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-white mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Track Your Success?
            </h2>
            <p className="text-base text-white/80 mb-8">
              Start using our powerful analytics to optimize your WhatsApp
              campaigns and drive better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-free-trial"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
```

### `src/app/pricing/page.tsx`

```
import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: { absolute: "Pricing | XploreByte" },
  description:
    "Simple pricing for XploreByte â€” WhatsApp First CRM with Team Inbox, chatbot automation, campaigning, and analytics for growing businesses.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
```

### `src/app/pricing/PricingClient.tsx`

```
"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DemoModal from "../../components/DemoModal";
import SalesModal from "../../components/SalesModal";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
  Zap,
  Users,
  Building,
  Globe,
  MessageCircle,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Pricing() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [region, setRegion] = useState("india");
  const [addonBilling, setAddonBilling] = useState<Record<string, string>>({
    virtualNumber: "monthly",
    chatbot: "monthly",
  });

  useEffect(() => {
    if (region === "outside-india") {
      router.push("/pricing-outside-india");
    }
  }, [region, router]);

  const plans = [
    {
      name: "Free Forever",
      description: "Get Started with WhatsApp Ads & WhatsApp API",
      price: "â‚¹0",
      period: "Forever",
      buttonText: "Get Started",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "Free WhatsApp Business API",
        "Free WhatsApp Blue Tick Application",
        "â‚¹50 Free Conversation Credits",
        "Unlimited Free Service Conversations",
        "Click to WhatsApp Ads Manager",
        "Upload & Manage Contacts",
        "Create tags & attributes",
        "Upto 10 Tags",
        "Upto 5 Custom Attributes",
        "Create template messages",
        "Live Chat Dashboard",
      ],
      messageCharges: {
        marketing: "â‚¹0.88",
        utility: "â‚¹0.125",
        authentication: "â‚¹0.125",
        service: "Unlimited Free",
      },
    },
    {
      name: "Starter",
      description: "Everything you need to get started with your business.",
      price: "â‚¹1350",
      period: "month",
      buttonText: "Get Started",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "All Features of Free Forever",
        "1 Owner + 5 FREE Agents included. Additional Agents at â‚¹750/ month each",
        "Smart Audience Segregation",
        "Broadcasting & Retargeting",
        "Template Message APIs",
        "Multi-Agent Live Chat",
        "2400 Messages/min",
        "Dialogflow Chatbot Integration",
        "Shared Team Inbox",
        "Click-to-WhatsApp Ads Manager",
      ],
      messageCharges: {
        marketing: "â‚¹0.88",
        utility: "â‚¹0.125",
        authentication: "â‚¹0.125",
        service: "Unlimited Free",
      },
      chatbotFlows: "5 Chatbot Flows: â‚¹2500 (charged separately)",
    },
    {
      name: "Pro",
      description:
        "Highly recommended plan to make the best use of Retargeting Campaigns",
      price: "â‚¹2880",
      period: "month",
      buttonText: "Get Started",
      buttonStyle: "bg-[#11A944] text-white hover:bg-[#0d8a3a]",
      popular: true,
      features: [
        "All features in Starter Plan",
        "Upto 100 Tags",
        "Upto 20 Custom Attributes",
        "Campaign Scheduler",
        "Campaign Click Tracking",
        "Campaign Budget Analytics",
        "Carousel Template Click Tracking",
        "CSV Campaign Scheduler",
        "User Access Control",
        "Automatic Failed Message Retry",
        "1 Owner + 5 FREE Agents included. Additional Agents at â‚¹750/ month each",
      ],
      messageCharges: {
        marketing: "â‚¹0.88",
        utility: "â‚¹0.125",
        authentication: "â‚¹0.125",
        service: "Unlimited Free",
      },
      chatbotFlows: "5 Chatbot Flows: â‚¹2500 (charged separately)",
    },
    {
      name: "Enterprise",
      description: "Recommended for 5 Lac+ Messages per month",
      price: "Custom",
      period: "",
      buttonText: "Get Connected",
      buttonStyle:
        "bg-white text-black border border-gray-300 hover:bg-gray-50",
      features: [
        "All features in Pro Plan",
        "Recommended for Brands with 5 Lac+ Users",
        "Unlimited Tags",
        "Unlimited Attributes",
        "Downloadable Reports",
        "Dedicated Account Manager",
        "Priority Customer Support",
        "Webhooks",
        "Higher Messaging Speed",
      ],
      messageCharges: {
        marketing: "Custom",
        utility: "â‚¹0.125",
        authentication: "â‚¹0.125",
        service: "Unlimited Free",
      },
    },
  ];

  const addons = [
    {
      name: "Indian Virtual Number",
      description:
        "Buy Indian Virtual Number for WhatsApp Business API (Requires GST/MSME for KYC)",
      price: "â‚¹199",
      period: "Per Month",
      features: [
        "Indian Number (Eg. +9186XXXX1234, +9186XXXX7891)",
        "No Need to maintain SIM Card",
        "Use this Number to get WhatsApp Business API via XploreByte",
        "Free Onboarding Call",
      ],
      billingOptions: ["monthly", "quarterly"],
    },
    {
      name: "WhatsApp Chatbot Flow Builder",
      description: "Get Started with Drag & Drop Chatbot Flow Builder",
      price: "â‚¹2500",
      period: "Per Month",
      features: [
        "5 WhatsApp Chatbots per month",
        "5 Chatbot Flows - Build 5 unique Chatbots",
        "Manage Catalogues",
        "Connect WhatsApp Payments with Chatbot",
        "Automate Sales & Support seamlessly",
      ],
      billingOptions: ["monthly", "yearly"],
    },
  ];

  const terminology = [
    {
      title: "Customer Service Window",
      description:
        "24-hour window for free responses to customer messages. After 24 hours, you need to use template messages.",
    },
    {
      title: "Unlimited Free Service messages",
      description:
        "Free service messages received by XploreByte businesses from users who initiate conversations.",
    },
    {
      title: "Marketing messages",
      description:
        "Promotional messages sent to customers. Cost: â‚¹0.88/message for Indian users.",
    },
    {
      title: "Utility Messages",
      description:
        "Transactional messages like delivery updates, order confirmations. Cost: â‚¹0.125/message for Indian users.",
    },
    {
      title: "Authentication Messages",
      description:
        "Verification messages like OTP, password reset. Cost: â‚¹0.125/message for Indian users.",
    },
    {
      title: "Service Messages",
      description:
        "User-initiated support messages. Free for XploreByte businesses.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className="font-extrabold text-white mb-6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2.5rem",
                  lineHeight: "1.2",
                }}
              >
                XploreByte <span className="text-[#11A944]">Pricing Plans</span>
              </h1>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Choose the perfect plan for your business. Transparent pricing
                with no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1.5rem",
                  lineHeight: "1.2",
                }}
              >
                Monthly / Yearly Subscription | Unlimited Users Plan
              </h2>
              <div className="flex items-center justify-center gap-4">
                <span
                  className={`text-lg ${
                    billingCycle === "monthly"
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  Monthly
                </span>
                <button
                  onClick={() =>
                    setBillingCycle(
                      billingCycle === "monthly" ? "yearly" : "monthly"
                    )
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    billingCycle === "yearly" ? "bg-[#11A944]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === "yearly"
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-lg ${
                    billingCycle === "yearly"
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  Yearly (10% Off)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Region Toggle */}
        <section className="py-4 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4">
                <span
                  className={`text-lg ${
                    region === "india"
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  India
                </span>
                <button
                  onClick={() =>
                    setRegion(region === "india" ? "outside-india" : "india")
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    region === "outside-india" ? "bg-[#11A944]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      region === "outside-india"
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-lg ${
                    region === "outside-india"
                      ? "text-gray-900 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  Outside India
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-[#11A944] scale-105"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#11A944] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3
                      className="font-bold text-gray-900 mb-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "1.5rem",
                        lineHeight: "1.2",
                      }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-base">
                      {plan.description}
                    </p>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {plan.price}
                    </div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>

                  {/* Message Charges */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4
                      className="font-semibold text-gray-900 mb-3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "1rem",
                        lineHeight: "1.2",
                      }}
                    >
                      Per Template Message Charges:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Marketing:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.marketing}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utility:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.utility}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Authentication:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.authentication}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service:</span>
                        <span className="font-semibold">
                          {plan.messageCharges.service}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.chatbotFlows && (
                    <div className="mb-6 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800 font-medium">
                        {plan.chatbotFlows}
                      </p>
                    </div>
                  )}

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Country-wise Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Countrywise per WhatsApp message Pricing
              </h2>
              <p className="text-base text-gray-600 mb-8">
                Messaging costs vary by your user&apos;s country. Check the
                exact per-message charges for sending WhatsApp messages to users
                in different regions.
              </p>
              <Link
                href="/international-pricing"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Explore Pricing â†’
              </Link>
            </div>
          </div>
        </section>

        {/* Add-Ons */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Add-Ons (Charged separately)
              </h2>
              <p className="text-base text-gray-600">
                Get Started with Virtual Number & Drag & Drop Flow Builder
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {addons.map((addon, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
                >
                  <div className="mb-6">
                    <h3
                      className="font-bold text-gray-900 mb-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "1.5rem",
                        lineHeight: "1.2",
                      }}
                    >
                      {addon.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-base">
                      {addon.description}
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center gap-4 mb-4">
                      {addon.billingOptions.map(option => (
                        <button
                          key={option}
                          onClick={() =>
                            setAddonBilling(prev => ({
                              ...prev,
                              [addon.name.toLowerCase().replace(/\s+/g, "")]:
                                option,
                            }))
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            addonBilling[
                              addon.name.toLowerCase().replace(/\s+/g, "")
                            ] === option
                              ? "bg-[#11A944] text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {option === "monthly"
                            ? "Bill Monthly"
                            : option === "quarterly"
                            ? "Billed Quarterly"
                            : "Billed Yearly"}
                        </button>
                      ))}
                    </div>

                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {addon.price} {addon.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#11A944] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-[#11A944] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0d8a3a] transition-colors">
                    Buy Now â†’
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Terminologies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="font-bold text-gray-900 mb-4"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "2rem",
                  lineHeight: "1.2",
                }}
              >
                Important Pricing Terminologies
              </h2>
              <p className="text-base text-gray-600">
                Let&apos;s make WhatsApp API Pricing easy to understand for you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {terminology.map((term, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3
                    className="font-semibold text-gray-900 mb-3"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "1.125rem",
                      lineHeight: "1.2",
                    }}
                  >
                    {term.title}
                  </h3>
                  <p className="text-gray-600 text-base">{term.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0A0E23] to-[#181B32]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-bold text-white mb-6"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Get Started?
            </h2>
            <p className="text-base text-white/80 mb-8">
              Join hundreds of businesses already using our WhatsApp API
              platform to transform their business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/start-free-trial"
                className="inline-flex items-center px-8 py-3 bg-[#11A944] text-white font-semibold rounded-lg hover:bg-[#0d8a3a] transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button
                onClick={() => setIsSalesModalOpen(true)}
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </>
  );
}
```

### `src/app/contact/page.tsx`

```
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Contact | XploreByte" },
  description:
    "Talk to XploreByte about WhatsApp First CRM, No-Code Chatbot Builder, WhatsApp campaigns, and advanced analytics reporting.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Get in <span className="text-[#11A944]">Touch</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to transform your business? Let&apos;s discuss how we can help
                you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      placeholder="+91 88261 65727"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="demo">Request Demo</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#11A944] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0d8a3a] transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#11A944] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Office Address
                      </h3>
                      <p className="text-gray-600">
                        XploreByte Solutions
                        <br />
                        Tech Park, Sector 5<br />
                        Gurgaon, Haryana 122001
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0296FE] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Phone Numbers
                      </h3>
                      <p className="text-gray-600">
                        Sales: +91 88261 65727
                        <br />
                        Support: +91 88261 65727
                        <br />
                        WhatsApp: +91 88261 65727
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFB800] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email Addresses
                      </h3>
                      <p className="text-gray-600">
                        General: hello@xplorebyte.com
                        <br />
                        Sales: sales@xplorebyte.com
                        <br />
                        Support: support@xplorebyte.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#EA1752] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/918826165727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-[#25D366] text-white rounded-lg hover:bg-[#1ea854] transition-colors"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-semibold">Chat on WhatsApp</span>
                    </a>

                    <a
                      href="mailto:sales@xplorebyte.com"
                      className="flex items-center gap-3 p-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                      <span className="font-semibold">Send Email</span>
                    </a>

                    <a
                      href="tel:+918826165727"
                      className="flex items-center gap-3 p-4 bg-[#11A944] text-white rounded-lg hover:bg-[#0d8a3a] transition-colors"
                    >
                      <Phone className="w-6 h-6" />
                      <span className="font-semibold">Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
              <p className="text-lg text-gray-600">
                Visit our office or connect with us online
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Interactive map will be embedded here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    XploreByte Solutions, Tech Park, Sector 5, Gurgaon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can you respond to inquiries?
                </h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer free consultations?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer free initial consultations to understand your
                  requirements and provide tailored solutions.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What information should I include in my inquiry?
                </h3>
                <p className="text-gray-600">
                  Please include your business requirements, current challenges,
                  timeline, and any specific features you need.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
```

### `src/app/login/page.tsx`

```
import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: { absolute: "Login | XploreByte" },
  description: "Secure login to XploreByte â€” your WhatsApp First CRM workspace.",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginPage() {
  return <LoginClient />;
}
```

### `src/app/login/LoginClient.tsx`

```
"use client";

import Link from "next/link";
import { Eye, EyeOff, ArrowRight, Lock, Mail } from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LoginClient() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#11A944] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">Sign in to your XploreByte account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11A944] focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-[#11A944] focus:ring-[#11A944] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="/contact"
                  className="text-sm text-[#11A944] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#11A944] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#0d8a3a] transition-colors flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Options */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="ml-2">Google</span>
                </button>

                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="ml-2">Facebook</span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/contact"
                  className="text-[#11A944] font-semibold hover:underline"
                >
                  Contact us to get started
                </Link>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help?{" "}
              <Link href="/contact" className="text-[#11A944] hover:underline">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
```

### `src/app/whatsapp-business/page.tsx`

```
import type { Metadata } from "next";
import HeroSection from "@/components/whatsappBusiness/HeroSection";
import ProductFeatures from "@/components/whatsappBusiness/ProductFeatures";
import DemoCTA from "@/components/whatsappBusiness/DemoCTA";
import SocialProof from "@/components/whatsappBusiness/SocialProof";
import Testimonials from "@/components/whatsappBusiness/Testimonials";
import HubsSection from "@/components/whatsappBusiness/HubsSection";
import IndustriesGrid from "@/components/whatsappBusiness/IndustriesGrid";
import IndustriesCarousel from "@/components/whatsappBusiness/IndustryCarousel";

export const metadata: Metadata = {
  title: { absolute: "WhatsApp Business API | XploreByte" },
  description:
    "Connect WhatsApp Business API with XploreByte to run campaigns, automate chatbots, manage a Team Inbox, and track Advanced Campaign Analytics & Reports.",
  alternates: {
    canonical: "/whatsapp-business",
  },
  openGraph: {
    title: "WhatsApp Business API | XploreByte",
    description:
      "Connect WhatsApp Business API with XploreByte to run campaigns, automate chatbots, manage a Team Inbox, and track Advanced Campaign Analytics & Reports.",
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
      "Connect WhatsApp Business API with XploreByte to run campaigns, automate chatbots, manage a Team Inbox, and track Advanced Campaign Analytics & Reports.",
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
```

### `src/app/acceptable-use-policy/page.tsx`

```
import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "Acceptable Use Policy for XploreByte services. Learn what is prohibited and how to stay compliant on WhatsApp.",
  alternates: {
    canonical: "/acceptable-use-policy",
  },
};

export default function AcceptableUsePolicy() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Acceptable Use Policy
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="lead text-xl mb-8">
            This Acceptable Use Policy governs the usage of XploreByte's
            services. By using our services, you agree to comply with this policy.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
            1. Prohibited Activities
          </h2>
          <p>
            You may not use our services for any illegal or unauthorized purpose,
            including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Sending spam or unsolicited bulk messages (SPAM).</li>
            <li>Harassing, threatening, or abusing others.</li>
            <li>
              Violating WhatsApp's Business Policy or Commerce Policy.
            </li>
            <li>Distributing malware, viruses, or harmful code.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
            2. WhatsApp Compliance
          </h2>
          <p>
            XploreByte is a provider of WhatsApp Business API solutions. You must
            strictly adhere to Meta's terms of service. Failure to do so may result
            in the suspension of your WhatsApp Business Account.
          </p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
            3. Enforcement
          </h2>
          <p>
            We reserve the right to suspend or terminate your account if we
            determine that you have violated this policy.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: January 2026
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="text-emerald-600 font-semibold hover:underline"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
```

### `src/app/sitemap.ts`

```
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebytesolutions.com")
    .trim()
    .replace(/\/+$/, "");
  
  const routes = [
    "",
    "/about-us",
    "/features",
    "/features/ai-chatbots-flows",
    "/features/campaigns-broadcasting",
    "/features/analytics-reporting",
    "/pricing",
    "/contact",
    "/whatsapp-business",
    "/login",
    "/privacy-policy",
    "/terms-of-service",
    "/acceptable-use-policy",
    "/product",
    "/product-updates",
    "/api-documentation",
    "/support-center",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
```

### `src/app/robots.ts`

```
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xplorebytesolutions.com")
    .trim()
    .replace(/\/+$/, "");
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
```

### `src/app/guides/getting-started/apply-whatsapp-api/page.tsx`

```
"use client";

import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Clock,
  Calendar,
  User,
  PlayCircle,
} from "lucide-react";

export default function ApplyWhatsAppAPIPage() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const tableOfContents = [
    { id: "intro", label: "Introduction" },
    { id: "step1", label: "1. Experience the Future of WhatsApp Business API" },
    { id: "step2", label: "2. Fill your details and click Continue Signup" },
    { id: "step3", label: "3. Select your XploreByte Plan" },
    { id: "step4", label: "4. Get Started with Facebook" },
    { id: "step5", label: "5. Click Continue" },
    { id: "step6", label: "6. Click Get Started" },
    { id: "step7", label: "7. Select your Facebook Business Manager Account" },
    { id: "step8", label: "8. Create a new WhatsApp Business Profile" },
    { id: "step9", label: "9. Enter your phone number and verify it" },
    { id: "step10", label: "10. Application under review" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-emerald-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-emerald-600">
                Guides
              </Link>
              <span>/</span>
              <span className="text-gray-900">
                How to apply for WhatsApp Business API
              </span>
            </div>
          </nav>

          <div className="flex gap-8">
            {/* Main Content - Left Side */}
            <div className="flex-1 max-w-4xl">
              {/* Title */}
              <h1
                className="text-4xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                How to apply for WhatsApp Business API
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By XploreByte Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Updated on: 20th March 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </div>

              {/* Introduction */}
              <section
                id="intro"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 mb-4">
                  WhatsApp Business API is a powerful tool that allows
                  businesses to communicate with their customers on WhatsApp at
                  scale. With XploreByte, you can easily apply for and get
                  approved for WhatsApp Business API in just a few simple steps.
                </p>
                <p className="text-gray-700 mb-4">
                  This comprehensive guide will walk you through the entire
                  process, from creating your account to getting your WhatsApp
                  Business API approved. Let&apos;s get started!
                </p>
              </section>

              {/* Video Section */}
              <section className="mb-12">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500 to-cyan-500 aspect-video flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white font-bold text-2xl mb-2">
                        GET FREE WhatsApp API
                      </div>
                      <div className="text-white font-semibold text-lg">
                        in 10 MINS
                      </div>
                    </div>
                  </div>
                  {/* Placeholder: Replace with actual video */}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  You can watch our video on how to apply for WhatsApp Business
                  API for free.{" "}
                  <Link
                    href="/contact"
                    className="text-emerald-600 hover:underline"
                  >
                    Contact us
                  </Link>{" "}
                  to get the video link.
                </p>
              </section>

              {/* Step 1 */}
              <section
                id="step1"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  1. Experience the Future of WhatsApp Business API
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Experience the Future of WhatsApp Business API
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Free WhatsApp Business API
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Free WhatsApp Business API Setup
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          Free WhatsApp Business API Hosting
                        </span>
                      </li>
                    </ul>
                    <button className="mt-6 w-full px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                      Get Started for Free
                    </button>
                  </div>
                  <div className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-900 mb-4">
                      Get Started for Free
                    </h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <input
                        type="url"
                        placeholder="Website URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <div className="flex items-start gap-2">
                        <input type="checkbox" id="terms" className="mt-1" />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-600"
                        >
                          I agree to the Terms & Conditions and Privacy Policy.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  You can also reach us on our free plan.{" "}
                  <Link
                    href="/start-free-trial"
                    className="text-emerald-600 hover:underline"
                  >
                    Click here
                  </Link>{" "}
                  to apply for the free plan.
                </p>
              </section>

              {/* Step 2 */}
              <section
                id="step2"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  2. Fill your details and click &quot;Continue Signup&quot;
                </h2>
                <p className="text-gray-700 mb-6">
                  After providing your initial details, you&apos;ll be prompted
                  to continue with the signup process. Fill in all required
                  fields and click &quot;Continue Signup&quot;.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Continue Signup form]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  You can also reach us on our free plan.{" "}
                  <Link
                    href="/start-free-trial"
                    className="text-emerald-600 hover:underline"
                  >
                    Click here
                  </Link>{" "}
                  to apply for the free plan.
                </p>
              </section>

              {/* Step 3 */}
              <section
                id="step3"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  3. Select your XploreByte Plan
                </h2>
                <p className="text-gray-700 mb-6">
                  Choose the plan that best fits your business needs. You can
                  start with the Free Plan to get started, or select any of our
                  premium plans for additional features.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Plan selection page with Free, Basic, Pro, and
                    Enterprise plans]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  You can also reach us on our free plan.{" "}
                  <Link
                    href="/start-free-trial"
                    className="text-emerald-600 hover:underline"
                  >
                    Click here
                  </Link>{" "}
                  to apply for the free plan.
                </p>
              </section>

              {/* Step 4 */}
              <section
                id="step4"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  4. Click &quot;Get Started with Facebook&quot; to apply for
                  FREE WhatsApp Business API
                </h2>
                <p className="text-gray-700 mb-4">
                  To apply for WhatsApp Business API, you need to connect your
                  Facebook Business Manager account:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>
                    Make sure you have a Facebook Business Manager account.
                  </li>
                  <li>
                    If you don&apos;t have one, you can create one{" "}
                    <a
                      href="https://business.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:underline"
                    >
                      here
                    </a>
                    .
                  </li>
                </ul>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Connect your Facebook account dialog with
                    &quot;Continue with Facebook&quot; button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Click on &apos;Continue with Facebook&apos; to connect your
                  Facebook Business Manager account.
                </p>
              </section>

              {/* Step 5 */}
              <section
                id="step5"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  5. Click Continue
                </h2>
                <p className="text-gray-700 mb-6">
                  Review the permissions XploreByte Solutions will receive and
                  click &quot;Continue&quot; to proceed.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Connect your Facebook account permissions
                    dialog]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Click on &apos;Continue&apos; to connect your Facebook
                  Business Manager account.
                </p>
              </section>

              {/* Step 6 */}
              <section
                id="step6"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  6. Click Get Started
                </h2>
                <p className="text-gray-700 mb-6">
                  On the next screen, you will be prompted to click &quot;Get
                  Started&quot; to connect your business to XploreByte.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Get Started dialog with permissions list]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  On the next screen, you will be prompted to click &apos;Get
                  Started&apos; to connect your business to XploreByte.
                </p>
              </section>

              {/* Step 7 */}
              <section
                id="step7"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  7. Select your Facebook Business Manager Account
                </h2>
                <p className="text-gray-700 mb-6">
                  Choose the Facebook Business Manager account you want to use
                  for your WhatsApp Business API from the dropdown menu.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Select your Facebook Business Manager Account
                    dialog with dropdown and Continue button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Select your Facebook Business Manager account from the
                  dropdown and click &apos;Continue&apos;.
                </p>
              </section>

              {/* Step 8 */}
              <section
                id="step8"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  8. Create a new WhatsApp Business Profile
                </h2>
                <p className="text-gray-700 mb-6">
                  Fill in the details for your WhatsApp Business Profile. This
                  information will be displayed to your customers.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Create a new WhatsApp Business Profile form
                    with fields for Account Name, Profile Name, Time Zone,
                    Category, Business Description, and Continue button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Fill in the details for your new WhatsApp Business Profile and
                  click &apos;Continue&apos;.
                </p>
              </section>

              {/* Step 9 */}
              <section
                id="step9"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  9. Enter your phone number and verify it
                </h2>
                <p className="text-gray-700 mb-6">
                  Enter the phone number you want to use for your WhatsApp
                  Business API. Make sure this number is not already connected
                  to a WhatsApp account.
                </p>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Enter your phone number and verify it dialog
                    with phone number field, country code dropdown, and Send
                    Code button]
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Enter your phone number and click &apos;Send Code&apos; to
                  receive a verification code. Enter the code to verify your
                  number.
                </p>
              </section>

              {/* Step 10 */}
              <section
                id="step10"
                data-section
                className="mb-12 prose prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  10. Your WhatsApp Business API Application is now under review
                </h2>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Congratulations!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    You have successfully applied for the WhatsApp Business API.
                    Your application is now under review and will be processed
                    within 24-48 hours.
                  </p>
                  <ul className="space-y-2 list-disc pl-6 text-gray-700 mb-6">
                    <li>
                      You will receive an email notification once your
                      application is approved.
                    </li>
                    <li>
                      You can check the status of your application in your
                      XploreByte dashboard.
                    </li>
                    <li>
                      Once approved, you can start sending messages to your
                      customers.
                    </li>
                  </ul>
                  <button className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                    Go to Dashboard
                  </button>
                </div>
                {/* Placeholder for screenshot */}
                <div className="bg-gray-100 rounded-xl p-12 text-center mb-6">
                  <div className="text-gray-500 text-sm">
                    [Screenshot: Application submitted confirmation page]
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section id="faqs" data-section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>
                <FAQAccordion />
              </section>

              {/* Related Articles */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Related Articles
                </h2>
                <div className="space-y-4">
                  {[
                    "How to create a WhatsApp Business Account?",
                    "How to send WhatsApp API Messages?",
                    "How to apply for WhatsApp Business API free?",
                    "How to setup a WhatsApp Business API?",
                    "WhatsApp Business API Pricing",
                  ].map(article => (
                    <Link
                      key={article}
                      href="/guides"
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-emerald-600">
                        {article}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/guides"
                  className="inline-flex mt-6 px-6 py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 transition-colors"
                >
                  View All
                </Link>
              </section>

              {/* Feedback Section */}
              <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Did this article answer your question?
                </h3>
                <div className="flex items-center gap-4">
                  <button className="text-4xl hover:scale-110 transition-transform">
                    ðŸ˜Š
                  </button>
                  <button className="text-4xl hover:scale-110 transition-transform">
                    ðŸ˜
                  </button>
                  <button className="text-4xl hover:scale-110 transition-transform">
                    ðŸ˜ž
                  </button>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar - Right Side */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map(item => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                          activeSection === item.id
                            ? "bg-emerald-50 text-emerald-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question:
        "Q. How many messages can be sent per day on WhatsApp Business API?",
      answer:
        "The number of messages you can send per day depends on your account tier and quality rating. New accounts typically start with 1,000 conversations per day, which can increase to up to unlimited conversations based on your usage and message quality.",
    },
    {
      question: "Q. What if the 'Get Started' button is not working?",
      answer:
        "If the 'Get Started' button is not working, try clearing your browser cache and cookies, or use an incognito/private browsing window. Make sure you have a stable internet connection and that JavaScript is enabled in your browser.",
    },
    {
      question:
        "Q. Why should I apply for WhatsApp Business API with XploreByte?",
      answer:
        "XploreByte offers a completely free WhatsApp Business API setup with no hidden costs. We provide free hosting, dedicated support, and a user-friendly dashboard to manage your WhatsApp communications. Plus, our platform is designed to help you scale your business communications efficiently.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

### `src/components/Header.tsx`

```
"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Bot,
  BarChart3,
  Zap,
  Settings,
  ArrowRight,
  Code,
  HelpCircle,
  Megaphone,
  MessageCircle,
  FileText,
  BookOpen,
  ToggleLeft,
  Building2,
  Heart,
  Car,
  GraduationCap,
  Headphones,
  TrendingUp,
  MessageSquare,
} from "lucide-react";
import DemoModal from "./DemoModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Industries", href: "/whatsapp-business" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Close mobile menu on window resize > lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="bg-white backdrop-blur-md border-b border-gray-200 fixed top-0 w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="XploreByte Home"
          >
            {/* SVG Logo */}
            {/* <img
            src="/assets/logo_7.svg"
            alt="XploreByte Logo"
            className="h-8 w-auto"
            style={{ display: "block" }}
          /> */}
            <Image
              src="/xplorebyte_logo.svg"
              alt="XploreByte Logo"
              width={40} // or whatever size you want (required)
              height={40} // or whatever size you want (required)
              style={{ display: "block" }}
              className="h-8 w-auto"
            />
            <span className="flex items-center space-x-3 group">
              <span className="text-gray-900 text-xl font-bold font-[Poppins,Montserrat,sans-serif] tracking-tight">
                XploreByte
              </span>
              {/* <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent text-2xl font-extrabold tracking-tight font-[Sora,sans-serif]">
              XploreByte
            </span> */}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex space-x-8"
            aria-label="Primary Navigation"
          >
            {navLinks.map(({ label, href }) => (
              <div key={label} className="relative">
                {label === "Industries" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors duration-200 font-sans ${
                        solutionsDropdownOpen
                          ? "text-emerald-600"
                          : "text-gray-900 hover:text-black"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          solutionsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {/* Active indicator line */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ${
                          solutionsDropdownOpen ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>

                    {/* Industries Mega Dropdown Menu */}
                    {solutionsDropdownOpen && (
                      <div
                        className="absolute top-full mt-2 w-[1100px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50"
                        style={{ left: "80%", transform: "translateX(-50%)" }}
                      >
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                        <div className="grid grid-cols-4 gap-6">
                          {/* Left Section - Solutions Overview */}
                          <div className="col-span-1 pr-4">
                            <h2
                              className="font-bold text-slate-800 mb-3 leading-tight"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.25rem",
                                lineHeight: "1.2",
                              }}
                            >
                              Solutions That Drive Business Outcomes
                            </h2>
                            <p className="text-slate-600 mb-4 leading-normal text-sm">
                              Transform your customer communication with
                              WhatsApp Business API. Join 10,000+ businesses
                              using our platform to move from cold communication
                              to warm conversation Ã¢â‚¬â€ and that&apos;s where
                              revenue lives.
                            </p>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-sm"
                            >
                              Request a Demo
                            </button>
                          </div>

                          {/* Middle-Left Section - By Industry */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              BY INDUSTRY
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/industries/healthcare"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Heart className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Healthcare
                              </Link>
                              <Link
                                href="/industries/education"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <GraduationCap className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Education
                              </Link>
                              <Link
                                href="/industries/retail-ecommerce"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Building2 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Retail & Ecommerce
                              </Link>
                              <Link
                                href="/industries/finance"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Finance
                              </Link>
                              <Link
                                href="/industries/transportation-logistics"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Car className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Transportation and Logistics
                              </Link>
                              <Link
                                href="/industries/manufacturing"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Settings className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Manufacturing
                              </Link>
                              <Link
                                href="/industries/public-sector"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Building2 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Public Sector
                              </Link>
                            </div>
                          </div>

                          {/* Middle-Right Section - By Function */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              BY FUNCTION
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/features/ai-chatbots-flows"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Headphones className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Customer Support
                              </Link>
                              <Link
                                href="/features/sales-ecommerce-tools"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <TrendingUp className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Sales & Lead Conversion
                              </Link>
                              <Link
                                href="/features/campaigns-broadcasting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <MessageSquare className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Marketing
                              </Link>
                              <Link
                                href="/features/analytics-reporting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Analytics & Reporting
                              </Link>
                            </div>
                          </div>

                          {/* Right Section - Featured Content */}
                          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6">
                            <div className="text-center">
                              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-3 block">
                                EBOOK
                              </span>
                              <h3
                                className="font-bold text-slate-800 mb-4"
                                style={{
                                  fontFamily: "Montserrat, sans-serif",
                                  fontSize: "1.125rem",
                                  lineHeight: "1.2",
                                }}
                              >
                                Delivering a 360Ã‚Â° Customer Experience
                              </h3>
                              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-10 h-10 text-cyan-600" />
                              </div>
                              <button
                                onClick={() => setIsDemoModalOpen(true)}
                                className="w-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium"
                              >
                                Read Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : label === "Features" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setProductDropdownOpen(true)}
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors duration-200 font-sans ${
                        productDropdownOpen
                          ? "text-emerald-600"
                          : "text-gray-900 hover:text-black"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {/* Active indicator line */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ${
                          productDropdownOpen ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>

                    {/* Features Mega Dropdown Menu */}
                    {productDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1100px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                        <div className="grid grid-cols-4 gap-6">
                          {/* Left Section - Features Overview */}
                          <div className="col-span-1 pr-4">
                            <h2
                              className="font-bold text-slate-800 mb-3 leading-tight"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.25rem",
                                lineHeight: "1.2",
                              }}
                            >
                              Powerful Features for Business Growth
                            </h2>
                            <p className="text-slate-600 mb-4 leading-normal text-xs">
                              Discover our comprehensive suite of WhatsApp
                              Business API features designed to streamline your
                              communication, boost engagement, and drive revenue
                              growth.
                            </p>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-sm"
                            >
                              Request a Demo
                            </button>
                          </div>

                          {/* Middle-Left Section - CORE FEATURES */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              CORE FEATURES
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/features/ai-chatbots-flows"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Bot className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                AI Chatbots & Flows
                              </Link>
                              <Link
                                href="/features/campaigns-broadcasting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Megaphone className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Campaigns & Broadcasting
                              </Link>
                              <Link
                                href="/features/sales-ecommerce-tools"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Sales & E-commerce Tools
                              </Link>
                              <Link
                                href="/features/integrations-hub"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Settings className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Integrations Hub
                              </Link>
                              <Link
                                href="/features/analytics-reporting"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <BarChart3 className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Analytics & Reporting
                              </Link>
                            </div>
                          </div>

                          {/* Middle-Right Section - RESOURCES */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              RESOURCES
                            </h3>
                            <div className="space-y-3">
                              <Link
                                href="/api-documentation"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Code className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Developer Docs
                              </Link>
                              <Link
                                href="/support-center"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <HelpCircle className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Help Center
                              </Link>
                              <Link
                                href="/product-updates"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <Megaphone className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                Product Updates
                              </Link>
                              <Link
                                href="/user-community"
                                className="flex items-center text-slate-800 font-semibold hover:text-emerald-600 transition-colors group text-base"
                              >
                                <MessageCircle className="w-4 h-4 mr-2 text-slate-500 group-hover:text-emerald-600" />
                                User Community
                              </Link>
                            </div>
                          </div>

                          {/* Right Section - Featured Content */}
                          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">
                              EBOOK
                            </span>
                            <h3
                              className="font-bold text-slate-800 mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.125rem",
                                lineHeight: "1.2",
                              }}
                            >
                              WhatsApp Business API Guide
                            </h3>
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <FileText className="w-10 h-10 text-emerald-600" />
                            </div>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors text-sm font-medium"
                            >
                              Download Now
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : label === "Features" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setFeaturesDropdownOpen(true)}
                    onMouseLeave={() => setFeaturesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 transition-colors duration-200 font-sans ${
                        featuresDropdownOpen
                          ? "text-emerald-600"
                          : "text-gray-900 hover:text-black"
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          featuresDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      {/* Active indicator line */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-emerald-500 transition-all duration-300 ${
                          featuresDropdownOpen ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>

                    {/* Features Mega Dropdown Menu */}
                    {featuresDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1100px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                        {/* Pointing Arrow */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>

                        <div className="grid grid-cols-4 gap-6">
                          {/* Left Section - Features Overview */}
                          <div className="col-span-1 pr-4">
                            <h2
                              className="font-bold text-slate-800 mb-3 leading-tight"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "1.25rem",
                                lineHeight: "1.2",
                              }}
                            >
                              Powerful Features for Business Growth
                            </h2>
                            <p className="text-slate-600 mb-4 leading-normal text-xs">
                              Discover our comprehensive suite of WhatsApp
                              Business API features designed to streamline your
                              communication, boost engagement, and drive revenue
                              growth.
                            </p>
                            <button
                              onClick={() => setIsDemoModalOpen(true)}
                              className="border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-sm"
                            >
                              Request a Demo
                            </button>
                          </div>

                          {/* Middle-Left Section - CORE FEATURES */}
                          <div>
                            <h3
                              className="font-bold text-slate-800 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              CORE FEATURES
                            </h3>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                                  <Zap className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                                    WhatsApp Broadcasting
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Retargeting, CRM & more
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                  <Bot className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    AI WhatsApp Chatbot
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Automate anything with AI
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                  <ArrowRight className="w-5 h-5 text-purple-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                                    Click to WhatsApp Ads
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    3X Your Leads
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                                  <Settings className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    WhatsApp Chatbots
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Drag & Drop Flow Builder
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Column - BUSINESS FEATURES */}
                          <div>
                            <h3
                              className="font-bold text-gray-500 uppercase tracking-wider mb-4"
                              style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontSize: "0.875rem",
                                lineHeight: "1.2",
                              }}
                            >
                              BUSINESS FEATURES
                            </h3>
                            <div className="space-y-4">
                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                  <FileText className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                                    WhatsApp Catalog
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Sell Products on WhatsApp
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                                  <BarChart3 className="w-5 h-5 text-cyan-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                                    WhatsApp Payments
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Collect Payments via UPI & Card
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                                  <BookOpen className="w-5 h-5 text-pink-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                                    WhatsApp Forms
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Native Data Collection
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 group cursor-pointer">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                                  <ToggleLeft className="w-5 h-5 text-indigo-600" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    WhatsApp Webviews
                                  </h4>
                                  <p className="text-sm text-gray-800">
                                    Web within WhatsApp
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={href}
                    className="relative text-gray-900 hover:text-black transition-colors duration-200 font-sans group"
                  >
                    {label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 text-gray-900 hover:text-black transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Login Button */}
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold font-sans text-sm hover:border-gray-400 hover:text-gray-900 transition duration-200 mr-3"
            >
              Login
            </Link>

            {/* Book Demo Button */}
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-emerald-700 text-white font-semibold font-sans text-sm shadow-lg hover:bg-emerald-800 transition duration-200"
            >
              Book Demo
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <nav
          id="mobile-menu"
          className={`lg:hidden bg-black border-t border-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
          aria-label="Mobile Navigation"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block px-3 py-2 rounded-md font-sans text-gray-900 hover:bg-gray-100 hover:text-black transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            {/* Mobile Login */}
            <Link
              href="/login"
              className="block mt-3 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold text-center font-sans hover:border-gray-400 hover:text-gray-900 transition duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>

            {/* Mobile Book Demo */}
            <button
              onClick={() => {
                setIsDemoModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="block mt-3 px-4 py-2 rounded-lg bg-emerald-700 text-white font-semibold text-center font-sans shadow-lg hover:bg-emerald-800 transition duration-200 w-full"
            >
              Book Demo
            </button>
          </div>
        </nav>
      </header>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default Header;
```

### `src/components/Footer.tsx`

```
"use client";
import React from "react";
import Link from "next/link";

// Social Media Icons
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xplorebyte/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-blue-500",
    hover: "hover:bg-blue-500 hover:text-white",
  },
  {
    label: "Twitter/X",
    href: "https://twitter.com/xplorebyte",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "text-gray-300",
    hover: "hover:bg-gray-300 hover:text-gray-900",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xplorebytesolutions/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: "text-pink-400",
    hover:
      "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/XploreByte-Solutions/61574410757958/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "text-blue-400",
    hover: "hover:bg-blue-600 hover:text-white",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/918826165727",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
      </svg>
    ),
    color: "text-green-400",
    hover: "hover:bg-green-500 hover:text-white",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-200 relative overflow-hidden border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center space-x-3 mb-2">
              <img
                src="/xplorebyte_logo.svg"
                alt="XploreByte Logo"
                className="h-10 w-auto"
              />
              <span className="text-gray-200 text-xl font-bold font-[Poppins,Montserrat,sans-serif] tracking-tight">
                XploreByte{" "}
                <span className="font-light text-blue-400 text-lg">
                  Solutions
                </span>
              </span>
            </Link>
            <p className="max-w-md font-sans text-gray-300 text-sm leading-normal">
              XploreByte is a WhatsApp First CRM - built to help teams move
              faster with a Team Inbox + automation.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/acceptable-use-policy"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white/90 text-sm font-semibold uppercase tracking-wide mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-white text-sm">Email</p>
                  <a
                    href="mailto:support@xplorebyte.com"
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    support@xplorebyte.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-white text-sm">Phone</p>
                  <a
                    href="tel:+918826165727"
                    className="hover:text-emerald-400 transition-colors duration-300"
                  >
                    +91 88261 65727
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call To Action & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-700/50 pt-8 gap-6">
          <div className="flex items-center gap-3 mb-2 sm:mb-0">
            <span className="text-sm font-sans text-gray-400">
              Â© 2018-2025 XploreByte Solutions. All rights reserved.
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socials.map(({ label, href, icon, color, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`rounded-lg transition-all duration-300 p-3 bg-white/10 hover:bg-white/20 hover:scale-105 ${color} ${hover} backdrop-blur-sm border border-white/20 hover:border-white/30 shadow-md hover:shadow-lg`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-6 bottom-6 rounded-full p-2 bg-black/70 hover:bg-emerald-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
```

### `src/components/Hero.tsx`

```
"use client";
import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Play } from "@phosphor-icons/react";
import DemoModal from "./DemoModal";
import SalesModal from "./SalesModal";

const trustedCompanies = [
  { name: "Marketing", icon: "megaphone" },
  { name: "Sales", icon: "handshake" },
  { name: "Support", icon: "headset" },
  { name: "E-commerce", icon: "shopping-cart" },
];

const iconMap: { [key: string]: React.ReactNode } = {
  megaphone: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-emerald-400"
      viewBox="0 0 24 24"
    >
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  handshake: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-blue-400"
      viewBox="0 0 24 24"
    >
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="M7 18h1a2 2 0 0 0 2-2v-5" />
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="M7 18h1a2 2 0 0 0 2-2v-5" />
    </svg>
  ),
  headset: (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-purple-400"
      viewBox="0 0 24 24"
    >
      <path d="M3 14v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
      <path d="M17 14v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2z" />
      <path d="M9 14v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2z" />
    </svg>
  ),
  "shopping-cart": (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 h-6 w-6 text-orange-400"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] },
  },
};

const Hero: FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  return (
    <section className="relative bg-white pt-8 md:pt-12 pb-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#11A944]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#1E3A8A]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#11A944]/5 to-[#1E3A8A]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Trust Badge - Hidden until client logos are available */}
          {/* <motion.div
            className="inline-flex items-center gap-2 bg-[#11A944]/10 border border-[#11A944]/20 rounded-full px-4 py-2 mb-4"
            variants={fadeUp}
          >
            <svg
              className="w-4 h-4 text-[#11A944]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            <span className="text-sm font-semibold text-[#11A944]">
              Trusted by 10,000+ Businesses Worldwide
            </span>
          </motion.div> */}

          {/* Breadcrumbs */}
          <motion.div
            className="text-xs font-medium uppercase tracking-widest text-gray-600 mb-4"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "1.5px",
            }}
            variants={fadeUp}
          >
            WhatsApp First CRM
          </motion.div>

          {/* Main Headline - MARKETING TEAM: Update this headline as needed */}
          <motion.h1
            className="font-bold text-gray-900 mb-6 text-3xl md:text-4xl"
            style={{
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "1.2",
            }}
            variants={fadeUp}
          >
            XploreByte - WhatsApp First CRM <br />
            <span style={{ color: "#25D366" }}>
              for Sales, Support &amp; Follow-ups
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-gray-700 mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "55ch",
            }}
            variants={fadeUp}
          >
            A faster Team Inbox + automations that turn WhatsApp chats into
            customers - built performance-first for daily workflows.
          </motion.p>

          <motion.p
            className="text-gray-700 mb-8"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              maxWidth: "55ch",
            }}
            variants={fadeUp}
          >
            XploreByte keeps your team aligned with shared visibility, fast
            assignment, and automation that scales without slowing you down.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-6"
            variants={fadeUp}
          >
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-md font-semibold border-2 border-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800 hover:border-emerald-800 transition duration-200 group"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
              }}
              aria-label="Book Demo"
            >
              <ArrowRight
                size={20}
                weight="bold"
                className="mr-2 group-hover:translate-x-1 transition-transform"
              />
              Book Demo
            </button>
            <button
              onClick={() => setIsSalesModalOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-md font-semibold border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 transition duration-200 group"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "1rem",
                fontWeight: "600",
              }}
              aria-label="Talk to expert"
            >
              <Play
                size={20}
                weight="bold"
                className="mr-2 group-hover:scale-110 transition-transform"
              />
              Talk to expert
            </button>
          </motion.div>

          {/* Feature Cards removed as requested */}
        </motion.div>

        {/* Right Content - Enhanced Visual */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 64 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {/* AI-Powered Badge */}
          <motion.div
            className="absolute -top-4 -right-4 z-20 inline-flex items-center gap-2 bg-[#11A944] text-white rounded-full px-4 py-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            </svg>
            <span className="text-sm font-semibold">AI-Powered</span>
          </motion.div>

          {/* Main Image Container */}
          <div className="relative max-w-[300px] mx-auto">
            <Image
              src="/New_Design/mobile-wrapper.avif"
              alt="WhatsApp Business Automation Dashboard"
              width={300}
              height={400}
              className="w-full h-auto max-w-[300px] mx-auto"
              priority
            />

            {/* Floating Elements */}

            <motion.div
              className="absolute top-8 right-8 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute -z-10 inset-0">
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-[#11A944]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-[#1E3A8A]/20 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-yellow-400/20 rounded-full blur-lg"></div>
          </div>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Sales Modal */}
      <SalesModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
```

### `src/components/CTASection.tsx`

```
"use client";

import React, { useState } from "react";
import Link from "next/link";
import DemoModal from "./DemoModal";

const CTASection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section
      className="text-black bg-cover bg-center pt-24 pb-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1673526759337-c4d4c4c8bc72?w=3840&q=80')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl sm:text-5xl mb-6 font-manrope">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-sans text-emerald-900">
            Switch to XploreByte - a WhatsApp First CRM with a faster Team Inbox
            + automations that turn WhatsApp chats into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-free-trial"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl font-sans bg-[#25D366] text-white hover:bg-[#1ea854]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Start Free Trial
            </Link>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all duration-200 font-sans shadow-lg hover:shadow-xl bg-emerald-700 text-white hover:bg-emerald-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-5 h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default CTASection;
```

### `src/components/GoogleAnalytics.tsx`

```
import Script from "next/script";
import { GA_ID } from "@/lib/ga";

export default function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { send_page_view: false, debug_mode: ${
        process.env.NODE_ENV !== "production"
      } });
      `}</Script>
    </>
  );
}
```

### `src/components/AnalyticsRouteTracker.tsx`

```
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/ga";

export function AnalyticsRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const search = searchParams?.toString();
    const url = pathname + (search ? `?${search}` : "");

    if (lastUrlRef.current === url) return;
    lastUrlRef.current = url;

    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
```

### `src/lib/ga.ts`

```
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const GA_TRACKING_ID = GA_ID;

function ensureGtag() {
  if (typeof window === "undefined") return null;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== "function") {
    w.gtag = (...args: any[]) => {
      w.dataLayer.push(args);
    };
  }
  return w.gtag as (...args: any[]) => void;
}

// Log the pageview with their URL
export const pageview = (url: string) => {
  if (!GA_ID) return;
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag("config", GA_ID, {
    page_path: url,
  });
};

// Log specific events happening.
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (!GA_ID) return;
  const gtag = ensureGtag();
  if (!gtag) return;

  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

### `public/site.webmanifest`

```
{
  "name": "XploreByte",
  "short_name": "XploreByte",
  "description": "XploreByte - WhatsApp First CRM with Team Inbox, No-Code Chatbot Builder, WhatsApp Campaigning, and Advanced Analytics reports.",
  "start_url": "/",
  "scope": "/",
  "icons": [
    {
      "src": "/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```
