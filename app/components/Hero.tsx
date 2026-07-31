"use client";

import Image from "next/image";
import WordAnimation from "./WordAnimation";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { translations, t } = useLanguage();
  const hero = translations.hero || {};
  const stats = hero.stats || [];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/homepageimage.png"
          alt={hero.imageAlt || "Mahakal and Mangalnath Temple, Ujjain"}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-amber-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
      </div>

      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <a
          href="https://wa.me/916260552014"
          target="_blank"
          className="bg-green-500 text-white px-3 py-3 shadow-xl hover:bg-green-600"
          style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
        >
          <span className="text-xs font-bold">{t("hero.btn_whatsapp")}</span>
        </a>

        <a
          href="tel:+916260552014"
          className="bg-amber-600 text-white px-3 py-3 shadow-xl hover:bg-amber-700"
          style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
        >
          <span className="text-xs font-bold">{t("hero.btn_call")}</span>
        </a>

        <a
          href="#contact"
          className="bg-orange-600 text-white px-3 py-3 shadow-xl hover:bg-orange-700"
          style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
        >
          <span className="text-xs font-bold rotate-180">{t("hero.btn_book")}</span>
        </a>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 pt-36">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span>🕉️</span>
            <span>{t("hero.badge")}</span>
          </motion.div>

          <motion.div
            className="mb-6"
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-white font-semibold text-lg md:text-xl">
              {t("hero.panditName")}
            </h2>
            <p className="text-amber-300 text-base md:text-lg font-medium mt-1">
              {t("hero.panditTitle")}
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <WordAnimation text={t("hero.heading")} />
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg mb-8 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mb-10"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <a
              href="#contact"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:brightness-110 transition-all"
            >
              {t("hero.btn_book")}
            </a>

            <a
              href="tel:+916260552014"
              className="bg-white/10 border border-white/30 text-white px-5 py-3.5 rounded-xl hover:bg-white/20 transition-all"
            >
              {t("hero.btn_call")}
            </a>

            <a
              href="https://wa.me/916260552014"
              target="_blank"
              className="bg-green-500 text-white px-5 py-3.5 rounded-xl hover:bg-green-600 transition-all"
            >
              {t("hero.btn_whatsapp")}
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div>
                  <p className="text-amber-400 font-bold text-lg">{s.num}</p>
                  <p className="text-white/60 text-xs">{s.label}</p>
                </div>
                {i < stats.length - 1 && <div className="w-px h-8 bg-white/20" />}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <p className="text-white/50 text-xs uppercase">{t("hero.scroll")}</p>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
