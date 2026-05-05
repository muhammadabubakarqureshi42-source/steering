import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  inView,
} from "framer-motion";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiChevronRight,
  FiUser,
  FiList,
  FiAward,
  FiBarChart2,
  FiClock,
  FiPhone,
  FiMail,
  FiTwitter,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import {
  FaGooglePlay,
  FaApple,
  FaCarSide,
  FaCar,
  FaRegStar,
  FaStar,
  FaWhatsapp,
  FaCheckDouble,
  FaShieldAlt,
  FaTools,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdVerified,
  MdPriceCheck,
  MdSpeed,
  MdSecurity,
  MdOutlineSupport,
  MdLocationOn,
  MdDirectionsCar,
} from "react-icons/md";
import {
  RiCarLine,
  RiSearchEyeLine,
  RiPriceTag3Line,
  RiSecurePaymentLine,
  RiCustomerServiceLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import {
  BsGraphUp,
  BsFillStarFill,
  BsChatDotsFill,
  BsCheckCircleFill,
  BsLightningChargeFill,
  BsShieldCheck,
} from "react-icons/bs";
import {
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiSparkles,
} from "react-icons/hi";
import { TbBrandGooglePlay } from "react-icons/tb";
import { IoCarSportOutline, IoStarOutline } from "react-icons/io5";

const NAV_LINKS = [
  { label: "Features", href: "#features", icon: <BsLightningChargeFill /> },
  { label: "How It Works", href: "#how-it-works", icon: <RiSearchEyeLine /> },
  { label: "About", href: "#about", icon: <HiOutlineBadgeCheck /> },
  { label: "Download", href: "#download", icon: <FiDownload /> },
];

const FEATURES = [
  {
    icon: <FaCar size={28} />,
    title: "Buy & Sell Instantly",
    desc: "List your car in under 2 minutes or browse thousands of verified listings across Pakistan.",
    color: "#0052cc",
    bg: "linear-gradient(135deg, #e8f0ff 0%, #d0e3ff 100%)",
  },
  {
    icon: <RiSearchEyeLine size={28} />,
    title: "Smart Search Filters",
    desc: "Filter by make, model, year, city, price range, mileage and more — find your perfect match.",
    color: "#0369a1",
    bg: "linear-gradient(135deg, #e0f5ff 0%, #bae8ff 100%)",
  },
  {
    icon: <MdVerified size={28} />,
    title: "Verified Listings",
    desc: "Every listing goes through our trust verification process so you can buy with confidence.",
    color: "#16a34a",
    bg: "linear-gradient(135deg, #e0fdf4 0%, #bbf7d0 100%)",
  },
  {
    icon: <BsShieldCheck size={28} />,
    title: "Inspection Service",
    desc: "Get your vehicle inspected by certified experts with a complete report to ensure safety, quality, and transparency before buying or selling.",
    color: "#059669",
    bg: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 100%)",
  },
  {
    icon: <BsChatDotsFill size={28} />,
    title: "In-App Chat",
    desc: "Connect directly with buyers and sellers through our secure in-app messaging system.",
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #f5f3ff 0%, #ddd6fe 100%)",
  },
  {
    icon: <FaTools size={28} />,
    title: "Mechanic Services",
    desc: "Access trusted mechanics for repairs, maintenance, and on-demand car services anytime, anywhere.",
    color: "#2563eb",
    bg: "linear-gradient(135deg, #eff6ff 0%, #93c5fd 100%)",
  },
];

const STEPS = [
  {
    num: "01",
    icon: <FiUser size={32} />,
    title: "Create Your Account",
    desc: "Sign up in seconds with your phone number or Google account. Free forever.",
  },
  {
    num: "02",
    icon: <RiCarLine size={32} />,
    title: "Browse or List",
    desc: "Search thousands of cars or post your own listing with photos and details.",
  },
  {
    num: "03",
    icon: <FaCheckDouble size={32} />,
    title: "Connect & Deal",
    desc: "Chat with the seller, negotiate the price, and close the deal safely.",
  },
];

