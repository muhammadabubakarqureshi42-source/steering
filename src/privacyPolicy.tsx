import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiLock,
  FiUserCheck,
  FiGlobe,
} from "react-icons/fi";
import {
  FaGooglePlay,
  FaShieldAlt,
  FaCookieBite,
  FaUserSecret,
  FaChild,
} from "react-icons/fa";
import {
  MdDirectionsCar,
  MdOutlinePrivacyTip,
  MdDataUsage,
} from "react-icons/md";
import {
  RiCustomerServiceLine,
  RiShareLine,
} from "react-icons/ri";
import {
  BsDatabase,
} from "react-icons/bs";
import {
  HiSparkles,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";


const PRIVACY_SECTIONS = [
  {
    id: "overview",
    num: "01",
    title: "Overview & Scope",
    icon: <MdOutlinePrivacyTip size={22} />,
    content: [
      {
        heading: "Our Commitment to Privacy",
        text: `The Steering ("we," "us," or "our") is committed to protecting your personal information. This Privacy & Policy explains how we collect, use, store, share, and protect your data when you use The Steering mobile application or website (collectively, the "Platform"). We encourage you to read this policy carefully to understand our practices.`,
      },
      {
        heading: "Scope of This Policy",
        text: `This Privacy & Policy applies to all users of The Steering Platform across Pakistan, including buyers, sellers, and visitors. It covers data collected through our mobile application (Android and iOS), our website, in-app messaging, vehicle inspection bookings, mechanic service requests, and any other feature or service we offer.`,
      },
      {
        heading: "Policy Updates",
        text: `We may update this Privacy & Policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will notify you through an in-app notification or via email. The date of the most recent update is displayed at the top of this page. Continued use of the Platform after updates constitutes acceptance of the revised policy.`,
      },
    ],
  },
  {
    id: "data-collected",
    num: "02",
    title: "Information We Collect",
    icon: <BsDatabase size={22} />,
    content: [
      {
        heading: "Information You Provide Directly",
        text: `When you register or use The Steering, you may provide us with: your full name, phone number, and email address; login credentials (or Google account authorization); vehicle listing details including make, model, year, mileage, price, description, and photographs; payment and billing information for premium features; messages and communications sent through our in-app chat; and feedback, reviews, or support requests you submit to us.`,
      },
      {
        heading: "Information Collected Automatically",
        text: `When you use our Platform, we automatically collect certain technical information, including: your device type, operating system, and unique device identifiers; IP address and approximate geographic location (city/region level); app usage data such as screens viewed, features accessed, search queries, and time spent; crash reports and error logs to improve app stability; and referral source data indicating how you found The Steering.`,
      },
      {
        heading: "Location Information",
        text: `The Steering may request access to your device's location to show nearby listings, connect you with local mechanics and inspection services, and improve search relevance based on your city. Location access is optional — you may deny this permission and still use core features of the Platform, though some location-based features may be limited.`,
      },
      {
        heading: "Information from Third Parties",
        text: `If you sign in via Google, we receive basic profile information (name, email, profile photo) as authorized by you during the OAuth sign-in process. We may also receive information from analytics partners, advertising networks, and fraud prevention services to improve the quality and security of our Platform.`,
      },
    ],
  },
  {
    id: "data-use",
    num: "03",
    title: "How We Use Your Information",
    icon: <MdDataUsage size={22} />,
    content: [
      {
        heading: "Platform Operations",
        text: `We use your information primarily to operate and provide The Steering Platform — including creating and managing your account, displaying and managing your vehicle listings, facilitating communications between buyers and sellers through in-app chat, processing bookings for inspection and mechanic services, and delivering customer support when needed.`,
      },
      {
        heading: "Personalization & Recommendations",
        text: `Your search history, browsing behavior, and location data help us personalize your experience. This includes showing you relevant car listings in your city, recommending vehicles that match your preferences, and surfacing inspection or mechanic services near you. Personalization makes The Steering faster and more useful for your specific needs.`,
      },
      {
        heading: "Safety, Trust & Verification",
        text: `We use your data to verify listings, detect fraudulent activity, prevent scams, and maintain the integrity of our marketplace. This includes analyzing listing content and user behavior patterns to flag suspicious activity, conducting identity verification for sellers where required, and investigating reports from other users.`,
      },
      {
        heading: "Communications",
        text: `We may contact you via push notification, SMS, or email for important account and transaction updates, security alerts and login verifications, new feature announcements and app updates, promotional offers and seasonal campaigns (you may opt out at any time), and responses to support requests you submit.`,
      },
      {
        heading: "Analytics & Improvement",
        text: `Aggregated and anonymized usage data helps us understand how users interact with The Steering, which features are most valuable, where users encounter friction, and how to improve our app. We use tools such as Firebase Analytics and Crashlytics for these purposes.`,
      },
    ],
  },
  {
    id: "data-sharing",
    num: "04",
    title: "How We Share Your Information",
    icon: <RiShareLine size={22} />,
    content: [
      {
        heading: "With Other Users",
        text: `Certain information in your vehicle listings is visible to all Platform users, including vehicle details, photographs, asking price, and your general location (city level). Your phone number or contact details are only shared with other users when you explicitly initiate contact or choose to display them in your listing.`,
      },
      {
        heading: "With Service Providers",
        text: `We share data with trusted third-party vendors who help us operate the Platform, including cloud hosting providers, analytics and crash-reporting tools, SMS and email delivery services, payment processors for premium features, and inspection and mechanic service partners. All service providers are bound by confidentiality agreements and may only use your data to perform services on our behalf.`,
      },
      {
        heading: "For Legal Compliance",
        text: `We may disclose your information when required to do so by law, regulation, or valid legal process; to protect the rights, property, or safety of The Steering, our users, or the public; to investigate or respond to fraud, security threats, or violations of our Terms & Conditions; or in connection with a merger, acquisition, or sale of business assets, with prior notice to affected users where possible.`,
      },
      {
        heading: "We Do Not Sell Your Data",
        text: `The Steering does not sell, rent, or trade your personal information to advertisers or other third parties for their own marketing purposes. Any data-sharing arrangements are strictly for the purpose of operating and improving our Platform as described in this Privacy & Policy.`,
      },
    ],
  },
  {
    id: "data-storage",
    num: "05",
    title: "Data Storage & Security",
    icon: <FiLock size={22} />,
    content: [
      {
        heading: "Where Your Data Is Stored",
        text: `Your data is stored on secure servers hosted by reputable cloud providers operating in compliance with internationally recognized data protection standards. While our primary operations are Pakistan-based, some data may be processed or stored on servers located outside Pakistan by our technology partners. In such cases, we ensure adequate data protection safeguards are in place.`,
      },
      {
        heading: "Security Measures",
        text: `We implement industry-standard security measures to protect your personal information, including end-to-end encryption for in-app messages, HTTPS/TLS encryption for all data transmitted between your device and our servers, secure password hashing, access controls limiting employee access to personal data on a need-to-know basis, and regular security audits and vulnerability assessments.`,
      },
      {
        heading: "Data Retention",
        text: `We retain your personal information for as long as your account is active or as needed to provide you with services. If you delete your account, we will remove your personal profile and active listings within 30 days. Some data — such as transaction records and communications — may be retained for up to 3 years for legal, compliance, and dispute resolution purposes.`,
      },
      {
        heading: "Data Breach Response",
        text: `In the unlikely event of a data breach that may affect your personal information, we will notify you and relevant authorities in accordance with applicable Pakistani data protection laws. We maintain an incident response plan to contain, assess, and remediate any security incidents promptly.`,
      },
    ],
  },
  {
    id: "cookies",
    num: "06",
    title: "Cookies & Tracking",
    icon: <FaCookieBite size={22} />,
    content: [
      {
        heading: "What Are Cookies",
        text: `Cookies are small text files stored on your device when you visit our website. The Steering uses cookies and similar tracking technologies (such as mobile device identifiers and SDKs) to keep you logged in between sessions, remember your search preferences and filters, analyze traffic and usage patterns on our website, and deliver relevant in-app experiences.`,
      },
      {
        heading: "Types of Cookies We Use",
        text: `We use essential cookies that are necessary for the Platform to function correctly; functional cookies that remember your preferences and settings; analytics cookies (e.g., Google Analytics, Firebase) that help us understand how the Platform is used; and performance cookies that help us identify and fix technical issues.`,
      },
      {
        heading: "Managing Cookies",
        text: `You can manage cookie preferences through your browser or device settings. Disabling cookies may affect certain features of our website. For the mobile app, you can manage tracking permissions through your device's app settings. Opting out of analytics tracking will not affect your ability to use core Platform features.`,
      },
    ],
  },
  {
    id: "your-rights",
    num: "07",
    title: "Your Privacy Rights",
    icon: <FiUserCheck size={22} />,
    content: [
      {
        heading: "Access & Portability",
        text: `You have the right to request a copy of the personal information we hold about you. You may access most of your data directly through the app's account settings. For a complete data export, contact us at privacy@thesteering.pk. We will respond to your request within 30 days.`,
      },
      {
        heading: "Correction of Data",
        text: `If any personal information we hold about you is inaccurate or incomplete, you have the right to request correction. You can update most profile information directly within the app. For data corrections that require our assistance, please contact our support team.`,
      },
      {
        heading: "Deletion of Data",
        text: `You may request deletion of your personal data at any time by deleting your account within the app or by contacting us directly. Upon verified request, we will delete your personal profile, active listings, and associated data within 30 days, subject to retention obligations required by law.`,
      },
      {
        heading: "Opt-Out of Communications",
        text: `You may opt out of promotional emails and push notifications at any time through the notification settings within the app or by clicking the "unsubscribe" link in any promotional email. Please note that we may still send you transactional messages (such as account security alerts) that are necessary for Platform operation.`,
      },
      {
        heading: "Complaints",
        text: `If you believe your privacy rights have been violated, you may lodge a complaint with us at privacy@thesteering.pk. We take all complaints seriously and will investigate and respond within 15 business days. You also have the right to escalate unresolved complaints to the relevant data protection authority in Pakistan.`,
      },
    ],
  },
  {
    id: "children",
    num: "08",
    title: "Children's Privacy",
    icon: <FaChild size={22} />,
    content: [
      {
        heading: "Age Restriction",
        text: `The Steering is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at privacy@thesteering.pk and we will take steps to delete that information.`,
      },
      {
        heading: "Parental Controls",
        text: `We encourage parents and guardians to monitor and guide their children's online activity. If you discover that a minor has created an account on The Steering, we ask that you contact us right away so we can promptly deactivate the account and remove associated data from our systems.`,
      },
    ],
  },
  {
    id: "third-party",
    num: "09",
    title: "Third-Party Links & Services",
    icon: <FiGlobe size={22} />,
    content: [
      {
        heading: "External Links",
        text: `The Steering Platform may contain links to third-party websites, services, or resources — such as vehicle financing providers, insurance companies, or automotive news sources. These third-party sites have their own privacy policies, and we are not responsible for their content, practices, or privacy practices. We encourage you to review the Privacy & Policy of any third-party site you visit.`,
      },
      {
        heading: "Integrated Services",
        text: `Our Platform integrates certain third-party services to enhance functionality. These include Google Sign-In for authentication, Firebase for analytics and crash reporting, and WhatsApp for optional buyer-seller communication. These integrations are governed by the respective third-party providers' privacy policies, which we encourage you to review.`,
      },
      {
        heading: "Mechanic & Inspection Partners",
        text: `When you book an inspection or mechanic service through The Steering, your relevant contact and vehicle information is shared with the assigned service partner to fulfill your request. These partners are contractually required to protect your information and use it only for the purpose of providing the service you requested.`,
      },
    ],
  },
  {
    id: "contact",
    num: "10",
    title: "Contact & Data Controller",
    icon: <FiPhone size={22} />,
    content: [
      {
        heading: "Data Controller",
        text: `The Steering is the data controller responsible for your personal information collected through our Platform. We are registered and operate under the laws of the Islamic Republic of Pakistan. All data-related decisions are made by The Steering's Privacy & Compliance team based in Karachi, Pakistan.`,
      },
      {
        heading: "How to Reach Us",
        text: `For any privacy-related questions, requests, or concerns — including data access, correction, deletion, and complaints — please contact our Privacy Team at: Email: privacy@thesteering.pk | Support: support@thesteering.pk | The Steering Privacy Team, Karachi, Sindh, Pakistan. We aim to respond to all privacy inquiries within 10 business days.`,
      },
      {
        heading: "Effective Date",
        text: `This Privacy & Policy is effective as of January 1, 2026, and supersedes all prior versions. By using The Steering Platform after this date, you agree to the collection and use of your information as described in this policy. Thank you for trusting The Steering — Pakistan's #1 Car Marketplace.`,
      },
    ],
  },
];

export default function PrivacyPolicy() {
        const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -60% 0px" }
    );
    PRIVACY_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  });

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="bg-white text-gray-800 overflow-x-hidden">
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
          <div className="flex items-center gap-3">
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
              <span className="text-white font-black text-xl tracking-tight">The Steering</span>
              <div className="text-[#68a4d7] text-[9px] font-semibold tracking-[0.2em] uppercase -mt-1">
                Pakistan's #1 Car App
              </div>
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
            style={{
              background: "rgba(1,20,40,0.98)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
            }}
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
        style={{
          background: "linear-gradient(160deg, #010a18 0%, #011a35 35%, #022d5c 70%, #033a7a 100%)",
        }}
      >
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{ background: "radial-gradient(circle, #025194 0%, transparent 70%)", filter: "blur(40px)" }}
          />
          <div
            className="absolute bottom-[5%] left-[0%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #0369a1 0%, transparent 70%)", filter: "blur(50px)" }}
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
            Privacy {" "}
            <span className="shimmer-text">& Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(147,197,253,0.7)" }}
          >
            Your privacy matters to us. Learn how The Steering — Pakistan's #1 Car Marketplace — collects,
            uses, and protects your personal information.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-5"
          >
            {[
              { icon: <FiLock size={14} />, text: "Data Encrypted" },
              { icon: <FaUserSecret size={14} />, text: "Never Sold" },
              { icon: <RiCustomerServiceLine size={14} />, text: "You're in Control" },
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

          

            {/* ── PRIVACY CONTENT ── */}
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
                    <p className="font-bold text-white text-sm mb-1">Your Data, Your Trust</p>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(147,197,253,0.7)" }}>
                      The Steering serves 200,000+ users across 35+ cities in Pakistan. We take our responsibility
                      to protect your personal information seriously. This policy details exactly what data we collect,
                      why we collect it, and how you stay in control.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Privacy sections */}
              <div className="space-y-10">
                {PRIVACY_SECTIONS.map((section, sIdx) => (
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
                        <div
                          key={iIdx}
                          className={iIdx > 0 ? "pt-6 border-t" : ""}
                          style={{ borderColor: "rgba(2,81,148,0.06)" }}
                        >
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