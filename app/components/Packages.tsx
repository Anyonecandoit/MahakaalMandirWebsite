const packages = [
  {
    name: "Basic",
    price: "₹1,100",
    desc: "Essential pooja with experienced Pandit",
    popular: false,
    features: [
      "Experienced Pandit",
      "Basic Samagri Included",
      "Prasad Distribution",
      "Pooja Confirmation",
      "WhatsApp Support",
    ],
    missing: ["Pooja Photos", "Temple Certificate", "Video Call", "HD Video"],
  },
  {
    name: "Standard",
    price: "₹3,100",
    desc: "Complete pooja with photos & certificate",
    popular: true,
    features: [
      "Senior Pandit",
      "Premium Samagri",
      "Prasad & Flowers",
      "Pooja Photos",
      "Temple Certificate",
      "Video Call Option",
      "WhatsApp Support",
    ],
    missing: ["HD Video", "Prasad Home Delivery"],
  },
  {
    name: "Premium",
    price: "₹5,100",
    desc: "Full VIP experience with live video",
    popular: false,
    features: [
      "Chief Pandit",
      "Premium Samagri & Flowers",
      "Special Prasad & Gifts",
      "HD Video of Pooja",
      "Temple Certificate",
      "Live Video Call",
      "Priority WhatsApp",
      "Personal Guidance",
      "Follow-up Consultation",
    ],
    missing: [],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">Packages</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            Choose Your <span className="text-amber-600">Package</span>
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Transparent, all-inclusive packages for a hassle-free pooja experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? "border-2 border-amber-500 shadow-2xl shadow-amber-900/20 scale-105"
                  : "border border-amber-100 shadow-lg hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold text-center py-1.5 tracking-wide uppercase">
                  ⭐ Most Popular
                </div>
              )}

              <div
                className={`p-6 flex-1 ${
                  pkg.popular ? "bg-gradient-to-b from-amber-50 to-white" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold text-stone-800">{pkg.name}</h3>
                <p className="text-stone-500 text-sm mt-1 mb-4">{pkg.desc}</p>
                <p className="text-4xl font-bold text-amber-600 mb-6">
                  {pkg.price}
                  <span className="text-sm text-stone-400 font-normal"> / puja</span>
                </p>

                <ul className="space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-stone-700">
                      <span className="text-green-500 font-bold text-base">✓</span>
                      {f}
                    </li>
                  ))}
                  {pkg.missing.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-stone-300">
                      <span className="text-stone-300 font-bold text-base">✕</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/918085039147?text=I want to book the ${pkg.name} package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-3 rounded-xl transition-all ${
                    pkg.popular
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:opacity-90 shadow-md"
                      : "border-2 border-amber-400 text-amber-600 hover:bg-amber-500 hover:text-white"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