const STATS = [
  { value: "50K+", label: "Active Listings", icon: <RiCarLine size={22} /> },
  { value: "200K+", label: "Happy Users", icon: <FiUser size={22} /> },
  { value: "35+", label: "Cities Covered", icon: <MdLocationOn size={22} /> },
  { value: "4.8★", label: "App Rating", icon: <BsFillStarFill size={22} /> },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Raza",
    city: "Karachi",
    text: "Sold my Civic in 3 days! The Steering is so much better than other platforms. The interface is clean, fast, and the verified sellers gave me full confidence.",
    avatar: "AR",
    rating: 5,
  },
  {
    name: "Sana Malik",
    city: "Lahore",
    text: "Finally found my dream car at the right price. The filters are amazing and the UI is super clean. I compared 40+ cars before deciding — made the whole thing stress-free.",
    avatar: "SM",
    rating: 5,
  },
  {
    name: "Usman Khan",
    city: "Islamabad",
    text: "The verified listings feature gave me full confidence. No scams, no hassle. Pure gold. I've recommended it to everyone in my family. Best car app in Pakistan.",
    avatar: "UK",
    rating: 5,
  },
];

const ABOUT_CARDS = [
  {
    label: "Average Sell Time",
    value: "3 Days",
    icon: <FiClock size={22} />,
    dark: true,
  },
  {
    label: "Listings Verified",
    value: "98%",
    icon: <MdVerified size={22} />,
    dark: false,
  },
  {
    label: "Cities Active",
    value: "35+",
    icon: <MdLocationOn size={22} />,
    dark: false,
  },
  {
    label: "Customer Rating",
    value: "4.8 / 5",
    icon: <BsFillStarFill size={22} />,
    dark: true,
  },
];

