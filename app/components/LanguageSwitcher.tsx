"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 border border-amber-300 rounded-full p-0.5 shadow-sm shrink-0">
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`text-xs font-semibold px-2 py-1 rounded-full transition ${
          language === "en"
            ? "bg-amber-500 text-white shadow"
            : "text-amber-700 hover:bg-amber-100"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("hi")}
        aria-label="Switch to Hindi"
        className={`text-xs font-semibold px-2 py-1 rounded-full transition ${
          language === "hi"
            ? "bg-amber-500 text-white shadow"
            : "text-amber-700 hover:bg-amber-100"
        }`}
      >
        हिं
      </button>
    </div>
  );
}
