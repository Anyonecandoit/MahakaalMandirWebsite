import Image from "next/image";

const features = [
  { icon: "🕉️", title: "Vedic Rituals", desc: "All pujas are performed strictly according to authentic Vedic vidhi and traditions." },
  { icon: "🙏", title: "Experienced Acharya", desc: "Guided by Pt. Abhishek Vyas with deep knowledge of astrology and rituals." },
  { icon: "📿", title: "Complete Puja Samagri", desc: "We arrange all required materials for a smooth and hassle-free puja." },
  { icon: "📱", title: "Photo & Video Updates", desc: "Receive live updates, photos, and videos directly from the temple." },
  { icon: "🔒", title: "100% Private Puja", desc: "Every puja is performed individually, not in groups." },
  { icon: "🌍", title: "Online Booking", desc: "Book your puja easily from anywhere in India or abroad." },
];

export default function About() {
  return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-12">
            <span className="section-badge">About Us</span>
            <div className="temple-divider mt-3" />

            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
              Official Puja Services at <span className="text-amber-600">Mangalnath Temple, Ujjain</span>
            </h2>

            <p className="text-stone-500 mt-3 max-w-2xl mx-auto">
              Trusted by thousands of devotees for authentic Vedic pujas performed at one of the most sacred temples in India.
            </p>
          </div>

          {/* Main Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            {/* Image */}
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
                    🕉️ Mangalnath Shivling — Ujjain, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Mangalnath Temple in Ujjain is considered the sacred birthplace of
                <strong className="text-amber-700"> Mangal Grah (Planet Mars)</strong>.
                According to Hindu beliefs, performing puja at this temple helps reduce the negative effects
                of planetary doshas and brings peace, success, and stability in life.
              </p>

              <p className="text-stone-600 text-lg leading-relaxed mb-6">
                Devotees from across India visit this holy place to perform powerful rituals like
                Kaal Sarp Dosh Puja, Mangal Dosh Shanti, Pitru Dosh Nivaran, and other Vedic anushthans
                under the guidance of experienced pandits.
              </p>

              {/* Pandit Card */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 flex gap-4 items-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl">
                  🙏
                </div>

                <div>
                  <p className="font-bold text-stone-800 text-lg">Acharya Pt. Abhishek Vyas</p>

                  <p className="text-amber-700 text-sm font-medium">
                    Teerth Purohit, Mangalnath Temple (Ujjain)
                  </p>

                  <p className="text-stone-500 text-xs mt-1">
                    15+ years of experience in Kaal Sarp Dosh Puja, Mangal Dosh Shanti,
                    Narayan Bali, Mahamrityunjay Jaap, Rudrabhishek, and Navgrah Shanti.
                  </p>

                  <div className="flex gap-3 mt-2">
                    <a
                        href="tel:+916260552014"
                        className="text-xs bg-amber-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-amber-700 transition"
                    >
                      📞 Call
                    </a>

                    <a
                        href="https://wa.me/916260552014"
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

          {/* Features */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-stone-800">
              Why Devotees Choose Our Services
            </h3>
            <div className="temple-divider mt-2" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {features.map((f) => (
                <div key={f.title} className="temple-card p-5 flex gap-4">
                  <div className="text-3xl">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">{f.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
            ))}
          </div>

          {/* Final CTA 🔥 */}
          <div className="text-center">
            <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition shadow-md"
            >
              📅 Book Your Puja Now
            </a>
          </div>

        </div>
      </section>
  );
}