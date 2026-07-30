const reviews = [
  {
    name: "Rajesh Sharma",
    city: "Delhi",
    rating: 5,
    text: "Excellent service! Pandit Abhishek performed our Mangal Dosh Puja with great devotion. We received all photos and videos the same day. Highly recommended.",
    initials: "RS",
  },
  {
    name: "Priya Patel",
    city: "Mumbai",
    rating: 5,
    text: "We booked Kaal Sarp Dosh Puja for my husband. The experience was truly divine. Panditji explained every step on video call. Very professional and genuine service.",
    initials: "PP",
  },
  {
    name: "Suresh Gupta",
    city: "Indore",
    rating: 5,
    text: "Best puja service in Ujjain. Transparent pricing and authentic rituals. We also received the temple certificate. Will definitely book again.",
    initials: "SG",
  },
  {
    name: "Anita Singh",
    city: "Bangalore",
    rating: 5,
    text: "Booked Narayan Bali for my father. The entire process was smooth and devotional. Panditji was kind and very knowledgeable. Truly grateful.",
    initials: "AS",
  },
  {
    name: "Vikram Joshi",
    city: "Pune",
    rating: 5,
    text: "Amazing experience! The Rudrabhishek was performed beautifully. We joined via live video call and felt like we were at the temple.",
    initials: "VJ",
  },
  {
    name: "Meena Agarwal",
    city: "Jaipur",
    rating: 5,
    text: "Very genuine and authentic service. Ark Vivah was performed perfectly. Everything was explained clearly. Highly satisfied with the service.",
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

          {/* Heading */}
          <div className="text-center mb-12">
            <span className="section-badge">Testimonials</span>
            <div className="temple-divider mt-3" />

            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mt-4">
              Real <span className="text-amber-600">Experiences</span> from Our Devotees
            </h2>

            <p className="text-stone-500 mt-3 max-w-xl mx-auto">
              All reviews are from real devotees who have booked puja services with us.
            </p>

            {/* Rating Summary 🔥 */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm">
              <span className="text-amber-500 text-lg">★★★★★</span>
              <span className="text-stone-700 font-semibold">4.9/5</span>
              <span className="text-stone-400">based on 5000+ pujas</span>
            </div>
          </div>

          {/* Cards */}
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
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm`}
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

          {/* Bottom CTA 🔥 */}
          <div className="text-center mt-10">
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