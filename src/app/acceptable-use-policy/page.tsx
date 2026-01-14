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
