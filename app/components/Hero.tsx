"use client";

import Image from "next/image";
import WordAnimation from "./WordAnimation";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/homepageimage.png"
                    alt="Mahakal and Mangalnath Temple, Ujjain"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-amber-950/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating CTA */}
            <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
                <a
                    href="https://wa.me/916260552014"
                    target="_blank"
                    className="bg-green-500 text-white px-3 py-3 shadow-xl hover:bg-green-600"
                    style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
                >
                    <span className="text-xs font-bold">WhatsApp</span>
                </a>

                <a
                    href="tel:+916260552014"
                    className="bg-amber-600 text-white px-3 py-3 shadow-xl hover:bg-amber-700"
                    style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
                >
                    <span className="text-xs font-bold">Call Now</span>
                </a>

                <a
                    href="#contact"
                    className="bg-orange-600 text-white px-3 py-3 shadow-xl hover:bg-orange-700"
                    style={{ writingMode: "vertical-rl", borderRadius: "8px 0 0 8px" }}
                >
                    <span className="text-xs font-bold rotate-180">Book Puja</span>
                </a>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 pt-36">
                <motion.div
                    className="max-w-2xl"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.25,
                            },
                        },
                    }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <span>🕉️</span>
                        <span>Sacred Rituals at Mahakal & Mangalnath</span>
                    </motion.div>

                    {/* Name */}
                    <motion.div
                        className="mb-6"
                        variants={{
                            hidden: { opacity: 0, y: 25 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h2 className="text-white font-semibold text-lg md:text-xl">
                            Acharya Pt. Abhishek Vyas
                        </h2>
                        <p className="text-amber-300 text-base md:text-lg font-medium mt-1">
                            अवंतिका तीर्थ पुरोहित के भानेज
                        </p>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                    >
                        <WordAnimation text="Authentic Vedic Pujas in Ujjain" />
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-white/80 text-lg mb-8 leading-relaxed"
                        variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        Book authentic Vedic pujas at Mangalnath and Mahakal Temple in
                        Ujjain. We perform Kaal Sarp Dosh Puja, Mangal Dosh Shanti, Pitru
                        Dosh Puja, Navgrah Shanti, Rudrabhishek, and many other sacred
                        rituals with proper विधि and complete samagri for peace,
                        prosperity, and spiritual growth.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-3 mb-10"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:brightness-110 transition-all"
                        >
                            📅 Book Puja Now
                        </a>

                        <a
                            href="tel:+916260552014"
                            className="bg-white/10 border border-white/30 text-white px-5 py-3.5 rounded-xl hover:bg-white/20 transition-all"
                        >
                            📞 Call Now
                        </a>

                        <a
                            href="https://wa.me/916260552014"
                            target="_blank"
                            className="bg-green-500 text-white px-5 py-3.5 rounded-xl hover:bg-green-600 transition-all"
                        >
                            💬 WhatsApp Booking
                        </a>
                    </motion.div>

                    {/* Trust */}
                    <motion.div
                        className="flex flex-wrap gap-6"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                    >
                        {[
                            { num: "Ancient Temple", label: "Mangalnath, Ujjain" },
                            { num: "Mangal Grah", label: "Birthplace Belief" },
                            { num: "100% Private", label: "Single Puja Only" },
                        ].map((s) => (
                            <div key={s.label} className="flex items-center gap-2">
                                <div>
                                    <p className="text-amber-400 font-bold text-lg">{s.num}</p>
                                    <p className="text-white/60 text-xs">{s.label}</p>
                                </div>
                                <div className="w-px h-8 bg-white/20" />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <p className="text-white/50 text-xs uppercase">Scroll</p>
                <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
                    <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}