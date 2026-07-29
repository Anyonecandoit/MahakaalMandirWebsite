const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Temple Poojas", href: "#poojas" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const poojaLinks = [
  "Mangal Dosh Puja",
  "Kaal Sarp Dosh Puja",
  "Rudrabhishek",
  "Navgrah Shanti",
  "Pitru Dosh Shanti",
  "Narayan Bali",
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl">
                🕉️
              </div>
              <div>
                <p className="font-bold text-amber-400 leading-tight text-sm">Mahakal Pooja Services</p>
                <p className="text-white/40 text-xs">Authentic Poojas • Ujjain</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Authentic Vedic poojas at Mangalnath &amp; Mahakal Temple, Ujjain. Performed by experienced Pandits with divine blessings.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/918085039147" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition text-sm">💬</a>
              <a href="tel:+916260552014"
                className="w-9 h-9 rounded-full bg-amber-700 flex items-center justify-center hover:bg-amber-600 transition text-sm">📞</a>
              <a href="mailto:info@mangalnathmandirujain.com"
                className="w-9 h-9 rounded-full bg-stone-700 flex items-center justify-center hover:bg-stone-600 transition text-sm">✉️</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/50 text-sm hover:text-amber-400 transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Poojas */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 text-sm uppercase tracking-wide">Temple Poojas</h4>
            <ul className="space-y-2">
              {poojaLinks.map((p) => (
                <li key={p}>
                  <a href="#poojas" className="text-white/50 text-sm hover:text-amber-400 transition">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-amber-400 mb-4 text-sm uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-white/50 text-sm">
                <span>📍</span>
                <span>Ankpat Marg, Hari Nagar Gayatri Shakti Peeth, Ujjain (M.P.) 456006</span>
              </li>
              <li>
                <a href="tel:+916260552014" className="flex gap-2 text-white/50 text-sm hover:text-amber-400 transition">
                  <span>📞</span> +91 62605-52014
                </a>
              </li>
              <li>
                <a href="https://wa.me/918085039147" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-white/50 text-sm hover:text-green-400 transition">
                  <span>💬</span> +91 80850-39147
                </a>
              </li>
              <li className="flex gap-2 text-white/50 text-sm">
                <span>⏰</span> 5:00 AM – 10:00 PM (All Days)
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2026 Mahakal Pooja Services. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition">Refund Policy</a>
            <a href="#" className="hover:text-amber-400 transition">Terms &amp; Conditions</a>
          </div>
          <p>Made with ❤️ for devotees worldwide</p>
        </div>
      </div>
    </footer>
  );
}
