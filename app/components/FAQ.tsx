"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function FAQ() {
  const { translations, t } = useLanguage();
  const faqs = translations.faq?.items || [];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">{t("faq.badge")}</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            {t("faq.heading")}
          </h2>
          <p className="text-stone-500 mt-3">{t("faq.subheading")}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                open === i
                  ? "border-amber-400 shadow-md shadow-amber-900/10"
                  : "border-amber-100 hover:border-amber-200"
              }`}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 px-5 py-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`font-semibold text-sm md:text-base ${
                    open === i ? "text-amber-700" : "text-stone-700"
                  }`}
                >
                  {f.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    open === i
                      ? "bg-amber-500 text-white rotate-45"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-stone-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <p className="text-stone-700 font-semibold mb-3">{t("faq.stillQuestions")}</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="tel:+916260552014"
              className="flex items-center gap-2 bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-700 transition"
            >
              📞 {t("faq.call")}
            </a>
            <a
              href="https://wa.me/918085039147"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-green-600 transition"
            >
              💬 {t("faq.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
