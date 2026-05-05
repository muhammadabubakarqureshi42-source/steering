import { useState, useEffect,  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  
} from "react-icons/fi";
import {
  FaGooglePlay,
  FaShieldAlt,
  
} from "react-icons/fa";
import {
  MdVerified,
  
  MdDirectionsCar,
  MdSecurity,
} from "react-icons/md";
import {
  RiCarLine,
  RiPriceTag3Line,
  RiCustomerServiceLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import {
  BsFillStarFill,
  BsShieldCheck,
} from "react-icons/bs";
import {
  HiOutlineBadgeCheck,
  HiSparkles,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";



const TERMS_SECTIONS = [
    {
    id: "acceptance",
    num: "01",
    title: "Acceptance of Terms",
    icon: <BsShieldCheck size={22} />,
    content: [
      {
        heading: "Agreement to Terms",
        text: `By downloading, installing, or using The Steering mobile application ("App") or visiting our website ("Platform"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use our Platform.`,
      },
      {
        heading: "Eligibility",
        text: `The Steering is available to users who are at least 18 years of age or have the legal capacity to enter into contracts under applicable Pakistani law. By using the Platform, you represent and warrant that you meet these eligibility requirements.`,
      },
      {
        heading: "Updates to Terms",
        text: `We reserve the right to modify these Terms at any time. We will notify registered users of significant changes via in-app notification or email. Your continued use of The Steering after changes are posted constitutes your acceptance of the updated Terms.`,
      },
    ],
  },
  {
      id: "platform-use",
      num: "02",
    title: "Use of the Platform",
    icon: <RiCarLine size={22} />,
    content: [
      {
        heading: "Account Registration",
        text: `To access certain features of The Steering, you must create an account using your phone number or Google account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.`,
    },
    {
        heading: "Permitted Use",
        text: `The Steering is designed exclusively for lawful buying, selling, and exploration of vehicles in Pakistan. You may use our Platform to browse verified car listings, post your own vehicle for sale, connect with buyers and sellers, access inspection services, and communicate through in-app messaging.`,
    },
      {
        heading: "Prohibited Activities",
        text: `You agree not to post false, misleading, or fraudulent vehicle listings; impersonate any person or entity; use the Platform for any unlawful purpose; attempt to gain unauthorized access to our systems; scrape, harvest, or collect data from the Platform without written permission; interfere with the Platform's functionality; or engage in any conduct that restricts or inhibits any other user's enjoyment of the Platform.`,
      },
    ],
},
  {
    id: "listings",
    num: "03",
    title: "Listings & Transactions",
    icon: <RiPriceTag3Line size={22} />,
    content: [
      {
        heading: "Seller Responsibilities",
        text: `As a seller on The Steering, you are solely responsible for the accuracy and completeness of your vehicle listing. You must ensure that all information — including make, model, year, mileage, condition, price, and photographs — is truthful and not misleading. You must have the legal right to sell the vehicle you list.`,
    },
    {
        heading: "Verification Process",
        text: `The Steering employs a trust verification process for listings to maintain quality standards. While we strive to verify listings, we do not guarantee the accuracy of all information provided by sellers. Buyers are encouraged to independently verify vehicle details and conduct due diligence before completing any transaction.`,
      },
      {
        heading: "Transactions & Payments",
        text: `The Steering facilitates connections between buyers and sellers but is not a party to any transaction. All financial transactions between buyers and sellers are conducted independently. The Steering does not handle payments, hold funds, or bear responsibility for transaction disputes unless specifically provided through a designated payment or escrow feature.`,
      },
      {
        heading: "Fees & Pricing",
        text: `Creating an account and basic browsing on The Steering is free. We may charge fees for premium listing features, featured placements, or value-added services. Any applicable fees will be clearly disclosed before you are charged. We reserve the right to modify our fee structure with reasonable notice to users.`,
    },
],
},
{
    id: "inspection",
    num: "04",
    title: "Inspection & Mechanic Services",
    icon: <MdVerified size={22} />,
    content: [
      {
        heading: "Inspection Reports",
        text: `The Steering offers vehicle inspection services conducted by certified third-party experts. Inspection reports are provided for informational purposes to assist buyers in making informed decisions. Reports reflect the condition of the vehicle at the time of inspection and do not constitute a warranty or guarantee of vehicle condition.`,
    },
    {
        heading: "Mechanic Services",
        text: `Mechanic and maintenance services accessible through The Steering are provided by independent service providers. The Steering acts as a platform to connect users with these providers and does not employ, control, or supervise the service providers directly. The quality, safety, and outcome of services are the responsibility of the respective service providers.`,
      },
      {
        heading: "Limitation of Liability for Services",
        text: `To the maximum extent permitted by law, The Steering shall not be liable for any damages, losses, or claims arising from inspection reports or mechanic services. You agree to resolve any disputes regarding these services directly with the relevant service provider.`,
      },
    ],
  },
  {
      id: "content",
      num: "05",
    title: "User Content & Conduct",
    icon: <BsShieldCheck size={22} />,
    content: [
      {
        heading: "Your Content",
        text: `When you post listings, photos, reviews, messages, or any other content on The Steering ("User Content"), you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute that content solely for operating and improving the Platform. You retain ownership of your User Content.`,
    },
      {
          heading: "Content Standards",
        text: `All User Content must be accurate, lawful, and not infringing on any third-party rights. You must not post content that is defamatory, offensive, obscene, or violates any applicable law. Vehicle photographs must genuinely represent the listed vehicle and must not contain watermarks, contact information, or third-party branding beyond manufacturer logos.`,
    },
    {
        heading: "In-App Messaging",
        text: `Our in-app messaging system is provided to facilitate legitimate communications between buyers and sellers. You agree not to use messaging to send spam, unsolicited advertisements, or harmful content. The Steering reserves the right to monitor communications for safety and compliance purposes in accordance with our Privacy Policy.`,
    },
    ],
  },
  {
      id: "privacy",
      num: "06",
    title: "Privacy & Data",
    icon: <FaShieldAlt size={22} />,
    content: [
      {
        heading: "Data Collection",
        text: `The Steering collects personal information including your name, phone number, email address, and device information when you register or use our Platform. We also collect vehicle listing data, transaction history, and usage analytics to improve our services. Our complete Privacy Policy governs how we collect, use, and protect your data.`,
    },
    {
        heading: "Data Security",
        text: `We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of electronic transmission or storage is completely secure. By using The Steering, you acknowledge and accept this inherent risk.`,
    },
      {
        heading: "Data Sharing",
        text: `The Steering does not sell your personal information to third parties. We may share data with trusted service providers who assist in operating our Platform, conducting our business, or serving our users — subject to confidentiality obligations. We may also disclose information when required by law or to protect our rights.`,
    },
    ],
  },
  {
      id: "intellectual-property",
    num: "07",
    title: "Intellectual Property",
    icon: <HiOutlineBadgeCheck size={22} />,
    content: [
        {
            heading: "Our IP",
            text: `The Steering name, logo, app design, features, and all associated content are the intellectual property of The Steering and are protected by applicable Pakistani and international copyright, trademark, and other intellectual property laws. You may not copy, reproduce, modify, or distribute any part of our Platform without written permission.`,
        },
        {
            heading: "Trademarks",
        text: `"The Steering," our logo, and "Pakistan's #1 Car App" are trademarks of The Steering. Unauthorized use of our trademarks in any manner that may cause confusion, deception, or dilution of our brand is strictly prohibited.`,
      },
      {
        heading: "Third-Party Content",
        text: `The Steering may display third-party logos, brand names, or vehicle imagery for informational purposes. All such marks remain the property of their respective owners. The presence of third-party marks does not imply endorsement or affiliation with The Steering.`,
    },
    ],
  },
  {
      id: "disclaimers",
      num: "08",
    title: "Disclaimers & Limitation of Liability",
    icon: <MdSecurity size={22} />,
    content: [
      {
        heading: "Platform Provided As-Is",
        text: `The Steering is provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied. We do not warrant that the Platform will be uninterrupted, error-free, or free of harmful components.`,
      },
      {
        heading: "No Endorsement of Listings",
        text: `The Steering does not endorse, guarantee, or assume responsibility for any vehicle listing, user, seller, buyer, or transaction facilitated through the Platform. We are a marketplace platform and are not a party to private transactions between users.`,
      },
      {
        heading: "Limitation of Liability",
        text: `To the fullest extent permitted by applicable law, The Steering and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Platform. Our total liability to you for any claim shall not exceed the amount you have paid to us in the 12 months preceding the claim.`,
      },
    ],
},
  {
      id: "termination",
    num: "09",
    title: "Termination",
    icon: <RiShieldCheckLine size={22} />,
    content: [
      {
          heading: "Termination by You",
          text: `You may delete your account and stop using The Steering at any time through the app settings or by contacting our support team. Deletion of your account will remove your personal profile and active listings, though transaction history may be retained as required by law.`,
        },
        {
            heading: "Termination by Us",
            text: `The Steering reserves the right to suspend or terminate your account at our discretion, with or without notice, if you violate these Terms or engage in conduct that we determine to be harmful to users, third parties, or the Platform's integrity. We may also terminate inactive accounts after extended periods of non-use.`,
      },
      {
        heading: "Effect of Termination",
        text: `Upon termination, your right to access and use the Platform ceases immediately. Provisions of these Terms that by their nature should survive termination — including intellectual property, disclaimers, limitation of liability, and governing law — shall survive termination.`,
    },
],
  },
  {
      id: "governing-law",
    num: "10",
    title: "Governing Law & Disputes",
    icon: <BsFillStarFill size={22} />,
    content: [
      {
        heading: "Governing Law",
        text: `These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Karachi, Pakistan.`,
      },
      {
        heading: "Dispute Resolution",
        text: `We encourage users to contact us directly to resolve any disputes before pursuing formal legal proceedings. Our support team is committed to addressing your concerns promptly and fairly. For disputes that cannot be resolved informally, the parties agree to submit to binding arbitration in Karachi, Pakistan.`,
    },
      {
          heading: "Contact Us",
          text: `For questions, concerns, or legal notices regarding these Terms, please contact us at: legal@thesteering.pk | The Steering Support Team, Karachi, Pakistan. We aim to respond to all legal inquiries within 5 business days.`,
        },
    ],
  },
];

export default function TermsAndConditions() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("acceptance");

    useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" }
    );
    TERMS_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white text-gray-800 overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet" />
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #010f1f; }
        ::-webkit-scrollbar-thumb { background: #025194; border-radius: 3px; }
        .text-gradient { background: linear-gradient(135deg, #025194 0%, #68a4d7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .noise-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; opacity: 0.015; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .shimmer-text { background: linear-gradient(90deg, #025194 0%, #fff 40%, #025194 60%, #68a4d7 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: #025194; transition: width 0.3s ease; border-radius: 2px; }
        .nav-link:hover::after { width: 100%; }
        .sidebar-link { transition: all 0.2s ease; }
        .sidebar-link:hover { color: #68a4d7; padding-left: 8px; }
        .sidebar-link.active { color: #68a4d7; padding-left: 8px; border-left: 2px solid #68a4d7; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float { animation: float 3.5s ease-in-out infinite; }
      `}</style>

      <div className="noise-overlay" />

      {/* ── NAVBAR ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12"
        style={{
          paddingTop: scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
          background: scrolled ? "rgba(1,15,31,0.95)" : "rgba(1,15,31,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
               
          <div  
          className="flex items-center gap-3">
            <motion.div onClick={() => navigate("/")}  whileHover={{ rotate: 5, scale: 1.1 }} className="relative">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-lg"
                style={{ background: "linear-gradient(135deg, #025194, #68a4d7)", color: "#010f1f" }}
              >
                <MdDirectionsCar size={22} />
              </div>
              <div className="absolute inset-0 rounded-xl opacity-40 blur-md" style={{ background: "#025194" }} />
            </motion.div>
            <div>
              <span  className="text-white font-black text-xl tracking-tight">The Steering</span>
              <div className="text-[#68a4d7] text-[9px] font-semibold tracking-[0.2em] uppercase -mt-1">Pakistan's #1 Car App</div>
            </div>
          </div>


          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #748796" }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200"
            style={{ background: "linear-gradient(155deg, #025194, #68a4d7)", color: "#010f1f" }}
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
            style={{ background: "rgba(1,20,40,0.98)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}
          >
            
            <div className="mt-2 pt-2 border-t border-white/10">
              <button
                className="w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl text-sm"
                style={{ background: "linear-gradient(135deg, #025194, #68a4d7)", color: "#010f1f" }}
              >
                <FaGooglePlay /> Get App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO HEADER ── */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #010a18 0%, #011a35 35%, #022d5c 70%, #033a7a 100%)" }}
      >
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #025194 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-[5%] left-[0%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #0369a1 0%, transparent 70%)", filter: "blur(50px)" }} />
        </div>
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
            style={{ background: "#81a9cb", color: "#025194", border: "1px solid rgb(113 158 196)" }}
          >
            <FaShieldAlt size={12} />
            Legal Document — Last Updated: January 2026
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
          >
            Terms &{" "}
            <span className="shimmer-text">Conditions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(147,197,253,0.7)" }}
          >
            Please read these Terms carefully before using The Steering — Pakistan's #1 Car Marketplace.
            By accessing our platform, you agree to be bound by these Terms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-5"
          >
            {[
              { icon: <BsShieldCheck size={14} />, text: "User Protection" },
              { icon: <MdVerified size={14} />, text: "Transparent Policies" },
              { icon: <RiCustomerServiceLine size={14} />, text: "Support Available" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2" style={{ color: "rgba(147,197,253,0.6)" }}>
                <span className="text-[#68a4d7]">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 px-6" style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-12 items-start">


            {/* ── TERMS CONTENT ── */}
            <div className="flex-1 min-w-0">
              {/* Intro notice */}
              <motion.div
                {...fadeUp(0)}
                className="rounded-2xl p-6 mb-10"
                style={{
                  background: "linear-gradient(135deg, #010a18 0%, #022d5c 100%)",
                  border: "1px solid rgba(104,164,215,0.2)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(104,164,215,0.15)", color: "#68a4d7" }}
                  >
                    <HiSparkles size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm mb-1">Important Notice</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(147,197,253,0.7)" }}>
                      These Terms govern your use of The Steering — Pakistan's leading car marketplace with 50,000+ active listings,
                      200,000+ happy users, and coverage across 35+ cities. By continuing to use our platform, you confirm
                      your acceptance of these Terms in full.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Terms sections */}
              <div className="space-y-10">
                {TERMS_SECTIONS.map((section, sIdx) => (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    {...fadeUp(0.05 * sIdx)}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(2,81,148,0.08)",
                      boxShadow: "0 4px 24px rgba(2,81,148,0.05)",
                    }}
                  >
                    {/* Section header */}
                    <div
                      className="px-8 py-6 flex items-center gap-4"
                      style={{
                        background: "linear-gradient(135deg, #010a18 0%, #022d5c 100%)",
                        borderBottom: "1px solid rgba(104,164,215,0.15)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(104,164,215,0.15)", color: "#68a4d7" }}
                      >
                        {section.icon}
                      </div>
                      <div>
                        <div className="text-[#68a4d7] text-xs font-black tracking-widest uppercase mb-0.5">
                          Section {section.num}
                        </div>
                        <h2 className="text-white font-black text-xl leading-tight">{section.title}</h2>
                      </div>
                    </div>

                    {/* Section body */}
                    <div className="px-8 py-7 space-y-6">
                      {section.content.map((item, iIdx) => (
                        <div key={iIdx} className={iIdx > 0 ? "pt-6 border-t" : ""} style={{ borderColor: "rgba(2,81,148,0.06)" }}>
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="w-1.5 h-5 rounded-full"
                              style={{ background: "linear-gradient(180deg, #025194, #68a4d7)" }}
                            />
                            <h3 className="font-bold text-gray-800 text-base">{item.heading}</h3>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed pl-4">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}