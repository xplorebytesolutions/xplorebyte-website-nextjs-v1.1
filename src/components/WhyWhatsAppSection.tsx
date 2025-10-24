"use client";

import { useState } from "react";
import DemoModal from "./DemoModal";

export default function WhyWhatsAppSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: The "Problem & Promise" Hero */}
        <div className="text-center mb-20">
          <h2
            className="font-bold text-black mb-6"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "2.5rem",
              lineHeight: "1.2",
            }}
          >
            Why Your Business Can&apos;t Afford to Ignore WhatsApp
          </h2>
          <p className="text-xl text-[#333] mb-12 max-w-4xl mx-auto">
            While your competitors are still using outdated email and phone
            systems, smart businesses are already winning customers with
            WhatsApp&apos;s 98% open rate and instant engagement.
          </p>

          {/* Visual Element - Strip Banner */}
          <div className="max-w-4xl mx-auto relative">
            <div className="rounded-2xl overflow-hidden w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gray-50 border border-gray-200">
              <img
                src="/landing-page/why_api.webp"
                alt="Why WhatsApp API for Business - Growth and Communication Solutions"
                className="w-full h-full object-cover"
              />
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
