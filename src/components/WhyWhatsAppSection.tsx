"use client";

import { useState } from "react";
import DemoModal from "./DemoModal";

export default function WhyWhatsAppSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-8 bg-white w-full">
      {/* Section 1: The "Problem & Promise" Hero - Full Width Design */}
      <div className="relative w-full">
        {/* Full Width Background Pattern */}
        <div className="absolute inset-0 w-full bg-gradient-to-br from-[#25D366]/5 via-[#11A944]/5 to-[#075E54]/5"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#11A944]/10 rounded-full blur-3xl"></div>

        {/* Main Content Container - Full Width with Centered Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h2
              className="font-bold text-black mb-6 text-center"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "2.5rem",
                lineHeight: "1.2",
              }}
            >
              Why WhatsApp is Essential for Your Business
            </h2>

            {/* Description */}
            <p className="text-lg text-[#333] mb-12 max-w-4xl mx-auto text-center leading-relaxed">
              While your competitors are still using outdated email and phone
              systems, smart businesses are already winning customers with
              WhatsApp&apos;s 98% open rate and instant engagement.
            </p>

            {/* Visual Element - Full Width Enhanced Strip Banner */}
            <div className="w-full max-w-4xl mx-auto relative">
              <div className="rounded-2xl overflow-hidden w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-r from-[#25D366]/10 to-[#11A944]/10 border-2 border-[#25D366]/20 shadow-xl">
                <img
                  src="/landing-page/why_api.webp"
                  alt="Why WhatsApp API for Business - Growth and Communication Solutions"
                  className="w-full h-full object-cover"
                />
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
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
}
