import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import backgroundImg from "./assets/background.png";

// lucide-react
import {
  MapPin, ShieldCheck, Search, FileCheck2,
  ArrowLeftRight, Wrench, Headphones, 
  Users, Car, BadgeCheck, Building2,
} from "lucide-react";

// react-icons
import { BiBell } from "react-icons/bi";
import { FaApple, FaGooglePlay, FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";

/* ─── Steering Wheel Logo ─────────────────────────────────────── */
const SteeringLogo = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="20" stroke="#16a34a" strokeWidth="2.5" />
    <circle cx="22" cy="22" r="6" stroke="#2563eb" strokeWidth="2" />
    <line x1="22" y1="2"  x2="22" y2="16" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="22" y1="28" x2="22" y2="42" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="2"  y1="22" x2="16" y2="22" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="28" y1="22" x2="42" y2="22" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="5.5"  y1="8"  x2="16" y2="17" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38.5" y1="8"  x2="28" y2="17" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="5.5"  y1="36" x2="16" y2="27" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="38.5" y1="36" x2="28" y2="27" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

function StatCard({
  value,
  label,
  icon,
  accent,
  ring,
  delay,
  inView,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
  ring: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms, background 0.25s, border-color 0.25s`,
      }}
    >
      <div className={`absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${accent} opacity-80`} />

      <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${ring}`}>
        {icon}
      </div>

      <p className="mb-2 text-[26px] font-semibold leading-none tracking-tight text-white">
        {value}
      </p>

      <p className="text-[11.5px] font-medium uppercase tracking-widest text-white/40">
        {label}
      </p>
    </div>
  );
}

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

/* ─── Count-up hook ──────────────────────────────────────────── */
function useCountUp(target: string, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * parseInt(target)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
}


