"use client";

import { FC } from "react";
import { ShieldCheck, Star, Bolt, Award } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    text: "Enterprise-Grade Security & Reliability",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "#11A944",
  },
  {
    text: "Trusted by Leading Indian & Global Businesses",
    icon: <Star className="w-5 h-5" />,
    color: "#0296FE",
  },
  {
    text: "Lightning-Fast Delivery & Support",
    icon: <Bolt className="w-5 h-5" />,
    color: "#FFB800",
  },
  {
    text: "Compliant, Scalable, Future-Ready SaaS",
    icon: <Award className="w-5 h-5" />,
    color: "#EA1752",
  },
];

const badges = [
  { label: "ISO Secure", color: "#11A944" },
  { label: "GDPR Compliant", color: "#0296FE" },
  { label: "Growing Community", color: "#FFB800" },
  { label: "Award-Winning", color: "#EA1752" },
];

const WhyXploreByte: FC = () => {
  return (
    <section className="w-full flex justify-center py-20 px-6 bg-gradient-to-br from-[#0d111b] via-[#102A43] to-[#101426] relative overflow-hidden">
      {/* Subtle Glow or Particle effect */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <div className="bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-full blur-3xl w-[400px] h-[400px] absolute top-[-120px] left-[-120px] animate-pulse" />
        <div className="bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl w-[250px] h-[250px] absolute bottom-[-80px] right-[-60px] animate-pulse" />
      </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-28 items-center relative z-10">
        {/* Left: Reasons */}
        <div className="flex-1 space-y-8">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">
            Why{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              XploreByte
            </span>
            ?
          </h3>
          <ul className="space-y-4 text-white/90 text-lg font-medium">
            {reasons.map(({ text, icon, color }) => (
              <motion.li
                key={text}
                className="flex items-center gap-4 group px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:shadow-emerald-500/20 hover:scale-[1.03] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                tabIndex={0}
              >
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-lg mr-2"
                  style={{ background: `${color}22`, color }}
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Vertical Divider for Desktop */}
        <div
          className="hidden md:block absolute left-1/2 top-16 bottom-16 w-[2.5px] bg-gradient-to-b from-[#11A944]/90 via-[#0296FE]/80 to-[#FFB800]/90 -translate-x-1/2 rounded-full"
          aria-hidden="true"
        ></div>

        {/* Right: Trust Badges */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {badges.map(({ label, color }) => (
            <motion.div
              key={label}
              className="rounded-2xl p-7 text-center font-bold border-2 bg-white/10 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-md"
              style={{
                borderColor: `${color}bb`,
                color,
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 8px 32px 0 rgba(16,200,100,0.16)",
              }}
              tabIndex={0}
              role="region"
              aria-label={label}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyXploreByte;
