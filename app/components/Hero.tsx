"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/temple-gate.jpg"
          alt="Mangalnath Temple, Ujjain"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-amber-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
      </div>

      {/* Floating side CTA */}
      <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        <a
          href="https://wa.me/918085039147"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-3 py-3 shadow-xl hover:bg-green-600 transition-all"
          style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
          title="WhatsApp"
        >
          <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.858L.057 23.213a.5.5 0 00.61.637l5.542-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.074-1.387l-.363-.215-3.763.987 1.003-3.665-.236-.376A9.952 9.952 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          <span className="text-xs font-bold">WhatsApp</span>
        </a>
        <a
          href="tel:+916260552014"
          className="flex items-center gap-2 bg-amber-600 text-white px-3 py-3 shadow-xl hover:bg-amber-700 transition-all"
          style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
          title="Call"
        >
          <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.18 21 3 13.82 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
          </svg>
          <span className="text-xs font-bold">Call Now</span>
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 bg-orange-600 text-white px-3 py-3 shadow-xl hover:bg-orange-700 transition-all"
          style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
          title="Book Puja"
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
            <span>Jay Mahakal Bhagwan</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Book Authentic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Mahakal & Mangalnath
            </span>{" "}
            Temple Poojas Online
          </h1>

          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Performed by experienced Vedic Pandits in Ujjain. Genuine rituals,
            transparent pricing, and divine blessings for you and your family —
            from anywhere in the world.
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
              📞 Call Pandit
            </a>
            <a
              href="https://wa.me/918085039147"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-3.5 rounded-xl hover:bg-green-600 transition-all text-base"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {[
              { num: "3000+", label: "Yrs Old Temple" },
              { num: "Mangal Grah", label: "Birthplace" },
              { num: "5000+", label: "Happy Devotees" },
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
