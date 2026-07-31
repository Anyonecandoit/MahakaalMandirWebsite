"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Services() {
  const { translations, t } = useLanguage();
  const poojas = translations.poojas?.items || [];

  return (
    <section id="poojas" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">{t("poojas.badge")}</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-4xl font-bold text-orange-900">
            {t("poojas.heading")}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            {t("poojas.subheading")}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {poojas.map((pooja, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:shadow-2xl"
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            >
              <motion.div
                className="text-5xl mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {pooja.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-orange-900">{pooja.name}</h3>

              <div className="mt-4 space-y-2 text-gray-700 text-sm">
                <p>
                  <strong>{t("poojas.durationLabel")}</strong> {pooja.duration}
                </p>
                <p>
                  <strong>{t("poojas.priceLabel")}</strong>{" "}
                  <span className="text-green-700 font-semibold">{pooja.price}</span>
                </p>
              </div>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{pooja.desc}</p>

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:+916260552014"
                  className="w-1/2 text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  {t("poojas.call")}
                </a>
                <a
                  href="https://wa.me/916260552014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-semibold transition"
                >
                  {t("poojas.whatsapp")}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
