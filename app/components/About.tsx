import Image from "next/image";

const features = [
  { icon: "🕉️", title: "Certified Pandits", desc: "Experienced Vedic Pandits with deep knowledge of authentic rituals" },
  { icon: "📿", title: "Authentic Rituals", desc: "All poojas performed with traditional Vedic methods and genuine samagri" },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. Clear pricing for all poojas and packages" },
  { icon: "🙏", title: "Personal Guidance", desc: "One-on-one guidance from our Pandits throughout the pooja process" },
  { icon: "📱", title: "Live Updates", desc: "Receive photos and videos of the pooja performed on your behalf" },
  { icon: "🏛️", title: "Temple Authorized", desc: "Authorized Teerth Purohit of Mangalnath & Mahakal Temple, Ujjain" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Badge */}
        <div className="text-center mb-12">
          <span className="section-badge">About Us</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            Mangalnath Temple, <span className="text-amber-600">Ujjain</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Temple image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20 border-4 border-amber-100">
              <Image
                src="/shivling.jpg"
                alt="Mangalnath Shivling, Ujjain"
                width={600}
                height={450}
                className="object-cover w-full h-80 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-sm bg-black/40 backdrop-blur px-3 py-1.5 rounded-lg inline-block">
                  🕉️ Mangalnath Shivling — Ujjain, M.P.
                </p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-amber-300/40 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Mangalnath Temple is one of the most sacred temples in Ujjain, believed to be the
              <strong className="text-amber-700"> birthplace of Mangal Grah (Mars)</strong>.
              Situated on the banks of the holy Shipra river, this ancient temple attracts
              thousands of devotees seeking relief from Mangal Dosha and other planetary afflictions.
            </p>

            {/* Pandit card */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl flex-shrink-0">
                🙏
              </div>
              <div>
                <p className="font-bold text-stone-800 text-lg">Pt. Abhishek Vyas</p>
                <p className="text-amber-700 text-sm font-medium">
                  Teerth Purohit of Shri Kshetra Avitikpuri (Bhaneja)
                </p>
                <div className="flex gap-3 mt-2">
                  <a
                    href="tel:+916260552014"
                    className="text-xs bg-amber-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-amber-700 transition"
                  >
                    📞 62605-52014
                  </a>
                  <a
                    href="https://wa.me/918085039147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-semibold hover:bg-green-600 transition"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-stone-800">Why Choose Us?</h3>
          <div className="temple-divider mt-2" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="temple-card p-5 flex gap-4">
              <div className="text-3xl flex-shrink-0">{f.icon}</div>
              <div>
                <h4 className="font-bold text-stone-800 mb-1">{f.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
