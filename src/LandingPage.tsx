import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import backgroundImg from "./assets/background.png";
import logo from "./assets/logo.png"

import {
  MapPin, ShieldCheck, Search, FileCheck2,
  ArrowLeftRight, Wrench, Headphones,
  Users, Car, BadgeCheck, Building2,
} from "lucide-react";

import { BiBell } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";

/* ─── Steering Wheel Logo ─────────────────────────────────────── */


/* ─── Step Illustrations ─────────────────────────────────────── */
const ExploreSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <circle cx="100" cy="100" r="52" fill="#dcfce7"/>
    <circle cx="90" cy="92" r="26" fill="#fff" stroke="#16a34a" strokeWidth="3"/>
    <circle cx="90" cy="92" r="18" fill="#f0fdf4"/>
    <path d="M76 94 Q76 99 79 100 L101 100 Q104 99 104 94 L104 88 Q101 85 98 84 L96 78 Q95 76 92 76 L88 76 Q85 76 84 78 L82 84 Q78 85 76 88Z" fill="#16a34a"/>
    <circle cx="80" cy="100" r="3.5" fill="#fff"/>
    <circle cx="100" cy="100" r="3.5" fill="#fff"/>
    <rect x="84" y="92" width="12" height="7" rx="1" fill="#bbf7d0" opacity="0.9"/>
    <line x1="110" y1="112" x2="126" y2="128" stroke="#16a34a" strokeWidth="5" strokeLinecap="round"/>
    <rect x="130" y="62" width="54" height="20" rx="10" fill="#fff" stroke="#bbf7d0" strokeWidth="1"/>
    <circle cx="142" cy="72" r="4" fill="#fbbf24"/>
    <rect x="149" y="68" width="30" height="3" rx="1.5" fill="#d1d5db"/>
    <rect x="149" y="73" width="20" height="2" rx="1" fill="#e5e7eb"/>
    <rect x="20" y="130" width="54" height="20" rx="10" fill="#fff" stroke="#bbf7d0" strokeWidth="1"/>
    <circle cx="32" cy="140" r="4" fill="#34d399"/>
    <rect x="39" y="136" width="28" height="3" rx="1.5" fill="#d1d5db"/>
    <rect x="39" y="141" width="18" height="2" rx="1" fill="#e5e7eb"/>
  </svg>
);

const ConnectSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <circle cx="100" cy="100" r="52" fill="#dbeafe"/>
    <circle cx="76" cy="85" r="16" fill="#2563eb"/>
    <circle cx="76" cy="78" r="8" fill="#fff" opacity="0.3"/>
    <path d="M62 102 Q62 95 76 95 Q90 95 90 102" fill="#1d4ed8"/>
    <circle cx="124" cy="85" r="16" fill="#16a34a"/>
    <circle cx="124" cy="78" r="8" fill="#fff" opacity="0.3"/>
    <path d="M110 102 Q110 95 124 95 Q138 95 138 102" fill="#15803d"/>
    <circle cx="88" cy="72" r="4" fill="#22c55e" stroke="#eff6ff" strokeWidth="1.5"/>
    <circle cx="136" cy="72" r="4" fill="#22c55e" stroke="#eff6ff" strokeWidth="1.5"/>
    <rect x="66" y="112" width="68" height="16" rx="8" fill="#2563eb"/>
    <text x="100" y="123" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="600" fontFamily="sans-serif">35 Lac, interested?</text>
    <polygon points="73,128 66,134 78,128" fill="#2563eb"/>
  </svg>
);

const BuySVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <circle cx="100" cy="98" r="52" fill="#dcfce7"/>
    <rect x="40" y="88" width="120" height="32" rx="6" fill="#16a34a"/>
    <rect x="52" y="76" width="88" height="20" rx="5" fill="#15803d"/>
    <rect x="56" y="78" width="80" height="16" rx="3" fill="#86efac" opacity="0.7"/>
    <circle cx="62" cy="122" r="9" fill="#14532d"/>
    <circle cx="62" cy="122" r="5" fill="#4ade80"/>
    <circle cx="138" cy="122" r="9" fill="#14532d"/>
    <circle cx="138" cy="122" r="5" fill="#4ade80"/>
    <rect x="40" y="93" width="10" height="6" rx="3" fill="#fef08a"/>
    <line x1="100" y1="88" x2="100" y2="120" stroke="#15803d" strokeWidth="1.5"/>
    <circle cx="152" cy="68" r="18" fill="#fff" stroke="#16a34a" strokeWidth="2"/>
    <circle cx="152" cy="68" r="13" fill="#16a34a"/>
    <path d="M144 68 L150 74 L161 60" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 62 L58 57 L68 62 L68 72 Q68 78 58 82 Q48 78 48 72Z" fill="#fff" stroke="#16a34a" strokeWidth="1.5"/>
    <path d="M52 70 L56 74 L64 64" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Main Component ─────────────────────────────────────────── */