/* ─── Main Component ─────────────────────────────────────────── */
export default function SteeringLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [email, setEmail] = useState("");
  const statsRef = useRef(null);

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
    value: "1000+",
    label: "Happy Customers",
    color: "text-emerald-400",
    accent: "from-emerald-500 to-emerald-300",
    ring: "bg-emerald-500/10 text-emerald-400",
    icon: <Users size={26} strokeWidth={1.6} />,
  },
  {
    value: "2000+",
    label: "Cars Listed",
    color: "text-blue-400",
    accent: "from-blue-500 to-blue-300",
    ring: "bg-blue-500/10 text-blue-400",
    icon: <Car size={26} strokeWidth={1.6} />,
  },
  {
    value: "100%",
    label: "Trusted Platform",
    color: "text-emerald-400",
    accent: "from-emerald-500 to-emerald-300",
    ring: "bg-emerald-500/10 text-emerald-400",
    icon: <BadgeCheck size={26} strokeWidth={1.6} />,
  },
  {
    value: "1 City",
    label: "Hyderabad, Sindh",
    color: "text-emerald-400",
    accent: "from-emerald-500 to-emerald-300",
    ring: "bg-emerald-500/10 text-emerald-400",
    icon: <Building2 size={26} strokeWidth={1.6} />,
  },
];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ══ NAV ══════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0">
            <SteeringLogo size={36} />
            <div className="leading-none">
              <div className="text-[8px] font-bold tracking-[2px] text-gray-900">THE</div>
              <div className="text-base sm:text-xl font-black text-gray-900 tracking-tight">STEERING.PK</div>
              <div className="hidden sm:block text-[7px] text-gray-400 tracking-widest uppercase">YOUR JOURNEY, OUR COMMITMENT</div>
            </div>
          </div>

          {/* Desktop nav */}
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

            {/* Location pill */}
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

            {/* Badges */}
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50 text-center">
        <motion.div {...fadeUp(0)}>
          <p className="text-[10px] font-bold tracking-[3px] text-green-600 uppercase mb-3">ONE PLATFORM, ENDLESS POSSIBILITIES</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Find. Connect. Drive.</h2>
          <div className="w-10 h-0.5 bg-green-500 mx-auto mb-14 sm:mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {STEPS.map(({ title, desc, img }, i) => {
            const accents = [
              { border: "border-t-green-500", badge: "bg-green-500", num: "text-green-600" },
              { border: "border-t-[#0d2040]",  badge: "bg-[#0d2040]",  num: "text-[#0d2040]"  },
              { border: "border-t-green-500", badge: "bg-green-500", num: "text-green-600" },
            ];
            const a = accents[i];
            return (
              <motion.div
                key={title}
                {...fadeUp(i * 0.12)}
                className={`relative bg-white border border-gray-200 border-t-4 ${a.border} rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${a.badge} flex items-center justify-center shadow-md`}>
                  <span className="text-white text-xs font-black">{i + 1}</span>
                </div>
                <div className="w-full h-36 bg-gray-50 rounded-xl mt-2 mb-6 flex items-center justify-center overflow-hidden border border-gray-100 p-3">
                  {img}
                </div>
                <h3 className={`text-sm sm:text-base font-extrabold ${a.num} mb-2`}>{title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
{/* ══ STATS ════════════════════════════════════════════════ */}
<section
  ref={statsRef}
  className="py-12"
  style={{ background: "linear-gradient(135deg,#0a1628 0%,#0d2040 100%)" }}
>
  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
    {STATS.map(({ value, label, accent, ring, icon }, i) => (
      <StatCard
        key={label}
        value={value}
        label={label}
        accent={accent}
        ring={ring}
        icon={icon}
        delay={i * 90}
        inView={statsInView}
      />
    ))}
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
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glow blob */}
      <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(22,163,74,0.18) 0%,rgba(37,99,235,0.10) 100%)" }} />

      {/* Phone */}
      <div className="relative z-10 w-40 sm:w-48 h-[300px] sm:h-[340px] rounded-[32px] sm:rounded-[36px] overflow-hidden"
        style={{ background: "#111", border: "5px solid #1f2937" }}>

        {/* Notch */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-10 h-[6px] rounded-full bg-[#1f2937]" />

        <div className="w-full h-full flex flex-col items-center justify-center gap-3"
          style={{ background: "linear-gradient(180deg,#0a1628 0%,#0d2040 100%)" }}>

          <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
            <SteeringLogo size={20} />
          </div>

          <div className="text-center">
            <div className="text-[11px] font-extrabold text-white tracking-wide leading-snug">STEERING.PK</div>
            <div className="text-[7px] text-blue-300 tracking-widest uppercase mt-0.5">Your Journey, Our Commitment</div>
          </div>

          <svg viewBox="0 0 160 80" width="110" fill="none">
            <path d="M14 58 Q14 65 20 67 L140 67 Q146 65 146 58 L146 46 Q138 40 126 36 L116 18 Q110 10 98 8 L62 8 Q50 10 44 18 L34 36 Q20 40 16 46 Z" fill="#c8cdd4"/>
            <path d="M40 36 L48 16 Q56 8 66 8 L94 8 Q104 8 112 16 L120 36 Z" fill="#9aa3b0"/>
            <path d="M44 34 L50 18 Q56 10 68 8 L92 8 Q104 10 110 18 L116 34 Z" fill="#2a4a7a" opacity="0.8"/>
            <circle cx="40" cy="67" r="12" fill="#222"/><circle cx="40" cy="67" r="7" fill="#555"/>
            <circle cx="120" cy="67" r="12" fill="#222"/><circle cx="120" cy="67" r="7" fill="#555"/>
          </svg>

          {/* Progress dots */}
          <div className="flex gap-1.5 mt-1">
            <div className="w-7 h-1 rounded-full bg-white/50" />
            <div className="w-2 h-1 rounded-full bg-white/15" />
            <div className="w-2 h-1 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </motion.div>

    {/* RIGHT — text */}
    <motion.div className="flex-1 w-full text-center lg:text-left order-1 lg:order-2" {...fadeUp(0)}>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.15em] text-green-600 uppercase">Coming Soon</span>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        A Simpler, Smarter Way<br />
        to <span className="text-green-600">Buy, Sell</span> &amp; <span className="text-green-600">Manage</span> Cars.
      </h2>

      <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
        The Steering.pk app is on its way —<br className="hidden sm:block" /> get notified the moment we launch.
      </p>

      {/* Email input */}
      <div className="flex max-w-md mx-auto lg:mx-0 rounded-xl overflow-hidden border border-slate-200">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 sm:py-3.5 text-sm text-slate-600 outline-none bg-white placeholder-slate-400 border-none"
        />
        <button className="bg-[#0a1628] hover:bg-[#162036] text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wide transition-colors whitespace-nowrap border-none cursor-pointer">
          Notify Me
        </button>
      </div>

      {/* Store badges */}
      <div className="flex gap-3 mt-4 justify-center lg:justify-start">
        {[
          { label: "App Store", icon: <FaApple size={15} /> },
          { label: "Google Play", icon: <FaGooglePlay size={13} /> },
        ].map(({ label, icon }) => (
          <button key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 hover:border-slate-400 text-slate-600 text-[11px] font-medium transition-colors cursor-pointer">
            {icon} {label}
          </button>
        ))}
      </div>

    </motion.div>
  </div>
</section>

   {/* ══ FOOTER ═══════════════════════════════════════════════ */}
<footer
  className="text-white px-5 sm:px-8 pt-10 pb-5"
  style={{ background: "#0a1628" }}
>
  <div className="max-w-6xl mx-auto">

    {/* Top row */}
    <div className="flex flex-wrap items-center justify-between gap-6 pb-7 border-b border-white/[0.08]">

      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70">
          <SteeringLogo size={20} />
        </div>
        <div>
          <div className="text-[15px] font-extrabold tracking-wide leading-none mb-[3px]">
            STEERING.PK
          </div>
          <div className="text-[9px] text-white/30 tracking-widest uppercase">
            Your Journey, Our Commitment
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex gap-7 flex-wrap">
        {["Explore Ads", "Create Ad", "About Us"].map((l) => (
          <a
            key={l}
            href="#"
            className="text-[13px] text-white/45 hover:text-white transition-colors no-underline"
          >
            {l}
          </a>
        ))}
      </nav>

      {/* Social */}
      <div className="flex flex-col items-end gap-2">
        <span className="text-[11px] text-white/35 uppercase tracking-widest font-medium">
          Follow Us
        </span>
        <div className="flex gap-2">
          {[
            { icon: <TbBrandFacebook size={15} />, href: "#", label: "Facebook" },
            { icon: <AiOutlineInstagram size={15} />, href: "#", label: "Instagram" },
            { icon: <FaWhatsapp size={14} />, href: "#", label: "WhatsApp" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-8 h-8 rounded-full border border-white/[0.12] bg-white/[0.05] hover:bg-green-600 hover:border-green-600 flex items-center justify-center text-white/60 hover:text-white transition-all no-underline"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom row */}
    <div className="flex items-center justify-between pt-4 flex-wrap gap-2">
      <span className="text-[11.5px] text-white/20">
        © 2024 The Steering.pk. All rights reserved.
      </span>
      <span className="flex items-center gap-[5px] text-[10px] text-white/20">
        <span className="w-[5px] h-[5px] rounded-full bg-green-500 opacity-70" />
        Hyderabad, Sindh
      </span>
    </div>

  </div>
</footer>

    </div>
  );
}