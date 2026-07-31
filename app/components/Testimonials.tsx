"use client";

import { useLanguage } from "../contexts/LanguageContext";

const avatarColors = [
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-violet-500",
  "from-cyan-500 to-sky-500",
];

export default function Testimonials() {
  const { translations, t } = useLanguage();
  const reviews = translations.testimonials?.items || [];
  const meta = translations.testimonials || {};

  return (
    <section id="testimonials" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">{t("testimonials.badge")}</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            {t("testimonials.heading")}
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            {t("testimonials.subheading")}
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm">
            <span className="text-amber-500 text-lg">★★★★★</span>
            <span className="text-stone-700 font-semibold">{meta.ratingSummary || "4.9/5"}</span>
            <span className="text-stone-400">{meta.ratingBase || "based on 5000+ pujas"}</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="temple-card p-6 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-amber-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                    avatarColors[i % avatarColors.length]
                  } flex items-center justify-center text-white font-bold text-sm`}
                >
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <p className="font-semibold text-stone-800 text-sm">{r.name}</p>
                  <p className="text-stone-400 text-xs">📍 {r.city}</p>
                </div>

                <div className="ml-auto">
                  <span className="text-xs bg-green-50 text-green-600 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                    {t("testimonials.verified")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition shadow-md"
          >
            {t("testimonials.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
