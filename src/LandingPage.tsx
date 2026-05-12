import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import backgroundImg from "./assets/background.png";
import logo from "./assets/logo.png"

import {
  MapPin,  Search, FileCheck2,
  ArrowLeftRight, Wrench, Headphones,
  Users, Car, BadgeCheck, Building2,
  Play,
} from "lucide-react";

import {  FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";
import { BsApple } from "react-icons/bs";

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
const comingSoonRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ══ NAV ══════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<img src={logo}  className="w-60  h-auto" />

   

          
        </div>


      </nav>

      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: "cover", backgroundPosition: "bottom" }}
      >
        <div className="absolute inset-0 z-0"
          style={{ background: "linear-gradient(to right, #0a1628 5%, #0a1628 30%, rgba(34,197,94,0.15) 65%, transparent 85%)" }}
        />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute right-[-60px] top-1/2 -translate-y-[55%] w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full opacity-20"
          style={{ background: "linear-gradient(135deg,#16a34a,#2563eb)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div className="flex-1 w-full max-w-xl text-center lg:text-left" {...fadeUp(0)}>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded px-3 py-1.5 text-[10px] font-bold text-blue-200 tracking-widest uppercase mb-5">
              <MapPin size={12} className="text-green-400" fill="#4ade80" />
              #Coming Soon
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
    { bg: "bg-green-600", label: "Download\nApple Store", icon: <BsApple size={14} className="text-white" /> },
    { bg: "bg-blue-950",  label: "Download\nPlay Store",  icon: <Play size={14} className="text-white" /> },
  ].map(({ bg, label, icon }) => (
    <div
      key={label}
      onClick={() => comingSoonRef.current?.scrollIntoView({ behavior: "smooth" })}
      className="flex items-center gap-2.5 sm:gap-3 bg-white/10 border border-white/15 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 cursor-pointer"
    >
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
  {STEPS.map(({ title, desc }, i) => (
    <motion.div
      key={title}
      {...fadeUp(i * 0.12)}
      className="bg-white rounded-2xl p-6 sm:p-8 text-center transition-shadow relative
        sm:[&:not(:last-child)]:after:content-[''] 
        sm:[&:not(:last-child)]:after:absolute 
        sm:[&:not(:last-child)]:after:right-0 
        sm:[&:not(:last-child)]:after:top-[10%] 
        sm:[&:not(:last-child)]:after:h-[80%] 
        sm:[&:not(:last-child)]:after:w-px 
        sm:[&:not(:last-child)]:after:bg-gray-200"
    >
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
      <section ref={comingSoonRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT — phone mockup */}
<div>
      <img src={logo}  className="w-120  h-auto" />

</div>

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
<footer className="text-gray-700 px-5 sm:px-8 pt-8 pb-5" style={{ background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mb-5">

      {/* Logo */}
      <img src={logo} className="w-60 h-auto" />

      {/* Follow Us */}
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-500 font-semibold">Follow Us</span>
        <div className="flex gap-2">
          {[
            { icon: <TbBrandFacebook size={15} />, href: "#" },
            { icon: <AiOutlineInstagram size={15} />, href: "#" },
            { icon: <FaWhatsapp size={14} />, href: "#" },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors no-underline text-gray-600">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
      © 2026 The Steering.pk. All rights reserved.
    </div>

  </div>
</footer>

    </div>
  );
}