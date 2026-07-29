"use client";

const poojas = [
    {
        icon: "🔱",
        name: "Mangal Dosh Puja",
        hindi: "मंगल दोष पूजा",
        duration: "2–3 Hours",
        price: "₹1,100 / ₹2,100 / ₹5,100 / ₹11,000",
        desc: "Special puja to remove Mangal Dosha with specific Vedic puja and anushthaan.",
    },
    {
        icon: "🐍",
        name: "Kaal Sarp Dosh Puja",
        hindi: "कालसर्प दोष पूजा",
        duration: "3–4 Hours",
        price: "₹2,100 / ₹3,500",
        desc: "Powerful Vedic puja to remove Kaal Sarp Dosha and its afflictions.",
    },
    {
        icon: "🕉️",
        name: "Rudrabhishek",
        hindi: "रुद्राभिषेक",
        duration: "2 Hours",
        price: "₹3,100 / ₹5,100",
        desc: "Abhishek of Shiva with sacred ingredients for blessings and protection.",
    },
    {
        icon: "🪬",
        name: "Mahamrityunjay Jaap",
        hindi: "महामृत्युंजय जाप",
        duration: "6 Hours",
        price: "₹35,000",
        desc: "Powerful chanting for health, longevity and protection from untimely death..",
    },
    {
        icon: "⭐",
        name: "Navgrah Shanti Puja",
        hindi: "नवग्रह शांति पूजा",
        duration: "2–3 Hours",
        price: "₹3,500",
        desc: "Vedic puja to pacify all nine planets and bring harmony and peace.",
    },
    {
        icon: "👴",
        name: "Pitru Dosh Shanti",
        hindi: "पितृ दोष शांति",
        duration: "3 Hours",
        price: "₹3,100",
        desc: "Puja to relieve Pitru Dosha and offer peace and moksha to ancestors.",
    },
    {
        icon: "💍",
        name: "Ark Vivah",
        hindi: "आर्क विवाह",
        duration: "2–3 Hours",
        price: "₹2,500",
        desc: "Sacred ritual for Manglik persons before marriage for auspiousness.",
    },
    {
        icon: "🫧",
        name: "Kumbh Vivah",
        hindi: "कुम्भ विवाह",
        duration: "2–3 Hours",
        price: "₹2,500",
        desc: "Vedic ritual for Manglik persons to reduce the effect of Mangal Dosha.",
    },
    {
        icon: "🙏",
        name: "Narayan Bali",
        hindi: "नारायणबली",
        duration: "4–5 Hours",
        price: "₹11,000",
        desc: "Important ritual for peace and moksha of ancestors.",
    },
    {
        icon: "🐍",
        name: "Nagbali",
        hindi: "नागबली",
        duration: "4–5 Hours",
        price: "₹11,000",
        desc: "Puja to seek forgiveness from Nag Dev and remove related doshas.",
    },
    {
        icon: "🏠",
        name: "Vastu Puja",
        hindi: "वास्तु पूजा",
        duration: "4 Hours",
        price: "₹7,500",
        desc: "Puja for harmony and positive energy in your home or office.",
    },
    {
        icon: "📿",
        name: "Saptashati Path",
        hindi: "सप्तशती पाठ",
        duration: "2–3 Hours",
        price: "₹3,100",
        desc: "Sacred reading of Durga Saptashati for Devi's protection and blessings.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-orange-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-orange-900">
                        Our Pooja Services
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Traditional Vedic Poojas performed by experienced priests at
                        Mahakaal Mangalnath Temple, Ujjain.
                    </p>
                </div>

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

                            <p className="text-orange-600 font-medium mt-1">
                                {pooja.hindi}
                            </p>

                            <div className="mt-4 space-y-2 text-gray-700">
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

                            <p className="mt-4 text-gray-600">
                                {pooja.desc}
                            </p>

                            <button className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition">
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}