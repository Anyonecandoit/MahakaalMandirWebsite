"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Packages() {
  const { translations, t } = useLanguage();
  const packages = translations.packages?.items || [];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">{t("packages.badge")}</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            {t("packages.heading")}
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            {t("packages.subheading")}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }}
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition ${
                pkg.popular
                  ? "border-2 border-amber-500 shadow-2xl scale-105"
                  : "border border-amber-100 shadow-md"
              }`}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              {pkg.popular && (
                <motion.div
                  className="bg-amber-500 text-white text-xs text-center py-1 font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ⭐ {t("packages.popular")}
                </motion.div>
              )}

              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-stone-800">{pkg.name}</h3>
                <p className="text-sm text-stone-500 mt-1 mb-4">{pkg.desc}</p>
                <p className="text-3xl font-bold text-amber-600 mb-4">{pkg.price}</p>

                <ul className="space-y-2 text-sm">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="text-stone-700">✅ {f}</li>
                  ))}
                  {pkg.missing?.map((f, i) => (
                    <li key={`m-${i}`} className="text-gray-300">❌ {f}</li>
                  ))}
                </ul>
              </div>

              <div className="p-5">
                <a
                  href={`https://wa.me/918085039147?text=${encodeURIComponent(
                    `${t("packages.bookPrefix")} ${pkg.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-2 rounded-lg hover:opacity-90 transition shadow-md"
                >
                  📲 {t("packages.btn")}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
