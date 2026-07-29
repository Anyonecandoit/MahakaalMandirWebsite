"use client";
import { useState } from "react";

const faqs = [
  { q: "How can I book a pooja?", a: "You can book a pooja by calling us at +91 62605-52014 or messaging us on WhatsApp at +91 80850-39147. You can also fill the contact form on this website." },
  { q: "Do I need to be physically present for the pooja?", a: "No, you don't need to be physically present. Our Pandits perform the pooja on your behalf at the temple. You can join live on video call if you wish." },
  { q: "What information do I need to provide?", a: "You will need to provide your full name, father's name, gotra, date of birth, city of residence, and specific intentions for the pooja." },
  { q: "Will I get photos and videos?", a: "Yes, we provide photos and videos of the entire pooja. In Premium packages, you also get HD video recording and live video call access." },
  { q: "Is the prasad delivered to my home?", a: "Yes, prasad is delivered to your home address in Premium and Standard packages. Basic package includes prasad distribution at the temple." },
  { q: "What is included in the samagri?", a: "All authentic samagri required for the specific pooja is included in our packages. We use only genuine materials as per Vedic traditions." },
  { q: "Can I book for someone else?", a: "Yes, you can book a pooja on behalf of a family member. Just provide their details (name, gotra, etc.) during booking." },
  { q: "What is the advance payment required?", a: "We require 50% advance payment at the time of booking. The remaining amount is to be paid before the pooja begins." },
  { q: "How do I make payment?", a: "We accept UPI, bank transfer, and cash. Our WhatsApp number is also our UPI ID for easy payment." },
  { q: "What is your refund policy?", a: "If you cancel at least 48 hours before the scheduled pooja, you will receive a full refund. Cancellations within 48 hours attract a 25% cancellation fee." },
  { q: "What poojas can be done for Mangal Dosha?", a: "Mangal Dosh Puja, Ark Vivah, and Kumbh Vivah are specifically recommended for Mangal Dosha. Our Pandit will guide you to the most suitable one." },
  { q: "Can I get a temple certificate?", a: "Yes, temple certificates are provided in Standard and Premium packages as proof of the pooja performed." },
  { q: "Do you provide services outside Ujjain?", a: "Our poojas are performed at the Mangalnath and Mahakal temples in Ujjain. Devotees from anywhere in India or abroad can book online." },
  { q: "How long does a typical pooja take?", a: "Duration varies by pooja type — simple poojas take 1–2 hours, while elaborate anushthaans can take 4–6 hours." },
  { q: "Are the Pandits certified?", a: "Yes, our Pandits are certified and experienced Vedic scholars. Pt. Abhishek Vyas is an authorized Teerth Purohit of Mangalnath Temple, Ujjain." },
  { q: "What is Kaal Sarp Dosh Puja?", a: "Kaal Sarp Dosh occurs when all seven planets are between Rahu and Ketu. This puja at Mangalnath Temple is highly effective for removing this dosha." },
  { q: "Can I request a specific date for the pooja?", a: "Yes, we try our best to accommodate your preferred date. Some poojas are best performed on specific auspicious dates (muhurta) — our Pandit will advise." },
  { q: "What is Narayan Bali?", a: "Narayan Bali is an important ritual for the peace and moksha of ancestors. It is performed to relieve Pitru Dosha and bring peace to the departed souls." },
  { q: "Is Mangalnath Temple open all year?", a: "Yes, Mangalnath Temple is open all days from 5:00 AM to 10:00 PM throughout the year, including holidays." },
  { q: "How do I know the pooja was performed for me?", a: "We provide full documentation including photos, videos, and a temple certificate. You can also join the pooja live on a video call." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">FAQ</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            Frequently Asked <span className="text-amber-600">Questions</span>
          </h2>
          <p className="text-stone-500 mt-3">
            Everything you need to know about our pooja services.
          </p>
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
                <span className={`font-semibold text-sm md:text-base ${open === i ? "text-amber-700" : "text-stone-700"}`}>
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
          <p className="text-stone-700 font-semibold mb-3">Still have questions?</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="tel:+916260552014"
              className="flex items-center gap-2 bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-700 transition"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/918085039147"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-green-600 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
