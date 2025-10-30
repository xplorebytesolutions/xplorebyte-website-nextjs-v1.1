"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Shield,
  Eye,
  Lock,
  Database,
  UserCheck,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A0E23] via-[#202748] to-[#11A944]/40 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Privacy <span className="text-[#11A944]">Policy</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                We're committed to protecting your data with enterprise-grade
                security. Learn how we safeguard your information while
                delivering powerful WhatsApp Business API solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-[#11A944]" />
                <p className="text-gray-700 text-base">
                  <strong>Last Updated:</strong> October 27, 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  At XploreByte Solutions, we understand that trust is the
                  foundation of every successful business relationship. As a
                  leading provider of WhatsApp Business API solutions, we are
                  committed to maintaining the highest standards of data
                  protection and privacy for our clients and their customers.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  This Privacy Policy outlines how we collect, process, and
                  protect your information when you use our comprehensive
                  WhatsApp Business API platform, including our website,
                  dashboard, and all related services (collectively, the
                  "Service"). We believe in transparency and want you to
                  understand exactly how your data is handled.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  This policy is an electronic record in terms of the
                  Information Technology Act, 2000, and its rules. By using our
                  Service, you agree to the collection and use of information in
                  accordance with this policy.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  If you have any questions or concerns about this policy,
                  please contact our dedicated support team at{" "}
                  <a
                    href="mailto:support@xplorebyte.com"
                    className="text-[#11A944] hover:underline font-medium"
                  >
                    support@xplorebyte.com
                  </a>
                  . We're here to help and ensure your complete peace of mind.
                </p>
              </div>

              {/* Section 1: Information We Collect */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Database className="w-8 h-8 text-[#11A944] mr-3" />
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  We collect several types of information for various purposes
                  to provide and improve our Service to you.
                </p>

                <div className="space-y-8">
                  {/* A. Information You Provide */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      A. Information You Provide to Us
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-base">
                      When you register for an account, make a purchase, or
                      communicate with us, we may collect personal information,
                      including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base">
                      <li>
                        <strong>Personal Identifiers:</strong> Name, email
                        address, phone number.
                      </li>
                      <li>
                        <strong>Account Credentials:</strong> Username and
                        password.
                      </li>
                      <li>
                        <strong>Commercial Information:</strong> Mailing address
                        and billing address.
                      </li>
                      <li>
                        <strong>Professional Information:</strong> Job title and
                        company name.
                      </li>
                    </ul>
                  </div>

                  {/* B. Payment Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      B. Payment Information
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      When you make a purchase, you provide payment information
                      directly to our third-party payment processors, such as
                      Stripe, Razorpay, and PayPal. We do not collect or store
                      your full debit/credit card numbers or other sensitive
                      payment data. We only receive a confirmation of your
                      payment.
                    </p>
                  </div>

                  {/* C. Information We Collect Automatically */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      C. Information We May Collect Automatically
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4 text-base">
                      As you navigate and interact with our Service, we may
                      automatically collect certain information about your
                      device and usage, including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base">
                      <li>
                        <strong>Log Data:</strong> Your Internet Protocol (IP)
                        address, browser type, operating system, and pages
                        visited.
                      </li>
                      <li>
                        <strong>Device Data:</strong> Information about the
                        device you are using, such as its hardware model or
                        device ID.
                      </li>
                      <li>
                        <strong>Usage Data:</strong> Information about how you
                        use our Service, such as features you use and the time
                        spent on pages.
                      </li>
                    </ul>
                  </div>

                  {/* D. Information from Third Parties */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      D. Information from Third Parties
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 text-base">
                      <li>
                        <strong>Social Media Logins:</strong> We may provide an
                        option to register or log in using your existing social
                        media accounts (e.g., Google, Facebook). If you choose
                        this, we will receive certain profile information from
                        the social media provider in accordance with their
                        privacy policy.
                      </li>
                      <li>
                        <strong>Marketing Partners:</strong> We may also receive
                        information about you from our marketing partners and
                        public databases to enhance our records and offer
                        relevant services.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Eye className="w-8 h-8 text-[#11A944] mr-3" />
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  We process your information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 text-base">
                  <li>
                    <strong>To Provide and Manage Our Service:</strong> To
                    create and maintain your account, process your transactions,
                    and deliver the services you request.
                  </li>
                  <li>
                    <strong>To Process Payments:</strong> To facilitate,
                    process, and record your payments.
                  </li>
                  <li>
                    <strong>To Communicate with You:</strong> To respond to your
                    comments, questions, and support requests, and to send you
                    administrative messages.
                  </li>
                  <li>
                    <strong>For Marketing and Promotions:</strong> To send you
                    promotional emails about new products, special offers, or
                    other information we think you may find interesting.
                  </li>
                  <li>
                    <strong>To Improve Our Service:</strong> To use data for
                    internal analytics, understand how our users interact with
                    the Service, and improve its functionality.
                  </li>
                  <li>
                    <strong>For Security and Fraud Prevention:</strong> To
                    monitor and prevent fraudulent activity and to protect the
                    security of our Service.
                  </li>
                  <li>
                    <strong>To Comply with Legal Obligations:</strong> To comply
                    with applicable laws, regulations, or legal processes.
                  </li>
                </ul>
              </div>

              {/* Section 3: How We Share Your Information */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <UserCheck className="w-8 h-8 text-[#11A944] mr-3" />
                  3. How We Share Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  We do not sell your personal information. We may share your
                  information in the following specific situations:
                </p>
                <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4 text-base">
                  <li>
                    <strong>With Service Providers:</strong> We may share
                    information with third-party vendors who perform services
                    for us, such as cloud hosting, data analytics, email
                    delivery, and customer support. These providers are
                    obligated to protect your data and use it only for the
                    services we request.
                  </li>
                  <li>
                    <strong>With Payment Processors:</strong> To process your
                    payments, we share necessary information with our payment
                    processors (Stripe, Razorpay, PayPal).
                  </li>
                  <li>
                    <strong>With Social Media Providers:</strong> If you choose
                    to log in using a social media account, we may share
                    information with that provider as part of the login process.
                  </li>
                  <li>
                    <strong>For Business Transfers:</strong> We may share or
                    transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business.
                  </li>
                  <li>
                    <strong>For Legal Requirements:</strong> We may disclose
                    your information if we believe it is necessary to respond to
                    a subpoena, court order, or other legal request; to protect
                    our rights or property; or to prevent illegal activity.
                  </li>
                </ul>
              </div>

              {/* Section 4: Cookies and Tracking Technologies */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Shield className="w-8 h-8 text-[#11A944] mr-3" />
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  We use cookies and similar tracking technologies to access or
                  store information. Cookies are small data files stored on your
                  device. We use them to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4 text-base">
                  <li>Maintain your session and keep you logged in.</li>
                  <li>Analyze how our Service is used (analytics).</li>
                  <li>Deliver relevant advertising.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-base">
                  Most web browsers are set to accept cookies by default. You
                  can usually modify your browser settings to remove or reject
                  cookies, but this may affect the availability and
                  functionality of our Service.
                </p>
              </div>

              {/* Section 5: Data Storage, Security, and Retention */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Lock className="w-8 h-8 text-[#11A944] mr-3" />
                  5. Data Storage, Security, and Retention
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Security
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      We use industry-standard technical and organizational
                      measures, including encryption and access controls, to
                      protect your personal information. However, please be
                      aware that no method of transmission over the Internet or
                      electronic storage is 100% secure.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Data Location
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      Your information is stored on servers managed by our
                      third-party cloud hosting providers. The location of these
                      servers may vary depending on the provider.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Retention
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      We will only keep your personal information for as long as
                      it is necessary for the purposes set out in this privacy
                      policy (e.g., as long as you have an account with us) or
                      as required by law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6: Your Privacy Rights */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <UserCheck className="w-8 h-8 text-[#11A944] mr-3" />
                  6. Your Privacy Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-base">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    <strong>Access and Update:</strong> You can review and
                    update most of your account information by logging into your
                    account settings.
                  </li>
                  <li>
                    <strong>Data Deletion:</strong> You may request to delete
                    your account and associated personal data by contacting us
                    at{" "}
                    <a
                      href="mailto:support@xplorebyte.com"
                      className="text-[#11A944] hover:underline"
                    >
                      support@xplorebyte.com
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Opt-Out of Marketing:</strong> You can unsubscribe
                    from our marketing and promotional emails at any time by
                    clicking the "unsubscribe" link in the footer of any email
                    you receive from us.
                  </li>
                </ul>
              </div>

              {/* Section 7: Children's Privacy */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <AlertTriangle className="w-8 h-8 text-[#11A944] mr-3" />
                  7. Children's Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  Our Service is not directed to individuals under the age of
                  18, and we do not knowingly collect personal information from
                  children under 18. If we become aware that we have collected
                  such information, we will take steps to delete it.
                </p>
              </div>

              {/* Section 8: Changes to This Privacy Policy */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <AlertTriangle className="w-8 h-8 text-[#11A944] mr-3" />
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new policy on this
                  page and updating the "Last updated" date at the top.
                </p>
              </div>

              {/* Section 9: Contact Us */}
              <div className="mb-12">
                <h2
                  className="font-semibold text-gray-900 mb-6 flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "1.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  <Mail className="w-8 h-8 text-[#11A944] mr-3" />
                  9. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    XploreByte Solutions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#11A944]" />
                      <a
                        href="mailto:support@xplorebyte.com"
                        className="text-[#11A944] hover:underline"
                      >
                        support@xplorebyte.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
