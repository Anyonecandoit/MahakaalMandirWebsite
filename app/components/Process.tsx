"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Process() {
  const { translations, t } = useLanguage();
  const process = translations.process || {};
  const steps = process.steps || [];

  return (
    <section id="process" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">{t("process.badge")}</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            {t("process.heading")}
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            {t("process.subheading")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative temple-card p-6">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-amber-200 z-10" />
              )}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white font-black text-lg flex items-center justify-center shadow-md shadow-amber-900/20">
                  {s.num}
                </div>
                <div>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-1">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
          >
            {t("process.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
