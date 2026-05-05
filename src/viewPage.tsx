const { BACKEND_URL } = import.meta.env;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone, FiShare2, FiHeart, FiChevronLeft, FiChevronRight,
  FiCheck, FiAlertCircle, FiClock, FiUser, FiShield,
  FiBarChart2, FiList, FiEye, FiCalendar, FiInfo,
  FiArrowLeft, FiDownload
} from "react-icons/fi";
import { FaGooglePlay, FaShieldAlt, FaWhatsapp } from "react-icons/fa";
import { MdVerified, MdDirectionsCar, MdLocationOn, MdOutlineCategory } from "react-icons/md";
import { RiCarLine, RiShieldCheckLine } from "react-icons/ri";
import {
  BsGraphUp, BsFillStarFill, BsChatDotsFill,
  BsLightningChargeFill, BsPalette, BsSpeedometer2, BsFuelPump
} from "react-icons/bs";
import { IoCarSportOutline, IoConstructOutline } from "react-icons/io5";
import { GiCarWheel, GiGearStickPattern } from "react-icons/gi";
import { TbEngine, TbManualGearbox } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { footer } from "framer-motion/m";
// ── CONFIG ────────────────────────────────────────────────────────────────────

const AUTH_TOKEN = ""; // paste your Bearer token here if needed

const RATING_CATEGORIES: { label: string; key: string; icon: React.ReactNode }[] = [
    { label: "Overall",    key: "overall_rating",    icon: <BsFillStarFill /> },
  { label: "Exterior",   key: "exterior_rating",   icon: <IoCarSportOutline /> },
  { label: "Interior",   key: "interior_rating",   icon: <GiGearStickPattern /> },
  { label: "Engine",     key: "engine_rating",     icon: <TbEngine /> },
  { label: "Suspension", key: "suspension_rating", icon: <GiCarWheel /> },
];

const cap = (s: string | null | undefined) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "N/A");

const formatPrice = (p: string | number | null | undefined) => {
  if (!p) return "N/A";
  const n = parseFloat(String(p));
  if (n >= 10000000) return `Rs. ${(n / 10000000).toFixed(1)} Crore`;
  if (n >= 100000)   return `Rs. ${(n / 100000).toFixed(1)} Lac`;
  return `Rs. ${n.toLocaleString()}`;
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

function RatingBar({ label, value, icon }: { label: string; value: string | number; icon: React.ReactNode }) {
    const pct   = (parseFloat(String(value)) / 10) * 100;
    const color = pct >= 80 ? "#16a34a" : pct >= 60 ? "#d97706" : "#dc2626";
    return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#6b7280" }}>
          <span style={{ color: "#025194" }}>{icon}</span> {label}
        </div>
        <span className="text-sm font-black" style={{ color }}>
          {value}<span className="text-xs font-normal text-gray-400">/10</span>
        </span>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: "#e8f0ff" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          />
      </div>
    </div>
  );
}

function Skel({ h = "120px", r = "16px" }) {
  return <div style={{ height: h, borderRadius: r, background: "#e8f0ff", animation: "pulse 1.5s ease-in-out infinite" }} />;
}

