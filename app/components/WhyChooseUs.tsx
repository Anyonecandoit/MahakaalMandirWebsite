const stats = [
  { num: "5000+", label: "Successful Poojas", icon: "🙏" },
  { num: "15+", label: "Years Experience", icon: "📅" },
  { num: "50+", label: "Expert Pandits", icon: "👨‍🦱" },
  { num: "100%", label: "Authentic Rituals", icon: "🕉️" },
  { num: "24/7", label: "WhatsApp Support", icon: "📱" },
  { num: "98%", label: "Satisfied Devotees", icon: "⭐" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 border border-amber-400/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trusted by Thousands of <span className="text-amber-400">Devotees</span>
          </h2>
          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            We bring the divine blessings of Ujjain's sacred temples to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <p className="text-3xl font-bold text-amber-400">{s.num}</p>
              <p className="text-white/60 text-xs mt-1 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
