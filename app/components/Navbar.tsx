"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#poojas", key: "poojas" },
  { href: "#packages", key: "packages" },
  { href: "#gallery", key: "gallery" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#faq", key: "faq" },
  { href: "#contact", key: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { translations, t } = useLanguage();
  const nav = translations.nav || {};
  const site = translations.site || {};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-amber-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 border-2 border-amber-400 shadow-md flex items-center justify-center text-2xl flex-shrink-0">
            🕉️
          </div>
          <div className="leading-tight">
            <p
              className={`font-bold text-base leading-tight ${
                scrolled ? "text-amber-800" : "text-white"
              }`}
            >
              {site.name || "Mahakal Pooja Services"}
            </p>
            <p
              className={`text-xs font-medium ${
                scrolled ? "text-amber-600" : "text-amber-200"
              }`}
            >
              🕉️ {site.subtitle || "Authentic Poojas • Ujjain"}
            </p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                scrolled ? "text-stone-700" : "text-white/90"
              }`}
            >
              {nav[item.key] || item.key}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />

          <a
            href="tel:+916260552014"
            className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg border transition-all ${
              scrolled
                ? "border-amber-300 text-amber-700 hover:bg-amber-50"
                : "border-white/40 text-white hover:bg-white/10"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            {nav.call || "Call"}
          </a>
          <a
            href="https://wa.me/918085039147"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.213a.5.5 0 00.61.637l5.542-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.074-1.387l-.363-.215-3.763.987 1.003-3.665-.236-.376A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            {nav.whatsapp || "WhatsApp"}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-500 text-white hover:opacity-90 transition-all shadow-md"
          >
            {nav.bookNow || "Book Puja"}
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-lg ${
            scrolled ? "text-amber-800" : "text-white"
          }`}
          aria-label={nav.menu || "Menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-amber-100 shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-stone-700 font-medium py-2.5 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {nav[item.key] || item.key}
              </a>
            ))}
            <div className="pt-3 border-t border-amber-100 mt-2">
              <LanguageSwitcher />
            </div>
            <div className="flex gap-2 pt-3 mt-2">
              <a
                href="tel:+916260552014"
                className="flex-1 text-center bg-amber-50 border border-amber-200 text-amber-700 font-semibold py-2.5 rounded-lg text-sm"
              >
                {nav.call || "📞 Call"}
              </a>
              <a
                href="https://wa.me/918085039147"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-500 text-white font-semibold py-2.5 rounded-lg text-sm"
              >
                {nav.whatsapp || "💬 WhatsApp"}
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold py-2.5 rounded-lg text-sm"
              >
                {nav.bookNow || "Book Puja"}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