export default function ViewAdPage() {
    const { id } = useParams();
    
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const AD_ID    = id; // use the ID from the URL
    const API_URL  = `${BACKEND_URL}/${AD_ID}`;
    const [ad, setAd] = useState<any>(null);
  const [loading, setLoading]     = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [saved, setSaved]         = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    fetch( API_URL, )
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}: ${r.statusText}`); return r.json(); })
      .then((json) => { setAd(json?.data ?? json); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);

  const tabs = [
    { id: "overview",   label: "Overview",         icon: <FiList size={14} /> },
    { id: "inspection", label: "Inspection Report", icon: <FiShield size={14} /> },
    { id: "features",   label: "Features",          icon: <BsLightningChargeFill size={14} /> },
  ];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white text-gray-800 overflow-x-hidden min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        *{box-sizing:border-box}html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#010f1f}::-webkit-scrollbar-thumb{background:#025194;border-radius:3px}
        .tab-on{background:linear-gradient(135deg,#025194,#0369a1);color:#fff;box-shadow:0 8px 20px rgba(2,81,148,.25)}
        .tab-off{background:#f0f6ff;color:#6b7280}
        .chov:hover{transform:translateY(-4px);box-shadow:0 20px 40px rgba(2,81,148,.1)}
        .chov{transition:all .3s cubic-bezier(.16,1,.3,1)}
        .noise{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;opacity:.015;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
        @keyframes spin{to{transform:rotate(360deg)}}
        .spin{animation:spin 1s linear infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
      `}</style>
      <div className="noise" />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(1,15,31,.96)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        <div className="flex items-center gap-3">
       
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
              style={{
              background: "linear-gradient(155deg, #025194, #68a4d7)",
              color: "#010f1f",
            }}>
              <MdDirectionsCar size={20} />
            </div>
            <div>
              <span className="text-white font-black text-lg tracking-tight">The Steering</span>
              <div className="text-[#68a4d7] text-[9px] font-semibold tracking-[0.2em] uppercase -mt-1">
Pakistan's #1 Car App</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
         <button
  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-105 transition-transform"
  style={{ background: "linear-gradient(155deg, #025194, #68a4d7)", color: "#010f1f" }}>
  <FaGooglePlay size={13} /> Get App
