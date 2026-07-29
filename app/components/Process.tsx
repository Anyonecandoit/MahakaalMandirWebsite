const steps = [
  { num: "01", title: "Choose Puja", desc: "Select the pooja you want performed from our complete list.", icon: "🔍" },
  { num: "02", title: "Submit Details", desc: "Share your name, gotra, birth details and requirements.", icon: "📝" },
  { num: "03", title: "Confirm Booking", desc: "Make payment and receive your booking confirmation instantly.", icon: "✅" },
  { num: "04", title: "Pandit Assigned", desc: "An experienced Pandit is assigned specifically for your pooja.", icon: "🧑‍🦱" },
  { num: "05", title: "Perform Puja", desc: "Pooja is performed with full Vedic rituals at the temple.", icon: "🕉️" },
  { num: "06", title: "Receive Media", desc: "Get photos, videos, prasad and certificate delivered to you.", icon: "📦" },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">Booking Process</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            How It <span className="text-amber-600">Works</span>
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Simple 6-step process to book your pooja from anywhere in the world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="relative temple-card p-6"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-amber-200 z-10" />
              )}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white font-black text-lg flex items-center justify-center shadow-md shadow-amber-900/20">
                  {s.num}
                </div>
                <div>
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-1">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:opacity-90 transition-all"
          >
            Start Booking Now →
          </a>
        </div>
      </div>
    </section>
  );
}
