"use client";

const poojas = [
    {
        icon: "🔱",
        name: "Mangal Dosh Puja",
        duration: "2–3 Hours",
        price: "₹1,100 / ₹2,100 / ₹5,100 / ₹11,000",
        desc: "Vedic ritual performed at Mangalnath Temple to reduce the negative effects of Mangal Dosha and bring stability in marriage and life.",
    },
    {
        icon: "🐍",
        name: "Kaal Sarp Dosh Puja",
        duration: "3–4 Hours",
        price: "₹2,100 / ₹3,500",
        desc: "Powerful puja to neutralize Kaal Sarp Dosha, remove obstacles, and bring peace, success, and protection.",
    },
    {
        icon: "🕉️",
        name: "Rudrabhishek",
        duration: "2 Hours",
        price: "₹3,100 / ₹5,100",
        desc: "Sacred Abhishek of Lord Shiva with holy ingredients for divine blessings, protection, and spiritual growth.",
    },
    {
        icon: "🪬",
        name: "Mahamrityunjay Jaap",
        duration: "6 Hours",
        price: "₹35,000",
        desc: "Highly powerful chanting dedicated to Lord Shiva for health, longevity, and protection from negative energies.",
    },
    {
        icon: "⭐",
        name: "Navgrah Shanti Puja",
        duration: "2–3 Hours",
        price: "₹3,500",
        desc: "Puja performed to balance all nine planets and remove planetary doshas for a peaceful and successful life.",
    },
    {
        icon: "👴",
        name: "Pitru Dosh Shanti",
        duration: "3 Hours",
        price: "₹3,100",
        desc: "Ritual performed to satisfy ancestors and remove Pitru Dosha, bringing harmony and blessings in the family.",
    },
    {
        icon: "💍",
        name: "Ark Vivah",
        duration: "2–3 Hours",
        price: "₹2,500",
        desc: "Special ritual for Manglik individuals to reduce Mangal Dosha effects before marriage.",
    },
    {
        icon: "🫧",
        name: "Kumbh Vivah",
        duration: "2–3 Hours",
        price: "₹2,500",
        desc: "Traditional Vedic ritual performed to nullify Manglik Dosha and ensure a happy married life.",
    },
    {
        icon: "🙏",
        name: "Narayan Bali",
        duration: "4–5 Hours",
        price: "₹11,000",
        desc: "Important ritual for the salvation of departed souls and removal of ancestral doshas.",
    },
    {
        icon: "🐍",
        name: "Nag Bali",
        duration: "4–5 Hours",
        price: "₹11,000",
        desc: "Sacred ritual performed to remove sins related to harming serpents and to eliminate Nag Dosha.",
    },
    {
        icon: "🏠",
        name: "Vastu Puja",
        duration: "4 Hours",
        price: "₹7,500",
        desc: "Puja performed to remove Vastu defects and bring positive energy, prosperity, and harmony in home or office.",
    },
    {
        icon: "📿",
        name: "Durga Saptashati Path",
        duration: "2–3 Hours",
        price: "₹3,100",
        desc: "Recitation of Durga Saptashati for divine protection, शक्ति, and blessings of Maa Durga.",
    },
];

export default function Services() {
    return (
        <section id="poojas" className="py-20 bg-orange-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-orange-900">
                        Our Puja Services in Ujjain
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Authentic Vedic pujas performed at Mangalnath & Mahakal Temple by experienced pandits.
                        All rituals are conducted individually with proper विधि and complete samagri.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {poojas.map((pooja) => (
                        <div
                            key={pooja.name}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
                        >
                            <div className="text-5xl mb-4">{pooja.icon}</div>

                            <h3 className="text-xl font-bold text-orange-900">
                                {pooja.name}
                            </h3>

                            <div className="mt-4 space-y-2 text-gray-700 text-sm">
                                <p>
                                    <strong>Duration:</strong> {pooja.duration}
                                </p>

                                <p>
                                    <strong>Price:</strong>{" "}
                                    <span className="text-green-700 font-semibold">
                    {pooja.price}
                  </span>
                                </p>
                            </div>

                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                {pooja.desc}
                            </p>

                            {/* CTA */}
                            <div className="mt-6 flex gap-3">
                                <a
                                    href="tel:+916260552014"
                                    className="w-1/2 text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-sm font-semibold transition"
                                >
                                    📞 Call
                                </a>

                                <a
                                    href="https://wa.me/916260552014"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-1/2 text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-semibold transition"
                                >
                                    💬 WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}