</button>
        </div>
      </nav>

      {/* LOADING */}
      {loading && (
        <div className="pt-16">
          <div className="w-full h-[520px] flex flex-col items-center justify-center gap-4" style={{ background: "#010f1f" }}>
            <div className="w-12 h-12 rounded-full border-4 spin" style={{ borderColor: "rgba(255,215,0,.2)", borderTopColor: "rgb(211 242 255)" }} />
            <div className="text-blue-200 text-sm font-medium">Fetching ad from API...</div>
            <div className="text-blue-400 text-xs opacity-60">{API_URL}</div>
          </div>
          <div className="max-w-7xl mx-auto px-5 md:px-10 py-8 flex flex-col gap-5">
            <Skel h="160px" /><Skel h="60px" /><Skel h="300px" />
          </div>
        </div>
      )}

      {/* ERROR */}
      {error && !loading && (
        <div className="pt-28 flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
            style={{ background: "linear-gradient(135deg,#fef2f2,#fee2e2)" }}>
            <FiAlertCircle size={36} style={{ color: "#dc2626" }} />
          </div>
          <h2 className="text-2xl font-black mb-2" style={{ color: "#010f1f" }}>Could Not Load Ad</h2>
          <p className="text-gray-500 text-sm max-w-md mb-2">{error}</p>
          <p className="text-blue-400 text-xs max-w-md mb-6">
            If the API requires authentication, paste your Bearer token in the <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">AUTH_TOKEN</code> variable at the top of this file.
          </p>
          <button onClick={() => { setLoading(true); setError(null); }}
            className="px-6 py-3 rounded-2xl font-bold text-sm text-white"
            style={{ background: "linear-gradient(135deg,#025194,#0369a1)" }}>
            Retry
          </button>
        </div>
      )}

      {/* DATA */}
      {!loading && !error && ad && (() => {
        const report = ad.inspection?.report;
        const imgs   = Array.isArray(ad.images) && ad.images.length ? ad.images : [];
        const SPECS  = [
          { icon: <BsSpeedometer2 size={20}/>, label: "Mileage",      value: ad.mileage ? `${Number(ad.mileage).toLocaleString()} km` : "N/A" },
          { icon: <TbManualGearbox size={20}/>,label: "Transmission",  value: cap(ad.transmission) },
          { icon: <BsFuelPump size={20}/>,     label: "Fuel Type",     value: cap(ad.fuel_type) },
          { icon: <TbEngine size={20}/>,       label: "Engine",        value: ad.engine_capacity ? `${ad.engine_capacity} cc` : "N/A" },
          { icon: <BsPalette size={20}/>,      label: "Color",         value: ad.body_color || "N/A" },
          { icon: <MdOutlineCategory size={20}/>,label:"Body Type",    value: cap(ad.body_type) },
          { icon: <IoConstructOutline size={20}/>,label:"Assembly",    value: cap(ad.assembled) },
          { icon: <FiUser size={20}/>,         label: "Seating",       value: ad.car_variant?.sitting_capacity ? `${ad.car_variant.sitting_capacity} Persons` : "N/A" },
        ];

        return (
          <>
            {/* GALLERY */}
            <div className="pt-16">
              <div className="relative w-full" style={{ background: "#010f1f", height: "520px" }}>
                {imgs[activeImg] && (
                  <div className="absolute inset-0 overflow-hidden">
                    <img src={imgs[activeImg]} alt="" className="w-full h-full scale-110 opacity-20"
                      style={{ objectFit: "cover", filter: "blur(20px)" }} />
                  </div>
                )}
                <AnimatePresence mode="wait">
                  {imgs.length > 0 ? (
                    <motion.img key={activeImg} src={imgs[activeImg]} alt="car"
                      initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full" style={{ objectFit: "contain", padding: "40px" }} />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MdDirectionsCar size={80} style={{ color: "rgba(255,255,255,.1)" }} />
                    </div>
                  )}
                </AnimatePresence>

                {imgs.length > 1 && (
                  <>
                    <button onClick={() => setActiveImg((p) => (p - 1 + imgs.length) % imgs.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                      style={{ background: "rgba(0,0,0,.5)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.15)", color: "#fff" }}>
                      <FiChevronLeft size={20} />
                    </button>
                    <button onClick={() => setActiveImg((p) => (p + 1) % imgs.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition-all"
                      style={{ background: "rgba(0,0,0,.5)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,.15)", color: "#fff" }}>
                      <FiChevronRight size={20} />
                    </button>
                  </>
                )}

                {imgs.length > 0 && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(0,0,0,.6)", color: "#fff", backdropFilter: "blur(10px)" }}>
                    <FiEye className="inline mr-1.5" size={11} />{activeImg + 1} / {imgs.length}
                  </div>
                )}

                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {ad.inspection?.status === "COMPLETED" && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: "linear-gradient(135deg,#16a34a,#15803d)", color: "#fff" }}>
                      <RiShieldCheckLine size={12} /> Inspected
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{ background: "rgba(2,81,148,.9)", color: "rgb(211 242 255)", backdropFilter: "blur(10px)" }}>
                    {ad.ad_type === "dealer" ? <MdVerified size={12} /> : <FiUser size={12} />}
                    {cap(ad.ad_type)}
                  </div>
                  {ad.is_featured && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                      style={{
              background: "linear-gradient(155deg, #025194, #68a4d7)",
              color: "#010f1f",
            }}>
                      <BsFillStarFill size={10} /> Featured
                    </div>
                  )}
                </div>

                {imgs.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {imgs.map((img: string, i: number) => (
                      <button key={i} onClick={() => setActiveImg(i)}
                        className="overflow-hidden transition-all duration-300"
                        style={{ width: i === activeImg ? "64px" : "48px", height: "48px", borderRadius: "10px",
                          border: i === activeImg ? "2.5px solid rgb(211 242 255)" : "2px solid rgba(255,255,255,.2)",
                          boxShadow: i === activeImg ? "0 0 12px rgba(255,215,0,.4)" : "none",
                          transform: i === activeImg ? "scale(1.05)" : "scale(1)" }}>
                        <img src={img} alt="" className="w-full h-full" style={{ objectFit: "cover" }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">
              <div className="grid lg:grid-cols-3 gap-8 items-start">

                {/* LEFT */}
                <div className="lg:col-span-2 flex flex-col gap-7">

                  {/* Title card */}
                  <motion.div {...fadeUp()} className="p-7 rounded-3xl"
                    style={{ background: "linear-gradient(135deg,#f4f8ff,#eef4ff)", border: "1px solid #dce8ff" }}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                            style={{ background: "#e8f0ff", color: "#025194" }}>
                            <MdDirectionsCar size={12} />
                            {ad.car_brand?.translation?.en || cap(ad.car_brand?.name)}{" "}
                            {ad.car_model?.translation?.en || cap(ad.car_model?.name)}
                          </div>
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ background: ad.status === "active" ? "#dcfce7" : "#fef2f2", color: ad.status === "active" ? "#16a34a" : "#dc2626" }}>
                            <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                              style={{ background: ad.status === "active" ? "#16a34a" : "#dc2626" }} />
                            {cap(ad.status)}
                          </div>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black leading-tight capitalize" style={{ color: "#010f1f" }}>
                          {ad.car_brand?.translation?.en || cap(ad.car_brand?.name)}{" "}
                          {ad.car_model?.translation?.en || cap(ad.car_model?.name)}{" "}
                          <span style={{ color: "#025194" }}>
                            {ad.car_variant?.translation?.en || cap(ad.car_variant?.name)}
                          </span>{" "}
                          <span className="text-2xl font-bold text-gray-400">{ad.car_model_year}</span>
                        </h1>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <div className="flex items-center gap-1 text-sm" style={{ color: "#6b7280" }}>
                            <MdLocationOn size={15} style={{ color: "#025194" }} />
                            {[ad.area?.name, ad.city?.name, ad.city?.province].filter(Boolean).join(", ")}
                          </div>
                          <span className="text-gray-300">•</span>
                          <div className="flex items-center gap-1 text-sm" style={{ color: "#6b7280" }}>
                            <FiCalendar size={13} style={{ color: "#025194" }} />
                            {new Date(ad.created_at).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric" })}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl md:text-4xl font-black" style={{ color: "#025194" }}>{formatPrice(ad.price)}</div>
                        <div className="text-xs text-gray-400 mt-1">Negotiable</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* TABS */}
                  <motion.div {...fadeUp(0.05)}>
                    <div className="flex gap-2 p-1.5 rounded-2xl mb-6" style={{ background: "#f0f6ff" }}>
                      {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === tab.id ? "tab-on" : "tab-off"}`}>
                          {tab.icon} <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      {/* OVERVIEW */}
                      {activeTab === "overview" && (
                        <motion.div key="ov" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="flex flex-col gap-6">

                          <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                            <h3 className="text-base font-black mb-5 flex items-center gap-2" style={{ color: "#010f1f" }}>
                              <RiCarLine style={{ color: "#025194" }} /> Specifications
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {SPECS.map((s, i) => (
                                <motion.div key={i} whileHover={{ y: -3, scale: 1.02 }}
                                  className="p-4 rounded-2xl flex flex-col items-center gap-2 text-center cursor-default"
                                  style={{ background: "#f0f6ff", border: "1px solid #dce8ff" }}>
                                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{ background: "linear-gradient(135deg,#e8f0ff,#d0e3ff)", color: "#025194" }}>{s.icon}</div>
                                  <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">{s.label}</div>
                                  <div className="text-sm font-bold capitalize" style={{ color: "#010f1f" }}>{s.value}</div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {ad.description && (
                            <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                              <h3 className="text-base font-black mb-3 flex items-center gap-2" style={{ color: "#010f1f" }}>
                                <FiInfo style={{ color: "#025194" }} /> Description
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-sm">{ad.description}</p>
                            </div>
                          )}

                          {report && (
                            <div className="p-6 rounded-3xl relative overflow-hidden"
                              style={{ background: "linear-gradient(135deg,#025194,#011a35)" }}>
                              <div className="absolute top-0 right-0 w-40 h-40 opacity-10"
                                style={{ background: "radial-gradient(circle,rgb(211 242 255),transparent)", transform: "translate(20%,-20%)" }} />
                              <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                  <RiShieldCheckLine size={20} className="text-blue-400" />
                                  <span className="text-white font-black text-base">Inspection Report</span>
                                </div>
                                <div className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                                  style={{ background: "rgba(22,163,74,.2)", color: "#4ade80", border: "1px solid rgba(22,163,74,.3)" }}>
                                  <FiCheck size={11} /> {ad.inspection.status}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 mb-4">
                                <div className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center flex-shrink-0"
                                  style={{ background: "rgba(255,215,0,.12)", border: "2px solid rgba(255,215,0,.3)" }}>
                                  <span className="text-3xl font-black text-blue-400">{report.overall_rating}</span>
                                  <span className="text-[9px] text-blue-400/60 font-semibold">/10</span>
                                </div>
                                <div>
                                  <div className="text-white font-semibold text-sm">{report.summary}</div>
                                  <div className="text-blue-200 text-xs mt-1">Inspected by The Steering Team</div>
                                  <button onClick={() => setActiveTab("inspection")}
                                    className="mt-2 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                    style={{ color: "rgb(211 242 255)" }}>
                                    View Full Report <FiChevronRight size={12} />
                                  </button>
                                </div>
                              </div>
                              <div className="grid grid-cols-4 gap-2">
                                {RATING_CATEGORIES.slice(1).map((r) => (
                                  <div key={r.key} className="text-center p-2 rounded-xl" style={{ background: "rgba(255,255,255,.06)" }}>
                                    <div className="text-xs text-blue-300 mb-1">{r.label}</div>
                                    <div className="text-base font-black text-blue-400">{report[r.key]}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* INSPECTION */}
                      {activeTab === "inspection" && (
                        <motion.div key="ins" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} className="flex flex-col gap-6">
                          {!report ? (
                            <div className="p-12 rounded-3xl text-center" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                              <RiShieldCheckLine size={48} style={{ color: "#dce8ff", margin: "0 auto 12px" }} />
                              <p className="text-gray-400 font-semibold">No inspection report available</p>
                            </div>
                          ) : (
                            <>
                              <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                                <h3 className="text-base font-black mb-5 flex items-center gap-2" style={{ color: "#010f1f" }}>
                                  <BsFillStarFill style={{ color: "rgb(211 242 255)" }} /> Ratings Breakdown
                                </h3>
                                <div className="flex flex-col gap-4">
                                  {RATING_CATEGORIES.map((r) => <RatingBar key={r.key} label={r.label} value={report[r.key]} icon={r.icon} />)}
                                </div>
                              </div>

                              {report.car_specs && (
                                <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                                  <h3 className="text-base font-black mb-4 flex items-center gap-2" style={{ color: "#010f1f" }}>
                                    <TbEngine style={{ color: "#025194" }} /> Verified Car Specs
                                  </h3>
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {Object.entries(report.car_specs).filter(([k]) => k !== "car_image").map(([key, val]) => (
                                      <div key={key} className="p-3 rounded-xl" style={{ background: "#f0f6ff", border: "1px solid #dce8ff" }}>
                                        <div className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold mb-1">{key.replace(/_/g, " ")}</div>
                                        <div className="text-sm font-bold capitalize" style={{ color: "#010f1f" }}>{String(val)}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {report.tyres_wheels && (
                                <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                                  <h3 className="text-base font-black mb-4 flex items-center gap-2" style={{ color: "#010f1f" }}>
                                    <GiCarWheel style={{ color: "#025194" }} /> Tyres & Wheels
                                  </h3>
                                  <div className="grid grid-cols-2 gap-3 mb-4">
                                    {[["Rims Type", report.tyres_wheels.rims_type], ["Tyre Size", report.tyres_wheels.tyre_size]].map(([l, v]) => (
                                      <div key={l} className="p-3 rounded-xl" style={{ background: "#f0f6ff", border: "1px solid #dce8ff" }}>
                                        <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">{l}</div>
                                        <div className="font-bold" style={{ color: "#025194" }}>{v}</div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="grid grid-cols-2 gap-3">
                                    {[
                                      { pos:"Front Left",  brand:report.tyres_wheels.front_left_brand,  tread:report.tyres_wheels.front_left_tread },
                                      { pos:"Front Right", brand:report.tyres_wheels.front_right_brand, tread:report.tyres_wheels.front_right_tread },
                                      { pos:"Rear Left",   brand:report.tyres_wheels.rear_left_brand,   tread:report.tyres_wheels.rear_left_tread },
                                      { pos:"Rear Right",  brand:report.tyres_wheels.rear_right_brand,  tread:report.tyres_wheels.rear_right_tread },
                                    ].map((t) => (
                                      <div key={t.pos} className="p-3 rounded-xl" style={{ background: "#f0f6ff", border: "1px solid #dce8ff" }}>
                                        <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">{t.pos}</div>
                                        <div className="font-bold text-sm" style={{ color: "#010f1f" }}>{t.brand}</div>
                                        <div className="flex items-center gap-1 mt-1">
                                          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "#dce8ff" }}>
                                            <div className="h-full rounded-full" style={{ width:`${(t.tread/10)*100}%`, background: t.tread>5?"#16a34a":"#d97706" }} />
                                          </div>
                                          <span className="text-xs font-semibold" style={{ color:t.tread>5?"#16a34a":"#d97706" }}>{t.tread}mm</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {report.paint_thickness && (
                                <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                                  <h3 className="text-base font-black mb-4 flex items-center gap-2" style={{ color: "#010f1f" }}>
                                    <BsPalette style={{ color: "#025194" }} /> Paint Thickness (mm)
                                  </h3>
                                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
                                    {Object.entries(report.paint_thickness).map(([key, val]) => (
                                      <div key={key} className="p-3 rounded-xl text-center" style={{ background: "#f0f6ff", border: "1px solid #dce8ff" }}>
                                        <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">{key.replace(/_/g," ")}</div>
                                        <div className="text-lg font-black" style={{ color: "#025194" }}>{String(val)}</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {report.photos && (
                                <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                                  <h3 className="text-base font-black mb-4 flex items-center gap-2" style={{ color: "#010f1f" }}>
                                    <FiEye style={{ color: "#025194" }} /> Inspection Photos
                                  </h3>
                                  <div className="grid grid-cols-3 gap-3">
                                    {Object.entries(report.photos).map(([key, url]) => (
                                      <div key={key} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #dce8ff" }}>
                                        <div style={{ aspectRatio:"4/3" }}>
                                          <img src={url as string} alt={key} className="w-full h-full" style={{ objectFit:"cover" }} />
                                        </div>
                                        <div className="text-[9px] text-center py-1.5 font-semibold text-gray-500 capitalize bg-white">
                                          {key.replace(/_/g," ")}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </motion.div>
                      )}

                      {/* FEATURES */}
                      {activeTab === "features" && (
                        <motion.div key="ft" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
                          <div className="p-6 rounded-3xl" style={{ background: "#fafcff", border: "1px solid #eef0f8" }}>
                            <h3 className="text-base font-black mb-5 flex items-center gap-2" style={{ color: "#010f1f" }}>
                              <BsLightningChargeFill style={{ color: "rgb(211 242 255)" }} /> Car Features
                            </h3>
                            {ad.features?.length > 0 ? (
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {ad.features.map((f: { id: string; feature_type: string; translation: { en: string } | null; name: string }) => (
                                  <motion.div key={f.id} whileHover={{ y: -3, scale: 1.02 }}
                                    className="p-4 rounded-2xl flex items-center gap-3 chov cursor-default"
                                    style={{ background: "#f0f6ff", border: "1px solid #dce8ff" }}>
                                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                                      style={{ background:f.feature_type==="safety"?"#dcfce7":"#e8f0ff", color:f.feature_type==="safety"?"#16a34a":"#025194" }}>
                                      {f.feature_type==="safety" ? <FaShieldAlt size={14}/> : <BsLightningChargeFill size={14}/>}
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold capitalize" style={{ color: "#010f1f" }}>
                                        {f.translation?.en || cap(f.name)}
                                      </div>
                                      <div className="text-[9px] uppercase tracking-wide font-medium"
                                        style={{ color:f.feature_type==="safety"?"#16a34a":"#6b7280" }}>{f.feature_type}</div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-400 text-sm text-center py-8">No features listed.</p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="flex flex-col gap-5 lg:sticky lg:top-24">


                  {/* Seller */}
                  <motion.div {...fadeUp(0.15)} className="p-5 rounded-3xl chov"
                    style={{ background:"#fafcff", border:"1px solid #eef0f8" }}>
                    <h3 className="text-sm font-black mb-4 flex items-center gap-2" style={{ color:"#010f1f" }}>
                      <FiUser style={{ color:"#025194" }} /> Seller Info
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg"
                        style={{ background:"linear-gradient(135deg,#025194,#0369a1)", color:"rgb(211 242 255)" }}>
                        {(ad.user?.username || "?").charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-bold capitalize flex items-center gap-1.5" style={{ color:"#010f1f" }}>
                          {ad.user?.username}
                          {ad.user?.role === "showroom" && <MdVerified size={15} style={{ color:"#025194" }} />}
                        </div>
                        <div className="flex items-center gap-1 text-xs capitalize"
                          style={{ color:ad.user?.role==="showroom"?"#025194":"#6b7280" }}>
                          {ad.user?.role==="showroom" ? <MdVerified size={11}/> : <FiUser size={11}/>}
                          {ad.user?.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {ad.user?.last_seen && (
                        <div className="flex items-center gap-2 text-xs" style={{ color:"#6b7280" }}>
                          <FiClock size={12} style={{ color:"#025194" }} />
                          Last seen {new Date(ad.user.last_seen).toLocaleDateString()}
                        </div>
                      )}
                      {ad.user?.created_at && (
                        <div className="flex items-center gap-2 text-xs" style={{ color:"#6b7280" }}>
                          <FiCalendar size={12} style={{ color:"#025194" }} />
                          Member since {new Date(ad.user.created_at).toLocaleDateString("en-PK",{month:"short",year:"numeric"})}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Quick stats */}
                  <motion.div {...fadeUp(0.2)} className="p-5 rounded-3xl" style={{ background:"#fafcff", border:"1px solid #eef0f8" }}>
                    <h3 className="text-sm font-black mb-4 flex items-center gap-2" style={{ color:"#010f1f" }}>
                      <BsGraphUp style={{ color:"#025194" }} /> Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label:"Year",     value:ad.car_model_year,                             icon:<FiCalendar size={13}/> },
                        { label:"Engine",   value:ad.engine_capacity?`${ad.engine_capacity}cc`:"N/A", icon:<TbEngine size={13}/> },
                        { label:"Color",    value:ad.body_color||"N/A",                          icon:<BsPalette size={13}/> },
                        { label:"Assembly", value:cap(ad.assembled),                             icon:<IoConstructOutline size={13}/> },
                      ].map((s,i) => (
                        <div key={i} className="p-3 rounded-xl" style={{ background:"#f0f6ff", border:"1px solid #dce8ff" }}>
                          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-1 font-medium capitalize">
                            <span style={{ color:"#025194" }}>{s.icon}</span> {s.label}
                          </div>
                          <div className="font-bold text-sm capitalize" style={{ color:"#010f1f" }}>{s.value}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Safety */}
                  <motion.div {...fadeUp(0.25)} className="p-4 rounded-2xl flex gap-3"
                    style={{ background:"#fffbeb", border:"1px solid #fde68a" }}>
                    <FiAlertCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color:"#d97706" }} />
                    <div>
                      <div className="text-xs font-bold mb-0.5" style={{ color:"#92400e" }}>Safety Tip</div>
                      <div className="text-xs leading-relaxed" style={{ color:"#a16207" }}>
                        Always meet the seller in a public place and verify documents before making any payment.
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <footer style={{ background:"#010a18", borderTop:"1px solid rgba(255,255,255,.05)", marginTop:"60px" }}
              className="text-white py-10 px-6">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
              background: "linear-gradient(155deg, #025194, #68a4d7)",
              color: "#010f1f",
            }}>
                    <MdDirectionsCar size={18} />
                  </div>
                  <div>
                    <div className="font-black text-lg">The Steering</div>
                    <div className="text-blue-400 text-[9px] font-semibold tracking-widest uppercase">Pakistan's #1 Car App</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">© 2026 The Steering. All rights reserved.</p>
                <p className="text-gray-700 text-xs">Made with ❤️ in Pakistan 🇵🇰</p>
              </div>
            </footer>

       
          </>
        );
      })()}
    </div>
  );
}