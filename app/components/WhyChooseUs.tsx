"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function WhyChooseUs() {
  const { translations, t } = useLanguage();
  const whyus = translations.whyus || {};
  const stats = whyus.items || [];
  const trustPoints = whyus.trustPoints || [];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            {t("whyus.badge")}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("whyus.heading")}
          </h2>

          <p className="text-white/60 mt-3 max-w-xl mx-auto">
            {t("whyus.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-10">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="text-center bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="text-3xl mb-3">{s.icon || "🙏"}</div>
              <p className="text-3xl font-bold text-amber-400">{s.num}</p>
              <p className="text-white/60 text-xs mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {trustPoints.map((point, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white/80 text-sm"
            >
              ✔ {point}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