function useCountUp(
  target: string,
  duration: number = 2000,
  start: boolean = false,
): number {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!start) return;

    const parseValue = (val: string): number => {
      if (val.includes("K")) return parseFloat(val) * 1000;
      if (val.includes("M")) return parseFloat(val) * 1000000;
      return parseFloat(val.replace(/[^0-9.]/g, ""));
    };

    const num: number = parseValue(target);
    let startTime: number | null = null;

    const step = (timestamp: number): void => {
      if (startTime === null) startTime = timestamp;

      const progress: number = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * num));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  value,
  label,
  icon,
  inView,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);

  // Convert raw number back to display format
  const formatCount = (num: number, originalValue: string) => {
    if (originalValue.includes("K")) return `${Math.floor(num / 1000)}K+`;
    if (originalValue.includes("M")) return `${(num / 1000000).toFixed(1)}M+`;
    // For "4.8★" — just show static value when done, count to 4
    if (originalValue.includes("★")) return `${num}★`;
    return `${num}+`;
  };
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="flex flex-col items-center gap-3 p-6 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: "#81a9cb", color: "#025194" }}
      >
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-black text-[#68a4d7] tabular-nums tracking-tight">
        {inView ? formatCount(count, value) : "0"}
      </div>
      <div className="text-sm text-blue-200 font-medium tracking-wider uppercase">
        {label}
      </div>
    </motion.div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

export default function SteeringLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [statsInView, setStatsInView] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const statsRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 140]);
  const heroOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsInView(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="bg-white text-gray-800 overflow-x-hidden"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #010f1f; }
        ::-webkit-scrollbar-thumb { background: #025194; border-radius: 3px; }
        .glow-gold { filter: drop-shadow(0 0 20px rgba(255,215,0,0.5)); }
        .text-gradient { background: linear-gradient(135deg, #025194 0%, #68a4d7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-shine { position: relative; overflow: hidden; }
        .card-shine::after { content: ''; position: absolute; top: -50%; left: -60%; width: 30%; height: 200%; background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%); transform: skewX(-15deg); transition: left 0.7s ease; }
        .card-shine:hover::after { left: 130%; }
        .noise-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; opacity: 0.015; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(12px)} }
        @keyframes pulse-ring { 0%{transform:scale(0.8);opacity:1} 100%{transform:scale(2.2);opacity:0} }
        .float { animation: float 3.5s ease-in-out infinite; }
        .float2 { animation: float2 4s ease-in-out infinite; }
        .pulse-ring { animation: pulse-ring 2s cubic-bezier(0.215,0.61,0.355,1) infinite; }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .shimmer-text { background: linear-gradient(90deg, #025194 0%, #fff 40%, #025194 60%, #68a4d7 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #025194; transition: width 0.3s ease; border-radius: 2px; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      <div className="noise-overlay" />

      {/* ── NAVBAR ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12"
        style={{
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
          background: scrolled ? "rgba(1,15,31,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="relative"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #025194, #68a4d7)",
                  color: "#010f1f",
                }}
              >
                <MdDirectionsCar size={22} />
              </div>
              <div
                className="absolute inset-0 rounded-xl opacity-40 blur-md"
                style={{ background: "#025194" }}
              />
            </motion.div>
            <div>
              <span className="text-white font-black text-xl tracking-tight">
                The Steering
              </span>
              <div className="text-[#68a4d7] text-[9px] font-semibold tracking-[0.2em] uppercase -mt-1">
                Pakistan's #1 Car App
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
                className="nav-link flex items-center gap-1.5 text-blue-100 hover:text-[#68a4d7] text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                <span className="opacity-60 text-xs">{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px #748796",
            }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
            style={{
              background: "linear-gradient(155deg, #025194, #68a4d7)",
              color: "#010f1f",
            }}
          >
            <FaGooglePlay size={14} />
            Get App
          </motion.button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-5 flex flex-col gap-1"
            style={{
              background: "rgba(1,20,40,0.98)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-white text-base font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
              >
                <span className="text-[#68a4d7]">{link.icon}</span>
                {link.label}
                <FiChevronRight className="ml-auto text-gray-500" />
              </motion.a>
            ))}
            <div className="mt-2 pt-2 border-t border-white/10">
              <button
                className="w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl text-sm"
                style={{
                  background: "linear-gradient(135deg, #025194, #68a4d7)",
                  color: "#010f1f",
                }}
              >
                <FaGooglePlay /> Download Free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #010a18 0%, #011a35 35%, #022d5c 70%, #033a7a 100%)",
        }}
      >
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #025194 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            className="absolute bottom-[5%] left-[0%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle, #0369a1 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
            style={{
              background:
                "radial-gradient(circle, #025194 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Diagonal accent line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute"
            style={{
              top: "15%",
              right: "-5%",
              width: "60%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #81a9cb, transparent)",
              transform: "rotate(-15deg)",
            }}
          />
          <div
            className="absolute"
            style={{
              bottom: "25%",
              left: "-5%",
              width: "50%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, #81a9cb, transparent)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center w-full"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
              style={{
                background: "#81a9cb",
                color: "#025194",
                border: "1px solid rgb(113 158 196);",
              }}
            >
              <HiSparkles />
              Pakistan's Smartest Car Marketplace
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight"
            >
              Drive Your
              <br />
              <span className="shimmer-text">Dream Car</span>
              <br />
              <span style={{ color: "rgba(147,197,253,0.8)" }}>Forward.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 text-base md:text-lg leading-relaxed max-w-md"
              style={{ color: "rgba(147,197,253,0.7)" }}
            >
              Buy, sell, and explore cars smarter. Verified listings, real
              market prices, and seamless deal-making — all in one app built for
              Pakistan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(255,215,0,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-sm transition-all duration-200 shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, #025194 0%, #68a4d7 100%)",
                  color: "#010f1f",
                }}
              >
                <FaGooglePlay size={18} />
                <div className="text-left">
                  <div className="text-[9px] opacity-60 font-normal leading-none">
                    Download on
                  </div>
                  <div className="leading-none mt-0.5">Google Play</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-sm transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <FaApple size={20} />
                <div className="text-left">
                  <div className="text-[9px] opacity-60 font-normal leading-none">
                    Download on
                  </div>
                  <div className="leading-none mt-0.5">App Store</div>
                </div>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2.5">
                {["AH", "SB", "MK", "FR"].map((init, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: ["#025194", "#0369a1", "#0ea5e9", "#38bdf8"][
                        i
                      ],
                      zIndex: 4 - i,
                    }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <BsFillStarFill
                      key={i}
                      size={11}
                      className="text-[#68a4d7]"
                    />
                  ))}
                  <span className="text-white text-xs font-bold ml-1">4.8</span>
                </div>
                <p
                  style={{ color: "rgba(147,197,253,0.6)" }}
                  className="text-xs"
                >
                  <span className="text-white font-semibold">200,000+</span>{" "}
                  users trust The Steering
                </p>
              </div>
            </motion.div>
          </div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-[290px] md:w-[340px]">
              {/* Glow beneath phone */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-30 blur-3xl"
                style={{
                  background: "radial-gradient(ellipse, #025194, transparent)",
                }}
              />

              {/* Phone */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="relative w-full"
              >
                <div
                  className="w-full aspect-[9/19.5] rounded-[3.5rem] overflow-hidden relative shadow-2xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #011a35 0%, #022d5c 100%)",
                    border: "8px solid rgba(255,255,255,0.12)",
                    boxShadow:
                      "0 40px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black/60 z-10" />

                  {/* Status bar */}
                  <div className="flex justify-between items-center px-5 pt-6 pb-2">
                    <span className="text-white/60 text-[9px] font-semibold">
                      9:41
                    </span>
                    <div className="flex gap-1 items-center">
                      <div className="w-3 h-2 border border-white/40 rounded-[2px] relative">
                        <div className="absolute inset-[2px] right-auto w-[60%] bg-green-400 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 flex flex-col gap-2.5 h-full pb-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <div className="text-white font-black text-base">
                          The Steering
                        </div>
                        <div className="text-[#68a4d7] text-[9px] font-semibold">
                          Find Your Perfect Car
                        </div>
                      </div>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: "#81a9cb",
                          color: "#025194",
                        }}
                      >
                        <FiUser size={14} />
                      </div>
                    </div>

                    {/* Search bar */}
                    <div
                      className="flex items-center gap-2 rounded-xl px-3 py-2.5"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <FiSearch size={12} className="text-[#68a4d7]" />
                      <div className="text-white/40 text-[10px]">
                        Search make, model, city...
                      </div>
                    </div>

                    {/* Filter chips */}
                    <div className="flex gap-1.5 overflow-hidden">
                      {["All", "Sedan", "SUV", "Hatchback"].map((c, i) => (
                        <div
                          key={c}
                          className="px-2.5 py-1 rounded-full text-[8px] font-semibold whitespace-nowrap"
                          style={{
                            background:
                              i === 0 ? "#025194" : "rgba(255,255,255,0.06)",
                            color:
                              i === 0 ? "#010f1f" : "rgba(255,255,255,0.6)",
                          }}
                        >
                          {c}
                        </div>
                      ))}
                    </div>

                    {/* Car listings */}
                    {[
                      {
                        name: "Toyota Corolla 2022",
                        price: "Rs. 62L",
                        tag: "Verified",
                        tagColor: "#16a34a",
                        km: "45,000 km",
                      },
                      {
                        name: "Honda Civic 2023",
                        price: "Rs. 88L",
                        tag: "New",
                        tagColor: "#025194",
                        km: "12,000 km",
                      },
                      {
                        name: "Suzuki Swift 2021",
                        price: "Rs. 28L",
                        tag: "Hot Deal",
                        tagColor: "#dc2626",
                        km: "60,000 km",
                      },
                    ].map((car, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 + i * 0.15 }}
                        className="rounded-xl p-2.5 flex gap-2.5 items-center"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(2,81,148,0.3)" }}
                        >
                          <RiCarLine size={18} className="text-blue-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-[9px] font-bold truncate">
                            {car.name}
                          </div>
                          <div className="text-[8px] text-blue-300 flex items-center gap-1">
                            <MdSpeed size={8} />
                            {car.km}
                          </div>
                          <div className="text-[#68a4d7] text-[10px] font-black mt-0.5">
                            {car.price}
                          </div>
                        </div>
                        <div
                          className="text-[7px] px-2 py-0.5 rounded-full font-bold flex-shrink-0"
                          style={{ background: car.tagColor, color: "#fff" }}
                        >
                          {car.tag}
                        </div>
                      </motion.div>
                    ))}

                    {/* Bottom nav */}
                    <div
                      className="mt-auto flex justify-around py-3 border-t"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      {[FiList, FiSearch, FiBarChart2, FiUser].map(
                        (Icon, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-center gap-0.5"
                          >
                            <Icon
                              size={16}
                              style={{
                                color:
                                  i === 0 ? "#025194" : "rgba(255,255,255,0.3)",
                              }}
                            />
                            <div
                              className="w-1 h-1 rounded-full"
                              style={{
                                background: i === 0 ? "#025194" : "transparent",
                              }}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="float absolute -left-8 top-24 px-4 py-3 rounded-2xl shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #025194, #68a4d7)",
                  minWidth: "140px",
                }}
              >
                <div className="flex items-center gap-2">
                  <BsCheckCircleFill className="text-green-700" size={14} />
                  <div className="text-[#010f1f] text-xs font-bold">
                    Verified Seller
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <BsFillStarFill
                      key={i}
                      size={8}
                      className="text-amber-700"
                    />
                  ))}
                  <span className="text-[10px] text-amber-800 font-semibold ml-0.5">
                    5.0
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="float2 absolute -right-8 top-1/2 px-4 py-3 rounded-2xl shadow-2xl"
                style={{
                  background: "rgba(1,15,31,0.95)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <RiCarLine className="text-[#68a4d7]" size={14} />
                  <div className="text-white text-xs font-bold">50K+ Cars</div>
                </div>
                <div className="text-blue-300 text-[9px] mt-0.5">
                  Listed today
                </div>
              </motion.div>

              <motion.div
                className="float absolute -right-5 bottom-20 px-4 py-3 rounded-2xl shadow-2xl"
                style={{ background: "#16a34a", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-1.5">
                  <BsLightningChargeFill className="text-white" size={12} />
                  <div className="text-white text-xs font-bold">
                    Sold in 3 days!
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="text-blue-400/60 text-[10px] tracking-widest uppercase font-semibold">
            Scroll
          </div>
          <div className="w-5 h-8 rounded-full border border-blue-400/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[#68a4d7] animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAND ── */}
      <section
        ref={statsRef}
        className="py-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #010f1f 0%, #022d5c 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #025194 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10">
          {STATS.map((s, i) => (
            <motion.div key={i}>
              <StatCard
                value={s.value}
                label={s.label}
                icon={s.icon}
                inView={statsInView}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section
        id="features"
        className="py-28 px-6 bg-white relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.025]"
          style={{
            background: "radial-gradient(circle, #025194, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-5 tracking-widest uppercase"
              style={{ background: "#e8f0ff", color: "#025194" }}
            >
              <BsLightningChargeFill />
              Why The Steering
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
              style={{ color: "#010f1f" }}
            >
              Everything You Need
              <br />
              <span
                style={{
                  color: "#025194",
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                to Make the Right Move
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Built with cutting-edge technology and deep local market knowledge
              — The Steering is the tool serious buyers and sellers trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                whileHover={{ y: -8, scale: 1.01 }}
                className="card-shine p-8 rounded-3xl border transition-all duration-400 group cursor-default relative overflow-hidden"
                style={{ background: "#fafbff", border: "1px solid #eef0f8" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: f.bg }}
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: f.bg, color: f.color }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-2.5 transition-colors duration-300"
                    style={{ color: "#010f1f" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                  <div
                    className="mt-6 flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ color: f.color }}
                  >
                    Learn more <FiArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        className="py-28 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f4f8ff 0%, #eef4ff 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-5 tracking-widest uppercase"
              style={{ background: "#025194", color: "#025194" }}
            >
              <RiSearchEyeLine />
              How It Works
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black"
              style={{ color: "#010f1f" }}
            >
              Simple as <span style={{ color: "#025194" }}>1, 2, 3</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-[52px] left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-0.5"
              style={{
                background:
                  "linear-gradient(90deg, #025194 0%, #025194 50%, #025194 100%)",
              }}
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-800" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-800" />
            </div>

            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.15)}
                className="text-center relative group"
              >
                <div className="relative w-28 h-28 mx-auto mb-7">
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ border: "2px solid #025194" }}
                  >
                    <div
                      className="absolute inset-0 rounded-full pulse-ring"
                      style={{ border: "2px solid rgba(255,215,0,0.3)" }}
                    />
                  </div>
                  <div
                    className="w-full h-full rounded-full flex flex-col items-center justify-center relative z-10 shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #025194, #011a35)",
                      border: "3px solid #748796",
                      boxShadow: "0 20px 40px rgba(2,81,148,0.25)",
                    }}
                  >
                    <div className="text-[#68a4d7]">{s.icon}</div>
                    <div className="text-[#68a4d7]/50 text-[9px] font-black mt-0.5 tracking-widest">
                      {s.num}
                    </div>
                  </div>
                </div>
                <h3
                  className="text-lg font-black mb-3"
                  style={{ color: "#010f1f" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA below steps */}
          <motion.div {...fadeUp(0.4)} className="mt-16 text-center">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 20px 50px rgba(2,81,148,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #025194, #0369a1)",
                boxShadow: "0 10px 30px rgba(2,81,148,0.2)",
              }}
            >
              <FaGooglePlay size={16} />
              Start for Free — Download Now
              <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-28 px-6 bg-white relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp()}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6 tracking-widest uppercase"
              style={{ background: "#e8f0ff", color: "#025194" }}
            >
              <HiOutlineBadgeCheck />
              About Us
            </div>
            <h2
              className="text-4xl md:text-5xl font-black leading-tight"
              style={{ color: "#010f1f" }}
            >
              Pakistan's Most
              <br />
              Trusted Car
              <br />
              <span style={{ color: "#025194" }}>Market</span>
              <span className="text-gradient">place</span>
            </h2>
            <p className="mt-6 text-gray-500 leading-relaxed text-[15px]">
              The Steering was built for Pakistanis who deserve a better car
              buying experience. No more shady deals, outdated listings, or
              hidden fees. We combine cutting-edge technology with deep local
              market knowledge to give you the most transparent, efficient, and
              trustworthy platform in the country.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed text-[15px]">
              Whether you're buying your first car or selling your fifth, The
              Steering puts the power back in your hands.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                {
                  label: "Verified Listings",
                  icon: <FaCheckCircle size={12} />,
                },
                {
                  label: "Car Inspection",
                  icon: <FaClipboardCheck size={12} />,
                },
                {
                  label: "Price Comparison",
                  icon: <BsGraphUp size={12} />,
                },
                {
                  label: "Secure Transactions",
                  icon: <FaShieldAlt size={12} />,
                },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ background: "#e8f0ff", color: "#025194" }}
                >
                  {tag.icon}
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
            {ABOUT_CARDS.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -4 }}
                className="card-shine p-7 rounded-3xl flex flex-col gap-3 cursor-default"
                style={{
                  background: item.dark
                    ? "linear-gradient(135deg, #025194, #011a35)"
                    : "linear-gradient(135deg, #f0f6ff, #e8f0ff)",
                  boxShadow: item.dark
                    ? "0 20px 40px rgba(2,81,148,0.2)"
                    : "0 8px 24px rgba(2,81,148,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: item.dark ? "#81a9cb" : "rgba(2,81,148,0.1)",
                    color: item.dark ? "#025194" : "#025194",
                  }}
                >
                  {item.icon}
                </div>
                <div
                  className="text-3xl font-black"
                  style={{ color: item.dark ? "#d8e3ec" : "#025194" }}
                >
                  {item.value}
                </div>
                <div
                  className="text-xs font-medium"
                  style={{
                    color: item.dark ? "#d8e3ec" : "#6b7280",
                  }}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f4f8ff 0%, #eef4ff 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #025194 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-5 tracking-widest uppercase"
              style={{ background: "#025194", color: "#025194" }}
            >
              <BsFillStarFill />
              Testimonials
            </div>
            <h2
              className="text-4xl md:text-5xl font-black"
              style={{ color: "#010f1f" }}
            >
              What Our Users Say
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-10 md:p-14 rounded-3xl shadow-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #025194 0%, #011a35 100%)",
                  boxShadow: "0 30px 80px rgba(2,81,148,0.3)",
                }}
              >
                {/* Background quote */}
                <div
                  className="absolute top-6 right-8 text-[120px] font-black leading-none select-none"
                  style={{ color: "rgba(255,215,0,0.06)" }}
                >
                  "
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(TESTIMONIALS[activeTestimonial].rating)].map(
                      (_, i) => (
                        <BsFillStarFill
                          key={i}
                          size={16}
                          className="text-[#68a4d7]"
                        />
                      ),
                    )}
                  </div>

                  <p className="text-white text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                    {TESTIMONIALS[activeTestimonial].text}
                  </p>

                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, #025194, #68a4d7)",
                          color: "#010f1f",
                        }}
                      >
                        {TESTIMONIALS[activeTestimonial].avatar}
                      </div>
                      <div>
                        <div className="text-white font-bold text-base">
                          {TESTIMONIALS[activeTestimonial].name}
                        </div>
                        <div
                          className="flex items-center gap-1 mt-0.5"
                          style={{ color: "rgba(147,197,253,0.7)" }}
                        >
                          <MdLocationOn size={12} />
                          <span className="text-sm">
                            {TESTIMONIALS[activeTestimonial].city}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                        onClick={() =>
                          setActiveTestimonial(
                            (p) =>
                              (p - 1 + TESTIMONIALS.length) %
                              TESTIMONIALS.length,
                          )
                        }
                      >
                        <FiChevronRight
                          size={16}
                          className="text-white rotate-180"
                        />
                      </div>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                        style={{
                          background: "#81a9cb",
                          color: "#025194",
                        }}
                        onClick={() =>
                          setActiveTestimonial(
                            (p) => (p + 1) % TESTIMONIALS.length,
                          )
                        }
                      >
                        <FiChevronRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2.5 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="transition-all duration-400"
                  style={{
                    width: i === activeTestimonial ? "32px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === activeTestimonial ? "#025194" : "#c7d8ed",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section
        id="download"
        className="py-28 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #010a18 0%, #011a35 40%, #022d5c 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #025194 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div
          className="absolute top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #025194, transparent)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #0369a1, transparent)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div {...fadeUp()}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8 tracking-widest uppercase"
              style={{
                background: "#81a9cb",
                color: "#025194",
                border: "1px solid #81a9cb",
              }}
            >
              <FiDownload />
              Available Now — Free
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Download The Steering
              <br />
              <span className="shimmer-text">Start Your Journey</span>
            </h2>

            <p
              className="mt-6 text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(147,197,253,0.6)" }}
            >
              Join over 200,000 Pakistanis who already use The Steering to buy
              and sell cars smarter, safer, and faster.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 60px rgba(255,215,0,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-5 rounded-2xl font-semibold transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #025194, #68a4d7)",
                  color: "#010f1f",
                  minWidth: "220px",
                }}
              >
                <FaGooglePlay size={24} />
                <div className="text-left">
                  <div className="text-xs opacity-60 font-normal leading-none">
                    Download on
                  </div>
                  <div className="text-lg font-black leading-tight mt-0.5">
                    Google Play
                  </div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 60px rgba(255,255,255,0.1)",
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 px-8 py-5 rounded-2xl font-semibold transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  minWidth: "220px",
                }}
              >
                <FaApple size={26} />
                <div className="text-left">
                  <div className="text-xs opacity-60 font-normal leading-none">
                    Download on
                  </div>
                  <div className="text-lg font-black leading-tight mt-0.5">
                    App Store
                  </div>
                </div>
              </motion.button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
              {[
                { icon: <FiDownload size={14} />, text: "Free to download" },
                { icon: <FaShieldAlt size={14} />, text: "No hidden charges" },
                { icon: <BsFillStarFill size={14} />, text: "4.8★ rated" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2"
                  style={{ color: "rgba(147,197,253,0.6)" }}
                >
                  <span className="text-[#68a4d7]">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#010a18",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
        className="text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
            <div className="md:col-span-1 md:justify-self-end">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #025194, #68a4d7)",
                    color: "#010f1f",
                  }}
                >
                  <MdDirectionsCar size={20} />
                </div>
                <div>
                  <div className="font-black text-xl">The Steering</div>
                  <div className="text-[#68a4d7] text-[9px] font-semibold tracking-widest uppercase">
                    Pakistan's #1 Car App
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Pakistan's smartest platform for buying and selling cars. Built
                with love, trust, and technology.
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  FiTwitter,
                  FiInstagram,
                  FiFacebook,
                  FiLinkedin,
                  FaWhatsapp,
                ].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.15, y: -2 }}
                    href="#"
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── Download App Column ── */}
            <div>
              <h4 className="font-bold text-xs text-gray-400 mb-5 tracking-widest uppercase">
                Download App
              </h4>
              <div className="flex flex-col gap-3">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="#"
                  className="flex w-[50%] items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200"
                  style={{
                    background: "linear-gradient(135deg, #025194, #68a4d7)",
                    color: "#010f1f",
                    minWidth: "180px",
                  }}
                >
                  <FaGooglePlay size={15} />
                  <span className="text-sm font-medium">Google Play</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  href="#"
                  className="flex items-center w-[50%] gap-2 px-4 py-3 rounded-xl transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    minWidth: "180px",
                  }}
                >
                  <FaApple size={15} />
                  <span className="text-sm font-medium">App Store</span>
                </motion.a>
              </div>
            </div>

            {[
              {
                title: "Support",
                links: [
                  {
                    label: "Help Center",
                    icon: <RiCustomerServiceLine size={12} />,
                    link: "*",
                  },
                  { label: "Contact Us", icon: <FiPhone size={12} />, link: "*" },
                  { label: "Privacy Policy", icon: <FaShieldAlt size={12} />, link: "/privacy" },
                  { label: "Terms & Conditions", icon: <FiList size={12} />, link: "/terms" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-xs text-gray-400 mb-5 tracking-widest uppercase">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.link}
                        className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#68a4d7] transition-colors group"
                      >
                        <span className="opacity-40 group-hover:opacity-100 transition-opacity">
                          {l.icon}
                        </span>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-600 text-sm">
              © 2026 The Steering. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <p className="text-gray-700 text-xs">
                Made with ❤️ in Pakistan 🇵🇰
              </p>
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-gray-500 text-xs">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
