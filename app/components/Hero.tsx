"use client";
import Image from "next/image";

export default function Hero() {
  return (
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/homepageimage.png"
              alt="Mahakal and Mangalnath Temple, Ujjain"
              fill
              className="object-cover object-center"
              priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-amber-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
        </div>

        {/* Floating side CTA */}
        <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
          <a
              href="https://wa.me/916260552014"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-3 py-3 shadow-xl hover:bg-green-600 transition-all"
              style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
          >
            <span className="text-xs font-bold">WhatsApp</span>
          </a>

          <a
              href="tel:+916260552014"
              className="flex items-center gap-2 bg-amber-600 text-white px-3 py-3 shadow-xl hover:bg-amber-700 transition-all"
              style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
          >
            <span className="text-xs font-bold">Call Now</span>
          </a>

          <a
              href="#contact"
              className="flex items-center gap-2 bg-orange-600 text-white px-3 py-3 shadow-xl hover:bg-orange-700 transition-all"
              style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
          >
            <span className="text-xs font-bold rotate-180">Book Puja</span>
          </a>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 pt-36">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span>🕉️</span>
              <span>Sacred Rituals at Mahakal & Mangalnath</span>
            </div>

            {/* ✅ UPDATED HEADING */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Authentic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Vedic Pujas
            </span>{" "}
              in Ujjain
            </h1>

            {/* ✅ UPDATED DESCRIPTION */}
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Book authentic Vedic pujas at Mangalnath and Mahakal Temple in Ujjain.
              We perform Kaal Sarp Dosh Puja, Mangal Dosh Shanti, Pitru Dosh Puja,
              Navgrah Shanti, Rudrabhishek, and many other sacred rituals with proper
              विधि and complete samagri for peace, prosperity, and spiritual growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                  href="#contact"
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-900/30 hover:opacity-90 transition-all text-base"
              >
                📅 Book Puja Now
              </a>

              <a
                  href="tel:+916260552014"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white font-semibold px-5 py-3.5 rounded-xl hover:bg-white/20 transition-all text-base"
              >
                📞 Call Now
              </a>

              <a
                  href="https://wa.me/916260552014"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-3.5 rounded-xl hover:bg-green-600 transition-all text-base"
              >
                💬 WhatsApp Booking
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6">
              {[
                { num: "Ancient Temple", label: "Mangalnath, Ujjain" },
                { num: "Mangal Grah", label: "Birthplace Belief" },
                { num: "100% Private", label: "Single Puja Only" },
              ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <div>
                      <p className="text-amber-400 font-bold text-lg leading-tight">{s.num}</p>
                      <p className="text-white/60 text-xs">{s.label}</p>
                    </div>
                    <div className="w-px h-8 bg-white/20 last:hidden" />
                  </div>
              ))}
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
          <p className="text-white/50 text-xs font-medium tracking-widest uppercase">Scroll</p>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
          </div>
        </div>

      </section>
  );
}