"use client";
import { useState } from "react";

const pujaOptions = [
  "Mangal Dosh Puja",
  "Kaal Sarp Dosh Puja",
  "Rudrabhishek",
  "Mahamrityunjay Jaap",
  "Navgrah Shanti Puja",
  "Pitru Dosh Shanti",
  "Ark Vivah",
  "Kumbh Vivah",
  "Narayan Bali",
  "Nag Bali",
  "Vastu Puja",
  "Durga Saptashati Path",
  "Other / Custom",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    puja: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = `🙏 *Puja Booking Request*\n\n` +
        `👤 Name: ${form.name}\n` +
        `📞 Phone: ${form.phone}\n` +
        `📧 Email: ${form.email || "N/A"}\n` +
        `🕉️ Puja: ${form.puja}\n` +
        `📅 Preferred Date: ${form.date || "N/A"}\n` +
        `📝 Message: ${form.message || "N/A"}\n\n` +
        `Please confirm availability and details.`;

    window.open(`https://wa.me/916260552014?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputCls =
      "w-full border border-amber-200 rounded-xl px-4 py-3 text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-amber-50/30 placeholder-stone-400";

  return (
      <section id="contact" className="py-20 bg-amber-50/40">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-badge">Contact & Booking</span>
            <div className="temple-divider mt-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
              Book Your Puja in <span className="text-amber-600">Ujjain</span>
            </h2>
            <p className="text-stone-500 mt-3 max-w-2xl mx-auto">
              Get in touch with us to book authentic Vedic pujas at Mangalnath & Mahakal Temple.
              All rituals are performed individually with proper विधि and guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left — Contact Info */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-amber-100 shadow-md p-5">
                <h3 className="font-bold text-stone-800 text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Contact Information
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <span className="text-amber-600 text-lg">📍</span>
                    <div>
                      <p className="font-semibold text-stone-700">Location</p>
                      <p className="text-stone-500 leading-relaxed">
                        Ankpat Marg, Hari Nagar<br />
                        Gayatri Shakti Peeth,<br />
                        Ujjain (M.P.) — 456006
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-amber-600 text-lg">📞</span>
                    <div>
                      <p className="font-semibold text-stone-700">Phone</p>
                      <a href="tel:+916260552014" className="text-amber-600 font-medium hover:underline">
                        +91 6260552014
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-green-600 text-lg">💬</span>
                    <div>
                      <p className="font-semibold text-stone-700">WhatsApp</p>
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
                      <p className="font-semibold text-stone-700">Email</p>
                      <a
                          href="mailto:info@mangalnathmandirujain.com"
                          className="text-amber-600 font-medium hover:underline text-xs"
                      >
                        info@mangalnathmandirujain.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <span className="text-amber-600 text-lg">⏰</span>
                    <div>
                      <p className="font-semibold text-stone-700">Temple Hours</p>
                      <p className="text-stone-500">5:00 AM – 10:00 PM</p>
                      <p className="text-green-600 text-xs font-medium">Open All Days</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="flex flex-col gap-3">
                <a
                    href="https://wa.me/916260552014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 rounded-xl hover:bg-green-600 transition"
                >
                  💬 Chat on WhatsApp
                </a>

                <a
                    href="tel:+916260552014"
                    className="flex items-center justify-center gap-2 bg-amber-600 text-white font-bold py-3.5 rounded-xl hover:bg-amber-700 transition"
                >
                  📞 Call Now
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-100 min-h-64">
              <iframe
                  src="https://maps.google.com/maps?q=Mangalnath+Temple+Ujjain&z=15&output=embed"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-64"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Mangalnath Temple Location"
              />
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-amber-100 shadow-md p-6">
              <h3 className="font-bold text-stone-800 text-lg mb-2 flex items-center gap-2">
                🏛️ Book Your Puja
              </h3>
              <p className="text-xs text-green-600 mb-4 font-medium">
                ✔ 100% Private Puja • ✔ Direct Pandit Booking • ✔ No Agents
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text" name="name" placeholder="Your Name *" required value={form.name} onChange={handleChange} className={inputCls} />
                <input type="tel" name="phone" placeholder="Mobile Number *" required value={form.phone} onChange={handleChange} className={inputCls} />
                <input type="email" name="email" placeholder="Email (Optional)" value={form.email} onChange={handleChange} className={inputCls} />

                <select name="puja" required value={form.puja} onChange={handleChange} className={inputCls}>
                  <option value="">Select Puja *</option>
                  {pujaOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                  ))}
                </select>

                <input type="date" name="date" value={form.date} onChange={handleChange} className={inputCls} />

                <textarea name="message" placeholder="Additional details (optional)" rows={3} value={form.message} onChange={handleChange} className={inputCls + " resize-none"} />

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition shadow-md shadow-amber-900/20"
                >
                  📅 Send Booking via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}