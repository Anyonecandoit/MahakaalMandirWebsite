const poojas = [
  {
    icon: "🔱",
    name: "Mangal Dosh Puja",
    hindi: "मंगल दोष पूजा",
    duration: "2–3 Hours",
    price: "₹2,100",
    desc: "Special puja to remove Mangal Dosha with specific Vedic puja and anushthaan.",
  },
  {
    icon: "🐍",
    name: "Kaal Sarp Dosh Puja",
    hindi: "कालसर्प दोष पूजा",
    duration: "3–4 Hours",
    price: "₹3,100",
    desc: "Powerful Vedic puja to remove Kaal Sarp Dosha and its afflictions.",
  },
  {
    icon: "🕉️",
    name: "Rudrabhishek",
    hindi: "रुद्राभिषेक",
    duration: "2 Hours",
    price: "₹1,500",
    desc: "Abhishek of Shiva with sacred ingredients for blessings and protection.",
  },
  {
    icon: "🪬",
    name: "Mahamrityunjay Jaap",
    hindi: "महामृत्युंजय जाप",
    duration: "3 Hours",
    price: "₹2,500",
    desc: "Powerful chanting for health, longevity and protection from untimely death.",
  },
  {
    icon: "⭐",
    name: "Navgrah Shanti Puja",
    hindi: "नवग्रह शांति पूजा",
    duration: "3–4 Hours",
    price: "₹3,500",
    desc: "Vedic puja to pacify all nine planets and bring harmony and peace.",
  },
  {
    icon: "👴",
    name: "Pitru Dosh Shanti",
    hindi: "पितृ दोष शांति",
    duration: "3 Hours",
    price: "₹2,500",
    desc: "Puja to relieve Pitru Dosha and offer peace and moksha to ancestors.",
  },
  {
    icon: "💍",
    name: "Ark Vivah",
    hindi: "आर्क विवाह",
    duration: "2–3 Hours",
    price: "₹2,100",
    desc: "Sacred ritual for Manglik persons before marriage for auspiciousness.",
  },
  {
    icon: "🫧",
    name: "Kumbh Vivah",
    hindi: "कुम्भ विवाह",
    duration: "2–3 Hours",
    price: "₹2,100",
    desc: "Vedic ritual for Manglik persons to reduce the effect of Mangal Dosha.",
  },
  {
    icon: "🙏",
    name: "Narayan Bali",
    hindi: "नारायणबली",
    duration: "4–5 Hours",
    price: "₹5,100",
    desc: "Important ritual for peace and moksha of ancestors.",
  },
  {
    icon: "🐍",
    name: "Nagbali",
    hindi: "नागबली",
    duration: "4–5 Hours",
    price: "₹5,100",
    desc: "Puja to seek forgiveness from Nag Dev and remove related doshas.",
  },
  {
    icon: "🏠",
    name: "Vastu Puja",
    hindi: "वास्तु पूजा",
    duration: "2 Hours",
    price: "₹1,500",
    desc: "Puja for harmony and positive energy in your home or office.",
  },
  {
    icon: "📿",
    name: "Saptashati Path",
    hindi: "सप्तशती पाठ",
    duration: "3–4 Hours",
    price: "₹3,100",
    desc: "Sacred reading of Durga Saptashati for Devi's protection and blessings.",
  },
];

export default function Services() {
  return (
    <section id="poojas" className="py-20 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge">Our Services</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            Pooja & <span className="text-amber-600">Anushthan</span>
          </h2>
          <p className="text-stone-500 mt-3 max-w-2xl mx-auto">
            Perform diverse and scripturally authentic Vedic poojas at Mangalnath Temple.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {poojas.map((p) => (
            <div
              key={p.name}
              className="temple-card p-5 flex flex-col"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-stone-800 text-base leading-tight">{p.name}</h3>
              <p className="text-amber-600 text-xs font-medium mt-0.5 mb-2">{p.hindi}</p>
              <p className="text-stone-500 text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-amber-100">
                <div>
                  <p className="text-xs text-stone-400">⏱ {p.duration}</p>
                  <p className="text-amber-700 font-bold text-lg">{p.price}</p>
                </div>
                <a
                  href={`https://wa.me/918085039147?text=I want to book ${p.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/918085039147?text=I want to know about all puja services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-amber-500 text-amber-600 font-bold px-6 py-3 rounded-xl hover:bg-amber-500 hover:text-white transition-all"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
