"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-amber-300 rounded-full p-1 shadow-sm">
      <button
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={`text-sm font-semibold px-3 py-1.5 rounded-full transition ${
          language === "en"
            ? "bg-amber-500 text-white shadow"
            : "text-amber-700 hover:bg-amber-100"
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage("hi")}
        aria-label="Switch to Hindi"
        className={`text-sm font-semibold px-3 py-1.5 rounded-full transition ${
          language === "hi"
            ? "bg-amber-500 text-white shadow"
            : "text-amber-700 hover:bg-amber-100"
        }`}
      >
        हिन्दी
      </button>
    </div>
  );
}
