"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function Projects() {
  const { translations, t } = useLanguage();
  const gallery = translations.gallery || {};
  const tabsMeta = gallery.tabs || ["All", "Temple", "Devotees", "Puja"];
  const images = gallery.images || [];

  const tabKeys = ["all", "temple", "devotees", "puja"];

  const [active, setActive] = useState("all");
  const filtered =
    active === "all" ? images : images.filter((img) => img.tab === active);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="section-badge">{t("gallery.badge")}</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            {t("gallery.heading")}
          </h2>
          <p className="text-stone-500 mt-3">{t("gallery.subheading")}</p>
        </div>

        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {tabKeys.map((key, idx) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                active === key
                  ? "bg-amber-500 text-white border-amber-500 shadow-md"
                  : "border-amber-200 text-stone-600 hover:border-amber-400 hover:text-amber-600"
              }`}
            >
              {tabsMeta[idx] || key}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, idx) => (
            <div
              key={idx}
              className={`break-inside-avoid rounded-xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl hover:border-amber-300 transition-all group cursor-pointer ${
                img.size === "tall" ? "aspect-[3/4]" : "aspect-square"
              } relative`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://wa.me/918085039147?text=I want to see more photos of puja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-amber-400 text-amber-600 font-semibold px-6 py-2.5 rounded-xl hover:bg-amber-500 hover:text-white transition-all"
          >
            {t("gallery.btn_more")}
          </a>
        </div>
      </div>
    </section>
  );
}
