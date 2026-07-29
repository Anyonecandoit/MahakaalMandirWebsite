const reviews = [
  {
    name: "Rajesh Sharma",
    city: "Delhi",
    rating: 5,
    text: "Excellent service! Pandit Abhishek performed our Mangal Dosh Puja with great devotion. We received all photos and videos on the same day. Highly recommended!",
    initials: "RS",
  },
  {
    name: "Priya Patel",
    city: "Mumbai",
    rating: 5,
    text: "We booked Kaal Sarp Dosh Puja for my husband. The experience was divine. Panditji explained every step on video call. Very professional and genuine service.",
    initials: "PP",
  },
  {
    name: "Suresh Gupta",
    city: "Indore",
    rating: 5,
    text: "Best pooja service in Ujjain. Very transparent pricing and authentic rituals. Got the temple certificate too. Will definitely book again for Navgrah Shanti.",
    initials: "SG",
  },
  {
    name: "Anita Singh",
    city: "Bangalore",
    rating: 5,
    text: "Booked Narayan Bali for my late father. The entire process was very smooth and devotional. Panditji was very kind and knowledgeable. Grateful for this service.",
    initials: "AS",
  },
  {
    name: "Vikram Joshi",
    city: "Pune",
    rating: 5,
    text: "Amazing experience! The Rudrabhishek was performed beautifully. We joined on live video call from Pune. Felt like we were physically present at the temple.",
    initials: "VJ",
  },
  {
    name: "Meena Agarwal",
    city: "Jaipur",
    rating: 5,
    text: "Very genuine and authentic service. Ark Vivah was performed perfectly. Pandit Abhishek is very experienced and explained everything in detail. Highly satisfied.",
    initials: "MA",
  },
];

const avatarColors = [
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-blue-500 to-indigo-500",
  "from-purple-500 to-violet-500",
  "from-cyan-500 to-sky-500",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-badge">Testimonials</span>
          <div className="temple-divider mt-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
            What <span className="text-amber-600">Devotees</span> Say
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto">
            Real experiences from thousands of satisfied devotees across India and abroad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={r.name} className="temple-card p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-amber-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{r.name}</p>
                  <p className="text-stone-400 text-xs">📍 {r.city}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-green-50 text-green-600 border border-green-200 px-2 py-0.5 rounded-full font-medium">
                    ✓ Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
