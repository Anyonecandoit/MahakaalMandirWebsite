"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Basic",
    price: "₹2,100",
    desc: "Simple and affordable puja performed with proper Vedic rituals.",
    popular: false,
    features: [
      "Experienced Pandit",
      "Basic Samagri Included",
      "Prasad Distribution",
      "Puja Confirmation",
      "WhatsApp Support",
      "Private Puja (No Group)",
    ],
    missing: ["Puja Photos", "Temple Certificate", "Video Call", "HD Video"],
  },
  {
    name: "Standard",
    price: "₹5,100",
    desc: "Complete puja experience with photos, certificate, and guidance.",
    popular: true,
    features: [
      "Senior Pandit",
      "Premium Samagri",
      "Prasad & Flowers",
      "Puja Photos",
      "Temple Certificate",
      "Video Call Option",
      "WhatsApp Support",
      "Private Puja",
      "⭐ Most Booked Package",
    ],
    missing: ["HD Video", "Prasad Home Delivery"],
  },
  {
    name: "Premium",
    price: "₹11,000",
    desc: "VIP puja experience with live video, priority service, and full support.",
    popular: false,
    features: [
      "Chief Pandit",
      "Premium Samagri & Flowers",
      "Special Prasad & Gifts",
      "HD Video Recording",
      "Temple Certificate",
      "Live Video Call",
      "Priority WhatsApp Support",
      "Personal Guidance",
      "Follow-up Consultation",
      "Same-Day Booking Available",
    ],
    missing: [],
  },
];

export default function Packages() {
  return (
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
          >
            <span className="section-badge">Packages</span>
            <div className="temple-divider mt-3" />

            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
              Choose Your <span className="text-amber-600">Puja Package</span>
            </h2>

            <p className="text-stone-500 mt-3 max-w-xl mx-auto">
              Transparent pricing with everything included. No hidden costs.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.25,
                  },
                },
              }}
          >
            {packages.map((pkg) => (
                <motion.div
                    key={pkg.name}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className={`relative rounded-2xl overflow-hidden flex flex-col transition ${
                        pkg.popular
                            ? "border-2 border-amber-500 shadow-2xl scale-105"
                            : "border border-amber-100 shadow-md"
                    }`}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                >

                  {/* Popular Badge */}
                  {pkg.popular && (
                      <motion.div
                          className="bg-amber-500 text-white text-xs text-center py-1 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                      >
                        ⭐ Most Popular
                      </motion.div>
                  )}

                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-stone-800">
                      {pkg.name}
                    </h3>

                    <p className="text-sm text-stone-500 mt-1 mb-4">
                      {pkg.desc}
                    </p>

                    <p className="text-3xl font-bold text-amber-600 mb-4">
                      {pkg.price}
                    </p>

                    <ul className="space-y-2 text-sm">
                      {pkg.features.map((f) => (
                          <li key={f} className="text-stone-700">
                            ✅ {f}
                          </li>
                      ))}
                      {pkg.missing.map((f) => (
                          <li key={f} className="text-gray-300">
                            ❌ {f}
                          </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="p-5">
                    <a
                        href={`https://wa.me/918085039147?text=I want to book the ${pkg.name} package`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-2 rounded-lg hover:opacity-90 transition shadow-md"
                    >
                      📲 Book Now
                    </a>
                  </div>
                </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
  );
}