export default function SteeringLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [email, setEmail] = useState("");
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  const SERVICES = [
    {
      icon: <Search size={28} />,
      title: "Inspection Service",
      desc: "Professional inspection to help you buy the right car with confidence.",
      accent: { bg: "bg-green-50", text: "text-green-700", iconColor: "text-green-600", border: "border-green-200" }
    },
    {
      icon: <FileCheck2 size={28} />,
      title: "File Check Service",
      desc: "We verify car documents to ensure everything is genuine and clear.",
      accent: { bg: "bg-blue-50", text: "text-blue-700", iconColor: "text-blue-600", border: "border-blue-200" }
    },
    {
      icon: <ArrowLeftRight size={28} />,
      title: "File Transfer Service",
      desc: "Hassle-free file transfer with complete support and guidance.",
      accent: { bg: "bg-green-50", text: "text-green-700", iconColor: "text-green-600", border: "border-green-200" }
    },
    {
      icon: <Wrench size={28} />,
      title: "Maintenance Service",
      desc: "From regular checkups to repairs – we keep your car in top shape.",
      accent: { bg: "bg-blue-50", text: "text-blue-700", iconColor: "text-blue-600", border: "border-blue-200" }
    },
    {
      icon: <Headphones size={28} />,
      title: "Customer Support",
      desc: "Our dedicated support team is always here to help you.",
      accent: { bg: "bg-green-50", text: "text-green-700", iconColor: "text-green-600", border: "border-green-200" }
    },
  ];

  const STEPS = [
    { title: "Explore Cars",                desc: "Browse thousands of verified ads with smart search and filters to find the perfect car.", img: <ExploreSVG /> },
    { title: "Connect & Negotiate",         desc: "Connect directly with sellers, negotiate with confidence, and close the deal.",           img: <ConnectSVG /> },
    { title: "Buy or Sell with Confidence", desc: "Whether you're buying or selling, The Steering makes the process simple, safe and secure.", img: <BuySVG /> },
  ];

  const STATS = [
    {
      value: "1000+", label: "Happy Customers",
      color: "text-green-400",
      icon: <Users size={36} strokeWidth={1.8} />,
    },
    {
      value: "2000+", label: "Cars Listed",
      color: "text-blue-400",
      icon: <Car size={36} strokeWidth={1.8} />,
    },
    {
      value: "100%", label: "Trusted Platform",
      color: "text-green-400",
      icon: <BadgeCheck size={36} strokeWidth={1.8} />,
    },
    {
      value: "1 City", label: "Hyderabad, Sindh",
      color: "text-green-400",
      icon: <Building2 size={36} strokeWidth={1.8} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ══ NAV ══════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<img src={logo}  className="w-60  h-auto" />

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {["Home", "Explore Ads", "Create Ad", "About Us"].map((l, i) => (
              <a key={l} href="#" className={`text-sm font-medium transition-colors no-underline ${i === 0 ? "text-green-600 border-b-2 border-green-600 pb-0.5" : "text-gray-600 hover:text-green-600"}`}>
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex py-2 px-4 items-center gap-1.5 bg-gradient-to-r from-green-400 to-[#0a1628] text-white text-xs font-semibold rounded-lg hover:from-green-500 hover:to-[#0a1628] transition-colors border-none cursor-pointer">
              <BiBell size={16} />
              Coming Soon
            </button>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 border-none bg-transparent cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="w-5 h-0.5 bg-gray-700 mb-1.5 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translate(2px,2px)" : "none" }} />
              <div className="w-5 h-0.5 bg-gray-700 mb-1.5" style={{ opacity: menuOpen ? 0 : 1 }} />
              <div className="w-5 h-0.5 bg-gray-700" style={{ transform: menuOpen ? "rotate(-45deg) translate(2px,-2px)" : "none" }} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg"
          >
            {["Home", "Explore Ads", "Create Ad", "About Us"].map((l) => (
              <a key={l} href="#" className="text-sm font-medium text-gray-700 hover:text-green-600 no-underline py-1">{l}</a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundPosition: "bottom" }}
      >
        <div className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(to right, #0a1628 5%, rgba(59,130,246,0.55) 40%, rgba(34,197,94,0.15) 65%, transparent 85%)" }}
        />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute right-[-60px] top-1/2 -translate-y-[55%] w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-20"
          style={{ background: "linear-gradient(135deg,#16a34a,#2563eb)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div className="flex-1 w-full max-w-xl text-center lg:text-left" {...fadeUp(0)}>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded px-3 py-1.5 text-[10px] font-bold text-blue-200 tracking-widest uppercase mb-5">
              <MapPin size={12} className="text-green-400" fill="#4ade80" />
              Hyderabad, Sindh, Pakistan
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black leading-[1.1] text-white mb-5">
              Hyderabad's Most<br />Trusted Platform<br />
              for <span className="text-green-400">Cars</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-200 leading-relaxed mb-8 sm:mb-10">
              Buy, sell and manage your car journey with confidence.<br className="hidden sm:block" />All in one place.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { bg: "bg-green-600",  label: "Trusted\nPlatform",           icon: <ShieldCheck size={14} className="text-white" /> },
                { bg: "bg-blue-600",   label: "Verified\nListings",          icon: <BadgeCheck size={14} className="text-white" /> },
                { bg: "bg-cyan-600",   label: "Safe & Secure\nTransactions", icon: <ShieldCheck size={14} className="text-white" /> },
              ].map(({ bg, label, icon }) => (
                <div key={label} className="flex items-center gap-2.5 sm:gap-3 bg-white/10 border border-white/15 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>{icon}</div>
                  <span className="text-white text-[11px] sm:text-xs font-semibold leading-tight whitespace-pre-line">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ MORE THAN MARKETPLACE ════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white text-center">
        <motion.div {...fadeUp(0)}>
          <p className="text-[10px] font-bold tracking-[3px] text-green-600 uppercase mb-3">THE STEERING.PK</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">More Than Just a Marketplace</h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto mb-12 sm:mb-14 leading-relaxed">
            We go beyond buying and selling. The Steering.pk is your all-in-one solution for a smooth and secure car experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {SERVICES.map(({ icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-7 text-center cursor-default transition-shadow"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${accent.bg} border ${accent.border} flex items-center justify-center mx-auto mb-4 sm:mb-5 ${accent.iconColor}`}>
                {icon}
              </div>
              <h3 className={`text-xs sm:text-sm font-bold ${accent.text} mb-2`}>{title}</h3>
              <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    {/* ══ FIND. CONNECT. DRIVE. ════════════════════════════════ */}
<section className="py-16 sm:py-24 px-4 sm:px-6 bg-white text-center">
  <motion.div {...fadeUp(0)}>
    <p className="text-[10px] font-bold tracking-[3px] text-green-600 uppercase mb-3">ONE PLATFORM, ENDLESS POSSIBILITIES</p>
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Find. Connect. Drive.</h2>
    <div className="w-10 h-0.5 bg-green-500 mx-auto mb-14 sm:mb-16" />
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
    {STEPS.map(({ title, desc, img }, i) => (
      <motion.div
        key={title}
        {...fadeUp(i * 0.12)}
        className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="w-full h-40 bg-gray-50 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-100 p-3">
          {img}
        </div>
        <h3 className="text-sm sm:text-base font-extrabold text-gray-900 mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
      </motion.div>
    ))}
  </div>
</section>
 <section
  ref={statsRef}
  style={{ 
    backgroundImage: `url(${backgroundImg})`, 
    backgroundSize: "cover", 
    backgroundPosition: "bottom" 
  }}
>
  {/* Blue overlay */}
  <div className="relative py-3">
    <div className="absolute inset-0 bg-blue-950/70" />
    
    <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 border-t border-b border-white/[0.07]">
      {STATS.map(({ value, label, color, icon }, i) => (
        <div
          key={label}
          className={`flex flex-col items-center justify-center gap-3 py-10 px-4 text-center ${i < 3 ? "border-r border-white/10" : ""}`}
          style={{
            opacity: statsInView ? 1 : 0,
            transform: statsInView ? "translateY(0)" : "translateY(16px)",
            transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
          }}
        >
          <div className={`${color} opacity-90`}>{icon}</div>
          <div className={`text-3xl sm:text-4xl font-black ${color}`}>{value}</div>
          <div className="text-xs text-white/50 uppercase tracking-widest font-medium">{label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ══ COMING SOON ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT — phone mockup */}
          <motion.div
            className="flex-shrink-0 relative flex justify-center items-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="absolute left-[-50px] sm:left-[-70px] top-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 rounded-full opacity-15"
              style={{ background: "linear-gradient(135deg,#16a34a,#2563eb)", filter: "blur(1px)" }} />
            <div className="relative z-10 w-44 sm:w-52 h-80 sm:h-96 rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-2xl"
              style={{ background: "#111", border: "6px solid #1f2937" }}>
              <div className="w-full h-full flex flex-col items-center justify-center gap-4"
                style={{ background: "linear-gradient(180deg,#0a1628 0%,#0d2040 100%)" }}>
                {/* <SteeringLogo size={44} /> */}
                <div className="text-center">
                  <div className="text-xs font-black text-white tracking-wider">THE<br />STEERING.PK</div>
                  <div className="text-[7px] text-blue-300 tracking-wide mt-1">YOUR JOURNEY, OUR COMMITMENT</div>
                </div>
                <svg viewBox="0 0 160 80" width="120" className="sm:w-[140px]" fill="none">
                  <path d="M14 58 Q14 65 20 67 L140 67 Q146 65 146 58 L146 46 Q138 40 126 36 L116 18 Q110 10 98 8 L62 8 Q50 10 44 18 L34 36 Q20 40 16 46 Z" fill="#c8cdd4"/>
                  <path d="M40 36 L48 16 Q56 8 66 8 L94 8 Q104 8 112 16 L120 36 Z" fill="#9aa3b0"/>
                  <path d="M44 34 L50 18 Q56 10 68 8 L92 8 Q104 10 110 18 L116 34 Z" fill="#2a4a7a" opacity="0.8"/>
                  <circle cx="40" cy="67" r="12" fill="#222"/><circle cx="40" cy="67" r="7" fill="#555"/>
                  <circle cx="120" cy="67" r="12" fill="#222"/><circle cx="120" cy="67" r="7" fill="#555"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — text */}
          <motion.div className="flex-1 w-full text-center lg:text-left order-1 lg:order-2" {...fadeUp(0)}>
            <p className="text-[10px] font-bold tracking-[3px] text-green-600 uppercase mb-4">COMING SOON</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              A Simpler, Smarter Way<br />
              to <span className="text-green-600">Buy, Sell</span> &amp; <span className="text-green-600">Manage</span> Cars.
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-1">The Steering.pk app is on the way.</p>
            <p className="text-sm text-gray-400 mb-8">Stay tuned!</p>
            <div className="flex max-w-md mx-auto lg:mx-0 rounded-lg overflow-hidden border border-gray-300 shadow-sm">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 sm:py-3.5 text-sm text-gray-600 outline-none bg-white placeholder-gray-400 border-none"
              />
              <button className="bg-[#0a1628] hover:bg-[#162036] text-white px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap border-none cursor-pointer">
                Notify Me
              </button>
            </div>
          </motion.div>
        </div>
      </section>

     {/* ══ FOOTER ═══════════════════════════════════════════════ */}
<footer className="text-white px-5 sm:px-8 pt-8 pb-5" style={{ background: "#0a1628" }}>
  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mb-5">

      {/* Logo */}
      <img src={logo}  className="w-60  h-auto" />


      {/* Nav */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {["Explore Ads", "Create Ad", "About Us"].map(l => (
          <a key={l} href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors no-underline">{l}</a>
        ))}
      </div>

      {/* Follow Us */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400 font-semibold">Follow Us</span>
        <div className="flex gap-2">
          {[
            { icon: <TbBrandFacebook size={15} />, href: "#" },
            { icon: <AiOutlineInstagram size={15} />, href: "#" },
            { icon: <FaWhatsapp size={14} />, href: "#" },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors no-underline text-white">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-white/10 pt-4 text-center text-xs text-gray-600">
      © 2024 The Steering.pk. All rights reserved.
    </div>

  </div>
</footer>

    </div>
  );
}