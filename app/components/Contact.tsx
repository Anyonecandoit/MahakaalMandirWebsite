"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { translations, t } = useLanguage();
  const contact = translations.contact || {};
  const pujaOptions = contact.pujaOptions || [];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    puja: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg =
      `${t("contact.bookingTitle")}\n\n` +
      `${t("contact.label_name")}: ${form.name}\n` +
      `${t("contact.label_phone")}: ${form.phone}\n` +
      `${t("contact.label_email")}: ${form.email || "N/A"}\n` +
      `${t("contact.label_puja")}: ${form.puja}\n` +
      `${t("contact.label_date")}: ${form.date || "N/A"}\n` +
      `${t("contact.label_msg")}: ${form.message || "N/A"}`;

    window.open(
      `https://wa.me/916260552014?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const inputCls =
    "w-full border border-amber-200 rounded-xl px-4 py-3 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50/30 placeholder-stone-400";

  return (
    <section id="contact" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">{t("contact.badge")}</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            {t("contact.heading")}
          </h2>
          <p className="text-stone-500 mt-3 max-w-2xl mx-auto">
            {t("contact.subheading")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-amber-100 shadow-md p-5">
              <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span> {t("contact.info_heading")}
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-amber-600 text-lg">📍</span>
                  <div>
                    <p className="font-semibold text-stone-700">{t("contact.info_location")}</p>
                    <p className="text-stone-500 leading-relaxed">{t("contact.info_address")}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-amber-600 text-lg">📞</span>
                  <div>
                    <p className="font-semibold text-stone-700">{t("contact.info_phone")}</p>
                    <a href="tel:+916260552014" className="text-amber-600 font-medium hover:underline">
                      +91 6260552014
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-600 text-lg">💬</span>
                  <div>
                    <p className="font-semibold text-stone-700">{t("contact.info_whatsapp")}</p>
                    <a
                      href="https://wa.me/916260552014"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium hover:underline"
                    >
                      +91 6260552014
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-amber-600 text-lg">✉️</span>
                  <div>
                    <p className="font-semibold text-stone-700">{t("contact.info_email")}</p>
                    <a
                      href="mailto:abhishekvyas069@gmail.com"
                      className="text-amber-600 font-medium hover:underline text-xs"
                    >
                      abhishekvyas069@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-amber-600 text-lg">⏰</span>
                  <div>
                    <p className="font-semibold text-stone-700">{t("contact.info_hours")}</p>
                    <p className="text-stone-500">{t("contact.info_hours_val")}</p>
                    <p className="text-green-600 text-xs font-medium">{t("contact.info_open")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/916260552014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition"
              >
                💬 {t("contact.btn_whatsapp")}
              </a>

              <a
                href="tel:+916260552014"
                className="flex items-center justify-center gap-2 bg-amber-600 text-white font-bold py-3.5 rounded-xl hover:bg-amber-700 transition"
              >
                📞 {t("contact.btn_call")}
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-100 min-h-64">
            <iframe
              src="https://maps.google.com/maps?q=Mangalnath+Temple+Ujjain&z=15&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full min-h-64"
              style={{ border: 0 }}
              loading="lazy"
              title={t("contact.mapTitle")}
            />
          </div>

          <div className="bg-white rounded-2xl border border-amber-100 shadow-md p-6">
            <h3 className="font-bold text-stone-800 text-lg mb-2 flex items-center gap-2">
              🏛️ {t("contact.form_heading")}
            </h3>
            <p className="text-xs text-green-600 mb-4 font-medium">
              {t("contact.form_note")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder={t("contact.label_name")}
                required
                value={form.name}
                onChange={handleChange}
                className={inputCls}
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("contact.label_phone")}
                required
                value={form.phone}
                onChange={handleChange}
                className={inputCls}
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.label_email")}
                value={form.email}
                onChange={handleChange}
                className={inputCls}
              />

              <select name="puja" required value={form.puja} onChange={handleChange} className={inputCls}>
                <option value="">{t("contact.placeholder_puja")}</option>
                {pujaOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={inputCls}
              />

              <textarea
                name="message"
                placeholder={t("contact.label_msg")}
                rows={3}
                value={form.message}
                onChange={handleChange}
                className={inputCls + " resize-none"}
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-md shadow-amber-900/20"
              >
                {t("contact.btn_submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
